// Module ID: 11201
// Function ID: 11202
// Name: ShareChatInput
// Dependencies: [32, 19, 17, 1074, 21, 4836, 576, 1364, 8605, 8061, 1115, 5435, 8219, 2]
// Exports: default

// Module 11201 (ShareChatInput)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import Pressables from "Pressables" /* 5435 */;
import ReactionIcon from "ReactionIcon" /* 8219 */;
import useMessageMaxLengthDefault from "useMessageMaxLength" /* 8605 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let PX_8;
let metroImportDefault;
let metroRequire;
let num;
let obj2;
let obj3;
let obj4;
let tmp2;
const FormInputDefault = tmp2(8061);
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, chatInput: obj3, chatText: obj4, inputPlaceholder: { color: nativeDefault.colors.TEXT_MUTED }, emojiButton: { paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, alignSelf: "flex-end" }, focused: { borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE } };
obj2 = { flex: 1, flexDirection: "row", backgroundColor: nativeDefault.colors.SHARE_CHAT_INPUT_BACKGROUND, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, paddingHorizontal: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, paddingVertical: 0, paddingHorizontal: nativeDefault.space.PX_4, maxHeight: 80 };
obj4 = { fontSize: 16, lineHeight: 20, fontFamily: Fonts.PRIMARY_NORMAL, color: nativeDefault.colors.TEXT_STRONG, paddingTop: PX_8 + num, paddingBottom: nativeDefault.space.PX_8 };
PX_8 = nativeDefault.space.PX_8;
num = 2;
if (PlatformUtils.isAndroid()) {
  num = 0;
}
({ color: nativeDefault.colors.TEXT_MUTED });
({ paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, alignSelf: "flex-end" });
({ borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE });
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/share/native/ShareChatInput.tsx");

export default function ShareChatInput(onFocus) {
  let c2;
  let focused;
  let inputRef;
  let intl;
  let intl2;
  let intl3;
  let items3;
  let onChange;
  let onPressEmoji;
  let onSelectionChange;
  let onSend;
  let text;
  onFocus = onFocus.onFocus;
  const onBlur = onFocus.onBlur;
  let flag = onFocus.disabled;
  ({ text, inputRef, onChange, onSelectionChange, onPressEmoji, onSend } = onFocus);
  if (flag === undefined) {
    flag = false;
  }
  c2 = undefined;
  const tmp = closure_8();
  const tmp4 = useMessageMaxLengthDefault();
  [focused, c2] = react.useState(false);
  const items = [onFocus];
  const items1 = [onBlur];
  _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(() => {
    _undefined(true);
    onFocus();
  }, items);
  const items2 = [tmp.container, ];
  const callback1 = react.useCallback(() => {
    _undefined(false);
    onBlur();
  }, items1);
  const tmp8 = metroImportDefault;
  const tmp9 = View;
  if (focused) {
    focused = tmp.focused;
  }
  const obj = { style: items2, children: items3 };
  items2[1] = focused;
  const obj2 = { ref: inputRef, maxLength: tmp4, placeholder: intl.string(intl4.t.ZroO3G), placeholderTextColor: tmp.inputPlaceholder.color, accessibilityLabel: intl2.string(intl4.t["/+MXmw"]), onSubmitEditing: onSend, onSelectionChange, style: tmp.chatInput, value: text, onChange, onFocus: callback, onBlur: callback1, multiline: true, showBorder: false, showTopContainer: false, textAlignVertical: "center", inputTextStyle: tmp.chatText, editable: !flag };
  const tmp2Result = FormInputDefault;
  intl = intl4.intl;
  intl2 = intl4.intl;
  items3 = [metroRequire(tmp2Result, obj2), ];
  const obj3 = { accessibilityLabel: intl3.string(intl4.t.iZ7Mz9), accessibilityRole: "button", onPress: onPressEmoji, style: tmp.emojiButton, disabled: flag, children: metroRequire(ReactionIcon.ReactionIcon, { size: "md" }) };
  const PressableOpacity = Pressables.PressableOpacity;
  intl3 = intl4.intl;
  items3[1] = metroRequire(PressableOpacity, obj3);
  return tmp8(tmp9, obj);
};
