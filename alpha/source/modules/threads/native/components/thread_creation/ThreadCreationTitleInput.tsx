// Module ID: 17305
// Function ID: 17306
// Name: ThreadCreationTitleInput
// Dependencies: [19, 2065, 1085, 21, 558, 576, 17306, 7918, 6975, 1501, 1629, 504, 9260, 1126, 6160, 6285, 2]

// Module 17305 (ThreadCreationTitleInput)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import sanitizeThreadNameDefault from "sanitizeThreadName" /* 6975 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7918 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const MAX_CHANNEL_NAME_LENGTH = Constants.MAX_CHANNEL_NAME_LENGTH;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ThreadCreationTitleInput(chatInputRef) {
  let optional;
  let ref;
  let ref1;
  let threadNameError;
  let tmp12;
  let tmp13;
  const tmp = chatInputRef;
  let tmp2 = ref;
  let obj = chatInputRef(ref[5]);
  const cResult = obj.c(38);
  chatInputRef = chatInputRef.chatInputRef;
  const threadSettingsDraft = chatInputRef.threadSettingsDraft;
  ({ threadNameError, optional, ref } = chatInputRef);
  if (cResult[0] === threadNameError) {
    if (cResult[1] === threadSettingsDraft.name) {
      let tmp4 = cResult[2];
    }
    const obj4 = ref1;
    ref1 = ref1.useRef(threadSettingsDraft.name);
    if (cResult[3] !== threadSettingsDraft.parentChannelId) {
      class T {
        constructor(current) {
          if (null != threadSettingsDraft.parentChannelId) {
            const obj = { name: sanitizeThreadNameDefault(current, false) };
            const changeThreadSettings = DraftActionCreatorsDefault.changeThreadSettings;
            const parentChannelId = tmp.parentChannelId;
            DraftActionCreatorsDefault;
            changeThreadSettings(parentChannelId, obj);
            ref1.current = current;
          }
        }
      }
      cResult[3] = threadSettingsDraft.parentChannelId;
      cResult[4] = T;
    } else {
      class T {
        constructor(current) {
          if (null != threadSettingsDraft.parentChannelId) {
            const obj = { name: sanitizeThreadNameDefault(current, false) };
            const changeThreadSettings = DraftActionCreatorsDefault.changeThreadSettings;
            const parentChannelId = tmp.parentChannelId;
            DraftActionCreatorsDefault;
            changeThreadSettings(parentChannelId, obj);
            ref1.current = current;
          }
        }
      }
    }
    if (cResult[5] === threadSettingsDraft.name) {
      class T {
        constructor(current) {
          if (null != threadSettingsDraft.parentChannelId) {
            const obj = { name: sanitizeThreadNameDefault(current, false) };
            const changeThreadSettings = DraftActionCreatorsDefault.changeThreadSettings;
            const parentChannelId = tmp.parentChannelId;
            DraftActionCreatorsDefault;
            changeThreadSettings(parentChannelId, obj);
            ref1.current = current;
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            const obj = chatInputRef(ref[9]);
            const obj2 = { type: chatInputRef(ref[10]).KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } };
            obj.setKeyboardType(obj2);
          }
        }
        cResult[8] = S;
      } else {
        class S {
          constructor() {
            const obj = chatInputRef(ref[9]);
            const obj2 = { type: chatInputRef(ref[10]).KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } };
            obj.setKeyboardType(obj2);
          }
        }
      }
      if (cResult[9] !== chatInputRef) {
        class N {
          constructor() {
            const current = chatInputRef.current;
            if (current != null) {
              current.focus();
            }
          }
        }
        cResult[9] = chatInputRef;
        cResult[10] = N;
      } else {
        class N {
          constructor() {
            const current = chatInputRef.current;
            if (current != null) {
              current.focus();
            }
          }
        }
      }
      if (cResult[11] === threadSettingsDraft.name) {
        let tmp15;
        let tmp16;
        class N {
          constructor() {
            const current = chatInputRef.current;
            if (current != null) {
              current.focus();
            }
          }
        }
        const effect = obj4.useEffect(tmp12, tmp13);
        const _Symbol2 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class N {
            constructor() {
              const current = chatInputRef.current;
              if (current != null) {
                current.focus();
              }
            }
          }
          const items = [ChannelStore];
          cResult[15] = items;
          tmp15 = items;
        } else {
          class N {
            constructor() {
              const current = chatInputRef.current;
              if (current != null) {
                current.focus();
              }
            }
          }
        }
        if (cResult[16] !== threadSettingsDraft.parentChannelId) {
          class N {
            constructor() {
              const current = chatInputRef.current;
              if (current != null) {
                current.focus();
              }
            }
          }
          cResult[16] = threadSettingsDraft.parentChannelId;
          cResult[17] = tmp17;
          tmp16 = tmp17;
        } else {
          class N {
            constructor() {
              const current = chatInputRef.current;
              if (current != null) {
                current.focus();
              }
            }
          }
        }
        const tmpResult = tmp(tmp2[11]);
        const stateFromStores = tmpResult.useStateFromStores(tmp15, tmp16);
        class M {
          constructor() {
            const tmp2 = ref1.current !== threadSettingsDraft.name && null != tmp.name;
            if (tmp2) {
              if (ref != null) {
                const current = ref.current;
                if (current != null) {
                  current.setText(threadSettingsDraft.name);
                }
              }
            }
          }
        }
        let str2 = "";
        if (null != stateFromStores) {
          class N {
            constructor() {
              const current = chatInputRef.current;
              if (current != null) {
                current.focus();
              }
            }
          }
          str2 = obj6.getDefaultThreadName(stateFromStores, threadSettingsDraft.parentMessageId);
        }
        cResult[18] = stateFromStores;
        cResult[19] = threadSettingsDraft.parentMessageId;
        cResult[20] = str2;
      }
      class M {
        constructor() {
          const tmp2 = ref1.current !== threadSettingsDraft.name && null != tmp.name;
          if (tmp2) {
            if (ref != null) {
              const current = ref.current;
              if (current != null) {
                current.setText(threadSettingsDraft.name);
              }
            }
          }
        }
      }
      const items1 = [threadSettingsDraft.name, ref];
      cResult[11] = threadSettingsDraft.name;
      cResult[12] = ref;
      cResult[13] = M;
      cResult[14] = items1;
      tmp12 = M;
      tmp13 = items1;
    }
    const fn = function v() {
      if (null != threadSettingsDraft.name) {
        if (null != threadSettingsDraft.parentChannelId) {
          const tmp4 = sanitizeThreadNameDefault(threadSettingsDraft.name, true);
          const tmp2 = importDefault;
          if (tmp4 !== threadSettingsDraft.name) {
            const obj = { name: tmp4 };
            const tmp2Result = tmp2(7918);
            tmp2Result.changeThreadSettings(threadSettingsDraft.parentChannelId, obj);
          }
        }
      }
    };
    cResult[6] = threadSettingsDraft.parentChannelId;
    cResult[7] = fn;
  }
  let obj2 = { content: threadSettingsDraft.name };
  const tmpResult2 = tmp(tmp2[6]);
  cResult[0] = threadNameError;
  cResult[1] = threadSettingsDraft.name;
  cResult[2] = tmpResult2.renderError(threadNameError, obj2);
  tmpResult2.renderError(threadNameError, obj2);
}) : (function ThreadCreationTitleInput(chatInputRef) {
  let optional;
  let ref;
  let stringResult;
  let stringResult1;
  chatInputRef = chatInputRef.chatInputRef;
  const threadSettingsDraft = chatInputRef.threadSettingsDraft;
  ({ optional, ref } = chatInputRef);
  let ref1;
  const tmp = chatInputRef;
  let tmp2 = ref;
  const threadNameError = chatInputRef.threadNameError;
  let obj = chatInputRef(ref[6]);
  let obj2 = { content: threadSettingsDraft.name };
  const renderErrorResult = obj.renderError(threadNameError, obj2);
  ref1 = ref1.useRef(threadSettingsDraft.name);
  const items = [threadSettingsDraft.parentChannelId];
  const items1 = [threadSettingsDraft];
  const callback = ref1.useCallback((current) => {
    if (null != threadSettingsDraft.parentChannelId) {
      const obj = { name: sanitizeThreadNameDefault(current, false) };
      const changeThreadSettings = DraftActionCreatorsDefault.changeThreadSettings;
      const parentChannelId = tmp.parentChannelId;
      DraftActionCreatorsDefault;
      changeThreadSettings(parentChannelId, obj);
      ref1.current = current;
    }
  }, items);
  const callback1 = ref1.useCallback(() => {
    if (null != threadSettingsDraft.name) {
      if (null != threadSettingsDraft.parentChannelId) {
        const tmp4 = sanitizeThreadNameDefault(threadSettingsDraft.name, true);
        const tmp2 = importDefault;
        if (tmp4 !== threadSettingsDraft.name) {
          const obj = { name: tmp4 };
          const tmp2Result = tmp2(7918);
          tmp2Result.changeThreadSettings(threadSettingsDraft.parentChannelId, obj);
        }
      }
    }
  }, items1);
  const items2 = [chatInputRef];
  const callback2 = ref1.useCallback(() => {
    const obj = chatInputRef(ref[9]);
    const obj2 = { type: chatInputRef(ref[10]).KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } };
    obj.setKeyboardType(obj2);
  }, []);
  const items3 = [threadSettingsDraft.name, ref];
  const callback3 = ref1.useCallback(() => {
    const current = chatInputRef.current;
    if (current != null) {
      current.focus();
    }
  }, items2);
  const effect = ref1.useEffect(() => {
    const tmp2 = ref1.current !== threadSettingsDraft.name && null != tmp.name;
    if (tmp2) {
      if (ref != null) {
        const current = ref.current;
        if (current != null) {
          current.setText(threadSettingsDraft.name);
        }
      }
    }
  }, items3);
  const items4 = [ChannelStore];
  const obj3 = chatInputRef(ref[11]);
  const stateFromStores = obj3.useStateFromStores(items4, () => ChannelStore.getChannel(threadSettingsDraft.parentChannelId));
  let str = "";
  if (null != stateFromStores) {
    const tmpResult = tmp(tmp2[12]);
    str = tmpResult.getDefaultThreadName(stateFromStores, threadSettingsDraft.parentMessageId);
  }
  const intl = tmp(tmp2[13]).intl;
  const string = intl.string;
  const t = tmp(tmp2[13]).t;
  if (optional) {
    stringResult = string(t.JPvIiL);
  } else {
    stringResult = string(t.j3XWjD);
  }
  const obj4 = { defaultValue: threadSettingsDraft(tmp2[14])(ref1), errorMessage: renderErrorResult, label: stringResult, accessibilityHint: stringResult1, required: !optional, clearable: true, autoFocus: true, maxLength: MAX_CHANNEL_NAME_LENGTH, onSubmitEditing: callback3, onFocus: callback2, onBlur: callback1, onChange: callback, placeholder: str, ref, returnKeyType: "next", textContentType: "none" };
  const TextInput = tmp(tmp2[15]).TextInput;
  stringResult1 = undefined;
  const tmp12 = jsx;
  if (!optional) {
    const intl2 = tmp(tmp2[13]).intl;
    stringResult1 = intl2.string(tmp(tmp2[13]).t["/+VEZN"]);
  }
  if ("" === str) {
    const intl3 = tmp(tmp2[13]).intl;
    str = intl3.string(tmp(tmp2[13]).t["Nb2/RE"]);
  }
  return tmp12(TextInput, obj4);
}));
const result = size.fileFinishedImporting("modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx");

export default memoResult;
