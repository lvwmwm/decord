// Module ID: 12243
// Function ID: 12244
// Name: useConjurePublishButton
// Dependencies: [32, 19, 1125, 3864, 558, 576, 11857, 2]

// Module 12243 (useConjurePublishButton)
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 11857 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function publishButtonText(upToDate, arg1) {
  let tmp = arg1;
  if (null == arg1) {
    let label;
    if (null == upToDate) {
      const intl2 = intl3.intl;
      label = intl2.string(_modDef3864["120EFN"]);
    } else {
      const tmp2 = null != upToDate && upToDate.upToDate && "publish" === upToDate.action && !upToDate.awaitingApproval;
      if (tmp2) {
        if (!upToDate.publishing) {
          const intl = intl3.intl;
          label = intl.string(_modDef3864.kAfbEN);
        }
      }
      label = upToDate.label;
    }
    tmp = label;
  }
  return tmp;
}
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePublishButton(arg0, guildId, busy, arg3) {
  let closure_129_0;
  let first;
  let tmp4;
  let tmp5;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(29);
  [r10015, closure_129_0] = _slicedToArray(react.useState(null), 2);
  const tmp2 = _slicedToArray(react.useState(null), 2);
  let closure_1 = react.useRef(null);
  const obj2 = react;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      ref.current = null;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y() {
      return first;
    };
    const items = [first];
    cResult[1] = fn2;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = fn2;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = obj2.useEffect(tmp4, tmp5);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor(arg0) {
        tmp = closure_2();
        tmp2 = closure_0(arg0);
        closure_1.current = setTimeout(() => {
          ref.current = null;
          closure_1_0(null);
        }, 1500);
        return;
      }
    }
    cResult[3] = P;
    tmp7 = P;
  } else {
    class P {
      constructor(arg0) {
        tmp = closure_2();
        tmp2 = closure_0(arg0);
        closure_1.current = setTimeout(() => {
          ref.current = null;
          closure_1_0(null);
        }, 1500);
        return;
      }
    }
  }
  if (cResult[4] !== arg3) {
    class P {
      constructor(arg0) {
        tmp = closure_2();
        tmp2 = closure_0(arg0);
        closure_1.current = setTimeout(() => {
          ref.current = null;
          closure_1_0(null);
        }, 1500);
        return;
      }
    }
    const merged = Object.assign(arg3);
    tmp9.showConfirmation = tmp7;
    cResult[4] = arg3;
    cResult[5] = tmp9;
  } else {
    class P {
      constructor(arg0) {
        tmp = closure_2();
        tmp2 = closure_0(arg0);
        closure_1.current = setTimeout(() => {
          ref.current = null;
          closure_1_0(null);
        }, 1500);
        return;
      }
    }
  }
  if (cResult[6] === busy) {
    class P {
      constructor(arg0) {
        tmp = closure_2();
        tmp2 = closure_0(arg0);
        closure_1.current = setTimeout(() => {
          ref.current = null;
          closure_1_0(null);
        }, 1500);
        return;
      }
    }
  }
  const obj3 = { guildId, platform: tmp8, busy };
  cResult[6] = busy;
  cResult[7] = guildId;
  cResult[8] = tmp8;
  cResult[9] = obj3;
}) : (function useConjurePublishButton(arg0, arg1, arg2, arg3) {
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
});
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishButton.tsx");

export default tmp2;
