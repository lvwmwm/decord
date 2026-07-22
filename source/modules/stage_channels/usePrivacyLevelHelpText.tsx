// Module ID: 8470
// Function ID: 67583
// Name: useStagePrivacyLevelSettings
// Dependencies: []
// Exports: default

// Module 8470 (useStagePrivacyLevelSettings)
let closure_4 = importDefault(dependencyMap[0]);
const HelpdeskArticles = arg1(dependencyMap[1]).HelpdeskArticles;
let closure_6 = arg1(dependencyMap[2]).GuildScheduledEventPrivacyLevel;
const Permissions = arg1(dependencyMap[3]).Permissions;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/stage_channels/usePrivacyLevelHelpText.tsx");

export default function useStagePrivacyLevelSettings(channel, privacy_level) {
  privacy_level = channel;
  let obj = privacy_level(dependencyMap[4]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_4.can(constants.CREATE_INSTANT_INVITE, arg0));
  const obj2 = importAll(dependencyMap[5]);
  const canEveryoneRoleResult = obj2.canEveryoneRole(importAll(dependencyMap[6]).combine(Permissions.VIEW_CHANNEL, Permissions.CONNECT), channel);
  obj = {};
  privacy_level = undefined;
  if (null != privacy_level) {
    privacy_level = privacy_level.privacy_level;
  }
  if (privacy_level === constants.PUBLIC) {
    const intl4 = privacy_level(dependencyMap[7]).intl;
    let stringResult = intl4.string(privacy_level(dependencyMap[7]).t.GFq5Rg);
  } else if (stateFromStores) {
    if (canEveryoneRoleResult) {
      let formatResult = null;
      if (arg2 === constants.PUBLIC) {
        const intl3 = privacy_level(dependencyMap[7]).intl;
        obj = { articleURL: importDefault(dependencyMap[8]).getArticleURL(HelpdeskArticles.STAGE_CHANNEL_GUIDELINES) };
        formatResult = intl3.format(privacy_level(dependencyMap[7]).t.ew/Jq4, obj);
        const obj6 = importDefault(dependencyMap[8]);
      }
      let stringResult1 = formatResult;
    } else {
      const intl2 = privacy_level(dependencyMap[7]).intl;
      stringResult1 = intl2.string(privacy_level(dependencyMap[7]).t.E5T7a3);
    }
  } else {
    const intl = privacy_level(dependencyMap[7]).intl;
    stringResult = intl.string(privacy_level(dependencyMap[7]).t.BOjr7t);
  }
  obj.helpText = stringResult;
  let privacy_level1;
  if (null != privacy_level) {
    privacy_level1 = privacy_level.privacy_level;
  }
  obj.guildOnlyDisabled = privacy_level1 === constants.PUBLIC;
  obj.publicDisabled = !stateFromStores || !canEveryoneRoleResult;
  return obj;
};
