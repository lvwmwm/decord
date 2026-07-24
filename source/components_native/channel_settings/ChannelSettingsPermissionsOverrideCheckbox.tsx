// Module ID: 15566
// Function ID: 120004
// Name: getAccessibilityLabel
// Dependencies: [31, 27, 33, 689, 4130, 3763, 1212, 10453, 8735, 15567, 3848, 2]

// Module 15566 (getAccessibilityLabel)
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_3;
let closure_4;
const require = arg1;
function getAccessibilityLabel(arg0) {
  if (require(3763) /* calculateElevatedPermissions */.DENY === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t["6639O5"]);
  } else if (require(3763) /* calculateElevatedPermissions */.ALLOW === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.RzDfSk);
  } else if (require(3763) /* calculateElevatedPermissions */.PASSTHROUGH === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.ujC3ZS);
  }
}
function getIcon(arg0, arg1, icon) {
  if (require(3763) /* calculateElevatedPermissions */.DENY === arg0) {
    let obj = { size: "sm", style: icon.icon };
    const colors3 = importDefault(689).colors;
    obj.color = arg1 ? colors3.WHITE : colors3.ICON_FEEDBACK_CRITICAL;
    return jsx(require(10453) /* DenyIcon */.DenyIcon, { size: "sm", style: icon.icon });
  } else if (require(3763) /* calculateElevatedPermissions */.ALLOW === arg0) {
    obj = { size: "sm", style: icon.icon };
    const colors2 = importDefault(689).colors;
    obj.color = arg1 ? colors2.WHITE : colors2.ICON_FEEDBACK_POSITIVE;
    return jsx(require(8735) /* CheckmarkLargeBoldIcon */.CheckmarkLargeBoldIcon, { size: "sm", style: icon.icon });
  } else if (require(3763) /* calculateElevatedPermissions */.PASSTHROUGH === arg0) {
    obj = { size: "sm", style: icon.icon };
    const colors = importDefault(689).colors;
    obj.color = arg1 ? colors.WHITE : colors.INTERACTIVE_TEXT_DEFAULT;
    return jsx(require(15567) /* SlashIcon */.SlashIcon, { size: "sm", style: icon.icon });
  } else {
    return null;
  }
}
function getPressableStyleOverrides(arg0, arg1, denySelected) {
  if (require(3763) /* calculateElevatedPermissions */.DENY === arg0) {
    return arg1 ? denySelected.denySelected : denySelected.denyActive;
  } else if (require(3763) /* calculateElevatedPermissions */.ALLOW === arg0) {
    return arg1 ? denySelected.allowSelected : denySelected.allowActive;
  } else if (require(3763) /* calculateElevatedPermissions */.PASSTHROUGH === arg0) {
    return arg1 ? denySelected.passthroughSelected : denySelected.passthroughActive;
  }
}
function OverrideOption(onPress) {
  const type = onPress.type;
  const selected = onPress.selected;
  const styles = onPress.styles;
  let obj = type(styles[10]);
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  obj = {
    accessibilityRole: radioA11yNative.accessibilityRole,
    accessibilityLabel: getAccessibilityLabel(type),
    accessibilityState: radioA11yNative.accessibilityState,
    style(pressed) {
      if (!selected) {
        if (!pressed.pressed) {
          let iconWrapper = styles.iconWrapper;
        }
        return iconWrapper;
      }
      const items = [outer1_10(type, selected, styles), styles.iconWrapper];
      iconWrapper = items;
    },
    onPress: onPress.onPress,
    children: getIcon(type, selected, styles)
  };
  return <closure_3 accessibilityRole={radioA11yNative.accessibilityRole} accessibilityLabel={getAccessibilityLabel(type)} accessibilityState={radioA11yNative.accessibilityState} style={function style(pressed) {
    if (!selected) {
      if (!pressed.pressed) {
        let iconWrapper = styles.iconWrapper;
      }
      return iconWrapper;
    }
    const items = [outer1_10(type, selected, styles), styles.iconWrapper];
    iconWrapper = items;
  }} onPress={arg0.onPress}>{getIcon(type, selected, styles)}</closure_3>;
}
({ Pressable: closure_3, View: closure_4 } = get_ActivityIndicator);
const PX_4 = require("_createForOfIteratorHelperLoose").space.PX_4;
const md = require("_createForOfIteratorHelperLoose").radii.md;
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: md, height: require("_createForOfIteratorHelperLoose").space.PX_32, paddingVertical: PX_4, paddingHorizontal: PX_4 / 2, flexDirection: "row" };
obj.ternaryCheckBox = obj;
_createForOfIteratorHelperLoose = { borderRadius: md - PX_4, marginHorizontal: PX_4 / 2, justifyContent: "center", height: "100%" };
obj.iconWrapper = _createForOfIteratorHelperLoose;
obj.icon = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
const obj2 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.denyActive = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_CRITICAL };
const obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_CRITICAL };
obj.denySelected = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_CRITICAL, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm - 2 };
const obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_CRITICAL, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm - 2 };
obj.allowActive = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_POSITIVE };
const obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_POSITIVE };
obj.allowSelected = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_POSITIVE };
const obj6 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_POSITIVE };
obj.passthroughSelected = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_SELECTED };
const obj7 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_SELECTED };
obj.passthroughActive = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_HOVER };
obj.disabled = { opacity: 0.3 };
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
let items = [require("calculateElevatedPermissions").DENY, require("calculateElevatedPermissions").PASSTHROUGH, require("calculateElevatedPermissions").ALLOW];
const obj8 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_HOVER };
const memoResult = importAllResult.memo(function ChannelSettingsPermissionsOverrideCheckbox(onValueChange) {
  let disabled;
  let require;
  ({ value: require, disabled } = onValueChange);
  if (disabled === undefined) {
    disabled = false;
  }
  onValueChange = onValueChange.onValueChange;
  let c2;
  let tmp = callback();
  c2 = tmp;
  const obj = {};
  const items = [tmp.ternaryCheckBox, ];
  let disabled2 = disabled;
  if (disabled) {
    disabled2 = tmp.disabled;
  }
  items[1] = disabled2;
  obj.style = items;
  let str = "auto";
  if (disabled) {
    str = "none";
  }
  obj.pointerEvents = str;
  obj.accessibilityRole = "radiogroup";
  obj.children = items.map((type) => {
    let closure_0 = type;
    return outer1_5(outer1_11, {
      type,
      selected: closure_0 === type,
      styles: c2,
      onPress() {
        let tmp = null != outer1_1;
        if (tmp) {
          tmp = closure_0 !== closure_0;
        }
        if (tmp) {
          outer1_1(closure_0);
        }
      }
    }, "checkbox-" + arg1);
  });
  return <closure_4 />;
});
const result = require("jsxProd").fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverrideCheckbox.tsx");

export default memoResult;
