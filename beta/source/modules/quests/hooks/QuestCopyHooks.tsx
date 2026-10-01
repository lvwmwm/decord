// Module ID: 10750
// Function ID: 10751
// Name: QuestCopyHooks
// Dependencies: [5, 32, 19, 2112, 1372, 5756, 1074, 1374, 1115, 10681, 7135, 7137, 10694, 2111, 10751, 1970, 504, 10752, 8128, 8139, 5759, 10699, 1882, 8823, 10736, 10719, 7141, 7140, 2]
// Exports: getQuestsInstructionsToWinReward, getRewardCodeRedemptionInstructions, useModalCtaConfig, usePremiumExtendableCopy, usePrimaryCtaCopy, useQuestBarSubtitle, useQuestBarTitle, useQuestDescription, useQuestInstructionTitle

// Module 10750 (QuestCopyHooks)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import NumberUtils from "NumberUtils" /* 1882 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1970 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7137 */;
import QuestType from "QuestType" /* 7140 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8128 */;
import isActivitySupportedOnClientPlatformDefault from "isActivitySupportedOnClientPlatform" /* 8823 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10681 */;
import QuestRewardUtils from "QuestRewardUtils" /* 10694 */;
import QuestCopyUtils from "QuestCopyUtils" /* 10699 */;
import useInGameQuestConnectState from "useInGameQuestConnectState" /* 10752 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import UserStore from "UserStore" /* 1372 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2;

let c10;
let c9;
let metroImportAll;
let tmp;
let tmp2;
const intl13 = tmp(1115);
const utils_QuestUtils = tmp(7135);
const GameProfileAnalyticUtils = tmp2(8139);
const SponsoredQuestUtils = tmp(10751);
function _getQuestsInstructionsToWinReward(arg0) {
  let applications;
  let currentUser;
  let description;
  let needsToConnect;
  let obj20;
  let onGameSheetClosed;
  let onGameSheetOpened;
  let onGameTitleClick;
  let popoutTargetElementRef;
  let quest;
  let sourceQuestContent;
  let targetMinutes6;
  let taskDetails;
  let thirdPartyTaskDetails;
  let withoutMarkdown;
  ({ quest, taskDetails, thirdPartyTaskDetails, withoutMarkdown, currentUser, onGameTitleClick } = arg0);
  ({ sourceQuestContent, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed, needsToConnect } = arg0);
  const obj = PremiumTypeUtils;
  const isPremiumResult = obj.isPremium(currentUser, PremiumTypes.TIER_2);
  const obj2 = QuestRewardUtils;
  const collectibleQuestRewardDuration = obj2.getCollectibleQuestRewardDuration(quest.config);
  const obj3 = QuestTaskUtils;
  let isConsoleQuestResult = obj3.isConsoleQuest(quest);
  if (isConsoleQuestResult) {
    const tmpResult = QuestTaskUtils;
    isConsoleQuestResult = tmpResult.shouldUsePlayOnDesktopTask(quest);
  }
  const tmpResult23 = utils_QuestUtils;
  const isSponsoredPlayQuestResult = tmpResult23.isSponsoredPlayQuest(quest);
  const tmpResult24 = QuestRewardUtils;
  const defaultRewardNameWithArticle = tmpResult24.getDefaultRewardNameWithArticle(quest.config, currentUser);
  if (isSponsoredPlayQuestResult) {
    let formatToPlainStringResult;
    ({ targetMinutes: targetMinutes6, applications } = taskDetails);
    if (withoutMarkdown) {
      const intl12 = intl13.intl;
      const obj4 = { rewardNameWithArticle: defaultRewardNameWithArticle, targetMinutes: targetMinutes6 };
      formatToPlainStringResult = intl12.formatToPlainString(intl13.t["1votF6"], obj4);
    } else {
      const obj5 = { quest, sourceQuestContent, applications, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed };
      const createGameSheetHook = SponsoredQuestUtils.createGameSheetHook;
      SponsoredQuestUtils;
      if (applications == null) {
        applications = [];
      }
      const obj6 = {};
      const gameSheetHook = createGameSheetHook(obj5);
      obj6[constants2.PACKAGE_ACTION_ADVENTURE] = intl13.t.H485IA;
      obj6[constants2.PACKAGE_RPG_MMO] = intl13.t["3XS8Ni"];
      obj6[constants2.PACKAGE_RACING_SPORTS] = intl13.t["X+UCju"];
      obj6[constants2.PACKAGE_SANDBOX_CREATIVE] = intl13.t["6o4n1Q"];
      obj6[constants2.PACKAGE_FAMILY_FRIENDLY] = intl13.t.DUsNmf;
      obj6[constants2.PACKAGE_HOLIDAY_SEASON] = intl13.t["cWP8/Z"];
      obj6[constants2.PACKAGE_NEW_YEARS] = intl13.t["8+sIJz"];
      const features1 = quest.config.features;
      const found = features1.find((item) => item in obj6);
      let CDeHul = null;
      if (null != found) {
        CDeHul = obj6[found];
      }
      if (CDeHul == null) {
        CDeHul = intl13.t.CDeHul;
      }
      const intl11 = intl13.intl;
      const obj7 = { rewardNameWithArticle: defaultRewardNameWithArticle, targetMinutes: targetMinutes6, gameSheetHook };
      formatToPlainStringResult = intl11.format(CDeHul, obj7);
    }
    description = formatToPlainStringResult;
  } else if (isConsoleQuestResult) {
    let prop;
    let enQ3jU2;
    const targetMinutes5 = taskDetails.targetMinutes;
    const gameTitle5 = quest.config.messages.gameTitle;
    const tmpResult26 = QuestRewardUtils;
    const result = tmpResult26.isCollectibleQuestRewardPremiumExtendable(quest.config);
    const features4 = quest.config.features;
    const tmpResult27 = QuestRewardUtils;
    const result1 = tmpResult27.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config);
    const hasItem = features4.includes(constants2.NON_GAMING_PLAY_QUEST);
    if (isPremiumResult) {
      let formatToPlainStringResult1;
      if (result) {
        let v1AcTqm;
        if (result1) {
          let tmp65;
          if (hasItem) {
            let ztXW8V2;
            if (null != collectibleQuestRewardDuration) {
              ztXW8V2 = intl13.t.u5QXpw;
            } else {
              ztXW8V2 = intl13.t.ztXW8V;
            }
            tmp65 = ztXW8V2;
          } else if (null != collectibleQuestRewardDuration) {
            const t27 = intl13.t;
            tmp65 = tmp62 ? t27["/4XT0b"] : t27["0hwcvM"];
          } else {
            const t26 = intl13.t;
            tmp65 = tmp62 ? t26.tQoqXX : t26["eb/Sna"];
          }
          v1AcTqm = tmp65;
        } else {
          const t25 = intl13.t;
          if (hasItem) {
            v1AcTqm = t25["1AcTqm"];
          } else {
            v1AcTqm = tmp62 ? t25.klYWbT : t25.ziB0HF;
          }
        }
        prop = v1AcTqm;
      }
      const obj8 = { gameTitle: gameTitle5, streamingDurationRequirement: targetMinutes5, rewardNameWithArticle: defaultRewardNameWithArticle, duration: collectibleQuestRewardDuration, targetMinutes: targetMinutes5, onGameTitleClick };
      const intl10 = intl13.intl;
      if (withoutMarkdown) {
        formatToPlainStringResult1 = intl10.formatToPlainString(prop, obj8);
      } else {
        formatToPlainStringResult1 = intl10.format(prop, obj8);
      }
      description = formatToPlainStringResult1;
    }
    if (!result) {
      if (null == collectibleQuestRewardDuration) {
        const t23 = intl13.t;
        if (hasItem) {
          prop = t23["e+K3xJ"];
        } else {
          prop = tmp62 ? t23.GFdaUK : t23.NIimTt;
        }
      }
    }
    const t24 = intl13.t;
    if (hasItem) {
      enQ3jU2 = t24.enQ3jU;
    } else {
      enQ3jU2 = tmp62 ? t24["4JS2QJ"] : t24.AwuMRS;
    }
    prop = enQ3jU2;
  } else {
    const tmpResult28 = QuestTaskUtils;
    if (tmpResult28.isConsoleQuest(quest)) {
      let tmp53;
      const targetMinutes4 = taskDetails.targetMinutes;
      const gameTitle4 = quest.config.messages.gameTitle;
      const tmpResult29 = QuestRewardUtils;
      const result2 = tmpResult29.isCollectibleQuestRewardPremiumExtendable(quest.config);
      const tmpResult30 = QuestRewardUtils;
      if (isPremiumResult) {
        let formatToPlainStringResult2;
        if (result2) {
          let tmp54;
          if (tmpResult30.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config)) {
            let tmp55;
            if (null != collectibleQuestRewardDuration) {
              const t22 = intl13.t;
              tmp55 = tmp52 ? t22["/4XT0b"] : t22["0hwcvM"];
            } else {
              const t21 = intl13.t;
              tmp55 = tmp52 ? t21.tQoqXX : t21["eb/Sna"];
            }
            tmp54 = tmp55;
          } else {
            const t20 = intl13.t;
            tmp54 = tmp52 ? t20.klYWbT : t20.ziB0HF;
          }
          tmp53 = tmp54;
        }
        const obj9 = { gameTitle: gameTitle4, targetMinutes: targetMinutes4, rewardNameWithArticle: defaultRewardNameWithArticle, duration: collectibleQuestRewardDuration, streamingDurationRequirement: targetMinutes4, onGameTitleClick };
        const intl9 = intl13.intl;
        if (withoutMarkdown) {
          formatToPlainStringResult2 = intl9.formatToPlainString(tmp53, obj9);
        } else {
          formatToPlainStringResult2 = intl9.format(tmp53, obj9);
        }
        description = formatToPlainStringResult2;
      }
      if (!result2) {
        if (null == collectibleQuestRewardDuration) {
          const t18 = intl13.t;
          tmp53 = tmp52 ? t18.GFdaUK : t18.NIimTt;
        }
      }
      const t19 = intl13.t;
      tmp53 = tmp52 ? t19["4JS2QJ"] : t19.AwuMRS;
    } else {
      const tmpResult31 = QuestTaskUtils;
      if (tmpResult31.shouldUsePlayOnDesktopTask(quest)) {
        let v03VJqu;
        let enQ3jU;
        const targetMinutes3 = taskDetails.targetMinutes;
        const gameTitle3 = quest.config.messages.gameTitle;
        const tmpResult32 = QuestRewardUtils;
        const result3 = tmpResult32.isCollectibleQuestRewardPremiumExtendable(quest.config);
        const features3 = quest.config.features;
        const tmpResult33 = QuestRewardUtils;
        const result4 = tmpResult33.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config);
        const hasItem1 = features3.includes(constants2.NON_GAMING_PLAY_QUEST);
        if (isPremiumResult) {
          let formatToPlainStringResult3;
          if (result3) {
            let v1AcTqm1;
            if (result4) {
              let tmp48;
              if (hasItem1) {
                let ztXW8V;
                if (null != collectibleQuestRewardDuration) {
                  ztXW8V = intl13.t.u5QXpw;
                } else {
                  ztXW8V = intl13.t.ztXW8V;
                }
                tmp48 = ztXW8V;
              } else if (null != collectibleQuestRewardDuration) {
                const t17 = intl13.t;
                tmp48 = tmp45 ? t17["/4XT0b"] : t17["0hwcvM"];
              } else {
                const t16 = intl13.t;
                tmp48 = tmp45 ? t16.tQoqXX : t16["eb/Sna"];
              }
              v1AcTqm1 = tmp48;
            } else {
              const t15 = intl13.t;
              if (hasItem1) {
                v1AcTqm1 = t15["1AcTqm"];
              } else {
                v1AcTqm1 = tmp45 ? t15.klYWbT : t15.ziB0HF;
              }
            }
            v03VJqu = v1AcTqm1;
          }
          const obj10 = { gameTitle: gameTitle3, streamingDurationRequirement: targetMinutes3, rewardNameWithArticle: defaultRewardNameWithArticle, duration: collectibleQuestRewardDuration, questReward: defaultRewardNameWithArticle, onGameTitleClick };
          const intl8 = intl13.intl;
          if (withoutMarkdown) {
            formatToPlainStringResult3 = intl8.formatToPlainString(v03VJqu, obj10);
          } else {
            formatToPlainStringResult3 = intl8.format(v03VJqu, obj10);
          }
          description = formatToPlainStringResult3;
        }
        if (!result3) {
          if (null == collectibleQuestRewardDuration) {
            const t13 = intl13.t;
            if (hasItem1) {
              v03VJqu = t13["03VJqu"];
            } else {
              v03VJqu = tmp45 ? t13.NrD2h8 : t13.FZL5Q5;
            }
          }
        }
        const t14 = intl13.t;
        if (hasItem1) {
          enQ3jU = t14.enQ3jU;
        } else {
          enQ3jU = tmp45 ? t14["4JS2QJ"] : t14.AwuMRS;
        }
        v03VJqu = enQ3jU;
      } else {
        const obj11 = { quest };
        const tmpResult34 = QuestRewardUtils;
        if (tmpResult34.isTieredRewardCodeQuest(obj11)) {
          let HHVg4i;
          let formatToPlainStringResult4;
          const targetMinutes2 = taskDetails.targetMinutes;
          const gameTitle2 = quest.config.messages.gameTitle;
          if (null != onGameTitleClick) {
            HHVg4i = intl13.t.HHVg4i;
          } else {
            HHVg4i = intl13.t["a/ia7F"];
          }
          const obj12 = { gameTitle: gameTitle2, streamingDurationRequirement: targetMinutes2, onGameTitleClick };
          const intl7 = intl13.intl;
          if (withoutMarkdown) {
            formatToPlainStringResult4 = intl7.formatToPlainString(HHVg4i, obj12);
          } else {
            formatToPlainStringResult4 = intl7.format(HHVg4i, obj12);
          }
          description = formatToPlainStringResult4;
        } else {
          const tmpResult35 = QuestTaskUtils;
          const hasWatchVideoTasksResult = tmpResult35.hasWatchVideoTasks(quest);
          const tmpResult36 = QuestTaskUtils;
          if (hasWatchVideoTasksResult) {
            let Rsd5bL;
            const defaultWatchVideoTask = tmpResult36.getDefaultWatchVideoTask(quest.config);
            let str;
            if (defaultWatchVideoTask != null) {
              str = defaultWatchVideoTask.messages.videoTitle;
            }
            if (str == null) {
              str = "video";
            }
            const tmpResult37 = QuestRewardUtils;
            const result5 = tmpResult37.isCollectibleQuestRewardPremiumExtendable(quest.config);
            const tmpResult38 = QuestRewardUtils;
            if (result5) {
              let formatToPlainStringResult5;
              if (isPremiumResult) {
                let prop1;
                if (tmpResult38.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config)) {
                  let tXwfJT;
                  if (null != collectibleQuestRewardDuration) {
                    tXwfJT = intl13.t.tXwfJT;
                  } else {
                    tXwfJT = intl13.t["xqX+r5"];
                  }
                  prop1 = tXwfJT;
                } else {
                  prop1 = intl13.t["vs/xBu"];
                }
                Rsd5bL = prop1;
              }
              const obj13 = { videoTitle: str, rewardNameWithArticle: defaultRewardNameWithArticle, duration: collectibleQuestRewardDuration };
              const intl6 = intl13.intl;
              if (withoutMarkdown) {
                formatToPlainStringResult5 = intl6.formatToPlainString(Rsd5bL, obj13);
              } else {
                formatToPlainStringResult5 = intl6.format(Rsd5bL, obj13);
              }
              description = formatToPlainStringResult5;
            }
            if (!result5) {
              if (null == collectibleQuestRewardDuration) {
                if (quest.id === React4) {
                  Rsd5bL = intl13.t.Rsd5bL;
                } else {
                  Rsd5bL = intl13.t["g+InPC"];
                }
              }
            }
            Rsd5bL = intl13.t["W/HkLO"];
          } else if (tmpResult36.hasPlayActivityTask(quest)) {
            let formatToPlainStringResult8;
            const targetMinutes = taskDetails.targetMinutes;
            const tmpResult39 = utils_QuestUtils;
            if (tmpResult39.isPlayAnyActivityQuest(quest)) {
              let formatToPlainStringResult6;
              const VYwSSu = intl13.t.VYwSSu;
              const obj14 = { streamingDurationRequirement: targetMinutes, questReward: defaultRewardNameWithArticle };
              const intl5 = intl13.intl;
              if (withoutMarkdown) {
                formatToPlainStringResult6 = intl5.formatToPlainString(VYwSSu, obj14);
              } else {
                formatToPlainStringResult6 = intl5.format(VYwSSu, obj14);
              }
              formatToPlainStringResult8 = formatToPlainStringResult6;
            } else {
              const features = quest.config.features;
              const tmp22 = constants2;
              if (features.includes(constants2.CLOUD_GAMING_ACTIVITY)) {
                const features2 = quest.config.features;
                if (features2.includes(tmp22.CLOUD_GAMING_PROVIDER_NVIDIA)) {
                  let formatToPlainStringResult7;
                  const v0NNM3l = intl13.t["0NNM3l"];
                  const obj15 = { activityName: quest.config.messages.gameTitle, providerName: "NVIDIA GeForce NOW", providerLink: obj20.getArticleURL(HelpdeskArticles.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST), streamingDurationRequirement: targetMinutes, questReward: defaultRewardNameWithArticle };
                  obj20 = HelpdeskUtilsDefault;
                  const intl4 = intl13.intl;
                  if (withoutMarkdown) {
                    formatToPlainStringResult7 = intl4.formatToPlainString(v0NNM3l, obj15);
                  } else {
                    formatToPlainStringResult7 = intl4.format(v0NNM3l, obj15);
                  }
                  formatToPlainStringResult8 = formatToPlainStringResult7;
                }
              }
              const UuzHh8 = intl13.t.UuzHh8;
              const obj16 = { activityName: quest.config.messages.gameTitle, streamingDurationRequirement: targetMinutes, questReward: defaultRewardNameWithArticle };
              const intl3 = intl13.intl;
              if (withoutMarkdown) {
                formatToPlainStringResult8 = intl3.formatToPlainString(UuzHh8, obj16);
              } else {
                formatToPlainStringResult8 = intl3.format(UuzHh8, obj16);
              }
            }
            description = formatToPlainStringResult8;
          } else {
            const tmpResult40 = QuestTaskUtils;
            if (tmpResult40.hasAchievementInGameTask(quest)) {
              if (null != thirdPartyTaskDetails) {
                let tmp18;
                let formatToPlainStringResult9;
                const gameTitle = quest.config.messages.gameTitle;
                const tmpResult41 = QuestRewardUtils;
                const result6 = tmpResult41.isCollectibleQuestRewardPremiumExtendable(quest.config);
                QuestRewardUtils;
                if (needsToConnect) {
                  const t12 = intl13.t;
                  tmp18 = tmp17 ? t12["0SLl/G"] : t12.BlfaHK;
                } else {
                  if (isPremiumResult) {
                    if (result6) {
                      let tmp19;
                      if (tmp16) {
                        let tmp20;
                        if (null != collectibleQuestRewardDuration) {
                          const t11 = intl13.t;
                          tmp20 = tmp17 ? t11.uLVYG5 : t11.NdXW5c;
                        } else {
                          const t10 = intl13.t;
                          tmp20 = tmp17 ? t10["2Ctf1d"] : t10["8066TK"];
                        }
                        tmp19 = tmp20;
                      } else if (null != collectibleQuestRewardDuration) {
                        const t9 = intl13.t;
                        tmp19 = tmp17 ? t9.yMEn77 : t9["6FOKAX"];
                      } else {
                        const t8 = intl13.t;
                        tmp19 = tmp17 ? t8.bxN0nx : t8.thO6iA;
                      }
                      tmp18 = tmp19;
                    }
                  }
                  if (!result6) {
                    if (null == collectibleQuestRewardDuration) {
                      const t6 = intl13.t;
                      tmp18 = tmp17 ? t6.bxN0nx : t6.thO6iA;
                    }
                  }
                  const t7 = intl13.t;
                  tmp18 = tmp17 ? t7.ojhBxZ : t7["IACEB/"];
                }
                const obj17 = { gameTitle, objective: thirdPartyTaskDetails.description, duration: collectibleQuestRewardDuration, questReward: defaultRewardNameWithArticle, onGameTitleClick };
                const intl2 = intl13.intl;
                if (withoutMarkdown) {
                  formatToPlainStringResult9 = intl2.formatToPlainString(tmp18, obj17);
                } else {
                  formatToPlainStringResult9 = intl2.format(tmp18, obj17);
                }
                description = formatToPlainStringResult9;
              }
            }
            if (null != thirdPartyTaskDetails) {
              description = thirdPartyTaskDetails.description;
            } else {
              let tmp11;
              const targetMinutes7 = taskDetails.targetMinutes;
              const gameTitle6 = quest.config.messages.gameTitle;
              const tmpResult43 = QuestRewardUtils;
              const result7 = tmpResult43.isCollectibleQuestRewardPremiumExtendable(quest.config);
              const tmpResult44 = QuestRewardUtils;
              if (isPremiumResult) {
                if (result7) {
                  let tmp12;
                  if (tmpResult44.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config)) {
                    let tmp13;
                    if (null != collectibleQuestRewardDuration) {
                      const t5 = intl13.t;
                      tmp13 = tmp75 ? t5["3RwRv8"] : t5.TmKqHw;
                    } else {
                      const t4 = intl13.t;
                      tmp13 = tmp75 ? t4.l9yxDa : t4["X8Yt/1"];
                    }
                    tmp12 = tmp13;
                  } else {
                    const t3 = intl13.t;
                    tmp12 = tmp75 ? t3.eEuma3 : t3.smG9ql;
                  }
                  tmp11 = tmp12;
                }
                const obj18 = { gameTitle: gameTitle6, streamingDurationRequirement: targetMinutes7, duration: collectibleQuestRewardDuration, questReward: defaultRewardNameWithArticle, onGameTitleClick };
                const intl = intl13.intl;
                if (withoutMarkdown) {
                  description = intl.formatToPlainString(tmp11, obj18);
                } else {
                  description = intl.format(tmp11, obj18);
                }
              }
              if (!result7) {
                if (null == collectibleQuestRewardDuration) {
                  const t = intl13.t;
                  tmp11 = tmp75 ? t.ER9rII : t["hkJ+Gs"];
                }
              }
              const t2 = intl13.t;
              tmp11 = tmp75 ? t2.Cko4a4 : t2.BLyDvO;
            }
          }
        }
      }
    }
  }
  return description;
}
function useQuestsInstructionsToWinReward(arg0) {
  let currentUser;
  let gameProfileSource;
  let inGameApplicationId;
  let quest;
  let withoutMarkdown;
  ({ quest, gameProfileSource, withoutMarkdown } = arg0);
  const items = [UserStore];
  const tmp = undefined !== withoutMarkdown && withoutMarkdown;
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = hooks_QuestHooks;
  const thirdPartyTaskDetails = obj2.useThirdPartyTaskDetails(quest);
  const obj3 = useInGameQuestConnectState;
  const inGameQuestConnectState = obj3.useInGameQuestConnectState(quest);
  const obj4 = QuestTaskUtils;
  const result = obj4.hasAchievementInGameTask(quest);
  const obj5 = QuestTaskUtils;
  if (result) {
    inGameApplicationId = obj5.getInGameApplicationId(quest);
  } else {
    const allApplicationIds = obj5.getAllApplicationIds(quest);
    if (allApplicationIds != null) {
      inGameApplicationId = allApplicationIds[0];
    }
  }
  const obj6 = { applicationId: inGameApplicationId, location: metroImportAll.QUEST_INSTRUCTIONS, source: gameProfileSource };
  const tmp11 = useOpenGameProfileModalDefault;
  if (gameProfileSource == null) {
    gameProfileSource = GameProfileAnalyticUtils.GameProfileSources.QuestHome;
  }
  tmp11(obj6);
  const obj7 = { currentUser: stateFromStores, withoutMarkdown: tmp, thirdPartyTaskDetails, onGameTitleClick: undefined, needsToConnect: false === inGameQuestConnectState };
  const merged = Object.assign(arg0);
  return _getQuestsInstructionsToWinReward(obj7);
}
({ QuestsExperimentLocations: metroImportAll, ORBS_INTRO_QUEST_ID: c9, QuestVariants: c10 } = QuestConstants);
const HelpdeskArticles = Constants.HelpdeskArticles;
const PremiumTypes = PremiumConstants.PremiumTypes;
const constants3 = { PLAY: 0, [0]: "PLAY", STREAM: 1, [1]: "STREAM", WATCH_VIDEO: 2, [2]: "WATCH_VIDEO", IN_GAME: 3, [3]: "IN_GAME" };
let result = size.fileFinishedImporting("modules/quests/hooks/QuestCopyHooks.tsx");

export const useQuestInstructionTitle = function useQuestInstructionTitle(quest, arg1, questContent, sourceQuestContent) {
  const obj = hooks_QuestHooks;
  const targetMinutes = obj.useQuestTaskDetails(quest).targetMinutes;
  const obj2 = hooks_QuestHooks;
  const thirdPartyTaskDetails = obj2.useThirdPartyTaskDetails(quest);
  const obj3 = hooks_QuestHooks;
  const obj4 = { quest, questContent, sourceQuestContent };
  const connectedConsoleLinkOnClick = obj3.useConnectedConsoleLinkOnClick(obj4);
  const obj5 = utils_QuestUtils;
  const isSponsoredPlayQuestResult = obj5.isSponsoredPlayQuest(quest);
  const obj6 = QuestTaskUtils;
  if (obj6.isConsoleQuest(quest)) {
    const obj7 = { quest };
    const tmpResult = QuestTaskUtils;
    if (!tmpResult.hasPlayOnDesktopTask(obj7)) {
      const intl = tmp(1115).intl;
      const obj8 = { minutes: targetMinutes, onClick: connectedConsoleLinkOnClick, gameTitle: quest.config.messages.gameTitle };
      return intl.format(intl13.t["l4S+cQ"], obj8);
    }
  }
  const tmpResult7 = QuestTaskUtils;
  if (tmpResult7.isConsoleQuest(quest)) {
    let format2Result;
    const intl7 = tmp(1115).intl;
    const format2 = intl7.format;
    const t3 = tmp(1115).t;
    if (isSponsoredPlayQuestResult) {
      const obj9 = { onClick: connectedConsoleLinkOnClick, minutes: targetMinutes };
      format2Result = format2(t3.gbtCpW, obj9);
    } else {
      const obj10 = { minutes: targetMinutes, onClick: connectedConsoleLinkOnClick, gameTitle: quest.config.messages.gameTitle };
      format2Result = format2(t3.Ajlcd7, obj10);
    }
    return format2Result;
  } else if (isSponsoredPlayQuestResult) {
    const intl6 = tmp(1115).intl;
    const obj11 = { targetMinutes };
    return intl6.format(intl13.t.Hu8SKW, obj11);
  } else {
    const tmpResult8 = QuestTaskUtils;
    if (tmpResult8.hasWatchVideoTasks(quest)) {
      let stringResult;
      const tmpResult9 = QuestTaskUtils;
      const defaultWatchVideoTask = tmpResult9.getDefaultWatchVideoTask(quest.config);
      let videoTitle;
      if (defaultWatchVideoTask != null) {
        videoTitle = defaultWatchVideoTask.messages.videoTitle;
      }
      if (null == videoTitle) {
        const intl5 = tmp(1115).intl;
        stringResult = intl5.string(tmp(1115).t["o+e9yh"]);
      } else {
        const intl4 = tmp(1115).intl;
        const obj12 = { videoTitle };
        stringResult = intl4.formatToPlainString(tmp(1115).t["9m9Mna"], obj12);
      }
      return stringResult;
    } else if (null != thirdPartyTaskDetails) {
      return thirdPartyTaskDetails.title;
    } else {
      const tmpResult10 = QuestTaskUtils;
      if (tmpResult10.hasPlayActivityTask(quest)) {
        let formatResult;
        const tmpResult11 = utils_QuestUtils;
        const result = tmpResult11.isPlayAnyActivityQuest(quest);
        const intl3 = tmp(1115).intl;
        const format = intl3.format;
        const t2 = tmp(1115).t;
        if (result) {
          const obj13 = { minutes: targetMinutes };
          formatResult = format(t2["1NaRSs"], obj13);
        } else {
          const obj14 = { minutes: targetMinutes, activityName: quest.config.messages.gameTitle };
          formatResult = format(t2.xHXCyf, obj14);
        }
        return formatResult;
      } else {
        let v6zWtV8 = tmp(1115).t["6zWtV8"];
        const obj15 = { quest };
        const tmpResult12 = QuestTaskUtils;
        if (tmpResult12.hasPlayOnDesktopTask(obj15)) {
          const features = quest.config.features;
          const hasItem = features.includes(constants2.NON_GAMING_PLAY_QUEST);
          const t = tmp(1115).t;
          v6zWtV8 = hasItem ? t.fe7Xec : t["wmOh/q"];
        }
        const intl2 = tmp(1115).intl;
        const obj16 = { minutes: targetMinutes, gameTitle: quest.config.messages.gameTitle };
        return intl2.format(v6zWtV8, obj16);
      }
    }
  }
};
export const getQuestsInstructionsToWinReward = function getQuestsInstructionsToWinReward(currentUser) {
  const obj = { currentUser };
  const merged = Object.assign(currentUser);
  currentUser = currentUser.currentUser;
  const tmp = _getQuestsInstructionsToWinReward;
  if (currentUser == null) {
    currentUser = UserStore.getCurrentUser();
  }
  return tmp(obj);
};
export { useQuestsInstructionsToWinReward };
export const useQuestDescription = function useQuestDescription(quest, sourceQuestContent, QUEST_HOME_MOBILE, QuestHome, popoutTargetElementRef) {
  let obj2;
  const obj = { quest, taskDetails: obj2.useQuestTaskDetails(quest), location: QUEST_HOME_MOBILE, sourceQuestContent, popoutTargetElementRef, gameProfileSource: QuestHome };
  obj2 = hooks_QuestHooks;
  let formatToPlainStringResult = useQuestsInstructionsToWinReward(obj);
  const userStatus = quest.userStatus;
  let claimedAt1;
  if (userStatus != null) {
    claimedAt1 = userStatus.claimedAt;
  }
  const tmp5 = null != claimedAt1;
  hooks_QuestHooks;
  const userStatus2 = quest.userStatus;
  if (userStatus2 != null) {
    const claimedAt = userStatus2.claimedAt;
  }
  if (tmp5) {
    const intl = tmp(1115).intl;
    const obj3 = { claimDate: tmp7 };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1115).t.lOVr0O, obj3);
  }
  return formatToPlainStringResult;
};
export const useQuestBarSubtitle = function useQuestBarSubtitle(arg0) {
  let activeScreen;
  let currentUser;
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
  const rewardsExpireAt = quest.config.rewardsConfig.rewardsExpireAt;
  const obj = hooks_QuestHooks;
  const questFormattedDate = obj.useQuestFormattedDate(rewardsExpireAt);
  const obj2 = hooks_QuestHooks;
  const questTaskDetails = obj2.useQuestTaskDetails(quest);
  const obj3 = hooks_QuestHooks;
  const thirdPartyTaskDetails = obj3.useThirdPartyTaskDetails(quest);
  const items = [UserStore];
  const userStatus = quest.userStatus;
  let completedAt;
  const obj4 = get_initialized;
  const stateFromStores = obj4.useStateFromStores(items, () => currentUser.getCurrentUser());
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const userStatus2 = quest.userStatus;
  let enrolledAt;
  const tmp8 = null != completedAt;
  if (userStatus2 != null) {
    enrolledAt = userStatus2.enrolledAt;
  }
  const tmp10 = null != enrolledAt;
  const tmp11 = questTaskDetails.percentComplete > 0;
  ({ quest, location: metroImportAll.QUESTS_BAR, taskDetails: questTaskDetails, sourceQuestContent, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed, gameProfileSource: GameProfileAnalyticUtils.GameProfileSources.QuestBar });
  const tmpResult = hooks_QuestHooks;
  const isQuestProgressing = tmpResult.useIsQuestProgressing(quest);
  if (tmp8) {
    const intl9 = tmp(1115).intl;
    const obj6 = { expirationDate: questFormattedDate };
    return intl9.formatToPlainString(intl13.t.APddvF, obj6);
  } else {
    const tmpResult7 = QuestTaskUtils;
    if (tmpResult7.hasAchievementInGameTask(quest)) {
      if (false === hasAlreadyLinked) {
        const intl8 = tmp(1115).intl;
        return intl8.string(intl13.t.mAdqf7);
      }
    }
    const tmpResult8 = QuestTaskUtils;
    if (isExpanded) {
      if (tmpResult8.hasAchievementInGameTask(quest)) {
        if (true === hasAlreadyLinked) {
          let formatResult;
          const gameTitle = quest.config.messages.gameTitle;
          if (null != onClickGameTitle) {
            const intl7 = tmp(1115).intl;
            const obj7 = { gameTitle, onClickGameTitle };
            formatResult = intl7.format(tmp(1115).t.X8hBDz, obj7);
          } else {
            const intl6 = tmp(1115).intl;
            const obj8 = { gameTitle };
            formatResult = intl6.format(tmp(1115).t.u3mdpP, obj8);
          }
          return formatResult;
        }
      }
      if (activeScreen !== QuestTypes.TaskPlatformScreen.SELECT) {
        const tmpResult9 = utils_QuestUtils;
        if (tmpResult9.isSponsoredPlayQuest(quest)) {
          if (tmp10) {
            if (!tmp11) {
              const tmpResult10 = QuestRewardUtils;
              const defaultRewardNameWithArticle = tmpResult10.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
              const intl5 = tmp(1115).intl;
              const obj9 = { rewardNameWithArticle: defaultRewardNameWithArticle, targetMinutes: questTaskDetails.targetMinutes };
              return intl5.format(intl13.t["1votF6"], obj9);
            }
          }
        }
      }
      return tmp13;
    } else {
      let stringResult;
      if (tmpResult8.hasWatchVideoTasks(quest)) {
        const intl4 = tmp(1115).intl;
        stringResult = intl4.string(tmp(1115).t["o+e9yh"]);
      } else if (tmp14 > 0) {
        let stringResult1;
        const tmpResult11 = QuestTaskUtils;
        if (tmpResult11.hasAchievementInGameTask(quest)) {
          if (true === hasAlreadyLinked) {
            const intl3 = tmp(1115).intl;
            stringResult1 = intl3.string(tmp(1115).t.JkyCIO);
          }
          stringResult = stringResult1;
        }
        if (isQuestProgressing) {
          const obj10 = { quest, taskDetails: questTaskDetails, thirdPartyTaskDetails };
          const getContextualEntrypointHeading = QuestCopyUtils.getContextualEntrypointHeading;
          QuestCopyUtils;
          stringResult1 = getContextualEntrypointHeading(obj10);
        } else {
          const intl2 = tmp(1115).intl;
          stringResult1 = intl2.string(tmp(1115).t.mOrpXG);
        }
      } else {
        const intl = tmp(1115).intl;
        stringResult = intl.string(tmp(1115).t.S6UUc5);
      }
      return stringResult;
    }
  }
};
export const useQuestBarTitle = function useQuestBarTitle(questDockQuest, arg1) {
  let locale;
  const items = [LocaleStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const obj2 = hooks_QuestHooks;
  const questTaskDetails = obj2.useQuestTaskDetails(questDockQuest);
  const obj3 = hooks_QuestHooks;
  const first = _slicedToArray(obj3.useTaskPlatformScreen(questDockQuest, questTaskDetails), 1)[0];
  const obj4 = hooks_QuestHooks;
  const thirdPartyTaskDetails = obj4.useThirdPartyTaskDetails(questDockQuest);
  const userStatus = questDockQuest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  const tmp8 = null != thirdPartyTaskDetails ? thirdPartyTaskDetails.percentComplete : questTaskDetails.percentComplete;
  if (null != completedAt) {
    const intl6 = tmp(1115).intl;
    return intl6.string(intl13.t["ij5E/5"]);
  } else {
    let stringResult;
    const tmpResult = QuestTaskUtils;
    if (tmpResult.hasAchievementInGameTask(questDockQuest)) {
      if (false === arg1) {
        const intl5 = tmp(1115).intl;
        return intl5.string(intl13.t.s9r2a1);
      }
    }
    const tmpResult4 = QuestTaskUtils;
    if (tmpResult4.hasAchievementInGameTask(questDockQuest)) {
      if (true === arg1) {
        if (0 === tmp8) {
          const intl4 = tmp(1115).intl;
          return intl4.string(intl13.t["2+opCy"]);
        }
      }
    }
    const userStatus2 = questDockQuest.userStatus;
    let enrolledAt;
    if (userStatus2 != null) {
      enrolledAt = userStatus2.enrolledAt;
    }
    if (null != enrolledAt) {
      if (tmp8 > 0) {
        const tmpResult5 = NumberUtils;
        const formatPercentResult = tmpResult5.formatPercent(stateFromStores, tmp8, { roundingMode: "floor" });
        const intl3 = tmp(1115).intl;
        const obj5 = { percent: formatPercentResult };
        return intl3.formatToPlainString(intl13.t.lVZaXD, obj5);
      }
    }
    if (first === QuestTypes.TaskPlatformScreen.SELECT) {
      const intl2 = tmp(1115).intl;
      stringResult = intl2.string(tmp(1115).t.EMrUHQ);
    } else {
      const tmpResult6 = QuestTaskUtils;
      const isConsoleQuestResult = tmpResult6.isConsoleQuest(questDockQuest);
      const intl = tmp(1115).intl;
      const string = intl.string;
      const t = tmp(1115).t;
      if (isConsoleQuestResult) {
        stringResult = string(t.mOrpXG);
      } else {
        stringResult = string(t["7e5k7L"]);
      }
    }
    return stringResult;
  }
};
export const usePrimaryCtaCopy = function usePrimaryCtaCopy(arg0) {
  let application;
  let quest;
  let shortText;
  ({ quest, application, shortText } = arg0);
  if (shortText === undefined) {
    shortText = false;
  }
  const items = [quest];
  const memo = react.useMemo(() => {
    const obj = QuestTaskUtils;
    if (!obj.isConsoleQuest(quest)) {
      let PLAY;
      const tmp2Result = QuestTaskUtils;
      if (!tmp2Result.hasPlayActivityTask(quest)) {
        const obj2 = { quest };
        const tmp2Result4 = QuestTaskUtils;
        if (tmp2Result4.hasStreamOnDesktopTask(obj2)) {
          PLAY = constants.STREAM;
        } else {
          const tmp2Result5 = QuestTaskUtils;
          if (tmp2Result5.hasWatchVideoOnMobileTasks(quest)) {
            PLAY = constants.WATCH_VIDEO;
          } else {
            const tmp2Result6 = QuestTaskUtils;
            PLAY = tmp2Result6.isInGameQuest(tmp) ? tmp4.IN_GAME : tmp4.PLAY;
          }
        }
      }
      return PLAY;
    }
    PLAY = constants.PLAY;
  }, items);
  const tmp4 = quest(10681);
  if (constants3.PLAY === memo) {
    const features2 = quest.config.features;
    let hasItem = features2.includes(constants2.MOBILE_ACTIVITY_QUEST);
    const tmp15 = constants2;
    if (hasItem) {
      let tmp20Result = null == application;
      if (!tmp20Result) {
        let supported_platforms;
        const tmp20 = isActivitySupportedOnClientPlatformDefault;
        if (application != null) {
          const embeddedActivityConfig2 = application.embeddedActivityConfig;
          if (embeddedActivityConfig2 != null) {
            supported_platforms = embeddedActivityConfig2.supported_platforms;
          }
        }
        tmp20Result = tmp20(supported_platforms);
      }
      hasItem = tmp20Result;
    }
    if (hasItem) {
      const features3 = quest.config.features;
      if (features3.includes(tmp15.CLOUD_GAMING_ACTIVITY)) {
        const intl6 = tmp2(1115).intl;
        return intl6.string(quest(1115).t["+qoymD"]);
      } else {
        let tmp2Result = tmp2(7135);
        if (tmp2Result.canLaunchActivity(quest)) {
          const intl5 = tmp2(1115).intl;
          const string2 = intl5.string;
          const t2 = tmp2(1115).t;
          return string2(shortText ? t2.E4kW5O : t2["Ie9++s"]);
        }
      }
    }
    const intl4 = tmp2(1115).intl;
    return intl4.string(quest(1115).t.l7E81v);
  } else if (constants3.STREAM === memo) {
    const intl3 = tmp2(1115).intl;
    return intl3.string(quest(1115).t.l7E81v);
  } else if (constants3.WATCH_VIDEO === memo) {
    const tmp2Result3 = quest(10736);
    return tmp2Result3.getVideoQuestWatchCtaText(tmp5);
  } else if (constants3.IN_GAME === memo) {
    let tmp2Result4 = tmp2(7135);
    if (tmp2Result4.canLaunchActivity(quest)) {
      let stringResult;
      const features = quest.config.features;
      let hasItem1 = features.includes(constants2.MOBILE_ACTIVITY_QUEST);
      if (hasItem1) {
        let tmp12Result = null == application;
        if (!tmp12Result) {
          let supported_platforms1;
          const tmp12 = isActivitySupportedOnClientPlatformDefault;
          if (application != null) {
            const embeddedActivityConfig = application.embeddedActivityConfig;
            if (embeddedActivityConfig != null) {
              supported_platforms1 = embeddedActivityConfig.supported_platforms;
            }
          }
          tmp12Result = tmp12(supported_platforms1);
        }
        hasItem1 = tmp12Result;
      }
      if (hasItem1) {
        const intl2 = tmp2(1115).intl;
        const string = intl2.string;
        const t = tmp2(1115).t;
        stringResult = string(shortText ? t.CkUzLd : t["hRIVy+"]);
      }
      return stringResult;
    }
    const intl = tmp2(1115).intl;
    stringResult = intl.string(tmp2(1115).t.l7E81v);
  }
};
export const usePremiumExtendableCopy = function usePremiumExtendableCopy(arg0) {
  let closure_0;
  _require = arg0;
  const items = [arg0];
  [][0] = arg0;
  const memo = react.useMemo(() => {
    const obj = QuestRewardUtils;
    return obj.isCollectibleQuestRewardPremiumExtendable(closure_0);
  }, items);
  let tmp3 = null;
  if (memo) {
    let stringResult;
    const intl = require("intl").intl;
    const string = intl.string;
    const t = require("intl").t;
    if (tmp2) {
      stringResult = string(t["hh7Rb/"]);
    } else {
      stringResult = string(t.GYGb3A);
    }
    tmp3 = stringResult;
  }
  return tmp3;
};
export const getRewardCodeRedemptionInstructions = function getRewardCodeRedemptionInstructions(arg0) {
  let quest;
  let rewardCode;
  let tier;
  ({ quest, rewardCode } = arg0);
  let platform;
  const obj = QuestRewardUtils;
  const result = obj.isTieredRewardCodeQuest({ quest });
  if (rewardCode != null) {
    platform = rewardCode.platform;
  }
  if (platform == null) {
    platform = tmp(5759).QuestRewardCodePlatforms.CROSS_PLATFORM;
  }
  let rewardCodeQuestReward = null;
  if (result) {
    const obj2 = { quest, idx: tier };
    tier = undefined;
    const getRewardCodeQuestReward = QuestRewardUtils.getRewardCodeQuestReward;
    QuestRewardUtils;
    if (rewardCode != null) {
      tier = rewardCode.tier;
    }
    if (tier == null) {
      const userStatus = quest.userStatus;
      let claimedTier;
      if (userStatus != null) {
        claimedTier = userStatus.claimedTier;
      }
      tier = claimedTier;
    }
    rewardCodeQuestReward = getRewardCodeQuestReward(obj2);
  }
  let prop;
  const tmpResult2 = QuestCopyUtils;
  const defaultReward = tmpResult2.getDefaultReward(quest.config);
  if (rewardCodeQuestReward != null) {
    const messages = rewardCodeQuestReward.messages;
    if (messages != null) {
      prop = messages.redemptionInstructionsByPlatform;
    }
  }
  if (prop == null) {
    prop = defaultReward.messages.redemptionInstructionsByPlatform;
  }
  let tmp11;
  if (null != platform) {
    tmp11 = prop[platform];
  }
  return tmp11;
};
export const useModalCtaConfig = function useModalCtaConfig(quest) {
  let memo;
  let obj2;
  quest = quest.quest;
  ({ questContent: importDefault, preCtaClick: dependencyMap, getImpressionId: _asyncToGenerator, sourceQuestContent: _slicedToArray } = quest);
  let obj = function _defaultOnClickCta() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let tmp4;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let tmp9;
              if (dependencyMap != null) {
                tmp9 = dependencyMap();
              }
              c1 = 1;
              c2 = 1;
              const obj4 = { value: tmp9, done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const obj5 = { content: closure_128_1, ctaContent: tmp3(c2[26]).QuestContentCTA.OPEN_GAME_LINK, impressionId: tmp4, sourceQuestContent: closure_128_4 };
            const openGameLinkDirectly = tmp3(c2[25]).openGameLinkDirectly;
            const tmp17 = tmp3(c2[25]);
            tmp4 = undefined;
            const tmp18 = closure_128_0;
            if (closure_128_3 != null) {
              tmp4 = closure_128_3();
            }
            openGameLinkDirectly(tmp18, obj5);
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          c2 = 3;
          throw tmp10;
        }
      }
    });
    return obj(...arguments);
  };
  const items = [quest];
  obj = {
    ctaText: obj2.getExternalCtaLabel(quest),
    ctaVariant: "secondary",
    onClickCta: function defaultOnClickCta() {
      return obj(...arguments);
    },
    title: quest.config.messages.gameTitle,
    subtitle: memo,
    ctaIconPosition: "end"
  };
  memo = obj.useMemo(() => {
    const ctaConfig = quest.config.ctaConfig;
    let subtitle;
    if (ctaConfig != null) {
      subtitle = ctaConfig.subtitle;
    }
    if (null == subtitle) {
      let taskTitle;
      const obj3 = QuestTaskUtils;
      if (obj3.hasAchievementInGameTask(quest)) {
        taskTitle = tmp.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME.messages.taskTitle;
      } else {
        const tmp5Result = utils_QuestUtils;
        const questType = tmp5Result.getQuestType(tmp.config);
        if (questType === QuestType.QuestType.GAMEPLAY) {
          const features = tmp.config.features;
          if (!features.includes(constants.NON_GAMING_PLAY_QUEST)) {
            const tmp5Result2 = utils_QuestUtils;
            if (!tmp5Result2.isSponsoredPlayQuest(quest)) {
              const intl = tmp5(1115).intl;
              taskTitle = intl.string(tmp5(1115).t["wirwN+"]);
            }
          }
        }
        const intl2 = tmp5(1115).intl;
        taskTitle = intl2.string(tmp5(1115).t.y8Xf3k);
      }
      subtitle = taskTitle;
    }
    return subtitle;
  }, items);
  obj2 = quest(10699);
  return obj;
};
