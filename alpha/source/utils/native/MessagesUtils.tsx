// Module ID: 13671
// Function ID: 13672
// Name: MessagesUtils
// Dependencies: [1072, 11327, 7495, 5747, 8577, 6044, 2]

// Module 13671 (MessagesUtils)
import CodedLink from "CodedLink" /* 5747 */;
import MediaPostEmbedUtils from "MediaPostEmbedUtils" /* 6044 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 7495 */;
import ExperimentEmbedUtils from "ExperimentEmbedUtils" /* 8577 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11327 */;
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
      let someResult = props.invites !== merged.invites || props.appDirectoryEmbedApplications !== merged.appDirectoryEmbedApplications || props.invalidAppDirectoryEmbedApplicationIds !== merged.invalidAppDirectoryEmbedApplicationIds || props.invalidApplicationIds !== merged.invalidApplicationIds || props.appDirectoryEmbedApplicationFetchStates !== merged.appDirectoryEmbedApplicationFetchStates || props.guildTemplates !== merged.guildTemplates || props.gameOrganizationInvites !== merged.gameOrganizationInvites || props.joinedGameOrganizationGuildIds !== merged.joinedGameOrganizationGuildIds || props.buildOverrides !== merged.buildOverrides || props.activityParticipants !== merged.activityParticipants || props.quests !== merged.quests || props.isFetchingCurrentQuests !== merged.isFetchingCurrentQuests || props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds || props.experimentEmbeds !== merged.experimentEmbeds;
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
                let tmp61 = null != experimentFromEmbedURL;
                if (tmp61) {
                  const legacyExperiments = props.experimentEmbeds.legacyExperiments;
                  let tmp63;
                  if (legacyExperiments != null) {
                    tmp63 = legacyExperiments[experimentFromEmbedURL];
                  }
                  const legacyExperiments2 = merged.experimentEmbeds.legacyExperiments;
                  let tmp65;
                  if (legacyExperiments2 != null) {
                    tmp65 = legacyExperiments2[experimentFromEmbedURL];
                  }
                  let tmp66 = tmp63 !== tmp65;
                  if (!tmp66) {
                    const legacyOverridesInfo = tmp62.experimentEmbeds.legacyOverridesInfo;
                    let tmp67;
                    if (legacyOverridesInfo != null) {
                      tmp67 = legacyOverridesInfo[experimentFromEmbedURL];
                    }
                    const legacyOverridesInfo2 = tmp64.experimentEmbeds.legacyOverridesInfo;
                    let tmp68;
                    if (legacyOverridesInfo2 != null) {
                      tmp68 = legacyOverridesInfo2[experimentFromEmbedURL];
                    }
                    tmp66 = tmp67 !== tmp68;
                  }
                  if (!tmp66) {
                    const apexExperiments = tmp62.experimentEmbeds.apexExperiments;
                    let tmp69;
                    if (apexExperiments != null) {
                      tmp69 = apexExperiments[experimentFromEmbedURL];
                    }
                    const apexExperiments2 = tmp64.experimentEmbeds.apexExperiments;
                    let tmp70;
                    if (apexExperiments2 != null) {
                      tmp70 = apexExperiments2[experimentFromEmbedURL];
                    }
                    tmp66 = tmp69 !== tmp70;
                  }
                  if (!tmp66) {
                    const apexOverridesInfo = tmp62.experimentEmbeds.apexOverridesInfo;
                    let tmp71;
                    if (apexOverridesInfo != null) {
                      tmp71 = apexOverridesInfo[experimentFromEmbedURL];
                    }
                    const apexOverridesInfo2 = tmp64.experimentEmbeds.apexOverridesInfo;
                    let tmp72;
                    if (apexOverridesInfo2 != null) {
                      tmp72 = apexOverridesInfo2[experimentFromEmbedURL];
                    }
                    tmp66 = tmp71 !== tmp72;
                  }
                  tmp61 = tmp66;
                }
                return tmp61;
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
                let tmp56 = state !== state1;
                if (tmp56) {
                  let state2;
                  if (value7 != null) {
                    state2 = value7.state;
                  }
                  tmp56 = state2 !== constants.RESOLVING;
                }
                if (!tmp56) {
                  tmp56 = applicationAssetFetchingIds !== applicationAssetFetchingIds2;
                }
                return tmp56;
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
                let tmp46 = state3 !== state4;
                if (tmp46) {
                  let state5;
                  if (value9 != null) {
                    state5 = value9.state;
                  }
                  tmp46 = state5 !== GuildTemplateStates.RESOLVING;
                }
                return tmp46;
              } else {
                if (CodedLink.CodedLinkType.EVENT !== type) {
                  if (CodedLink.CodedLinkType.CHANNEL_LINK !== type) {
                    if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                      const invalidAppDirectoryEmbedApplicationIds = props.invalidAppDirectoryEmbedApplicationIds;
                      const invalidAppDirectoryEmbedApplicationIds2 = merged.invalidAppDirectoryEmbedApplicationIds;
                      const tmp32 = props.appDirectoryEmbedApplications[code];
                      const tmp34 = merged.appDirectoryEmbedApplications[code];
                      const hasItem = invalidAppDirectoryEmbedApplicationIds.has(code);
                      let tmp38 = tmp32 !== tmp34;
                      const tmp36 = props.appDirectoryEmbedApplicationFetchStates[code];
                      const tmp37 = merged.appDirectoryEmbedApplicationFetchStates[code];
                      if (!tmp38) {
                        tmp38 = hasItem !== invalidAppDirectoryEmbedApplicationIds2.has(code);
                      }
                      if (!tmp38) {
                        tmp38 = tmp36 !== tmp37;
                      }
                      return tmp38;
                    } else if (CodedLink.CodedLinkType.ACTIVITY_BOOKMARK === type) {
                      return props.activityParticipants !== merged.activityParticipants || props.invalidApplicationIds !== merged.invalidApplicationIds || props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds;
                    } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
                      invites = props.invites;
                      const value10 = invites.get(code);
                      const invites2 = merged.invites;
                      const value11 = invites2.get(code);
                      let tmp21 = props.activityParticipants !== merged.activityParticipants || tmp17.invalidApplicationIds !== tmp19.invalidApplicationIds || tmp17.applicationAssetFetchingIds !== tmp19.applicationAssetFetchingIds;
                      if (!tmp21) {
                        let state6;
                        if (value10 != null) {
                          state6 = value10.state;
                        }
                        let state7;
                        if (value11 != null) {
                          state7 = value11.state;
                        }
                        let tmp25 = state6 !== state7;
                        if (tmp25) {
                          let state8;
                          if (value11 != null) {
                            state8 = value11.state;
                          }
                          tmp25 = state8 !== constants.RESOLVING;
                        }
                        tmp21 = tmp25;
                      }
                      return tmp21;
                    } else {
                      if (CodedLink.CodedLinkType.GUILD_PRODUCT !== type) {
                        if (CodedLink.CodedLinkType.SERVER_SHOP !== type) {
                          if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                            if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                              if (CodedLink.CodedLinkType.QUESTS_EMBED === type) {
                                return props.quests !== merged.quests || props.isFetchingCurrentQuests !== tmp15.isFetchingCurrentQuests;
                              } else {
                                if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                                  if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                    if (CodedLink.CodedLinkType.APP_OAUTH2_LINK === type) {
                                      return props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds || props.invalidApplicationIds !== tmp13.invalidApplicationIds;
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
                                                const tmp4 = merged;
                                                const tmp6 = props;
                                                if (!tmp7) {
                                                  let state9;
                                                  if (value12 != null) {
                                                    state9 = value12.state;
                                                  }
                                                  let tmp11 = state9 === constants.RESOLVED;
                                                  if (tmp11) {
                                                    const joinedGameOrganizationGuildIds = tmp6.joinedGameOrganizationGuildIds;
                                                    const joinedGameOrganizationGuildIds2 = tmp4.joinedGameOrganizationGuildIds;
                                                    const hasItem1 = joinedGameOrganizationGuildIds.includes(value12.guildId);
                                                    tmp11 = hasItem1 !== joinedGameOrganizationGuildIds2.includes(value12.guildId);
                                                  }
                                                  tmp7 = tmp11;
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
            state10 = tmp73.state;
          }
          let state11;
          if (merged.buildOverrides[code] != null) {
            state11 = tmp74.state;
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
