// Module ID: 10832
// Function ID: 84089
// Name: openOAuth2Modal
// Dependencies: [653, 10621, 675, 8336, 3827, 10833, 483, 4337, 9995, 1934, 8310, 2]
// Exports: installApplication, installPrivateChannelIntegration

// Module 10832 (openOAuth2Modal)
import { AnalyticEvents } from "ME";
import { OAUTH2_AUTHORIZE_MODAL_KEY as closure_5 } from "OAUTH2_AUTHORIZE_MODAL_KEY";

function openOAuth2Modal(arg0) {
  const _require = arg0;
  let obj = importDefault(4337);
  obj.popWithKey(closure_5);
  obj = {};
  const obj2 = importDefault(4337);
  const merged = Object.assign(arg0);
  obj["dismissOAuthModal"] = function dismissOAuthModal() {
    if (null != closure_0.dismissOAuthModal) {
      closure_0.dismissOAuthModal();
    }
    outer1_1(outer1_3[7]).popWithKey(outer1_5);
  };
  obj2.pushLazy(_require(1934)(9995, dependencyMap.paths), obj, closure_5);
}
const result = require("expandLocation").fileFinishedImporting("utils/native/ApplicationUtils.tsx");

export const installApplication = function installApplication(arg0) {
  let applicationId;
  let channelId;
  let customInstallUrl;
  let disableGuildSelect;
  let guildId;
  let importDefault;
  let installParams;
  let integrationTypesConfig;
  let source;
  ({ applicationId, customInstallUrl } = arg0);
  ({ installParams, integrationTypesConfig, guildId, channelId, disableGuildSelect, source, oauth2Callback: importDefault } = arg0);
  if (null != customInstallUrl) {
    let obj = { application_id: applicationId, auth_type: "custom_url", source, device_platform: "mobile_native" };
    importDefault(675).track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj);
    const obj6 = importDefault(675);
    obj = {
      href: customInstallUrl,
      onConfirm() {
          outer1_1(outer1_3[4]).openURL(customInstallUrl);
        }
    };
    return customInstallUrl(8336).handleClick(obj);
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
        let obj2 = importDefault(675);
        let obj1 = { application_id: applicationId, auth_type: "in_app", source, device_platform: "mobile_native" };
        obj2.track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj1);
        obj2 = {
          clientId: applicationId,
          guildId,
          channelId,
          disableGuildSelect,
          callback(arg0) {
                  outer1_1(outer1_3[5])(arg0);
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
      importDefault(675).track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj3);
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
        obj1 = importAll(483);
        let permissions1;
        if (null != installParams) {
          permissions1 = installParams.permissions;
        }
        deserializeResult = obj1.deserialize(permissions1);
      }
      obj4.permissions = deserializeResult;
      obj4.callback = function callback(arg0) {
        outer1_1(outer1_3[5])(arg0);
        if (null != callback) {
          callback(arg0);
        }
      };
      openOAuth2Modal(obj4);
      const obj10 = importDefault(675);
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
  let obj = importDefault(4337);
  obj = { clientId: applicationId };
  const items = [require(8310) /* set */.OAuth2Scopes.APPLICATIONS_COMMANDS];
  obj.scopes = items;
  obj.channelId = channelId;
  obj.dismissOAuthModal = function dismissOAuthModal() {
    return outer1_1(outer1_3[7]).popWithKey(outer1_5);
  };
  obj.disableGuildSelect = true;
  obj.callback = callback;
  obj.pushLazy(require(1934) /* maybeLoadBundle */(9995, dependencyMap.paths), obj, closure_5);
};
