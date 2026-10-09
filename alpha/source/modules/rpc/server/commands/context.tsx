// Module ID: 14658
// Function ID: 14659
// Name: context
// Dependencies: [5636, 1085, 8594, 14659, 14642, 10896, 2]

// Module 14658 (context)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8594 */;
import isPostMessageSocketDefault from "isPostMessageSocket" /* 14642 */;
import Constants_mod from "Constants" /* 5636 */;
import Constants_mod2 from "Constants" /* 1085 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 14659 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let c3;
let items;
let tmp;
const RPCErrorDefault = tmp(10896);
let Constants = Constants_mod2;
({ RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
Constants = Constants_mod2;
({ RPCCommands, RPCErrors: c3 } = Constants);
let obj = {};
const GET_CONTEXT = RPCCommands.GET_CONTEXT;
let obj2 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(socket) {
    let interactionId;
    let obj5;
    let referrerId;
    socket = socket.socket;
    if (isPostMessageSocketDefault(socket)) {
      const context = socket.context;
      const surface = context.surface;
      const type = surface.type;
      if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN !== type) {
        if (EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL !== type) {
          if (EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL !== type) {
            let obj2;
            if (EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL !== type) {
              if (EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY === type) {
                obj2 = { type: surface.type };
              } else {
                const _Error = Error;
                const self3 = this;
                const self4 = this;
                const error = new Error("Unknown embedded surface type");
                throw error;
              }
            }
            const launch = context.launch;
            let customId;
            const obj4 = { surface: obj2, launch: obj5, platform: context.platform };
            if (launch != null) {
              customId = launch.customId;
            }
            const launch2 = context.launch;
            obj5 = { custom_id: customId, referrer_id: referrerId, interaction_id: interactionId };
            referrerId = undefined;
            if (launch2 != null) {
              referrerId = launch2.referrerId;
            }
            const launch3 = context.launch;
            interactionId = undefined;
            if (launch3 != null) {
              interactionId = launch3.interactionId;
            }
            return obj4;
          }
        }
      }
      const obj9 = { type: null, channel_id: null, guild_id: null };
      ({ type: obj3.type, channelId: obj3.channel_id, guildId: obj3.guild_id } = surface);
      obj2 = obj9;
    } else {
      const self = this;
      const self2 = this;
      const obj = { errorCode: constants.INVALID_COMMAND };
      const tmp5 = new RPCErrorDefault(obj, "Command only available to Embedded Apps");
      throw tmp5;
    }
  }
};
items = [RPC_EMBEDDED_APP_SCOPE];
obj[GET_CONTEXT] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_CONTEXT, obj2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/context.tsx");

export default obj;
