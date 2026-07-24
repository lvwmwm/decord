// Module ID: 10695
// Function ID: 83403
// Name: ChannelCallNavigatorIcon
// Dependencies: [31, 27, 10240, 653, 33, 4130, 689, 4660, 3976, 4533, 1273, 2]
// Exports: default

// Module 10695 (ChannelCallNavigatorIcon)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { resetFocusTimer } from "resetFocusTimer";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_3, StyleSheet: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { pressableContainer: { marginHorizontal: 4 } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.pressable = _createForOfIteratorHelperLoose;
let obj1 = { flexDirection: "row", height: 32, width: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = obj1;
let obj2 = { marginLeft: 4, fontSize: 14, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.text = obj2;
_createForOfIteratorHelperLoose.disabled = { opacity: 0.5 };
_createForOfIteratorHelperLoose.iconColor = { color: require("_createForOfIteratorHelperLoose").colors.ICON_SUBTLE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { color: require("_createForOfIteratorHelperLoose").colors.ICON_SUBTLE };
const result = require("resetFocusTimer").fileFinishedImporting("modules/video_calls/native/components/ChannelCallNavigatorIcon.tsx");

export default function ChannelCallNavigatorIcon(disableBackground) {
  let accessibilityLabel;
  let children;
  let disabled;
  let membersCount;
  let require;
  let source;
  let theme;
  ({ onPress: require, membersCount, disabled, theme } = disableBackground);
  ({ source, accessibilityLabel, children } = disableBackground);
  if (theme === undefined) {
    theme = "dark";
  }
  let flag = disableBackground.disableBackground;
  if (flag === undefined) {
    flag = true;
  }
  const IconComponent = disableBackground.IconComponent;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.pressableContainer };
  obj = {
    accessibilityRole: "button",
    accessibilityLabel,
    disabled,
    style: tmp.pressable,
    onPress() {
      if (null != outer1_5) {
        outer1_5();
      }
      callback();
    }
  };
  obj = {};
  const items = [tmp.container, disableBackground.containerStyle, ];
  if (disabled) {
    disabled = tmp.disabled;
  }
  items[2] = disabled;
  obj.style = items;
  let obj3 = require(3976) /* AccessibilityAnnouncer */;
  let tmp5 = null;
  if (obj3.isThemeDark(theme)) {
    tmp5 = null;
    if (!flag) {
      const obj1 = { blurTheme: "dark", style: absoluteFill.absoluteFill };
      tmp5 = callback(importDefault(4533), obj1);
    }
  }
  const items1 = [tmp5, , ];
  if (null != IconComponent) {
    const obj2 = { color: tmp.iconColor.color, size: "sm" };
    let tmp13 = callback(IconComponent, obj2);
  } else {
    obj3 = { source, color: tmp.iconColor.color, size: require(1273) /* Button */.Icon.Sizes.SMALL_20 };
    tmp13 = callback(require(1273) /* Button */.Icon, obj3);
  }
  items1[1] = tmp13;
  let tmp15 = null != membersCount;
  if (tmp15) {
    tmp15 = membersCount > 0;
  }
  if (tmp15) {
    const obj4 = { style: tmp.text, children: membersCount };
    tmp15 = callback(require(1273) /* Button */.LegacyText, obj4);
  }
  items1[2] = tmp15;
  obj.children = items1;
  const items2 = [closure_7(closure_3, obj), children];
  obj.children = items2;
  obj.children = closure_7(require(4660) /* PressableBase */.PressableOpacity, obj);
  return callback(closure_3, obj);
};
