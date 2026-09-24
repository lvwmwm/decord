// Module ID: 18025
// Function ID: 18026
// Name: useLoadGuildStickerWithCreator
// Dependencies: [5, 32, 19, 1376, 5754, 558, 568, 504, 10716, 2]

// Module 18025 (useLoadGuildStickerWithCreator)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;
import GuildStickersStore from "GuildStickersStore" /* 5754 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/useLoadGuildStickerWithCreator.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(14);
  let obj = require("c");
  const obj2 = noop;
  const tmp = _require;
  [tmp5, dependencyMap] = noop.useState("loading");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStickersStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function f() {
      return GuildStickersStore.getStickersByGuildId(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmp4 = _slicedToArray(noop.useState("loading"), 2);
  const stateFromStores = tmp(504).useStateFromStores(first, tmp8);
  if (cResult[3] !== arg0) {
    const fn2 = function v() {
      const abortController = new AbortController();
      const signal = abortController.signal;
      closure_0 = asyncGeneratorStep(async () => {
        await _null(10716).fetchGuildStickersWithCreator(_null, c1);
        if (1 === tmp7) {
          c3 = 0;
          signal("error");
          c0 = null;
          c4 = 3;
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          signal("success");
          c0 = null;
          c3 = 0;
        }
        return arg1;
      });
      (function fetch() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
      return () => {
        dependencyMap("loading");
        if (closure_0 != null) {
          closure_0.abort();
        }
      };
    };
    const items1 = [arg0];
    cResult[3] = arg0;
    cResult[4] = fn2;
    cResult[5] = items1;
    let tmp10 = items1;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  const effect = obj2.useEffect(tmp9, tmp10);
  if ("success" === tmp5) {
    if (cResult[6] !== stateFromStores) {
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor(arg0) {
            user = closure_1_5.getUser(arg0.user_id);
            tmp2 = arg0;
            if (null != user) {
              obj = {};
              tmp3 = obj;
              tmp4 = arg0;
              merged = Object.assign(arg0);
              obj.user = user;
              tmp2 = obj;
            }
            return tmp2;
          }
        }
        cResult[8] = E;
        const tmp14 = E;
      } else {
        class E {
          constructor(arg0) {
            user = closure_1_5.getUser(arg0.user_id);
            tmp2 = arg0;
            if (null != user) {
              obj = {};
              tmp3 = obj;
              tmp4 = arg0;
              merged = Object.assign(arg0);
              obj.user = user;
              tmp2 = obj;
            }
            return tmp2;
          }
        }
      }
      const mapped = stateFromStores.map(tmp14);
      cResult[6] = stateFromStores;
      cResult[7] = mapped;
    } else {
      class E {
        constructor(arg0) {
          user = closure_1_5.getUser(arg0.user_id);
          tmp2 = arg0;
          if (null != user) {
            obj = {};
            tmp3 = obj;
            tmp4 = arg0;
            merged = Object.assign(arg0);
            obj.user = user;
            tmp2 = obj;
          }
          return tmp2;
        }
      }
      if (cResult[9] === tmp5) {
        class E {
          constructor(arg0) {
            user = closure_1_5.getUser(arg0.user_id);
            tmp2 = arg0;
            if (null != user) {
              obj = {};
              tmp3 = obj;
              tmp4 = arg0;
              merged = Object.assign(arg0);
              obj.user = user;
              tmp2 = obj;
            }
            return tmp2;
          }
        }
        return tmp17;
      }
      const obj3 = { status: tmp5, stickers: tmp13 };
      cResult[9] = tmp5;
      cResult[10] = tmp13;
      cResult[11] = obj3;
      tmp17 = obj3;
    }
  } else {
    class E {
      constructor(arg0) {
        user = closure_1_5.getUser(arg0.user_id);
        tmp2 = arg0;
        if (null != user) {
          obj = {};
          tmp3 = obj;
          tmp4 = arg0;
          merged = Object.assign(arg0);
          obj.user = user;
          tmp2 = obj;
        }
        return tmp2;
      }
    }
    return tmp12;
  }
}) : ((arg0) => {
  _require = arg0;
  [tmp2, dependencyMap] = noop.useState("loading");
  const tmp = _slicedToArray(noop.useState("loading"), 2);
  const items = [GuildStickersStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStickersStore.getStickersByGuildId(closure_0));
  const items1 = [arg0];
  const effect = noop.useEffect(() => {
    closure_2 = async function _fetch2() {
      closure_0 = tmp3;
      await abortController(signal[8]).fetchGuildStickersWithCreator(closure_0, signal);
      if (1 === tmp7) {
        c3 = 0;
        v2("error");
        closure_128_0 = null;
        c4 = 3;
      } else if (arg0 === 1) {
        c4 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        v2("success");
        closure_128_0 = null;
        c3 = 0;
      }
      return arg1;
    };
    const abortController = new AbortController();
    const signal = abortController.signal;
    (function fetch() {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
    return () => {
      dependencyMap("loading");
      if (abortController != null) {
        abortController.abort();
      }
    };
  }, items1);
  if ("success" === tmp2) {
    const obj2 = {
      status: tmp2,
      stickers: stateFromStores.map((user_id) => {
          user = user.getUser(user_id.user_id);
          let tmp2 = user_id;
          if (null != user) {
            const obj = {};
            const merged = Object.assign(user_id);
            obj.user = user;
            tmp2 = obj;
          }
          return tmp2;
        })
    };
    let obj3 = obj2;
  } else {
    obj3 = { status: tmp2 };
  }
  return obj3;
});
