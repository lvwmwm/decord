// Module ID: 12605
// Function ID: 12606
// Name: ApplicationInstallUtils
// Dependencies: [11339, 6282, 6965, 5890, 2]
// Exports: canInstallApplication, hasInstallConfiguration, isAppUserInstallable, isKnownConjureApplication, shouldInstallApplicationOnDemand

// Module 12605 (ApplicationInstallUtils)
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 5890 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 6282 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6965 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 11339 */;
import size from "module_2" /* 2 */;

const f104600 = (oauth2_install_params) => {
  let prop;
  if (oauth2_install_params != null) {
    prop = oauth2_install_params.oauth2_install_params;
  }
  let tmp2 = null != prop;
  if (!tmp2) {
    let oauth2InstallParams;
    if (oauth2_install_params != null) {
      oauth2InstallParams = oauth2_install_params.oauth2InstallParams;
    }
    tmp2 = null != oauth2InstallParams;
  }
  return tmp2;
};
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
let result = size.fileFinishedImporting("modules/applications/utils/ApplicationInstallUtils.tsx");

export function hasInstallConfiguration(application) {
  const integrationTypesConfig = application.integrationTypesConfig;
  let tmp = null != application.customInstallUrl || null != application.installParams;
  if (!tmp) {
    let someResult = null != integrationTypesConfig;
    if (someResult) {
      const _Object = Object;
      const values = Object.values(integrationTypesConfig);
      someResult = values.some(f104600);
    }
    tmp = someResult;
  }
  return tmp;
}
export function isKnownConjureApplication(id) {
  id = id.id;
  let tmp = null != id.conjureProjectId;
  if (!tmp) {
    tmp = null != id && isConjureApplicationDefault(id);
    const tmp2 = null != id && isConjureApplicationDefault(id);
  }
  return tmp;
}
export function canInstallApplication(integrationTypesConfig) {
  integrationTypesConfig = integrationTypesConfig.integrationTypesConfig;
  let tmp = null != integrationTypesConfig.customInstallUrl || null != integrationTypesConfig.installParams;
  if (!tmp) {
    let someResult = null != integrationTypesConfig;
    if (someResult) {
      const _Object = Object;
      const values = Object.values(integrationTypesConfig);
      someResult = values.some(f104600);
    }
    tmp = someResult;
  }
  if (tmp) {
    const id = integrationTypesConfig.id;
    let tmp4 = null != integrationTypesConfig.conjureProjectId;
    if (!tmp4) {
      tmp4 = null != id && isConjureApplicationDefault(id);
      const tmp5 = null != id && isConjureApplicationDefault(id);
    }
    tmp = !tmp4;
  }
  return tmp;
}
export function isAppUserInstallable(integrationTypesConfig) {
  integrationTypesConfig = integrationTypesConfig.integrationTypesConfig;
  let tmp = null != integrationTypesConfig.customInstallUrl || null != integrationTypesConfig.installParams;
  if (!tmp) {
    let someResult = null != integrationTypesConfig;
    if (someResult) {
      const _Object = Object;
      const values = Object.values(integrationTypesConfig);
      someResult = values.some(f104600);
    }
    tmp = someResult;
  }
  if (tmp) {
    tmp = null != integrationTypesConfig;
  }
  if (tmp) {
    tmp = ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL in integrationTypesConfig;
  }
  return tmp;
}
export function shouldInstallApplicationOnDemand(arg0) {
  let applicationId;
  let channel;
  let commandIntegrationTypes;
  ({ applicationId, channel, commandIntegrationTypes } = arg0);
  let tmp4 = !(null != commandIntegrationTypes && !commandIntegrationTypes.includes(ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL));
  const tmp = null != commandIntegrationTypes && !commandIntegrationTypes.includes(ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL);
  if (tmp4) {
    let tmp6 = applicationId !== BuiltInSectionId.BUILT_IN;
    if (tmp6) {
      const result = ApplicationCommandIndexStore.hasUserStateApplication(applicationId);
      let tmp8 = !result;
      const obj = ApplicationCommandIndexStore;
      if (tmp8) {
        let tmp9 = null == channel;
        if (!tmp9) {
          const obj3 = { applicationId, channelId: null, guildId: null };
          ({ id: obj2.channelId, guild_id: obj2.guildId } = channel);
          tmp9 = !obj.hasContextStateApplication(obj3);
        }
        tmp8 = tmp9;
      }
      tmp6 = tmp8;
    }
    tmp4 = tmp6;
  }
  return tmp4;
}
