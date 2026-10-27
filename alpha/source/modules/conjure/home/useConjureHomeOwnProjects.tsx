// Module ID: 17841
// Function ID: 17842
// Name: useConjureHomeOwnProjects
// Dependencies: [10699, 6773, 558, 576, 504, 2]

// Module 17841 (useConjureHomeOwnProjects)
import ConjureChatStore from "ConjureChatStore" /* 10699 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureHomeOwnProjects(arg0) {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  const tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureProjectStore, ConjureChatStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let found;
      let projectDeleting;
      let thinking;
      if (null != closure_0) {
        const items = [];
        let num = 0;
        const arraySpreadResult = HermesBuiltin.arraySpread(items, ConjureProjectStore.getOwnedProjects(), 0);
        HermesBuiltin.arraySpread(items, ConjureProjectStore.getSharedProjects(tmp2), arraySpreadResult);
        found = items.filter((guild_id) => guild_id.guild_id === closure_1_0 || guild_id.preview_guild_id === tmp);
      } else {
        found = ConjureProjectStore.getOwnedProjects();
      }
      const mapped = found.map((project) => {
        const obj = { project, time: null };
        const obj2 = thinking;
        if (thinking.isThinking(project.id)) {
          let POSITIVE_INFINITY;
          if (!projectDeleting.isProjectDeleting(project.id)) {
            const _Number = Number;
            POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
          }
          obj.time = POSITIVE_INFINITY;
          return obj;
        }
        const _Math = Math;
        let num = obj2.getFinishedAt(project.id);
        if (num == null) {
          num = 0;
        }
        let num2 = 0;
        if (null != project.updated_at) {
          const _Date = Date;
          num2 = Date.parse(project.updated_at);
        }
        let num3 = 0;
        if (!Number.isNaN(num2)) {
          num3 = num2;
        }
        POSITIVE_INFINITY = max(num, num3);
      });
      const sorted = mapped.sort((time, time2) => {
        let num;
        if (time.time === time2.time) {
          const id = time.project.id;
          num = id.localeCompare(time2.project.id);
        } else {
          num = -1;
          if (time.time < time2.time) {
            num = 1;
          }
        }
        return num;
      });
      return sorted.map((project) => project.project);
    };
    const items1 = [arg0];
    let num2 = 1;
    cResult[1] = arg0;
    let num3 = 2;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
}) : (function useConjureHomeOwnProjects(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  let items = [ConjureProjectStore, ConjureChatStore];
  const items1 = [arg0];
  return obj.useStateFromStoresArray(items, () => {
    let found;
    let projectDeleting;
    let thinking;
    if (null != closure_0) {
      const items = [];
      let num = 0;
      const arraySpreadResult = HermesBuiltin.arraySpread(items, ConjureProjectStore.getOwnedProjects(), 0);
      HermesBuiltin.arraySpread(items, ConjureProjectStore.getSharedProjects(tmp2), arraySpreadResult);
      found = items.filter((guild_id) => guild_id.guild_id === closure_1_0 || guild_id.preview_guild_id === tmp);
    } else {
      found = ConjureProjectStore.getOwnedProjects();
    }
    const mapped = found.map((project) => {
      const obj = { project, time: null };
      const obj2 = thinking;
      if (thinking.isThinking(project.id)) {
        let POSITIVE_INFINITY;
        if (!projectDeleting.isProjectDeleting(project.id)) {
          const _Number = Number;
          POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
        }
        obj.time = POSITIVE_INFINITY;
        return obj;
      }
      const _Math = Math;
      let num = obj2.getFinishedAt(project.id);
      if (num == null) {
        num = 0;
      }
      let num2 = 0;
      if (null != project.updated_at) {
        const _Date = Date;
        num2 = Date.parse(project.updated_at);
      }
      let num3 = 0;
      if (!Number.isNaN(num2)) {
        num3 = num2;
      }
      POSITIVE_INFINITY = max(num, num3);
    });
    const sorted = mapped.sort((time, time2) => {
      let num;
      if (time.time === time2.time) {
        const id = time.project.id;
        num = id.localeCompare(time2.project.id);
      } else {
        num = -1;
        if (time.time < time2.time) {
          num = 1;
        }
      }
      return num;
    });
    return sorted.map((project) => project.project);
  }, items1);
});
const result = size.fileFinishedImporting("modules/conjure/home/useConjureHomeOwnProjects.tsx");

export default tmp2;
