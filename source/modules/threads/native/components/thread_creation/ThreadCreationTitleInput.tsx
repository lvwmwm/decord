// Module ID: 15186
// Function ID: 114538
// Dependencies: []

// Module 15186
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const MAX_CHANNEL_NAME_LENGTH = arg1(dependencyMap[2]).MAX_CHANNEL_NAME_LENGTH;
const jsx = arg1(dependencyMap[3]).jsx;
const memoResult = importAllResult.memo(importAllResult.forwardRef((chatInputRef, ref) => {
  chatInputRef = chatInputRef.chatInputRef;
  ref = chatInputRef;
  const threadSettingsDraft = chatInputRef.threadSettingsDraft;
  const importDefault = threadSettingsDraft;
  const optional = chatInputRef.optional;
  const dependencyMap = ref;
  let obj = ref(dependencyMap[4]);
  obj = { content: threadSettingsDraft.name };
  ref = importAllResult.useRef(threadSettingsDraft.name);
  const items = [threadSettingsDraft.parentChannelId];
  const items1 = [threadSettingsDraft];
  const callback = importAllResult.useCallback((current) => {
    if (null != threadSettingsDraft.parentChannelId) {
      let obj = threadSettingsDraft(arg1[5]);
      obj = { name: threadSettingsDraft(arg1[6])(current, false) };
      obj.changeThreadSettings(threadSettingsDraft.parentChannelId, obj);
      ref.current = current;
    }
  }, items);
  const items2 = [chatInputRef];
  const callback1 = importAllResult.useCallback(() => {
    if (null != threadSettingsDraft.name) {
      if (null != threadSettingsDraft.parentChannelId) {
        const tmp5 = threadSettingsDraft(arg1[6])(threadSettingsDraft.name, true);
        if (tmp5 !== threadSettingsDraft.name) {
          let obj = threadSettingsDraft(arg1[5]);
          obj = { name: tmp5 };
          obj.changeThreadSettings(threadSettingsDraft.parentChannelId, obj);
        }
      }
    }
  }, items1);
  const items3 = [threadSettingsDraft.name, ref];
  const callback2 = importAllResult.useCallback(() => {
    const current = chatInputRef.current;
    if (null != current) {
      current.focus();
    }
  }, items2);
  const effect = importAllResult.useEffect(() => {
    let tmp = ref.current !== threadSettingsDraft.name;
    if (tmp) {
      tmp = null != threadSettingsDraft.name;
    }
    if (tmp) {
      let tmp6 = null == arg1;
      if (!tmp6) {
        const current = arg1.current;
        tmp6 = null == current;
        const obj = current;
      }
      if (!tmp6) {
        obj.setText(threadSettingsDraft.name);
      }
    }
  }, items3);
  const renderErrorResult = obj.renderError(chatInputRef.threadNameError, obj);
  const items4 = [closure_4];
  const stateFromStores = ref(dependencyMap[7]).useStateFromStores(items4, () => channel.getChannel(threadSettingsDraft.parentChannelId));
  let str = "";
  if (null != stateFromStores) {
    str = ref(dependencyMap[8]).getDefaultThreadName(stateFromStores, threadSettingsDraft.parentMessageId);
    const obj4 = ref(dependencyMap[8]);
  }
  const intl = ref(dependencyMap[9]).intl;
  const string = intl.string;
  const t = ref(dependencyMap[9]).t;
  if (optional) {
    let stringResult = string(t.JPvIiL);
  } else {
    stringResult = string(t.j3XWjD);
  }
  obj = { defaultValue: importDefault(dependencyMap[11])(ref), errorMessage: renderErrorResult, label: stringResult, accessibilityLabel: stringResult };
  let stringResult1;
  if (!optional) {
    const intl2 = ref(dependencyMap[9]).intl;
    stringResult1 = intl2.string(ref(dependencyMap[9]).t./+VEZN);
  }
  obj.accessibilityHint = stringResult1;
  obj.required = !optional;
  obj.isClearable = true;
  obj.autoFocus = true;
  obj.maxLength = MAX_CHANNEL_NAME_LENGTH;
  obj.onSubmitEditing = callback2;
  obj.onBlur = callback1;
  obj.onChange = callback;
  if ("" === str) {
    const intl3 = ref(dependencyMap[9]).intl;
    str = intl3.string(ref(dependencyMap[9]).t.Nb2/RE);
  }
  obj.placeholder = str;
  obj.ref = ref;
  obj.returnKeyType = "next";
  obj.textContentType = "none";
  return jsx(ref(dependencyMap[10]).TextInput, obj);
}));
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx");

export default memoResult;
