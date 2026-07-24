// Module ID: 12325
// Function ID: 96052
// Name: buildBaseEmbedProps
// Dependencies: [27, 1278, 6941, 4976, 653, 6978, 477, 1212, 6964, 10953, 4979, 3976, 9494, 1553, 12326, 6939, 6958, 6962, 7722, 2]
// Exports: createQuestsEmbed

// Module 12325 (buildBaseEmbedProps)
import { Image } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import { ThemeTypes } from "ME";
import { InviteTypes } from "InviteSendStates";

let closure_6;
let closure_7;
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
  const obj2 = require(477) /* set */;
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
    const intl = require(1212) /* getSystemLocale */.intl;
    let obj = { questName: quest.config.messages.questName };
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["ge+AJp"], obj);
  } else {
    let tmp;
    const questTaskDetails = require(6964) /* _createForOfIteratorHelperLoose */.getQuestTaskDetails(quest);
    const obj3 = require(6964) /* _createForOfIteratorHelperLoose */;
    const thirdPartyTaskDetails = require(6964) /* _createForOfIteratorHelperLoose */.getThirdPartyTaskDetails(quest);
    const obj4 = require(6964) /* _createForOfIteratorHelperLoose */;
    obj = { quest, taskDetails: questTaskDetails, location: constants.EMBED_MOBILE, sourceQuestContent: require(4979) /* QuestsVisibleMessagesChangedSource */.QuestContent.QUEST_EMBED_MOBILE };
    if (null != thirdPartyTaskDetails) {
      tmp = thirdPartyTaskDetails;
    }
    obj.thirdPartyTaskDetails = tmp;
    obj.withoutMarkdown = true;
    obj.currentUser = quest.currentUser;
    return require(10953) /* formatWithOrWithoutMarkdown */.getQuestsInstructionsToWinReward(obj);
  }
  date = new Date();
}
function buildQuestsEmbedProps(currentUser) {
  let quest;
  let questId;
  let themeColors;
  let themeColors2;
  ({ questId, themeColors } = currentUser);
  let obj = require(1553) /* isMetaQuest */;
  if (obj.isMetaQuest()) {
    obj = {};
    obj = {};
    const intl8 = require(1212) /* getSystemLocale */.intl;
    obj.titleText = intl8.string(require(1212) /* getSystemLocale */.t["6LxbQM"]);
    const intl9 = require(1212) /* getSystemLocale */.intl;
    obj.bodyText = intl9.string(require(1212) /* getSystemLocale */.t.CXEb9p);
    obj.themeColors = themeColors;
    obj.thumbnailUrl = Image.resolveAssetSource(importDefault(12326)).uri;
    const merged = Object.assign(buildBaseEmbedProps(obj));
    const intl10 = require(1212) /* getSystemLocale */.intl;
    obj["acceptLabelText"] = intl10.string(require(1212) /* getSystemLocale */.t.hvVgAZ);
    obj["acceptLabelBackgroundColor"] = themeColors.colors.acceptBlurpleLabelBackgroundColor;
    obj["acceptLabelColor"] = themeColors.colors.acceptLabelGreenColor;
    return obj;
  } else {
    let obj1 = require(6939) /* _createForOfIteratorHelperLoose */;
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
        const result1 = require(6958) /* assignBillingSessionId */.trackQuestEmbedFallbackViewed(questId, constants2.EXCLUDED_QUEST);
        let obj2 = {};
        const intl6 = require(1212) /* getSystemLocale */.intl;
        obj2.titleText = intl6.string(require(1212) /* getSystemLocale */.t.Dd6Daw);
        const intl7 = require(1212) /* getSystemLocale */.intl;
        obj2.bodyText = intl7.string(require(1212) /* getSystemLocale */.t.ii4mJo);
        obj2.themeColors = themeColors;
        questId = Image.resolveAssetSource;
        obj2.thumbnailUrl = questId(importDefault(12326)).uri;
        let tmp53 = buildBaseEmbedProps(obj2);
        const obj13 = require(6958) /* assignBillingSessionId */;
      } else {
        const result2 = require(6958) /* assignBillingSessionId */.trackQuestEmbedFallbackViewed(questId, constants2.UNKNOWN_QUEST);
        const obj3 = {};
        const intl11 = require(1212) /* getSystemLocale */.intl;
        obj3.titleText = intl11.string(require(1212) /* getSystemLocale */.t["rxf+nx"]);
        const intl12 = require(1212) /* getSystemLocale */.intl;
        obj3.bodyText = intl12.string(require(1212) /* getSystemLocale */.t.Ow5AQI);
        obj3.themeColors = themeColors;
        obj3.thumbnailUrl = Image.resolveAssetSource(importDefault(12326)).uri;
        tmp53 = buildBaseEmbedProps(obj3);
        const obj19 = require(6958) /* assignBillingSessionId */;
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
        let obj6 = require(3976) /* AccessibilityAnnouncer */;
        const obj5 = {};
        obj6 = {};
        const intl3 = require(1212) /* getSystemLocale */.intl;
        const obj7 = { questName: quest.config.messages.questName };
        obj6.titleText = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.EAYZAr, obj7);
        obj6.subtitle = quest.config.messages.gamePublisher;
        const obj8 = { quest, currentUser: obj4.currentUser };
        obj6.bodyText = buildSupportedOnMobileEmbedBodyText(obj8);
        obj6.themeColors = themeColors2;
        const tmp19 = null != enrolledAt;
        const tmp29 = obj6.isThemeDark(state.getState().theme) ? ThemeTypes.DARK : ThemeTypes.LIGHT;
        const tmp31 = null != closure_5.questEnrollmentBlockedUntil;
        obj6.thumbnailUrl = require(9494) /* resolveAsset */.getQuestAsset(quest, require(9494) /* resolveAsset */.QuestAssetType.GAME_TILE, tmp29).url;
        const merged1 = Object.assign(buildBaseEmbedProps(obj6));
        if (!tmp19) {
          if (!tmp24) {
            const intl4 = require(1212) /* getSystemLocale */.intl;
            const string = intl4.string;
            const t = require(1212) /* getSystemLocale */.t;
            if (tmp31) {
              let stringResult = string(t["th2+0j"]);
            } else {
              stringResult = string(t.kUQLMJ);
            }
            obj5["acceptLabelText"] = stringResult;
            obj5["acceptLabelBackgroundColor"] = themeColors2.colors.acceptBlurpleLabelBackgroundColor;
            obj5["acceptLabelColor"] = themeColors2.colors.acceptLabelGreenColor;
            obj5["thumbnailCornerRadius"] = 8;
          }
        }
        const intl5 = require(1212) /* getSystemLocale */.intl;
        const string2 = intl5.string;
        let hvVgAZ = require(1212) /* getSystemLocale */.t;
        if (tmp24) {
          hvVgAZ = hvVgAZ.hvVgAZ;
          let string2Result = string2(hvVgAZ);
        } else {
          string2Result = string2(hvVgAZ["th2+0j"]);
        }
        const obj12 = require(9494) /* resolveAsset */;
      } else {
        obj2 = require(6958) /* assignBillingSessionId */;
        const result3 = obj2.trackQuestEmbedFallbackViewed(questId, constants2.NOT_SHAREABLE_QUEST);
        const obj9 = {};
        const intl = require(1212) /* getSystemLocale */.intl;
        obj9.titleText = intl.string(require(1212) /* getSystemLocale */.t.Dd6Daw);
        const intl2 = require(1212) /* getSystemLocale */.intl;
        obj9.bodyText = intl2.string(require(1212) /* getSystemLocale */.t.NXrP3N);
        obj9.themeColors = themeColors;
        obj9.thumbnailUrl = Image.resolveAssetSource(importDefault(12326)).uri;
        tmp17 = buildBaseEmbedProps(obj9);
      }
      obj18 = require(6962) /* _createForOfIteratorHelperLoose */;
    }
  }
}
({ QuestsExperimentLocations: closure_6, QuestEmbedFallbackReason: closure_7 } = QuestsExperimentLocations);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/native/QuestEmbed.native.tsx");

export const createQuestsEmbed = function createQuestsEmbed(questId) {
  let currentUser;
  let theme;
  ({ theme, currentUser } = questId);
  return buildQuestsEmbedProps({ questId: questId.questId, themeColors: importDefault(7722)(theme), currentUser });
};
