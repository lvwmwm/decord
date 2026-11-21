// Module ID: 8016
// Function ID: 8017
// Name: useCanCreateAnEvent
// Dependencies: [32, 4843, 4784, 4845, 1071, 504, 7633, 2]
// Exports: default

// Module 8016 (useCanCreateAnEvent)
import Constants from "Constants" /* 1071 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4843 */;
import useManageResourcePermissions from "useManageResourcePermissions" /* 7633 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GuildStore from "GuildStore" /* 4784 */;
import PermissionStore from "PermissionStore" /* 4845 */;
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
