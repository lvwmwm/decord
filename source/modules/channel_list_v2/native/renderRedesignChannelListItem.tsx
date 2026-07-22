// Module ID: 14901
// Function ID: 112255
// Name: hasGuildActions
// Dependencies: []
// Exports: calculateVoiceSummary, getChannelListItemSize, getChannelListSectionFooterSize, getChannelListSectionHasFooterDivider, getChannelListSectionHeaderSize, getFastListRecyclerKey, renderChannelListItem, renderChannelListSectionFooter, renderChannelListSectionHeader

// Module 14901 (hasGuildActions)
function hasGuildActions(getGuildActionSection) {
  const guildActionSection = getGuildActionSection.getGuildActionSection();
  if (guildActionSection.isEmpty()) {
    return false;
  } else {
    const rows = guildActionSection.getRows();
    let tmp = 1 === rows.length;
    if (tmp) {
      tmp = rows[0] === constants2.GUILD_SCHEDULED_EVENTS;
    }
    return !tmp;
  }
}
function renderThreads(channel, selectedChannelId2) {
  selectedChannelId2 = channel;
  const importDefault = selectedChannelId2;
  const threadIds = channel.threadIds;
  return threadIds.map((threadId, threadIndex) => {
    let tmp = null;
    if (null != channel.getChannel(threadId)) {
      let obj = {};
      obj = { threadId, threadIndex, threadCount: threadId.threadCount, selected: threadIndex === threadId };
      obj.children = callback(threadIndex(closure_2[35]), obj);
      tmp = callback(closure_3, obj, threadId);
    }
    return tmp;
  });
}
function calculateVoiceChannelHeaderInfo(getCategoryFromSection) {
  const categoryFromSection = getCategoryFromSection.getCategoryFromSection(getCategoryFromSection.voiceChannelsSectionNumber);
  let flag = false;
  let flag2 = false;
  if (!tmp) {
    let flag3 = false;
    if (categoryFromSection.isCollapsed) {
      flag3 = true;
    }
    flag = true;
    flag2 = flag3;
  }
  const obj = { showDivider: flag, isCollapsed: flag2 };
  return obj;
}
function calculateVoiceChannelButtonInfo(getCategoryFromSection, section) {
  const categoryFromSection = getCategoryFromSection.getCategoryFromSection(section);
  if (null != categoryFromSection) {
    const obj = { render: true, lastShownChannelActive: closure_9.countVoiceStatesForChannel(categoryFromSection.getShownChannelIds()[categoryFromSection.getShownChannelIds(categoryFromSection).length - 1]) > 0 };
    return obj;
  }
  return { "Bool(false)": true, "Bool(false)": true };
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ THREADED_CHANNEL_TYPES: closure_5, THREAD_CHANNEL_TYPES: closure_6 } = arg1(dependencyMap[3]));
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const tmp3 = arg1(dependencyMap[3]);
({ CATEGORY_MARGIN_TOP: closure_10, getScaledCategoryRowHeight: closure_11, getScaledChannelRowHeight: closure_12, getScaledChannelSubtitleHeight: closure_13, STICKY_HEADER_MARGIN_BOTTOM: closure_14 } = arg1(dependencyMap[7]));
const StaticChannelRoute = arg1(dependencyMap[8]).StaticChannelRoute;
const tmp4 = arg1(dependencyMap[7]);
({ ChannelListChannelNoticeRow: closure_16, ChannelListGuildActionRow: closure_17 } = arg1(dependencyMap[9]));
const tmp5 = arg1(dependencyMap[9]);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = arg1(dependencyMap[10]));
let obj = { nonChannelContainer: { marginHorizontal: 16 } };
obj = { marginTop: arg1(dependencyMap[11]).LIVE_CHANNEL_NOTICE_MARGIN_TOP, marginBottom: arg1(dependencyMap[11]).LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM, marginHorizontal: 16 };
obj.liveChannelNotice = obj;
obj = { marginTop: arg1(dependencyMap[12]).GAME_CLAIM_NOTICE_MARGIN_TOP, marginBottom: arg1(dependencyMap[12]).GAME_CLAIM_NOTICE_MARGIN_BOTTOM, marginHorizontal: 16 };
obj.gameClaimNotice = obj;
const tmp6 = arg1(dependencyMap[10]);
obj.applicationAccountLinkNotice = { marginTop: arg1(dependencyMap[13]).ACCOUNT_LINK_BANNER_MARGIN_TOP, marginBottom: arg1(dependencyMap[13]).ACCOUNT_LINK_BANNER_MARGIN_BOTTOM, marginHorizontal: 16 };
const obj1 = { marginTop: arg1(dependencyMap[13]).ACCOUNT_LINK_BANNER_MARGIN_TOP, marginBottom: arg1(dependencyMap[13]).ACCOUNT_LINK_BANNER_MARGIN_BOTTOM, marginHorizontal: 16 };
obj.showAllVoiceChannelsButtonLastShownChannelActive = { marginHorizontal: 16, marginTop: importDefault(dependencyMap[14]).space.PX_16 };
const obj2 = { marginHorizontal: 16, marginTop: importDefault(dependencyMap[14]).space.PX_16 };
obj.showAllVoiceChannelsButtonLastShownChannelInactive = { marginHorizontal: 16, marginTop: importDefault(dependencyMap[14]).space.PX_8 };
const obj3 = { marginHorizontal: 16, marginTop: importDefault(dependencyMap[14]).space.PX_8 };
const result = arg1(dependencyMap[47]).fileFinishedImporting("modules/channel_list_v2/native/renderRedesignChannelListItem.tsx");

export const getFastListRecyclerKey = function getFastListRecyclerKey(guildChannels, arg1, section, row) {
  if (arg1 === arg1(dependencyMap[15]).FastListItemTypes.ITEM) {
    if (null != row) {
      if (arg1(dependencyMap[16]).SECTION_INDEX_CHANNEL_NOTICES === section) {
        const channelNoticeSection = guildChannels.getChannelNoticeSection();
        let id = channelNoticeSection.getRow(row);
      } else if (arg1(dependencyMap[16]).SECTION_INDEX_GUILD_ACTIONS === section) {
        const guildActionSection = guildChannels.getGuildActionSection();
        id = guildActionSection.getRow(row);
      } else {
        const channelFromSectionRow = guildChannels.getChannelFromSectionRow(section, row);
        if (null != channelFromSectionRow) {
          const channel = channelFromSectionRow.channel;
          if (null != channel) {
            id = channel.id;
          }
        }
      }
      if (null != id) {
        const _HermesInternal2 = HermesInternal;
        return "" + guildChannels.id + ":SECTION:" + section + ":ITEM:" + id;
      }
    }
  } else if (arg1 === arg1(dependencyMap[15]).FastListItemTypes.SECTION) {
    const _HermesInternal = HermesInternal;
    return "" + guildChannels.id + ":SECTION:" + section;
  }
};
export const renderChannelListSectionHeader = function renderChannelListSectionHeader(guildChannels, recentsSectionNumber, recentlyActiveChannelsEnabled, withMarginTop, categoryStyles, isRefreshEnabled) {
  if (guildChannels.favoritesSectionNumber === recentsSectionNumber) {
    let obj = {};
    const intl2 = recentsSectionNumber(dependencyMap[18]).intl;
    obj.name = intl2.string(recentsSectionNumber(dependencyMap[18]).t.mlPMCy);
    obj.withMarginTop = withMarginTop;
    obj.styles = categoryStyles;
    obj.isRefreshEnabled = isRefreshEnabled;
    return recentsSectionNumber(dependencyMap[17]).renderCategoryItem(obj);
  } else if (guildChannels.recentsSectionNumber === recentsSectionNumber) {
    const tmp23 = recentsSectionNumber(dependencyMap[17]);
    if (recentlyActiveChannelsEnabled) {
      obj = { guildId: guildChannels.id, withMarginTop };
      let tmp20Result = tmp20(tmp23.RecentlyActiveCategory, obj);
    } else {
      const obj1 = { guildId: guildChannels.id };
      const categoryFromSection = guildChannels.getCategoryFromSection(recentsSectionNumber);
      let shownChannelAndThreadIds;
      if (null != categoryFromSection) {
        shownChannelAndThreadIds = categoryFromSection.getShownChannelAndThreadIds();
      }
      if (null == shownChannelAndThreadIds) {
        shownChannelAndThreadIds = [];
      }
      obj1.channelIds = shownChannelAndThreadIds;
      obj1.withMarginTop = withMarginTop;
      tmp20Result = tmp20(tmp23.SuggestedCategory, obj1);
    }
    return tmp20Result;
  } else if (guildChannels.voiceChannelsSectionNumber === recentsSectionNumber) {
    const tmp10 = calculateVoiceChannelHeaderInfo(guildChannels);
    const obj2 = {};
    let tmp13 = null;
    if (tmp10.showDivider) {
      tmp13 = callback4(importDefault(dependencyMap[19]), {});
    }
    const items = [tmp13, ];
    let renderCategoryItemResult = null;
    if (tmp10.isCollapsed) {
      let obj3 = recentsSectionNumber(dependencyMap[17]);
      obj3 = {};
      const intl = recentsSectionNumber(dependencyMap[18]).intl;
      obj3.name = intl.string(recentsSectionNumber(dependencyMap[18]).t.V/u9Dy);
      obj3.styles = categoryStyles;
      obj3.isRefreshEnabled = isRefreshEnabled;
      renderCategoryItemResult = obj3.renderCategoryItem(obj3);
    }
    items[1] = renderCategoryItemResult;
    obj2.children = items;
    return closure_19(View, obj2);
  } else {
    obj = recentsSectionNumber(dependencyMap[20]);
    if (obj.isNamedCategorySection(recentsSectionNumber)) {
      const namedCategoryFromSection = guildChannels.getNamedCategoryFromSection(recentsSectionNumber);
      let tmp5 = null;
      if (null != namedCategoryFromSection) {
        const obj4 = { channel: namedCategoryFromSection.record, withMarginTop };
        tmp5 = callback4(recentsSectionNumber(dependencyMap[17]).CategoryChannel, obj4);
      }
      return tmp5;
    } else {
      return null;
    }
  }
};
export const getChannelListSectionHeaderSize = function getChannelListSectionHeaderSize(guildChannels, section, fontScale, arg3) {
  const tmp = callback(fontScale);
  let num = 0;
  if (arg3) {
    num = closure_10;
  }
  if (guildChannels.favoritesSectionNumber !== section) {
    if (guildChannels.recentsSectionNumber !== section) {
      if (guildChannels.voiceChannelsSectionNumber === section) {
        const tmp6 = calculateVoiceChannelHeaderInfo(guildChannels);
        let num5 = 0;
        if (tmp6.showDivider) {
          num5 = section(dependencyMap[19]).DIVIDER_HEIGHT;
        }
        let sum = num5;
        if (tmp6.isCollapsed) {
          sum = num5 + tmp;
        }
        return sum;
      } else {
        let num3 = 0;
        if (obj.isNamedCategorySection(section)) {
          let num4 = 0;
          if (null != guildChannels.getNamedCategoryFromSection(section)) {
            num4 = tmp + num;
          }
          num3 = num4;
        }
        return num3;
      }
    }
  }
  return tmp + num;
};
export const renderChannelListSectionFooter = function renderChannelListSectionFooter(guildChannels, section, ref, result, arg4) {
  let tmp = null;
  if (null != result) {
    let obj = { guildId: guildChannels.id, channels: result };
    tmp = callback4(section(dependencyMap[17]).RedesignVoiceUserSummary, obj);
  }
  if (section(dependencyMap[16]).SECTION_INDEX_CHANNEL_NOTICES === section) {
    return null;
  } else if (section(dependencyMap[16]).SECTION_INDEX_GUILD_ACTIONS === section) {
    let tmp24 = null;
    if (arg4) {
      tmp24 = null;
      if (hasGuildActions(guildChannels)) {
        tmp24 = callback4(importDefault(dependencyMap[19]), {});
      }
    }
    return tmp24;
  } else {
    if (guildChannels.favoritesSectionNumber !== section) {
      if (guildChannels.recentsSectionNumber !== section) {
        if (guildChannels.voiceChannelsSectionNumber === section) {
          if (tmp6.render) {
            obj = {};
            const items = [tmp, ];
            obj = {};
            obj.style = tmp7 ? obj.showAllVoiceChannelsButtonLastShownChannelActive : obj.showAllVoiceChannelsButtonLastShownChannelInactive;
            let obj1 = { guildId: guildChannels.id, section, listRef: ref };
            obj.children = callback4(importDefault(dependencyMap[21]), obj1);
            items[1] = callback4(View, obj);
            obj.children = items;
            return closure_19(View, obj);
          }
          const tmp6 = calculateVoiceChannelButtonInfo(guildChannels, section);
        }
        obj1 = section(dependencyMap[20]);
        let tmp10 = null;
        if (obj1.isNamedCategorySection(section)) {
          tmp10 = tmp;
        }
        return tmp10;
      }
    }
    return callback4(importDefault(dependencyMap[19]), {});
  }
};
export const getChannelListSectionHasFooterDivider = function getChannelListSectionHasFooterDivider(guildChannels, arg1, arg2) {
  let tmp = arg2;
  if (arg1(dependencyMap[16]).SECTION_INDEX_CHANNEL_NOTICES === arg1) {
    return false;
  } else if (arg1(dependencyMap[16]).SECTION_INDEX_GUILD_ACTIONS === arg1) {
    if (tmp) {
      tmp = hasGuildActions(guildChannels);
    }
    return tmp;
  } else {
    if (guildChannels.favoritesSectionNumber !== arg1) {
      if (guildChannels.recentsSectionNumber !== arg1) {
        const voiceChannelsSectionNumber = guildChannels.voiceChannelsSectionNumber;
        return false;
      }
    }
    return true;
  }
};
export const getChannelListSectionFooterSize = function getChannelListSectionFooterSize(guildChannels, section, result, arg3) {
  let marginTop;
  let showAllVoiceChannelsButtonLastShownChannelActive;
  let num = 0;
  if (null != result) {
    num = section(dependencyMap[22]).VOICE_USER_SUMMARY_HEIGHT;
  }
  if (section(dependencyMap[16]).SECTION_INDEX_CHANNEL_NOTICES === section) {
    return 0;
  } else if (section(dependencyMap[16]).SECTION_INDEX_GUILD_ACTIONS === section) {
    let num7 = 0;
    if (arg3) {
      num7 = 0;
      if (hasGuildActions(guildChannels)) {
        num7 = section(dependencyMap[19]).DIVIDER_HEIGHT;
      }
    }
    return num7;
  } else {
    if (guildChannels.favoritesSectionNumber !== section) {
      if (guildChannels.recentsSectionNumber !== section) {
        if (guildChannels.voiceChannelsSectionNumber === section) {
          if (!tmp6.render) {
            return num;
          } else {
            showAllVoiceChannelsButtonLastShownChannelActive = obj;
            const sum = num + section(dependencyMap[23]).SMALL_BUTTON_HEIGHT;
            if (tmp7) {
              ({ showAllVoiceChannelsButtonLastShownChannelActive, marginTop } = showAllVoiceChannelsButtonLastShownChannelActive);
            } else {
              marginTop = showAllVoiceChannelsButtonLastShownChannelActive.showAllVoiceChannelsButtonLastShownChannelInactive.marginTop;
            }
            const sum1 = sum + marginTop;
          }
          const tmp6 = calculateVoiceChannelButtonInfo(guildChannels, section);
        } else {
          const obj = section(dependencyMap[20]);
          let num4 = 0;
          if (obj.isNamedCategorySection(section)) {
            num4 = num;
          }
          return num4;
        }
      }
    }
    return section(dependencyMap[19]).DIVIDER_HEIGHT;
  }
};
export const renderChannelListItem = function renderChannelListItem(arg0) {
  let accountLinkApplication;
  let accountLinkApplication2;
  let applicationAccountLinkMarkAsDismissed;
  let applicationAccountLinkMarkAsDismissed2;
  let gameClaimMarkAsDismissed;
  let gameClaimMarkAsDismissed2;
  let guild;
  let guild2;
  let guild3;
  let guildChannels;
  let guildChannels2;
  let guildChannels3;
  let row;
  let row2;
  let section;
  let section2;
  let selectedChannelId;
  let selectedChannelId2;
  let startApplicationAccountLinkAuthorization;
  let startApplicationAccountLinkAuthorization2;
  ({ guildChannels, section, row, selectedChannelId, guild } = arg0);
  ({ gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = arg0);
  if (arg1(dependencyMap[16]).SECTION_INDEX_CHANNEL_NOTICES === section) {
    let obj = { guildChannels, row, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication };
    ({ guildChannels: guildChannels2, guild: guild2, gameClaimMarkAsDismissed: gameClaimMarkAsDismissed2, applicationAccountLinkMarkAsDismissed: applicationAccountLinkMarkAsDismissed2, startApplicationAccountLinkAuthorization: startApplicationAccountLinkAuthorization2, accountLinkApplication: accountLinkApplication2, row: row2 } = obj);
    const channelNoticeSection = guildChannels2.getChannelNoticeSection();
    row = channelNoticeSection.getRow(row2);
    let tmp83 = null;
    if (null != row) {
      if (constants.SPACER === row) {
        let channelFromSectionRow = callback4;
        channelFromSectionRow = View;
        obj = {};
        const obj1 = {};
        channelFromSectionRow = closure_14;
        obj1.height = closure_14;
        obj.style = obj1;
        tmp83 = callback4(View, obj);
      } else {
        channelFromSectionRow = constants;
        if (constants.GUILD_PROGRESS === row) {
          channelFromSectionRow = callback4;
          channelFromSectionRow = View;
          const obj2 = {};
          channelFromSectionRow = obj;
          obj2.style = obj.nonChannelContainer;
          channelFromSectionRow = callback4;
          channelFromSectionRow = importDefault;
          channelFromSectionRow = dependencyMap;
          const obj3 = { guild: guild2 };
          obj2.children = callback4(importDefault(dependencyMap[24]), obj3);
          tmp83 = callback4(View, obj2);
        } else {
          channelFromSectionRow = constants;
          if (constants.MFA_WARNING === row) {
            channelFromSectionRow = callback4;
            channelFromSectionRow = View;
            const obj4 = {};
            channelFromSectionRow = obj;
            obj4.style = obj.nonChannelContainer;
            channelFromSectionRow = callback4;
            channelFromSectionRow = importDefault;
            channelFromSectionRow = dependencyMap;
            obj4.children = callback4(importDefault(dependencyMap[25]), {});
            tmp83 = callback4(View, obj4);
          } else {
            channelFromSectionRow = constants;
            if (constants.LIVE_CHANNEL_NOTICE === row) {
              channelFromSectionRow = importDefault;
              channelFromSectionRow = dependencyMap;
              const obj5 = {};
              channelFromSectionRow = obj;
              obj5.style = obj.liveChannelNotice;
              obj5.guild = guild2;
              tmp83 = callback4(importDefault(dependencyMap[11]), obj5);
            } else {
              channelFromSectionRow = constants;
              if (constants.GAME_CLAIM === row) {
                let tmp92 = null;
                if (null != gameClaimMarkAsDismissed2) {
                  const obj6 = { style: obj.gameClaimNotice };
                  const obj7 = { guild: guild2, markAsDismissed: gameClaimMarkAsDismissed2 };
                  obj6.children = callback4(importDefault(dependencyMap[12]), obj7);
                  tmp92 = callback4(View, obj6);
                }
                tmp83 = tmp92;
              } else {
                channelFromSectionRow = constants;
                tmp83 = null;
                if (constants.APPLICATION_ACCOUNT_LINK === row) {
                  let tmp85 = null;
                  if (null != applicationAccountLinkMarkAsDismissed2) {
                    tmp85 = null;
                    if (null != startApplicationAccountLinkAuthorization2) {
                      tmp85 = null;
                      if (null != accountLinkApplication2) {
                        const obj8 = { style: obj.applicationAccountLinkNotice };
                        const obj9 = { markAsDismissed: applicationAccountLinkMarkAsDismissed2, startAuthorization: startApplicationAccountLinkAuthorization2, application: accountLinkApplication2 };
                        obj8.children = callback4(importDefault(dependencyMap[13]), obj9);
                        tmp85 = callback4(View, obj8);
                      }
                    }
                  }
                  tmp83 = tmp85;
                }
              }
            }
          }
        }
      }
    }
    return tmp83;
  } else {
    channelFromSectionRow = arg1;
    channelFromSectionRow = dependencyMap;
    if (arg1(dependencyMap[16]).SECTION_INDEX_GUILD_ACTIONS === section) {
      const guildActionSection = guildChannels.getGuildActionSection();
      const row1 = guildActionSection.getRow(row);
      let tmp67Result = null;
      if (null != row1) {
        if (constants2.GUILD_ROLE_SUBSCRIPTIONS === row1) {
          const obj10 = { guild, selected: selectedChannelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS };
          tmp67Result = callback4(importDefault(dependencyMap[26]), obj10);
        } else {
          channelFromSectionRow = constants2;
          if (constants2.GUILD_HOME === row1) {
            const obj11 = { guild, selected: selectedChannelId === StaticChannelRoute.GUILD_HOME };
            tmp67Result = callback4(importDefault(dependencyMap[27]), obj11);
          } else {
            channelFromSectionRow = constants2;
            if (constants2.CHANNELS_AND_ROLES === row1) {
              const obj12 = { guild };
              let tmp71 = selectedChannelId === StaticChannelRoute.CHANNEL_BROWSER;
              if (!tmp71) {
                tmp71 = selectedChannelId === StaticChannelRoute.CUSTOMIZE_COMMUNITY;
              }
              obj12.selected = tmp71;
              tmp67Result = callback4(arg1(dependencyMap[28]).GuildRolesAndChannelsRow, obj12);
              const tmp67 = callback4;
            } else {
              channelFromSectionRow = constants2;
              if (constants2.GUILD_DIRECTORY === row1) {
                const obj13 = { guildId: guild.id, selected: selectedChannelId === directoryChannelIds.getDirectoryChannelIds(guild.id)[0] };
                tmp67Result = callback4(importDefault(dependencyMap[29]), obj13);
              } else {
                channelFromSectionRow = constants2;
                if (constants2.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR === row1) {
                  const obj14 = {};
                  const obj15 = { style: obj.nonChannelContainer };
                  const obj16 = { guildId: guild.id };
                  obj15.children = callback4(arg1(dependencyMap[30]).NewMemberActionsProgress, obj16);
                  const items = [callback4(View, obj15), callback4(importDefault(dependencyMap[19]), {})];
                  obj14.children = items;
                  tmp67Result = callback5(View, obj14);
                } else {
                  channelFromSectionRow = constants2;
                  if (constants2.GUILD_HUB_HEADER_OPTIONS === row1) {
                    const obj17 = { guild };
                    tmp67Result = callback4(importDefault(dependencyMap[31]), obj17);
                  } else {
                    channelFromSectionRow = constants2;
                    if (constants2.GUILD_MOD_DASH_MEMBER_SAFETY === row1) {
                      const obj18 = { guild, selected: selectedChannelId === StaticChannelRoute.MEMBER_SAFETY };
                      tmp67Result = callback4(importDefault(dependencyMap[32]), obj18);
                    } else {
                      channelFromSectionRow = constants2;
                      if (constants2.GUILD_BOOSTS === row1) {
                        const obj19 = { guildId: guild.id };
                        tmp67Result = callback4(importDefault(dependencyMap[33]), obj19);
                      } else {
                        channelFromSectionRow = constants2;
                        if (constants2.GUILD_PREMIUM_PROGRESS_BAR === row1) {
                          const obj20 = {};
                          const obj21 = { guildId: guild.id };
                          const items1 = [callback4(importDefault(dependencyMap[34]), obj21), callback4(importDefault(dependencyMap[19]), {})];
                          obj20.children = items1;
                          tmp67Result = callback5(View, obj20);
                        } else {
                          tmp67Result = null;
                          if (constants2.GUILD_SCHEDULED_EVENTS !== row1) {
                            channelFromSectionRow = constants2;
                            tmp67Result = null;
                            if (constants2.GUILD_FAVORITES !== row1) {
                              channelFromSectionRow = constants2;
                              tmp67Result = null;
                              if (constants2.GUILD_CHANNEL_LIST_OPT_IN_NOTICE !== row1) {
                                channelFromSectionRow = constants2;
                                tmp67Result = null;
                                if (constants2.GUILD_SHOP !== row1) {
                                  channelFromSectionRow = constants2;
                                  const BROWSE_CHANNELS = constants2.BROWSE_CHANNELS;
                                  tmp67Result = null;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return tmp67Result;
    } else {
      const obj22 = { guildChannels, section, row, selectedChannelId, guild };
      ({ guildChannels: guildChannels3, section: section2, selectedChannelId: selectedChannelId2, guild: guild3 } = obj22);
      channelFromSectionRow = guildChannels3.getChannelFromSectionRow(section2, obj22.row);
      channelFromSectionRow = null;
      let tmp17 = null;
      if (null != channelFromSectionRow) {
        const channel = channelFromSectionRow.channel;
        const record = channel.record;
        channelFromSectionRow = record.id === selectedChannelId2;
        let type = null;
        if (set.has(record.type)) {
          type = record.type;
        }
        type = record.type;
        if (type === type) {
          const obj23 = { channel: record, selected: channelFromSectionRow };
          ({ isMuted: obj8.muted, subtitle: obj8.subtitle } = channel);
          obj23.isRulesChannel = guild3.rulesChannelId === record.id;
          obj23.isSuggestedSection = section2 === guildChannels3.recentsSectionNumber;
          const obj24 = {};
          const items2 = [callback4(importDefault(dependencyMap[36]), obj23), renderThreads(channel, selectedChannelId2)];
          obj24.children = items2;
          tmp17 = callback5(closure_20, obj24);
        } else {
          channelFromSectionRow = arg1;
          channelFromSectionRow = dependencyMap;
          if (arg1(dependencyMap[37]).ChannelTypes.GUILD_VOICE === type) {
            const obj25 = { channel: record, selected: channelFromSectionRow, subtitle: channel.subtitle };
            tmp17 = callback4(importDefault(dependencyMap[38]), obj25);
          } else {
            channelFromSectionRow = arg1;
            channelFromSectionRow = dependencyMap;
            if (arg1(dependencyMap[37]).ChannelTypes.GUILD_STAGE_VOICE === type) {
              const obj26 = { channel: record, selected: channelFromSectionRow };
              tmp17 = callback4(importDefault(dependencyMap[39]), obj26);
            } else {
              channelFromSectionRow = arg1;
              channelFromSectionRow = dependencyMap;
              if (arg1(dependencyMap[37]).ChannelTypes.DM !== type) {
                channelFromSectionRow = arg1;
                channelFromSectionRow = dependencyMap;
                if (arg1(dependencyMap[37]).ChannelTypes.GROUP_DM !== type) {
                  if (section2 === guildChannels3.voiceChannelsSectionNumber) {
                    if (record.isCategory()) {
                      const obj27 = { channel: record, withMarginTop: true };
                      let tmp10 = callback4(arg1(dependencyMap[17]).CategoryChannel, obj27);
                    }
                    tmp17 = tmp10;
                  }
                  obj = arg1(dependencyMap[41]);
                  if (obj.isFavoritesGuildId(guildChannels3.id)) {
                    if (set2.has(record.type)) {
                      const obj28 = { channel: record, selected: channelFromSectionRow };
                      ({ isMuted: obj3.muted, subtitle: obj3.subtitle } = channel);
                      obj28.isRulesChannel = false;
                      tmp10 = callback4(importDefault(dependencyMap[36]), obj28);
                    }
                  }
                  const obj29 = { channel: record, selected: channelFromSectionRow };
                  tmp10 = callback4(importDefault(dependencyMap[42]), obj29);
                }
              }
              const obj30 = { channel: record, selected: channelFromSectionRow };
              tmp17 = callback4(importDefault(dependencyMap[40]), obj30);
            }
          }
        }
      }
      return tmp17;
    }
  }
};
export const getChannelListItemSize = function getChannelListItemSize(arg0) {
  let fontScale;
  let guildChannels;
  let isRefreshEnabled;
  let listViewportHeight;
  let liveChannelNoticeHeight;
  let row;
  let section;
  let voiceStates;
  ({ guildChannels, section, row, fontScale, voiceStates } = arg0);
  ({ liveChannelNoticeHeight, listViewportHeight, isRefreshEnabled } = arg0);
  if (arg1(dependencyMap[16]).SECTION_INDEX_CHANNEL_NOTICES === section) {
    const channelNoticeSection = guildChannels.getChannelNoticeSection();
    row = channelNoticeSection.getRow(row);
    let num16 = 0;
    if (null != row) {
      if (constants.SPACER === row) {
        num16 = closure_14;
      } else if (constants.GUILD_PROGRESS === row) {
        num16 = arg1(dependencyMap[24]).getScaledGuildProgressButtonHeight(fontScale, isRefreshEnabled);
        const obj9 = arg1(dependencyMap[24]);
      } else if (constants.MFA_WARNING === row) {
        num16 = arg1(dependencyMap[25]).getScaledGuildMFAWarningHeight(fontScale);
        const obj8 = arg1(dependencyMap[25]);
      } else {
        num16 = liveChannelNoticeHeight;
        if (constants.LIVE_CHANNEL_NOTICE !== row) {
          if (constants.GAME_CLAIM === row) {
            num16 = arg1(dependencyMap[12]).getScaledGameClaimNoticeHeight(fontScale);
            const obj7 = arg1(dependencyMap[12]);
          } else {
            num16 = 0;
            if (constants.APPLICATION_ACCOUNT_LINK === row) {
              num16 = arg1(dependencyMap[13]).getScaledAccountLinkBannerHeight(fontScale);
              const obj10 = arg1(dependencyMap[13]);
            }
          }
        }
      }
    }
    return num16;
  } else if (arg1(dependencyMap[16]).SECTION_INDEX_GUILD_ACTIONS === section) {
    const guildActionSection = guildChannels.getGuildActionSection();
    const row1 = guildActionSection.getRow(row);
    let num11 = 0;
    if (null != row1) {
      const tmp39 = callback2(fontScale);
      num11 = tmp39;
      if (constants2.GUILD_ROLE_SUBSCRIPTIONS !== row1) {
        num11 = tmp39;
        if (constants2.GUILD_HOME !== row1) {
          num11 = tmp39;
          if (constants2.CHANNELS_AND_ROLES !== row1) {
            num11 = tmp39;
            if (constants2.GUILD_DIRECTORY !== row1) {
              num11 = tmp39;
              if (constants2.GUILD_MOD_DASH_MEMBER_SAFETY !== row1) {
                num11 = tmp39;
                if (constants2.GUILD_BOOSTS !== row1) {
                  if (constants2.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR === row1) {
                    num11 = 48 + arg1(dependencyMap[19]).DIVIDER_HEIGHT;
                  } else {
                    num11 = listViewportHeight;
                    if (constants2.GUILD_HUB_HEADER_OPTIONS !== row1) {
                      num11 = 0;
                      if (constants2.GUILD_SCHEDULED_EVENTS !== row1) {
                        if (constants2.GUILD_PREMIUM_PROGRESS_BAR === row1) {
                          num11 = arg1(dependencyMap[34]).BOOST_PROGRESS_BAR_HEIGHT + arg1(dependencyMap[19]).DIVIDER_HEIGHT;
                        } else {
                          num11 = 0;
                          if (constants2.GUILD_FAVORITES !== row1) {
                            num11 = 0;
                            if (constants2.GUILD_CHANNEL_LIST_OPT_IN_NOTICE !== row1) {
                              num11 = 0;
                              if (constants2.GUILD_SHOP !== row1) {
                                const BROWSE_CHANNELS = constants2.BROWSE_CHANNELS;
                                num11 = 0;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return num11;
  } else {
    const tmp62 = callback2(fontScale);
    const channelFromSectionRow = guildChannels.getChannelFromSectionRow(section, row);
    let num2 = 0;
    if (null != channelFromSectionRow) {
      const channel = channelFromSectionRow.channel;
      const record = channel.record;
      let type = null;
      if (set.has(record.type)) {
        type = record.type;
      }
      type = record.type;
      if (type === type) {
        num2 = tmp62 + channel.threadCount * tmp62;
      } else {
        if (arg1(dependencyMap[37]).ChannelTypes.GUILD_VOICE !== type) {
          if (arg1(dependencyMap[37]).ChannelTypes.GUILD_STAGE_VOICE !== type) {
            num2 = tmp62;
            if (arg1(dependencyMap[37]).ChannelTypes.DM !== type) {
              num2 = tmp62;
              if (arg1(dependencyMap[37]).ChannelTypes.GROUP_DM !== type) {
                if (arg1(dependencyMap[37]).ChannelTypes.PUBLIC_THREAD !== type) {
                  if (arg1(dependencyMap[37]).ChannelTypes.PRIVATE_THREAD !== type) {
                    if (section === guildChannels.voiceChannelsSectionNumber) {
                      if (record.isCategory()) {
                        let sum = callback(fontScale) + closure_10;
                      }
                      num2 = sum;
                    }
                    sum = tmp62;
                    if (obj.isFavoritesGuildId(guildChannels.id)) {
                      const hasItem = set2.has(record.type);
                      sum = tmp62;
                    }
                    const obj = arg1(dependencyMap[41]);
                  }
                }
                const result = closure_9.countVoiceStatesForChannel(record.id);
                let sum1 = tmp62;
                if (result > 0) {
                  sum1 = tmp62 + result * arg1(dependencyMap[43]).getVoiceUserHeight(fontScale);
                  const obj2 = arg1(dependencyMap[43]);
                }
                num2 = sum1;
              }
            }
          }
        }
        let num4 = 0;
        if (null != channel.subtitle) {
          num4 = callback3(fontScale);
        }
        const voiceUserHeight = arg1(dependencyMap[43]).getVoiceUserHeight(fontScale);
        if (record.type === arg1(dependencyMap[37]).ChannelTypes.GUILD_STAGE_VOICE) {
          let participantCount = store.getParticipantCount(record.id, arg1(dependencyMap[44]).StageChannelParticipantNamedIndex.SPEAKER);
        } else {
          participantCount = closure_9.countVoiceStatesForChannel(record.id);
        }
        let num7 = 0;
        if (record.type === arg1(dependencyMap[37]).ChannelTypes.GUILD_STAGE_VOICE) {
          num7 = 0;
          if (store.getParticipantCount(record.id, arg1(dependencyMap[44]).StageChannelParticipantNamedIndex.AUDIENCE) > 0) {
            num7 = arg1(dependencyMap[45]).getAudienceItemHeight(fontScale);
            const obj4 = arg1(dependencyMap[45]);
          }
        }
        let sum4 = tmp62;
        if (participantCount > 0) {
          const sum2 = tmp62 + num4;
          const sum3 = sum2 + arg1(dependencyMap[38]).VOICE_USERS_MARGIN_TOP + voiceUserHeight * participantCount;
          sum4 = sum3 + arg1(dependencyMap[38]).VOICE_USERS_MARGIN_BOTTOM + num7;
        }
        num2 = sum4;
        const obj3 = arg1(dependencyMap[43]);
      }
    }
    return num2;
  }
};
export const calculateVoiceSummary = function calculateVoiceSummary(arg0) {
  let guildChannels;
  let optInChannelsEnabled;
  let section;
  let selectedChannelId;
  let selectedVoiceChannelId;
  let voiceStates;
  ({ guildChannels, section } = arg0);
  ({ optInChannelsEnabled, voiceStates, selectedChannelId, selectedVoiceChannelId } = arg0);
  let obj = arg1(dependencyMap[20]);
  if (!obj.isVoiceChannelsSection(section, guildChannels)) {
    if (section < arg1(dependencyMap[16]).SECTION_INDEX_FIRST_NAMED_CATEGORY) {
      return null;
    }
  }
  if (obj2.getSectionFooterConfig(guildChannels, optInChannelsEnabled, section).canHaveVoiceSummary) {
    const namedCategoryFromSection = guildChannels.getNamedCategoryFromSection(section);
    if (null == namedCategoryFromSection) {
      return null;
    } else {
      obj = { category: namedCategoryFromSection, selectedChannelId, selectedVoiceChannelId, voiceStates };
      const sectionFooterActiveVoiceChannels = arg1(dependencyMap[46]).getSectionFooterActiveVoiceChannels(obj);
      let tmp7 = null;
      if (0 !== sectionFooterActiveVoiceChannels.length) {
        tmp7 = sectionFooterActiveVoiceChannels;
      }
      return tmp7;
    }
  } else {
    return null;
  }
  const obj2 = arg1(dependencyMap[46]);
};
