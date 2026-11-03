// Module ID: 16436
// Function ID: 16437
// Name: validateConjureAppFrame
// Dependencies: [2167, 6964, 4990, 1072, 5771, 5795, 16437, 6974, 9461, 2]
// Exports: default, isUserScopedConjureApplication, isVoiceChannelInFrameGuild

// Module 16436 (validateConjureAppFrame)
import Constants from "Constants" /* 1072 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 5771 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5795 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6974 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 16437 */;
import ApplicationStore from "ApplicationStore" /* 2167 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6964 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import size from "module_2" /* 2 */;

let tmp;
const RPCErrorDefault = tmp(9461);
const RPCErrors = Constants.RPCErrors;
let result = size.fileFinishedImporting("modules/rpc/helpers/validateConjureAppFrame.tsx");

export default function validateConjureAppFrame(arg0) {
  const tmp3 = validateEmbeddedAppFrameDefault(arg0);
  if (isConjureApplicationDefault(tmp3.frame.applicationId)) {
    return tmp3;
  } else {
    const self = this;
    const self2 = this;
    const obj = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
    const tmp6 = new RPCErrorDefault(obj, "Only a Conjuring app can use this API");
    throw tmp6;
  }
};
export const isConjureApplication = isConjureApplicationDefault;
export function isUserScopedConjureApplication(applicationId) {
  const result = ConjureProjectStore.findProjectByApplicationId(applicationId);
  if (null != result) {
    return "user" === result.install_scope;
  } else {
    const application = ApplicationStore.getApplication(applicationId);
    let prop;
    if (application != null) {
      prop = application.integrationTypesConfig;
    }
    const result1 = null != prop && application.supportsIntegrationTypes(ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL) && !application.supportsIntegrationTypes(ApplicationIntegrationType.ApplicationIntegrationType.GUILD_INSTALL);
    return result1;
  }
}
export function isVoiceChannelInFrameGuild(frame, channelId) {
  let guildId;
  if (frame.surface.type !== EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY) {
    guildId = frame.surface.guildId;
  }
  const channel = ChannelStore.getChannel(channelId);
  const tmp2 = null != guildId && null != channel && channel.isGuildVocal() && channel.getGuildId() === guildId;
  return tmp2;
}
