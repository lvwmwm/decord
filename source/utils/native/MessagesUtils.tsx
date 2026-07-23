// Module ID: 11099
// Function ID: 86281
// Dependencies: [653, 5720, 4119, 7781, 4315, 2]

// Module 11099
import ME from "ME";
import { GuildTemplateStates } from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD";

let closure_2;
let closure_3;
({ InviteStates: closure_2, MessageEmbedTypes: closure_3 } = ME);
const result = require("CodedLinkType").fileFinishedImporting("utils/native/MessagesUtils.tsx");

export default {
  messageAuthorActivitiesChanged(activity, props, props2) {
    let tmp = props.messageAuthorActivities !== props2.messageAuthorActivities;
    if (tmp) {
      tmp = null != activity.activity;
    }
    if (tmp) {
      tmp = props.messageAuthorActivities[activity.author.id] !== props2.messageAuthorActivities[activity.author.id];
    }
    return tmp;
  },
  codedLinksChanged(codedLinks, props, props2) {
    let closure_0 = props;
    let closure_1 = props2;
    let tmp = 0 !== codedLinks.codedLinks.length;
    if (tmp) {
      let someResult = props.invites !== props2.invites || props.appDirectoryEmbedApplications !== props2.appDirectoryEmbedApplications || props.invalidAppDirectoryEmbedApplicationIds !== props2.invalidAppDirectoryEmbedApplicationIds || props.invalidApplicationIds !== props2.invalidApplicationIds || props.appDirectoryEmbedApplicationFetchStates !== props2.appDirectoryEmbedApplicationFetchStates || props.guildTemplates !== props2.guildTemplates || props.buildOverrides !== props2.buildOverrides || props.activityParticipants !== props2.activityParticipants || props.quests !== props2.quests || props.isFetchingCurrentQuests !== props2.isFetchingCurrentQuests || props.applicationAssetFetchingIds !== props2.applicationAssetFetchingIds || props.experimentEmbeds !== props2.experimentEmbeds;
      if (someResult) {
        codedLinks = codedLinks.codedLinks;
        someResult = codedLinks.some((arg0) => {
          let code;
          let type;
          ({ type, code } = arg0);
          if (props(props2[2]).CodedLinkType.BUILD_OVERRIDE !== type) {
            if (props(props2[2]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
              if (props(props2[2]).CodedLinkType.EXPERIMENT === type) {
                const experimentFromEmbedURL = props(props2[3]).getExperimentFromEmbedURL(code);
                let tmp67 = null != experimentFromEmbedURL;
                if (tmp67) {
                  const legacyExperiments = props.experimentEmbeds.legacyExperiments;
                  let tmp69;
                  if (null != legacyExperiments) {
                    tmp69 = legacyExperiments[experimentFromEmbedURL];
                  }
                  const legacyExperiments2 = props2.experimentEmbeds.legacyExperiments;
                  let tmp71;
                  if (null != legacyExperiments2) {
                    tmp71 = legacyExperiments2[experimentFromEmbedURL];
                  }
                  let tmp72 = tmp69 !== tmp71;
                  if (!tmp72) {
                    const legacyOverridesInfo = props.experimentEmbeds.legacyOverridesInfo;
                    let tmp74;
                    if (null != legacyOverridesInfo) {
                      tmp74 = legacyOverridesInfo[experimentFromEmbedURL];
                    }
                    const legacyOverridesInfo2 = props2.experimentEmbeds.legacyOverridesInfo;
                    let tmp76;
                    if (null != legacyOverridesInfo2) {
                      tmp76 = legacyOverridesInfo2[experimentFromEmbedURL];
                    }
                    tmp72 = tmp74 !== tmp76;
                  }
                  if (!tmp72) {
                    const apexExperiments = props.experimentEmbeds.apexExperiments;
                    let tmp78;
                    if (null != apexExperiments) {
                      tmp78 = apexExperiments[experimentFromEmbedURL];
                    }
                    const apexExperiments2 = props2.experimentEmbeds.apexExperiments;
                    let tmp80;
                    if (null != apexExperiments2) {
                      tmp80 = apexExperiments2[experimentFromEmbedURL];
                    }
                    tmp72 = tmp78 !== tmp80;
                  }
                  if (!tmp72) {
                    const apexOverridesInfo = props.experimentEmbeds.apexOverridesInfo;
                    let tmp82;
                    if (null != apexOverridesInfo) {
                      tmp82 = apexOverridesInfo[experimentFromEmbedURL];
                    }
                    const apexOverridesInfo2 = props2.experimentEmbeds.apexOverridesInfo;
                    let tmp84;
                    if (null != apexOverridesInfo2) {
                      tmp84 = apexOverridesInfo2[experimentFromEmbedURL];
                    }
                    tmp72 = tmp82 !== tmp84;
                  }
                  tmp67 = tmp72;
                }
                return tmp67;
              } else if (props(props2[2]).CodedLinkType.INVITE === type) {
                const invites3 = props.invites;
                let value = invites3.get(code);
                const invites4 = props2.invites;
                value = invites4.get(code);
                let state;
                if (null != value) {
                  state = value.state;
                }
                let state1;
                if (null != value) {
                  state1 = value.state;
                }
                let tmp60 = state !== state1;
                if (tmp60) {
                  let state2;
                  if (null != value) {
                    state2 = value.state;
                  }
                  tmp60 = state2 !== outer1_2.RESOLVING;
                }
                if (!tmp60) {
                  tmp60 = tmp56;
                }
                return tmp60;
              } else if (props(props2[2]).CodedLinkType.TEMPLATE === type) {
                const guildTemplates = props.guildTemplates;
                const value1 = guildTemplates.get(code);
                const guildTemplates2 = props2.guildTemplates;
                const value2 = guildTemplates2.get(code);
                let state3;
                if (null != value1) {
                  state3 = value1.state;
                }
                let state4;
                if (null != value2) {
                  state4 = value2.state;
                }
                let tmp49 = state3 !== state4;
                if (tmp49) {
                  let state5;
                  if (null != value2) {
                    state5 = value2.state;
                  }
                  tmp49 = state5 !== outer1_4.RESOLVING;
                }
                return tmp49;
              } else {
                if (props(props2[2]).CodedLinkType.EVENT !== type) {
                  if (props(props2[2]).CodedLinkType.CHANNEL_LINK !== type) {
                    if (props(props2[2]).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                      const invalidAppDirectoryEmbedApplicationIds = props.invalidAppDirectoryEmbedApplicationIds;
                      const invalidAppDirectoryEmbedApplicationIds2 = props2.invalidAppDirectoryEmbedApplicationIds;
                      const hasItem = invalidAppDirectoryEmbedApplicationIds.has(code);
                      let tmp41 = props.appDirectoryEmbedApplications[code] !== props2.appDirectoryEmbedApplications[code];
                      if (!tmp41) {
                        tmp41 = hasItem !== invalidAppDirectoryEmbedApplicationIds2.has(code);
                      }
                      if (!tmp41) {
                        tmp41 = props.appDirectoryEmbedApplicationFetchStates[code] !== props2.appDirectoryEmbedApplicationFetchStates[code];
                      }
                      return tmp41;
                    } else if (props(props2[2]).CodedLinkType.ACTIVITY_BOOKMARK === type) {
                      let tmp33 = props.activityParticipants !== props2.activityParticipants;
                      if (!tmp33) {
                        tmp33 = props.invalidApplicationIds !== props2.invalidApplicationIds;
                      }
                      if (!tmp33) {
                        tmp33 = props.applicationAssetFetchingIds !== props2.applicationAssetFetchingIds;
                      }
                      return tmp33;
                    } else if (props(props2[2]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
                      const invites = props.invites;
                      const value3 = invites.get(code);
                      const invites2 = props2.invites;
                      const value4 = invites2.get(code);
                      let tmp20 = props.activityParticipants !== props2.activityParticipants;
                      if (!tmp20) {
                        tmp20 = props.invalidApplicationIds !== props2.invalidApplicationIds;
                      }
                      if (!tmp20) {
                        tmp20 = props.applicationAssetFetchingIds !== props2.applicationAssetFetchingIds;
                      }
                      if (!tmp20) {
                        let state6;
                        if (null != value3) {
                          state6 = value3.state;
                        }
                        let state7;
                        if (null != value4) {
                          state7 = value4.state;
                        }
                        let tmp28 = state6 !== state7;
                        if (tmp28) {
                          let state8;
                          if (null != value4) {
                            state8 = value4.state;
                          }
                          tmp28 = state8 !== outer1_2.RESOLVING;
                        }
                        tmp20 = tmp28;
                      }
                      return tmp20;
                    } else {
                      if (props(props2[2]).CodedLinkType.GUILD_PRODUCT !== type) {
                        if (props(props2[2]).CodedLinkType.SERVER_SHOP !== type) {
                          if (props(props2[2]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                            if (props(props2[2]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                              if (props(props2[2]).CodedLinkType.QUESTS_EMBED === type) {
                                let tmp13 = props.quests !== props2.quests;
                                if (!tmp13) {
                                  tmp13 = props.isFetchingCurrentQuests !== props2.isFetchingCurrentQuests;
                                }
                                return tmp13;
                              } else {
                                if (props(props2[2]).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                                  if (props(props2[2]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                    if (props(props2[2]).CodedLinkType.APP_OAUTH2_LINK === type) {
                                      let tmp8 = props.applicationAssetFetchingIds !== props2.applicationAssetFetchingIds;
                                      if (!tmp8) {
                                        tmp8 = props.invalidApplicationIds !== props2.invalidApplicationIds;
                                      }
                                      return tmp8;
                                    } else {
                                      if (props(props2[2]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                        if (props(props2[2]).CodedLinkType.GAME_PROFILE !== type) {
                                          const _Error = Error;
                                          const _HermesInternal = HermesInternal;
                                          throw Error("Unknown coded link type: " + type);
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
          if (null != props.buildOverrides[code]) {
            state9 = tmp85.state;
          }
          let state10;
          if (null != props2.buildOverrides[code]) {
            state10 = tmp86.state;
          }
          return state9 !== state10;
        });
      }
      tmp = someResult;
    }
    return tmp;
  },
  giftCodesChanged(giftCodes, props, props2) {
    let closure_0 = props;
    let closure_1 = props2;
    let someResult = 0 !== giftCodes.giftCodes.length;
    if (someResult) {
      giftCodes = giftCodes.giftCodes;
      someResult = giftCodes.some((arg0) => {
        const resolvedGiftCodes = props.resolvedGiftCodes;
        const resolvedGiftCodes2 = props2.resolvedGiftCodes;
        const hasItem = resolvedGiftCodes.includes(arg0);
        const resolvingGiftCodes = props.resolvingGiftCodes;
        const hasItem1 = resolvedGiftCodes2.includes(arg0);
        const resolvingGiftCodes2 = props2.resolvingGiftCodes;
        const hasItem2 = resolvingGiftCodes.includes(arg0);
        const acceptingGiftCodes = props.acceptingGiftCodes;
        const hasItem3 = resolvingGiftCodes2.includes(arg0);
        const acceptingGiftCodes2 = props2.acceptingGiftCodes;
        const hasItem4 = acceptingGiftCodes.includes(arg0);
        return true;
      });
    }
    return someResult;
  },
  mediaPostPreviewEmbedsChanged(embeds, props, props2) {
    let closure_0 = props;
    let closure_1 = props2;
    embeds = embeds.embeds;
    const found = embeds.filter((type) => type.type === outer1_3.POST_PREVIEW);
    return 0 !== found.length && found.some((url) => {
      const mediaPostEmbedChannelId = props(props2[4]).getMediaPostEmbedChannelId(url.url);
      let tmp2 = null != mediaPostEmbedChannelId;
      if (tmp2) {
        tmp2 = props.mediaPostPreviewEmbeds[mediaPostEmbedChannelId] !== props2.mediaPostPreviewEmbeds[mediaPostEmbedChannelId];
      }
      return tmp2;
    });
  }
};
