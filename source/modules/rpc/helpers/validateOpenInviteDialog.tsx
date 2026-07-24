// Module ID: 13459
// Function ID: 103429
// Name: validateOpenInviteDialog
// Dependencies: [10508, 1838, 3758, 653, 13448, 10525, 8407, 2]
// Exports: validateOpenInviteDialog

// Module 13459 (validateOpenInviteDialog)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_isNativeReflectConstruct";
import { RPCErrors } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rpc/helpers/validateOpenInviteDialog.tsx");

export const validateOpenInviteDialog = function validateOpenInviteDialog() {
  connectedFrame = connectedFrame.getConnectedFrame();
  if (null != connectedFrame) {
    let obj = { frame: connectedFrame, channel: undefined, guild: undefined };
    return obj;
  } else {
    const obj6 = importDefault(13448)();
    if (null == obj6) {
      let tmp24 = importDefault(10525);
      obj = { errorCode: RPCErrors.INVALID_CHANNEL };
      const prototype3 = tmp24.prototype;
      tmp24 = new tmp24(obj, "Invalid channel");
      throw tmp24;
    } else {
      guild = guild.getGuild(obj6.getGuildId());
      if (null == guild) {
        let tmp14 = importDefault(10525);
        const obj1 = { errorCode: RPCErrors.INVALID_CHANNEL };
        const _HermesInternal2 = HermesInternal;
        const prototype2 = tmp14.prototype;
        tmp14 = new tmp14(obj1, "Invalid guild " + obj6.getGuildId());
        throw tmp14;
      } else {
        if (obj7.canViewInviteModal(closure_5, guild, obj6)) {
          const obj2 = { frame: undefined, channel: obj6, guild };
          return obj2;
        } else {
          let tmp4 = importDefault(10525);
          obj = { errorCode: RPCErrors.INVALID_PERMISSIONS };
          const _HermesInternal = HermesInternal;
          const prototype = tmp4.prototype;
          tmp4 = new tmp4(obj, "No invite permissions for " + obj6.id);
          throw tmp4;
        }
        obj7 = require(8407) /* canViewInviteModal */;
      }
    }
  }
};
