// Module ID: 1919
// Function ID: 21710
// Name: getFriendlyDurationString
// Dependencies: []
// Exports: getDisableCommunicationDurationOptions

// Module 1919 (getFriendlyDurationString)
function getFriendlyDurationString(arg0) {
  if (obj.DURATION_60_SEC === arg0) {
    const intl6 = arg1(dependencyMap[1]).intl;
    let obj = { secs: 60 };
    return intl6.formatToPlainString(arg1(dependencyMap[1]).t.4zv/jq, obj);
  } else if (obj.DURATION_5_MIN === arg0) {
    const intl5 = arg1(dependencyMap[1]).intl;
    obj = { mins: 5 };
    return intl5.formatToPlainString(arg1(dependencyMap[1]).t.opVZ9q, obj);
  } else if (obj.DURATION_10_MIN === arg0) {
    const intl4 = arg1(dependencyMap[1]).intl;
    const obj1 = { mins: 10 };
    return intl4.formatToPlainString(arg1(dependencyMap[1]).t.opVZ9q, obj1);
  } else if (obj.DURATION_1_HOUR === arg0) {
    const intl3 = arg1(dependencyMap[1]).intl;
    const obj2 = { hours: 1 };
    return intl3.formatToPlainString(arg1(dependencyMap[1]).t.xCjYxK, obj2);
  } else if (obj.DURATION_1_DAY === arg0) {
    const intl2 = arg1(dependencyMap[1]).intl;
    const obj3 = { days: 1 };
    return intl2.formatToPlainString(arg1(dependencyMap[1]).t.k2UNz+, obj3);
  } else if (obj.DURATION_1_WEEK === arg0) {
    const intl = arg1(dependencyMap[1]).intl;
    obj = { weeks: 1 };
    return intl.formatToPlainString(arg1(dependencyMap[1]).t.EmoBD2, obj);
  }
}
const obj = { DURATION_60_SEC: 60, [60]: "DURATION_60_SEC", DURATION_5_MIN: 300, [300]: "DURATION_5_MIN", DURATION_10_MIN: 600, [600]: "DURATION_10_MIN", DURATION_1_HOUR: 3600, [3600]: "DURATION_1_HOUR", DURATION_1_DAY: 86400, [86400]: "DURATION_1_DAY", DURATION_1_WEEK: 604800, [604800]: "DURATION_1_WEEK" };
const articleURL = importDefault(dependencyMap[2]).getArticleURL(arg1(dependencyMap[0]).HelpdeskArticles.DISABLE_GUILD_COMMUNICATION);
const importDefaultResult = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/guild_communication_disabled/GuildDisableCommunicationConstants.tsx");

export const DisableCommunicationDuration = obj;
export { getFriendlyDurationString };
export const getDisableCommunicationDurationOptions = () => {
  const keys = Object.keys(obj);
  const found = keys.filter((arg0) => isNaN(Number(arg0)));
  return found.map((id) => {
    const obj = { id };
    const tmp = callback(closure_2[id]);
    let str = "";
    if (null != tmp) {
      str = tmp;
    }
    obj.label = str;
    obj.value = closure_2[id];
    return obj;
  });
};
export const GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK = articleURL;
export const DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY = "GuildCommunicationDisabledDismissedGuilds";
export const SET_COMMUNICATION_DISABLED_MODAL_NAME = "Set Communication Disabled Modal";
export const CLEAR_COMMUNICATION_DISABLED_MODAL_NAME = "Clear Communication Disabled Modal";
export const MAX_REASON_LENGTH = 512;
