# Frontend evidence

The Frontend deliverable demonstrates a responsive ClaimLink claim-summary
interface. It must identify the payment request, show its current state, and
keep the primary details readable on narrow and wide screens.

`claim-summary.html` and `claim-summary.css` implement the evidence artifact.
The layout uses a single semantic summary card, keeps the claim state visible,
and collapses its detail grid for narrow viewports.

Expected behavior:

- the claim identifier and status remain visible without horizontal scrolling;
- amount, network, and recipient details use explicit labels;
- the action copy explains that this repository demonstrates evidence rather
  than initiating a payment;
- the layout remains usable below 640 pixels.
