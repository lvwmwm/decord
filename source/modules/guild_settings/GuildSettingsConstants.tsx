// Module ID: 16347
// Function ID: 127362
// Name: MAX_SUBCATEGORIES
// Dependencies: [1212, 2]
// Exports: getSettingsErrorMessage

// Module 16347 (MAX_SUBCATEGORIES)
const obj = {
  afk_channel_id() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.KuYcnU);
  },
  public_updates_channel_id() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.vAyDGU);
  },
  safety_alerts_channel_id() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.sMkYE8);
  },
  system_channel_id() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.NASFnq);
  }
};
const result = require("set").fileFinishedImporting("modules/guild_settings/GuildSettingsConstants.tsx");

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
