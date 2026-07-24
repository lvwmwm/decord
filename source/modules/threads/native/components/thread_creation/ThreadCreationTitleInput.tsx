// Module ID: 15360
// Function ID: 117107
// Dependencies: [31, 1348, 653, 33, 15361, 7018, 8023, 566, 8022, 1212, 7574, 5122, 2]

// Module 15360
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { MAX_CHANNEL_NAME_LENGTH } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo(importAllResult.forwardRef((chatInputRef, ref) => {
  chatInputRef = chatInputRef.chatInputRef;
  const threadSettingsDraft = chatInputRef.threadSettingsDraft;
  const optional = chatInputRef.optional;
  const dependencyMap = ref;
  let obj = chatInputRef(15361);
  obj = { content: threadSettingsDraft.name };
  ref = ref.useRef(threadSettingsDraft.name);
  const items = [threadSettingsDraft.parentChannelId];
  const items1 = [threadSettingsDraft];
  const callback = ref.useCallback((current) => {
    if (null != threadSettingsDraft.parentChannelId) {
      let obj = threadSettingsDraft(ref[5]);
      obj = { name: threadSettingsDraft(ref[6])(current, false) };
      obj.changeThreadSettings(threadSettingsDraft.parentChannelId, obj);
      ref.current = current;
    }
  }, items);
  const items2 = [chatInputRef];
  const callback1 = ref.useCallback(() => {
    if (null != threadSettingsDraft.name) {
      if (null != threadSettingsDraft.parentChannelId) {
        const tmp5 = threadSettingsDraft(ref[6])(threadSettingsDraft.name, true);
        if (tmp5 !== threadSettingsDraft.name) {
          let obj = threadSettingsDraft(ref[5]);
          obj = { name: tmp5 };
          obj.changeThreadSettings(threadSettingsDraft.parentChannelId, obj);
        }
      }
    }
  }, items1);
  const items3 = [threadSettingsDraft.name, ref];
  const callback2 = ref.useCallback(() => {
    const current = chatInputRef.current;
    if (null != current) {
      current.focus();
    }
  }, items2);
  const effect = ref.useEffect(() => {
    let tmp = ref.current !== threadSettingsDraft.name;
    if (tmp) {
      tmp = null != threadSettingsDraft.name;
    }
    if (tmp) {
      let tmp6 = null == ref;
      if (!tmp6) {
        const current = ref.current;
        tmp6 = null == current;
        const obj = current;
      }
      if (!tmp6) {
        obj.setText(threadSettingsDraft.name);
      }
    }
  }, items3);
  const renderErrorResult = obj.renderError(chatInputRef.threadNameError, obj);
  const items4 = [_isNativeReflectConstruct];
  const stateFromStores = chatInputRef(566).useStateFromStores(items4, () => outer1_4.getChannel(threadSettingsDraft.parentChannelId));
  let str = "";
  if (null != stateFromStores) {
    str = chatInputRef(8022).getDefaultThreadName(stateFromStores, threadSettingsDraft.parentMessageId);
    const obj4 = chatInputRef(8022);
  }
  const intl = chatInputRef(1212).intl;
  const string = intl.string;
  const t = chatInputRef(1212).t;
  if (optional) {
    let stringResult = string(t.JPvIiL);
  } else {
    stringResult = string(t.j3XWjD);
  }
  obj = { defaultValue: threadSettingsDraft(5122)(ref), errorMessage: renderErrorResult, label: stringResult, accessibilityLabel: stringResult };
  let stringResult1;
  if (!optional) {
    const intl2 = chatInputRef(1212).intl;
    stringResult1 = intl2.string(chatInputRef(1212).t["/+VEZN"]);
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
    const intl3 = chatInputRef(1212).intl;
    str = intl3.string(chatInputRef(1212).t["Nb2/RE"]);
  }
  obj.placeholder = str;
  obj.ref = ref;
  obj.returnKeyType = "next";
  obj.textContentType = "none";
  return jsx(chatInputRef(7574).TextInput, { defaultValue: threadSettingsDraft(5122)(ref), errorMessage: renderErrorResult, label: stringResult, accessibilityLabel: stringResult });
}));
const result = require("ME").fileFinishedImporting("modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx");

export default memoResult;
