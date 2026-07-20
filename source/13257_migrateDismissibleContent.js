// Module ID: 13257
// Function ID: 100634
// Name: migrateDismissibleContent
// Dependencies: []

// Module 13257 (migrateDismissibleContent)
function migrateDismissibleContent(userContent, CHANNEL_NOTICE_INVITE) {
  if (null == userContent.userContent) {
    const UserContentSettings = CHANNEL_NOTICE_INVITE(dependencyMap[3]).UserContentSettings;
    userContent.userContent = UserContentSettings.create();
  }
  if (null == userContent.userContent.dismissedContents) {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array();
    userContent.userContent.dismissedContents = uint8Array;
  }
  let flag = false;
  if (!obj.hasBit(userContent.userContent.dismissedContents, CHANNEL_NOTICE_INVITE)) {
    userContent.userContent.dismissedContents = CHANNEL_NOTICE_INVITE(dependencyMap[4]).addBit(userContent.userContent.dismissedContents, CHANNEL_NOTICE_INVITE);
    flag = true;
    const obj2 = CHANNEL_NOTICE_INVITE(dependencyMap[4]);
  }
  return flag;
}
function migrateHotspotLocation(userContent, ACTIVITY_BEB_TUTORIAL, ACCOUNT_MULTIACCOUNT_TOOLTIP) {
  const HotspotStore = ACTIVITY_BEB_TUTORIAL(dependencyMap[5]).HotspotStore;
  const tmp = !HotspotStore.hasHiddenHotspot(ACTIVITY_BEB_TUTORIAL);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = migrateDismissibleContent(userContent, ACCOUNT_MULTIACCOUNT_TOOLTIP);
  }
  return tmp2;
}
let closure_3 = importDefault(dependencyMap[0]);
const ChannelNoticeTypes = arg1(dependencyMap[1]).ChannelNoticeTypes;
let closure_5 = arg1(dependencyMap[2]).MULTIACCOUNT_TOOLTIP_SEEN_KEY;
let obj = {
  version: 2,
  run(inbox) {
    if (null != inbox.inbox) {
      return false;
    } else {
      const InboxSettings = arg1(dependencyMap[3]).InboxSettings;
      const obj = InboxSettings.create();
      inbox.inbox = obj;
      const Storage3 = arg1(dependencyMap[6]).Storage;
      let flag2 = false;
      if (Storage3.get("seenInboxTutorial", false)) {
        obj.viewedTutorial = true;
        flag2 = true;
      }
      const Storage = arg1(dependencyMap[6]).Storage;
      let value = Storage.get("recentsButtonTab2");
      if (null == value) {
        const Storage2 = arg1(dependencyMap[6]).Storage;
        value = Storage2.get("unread-messages-collapsed-channels");
        if (null == value) {
          value = {};
        }
        let flag4 = flag2;
        let tmp12 = flag2;
        const keys = Object.keys();
        if (keys !== undefined) {
          tmp12 = flag4;
          while (keys[tmp] !== undefined) {
            let tmp29 = tmp15;
            if (!value[tmp15]) {
              continue;
            } else {
              let tmp16 = channel;
              let channel = channel.getChannel(tmp15);
              flag4 = tmp14;
              let tmp18 = channel;
              if (null == channel) {
                continue;
              } else {
                let tmp19 = arg1;
                let tmp20 = dependencyMap;
                let obj2 = arg1(dependencyMap[7]);
                let guild_id = channel.guild_id;
                let str4 = "0";
                if (null != guild_id) {
                  str4 = guild_id;
                }
                let tmp21 = obj2;
                let tmp22 = inbox;
                let tmp23 = str4;
                let result = obj2.mutateUserChannelSettings(inbox, str4, channel.id, (arg0) => {
                  arg0.collapsedInInbox = true;
                });
                flag4 = true;
                let tmp25 = channel;
                // continue
              }
              continue;
            }
            continue;
          }
        }
        return tmp12;
      } else {
        if (value === { Mentions: "Recent Mentions", Unreads: "Inbox" }.Mentions) {
          let UNREADS = arg1(dependencyMap[3]).InboxTab.MENTIONS;
        } else {
          UNREADS = arg1(dependencyMap[3]).InboxTab.UNREADS;
        }
        obj.currentTab = UNREADS;
      }
    }
  },
  cleanup() {
    const Storage = arg1(dependencyMap[6]).Storage;
    Storage.remove("seenInboxTutorial");
    const Storage2 = arg1(dependencyMap[6]).Storage;
    Storage2.remove("recentsButtonTab2");
    const Storage3 = arg1(dependencyMap[6]).Storage;
    Storage3.remove("unread-messages-collapsed-channels");
  }
};
const items = [obj, , , , , , , , , , , , , , , , , , ];
obj = {
  version: 3,
  run(textAndImages) {
    const PersistedStore = importDefault(dependencyMap[8]).PersistedStore;
    const items = [
      () => {
        const obj = {};
        const Storage = callback(closure_2[6]).Storage;
        obj.diversitySurrogate = Storage.get("EmojiDiversitySurrogate") || "";
        return obj;
      }
    ];
    const state = PersistedStore.migrateAndReadStoreState("EmojiStore", items).state;
    if (null == state) {
      return false;
    } else {
      let tmp = null != state.diversitySurrogate;
      if (tmp) {
        tmp = "" !== state.diversitySurrogate;
      }
      let flag = false;
      if (tmp) {
        if (null == textAndImages.textAndImages) {
          const TextAndImagesSettings = arg1(dependencyMap[3]).TextAndImagesSettings;
          textAndImages.textAndImages = TextAndImagesSettings.create();
        }
        if (null == textAndImages.textAndImages.diversitySurrogate) {
          const StringValue = arg1(dependencyMap[9]).StringValue;
          textAndImages.textAndImages.diversitySurrogate = StringValue.create();
        }
        textAndImages.textAndImages.diversitySurrogate.value = state.diversitySurrogate;
        flag = true;
      }
      return flag;
    }
  },
  cleanup() {

  }
};
items[1] = obj;
obj = {
  version: 4,
  run(userContent) {
    const Storage = arg1(dependencyMap[6]).Storage;
    let hasHiddenHotspotResult = true === Storage.get("HAS_SEEN_HUB_UPSELL");
    if (!hasHiddenHotspotResult) {
      const HotspotStore = arg1(dependencyMap[5]).HotspotStore;
      hasHiddenHotspotResult = HotspotStore.hasHiddenHotspot(arg1(dependencyMap[5]).HotspotLocations.HUB_SECOND_EMAIL_CONNECTION_UPSELL);
    }
    let flag = false;
    if (hasHiddenHotspotResult) {
      flag = migrateDismissibleContent(userContent, arg1(dependencyMap[10]).DismissibleContent.HUB_WAITLIST_UPSELL);
    }
    return flag;
  },
  cleanup() {
    const Storage = arg1(dependencyMap[6]).Storage;
    Storage.remove("HAS_SEEN_HUB_UPSELL");
  }
};
items[2] = obj;
items[3] = {
  version: 5,
  run(textAndImages) {
    textAndImages = textAndImages.textAndImages;
    if (null == textAndImages) {
      const TextAndImagesSettings = arg1(dependencyMap[3]).TextAndImagesSettings;
      textAndImages = TextAndImagesSettings.create();
    }
    textAndImages.textAndImages = textAndImages;
    let notifications = textAndImages.notifications;
    if (null == notifications) {
      const NotificationSettings = arg1(dependencyMap[3]).NotificationSettings;
      notifications = NotificationSettings.create();
    }
    textAndImages.notifications = notifications;
    let privacy = textAndImages.privacy;
    if (null == privacy) {
      const PrivacySettings = arg1(dependencyMap[3]).PrivacySettings;
      privacy = PrivacySettings.create();
    }
    textAndImages.privacy = privacy;
    let voiceAndVideo = textAndImages.voiceAndVideo;
    if (null == voiceAndVideo) {
      const VoiceAndVideoSettings = arg1(dependencyMap[3]).VoiceAndVideoSettings;
      voiceAndVideo = VoiceAndVideoSettings.create();
    }
    textAndImages.voiceAndVideo = voiceAndVideo;
    let gameLibrary = textAndImages.gameLibrary;
    if (null == gameLibrary) {
      const GameLibrarySettings = arg1(dependencyMap[3]).GameLibrarySettings;
      gameLibrary = GameLibrarySettings.create();
    }
    textAndImages.gameLibrary = gameLibrary;
    let debug = textAndImages.debug;
    if (null == debug) {
      const DebugSettings = arg1(dependencyMap[3]).DebugSettings;
      debug = DebugSettings.create();
    }
    textAndImages.debug = debug;
    const Storage = arg1(dependencyMap[6]).Storage;
    let obj = Storage.get("UserSettingsStore");
    if (null == obj) {
      obj = {};
    }
    let flag = false;
    if ("boolean" === typeof obj.useRichChatTextBox) {
      const BoolValue = arg1(dependencyMap[9]).BoolValue;
      obj = {};
      obj.value = obj.useRichChatTextBox;
      textAndImages.textAndImages.useRichChatInput = BoolValue.create(obj);
      flag = true;
    }
    if ("string" === typeof obj.renderSpoilers) {
      const StringValue = arg1(dependencyMap[9]).StringValue;
      const obj1 = { value: obj.renderSpoilers };
      textAndImages.textAndImages.renderSpoilers = StringValue.create(obj1);
      flag = true;
    }
    if ("boolean" === typeof obj.useThreadSidebar) {
      const BoolValue2 = arg1(dependencyMap[9]).BoolValue;
      const obj2 = { value: obj.useThreadSidebar };
      textAndImages.textAndImages.useThreadSidebar = BoolValue2.create(obj2);
      flag = true;
    }
    if ("boolean" === typeof obj.showInAppNotifications) {
      const BoolValue3 = arg1(dependencyMap[9]).BoolValue;
      const obj3 = { value: obj.showInAppNotifications };
      textAndImages.notifications.showInAppNotifications = BoolValue3.create(obj3);
      flag = true;
    }
    if (obj.emojiPickerCollapsedSections instanceof Array) {
      textAndImages.textAndImages.emojiPickerCollapsedSections = obj.emojiPickerCollapsedSections;
      flag = true;
    }
    if (obj.stickerPickerCollapsedSections instanceof Array) {
      textAndImages.textAndImages.stickerPickerCollapsedSections = obj.stickerPickerCollapsedSections;
      flag = true;
    }
    if ("boolean" === typeof obj.viewImageDescriptions) {
      const BoolValue4 = arg1(dependencyMap[9]).BoolValue;
      const obj4 = { value: obj.viewImageDescriptions };
      textAndImages.textAndImages.viewImageDescriptions = BoolValue4.create(obj4);
      flag = true;
    }
    if ("boolean" === typeof obj.showCommandSuggestions) {
      const BoolValue5 = arg1(dependencyMap[9]).BoolValue;
      const obj5 = { value: obj.showCommandSuggestions };
      textAndImages.textAndImages.showCommandSuggestions = BoolValue5.create(obj5);
      flag = true;
    }
    if ("boolean" === typeof obj.alwaysPreviewVideo) {
      const BoolValue6 = arg1(dependencyMap[9]).BoolValue;
      const obj6 = { value: obj.alwaysPreviewVideo };
      textAndImages.voiceAndVideo.alwaysPreviewVideo = BoolValue6.create(obj6);
      flag = true;
    }
    if ("boolean" === typeof obj.notifyFriendsOnGoLive) {
      const BoolValue7 = arg1(dependencyMap[9]).BoolValue;
      const obj7 = { value: obj.notifyFriendsOnGoLive };
      textAndImages.notifications.notifyFriendsOnGoLive = BoolValue7.create(obj7);
      flag = true;
    }
    if ("boolean" === typeof obj.installShortcutDesktop) {
      const BoolValue8 = arg1(dependencyMap[9]).BoolValue;
      const obj8 = { value: obj.installShortcutDesktop };
      textAndImages.gameLibrary.installShortcutDesktop = BoolValue8.create(obj8);
      flag = true;
    }
    if ("boolean" === typeof obj.installShortcutStartMenu) {
      const BoolValue9 = arg1(dependencyMap[9]).BoolValue;
      const obj9 = { value: obj.installShortcutStartMenu };
      textAndImages.gameLibrary.installShortcutStartMenu = BoolValue9.create(obj9);
      flag = true;
    }
    if ("boolean" === typeof obj.allowActivityPartyPrivacyFriends) {
      const BoolValue10 = arg1(dependencyMap[9]).BoolValue;
      const obj10 = { value: obj.allowActivityPartyPrivacyFriends };
      textAndImages.privacy.allowActivityPartyPrivacyFriends = BoolValue10.create(obj10);
      flag = true;
    }
    if ("boolean" === typeof obj.allowActivityPartyPrivacyVoiceChannel) {
      const BoolValue11 = arg1(dependencyMap[9]).BoolValue;
      const obj11 = { value: obj.allowActivityPartyPrivacyVoiceChannel };
      textAndImages.privacy.allowActivityPartyPrivacyVoiceChannel = BoolValue11.create(obj11);
      flag = true;
    }
    if ("boolean" === typeof obj.rtcPanelShowVoiceStates) {
      const BoolValue12 = arg1(dependencyMap[9]).BoolValue;
      const obj12 = { value: obj.rtcPanelShowVoiceStates };
      textAndImages.debug.rtcPanelShowVoiceStates = BoolValue12.create(obj12);
      flag = true;
    }
    return flag;
  },
  cleanup() {

  }
};
items[4] = {
  version: 7,
  run(userContent) {
    return migrateHotspotLocation(userContent, arg1(dependencyMap[5]).HotspotLocations.APPLICATION_COMMAND_TOOLTIP, arg1(dependencyMap[10]).DismissibleContent.APPLICATION_COMMAND_TOOLTIP);
  },
  cleanup() {

  }
};
items[5] = {
  version: 8,
  run(userContent) {
    return migrateHotspotLocation(userContent, arg1(dependencyMap[5]).HotspotLocations.CHANNEL_BANNER_MEMBER_LIST_NOTICE, arg1(dependencyMap[10]).DismissibleContent.CHANNELINFO_CHANNELBANNER_NOTICE);
  },
  cleanup() {

  }
};
items[6] = {
  version: 9,
  run(userContent) {
    const HotspotStore = arg1(dependencyMap[5]).HotspotStore;
    if (HotspotStore.hasHiddenHotspot(arg1(dependencyMap[5]).HotspotLocations.MULTI_ACCOUNT_TOOLTIP)) {
      const Storage = arg1(dependencyMap[6]).Storage;
      const result = Storage.set(closure_5, "true");
    }
    return migrateHotspotLocation(userContent, arg1(dependencyMap[5]).HotspotLocations.MULTI_ACCOUNT_TOOLTIP, arg1(dependencyMap[10]).DismissibleContent.ACCOUNT_MULTIACCOUNT_TOOLTIP);
  },
  cleanup() {

  }
};
items[7] = {
  version: 10,
  run(userContent) {
    let flag = migrateHotspotLocation(userContent, arg1(dependencyMap[5]).HotspotLocations.HUB_LINK_CHANNEL_NOTICE, arg1(dependencyMap[10]).DismissibleContent.CHANNEL_NOTICE_HUBLINK);
    const Storage = arg1(dependencyMap[6]).Storage;
    let obj = Storage.get("channelNotices");
    if (null == obj) {
      obj = {};
    }
    let tmp = false === obj[closure_4.INVITE];
    if (tmp) {
      tmp = migrateDismissibleContent(userContent, arg1(dependencyMap[10]).DismissibleContent.CHANNEL_NOTICE_INVITE);
    }
    if (tmp) {
      flag = true;
    }
    let tmp5 = false === obj[closure_4.QUICKSWITCHER];
    if (tmp5) {
      tmp5 = migrateDismissibleContent(userContent, arg1(dependencyMap[10]).DismissibleContent.CHANNEL_NOTICE_QUICKSWITCHER);
    }
    if (tmp5) {
      flag = true;
    }
    let tmp9 = false === obj[closure_4.GUILD_BOOSTING];
    if (tmp9) {
      tmp9 = migrateDismissibleContent(userContent, arg1(dependencyMap[10]).DismissibleContent.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION);
    }
    if (tmp9) {
      flag = true;
    }
    return flag;
  },
  cleanup() {
    const Storage = arg1(dependencyMap[6]).Storage;
    Storage.remove("channelNotices");
  }
};
items[8] = {
  version: 11,
  run(userContent) {
    let flag = false;
    if (migrateHotspotLocation(userContent, arg1(dependencyMap[5]).HotspotLocations.GUILD_EVENT_UPSELL, arg1(dependencyMap[10]).DismissibleContent.GUILD_HEADER_EVENT_UPSELL)) {
      flag = true;
    }
    if (migrateHotspotLocation(userContent, arg1(dependencyMap[5]).HotspotLocations.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP, arg1(dependencyMap[10]).DismissibleContent.GUILD_HEADER_ANIMATED_GUILD_BANNER)) {
      flag = true;
    }
    return flag;
  },
  cleanup() {

  }
};
items[9] = {
  version: 12,
  run(userContent) {
    const Storage = arg1(dependencyMap[6]).Storage;
    let value = Storage.get("hideNag");
    if (value) {
      value = migrateDismissibleContent(userContent, arg1(dependencyMap[10]).DismissibleContent.NAGBAR_NOTICE_DOWNLOAD);
    }
    let flag = false;
    if (value) {
      flag = true;
    }
    const Storage2 = arg1(dependencyMap[6]).Storage;
    value = Storage2.get("hideConnectSpotify");
    if (value) {
      value = migrateDismissibleContent(userContent, arg1(dependencyMap[10]).DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY);
    }
    if (value) {
      flag = true;
    }
    const Storage3 = arg1(dependencyMap[6]).Storage;
    let value1 = Storage3.get("hideConnectPlayStation");
    if (value1) {
      value1 = migrateDismissibleContent(userContent, arg1(dependencyMap[10]).DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION);
    }
    if (value1) {
      flag = true;
    }
    return flag;
  },
  cleanup() {
    const Storage = arg1(dependencyMap[6]).Storage;
    Storage.remove("hideNag");
    const Storage2 = arg1(dependencyMap[6]).Storage;
    Storage2.remove("hideConnectSpotify");
    const Storage3 = arg1(dependencyMap[6]).Storage;
    Storage3.remove("hideConnectPlayStation");
  }
};
items[10] = {
  version: 13,
  run(userContent) {
    const Storage = arg1(dependencyMap[6]).Storage;
    let value = Storage.get("hidePremiumPromo");
    if (value) {
      value = migrateDismissibleContent(userContent, arg1(dependencyMap[10]).DismissibleContent.NAGBAR_NOTICE_PREMIUM_PROMO);
    }
    let flag = false;
    if (value) {
      flag = true;
    }
    const Storage2 = arg1(dependencyMap[6]).Storage;
    value = Storage2.get("hidePremiumTier2TrialEnding");
    if (value) {
      value = migrateDismissibleContent(userContent, arg1(dependencyMap[10]).DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING);
    }
    if (value) {
      flag = true;
    }
    const Storage3 = arg1(dependencyMap[6]).Storage;
    let value1 = Storage3.get("hidePremiumReactivateNotice");
    if (value1) {
      value1 = migrateDismissibleContent(userContent, arg1(dependencyMap[10]).DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE);
    }
    if (value1) {
      flag = true;
    }
    return flag;
  },
  cleanup() {
    const Storage = arg1(dependencyMap[6]).Storage;
    Storage.remove("hidePremiumPromo");
    const Storage2 = arg1(dependencyMap[6]).Storage;
    Storage2.remove("hidePremiumTier2TrialEnding");
    const Storage3 = arg1(dependencyMap[6]).Storage;
    Storage3.remove("hidePremiumReactivateNotice");
  }
};
items[11] = {
  version: 14,
  run(userContent) {
    return migrateHotspotLocation(userContent, arg1(dependencyMap[5]).HotspotLocations.ACTIVITY_BEB_TUTORIAL, arg1(dependencyMap[10]).DismissibleContent.ACTIVITIES_TUTORIAL_COACH_MARK);
  },
  cleanup() {

  }
};
items[12] = {
  version: 15,
  run(userContent) {
    return migrateHotspotLocation(userContent, arg1(dependencyMap[5]).HotspotLocations.NOW_PLAYING_CONSENT_CARD, arg1(dependencyMap[10]).DismissibleContent.NOW_PLAYING_CONSENT_CARD);
  },
  cleanup() {

  }
};
items[13] = {
  version: 16,
  run(userContent) {
    const Storage = arg1(dependencyMap[6]).Storage;
    const value = Storage.get("PromotionsPersistedStore");
    if (null == value) {
      return false;
    } else {
      const lastDismissedOutboundPromotionStartDate = value._state.lastDismissedOutboundPromotionStartDate;
      let flag = null != lastDismissedOutboundPromotionStartDate;
      if (flag) {
        if (null == userContent.userContent) {
          const UserContentSettings = arg1(dependencyMap[3]).UserContentSettings;
          userContent.userContent = UserContentSettings.create();
        }
        flag = null == userContent.userContent.lastDismissedOutboundPromotionStartDate;
      }
      if (flag) {
        const StringValue = arg1(dependencyMap[9]).StringValue;
        const obj = { value: lastDismissedOutboundPromotionStartDate };
        userContent.userContent.lastDismissedOutboundPromotionStartDate = StringValue.create(obj);
        flag = true;
      }
      return flag;
    }
  },
  cleanup() {

  }
};
items[14] = {
  version: 17,
  run(textAndImages) {
    const PersistedStore = importDefault(dependencyMap[8]).PersistedStore;
    const state = PersistedStore.migrateAndReadStoreState("ExpressionSuggestionsPersistedStore", null).state;
    if (null == state) {
      return false;
    } else {
      const expressionSuggestionsEnabled = state.expressionSuggestionsEnabled;
      let flag = null != expressionSuggestionsEnabled;
      if (flag) {
        if (null == textAndImages.textAndImages) {
          const TextAndImagesSettings = arg1(dependencyMap[3]).TextAndImagesSettings;
          textAndImages.textAndImages = TextAndImagesSettings.create();
        }
        flag = null == textAndImages.textAndImages.expressionSuggestionsEnabled;
      }
      if (flag) {
        const BoolValue = arg1(dependencyMap[9]).BoolValue;
        const obj = { value: expressionSuggestionsEnabled };
        textAndImages.textAndImages.expressionSuggestionsEnabled = BoolValue.create(obj);
        flag = true;
      }
      return flag;
    }
  },
  cleanup() {
    const Storage = arg1(dependencyMap[6]).Storage;
    Storage.remove("ExpressionSuggestionsPersistedStore");
  }
};
items[15] = {
  version: 18,
  run(userContent) {
    let flag = false;
    if (migrateHotspotLocation(userContent, arg1(dependencyMap[5]).HotspotLocations.GUILD_DELETE_FEEDBACK, arg1(dependencyMap[10]).DismissibleContent.GUILD_DELETE_FEEDBACK)) {
      flag = true;
    }
    if (migrateHotspotLocation(userContent, arg1(dependencyMap[5]).HotspotLocations.GUILD_LEAVE_FEEDBACK, arg1(dependencyMap[10]).DismissibleContent.GUILD_LEAVE_FEEDBACK)) {
      flag = true;
    }
    return flag;
  },
  cleanup() {

  }
};
items[16] = {
  version: 19,
  run(userContent) {
    const Storage = arg1(dependencyMap[6]).Storage;
    const value = Storage.get("forumHelperCardStorageKey");
    let flag = false;
    if (tmp2) {
      flag = migrateDismissibleContent(userContent, arg1(dependencyMap[10]).DismissibleContent.FORUM_CHANNEL_HELPER_CARD);
    }
    return flag;
  },
  cleanup() {
    const Storage = arg1(dependencyMap[6]).Storage;
    Storage.remove("forumHelperCardStorageKey");
  }
};
items[17] = {
  version: 20,
  run(userContent) {
    const Storage = arg1(dependencyMap[6]).Storage;
    const value = Storage.get("lastChangeLogId");
    if (null == value) {
      return false;
    } else {
      if (obj.isSnowflake(value)) {
        if (null == userContent.userContent) {
          const UserContentSettings = arg1(dependencyMap[3]).UserContentSettings;
          userContent.userContent = UserContentSettings.create();
        } else if (null != userContent.userContent) {
          if (null != userContent.userContent.lastReceivedChangelogId) {
            if ("0" !== userContent.userContent.lastReceivedChangelogId) {
              const Storage3 = arg1(dependencyMap[6]).Storage;
              Storage3.remove("lastChangeLogId");
              return false;
            }
          }
        }
        userContent.userContent.lastReceivedChangelogId = value;
        return true;
      } else {
        const Storage2 = arg1(dependencyMap[6]).Storage;
        Storage2.remove("lastChangeLogId");
        return false;
      }
      const obj = arg1(dependencyMap[11]);
    }
  },
  cleanup() {
    const Storage = arg1(dependencyMap[6]).Storage;
    Storage.remove("lastChangeLogId");
  }
};
items[18] = {
  version: 21,
  run(appearance) {
    appearance = appearance.appearance;
    let uiDensity;
    if (null != appearance) {
      uiDensity = appearance.uiDensity;
    }
    let flag = uiDensity === arg1(dependencyMap[3]).UIDensity.COMPACT;
    if (flag) {
      appearance.appearance.uiDensity = arg1(dependencyMap[3]).UIDensity.DEFAULT;
      flag = true;
    }
    return flag;
  },
  cleanup() {

  }
};
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_settings/PreloadedUserSettingsMigrations.tsx");

export default items;
