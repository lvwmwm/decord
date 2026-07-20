// Module ID: 10910
// Function ID: 84824
// Name: formatWithOrWithoutMarkdown
// Dependencies: []
// Exports: getQuestsInstructionsToWinReward, getRewardCodeRedemptionInstructions, useModalCtaConfig, usePremiumExtendableCopy, usePrimaryCtaCopy, useQuestBarSubtitle, useQuestBarTitle, useQuestDescription, useQuestInstructionTitle

// Module 10910 (formatWithOrWithoutMarkdown)
function formatWithOrWithoutMarkdown(03VJqu, maxSettingsForPreset, withoutMarkdown) {
  const intl = maxSettingsForPreset(dependencyMap[7]).intl;
  if (withoutMarkdown) {
    let formatToPlainStringResult = intl.formatToPlainString(_03VJqu, maxSettingsForPreset);
  } else {
    formatToPlainStringResult = intl.format(_03VJqu, maxSettingsForPreset);
  }
  return formatToPlainStringResult;
}
function getGamingPlayQuestPermanentWithPremiumCollectibleMessage(shouldShowGameProfileLink) {
  shouldShowGameProfileLink = shouldShowGameProfileLink.shouldShowGameProfileLink;
  const t = arg1(dependencyMap[7]).t;
  if (!shouldShowGameProfileLink.hasRewardDuration) {
    return shouldShowGameProfileLink ? t.tQoqXX : t.eb/Sna;
  }
}
function getGamingPlayQuestExtendableWithPremiumCollectibleMessage(isPremiumResult) {
  const t = arg1(dependencyMap[7]).t;
  return isPremiumResult ? t.klYWbT : t.ziB0HF;
}
function getGamingPlayQuestExpiringCollectibleMessage(isPremiumResult) {
  const t = arg1(dependencyMap[7]).t;
  return isPremiumResult ? t.4JS2QJ : t.AwuMRS;
}
function getQuestBarSubtitlePlayGameMessage(isPremiumResult) {
  const t = arg1(dependencyMap[7]).t;
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
  let obj = arg1(dependencyMap[11]);
  const result = obj.isCollectibleQuestRewardPremiumExtendable(quest.config);
  const features = quest.config.features;
  const result1 = arg1(dependencyMap[11]).isCollectibleQuestRewardPermanentWithPremiumSubscription(quest.config);
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
        let ztXW8V = arg1(dependencyMap[7]).t.u5QXpw;
      } else {
        ztXW8V = arg1(dependencyMap[7]).t.ztXW8V;
      }
    }
  }
  if (!result) {
    if (null == collectibleRewardDuration) {
      const t = arg1(dependencyMap[7]).t;
      if (hasItem) {
      } else {
      }
      obj = { gameTitle: quest.config.messages.gameTitle, streamingDurationRequirement: taskDetails.taskDetails.targetMinutes, rewardNameWithArticle, duration: collectibleRewardDuration, questReward: rewardNameWithArticle, onGameTitleClick };
      return formatWithOrWithoutMarkdown(_03VJqu, obj, withoutMarkdown);
    }
  }
  if (hasItem) {
    let enQ3jU = arg1(dependencyMap[7]).t.enQ3jU;
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
    const intl = arg1(dependencyMap[7]).intl;
    let obj = { rewardNameWithArticle, targetMinutes };
    let formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[7]).t.1votF6, obj);
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
    obj.gameSheetHook = arg1(dependencyMap[12]).createGameSheetHook(obj);
    formatToPlainStringResult = function _getQuestInstructionsToWinRewardArenaPackage(arg0) {
      let gameSheetHook;
      let quest;
      let rewardNameWithArticle;
      let targetMinutes;
      const obj = { [closure_10.PACKAGE_ACTION_ADVENTURE]: obj(closure_2[7]).t.H485IA, [closure_10.PACKAGE_RPG_MMO]: obj(closure_2[7]).t.3XS8Ni, [closure_10.PACKAGE_RACING_SPORTS]: obj(closure_2[7]).t.X+UCju, [closure_10.PACKAGE_SANDBOX_CREATIVE]: obj(closure_2[7]).t.6o4n1Q, [closure_10.PACKAGE_FAMILY_FRIENDLY]: obj(closure_2[7]).t.DUsNmf, [closure_10.PACKAGE_HOLIDAY_SEASON]: obj(closure_2[7]).t.cWP8/Z, [closure_10.PACKAGE_NEW_YEARS]: obj(closure_2[7]).t.8+sIJz };
      ({ quest, gameSheetHook, rewardNameWithArticle, targetMinutes } = arg0);
      const features = quest.config.features;
      const found = features.find((arg0) => arg0 in obj);
      let CDeHul = null;
      if (null != found) {
        CDeHul = obj[found];
      }
      if (null == CDeHul) {
        CDeHul = obj(closure_2[7]).t.CDeHul;
      }
      const intl = obj(closure_2[7]).intl;
      return intl.format(CDeHul, { rewardNameWithArticle, targetMinutes, gameSheetHook });
    }(obj);
    const obj2 = arg1(dependencyMap[12]);
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
  let obj = arg1(dependencyMap[13]);
  let isPremiumResult = obj.isPremium(currentUser, PremiumTypes.TIER_2);
  let obj1 = arg1(dependencyMap[11]);
  const collectibleQuestRewardDuration = obj1.getCollectibleQuestRewardDuration(quest.config);
  let obj2 = arg1(dependencyMap[10]);
  let isConsoleQuestResult = obj2.isConsoleQuest(quest);
  if (isConsoleQuestResult) {
    let obj3 = arg1(dependencyMap[10]);
    isConsoleQuestResult = obj3.shouldUsePlayOnDesktopTask(quest);
  }
  let obj4 = arg1(dependencyMap[9]);
  let obj5 = arg1(dependencyMap[11]);
  const defaultRewardNameWithArticle = obj5.getDefaultRewardNameWithArticle(quest.config, currentUser);
  if (isSponsoredPlayQuestResult) {
    isPremiumResult = getQuestInstructionsToWinRewardSponsored;
    obj = { quest, taskDetails, sourceQuestContent, withoutMarkdown, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed, rewardNameWithArticle: defaultRewardNameWithArticle };
    let description = getQuestInstructionsToWinRewardSponsored(obj);
  } else if (isConsoleQuestResult) {
    obj = { quest, taskDetails, withoutMarkdown, hasNitro: isPremiumResult, collectibleRewardDuration: collectibleQuestRewardDuration, onGameTitleClick, rewardNameWithArticle: defaultRewardNameWithArticle };
    ({ quest: quest6, collectibleRewardDuration: collectibleRewardDuration4, onGameTitleClick: onGameTitleClick5 } = obj);
    const targetMinutes3 = obj.taskDetails.targetMinutes;
    isPremiumResult = arg1;
    isPremiumResult = dependencyMap;
    ({ withoutMarkdown: withoutMarkdown6, hasNitro: hasNitro4, rewardNameWithArticle: rewardNameWithArticle5 } = obj);
    isPremiumResult = arg1(dependencyMap[11]).isCollectibleQuestRewardPremiumExtendable(quest6.config);
    const obj36 = arg1(dependencyMap[11]);
    let result = arg1(dependencyMap[11]).isCollectibleQuestRewardPermanentWithPremiumSubscription(quest6.config);
    const features = quest6.config.features;
    isPremiumResult = constants2;
    isPremiumResult = features.includes(constants2.NON_GAMING_PLAY_QUEST);
    isPremiumResult = null;
    isPremiumResult = null != onGameTitleClick5;
    if (!hasNitro4) {
      if (!isPremiumResult) {
        if (null == collectibleRewardDuration4) {
          if (isPremiumResult) {
            isPremiumResult = arg1;
            isPremiumResult = dependencyMap;
            e+K3xJ = arg1(dependencyMap[7]).t.e+K3xJ;
          } else {
            isPremiumResult = getQuestBarSubtitlePlayGameMessage;
            e+K3xJ = getQuestBarSubtitlePlayGameMessage(isPremiumResult);
          }
          result = { gameTitle: quest6.config.messages.gameTitle, streamingDurationRequirement: targetMinutes3, rewardNameWithArticle: rewardNameWithArticle5, duration: collectibleRewardDuration4, targetMinutes: targetMinutes3, onGameTitleClick: onGameTitleClick5 };
          isPremiumResult = isPremiumResult(e_K3xJ, result, withoutMarkdown6);
        }
      }
      if (isPremiumResult) {
        isPremiumResult = arg1;
        isPremiumResult = dependencyMap;
        let enQ3jU = arg1(dependencyMap[7]).t.enQ3jU;
      } else {
        isPremiumResult = getGamingPlayQuestExpiringCollectibleMessage;
        enQ3jU = getGamingPlayQuestExpiringCollectibleMessage(isPremiumResult);
      }
      isPremiumResult = enQ3jU;
    }
    if (!result) {
      if (isPremiumResult) {
        isPremiumResult = arg1;
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
      isPremiumResult = arg1;
      isPremiumResult = dependencyMap;
      let ztXW8V = arg1(dependencyMap[7]).t.u5QXpw;
    } else {
      isPremiumResult = arg1;
      isPremiumResult = dependencyMap;
      ztXW8V = arg1(dependencyMap[7]).t.ztXW8V;
    }
    isPremiumResult = ztXW8V;
    const obj37 = arg1(dependencyMap[11]);
  } else {
    let obj6 = arg1(dependencyMap[10]);
    if (obj6.isConsoleQuest(quest)) {
      obj2 = { quest, taskDetails, withoutMarkdown, hasNitro: isPremiumResult, collectibleRewardDuration: collectibleQuestRewardDuration, onGameTitleClick, rewardNameWithArticle: defaultRewardNameWithArticle };
      ({ quest: quest5, collectibleRewardDuration: collectibleRewardDuration3, onGameTitleClick: onGameTitleClick4 } = obj2);
      const targetMinutes2 = obj2.taskDetails.targetMinutes;
      isPremiumResult = arg1;
      isPremiumResult = dependencyMap;
      ({ withoutMarkdown: withoutMarkdown5, hasNitro: hasNitro3, rewardNameWithArticle: rewardNameWithArticle4 } = obj2);
      isPremiumResult = arg1(dependencyMap[11]).isCollectibleQuestRewardPremiumExtendable(quest5.config);
      const obj31 = arg1(dependencyMap[11]);
      let result1 = arg1(dependencyMap[11]).isCollectibleQuestRewardPermanentWithPremiumSubscription(quest5.config);
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
      const obj32 = arg1(dependencyMap[11]);
    } else {
      let obj7 = arg1(dependencyMap[10]);
      if (obj7.shouldUsePlayOnDesktopTask(quest)) {
        isPremiumResult = getQuestInstructionsToWinRewardPlaytimeOnDesktop;
        obj4 = { quest, taskDetails, withoutMarkdown, hasNitro: isPremiumResult, collectibleRewardDuration: collectibleQuestRewardDuration, onGameTitleClick, rewardNameWithArticle: defaultRewardNameWithArticle };
        description = getQuestInstructionsToWinRewardPlaytimeOnDesktop(obj4);
      } else {
        let obj8 = arg1(dependencyMap[11]);
        obj5 = { quest };
        if (obj8.isTieredRewardCodeQuest(obj5)) {
          obj6 = { quest, taskDetails, withoutMarkdown, onGameTitleClick };
          const onGameTitleClick3 = obj6.onGameTitleClick;
          if (null != onGameTitleClick3) {
            isPremiumResult = arg1;
            isPremiumResult = dependencyMap;
            a/ia7F = arg1(dependencyMap[7]).t.HHVg4i;
          } else {
            isPremiumResult = arg1;
            isPremiumResult = dependencyMap;
            a/ia7F = arg1(dependencyMap[7]).t.a/ia7F;
          }
          obj7 = { gameTitle: obj6.quest.config.messages.gameTitle, streamingDurationRequirement: obj6.taskDetails.targetMinutes, onGameTitleClick: onGameTitleClick3 };
          isPremiumResult = formatWithOrWithoutMarkdown(a_ia7F, obj7, obj6.withoutMarkdown);
          const tmp98 = formatWithOrWithoutMarkdown;
        } else {
          let obj10 = arg1(dependencyMap[10]);
          if (obj10.hasWatchVideoTasks(quest)) {
            obj8 = { quest, collectibleRewardDuration: collectibleQuestRewardDuration, hasNitro: isPremiumResult, withoutMarkdown, rewardNameWithArticle: defaultRewardNameWithArticle };
            ({ quest: quest4, collectibleRewardDuration: collectibleRewardDuration2 } = obj8);
            ({ hasNitro: hasNitro2, withoutMarkdown: withoutMarkdown4, rewardNameWithArticle: rewardNameWithArticle3 } = obj8);
            const defaultWatchVideoTask = arg1(dependencyMap[10]).getDefaultWatchVideoTask(quest4.config);
            let videoTitle;
            if (null != defaultWatchVideoTask) {
              videoTitle = defaultWatchVideoTask.messages.videoTitle;
            }
            let str3 = "video";
            if (null != videoTitle) {
              str3 = videoTitle;
            }
            const obj23 = arg1(dependencyMap[10]);
            const result2 = arg1(dependencyMap[11]).isCollectibleQuestRewardPremiumExtendable(quest4.config);
            const obj24 = arg1(dependencyMap[11]);
            let result3 = arg1(dependencyMap[11]).isCollectibleQuestRewardPermanentWithPremiumSubscription(quest4.config);
            if (!result2) {
              if (!result2) {
                if (null == collectibleRewardDuration2) {
                  if (quest4.id === closure_9) {
                    W/HkLO = arg1(dependencyMap[7]).t.Rsd5bL;
                  } else {
                    W/HkLO = arg1(dependencyMap[7]).t.g+InPC;
                  }
                }
                result3 = { videoTitle: str3, rewardNameWithArticle: rewardNameWithArticle3, duration: collectibleRewardDuration2 };
                tmp82(W_HkLO, result3, withoutMarkdown4);
              }
              W/HkLO = arg1(dependencyMap[7]).t.W/HkLO;
            }
            if (!result3) {
              vs/xBu = arg1(dependencyMap[7]).t.vs/xBu;
            }
            if (null != collectibleRewardDuration2) {
              xqX+r5 = arg1(dependencyMap[7]).t.tXwfJT;
            } else {
              xqX+r5 = arg1(dependencyMap[7]).t.xqX+r5;
            }
            const obj25 = arg1(dependencyMap[11]);
          } else {
            let obj11 = arg1(dependencyMap[10]);
            if (obj11.hasPlayActivityTask(quest)) {
              const obj9 = { quest, taskDetails, withoutMarkdown, rewardNameWithArticle: defaultRewardNameWithArticle };
              ({ quest: quest3, withoutMarkdown: withoutMarkdown3, rewardNameWithArticle: rewardNameWithArticle2 } = obj9);
              const targetMinutes = obj9.taskDetails.targetMinutes;
              const result4 = arg1(dependencyMap[9]).isPlayAnyActivityQuest(quest3);
              let t = arg1(dependencyMap[7]).t;
              if (result4) {
                t = { streamingDurationRequirement: targetMinutes, questReward: rewardNameWithArticle2 };
                let tmp69Result = tmp69(t.VYwSSu, t, withoutMarkdown3);
              } else {
                obj10 = { activityName: quest3.config.messages.gameTitle, streamingDurationRequirement: targetMinutes, questReward: rewardNameWithArticle2 };
                tmp69Result = tmp69(t.UuzHh8, obj10, withoutMarkdown3);
              }
              const obj19 = arg1(dependencyMap[9]);
            } else {
              let obj12 = arg1(dependencyMap[10]);
              if (obj12.hasAchievementInGameTask(quest)) {
                if (null != thirdPartyTaskDetails) {
                  obj11 = { quest, thirdPartyTaskDetails, withoutMarkdown, hasNitro: isPremiumResult, collectibleRewardDuration: collectibleQuestRewardDuration, onGameTitleClick, rewardNameWithArticle: defaultRewardNameWithArticle, needsToConnect };
                  ({ quest: quest2, collectibleRewardDuration, onGameTitleClick: onGameTitleClick2, needsToConnect: needsToConnect2 } = obj11);
                  ({ thirdPartyTaskDetails: thirdPartyTaskDetails2, withoutMarkdown: withoutMarkdown2, hasNitro, rewardNameWithArticle } = obj11);
                  const result5 = arg1(dependencyMap[11]).isCollectibleQuestRewardPremiumExtendable(quest2.config);
                  arg1(dependencyMap[11]);
                  if (needsToConnect2) {
                    const t12 = arg1(dependencyMap[7]).t;
                  } else {
                    if (hasNitro) {
                      if (result5) {
                        if (!tmp40) {
                          if (null != collectibleRewardDuration) {
                            const t9 = arg1(dependencyMap[7]).t;
                          } else {
                            const t8 = arg1(dependencyMap[7]).t;
                          }
                        }
                        if (null == collectibleRewardDuration) {
                          const t10 = arg1(dependencyMap[7]).t;
                        }
                        const t11 = arg1(dependencyMap[7]).t;
                      }
                    }
                    if (!result5) {
                      if (null == collectibleRewardDuration) {
                        const t6 = arg1(dependencyMap[7]).t;
                        obj12 = { gameTitle: quest2.config.messages.gameTitle };
                        let sum = str;
                        if (needsToConnect2) {
                          const formatted = str.charAt(0).toLowerCase();
                          sum = formatted + str.slice(1);
                          const str2 = str.charAt(0);
                        }
                        obj12.objective = sum;
                        obj12.duration = collectibleRewardDuration;
                        obj12.questReward = rewardNameWithArticle;
                        obj12.onGameTitleClick = onGameTitleClick2;
                        description = formatWithOrWithoutMarkdown(tmp41 ? t6.bxN0nx : t6.thO6iA, obj12, withoutMarkdown2);
                        const tmp44 = tmp41 ? t6.bxN0nx : t6.thO6iA;
                        const tmp63 = formatWithOrWithoutMarkdown;
                      }
                    }
                    const t7 = arg1(dependencyMap[7]).t;
                  }
                  const obj16 = arg1(dependencyMap[11]);
                }
              }
              if (null != thirdPartyTaskDetails) {
                description = thirdPartyTaskDetails.description;
              } else {
                const obj13 = { quest, taskDetails, withoutMarkdown, hasNitro: isPremiumResult, collectibleRewardDuration: collectibleQuestRewardDuration, onGameTitleClick, rewardNameWithArticle: defaultRewardNameWithArticle };
                ({ quest: quest7, collectibleRewardDuration: collectibleRewardDuration5, onGameTitleClick: onGameTitleClick6 } = obj13);
                isPremiumResult = arg1;
                isPremiumResult = dependencyMap;
                ({ withoutMarkdown: withoutMarkdown7, hasNitro: hasNitro5, rewardNameWithArticle: rewardNameWithArticle6 } = obj13);
                isPremiumResult = arg1(dependencyMap[11]).isCollectibleQuestRewardPremiumExtendable(quest7.config);
                const obj42 = arg1(dependencyMap[11]);
                isPremiumResult = null != onGameTitleClick6;
                isPremiumResult = formatWithOrWithoutMarkdown;
                if (hasNitro5) {
                  if (isPremiumResult) {
                    if (!obj43.isCollectibleQuestRewardPermanentWithPremiumSubscription(quest7.config)) {
                      const t3 = arg1(dependencyMap[7]).t;
                    }
                    if (null == collectibleRewardDuration5) {
                      const t4 = arg1(dependencyMap[7]).t;
                    }
                    const t5 = arg1(dependencyMap[7]).t;
                  }
                }
                if (!isPremiumResult) {
                  if (null == collectibleRewardDuration5) {
                    t = arg1(dependencyMap[7]).t;
                    const obj14 = { gameTitle: quest7.config.messages.gameTitle, streamingDurationRequirement: obj13.taskDetails.targetMinutes, duration: collectibleRewardDuration5, questReward: rewardNameWithArticle6, onGameTitleClick: onGameTitleClick6 };
                    description = isPremiumResult(isPremiumResult ? t.ER9rII : t.hkJ+Gs, obj14, withoutMarkdown7);
                  }
                }
                const t2 = arg1(dependencyMap[7]).t;
                const obj43 = arg1(dependencyMap[11]);
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
  let obj = arg1(dependencyMap[14]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const thirdPartyTaskDetails = arg1(dependencyMap[8]).useThirdPartyTaskDetails(quest);
  const obj2 = arg1(dependencyMap[8]);
  const inGameQuestConnectState = arg1(dependencyMap[15]).useInGameQuestConnectState(quest);
  const obj3 = arg1(dependencyMap[15]);
  const result = arg1(dependencyMap[10]).hasAchievementInGameTask(quest);
  const obj5 = arg1(dependencyMap[10]);
  if (result) {
    let inGameApplicationId = obj5.getInGameApplicationId(quest);
  } else {
    const allApplicationIds = obj5.getAllApplicationIds(quest);
    if (null != allApplicationIds) {
      inGameApplicationId = allApplicationIds[0];
    }
  }
  obj = { applicationId: inGameApplicationId, location: constants.QUEST_INSTRUCTIONS };
  const obj4 = arg1(dependencyMap[10]);
  if (null == gameProfileSource) {
    gameProfileSource = arg1(dependencyMap[17]).GameProfileSources.QuestHome;
  }
  obj.source = gameProfileSource;
  importDefault(dependencyMap[16])(obj);
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
  let obj = arg1(dependencyMap[10]);
  if (!obj.isConsoleQuest(quest)) {
    if (!obj2.hasPlayActivityTask(quest)) {
      obj = { quest };
      if (obj3.hasStreamOnDesktopTask(obj)) {
        let PLAY = constants3.STREAM;
      } else {
        if (obj5.hasWatchVideoOnMobileTasks(quest)) {
          PLAY = constants3.WATCH_VIDEO;
        } else {
          PLAY = arg1(dependencyMap[10]).isInGameQuest(quest) ? tmp9.IN_GAME : tmp9.PLAY;
          const obj6 = arg1(dependencyMap[10]);
        }
        const obj5 = arg1(dependencyMap[10]);
      }
      const obj3 = arg1(dependencyMap[10]);
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
      tmp7Result = importDefault(dependencyMap[21])(supported_platforms);
      const tmp7 = importDefault(dependencyMap[21]);
    }
    tmp2 = tmp7Result;
  }
  return tmp2;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ QuestsExperimentLocations: closure_8, ORBS_INTRO_QUEST_ID: closure_9, QuestVariants: closure_10 } = arg1(dependencyMap[5]));
const PremiumTypes = arg1(dependencyMap[6]).PremiumTypes;
let closure_12 = { PLAY: 0, [0]: "PLAY", STREAM: 1, [1]: "STREAM", WATCH_VIDEO: 2, [2]: "WATCH_VIDEO", IN_GAME: 3, [3]: "IN_GAME" };
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/quests/hooks/QuestCopyHooks.tsx");

export const useQuestInstructionTitle = function useQuestInstructionTitle(quest, arg1, questContent, sourceQuestContent) {
  let obj = arg1(dependencyMap[8]);
  const targetMinutes = obj.useQuestTaskDetails(quest).targetMinutes;
  let obj1 = arg1(dependencyMap[8]);
  const thirdPartyTaskDetails = obj1.useThirdPartyTaskDetails(quest);
  let obj2 = arg1(dependencyMap[8]);
  obj = { quest, questContent, sourceQuestContent };
  const connectedConsoleLinkOnClick = obj2.useConnectedConsoleLinkOnClick(obj);
  let obj4 = arg1(dependencyMap[9]);
  const isSponsoredPlayQuestResult = obj4.isSponsoredPlayQuest(quest);
  let obj5 = arg1(dependencyMap[10]);
  if (obj5.isConsoleQuest(quest)) {
    let obj6 = arg1(dependencyMap[10]);
    obj = { quest };
    if (!obj6.hasPlayOnDesktopTask(obj)) {
      const intl = arg1(dependencyMap[7]).intl;
      obj1 = { minutes: targetMinutes, onClick: connectedConsoleLinkOnClick, gameTitle: quest.config.messages.gameTitle };
      return intl.format(arg1(dependencyMap[7]).t.l4S+cQ, obj1);
    }
  }
  let obj9 = arg1(dependencyMap[10]);
  if (obj9.isConsoleQuest(quest)) {
    const intl7 = tmp8(tmp9[7]).intl;
    const format2 = intl7.format;
    const t3 = tmp8(tmp9[7]).t;
    if (isSponsoredPlayQuestResult) {
      obj2 = { onClick: connectedConsoleLinkOnClick, minutes: targetMinutes };
      let format2Result = format2(t3.gbtCpW, obj2);
    } else {
      const obj3 = { minutes: targetMinutes, onClick: connectedConsoleLinkOnClick, gameTitle: quest.config.messages.gameTitle };
      format2Result = format2(t3.Ajlcd7, obj3);
    }
    return format2Result;
  } else if (isSponsoredPlayQuestResult) {
    const intl6 = tmp8(tmp9[7]).intl;
    obj4 = { targetMinutes };
    return intl6.format(tmp8(tmp9[7]).t.Hu8SKW, obj4);
  } else {
    if (tmp8Result.hasWatchVideoTasks(quest)) {
      const defaultWatchVideoTask = arg1(dependencyMap[10]).getDefaultWatchVideoTask(quest.config);
      let videoTitle;
      if (null != defaultWatchVideoTask) {
        videoTitle = defaultWatchVideoTask.messages.videoTitle;
      }
      if (null == videoTitle) {
        const intl5 = arg1(dependencyMap[7]).intl;
        let stringResult = intl5.string(arg1(dependencyMap[7]).t.o+e9yh);
      } else {
        const intl4 = arg1(dependencyMap[7]).intl;
        obj5 = { videoTitle };
        stringResult = intl4.formatToPlainString(arg1(dependencyMap[7]).t.9m9Mna, obj5);
      }
      return stringResult;
    } else if (null != thirdPartyTaskDetails) {
      return thirdPartyTaskDetails.title;
    } else {
      if (obj23.hasPlayActivityTask(quest)) {
        let tmp35Result = tmp35(tmp36[9]);
        const result = tmp35Result.isPlayAnyActivityQuest(quest);
        const intl3 = arg1(dependencyMap[7]).intl;
        const format = intl3.format;
        const t2 = arg1(dependencyMap[7]).t;
        if (result) {
          obj6 = { minutes: targetMinutes };
          let formatResult = format(t2.1NaRSs, obj6);
        } else {
          const obj7 = { minutes: targetMinutes, activityName: quest.config.messages.gameTitle };
          formatResult = format(t2.xHXCyf, obj7);
        }
        return formatResult;
      } else {
        tmp35Result = tmp35(tmp36[10]);
        const obj8 = { quest };
        if (!tmp35Result.hasPlayOnDesktopTask(obj8)) {
          const intl2 = arg1(dependencyMap[7]).intl;
          obj9 = { minutes: targetMinutes, gameTitle: quest.config.messages.gameTitle };
          return intl2.format(tmp35(tmp36[7]).t.6zWtV8, obj9);
        } else {
          const features = quest.config.features;
          const hasItem = features.includes(constants2.NON_GAMING_PLAY_QUEST);
          const t = arg1(dependencyMap[7]).t;
        }
      }
      const obj23 = arg1(dependencyMap[10]);
    }
    const tmp8Result = tmp8(tmp9[10]);
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
  let obj = { quest, taskDetails: sourceQuestContent(dependencyMap[8]).useQuestTaskDetails(quest), location: QUEST_HOME_MOBILE, sourceQuestContent, popoutTargetElementRef: arg4, gameProfileSource: QuestHome };
  let formatToPlainStringResult = useQuestsInstructionsToWinReward(obj);
  const userStatus = quest.userStatus;
  let claimedAt;
  if (null != userStatus) {
    claimedAt = userStatus.claimedAt;
  }
  sourceQuestContent(dependencyMap[8]);
  const userStatus2 = quest.userStatus;
  if (null != userStatus2) {
    claimedAt = userStatus2.claimedAt;
  }
  if (tmp3) {
    const intl = sourceQuestContent(dependencyMap[7]).intl;
    obj = { claimDate: tmp5 };
    formatToPlainStringResult = intl.formatToPlainString(sourceQuestContent(dependencyMap[7]).t.lOVr0O, obj);
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
  let obj = arg1(dependencyMap[8]);
  const questFormattedDate = obj.useQuestFormattedDate(quest.config.rewardsConfig.rewardsExpireAt);
  let obj1 = arg1(dependencyMap[8]);
  const questTaskDetails = obj1.useQuestTaskDetails(quest);
  let obj2 = arg1(dependencyMap[8]);
  const thirdPartyTaskDetails = obj2.useThirdPartyTaskDetails(quest);
  let obj3 = arg1(dependencyMap[14]);
  const items = [closure_7];
  const userStatus = quest.userStatus;
  let completedAt;
  const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  const userStatus2 = quest.userStatus;
  let enrolledAt;
  if (null != userStatus2) {
    enrolledAt = userStatus2.enrolledAt;
  }
  let obj4 = arg1(dependencyMap[8]);
  obj = { quest, location: constants.QUESTS_BAR, taskDetails: questTaskDetails, sourceQuestContent, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed };
  const isQuestProgressing = obj4.useIsQuestProgressing(quest);
  obj.gameProfileSource = arg1(dependencyMap[17]).GameProfileSources.QuestBar;
  if (tmp6) {
    const intl9 = tmp13(tmp14[7]).intl;
    obj = { expirationDate: questFormattedDate };
    return intl9.formatToPlainString(tmp13(tmp14[7]).t.APddvF, obj);
  } else {
    if (tmp13Result.hasAchievementInGameTask(quest)) {
      if (false === hasAlreadyLinked) {
        const intl8 = arg1(dependencyMap[7]).intl;
        return intl8.string(arg1(dependencyMap[7]).t.mAdqf7);
      }
    }
    const obj8 = arg1(dependencyMap[10]);
    if (isExpanded) {
      if (obj8.hasAchievementInGameTask(quest)) {
        if (true === hasAlreadyLinked) {
          const gameTitle = quest.config.messages.gameTitle;
          if (null != onClickGameTitle) {
            const intl7 = arg1(dependencyMap[7]).intl;
            obj1 = { gameTitle, onClickGameTitle };
            let formatResult = intl7.format(arg1(dependencyMap[7]).t.X8hBDz, obj1);
          } else {
            const intl6 = arg1(dependencyMap[7]).intl;
            obj2 = { gameTitle };
            formatResult = intl6.format(arg1(dependencyMap[7]).t.u3mdpP, obj2);
          }
          return formatResult;
        }
      }
      if (activeScreen !== arg1(dependencyMap[18]).TaskPlatformScreen.SELECT) {
        if (obj17.isSponsoredPlayQuest(quest)) {
          if (tmp8) {
            if (!tmp9) {
              const defaultRewardNameWithArticle = arg1(dependencyMap[11]).getDefaultRewardNameWithArticle(quest.config, stateFromStores);
              const intl5 = arg1(dependencyMap[7]).intl;
              obj3 = { rewardNameWithArticle: defaultRewardNameWithArticle, targetMinutes: questTaskDetails.targetMinutes };
              return intl5.format(arg1(dependencyMap[7]).t.1votF6, obj3);
            }
          }
        }
        const obj17 = arg1(dependencyMap[9]);
      }
      return tmp11;
    } else {
      if (obj8.hasWatchVideoTasks(quest)) {
        const intl4 = arg1(dependencyMap[7]).intl;
        let stringResult = intl4.string(arg1(dependencyMap[7]).t.o+e9yh);
      } else if (tmp12 > 0) {
        if (!obj9.hasAchievementInGameTask(quest)) {
          if (isQuestProgressing) {
            obj4 = { quest, taskDetails: questTaskDetails };
            let tmp25;
            if (null != thirdPartyTaskDetails) {
              tmp25 = thirdPartyTaskDetails;
            }
            obj4.thirdPartyTaskDetails = tmp25;
            let contextualEntrypointHeading = tmp22(tmp23[19]).getContextualEntrypointHeading(obj4);
            const tmp22Result = tmp22(tmp23[19]);
          } else {
            const intl2 = tmp22(tmp23[7]).intl;
            contextualEntrypointHeading = intl2.string(tmp22(tmp23[7]).t.mOrpXG);
          }
        }
        const intl3 = arg1(dependencyMap[7]).intl;
        contextualEntrypointHeading = intl3.string(arg1(dependencyMap[7]).t.JkyCIO);
        const obj9 = arg1(dependencyMap[10]);
      } else {
        const intl = arg1(dependencyMap[7]).intl;
        stringResult = intl.string(arg1(dependencyMap[7]).t.S6UUc5);
      }
      return stringResult;
    }
    const tmp13Result = tmp13(tmp14[10]);
  }
  const tmp6 = null != completedAt;
  const tmp8 = null != enrolledAt;
  const tmp9 = questTaskDetails.percentComplete > 0;
};
export const useQuestBarTitle = function useQuestBarTitle(quest) {
  let obj = arg1(dependencyMap[14]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const questTaskDetails = arg1(dependencyMap[8]).useQuestTaskDetails(quest);
  const obj2 = arg1(dependencyMap[8]);
  const obj3 = arg1(dependencyMap[8]);
  const thirdPartyTaskDetails = arg1(dependencyMap[8]).useThirdPartyTaskDetails(quest);
  const userStatus = quest.userStatus;
  let completedAt;
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  const tmp5 = null != thirdPartyTaskDetails ? thirdPartyTaskDetails.percentComplete : questTaskDetails.percentComplete;
  if (null != completedAt) {
    const intl6 = tmp6(tmp7[7]).intl;
    return intl6.string(tmp6(tmp7[7]).t.ij5E/5);
  } else {
    if (tmp6Result.hasAchievementInGameTask(quest)) {
      if (false === arg1) {
        const intl5 = arg1(dependencyMap[7]).intl;
        return intl5.string(arg1(dependencyMap[7]).t.s9r2a1);
      }
    }
    const tmp6Result = tmp6(tmp7[10]);
    if (obj6.hasAchievementInGameTask(quest)) {
      if (true === arg1) {
        if (0 === tmp5) {
          const intl4 = arg1(dependencyMap[7]).intl;
          return intl4.string(arg1(dependencyMap[7]).t.2+opCy);
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
        const obj8 = arg1(dependencyMap[20]);
        const intl3 = arg1(dependencyMap[7]).intl;
        obj = {};
        obj.percent = arg1(dependencyMap[20]).formatPercent(stateFromStores, tmp5, obj);
        return intl3.formatToPlainString(arg1(dependencyMap[7]).t.lVZaXD, obj);
      }
    }
    if (callback(obj3.useTaskPlatformScreen(quest, questTaskDetails), 1)[0] === arg1(dependencyMap[18]).TaskPlatformScreen.SELECT) {
      const intl2 = arg1(dependencyMap[7]).intl;
      let stringResult = intl2.string(arg1(dependencyMap[7]).t.EMrUHQ);
    } else {
      const obj7 = arg1(dependencyMap[10]);
      const intl = arg1(dependencyMap[7]).intl;
      const string = intl.string;
      const t = arg1(dependencyMap[7]).t;
      if (isConsoleQuestResult) {
        stringResult = string(t.mOrpXG);
      } else {
        stringResult = string(t.7e5k7L);
      }
      const isConsoleQuestResult = arg1(dependencyMap[10]).isConsoleQuest(quest);
    }
    return stringResult;
  }
  const obj4 = arg1(dependencyMap[8]);
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
  const tmp = function useSimplifiedQuestTaskType(quest) {
    const items = [quest];
    return React.useMemo(() => callback(arg0), items);
  }(quest);
  arg1(dependencyMap[8]);
  if (constants3.PLAY === tmp) {
    if (canLaunchOnCurrentPlatform(quest, application)) {
      const features = quest.config.features;
      if (features.includes(constants2.CLOUD_GAMING_ACTIVITY)) {
        const intl6 = tmp20(tmp21[7]).intl;
        const t3 = arg1(dependencyMap[7]).t;
        return intl6.string(flag ? t3.V5Qt9D : t3.+qoymD);
      } else {
        if (tmp20Result.canLaunchActivity(quest)) {
          const intl5 = arg1(dependencyMap[7]).intl;
          const t2 = arg1(dependencyMap[7]).t;
          return intl5.string(shortText ? t2.E4kW5O : t2.Ie9++s);
        }
        const tmp20Result = tmp20(tmp21[9]);
      }
    }
    const intl4 = arg1(dependencyMap[7]).intl;
    return intl4.string(arg1(dependencyMap[7]).t.l7E81v);
  } else if (constants3.STREAM === tmp) {
    const intl3 = arg1(dependencyMap[7]).intl;
    return intl3.string(arg1(dependencyMap[7]).t.l7E81v);
  } else if (constants3.WATCH_VIDEO === tmp) {
    return arg1(dependencyMap[22]).getVideoQuestWatchCtaText(tmp3);
  } else if (constants3.IN_GAME === tmp) {
    if (obj.canLaunchActivity(quest)) {
      if (canLaunchOnCurrentPlatform(quest, application)) {
        const intl2 = arg1(dependencyMap[7]).intl;
        const t = arg1(dependencyMap[7]).t;
        intl2.string(shortText ? t.CkUzLd : t.hRIVy+);
      }
    }
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.l7E81v);
  }
};
export const usePremiumExtendableCopy = function usePremiumExtendableCopy(arg0) {
  const arg1 = arg0;
  const items = [arg0];
  [][0] = arg0;
  const memo = React.useMemo(() => arg0(closure_2[11]).isCollectibleQuestRewardPremiumExtendable(arg0), items);
  if (!memo) {
    return null;
  } else {
    const intl = arg1(dependencyMap[7]).intl;
    const string = intl.string;
    hh7Rb/ = arg1(dependencyMap[7]).t;
    if (tmp2) {
      hh7Rb/ = hh7Rb_.hh7Rb/;
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
  let obj = arg1(dependencyMap[11]);
  let platform;
  const result = obj.isTieredRewardCodeQuest({ quest });
  if (null != rewardCode) {
    platform = rewardCode.platform;
  }
  if (null == platform) {
    platform = arg1(dependencyMap[18]).QuestRewardCodePlatforms.CROSS_PLATFORM;
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
    rewardCodeQuestReward = arg1(dependencyMap[11]).getRewardCodeQuestReward(obj);
    const obj2 = arg1(dependencyMap[11]);
  }
  let prop;
  const defaultReward = arg1(dependencyMap[19]).getDefaultReward(quest.config);
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
  quest = quest.quest;
  const arg1 = quest;
  ({ questContent: closure_1, preCtaClick: closure_2, getImpressionId: closure_3, sourceQuestContent: closure_4 } = quest);
  function _defaultOnClickCta() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    return obj(...arguments);
  }
  const items = [quest];
  const obj = {};
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
        const questType = quest(closure_2[9]).getQuestType(quest.config);
        if (questType === quest(closure_2[25]).QuestType.GAMEPLAY) {
          const features = quest.config.features;
          if (!features.includes(constants.NON_GAMING_PLAY_QUEST)) {
            if (!obj2.isSponsoredPlayQuest(quest)) {
              const intl = quest(closure_2[7]).intl;
              taskTitle = intl.string(quest(closure_2[7]).t.wirwN+);
            }
            const obj2 = quest(closure_2[9]);
          }
        }
        const intl2 = quest(closure_2[7]).intl;
        taskTitle = intl2.string(quest(closure_2[7]).t.y8Xf3k);
        const obj = quest(closure_2[9]);
      }
      const obj3 = quest(closure_2[10]);
    }
  }, items);
  obj.ctaText = arg1(dependencyMap[19]).getExternalCtaLabel(quest);
  obj.ctaVariant = "secondary";
  obj.onClickCta = function defaultOnClickCta() {
    return _defaultOnClickCta(...arguments);
  };
  obj.title = quest.config.messages.gameTitle;
  obj.subtitle = memo;
  obj.ctaIconPosition = "end";
  return obj;
};
