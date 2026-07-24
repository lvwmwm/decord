// Module ID: 10953
// Function ID: 85107
// Name: formatWithOrWithoutMarkdown
// Dependencies: [5, 57, 31, 1921, 1849, 4976, 653, 1851, 1212, 10493, 6962, 6964, 9499, 1920, 10954, 1872, 566, 10955, 8631, 8642, 4979, 9504, 1827, 10547, 10504, 10501, 6968, 6967, 2]
// Exports: getQuestsInstructionsToWinReward, getRewardCodeRedemptionInstructions, useModalCtaConfig, usePremiumExtendableCopy, usePrimaryCtaCopy, useQuestBarSubtitle, useQuestBarTitle, useQuestDescription, useQuestInstructionTitle

// Module 10953 (formatWithOrWithoutMarkdown)
import closure_3 from "QuestsExperimentLocations";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import { HelpdeskArticles } from "ME";
import { PremiumTypes } from "GuildFeatures";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
function formatWithOrWithoutMarkdown(_03VJqu, maxSettingsForPreset, withoutMarkdown3) {
  const intl = require(1212) /* getSystemLocale */.intl;
  if (withoutMarkdown3) {
    let formatToPlainStringResult = intl.formatToPlainString(_03VJqu, maxSettingsForPreset);
  } else {
    formatToPlainStringResult = intl.format(_03VJqu, maxSettingsForPreset);
  }
  return formatToPlainStringResult;
}
function getGamingPlayQuestPermanentWithPremiumCollectibleMessage(shouldShowGameProfileLink) {
  shouldShowGameProfileLink = shouldShowGameProfileLink.shouldShowGameProfileLink;
  const t = require(1212) /* getSystemLocale */.t;
  if (!shouldShowGameProfileLink.hasRewardDuration) {
    return shouldShowGameProfileLink ? t.tQoqXX : t["eb/Sna"];
  }
}
function getGamingPlayQuestExtendableWithPremiumCollectibleMessage(isPremiumResult) {
  const t = require(1212) /* getSystemLocale */.t;
  return isPremiumResult ? t.klYWbT : t.ziB0HF;
}
function getGamingPlayQuestExpiringCollectibleMessage(isPremiumResult) {
  const t = require(1212) /* getSystemLocale */.t;
  return isPremiumResult ? t["4JS2QJ"] : t.AwuMRS;
}
function getQuestBarSubtitlePlayGameMessage(isPremiumResult) {
  const t = require(1212) /* getSystemLocale */.t;
  return isPremiumResult ? t.GFdaUK : t.NIimTt;
}
function getQuestInstructionsToWinRewardPlaytimeOnDesktop(taskDetails) {
  let collectibleRewardDuration;
  let hasNitro;
  let onGameTitleClick;
  let quest;
  let rewardNameWithArticle;
  let withoutMarkdown;
  ({ quest, collectibleRewardDuration, onGameTitleClick, rewardNameWithArticle } = taskDetails);
  ({ withoutMarkdown, hasNitro } = taskDetails);
  let obj = require(9499) /* getCollectiblesQuestReward */;
  const result = obj.isCollectibleQuestRewardPremiumExtendable(quest.config);
  const features = quest.config.features;
  const result1 = require(9499) /* getCollectiblesQuestReward */.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config);
  const hasItem = features.includes(constants2.NON_GAMING_PLAY_QUEST);
  if (hasNitro) {
    if (result) {
      if (!result1) {
        if (hasItem) {
        } else {
        }
      }
      if (!hasItem) {
        obj = { hasRewardDuration: null != collectibleRewardDuration, shouldShowGameProfileLink: tmp4 };
        getGamingPlayQuestPermanentWithPremiumCollectibleMessage(obj);
      }
      if (null != collectibleRewardDuration) {
        let ztXW8V = require(1212) /* getSystemLocale */.t.u5QXpw;
      } else {
        ztXW8V = require(1212) /* getSystemLocale */.t.ztXW8V;
      }
    }
  }
  if (!result) {
    if (null == collectibleRewardDuration) {
      const t = require(1212) /* getSystemLocale */.t;
      if (hasItem) {
      } else {
      }
      obj = { gameTitle: quest.config.messages.gameTitle, streamingDurationRequirement: taskDetails.taskDetails.targetMinutes, rewardNameWithArticle, duration: collectibleRewardDuration, questReward: rewardNameWithArticle, onGameTitleClick };
      return formatWithOrWithoutMarkdown(_03VJqu, obj, withoutMarkdown);
    }
  }
  if (hasItem) {
    let enQ3jU = require(1212) /* getSystemLocale */.t.enQ3jU;
  } else {
    enQ3jU = getGamingPlayQuestExpiringCollectibleMessage(tmp4);
  }
}
function getQuestInstructionsToWinRewardSponsored(withoutMarkdown) {
  let applications;
  let quest;
  let rewardNameWithArticle;
  let targetMinutes;
  let taskDetails;
  ({ quest, taskDetails, rewardNameWithArticle } = withoutMarkdown);
  ({ targetMinutes, applications } = taskDetails);
  if (withoutMarkdown.withoutMarkdown) {
    let intl = require(1212) /* getSystemLocale */.intl;
    let obj = { rewardNameWithArticle, targetMinutes };
    let formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["1votF6"], obj);
  } else {
    obj = { quest, rewardNameWithArticle, targetMinutes };
    obj = { quest, sourceQuestContent: tmp };
    if (null == applications) {
      applications = [];
    }
    obj.applications = applications;
    obj.popoutTargetElementRef = tmp2;
    obj.onGameSheetOpened = tmp3;
    obj.onGameSheetClosed = tmp4;
    obj.gameSheetHook = require(10954) /* createGameSheetHook */.createGameSheetHook(obj);
    formatToPlainStringResult = (function _getQuestInstructionsToWinRewardArenaPackage(arg0) {
      let gameSheetHook;
      let quest;
      let rewardNameWithArticle;
      let targetMinutes;
      const obj = { [outer1_10.PACKAGE_ACTION_ADVENTURE]: outer1_0(outer1_2[8]).t.H485IA, [outer1_10.PACKAGE_RPG_MMO]: outer1_0(outer1_2[8]).t["3XS8Ni"], [outer1_10.PACKAGE_RACING_SPORTS]: outer1_0(outer1_2[8]).t["X+UCju"], [outer1_10.PACKAGE_SANDBOX_CREATIVE]: outer1_0(outer1_2[8]).t["6o4n1Q"], [outer1_10.PACKAGE_FAMILY_FRIENDLY]: outer1_0(outer1_2[8]).t.DUsNmf, [outer1_10.PACKAGE_HOLIDAY_SEASON]: outer1_0(outer1_2[8]).t["cWP8/Z"], [outer1_10.PACKAGE_NEW_YEARS]: outer1_0(outer1_2[8]).t["8+sIJz"] };
      ({ quest, gameSheetHook, rewardNameWithArticle, targetMinutes } = arg0);
      const features = quest.config.features;
      const found = features.find((arg0) => arg0 in obj);
      let CDeHul = null;
      if (null != found) {
        CDeHul = obj[found];
      }
      if (null == CDeHul) {
        CDeHul = outer1_0(outer1_2[8]).t.CDeHul;
      }
      const intl = outer1_0(outer1_2[8]).intl;
      return intl.format(CDeHul, { rewardNameWithArticle, targetMinutes, gameSheetHook });
    })(obj);
    const obj2 = require(10954) /* createGameSheetHook */;
  }
  return formatToPlainStringResult;
}
function _getQuestsInstructionsToWinReward(arg0) {
  let collectibleRewardDuration;
  let collectibleRewardDuration2;
  let collectibleRewardDuration3;
  let collectibleRewardDuration4;
  let collectibleRewardDuration5;
  let currentUser;
  let hasNitro;
  let hasNitro2;
  let hasNitro3;
  let hasNitro4;
  let hasNitro5;
  let needsToConnect;
  let needsToConnect2;
  let onGameSheetClosed;
  let onGameSheetOpened;
  let onGameTitleClick;
  let onGameTitleClick2;
  let onGameTitleClick4;
  let onGameTitleClick5;
  let onGameTitleClick6;
  let popoutTargetElementRef;
  let quest;
  let quest2;
  let quest3;
  let quest4;
  let quest5;
  let quest6;
  let quest7;
  let rewardNameWithArticle;
  let rewardNameWithArticle2;
  let rewardNameWithArticle3;
  let rewardNameWithArticle4;
  let rewardNameWithArticle5;
  let rewardNameWithArticle6;
  let sourceQuestContent;
  let taskDetails;
  let thirdPartyTaskDetails;
  let thirdPartyTaskDetails2;
  let withoutMarkdown;
  let withoutMarkdown2;
  let withoutMarkdown3;
  let withoutMarkdown4;
  let withoutMarkdown5;
  let withoutMarkdown6;
  let withoutMarkdown7;
  ({ quest, taskDetails, thirdPartyTaskDetails, withoutMarkdown, currentUser, onGameTitleClick } = arg0);
  ({ sourceQuestContent, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed, needsToConnect } = arg0);
  let obj = require(1872) /* isPremiumAtLeast */;
  let isPremiumResult = obj.isPremium(currentUser, PremiumTypes.TIER_2);
  let obj1 = require(9499) /* getCollectiblesQuestReward */;
  const collectibleQuestRewardDuration = obj1.getCollectibleQuestRewardDuration(quest.config);
  let obj2 = require(6964) /* _createForOfIteratorHelperLoose */;
  let isConsoleQuestResult = obj2.isConsoleQuest(quest);
  if (isConsoleQuestResult) {
    let obj3 = require(6964) /* _createForOfIteratorHelperLoose */;
    isConsoleQuestResult = obj3.shouldUsePlayOnDesktopTask(quest);
  }
  let obj4 = require(6962) /* _createForOfIteratorHelperLoose */;
  let obj5 = require(9499) /* getCollectiblesQuestReward */;
  const defaultRewardNameWithArticle = obj5.getDefaultRewardNameWithArticle(quest.config, currentUser);
  if (isSponsoredPlayQuestResult) {
    isPremiumResult = getQuestInstructionsToWinRewardSponsored;
    obj = { quest, taskDetails, sourceQuestContent, withoutMarkdown, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed, rewardNameWithArticle: defaultRewardNameWithArticle };
    let description = getQuestInstructionsToWinRewardSponsored(obj);
  } else if (isConsoleQuestResult) {
    obj = { quest, taskDetails, withoutMarkdown, hasNitro: isPremiumResult, collectibleRewardDuration: collectibleQuestRewardDuration, onGameTitleClick, rewardNameWithArticle: defaultRewardNameWithArticle };
    ({ quest: quest6, collectibleRewardDuration: collectibleRewardDuration4, onGameTitleClick: onGameTitleClick5 } = obj);
    const targetMinutes3 = obj.taskDetails.targetMinutes;
    isPremiumResult = require;
    isPremiumResult = dependencyMap;
    ({ withoutMarkdown: withoutMarkdown6, hasNitro: hasNitro4, rewardNameWithArticle: rewardNameWithArticle5 } = obj);
    isPremiumResult = require(9499) /* getCollectiblesQuestReward */.isCollectibleQuestRewardPremiumExtendable(quest6.config);
    const obj38 = require(9499) /* getCollectiblesQuestReward */;
    let result = require(9499) /* getCollectiblesQuestReward */.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest6.config);
    const features3 = quest6.config.features;
    isPremiumResult = constants2;
    isPremiumResult = features3.includes(constants2.NON_GAMING_PLAY_QUEST);
    isPremiumResult = null;
    isPremiumResult = null != onGameTitleClick5;
    if (!hasNitro4) {
      if (!isPremiumResult) {
        if (null == collectibleRewardDuration4) {
          if (isPremiumResult) {
            isPremiumResult = require;
            isPremiumResult = dependencyMap;
            e_K3xJ = require(1212) /* getSystemLocale */.t["e+K3xJ"];
          } else {
            isPremiumResult = getQuestBarSubtitlePlayGameMessage;
            e_K3xJ = getQuestBarSubtitlePlayGameMessage(isPremiumResult);
          }
          result = { gameTitle: quest6.config.messages.gameTitle, streamingDurationRequirement: targetMinutes3, rewardNameWithArticle: rewardNameWithArticle5, duration: collectibleRewardDuration4, targetMinutes: targetMinutes3, onGameTitleClick: onGameTitleClick5 };
          isPremiumResult = isPremiumResult(e_K3xJ, result, withoutMarkdown6);
        }
      }
      if (isPremiumResult) {
        isPremiumResult = require;
        isPremiumResult = dependencyMap;
        let enQ3jU = require(1212) /* getSystemLocale */.t.enQ3jU;
      } else {
        isPremiumResult = getGamingPlayQuestExpiringCollectibleMessage;
        enQ3jU = getGamingPlayQuestExpiringCollectibleMessage(isPremiumResult);
      }
      isPremiumResult = enQ3jU;
    }
    if (!result) {
      if (isPremiumResult) {
        isPremiumResult = require;
        isPremiumResult = dependencyMap;
      } else {
        isPremiumResult = getGamingPlayQuestExtendableWithPremiumCollectibleMessage;
      }
      isPremiumResult = _1AcTqm;
    }
    if (!isPremiumResult) {
      isPremiumResult = getGamingPlayQuestPermanentWithPremiumCollectibleMessage;
      obj1 = { hasRewardDuration: null != collectibleRewardDuration4, shouldShowGameProfileLink: isPremiumResult };
      isPremiumResult = getGamingPlayQuestPermanentWithPremiumCollectibleMessage(obj1);
    }
    if (null != collectibleRewardDuration4) {
      isPremiumResult = require;
      isPremiumResult = dependencyMap;
      let ztXW8V = require(1212) /* getSystemLocale */.t.u5QXpw;
    } else {
      isPremiumResult = require;
      isPremiumResult = dependencyMap;
      ztXW8V = require(1212) /* getSystemLocale */.t.ztXW8V;
    }
    isPremiumResult = ztXW8V;
    const obj39 = require(9499) /* getCollectiblesQuestReward */;
  } else {
    let obj6 = require(6964) /* _createForOfIteratorHelperLoose */;
    if (obj6.isConsoleQuest(quest)) {
      obj2 = { quest, taskDetails, withoutMarkdown, hasNitro: isPremiumResult, collectibleRewardDuration: collectibleQuestRewardDuration, onGameTitleClick, rewardNameWithArticle: defaultRewardNameWithArticle };
      ({ quest: quest5, collectibleRewardDuration: collectibleRewardDuration3, onGameTitleClick: onGameTitleClick4 } = obj2);
      const targetMinutes2 = obj2.taskDetails.targetMinutes;
      isPremiumResult = require;
      isPremiumResult = dependencyMap;
      ({ withoutMarkdown: withoutMarkdown5, hasNitro: hasNitro3, rewardNameWithArticle: rewardNameWithArticle4 } = obj2);
      isPremiumResult = require(9499) /* getCollectiblesQuestReward */.isCollectibleQuestRewardPremiumExtendable(quest5.config);
      const obj33 = require(9499) /* getCollectiblesQuestReward */;
      let result1 = require(9499) /* getCollectiblesQuestReward */.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest5.config);
      isPremiumResult = null;
      isPremiumResult = null != onGameTitleClick4;
      if (!hasNitro3) {
        if (!isPremiumResult) {
          if (isPremiumResult == collectibleRewardDuration3) {
            isPremiumResult = getQuestBarSubtitlePlayGameMessage;
            isPremiumResult = getQuestBarSubtitlePlayGameMessage(isPremiumResult);
          }
          result1 = { gameTitle: quest5.config.messages.gameTitle, targetMinutes: targetMinutes2, rewardNameWithArticle: rewardNameWithArticle4, duration: collectibleRewardDuration3, streamingDurationRequirement: targetMinutes2, onGameTitleClick: onGameTitleClick4 };
          isPremiumResult = isPremiumResult(isPremiumResult, result1, withoutMarkdown5);
        }
        isPremiumResult = getGamingPlayQuestExpiringCollectibleMessage;
        isPremiumResult = getGamingPlayQuestExpiringCollectibleMessage(isPremiumResult);
      }
      if (result1) {
        isPremiumResult = getGamingPlayQuestPermanentWithPremiumCollectibleMessage;
        obj3 = {};
        isPremiumResult = isPremiumResult != collectibleRewardDuration3;
        obj3.hasRewardDuration = isPremiumResult;
        obj3.shouldShowGameProfileLink = isPremiumResult;
        isPremiumResult = getGamingPlayQuestPermanentWithPremiumCollectibleMessage(obj3);
      } else {
        isPremiumResult = getGamingPlayQuestExtendableWithPremiumCollectibleMessage;
        isPremiumResult = getGamingPlayQuestExtendableWithPremiumCollectibleMessage(isPremiumResult);
      }
      const obj34 = require(9499) /* getCollectiblesQuestReward */;
    } else {
      let obj7 = require(6964) /* _createForOfIteratorHelperLoose */;
      if (obj7.shouldUsePlayOnDesktopTask(quest)) {
        isPremiumResult = getQuestInstructionsToWinRewardPlaytimeOnDesktop;
        obj4 = { quest, taskDetails, withoutMarkdown, hasNitro: isPremiumResult, collectibleRewardDuration: collectibleQuestRewardDuration, onGameTitleClick, rewardNameWithArticle: defaultRewardNameWithArticle };
        description = getQuestInstructionsToWinRewardPlaytimeOnDesktop(obj4);
      } else {
        let obj8 = require(9499) /* getCollectiblesQuestReward */;
        obj5 = { quest };
        if (obj8.isTieredRewardCodeQuest(obj5)) {
          obj6 = { quest, taskDetails, withoutMarkdown, onGameTitleClick };
          const onGameTitleClick3 = obj6.onGameTitleClick;
          isPremiumResult = null;
          isPremiumResult = formatWithOrWithoutMarkdown;
          if (null != onGameTitleClick3) {
            isPremiumResult = require;
            isPremiumResult = dependencyMap;
            a_ia7F = require(1212) /* getSystemLocale */.t.HHVg4i;
          } else {
            isPremiumResult = require;
            isPremiumResult = dependencyMap;
            a_ia7F = require(1212) /* getSystemLocale */.t["a/ia7F"];
          }
          obj7 = { gameTitle: obj6.quest.config.messages.gameTitle, streamingDurationRequirement: obj6.taskDetails.targetMinutes, onGameTitleClick: onGameTitleClick3 };
          isPremiumResult = isPremiumResult(a_ia7F, obj7, obj6.withoutMarkdown);
        } else {
          let obj10 = require(6964) /* _createForOfIteratorHelperLoose */;
          if (obj10.hasWatchVideoTasks(quest)) {
            obj8 = { quest, collectibleRewardDuration: collectibleQuestRewardDuration, hasNitro: isPremiumResult, withoutMarkdown, rewardNameWithArticle: defaultRewardNameWithArticle };
            ({ quest: quest4, collectibleRewardDuration: collectibleRewardDuration2 } = obj8);
            ({ hasNitro: hasNitro2, withoutMarkdown: withoutMarkdown4, rewardNameWithArticle: rewardNameWithArticle3 } = obj8);
            const defaultWatchVideoTask = require(6964) /* _createForOfIteratorHelperLoose */.getDefaultWatchVideoTask(quest4.config);
            let videoTitle;
            if (null != defaultWatchVideoTask) {
              videoTitle = defaultWatchVideoTask.messages.videoTitle;
            }
            let str4 = "video";
            if (null != videoTitle) {
              str4 = videoTitle;
            }
            const obj25 = require(6964) /* _createForOfIteratorHelperLoose */;
            const result2 = require(9499) /* getCollectiblesQuestReward */.isCollectibleQuestRewardPremiumExtendable(quest4.config);
            const obj26 = require(9499) /* getCollectiblesQuestReward */;
            let result3 = require(9499) /* getCollectiblesQuestReward */.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest4.config);
            if (!result2) {
              if (!result2) {
                if (null == collectibleRewardDuration2) {
                  if (quest4.id === closure_9) {
                    W_HkLO = require(1212) /* getSystemLocale */.t.Rsd5bL;
                  } else {
                    W_HkLO = require(1212) /* getSystemLocale */.t["g+InPC"];
                  }
                }
                result3 = { videoTitle: str4, rewardNameWithArticle: rewardNameWithArticle3, duration: collectibleRewardDuration2 };
                isPremiumResult = tmp91(W_HkLO, result3, withoutMarkdown4);
              }
              W_HkLO = require(1212) /* getSystemLocale */.t["W/HkLO"];
            }
            if (!result3) {
              isPremiumResult = dependencyMap;
              vs_xBu = require(1212) /* getSystemLocale */.t["vs/xBu"];
            }
            if (null != collectibleRewardDuration2) {
              isPremiumResult = require;
              isPremiumResult = dependencyMap;
              xqX_r5 = require(1212) /* getSystemLocale */.t.tXwfJT;
            } else {
              isPremiumResult = require;
              isPremiumResult = dependencyMap;
              xqX_r5 = require(1212) /* getSystemLocale */.t["xqX+r5"];
            }
            isPremiumResult = xqX_r5;
            const obj27 = require(9499) /* getCollectiblesQuestReward */;
          } else {
            let obj11 = require(6964) /* _createForOfIteratorHelperLoose */;
            if (obj11.hasPlayActivityTask(quest)) {
              const obj9 = { quest, taskDetails, withoutMarkdown, rewardNameWithArticle: defaultRewardNameWithArticle };
              ({ quest: quest3, withoutMarkdown: withoutMarkdown3, rewardNameWithArticle: rewardNameWithArticle2 } = obj9);
              const targetMinutes = obj9.taskDetails.targetMinutes;
              if (obj19.isPlayAnyActivityQuest(quest3)) {
                obj10 = { streamingDurationRequirement: targetMinutes, questReward: rewardNameWithArticle2 };
                let tmp73 = formatWithOrWithoutMarkdown(require(1212) /* getSystemLocale */.t.VYwSSu, obj10, withoutMarkdown3);
              } else {
                const features = quest3.config.features;
                if (features.includes(constants2.CLOUD_GAMING_ACTIVITY)) {
                  const features2 = quest3.config.features;
                  if (features2.includes(constants2.CLOUD_GAMING_PROVIDER_NVIDIA)) {
                    obj11 = { activityName: quest3.config.messages.gameTitle, providerName: "NVIDIA GeForce NOW", providerLink: importDefault(1920).getArticleURL(HelpdeskArticles.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST), streamingDurationRequirement: targetMinutes, questReward: rewardNameWithArticle2 };
                    tmp73 = formatWithOrWithoutMarkdown(require(1212) /* getSystemLocale */.t["0NNM3l"], obj11, withoutMarkdown3);
                    const obj22 = importDefault(1920);
                  }
                }
                let obj12 = { activityName: quest3.config.messages.gameTitle, streamingDurationRequirement: targetMinutes, questReward: rewardNameWithArticle2 };
                tmp73 = formatWithOrWithoutMarkdown(require(1212) /* getSystemLocale */.t.UuzHh8, obj12, withoutMarkdown3);
              }
              obj19 = require(6962) /* _createForOfIteratorHelperLoose */;
            } else {
              obj12 = require(6964) /* _createForOfIteratorHelperLoose */;
              if (obj12.hasAchievementInGameTask(quest)) {
                if (null != thirdPartyTaskDetails) {
                  const obj13 = { quest, thirdPartyTaskDetails, withoutMarkdown, hasNitro: isPremiumResult, collectibleRewardDuration: collectibleQuestRewardDuration, onGameTitleClick, rewardNameWithArticle: defaultRewardNameWithArticle, needsToConnect };
                  ({ quest: quest2, collectibleRewardDuration, onGameTitleClick: onGameTitleClick2, needsToConnect: needsToConnect2 } = obj13);
                  ({ thirdPartyTaskDetails: thirdPartyTaskDetails2, withoutMarkdown: withoutMarkdown2, hasNitro, rewardNameWithArticle } = obj13);
                  let obj15 = require(9499) /* getCollectiblesQuestReward */;
                  const result4 = obj15.isCollectibleQuestRewardPremiumExtendable(quest2.config);
                  require(9499) /* getCollectiblesQuestReward */;
                  if (needsToConnect2) {
                    const t12 = require(1212) /* getSystemLocale */.t;
                  } else {
                    if (hasNitro) {
                      if (result4) {
                        if (!tmp40) {
                          if (null != collectibleRewardDuration) {
                            const t9 = require(1212) /* getSystemLocale */.t;
                          } else {
                            const t8 = require(1212) /* getSystemLocale */.t;
                          }
                        }
                        if (null == collectibleRewardDuration) {
                          const t10 = require(1212) /* getSystemLocale */.t;
                        }
                        const t11 = require(1212) /* getSystemLocale */.t;
                      }
                    }
                    if (!result4) {
                      if (null == collectibleRewardDuration) {
                        const t6 = require(1212) /* getSystemLocale */.t;
                        const obj14 = { gameTitle: quest2.config.messages.gameTitle };
                        let sum = str;
                        if (needsToConnect2) {
                          const formatted = str.charAt(0).toLowerCase();
                          sum = formatted + str.slice(1);
                          const str2 = str.charAt(0);
                        }
                        obj14.objective = sum;
                        obj14.duration = collectibleRewardDuration;
                        obj14.questReward = rewardNameWithArticle;
                        obj14.onGameTitleClick = onGameTitleClick2;
                        description = formatWithOrWithoutMarkdown(tmp41 ? t6.bxN0nx : t6.thO6iA, obj14, withoutMarkdown2);
                        const tmp44 = tmp41 ? t6.bxN0nx : t6.thO6iA;
                        const tmp63 = formatWithOrWithoutMarkdown;
                      }
                    }
                    const t7 = require(1212) /* getSystemLocale */.t;
                  }
                }
              }
              if (null != thirdPartyTaskDetails) {
                description = thirdPartyTaskDetails.description;
              } else {
                obj15 = { quest, taskDetails, withoutMarkdown, hasNitro: isPremiumResult, collectibleRewardDuration: collectibleQuestRewardDuration, onGameTitleClick, rewardNameWithArticle: defaultRewardNameWithArticle };
                ({ quest: quest7, collectibleRewardDuration: collectibleRewardDuration5, onGameTitleClick: onGameTitleClick6 } = obj15);
                isPremiumResult = require;
                isPremiumResult = dependencyMap;
                ({ withoutMarkdown: withoutMarkdown7, hasNitro: hasNitro5, rewardNameWithArticle: rewardNameWithArticle6 } = obj15);
                isPremiumResult = require(9499) /* getCollectiblesQuestReward */.isCollectibleQuestRewardPremiumExtendable(quest7.config);
                const obj44 = require(9499) /* getCollectiblesQuestReward */;
                isPremiumResult = null != onGameTitleClick6;
                isPremiumResult = formatWithOrWithoutMarkdown;
                if (hasNitro5) {
                  if (isPremiumResult) {
                    if (!obj45.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest7.config)) {
                      const t3 = require(1212) /* getSystemLocale */.t;
                    }
                    if (null == collectibleRewardDuration5) {
                      const t4 = require(1212) /* getSystemLocale */.t;
                    }
                    const t5 = require(1212) /* getSystemLocale */.t;
                  }
                }
                if (!isPremiumResult) {
                  if (null == collectibleRewardDuration5) {
                    const t = require(1212) /* getSystemLocale */.t;
                    const obj16 = { gameTitle: quest7.config.messages.gameTitle, streamingDurationRequirement: obj15.taskDetails.targetMinutes, duration: collectibleRewardDuration5, questReward: rewardNameWithArticle6, onGameTitleClick: onGameTitleClick6 };
                    description = isPremiumResult(isPremiumResult ? t.ER9rII : t["hkJ+Gs"], obj16, withoutMarkdown7);
                  }
                }
                const t2 = require(1212) /* getSystemLocale */.t;
                obj45 = require(9499) /* getCollectiblesQuestReward */;
              }
            }
          }
        }
      }
    }
  }
  return description;
}
function useQuestsInstructionsToWinReward(arg0) {
  let gameProfileSource;
  let quest;
  ({ quest, gameProfileSource } = arg0);
  let obj = require(566) /* initialize */;
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getCurrentUser());
  const thirdPartyTaskDetails = require(10493) /* _createForOfIteratorHelperLoose */.useThirdPartyTaskDetails(quest);
  const obj2 = require(10493) /* _createForOfIteratorHelperLoose */;
  const inGameQuestConnectState = require(10955) /* useInGameQuestConnectState */.useInGameQuestConnectState(quest);
  const obj3 = require(10955) /* useInGameQuestConnectState */;
  const result = require(6964) /* _createForOfIteratorHelperLoose */.hasAchievementInGameTask(quest);
  const obj5 = require(6964) /* _createForOfIteratorHelperLoose */;
  if (result) {
    let inGameApplicationId = obj5.getInGameApplicationId(quest);
  } else {
    const allApplicationIds = obj5.getAllApplicationIds(quest);
    if (null != allApplicationIds) {
      inGameApplicationId = allApplicationIds[0];
    }
  }
  obj = { applicationId: inGameApplicationId, location: constants.QUEST_INSTRUCTIONS };
  const obj4 = require(6964) /* _createForOfIteratorHelperLoose */;
  if (null == gameProfileSource) {
    gameProfileSource = require(8642) /* GameProfileEmbedAction */.GameProfileSources.QuestHome;
  }
  obj.source = gameProfileSource;
  importDefault(8631)(obj);
  obj = {};
  const merged = Object.assign(arg0);
  obj["currentUser"] = stateFromStores;
  obj["withoutMarkdown"] = false;
  let tmp14;
  if (null != thirdPartyTaskDetails) {
    tmp14 = thirdPartyTaskDetails;
  }
  obj["thirdPartyTaskDetails"] = tmp14;
  obj["onGameTitleClick"] = undefined;
  obj["needsToConnect"] = false === inGameQuestConnectState;
  return _getQuestsInstructionsToWinReward(obj);
}
function getSimplifiedQuestTaskType(quest) {
  let obj = require(6964) /* _createForOfIteratorHelperLoose */;
  if (!obj.isConsoleQuest(quest)) {
    if (!obj2.hasPlayActivityTask(quest)) {
      obj = { quest };
      if (obj3.hasStreamOnDesktopTask(obj)) {
        let PLAY = constants3.STREAM;
      } else {
        if (obj5.hasWatchVideoOnMobileTasks(quest)) {
          PLAY = constants3.WATCH_VIDEO;
        } else {
          PLAY = require(6964) /* _createForOfIteratorHelperLoose */.isInGameQuest(quest) ? tmp9.IN_GAME : tmp9.PLAY;
          const obj6 = require(6964) /* _createForOfIteratorHelperLoose */;
        }
        obj5 = require(6964) /* _createForOfIteratorHelperLoose */;
      }
      obj3 = require(6964) /* _createForOfIteratorHelperLoose */;
    }
    return PLAY;
  }
  PLAY = constants3.PLAY;
}
function canLaunchOnCurrentPlatform(quest, application) {
  const features = quest.config.features;
  const tmp = !features.includes(constants2.MOBILE_ACTIVITY_QUEST);
  let tmp2 = !tmp;
  if (!tmp) {
    let tmp7Result = null == application;
    if (!tmp7Result) {
      let supported_platforms;
      if (null != application) {
        const embeddedActivityConfig = application.embeddedActivityConfig;
        if (null != embeddedActivityConfig) {
          supported_platforms = embeddedActivityConfig.supported_platforms;
        }
      }
      tmp7Result = importDefault(10547)(supported_platforms);
      const tmp7 = importDefault(10547);
    }
    tmp2 = tmp7Result;
  }
  return tmp2;
}
({ QuestsExperimentLocations: closure_8, ORBS_INTRO_QUEST_ID: closure_9, QuestVariants: closure_10 } = QuestsExperimentLocations);
let closure_13 = { PLAY: 0, [0]: "PLAY", STREAM: 1, [1]: "STREAM", WATCH_VIDEO: 2, [2]: "WATCH_VIDEO", IN_GAME: 3, [3]: "IN_GAME" };
let result = require("result").fileFinishedImporting("modules/quests/hooks/QuestCopyHooks.tsx");

export const useQuestInstructionTitle = function useQuestInstructionTitle(quest, arg1, questContent, sourceQuestContent) {
  let obj = require(10493) /* _createForOfIteratorHelperLoose */;
  const targetMinutes = obj.useQuestTaskDetails(quest).targetMinutes;
  let obj1 = require(10493) /* _createForOfIteratorHelperLoose */;
  const thirdPartyTaskDetails = obj1.useThirdPartyTaskDetails(quest);
  let obj2 = require(10493) /* _createForOfIteratorHelperLoose */;
  obj = { quest, questContent, sourceQuestContent };
  const connectedConsoleLinkOnClick = obj2.useConnectedConsoleLinkOnClick(obj);
  let obj4 = require(6962) /* _createForOfIteratorHelperLoose */;
  const isSponsoredPlayQuestResult = obj4.isSponsoredPlayQuest(quest);
  let obj5 = require(6964) /* _createForOfIteratorHelperLoose */;
  if (obj5.isConsoleQuest(quest)) {
    let obj6 = require(6964) /* _createForOfIteratorHelperLoose */;
    obj = { quest };
    if (!obj6.hasPlayOnDesktopTask(obj)) {
      const intl = require(1212) /* getSystemLocale */.intl;
      obj1 = { minutes: targetMinutes, onClick: connectedConsoleLinkOnClick, gameTitle: quest.config.messages.gameTitle };
      return intl.format(require(1212) /* getSystemLocale */.t["l4S+cQ"], obj1);
    }
  }
  let obj9 = require(6964) /* _createForOfIteratorHelperLoose */;
  if (obj9.isConsoleQuest(quest)) {
    const intl7 = tmp8(1212).intl;
    const format2 = intl7.format;
    const t3 = tmp8(1212).t;
    if (isSponsoredPlayQuestResult) {
      obj2 = { onClick: connectedConsoleLinkOnClick, minutes: targetMinutes };
      let format2Result = format2(t3.gbtCpW, obj2);
    } else {
      const obj3 = { minutes: targetMinutes, onClick: connectedConsoleLinkOnClick, gameTitle: quest.config.messages.gameTitle };
      format2Result = format2(t3.Ajlcd7, obj3);
    }
    return format2Result;
  } else if (isSponsoredPlayQuestResult) {
    const intl6 = tmp8(1212).intl;
    obj4 = { targetMinutes };
    return intl6.format(tmp8(1212).t.Hu8SKW, obj4);
  } else {
    if (tmp8Result.hasWatchVideoTasks(quest)) {
      const defaultWatchVideoTask = require(6964) /* _createForOfIteratorHelperLoose */.getDefaultWatchVideoTask(quest.config);
      let videoTitle;
      if (null != defaultWatchVideoTask) {
        videoTitle = defaultWatchVideoTask.messages.videoTitle;
      }
      if (null == videoTitle) {
        const intl5 = require(1212) /* getSystemLocale */.intl;
        let stringResult = intl5.string(require(1212) /* getSystemLocale */.t["o+e9yh"]);
      } else {
        const intl4 = require(1212) /* getSystemLocale */.intl;
        obj5 = { videoTitle };
        stringResult = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t["9m9Mna"], obj5);
      }
      return stringResult;
    } else if (null != thirdPartyTaskDetails) {
      return thirdPartyTaskDetails.title;
    } else {
      if (obj23.hasPlayActivityTask(quest)) {
        let tmp35Result = tmp35(6962);
        const result = tmp35Result.isPlayAnyActivityQuest(quest);
        const intl3 = require(1212) /* getSystemLocale */.intl;
        const format = intl3.format;
        const t2 = require(1212) /* getSystemLocale */.t;
        if (result) {
          obj6 = { minutes: targetMinutes };
          let formatResult = format(t2["1NaRSs"], obj6);
        } else {
          const obj7 = { minutes: targetMinutes, activityName: quest.config.messages.gameTitle };
          formatResult = format(t2.xHXCyf, obj7);
        }
        return formatResult;
      } else {
        tmp35Result = tmp35(6964);
        const obj8 = { quest };
        if (!tmp35Result.hasPlayOnDesktopTask(obj8)) {
          const intl2 = require(1212) /* getSystemLocale */.intl;
          obj9 = { minutes: targetMinutes, gameTitle: quest.config.messages.gameTitle };
          return intl2.format(tmp35(1212).t["6zWtV8"], obj9);
        } else {
          const features = quest.config.features;
          const hasItem = features.includes(constants2.NON_GAMING_PLAY_QUEST);
          const t = require(1212) /* getSystemLocale */.t;
        }
      }
      obj23 = require(6964) /* _createForOfIteratorHelperLoose */;
    }
    tmp8Result = tmp8(6964);
  }
};
export const getQuestsInstructionsToWinReward = function getQuestsInstructionsToWinReward(currentUser) {
  const obj = {};
  const merged = Object.assign(currentUser);
  currentUser = currentUser.currentUser;
  if (null == currentUser) {
    currentUser = currentUser.getCurrentUser();
  }
  obj["currentUser"] = currentUser;
  return _getQuestsInstructionsToWinReward(obj);
};
export { useQuestsInstructionsToWinReward };
export const useQuestDescription = function useQuestDescription(quest, sourceQuestContent, QUEST_HOME_MOBILE, QuestHome) {
  let obj = { quest, taskDetails: require(10493) /* _createForOfIteratorHelperLoose */.useQuestTaskDetails(quest), location: QUEST_HOME_MOBILE, sourceQuestContent, popoutTargetElementRef: arg4, gameProfileSource: QuestHome };
  let formatToPlainStringResult = useQuestsInstructionsToWinReward(obj);
  const userStatus = quest.userStatus;
  let claimedAt;
  if (null != userStatus) {
    claimedAt = userStatus.claimedAt;
  }
  require(10493) /* _createForOfIteratorHelperLoose */;
  const userStatus2 = quest.userStatus;
  if (null != userStatus2) {
    claimedAt = userStatus2.claimedAt;
  }
  if (tmp3) {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { claimDate: tmp5 };
    formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.lOVr0O, obj);
  }
  return formatToPlainStringResult;
};
export const useQuestBarSubtitle = function useQuestBarSubtitle(arg0) {
  let activeScreen;
  let hasAlreadyLinked;
  let isExpanded;
  let onClickGameTitle;
  let onGameSheetClosed;
  let onGameSheetOpened;
  let popoutTargetElementRef;
  let quest;
  let sourceQuestContent;
  ({ quest, hasAlreadyLinked, onClickGameTitle } = arg0);
  ({ isExpanded, sourceQuestContent, activeScreen, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed } = arg0);
  let obj = require(10493) /* _createForOfIteratorHelperLoose */;
  const questFormattedDate = obj.useQuestFormattedDate(quest.config.rewardsConfig.rewardsExpireAt);
  let obj1 = require(10493) /* _createForOfIteratorHelperLoose */;
  const questTaskDetails = obj1.useQuestTaskDetails(quest);
  let obj2 = require(10493) /* _createForOfIteratorHelperLoose */;
  const thirdPartyTaskDetails = obj2.useThirdPartyTaskDetails(quest);
  let obj3 = require(566) /* initialize */;
  const items = [closure_7];
  const userStatus = quest.userStatus;
  let completedAt;
  const stateFromStores = obj3.useStateFromStores(items, () => outer1_7.getCurrentUser());
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  const userStatus2 = quest.userStatus;
  let enrolledAt;
  if (null != userStatus2) {
    enrolledAt = userStatus2.enrolledAt;
  }
  let obj4 = require(10493) /* _createForOfIteratorHelperLoose */;
  obj = { quest, location: constants.QUESTS_BAR, taskDetails: questTaskDetails, sourceQuestContent, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed };
  const isQuestProgressing = obj4.useIsQuestProgressing(quest);
  obj.gameProfileSource = require(8642) /* GameProfileEmbedAction */.GameProfileSources.QuestBar;
  if (tmp6) {
    const intl9 = tmp13(1212).intl;
    obj = { expirationDate: questFormattedDate };
    return intl9.formatToPlainString(tmp13(1212).t.APddvF, obj);
  } else {
    if (tmp13Result.hasAchievementInGameTask(quest)) {
      if (false === hasAlreadyLinked) {
        const intl8 = require(1212) /* getSystemLocale */.intl;
        return intl8.string(require(1212) /* getSystemLocale */.t.mAdqf7);
      }
    }
    const obj8 = require(6964) /* _createForOfIteratorHelperLoose */;
    if (isExpanded) {
      if (obj8.hasAchievementInGameTask(quest)) {
        if (true === hasAlreadyLinked) {
          const gameTitle = quest.config.messages.gameTitle;
          if (null != onClickGameTitle) {
            const intl7 = require(1212) /* getSystemLocale */.intl;
            obj1 = { gameTitle, onClickGameTitle };
            let formatResult = intl7.format(require(1212) /* getSystemLocale */.t.X8hBDz, obj1);
          } else {
            const intl6 = require(1212) /* getSystemLocale */.intl;
            obj2 = { gameTitle };
            formatResult = intl6.format(require(1212) /* getSystemLocale */.t.u3mdpP, obj2);
          }
          return formatResult;
        }
      }
      if (activeScreen !== require(4979) /* QuestsVisibleMessagesChangedSource */.TaskPlatformScreen.SELECT) {
        if (obj17.isSponsoredPlayQuest(quest)) {
          if (tmp8) {
            if (!tmp9) {
              const defaultRewardNameWithArticle = require(9499) /* getCollectiblesQuestReward */.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
              const intl5 = require(1212) /* getSystemLocale */.intl;
              obj3 = { rewardNameWithArticle: defaultRewardNameWithArticle, targetMinutes: questTaskDetails.targetMinutes };
              return intl5.format(require(1212) /* getSystemLocale */.t["1votF6"], obj3);
            }
          }
        }
        obj17 = require(6962) /* _createForOfIteratorHelperLoose */;
      }
      return tmp11;
    } else {
      if (obj8.hasWatchVideoTasks(quest)) {
        const intl4 = require(1212) /* getSystemLocale */.intl;
        let stringResult = intl4.string(require(1212) /* getSystemLocale */.t["o+e9yh"]);
      } else if (tmp12 > 0) {
        if (!obj9.hasAchievementInGameTask(quest)) {
          if (isQuestProgressing) {
            obj4 = { quest, taskDetails: questTaskDetails };
            let tmp25;
            if (null != thirdPartyTaskDetails) {
              tmp25 = thirdPartyTaskDetails;
            }
            obj4.thirdPartyTaskDetails = tmp25;
            let contextualEntrypointHeading = tmp22(9504).getContextualEntrypointHeading(obj4);
            const tmp22Result = tmp22(9504);
          } else {
            const intl2 = tmp22(1212).intl;
            contextualEntrypointHeading = intl2.string(tmp22(1212).t.mOrpXG);
          }
        }
        const intl3 = require(1212) /* getSystemLocale */.intl;
        contextualEntrypointHeading = intl3.string(require(1212) /* getSystemLocale */.t.JkyCIO);
        obj9 = require(6964) /* _createForOfIteratorHelperLoose */;
      } else {
        const intl = require(1212) /* getSystemLocale */.intl;
        stringResult = intl.string(require(1212) /* getSystemLocale */.t.S6UUc5);
      }
      return stringResult;
    }
    tmp13Result = tmp13(6964);
  }
  tmp6 = null != completedAt;
  tmp8 = null != enrolledAt;
  tmp9 = questTaskDetails.percentComplete > 0;
};
export const useQuestBarTitle = function useQuestBarTitle(quest) {
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.locale);
  const questTaskDetails = require(10493) /* _createForOfIteratorHelperLoose */.useQuestTaskDetails(quest);
  const obj2 = require(10493) /* _createForOfIteratorHelperLoose */;
  const obj3 = require(10493) /* _createForOfIteratorHelperLoose */;
  const thirdPartyTaskDetails = require(10493) /* _createForOfIteratorHelperLoose */.useThirdPartyTaskDetails(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  const tmp5 = null != thirdPartyTaskDetails ? thirdPartyTaskDetails.percentComplete : questTaskDetails.percentComplete;
  if (null != completedAt) {
    const intl6 = tmp6(1212).intl;
    return intl6.string(tmp6(1212).t["ij5E/5"]);
  } else {
    if (tmp6Result.hasAchievementInGameTask(quest)) {
      if (false === arg1) {
        const intl5 = require(1212) /* getSystemLocale */.intl;
        return intl5.string(require(1212) /* getSystemLocale */.t.s9r2a1);
      }
    }
    tmp6Result = tmp6(6964);
    if (obj6.hasAchievementInGameTask(quest)) {
      if (true === arg1) {
        if (0 === tmp5) {
          const intl4 = require(1212) /* getSystemLocale */.intl;
          return intl4.string(require(1212) /* getSystemLocale */.t["2+opCy"]);
        }
      }
    }
    const userStatus2 = quest.userStatus;
    let enrolledAt;
    if (null != userStatus2) {
      enrolledAt = userStatus2.enrolledAt;
    }
    if (null != enrolledAt) {
      if (tmp5 > 0) {
        obj = { roundingMode: "floor" };
        const obj8 = require(1827) /* shortenAndLocalizeNumber */;
        const intl3 = require(1212) /* getSystemLocale */.intl;
        obj = {};
        obj.percent = require(1827) /* shortenAndLocalizeNumber */.formatPercent(stateFromStores, tmp5, obj);
        return intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.lVZaXD, obj);
      }
    }
    if (callback(obj3.useTaskPlatformScreen(quest, questTaskDetails), 1)[0] === require(4979) /* QuestsVisibleMessagesChangedSource */.TaskPlatformScreen.SELECT) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.EMrUHQ);
    } else {
      const obj7 = require(6964) /* _createForOfIteratorHelperLoose */;
      const intl = require(1212) /* getSystemLocale */.intl;
      const string = intl.string;
      const t = require(1212) /* getSystemLocale */.t;
      if (isConsoleQuestResult) {
        stringResult = string(t.mOrpXG);
      } else {
        stringResult = string(t["7e5k7L"]);
      }
      isConsoleQuestResult = require(6964) /* _createForOfIteratorHelperLoose */.isConsoleQuest(quest);
    }
    return stringResult;
  }
  const obj4 = require(10493) /* _createForOfIteratorHelperLoose */;
};
export const usePrimaryCtaCopy = function usePrimaryCtaCopy(showPlayInstantlyLabel) {
  let application;
  let quest;
  let shortText;
  ({ quest, application, shortText } = showPlayInstantlyLabel);
  if (shortText === undefined) {
    shortText = false;
  }
  let flag = showPlayInstantlyLabel.showPlayInstantlyLabel;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = (function useSimplifiedQuestTaskType(quest) {
    let closure_0 = quest;
    const items = [quest];
    return outer1_5.useMemo(() => outer2_23(closure_0), items);
  })(quest);
  require(10493) /* _createForOfIteratorHelperLoose */;
  if (constants3.PLAY === tmp) {
    if (canLaunchOnCurrentPlatform(quest, application)) {
      const features = quest.config.features;
      if (features.includes(constants2.CLOUD_GAMING_ACTIVITY)) {
        const intl6 = tmp20(1212).intl;
        const t3 = require(1212) /* getSystemLocale */.t;
        return intl6.string(flag ? t3.V5Qt9D : t3["+qoymD"]);
      } else {
        if (tmp20Result.canLaunchActivity(quest)) {
          const intl5 = require(1212) /* getSystemLocale */.intl;
          const t2 = require(1212) /* getSystemLocale */.t;
          return intl5.string(shortText ? t2.E4kW5O : t2["Ie9++s"]);
        }
        tmp20Result = tmp20(6962);
      }
    }
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.l7E81v);
  } else if (constants3.STREAM === tmp) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.l7E81v);
  } else if (constants3.WATCH_VIDEO === tmp) {
    return require(10504) /* formatWatchRemainingDurationShort */.getVideoQuestWatchCtaText(tmp3);
  } else if (constants3.IN_GAME === tmp) {
    if (obj.canLaunchActivity(quest)) {
      if (canLaunchOnCurrentPlatform(quest, application)) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        const t = require(1212) /* getSystemLocale */.t;
        intl2.string(shortText ? t.CkUzLd : t["hRIVy+"]);
      }
    }
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.l7E81v);
  }
};
export const usePremiumExtendableCopy = function usePremiumExtendableCopy(arg0) {
  const _require = arg0;
  const items = [arg0];
  [][0] = arg0;
  const memo = React.useMemo(() => callback(outer1_2[12]).isCollectibleQuestRewardPremiumExtendable(callback), items);
  if (!memo) {
    return null;
  } else {
    const intl = _require(1212).intl;
    const string = intl.string;
    hh7Rb_ = _require(1212).t;
    if (tmp2) {
      hh7Rb_ = hh7Rb_["hh7Rb/"];
      let stringResult = string(hh7Rb_);
    } else {
      stringResult = string(hh7Rb_.GYGb3A);
    }
  }
};
export const getRewardCodeRedemptionInstructions = function getRewardCodeRedemptionInstructions(arg0) {
  let quest;
  let rewardCode;
  ({ quest, rewardCode } = arg0);
  let obj = require(9499) /* getCollectiblesQuestReward */;
  let platform;
  const result = obj.isTieredRewardCodeQuest({ quest });
  if (null != rewardCode) {
    platform = rewardCode.platform;
  }
  if (null == platform) {
    platform = require(4979) /* QuestsVisibleMessagesChangedSource */.QuestRewardCodePlatforms.CROSS_PLATFORM;
  }
  let rewardCodeQuestReward = null;
  if (result) {
    obj = { quest };
    let tier;
    if (null != rewardCode) {
      tier = rewardCode.tier;
    }
    if (null == tier) {
      const userStatus = quest.userStatus;
      let claimedTier;
      if (null != userStatus) {
        claimedTier = userStatus.claimedTier;
      }
      tier = claimedTier;
    }
    obj.idx = tier;
    rewardCodeQuestReward = require(9499) /* getCollectiblesQuestReward */.getRewardCodeQuestReward(obj);
    const obj2 = require(9499) /* getCollectiblesQuestReward */;
  }
  let prop;
  const defaultReward = require(9504) /* getQuestUrl */.getDefaultReward(quest.config);
  if (null != rewardCodeQuestReward) {
    const messages = rewardCodeQuestReward.messages;
    if (null != messages) {
      prop = messages.redemptionInstructionsByPlatform;
    }
  }
  if (null == prop) {
    prop = defaultReward.messages.redemptionInstructionsByPlatform;
  }
  let tmp12;
  if (null != platform) {
    tmp12 = prop[platform];
  }
  return tmp12;
};
export const useModalCtaConfig = function useModalCtaConfig(quest) {
  let closure_3;
  let _slicedToArray;
  let dependencyMap;
  let importDefault;
  quest = quest.quest;
  ({ questContent: importDefault, preCtaClick: dependencyMap, getImpressionId: closure_3, sourceQuestContent: _slicedToArray } = quest);
  function _defaultOnClickCta() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_3(tmp);
    return obj(...arguments);
  }
  const items = [quest];
  let obj = {};
  const memo = _defaultOnClickCta.useMemo(() => {
    const ctaConfig = quest.config.ctaConfig;
    let subtitle;
    if (null != ctaConfig) {
      subtitle = ctaConfig.subtitle;
    }
    if (null != subtitle) {
      return subtitle;
    } else {
      if (obj3.hasAchievementInGameTask(quest)) {
        let taskTitle = quest.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME.messages.taskTitle;
      } else {
        const questType = quest(outer1_2[10]).getQuestType(quest.config);
        if (questType === quest(outer1_2[27]).QuestType.GAMEPLAY) {
          const features = quest.config.features;
          if (!features.includes(outer1_10.NON_GAMING_PLAY_QUEST)) {
            if (!obj2.isSponsoredPlayQuest(quest)) {
              const intl = quest(outer1_2[8]).intl;
              taskTitle = intl.string(quest(outer1_2[8]).t["wirwN+"]);
            }
            obj2 = quest(outer1_2[10]);
          }
        }
        const intl2 = quest(outer1_2[8]).intl;
        taskTitle = intl2.string(quest(outer1_2[8]).t.y8Xf3k);
        const obj = quest(outer1_2[10]);
      }
      obj3 = quest(outer1_2[11]);
    }
  }, items);
  obj.ctaText = quest(9504).getExternalCtaLabel(quest);
  obj.ctaVariant = "secondary";
  obj.onClickCta = function defaultOnClickCta() {
    return _defaultOnClickCta(...arguments);
  };
  obj.title = quest.config.messages.gameTitle;
  obj.subtitle = memo;
  obj.ctaIconPosition = "end";
  return obj;
};
