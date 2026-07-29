# Wrong-target-branch evidence scenario

This benign documentation change produces a genuine pull request that is
authored by the configured operator, passes `evidence-check`, and is merged into
`staging` instead of `main`.

CommitPay should retrieve the real base branch from GitHub and reject this
reference against a policy requiring `main`. The repository does not encode or
inject that decision into verification logic.
