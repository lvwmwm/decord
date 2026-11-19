// Module ID: 18464
// Function ID: 18465
// Name: useConjureIncompleteAppNotice
// Dependencies: [32, 19, 4663, 18299, 504, 1113, 4089, 2]
// Exports: default

// Module 18464 (useConjureIncompleteAppNotice)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4663 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/publish/useConjureIncompleteAppNotice.tsx");

export default function useConjureIncompleteAppNotice(arg0) {
  let closure_0;
  let closure_2;
  let first;
  let guildId;
  let obj3;
  _require = arg0;
  const tmp = guildId;
  let tmp2 = dependencyMap;
  const tmp3 = guildId(18299)(arg0);
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
      const intl = tmp5(1113).intl;
      const format = intl.format;
      if ("channel" === missingSurface) {
        Lm7IRC = tmp(4089)["1cm4fj"];
      } else {
        Lm7IRC = tmp(4089).Lm7IRC;
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
};
