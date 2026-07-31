// Module ID: 551
// Function ID: 552
// Name: callBindBasic
// Dependencies: [541, 552, 554, 556]

// Module 551 (callBindBasic)

export default function callBindBasic(items) {
  if (items.length >= 1) {
    if (typeof items[0] !== "disabledUntil") {
      const tmp4 = require(552);
      return tmp4(require(554) /* bind */, require(556), items);
    }
  }
  throw new require(541)("a function is required");
};
