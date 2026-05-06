import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 80, slack: 33, drag: 14, confidence: 56 };
assert.equal(domainReviewScore(item), 207);
assert.equal(domainReviewLane(item), "ship");
