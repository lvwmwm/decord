// Module ID: 10821
// Function ID: 84016
// Name: openOAuth2Modal
// Dependencies: []
// Exports: installApplication, installPrivateChannelIntegration

// Module 10821 (openOAuth2Modal)
function openOAuth2Modal(arg0) {
  const require = arg0;
  let obj = importDefault(dependencyMap[7]);
  obj.popWithKey(closure_5);
  obj = {};
  const obj2 = importDefault(dependencyMap[7]);
  const merged = Object.assign(arg0);
  obj["dismissOAuthModal"] = function dismissOAuthModal() {
    if (null != arg0.dismissOAuthModal) {
      arg0.dismissOAuthModal();
    }
    callback(closure_3[7]).popWithKey(closure_5);
  };
  obj2.pushLazy(require(dependencyMap[9])(dependencyMap[8], dependencyMap.paths), obj, closure_5);
}
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
let closure_5 = require(dependencyMap[1]).OAUTH2_AUTHORIZE_MODAL_KEY;
const _module = require(dependencyMap[11]);
const result = _module.fileFinishedImporting("utils/native/ApplicationUtils.tsx");

export const installApplication = function installApplication(arg0) {
  let applicationId;
  let channelId;
  let customInstallUrl;
  let disableGuildSelect;
  let guildId;
  let installParams;
  let integrationTypesConfig;
  let source;
  ({ applicationId, customInstallUrl } = arg0);
  const require = customInstallUrl;
  ({ installParams, integrationTypesConfig, guildId, channelId, disableGuildSelect, source, oauth2Callback: closure_1 } = arg0);
  if (null != customInstallUrl) {
    let obj = { application_id: applicationId, auth_type: "custom_url", source, device_platform: "mobile_native" };
    importDefault(dependencyMap[2]).track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj);
    const obj6 = importDefault(dependencyMap[2]);
    obj = {
      href: customInstallUrl,
      onConfirm() {
          callback(closure_3[4]).openURL(customInstallUrl);
        }
    };
    return require(dependencyMap[3]).handleClick(obj);
  } else {
    if (null != integrationTypesConfig) {
      const _Object = Object;
      const values = Object.values(integrationTypesConfig);
      if (values.some((oauth2_install_params) => {
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
      })) {
        let obj2 = importDefault(dependencyMap[2]);
        let obj1 = { application_id: applicationId, auth_type: "in_app", source, device_platform: "mobile_native" };
        obj2.track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj1);
        obj2 = {
          clientId: applicationId,
          guildId,
          channelId,
          disableGuildSelect,
          callback(arg0) {
                  callback(closure_3[5])(arg0);
                  if (null != callback) {
                    callback(arg0);
                  }
                }
        };
        openOAuth2Modal(obj2);
      }
    }
    if (null != installParams) {
      const obj3 = { application_id: applicationId, auth_type: "in_app", source, device_platform: "mobile_native" };
      importDefault(dependencyMap[2]).track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj3);
      const obj4 = { clientId: applicationId, guildId, channelId, disableGuildSelect };
      let scopes;
      if (null != installParams) {
        scopes = installParams.scopes;
      }
      obj4.scopes = scopes;
      let permissions;
      if (null != installParams) {
        permissions = installParams.permissions;
      }
      let deserializeResult;
      if (null != permissions) {
        obj1 = importAll(dependencyMap[6]);
        let permissions1;
        if (null != installParams) {
          permissions1 = installParams.permissions;
        }
        deserializeResult = obj1.deserialize(permissions1);
      }
      obj4.permissions = deserializeResult;
      obj4.callback = function callback(arg0) {
        callback(closure_3[5])(arg0);
        if (null != callback) {
          callback(arg0);
        }
      };
      openOAuth2Modal(obj4);
      const obj10 = importDefault(dependencyMap[2]);
      const tmp24 = openOAuth2Modal;
    }
  }
};
export { openOAuth2Modal };
export const installPrivateChannelIntegration = function installPrivateChannelIntegration(arg0) {
  let applicationId;
  let callback;
  let channelId;
  ({ applicationId, channelId, callback } = arg0);
  let obj = importDefault(dependencyMap[7]);
  obj = { clientId: applicationId };
  const items = [require(dependencyMap[10]).OAuth2Scopes.APPLICATIONS_COMMANDS];
  obj.scopes = items;
  obj.channelId = channelId;
  obj.dismissOAuthModal = function dismissOAuthModal() {
    return callback(closure_3[7]).popWithKey(closure_5);
  };
  obj.disableGuildSelect = true;
  obj.callback = callback;
  obj.pushLazy(require(dependencyMap[9])(dependencyMap[8], dependencyMap.paths), obj, closure_5);
};
