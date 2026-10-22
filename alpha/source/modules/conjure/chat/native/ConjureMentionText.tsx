// Module ID: 12309
// Function ID: 12310
// Name: ConjureMentionText
// Dependencies: [19, 1392, 21, 558, 576, 5018, 504, 12305, 12298, 11766, 2]

// Module 12309 (ConjureMentionText)
import UserUtils from "UserUtils" /* 5018 */;
import ConjureFileMentionDefault from "ConjureFileMention" /* 11766 */;
import conjureMentions from "conjureMentions" /* 12298 */;
import ConjureSelectedMentionDefault from "ConjureSelectedMention" /* 12305 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ jsx: hasOwnProperty, Fragment: metroRequire } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureUserMention(userId) {
  let first;
  let tmp6;
  let tmp7;
  let obj = userId(576);
  const cResult = obj.c(7);
  const tmp = userId;
  userId = userId.userId;
  const variant = userId.variant;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function o() {
      const obj = UserUtils;
      return obj.getName(UserStore.getUser(userId));
    };
    const items1 = [userId];
    cResult[1] = userId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  let stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (stateFromStores == null) {
    stateFromStores = userId;
  }
  const combined = "@" + stateFromStores;
  if (cResult[4] === combined) {
    let tmp10;
    if (cResult[5] === variant) {
      tmp10 = cResult[6];
    }
    return tmp10;
  }
  const tmp11 = closure_5(ConjureSelectedMentionDefault, { label: combined, variant });
  cResult[4] = combined;
  cResult[5] = variant;
  cResult[6] = tmp11;
  tmp10 = tmp11;
}) : (function ConjureUserMention(userId) {
  userId = userId.userId;
  const variant = userId.variant;
  let obj = userId(504);
  const items = [UserStore];
  const items1 = [userId];
  let stateFromStores = obj.useStateFromStores(items, () => {
    const obj = UserUtils;
    return obj.getName(UserStore.getUser(userId));
  }, items1);
  const tmp2 = closure_5;
  const tmp3 = ConjureSelectedMentionDefault;
  if (stateFromStores == null) {
    stateFromStores = userId;
  }
  const obj2 = { label: "@" + stateFromStores, variant };
  return tmp2(tmp3, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureMentionText(arg0) {
  let arr;
  let text;
  let tmp7;
  let variant;
  let obj = variant(576);
  const cResult = obj.c(9);
  const tmp = variant;
  ({ text, variant } = arg0);
  let obj2 = variant(12298);
  const requestConjureMentionedUsers = obj2.useRequestConjureMentionedUsers(text);
  if (cResult[0] !== text) {
    const tmpResult = tmp(12298);
    const splitConjureMentionsResult = tmpResult.splitConjureMentions(text);
    cResult[0] = text;
    cResult[1] = splitConjureMentionsResult;
    arr = splitConjureMentionsResult;
  } else {
    arr = cResult[1];
  }
  if (cResult[2] === arr) {
    let tmp6;
    let tmp9;
    if (cResult[3] === variant) {
      tmp6 = cResult[4];
    }
    if (cResult[7] !== tmp6) {
      const obj3 = { children: tmp6 };
      const tmp12 = closure_5(closure_6, obj3);
      cResult[7] = tmp6;
      cResult[8] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[8];
    }
    return tmp9;
  }
  if (cResult[5] !== variant) {
    const fn = function j(kind, arg1) {
      let text;
      if ("text" === kind.kind) {
        text = kind.text;
      } else if ("file" === kind.kind) {
        const _HermesInternal2 = HermesInternal;
        const obj2 = { attachmentId: kind.attachmentId, variant };
        const tmp8 = ConjureFileMentionDefault;
        text = hasOwnProperty(tmp8, obj2, "" + arg1 + "-" + kind.attachmentId);
      } else {
        const _HermesInternal = HermesInternal;
        const obj = { userId: kind.userId, variant };
        text = hasOwnProperty(closure_7, obj, "" + arg1 + "-" + kind.userId);
      }
      return text;
    };
    cResult[5] = variant;
    cResult[6] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[6];
  }
  const mapped = arr.map(tmp7);
  cResult[2] = arr;
  cResult[3] = variant;
  cResult[4] = mapped;
  tmp6 = mapped;
}) : (function ConjureMentionText(text) {
  text = text.text;
  require = text;
  const variant = text.variant;
  let obj = conjureMentions;
  const requestConjureMentionedUsers = obj.useRequestConjureMentionedUsers(text);
  const items = [text];
  const memo = react.useMemo(() => {
    const obj = conjureMentions;
    return obj.splitConjureMentions(require);
  }, items);
  let obj2 = {
    children: memo.map((kind, index) => {
      if ("text" === kind.kind) {
        text = kind.text;
      } else if ("file" === kind.kind) {
        const _HermesInternal2 = HermesInternal;
        const obj2 = { attachmentId: kind.attachmentId, variant };
        const tmp8 = ConjureFileMentionDefault;
        text = hasOwnProperty(tmp8, obj2, "" + index + "-" + kind.attachmentId);
      } else {
        const _HermesInternal = HermesInternal;
        const obj = { userId: kind.userId, variant };
        text = hasOwnProperty(closure_7, obj, "" + index + "-" + kind.userId);
      }
      return text;
    })
  };
  return closure_5(closure_6, obj2);
});
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMentionText.tsx");

export default tmp3;
