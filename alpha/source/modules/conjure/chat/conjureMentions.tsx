// Module ID: 12070
// Function ID: 12071
// Name: conjureMentions
// Dependencies: [19, 1390, 5018, 558, 576, 12069, 504, 2]
// Exports: encodeConjureMentions, filterConjureMentionCandidates, findConjureMentionQuery, insertConjureMention, withConjureMentionNames

// Module 12070 (conjureMentions)
import UserUtils from "UserUtils" /* 5018 */;
import conjureMessageAuthors from "conjureMessageAuthors" /* 12069 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, map, set;

function splitConjureMentions(text) {
  const items = [];
  let num = 0;
  const matchAllResult = text.matchAll(re4);
  const iter = matchAllResult[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
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
    let obj2 = { kind: "mention", userId: tmp3[1] };
    let arr3 = items.push(obj2);
    num = tmp4 + tmp3[0].length;
    continue;
  }
  if (num < text.length) {
    const push2 = items.push;
    const obj3 = { kind: "text", text: text.slice(num) };
    push2(obj3);
  }
  return items;
}
const re4 = /<@!?(\d+)>/g;
const re5 = /(^|\s)@([\w.]+)/g;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRequestConjureMentionedUsers(text) {
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
    const fn3 = function h() {
      let user;
      return closure_0.filter((item) => null != user.getUser(item)).length;
    };
    const items3 = [tmp10];
    cResult[9] = tmp10;
    cResult[10] = fn3;
    cResult[11] = items3;
    tmp20 = items3;
    tmp19 = fn3;
  } else {
    tmp19 = cResult[10];
    tmp20 = cResult[11];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(tmp17, tmp19, tmp20);
}) : (function useRequestConjureMentionedUsers(arg0) {
  let closure_0;
  _require = arg0;
  let items = [arg0];
  const memo = react.useMemo(() => {
    const f145301 = (kind) => {
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
    let items = [...new Set(obj.flatMap(f145301))];
    new Set(obj.flatMap(f145301));
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
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureMentionNames(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      const f145303 = (arg0) => user.getUser(arg0);
      return closure_0.replace(re4, (arg0, arg1) => {
        let combined = arg0;
        const tmp2 = f145304(arg1);
        if (null != tmp2) {
          const _HermesInternal = HermesInternal;
          const obj = closure_2_0(closure_2_1[2]);
          combined = "@" + obj.getName(tmp2);
        }
        return combined;
      });
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : (function useConjureMentionNames(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [UserStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    const f145304 = (arg0) => user.getUser(arg0);
    return closure_0.replace(re4, (arg0, arg1) => {
      let combined = arg0;
      const tmp2 = f145304(arg1);
      if (null != tmp2) {
        const _HermesInternal = HermesInternal;
        const obj = closure_2_0(closure_2_1[2]);
        combined = "@" + obj.getName(tmp2);
      }
      return combined;
    });
  }, items1);
});
const result = size.fileFinishedImporting("modules/conjure/chat/conjureMentions.tsx");

export const CONJURE_MAX_MENTION_SUGGESTIONS = 8;
export const findConjureMentionQuery = function findConjureMentionQuery(arr, end) {
  const obj = /(?:^|\s)@([\w.]*)$/;
  const match = obj.exec(arr.slice(0, end));
  let tmp2 = null;
  if (null != match) {
    tmp2 = { start: end - match[1].length - 1, end, text: match[1] };
    const obj2 = { start: end - match[1].length - 1, end, text: match[1] };
  }
  return tmp2;
};
export const filterConjureMentionCandidates = function filterConjureMentionCandidates(arr, text) {
  let closure_0 = text.toLowerCase();
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
  return found.slice(0, 8);
};
export const insertConjureMention = function insertConjureMention(arr, start, username) {
  let sum;
  const combined = "@" + username.username + " ";
  const obj = { value: sum + arr.slice(start.end), caret: start.start + combined.length };
  sum = arr.slice(0, start.start) + combined;
  return obj;
};
export const encodeConjureMentions = function encodeConjureMentions(chat, arr) {
  if (0 === arr.length) {
    return chat;
  } else {
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map(arr.map((username) => {
      const items = [, ];
      const str = username.username;
      items[0] = str.toLowerCase();
      items[1] = username.id;
      return items;
    }));
    return chat.replace(re5, (arg0, arg1, str) => {
      let combined = arg0;
      str = str.replace(/\.+$/, "");
      const value = map.get(str.toLowerCase());
      if (null != value) {
        const _HermesInternal = HermesInternal;
        combined = "" + arg1 + "<@" + value + ">" + str.slice(str.length);
      }
      return combined;
    });
  }
};
export { splitConjureMentions };
export const useRequestConjureMentionedUsers = tmp2;
export const withConjureMentionNames = function withConjureMentionNames(body) {
  let user;
  const f111496 = (arg0) => user.getUser(arg0);
  return body.replace(closure_4, (arg0, arg1) => {
    let combined = arg0;
    const tmp2 = f145304(arg1);
    if (null != tmp2) {
      const _HermesInternal = HermesInternal;
      const obj = closure_2_0(closure_2_1[2]);
      combined = "@" + obj.getName(tmp2);
    }
    return combined;
  });
};
export const useConjureMentionNames = tmp3;
