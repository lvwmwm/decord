// Module ID: 7242
// Function ID: 7243
// Name: BurstReactionFirstSendActionSheet
// Dependencies: [19, 17, 21, 4836, 576, 4800, 7243, 1115, 6571, 7203, 7244, 7182, 1177, 4832, 5281, 4654, 2029, 7242, 1981, 573, 2]
// Exports: default, openBurstReactionFirstSendActionSheet

// Module 7242 (BurstReactionFirstSendActionSheet)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7182 */;
import burst_reactions_BurstReactionEffectUtils from "burst_reactions/BurstReactionEffectUtils" /* 7203 */;
import getDeviceSpecificString from "getDeviceSpecificString" /* 7243 */;
import BurstReactionAnimationPreviewDefault from "BurstReactionAnimationPreview" /* 7244 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let size;
function onDismiss() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
}
({ View: c3, StyleSheet } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { paddingTop: 24, paddingBottom: 24, paddingLeft: 12, paddingRight: 12 }, fill: obj2, nitroWheel: size, textContainer: { flexDirection: "row", flexShrink: 1, alignItems: "center", alignSelf: "center", textAlign: "center" }, body: { paddingTop: 8, paddingBottom: 18 }, content: { paddingHorizontal: 16 } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", top: -120 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
size = { tintColor: nativeDefault.colors.TEXT_SUBTLE, width: 37.5, height: 37.5 };
let closure_6 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("components_native/reactions/BurstReactionFirstSendActionSheet.tsx");

export default function BurstReactionFirstSendActionSheet(arg0) {
  let channelId;
  let emoji;
  let intl;
  let intl2;
  let items;
  let items1;
  let messageId;
  let obj11;
  let obj4;
  let obj5;
  let obj6;
  let tmp3;
  ({ emoji, channelId, messageId } = arg0);
  const tmp = closure_6();
  const obj = getDeviceSpecificString;
  const obj2 = { quest: intl3.t["5TpPli"] };
  const deviceSpecificString = obj.getDeviceSpecificString(obj2, intl3.t["2Yp7dF"]);
  const obj3 = { backdropOpacity: burst_reactions_BurstReactionEffectUtils.BACKDROP_OPACITY, contentStyles: tmp.content, backdropChildren: React3(_false, obj4), onDismiss, children: hasOwnProperty(_false, obj6) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj4 = { style: tmp.fill, children: React3(tmp3, obj5) };
  obj5 = { channelId, emoji, messageId, reactionType: MessageReactionsTypes.ReactionTypes.BURST };
  const obj7 = { style: tmp.textContainer, children: items };
  items = [, ];
  obj6 = { style: tmp.container, children: items1 };
  const obj8 = { style: tmp.nitroWheel };
  tmp3 = BurstReactionAnimationPreviewDefault;
  items[0] = React3(native.NitroWheel, obj8);
  const obj9 = { variant: "heading-xl/bold", children: intl.string(intl3.t.NX7HI7) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items[1] = React3(Text, obj9);
  items1 = [hasOwnProperty(_false, obj7), , ];
  const obj10 = { style: tmp.body, children: React3(Text_Text.Text, obj11) };
  obj11 = { style: tmp.textContainer, variant: "text-md/normal", children: deviceSpecificString };
  items1[1] = React3(_false, obj10);
  const obj12 = { text: intl2.string(intl3.t["+IrDzN"]), onPress: onDismiss };
  const Button = components_Button_Button.Button;
  intl2 = intl3.intl;
  items1[2] = React3(Button, obj12);
  return React3(BottomSheet, obj3);
};
export const openBurstReactionFirstSendActionSheet = function openBurstReactionFirstSendActionSheet(arg0) {
  let channelId;
  let emoji;
  let messageId;
  ({ channelId, messageId, emoji } = arg0);
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = DismissibleContentUnsafeUtils;
  const tmp2 = dependencyMap;
  if (obj2.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.SUPER_REACTIONS_FIRST_SENT)) {
    const obj3 = { type: "BURST_REACTION_EFFECT_SEND", channelId, messageId, emoji };
    const tmpResult = DispatcherDefault;
    tmpResult.dispatch(obj3);
  } else {
    const tmp4Result = DismissibleContentUnsafeUtils;
    const result = tmp4Result.UNSAFE_markDismissibleContentAsDismissed(tmp4(2029).DismissibleContent.SUPER_REACTIONS_FIRST_SENT);
    const obj4 = { channelId, messageId, emoji };
    const tmpResult2 = ActionSheetActionCreatorsDefault;
    tmpResult2.openLazy(asyncRequire(7242, tmp2.paths), "BurstReactionFirstSendActionSheet", obj4);
  }
};
