// Module ID: 16247
// Function ID: 16248
// Name: validateConjureAppFrame
// Dependencies: [2040, 6838, 4858, 1072, 5646, 5670, 16248, 6848, 9313, 2]
// Exports: default, isUserScopedConjureApplication, isVoiceChannelInFrameGuild

// Module 16247 (validateConjureAppFrame)
import Constants from "Constants" /* 1072 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 5646 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5670 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6848 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 16248 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import size from "module_2" /* 2 */;

let tmp;
const RPCErrorDefault = tmp(9313);
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
