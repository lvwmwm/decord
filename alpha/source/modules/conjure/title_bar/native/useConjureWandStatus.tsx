// Module ID: 14169
// Function ID: 14170
// Name: useConjureWandStatus
// Dependencies: [6774, 558, 576, 14170, 10723, 5264, 1125, 3831, 2]

// Module 14169 (useConjureWandStatus)
import react from "react" /* 576 */;
import intl5 from "intl" /* 1125 */;
import _modDef3831 from "module_3831" /* 3831 */;
import useMountEffectDefault from "useMountEffect" /* 5264 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10723 */;
import useConjureTitleBarStatusDefault from "useConjureTitleBarStatus" /* 14170 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6774 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureWandStatus() {
  let first;
  let ownedProjectsFetchState;
  let tmp12;
  let tmp16;
  let tmp22;
  let tmp9;
  let obj = react;
  const cResult = obj.c(16);
  const tmp5 = useConjureTitleBarStatusDefault();
  const status = tmp5.status;
  let kind;
  const hasUnread = tmp5.hasUnread;
  if (status != null) {
    kind = status.kind;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      if ("unattempted" === ownedProjectsFetchState.getOwnedProjectsFetchState()) {
        const obj = ConjureActionCreators;
        obj.listProjects();
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  useMountEffectDefault(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(_modDef3831.uk6jhJ);
    cResult[1] = stringResult;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== ("working" === kind)) {
    let stringResult1 = null;
    if ("working" === kind) {
      const intl2 = tmp(1125).intl;
      stringResult1 = intl2.string(tmp4(3831)["Y8pS+n"]);
    }
    cResult[2] = "working" === kind;
    cResult[3] = stringResult1;
    tmp12 = stringResult1;
  } else {
    tmp12 = cResult[3];
  }
  let kind1;
  const tmp14 = cResult[4];
  if (status != null) {
    kind1 = status.kind;
  }
  if (tmp14 !== kind1) {
    let kind2;
    if (status != null) {
      kind2 = status.kind;
    }
    let stringResult2 = null;
    if ("needs_input" === kind2) {
      const intl3 = tmp(1125).intl;
      stringResult2 = intl3.string(tmp4(3831).hfIuc7);
    }
    let kind3;
    if (status != null) {
      kind3 = status.kind;
    }
    cResult[4] = kind3;
    cResult[5] = stringResult2;
    tmp16 = stringResult2;
  } else {
    tmp16 = cResult[5];
  }
  let kind4;
  const tmp20 = cResult[6];
  if (status != null) {
    kind4 = status.kind;
  }
  if (tmp20 !== kind4) {
    let kind5;
    if (status != null) {
      kind5 = status.kind;
    }
    let stringResult3 = null;
    if ("unread" === kind5) {
      const intl4 = tmp(1125).intl;
      stringResult3 = intl4.string(tmp4(3831)["6XGnHJ"]);
    }
    let kind6;
    if (status != null) {
      kind6 = status.kind;
    }
    cResult[6] = kind6;
    cResult[7] = stringResult3;
    tmp22 = stringResult3;
  } else {
    tmp22 = cResult[7];
  }
  if (cResult[8] === tmp12) {
    if (cResult[9] === tmp16) {
      let obj2;
      if (cResult[10] === tmp22) {
        obj2 = cResult[11];
      }
      const joined = obj2.join(", ");
      if (cResult[12] === joined) {
        if (cResult[13] === ("working" !== kind && hasUnread)) {
          let tmp29;
          if (cResult[14] === "working" === kind) {
            tmp29 = cResult[15];
          }
          return tmp29;
        }
      }
      const obj3 = { working: "working" === kind, hasBadge: "working" !== kind && hasUnread, accessibilityLabel: joined };
      cResult[12] = joined;
      cResult[13] = "working" !== kind && hasUnread;
      cResult[14] = "working" === kind;
      cResult[15] = obj3;
      tmp29 = obj3;
    }
  }
  const items = [tmp9, tmp12, tmp16, tmp22];
  const found = items.filter((item) => null != item);
  cResult[8] = tmp12;
  cResult[9] = tmp16;
  cResult[10] = tmp22;
  cResult[11] = found;
  obj2 = found;
}) : (function useConjureWandStatus() {
  let found;
  let ownedProjectsFetchState;
  const tmp3 = useConjureTitleBarStatusDefault();
  const status = tmp3.status;
  let kind;
  const hasUnread = tmp3.hasUnread;
  if (status != null) {
    kind = status.kind;
  }
  useMountEffectDefault(() => {
    if ("unattempted" === ownedProjectsFetchState.getOwnedProjectsFetchState()) {
      const obj = ConjureActionCreators;
      obj.listProjects();
    }
  });
  let obj = { working: tmp5, hasBadge: !tmp5 && hasUnread, accessibilityLabel: found.join(", ") };
  const intl = intl5.intl;
  const items = [intl.string(tmp(3831).uk6jhJ), , , ];
  let stringResult = null;
  if ("working" === kind) {
    const intl2 = tmp7(1125).intl;
    stringResult = intl2.string(tmp(3831)["Y8pS+n"]);
  }
  items[1] = stringResult;
  let kind1;
  if (status != null) {
    kind1 = status.kind;
  }
  let stringResult1 = null;
  if ("needs_input" === kind1) {
    const intl3 = tmp7(1125).intl;
    stringResult1 = intl3.string(tmp(3831).hfIuc7);
  }
  items[2] = stringResult1;
  let kind2;
  if (status != null) {
    kind2 = status.kind;
  }
  let stringResult2 = null;
  if ("unread" === kind2) {
    const intl4 = tmp7(1125).intl;
    stringResult2 = intl4.string(tmp(3831)["6XGnHJ"]);
  }
  items[3] = stringResult2;
  found = items.filter((item) => null != item);
  return obj;
});
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/useConjureWandStatus.tsx");

export default tmp2;
