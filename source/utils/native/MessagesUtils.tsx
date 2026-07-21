// Module ID: 11088
// Function ID: 86218
// Dependencies: []

// Module 11088
const _module = require(dependencyMap[0]);
({ InviteStates: closure_2, MessageEmbedTypes: closure_3 } = _module);
const GuildTemplateStates = require(dependencyMap[1]).GuildTemplateStates;
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("utils/native/MessagesUtils.tsx");

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
    const require = props;
    const dependencyMap = props2;
    let tmp = 0 !== codedLinks.codedLinks.length;
    if (tmp) {
      let someResult = props.invites !== props2.invites || props.appDirectoryEmbedApplications !== props2.appDirectoryEmbedApplications || props.invalidAppDirectoryEmbedApplicationIds !== props2.invalidAppDirectoryEmbedApplicationIds || props.invalidApplicationIds !== props2.invalidApplicationIds || props.appDirectoryEmbedApplicationFetchStates !== props2.appDirectoryEmbedApplicationFetchStates || props.guildTemplates !== props2.guildTemplates || props.buildOverrides !== props2.buildOverrides || props.activityParticipants !== props2.activityParticipants || props.quests !== props2.quests || props.isFetchingCurrentQuests !== props2.isFetchingCurrentQuests || props.applicationAssetFetchingIds !== props2.applicationAssetFetchingIds || props.experimentEmbeds !== props2.experimentEmbeds;
      if (someResult) {
        codedLinks = codedLinks.codedLinks;
        someResult = codedLinks.some((arg0, self, self2) => {
          let code;
          let type;
          ({ type, code } = arg0);
          if (self(self2[2]).CodedLinkType.BUILD_OVERRIDE !== type) {
            if (self(self2[2]).CodedLinkType.MANUAL_BUILD_OVERRIDE !== type) {
              if (self(self2[2]).CodedLinkType.EXPERIMENT === type) {
                const experimentFromEmbedURL = self(self2[3]).getExperimentFromEmbedURL(code);
                let tmp67 = null != experimentFromEmbedURL;
                if (tmp67) {
                  const legacyExperiments = self.experimentEmbeds.legacyExperiments;
                  let tmp69;
                  if (null != legacyExperiments) {
                    tmp69 = legacyExperiments[experimentFromEmbedURL];
                  }
                  const legacyExperiments2 = self2.experimentEmbeds.legacyExperiments;
                  let tmp71;
                  if (null != legacyExperiments2) {
                    tmp71 = legacyExperiments2[experimentFromEmbedURL];
                  }
                  let tmp72 = tmp69 !== tmp71;
                  if (!tmp72) {
                    const legacyOverridesInfo = self.experimentEmbeds.legacyOverridesInfo;
                    let tmp74;
                    if (null != legacyOverridesInfo) {
                      tmp74 = legacyOverridesInfo[experimentFromEmbedURL];
                    }
                    const legacyOverridesInfo2 = self2.experimentEmbeds.legacyOverridesInfo;
                    let tmp76;
                    if (null != legacyOverridesInfo2) {
                      tmp76 = legacyOverridesInfo2[experimentFromEmbedURL];
                    }
                    tmp72 = tmp74 !== tmp76;
                  }
                  if (!tmp72) {
                    const apexExperiments = self.experimentEmbeds.apexExperiments;
                    let tmp78;
                    if (null != apexExperiments) {
                      tmp78 = apexExperiments[experimentFromEmbedURL];
                    }
                    const apexExperiments2 = self2.experimentEmbeds.apexExperiments;
                    let tmp80;
                    if (null != apexExperiments2) {
                      tmp80 = apexExperiments2[experimentFromEmbedURL];
                    }
                    tmp72 = tmp78 !== tmp80;
                  }
                  if (!tmp72) {
                    const apexOverridesInfo = self.experimentEmbeds.apexOverridesInfo;
                    let tmp82;
                    if (null != apexOverridesInfo) {
                      tmp82 = apexOverridesInfo[experimentFromEmbedURL];
                    }
                    const apexOverridesInfo2 = self2.experimentEmbeds.apexOverridesInfo;
                    let tmp84;
                    if (null != apexOverridesInfo2) {
                      tmp84 = apexOverridesInfo2[experimentFromEmbedURL];
                    }
                    tmp72 = tmp82 !== tmp84;
                  }
                  tmp67 = tmp72;
                }
                return tmp67;
              } else if (self(self2[2]).CodedLinkType.INVITE === type) {
                const invites3 = self.invites;
                let value = invites3.get(code);
                const invites4 = self2.invites;
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
                  tmp60 = state2 !== constants.RESOLVING;
                }
                if (!tmp60) {
                  tmp60 = tmp56;
                }
                return tmp60;
              } else if (self(self2[2]).CodedLinkType.TEMPLATE === type) {
                const guildTemplates = self.guildTemplates;
                const value1 = guildTemplates.get(code);
                const guildTemplates2 = self2.guildTemplates;
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
                  tmp49 = state5 !== constants2.RESOLVING;
                }
                return tmp49;
              } else {
                if (self(self2[2]).CodedLinkType.EVENT !== type) {
                  if (self(self2[2]).CodedLinkType.CHANNEL_LINK !== type) {
                    if (self(self2[2]).CodedLinkType.APP_DIRECTORY_PROFILE === type) {
                      const invalidAppDirectoryEmbedApplicationIds = self.invalidAppDirectoryEmbedApplicationIds;
                      const invalidAppDirectoryEmbedApplicationIds2 = self2.invalidAppDirectoryEmbedApplicationIds;
                      const hasItem = invalidAppDirectoryEmbedApplicationIds.has(code);
                      let tmp41 = self.appDirectoryEmbedApplications[code] !== self2.appDirectoryEmbedApplications[code];
                      if (!tmp41) {
                        tmp41 = hasItem !== invalidAppDirectoryEmbedApplicationIds2.has(code);
                      }
                      if (!tmp41) {
                        tmp41 = self.appDirectoryEmbedApplicationFetchStates[code] !== self2.appDirectoryEmbedApplicationFetchStates[code];
                      }
                      return tmp41;
                    } else if (self(self2[2]).CodedLinkType.ACTIVITY_BOOKMARK === type) {
                      let tmp33 = self.activityParticipants !== self2.activityParticipants;
                      if (!tmp33) {
                        tmp33 = self.invalidApplicationIds !== self2.invalidApplicationIds;
                      }
                      if (!tmp33) {
                        tmp33 = self.applicationAssetFetchingIds !== self2.applicationAssetFetchingIds;
                      }
                      return tmp33;
                    } else if (self(self2[2]).CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
                      const invites = self.invites;
                      const value3 = invites.get(code);
                      const invites2 = self2.invites;
                      const value4 = invites2.get(code);
                      let tmp20 = self.activityParticipants !== self2.activityParticipants;
                      if (!tmp20) {
                        tmp20 = self.invalidApplicationIds !== self2.invalidApplicationIds;
                      }
                      if (!tmp20) {
                        tmp20 = self.applicationAssetFetchingIds !== self2.applicationAssetFetchingIds;
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
                          tmp28 = state8 !== constants.RESOLVING;
                        }
                        tmp20 = tmp28;
                      }
                      return tmp20;
                    } else {
                      if (self(self2[2]).CodedLinkType.GUILD_PRODUCT !== type) {
                        if (self(self2[2]).CodedLinkType.SERVER_SHOP !== type) {
                          if (self(self2[2]).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                            if (self(self2[2]).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                              if (self(self2[2]).CodedLinkType.QUESTS_EMBED === type) {
                                let tmp13 = self.quests !== self2.quests;
                                if (!tmp13) {
                                  tmp13 = self.isFetchingCurrentQuests !== self2.isFetchingCurrentQuests;
                                }
                                return tmp13;
                              } else {
                                if (self(self2[2]).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
                                  if (self(self2[2]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU !== type) {
                                    if (self(self2[2]).CodedLinkType.APP_OAUTH2_LINK === type) {
                                      let tmp8 = self.applicationAssetFetchingIds !== self2.applicationAssetFetchingIds;
                                      if (!tmp8) {
                                        tmp8 = self.invalidApplicationIds !== self2.invalidApplicationIds;
                                      }
                                      return tmp8;
                                    } else {
                                      if (self(self2[2]).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                                        if (self(self2[2]).CodedLinkType.GAME_PROFILE !== type) {
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
          if (null != self.buildOverrides[code]) {
            state9 = tmp85.state;
          }
          let state10;
          if (null != self2.buildOverrides[code]) {
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
    const require = props;
    const dependencyMap = props2;
    let someResult = 0 !== giftCodes.giftCodes.length;
    if (someResult) {
      giftCodes = giftCodes.giftCodes;
      someResult = giftCodes.some((arg0, self, self2) => {
        const resolvedGiftCodes = self.resolvedGiftCodes;
        const resolvedGiftCodes2 = self2.resolvedGiftCodes;
        const hasItem = resolvedGiftCodes.includes(arg0);
        const resolvingGiftCodes = self.resolvingGiftCodes;
        const hasItem1 = resolvedGiftCodes2.includes(arg0);
        const resolvingGiftCodes2 = self2.resolvingGiftCodes;
        const hasItem2 = resolvingGiftCodes.includes(arg0);
        const acceptingGiftCodes = self.acceptingGiftCodes;
        const hasItem3 = resolvingGiftCodes2.includes(arg0);
        const acceptingGiftCodes2 = self2.acceptingGiftCodes;
        const hasItem4 = acceptingGiftCodes.includes(arg0);
        return true;
      });
    }
    return someResult;
  },
  mediaPostPreviewEmbedsChanged(embeds, props, props2) {
    const require = props;
    const dependencyMap = props2;
    embeds = embeds.embeds;
    const found = embeds.filter((type) => type.type === constants.POST_PREVIEW);
    return 0 !== found.length && found.some((url) => {
      const mediaPostEmbedChannelId = arg1(arg2[4]).getMediaPostEmbedChannelId(url.url);
      let tmp2 = null != mediaPostEmbedChannelId;
      if (tmp2) {
        tmp2 = arg1.mediaPostPreviewEmbeds[mediaPostEmbedChannelId] !== arg2.mediaPostPreviewEmbeds[mediaPostEmbedChannelId];
      }
      return tmp2;
    });
  }
};
