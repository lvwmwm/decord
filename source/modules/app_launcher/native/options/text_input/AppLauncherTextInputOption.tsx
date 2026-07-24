// Module ID: 11324
// Function ID: 88128
// Name: AppLauncherTextInputOption
// Dependencies: [57, 31, 27, 1852, 33, 4130, 689, 10911, 1881, 9368, 11321, 8226, 1273, 11325, 477, 11326, 1820, 9362, 2]
// Exports: default

// Module 11324 (AppLauncherTextInputOption)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { EmojiIntention } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, padding: 14, borderWidth: 2, borderColor: "transparent", flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.hasError = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_FEEDBACK_CRITICAL };
_createForOfIteratorHelperLoose.stringOptionInput = { maxHeight: 100, flex: 1, padding: 0, paddingTop: 0 };
_createForOfIteratorHelperLoose.expressionButton = { marginVertical: -8, marginRight: -8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_FEEDBACK_CRITICAL };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/app_launcher/native/options/text_input/AppLauncherTextInputOption.tsx");

export default function AppLauncherTextInputOption(guildId) {
  let autoFocus;
  let dependencyMap;
  let hasError;
  let onChangeText;
  let onEndEditing;
  let onFocus;
  let onPressIn;
  let option;
  let style;
  ({ option, onChangeText } = guildId);
  guildId = guildId.guildId;
  ({ initialValue: dependencyMap, hasError } = guildId);
  ({ onFocus, onEndEditing, style, autoFocus, onPressIn } = guildId);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = first(React.useState(() => {
    let str = "";
    if (null != closure_2) {
      str = "";
      if ("text" === closure_2.type) {
        str = closure_2.text;
      }
    }
    return str;
  }), 2);
  first = tmp2[0];
  React = tmp2[1];
  let obj = onChangeText(10911);
  let closure_5 = React.useRef({ start: 0, end: 0 });
  const ref = React.useRef(null);
  let tmp5 = option.type === onChangeText(1881).ApplicationCommandOptionType.STRING;
  let callback = tmp5;
  const items = [onChangeText];
  callback = React.useCallback((arg0) => {
    callback(arg0);
    onChangeText(arg0);
  }, items);
  const items1 = [callback, first];
  _createForOfIteratorHelperLoose = React.useCallback((id) => {
    const substr = first.substring(0, ref.current.start);
    let start = ref.current.end;
    if (null == start) {
      start = ref.current.start;
    }
    const substr1 = first.substring(start);
    if (null == id.id) {
      if (null != id.surrogates) {
        callback(substr + id.surrogates + substr1);
        let length = substr + id.surrogates.length;
      }
      const obj = { start: length, end: length };
      ref.current = obj;
      const current = ref.current;
      if (null != current) {
        current.focus();
      }
    }
    if (null != id.uniqueName) {
      if ("" !== id.uniqueName) {
        let name = id.uniqueName;
      }
      const _HermesInternal = HermesInternal;
      callback(substr + ":" + name + ": " + substr1);
      const _HermesInternal2 = HermesInternal;
      length = substr + ":" + name + ": ".length;
    }
    name = id.name;
  }, items1);
  let closure_10 = React.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      current.focus();
    }
  }, []);
  const items2 = [guildId, tmp5];
  const effect = React.useEffect(() => {
    if (closure_7) {
      const result = onChangeText(outer1_2[9]).maybeFetchTopEmojisByGuild(guildId);
      const obj = onChangeText(outer1_2[9]);
    }
  }, items2);
  let obj1 = onChangeText(11321);
  const animationDelayedAutoFocus = obj1.useAnimationDelayedAutoFocus(autoFocus, () => {
    const current = ref.current;
    if (null != current) {
      current.focus();
    }
  });
  if (obj.useAppLauncherContext().entrypoint === onChangeText(8226).AppLauncherEntrypoint.VOICE) {
    let TextInput = onChangeText(1273).TextInput;
  } else {
    TextInput = guildId(11325);
  }
  obj = {};
  const items3 = [tmp.container, , ];
  if (hasError) {
    hasError = tmp.hasError;
  }
  items3[1] = hasError;
  items3[2] = style;
  obj.style = items3;
  obj = { ref, autoFocus: false, value: first, style: tmp.stringOptionInput };
  let maxLength;
  if (option.type === onChangeText(1881).ApplicationCommandOptionType.STRING) {
    maxLength = option.maxLength;
  }
  obj.maxLength = maxLength;
  obj.autoComplete = "off";
  obj.onChangeText = callback;
  obj.onSelectionChange = function onSelectionChange(nativeEvent) {
    closure_5.current = nativeEvent.nativeEvent.selection;
  };
  obj.onFocus = onFocus;
  obj.onEndEditing = onEndEditing;
  obj.textAlignVertical = "center";
  obj.returnKeyType = "done";
  obj.multiline = true;
  if (option.type === onChangeText(1881).ApplicationCommandOptionType.INTEGER) {
    let str2 = "numbers-and-punctuation";
    if (obj5.isAndroid()) {
      str2 = "numeric";
    }
    let str = str2;
    obj5 = onChangeText(477);
  } else {
    str = "default";
  }
  obj.keyboardType = str;
  obj.onPressIn = onPressIn;
  const items4 = [callback(TextInput, obj), ];
  if (tmp5) {
    obj1 = {
      style: tmp.expressionButton,
      onPress() {
          let obj = onChangeText(outer1_2[16]);
          const result = obj.dismissGlobalKeyboard();
          obj = { pickerIntention: ref.CHAT, autoFocus: false, startExpanded: false, onPressEmoji: closure_9, guildId, onClose: closure_10 };
          const result1 = onChangeText(outer1_2[17]).openEmojiPickerActionSheet(obj);
        }
    };
    tmp5 = callback(guildId(11326), obj1);
  }
  items4[1] = tmp5;
  obj.children = items4;
  return callback(closure_5, obj);
};
