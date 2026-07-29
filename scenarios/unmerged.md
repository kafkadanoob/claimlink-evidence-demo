# Unmerged evidence scenario

This benign documentation change exists to produce a genuine pull request that
targets `main`, can pass `evidence-check`, and deliberately remains open.

CommitPay should retrieve the pull-request state from GitHub and reject this
reference because the pull request is not merged. The repository does not
encode or inject that decision into verification logic.
