# ClaimLink Evidence Demo

A controlled public evidence repository for demonstrating CommitPay's
agreement-bound verification workflow.

This repository contains small, reviewable artifacts for the ClaimLink
Frontend, Backend, and Presentation deliverables. Pull-request metadata and the
`evidence-check` workflow provide genuine external evidence for CommitPay.

## Demo identity context

Single-operator demo: one GitHub account supplies external evidence for three
simulated team roles. CommitPay still verifies each deliverable independently
against its locked policy. Multi-user identity onboarding is outside this
hackathon scope.

The visible CommitPay roles remain Dave (Frontend), Eniola (Backend), and Fred
(Presentation). The GitHub operator is evidence infrastructure for the demo,
not a claim that three independent GitHub users created these artifacts.

## Local verification

```sh
npm ci
npm test
npm run validate
```

`npm test` verifies the deterministic repository checks. `npm run validate`
fails when required evidence artifacts are missing.
