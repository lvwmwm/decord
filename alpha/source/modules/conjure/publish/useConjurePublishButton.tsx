// Module ID: 12399
// Function ID: 12400
// Name: useConjurePublishButton
// Dependencies: [32, 19, 1114, 3865, 12400, 2]
// Exports: default

// Module 12399 (useConjurePublishButton)
import intl3 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 12400 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function publishButtonText(upToDate, arg1) {
  let tmp = arg1;
  if (null == arg1) {
    let label;
    if (null == upToDate) {
      const intl2 = intl3.intl;
      label = intl2.string(_modDef3865["120EFN"]);
    } else {
      const tmp2 = null != upToDate && upToDate.upToDate && "publish" === upToDate.action && !upToDate.awaitingApproval;
      if (tmp2) {
        if (!upToDate.publishing) {
          const intl = intl3.intl;
          label = intl.string(_modDef3865.kAfbEN);
        }
      }
      label = upToDate.label;
    }
    tmp = label;
  }
  return tmp;
}
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishButton.tsx");

export default function useConjurePublishButton(arg0, arg1, arg2, arg3) {
  let closure_129_3;
  let str2;
  let tmp13;
  let tmp2;
  let closure_0 = arg1;
  let closure_1 = arg2;
  let closure_2 = arg3;
  let obj = react;
  let tmp = _slicedToArray(react.useState(null), 2);
  [tmp2, closure_129_3] = tmp;
  let closure_4 = react.useRef(null);
  const callback = react.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    ref.current = null;
  }, []);
  const items = [callback];
  const effect = react.useEffect(() => callback, items);
  const items1 = [arg3, callback];
  const memo = react.useMemo(() => {
    const obj = {
      showConfirmation(intl) {
        callback();
        closure_1_3(intl);
        ref.current = setTimeout(() => {
          closure_1_4.current = null;
          closure_1_3(null);
        }, 1500);
      }
    };
    const merged = Object.assign(closure_2);
    return obj;
  }, items1);
  const items2 = [arg1, memo, arg2];
  const memo1 = react.useMemo(() => ({ guildId, platform: memo, busy }), items2);
  const tmp7 = useConjurePublishActionDefault(arg0, memo1);
  let publishing;
  if (tmp7 != null) {
    publishing = tmp7.publishing;
  }
  let closure_7 = tmp9;
  const items3 = [true === publishing, callback];
  const effect1 = obj.useEffect(() => {
    const tmp = closure_7;
    if (tmp) {
      callback();
      closure_1_3(null);
    }
  }, items3);
  let tmp11 = null;
  if (true !== publishing) {
    tmp11 = tmp2;
  }
  const obj2 = { publishOptions: memo1, publish: tmp7, publishing: true === publishing, confirmation: tmp11, variant: str2, text: publishButtonText(tmp7, tmp11), label: publishButtonText(tmp7, null), indicator: tmp13 };
  str2 = "primary";
  const tmp12 = null != tmp7 && tmp7.upToDate && "publish" === tmp7.action && !tmp7.awaitingApproval;
  if (tmp12) {
    str2 = "secondary";
  }
  tmp13 = null;
  if (null != tmp7) {
    let str3 = "publishing";
    if (!tmp7.publishing) {
      let tmp15 = "unpublished";
      const tmp14 = null != tmp7 && tmp7.upToDate && "publish" === tmp7.action && !tmp7.awaitingApproval;
      if (tmp14) {
        tmp15 = null;
      }
      str3 = tmp15;
    }
    tmp13 = str3;
  }
  return obj2;
};
