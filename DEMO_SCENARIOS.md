# CommitPay verification scenarios

This catalogue contains the genuine public pull-request references created for
the bounded demonstration. Scenario labels are convenience metadata only.
CommitPay retrieves GitHub evidence and calculates outcomes independently; it
does not trust an expected result written in this document.

## Single-operator disclosure

One authenticated GitHub account supplies evidence for three simulated
agreement roles. Each deliverable is still verified independently against its
own locked policy. Multi-user identity onboarding is outside this hackathon
scope.

## Public scenario catalogue

Repository: `kafkadanoob/claimlink-evidence-demo`

Required base branch for the prepared policies: `main`

Required check: `evidence-check`

| Scenario | Public pull request | Observed GitHub state | Documented expectation |
|---|---|---|---|
| Valid Frontend sample | [#1](https://github.com/kafkadanoob/claimlink-evidence-demo/pull/1) | Merged into `main`; check passed | Approve only if every locked policy requirement passes |
| Valid Backend sample | [#2](https://github.com/kafkadanoob/claimlink-evidence-demo/pull/2) | Merged into `main`; check passed | Approve only if every locked policy requirement passes |
| Valid Presentation sample | [#3](https://github.com/kafkadanoob/claimlink-evidence-demo/pull/3) | Merged into `main`; check passed | Approve only if every locked policy requirement passes |
| Unmerged rejection sample | [#4](https://github.com/kafkadanoob/claimlink-evidence-demo/pull/4) | Open against `main`; check passed | Reject because the PR is not merged |
| Wrong-branch rejection sample | [#5](https://github.com/kafkadanoob/claimlink-evidence-demo/pull/5) | Merged into `staging`; check passed | Reject because the base branch is not `main` |

These expectations explain the judge exercise; they are never submitted in a
verification payload. Different pull requests from the same authenticated
operator correctly produce different evidence snapshots and may produce
different deterministic decisions.
