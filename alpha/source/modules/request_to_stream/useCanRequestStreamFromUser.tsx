// Module ID: 14341
// Function ID: 14342
// Name: useCanRequestStreamFromUser
// Dependencies: [4824, 4884, 4878, 4904, 1084, 558, 576, 12, 4909, 504, 2]

// Module 14341 (useCanRequestStreamFromUser)
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1084 */;
import PermissionUtilsAll from "PermissionUtils" /* 4909 */;
import ChannelStore from "ChannelStore" /* 4824 */;
import GuildMemberStore from "GuildMemberStore" /* 4884 */;
import GuildRoleStore from "GuildRoleStore" /* 4878 */;
import PermissionStore from "PermissionStore" /* 4904 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanRequestStreamFromUser(arg0, arg1) {
  let closure_0;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, ChannelStore, , ];
    items[2] = GuildMemberStore;
    let tmp8 = GuildRoleStore;
    items[3] = GuildRoleStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp9;
    if (cResult[2] === arg0) {
      tmp9 = cResult[3];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp9);
  }
  const fn = function _() {
    if (null == closure_1) {
      return false;
    } else {
      const channel = ChannelStore.getChannel(tmp);
      if (null == channel) {
        return false;
      } else {
        let canResult = PermissionStore.can(Permissions.SEND_MESSAGES, channel);
        const member = GuildMemberStore.getMember(channel.guild_id, closure_0);
        let roles;
        const keyBy = _modDef12.keyBy;
        const getManyRoles = GuildRoleStore.getManyRoles;
        const guild_id = channel.guild_id;
        _modDef12;
        const tmp10 = closure_0;
        const tmp8 = Permissions;
        if (member != null) {
          roles = member.roles;
        }
        if (roles == null) {
          roles = [];
        }
        const obj2 = { permission: tmp8.STREAM, user: tmp10, context: channel, roles: keyBy(getManyRoles(guild_id, roles), "id") };
        const obj = PermissionUtilsAll;
        if (canResult) {
          canResult = obj.can(obj2);
        }
        return canResult;
      }
    }
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  tmp9 = fn;
}) : (function useCanRequestStreamFromUser(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  const items = [PermissionStore, ChannelStore, GuildMemberStore, GuildRoleStore];
  return obj.useStateFromStores(items, () => {
    if (null == closure_1) {
      return false;
    } else {
      const channel = ChannelStore.getChannel(tmp);
      if (null == channel) {
        return false;
      } else {
        let canResult = PermissionStore.can(Permissions.SEND_MESSAGES, channel);
        const member = GuildMemberStore.getMember(channel.guild_id, closure_0);
        let roles;
        const keyBy = _modDef12.keyBy;
        const getManyRoles = GuildRoleStore.getManyRoles;
        const guild_id = channel.guild_id;
        _modDef12;
        const tmp10 = closure_0;
        const tmp8 = Permissions;
        if (member != null) {
          roles = member.roles;
        }
        if (roles == null) {
          roles = [];
        }
        const obj2 = { permission: tmp8.STREAM, user: tmp10, context: channel, roles: keyBy(getManyRoles(guild_id, roles), "id") };
        const obj = PermissionUtilsAll;
        if (canResult) {
          canResult = obj.can(obj2);
        }
        return canResult;
      }
    }
  });
});
const result = size.fileFinishedImporting("modules/request_to_stream/useCanRequestStreamFromUser.tsx");

export default tmp2;
