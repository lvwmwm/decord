// Module ID: 11638
// Function ID: 11639
// Name: ChatGDMUpsellActionSheet
// Dependencies: [19, 17, 21, 5014, 575, 1625, 5044, 4847, 5258, 5272, 5717, 11639, 5634, 1113, 5275, 5624, 11640, 5727, 2]
// Exports: default

// Module 11638 (ChatGDMUpsellActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5044 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import FastImageDefault from "FastImage" /* 5717 */;
import AssetRegistryDefault from "AssetRegistry" /* 11639 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { title: obj2, footer: obj3, body: { textAlign: "center" }, noticeContainer: obj4, innerContainer: { flexDirection: "row", alignItems: "center", paddingBottom: 16 }, secondInnerContainer: { flexDirection: "row", alignItems: "center" }, text: { flex: 1 }, titleImage: { padding: 16, justifyContent: "center", alignItems: "center" }, item: size, button: obj5 };
obj2 = { marginBottom: nativeDefault.space.PX_4, textAlign: "center" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16 };
obj4 = { borderRadius: nativeDefault.radii.sm, marginVertical: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16 };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, marginRight: 16, height: 40, width: 40, borderRadius: 20, alignItems: "center", justifyContent: "center" };
obj5 = { paddingTop: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/group_dm/native/ChatGDMUpsellActionSheet.tsx");

export default function ChatGDMUpsellActionSheet(onClick) {
  let BottomSheetScrollView;
  let Button2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj2;
  let obj3;
  let obj4;
  let obj8;
  let obj9;
  let tmp3;
  onClick = onClick.onClick;
  const tmp = closure_7();
  const items = [onClick];
  const bottom = useSafeAreaInsetsDefault().bottom;
  const callback = react.useCallback(() => {
    const obj = DismissibleContentUnsafeUtils;
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.GDM_INVITE_REMINDER);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
    onClick();
  }, items);
  let obj = { showGradient: true, scrollable: true, startExpanded: true, header: closure_5(View, obj2), footer: closure_6(View, obj4), children: closure_6(BottomSheetScrollView, obj9) };
  obj2 = { style: tmp.titleImage, children: closure_5(tmp3, obj3) };
  BottomSheet = onClick(5272).BottomSheet;
  obj3 = { source: AssetRegistryDefault, resizeMode: "contain" };
  obj4 = { style: items1, children: items2 };
  items1 = [tmp.footer, ];
  const obj5 = { padding: 16, paddingBottom: bottom + 16 };
  items1[1] = obj5;
  tmp3 = FastImageDefault;
  const obj6 = { text: intl.string(onClick(1113).t["3PatSz"]), onPress: callback };
  const Button = onClick(5634).Button;
  intl = onClick(1113).intl;
  items2 = [closure_5(Button, obj6), ];
  const obj7 = { style: tmp.button, children: closure_5(Button2, obj8) };
  obj8 = {
    text: intl2.string(onClick(1113).t["ETE/oC"]),
    onPress: function handleCancel() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    },
    variant: "tertiary"
  };
  Button2 = onClick(5634).Button;
  intl2 = onClick(1113).intl;
  items2[1] = closure_5(View, obj7);
  obj9 = { children: items3 };
  BottomSheetScrollView = onClick(5275).BottomSheetScrollView;
  const obj10 = { style: tmp.title, variant: "heading-lg/extrabold", accessibilityRole: "header", children: intl3.string(onClick(1113).t["bkqux/"]) };
  const Text = onClick(5624).Text;
  intl3 = onClick(1113).intl;
  items3 = [closure_5(Text, obj10), , ];
  const obj11 = { style: tmp.body, variant: "text-md/medium", color: "text-muted", children: intl4.string(onClick(1113).t.N6TdqN) };
  const Text2 = onClick(5624).Text;
  intl4 = onClick(1113).intl;
  items3[1] = closure_5(Text2, obj11);
  const obj13 = { style: tmp.innerContainer, children: items4 };
  items4 = [, ];
  const obj12 = { style: tmp.noticeContainer, children: items5 };
  const obj14 = { style: tmp.item, children: closure_5(onClick(11640).TimerIcon, { size: "sm" }) };
  items4[0] = closure_5(View, obj14);
  const obj15 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: intl5.string(onClick(1113).t.Fq3DJb) };
  const Text3 = onClick(5624).Text;
  intl5 = onClick(1113).intl;
  items4[1] = closure_5(Text3, obj15);
  items5 = [closure_6(View, obj13), ];
  const obj16 = { style: tmp.secondInnerContainer, children: items6 };
  items6 = [, ];
  const obj17 = { style: tmp.item, children: closure_5(onClick(5727).LinkIcon, { size: "sm" }) };
  items6[0] = closure_5(View, obj17);
  const obj18 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: intl6.string(onClick(1113).t.XKbf2G) };
  const Text4 = onClick(5624).Text;
  intl6 = onClick(1113).intl;
  items6[1] = closure_5(Text4, obj18);
  items5[1] = closure_6(View, obj16);
  items3[2] = closure_6(View, obj12);
  return closure_5(BottomSheet, obj);
};
