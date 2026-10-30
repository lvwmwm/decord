// Module ID: 12612
// Function ID: 12613
// Name: ConjureContextBoundaryRow
// Dependencies: [19, 17, 21, 5009, 575, 12439, 11599, 5619, 5955, 5959, 1114, 3865, 2]
// Exports: default

// Module 12612 (ConjureContextBoundaryRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import useAlertStore from "useAlertStore" /* 5955 */;
import AlertModal2 from "AlertModal" /* 5959 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { contextBoundary: obj2, contextRule: obj3, contextLine: obj4, contextLabel: obj5, contextText: obj6, contextCentered: { textAlign: "center" } };
obj2 = { gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { flex: 1, height: 1, backgroundColor: nativeDefault.colors.BORDER_NORMAL };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_6, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_10, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj6 = { alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/contexts/native/ConjureContextBoundaryRow.tsx");

export default function ConjureContextBoundaryRow(arg0) {
  let contextSwitch;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj13;
  let projectId;
  let action;
  ({ projectId, contextSwitch } = arg0);
  const tmp = closure_7();
  let obj = action(12439);
  const conjureContextSwitchRow = obj.useConjureContextSwitchRow(projectId, contextSwitch);
  if (null == conjureContextSwitchRow) {
    return null;
  } else {
    action = conjureContextSwitchRow.action;
    let obj2 = { style: tmp.contextBoundary, children: items2 };
    let obj3 = { style: tmp.contextRule, children: items };
    let obj4 = { style: tmp.contextLine };
    items = [closure_4(View, obj4), , ];
    const obj5 = { style: tmp.contextLabel, accessible: true, accessibilityRole: "header", children: items1 };
    const obj6 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    const ChatPlusIcon = tmp2(11599).ChatPlusIcon;
    items1 = [closure_4(ChatPlusIcon, obj6), ];
    const obj7 = { variant: "text-xs/semibold", color: "text-default", children: conjureContextSwitchRow.label };
    items1[1] = closure_4(action(5619).Text, obj7);
    items[1] = closure_5(View, obj5);
    const obj8 = { style: tmp.contextLine };
    items[2] = closure_4(View, obj8);
    items2 = [closure_5(View, obj3), ];
    const obj10 = { variant: "text-sm/normal", color: "text-muted", style: tmp.contextCentered, children: items3 };
    items3 = [conjureContextSwitchRow.body, ];
    let tmp8Result = null;
    const obj9 = { style: tmp.contextText, accessibilityLiveRegion: "polite", children: items5 };
    const Text2 = tmp2(5619).Text;
    if (null != action) {
      const tmp5 = closure_6;
      let str = "text-link";
      const Text = tmp2(5619).Text;
      if (action.disabled) {
        str = "text-muted";
      }
      const obj12 = {
        variant: "text-sm/medium",
        color: str,
        accessibilityRole: "link",
        accessibilityLabel: action.text,
        accessibilityState: obj13,
        disabled: action.disabled,
        onPress() {
              let intl;
              let intl2;
              let intl3;
              let intl4;
              let items;
              let obj2;
              let onPressResult;
              const onPress = action.onPress;
              if (action.confirm) {
                const openAlert = useAlertStore.openAlert;
                const obj = { title: intl.string(_modDef3865["i+xjZM"]), content: intl2.string(_modDef3865.fMBZmD), actions: hasOwnProperty(metroRequire, obj2) };
                useAlertStore;
                const AlertModal = AlertModal2.AlertModal;
                intl = intl5.intl;
                intl2 = intl5.intl;
                obj2 = { children: items };
                const obj3 = { variant: "destructive", text: intl3.string(_modDef3865.i5f3Uo), onPress };
                const AlertActionButton = AlertModal2.AlertActionButton;
                intl3 = intl5.intl;
                items = [React3(AlertActionButton, obj3), ];
                const obj4 = { variant: "secondary", text: intl4.string(intl5.t["ETE/oC"]) };
                const AlertActionButton2 = AlertModal2.AlertActionButton;
                intl4 = intl5.intl;
                items[1] = React3(AlertActionButton2, obj4);
                openAlert("ConjureContextSwitchRevert", React3(AlertModal, obj));
              } else {
                onPressResult = onPress();
              }
              return onPressResult;
            },
        children: action.text
      };
      const obj11 = { children: items4 };
      obj13 = { disabled: action.disabled };
      items4 = [" ", closure_4(Text, obj12)];
      tmp8Result = tmp8(tmp5, obj11);
    }
    items3[1] = tmp8Result;
    items5 = [tmp8(Text2, obj10), ];
    let tmp10Result = null;
    if (null != conjureContextSwitchRow.note) {
      const obj14 = { variant: "text-xs/normal", color: "text-muted", style: tmp.contextCentered, children: conjureContextSwitchRow.note };
      tmp10Result = tmp10(tmp2(5619).Text, obj14);
    }
    items5[1] = tmp10Result;
    items2[1] = closure_5(View, obj9);
    return closure_5(View, obj2);
  }
};
