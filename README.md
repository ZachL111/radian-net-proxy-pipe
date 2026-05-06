# radian-net-proxy-pipe

`radian-net-proxy-pipe` is a compact TypeScript repository for networking, centered on this goal: Design a TypeScript verification harness for proxy systems, covering protocol validation, framed sample traffic, and failure-oriented tests.

## Project Rationale

The point is to make a small domain rule concrete enough that a reader can change it and immediately see what broke.

## Radian Net Proxy Pipe Review Notes

For a quick review, compare `packet span` with `retry pressure` before reading the middle cases.

## Feature Set

- `fixtures/domain_review.csv` adds cases for packet span and retry pressure.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/radian-net-proxy-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `packet span` and `retry pressure`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Architecture

The core code exposes a scoring path and the added review layer uses `signal`, `slack`, `drag`, and `confidence`. The domain terms are `packet span`, `retry pressure`, `route drift`, and `socket risk`.

The TypeScript addition stays small enough to inspect in one sitting.

## Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Test Command

The verifier is intentionally local. It should fail if the fixture score math, lane assignment, or language-specific test drifts.

## Next Improvements

No external service is required. A deeper version would add more negative cases and a clearer boundary around invalid input.
