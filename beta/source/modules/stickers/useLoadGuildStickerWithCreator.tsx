// Module ID: 17377
// Function ID: 17378
// Name: useLoadGuildStickerWithCreator
// Dependencies: [5, 32, 19, 1372, 5815, 504, 9849, 2]
// Exports: default

// Module 17377 (useLoadGuildStickerWithCreator)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import GuildStickersStore from "GuildStickersStore" /* 5815 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c4, closure_0, user;

const result = size.fileFinishedImporting("modules/stickers/useLoadGuildStickerWithCreator.tsx");

export default function useLoadGuildStickersWithCreator(arg0) {
  let obj3;
  let tmp2;
  _require = arg0;
  const tmp = _slicedToArray(react.useState("loading"), 2);
  [tmp2, dependencyMap] = tmp;
  let obj = require("get initialized");
  const items = [GuildStickersStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStickersStore.getStickersByGuildId(closure_0));
  const items1 = [arg0];
  const effect = react.useEffect(() => {
    function fetch() {
      return obj(...arguments);
    }
    let obj = function _fetch() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj2;
        let v1;
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c3;
          try {
            c4 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_0 = tmp;
                c3 = 1;
                c1 = 2;
                c4 = 1;
                const obj5 = { value: obj2.fetchGuildStickersWithCreator(closure_0, signal), done: false };
                obj2 = abortController(signal[6]);
                return obj5;
              }
            } else {
              if (1 === tmp4) {
                c3 = 0;
                c1("error");
                let c0 = null;
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c1("success");
                c0 = null;
                c3 = 0;
              }
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp16) {
            let closure_2 = tmp16;
            if (0 === c3) {
              c4 = 3;
              throw tmp16;
            } else {
              c1 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch();
    return () => {
      dependencyMap("loading");
      obj = abortController;
      if (abortController != null) {
        obj.abort();
      }
    };
  }, items1);
  if ("success" === tmp2) {
    let obj2 = {
      status: tmp2,
      stickers: stateFromStores.map((user_id) => {
          user = user.getUser(user_id.user_id);
          let tmp2 = user_id;
          if (null != user) {
            const obj = { user };
            const merged = Object.assign(user_id);
            tmp2 = obj;
          }
          return tmp2;
        })
    };
    obj3 = obj2;
  } else {
    obj3 = { status: tmp2 };
  }
  return obj3;
};
