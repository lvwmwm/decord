// Module ID: 11627
// Function ID: 11628
// Name: MessagesUtils
// Dependencies: [1085, 7030, 5077, 8141, 5417, 2]

// Module 11627 (MessagesUtils)
import CodedLink from "CodedLink" /* 5077 */;
import MediaPostEmbedUtils from "MediaPostEmbedUtils" /* 5417 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 7030 */;
import ExperimentEmbedUtils from "ExperimentEmbedUtils" /* 8141 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let invites;

let c2;
let c3;
({ InviteStates: c2, MessageEmbedTypes: c3 } = Constants);
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
let obj = {
  messageAuthorActivitiesChanged(activity, props, merged) {
    return props.messageAuthorActivities !== merged.messageAuthorActivities && null != activity.activity && props.messageAuthorActivities[activity.author.id] !== merged.messageAuthorActivities[activity.author.id];
  },
  codedLinksChanged(codedLinks, props, merged) {
    let tmp = 0 !== codedLinks.codedLinks.length;
    if (tmp) {
      let someResult = props.invites !== merged.invites || props.appDirectoryEmbedApplications !== merged.appDirectoryEmbedApplications || props.invalidAppDirectoryEmbedApplicationIds !== merged.invalidAppDirectoryEmbedApplicationIds || props.invalidApplicationIds !== merged.invalidApplicationIds || props.appDirectoryEmbedApplicationFetchStates !== merged.appDirectoryEmbedApplicationFetchStates || props.guildTemplates !== merged.guildTemplates || props.gameOrganizationInvites !== merged.gameOrganizationInvites || props.buildOverrides !== merged.buildOverrides || props.activityParticipants !== merged.activityParticipants || props.quests !== merged.quests || props.isFetchingCurrentQuests !== merged.isFetchingCurrentQuests || props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds || props.experimentEmbeds !== merged.experimentEmbeds;
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
                let tmp55 = null != experimentFromEmbedURL;
                if (tmp55) {
                  const legacyExperiments = props.experimentEmbeds.legacyExperiments;
                  let tmp57;
                  if (legacyExperiments != null) {
                    tmp57 = legacyExperiments[experimentFromEmbedURL];
                  }
                  const legacyExperiments2 = merged.experimentEmbeds.legacyExperiments;
                  let tmp59;
                  if (legacyExperiments2 != null) {
                    tmp59 = legacyExperiments2[experimentFromEmbedURL];
                  }
                  let tmp60 = tmp57 !== tmp59;
                  if (!tmp60) {
                    const legacyOverridesInfo = tmp56.experimentEmbeds.legacyOverridesInfo;
                    let tmp61;
                    if (legacyOverridesInfo != null) {
                      tmp61 = legacyOverridesInfo[experimentFromEmbedURL];
                    }
                    const legacyOverridesInfo2 = tmp58.experimentEmbeds.legacyOverridesInfo;
                    let tmp62;
                    if (legacyOverridesInfo2 != null) {
                      tmp62 = legacyOverridesInfo2[experimentFromEmbedURL];
                    }
                    tmp60 = tmp61 !== tmp62;
                  }
                  if (!tmp60) {
                    const apexExperiments = tmp56.experimentEmbeds.apexExperiments;
                    let tmp63;
                    if (apexExperiments != null) {
                      tmp63 = apexExperiments[experimentFromEmbedURL];
                    }
                    const apexExperiments2 = tmp58.experimentEmbeds.apexExperiments;
                    let tmp64;
                    if (apexExperiments2 != null) {
                      tmp64 = apexExperiments2[experimentFromEmbedURL];
                    }
                    tmp60 = tmp63 !== tmp64;
                  }
                  if (!tmp60) {
                    const apexOverridesInfo = tmp56.experimentEmbeds.apexOverridesInfo;
                    let tmp65;
                    if (apexOverridesInfo != null) {
                      tmp65 = apexOverridesInfo[experimentFromEmbedURL];
                    }
                    const apexOverridesInfo2 = tmp58.experimentEmbeds.apexOverridesInfo;
                    let tmp66;
                    if (apexOverridesInfo2 != null) {
                      tmp66 = apexOverridesInfo2[experimentFromEmbedURL];
                    }
                    tmp60 = tmp65 !== tmp66;
                  }
                  tmp55 = tmp60;
                }
                return tmp55;
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
                let tmp50 = state !== state1;
                if (tmp50) {
                  let state2;
                  if (value7 != null) {
                    state2 = value7.state;
                  }
                  tmp50 = state2 !== constants.RESOLVING;
                }
                if (!tmp50) {
                  tmp50 = applicationAssetFetchingIds !== applicationAssetFetchingIds2;
                }
                return tmp50;
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
                let tmp40 = state3 !== state4;
                if (tmp40) {
                  let state5;
                  if (value9 != null) {
                    state5 = value9.state;
                  }
                  tmp40 = state5 !== GuildTemplateStates.RESOLVING;
                }
                return tmp40;
              } else {
                if (CodedLink.CodedLinkType.EVENT !== type) {
                  if (CodedLink.CodedLinkType.CHANNEL_LINK !== type) {
                    if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                      const invalidAppDirectoryEmbedApplicationIds = props.invalidAppDirectoryEmbedApplicationIds;
                      const invalidAppDirectoryEmbedApplicationIds2 = merged.invalidAppDirectoryEmbedApplicationIds;
                      const tmp26 = props.appDirectoryEmbedApplications[code];
                      const tmp28 = merged.appDirectoryEmbedApplications[code];
                      const hasItem = invalidAppDirectoryEmbedApplicationIds.has(code);
                      let tmp32 = tmp26 !== tmp28;
                      const tmp30 = props.appDirectoryEmbedApplicationFetchStates[code];
                      const tmp31 = merged.appDirectoryEmbedApplicationFetchStates[code];
                      if (!tmp32) {
                        tmp32 = hasItem !== invalidAppDirectoryEmbedApplicationIds2.has(code);
                      }
                      if (!tmp32) {
                        tmp32 = tmp30 !== tmp31;
                      }
                      return tmp32;
                    } else if (CodedLink.CodedLinkType.ACTIVITY_BOOKMARK === type) {
                      return props.activityParticipants !== merged.activityParticipants || props.invalidApplicationIds !== merged.invalidApplicationIds || props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds;
                    } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
                      invites = props.invites;
                      const value10 = invites.get(code);
                      const invites2 = merged.invites;
                      const value11 = invites2.get(code);
                      let tmp15 = props.activityParticipants !== merged.activityParticipants || tmp11.invalidApplicationIds !== tmp13.invalidApplicationIds || tmp11.applicationAssetFetchingIds !== tmp13.applicationAssetFetchingIds;
                      if (!tmp15) {
                        let state6;
                        if (value10 != null) {
                          state6 = value10.state;
                        }
                        let state7;
                        if (value11 != null) {
                          state7 = value11.state;
                        }
                        let tmp19 = state6 !== state7;
                        if (tmp19) {
                          let state8;
                          if (value11 != null) {
                            state8 = value11.state;
                          }
                          tmp19 = state8 !== constants.RESOLVING;
                        }
                        tmp15 = tmp19;
                      }
                      return tmp15;
                    } else {
                      if (CodedLink.CodedLinkType.GUILD_PRODUCT !== type) {
                        if (CodedLink.CodedLinkType.SERVER_SHOP !== type) {
                          if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                            if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                              if (CodedLink.CodedLinkType.QUESTS_EMBED === type) {
                                return props.quests !== merged.quests || props.isFetchingCurrentQuests !== tmp9.isFetchingCurrentQuests;
                              } else {
                                if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                                  if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                    if (CodedLink.CodedLinkType.APP_OAUTH2_LINK === type) {
                                      return props.applicationAssetFetchingIds !== merged.applicationAssetFetchingIds || props.invalidApplicationIds !== tmp7.invalidApplicationIds;
                                    } else {
                                      if (CodedLink.CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                        if (CodedLink.CodedLinkType.GAME_PROFILE !== type) {
                                          if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                                            if (CodedLink.CodedLinkType.USER_PROFILE !== type) {
                                              if (CodedLink.CodedLinkType.GAME_ORGANIZATION_INVITE === type) {
                                                const gameOrganizationInvites = props.gameOrganizationInvites;
                                                const gameOrganizationInvites2 = merged.gameOrganizationInvites;
                                                const value12 = gameOrganizationInvites.get(code);
                                                return value12 !== gameOrganizationInvites2.get(code);
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
          let state9;
          if (props.buildOverrides[code] != null) {
            state9 = tmp67.state;
          }
          let state10;
          if (merged.buildOverrides[code] != null) {
            state10 = tmp68.state;
          }
          return state9 !== state10;
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
