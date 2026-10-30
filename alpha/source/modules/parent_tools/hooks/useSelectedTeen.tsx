// Module ID: 8363
// Function ID: 8364
// Name: useSelectedTeen
// Dependencies: [1384, 7708, 563, 2]
// Exports: useSelectedTeen, useSelectedTeenId

// Module 8363 (useSelectedTeen)
import useStateFromStores from "useStateFromStores" /* 563 */;
import UserStore from "UserStore" /* 1384 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7708 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeen.tsx");

export function useSelectedTeen() {
  let closure_0;
  let selectedTeenId;
  const items = [FamilyCenterStore];
  const obj = require("useStateFromStores");
  _require = obj.useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
  const items1 = [UserStore];
  const obj2 = require("useStateFromStores");
  return obj2.useStateFromStores(items1, () => {
    let user;
    if (null !== closure_0) {
      user = UserStore.getUser(tmp);
    }
    return user;
  });
}
export function useSelectedTeenId() {
  let selectedTeenId;
  const items = [FamilyCenterStore];
  const obj = useStateFromStores;
  return obj.useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
}
