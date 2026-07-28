// Module ID: 15821
// Function ID: 121857
// Dependencies: [31, 27, 5670, 33, 4165, 4578, 8369, 1212, 6661, 2]

// Module 15821
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { ActivityPanelModes } from "ActivityPanelModes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ buttonParent: { flexShrink: 1 } });
const memoResult = importAllResult.memo(function MinimizeActivityButton(arg0) {
  let activityName;
  let setMode;
  ({ activityName, setMode } = arg0);
  const items = [setMode];
  const callback = importAllResult.useCallback(() => {
    setMode(outer1_5.PIP);
  }, items);
  if (undefined !== activityName) {
    if ("" !== activityName) {
      let obj = { style: tmp2.buttonParent };
      obj = { icon: importDefault(8369) };
      const intl2 = setMode(1212).intl;
      obj.accessibilityLabel = intl2.string(setMode(1212).t.brPQ5U);
      obj.onPress = callback;
      obj.text = activityName;
      obj.size = "sm";
      obj.variant = "secondary-overlay";
      obj.maxFontSizeMultiplier = 1;
      obj.shrink = true;
      obj.children = jsx(setMode(4578).Button, { icon: importDefault(8369) });
      let tmp3 = <View icon={importDefault(8369)} />;
    }
    return tmp3;
  }
  obj = { icon: importDefault(8369), accessibilityLabel: null, onPress: null, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1 };
  const intl = setMode(1212).intl;
  obj.accessibilityLabel = intl.string(setMode(1212).t.brPQ5U);
  obj.onPress = callback;
  tmp3 = jsx(setMode(6661).IconButton, { icon: importDefault(8369), accessibilityLabel: null, onPress: null, size: "sm", variant: "secondary-overlay", maxFontSizeMultiplier: 1 });
});
const result = require("ActivityPanelModes").fileFinishedImporting("modules/activities/panel/native/MinimizeActivityButton.tsx");

export default memoResult;
