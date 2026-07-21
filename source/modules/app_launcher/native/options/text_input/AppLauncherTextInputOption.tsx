// Module ID: 11284
// Function ID: 87813
// Name: AppLauncherTextInputOption
// Dependencies: []
// Exports: default

// Module 11284 (AppLauncherTextInputOption)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const EmojiIntention = arg1(dependencyMap[3]).EmojiIntention;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { <string:1448895397>: "<string:1690763266>", <string:2075742804>: "<string:1244528641>", <string:3429202872>: "<string:392626178>", <string:2699866328>: "<string:1049690113>", <string:1650707557>: "<string:1410334722>", <string:2454822970>: "<string:4002742275>", <string:1001022286>: "<string:444989442>", <string:102125910>: "<string:3945988099>", backgroundColor: importDefault(dependencyMap[6]).colors.INPUT_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[6]).radii.lg };
obj.container = obj;
const tmp2 = arg1(dependencyMap[4]);
obj.hasError = { borderColor: importDefault(dependencyMap[6]).colors.BORDER_FEEDBACK_CRITICAL };
obj.stringOptionInput = {};
obj.expressionButton = {};
let closure_9 = obj.createStyles(obj);
const obj1 = { borderColor: importDefault(dependencyMap[6]).colors.BORDER_FEEDBACK_CRITICAL };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/app_launcher/native/options/text_input/AppLauncherTextInputOption.tsx");

export default function AppLauncherTextInputOption(guildId) {
  let autoFocus;
  let hasError;
  let onChangeText;
  let onEndEditing;
  let onFocus;
  let onPressIn;
  let option;
  let style;
  ({ option, onChangeText } = guildId);
  const arg1 = onChangeText;
  guildId = guildId.guildId;
  const importDefault = guildId;
  ({ initialValue: closure_2, hasError } = guildId);
  ({ onFocus, onEndEditing, style, autoFocus, onPressIn } = guildId);
  const tmp = callback2();
  const tmp2 = callback(React.useState(() => {
    let str = "";
    if (null != closure_2) {
      str = "";
      if ("text" === closure_2.type) {
        str = closure_2.text;
      }
    }
    return str;
  }), 2);
  const first = tmp2[0];
  let callback = first;
  const React = tmp2[1];
  let obj = arg1(dependencyMap[7]);
  let closure_5 = React.useRef({ 0: -536870861, 0: -299892737 });
  const ref = React.useRef(null);
  const EmojiIntention = ref;
  let tmp5 = option.type === arg1(dependencyMap[8]).ApplicationCommandOptionType.STRING;
  const items = [onChangeText];
  callback = React.useCallback((arg0) => {
    callback(arg0);
    onChangeText(arg0);
  }, items);
  const items1 = [callback, first];
  const callback2 = React.useCallback((id) => {
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
    if (tmp5) {
      const result = onChangeText(closure_2[9]).maybeFetchTopEmojisByGuild(guildId);
      const obj = onChangeText(closure_2[9]);
    }
  }, items2);
  let obj1 = arg1(dependencyMap[10]);
  const animationDelayedAutoFocus = obj1.useAnimationDelayedAutoFocus(autoFocus, () => {
    const current = ref.current;
    if (null != current) {
      current.focus();
    }
  });
  if (obj.useAppLauncherContext().entrypoint === arg1(dependencyMap[11]).AppLauncherEntrypoint.VOICE) {
    let TextInput = arg1(dependencyMap[12]).TextInput;
  } else {
    TextInput = importDefault(dependencyMap[13]);
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
  if (option.type === arg1(dependencyMap[8]).ApplicationCommandOptionType.STRING) {
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
  if (option.type === arg1(dependencyMap[8]).ApplicationCommandOptionType.INTEGER) {
    let str2 = "numbers-and-punctuation";
    if (obj5.isAndroid()) {
      str2 = "numeric";
    }
    let str = str2;
    const obj5 = arg1(dependencyMap[14]);
  } else {
    str = "default";
  }
  obj.keyboardType = str;
  obj.onPressIn = onPressIn;
  const items4 = [tmp5(TextInput, obj), ];
  if (tmp5) {
    obj1 = {
      style: tmp.expressionButton,
      onPress() {
          let obj = onChangeText(closure_2[16]);
          const result = obj.dismissGlobalKeyboard();
          obj = { "Bool(false)": "postal-address-country", "Bool(false)": "password", "Bool(false)": "email", pickerIntention: ref.CHAT, onPressEmoji: closure_9, guildId, onClose: closure_10 };
          const result1 = onChangeText(closure_2[17]).openEmojiPickerActionSheet(obj);
        }
    };
    tmp5 = tmp5(importDefault(dependencyMap[15]), obj1);
  }
  items4[1] = tmp5;
  obj.children = items4;
  return callback(closure_5, obj);
};
