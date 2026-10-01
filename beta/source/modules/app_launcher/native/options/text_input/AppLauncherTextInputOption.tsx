// Module ID: 11654
// Function ID: 11655
// Name: AppLauncherTextInputOption
// Dependencies: [32, 19, 17, 1375, 21, 4836, 576, 10785, 1979, 9741, 11651, 8712, 1177, 11655, 1364, 11656, 1876, 10583, 2]
// Exports: default

// Module 11654 (AppLauncherTextInputOption)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1876 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9741 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 10583 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let react = react_mod;
const View = react_native.View;
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, hasError: obj3, stringOptionInput: { maxHeight: 100, flex: 1, padding: 0, paddingTop: 0 }, expressionButton: { marginVertical: -8, marginRight: -8 } };
obj2 = { width: "100%", backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, padding: 14, borderWidth: 2, borderColor: "transparent", flexDirection: "row", alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL };
let closure_9 = createStyles(obj);
let result = size.fileFinishedImporting("modules/app_launcher/native/options/text_input/AppLauncherTextInputOption.tsx");

export default function AppLauncherTextInputOption(guildId) {
  let TextInput;
  let autoFocus;
  let closure_4;
  let hasError;
  let items4;
  let maxLength;
  let onChangeText;
  let onEndEditing;
  let onFocus;
  let onPressIn;
  let option;
  let str;
  let style;
  ({ option, onChangeText } = guildId);
  guildId = guildId.guildId;
  ({ initialValue: dependencyMap, hasError } = guildId);
  let value;
  react = undefined;
  onChangeText = undefined;
  let onPressEmoji;
  ({ onFocus, onEndEditing, style, autoFocus, onPressIn } = guildId);
  let tmp = onPressEmoji();
  const tmp2 = value(react.useState(() => {
    let str = "";
    if (null != dependencyMap) {
      str = "";
      if ("text" === dependencyMap.type) {
        str = tmp.text;
      }
    }
    return str;
  }), 2);
  value = tmp2[0];
  react = tmp2[1];
  let obj = onChangeText(10785);
  const entrypoint = obj.useAppLauncherContext().entrypoint;
  react.useRef({ start: 0, end: 0 });
  const ref = react.useRef(null);
  let tmp14Result = option.type === onChangeText(1979).ApplicationCommandOptionType.STRING;
  let closure_7 = tmp14Result;
  const items = [onChangeText];
  onChangeText = react.useCallback((arg0) => {
    closure_4(arg0);
    onChangeText(arg0);
  }, items);
  const items1 = [onChangeText, value];
  onPressEmoji = react.useCallback((id) => {
    let length;
    const substr = first.substring(0, ref.current.start);
    let start = ref.current.end;
    const substring = first.substring;
    if (start == null) {
      start = tmp2.current.start;
    }
    const substr1 = substring(start);
    if (null == id.id) {
      if (null != id.surrogates) {
        callback(substr + id.surrogates + substr1);
        length = (substr + id.surrogates).length;
      }
      const obj = { start: length, end: length };
      ref.current = obj;
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    }
    if (null != id.uniqueName) {
      let name;
      if ("" !== id.uniqueName) {
        name = id.uniqueName;
      }
      const _HermesInternal = HermesInternal;
      callback(substr + ":" + name + ": " + substr1);
      const _HermesInternal2 = HermesInternal;
      length = (substr + ":" + name + ": ").length;
    }
    name = id.name;
  }, items1);
  const onClose = react.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  }, []);
  const items2 = [guildId, tmp14Result];
  const effect = react.useEffect(() => {
    const tmp = closure_7;
    if (tmp) {
      const obj = TopEmojisUtils;
      const result = obj.maybeFetchTopEmojisByGuild(guildId);
    }
  }, items2);
  let obj2 = onChangeText(11651);
  const animationDelayedAutoFocus = obj2.useAnimationDelayedAutoFocus(autoFocus, () => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  });
  if (entrypoint === onChangeText(8712).AppLauncherEntrypoint.VOICE) {
    TextInput = tmp4(1177).TextInput;
  } else {
    TextInput = guildId(11655);
  }
  const items3 = [tmp.container, , ];
  const tmp12 = onChangeText;
  const tmp13 = ref;
  if (hasError) {
    hasError = tmp.hasError;
  }
  let obj3 = { style: items3, children: items4 };
  items3[1] = hasError;
  items3[2] = style;
  const obj4 = {
    ref,
    autoFocus: false,
    value,
    style: tmp.stringOptionInput,
    maxLength,
    autoComplete: "off",
    onChangeText,
    onSelectionChange(nativeEvent) {
      ref.current = nativeEvent.nativeEvent.selection;
    },
    onFocus,
    onEndEditing,
    textAlignVertical: "center",
    returnKeyType: "default",
    multiline: true,
    keyboardType: str,
    onPressIn
  };
  maxLength = undefined;
  if (option.type === onChangeText(1979).ApplicationCommandOptionType.STRING) {
    maxLength = option.maxLength;
  }
  if (option.type === onChangeText(1979).ApplicationCommandOptionType.INTEGER) {
    let str2 = "numbers-and-punctuation";
    const tmp4Result = onChangeText(1364);
    if (tmp4Result.isAndroid()) {
      str2 = "numeric";
    }
    str = str2;
  } else {
    str = "default";
  }
  items4 = [closure_7(TextInput, obj4), ];
  if (tmp14Result) {
    const obj5 = {
      style: tmp.expressionButton,
      onPress() {
          const obj = KeyboardManagerUtils;
          const result = obj.dismissGlobalKeyboard();
          const obj2 = openEmojiPickerActionSheet;
          const obj3 = { pickerIntention: EmojiIntention.CHAT, autoFocus: false, startExpanded: false, onPressEmoji, guildId, onClose };
          const result1 = obj2.openEmojiPickerActionSheet(obj3);
        }
    };
    tmp14Result = tmp14(guildId(11656), obj5);
  }
  items4[1] = tmp14Result;
  return tmp12(tmp13, obj3);
};
