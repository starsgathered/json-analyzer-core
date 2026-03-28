# JSON Analyzer Typescript

Professional JSON analysis library in **TypeScript** — fast, strictly typed, DOM-free, fully functional.  
Analyze JSON files or objects to get **object count, array count, max depth, unique keys, array lengths, and more**.

---

## Features

- Fully **TypeScript typed** with strict mode
- Returns **statistics and unique keys** from any JSON object
- Lightweight, **DOM-free**, can be used in **Node.js** or **browser**
- Supports nested objects and arrays
- Fully testable with Jest
- Scalable and maintainable code

---

## Installation

```bash
npm install json-analyzer-core
# or
yarn add json-analyzer-core
````

---

## Usage

### Import the library

```ts
import { JSONAnalyzer } from 'json-analyzer-core';
```

### Analyze JSON string

```ts
const rawJSON = '{"a":1,"b":[1,2,3],"c":{"d":"text","e":null}}';
const jsonObject = JSON.parse(rawJSON);

const result = JSONAnalyzer.analyze(jsonObject, rawJSON);

console.log(result.stats);
/*
{
  objects: 2,
  arrays: 1,
  keys: 5,
  depth: 3,
  totalBytes: 49,
  maxArray: 3,
  minArray: 3,
  avgKeys: 2.5
}
*/

console.log(result.keys);
// ['a', 'b', 'c', 'd', 'e']
```

---

### Types

```ts
import { JSONStats, JSONAnalysis } from 'json-analyzer-core';

interface JSONStats {
  objects: number;
  arrays: number;
  keys: number;
  depth: number;
  totalBytes: number;
  maxArray: number;
  minArray: number;
  avgKeys: number;
}

interface JSONAnalysis {
  stats: JSONStats;
  keys: string[];
}
```

---

## Example in Node.js

```ts
import fs from 'fs';
import { JSONAnalyzer } from 'json-analyzer-core';

const fileData = fs.readFileSync('data.json', 'utf-8');
const parsed = JSON.parse(fileData);

const analysis = JSONAnalyzer.analyze(parsed, fileData);

console.log('Stats:', analysis.stats);
console.log('Unique Keys:', analysis.keys);
```

---

## Example in Browser (ESM)

```ts
import { JSONAnalyzer } from './dist/index.js';

const jsonStr = '{"users":[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]}';
const parsed = JSON.parse(jsonStr);

const analysis = JSONAnalyzer.analyze(parsed, jsonStr);
console.log(analysis.stats);
console.log(analysis.keys);
```

---

## Testing

```bash
npm test
```

Example test is included in `test/analyzer.test.ts` using Jest.

---

## Development

* Build TypeScript:

```bash
npm run build
```

* Lint and fix issues:

```bash
npm run lint
npm run lint:fix
```

---

## Notes

* All processing happens locally — **100% privacy**
* Works with **any valid JSON**
* Strict TypeScript ensures **safe usage** in large projects

---

## License

MIT License

