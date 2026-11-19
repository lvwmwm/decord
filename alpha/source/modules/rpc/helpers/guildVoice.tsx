// Module ID: 15589
// Function ID: 15590
// Name: guildVoice
// Dependencies: [4641, 4663, 4724, 6233, 1072, 6794, 6790, 2]
// Exports: getGuildVoiceChannel, isGuildVoiceSocket

// Module 15589 (guildVoice)
import Constants2 from "Constants" /* 6233 */;
import RPCErrorDefault from "RPCError" /* 6790 */;
import OAuth2Scopes from "OAuth2Scopes" /* 6794 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import GuildStore from "GuildStore" /* 4663 */;
import PermissionStore from "PermissionStore" /* 4724 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
const RPC_EMBEDDED_APP_SCOPE = Constants2.RPC_EMBEDDED_APP_SCOPE;
({ ChannelTypes: metroImportDefault, Permissions: metroImportAll, RPCErrors: c9 } = Constants);
const result = size.fileFinishedImporting("modules/rpc/helpers/guildVoice.tsx");

export function isGuildVoiceSocket(socket) {
  const scopes = socket.authorization.scopes;
  const hasItem = scopes.has(OAuth2Scopes.OAuth2Scopes.RPC);
  let hasItem1 = !hasItem;
  if (hasItem1) {
    hasItem1 = !scopes.has(RPC_EMBEDDED_APP_SCOPE);
  }
  if (hasItem1) {
    hasItem1 = scopes.has(OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER);
  }
  return hasItem1;
}
export function getGuildVoiceChannel(channel_id) {
  const channel = ChannelStore.getChannel(channel_id);
  if (null != channel) {
    if (channel.type === metroImportDefault.GUILD_VOICE) {
      if (null != GuildStore.getGuild(channel.guild_id)) {
        if (PermissionStore.can(metroImportAll.VIEW_CHANNEL, channel)) {
          return channel;
        }
      }
    }
  }
  const obj = { errorCode: constants3.INVALID_CHANNEL };
  const tmp6 = new RPCErrorDefault(obj, "Voice channel is unavailable");
  throw tmp6;
}
