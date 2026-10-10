// Module ID: 17255
// Function ID: 17256
// Name: useConjureIncompleteAppNotice
// Dependencies: [32, 19, 2087, 558, 576, 17110, 504, 1126, 3849, 2]

// Module 17255 (useConjureIncompleteAppNotice)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2087 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureIncompleteAppNotice(arg0) {
  let closure_0;
  let closure_2;
  let first;
  let first1;
  let guildId;
  let tmp19;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  let tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(11);
  const tmp4 = guildId(17110)(arg0);
  guildId = undefined;
  if (tmp4 != null) {
    guildId = tmp4.guildId;
  }
  if (guildId == null) {
    guildId = null;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function o() {
      let tmp2 = null;
      if (null != guildId) {
        const guild = GuildStore.getGuild(tmp);
        let name;
        if (guild != null) {
          name = guild.name;
        }
        if (name == null) {
          name = null;
        }
        tmp2 = name;
      }
      return tmp2;
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  [first1, dependencyMap] = react.useState(null);
  let missingSurface;
  if (tmp4 != null) {
    missingSurface = tmp4.missingSurface;
  }
  if (missingSurface == null) {
    missingSurface = null;
  }
  let tmp13 = null;
  if (null != missingSurface) {
    tmp13 = null;
    if (first1 !== arg0) {
      if (cResult[3] === stateFromStores) {
        let tmp14;
        if (cResult[4] === missingSurface) {
          tmp14 = cResult[5];
        }
        if (cResult[6] !== arg0) {
          class I {
            constructor() {
              return closure_2(closure_0);
            }
          }
          cResult[6] = arg0;
          cResult[7] = I;
        } else {
          class I {
            constructor() {
              return closure_2(closure_0);
            }
          }
        }
        if (cResult[8] === tmp14) {
          class I {
            constructor() {
              return closure_2(closure_0);
            }
          }
          tmp13 = tmp19;
        }
        const obj2 = { message: tmp14, onDismiss: tmp18 };
        cResult[8] = tmp14;
        cResult[9] = tmp18;
        cResult[10] = obj2;
        tmp19 = obj2;
      }
      const intl = tmp(1126).intl;
      const format = intl.format;
      if ("channel" === missingSurface) {
        class I {
          constructor() {
            return closure_2(closure_0);
          }
        }
      } else {
        class I {
          constructor() {
            return closure_2(closure_0);
          }
        }
      }
      const tmp16 = stateFromStores;
      if (stateFromStores == null) {
        class I {
          constructor() {
            return closure_2(closure_0);
          }
        }
      }
      const obj3 = { server: tmp16 };
      const formatResult = format(tmp15, obj3);
      cResult[3] = stateFromStores;
      cResult[4] = missingSurface;
      cResult[5] = formatResult;
      tmp14 = formatResult;
    }
  }
  return tmp13;
}) : (function useConjureIncompleteAppNotice(arg0) {
  let closure_0;
  let closure_2;
  let first;
  let guildId;
  let obj3;
  _require = arg0;
  const tmp = guildId;
  let tmp2 = dependencyMap;
  const tmp3 = guildId(17110)(arg0);
  guildId = undefined;
  if (tmp3 != null) {
    guildId = tmp3.guildId;
  }
  if (guildId == null) {
    guildId = null;
  }
  const items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != guildId) {
      const guild = GuildStore.getGuild(tmp);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      if (name == null) {
        name = null;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  [first, dependencyMap] = react.useState(null);
  let missingSurface;
  const tmp5 = _require;
  if (tmp3 != null) {
    missingSurface = tmp3.missingSurface;
  }
  if (missingSurface == null) {
    missingSurface = null;
  }
  let tmp10 = null;
  if (null != missingSurface) {
    tmp10 = null;
    if (first !== arg0) {
      let Lm7IRC;
      const intl = tmp5(1126).intl;
      const format = intl.format;
      if ("channel" === missingSurface) {
        Lm7IRC = tmp(3849)["1cm4fj"];
      } else {
        Lm7IRC = tmp(3849).Lm7IRC;
      }
      let str2 = stateFromStores;
      if (stateFromStores == null) {
        str2 = "";
      }
      const obj2 = {
        message: format(Lm7IRC, obj3),
        onDismiss() {
              return closure_2(closure_0);
            }
      };
      tmp10 = obj2;
      obj3 = { server: str2 };
    }
  }
  return tmp10;
});
const result = size.fileFinishedImporting("modules/conjure/publish/useConjureIncompleteAppNotice.tsx");

export default tmp2;
