// Module ID: 12870
// Function ID: 12871
// Name: conjureMentions
// Dependencies: [19, 1385, 12346, 5226, 12343, 11752, 504, 1113, 4026, 2]
// Exports: filterConjureMentionCandidates, findConjureMentionQuery, matchesConjureMentionQuery, useConjureMentionNames, useRequestConjureMentionedUsers, withConjureMentionNames

// Module 12870 (conjureMentions)
import UserUtils from "UserUtils" /* 5226 */;
import conjureMessageAuthors from "conjureMessageAuthors" /* 11752 */;
import conjureFileMentions from "conjureFileMentions" /* 12343 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import ConjureStoredAttachmentStore from "ConjureStoredAttachmentStore" /* 12346 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

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
let result = size.fileFinishedImporting("modules/conjure/chat/conjureMentions.tsx");

export const CONJURE_MAX_MENTION_SUGGESTIONS = 8;
export const CONJURE_ANY_MENTION = tmp2;
export function findConjureMentionQuery(arr, end) {
  const obj = /(?:^|\s)@([\w.-]*)$/;
  const match = obj.exec(arr.slice(0, end));
  let tmp2 = null;
  if (null != match) {
    tmp2 = { start: end - match[1].length - 1, end, text: match[1] };
    const obj2 = { start: end - match[1].length - 1, end, text: match[1] };
  }
  return tmp2;
}
export function matchesConjureMentionQuery(username, formatted, nick) {
  let closure_0 = formatted;
  let tmp = "" === formatted;
  if (!tmp) {
    const str = username.username;
    formatted = str.toLowerCase();
    let someResult = formatted.startsWith(formatted);
    if (!someResult) {
      let str2 = nick;
      const items = [, ];
      const obj2 = UserUtils;
      items[0] = obj2.getName(username);
      if (nick == null) {
        str2 = "";
      }
      items[1] = str2;
      const str4 = items.join(" ");
      const str5 = str4.toLowerCase();
      const parts = str5.split(/\s+/);
      someResult = parts.some((item) => item.startsWith(closure_0));
    }
    tmp = someResult;
  }
  return tmp;
}
export function filterConjureMentionCandidates(arr, conjureStoredAttachments, text) {
  const substr = arr.slice(0, 8);
  const items = [...substr.map((user) => ({ kind: "user", user }))];
  const obj = conjureFileMentions;
  const result = obj.filterConjureFileCandidates(conjureStoredAttachments, text);
  const substr1 = result.slice(0, 8);
  HermesBuiltin.arraySpread(items, substr1.map((file) => ({ kind: "file", file })), tmp2);
  return items;
}
export { splitConjureMentions };
export function useRequestConjureMentionedUsers(text) {
  _require = text;
  let items = [text];
  const memo = react.useMemo(() => {
    const f130240 = (kind) => {
      let items1;
      if ("mention" === kind.kind) {
        const items = [kind.userId];
        items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    };
    const obj = splitConjureMentions(_require);
    let items = [...new Set(obj.flatMap(f130240))];
    new Set(obj.flatMap(f130240));
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
}
export function withConjureMentionNames(body) {
  let attachment;
  let user;
  const f104581 = (arg0) => user.getUser(arg0);
  const f104582 = (arg0) => attachment.getAttachment(arg0);
  return body.replace(closure_6, (arg0, arg1, arg2) => {
    if (null == arg1) {
      let str2 = arg2;
      const tmp7 = f130243;
      if (arg2 == null) {
        str2 = "";
      }
      const tmp7Result = tmp7(str2);
      let name;
      if (tmp7Result != null) {
        name = tmp7Result.name;
      }
      if (name == null) {
        const intl = trimmed(closure_2_2[7]).intl;
        name = intl.string(closure_2_1(closure_2_2[8]).ff9Q4C);
      }
      const _HermesInternal2 = HermesInternal;
      return "@" + name;
    } else {
      let combined = arg0;
      const tmp3 = f130242(arg1);
      if (null != tmp3) {
        const _HermesInternal = HermesInternal;
        const obj = trimmed(closure_2_2[3]);
        combined = "@" + obj.getName(tmp3);
      }
      return combined;
    }
  });
}
export function useConjureMentionNames(trimmed) {
  _require = trimmed;
  let obj = require("get initialized");
  const items = [UserStore, ConjureStoredAttachmentStore];
  const items1 = [trimmed];
  return obj.useStateFromStores(items, () => {
    const f130242 = (arg0) => user.getUser(arg0);
    const f130243 = (arg0) => attachment.getAttachment(arg0);
    return trimmed.replace(re6, (arg0, arg1, arg2) => {
      if (null == arg1) {
        let str2 = arg2;
        const tmp7 = f130243;
        if (arg2 == null) {
          str2 = "";
        }
        const tmp7Result = tmp7(str2);
        let name;
        if (tmp7Result != null) {
          name = tmp7Result.name;
        }
        if (name == null) {
          const intl = trimmed(closure_2_2[7]).intl;
          name = intl.string(closure_2_1(closure_2_2[8]).ff9Q4C);
        }
        const _HermesInternal2 = HermesInternal;
        return "@" + name;
      } else {
        let combined = arg0;
        const tmp3 = f130242(arg1);
        if (null != tmp3) {
          const _HermesInternal = HermesInternal;
          const obj = trimmed(closure_2_2[3]);
          combined = "@" + obj.getName(tmp3);
        }
        return combined;
      }
    });
  }, items1);
}
