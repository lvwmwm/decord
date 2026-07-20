// Module ID: 15384
// Function ID: 117402
// Name: getAccessibilityLabel
// Dependencies: []

// Module 15384 (getAccessibilityLabel)
function getAccessibilityLabel(arg0) {
  if (arg1(dependencyMap[5]).DENY === arg0) {
    const intl3 = arg1(dependencyMap[6]).intl;
    return intl3.string(arg1(dependencyMap[6]).t.6639O5);
  } else if (arg1(dependencyMap[5]).ALLOW === arg0) {
    const intl2 = arg1(dependencyMap[6]).intl;
    return intl2.string(arg1(dependencyMap[6]).t.RzDfSk);
  } else if (arg1(dependencyMap[5]).PASSTHROUGH === arg0) {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.ujC3ZS);
  }
}
function getIcon(arg0, arg1, icon) {
  if (arg1(dependencyMap[5]).DENY === arg0) {
    let obj = { size: "sm", style: icon.icon };
    const colors3 = importDefault(dependencyMap[3]).colors;
    obj.color = arg1 ? colors3.WHITE : colors3.ICON_FEEDBACK_CRITICAL;
    return jsx(arg1(dependencyMap[7]).DenyIcon, obj);
  } else if (arg1(dependencyMap[5]).ALLOW === arg0) {
    obj = { size: "sm", style: icon.icon };
    const colors2 = importDefault(dependencyMap[3]).colors;
    obj.color = arg1 ? colors2.WHITE : colors2.ICON_FEEDBACK_POSITIVE;
    return jsx(arg1(dependencyMap[8]).CheckmarkLargeBoldIcon, obj);
  } else if (arg1(dependencyMap[5]).PASSTHROUGH === arg0) {
    obj = { size: "sm", style: icon.icon };
    const colors = importDefault(dependencyMap[3]).colors;
    obj.color = arg1 ? colors.WHITE : colors.INTERACTIVE_TEXT_DEFAULT;
    return jsx(arg1(dependencyMap[9]).SlashIcon, obj);
  } else {
    return null;
  }
}
function getPressableStyleOverrides(arg0, arg1, denySelected) {
  if (arg1(dependencyMap[5]).DENY === arg0) {
    return arg1 ? denySelected.denySelected : denySelected.denyActive;
  } else if (arg1(dependencyMap[5]).ALLOW === arg0) {
    return arg1 ? denySelected.allowSelected : denySelected.allowActive;
  } else if (arg1(dependencyMap[5]).PASSTHROUGH === arg0) {
    return arg1 ? denySelected.passthroughSelected : denySelected.passthroughActive;
  }
}
function OverrideOption(onPress) {
  const type = onPress.type;
  const arg1 = type;
  const selected = onPress.selected;
  const importDefault = selected;
  const styles = onPress.styles;
  const dependencyMap = styles;
  let obj = arg1(dependencyMap[10]);
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
      const items = [callback(type, selected, styles), styles.iconWrapper];
      iconWrapper = items;
    },
    onPress: onPress.onPress,
    children: getIcon(type, selected, styles)
  };
  return <closure_3 {...obj} />;
}
const importAllResult = importAll(dependencyMap[0]);
({ Pressable: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const PX_4 = importDefault(dependencyMap[3]).space.PX_4;
const md = importDefault(dependencyMap[3]).radii.md;
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_BASE_LOWEST, borderRadius: md, height: importDefault(dependencyMap[3]).space.PX_32, paddingVertical: PX_4, paddingHorizontal: PX_4 / 2, flexDirection: "row" };
obj.ternaryCheckBox = obj;
obj1 = { borderRadius: md - PX_4, marginHorizontal: PX_4 / 2, justifyContent: "center", height: "100%" };
obj.iconWrapper = obj1;
const tmp2 = arg1(dependencyMap[1]);
obj.icon = { marginHorizontal: importDefault(dependencyMap[3]).space.PX_8 };
const obj2 = { marginHorizontal: importDefault(dependencyMap[3]).space.PX_8 };
obj.denyActive = { backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_FEEDBACK_CRITICAL };
const obj3 = { backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_FEEDBACK_CRITICAL };
obj.denySelected = { backgroundColor: importDefault(dependencyMap[3]).colors.ICON_FEEDBACK_CRITICAL, borderRadius: importDefault(dependencyMap[3]).radii.sm - 2 };
const obj4 = { backgroundColor: importDefault(dependencyMap[3]).colors.ICON_FEEDBACK_CRITICAL, borderRadius: importDefault(dependencyMap[3]).radii.sm - 2 };
obj.allowActive = { backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_FEEDBACK_POSITIVE };
const obj5 = { backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_FEEDBACK_POSITIVE };
obj.allowSelected = { backgroundColor: importDefault(dependencyMap[3]).colors.ICON_FEEDBACK_POSITIVE };
const obj6 = { backgroundColor: importDefault(dependencyMap[3]).colors.ICON_FEEDBACK_POSITIVE };
obj.passthroughSelected = { backgroundColor: importDefault(dependencyMap[3]).colors.INTERACTIVE_BACKGROUND_SELECTED };
const obj7 = { backgroundColor: importDefault(dependencyMap[3]).colors.INTERACTIVE_BACKGROUND_SELECTED };
obj.passthroughActive = { backgroundColor: importDefault(dependencyMap[3]).colors.INTERACTIVE_BACKGROUND_HOVER };
obj.disabled = { opacity: 0.3 };
let closure_6 = obj1.createStyles(obj);
const items = [arg1(dependencyMap[5]).DENY, arg1(dependencyMap[5]).PASSTHROUGH, arg1(dependencyMap[5]).ALLOW];
const obj8 = { backgroundColor: importDefault(dependencyMap[3]).colors.INTERACTIVE_BACKGROUND_HOVER };
const memoResult = importAllResult.memo(function ChannelSettingsPermissionsOverrideCheckbox(onValueChange) {
  let disabled;
  ({ value: closure_0, disabled } = onValueChange);
  if (disabled === undefined) {
    disabled = false;
  }
  const importDefault = onValueChange.onValueChange;
  let dependencyMap;
  const tmp = callback();
  dependencyMap = tmp;
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
  obj.children = items.map((type) => callback(closure_11, {
    type,
    selected: type === type,
    styles: tmp,
    onPress() {
      let tmp = null != callback;
      if (tmp) {
        tmp = arg0 !== arg0;
      }
      if (tmp) {
        callback(arg0);
      }
    }
  }, "checkbox-" + arg1));
  return <closure_4 {...obj} />;
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverrideCheckbox.tsx");

export default memoResult;
