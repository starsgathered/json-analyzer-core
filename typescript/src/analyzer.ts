import { JSONStats, JSONAnalysis } from './types';

export class JSONAnalyzer {
    static analyze(json: unknown, raw: string): JSONAnalysis {
        const stats: JSONStats = {
            objects: 0,
            arrays: 0,
            keys: 0,
            depth: 0,
            totalBytes: raw.length,
            maxArray: 0,
            minArray: Infinity,
            avgKeys: 0
        };
        const keysSet = new Set<string>();

        function walk(obj: unknown, depth = 1): void {
            stats.depth = Math.max(stats.depth, depth);
            if (Array.isArray(obj)) {
                stats.arrays++;
                stats.maxArray = Math.max(stats.maxArray, obj.length);
                stats.minArray = Math.min(stats.minArray, obj.length);
                obj.forEach((item) => walk(item, depth + 1));
            } else if (obj && typeof obj === 'object') {
                stats.objects++;
                Object.entries(obj).forEach(([k, v]) => {
                    keysSet.add(k);
                    walk(v, depth + 1);
                });
                stats.keys += Object.keys(obj).length;
            }
        }

        walk(json);
        stats.minArray = stats.minArray === Infinity ? 0 : stats.minArray;
        stats.avgKeys = stats.objects ? parseFloat((stats.keys / stats.objects).toFixed(1)) : 0;

        return { stats, keys: [...keysSet].sort() };
    }
}