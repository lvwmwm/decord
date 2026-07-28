// Module ID: 15227
// Function ID: 115801
// Dependencies: [31, 14103, 33, 4165, 689, 15228, 15229, 11980, 4017, 1212, 2]

// Module 15227
import { YOU_BAR_BUTTON_ICON_SIZE } from "CONNECTION_BANNER_HEIGHT";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let obj = { icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
obj.badge = obj;
let closure_4 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function YouBarICYMIButton(hasNameplate) {
  hasNameplate = hasNameplate.hasNameplate;
  const tmp = callback();
  let obj = { hasNameplate };
  obj = { size: "custom", style: tmp.icon };
  let str;
  if (hasNameplate) {
    str = "white";
  }
  obj.color = str;
  obj.icon = jsx(require(11980) /* FlashIcon */.FlashIcon, { size: "custom", style: tmp.icon });
  obj.hasBadge = importDefault(15228)().showDot;
  obj.badgeStyle = tmp.badge;
  obj.onPress = function onPress() {
    let obj = outer1_0(outer1_2[8]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      obj = { screen: "icymi-screen" };
      obj = { inNestedNavigator: true };
      obj.params = obj;
      rootNavigationRef.navigate("icymi", obj);
    }
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["jnXV/V"]);
  return jsx(importDefault(15229), { size: "custom", style: tmp.icon });
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarICYMIButton.tsx");

export default memoResult;
