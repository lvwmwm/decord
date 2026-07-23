// Module ID: 12902
// Function ID: 100123
// Name: useFilteredGuilds
// Dependencies: [31, 1838, 4970, 1849, 566, 44, 2]
// Exports: default

// Module 12902 (useFilteredGuilds)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_settings_picker/useFilteredGuilds.tsx");

export default function useFilteredGuilds(isGuildIncluded) {
  isGuildIncluded = isGuildIncluded.isGuildIncluded;
  const selectedGuildId = isGuildIncluded.selectedGuildId;
  let tmp;
  let obj = isGuildIncluded(stateFromStores1[4]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getFlattenedGuildIds());
  const items1 = [_createForOfIteratorHelperLoose];
  stateFromStores1 = isGuildIncluded(stateFromStores1[4]).useStateFromStores(items1, () => outer1_4.getGuilds());
  const obj2 = isGuildIncluded(stateFromStores1[4]);
  const items2 = [closure_6];
  const stateFromStores2 = isGuildIncluded(stateFromStores1[4]).useStateFromStores(items2, () => outer1_6.getCurrentUser());
  obj = {
    options: stateFromStores2.useMemo(() => {
      if (null == stateFromStores2) {
        let items = [];
      } else {
        if (null == isGuildIncluded) {
          let found = stateFromStores;
        } else {
          found = stateFromStores.filter((arg0) => {
            stateFromStores(stateFromStores1[5])(null != outer1_2[arg0], "guild should not be null");
            return outer1_0(outer1_2[arg0], outer1_3);
          });
        }
        items = found.map((id) => {
          stateFromStores(stateFromStores1[5])(null != outer1_2[id], "guild should not be null");
          return { id, label: outer1_2[id].name, value: outer1_2[id].id };
        });
      }
      return items;
    }, items3)
  };
  items3 = [stateFromStores, stateFromStores1, stateFromStores2, isGuildIncluded];
  if (null != selectedGuildId) {
    tmp = stateFromStores1[selectedGuildId];
  }
  obj.selectedGuild = tmp;
  return obj;
};
