// Module ID: 13535
// Function ID: 13536
// Name: QuestEmbed
// Dependencies: [17, 1182, 7942, 5663, 1074, 7981, 1364, 1115, 7963, 12032, 5666, 4608, 11552, 1609, 13536, 7938, 7957, 7961, 8207, 2]
// Exports: createQuestsEmbed

// Module 13535 (QuestEmbed)
import _mod17 from "module_17" /* 17 */;
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 7981 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8207 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import QuestStore from "QuestStore" /* 7942 */;
import QuestConstants from "QuestConstants" /* 5663 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
({ QuestsExperimentLocations: metroRequire, QuestEmbedFallbackReason: closure_7 } = QuestConstants);
const ThemeTypes = Constants.ThemeTypes;
const InviteTypes = Constants2.InviteTypes;
let result = size.fileFinishedImporting("modules/quests/native/QuestEmbed.native.tsx");

export const createQuestsEmbed = function createQuestsEmbed(questId) {
  questId = questId.questId;
  let acceptBlurpleLabelBackgroundColor = dependencyMap;
  ({ theme, currentUser } = questId);
  let acceptLabelGreenColor = getEmbedThemeColorsDefault(theme);
  if (obj.isMetaQuest()) {
    const intl9 = tmp2(1115).intl;
    const intl10 = tmp2(1115).intl;
    let intl11 = intl10.string(tmp2(1115).t.CXEb9p);
    const colors5 = acceptLabelGreenColor.colors;
    const obj2 = {};
    const merged = Object.assign(acceptLabelGreenColor.baseColors);
    obj2.headerColor = colors5.headerColor;
    obj2.titleText = intl9.string(tmp2(1115).t["6LxbQM"]);
    ({ titleColor: obj25.titleColor, bodyTextColor: obj25.subtitleColor, bodyTextColor: obj25.bodyTextColor } = colors5);
    obj2.thumbnailUrl = Image.resolveAssetSource(tmp(13536)).uri;
    obj2.embedCanBeTapped = true;
    obj2.canBeAccepted = true;
    obj2.type = InviteTypes.GUILD;
    const stringResult = intl9.string(tmp2(1115).t["6LxbQM"]);
    let obj3 = {};
    const tmp2Result = tmp2(1364);
    const merged1 = Object.assign(obj2);
    if (isAndroidResult) {
      obj3.headerText = null;
      obj3.subtitle = intl11;
      let tmp86 = obj3;
    } else {
      obj3.headerText = undefined;
      obj3.subtitle = intl11;
      tmp86 = obj3;
    }
    obj3 = {};
    const merged2 = Object.assign(tmp86);
    intl11 = tmp2(1115).intl;
    obj3.acceptLabelText = intl11.string(tmp2(1115).t.hvVgAZ);
    acceptBlurpleLabelBackgroundColor = acceptLabelGreenColor.colors.acceptBlurpleLabelBackgroundColor;
    obj3.acceptLabelBackgroundColor = acceptBlurpleLabelBackgroundColor;
    acceptLabelGreenColor = acceptLabelGreenColor.colors.acceptLabelGreenColor;
    obj3.acceptLabelColor = acceptLabelGreenColor;
    isAndroidResult = tmp2(1364).isAndroid();
  } else {
    const result = tmp2(7938).findQuestOrReplacement(questId, QuestStore.quests, QuestStore.excludedQuests);
    const excludedQuests = QuestStore.excludedQuests;
    value = excludedQuests.get(questId);
    if (null == result) {
      if (tmp3.isFetchingCurrentQuests) {
        const obj5 = { themeColors: acceptLabelGreenColor };
        ({ bodyText, themeColors } = obj5);
        const colors4 = themeColors.colors;
        const obj6 = {};
        ({ titleText, thumbnailUrl } = obj5);
        const merged3 = Object.assign(themeColors.baseColors);
        obj6.headerColor = colors4.headerColor;
        obj6.titleText = titleText;
        ({ titleColor: obj22.titleColor, bodyTextColor: obj22.subtitleColor, bodyTextColor: obj22.bodyTextColor } = colors4);
        obj6.thumbnailUrl = thumbnailUrl;
        obj6.embedCanBeTapped = true;
        obj6.canBeAccepted = true;
        obj6.type = InviteTypes.GUILD;
        const obj7 = {};
        const tmp2Result17 = tmp2(1364);
        const merged4 = Object.assign(obj6);
        if (isAndroidResult1) {
          obj7.headerText = null;
          obj7.subtitle = bodyText;
        } else {
          obj7.headerText = undefined;
          obj7.subtitle = bodyText;
        }
        isAndroidResult1 = tmp2(1364).isAndroid();
      }
    }
    if (null == result) {
      if (null == value) {
        const result1 = tmp2(7957).trackQuestEmbedFallbackViewed(questId, constants2.UNKNOWN_QUEST);
        const intl12 = tmp2(1115).intl;
        const tmp2Result18 = tmp2(7957);
        const intl13 = tmp2(1115).intl;
        const stringResult2 = intl13.string(tmp2(1115).t.Ow5AQI);
        const colors6 = acceptLabelGreenColor.colors;
        const obj8 = {};
        const merged5 = Object.assign(acceptLabelGreenColor.baseColors);
        obj8.headerColor = colors6.headerColor;
        obj8.titleText = intl12.string(tmp2(1115).t["rxf+nx"]);
        ({ titleColor: obj34.titleColor, bodyTextColor: obj34.subtitleColor, bodyTextColor: obj34.bodyTextColor } = colors6);
        obj8.thumbnailUrl = Image.resolveAssetSource(tmp(13536)).uri;
        obj8.embedCanBeTapped = true;
        obj8.canBeAccepted = true;
        obj8.type = InviteTypes.GUILD;
        const stringResult1 = intl12.string(tmp2(1115).t["rxf+nx"]);
        const obj9 = {};
        const tmp2Result19 = tmp2(1364);
        const merged6 = Object.assign(obj8);
        if (isAndroidResult2) {
          obj9.headerText = null;
          obj9.subtitle = stringResult2;
        } else {
          obj9.headerText = undefined;
          obj9.subtitle = stringResult2;
        }
        isAndroidResult2 = tmp2(1364).isAndroid();
      }
      const result2 = tmp2(7957).trackQuestEmbedFallbackViewed(questId, constants2.EXCLUDED_QUEST);
      const intl7 = tmp2(1115).intl;
      const tmp2Result20 = tmp2(7957);
      const intl8 = tmp2(1115).intl;
      const stringResult4 = intl8.string(tmp2(1115).t.ii4mJo);
      const colors3 = acceptLabelGreenColor.colors;
      const obj10 = {};
      const merged7 = Object.assign(acceptLabelGreenColor.baseColors);
      obj10.headerColor = colors3.headerColor;
      obj10.titleText = intl7.string(tmp2(1115).t.Dd6Daw);
      ({ titleColor: obj18.titleColor, bodyTextColor: obj18.subtitleColor, bodyTextColor: obj18.bodyTextColor } = colors3);
      obj10.thumbnailUrl = Image.resolveAssetSource(tmp(13536)).uri;
      obj10.embedCanBeTapped = true;
      obj10.canBeAccepted = true;
      obj10.type = InviteTypes.GUILD;
      const stringResult3 = intl7.string(tmp2(1115).t.Dd6Daw);
      const obj11 = {};
      const tmp2Result21 = tmp2(1364);
      const merged8 = Object.assign(obj10);
      if (isAndroidResult3) {
        obj11.headerText = null;
        obj11.subtitle = stringResult4;
      } else {
        obj11.headerText = undefined;
        obj11.subtitle = stringResult4;
      }
      isAndroidResult3 = tmp2(1364).isAndroid();
    } else {
      if (tmp2Result22.isShareableQuest(result.config)) {
        const userStatus = result.userStatus;
        let enrolledAt;
        if (userStatus != null) {
          enrolledAt = userStatus.enrolledAt;
        }
        const _Date = Date;
        const date = new Date();
        const tmp26 = result.config.expiresAt < date.toISOString();
        const tmp21 = null != enrolledAt;
        const tmp2Result23 = tmp2(4608);
        const intl3 = tmp2(1115).intl;
        const obj12 = { questName: result.config.messages.questName };
        const gamePublisher = result.config.messages.gamePublisher;
        const _Date2 = Date;
        const tmp29 = tmp2(4608).isThemeDark(ThemeStore.getState().theme) ? ThemeTypes.DARK : ThemeTypes.LIGHT;
        const tmp30 = null != tmp3.questEnrollmentBlockedUntil;
        const date1 = new Date();
        if (result.config.expiresAt < date1.toISOString()) {
          const intl4 = tmp2(1115).intl;
          const obj14 = { questName: result.config.messages.questName };
          let formatToPlainStringResult1 = intl4.formatToPlainString(tmp2(1115).t["ge+AJp"], obj14);
        } else {
          const questTaskDetails = tmp2(7963).getQuestTaskDetails(result);
          const tmp2Result24 = tmp2(7963);
          const thirdPartyTaskDetails = tmp2(7963).getThirdPartyTaskDetails(result);
          const tmp2Result25 = tmp2(7963);
          const obj15 = { quest: result, taskDetails: questTaskDetails, location: constants.EMBED_MOBILE, sourceQuestContent: tmp2(5666).QuestContent.QUEST_EMBED_MOBILE, thirdPartyTaskDetails, withoutMarkdown: true, currentUser };
          formatToPlainStringResult1 = tmp2(12032).getQuestsInstructionsToWinReward(obj15);
          const tmp2Result26 = tmp2(12032);
        }
        const formatToPlainStringResult = intl3.formatToPlainString(tmp2(1115).t.EAYZAr, obj12);
        const colors2 = acceptLabelGreenColor.colors;
        const obj16 = {};
        const merged9 = Object.assign(acceptLabelGreenColor.baseColors);
        obj16.headerColor = colors2.headerColor;
        obj16.titleText = formatToPlainStringResult;
        ({ titleColor: obj13.titleColor, bodyTextColor: obj13.subtitleColor, bodyTextColor: obj13.bodyTextColor } = colors2);
        obj16.thumbnailUrl = tmp2(11552).getQuestAsset(result, tmp2(11552).QuestAssetType.GAME_TILE, tmp29).url;
        obj16.embedCanBeTapped = true;
        obj16.canBeAccepted = true;
        obj16.type = InviteTypes.GUILD;
        const tmp2Result27 = tmp2(11552);
        const obj17 = {};
        const tmp2Result28 = tmp2(1364);
        const merged10 = Object.assign(obj16);
        if (isAndroidResult4) {
          obj17.headerText = null;
          obj17.subtitle = formatToPlainStringResult1;
          let tmp44 = obj17;
        } else {
          obj17.headerText = undefined;
          obj17.subtitle = formatToPlainStringResult1;
          tmp44 = obj17;
        }
        const obj19 = {};
        const merged11 = Object.assign(tmp44);
        if (!tmp21) {
          if (!tmp26) {
            const intl5 = tmp2(1115).intl;
            const string = intl5.string;
            const t = tmp2(1115).t;
            if (tmp30) {
              let stringResult5 = string(t["th2+0j"]);
            } else {
              stringResult5 = string(t.kUQLMJ);
            }
            obj19.acceptLabelText = stringResult5;
            obj19.acceptLabelBackgroundColor = acceptLabelGreenColor.colors.acceptBlurpleLabelBackgroundColor;
            obj19.acceptLabelColor = acceptLabelGreenColor.colors.acceptLabelGreenColor;
            obj19.thumbnailCornerRadius = 8;
          }
        }
        const intl6 = tmp2(1115).intl;
        const string2 = intl6.string;
        let hvVgAZ = tmp2(1115).t;
        if (tmp26) {
          hvVgAZ = hvVgAZ.hvVgAZ;
          let string2Result = string2(hvVgAZ);
        } else {
          string2Result = string2(hvVgAZ["th2+0j"]);
        }
        isAndroidResult4 = tmp2(1364).isAndroid();
      } else {
        const result3 = tmp2(7957).trackQuestEmbedFallbackViewed(questId, constants2.NOT_SHAREABLE_QUEST);
        const intl = tmp2(1115).intl;
        const tmp2Result29 = tmp2(7957);
        const intl2 = tmp2(1115).intl;
        const stringResult7 = intl2.string(tmp2(1115).t.NXrP3N);
        const colors = acceptLabelGreenColor.colors;
        const obj20 = {};
        const merged12 = Object.assign(acceptLabelGreenColor.baseColors);
        obj20.headerColor = colors.headerColor;
        obj20.titleText = intl.string(tmp2(1115).t.Dd6Daw);
        ({ titleColor: obj4.titleColor, bodyTextColor: obj4.subtitleColor, bodyTextColor: obj4.bodyTextColor } = colors);
        obj20.thumbnailUrl = Image.resolveAssetSource(tmp(13536)).uri;
        obj20.embedCanBeTapped = true;
        obj20.canBeAccepted = true;
        obj20.type = InviteTypes.GUILD;
        const stringResult6 = intl.string(tmp2(1115).t.Dd6Daw);
        const obj21 = {};
        const tmp2Result30 = tmp2(1364);
        const merged13 = Object.assign(obj20);
        if (isAndroidResult5) {
          obj21.headerText = null;
          obj21.subtitle = stringResult7;
          let tmp19 = obj21;
        } else {
          obj21.headerText = undefined;
          obj21.subtitle = stringResult7;
          tmp19 = obj21;
        }
        return tmp19;
      }
      tmp2Result22 = tmp2(7961);
    }
    const tmp2Result16 = tmp2(7938);
  }
};
