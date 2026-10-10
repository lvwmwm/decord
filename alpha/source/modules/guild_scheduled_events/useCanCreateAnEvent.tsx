// Module ID: 8653
// Function ID: 8654
// Name: useCanCreateAnEvent
// Dependencies: [32, 4748, 2087, 4750, 1085, 558, 576, 8572, 504, 2]

// Module 8653 (useCanCreateAnEvent)
import Constants from "Constants" /* 1085 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4748 */;
import useManageResourcePermissions from "useManageResourcePermissions" /* 8572 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require, dependencyMap, flag2, num, tmp10, tmp11, tmp12, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp3, tmp5, tmp6, tmp7;

const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore2.GUILD_VOCAL_CHANNELS_KEY;
const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanCreateAnEvent(arg0, arg1) {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  dependencyMap = arg1;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, , ];
    items[1] = GuildChannelStore;
    items[2] = PermissionStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp8;
    let tmp9;
    if (cResult[2] === arg0) {
      tmp8 = cResult[3];
      tmp9 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp8, tmp9);
  }
  class C {
    constructor() {
      tmp = closure_0;
      guild = closure_5.getGuild(closure_0);
      obj = closure_6;
      tmp3 = closure_6;
      tmp4 = Permissions;
      if (!closure_6.can(Permissions.ADMINISTRATOR, guild)) {
        tmp5 = tmp3;
        if (!obj.can(tmp4.CREATE_EVENTS, guild)) {
          tmp6 = closure_3;
          tmp7 = GUILD_VOCAL_CHANNELS_KEY;
          tmp8 = closure_3.getChannels(tmp)[GUILD_VOCAL_CHANNELS_KEY];
          tmp9 = tmp8;
          iter = tmp8[Symbol.iterator]();
          num = 1;
          tmp10 = null;
          tmp11 = tmp8;
          tmp12 = iter;
          while (iter !== undefined) {
            channel = iter.next().channel;
            if (null == closure_1) {
              tmp15 = closure_0;
              tmp16 = closure_1;
              obj2 = closure_0(closure_1[7]);
              tmp17 = channel;
              tmp18 = closure_2;
              tmp19 = closure_6;
              tmp20 = closure_6;
              if (closure_6.can(closure_2(obj2.attachChannelPermissions(channel), 1)[0], channel)) {
                tmp21 = iter;
                iter.return();
                flag = true;
                return true;
              }
            } else {
              tmp14 = channel;
            }
            continue;
          }
          flag2 = false;
          return false;
        }
      }
      return true;
    }
  }
  const items1 = [arg0, arg1];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = C;
  cResult[4] = items1;
  tmp9 = items1;
  tmp8 = C;
}) : (function useCanCreateAnEvent(arg0, arg1) {
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
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useCanCreateAnEvent.tsx");

export default tmp2;
