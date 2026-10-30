// Module ID: 12326
// Function ID: 12327
// Name: AppLauncherTextInputOption
// Dependencies: [32, 19, 17, 1387, 21, 5009, 7091, 11466, 1993, 9924, 12323, 11467, 1188, 12327, 1376, 12328, 1889, 9918, 2]
// Exports: default

// Module 12326 (AppLauncherTextInputOption)
import react_native from "react-native" /* 17 */;
import EmojiConstants from "EmojiConstants" /* 1387 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1889 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9918 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9924 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportAll;
let metroImportDefault;
let react = react_mod;
const View = react_native.View;
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ content: { flex: 1, flexDirection: "row", alignItems: "center" }, stringOptionInput: { maxHeight: 100, flex: 1, padding: 0, paddingTop: 0 }, expressionButton: { marginVertical: -8, marginRight: -8 } });
let result = size.fileFinishedImporting("modules/app_launcher/native/options/text_input/AppLauncherTextInputOption.tsx");

export default function AppLauncherTextInputOption(initialValue) {
  let TextInput;
  let _undefined;
  let autoFocus;
  let c4;
  let guildId;
  let hasError;
  let items3;
  let items4;
  let items5;
  let maxLength;
  let obj5;
  let onChangeText;
  let onEndEditing;
  let onPressIn;
  let option;
  let tmp16;
  let tmp17;
  let tmp6;
  ({ option, onChangeText } = initialValue);
  ({ onFocus: importDefault, guildId } = initialValue);
  initialValue = initialValue.initialValue;
  react = undefined;
  closure_9 = undefined;
  onChangeText = undefined;
  ({ onEndEditing, autoFocus, hasError, onPressIn } = initialValue);
  let tmp = closure_9();
  const tmp2 = onChangeText;
  let obj = onChangeText(guildId[6]);
  const inputStyles = obj.useInputStyles({});
  [tmp6, c4] = initialValue(react.useState(false), 2);
  const tmp5 = initialValue(react.useState(false), 2);
  const tmp7 = initialValue(react.useState(() => {
    let str = "";
    if (null != initialValue) {
      str = "";
      if ("text" === initialValue.type) {
        str = tmp.text;
      }
    }
    return str;
  }), 2);
  const value = tmp7[0];
  let closure_6 = tmp7[1];
  let obj2 = onChangeText(guildId[7]);
  const entrypoint = obj2.useAppLauncherContext().entrypoint;
  react.useRef({ start: 0, end: 0 });
  const ref = react.useRef(null);
  let tmp15Result = option.type === onChangeText(guildId[8]).ApplicationCommandOptionType.STRING;
  closure_9 = tmp15Result;
  const items = [onChangeText];
  onChangeText = react.useCallback((arg0) => {
    closure_6(arg0);
    onChangeText(arg0);
  }, items);
  const items1 = [onChangeText, value];
  const onPressEmoji = react.useCallback((id) => {
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
  const items2 = [guildId, tmp15Result];
  const effect = react.useEffect(() => {
    const tmp = closure_9;
    if (tmp) {
      const obj = TopEmojisUtils;
      const result = obj.maybeFetchTopEmojisByGuild(guildId);
    }
  }, items2);
  let obj3 = onChangeText(guildId[10]);
  const animationDelayedAutoFocus = obj3.useAnimationDelayedAutoFocus(autoFocus, () => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  });
  if (entrypoint === onChangeText(guildId[11]).AppLauncherEntrypoint.VOICE) {
    TextInput = tmp2(tmp3[12]).TextInput;
  } else {
    TextInput = require("components/BottomSheetTextInput");
  }
  let str = "default";
  let str2 = "default";
  const InputFieldContainer = tmp2(tmp3[6]).InputFieldContainer;
  if (hasError) {
    str2 = "error";
  }
  const obj4 = { status: str2, isFocused: tmp6, children: tmp16(tmp17, obj5) };
  obj5 = { style: items3, children: items5 };
  items3 = [inputStyles.padding, tmp.content];
  const obj6 = {
    ref,
    autoFocus: false,
    value,
    style: items4,
    selectionColor: "Array",
    maxLength,
    autoComplete: null,
    onChangeText,
    onSelectionChange(nativeEvent) {
      ref.current = nativeEvent.nativeEvent.selection;
    },
    onFocus() {
      _undefined(true);
      if (importDefault != null) {
        importDefault();
      }
    },
    onBlur() {
      return _undefined(false);
    },
    onEndEditing,
    textAlignVertical: "default",
    returnKeyType: true,
    multiline: null,
    keyboardType: str,
    onPressIn
  };
  items4 = [inputStyles.text, tmp.stringOptionInput];
  maxLength = undefined;
  tmp16 = ref;
  tmp17 = value;
  if (option.type === tmp2(guildId[8]).ApplicationCommandOptionType.STRING) {
    maxLength = option.maxLength;
  }
  if (option.type === tmp2(guildId[8]).ApplicationCommandOptionType.INTEGER) {
    let str3 = "numbers-and-punctuation";
    const tmp2Result = tmp2(guildId[14]);
    if (tmp2Result.isAndroid()) {
      str3 = "numeric";
    }
    str = str3;
  }
  items5 = [ref(TextInput, obj6), ];
  if (tmp15Result) {
    const obj7 = {
      style: tmp.expressionButton,
      onPress() {
          const obj = KeyboardManagerUtils;
          const result = obj.dismissGlobalKeyboard();
          const obj2 = openEmojiPickerActionSheet;
          const obj3 = { pickerIntention: EmojiIntention.CHAT, autoFocus: false, startExpanded: false, onPressEmoji, guildId, onClose };
          const result1 = obj2.openEmojiPickerActionSheet(obj3);
        }
    };
    tmp15Result = tmp15(require("ChatInputExpressionButton"), obj7);
  }
  items5[1] = tmp15Result;
  return ref(InputFieldContainer, obj4);
};
