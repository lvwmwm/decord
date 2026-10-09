// Module ID: 18440
// Function ID: 18441
// Name: useRoleSubscriptionEmojis
// Dependencies: [19, 5994, 558, 576, 504, 5999, 2]

// Module 18440 (useRoleSubscriptionEmojis)
import RoleSubscriptionEmojiUtils from "RoleSubscriptionEmojiUtils" /* 5999 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5994 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let items = [];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRoleSubscriptionEmojis(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  let tmp8;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(9);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [EmojiStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return EmojiStore.getGuildEmoji(closure_0);
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
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (null != stateFromStores) {
    let tmp10;
    if (cResult[4] === stateFromStores) {
      let tmp9;
      if (cResult[5] === arg0) {
        tmp9 = cResult[6];
      }
      tmp8 = tmp9;
    }
    if (cResult[7] !== arg0) {
      class E {
        constructor(roles) {
          const obj = RoleSubscriptionEmojiUtils;
          return obj.isRoleSubscriptionEmoji(roles, closure_0);
        }
      }
      cResult[7] = arg0;
      cResult[8] = E;
      tmp10 = E;
    } else {
      class E {
        constructor(roles) {
          const obj = RoleSubscriptionEmojiUtils;
          return obj.isRoleSubscriptionEmoji(roles, closure_0);
        }
      }
    }
    const found = stateFromStores.filter(tmp10);
    cResult[4] = stateFromStores;
    cResult[5] = arg0;
    cResult[6] = found;
    tmp9 = found;
  } else {
    class E {
      constructor(roles) {
        const obj = RoleSubscriptionEmojiUtils;
        return obj.isRoleSubscriptionEmoji(roles, closure_0);
      }
    }
  }
  return tmp8;
}) : (function useRoleSubscriptionEmojis(arg0) {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  let obj = require("get initialized");
  items = [EmojiStore];
  const items1 = [arg0];
  stateFromStores = obj.useStateFromStores(items, () => EmojiStore.getGuildEmoji(closure_0), items1);
  const items2 = [stateFromStores, arg0];
  return react.useMemo(() => {
    let found;
    const arr = stateFromStores;
    if (null == stateFromStores) {
      found = items;
    } else {
      found = arr.filter((item) => {
        const obj = closure_0(stateFromStores[5]);
        return obj.isRoleSubscriptionEmoji(item, closure_1_0);
      });
    }
    return found;
  }, items2);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx");

export default tmp2;
export const NO_EMOJIS_AVAILABLE = items;
