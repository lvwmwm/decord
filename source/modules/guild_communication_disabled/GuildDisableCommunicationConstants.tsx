// Module ID: 1919
// Function ID: 21717
// Name: getFriendlyDurationString
// Dependencies: [653, 1212, 1920, 2]
// Exports: getDisableCommunicationDurationOptions

// Module 1919 (getFriendlyDurationString)
import importDefaultResult from "wrapURL";

const require = arg1;
function getFriendlyDurationString(arg0) {
  if (obj.DURATION_60_SEC === arg0) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj = { secs: 60 };
    return intl6.formatToPlainString(require(1212) /* getSystemLocale */.t["4zv/jq"], obj);
  } else if (obj.DURATION_5_MIN === arg0) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj = { mins: 5 };
    return intl5.formatToPlainString(require(1212) /* getSystemLocale */.t.opVZ9q, obj);
  } else if (obj.DURATION_10_MIN === arg0) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    const obj1 = { mins: 10 };
    return intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.opVZ9q, obj1);
  } else if (obj.DURATION_1_HOUR === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const obj2 = { hours: 1 };
    return intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.xCjYxK, obj2);
  } else if (obj.DURATION_1_DAY === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj3 = { days: 1 };
    return intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["k2UNz+"], obj3);
  } else if (obj.DURATION_1_WEEK === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { weeks: 1 };
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.EmoBD2, obj);
  }
}
let obj = { DURATION_60_SEC: 60, [60]: "DURATION_60_SEC", DURATION_5_MIN: 300, [300]: "DURATION_5_MIN", DURATION_10_MIN: 600, [600]: "DURATION_10_MIN", DURATION_1_HOUR: 3600, [3600]: "DURATION_1_HOUR", DURATION_1_DAY: 86400, [86400]: "DURATION_1_DAY", DURATION_1_WEEK: 604800, [604800]: "DURATION_1_WEEK" };
const articleURL = require("wrapURL").getArticleURL(require("ME").HelpdeskArticles.DISABLE_GUILD_COMMUNICATION);
const result = require("wrapURL").fileFinishedImporting("modules/guild_communication_disabled/GuildDisableCommunicationConstants.tsx");

export const DisableCommunicationDuration = obj;
export { getFriendlyDurationString };
export const getDisableCommunicationDurationOptions = () => {
  const keys = Object.keys(obj);
  const found = keys.filter((arg0) => isNaN(Number(arg0)));
  return found.map((id) => {
    const obj = { id };
    const tmp = outer1_3(outer1_2[id]);
    let str = "";
    if (null != tmp) {
      str = tmp;
    }
    obj.label = str;
    obj.value = outer1_2[id];
    return obj;
  });
};
export const GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK = articleURL;
export const DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY = "GuildCommunicationDisabledDismissedGuilds";
export const SET_COMMUNICATION_DISABLED_MODAL_NAME = "Set Communication Disabled Modal";
export const CLEAR_COMMUNICATION_DISABLED_MODAL_NAME = "Clear Communication Disabled Modal";
export const MAX_REASON_LENGTH = 512;
