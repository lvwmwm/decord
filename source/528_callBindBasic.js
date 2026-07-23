// Module ID: 528
// Function ID: 6637
// Name: callBindBasic
// Dependencies: [518, 529, 531, 533]

// Module 528 (callBindBasic)

export default function callBindBasic(items) {
  if (items.length >= 1) {
    if ("function" === typeof items[0]) {
      const tmp3 = require(529);
      return tmp3(require(531) /* bind */, require(533), items);
    }
  }
  let tmp5 = require(518);
  tmp5 = new tmp5("a function is required");
  throw tmp5;
};
