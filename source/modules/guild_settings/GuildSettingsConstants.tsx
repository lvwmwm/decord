// Module ID: 16175
// Function ID: 124823
// Name: MAX_SUBCATEGORIES
// Dependencies: []
// Exports: getSettingsErrorMessage

// Module 16175 (MAX_SUBCATEGORIES)
const obj = {
  afk_channel_id() {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.KuYcnU);
  },
  public_updates_channel_id() {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.vAyDGU);
  },
  safety_alerts_channel_id() {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.sMkYE8);
  },
  system_channel_id() {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.NASFnq);
  }
};
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_settings/GuildSettingsConstants.tsx");

export const MAX_SUBCATEGORIES = 5;
export const MAX_KEYWORDS = 10;
export const MAX_KEYWORD_LENGTH = 30;
export const GuildSettingsRoleEditSections = { DISPLAY: 0, [0]: "DISPLAY", PERMISSIONS: 1, [1]: "PERMISSIONS", MEMBERS: 2, [2]: "MEMBERS", VERIFICATIONS: 3, [3]: "VERIFICATIONS" };
export const ERROR_KEY_TO_LABEL_FUNC = obj;
export const getSettingsErrorMessage = function getSettingsErrorMessage(arg0) {
  if (0 === Object.keys(arg0).length) {
    return null;
  } else {
    const _Object = Object;
    const first = Object.keys(arg0)[0];
    let callResult;
    if (null != obj[first]) {
      callResult = obj.call(obj);
    }
    if (null != callResult) {
      const _HermesInternal = HermesInternal;
      let combined = "(" + callResult + ") " + arg0[first];
    } else {
      combined = arg0[first];
    }
    return combined;
  }
};
export const VANITY_URL_INVITE_ENDPOINT = "https://discord.gg";
