// Module ID: 9903
// Function ID: 76631
// Name: ShareChatInput
// Dependencies: [31, 27, 653, 33, 4130, 689, 477, 7934, 7503, 1212, 4660, 8007, 2]
// Exports: default

// Module 9903 (ShareChatInput)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "ME";

let closure_4;
let closure_5;
const require = arg1;
let num = 2;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, flexDirection: "row", backgroundColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_CHAT_INPUT_BACKGROUND, borderRadius: 20, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
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
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = set.fileFinishedImporting("modules/share/native/ShareChatInput.tsx");

export default function ShareChatInput(disabled) {
  let inputRef;
  let onBlur;
  let onChange;
  let onFocus;
  let onPressEmoji;
  let onSelectionChange;
  let onSend;
  let text;
  let flag = disabled.disabled;
  ({ text, inputRef, onChange, onSelectionChange, onFocus, onBlur, onPressEmoji, onSend } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = { ref: inputRef, maxLength: importDefault(7934)() };
  const tmp2 = importDefault(7934)();
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.placeholder = intl.string(require(1212) /* getSystemLocale */.t.ZroO3G);
  obj.placeholderTextColor = tmp.inputPlaceholder.color;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl2.string(require(1212) /* getSystemLocale */.t["/+MXmw"]);
  obj.onSubmitEditing = onSend;
  obj.onSelectionChange = onSelectionChange;
  obj.style = tmp.chatInput;
  obj.value = text;
  obj.onChange = onChange;
  obj.onFocus = onFocus;
  obj.onBlur = onBlur;
  obj.multiline = true;
  obj.showBorder = false;
  obj.showTopContainer = false;
  obj.textAlignVertical = "center";
  obj.inputTextStyle = tmp.chatText;
  obj.editable = !flag;
  const items = [callback(importDefault(7503), obj), ];
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl3.string(require(1212) /* getSystemLocale */.t.iZ7Mz9);
  obj.accessibilityRole = "button";
  obj.onPress = onPressEmoji;
  obj.style = tmp.emojiButton;
  obj.disabled = flag;
  obj.children = callback(require(8007) /* ReactionIcon */.ReactionIcon, { size: "md" });
  items[1] = callback(require(4660) /* PressableBase */.PressableOpacity, obj);
  obj.children = items;
  return callback2(View, obj);
};
