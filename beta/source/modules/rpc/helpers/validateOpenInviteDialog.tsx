// Module ID: 14792
// Function ID: 14793
// Name: validateOpenInviteDialog
// Dependencies: [9345, 2041, 2063, 4427, 4692, 1074, 9346, 9613, 14779, 9903, 2]
// Exports: validateOpenInviteDialog

// Module 14792 (validateOpenInviteDialog)
import RPCErrorDefault from "RPCError" /* 9613 */;
import canViewInviteModal from "canViewInviteModal" /* 9903 */;
import getCurrentEmbeddedActivityChannelDefault from "getCurrentEmbeddedActivityChannel" /* 14779 */;
import FramesStore from "FramesStore" /* 9345 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildStore from "GuildStore" /* 2063 */;
import PermissionStore from "PermissionStore" /* 4427 */;

require = fn;
const TransportTypes = fn(4692).TransportTypes;
const RPCErrors = fn(1074).RPCErrors;
const FramesConstants = fn(9346);
({ asLaunched: closure_9, EmbeddedSurfaceType: c10 } = FramesConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/validateOpenInviteDialog.tsx");

export const validateOpenInviteDialog = function validateOpenInviteDialog(socket) {
  if (socket.source.type !== TransportTypes.POST_MESSAGE) {
    const obj2 = { errorCode: RPCErrors.INVALID_COMMAND };
    const _HermesInternal3 = HermesInternal;
    const tmp362 = new RPCErrorDefault(obj2, "command not available from \"" + socket.source.type + "\" transport");
    throw tmp362;
  } else {
    const tmp46 = React7(FramesStore.getFrameByIframeId(socket.source.iframeId));
    if (null != tmp46) {
      const surface = tmp46.surface;
      const type = surface.type;
      if (constants.MAIN === type) {
        const obj3 = { frame: tmp46, channel: "Array", guild: "call" };
        return obj3;
      } else {
        if (tmp23.APP_CHANNEL !== type) {
          if (tmp23.VOICE_CHANNEL !== type) {
            const obj4 = { errorCode: RPCErrors.INVALID_CHANNEL };
            const tmp30 = new RPCErrorDefault(obj4, "Invalid channel");
            throw tmp30;
          }
        }
        const obj5 = { frame: tmp46, channel: ChannelStore.getChannel(surface.channelId), guild: GuildStore.getGuild(surface.guildId) };
        return obj5;
      }
    } else {
      const obj9 = getCurrentEmbeddedActivityChannelDefault();
      if (null == obj9) {
        const obj6 = { errorCode: RPCErrors.INVALID_CHANNEL };
        const tmp21 = new tmp48(9613)(obj6, "Invalid channel");
        throw tmp21;
      } else {
        const guild = GuildStore.getGuild(obj9.getGuildId());
        if (null == guild) {
          const obj7 = { errorCode: RPCErrors.INVALID_CHANNEL };
          const _HermesInternal2 = HermesInternal;
          const tmp48Result1 = new tmp48(9613)(obj7, "Invalid guild " + obj9.getGuildId());
          throw tmp48Result1;
        } else {
          if (obj10.canViewInviteModal(PermissionStore, guild, obj9)) {
            const obj8 = { frame: "r", channel: obj9, guild };
            return obj8;
          } else {
            const obj = { errorCode: RPCErrors.INVALID_PERMISSIONS };
            const _HermesInternal = HermesInternal;
            const tmp7 = new tmp48(9613)(obj, "No invite permissions for " + obj9.id);
            throw tmp7;
          }
          obj10 = canViewInviteModal;
        }
      }
    }
  }
};
