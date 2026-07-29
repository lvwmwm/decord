// Module ID: 14080
// Function ID: 14081
// Name: BountiesModalCloseButton
// Dependencies: [19, 21, 4189, 712, 4717, 1236, 5175, 2]
// Exports: default

// Module 14080 (BountiesModalCloseButton)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_4 = createCacheKey.createStyles(() => {
  let obj = { closeButton: null };
  obj = { alignItems: "center", justifyContent: "center", backgroundColor: importDefault(712).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: importDefault(712).radii.round, width: importDefault(712).space.PX_32, height: importDefault(712).space.PX_32 };
  obj[0] = obj;
  return obj;
});
const result = require("createCacheKey").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalCloseButton.tsx");

export default function BountiesModalCloseButton(onPress) {
  let obj = { accessibilityLabel: null, accessibilityRole: "button", hitSlop: 12, onPress: null, style: null, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.cpT0Cq);
  obj[3] = onPress.onPress;
  obj[4] = callback().closeButton;
  obj = { size: "sm", color: null };
  obj[1] = importDefault(712).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT;
  obj[5] = jsx(require(5175) /* XSmallIcon */.XSmallIcon, { size: "sm", color: null });
  return jsx(require(4717) /* PressableBase */.PressableOpacity, { size: "sm", color: null });
};
