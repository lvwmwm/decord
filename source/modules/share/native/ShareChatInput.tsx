// Module ID: 9903
// Function ID: 76568
// Name: ShareChatInput
// Dependencies: [57, 31, 27, 653, 33, 4165, 689, 477, 6164, 7620, 1212, 4695, 6555, 2]
// Exports: default

// Module 9903 (ShareChatInput)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "get ActivityIndicator";

let closure_6;
let closure_7;
const require = arg1;
let num = 2;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, flexDirection: "row", backgroundColor: require("_createForOfIteratorHelperLoose").colors.SHARE_CHAT_INPUT_BACKGROUND, borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.CHAT_INPUT_BORDER_RADIUS, borderWidth: require("_createForOfIteratorHelperLoose").modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_CHATINPUT_BORDER_DEFAULT, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
const obj1 = { flex: 1, paddingVertical: 0, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4, maxHeight: 80 };
_createForOfIteratorHelperLoose.chatInput = obj1;
const obj2 = { fontSize: 16, lineHeight: 20, fontFamily: require("ME").Fonts.PRIMARY_NORMAL, color: require("_createForOfIteratorHelperLoose").colors.TEXT_STRONG };
if (set.isAndroid()) {
  num = 0;
}
obj2.paddingTop = require("_createForOfIteratorHelperLoose").space.PX_8 + num;
obj2.paddingBottom = require("_createForOfIteratorHelperLoose").space.PX_8;
_createForOfIteratorHelperLoose.chatText = obj2;
_createForOfIteratorHelperLoose.inputPlaceholder = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
const obj3 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.emojiButton = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8, alignSelf: "flex-end" };
set = { borderColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
_createForOfIteratorHelperLoose.focused = set;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = set.fileFinishedImporting("modules/share/native/ShareChatInput.tsx");

export default function ShareChatInput(onFocus) {
  let inputRef;
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
  let dependencyMap;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp3 = callback(React.useState(false), 2);
  let focused = tmp3[0];
  dependencyMap = tmp3[1];
  const items = [onFocus];
  const items1 = [onBlur];
  callback = React.useCallback(() => {
    callback(true);
    onFocus();
  }, items);
  let obj = {};
  const items2 = [tmp.container, ];
  const callback1 = React.useCallback(() => {
    callback(false);
    onBlur();
  }, items1);
  if (focused) {
    focused = tmp.focused;
  }
  items2[1] = focused;
  obj.style = items2;
  obj = { ref: inputRef, maxLength: onBlur(6164)() };
  const tmp2 = onBlur(6164)();
  const tmp6 = closure_7;
  const tmp7 = View;
  const intl = onFocus(1212).intl;
  obj.placeholder = intl.string(onFocus(1212).t.ZroO3G);
  obj.placeholderTextColor = tmp.inputPlaceholder.color;
  const intl2 = onFocus(1212).intl;
  obj.accessibilityLabel = intl2.string(onFocus(1212).t["/+MXmw"]);
  obj.onSubmitEditing = onSend;
  obj.onSelectionChange = onSelectionChange;
  obj.style = tmp.chatInput;
  obj.value = text;
  obj.onChange = onChange;
  obj.onFocus = callback;
  obj.onBlur = callback1;
  obj.multiline = true;
  obj.showBorder = false;
  obj.showTopContainer = false;
  obj.textAlignVertical = "center";
  obj.inputTextStyle = tmp.chatText;
  obj.editable = !flag;
  const items3 = [callback2(onBlur(7620), obj), ];
  obj = {};
  const intl3 = onFocus(1212).intl;
  obj.accessibilityLabel = intl3.string(onFocus(1212).t.iZ7Mz9);
  obj.accessibilityRole = "button";
  obj.onPress = onPressEmoji;
  obj.style = tmp.emojiButton;
  obj.disabled = flag;
  obj.children = callback2(onFocus(6555).ReactionIcon, { size: "md" });
  items3[1] = callback2(onFocus(4695).PressableOpacity, obj);
  obj.children = items3;
  return tmp6(tmp7, obj);
};
