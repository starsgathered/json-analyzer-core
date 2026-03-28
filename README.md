## JSON Analyzer Core

This core module provides a robust engine for deep-traversal analysis of JSON structures. It is designed to extract structural metadata, nesting metrics, and key-space summaries from any valid JSON input.

The engine uses a recursive walking algorithm to calculate complexity scores and statistical averages, making it ideal for debugging large datasets or optimizing API payloads.

---

### 📊 Key Metrics Tracked
The analyzer processes raw JSON strings and parsed objects to provide:
* **Structural Counts:** Total number of objects and arrays.
* **Nesting Depth:** Maximum level of recursion found in the tree.
* **Key Statistics:** Total key count, unique key list, and average keys per object.
* **Array Metrics:** Minimum and maximum array lengths found within the structure.
* **Payload Size:** Total byte count of the raw input.

---

### 🛠 Implementation Overview

The core logic is built around a recursive "walk" function that visits every node in the JSON tree.

| Component | Responsibility |
| :--- | :--- |
| **`JSONAnalyzer`** | The static execution class that orchestrates the data traversal. |
| **`walk()`** | Internal recursive function that increments stats based on node types. |
| **`JSONStats`** | Interface defining the numerical output of the analysis. |
| **`JSONAnalysis`** | The final return object containing both stats and a sorted list of unique keys. |

---

### 🚀 Usage Example (TypeScript)

```typescript
import { JSONAnalyzer } from '@starsgathered/json-analyzer-core';

const rawData = '{"user": {"id": 1, "tags": ["admin", "dev"]}, "active": true}';
const jsonData = JSON.parse(rawData);

const result = JSONAnalyzer.analyze(jsonData, rawData);

console.log(result.stats.depth);    // Output: 3
console.log(result.keys);           // Output: ['active', 'id', 'tags', 'user']
```

---
