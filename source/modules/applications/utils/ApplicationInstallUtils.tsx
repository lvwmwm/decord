// Module ID: 8184
// Function ID: 64656
// Name: canInstallApplication
// Dependencies: []
// Exports: isAppUserInstallable, shouldInstallApplicationOnDemand

// Module 8184 (canInstallApplication)
function canInstallApplication(application) {
  const integrationTypesConfig = application.integrationTypesConfig;
  let tmp = null != application.customInstallUrl || null != application.installParams;
  if (!tmp) {
    let someResult = null != integrationTypesConfig;
    if (someResult) {
      const _Object = Object;
      const values = Object.values(integrationTypesConfig);
      someResult = values.some((oauth2_install_params) => {
        let prop;
        if (null != oauth2_install_params) {
          prop = oauth2_install_params.oauth2_install_params;
        }
        let tmp2 = null != prop;
        if (!tmp2) {
          let oauth2InstallParams;
          if (null != oauth2_install_params) {
            oauth2InstallParams = oauth2_install_params.oauth2InstallParams;
          }
          tmp2 = null != oauth2InstallParams;
        }
        return tmp2;
      });
    }
    tmp = someResult;
  }
  return tmp;
}
let closure_2 = importDefault(dependencyMap[0]);
const BuiltInSectionId = arg1(dependencyMap[1]).BuiltInSectionId;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/applications/utils/ApplicationInstallUtils.tsx");

export { canInstallApplication };
export const isAppUserInstallable = function isAppUserInstallable(customInstallUrl) {
  const integrationTypesConfig = customInstallUrl.integrationTypesConfig;
  let tmp = canInstallApplication({ customInstallUrl: customInstallUrl.customInstallUrl, installParams: customInstallUrl.installParams, integrationTypesConfig });
  if (tmp) {
    tmp = null != integrationTypesConfig;
  }
  if (tmp) {
    tmp = arg1(dependencyMap[2]).ApplicationIntegrationType.USER_INSTALL in integrationTypesConfig;
  }
  return tmp;
};
export const shouldInstallApplicationOnDemand = function shouldInstallApplicationOnDemand(arg0) {
  let applicationId;
  let channel;
  let commandIntegrationTypes;
  ({ applicationId, channel, commandIntegrationTypes } = arg0);
  let tmp = null != commandIntegrationTypes;
  if (tmp) {
    tmp = !commandIntegrationTypes.includes(arg1(dependencyMap[2]).ApplicationIntegrationType.USER_INSTALL);
  }
  let tmp4 = !tmp;
  if (!tmp) {
    let tmp7 = !tmp6;
    if (applicationId !== BuiltInSectionId.BUILT_IN) {
      let tmp9 = !closure_2.hasUserStateApplication(applicationId);
      if (tmp9) {
        let tmp10 = null == channel;
        if (!tmp10) {
          const obj = { applicationId };
          ({ id: obj.channelId, guild_id: obj.guildId } = channel);
          tmp10 = !closure_2.hasContextStateApplication(obj);
        }
        tmp9 = tmp10;
      }
      tmp7 = tmp9;
    }
    tmp4 = tmp7;
  }
  return tmp4;
};
