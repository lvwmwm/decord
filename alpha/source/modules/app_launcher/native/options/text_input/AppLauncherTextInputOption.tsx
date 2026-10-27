// Module ID: 12058
// Function ID: 12059
// Name: AppLauncherTextInputOption
// Dependencies: [32, 19, 17, 1392, 21, 4972, 558, 576, 7025, 11172, 1997, 9833, 12054, 11173, 1199, 12059, 1381, 12060, 1893, 9827, 2]

// Module 12058 (AppLauncherTextInputOption)
import react_native from "react-native" /* 17 */;
import EmojiConstants from "EmojiConstants" /* 1392 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1893 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9827 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9833 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let ref;

let metroImportAll;
let metroImportDefault;
let react = react_mod;
const View = react_native.View;
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ content: { flex: 1, flexDirection: "row", alignItems: "center" }, stringOptionInput: { maxHeight: 100, flex: 1, padding: 0, paddingTop: 0 }, expressionButton: { marginVertical: -8, marginRight: -8 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherTextInputOption(onFocus) {
  let autoFocus;
  let closure_10;
  let first;
  let guildId;
  let hasError;
  let onChangeText;
  let onEndEditing;
  let option;
  let tmp12;
  let tmp17;
  let tmp20;
  let tmp21;
  let tmp9;
  let tmp = onChangeText;
  const tmp2 = guildId;
  let obj = onChangeText(guildId[7]);
  const cResult = obj.c(48);
  ({ option, onChangeText } = onFocus);
  onFocus = onFocus.onFocus;
  ({ onEndEditing, guildId } = onFocus);
  const initialValue = onFocus.initialValue;
  const onPressIn = onFocus.onPressIn;
  ({ autoFocus, hasError } = onFocus);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {};
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(tmp2[8]);
  const inputStyles = tmpResult.useInputStyles(first);
  const tmp8 = initialValue(react.useState(false), 2);
  [r10040, react] = tmp8;
  const tmp7 = initialValue;
  if (cResult[1] !== initialValue) {
    class F {
      constructor() {
        let str = "";
        if (null != initialValue) {
          str = "";
          if ("text" === initialValue.type) {
            str = tmp.text;
          }
        }
        return str;
      }
    }
    cResult[1] = initialValue;
    cResult[2] = F;
    tmp9 = F;
  } else {
    class F {
      constructor() {
        let str = "";
        if (null != initialValue) {
          str = "";
          if ("text" === initialValue.type) {
            str = tmp.text;
          }
        }
        return str;
      }
    }
  }
  const tmp7Result = tmp7(react.useState(tmp9), 2);
  const first1 = tmp7Result[0];
  let closure_6 = tmp7Result[1];
  const tmpResult3 = tmp(tmp2[9]);
  const entrypoint = tmpResult3.useAppLauncherContext().entrypoint;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        let str = "";
        if (null != initialValue) {
          str = "";
          if ("text" === initialValue.type) {
            str = tmp.text;
          }
        }
        return str;
      }
    }
    cResult[3] = tmp13;
    tmp12 = tmp13;
  } else {
    class F {
      constructor() {
        let str = "";
        if (null != initialValue) {
          str = "";
          if ("text" === initialValue.type) {
            str = tmp.text;
          }
        }
        return str;
      }
    }
  }
  obj4.useRef(tmp12);
  ref = obj4.useRef(null);
  const tmp15 = option.type === tmp(tmp2[10]).ApplicationCommandOptionType.STRING;
  closure_9 = tmp15;
  if (cResult[4] !== onChangeText) {
    class F {
      constructor() {
        let str = "";
        if (null != initialValue) {
          str = "";
          if ("text" === initialValue.type) {
            str = tmp.text;
          }
        }
        return str;
      }
    }
    cResult[4] = onChangeText;
    cResult[5] = tmp17;
  } else {
    class F {
      constructor() {
        let str = "";
        if (null != initialValue) {
          str = "";
          if ("text" === initialValue.type) {
            str = tmp.text;
          }
        }
        return str;
      }
    }
  }
  tmp17 = tmp16;
  if (cResult[6] === tmp16) {
    let tmp18;
    class F {
      constructor() {
        let str = "";
        if (null != initialValue) {
          str = "";
          if ("text" === initialValue.type) {
            str = tmp.text;
          }
        }
        return str;
      }
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          let str = "";
          if (null != initialValue) {
            str = "";
            if ("text" === initialValue.type) {
              str = tmp.text;
            }
          }
          return str;
        }
      }
      cResult[9] = tmp19;
      tmp18 = tmp19;
    } else {
      class F {
        constructor() {
          let str = "";
          if (null != initialValue) {
            str = "";
            if ("text" === initialValue.type) {
              str = tmp.text;
            }
          }
          return str;
        }
      }
    }
    const onClose = tmp18;
    if (cResult[10] === guildId) {
      let tmp23;
      let tmp25;
      class F {
        constructor() {
          let str = "";
          if (null != initialValue) {
            str = "";
            if ("text" === initialValue.type) {
              str = tmp.text;
            }
          }
          return str;
        }
      }
      const effect = obj4.useEffect(tmp20, tmp21);
      const _Symbol2 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class Q {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.focus();
            }
          }
        }
        cResult[14] = Q;
        tmp23 = Q;
      } else {
        class Q {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.focus();
            }
          }
        }
      }
      const tmpResult4 = tmp(tmp2[12]);
      const animationDelayedAutoFocus = tmpResult4.useAnimationDelayedAutoFocus(autoFocus, tmp23);
      if (entrypoint === tmp(tmp2[13]).AppLauncherEntrypoint.VOICE) {
        class Q {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.focus();
            }
          }
        }
      } else {
        class Q {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.focus();
            }
          }
        }
        tmp25 = onFocus(tmp2[15]);
      }
      let str = "default";
      if (hasError) {
        class Q {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.focus();
            }
          }
        }
      }
      if (cResult[15] === inputStyles.padding) {
        class Q {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.focus();
            }
          }
        }
        if (cResult[18] === inputStyles.text) {
          let tmp29;
          let tmp33;
          class Q {
            constructor() {
              const current = ref.current;
              if (current != null) {
                current.focus();
              }
            }
          }
          if (option.type === tmp(tmp2[10]).ApplicationCommandOptionType.STRING) {
            class Q {
              constructor() {
                const current = ref.current;
                if (current != null) {
                  current.focus();
                }
              }
            }
          }
          const _Symbol3 = Symbol;
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            class Q {
              constructor() {
                const current = ref.current;
                if (current != null) {
                  current.focus();
                }
              }
            }
            cResult[21] = tmp30;
            tmp29 = tmp30;
          } else {
            class Q {
              constructor() {
                const current = ref.current;
                if (current != null) {
                  current.focus();
                }
              }
            }
          }
          if (cResult[22] !== onFocus) {
            class Q {
              constructor() {
                const current = ref.current;
                if (current != null) {
                  current.focus();
                }
              }
            }
            cResult[22] = onFocus;
            cResult[23] = tmp32;
          } else {
            class Q {
              constructor() {
                const current = ref.current;
                if (current != null) {
                  current.focus();
                }
              }
            }
          }
          const _Symbol4 = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            class Q {
              constructor() {
                const current = ref.current;
                if (current != null) {
                  current.focus();
                }
              }
            }
            cResult[24] = tmp34;
            tmp33 = tmp34;
          } else {
            class Q {
              constructor() {
                const current = ref.current;
                if (current != null) {
                  current.focus();
                }
              }
            }
          }
          if (option.type === tmp(tmp2[10]).ApplicationCommandOptionType.INTEGER) {
            class Q {
              constructor() {
                const current = ref.current;
                if (current != null) {
                  current.focus();
                }
              }
            }
            if (obj7.isAndroid()) {
              class Q {
                constructor() {
                  const current = ref.current;
                  if (current != null) {
                    current.focus();
                  }
                }
              }
            }
            str = str3;
          } else {
            class Q {
              constructor() {
                const current = ref.current;
                if (current != null) {
                  current.focus();
                }
              }
            }
          }
          if (cResult[25] === tmp25) {
            class Q {
              constructor() {
                const current = ref.current;
                if (current != null) {
                  current.focus();
                }
              }
            }
          }
          let obj3 = { ref, autoFocus: false, value: first1, style: tmp27, selectionColor: "Array", maxLength: undefined, autoComplete: null, onChangeText: tmp16, onSelectionChange: tmp29, onFocus: tmp31, onBlur: tmp33, onEndEditing, textAlignVertical: "default", returnKeyType: true, multiline: null, keyboardType: str, onPressIn };
          cResult[25] = tmp25;
          cResult[26] = tmp16;
          cResult[27] = onEndEditing;
          cResult[28] = onPressIn;
          cResult[29] = tmp27;
          cResult[30] = undefined;
          cResult[31] = tmp31;
          cResult[32] = str;
          cResult[33] = first1;
          cResult[34] = ref(tmp25, obj3);
          const tmp38 = ref(tmp25, obj3);
        }
        const items = [inputStyles.text, tmp4.stringOptionInput];
        cResult[18] = inputStyles.text;
        cResult[19] = tmp4.stringOptionInput;
        cResult[20] = items;
      }
      const items1 = [inputStyles.padding, tmp4.content];
      cResult[15] = inputStyles.padding;
      cResult[16] = tmp4.content;
      cResult[17] = items1;
    }
    const fn = function z() {
      const tmp = closure_9;
      if (tmp) {
        const obj = TopEmojisUtils;
        const result = obj.maybeFetchTopEmojisByGuild(guildId);
      }
    };
    const items2 = [guildId, tmp15];
    cResult[10] = guildId;
    cResult[11] = tmp15;
    cResult[12] = fn;
    cResult[13] = items2;
    tmp20 = fn;
    tmp21 = items2;
  }
  class H {
    constructor(id) {
      let length;
      const substr = first1.substring(0, ref.current.start);
      let start = ref.current.end;
      const substring = first1.substring;
      if (start == null) {
        start = tmp2.current.start;
      }
      const substr1 = substring(start);
      if (null == id.id) {
        if (null != id.surrogates) {
          tmp17(substr + id.surrogates + substr1);
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
        tmp17(substr + ":" + name + ": " + substr1);
        const _HermesInternal2 = HermesInternal;
        length = (substr + ":" + name + ": ").length;
      }
      name = id.name;
    }
  }
  cResult[6] = tmp16;
  cResult[7] = first1;
  cResult[8] = H;
}) : (function AppLauncherTextInputOption(initialValue) {
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
  let obj = onChangeText(guildId[8]);
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
  let obj2 = onChangeText(guildId[9]);
  const entrypoint = obj2.useAppLauncherContext().entrypoint;
  react.useRef({ start: 0, end: 0 });
  ref = react.useRef(null);
  let tmp15Result = option.type === onChangeText(guildId[10]).ApplicationCommandOptionType.STRING;
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
  let obj3 = onChangeText(guildId[12]);
  const animationDelayedAutoFocus = obj3.useAnimationDelayedAutoFocus(autoFocus, () => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  });
  if (entrypoint === onChangeText(guildId[13]).AppLauncherEntrypoint.VOICE) {
    TextInput = tmp2(tmp3[14]).TextInput;
  } else {
    TextInput = require("components/BottomSheetTextInput");
  }
  let str = "default";
  let str2 = "default";
  const InputFieldContainer = tmp2(tmp3[8]).InputFieldContainer;
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
  if (option.type === tmp2(guildId[10]).ApplicationCommandOptionType.STRING) {
    maxLength = option.maxLength;
  }
  if (option.type === tmp2(guildId[10]).ApplicationCommandOptionType.INTEGER) {
    let str3 = "numbers-and-punctuation";
    const tmp2Result = tmp2(guildId[16]);
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
});
let result = size.fileFinishedImporting("modules/app_launcher/native/options/text_input/AppLauncherTextInputOption.tsx");

export default tmp3;
