// Module ID: 17152
// Function ID: 17153
// Name: useConjurePublishedServerName
// Dependencies: [2086, 10617, 558, 576, 504, 2]

// Module 17152 (useConjurePublishedServerName)
import GuildStore from "GuildStore" /* 2086 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10617 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePublishedServerName(arg0) {
  let closure_0;
  let first;
  let tmp7;
  _require = arg0;
  let tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore, GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      const project = ConjureProjectStore.getProject(closure_0);
      let tmp2 = null;
      if (null != project) {
        tmp2 = null;
        if ("user" !== project.install_scope) {
          tmp2 = null;
          if (null != project.guild_id) {
            const guild = GuildStore.getGuild(project.guild_id);
            let name;
            if (guild != null) {
              name = guild.name;
            }
            if (name == null) {
              name = null;
            }
            tmp2 = name;
          }
        }
      }
      return tmp2;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7);
}) : (function useConjurePublishedServerName(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ConjureProjectStore, GuildStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let tmp2 = null;
    if (null != project) {
      tmp2 = null;
      if ("user" !== project.install_scope) {
        tmp2 = null;
        if (null != project.guild_id) {
          const guild = GuildStore.getGuild(project.guild_id);
          let name;
          if (guild != null) {
            name = guild.name;
          }
          if (name == null) {
            name = null;
          }
          tmp2 = name;
        }
      }
    }
    return tmp2;
  });
});
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishedServerName.tsx");

export default tmp2;
