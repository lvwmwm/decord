// Module ID: 13952
// Function ID: 13953
// Name: MessagesUtils
// Dependencies: [1072, 11560, 7643, 5889, 8731, 6187, 2]

// Module 13952 (MessagesUtils)
import CodedLink from "CodedLink" /* 5889 */;
import MediaPostEmbedUtils from "MediaPostEmbedUtils" /* 6187 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 7643 */;
import ExperimentEmbedUtils from "ExperimentEmbedUtils" /* 8731 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11560 */;
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
  codedLinksChanged(codedLinks, props, merged) {
    let tmp = 0 !== codedLinks.codedLinks.length;
    if (tmp) {
      let someResult = props.invites !== merged.invites || props.appDirectoryEmbedApplications !== merged.appDirectoryEmbedApplications || props.invalidAppDirectoryEmbedApplicationIds !== merged.invalidAppDirectoryEmbedApplicationIds || props.invalidApplicationIds !== merged.invalidApplicationIds || props.appDirectoryEmbedApplicationFetchStates !== merged.appDirectoryEmbedApplicationFetchStates || props.guildTemplates !== merged.guildTemplates || props.gameOrganizationInvites !== merged.gameOrganizationInvites || props.joinedGameOrganizationGuildIds !== merged.joinedGameOrganizationGuildIds || props.pendingGameOrganizationJoinFlowCodes !== merged.pendingGameOrganizationJoinFlowCodes || props.buildOverrides !== merged.buildOverrides || props.activityParticipants !== merged.activityParticipants || props.quests !== merged.quests || props.isFetchingCurrentQuests !== merged.isFetchingCurrentQuests || props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds || props.experimentEmbeds !== merged.experimentEmbeds;
      if (someResult) {
        codedLinks = codedLinks.codedLinks;
        someResult = codedLinks.some((item) => {
          let code;
          let type;
          ({ type, code } = item);
          if (CodedLink.CodedLinkType.BUILD_OVERRIDE !== type) {
            if (CodedLink.CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
              if (CodedLink.CodedLinkType.EXPERIMENT === type) {
                const tmpResult = ExperimentEmbedUtils;
                const experimentFromEmbedURL = tmpResult.getExperimentFromEmbedURL(code);
                let tmp63 = null != experimentFromEmbedURL;
                if (tmp63) {
                  const legacyExperiments = props.experimentEmbeds.legacyExperiments;
                  let tmp65;
                  if (legacyExperiments != null) {
                    tmp65 = legacyExperiments[experimentFromEmbedURL];
                  }
                  const legacyExperiments2 = merged.experimentEmbeds.legacyExperiments;
                  let tmp67;
                  if (legacyExperiments2 != null) {
                    tmp67 = legacyExperiments2[experimentFromEmbedURL];
                  }
                  let tmp68 = tmp65 !== tmp67;
                  if (!tmp68) {
                    const legacyOverridesInfo = tmp64.experimentEmbeds.legacyOverridesInfo;
                    let tmp69;
                    if (legacyOverridesInfo != null) {
                      tmp69 = legacyOverridesInfo[experimentFromEmbedURL];
                    }
                    const legacyOverridesInfo2 = tmp66.experimentEmbeds.legacyOverridesInfo;
                    let tmp70;
                    if (legacyOverridesInfo2 != null) {
                      tmp70 = legacyOverridesInfo2[experimentFromEmbedURL];
                    }
                    tmp68 = tmp69 !== tmp70;
                  }
                  if (!tmp68) {
                    const apexExperiments = tmp64.experimentEmbeds.apexExperiments;
                    let tmp71;
                    if (apexExperiments != null) {
                      tmp71 = apexExperiments[experimentFromEmbedURL];
                    }
                    const apexExperiments2 = tmp66.experimentEmbeds.apexExperiments;
                    let tmp72;
                    if (apexExperiments2 != null) {
                      tmp72 = apexExperiments2[experimentFromEmbedURL];
                    }
                    tmp68 = tmp71 !== tmp72;
                  }
                  if (!tmp68) {
                    const apexOverridesInfo = tmp64.experimentEmbeds.apexOverridesInfo;
                    let tmp73;
                    if (apexOverridesInfo != null) {
                      tmp73 = apexOverridesInfo[experimentFromEmbedURL];
                    }
                    const apexOverridesInfo2 = tmp66.experimentEmbeds.apexOverridesInfo;
                    let tmp74;
                    if (apexOverridesInfo2 != null) {
                      tmp74 = apexOverridesInfo2[experimentFromEmbedURL];
                    }
                    tmp68 = tmp73 !== tmp74;
                  }
                  tmp63 = tmp68;
                }
                return tmp63;
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
                let tmp58 = state !== state1;
                if (tmp58) {
                  let state2;
                  if (value7 != null) {
                    state2 = value7.state;
                  }
                  tmp58 = state2 !== constants.RESOLVING;
                }
                if (!tmp58) {
                  tmp58 = applicationAssetFetchingIds !== applicationAssetFetchingIds2;
                }
                return tmp58;
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
                let tmp48 = state3 !== state4;
                if (tmp48) {
                  let state5;
                  if (value9 != null) {
                    state5 = value9.state;
                  }
                  tmp48 = state5 !== GuildTemplateStates.RESOLVING;
                }
                return tmp48;
              } else {
                if (CodedLink.CodedLinkType.EVENT !== type) {
                  if (CodedLink.CodedLinkType.CHANNEL_LINK !== type) {
                    if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                      const invalidAppDirectoryEmbedApplicationIds = props.invalidAppDirectoryEmbedApplicationIds;
                      const invalidAppDirectoryEmbedApplicationIds2 = merged.invalidAppDirectoryEmbedApplicationIds;
                      const tmp34 = props.appDirectoryEmbedApplications[code];
                      const tmp36 = merged.appDirectoryEmbedApplications[code];
                      const hasItem = invalidAppDirectoryEmbedApplicationIds.has(code);
                      let tmp40 = tmp34 !== tmp36;
                      const tmp38 = props.appDirectoryEmbedApplicationFetchStates[code];
                      const tmp39 = merged.appDirectoryEmbedApplicationFetchStates[code];
                      if (!tmp40) {
                        tmp40 = hasItem !== invalidAppDirectoryEmbedApplicationIds2.has(code);
                      }
                      if (!tmp40) {
                        tmp40 = tmp38 !== tmp39;
                      }
                      return tmp40;
                    } else if (CodedLink.CodedLinkType.ACTIVITY_BOOKMARK === type) {
                      return props.activityParticipants !== merged.activityParticipants || props.invalidApplicationIds !== merged.invalidApplicationIds || props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds;
                    } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
                      invites = props.invites;
                      const value10 = invites.get(code);
                      const invites2 = merged.invites;
                      const value11 = invites2.get(code);
                      let tmp23 = props.activityParticipants !== merged.activityParticipants || tmp19.invalidApplicationIds !== tmp21.invalidApplicationIds || tmp19.applicationAssetFetchingIds !== tmp21.applicationAssetFetchingIds;
                      if (!tmp23) {
                        let state6;
                        if (value10 != null) {
                          state6 = value10.state;
                        }
                        let state7;
                        if (value11 != null) {
                          state7 = value11.state;
                        }
                        let tmp27 = state6 !== state7;
                        if (tmp27) {
                          let state8;
                          if (value11 != null) {
                            state8 = value11.state;
                          }
                          tmp27 = state8 !== constants.RESOLVING;
                        }
                        tmp23 = tmp27;
                      }
                      return tmp23;
                    } else {
                      if (CodedLink.CodedLinkType.GUILD_PRODUCT !== type) {
                        if (CodedLink.CodedLinkType.SERVER_SHOP !== type) {
                          if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                            if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                              if (CodedLink.CodedLinkType.QUESTS_EMBED === type) {
                                return props.quests !== merged.quests || props.isFetchingCurrentQuests !== tmp17.isFetchingCurrentQuests;
                              } else {
                                if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                                  if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                    if (CodedLink.CodedLinkType.APP_OAUTH2_LINK === type) {
                                      return props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds || props.invalidApplicationIds !== tmp15.invalidApplicationIds;
                                    } else {
                                      if (CodedLink.CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                        if (CodedLink.CodedLinkType.GAME_PROFILE !== type) {
                                          if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                                            if (CodedLink.CodedLinkType.USER_PROFILE !== type) {
                                              if (CodedLink.CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
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
            state10 = tmp75.state;
          }
          let state11;
          if (merged.buildOverrides[code] != null) {
            state11 = tmp76.state;
          }
          return state10 !== state11;
        });
      }
      tmp = someResult;
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
