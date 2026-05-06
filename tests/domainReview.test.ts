function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 80, slack: 33, drag: 14, confidence: 56 };
equal(domainReviewScore(item), 207);
equal(domainReviewLane(item), "ship");
