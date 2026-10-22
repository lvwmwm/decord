// Module ID: 15662
// Function ID: 15663
// Name: validateConjureAppFrame
// Dependencies: [2045, 6758, 4821, 1087, 5589, 5612, 15663, 6768, 9240, 2]
// Exports: default, isUserScopedConjureApplication, isVoiceChannelInFrameGuild

// Module 15662 (validateConjureAppFrame)
import Constants from "Constants" /* 1087 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 5589 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5612 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6768 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 15663 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6758 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import size from "module_2" /* 2 */;

let tmp;
const RPCErrorDefault = tmp(9240);
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
export const isUserScopedConjureApplication = function isUserScopedConjureApplication(applicationId) {
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
};
export const isVoiceChannelInFrameGuild = function isVoiceChannelInFrameGuild(frame, channelId) {
  let guildId;
  if (frame.surface.type !== EmbeddedSurfaceType.EmbeddedSurfaceType.OVERLAY) {
    guildId = frame.surface.guildId;
  }
  const channel = ChannelStore.getChannel(channelId);
  const tmp2 = null != guildId && null != channel && channel.isGuildVocal() && channel.getGuildId() === guildId;
  return tmp2;
};
