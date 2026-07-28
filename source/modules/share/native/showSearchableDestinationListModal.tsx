// Module ID: 9872
// Function ID: 76377
// Name: showSearchableDestinationListModal
// Dependencies: [4024, 4372, 477, 6540, 2]
// Exports: default

// Module 9872 (showSearchableDestinationListModal)
const result = require("set").fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(outer1_1, merged, closure_4) {
  let obj = require(4024) /* getHighestActiveScreenIndex */;
  obj.dismissKeyboard();
  const obj2 = importDefault(4372);
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
    const tmp4 = obj;
  } else {
    const obj4 = require(6540) /* useIsWindowLarge */;
  }
  return obj2.pushLazy(outer1_1, merged, closure_4, tmp4);
};
