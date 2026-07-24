// Module ID: 14002
// Function ID: 107073
// Name: BountiesModalCloseButton
// Dependencies: [31, 33, 4130, 689, 4660, 1212, 5119, 2]
// Exports: default

// Module 14002 (BountiesModalCloseButton)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { alignItems: "center", justifyContent: "center", backgroundColor: importDefault(689).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: importDefault(689).radii.round, width: importDefault(689).space.PX_32, height: importDefault(689).space.PX_32 };
  obj.closeButton = obj;
  return obj;
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalCloseButton.tsx");

export default function BountiesModalCloseButton(onPress) {
  let obj = { accessibilityLabel: null, accessibilityRole: "button", hitSlop: 12 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  obj.onPress = onPress.onPress;
  obj.style = callback().closeButton;
  obj = { size: "sm", color: importDefault(689).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
  obj.children = jsx(require(5119) /* XSmallIcon */.XSmallIcon, { size: "sm", color: importDefault(689).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT });
  return jsx(require(4660) /* PressableBase */.PressableOpacity, { size: "sm", color: importDefault(689).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT });
};
