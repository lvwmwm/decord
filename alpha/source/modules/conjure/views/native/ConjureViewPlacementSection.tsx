// Module ID: 18501
// Function ID: 18502
// Name: ConjureViewPlacementSection
// Dependencies: [19, 17, 21, 5043, 575, 5634, 1112, 4245, 5641, 11269, 7186, 9068, 14801, 7274, 7708, 7944, 5750, 2]
// Exports: default

// Module 18501 (ConjureViewPlacementSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl10 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import components_Button_Button from "components/Button/Button" /* 5641 */;
import TrashIcon from "TrashIcon" /* 5750 */;
import TextInput_TextInput from "TextInput/TextInput" /* 7274 */;
import ConjureViewsTypes from "ConjureViewsTypes" /* 7708 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let tmp2;
const ChevronLargeDownIcon = tmp2(14801);
function ViewPicker(label) {
  let items1;
  label = label.label;
  const choices = label.choices;
  const value = label.value;
  dependencyMap = value;
  const onChange = label.onChange;
  const disabled = label.disabled;
  label = undefined;
  const missing = label.missing;
  const tmp = closure_8();
  const items = [choices, value, onChange];
  const memo = onChange.useMemo(() => {
    const found = choices.filter((missing) => !missing.missing);
    return found.map((label) => {
      let CheckmarkLargeIcon;
      const obj = {
        label: label.label,
        trailingIndicator: CheckmarkLargeIcon,
        action() {
          return onChange(label.value);
        }
      };
      CheckmarkLargeIcon = undefined;
      if (label.value === closure_2) {
        CheckmarkLargeIcon = label(closure_1_2[10]).CheckmarkLargeIcon;
      }
      return obj;
    });
  }, items);
  label = choices.find((value) => value.value === dependencyMap);
  let obj = { style: tmp.pickerRow, children: items1 };
  let str = "text-strong";
  const Text = label(5634).Text;
  const tmp3 = closure_6;
  const tmp4 = disabled;
  const tmp6 = label;
  if (missing) {
    str = "text-feedback-critical";
  }
  items1 = [, ];
  const obj2 = { variant: "body-sm/medium", color: str, style: tmp.pickerLabel, children: label };
  items1[0] = label(Text, obj2);
  const obj3 = {
    items: memo,
    title: label,
    enabled: !disabled,
    children(arg0) {
      let accessibilityActions;
      let onAccessibilityAction;
      let onPress;
      let ref;
      let str;
      ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
      const obj = { ref, variant: "tertiary", size: "sm", shrink: true, text: str, icon: hasOwnProperty(ChevronLargeDownIcon.ChevronLargeDownIcon, { size: "xs" }), iconPosition: "end", disabled, accessibilityHint: label, onPress, accessibilityActions, onAccessibilityAction };
      str = undefined;
      const Button = components_Button_Button.Button;
      if (label != null) {
        str = label.label;
      }
      if (str == null) {
        str = "";
      }
      return hasOwnProperty(Button, obj);
    }
  };
  items1[1] = label(tmp6(9068).ContextMenu, obj3);
  return tmp3(tmp4, obj);
}
function AppChannel(row) {
  let channelErrorResult;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let obj5;
  let stringResult;
  let tmp15;
  row = row.row;
  const placement = row.placement;
  const disabled = row.disabled;
  const tmp = closure_8();
  const str = row.name;
  const trimmed = str.trim();
  if ("" === trimmed) {
    const intl = intl10.intl;
    stringResult = intl.string(_modDef4245.xI4N6Q);
  } else {
    const _HermesInternal = HermesInternal;
    stringResult = "#" + trimmed;
  }
  const items = [placement, row.key];
  const obj = { style: tmp.channel, children: items1 };
  const callback = react.useCallback((arg0) => placement.setAppChannelView(row.key, arg0), items);
  const obj2 = {
    label: intl2.string(_modDef4245.RXXA5n),
    value: row.name,
    onChange(arg0) {
      return placement.renameAppChannel(row.key, arg0);
    },
    maxLength: ConjureViewsTypes.CONJURE_MAX_VIEW_APP_CHANNEL_NAME_LENGTH,
    disabled: tmp15,
    errorMessage: channelErrorResult
  };
  const TextInput = TextInput_TextInput.TextInput;
  intl2 = intl10.intl;
  tmp15 = disabled || null != row.existing;
  channelErrorResult = placement.channelError(row.key);
  items1 = [hasOwnProperty(TextInput, obj2), ];
  const obj3 = { style: tmp.channelFooter, children: items2 };
  const obj4 = { style: tmp.channelPicker, children: hasOwnProperty(ViewPicker, obj5) };
  obj5 = { label: intl3.formatToPlainString(_modDef4245.oAyECS, { channel: stringResult }), choices: placement.channelChoices(row.view), value: row.view, missing: placement.isMissing(row.view), onChange: callback, disabled };
  intl3 = tmp12(1112).intl;
  items2 = [hasOwnProperty(View, obj4), ];
  const obj6 = {
    variant: "tertiary",
    size: "sm",
    icon: hasOwnProperty(TrashIcon.TrashIcon, { size: "sm" }),
    disabled,
    accessibilityLabel: intl4.formatToPlainString(_modDef4245.B3mNv4, { channel: stringResult }),
    onPress() {
      return placement.removeAppChannel(row.key);
    }
  };
  const IconButton = tmp12(7944).IconButton;
  intl4 = tmp12(1112).intl;
  items2[1] = hasOwnProperty(IconButton, obj6);
  items1[1] = metroRequire(View, obj3);
  return metroRequire(View, obj);
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { section: obj2, heading: obj3, pickerRow: obj4, pickerLabel: { flexShrink: 1, minWidth: "40%" }, appChannels: obj5, channel: obj6, channelFooter: obj7, channelPicker: { flex: 1 }, addRow: obj8, addHint: { flexShrink: 1 } };
obj2 = { gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_4 };
obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16, minHeight: nativeDefault.space.PX_32 };
obj5 = { gap: nativeDefault.space.PX_8 };
obj6 = { gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_8, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj7 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/views/native/ConjureViewPlacementSection.tsx");

export default function ConjureViewPlacementSection(placement) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let items1;
  let items3;
  let items4;
  let tmp4Result5;
  placement = placement.placement;
  let disabled = placement.disabled;
  const tmp = closure_8();
  const draft = placement.draft;
  let obj = { style: tmp.section, children: items1 };
  const obj2 = { style: tmp.heading, children: items };
  const obj3 = { variant: "body-sm/medium", color: "text-subtle", accessibilityRole: "header", children: intl.string(disabled(4245)["zI+Y/G"]) };
  const Text = placement(5634).Text;
  intl = placement(1112).intl;
  items = [closure_5(Text, obj3), ];
  const obj4 = { variant: "body-xs/normal", color: "text-muted", children: intl2.string(disabled(4245).yUT1lm) };
  const Text2 = placement(5634).Text;
  intl2 = placement(1112).intl;
  items[1] = closure_5(Text2, obj4);
  items1 = [closure_6(View, obj2), , , , ];
  let tmp4Result = null;
  if (null != placement.missingNotice) {
    const obj5 = { variant: "body-sm/medium", color: "text-feedback-critical", children: placement.missingNotice };
    tmp4Result = tmp4(tmp5(5634).Text, obj5);
  }
  items1[1] = tmp4Result;
  const obj6 = { label: intl3.string(disabled(4245).ZWevfx), choices: placement.surfaceChoices(draft.activity), value: draft.activity, missing: placement.isMissing(draft.activity), onChange: placement.setActivity, disabled };
  intl3 = tmp5(1112).intl;
  items1[2] = closure_5(ViewPicker, obj6);
  const tmp9 = ViewPicker;
  if (placement.personal) {
    const obj7 = { variant: "body-xs/normal", color: "text-muted", children: intl9.string(disabled(4245).Tg4m1p) };
    const Text6 = tmp5(5634).Text;
    intl9 = tmp5(1112).intl;
    tmp4Result5 = tmp4(Text6, obj7);
  } else {
    const obj8 = { label: intl4.string(disabled(4245).gRNv14), choices: placement.surfaceChoices(draft.voiceChannel), value: draft.voiceChannel, missing: placement.isMissing(draft.voiceChannel), onChange: placement.setVoiceChannel, disabled };
    intl4 = tmp5(1112).intl;
    const items2 = [closure_5(tmp9, obj8), ];
    const obj9 = { style: tmp.appChannels, children: items3 };
    const obj10 = { variant: "body-sm/medium", color: "text-default", accessibilityRole: "header", children: intl5.string(disabled(4245)["8NKFKk"]) };
    const Text3 = tmp5(5634).Text;
    intl5 = tmp5(1112).intl;
    items3 = [closure_5(Text3, obj10), , , , ];
    let tmp4Result6 = null;
    const tmp10 = closure_7;
    if (0 === draft.appChannels.length) {
      const obj11 = { variant: "body-xs/normal", color: "text-muted", children: intl6.string(disabled(4245)["62VVHK"]) };
      const Text4 = tmp5(5634).Text;
      intl6 = tmp5(1112).intl;
      tmp4Result6 = tmp4(Text4, obj11);
    }
    items3[1] = tmp4Result6;
    const appChannels = draft.appChannels;
    items3[2] = appChannels.map((row) => {
      const obj = { row, placement, disabled };
      return hasOwnProperty(AppChannel, obj, row.key);
    });
    let tmp4Result7 = null;
    if (placement.hasExistingAppChannel) {
      const obj12 = { variant: "body-xs/normal", color: "text-muted", children: intl7.string(disabled(4245).AMgl7V) };
      const Text5 = tmp5(5634).Text;
      intl7 = tmp5(1112).intl;
      tmp4Result7 = tmp4(Text5, obj12);
    }
    items3[3] = tmp4Result7;
    const obj13 = { style: tmp.addRow, children: items4 };
    const obj14 = { variant: "secondary", size: "sm", text: intl8.string(disabled(4245)["3g7BVY"]), icon: closure_5(placement(11269).PlusSmallIcon, { size: "xs" }), disabled, onPress: placement.addAppChannel };
    const Button = tmp5(5641).Button;
    intl8 = tmp5(1112).intl;
    if (!disabled) {
      disabled = !placement.canAddAppChannel;
    }
    const obj15 = { children: items2 };
    items4 = [closure_5(Button, obj14), ];
    const obj16 = { variant: "body-xs/normal", color: "text-muted", style: tmp.addHint, children: placement.appChannelLimitHint };
    items4[1] = closure_5(placement(5634).Text, obj16);
    items3[4] = closure_6(View, obj13);
    items2[1] = closure_6(View, obj9);
    tmp4Result5 = tmp2(tmp10, obj15);
  }
  items1[3] = tmp4Result5;
  let tmp4Result8 = null;
  if (null != placement.unplacedNotice) {
    const obj17 = { variant: "body-sm/normal", color: "text-feedback-warning", children: placement.unplacedNotice };
    tmp4Result8 = tmp4(tmp5(5634).Text, obj17);
  }
  items1[4] = tmp4Result8;
  return closure_6(View, obj);
};
