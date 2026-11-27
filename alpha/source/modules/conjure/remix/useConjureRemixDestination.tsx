// Module ID: 11452
// Function ID: 11453
// Name: useConjureRemixDestination
// Dependencies: [32, 19, 4914, 4975, 6164, 504, 1451, 7602, 11453, 2]
// Exports: default

// Module 11452 (useConjureRemixDestination)
import ConjureUtils from "ConjureUtils" /* 7602 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import SortedGuildStore from "SortedGuildStore" /* 6164 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const library = "library";
let result = size.fileFinishedImporting("modules/conjure/remix/useConjureRemixDestination.tsx");

export default function useConjureRemixDestination(install_scope, arg1, arg2) {
  let closure_0;
  let closure_1;
  let first;
  let found;
  let tmp13;
  let tmp4Result;
  _require = arg1;
  dependencyMap = arg2;
  const tmp = first(react.useState(null), 2);
  first = tmp[0];
  const tmp3 = tmp[1];
  let tmp4 = _require;
  let tmp6 = require("get initialized");
  let items = [SortedGuildStore, GuildStore, PermissionStore, ];
  const useStateFromStoresArray = tmp6.useStateFromStoresArray;
  items[3] = require("ApexExperiment").ApexExperimentStore;
  const items1 = [arg2];
  const stateFromStoresArray = useStateFromStoresArray(items, () => {
    const items = [];
    const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
    const tmp2 = flattenedGuildIds[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let guild = GuildStore.getGuild(tmp3);
      let tmp6 = guild;
      let result = null != guild;
      if (result) {
        let obj = ConjureUtils;
        result = obj.canStartConjureProject(tmp6, closure_1);
      }
      if (result) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  }, items1);
  if (null != first) {
    found = stateFromStoresArray.find((id) => id.id === first);
  }
  let tmp8 = null;
  if ("guild" === install_scope.install_scope) {
    let found1 = stateFromStoresArray.find((id) => id.id === closure_0);
    if (found1 == null) {
      found1 = stateFromStoresArray[0];
    }
    if (found1 == null) {
      found1 = null;
    }
    tmp8 = found1;
  }
  let tmp11 = null;
  let tmp10 = library;
  if (first !== library) {
    if (found == null) {
      found = tmp8;
    }
    tmp11 = found;
  }
  let id;
  if (tmp11 != null) {
    id = tmp11.id;
  }
  if (id == null) {
    id = null;
  }
  let obj = { guilds: stateFromStoresArray, destination: tmp13, destinationGuild: tmp11, changesType: tmp4Result.conjureCopyChangesType(install_scope, id), setDestination: tmp3 };
  tmp13 = id;
  if (id == null) {
    tmp13 = tmp10;
  }
  tmp4Result = tmp4(11453);
  return obj;
};
export const CONJURE_REMIX_LIBRARY = "library";
