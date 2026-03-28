export interface JSONStats {
    objects: number;
    arrays: number;
    keys: number;
    depth: number;
    totalBytes: number;
    maxArray: number;
    minArray: number;
    avgKeys: number;
}

export interface JSONAnalysis {
    stats: JSONStats;
    keys: string[];
}