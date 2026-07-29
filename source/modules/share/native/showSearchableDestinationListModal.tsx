// Module ID: 9894
// Function ID: 9895
// Name: showSearchableDestinationListModal
// Dependencies: [4048, 4395, 500, 6561, 2]
// Exports: default

// Module 9894 (showSearchableDestinationListModal)
const result = require("set").fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(outer1_1, closure_0, closure_4) {
  let obj = require(4048) /* getBestActiveInput */;
  obj.dismissKeyboard();
  const obj2 = importDefault(4395);
  const tmp = require;
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
  } else {
    const tmpResult = tmp(6561);
  }
  return obj2.pushLazy(outer1_1, closure_0, closure_4, obj);
};
