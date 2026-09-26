// Module ID: 17092
// Function ID: 17093
// Name: ThreadCreationTitleInput
// Dependencies: [19, 2041, 1074, 21, 17093, 8051, 7548, 1482, 1610, 504, 9451, 1115, 6880, 5835, 2]

// Module 17092 (ThreadCreationTitleInput)
import sanitizeThreadNameDefault from "sanitizeThreadName" /* 7548 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 8051 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;

const require = fn;
const MAX_CHANNEL_NAME_LENGTH = fn(1074).MAX_CHANNEL_NAME_LENGTH;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx");

export default noop.memo(noop.forwardRef((chatInputRef, ref) => {
  chatInputRef = chatInputRef.chatInputRef;
  const threadSettingsDraft = chatInputRef.threadSettingsDraft;
  const optional = chatInputRef.optional;
  ref = undefined;
  dependencyMap = ref;
  let obj = chatInputRef(17093);
  let obj2 = { content: threadSettingsDraft.name };
  ref = ref.useRef(threadSettingsDraft.name);
  const items = [threadSettingsDraft.parentChannelId];
  const items1 = [threadSettingsDraft];
  const callback = ref.useCallback((current) => {
    if (null != threadSettingsDraft.parentChannelId) {
      const obj2 = { name: sanitizeThreadNameDefault(current, false) };
      DraftActionCreatorsDefault.changeThreadSettings(tmp.parentChannelId, obj2);
      ref.current = current;
    }
  }, items);
  const callback1 = ref.useCallback(() => {
    if (null != threadSettingsDraft.name) {
      if (null != tmp.parentChannelId) {
        const tmp4 = sanitizeThreadNameDefault(tmp.name, true);
        if (tmp4 !== tmp.name) {
          const obj = { name: tmp4 };
          tmp2(8051).changeThreadSettings(tmp.parentChannelId, obj);
          const tmp2Result = tmp2(8051);
        }
        tmp2 = importDefault;
      }
    }
  }, items1);
  const items2 = [chatInputRef];
  const callback2 = ref.useCallback(() => {
    const obj = chatInputRef(ref[7]);
    obj.setKeyboardType({ type: chatInputRef(ref[8]).KeyboardTypes.SYSTEM, context: { keyboardWillOpen: true } });
  }, []);
  const items3 = [threadSettingsDraft.name, ref];
  const callback3 = ref.useCallback(() => {
    const current = chatInputRef.current;
    if (current != null) {
      current.focus();
    }
  }, items2);
  const effect = ref.useEffect(() => {
    let tmp2 = ref.current !== threadSettingsDraft.name;
    if (tmp2) {
      tmp2 = null != tmp.name;
    }
    if (tmp2) {
      if (ref != null) {
        const current = ref.current;
        if (current != null) {
          current.setText(tmp.name);
        }
      }
    }
  }, items3);
  const renderErrorResult = chatInputRef(17093).renderError(chatInputRef.threadNameError, { content: threadSettingsDraft.name });
  const items4 = [ChannelStore];
  const stateFromStores = chatInputRef(504).useStateFromStores(items4, () => ChannelStore.getChannel(threadSettingsDraft.parentChannelId));
  let str = "";
  if (null != stateFromStores) {
    str = tmp(9451).getDefaultThreadName(stateFromStores, threadSettingsDraft.parentMessageId);
    const tmpResult = tmp(9451);
  }
  const intl = tmp(1115).intl;
  const string = intl.string;
  const t = tmp(1115).t;
  if (optional) {
    let stringResult = string(t.JPvIiL);
  } else {
    stringResult = string(t.j3XWjD);
  }
  const obj4 = { defaultValue: threadSettingsDraft(5835)(ref), errorMessage: renderErrorResult, label: stringResult, accessibilityHint: null, required: null, clearable: true, autoFocus: true, maxLength: null, onSubmitEditing: null, onFocus: null, onBlur: null, onChange: null, placeholder: null, ref: null, returnKeyType: "next", textContentType: "none" };
  let stringResult1;
  if (!optional) {
    const intl2 = tmp(1115).intl;
    stringResult1 = intl2.string(tmp(1115).t["/+VEZN"]);
  }
  obj4.accessibilityHint = stringResult1;
  obj4.required = !optional;
  obj4.maxLength = MAX_CHANNEL_NAME_LENGTH;
  obj4.onSubmitEditing = callback3;
  obj4.onFocus = callback2;
  obj4.onBlur = callback1;
  obj4.onChange = callback;
  if ("" === str) {
    const intl3 = tmp(1115).intl;
    str = intl3.string(tmp(1115).t["Nb2/RE"]);
  }
  obj4.placeholder = str;
  obj4.ref = ref;
  return jsx(chatInputRef(6880).TextInput, { defaultValue: threadSettingsDraft(5835)(ref), errorMessage: renderErrorResult, label: stringResult, accessibilityHint: null, required: null, clearable: true, autoFocus: true, maxLength: null, onSubmitEditing: null, onFocus: null, onBlur: null, onChange: null, placeholder: null, ref: null, returnKeyType: "next", textContentType: "none" });
}));
