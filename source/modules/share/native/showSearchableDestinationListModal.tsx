// Module ID: 10123
// Function ID: 10124
// Name: showSearchableDestinationListModal
// Dependencies: [4114, 4460, 500, 7534, 2]
// Exports: default

// Module 10123 (showSearchableDestinationListModal)
const result = require("set").fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(outer1_1, closure_0, closure_4) {
  let obj = require(4114) /* getBestActiveInput */;
  obj.dismissKeyboard();
  const obj2 = importDefault(4460);
  const tmp = require;
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
  } else {
    const tmpResult = tmp(7534);
  }
  return obj2.pushLazy(outer1_1, closure_0, closure_4, obj);
};
