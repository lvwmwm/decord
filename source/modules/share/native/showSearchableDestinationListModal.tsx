// Module ID: 10242
// Function ID: 10243
// Name: showSearchableDestinationListModal
// Dependencies: [4166, 4509, 500, 7643, 2]
// Exports: default

// Module 10242 (showSearchableDestinationListModal)
const result = require("set").fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(outer1_1, closure_0, closure_4) {
  let obj = require(4166) /* getBestActiveInput */;
  obj.dismissKeyboard();
  const obj2 = importDefault(4509);
  const tmp = require;
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
  } else {
    const tmpResult = tmp(7643);
  }
  return obj2.pushLazy(outer1_1, closure_0, closure_4, obj);
};
