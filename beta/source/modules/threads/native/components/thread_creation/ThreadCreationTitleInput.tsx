// Module ID: 16432
// Function ID: 16433
// Name: ThreadCreationTitleInput
// Dependencies: [19, 2045, 1074, 21, 16433, 7196, 6692, 1483, 1611, 504, 8606, 1115, 6024, 5898, 2]

// Module 16432 (ThreadCreationTitleInput)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import sanitizeThreadNameDefault from "sanitizeThreadName" /* 6692 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7196 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import size from "module_2" /* 2 */;

let chatInputRef, dependencyMap;

const MAX_CHANNEL_NAME_LENGTH = Constants.MAX_CHANNEL_NAME_LENGTH;
const jsx = Fragment.jsx;
const memoResult = react.memo(react.forwardRef((chatInputRef, ref) => {
  let stringResult;
  let stringResult1;
  chatInputRef = chatInputRef.chatInputRef;
  const threadSettingsDraft = chatInputRef.threadSettingsDraft;
  const optional = chatInputRef.optional;
  ref = undefined;
  dependencyMap = ref;
  const tmp = chatInputRef;
  let tmp2 = dependencyMap;
  const threadNameError = chatInputRef.threadNameError;
  let obj = chatInputRef(16433);
  let obj2 = { content: threadSettingsDraft.name };
  const renderErrorResult = obj.renderError(threadNameError, obj2);
  ref = ref.useRef(threadSettingsDraft.name);
  const items = [threadSettingsDraft.parentChannelId];
  const items1 = [threadSettingsDraft];
  const callback = ref.useCallback((current) => {
    if (null != threadSettingsDraft.parentChannelId) {
      const obj = { name: sanitizeThreadNameDefault(current, false) };
      const changeThreadSettings = DraftActionCreatorsDefault.changeThreadSettings;
      const parentChannelId = tmp.parentChannelId;
      DraftActionCreatorsDefault;
      changeThreadSettings(parentChannelId, obj);
      ref.current = current;
    }
  }, items);
  const callback1 = ref.useCallback(() => {
    if (null != threadSettingsDraft.name) {
      if (null != threadSettingsDraft.parentChannelId) {
        const tmp4 = sanitizeThreadNameDefault(threadSettingsDraft.name, true);
        const tmp2 = importDefault;
        if (tmp4 !== threadSettingsDraft.name) {
          const obj = { name: tmp4 };
          const tmp2Result = tmp2(7196);
          tmp2Result.changeThreadSettings(threadSettingsDraft.parentChannelId, obj);
        }
      }
    }
  }, items1);
  const items2 = [chatInputRef];
  const callback2 = ref.useCallback(() => {
    const obj = chatInputRef(ref[7]);
    const obj2 = { type: chatInputRef(ref[8]).KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } };
    obj.setKeyboardType(obj2);
  }, []);
  const items3 = [threadSettingsDraft.name, ref];
  const callback3 = ref.useCallback(() => {
    const current = chatInputRef.current;
    if (current != null) {
      current.focus();
    }
  }, items2);
  const effect = ref.useEffect(() => {
    const tmp2 = ref.current !== threadSettingsDraft.name && null != tmp.name;
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
  const obj3 = chatInputRef(504);
  const stateFromStores = obj3.useStateFromStores(items4, () => ChannelStore.getChannel(threadSettingsDraft.parentChannelId));
  let str = "";
  if (null != stateFromStores) {
    const tmpResult = tmp(8606);
    str = tmpResult.getDefaultThreadName(stateFromStores, threadSettingsDraft.parentMessageId);
  }
  const intl = tmp(1115).intl;
  const string = intl.string;
  const t = tmp(1115).t;
  if (optional) {
    stringResult = string(t.JPvIiL);
  } else {
    stringResult = string(t.j3XWjD);
  }
  const obj4 = { defaultValue: threadSettingsDraft(5898)(ref), errorMessage: renderErrorResult, label: stringResult, accessibilityHint: stringResult1, required: !optional, clearable: true, autoFocus: true, maxLength: MAX_CHANNEL_NAME_LENGTH, onSubmitEditing: callback3, onFocus: callback2, onBlur: callback1, onChange: callback, placeholder: str, ref, returnKeyType: "next", textContentType: "none" };
  const TextInput = tmp(6024).TextInput;
  stringResult1 = undefined;
  const tmp12 = jsx;
  if (!optional) {
    const intl2 = tmp(1115).intl;
    stringResult1 = intl2.string(tmp(1115).t["/+VEZN"]);
  }
  if ("" === str) {
    const intl3 = tmp(1115).intl;
    str = intl3.string(tmp(1115).t["Nb2/RE"]);
  }
  return tmp12(TextInput, obj4);
}));
const result = size.fileFinishedImporting("modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx");

export default memoResult;
