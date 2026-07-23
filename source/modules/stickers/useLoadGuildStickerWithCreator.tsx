// Module ID: 16266
// Function ID: 126632
// Name: useLoadGuildStickersWithCreator
// Dependencies: [5, 57, 31, 1849, 5036, 566, 9601, 2]
// Exports: default

// Module 16266 (useLoadGuildStickersWithCreator)
import initialize from "initialize";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/stickers/useLoadGuildStickerWithCreator.tsx");

export default function useLoadGuildStickersWithCreator(arg0) {
  const _require = arg0;
  const tmp = callback(React.useState("loading"), 2);
  const first = tmp[0];
  const dependencyMap = tmp[1];
  let obj = _require(566);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getStickersByGuildId(closure_0));
  const items1 = [arg0];
  const effect = React.useEffect(() => {
    function _fetch() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = outer2_2(tmp);
      return obj(...arguments);
    }
    const abortController = new AbortController();
    const signal = abortController.signal;
    (function fetch() {
      return _fetch(...arguments);
    })();
    return () => {
      signal("loading");
      if (null != abortController) {
        abortController.abort();
      }
    };
  }, items1);
  if ("success" === first) {
    obj = {
      status: first,
      stickers: stateFromStores.map((user_id) => {
          const user = outer1_5.getUser(user_id.user_id);
          let tmp2 = user_id;
          if (null != user) {
            const obj = {};
            const merged = Object.assign(user_id);
            obj["user"] = user;
            tmp2 = obj;
          }
          return tmp2;
        })
    };
  } else {
    obj = { status: first };
  }
  return obj;
};
