import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
  {
    "name": "case_1",
    "demand": 57,
    "capacity": 72,
    "latency": 21,
    "risk": 8,
    "weight": 10,
    "score": 128,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 65,
    "capacity": 101,
    "latency": 18,
    "risk": 9,
    "weight": 8,
    "score": 164,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 97,
    "capacity": 86,
    "latency": 26,
    "risk": 24,
    "weight": 9,
    "score": 96,
    "decision": "review"
  }
];

for (const item of cases) {
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
