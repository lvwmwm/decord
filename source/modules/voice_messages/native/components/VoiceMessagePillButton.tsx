// Module ID: 11676
// Function ID: 90589
// Dependencies: [31, 33, 4131, 689, 4661, 1273, 2]

// Module 11676
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles((width, width2, backgroundColor, borderColor) => {
  let obj = {};
  obj = { width, height: width, borderRadius: importDefault(689).radii.sm, alignItems: "center", justifyContent: "center", backgroundColor };
  let num = 0;
  if (null != borderColor) {
    num = 1;
  }
  obj.borderWidth = num;
  obj.borderColor = borderColor;
  obj.button = obj;
  obj.icon = { width: width2, height: width2 };
  return obj;
});
const forwardRefResult = require("result").forwardRef((boxSize, ref) => {
  let accessibilityLabel;
  let icon;
  let onPress;
  let onPressIn;
  let tintColor;
  ({ icon, tintColor, accessibilityLabel, onPress, onPressIn } = boxSize);
  const tmp = callback(boxSize.boxSize, boxSize.iconSize, boxSize.backgroundColor, boxSize.borderColor);
  let obj = { ref, style: tmp.button, accessibilityRole: "button", accessibilityLabel, onPress, onPressIn };
  obj = { source: icon, size: require(1273) /* Button */.Icon.Sizes.CUSTOM };
  const items = [tmp.icon, { tintColor }];
  obj.style = items;
  obj.children = jsx(require(1273) /* Button */.Icon, { source: icon, size: require(1273) /* Button */.Icon.Sizes.CUSTOM });
  return jsx(require(4661) /* PressableBase */.PressableOpacity, { source: icon, size: require(1273) /* Button */.Icon.Sizes.CUSTOM });
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/voice_messages/native/components/VoiceMessagePillButton.tsx");

export default forwardRefResult;
