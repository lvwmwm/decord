// Module ID: 13952
// Function ID: 13953
// Name: MessagesUtils
// Dependencies: [1072, 11504, 7573, 5877, 8656, 6181, 2]

// Module 13952 (MessagesUtils)
import CodedLink from "CodedLink" /* 5877 */;
import MediaPostEmbedUtils from "MediaPostEmbedUtils" /* 6181 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 7573 */;
import ExperimentEmbedUtils from "ExperimentEmbedUtils" /* 8656 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11504 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let invites;

let c2;
let c3;
({ InviteStates: c2, MessageEmbedTypes: c3 } = Constants);
let closure_4 = GameOrganizationInviteConstants.GameOrganizationInviteStates;
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
let obj = {
  messageAuthorActivitiesChanged(activity, props, merged) {
    return props.messageAuthorActivities !== merged.messageAuthorActivities && null != activity.activity && props.messageAuthorActivities[activity.author.id] !== merged.messageAuthorActivities[activity.author.id];
  },
  codedLinksChanged(getContentMessage, props, merged) {
    const f106483 = (item) => {
      let code;
      let type;
      ({ type, code } = item);
      if (CodedLink.CodedLinkType.BUILD_OVERRIDE !== type) {
        if (CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
          if (CodedLink.CodedLinkType.EXPERIMENT === type) {
            const tmpResult = ExperimentEmbedUtils;
            const experimentFromEmbedURL = tmpResult.getExperimentFromEmbedURL(code);
            let tmp65 = null != experimentFromEmbedURL;
            if (tmp65) {
              const legacyExperiments = props.experimentEmbeds.legacyExperiments;
              let tmp67;
              if (legacyExperiments != null) {
                tmp67 = legacyExperiments[experimentFromEmbedURL];
              }
              const legacyExperiments2 = merged.experimentEmbeds.legacyExperiments;
              let tmp69;
              if (legacyExperiments2 != null) {
                tmp69 = legacyExperiments2[experimentFromEmbedURL];
              }
              let tmp70 = tmp67 !== tmp69;
              if (!tmp70) {
                const legacyOverridesInfo = tmp66.experimentEmbeds.legacyOverridesInfo;
                let tmp71;
                if (legacyOverridesInfo != null) {
                  tmp71 = legacyOverridesInfo[experimentFromEmbedURL];
                }
                const legacyOverridesInfo2 = tmp68.experimentEmbeds.legacyOverridesInfo;
                let tmp72;
                if (legacyOverridesInfo2 != null) {
                  tmp72 = legacyOverridesInfo2[experimentFromEmbedURL];
                }
                tmp70 = tmp71 !== tmp72;
              }
              if (!tmp70) {
                const apexExperiments = tmp66.experimentEmbeds.apexExperiments;
                let tmp73;
                if (apexExperiments != null) {
                  tmp73 = apexExperiments[experimentFromEmbedURL];
                }
                const apexExperiments2 = tmp68.experimentEmbeds.apexExperiments;
                let tmp74;
                if (apexExperiments2 != null) {
                  tmp74 = apexExperiments2[experimentFromEmbedURL];
                }
                tmp70 = tmp73 !== tmp74;
              }
              if (!tmp70) {
                const apexOverridesInfo = tmp66.experimentEmbeds.apexOverridesInfo;
                let tmp75;
                if (apexOverridesInfo != null) {
                  tmp75 = apexOverridesInfo[experimentFromEmbedURL];
                }
                const apexOverridesInfo2 = tmp68.experimentEmbeds.apexOverridesInfo;
                let tmp76;
                if (apexOverridesInfo2 != null) {
                  tmp76 = apexOverridesInfo2[experimentFromEmbedURL];
                }
                tmp70 = tmp75 !== tmp76;
              }
              tmp65 = tmp70;
            }
            return tmp65;
          } else if (CodedLink.CodedLinkType.INVITE === type) {
            const invites3 = props.invites;
            const value = invites3.get(code);
            const invites4 = merged.invites;
            const value7 = invites4.get(code);
            let state;
            const applicationAssetFetchingIds = props.applicationAssetFetchingIds;
            const applicationAssetFetchingIds2 = merged.applicationAssetFetchingIds;
            if (value != null) {
              state = value.state;
            }
            let state1;
            if (value7 != null) {
              state1 = value7.state;
            }
            let tmp60 = state !== state1;
            if (tmp60) {
              let state2;
              if (value7 != null) {
                state2 = value7.state;
              }
              tmp60 = state2 !== constants.RESOLVING;
            }
            if (!tmp60) {
              tmp60 = applicationAssetFetchingIds !== applicationAssetFetchingIds2;
            }
            return tmp60;
          } else if (CodedLink.CodedLinkType.TEMPLATE === type) {
            const guildTemplates = props.guildTemplates;
            const value8 = guildTemplates.get(code);
            const guildTemplates2 = merged.guildTemplates;
            const value9 = guildTemplates2.get(code);
            let state3;
            if (value8 != null) {
              state3 = value8.state;
            }
            let state4;
            if (value9 != null) {
              state4 = value9.state;
            }
            let tmp50 = state3 !== state4;
            if (tmp50) {
              let state5;
              if (value9 != null) {
                state5 = value9.state;
              }
              tmp50 = state5 !== GuildTemplateStates.RESOLVING;
            }
            return tmp50;
          } else {
            if (CodedLink.CodedLinkType.EVENT !== type) {
              if (CodedLink.CodedLinkType.CHANNEL_LINK !== type) {
                if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                  const invalidAppDirectoryEmbedApplicationIds = props.invalidAppDirectoryEmbedApplicationIds;
                  const invalidAppDirectoryEmbedApplicationIds2 = merged.invalidAppDirectoryEmbedApplicationIds;
                  const tmp36 = props.appDirectoryEmbedApplications[code];
                  const tmp38 = merged.appDirectoryEmbedApplications[code];
                  const hasItem = invalidAppDirectoryEmbedApplicationIds.has(code);
                  let tmp42 = tmp36 !== tmp38;
                  const tmp40 = props.appDirectoryEmbedApplicationFetchStates[code];
                  const tmp41 = merged.appDirectoryEmbedApplicationFetchStates[code];
                  if (!tmp42) {
                    tmp42 = hasItem !== invalidAppDirectoryEmbedApplicationIds2.has(code);
                  }
                  if (!tmp42) {
                    tmp42 = tmp40 !== tmp41;
                  }
                  return tmp42;
                } else if (CodedLink.CodedLinkType.ACTIVITY_BOOKMARK === type) {
                  return props.activityParticipants !== merged.activityParticipants || props.invalidApplicationIds !== merged.invalidApplicationIds || props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds;
                } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
                  invites = props.invites;
                  const value10 = invites.get(code);
                  const invites2 = merged.invites;
                  const value11 = invites2.get(code);
                  let tmp25 = props.activityParticipants !== merged.activityParticipants || tmp21.invalidApplicationIds !== tmp23.invalidApplicationIds || tmp21.applicationAssetFetchingIds !== tmp23.applicationAssetFetchingIds;
                  if (!tmp25) {
                    let state6;
                    if (value10 != null) {
                      state6 = value10.state;
                    }
                    let state7;
                    if (value11 != null) {
                      state7 = value11.state;
                    }
                    let tmp29 = state6 !== state7;
                    if (tmp29) {
                      let state8;
                      if (value11 != null) {
                        state8 = value11.state;
                      }
                      tmp29 = state8 !== constants.RESOLVING;
                    }
                    tmp25 = tmp29;
                  }
                  return tmp25;
                } else {
                  if (CodedLink.CodedLinkType.GUILD_PRODUCT !== type) {
                    if (CodedLink.CodedLinkType.SERVER_SHOP !== type) {
                      if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                        if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                          if (CodedLink.CodedLinkType.QUESTS_EMBED === type) {
                            return props.quests !== merged.quests || props.isFetchingCurrentQuests !== tmp19.isFetchingCurrentQuests;
                          } else {
                            if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                              if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                if (CodedLink.CodedLinkType.APP_OAUTH2_LINK === type) {
                                  return props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds || props.invalidApplicationIds !== tmp17.invalidApplicationIds;
                                } else {
                                  if (CodedLink.CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                    if (CodedLink.CodedLinkType.GAME_PROFILE !== type) {
                                      if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                                        if (CodedLink.CodedLinkType.USER_PROFILE !== type) {
                                          if (CodedLink.CodedLinkType.USER_WISHLIST !== type) {
                                            if (CodedLink.CodedLinkType.CONJURE_PROJECT === type) {
                                              return props.conjureProjectLinkEmbeds[code] !== merged.conjureProjectLinkEmbeds[code];
                                            } else if (CodedLink.CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                                              const gameOrganizationInvites = merged.gameOrganizationInvites;
                                              const value12 = gameOrganizationInvites.get(code);
                                              const gameOrganizationInvites2 = props.gameOrganizationInvites;
                                              let tmp7 = gameOrganizationInvites2.get(code) !== value12;
                                              if (!tmp7) {
                                                const pendingGameOrganizationJoinFlowCodes = tmp6.pendingGameOrganizationJoinFlowCodes;
                                                const pendingGameOrganizationJoinFlowCodes2 = tmp4.pendingGameOrganizationJoinFlowCodes;
                                                const hasItem1 = pendingGameOrganizationJoinFlowCodes.has(code);
                                                let tmp9 = hasItem1 !== pendingGameOrganizationJoinFlowCodes2.has(code);
                                                if (!tmp9) {
                                                  let state9;
                                                  if (value12 != null) {
                                                    state9 = value12.state;
                                                  }
                                                  let tmp13 = state9 === constants.RESOLVED;
                                                  if (tmp13) {
                                                    const joinedGameOrganizationGuildIds = tmp6.joinedGameOrganizationGuildIds;
                                                    const joinedGameOrganizationGuildIds2 = tmp4.joinedGameOrganizationGuildIds;
                                                    const hasItem2 = joinedGameOrganizationGuildIds.includes(value12.guildId);
                                                    tmp13 = hasItem2 !== joinedGameOrganizationGuildIds2.includes(value12.guildId);
                                                  }
                                                  tmp9 = tmp13;
                                                }
                                                tmp7 = tmp9;
                                              }
                                              return tmp7;
                                            } else {
                                              const _Error = Error;
                                              const _HermesInternal = HermesInternal;
                                              throw Error("Unknown coded link type: " + type);
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  return false;
                                }
                              }
                            }
                            return false;
                          }
                        }
                      }
                    }
                  }
                  return false;
                }
              }
            }
            return false;
          }
        }
      }
      let state10;
      if (props.buildOverrides[code] != null) {
        state10 = tmp77.state;
      }
      let state11;
      if (merged.buildOverrides[code] != null) {
        state11 = tmp78.state;
      }
      return state10 !== state11;
    };
    const codedLinks = getContentMessage.getContentMessage().codedLinks;
    let tmp = 0 !== codedLinks.length;
    if (tmp) {
      tmp = (props.invites !== merged.invites || props.appDirectoryEmbedApplications !== merged.appDirectoryEmbedApplications || props.invalidAppDirectoryEmbedApplicationIds !== merged.invalidAppDirectoryEmbedApplicationIds || props.invalidApplicationIds !== merged.invalidApplicationIds || props.appDirectoryEmbedApplicationFetchStates !== merged.appDirectoryEmbedApplicationFetchStates || props.guildTemplates !== merged.guildTemplates || props.gameOrganizationInvites !== merged.gameOrganizationInvites || props.joinedGameOrganizationGuildIds !== merged.joinedGameOrganizationGuildIds || props.pendingGameOrganizationJoinFlowCodes !== merged.pendingGameOrganizationJoinFlowCodes || props.buildOverrides !== merged.buildOverrides || props.activityParticipants !== merged.activityParticipants || props.quests !== merged.quests || props.isFetchingCurrentQuests !== merged.isFetchingCurrentQuests || props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds || props.experimentEmbeds !== merged.experimentEmbeds || props.conjureProjectLinkEmbeds !== merged.conjureProjectLinkEmbeds) && codedLinks.some(f106483);
      const tmp2 = (props.invites !== merged.invites || props.appDirectoryEmbedApplications !== merged.appDirectoryEmbedApplications || props.invalidAppDirectoryEmbedApplicationIds !== merged.invalidAppDirectoryEmbedApplicationIds || props.invalidApplicationIds !== merged.invalidApplicationIds || props.appDirectoryEmbedApplicationFetchStates !== merged.appDirectoryEmbedApplicationFetchStates || props.guildTemplates !== merged.guildTemplates || props.gameOrganizationInvites !== merged.gameOrganizationInvites || props.joinedGameOrganizationGuildIds !== merged.joinedGameOrganizationGuildIds || props.pendingGameOrganizationJoinFlowCodes !== merged.pendingGameOrganizationJoinFlowCodes || props.buildOverrides !== merged.buildOverrides || props.activityParticipants !== merged.activityParticipants || props.quests !== merged.quests || props.isFetchingCurrentQuests !== merged.isFetchingCurrentQuests || props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds || props.experimentEmbeds !== merged.experimentEmbeds || props.conjureProjectLinkEmbeds !== merged.conjureProjectLinkEmbeds) && codedLinks.some(f106483);
    }
    return tmp;
  },
  giftCodesChanged(giftCodes, props, merged) {
    let someResult = 0 !== giftCodes.giftCodes.length;
    if (someResult) {
      giftCodes = giftCodes.giftCodes;
      someResult = giftCodes.some((item) => {
        const resolvedGiftCodes = props.resolvedGiftCodes;
        const resolvedGiftCodes2 = merged.resolvedGiftCodes;
        const hasItem = resolvedGiftCodes.includes(item);
        const resolvingGiftCodes = props.resolvingGiftCodes;
        const hasItem1 = resolvedGiftCodes2.includes(item);
        const resolvingGiftCodes2 = merged.resolvingGiftCodes;
        const hasItem2 = resolvingGiftCodes.includes(item);
        const acceptingGiftCodes = props.acceptingGiftCodes;
        const hasItem3 = resolvingGiftCodes2.includes(item);
        const acceptingGiftCodes2 = merged.acceptingGiftCodes;
        const hasItem4 = acceptingGiftCodes.includes(item);
        return true;
      });
    }
    return someResult;
  },
  mediaPostPreviewEmbedsChanged(embeds, props, merged) {
    embeds = embeds.embeds;
    const found = embeds.filter((type) => type.type === constants.POST_PREVIEW);
    const tmp = 0 !== found.length && found.some((url) => {
      const obj = MediaPostEmbedUtils;
      const mediaPostEmbedChannelId = obj.getMediaPostEmbedChannelId(url.url);
      return null != mediaPostEmbedChannelId && props.mediaPostPreviewEmbeds[mediaPostEmbedChannelId] !== merged.mediaPostPreviewEmbeds[mediaPostEmbedChannelId];
    });
    return tmp;
  }
};
const result = size.fileFinishedImporting("utils/native/MessagesUtils.tsx");

export default obj;
