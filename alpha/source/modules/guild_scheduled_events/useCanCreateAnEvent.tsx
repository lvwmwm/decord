// Module ID: 9089
// Function ID: 9090
// Name: useCanCreateAnEvent
// Dependencies: [32, 4944, 4885, 4946, 1072, 504, 9020, 2]
// Exports: default

// Module 9089 (useCanCreateAnEvent)
import Constants from "Constants" /* 1072 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4944 */;
import useManageResourcePermissions from "useManageResourcePermissions" /* 9020 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require, dependencyMap;

const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore2.GUILD_VOCAL_CHANNELS_KEY;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useCanCreateAnEvent.tsx");

export default function useCanCreateAnEvent(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("get initialized");
  const items = [GuildStore, GuildChannelStore, PermissionStore];
  const items1 = [arg0, arg1];
  return obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    const obj = PermissionStore;
    const tmp = closure_0;
    const tmp4 = Permissions;
    if (!PermissionStore.can(Permissions.ADMINISTRATOR, guild)) {
      if (!obj.can(tmp4.CREATE_EVENTS, guild)) {
        const tmp8 = GuildChannelStore.getChannels(tmp)[GUILD_VOCAL_CHANNELS_KEY];
        const iter = tmp8[Symbol.iterator]();
        while (iter !== undefined) {
          let channel = iter.next().channel;
          if (null == closure_1) {
            let obj2 = useManageResourcePermissions;
            if (PermissionStore.can(_slicedToArray(obj2.attachChannelPermissions(channel), 1)[0], channel)) {
              iter.return();
              let flag = true;
              return true;
            }
          }
          continue;
        }
        return false;
      }
    }
    return true;
  }, items1);
};
