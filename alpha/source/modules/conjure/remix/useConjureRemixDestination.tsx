// Module ID: 11306
// Function ID: 11307
// Name: useConjureRemixDestination
// Dependencies: [32, 19, 4788, 6038, 504, 7476, 2]
// Exports: default

// Module 11306 (useConjureRemixDestination)
import ConjureUtils from "ConjureUtils" /* 7476 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4788 */;
import SortedGuildStore from "SortedGuildStore" /* 6038 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const library = "library";
let result = size.fileFinishedImporting("modules/conjure/remix/useConjureRemixDestination.tsx");

export default function useConjureRemixDestination(arg0, arg1) {
  let closure_0;
  let first;
  let id;
  let tmp3;
  _require = arg1;
  [first, tmp3] = react.useState(arg0);
  let obj = require("get initialized");
  let items = [SortedGuildStore, GuildStore];
  const items1 = [arg1];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const items = [];
    const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
    const tmp2 = flattenedGuildIds[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let guild = GuildStore.getGuild(tmp3);
      let tmp6 = guild;
      let result = null != guild;
      if (result) {
        let obj = ConjureUtils;
        result = obj.isConjureGuildEligible(tmp6, closure_0);
      }
      if (result) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  }, items1);
  let tmp5 = null;
  let tmp4 = library;
  if (first !== library) {
    let found = stateFromStoresArray.find((id) => id.id === first);
    if (found == null) {
      found = stateFromStoresArray[0];
    }
    if (found == null) {
      found = null;
    }
    tmp5 = found;
  }
  const obj2 = { guilds: stateFromStoresArray, destination: id, destinationGuild: tmp5, setDestination: tmp3 };
  id = undefined;
  if (tmp5 != null) {
    id = tmp5.id;
  }
  if (id == null) {
    id = tmp4;
  }
  return obj2;
};
export const CONJURE_REMIX_LIBRARY = "library";
