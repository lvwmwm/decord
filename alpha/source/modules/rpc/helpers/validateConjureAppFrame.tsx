// Module ID: 14639
// Function ID: 14640
// Name: validateConjureAppFrame
// Dependencies: [5437, 10617, 2064, 1085, 9207, 8594, 14640, 10896, 2]
// Exports: default, isConjureApplication, isUserScopedConjureApplication, isVoiceChannelInFrameGuild

// Module 14639 (validateConjureAppFrame)
import Constants from "Constants" /* 1085 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8594 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 9207 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 14640 */;
import ApplicationStore from "ApplicationStore" /* 5437 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10617 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import size from "module_2" /* 2 */;

let tmp;
const RPCErrorDefault = tmp(10896);
const RPCErrors = Constants.RPCErrors;
let result = size.fileFinishedImporting("modules/rpc/helpers/validateConjureAppFrame.tsx");

export default function validateConjureAppFrame(arg0) {
  const tmp3 = validateEmbeddedAppFrameDefault(arg0);
  const applicationId = tmp3.frame.applicationId;
  const application = ApplicationStore.getApplication(applicationId);
  let prop;
  if (application != null) {
    prop = application.vibegrationsProjectId;
  }
  const result = null != prop || ConjureProjectStore.isConjureProjectApplication(applicationId);
  if (result) {
    return tmp3;
  } else {
    const self = this;
    const self2 = this;
    const obj = { errorCode: RPCErrors.UNAUTHORIZED_FOR_APPLICATION };
    const tmp10 = new RPCErrorDefault(obj, "Only a Conjuring app can use this API");
    throw tmp10;
  }
};
export const isConjureApplication = function isConjureApplication(applicationId) {
  const application = ApplicationStore.getApplication(applicationId);
  let prop;
  if (application != null) {
    prop = application.vibegrationsProjectId;
  }
  const result = null != prop || ConjureProjectStore.isConjureProjectApplication(applicationId);
  return result;
};
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
