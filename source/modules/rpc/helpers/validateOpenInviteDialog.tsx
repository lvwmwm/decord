// Module ID: 13285
// Function ID: 100913
// Name: validateOpenInviteDialog
// Dependencies: []
// Exports: validateOpenInviteDialog

// Module 13285 (validateOpenInviteDialog)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const RPCErrors = arg1(dependencyMap[3]).RPCErrors;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/rpc/helpers/validateOpenInviteDialog.tsx");

export const validateOpenInviteDialog = function validateOpenInviteDialog() {
  const connectedFrame = connectedFrame.getConnectedFrame();
  if (null != connectedFrame) {
    let obj = { frame: connectedFrame, channel: undefined, guild: undefined };
    return obj;
  } else {
    const obj6 = importDefault(dependencyMap[4])();
    if (null == obj6) {
      let tmp24 = importDefault(dependencyMap[5]);
      obj = { errorCode: RPCErrors.INVALID_CHANNEL };
      const prototype3 = tmp24.prototype;
      tmp24 = new tmp24(obj, "Invalid channel");
      throw tmp24;
    } else {
      const guild = guild.getGuild(obj6.getGuildId());
      if (null == guild) {
        let tmp14 = importDefault(dependencyMap[5]);
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
          let tmp4 = importDefault(dependencyMap[5]);
          obj = { errorCode: RPCErrors.INVALID_PERMISSIONS };
          const _HermesInternal = HermesInternal;
          const prototype = tmp4.prototype;
          tmp4 = new tmp4(obj, "No invite permissions for " + obj6.id);
          throw tmp4;
        }
        const obj7 = arg1(dependencyMap[6]);
      }
    }
  }
};
