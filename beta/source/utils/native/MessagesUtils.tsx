// Module ID: 11313
// Function ID: 11314
// Name: MessagesUtils
// Dependencies: [1086, 6745, 4822, 7320, 4985, 2]

// Module 11313 (MessagesUtils)
import CodedLink from "CodedLink" /* 4822 */;
import MediaPostEmbedUtils from "MediaPostEmbedUtils" /* 4985 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 6745 */;
import ExperimentEmbedUtils from "ExperimentEmbedUtils" /* 7320 */;
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

let invites;

let c2;
let c3;
({ InviteStates: c2, MessageEmbedTypes: c3 } = Constants);
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
let obj = {
  messageAuthorActivitiesChanged(activity, props, messageAuthorActivities2) {
    return props.messageAuthorActivities !== messageAuthorActivities2.messageAuthorActivities && null != activity.activity && props.messageAuthorActivities[activity.author.id] !== messageAuthorActivities2.messageAuthorActivities[activity.author.id];
  },
  codedLinksChanged(codedLinks, props, invites2) {
    let tmp = 0 !== codedLinks.codedLinks.length;
    if (tmp) {
      let someResult = props.invites !== invites2.invites || props.appDirectoryEmbedApplications !== invites2.appDirectoryEmbedApplications || props.invalidAppDirectoryEmbedApplicationIds !== invites2.invalidAppDirectoryEmbedApplicationIds || props.invalidApplicationIds !== invites2.invalidApplicationIds || props.appDirectoryEmbedApplicationFetchStates !== invites2.appDirectoryEmbedApplicationFetchStates || props.guildTemplates !== invites2.guildTemplates || props.buildOverrides !== invites2.buildOverrides || props.activityParticipants !== invites2.activityParticipants || props.quests !== invites2.quests || props.isFetchingCurrentQuests !== invites2.isFetchingCurrentQuests || props.applicationAssetFetchingIds !== invites2.applicationAssetFetchingIds || props.experimentEmbeds !== invites2.experimentEmbeds;
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
                let tmp52 = null != experimentFromEmbedURL;
                if (tmp52) {
                  const legacyExperiments = props.experimentEmbeds.legacyExperiments;
                  let tmp54;
                  if (legacyExperiments != null) {
                    tmp54 = legacyExperiments[experimentFromEmbedURL];
                  }
                  const legacyExperiments2 = invites2.experimentEmbeds.legacyExperiments;
                  let tmp56;
                  if (legacyExperiments2 != null) {
                    tmp56 = legacyExperiments2[experimentFromEmbedURL];
                  }
                  let tmp57 = tmp54 !== tmp56;
                  if (!tmp57) {
                    const legacyOverridesInfo = tmp53.experimentEmbeds.legacyOverridesInfo;
                    let tmp58;
                    if (legacyOverridesInfo != null) {
                      tmp58 = legacyOverridesInfo[experimentFromEmbedURL];
                    }
                    const legacyOverridesInfo2 = tmp55.experimentEmbeds.legacyOverridesInfo;
                    let tmp59;
                    if (legacyOverridesInfo2 != null) {
                      tmp59 = legacyOverridesInfo2[experimentFromEmbedURL];
                    }
                    tmp57 = tmp58 !== tmp59;
                  }
                  if (!tmp57) {
                    const apexExperiments = tmp53.experimentEmbeds.apexExperiments;
                    let tmp60;
                    if (apexExperiments != null) {
                      tmp60 = apexExperiments[experimentFromEmbedURL];
                    }
                    const apexExperiments2 = tmp55.experimentEmbeds.apexExperiments;
                    let tmp61;
                    if (apexExperiments2 != null) {
                      tmp61 = apexExperiments2[experimentFromEmbedURL];
                    }
                    tmp57 = tmp60 !== tmp61;
                  }
                  if (!tmp57) {
                    const apexOverridesInfo = tmp53.experimentEmbeds.apexOverridesInfo;
                    let tmp62;
                    if (apexOverridesInfo != null) {
                      tmp62 = apexOverridesInfo[experimentFromEmbedURL];
                    }
                    const apexOverridesInfo2 = tmp55.experimentEmbeds.apexOverridesInfo;
                    let tmp63;
                    if (apexOverridesInfo2 != null) {
                      tmp63 = apexOverridesInfo2[experimentFromEmbedURL];
                    }
                    tmp57 = tmp62 !== tmp63;
                  }
                  tmp52 = tmp57;
                }
                return tmp52;
              } else if (CodedLink.CodedLinkType.INVITE === type) {
                const invites3 = props.invites;
                const value = invites3.get(code);
                const invites4 = invites2.invites;
                const value6 = invites4.get(code);
                let state;
                const applicationAssetFetchingIds = props.applicationAssetFetchingIds;
                const applicationAssetFetchingIds2 = invites2.applicationAssetFetchingIds;
                if (value != null) {
                  state = value.state;
                }
                let state1;
                if (value6 != null) {
                  state1 = value6.state;
                }
                let tmp47 = state !== state1;
                if (tmp47) {
                  let state2;
                  if (value6 != null) {
                    state2 = value6.state;
                  }
                  tmp47 = state2 !== constants.RESOLVING;
                }
                if (!tmp47) {
                  tmp47 = applicationAssetFetchingIds !== applicationAssetFetchingIds2;
                }
                return tmp47;
              } else if (CodedLink.CodedLinkType.TEMPLATE === type) {
                const guildTemplates = props.guildTemplates;
                const value7 = guildTemplates.get(code);
                const guildTemplates2 = invites2.guildTemplates;
                const value8 = guildTemplates2.get(code);
                let state3;
                if (value7 != null) {
                  state3 = value7.state;
                }
                let state4;
                if (value8 != null) {
                  state4 = value8.state;
                }
                let tmp37 = state3 !== state4;
                if (tmp37) {
                  let state5;
                  if (value8 != null) {
                    state5 = value8.state;
                  }
                  tmp37 = state5 !== GuildTemplateStates.RESOLVING;
                }
                return tmp37;
              } else {
                if (CodedLink.CodedLinkType.EVENT !== type) {
                  if (CodedLink.CodedLinkType.CHANNEL_LINK !== type) {
                    if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                      const invalidAppDirectoryEmbedApplicationIds = props.invalidAppDirectoryEmbedApplicationIds;
                      const invalidAppDirectoryEmbedApplicationIds2 = invites2.invalidAppDirectoryEmbedApplicationIds;
                      const tmp23 = props.appDirectoryEmbedApplications[code];
                      const tmp25 = invites2.appDirectoryEmbedApplications[code];
                      const hasItem = invalidAppDirectoryEmbedApplicationIds.has(code);
                      let tmp29 = tmp23 !== tmp25;
                      const tmp27 = props.appDirectoryEmbedApplicationFetchStates[code];
                      const tmp28 = invites2.appDirectoryEmbedApplicationFetchStates[code];
                      if (!tmp29) {
                        tmp29 = hasItem !== invalidAppDirectoryEmbedApplicationIds2.has(code);
                      }
                      if (!tmp29) {
                        tmp29 = tmp27 !== tmp28;
                      }
                      return tmp29;
                    } else if (CodedLink.CodedLinkType.ACTIVITY_BOOKMARK === type) {
                      return props.activityParticipants !== invites2.activityParticipants || props.invalidApplicationIds !== invites2.invalidApplicationIds || props.applicationAssetFetchingIds !== invites2.applicationAssetFetchingIds;
                    } else if (CodedLink.CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
                      invites = props.invites;
                      const value9 = invites.get(code);
                      invites2 = invites2.invites;
                      const value10 = invites2.get(code);
                      let tmp12 = props.activityParticipants !== invites2.activityParticipants || tmp8.invalidApplicationIds !== tmp10.invalidApplicationIds || tmp8.applicationAssetFetchingIds !== tmp10.applicationAssetFetchingIds;
                      if (!tmp12) {
                        let state6;
                        if (value9 != null) {
                          state6 = value9.state;
                        }
                        let state7;
                        if (value10 != null) {
                          state7 = value10.state;
                        }
                        let tmp16 = state6 !== state7;
                        if (tmp16) {
                          let state8;
                          if (value10 != null) {
                            state8 = value10.state;
                          }
                          tmp16 = state8 !== constants.RESOLVING;
                        }
                        tmp12 = tmp16;
                      }
                      return tmp12;
                    } else {
                      if (CodedLink.CodedLinkType.GUILD_PRODUCT !== type) {
                        if (CodedLink.CodedLinkType.SERVER_SHOP !== type) {
                          if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                            if (CodedLink.CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                              if (CodedLink.CodedLinkType.QUESTS_EMBED === type) {
                                return props.quests !== invites2.quests || props.isFetchingCurrentQuests !== tmp6.isFetchingCurrentQuests;
                              } else {
                                if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                                  if (CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                    if (CodedLink.CodedLinkType.APP_OAUTH2_LINK === type) {
                                      return props.applicationAssetFetchingIds !== invites2.applicationAssetFetchingIds || props.invalidApplicationIds !== tmp4.invalidApplicationIds;
                                    } else {
                                      if (CodedLink.CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                        if (CodedLink.CodedLinkType.GAME_PROFILE !== type) {
                                          if (CodedLink.CodedLinkType.GAME_SERVER_SHARE !== type) {
                                            if (CodedLink.CodedLinkType.USER_PROFILE !== type) {
                                              const _Error = Error;
                                              const _HermesInternal = HermesInternal;
                                              throw Error("Unknown coded link type: " + type);
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
            state9 = tmp64.state;
          }
          let state10;
          if (invites2.buildOverrides[code] != null) {
            state10 = tmp65.state;
          }
          return state9 !== state10;
        });
      }
      tmp = someResult;
    }
    return tmp;
  },
  giftCodesChanged(giftCodes, props, arg2) {
    let closure_1 = arg2;
    let someResult = 0 !== giftCodes.giftCodes.length;
    if (someResult) {
      giftCodes = giftCodes.giftCodes;
      someResult = giftCodes.some((item) => {
        const resolvedGiftCodes = props.resolvedGiftCodes;
        const resolvedGiftCodes2 = closure_1.resolvedGiftCodes;
        const hasItem = resolvedGiftCodes.includes(item);
        const resolvingGiftCodes = props.resolvingGiftCodes;
        const hasItem1 = resolvedGiftCodes2.includes(item);
        const resolvingGiftCodes2 = closure_1.resolvingGiftCodes;
        const hasItem2 = resolvingGiftCodes.includes(item);
        const acceptingGiftCodes = props.acceptingGiftCodes;
        const hasItem3 = resolvingGiftCodes2.includes(item);
        const acceptingGiftCodes2 = closure_1.acceptingGiftCodes;
        const hasItem4 = acceptingGiftCodes.includes(item);
        return true;
      });
    }
    return someResult;
  },
  mediaPostPreviewEmbedsChanged(embeds, props, arg2) {
    let closure_1 = arg2;
    embeds = embeds.embeds;
    const found = embeds.filter((type) => type.type === constants.POST_PREVIEW);
    const tmp = 0 !== found.length && found.some((url) => {
      const obj = MediaPostEmbedUtils;
      const mediaPostEmbedChannelId = obj.getMediaPostEmbedChannelId(url.url);
      return null != mediaPostEmbedChannelId && props.mediaPostPreviewEmbeds[mediaPostEmbedChannelId] !== closure_1.mediaPostPreviewEmbeds[mediaPostEmbedChannelId];
    });
    return tmp;
  }
};
const result = size.fileFinishedImporting("utils/native/MessagesUtils.tsx");

export default obj;
