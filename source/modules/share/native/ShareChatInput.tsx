// Module ID: 9895
// Function ID: 76577
// Name: ShareChatInput
// Dependencies: []
// Exports: default

// Module 9895 (ShareChatInput)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let num = 2;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { "Null": null, "Null": null, "Null": null, "Null": null, backgroundColor: importDefault(dependencyMap[5]).colors.REDESIGN_CHAT_INPUT_BACKGROUND, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_12 };
obj.container = obj;
const obj1 = { 0: true, -9223372036854775808: true, 0: true, 0: true, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_4 };
obj.chatInput = obj1;
const obj2 = { 9223372036854775807: null, 0: null, fontFamily: arg1(dependencyMap[2]).Fonts.PRIMARY_NORMAL, color: importDefault(dependencyMap[5]).colors.TEXT_STRONG };
const tmp3 = arg1(dependencyMap[3]);
if (obj6.isAndroid()) {
  num = 0;
}
obj2.paddingTop = importDefault(dependencyMap[5]).space.PX_8 + num;
obj2.paddingBottom = importDefault(dependencyMap[5]).space.PX_8;
obj.chatText = obj2;
const obj6 = arg1(dependencyMap[6]);
obj.inputPlaceholder = { color: importDefault(dependencyMap[5]).colors.TEXT_MUTED };
const obj3 = { color: importDefault(dependencyMap[5]).colors.TEXT_MUTED };
obj.emojiButton = { paddingTop: importDefault(dependencyMap[5]).space.PX_8, paddingBottom: importDefault(dependencyMap[5]).space.PX_8, alignSelf: "flex-end" };
let closure_6 = obj.createStyles(obj);
const obj4 = { paddingTop: importDefault(dependencyMap[5]).space.PX_8, paddingBottom: importDefault(dependencyMap[5]).space.PX_8, alignSelf: "flex-end" };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/share/native/ShareChatInput.tsx");

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
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { ref: inputRef, maxLength: importDefault(dependencyMap[7])() };
  const tmp2 = importDefault(dependencyMap[7])();
  const intl = arg1(dependencyMap[9]).intl;
  obj.placeholder = intl.string(arg1(dependencyMap[9]).t.ZroO3G);
  obj.placeholderTextColor = tmp.inputPlaceholder.color;
  const intl2 = arg1(dependencyMap[9]).intl;
  obj.accessibilityLabel = intl2.string(arg1(dependencyMap[9]).t./+MXmw);
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
  const items = [callback(importDefault(dependencyMap[8]), obj), ];
  obj = {};
  const intl3 = arg1(dependencyMap[9]).intl;
  obj.accessibilityLabel = intl3.string(arg1(dependencyMap[9]).t.iZ7Mz9);
  obj.accessibilityRole = "button";
  obj.onPress = onPressEmoji;
  obj.style = tmp.emojiButton;
  obj.disabled = flag;
  obj.children = callback(arg1(dependencyMap[11]).ReactionIcon, { size: "md" });
  items[1] = callback(arg1(dependencyMap[10]).PressableOpacity, obj);
  obj.children = items;
  return callback2(View, obj);
};
