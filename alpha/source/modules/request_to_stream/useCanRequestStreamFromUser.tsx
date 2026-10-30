// Module ID: 14833
// Function ID: 14834
// Name: useCanRequestStreamFromUser
// Dependencies: [4858, 4921, 4915, 4941, 1072, 504, 12, 4946, 2]
// Exports: default

// Module 14833 (useCanRequestStreamFromUser)
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1072 */;
import PermissionUtilsAll from "PermissionUtils" /* 4946 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import GuildRoleStore from "GuildRoleStore" /* 4915 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/request_to_stream/useCanRequestStreamFromUser.tsx");

export default function useCanRequestStreamFromUser(arg0, arg1) {
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
      if (null != channel) {
        if (!channel.isGuildStageVoice()) {
          let canResult = PermissionStore.can(Permissions.SEND_MESSAGES, channel);
          const member = GuildMemberStore.getMember(channel.guild_id, closure_0);
          let roles;
          const keyBy = _modDef12.keyBy;
          const getManyRoles = GuildRoleStore.getManyRoles;
          const guild_id = channel.guild_id;
          _modDef12;
          const tmp3 = Permissions;
          const tmp6 = closure_0;
          if (member != null) {
            roles = member.roles;
          }
          if (roles == null) {
            roles = [];
          }
          const obj2 = { permission: tmp3.STREAM, user: tmp6, context: channel, roles: keyBy(getManyRoles(guild_id, roles), "id") };
          const obj = PermissionUtilsAll;
          if (canResult) {
            canResult = obj.can(obj2);
          }
          return canResult;
        }
      }
      return false;
    }
  });
};
