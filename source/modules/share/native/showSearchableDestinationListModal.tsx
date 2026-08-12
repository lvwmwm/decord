// Module ID: 10283
// Function ID: 10284
// Name: showSearchableDestinationListModal
// Dependencies: [4207, 4549, 500, 7682, 2]
// Exports: default

// Module 10283 (showSearchableDestinationListModal)
const result = require("set").fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(outer1_1, closure_0, closure_4) {
  let obj = require(4207) /* getBestActiveInput */;
  obj.dismissKeyboard();
  const obj2 = importDefault(4549);
  const tmp = require;
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
  } else {
    const tmpResult = tmp(7682);
  }
  return obj2.pushLazy(outer1_1, closure_0, closure_4, obj);
};
