// Module ID: 10048
// Function ID: 77652
// Name: useAvailableAndAddedGuilds
// Dependencies: [5, 57, 31, 1838, 3758, 4970, 10042, 653, 566, 4559, 10046, 2]
// Exports: default

// Module 10048 (useAvailableAndAddedGuilds)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/directory_channels/useAvailableAndAddedGuilds.tsx");

export default function useAvailableAndAddedGuilds(arg0, arg1) {
  const _require = arg0;
  const importDefault = arg1;
  const tmp = callback(React.useState(false), 2);
  let closure_2 = tmp[1];
  let obj = _require(stateFromStores[8]);
  let items = [closure_10];
  stateFromStores = obj.useStateFromStores(items, () => outer1_10.getAdminGuildEntryIds(closure_1));
  const items1 = [closure_9, _createForOfIteratorHelperLoose, closure_8];
  const items2 = [arg0];
  const stateFromStoresArray = _require(stateFromStores[8]).useStateFromStoresArray(items1, () => {
    const flattenedGuildIds = outer1_9.getFlattenedGuildIds();
    const items = [];
    const item = flattenedGuildIds.forEach((guildId) => {
      const guild = outer2_7.getGuild(guildId);
      let canResult = null != guild;
      if (canResult) {
        canResult = outer2_8.can(outer2_11.ADMINISTRATOR, guild);
      }
      if (canResult) {
        canResult = guild.id !== items;
      }
      if (canResult) {
        items.push(guild);
      }
    });
    return items;
  }, items2);
  importDefault(stateFromStores[9])(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    stateFromStoresArray(tmp)();
  });
  obj = {
    availableGuilds: React.useMemo(() => stateFromStoresArray.filter((id) => {
      let hasItem = null != outer1_3;
      if (hasItem) {
        hasItem = outer1_3.has(id.id);
      }
      return !hasItem;
    }), items3),
    addedGuilds: React.useMemo(() => stateFromStoresArray.filter((id) => {
      let hasItem;
      if (null != outer1_3) {
        hasItem = outer1_3.has(id.id);
      }
      return hasItem;
    }), items4),
    loading: tmp[0]
  };
  items3 = [stateFromStoresArray, stateFromStores];
  items4 = [stateFromStoresArray, stateFromStores];
  return obj;
};
