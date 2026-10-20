// Module ID: 12174
// Function ID: 12175
// Name: conjureMentions
// Dependencies: [19, 1392, 12175, 5057, 12124, 558, 576, 12173, 504, 1128, 3883, 2]
// Exports: filterConjureMentionCandidates, findConjureMentionQuery, withConjureMentionNames

// Module 12174 (conjureMentions)
import UserUtils from "UserUtils" /* 5057 */;
import conjureMessageAuthors from "conjureMessageAuthors" /* 12173 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import ConjureStoredAttachmentStore from "ConjureStoredAttachmentStore" /* 12175 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

function splitConjureMentions(text) {
  const items = [];
  let num = 0;
  const matchAllResult = text.matchAll(re6);
  const iter = matchAllResult[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj3;
    let tmp3 = nextResult;
    let num2 = nextResult.index;
    if (num2 == null) {
      num2 = 0;
    }
    let tmp4 = num2;
    if (num2 > num) {
      let obj = { kind: "text", text: text.slice(num, tmp4) };
      let push = items.push;
      let arr = push(obj);
    }
    let push2 = items.push;
    if (null != tmp3[1]) {
      let obj2 = { kind: "mention", userId: tmp3[1] };
      obj3 = obj2;
    } else {
      obj3 = { kind: "file", attachmentId: tmp3[2] };
    }
    let push2Result = push2(obj3);
    num = tmp4 + tmp3[0].length;
    continue;
  }
  if (num < text.length) {
    const push3 = items.push;
    const obj4 = { kind: "text", text: text.slice(num) };
    push3(obj4);
  }
  return items;
}
let tmp2 = /<@!?(\d+)>|<file:(\d{16}-[a-z0-9]{6})>/g;
const re6 = tmp2;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRequestConjureMentionedUsers(text) {
  let closure_0;
  let tmp10;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp4;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(12);
  if (cResult[0] !== text) {
    let tmp6;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function u(kind) {
        let items1;
        if ("mention" === kind.kind) {
          const items = [kind.userId];
          items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      };
      cResult[2] = fn;
      tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    const _Set = Set;
    const self2 = this;
    const self = this;
    const obj2 = splitConjureMentions(text);
    set = new Set(obj2.flatMap(tmp6));
    cResult[0] = text;
    cResult[1] = set;
    tmp4 = set;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[3] !== tmp4) {
    let items = [];
    HermesBuiltin.arraySpread(items, tmp4, 0);
    cResult[3] = tmp4;
    cResult[4] = items;
    tmp10 = items;
  } else {
    tmp10 = cResult[4];
  }
  _require = tmp10;
  if (cResult[5] !== tmp10) {
    const fn2 = function f() {
      for (const item10005 of closure_0) {
        let obj = conjureMessageAuthors;
        let messageAuthor = obj.requestMessageAuthor(item10005);
        continue;
      }
    };
    let items1 = [tmp10];
    cResult[5] = tmp10;
    cResult[6] = fn2;
    cResult[7] = items1;
    tmp15 = items1;
    tmp14 = fn2;
  } else {
    tmp14 = cResult[6];
    tmp15 = cResult[7];
  }
  const effect = react.useEffect(tmp14, tmp15);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    cResult[8] = items2;
    tmp17 = items2;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] !== tmp10) {
    class C {
      constructor() {
        return closure_0.filter((item) => null != user.getUser(item)).length;
      }
    }
    const items3 = [tmp10];
    cResult[9] = tmp10;
    cResult[10] = C;
    cResult[11] = items3;
    tmp20 = items3;
    tmp19 = C;
  } else {
    class C {
      constructor() {
        return closure_0.filter((item) => null != user.getUser(item)).length;
      }
    }
    tmp20 = cResult[11];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(tmp17, tmp19, tmp20);
}) : (function useRequestConjureMentionedUsers(arg0) {
  let closure_0;
  _require = arg0;
  let items = [arg0];
  const memo = react.useMemo(() => {
    const f146296 = (kind) => {
      let items1;
      if ("mention" === kind.kind) {
        const items = [kind.userId];
        items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    };
    const obj = splitConjureMentions(closure_0);
    let items = [...new Set(obj.flatMap(f146296))];
    new Set(obj.flatMap(f146296));
    return items;
  }, items);
  let items1 = [memo];
  const effect = react.useEffect(() => {
    for (const item10005 of memo) {
      let obj = conjureMessageAuthors;
      let messageAuthor = obj.requestMessageAuthor(item10005);
      continue;
    }
  }, items1);
  let obj = require("get initialized");
  const items2 = [UserStore];
  const items3 = [memo];
  return obj.useStateFromStores(items2, () => {
    let user;
    return memo.filter((item) => null != user.getUser(item)).length;
  }, items3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureMentionNames(arg0) {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore, ConjureStoredAttachmentStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const f146298 = (arg0) => user.getUser(arg0);
      const f146299 = (arg0) => attachment.getAttachment(arg0);
      return closure_0.replace(re6, (arg0, arg1, arg2) => {
        if (null == arg1) {
          let str2 = arg2;
          const tmp7 = f146301;
          if (arg2 == null) {
            str2 = "";
          }
          const tmp7Result = tmp7(str2);
          let name;
          if (tmp7Result != null) {
            name = tmp7Result.name;
          }
          if (name == null) {
            const intl = closure_2_0(closure_2_2[9]).intl;
            name = intl.string(closure_2_1(closure_2_2[10]).ff9Q4C);
          }
          const _HermesInternal2 = HermesInternal;
          return "@" + name;
        } else {
          let combined = arg0;
          const tmp3 = f146300(arg1);
          if (null != tmp3) {
            const _HermesInternal = HermesInternal;
            const obj = closure_2_0(closure_2_2[3]);
            combined = "@" + obj.getName(tmp3);
          }
          return combined;
        }
      });
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7, tmp8);
}) : (function useConjureMentionNames(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [UserStore, ConjureStoredAttachmentStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    const f146300 = (arg0) => user.getUser(arg0);
    const f146301 = (arg0) => attachment.getAttachment(arg0);
    return closure_0.replace(re6, (arg0, arg1, arg2) => {
      if (null == arg1) {
        let str2 = arg2;
        const tmp7 = f146301;
        if (arg2 == null) {
          str2 = "";
        }
        const tmp7Result = tmp7(str2);
        let name;
        if (tmp7Result != null) {
          name = tmp7Result.name;
        }
        if (name == null) {
          const intl = closure_2_0(closure_2_2[9]).intl;
          name = intl.string(closure_2_1(closure_2_2[10]).ff9Q4C);
        }
        const _HermesInternal2 = HermesInternal;
        return "@" + name;
      } else {
        let combined = arg0;
        const tmp3 = f146300(arg1);
        if (null != tmp3) {
          const _HermesInternal = HermesInternal;
          const obj = closure_2_0(closure_2_2[3]);
          combined = "@" + obj.getName(tmp3);
        }
        return combined;
      }
    });
  }, items1);
});
let result = size.fileFinishedImporting("modules/conjure/chat/conjureMentions.tsx");

export const CONJURE_MAX_MENTION_SUGGESTIONS = 8;
export const CONJURE_ANY_MENTION = tmp2;
export const findConjureMentionQuery = function findConjureMentionQuery(arr, end) {
  const obj = /(?:^|\s)@([\w.-]*)$/;
  const match = obj.exec(arr.slice(0, end));
  let tmp2 = null;
  if (null != match) {
    tmp2 = { start: end - match[1].length - 1, end, text: match[1] };
    const obj2 = { start: end - match[1].length - 1, end, text: match[1] };
  }
  return tmp2;
};
export const filterConjureMentionCandidates = function filterConjureMentionCandidates(arr, conjureStoredAttachments, text) {
  let closure_0;
  _require = text.toLowerCase();
  const found = arr.filter((username) => {
    let someResult = "" === closure_0;
    if (!someResult) {
      const str = username.username;
      const formatted = str.toLowerCase();
      someResult = formatted.startsWith(tmp);
    }
    if (!someResult) {
      const obj2 = UserUtils;
      const str2 = obj2.getName(username);
      const str3 = str2.toLowerCase();
      const parts = str3.split(/\s+/);
      someResult = parts.some((item) => item.startsWith(closure_0));
    }
    return someResult;
  });
  const substr = found.slice(0, 8);
  const items = [...substr.map((user) => ({ kind: "user", user }))];
  const obj = require("conjureFileMentions");
  const result = obj.filterConjureFileCandidates(conjureStoredAttachments, text);
  const substr1 = result.slice(0, 8);
  HermesBuiltin.arraySpread(items, substr1.map((file) => ({ kind: "file", file })), tmp2);
  return items;
};
export { splitConjureMentions };
export const useRequestConjureMentionedUsers = tmp3;
export const withConjureMentionNames = function withConjureMentionNames(body) {
  let attachment;
  let user;
  const f112322 = (arg0) => user.getUser(arg0);
  const f112323 = (arg0) => attachment.getAttachment(arg0);
  return body.replace(closure_6, (arg0, arg1, arg2) => {
    if (null == arg1) {
      let str2 = arg2;
      const tmp7 = f146301;
      if (arg2 == null) {
        str2 = "";
      }
      const tmp7Result = tmp7(str2);
      let name;
      if (tmp7Result != null) {
        name = tmp7Result.name;
      }
      if (name == null) {
        const intl = closure_2_0(closure_2_2[9]).intl;
        name = intl.string(closure_2_1(closure_2_2[10]).ff9Q4C);
      }
      const _HermesInternal2 = HermesInternal;
      return "@" + name;
    } else {
      let combined = arg0;
      const tmp3 = f146300(arg1);
      if (null != tmp3) {
        const _HermesInternal = HermesInternal;
        const obj = closure_2_0(closure_2_2[3]);
        combined = "@" + obj.getName(tmp3);
      }
      return combined;
    }
  });
};
export const useConjureMentionNames = tmp4;
