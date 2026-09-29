// Module ID: 11587
// Function ID: 11588
// Name: QuestCopyUtils
// Dependencies: [5693, 1115, 5700, 7997, 7998, 8008, 7986, 7466, 2]
// Exports: copyShareLink, getContextualEntrypointHeading, getCtaLink, getDefaultReward, getDisclosureText, getExternalCtaLabel, getFilterGroupHeadingText, getFilterTypeText, getQuestUrl, getSortMethodText

// Module 11587 (QuestCopyUtils)
import util from "util" /* 1115 */;
import ClipboardUtils from "ClipboardUtils" /* 7466 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7997 */;
import QuestConstants from "QuestConstants" /* 5693 */;
import size from "module_2" /* 2 */;

({ QuestHomeSortMethods: c2, RewardFilterTypes: c3, TaskFilterTypes: closure_4 } = QuestConstants);
let result = size.fileFinishedImporting("modules/quests/utils/QuestCopyUtils.tsx");

export const getContextualEntrypointHeading = function getContextualEntrypointHeading(taskDetails) {
  ({ quest, thirdPartyTaskDetails } = taskDetails);
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  if (null != completedAt) {
    const intl6 = util.intl;
    return intl6.string(util.t.BzFeTF);
  } else {
    const userStatus2 = quest.userStatus;
    let enrolledAt;
    if (userStatus2 != null) {
      enrolledAt = userStatus2.enrolledAt;
    }
    if (null != enrolledAt) {
      let percentComplete = taskDetails.taskDetails.percentComplete;
      if (null != thirdPartyTaskDetails) {
        percentComplete = thirdPartyTaskDetails.percentComplete;
      }
      if (percentComplete >= 0.75) {
        const intl5 = util.intl;
        let stringResult = intl5.string(util.t.gvCR4H);
      } else {
        if (percentComplete >= 0.45) {
          if (percentComplete <= 0.55) {
            const intl4 = util.intl;
            stringResult = intl4.string(util.t.JNx8sG);
          }
        }
        if (percentComplete > 0) {
          const intl3 = util.intl;
          stringResult = intl3.string(util.t.JMbfnc);
        } else {
          const intl2 = util.intl;
          stringResult = intl2.string(util.t["7e5k7L"]);
        }
      }
      return stringResult;
    } else {
      const intl = util.intl;
      const obj = { questName: quest.config.messages.questName };
      return intl.formatToPlainString(util.t.EQa7os, obj);
    }
  }
};
export const getDisclosureText = function getDisclosureText(arg0) {
  ({ gamePublisher, gameTitle, cosponsorName } = arg0);
  let nPg6f1 = dependencyMap;
  ({ adCreativeType, isTargetedDisclosure, isContextualDisclosure, isVideoQuest } = arg0);
  const intl = util.intl;
  const stringResult = intl.string(util.t.fEbrT8);
  if (isTargetedDisclosure) {
    if (isContextualDisclosure) {
      const intl5 = tmp(1115).intl;
      nPg6f1 = tmp(1115).t.nPg6f1;
      let stringResult1 = intl5.string(nPg6f1);
    } else {
      if (null == cosponsorName) {
        const intl4 = tmp(1115).intl;
        const obj = { gamePublisher };
        let formatToPlainStringResult = intl4.formatToPlainString(tmp(1115).t.Piihy1, obj);
      } else {
        const intl3 = tmp(1115).intl;
        const obj2 = { gamePublisher, cosponsorName };
        formatToPlainStringResult = intl3.formatToPlainString(tmp(1115).t.DV47Gy, obj2);
      }
      const _HermesInternal = HermesInternal;
      stringResult1 = "" + formatToPlainStringResult + " " + stringResult;
    }
  } else if (adCreativeType !== tmp(5700).AdCreativeType.QUEST) {
    return stringResult;
  } else {
    const intl2 = tmp(1115).intl;
    const formatToPlainString = intl2.formatToPlainString;
    let t = tmp(1115).t;
    if (isVideoQuest) {
      t = { gamePublisher };
      let formatToPlainStringResult1 = formatToPlainString(t.rctMRl, t);
    } else {
      const obj3 = { gamePublisher, gameTitle: null };
      if (gameTitle == null) {
        gameTitle = "";
      }
      obj3.gameTitle = gameTitle;
      formatToPlainStringResult1 = formatToPlainString(t["5bQWNG"], obj3);
    }
  }
};
export const getExternalCtaLabel = function getExternalCtaLabel(quest) {
  return quest.config.ctaConfig.buttonLabel;
};
export const getSortMethodText = function getSortMethodText(arg0) {
  if (constants.SUGGESTED === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.gBfXPZ);
  } else if (tmp.MOST_RECENT === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t.K6oEu2);
  } else if (tmp.EXPIRING_SOON === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.IB22n3);
  } else if (tmp.RECENTLY_ENROLLED === arg0) {
    const intl = util.intl;
    return intl.string(util.t["BB+2tX"]);
  }
};
export const getFilterTypeText = function getFilterTypeText(filter) {
  if (constants2.VIRTUAL_CURRENCY === filter) {
    const intl5 = util.intl;
    return intl5.string(util.t.ElYQFS);
  } else if (tmp.COLLECTIBLE === filter) {
    const intl4 = util.intl;
    return intl4.string(util.t.Jg17Ut);
  } else if (tmp.IN_GAME === filter) {
    const intl3 = util.intl;
    return intl3.string(util.t["O/J2kr"]);
  } else if (constants3.VIDEO === filter) {
    const intl2 = util.intl;
    return intl2.string(util.t.e0iISA);
  } else if (tmp12.PLAY === filter) {
    const intl = util.intl;
    return intl.string(util.t["1nJR4p"]);
  }
};
export const getFilterGroupHeadingText = function getFilterGroupHeadingText(arg0) {
  if ("reward" === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.vjLqAU);
  } else if ("task" === arg0) {
    const intl = util.intl;
    return intl.string(util.t.Hufmss);
  }
};
export const getQuestUrl = function getQuestUrl(id) {
  return "" + location.protocol + "//" + location.host + "/quests/" + id;
};
export const getCtaLink = function getCtaLink(config) {
  return config.ctaConfig.link;
};
export const copyShareLink = function copyShareLink(id, ctaContent) {
  ctaContent = ctaContent.ctaContent;
  if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "copy_share_link")) {
    const obj2 = { type: tmp(8008).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(5700).AdCreativeType.QUEST, adCreativeId: id, questContentCTA: ctaContent, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null };
    ({ content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, position: obj5.questContentPosition, impressionId: obj5.impressionId } = ctaContent);
    tmp(7998).captureAdUserAction(obj2);
    const tmpResult = tmp(7998);
  } else {
    const obj4 = { questId: id, questContent: ctaContent.content, questContentCTA: ctaContent, questContentPosition: null, impressionId: null, sourceQuestContent: null };
    ({ position: obj3.questContentPosition, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = ctaContent);
    const result = tmp(7986).trackQuestContentClicked(obj4);
    const tmpResult3 = tmp(7986);
  }
  obj = AdAnalyticsInterfaceExperiment;
  ClipboardUtils.copy("" + location.protocol + "//" + location.host + "/quests/" + id);
};
export const getDefaultReward = function getDefaultReward(config) {
  if (0 === config.rewardsConfig.rewards.length) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Quest " + config.id + " has no rewards configured");
    throw error;
  } else {
    return config.rewardsConfig.rewards[0];
  }
};
