// Module ID: 9138
// Function ID: 9139
// Name: useSelectedTeen
// Dependencies: [1386, 8335, 563, 2]
// Exports: useSelectedTeen, useSelectedTeenId

// Module 9138 (useSelectedTeen)
import useStateFromStores from "useStateFromStores" /* 563 */;
import UserStore from "UserStore" /* 1386 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8335 */;
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
