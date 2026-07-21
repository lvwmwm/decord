// Module ID: 9460
// Function ID: 73697
// Name: getQuestUrl
// Dependencies: []
// Exports: copyShareLink, getContextualEntrypointHeading, getCtaLink, getDefaultReward, getDisclosureText, getExternalCtaLabel, getFilterGroupHeadingText, getFilterTypeText, getSortMethodText

// Module 9460 (getQuestUrl)
function getQuestUrl(id) {
  return "" + location.protocol + "//" + location.host + "/quests/" + id;
}
const _module = require(dependencyMap[0]);
({ QuestHomeSortMethods: closure_2, RewardFilterTypes: closure_3, TaskFilterTypes: closure_4 } = _module);
const _module1 = require(dependencyMap[8]);
const result = _module1.fileFinishedImporting("modules/quests/utils/QuestCopyUtils.tsx");

export const getContextualEntrypointHeading = function getContextualEntrypointHeading(taskDetails) {
  let quest;
  let thirdPartyTaskDetails;
  ({ quest, thirdPartyTaskDetails } = taskDetails);
  const userStatus = quest.userStatus;
  let completedAt;
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  if (null != completedAt) {
    const intl6 = require(dependencyMap[1]).intl;
    return intl6.string(require(dependencyMap[1]).t.BzFeTF);
  } else {
    const userStatus2 = quest.userStatus;
    let enrolledAt;
    if (null != userStatus2) {
      enrolledAt = userStatus2.enrolledAt;
    }
    if (null != enrolledAt) {
      let percentComplete = taskDetails.taskDetails.percentComplete;
      if (null != thirdPartyTaskDetails) {
        percentComplete = thirdPartyTaskDetails.percentComplete;
      }
      if (percentComplete >= 0.75) {
        const intl5 = require(dependencyMap[1]).intl;
        let stringResult = intl5.string(require(dependencyMap[1]).t.gvCR4H);
      } else {
        if (percentComplete >= 0.45) {
          if (percentComplete <= 0.55) {
            const intl4 = require(dependencyMap[1]).intl;
            stringResult = intl4.string(require(dependencyMap[1]).t.JNx8sG);
          }
        }
        if (percentComplete > 0) {
          const intl3 = require(dependencyMap[1]).intl;
          stringResult = intl3.string(require(dependencyMap[1]).t.JMbfnc);
        } else {
          const intl2 = require(dependencyMap[1]).intl;
          stringResult = intl2.string(require(dependencyMap[1]).t.7e5k7L);
        }
      }
      return stringResult;
    } else {
      const intl = require(dependencyMap[1]).intl;
      const obj = { questName: quest.config.messages.questName };
      return intl.formatToPlainString(require(dependencyMap[1]).t.EQa7os, obj);
    }
  }
};
export const getDisclosureText = function getDisclosureText(isTargetedDisclosure) {
  let cosponsorName;
  let gamePublisher;
  ({ gamePublisher, cosponsorName } = isTargetedDisclosure);
  if (isTargetedDisclosure.isTargetedDisclosure) {
    if (isTargetedDisclosure.isContextualDisclosure) {
      const intl5 = require(dependencyMap[1]).intl;
      let stringResult = intl5.string(require(dependencyMap[1]).t.nPg6f1);
    } else {
      if (null == cosponsorName) {
        const intl3 = require(dependencyMap[1]).intl;
        let obj = { gamePublisher };
        let formatToPlainStringResult = intl3.formatToPlainString(require(dependencyMap[1]).t.Piihy1, obj);
      } else {
        const intl2 = require(dependencyMap[1]).intl;
        obj = { gamePublisher, cosponsorName };
        formatToPlainStringResult = intl2.formatToPlainString(require(dependencyMap[1]).t.DV47Gy, obj);
      }
      const intl4 = require(dependencyMap[1]).intl;
      const _HermesInternal = HermesInternal;
      stringResult = "" + formatToPlainStringResult + " " + intl4.string(require(dependencyMap[1]).t.fEbrT8);
    }
  } else {
    const intl = require(dependencyMap[1]).intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = require(dependencyMap[1]).t;
    if (tmp) {
      const obj1 = { gamePublisher };
      let formatToPlainStringResult1 = formatToPlainString(t.rctMRl, obj1);
    } else {
      obj = { gamePublisher, gameTitle: tmp2 };
      formatToPlainStringResult1 = formatToPlainString(t.5bQWNG, obj);
    }
    return formatToPlainStringResult1;
  }
};
export const getExternalCtaLabel = function getExternalCtaLabel(quest) {
  return quest.config.ctaConfig.buttonLabel;
};
export const getSortMethodText = function getSortMethodText(arg0) {
  if (constants.SUGGESTED === arg0) {
    const intl4 = require(dependencyMap[1]).intl;
    return intl4.string(require(dependencyMap[1]).t.gBfXPZ);
  } else if (constants.MOST_RECENT === arg0) {
    const intl3 = require(dependencyMap[1]).intl;
    return intl3.string(require(dependencyMap[1]).t.K6oEu2);
  } else if (constants.EXPIRING_SOON === arg0) {
    const intl2 = require(dependencyMap[1]).intl;
    return intl2.string(require(dependencyMap[1]).t.IB22n3);
  } else if (constants.RECENTLY_ENROLLED === arg0) {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(require(dependencyMap[1]).t.BB+2tX);
  }
};
export const getFilterTypeText = function getFilterTypeText(filter) {
  if (constants2.VIRTUAL_CURRENCY === filter) {
    const intl5 = require(dependencyMap[1]).intl;
    return intl5.string(require(dependencyMap[1]).t.ElYQFS);
  } else if (constants2.COLLECTIBLE === filter) {
    const intl4 = require(dependencyMap[1]).intl;
    return intl4.string(require(dependencyMap[1]).t.Jg17Ut);
  } else if (constants2.IN_GAME === filter) {
    const intl3 = require(dependencyMap[1]).intl;
    return intl3.string(require(dependencyMap[1]).t.O/J2kr);
  } else if (constants3.VIDEO === filter) {
    const intl2 = require(dependencyMap[1]).intl;
    return intl2.string(require(dependencyMap[1]).t.e0iISA);
  } else if (constants3.PLAY === filter) {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(require(dependencyMap[1]).t.1nJR4p);
  }
};
export const getFilterGroupHeadingText = function getFilterGroupHeadingText(arg0) {
  if ("reward" === arg0) {
    const intl2 = require(dependencyMap[1]).intl;
    return intl2.string(require(dependencyMap[1]).t.vjLqAU);
  } else if ("task" === arg0) {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(require(dependencyMap[1]).t.Hufmss);
  }
};
export { getQuestUrl };
export const getCtaLink = function getCtaLink(config) {
  return config.ctaConfig.link;
};
export const copyShareLink = function copyShareLink(id, ctaContent) {
  ctaContent = ctaContent.ctaContent;
  let obj = require(dependencyMap[2]);
  if (obj.shouldMigrateToAdAnalyticsInterface(require(dependencyMap[2]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "copy_share_link")) {
    let tmpResult = tmp(tmp2[3]);
    obj = { type: tmp(tmp2[4]).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(tmp2[5]).AdCreativeType.QUEST, adCreativeId: id, questContentCTA: ctaContent };
    ({ content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, position: obj5.questContentPosition, impressionId: obj5.impressionId } = ctaContent);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(tmp2[6]);
    obj = { questId: id, questContent: ctaContent.content, questContentCTA: ctaContent };
    ({ position: obj3.questContentPosition, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = ctaContent);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  require(dependencyMap[7]).copy(getQuestUrl(id));
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
