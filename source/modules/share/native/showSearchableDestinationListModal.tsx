// Module ID: 9832
// Function ID: 76247
// Name: showSearchableDestinationListModal
// Dependencies: [3990, 4338, 477, 6504, 2]
// Exports: default

// Module 9832 (showSearchableDestinationListModal)
const result = require("set").fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(outer1_1, merged, closure_4) {
  let obj = require(3990) /* getHighestActiveScreenIndex */;
  obj.dismissKeyboard();
  const obj2 = importDefault(4338);
  if (!obj3.isIOS()) {
    obj = { presentation: "modal" };
    const tmp4 = obj;
  } else {
    const obj4 = require(6504) /* useIsWindowLarge */;
  }
  return obj2.pushLazy(outer1_1, merged, closure_4, tmp4);
};
