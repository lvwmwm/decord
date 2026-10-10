// Module ID: 14720
// Function ID: 14721
// Name: validateOpenInviteDialog
// Dependencies: [2065, 2087, 4750, 1085, 14696, 10936, 10810, 10809, 10943, 8532, 2]
// Exports: validateOpenInviteDialog

// Module 14720 (validateOpenInviteDialog)
import Constants from "Constants" /* 1085 */;
import canViewInviteModal from "canViewInviteModal" /* 8532 */;
import EmbeddedAppTypes from "EmbeddedAppTypes" /* 10809 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 10810 */;
import RPCErrorDefault from "RPCError" /* 10936 */;
import getGuildIdForEmbeddedSurfaceDefault from "getGuildIdForEmbeddedSurface" /* 10943 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 14696 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import size from "module_2" /* 2 */;

const RPCErrors = Constants.RPCErrors;
const result = size.fileFinishedImporting("modules/rpc/helpers/validateOpenInviteDialog.tsx");

export const validateOpenInviteDialog = function validateOpenInviteDialog(socket) {
  let channel;
  let source;
  let surface;
  if (isPostMessageSocketDefault(socket)) {
    ({ source, surface } = socket.context);
    const tmp9 = getChannelIdForEmbeddedSurfaceDefault(surface);
    const type = source.type;
    if (EmbeddedAppTypes.EmbeddedContextSourceType.FRAME === type) {
      const obj2 = { frameId: source.frameId, channel, guild: GuildStore.getGuild(getGuildIdForEmbeddedSurfaceDefault(surface)) };
      channel = undefined;
      if (null != tmp9) {
        channel = ChannelStore.getChannel(tmp9);
      }
      return obj2;
    } else if (EmbeddedAppTypes.EmbeddedContextSourceType.ACTIVITY === type) {
      let channel1;
      if (null != tmp9) {
        channel1 = ChannelStore.getChannel(tmp9);
      }
      if (null == channel1) {
        const self11 = this;
        const self12 = this;
        const obj3 = { errorCode: RPCErrors.INVALID_CHANNEL };
        const tmp36 = new RPCErrorDefault(obj3, "Invalid channel");
        throw tmp36;
      } else {
        const guild = GuildStore.getGuild(channel1.getGuildId());
        if (null == guild) {
          const _HermesInternal3 = HermesInternal;
          const self9 = this;
          const self10 = this;
          const obj4 = { errorCode: RPCErrors.INVALID_CHANNEL };
          const tmpResult = RPCErrorDefault;
          const tmpResult3 = new tmpResult(obj4, "Invalid guild " + channel1.getGuildId());
          throw tmpResult3;
        } else {
          const tmp10Result = canViewInviteModal;
          if (tmp10Result.canViewInviteModal(PermissionStore, guild, channel1)) {
            return { frameId: "r", channel: channel1, guild };
          } else {
            const _HermesInternal2 = HermesInternal;
            const self7 = this;
            const self8 = this;
            const obj6 = { errorCode: RPCErrors.INVALID_PERMISSIONS };
            const tmpResult4 = RPCErrorDefault;
            const tmpResult11 = new tmpResult4(obj6, "No invite permissions for " + channel1.id);
            throw tmpResult11;
          }
        }
      }
    } else if (EmbeddedAppTypes.EmbeddedContextSourceType.INTERACTION === type) {
      const self5 = this;
      const self6 = this;
      const obj7 = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp17 = new RPCErrorDefault(obj7, "Command not supported in interaction modals");
      throw tmp17;
    } else {
      const self3 = this;
      const self4 = this;
      const obj8 = { errorCode: RPCErrors.INVALID_COMMAND };
      const tmp13 = new RPCErrorDefault(obj8, "Command not supported on this surface");
      throw tmp13;
    }
  } else {
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const obj = { errorCode: RPCErrors.INVALID_COMMAND };
    const tmpResult5 = RPCErrorDefault;
    const tmpResult21 = new tmpResult5(obj, "command not available from \"" + socket.source.type + "\" transport");
    throw tmpResult21;
  }
};
