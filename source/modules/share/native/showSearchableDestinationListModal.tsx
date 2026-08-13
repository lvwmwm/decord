// Module ID: 11122
// Function ID: 11123
// Name: showSearchableDestinationListModal
// Dependencies: [4205, 4550, 500, 7686, 2]
// Exports: default

// Module 11122 (showSearchableDestinationListModal)
const result = require("set").fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(outer1_1, closure_0, closure_4) {
  let obj = require(4205) /* getBestActiveInput */;
  obj.dismissKeyboard();
  const obj2 = importDefault(4550);
  const tmp = require;
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
  } else {
    const tmpResult = tmp(7686);
  }
  return obj2.pushLazy(outer1_1, closure_0, closure_4, obj);
};
