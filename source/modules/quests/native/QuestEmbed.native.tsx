// Module ID: 12184
// Function ID: 93661
// Name: buildBaseEmbedProps
// Dependencies: []
// Exports: createQuestsEmbed

// Module 12184 (buildBaseEmbedProps)
function buildBaseEmbedProps(arg0) {
  let bodyText;
  let themeColors;
  let thumbnailUrl;
  let titleText;
  ({ bodyText, themeColors } = arg0);
  const colors = themeColors.colors;
  let obj = {};
  ({ titleText, thumbnailUrl } = arg0);
  const merged = Object.assign(themeColors.baseColors);
  obj["headerColor"] = colors.headerColor;
  obj["titleText"] = titleText;
  obj["titleColor"] = colors.titleColor;
  obj["subtitleColor"] = colors.bodyTextColor;
  obj["bodyTextColor"] = colors.bodyTextColor;
  obj["thumbnailUrl"] = thumbnailUrl;
  obj["embedCanBeTapped"] = true;
  obj["canBeAccepted"] = true;
  obj["type"] = InviteTypes.GUILD;
  obj = {};
  const obj2 = require(dependencyMap[6]);
  const merged1 = Object.assign(obj);
  if (isAndroidResult) {
    obj["headerText"] = null;
    obj["subtitle"] = bodyText;
    let tmp4 = obj;
  } else {
    obj["headerText"] = undefined;
    obj["subtitle"] = bodyText;
    tmp4 = obj;
  }
  return tmp4;
}
function buildSupportedOnMobileEmbedBodyText(quest) {
  quest = quest.quest;
  if (quest.config.expiresAt < date.toISOString()) {
    const intl = require(dependencyMap[7]).intl;
    let obj = { questName: quest.config.messages.questName };
    return intl.formatToPlainString(require(dependencyMap[7]).t.ge+AJp, obj);
  } else {
    let tmp;
    const questTaskDetails = require(dependencyMap[8]).getQuestTaskDetails(quest);
    const obj3 = require(dependencyMap[8]);
    const thirdPartyTaskDetails = require(dependencyMap[8]).getThirdPartyTaskDetails(quest);
    const obj4 = require(dependencyMap[8]);
    obj = { quest, taskDetails: questTaskDetails, location: constants.EMBED_MOBILE, sourceQuestContent: require(dependencyMap[10]).QuestContent.QUEST_EMBED_MOBILE };
    if (null != thirdPartyTaskDetails) {
      tmp = thirdPartyTaskDetails;
    }
    obj.thirdPartyTaskDetails = tmp;
    obj.withoutMarkdown = true;
    obj.currentUser = quest.currentUser;
    return require(dependencyMap[9]).getQuestsInstructionsToWinReward(obj);
  }
  const date = new Date();
}
function buildQuestsEmbedProps(currentUser) {
  let quest;
  let questId;
  let themeColors;
  let themeColors2;
  ({ questId, themeColors } = currentUser);
  let obj = require(dependencyMap[13]);
  if (obj.isMetaQuest()) {
    obj = {};
    obj = {};
    const intl8 = require(dependencyMap[7]).intl;
    obj.titleText = intl8.string(require(dependencyMap[7]).t.6LxbQM);
    const intl9 = require(dependencyMap[7]).intl;
    obj.bodyText = intl9.string(require(dependencyMap[7]).t.CXEb9p);
    obj.themeColors = themeColors;
    obj.thumbnailUrl = Image.resolveAssetSource(importDefault(dependencyMap[14])).uri;
    const merged = Object.assign(buildBaseEmbedProps(obj));
    const intl10 = require(dependencyMap[7]).intl;
    obj["acceptLabelText"] = intl10.string(require(dependencyMap[7]).t.hvVgAZ);
    obj["acceptLabelBackgroundColor"] = themeColors.colors.acceptBlurpleLabelBackgroundColor;
    obj["acceptLabelColor"] = themeColors.colors.acceptLabelGreenColor;
    return obj;
  } else {
    let obj1 = require(dependencyMap[15]);
    const result = obj1.findQuestOrReplacement(questId, closure_5.quests, closure_5.excludedQuests);
    const excludedQuests = closure_5.excludedQuests;
    const value = excludedQuests.get(questId);
    if (null == result) {
      if (closure_5.isFetchingCurrentQuests) {
        obj1 = { themeColors };
        let tmp17 = buildBaseEmbedProps(obj1);
      }
      return tmp17;
    }
    if (null == result) {
      if (null != value) {
        const result1 = require(dependencyMap[16]).trackQuestEmbedFallbackViewed(questId, constants2.EXCLUDED_QUEST);
        let obj2 = {};
        const intl6 = require(dependencyMap[7]).intl;
        obj2.titleText = intl6.string(require(dependencyMap[7]).t.Dd6Daw);
        const intl7 = require(dependencyMap[7]).intl;
        obj2.bodyText = intl7.string(require(dependencyMap[7]).t.ii4mJo);
        obj2.themeColors = themeColors;
        questId = Image.resolveAssetSource;
        obj2.thumbnailUrl = questId(importDefault(dependencyMap[14])).uri;
        let tmp53 = buildBaseEmbedProps(obj2);
        const obj13 = require(dependencyMap[16]);
      } else {
        const result2 = require(dependencyMap[16]).trackQuestEmbedFallbackViewed(questId, constants2.UNKNOWN_QUEST);
        const obj3 = {};
        const intl11 = require(dependencyMap[7]).intl;
        obj3.titleText = intl11.string(require(dependencyMap[7]).t.rxf+nx);
        const intl12 = require(dependencyMap[7]).intl;
        obj3.bodyText = intl12.string(require(dependencyMap[7]).t.Ow5AQI);
        obj3.themeColors = themeColors;
        obj3.thumbnailUrl = Image.resolveAssetSource(importDefault(dependencyMap[14])).uri;
        tmp53 = buildBaseEmbedProps(obj3);
        const obj19 = require(dependencyMap[16]);
      }
    } else {
      if (obj18.isShareableQuest(result.config)) {
        const obj4 = { themeColors, quest: result, currentUser: currentUser.currentUser };
        ({ themeColors: themeColors2, quest } = obj4);
        const userStatus = quest.userStatus;
        let enrolledAt;
        if (null != userStatus) {
          enrolledAt = userStatus.enrolledAt;
        }
        const _Date = Date;
        const date = new Date();
        const tmp24 = quest.config.expiresAt < date.toISOString();
        let obj6 = require(dependencyMap[11]);
        const obj5 = {};
        obj6 = {};
        const intl3 = require(dependencyMap[7]).intl;
        const obj7 = { questName: quest.config.messages.questName };
        obj6.titleText = intl3.formatToPlainString(require(dependencyMap[7]).t.EAYZAr, obj7);
        obj6.subtitle = quest.config.messages.gamePublisher;
        const obj8 = { quest, currentUser: obj4.currentUser };
        obj6.bodyText = buildSupportedOnMobileEmbedBodyText(obj8);
        obj6.themeColors = themeColors2;
        const tmp19 = null != enrolledAt;
        const tmp29 = obj6.isThemeDark(state.getState().theme) ? ThemeTypes.DARK : ThemeTypes.LIGHT;
        const tmp31 = null != closure_5.questEnrollmentBlockedUntil;
        obj6.thumbnailUrl = require(dependencyMap[12]).getQuestAsset(quest, require(dependencyMap[12]).QuestAssetType.GAME_TILE, tmp29).url;
        const merged1 = Object.assign(buildBaseEmbedProps(obj6));
        if (!tmp19) {
          if (!tmp24) {
            const intl4 = require(dependencyMap[7]).intl;
            const string = intl4.string;
            const t = require(dependencyMap[7]).t;
            if (tmp31) {
              let stringResult = string(t.th2+0j);
            } else {
              stringResult = string(t.kUQLMJ);
            }
            obj5["acceptLabelText"] = stringResult;
            obj5["acceptLabelBackgroundColor"] = themeColors2.colors.acceptBlurpleLabelBackgroundColor;
            obj5["acceptLabelColor"] = themeColors2.colors.acceptLabelGreenColor;
            obj5["thumbnailCornerRadius"] = 8;
          }
        }
        const intl5 = require(dependencyMap[7]).intl;
        const string2 = intl5.string;
        let hvVgAZ = require(dependencyMap[7]).t;
        if (tmp24) {
          hvVgAZ = hvVgAZ.hvVgAZ;
          let string2Result = string2(hvVgAZ);
        } else {
          string2Result = string2(hvVgAZ.th2+0j);
        }
        const obj12 = require(dependencyMap[12]);
      } else {
        obj2 = require(dependencyMap[16]);
        const result3 = obj2.trackQuestEmbedFallbackViewed(questId, constants2.NOT_SHAREABLE_QUEST);
        const obj9 = {};
        const intl = require(dependencyMap[7]).intl;
        obj9.titleText = intl.string(require(dependencyMap[7]).t.Dd6Daw);
        const intl2 = require(dependencyMap[7]).intl;
        obj9.bodyText = intl2.string(require(dependencyMap[7]).t.NXrP3N);
        obj9.themeColors = themeColors;
        obj9.thumbnailUrl = Image.resolveAssetSource(importDefault(dependencyMap[14])).uri;
        tmp17 = buildBaseEmbedProps(obj9);
      }
      const obj18 = require(dependencyMap[17]);
    }
  }
}
const Image = require(dependencyMap[0]).Image;
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const _module = require(dependencyMap[3]);
({ QuestsExperimentLocations: closure_6, QuestEmbedFallbackReason: closure_7 } = _module);
const ThemeTypes = require(dependencyMap[4]).ThemeTypes;
const InviteTypes = require(dependencyMap[5]).InviteTypes;
const _module1 = require(dependencyMap[19]);
const result = _module1.fileFinishedImporting("modules/quests/native/QuestEmbed.native.tsx");

export const createQuestsEmbed = function createQuestsEmbed(questId) {
  let currentUser;
  let theme;
  ({ theme, currentUser } = questId);
  return buildQuestsEmbedProps({ questId: questId.questId, themeColors: importDefault(dependencyMap[18])(theme), currentUser });
};
