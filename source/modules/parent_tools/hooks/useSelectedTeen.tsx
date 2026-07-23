// Module ID: 7125
// Function ID: 57267
// Name: useSelectedTeen
// Dependencies: [1849, 6769, 624, 2]
// Exports: useSelectedTeen, useSelectedTeenId

// Module 7125 (useSelectedTeen)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeen.tsx");

export const useSelectedTeen = function useSelectedTeen() {
  const items = [closure_3];
  _require = _require(624).useStateFromStores(items, () => outer1_3.getSelectedTeenId());
  const obj = _require(624);
  const items1 = [_isNativeReflectConstruct];
  return _require(624).useStateFromStores(items1, () => {
    let user;
    if (null !== closure_0) {
      user = outer1_2.getUser(closure_0);
    }
    return user;
  });
};
export const useSelectedTeenId = function useSelectedTeenId() {
  const items = [closure_3];
  return require(624) /* defaultAreStatesEqual */.useStateFromStores(items, () => outer1_3.getSelectedTeenId());
};
