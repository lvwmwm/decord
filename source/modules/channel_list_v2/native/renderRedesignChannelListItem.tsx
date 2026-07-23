// Module ID: 15017
// Function ID: 114423
// Name: hasGuildActions
// Dependencies: [31, 27, 4951, 1352, 1348, 1907, 4203, 10260, 1355, 6766, 33, 15016, 15018, 15022, 689, 7588, 6760, 14964, 1212, 11394, 15011, 15024, 14980, 4547, 15026, 15028, 15030, 15032, 15033, 15034, 15035, 15036, 15039, 15041, 15044, 14966, 15048, 669, 15057, 15059, 15061, 5077, 15062, 14976, 4957, 14974, 15063, 2]
// Exports: calculateVoiceSummary, getChannelListItemSize, getChannelListSectionFooterSize, getChannelListSectionHasFooterDivider, getChannelListSectionHeaderSize, getFastListRecyclerKey, renderChannelListItem, renderChannelListSectionFooter, renderChannelListSectionHeader

// Module 15017 (hasGuildActions)
import "HubItem";
import { View } from "GuildHomeChannelRow";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import hairlineWidth from "hairlineWidth";
import { StaticChannelRoute } from "set";
import ChannelListGuildActionRow from "ChannelListGuildActionRow";
import jsxProd from "GuildPowerupsChannelRowIndicator";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_5;
let closure_6;
const require = arg1;
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
  let closure_0 = channel;
  let closure_1 = selectedChannelId2;
  const threadIds = channel.threadIds;
  return threadIds.map((threadId, threadIndex) => {
    let tmp = null;
    if (null != outer1_7.getChannel(threadId)) {
      let obj = {};
      obj = { threadId, threadIndex, threadCount: threadCount.threadCount, selected: selectedChannelId2 === threadId };
      obj.children = outer1_18(selectedChannelId2(outer1_2[35]), obj);
      tmp = outer1_18(outer1_3, obj, threadId);
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
  return { render: false, lastShownChannelActive: false };
}
({ THREADED_CHANNEL_TYPES: closure_5, THREAD_CHANNEL_TYPES: closure_6 } = _callSuper);
({ CATEGORY_MARGIN_TOP: closure_10, getScaledCategoryRowHeight: closure_11, getScaledChannelRowHeight: closure_12, getScaledChannelSubtitleHeight: closure_13, STICKY_HEADER_MARGIN_BOTTOM: closure_14 } = hairlineWidth);
({ ChannelListChannelNoticeRow: closure_16, ChannelListGuildActionRow: closure_17 } = ChannelListGuildActionRow);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
let obj = { nonChannelContainer: { marginHorizontal: 16 } };
obj = { marginTop: require("UserSummaryRow").LIVE_CHANNEL_NOTICE_MARGIN_TOP, marginBottom: require("UserSummaryRow").LIVE_CHANNEL_NOTICE_MARGIN_BOTTOM, marginHorizontal: 16 };
obj.liveChannelNotice = obj;
obj = { marginTop: require("PX_8").GAME_CLAIM_NOTICE_MARGIN_TOP, marginBottom: require("PX_8").GAME_CLAIM_NOTICE_MARGIN_BOTTOM, marginHorizontal: 16 };
obj.gameClaimNotice = obj;
obj.applicationAccountLinkNotice = { marginTop: require("AccountLinkLargeBanner").ACCOUNT_LINK_BANNER_MARGIN_TOP, marginBottom: require("AccountLinkLargeBanner").ACCOUNT_LINK_BANNER_MARGIN_BOTTOM, marginHorizontal: 16 };
let obj1 = { marginTop: require("AccountLinkLargeBanner").ACCOUNT_LINK_BANNER_MARGIN_TOP, marginBottom: require("AccountLinkLargeBanner").ACCOUNT_LINK_BANNER_MARGIN_BOTTOM, marginHorizontal: 16 };
obj.showAllVoiceChannelsButtonLastShownChannelActive = { marginHorizontal: 16, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { marginHorizontal: 16, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.showAllVoiceChannelsButtonLastShownChannelInactive = { marginHorizontal: 16, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj3 = { marginHorizontal: 16, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel_list_v2/native/renderRedesignChannelListItem.tsx");

export const getFastListRecyclerKey = function getFastListRecyclerKey(guildChannels, arg1, section, row) {
  if (arg1 === require(7588) /* _isNativeReflectConstruct */.FastListItemTypes.ITEM) {
    if (null != row) {
      if (require(6760) /* _superPropGet */.SECTION_INDEX_CHANNEL_NOTICES === section) {
        const channelNoticeSection = guildChannels.getChannelNoticeSection();
        let id = channelNoticeSection.getRow(row);
      } else if (require(6760) /* _superPropGet */.SECTION_INDEX_GUILD_ACTIONS === section) {
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
  } else if (arg1 === require(7588) /* _isNativeReflectConstruct */.FastListItemTypes.SECTION) {
    const _HermesInternal = HermesInternal;
    return "" + guildChannels.id + ":SECTION:" + section;
  }
};
export const renderChannelListSectionHeader = function renderChannelListSectionHeader(guildChannels, recentsSectionNumber, recentlyActiveChannelsEnabled, withMarginTop, categoryStyles, closure_10) {
  if (guildChannels.favoritesSectionNumber === recentsSectionNumber) {
    let obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.name = intl2.string(require(1212) /* getSystemLocale */.t.mlPMCy);
    obj.withMarginTop = withMarginTop;
    obj.styles = categoryStyles;
    obj.isRefreshEnabled = closure_10;
    return require(14964) /* CategoryChannel */.renderCategoryItem(obj);
  } else if (guildChannels.recentsSectionNumber === recentsSectionNumber) {
    const tmp23 = require(14964) /* CategoryChannel */;
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
      tmp13 = callback4(importDefault(11394), {});
    }
    const items = [tmp13, ];
    let renderCategoryItemResult = null;
    if (tmp10.isCollapsed) {
      let obj3 = require(14964) /* CategoryChannel */;
      obj3 = {};
      const intl = require(1212) /* getSystemLocale */.intl;
      obj3.name = intl.string(require(1212) /* getSystemLocale */.t["V/u9Dy"]);
      obj3.styles = categoryStyles;
      obj3.isRefreshEnabled = closure_10;
      renderCategoryItemResult = obj3.renderCategoryItem(obj3);
    }
    items[1] = renderCategoryItemResult;
    obj2.children = items;
    return closure_19(View, obj2);
  } else {
    obj = require(15011) /* isFavoritesSection */;
    if (obj.isNamedCategorySection(recentsSectionNumber)) {
      const namedCategoryFromSection = guildChannels.getNamedCategoryFromSection(recentsSectionNumber);
      let tmp5 = null;
      if (null != namedCategoryFromSection) {
        const obj4 = { channel: namedCategoryFromSection.record, withMarginTop };
        tmp5 = callback4(require(14964) /* CategoryChannel */.CategoryChannel, obj4);
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
          num5 = require(11394) /* Divider */.DIVIDER_HEIGHT;
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
export const renderChannelListSectionFooter = function renderChannelListSectionFooter(guildChannels, section, ref, result, closure_10) {
  let tmp = null;
  if (null != result) {
    let obj = { guildId: guildChannels.id, channels: result };
    tmp = callback4(require(14964) /* CategoryChannel */.RedesignVoiceUserSummary, obj);
  }
  if (require(6760) /* _superPropGet */.SECTION_INDEX_CHANNEL_NOTICES === section) {
    return null;
  } else if (require(6760) /* _superPropGet */.SECTION_INDEX_GUILD_ACTIONS === section) {
    let tmp24 = null;
    if (closure_10) {
      tmp24 = null;
      if (hasGuildActions(guildChannels)) {
        tmp24 = callback4(importDefault(11394), {});
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
            obj.children = callback4(importDefault(15024), obj1);
            items[1] = callback4(View, obj);
            obj.children = items;
            return closure_19(View, obj);
          }
          tmp6 = calculateVoiceChannelButtonInfo(guildChannels, section);
        }
        obj1 = require(15011) /* isFavoritesSection */;
        let tmp10 = null;
        if (obj1.isNamedCategorySection(section)) {
          tmp10 = tmp;
        }
        return tmp10;
      }
    }
    return callback4(importDefault(11394), {});
  }
};
export const getChannelListSectionHasFooterDivider = function getChannelListSectionHasFooterDivider(guildChannels, arg1, closure_10) {
  let tmp = closure_10;
  if (require(6760) /* _superPropGet */.SECTION_INDEX_CHANNEL_NOTICES === arg1) {
    return false;
  } else if (require(6760) /* _superPropGet */.SECTION_INDEX_GUILD_ACTIONS === arg1) {
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
export const getChannelListSectionFooterSize = function getChannelListSectionFooterSize(guildChannels, section, result, closure_10) {
  let marginTop;
  let showAllVoiceChannelsButtonLastShownChannelActive;
  let num = 0;
  if (null != result) {
    num = require(14980) /* VOICE_USER_SUMMARY_HEIGHT */.VOICE_USER_SUMMARY_HEIGHT;
  }
  if (require(6760) /* _superPropGet */.SECTION_INDEX_CHANNEL_NOTICES === section) {
    return 0;
  } else if (require(6760) /* _superPropGet */.SECTION_INDEX_GUILD_ACTIONS === section) {
    let num7 = 0;
    if (closure_10) {
      num7 = 0;
      if (hasGuildActions(guildChannels)) {
        num7 = require(11394) /* Divider */.DIVIDER_HEIGHT;
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
            const sum = num + require(4547) /* getButtonPadding */.SMALL_BUTTON_HEIGHT;
            if (tmp7) {
              ({ showAllVoiceChannelsButtonLastShownChannelActive, marginTop } = showAllVoiceChannelsButtonLastShownChannelActive);
            } else {
              marginTop = showAllVoiceChannelsButtonLastShownChannelActive.showAllVoiceChannelsButtonLastShownChannelInactive.marginTop;
            }
            const sum1 = sum + marginTop;
          }
          tmp6 = calculateVoiceChannelButtonInfo(guildChannels, section);
        } else {
          obj = require(15011) /* isFavoritesSection */;
          let num4 = 0;
          if (obj.isNamedCategorySection(section)) {
            num4 = num;
          }
          return num4;
        }
      }
    }
    return require(11394) /* Divider */.DIVIDER_HEIGHT;
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
  if (require(6760) /* _superPropGet */.SECTION_INDEX_CHANNEL_NOTICES === section) {
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
          obj2.children = callback4(importDefault(15026), obj3);
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
            obj4.children = callback4(importDefault(15028), {});
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
              tmp83 = callback4(importDefault(15016), obj5);
            } else {
              channelFromSectionRow = constants;
              if (constants.GAME_CLAIM === row) {
                let tmp92 = null;
                if (null != gameClaimMarkAsDismissed2) {
                  const obj6 = { style: obj.gameClaimNotice };
                  const obj7 = { guild: guild2, markAsDismissed: gameClaimMarkAsDismissed2 };
                  obj6.children = callback4(importDefault(15018), obj7);
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
                        obj8.children = callback4(importDefault(15022), obj9);
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
    channelFromSectionRow = require;
    channelFromSectionRow = dependencyMap;
    if (require(6760) /* _superPropGet */.SECTION_INDEX_GUILD_ACTIONS === section) {
      const guildActionSection = guildChannels.getGuildActionSection();
      const row1 = guildActionSection.getRow(row);
      let tmp67Result = null;
      if (null != row1) {
        if (constants2.GUILD_ROLE_SUBSCRIPTIONS === row1) {
          const obj10 = { guild, selected: selectedChannelId === StaticChannelRoute.ROLE_SUBSCRIPTIONS };
          tmp67Result = callback4(importDefault(15030), obj10);
        } else {
          channelFromSectionRow = constants2;
          if (constants2.GUILD_HOME === row1) {
            const obj11 = { guild, selected: selectedChannelId === StaticChannelRoute.GUILD_HOME };
            tmp67Result = callback4(importDefault(15032), obj11);
          } else {
            channelFromSectionRow = constants2;
            if (constants2.CHANNELS_AND_ROLES === row1) {
              const obj12 = { guild };
              let tmp71 = selectedChannelId === StaticChannelRoute.CHANNEL_BROWSER;
              if (!tmp71) {
                tmp71 = selectedChannelId === StaticChannelRoute.CUSTOMIZE_COMMUNITY;
              }
              obj12.selected = tmp71;
              tmp67Result = callback4(require(15033) /* GuildRolesAndChannelsRow */.GuildRolesAndChannelsRow, obj12);
              const tmp67 = callback4;
            } else {
              channelFromSectionRow = constants2;
              if (constants2.GUILD_DIRECTORY === row1) {
                const obj13 = { guildId: guild.id, selected: selectedChannelId === directoryChannelIds.getDirectoryChannelIds(guild.id)[0] };
                tmp67Result = callback4(importDefault(15034), obj13);
              } else {
                channelFromSectionRow = constants2;
                if (constants2.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR === row1) {
                  const obj14 = {};
                  const obj15 = { style: obj.nonChannelContainer };
                  const obj16 = { guildId: guild.id };
                  obj15.children = callback4(require(15035) /* ProgressBar */.NewMemberActionsProgress, obj16);
                  const items = [callback4(View, obj15), callback4(importDefault(11394), {})];
                  obj14.children = items;
                  tmp67Result = callback5(View, obj14);
                } else {
                  channelFromSectionRow = constants2;
                  if (constants2.GUILD_HUB_HEADER_OPTIONS === row1) {
                    const obj17 = { guild };
                    tmp67Result = callback4(importDefault(15036), obj17);
                  } else {
                    channelFromSectionRow = constants2;
                    if (constants2.GUILD_MOD_DASH_MEMBER_SAFETY === row1) {
                      const obj18 = { guild, selected: selectedChannelId === StaticChannelRoute.MEMBER_SAFETY };
                      tmp67Result = callback4(importDefault(15039), obj18);
                    } else {
                      channelFromSectionRow = constants2;
                      if (constants2.GUILD_BOOSTS === row1) {
                        const obj19 = { guildId: guild.id };
                        tmp67Result = callback4(importDefault(15041), obj19);
                      } else {
                        channelFromSectionRow = constants2;
                        if (constants2.GUILD_PREMIUM_PROGRESS_BAR === row1) {
                          const obj20 = {};
                          const obj21 = { guildId: guild.id };
                          const items1 = [callback4(importDefault(15044), obj21), callback4(importDefault(11394), {})];
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
          const items2 = [callback4(importDefault(15048), obj23), renderThreads(channel, selectedChannelId2)];
          obj24.children = items2;
          tmp17 = callback5(closure_20, obj24);
        } else {
          channelFromSectionRow = require;
          channelFromSectionRow = dependencyMap;
          if (require(669) /* set */.ChannelTypes.GUILD_VOICE === type) {
            const obj25 = { channel: record, selected: channelFromSectionRow, subtitle: channel.subtitle };
            tmp17 = callback4(importDefault(15057), obj25);
          } else {
            channelFromSectionRow = require;
            channelFromSectionRow = dependencyMap;
            if (require(669) /* set */.ChannelTypes.GUILD_STAGE_VOICE === type) {
              const obj26 = { channel: record, selected: channelFromSectionRow };
              tmp17 = callback4(importDefault(15059), obj26);
            } else {
              channelFromSectionRow = require;
              channelFromSectionRow = dependencyMap;
              if (require(669) /* set */.ChannelTypes.DM !== type) {
                channelFromSectionRow = require;
                channelFromSectionRow = dependencyMap;
                if (require(669) /* set */.ChannelTypes.GROUP_DM !== type) {
                  if (section2 === guildChannels3.voiceChannelsSectionNumber) {
                    if (record.isCategory()) {
                      const obj27 = { channel: record, withMarginTop: true };
                      let tmp10 = callback4(require(14964) /* CategoryChannel */.CategoryChannel, obj27);
                    }
                    tmp17 = tmp10;
                  }
                  obj = require(5077) /* isFavoritesGuildId */;
                  if (obj.isFavoritesGuildId(guildChannels3.id)) {
                    if (set2.has(record.type)) {
                      const obj28 = { channel: record, selected: channelFromSectionRow };
                      ({ isMuted: obj3.muted, subtitle: obj3.subtitle } = channel);
                      obj28.isRulesChannel = false;
                      tmp10 = callback4(importDefault(15048), obj28);
                    }
                  }
                  const obj29 = { channel: record, selected: channelFromSectionRow };
                  tmp10 = callback4(importDefault(15062), obj29);
                }
              }
              const obj30 = { channel: record, selected: channelFromSectionRow };
              tmp17 = callback4(importDefault(15061), obj30);
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
  if (require(6760) /* _superPropGet */.SECTION_INDEX_CHANNEL_NOTICES === section) {
    const channelNoticeSection = guildChannels.getChannelNoticeSection();
    row = channelNoticeSection.getRow(row);
    let num16 = 0;
    if (null != row) {
      if (constants.SPACER === row) {
        num16 = closure_14;
      } else if (constants.GUILD_PROGRESS === row) {
        num16 = require(15026) /* GuildProgressButton */.getScaledGuildProgressButtonHeight(fontScale, isRefreshEnabled);
        const obj9 = require(15026) /* GuildProgressButton */;
      } else if (constants.MFA_WARNING === row) {
        num16 = require(15028) /* handlePress */.getScaledGuildMFAWarningHeight(fontScale);
        const obj8 = require(15028) /* handlePress */;
      } else {
        num16 = liveChannelNoticeHeight;
        if (constants.LIVE_CHANNEL_NOTICE !== row) {
          if (constants.GAME_CLAIM === row) {
            num16 = require(15018) /* PX_8 */.getScaledGameClaimNoticeHeight(fontScale);
            const obj7 = require(15018) /* PX_8 */;
          } else {
            num16 = 0;
            if (constants.APPLICATION_ACCOUNT_LINK === row) {
              num16 = require(15022) /* AccountLinkLargeBanner */.getScaledAccountLinkBannerHeight(fontScale);
              const obj10 = require(15022) /* AccountLinkLargeBanner */;
            }
          }
        }
      }
    }
    return num16;
  } else if (require(6760) /* _superPropGet */.SECTION_INDEX_GUILD_ACTIONS === section) {
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
                    num11 = 48 + require(11394) /* Divider */.DIVIDER_HEIGHT;
                  } else {
                    num11 = listViewportHeight;
                    if (constants2.GUILD_HUB_HEADER_OPTIONS !== row1) {
                      num11 = 0;
                      if (constants2.GUILD_SCHEDULED_EVENTS !== row1) {
                        if (constants2.GUILD_PREMIUM_PROGRESS_BAR === row1) {
                          num11 = require(15044) /* GuildPowerupsProgressBar */.BOOST_PROGRESS_BAR_HEIGHT + require(11394) /* Divider */.DIVIDER_HEIGHT;
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
        if (require(669) /* set */.ChannelTypes.GUILD_VOICE !== type) {
          if (require(669) /* set */.ChannelTypes.GUILD_STAGE_VOICE !== type) {
            num2 = tmp62;
            if (require(669) /* set */.ChannelTypes.DM !== type) {
              num2 = tmp62;
              if (require(669) /* set */.ChannelTypes.GROUP_DM !== type) {
                if (require(669) /* set */.ChannelTypes.PUBLIC_THREAD !== type) {
                  if (require(669) /* set */.ChannelTypes.PRIVATE_THREAD !== type) {
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
                    obj = require(5077) /* isFavoritesGuildId */;
                  }
                }
                const result = closure_9.countVoiceStatesForChannel(record.id);
                let sum1 = tmp62;
                if (result > 0) {
                  sum1 = tmp62 + result * require(14976) /* getVoiceUserHeight */.getVoiceUserHeight(fontScale);
                  const obj2 = require(14976) /* getVoiceUserHeight */;
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
        const voiceUserHeight = require(14976) /* getVoiceUserHeight */.getVoiceUserHeight(fontScale);
        if (record.type === require(669) /* set */.ChannelTypes.GUILD_STAGE_VOICE) {
          let participantCount = store.getParticipantCount(record.id, require(4957) /* sortKey */.StageChannelParticipantNamedIndex.SPEAKER);
        } else {
          participantCount = closure_9.countVoiceStatesForChannel(record.id);
        }
        let num7 = 0;
        if (record.type === require(669) /* set */.ChannelTypes.GUILD_STAGE_VOICE) {
          num7 = 0;
          if (store.getParticipantCount(record.id, require(4957) /* sortKey */.StageChannelParticipantNamedIndex.AUDIENCE) > 0) {
            num7 = require(14974) /* AudienceItem */.getAudienceItemHeight(fontScale);
            const obj4 = require(14974) /* AudienceItem */;
          }
        }
        let sum4 = tmp62;
        if (participantCount > 0) {
          const sum2 = tmp62 + num4;
          const sum3 = sum2 + require(15057) /* _handleVoiceChannelPress */.VOICE_USERS_MARGIN_TOP + voiceUserHeight * participantCount;
          sum4 = sum3 + require(15057) /* _handleVoiceChannelPress */.VOICE_USERS_MARGIN_BOTTOM + num7;
        }
        num2 = sum4;
        const obj3 = require(14976) /* getVoiceUserHeight */;
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
  let obj = require(15011) /* isFavoritesSection */;
  if (!obj.isVoiceChannelsSection(section, guildChannels)) {
    if (section < require(6760) /* _superPropGet */.SECTION_INDEX_FIRST_NAMED_CATEGORY) {
      return null;
    }
  }
  if (obj2.getSectionFooterConfig(guildChannels, optInChannelsEnabled, section).canHaveVoiceSummary) {
    const namedCategoryFromSection = guildChannels.getNamedCategoryFromSection(section);
    if (null == namedCategoryFromSection) {
      return null;
    } else {
      obj = { category: namedCategoryFromSection, selectedChannelId, selectedVoiceChannelId, voiceStates };
      const sectionFooterActiveVoiceChannels = require(15063) /* isSectionFooterWithDivider */.getSectionFooterActiveVoiceChannels(obj);
      let tmp7 = null;
      if (0 !== sectionFooterActiveVoiceChannels.length) {
        tmp7 = sectionFooterActiveVoiceChannels;
      }
      return tmp7;
    }
  } else {
    return null;
  }
  obj2 = require(15063) /* isSectionFooterWithDivider */;
};
