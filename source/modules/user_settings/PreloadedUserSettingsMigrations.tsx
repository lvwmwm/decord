// Module ID: 13440
// Function ID: 103195
// Name: migrateDismissibleContent
// Dependencies: [1348, 653, 11483, 1282, 1333, 5596, 587, 1318, 566, 1313, 1334, 6753, 2]

// Module 13440 (migrateDismissibleContent)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ChannelNoticeTypes } from "ME";
import { MULTIACCOUNT_TOOLTIP_SEEN_KEY as closure_5 } from "MAX_ACCOUNTS";

const require = arg1;
function migrateDismissibleContent(userContent, CHANNEL_NOTICE_INVITE) {
  if (null == userContent.userContent) {
    const UserContentSettings = require(1282) /* _callSuper */.UserContentSettings;
    userContent.userContent = UserContentSettings.create();
  }
  if (null == userContent.userContent.dismissedContents) {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array();
    userContent.userContent.dismissedContents = uint8Array;
  }
  let flag = false;
  if (!obj.hasBit(userContent.userContent.dismissedContents, CHANNEL_NOTICE_INVITE)) {
    userContent.userContent.dismissedContents = require(1333) /* hasBit */.addBit(userContent.userContent.dismissedContents, CHANNEL_NOTICE_INVITE);
    flag = true;
    const obj2 = require(1333) /* hasBit */;
  }
  return flag;
}
function migrateHotspotLocation(userContent, ACTIVITY_BEB_TUTORIAL, ACCOUNT_MULTIACCOUNT_TOOLTIP) {
  const HotspotStore = require(5596) /* HotspotStore */.HotspotStore;
  const tmp = !HotspotStore.hasHiddenHotspot(ACTIVITY_BEB_TUTORIAL);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = migrateDismissibleContent(userContent, ACCOUNT_MULTIACCOUNT_TOOLTIP);
  }
  return tmp2;
}
let obj = {
  version: 2,
  run(inbox) {
    if (null != inbox.inbox) {
      return false;
    } else {
      const InboxSettings = require(1282) /* _callSuper */.InboxSettings;
      const obj = InboxSettings.create();
      inbox.inbox = obj;
      const Storage3 = require(587) /* Storage */.Storage;
      let flag2 = false;
      if (Storage3.get("seenInboxTutorial", false)) {
        obj.viewedTutorial = true;
        flag2 = true;
      }
      const Storage = require(587) /* Storage */.Storage;
      let value = Storage.get("recentsButtonTab2");
      if (null == value) {
        const Storage2 = require(587) /* Storage */.Storage;
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
              channel = channel.getChannel(tmp15);
              flag4 = tmp14;
              let tmp18 = channel;
              if (null == channel) {
                continue;
              } else {
                let tmp19 = require;
                let tmp20 = dependencyMap;
                let obj2 = require(1318) /* _createForOfIteratorHelperLoose */;
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
                continue;
              }
              continue;
            }
            continue;
          }
        }
        return tmp12;
      } else {
        if (value === { Mentions: "Recent Mentions", Unreads: "Inbox" }.Mentions) {
          let UNREADS = require(1282) /* _callSuper */.InboxTab.MENTIONS;
        } else {
          UNREADS = require(1282) /* _callSuper */.InboxTab.UNREADS;
        }
        obj.currentTab = UNREADS;
      }
    }
  },
  cleanup() {
    const Storage = require(587) /* Storage */.Storage;
    Storage.remove("seenInboxTutorial");
    const Storage2 = require(587) /* Storage */.Storage;
    Storage2.remove("recentsButtonTab2");
    const Storage3 = require(587) /* Storage */.Storage;
    Storage3.remove("unread-messages-collapsed-channels");
  }
};
let items = [obj, , , , , , , , , , , , , , , , , , ];
obj = {
  version: 3,
  run(textAndImages) {
    const PersistedStore = importDefault(566).PersistedStore;
    const items = [
      () => {
        const obj = {};
        const Storage = outer1_0(outer1_2[6]).Storage;
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
          const TextAndImagesSettings = require(1282) /* _callSuper */.TextAndImagesSettings;
          textAndImages.textAndImages = TextAndImagesSettings.create();
        }
        if (null == textAndImages.textAndImages.diversitySurrogate) {
          const StringValue = require(1313) /* _callSuper */.StringValue;
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
    const Storage = require(587) /* Storage */.Storage;
    let hasHiddenHotspotResult = true === Storage.get("HAS_SEEN_HUB_UPSELL");
    if (!hasHiddenHotspotResult) {
      const HotspotStore = require(5596) /* HotspotStore */.HotspotStore;
      hasHiddenHotspotResult = HotspotStore.hasHiddenHotspot(require(5596) /* HotspotStore */.HotspotLocations.HUB_SECOND_EMAIL_CONNECTION_UPSELL);
    }
    let flag = false;
    if (hasHiddenHotspotResult) {
      flag = migrateDismissibleContent(userContent, require(1334) /* DismissibleContent */.DismissibleContent.HUB_WAITLIST_UPSELL);
    }
    return flag;
  },
  cleanup() {
    const Storage = require(587) /* Storage */.Storage;
    Storage.remove("HAS_SEEN_HUB_UPSELL");
  }
};
items[2] = obj;
items[3] = {
  version: 5,
  run(textAndImages) {
    textAndImages = textAndImages.textAndImages;
    if (null == textAndImages) {
      const TextAndImagesSettings = require(1282) /* _callSuper */.TextAndImagesSettings;
      textAndImages = TextAndImagesSettings.create();
    }
    textAndImages.textAndImages = textAndImages;
    let notifications = textAndImages.notifications;
    if (null == notifications) {
      const NotificationSettings = require(1282) /* _callSuper */.NotificationSettings;
      notifications = NotificationSettings.create();
    }
    textAndImages.notifications = notifications;
    let privacy = textAndImages.privacy;
    if (null == privacy) {
      const PrivacySettings = require(1282) /* _callSuper */.PrivacySettings;
      privacy = PrivacySettings.create();
    }
    textAndImages.privacy = privacy;
    let voiceAndVideo = textAndImages.voiceAndVideo;
    if (null == voiceAndVideo) {
      const VoiceAndVideoSettings = require(1282) /* _callSuper */.VoiceAndVideoSettings;
      voiceAndVideo = VoiceAndVideoSettings.create();
    }
    textAndImages.voiceAndVideo = voiceAndVideo;
    let gameLibrary = textAndImages.gameLibrary;
    if (null == gameLibrary) {
      const GameLibrarySettings = require(1282) /* _callSuper */.GameLibrarySettings;
      gameLibrary = GameLibrarySettings.create();
    }
    textAndImages.gameLibrary = gameLibrary;
    let debug = textAndImages.debug;
    if (null == debug) {
      const DebugSettings = require(1282) /* _callSuper */.DebugSettings;
      debug = DebugSettings.create();
    }
    textAndImages.debug = debug;
    const Storage = require(587) /* Storage */.Storage;
    let obj = Storage.get("UserSettingsStore");
    if (null == obj) {
      obj = {};
    }
    let flag = false;
    if ("boolean" === typeof obj.useRichChatTextBox) {
      const BoolValue = require(1313) /* _callSuper */.BoolValue;
      obj = {};
      obj.value = obj.useRichChatTextBox;
      textAndImages.textAndImages.useRichChatInput = BoolValue.create(obj);
      flag = true;
    }
    if ("string" === typeof obj.renderSpoilers) {
      const StringValue = require(1313) /* _callSuper */.StringValue;
      const obj1 = { value: obj.renderSpoilers };
      textAndImages.textAndImages.renderSpoilers = StringValue.create(obj1);
      flag = true;
    }
    if ("boolean" === typeof obj.useThreadSidebar) {
      const BoolValue2 = require(1313) /* _callSuper */.BoolValue;
      const obj2 = { value: obj.useThreadSidebar };
      textAndImages.textAndImages.useThreadSidebar = BoolValue2.create(obj2);
      flag = true;
    }
    if ("boolean" === typeof obj.showInAppNotifications) {
      const BoolValue3 = require(1313) /* _callSuper */.BoolValue;
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
      const BoolValue4 = require(1313) /* _callSuper */.BoolValue;
      const obj4 = { value: obj.viewImageDescriptions };
      textAndImages.textAndImages.viewImageDescriptions = BoolValue4.create(obj4);
      flag = true;
    }
    if ("boolean" === typeof obj.showCommandSuggestions) {
      const BoolValue5 = require(1313) /* _callSuper */.BoolValue;
      const obj5 = { value: obj.showCommandSuggestions };
      textAndImages.textAndImages.showCommandSuggestions = BoolValue5.create(obj5);
      flag = true;
    }
    if ("boolean" === typeof obj.alwaysPreviewVideo) {
      const BoolValue6 = require(1313) /* _callSuper */.BoolValue;
      const obj6 = { value: obj.alwaysPreviewVideo };
      textAndImages.voiceAndVideo.alwaysPreviewVideo = BoolValue6.create(obj6);
      flag = true;
    }
    if ("boolean" === typeof obj.notifyFriendsOnGoLive) {
      const BoolValue7 = require(1313) /* _callSuper */.BoolValue;
      const obj7 = { value: obj.notifyFriendsOnGoLive };
      textAndImages.notifications.notifyFriendsOnGoLive = BoolValue7.create(obj7);
      flag = true;
    }
    if ("boolean" === typeof obj.installShortcutDesktop) {
      const BoolValue8 = require(1313) /* _callSuper */.BoolValue;
      const obj8 = { value: obj.installShortcutDesktop };
      textAndImages.gameLibrary.installShortcutDesktop = BoolValue8.create(obj8);
      flag = true;
    }
    if ("boolean" === typeof obj.installShortcutStartMenu) {
      const BoolValue9 = require(1313) /* _callSuper */.BoolValue;
      const obj9 = { value: obj.installShortcutStartMenu };
      textAndImages.gameLibrary.installShortcutStartMenu = BoolValue9.create(obj9);
      flag = true;
    }
    if ("boolean" === typeof obj.allowActivityPartyPrivacyFriends) {
      const BoolValue10 = require(1313) /* _callSuper */.BoolValue;
      const obj10 = { value: obj.allowActivityPartyPrivacyFriends };
      textAndImages.privacy.allowActivityPartyPrivacyFriends = BoolValue10.create(obj10);
      flag = true;
    }
    if ("boolean" === typeof obj.allowActivityPartyPrivacyVoiceChannel) {
      const BoolValue11 = require(1313) /* _callSuper */.BoolValue;
      const obj11 = { value: obj.allowActivityPartyPrivacyVoiceChannel };
      textAndImages.privacy.allowActivityPartyPrivacyVoiceChannel = BoolValue11.create(obj11);
      flag = true;
    }
    if ("boolean" === typeof obj.rtcPanelShowVoiceStates) {
      const BoolValue12 = require(1313) /* _callSuper */.BoolValue;
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
    return migrateHotspotLocation(userContent, require(5596) /* HotspotStore */.HotspotLocations.APPLICATION_COMMAND_TOOLTIP, require(1334) /* DismissibleContent */.DismissibleContent.APPLICATION_COMMAND_TOOLTIP);
  },
  cleanup() {

  }
};
items[5] = {
  version: 8,
  run(userContent) {
    return migrateHotspotLocation(userContent, require(5596) /* HotspotStore */.HotspotLocations.CHANNEL_BANNER_MEMBER_LIST_NOTICE, require(1334) /* DismissibleContent */.DismissibleContent.CHANNELINFO_CHANNELBANNER_NOTICE);
  },
  cleanup() {

  }
};
items[6] = {
  version: 9,
  run(userContent) {
    const HotspotStore = require(5596) /* HotspotStore */.HotspotStore;
    if (HotspotStore.hasHiddenHotspot(require(5596) /* HotspotStore */.HotspotLocations.MULTI_ACCOUNT_TOOLTIP)) {
      const Storage = require(587) /* Storage */.Storage;
      const result = Storage.set(closure_5, "true");
    }
    return migrateHotspotLocation(userContent, require(5596) /* HotspotStore */.HotspotLocations.MULTI_ACCOUNT_TOOLTIP, require(1334) /* DismissibleContent */.DismissibleContent.ACCOUNT_MULTIACCOUNT_TOOLTIP);
  },
  cleanup() {

  }
};
items[7] = {
  version: 10,
  run(userContent) {
    let flag = migrateHotspotLocation(userContent, require(5596) /* HotspotStore */.HotspotLocations.HUB_LINK_CHANNEL_NOTICE, require(1334) /* DismissibleContent */.DismissibleContent.CHANNEL_NOTICE_HUBLINK);
    const Storage = require(587) /* Storage */.Storage;
    let obj = Storage.get("channelNotices");
    if (null == obj) {
      obj = {};
    }
    let tmp = false === obj[ChannelNoticeTypes.INVITE];
    if (tmp) {
      tmp = migrateDismissibleContent(userContent, require(1334) /* DismissibleContent */.DismissibleContent.CHANNEL_NOTICE_INVITE);
    }
    if (tmp) {
      flag = true;
    }
    let tmp5 = false === obj[ChannelNoticeTypes.QUICKSWITCHER];
    if (tmp5) {
      tmp5 = migrateDismissibleContent(userContent, require(1334) /* DismissibleContent */.DismissibleContent.CHANNEL_NOTICE_QUICKSWITCHER);
    }
    if (tmp5) {
      flag = true;
    }
    let tmp9 = false === obj[ChannelNoticeTypes.GUILD_BOOSTING];
    if (tmp9) {
      tmp9 = migrateDismissibleContent(userContent, require(1334) /* DismissibleContent */.DismissibleContent.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION);
    }
    if (tmp9) {
      flag = true;
    }
    return flag;
  },
  cleanup() {
    const Storage = require(587) /* Storage */.Storage;
    Storage.remove("channelNotices");
  }
};
items[8] = {
  version: 11,
  run(userContent) {
    let flag = false;
    if (migrateHotspotLocation(userContent, require(5596) /* HotspotStore */.HotspotLocations.GUILD_EVENT_UPSELL, require(1334) /* DismissibleContent */.DismissibleContent.GUILD_HEADER_EVENT_UPSELL)) {
      flag = true;
    }
    if (migrateHotspotLocation(userContent, require(5596) /* HotspotStore */.HotspotLocations.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP, require(1334) /* DismissibleContent */.DismissibleContent.GUILD_HEADER_ANIMATED_GUILD_BANNER)) {
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
    const Storage = require(587) /* Storage */.Storage;
    let value = Storage.get("hideNag");
    if (value) {
      value = migrateDismissibleContent(userContent, require(1334) /* DismissibleContent */.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD);
    }
    let flag = false;
    if (value) {
      flag = true;
    }
    const Storage2 = require(587) /* Storage */.Storage;
    value = Storage2.get("hideConnectSpotify");
    if (value) {
      value = migrateDismissibleContent(userContent, require(1334) /* DismissibleContent */.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY);
    }
    if (value) {
      flag = true;
    }
    const Storage3 = require(587) /* Storage */.Storage;
    let value1 = Storage3.get("hideConnectPlayStation");
    if (value1) {
      value1 = migrateDismissibleContent(userContent, require(1334) /* DismissibleContent */.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION);
    }
    if (value1) {
      flag = true;
    }
    return flag;
  },
  cleanup() {
    const Storage = require(587) /* Storage */.Storage;
    Storage.remove("hideNag");
    const Storage2 = require(587) /* Storage */.Storage;
    Storage2.remove("hideConnectSpotify");
    const Storage3 = require(587) /* Storage */.Storage;
    Storage3.remove("hideConnectPlayStation");
  }
};
items[10] = {
  version: 13,
  run(userContent) {
    const Storage = require(587) /* Storage */.Storage;
    let value = Storage.get("hidePremiumPromo");
    if (value) {
      value = migrateDismissibleContent(userContent, require(1334) /* DismissibleContent */.DismissibleContent.NAGBAR_NOTICE_PREMIUM_PROMO);
    }
    let flag = false;
    if (value) {
      flag = true;
    }
    const Storage2 = require(587) /* Storage */.Storage;
    value = Storage2.get("hidePremiumTier2TrialEnding");
    if (value) {
      value = migrateDismissibleContent(userContent, require(1334) /* DismissibleContent */.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING);
    }
    if (value) {
      flag = true;
    }
    const Storage3 = require(587) /* Storage */.Storage;
    let value1 = Storage3.get("hidePremiumReactivateNotice");
    if (value1) {
      value1 = migrateDismissibleContent(userContent, require(1334) /* DismissibleContent */.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE);
    }
    if (value1) {
      flag = true;
    }
    return flag;
  },
  cleanup() {
    const Storage = require(587) /* Storage */.Storage;
    Storage.remove("hidePremiumPromo");
    const Storage2 = require(587) /* Storage */.Storage;
    Storage2.remove("hidePremiumTier2TrialEnding");
    const Storage3 = require(587) /* Storage */.Storage;
    Storage3.remove("hidePremiumReactivateNotice");
  }
};
items[11] = {
  version: 14,
  run(userContent) {
    return migrateHotspotLocation(userContent, require(5596) /* HotspotStore */.HotspotLocations.ACTIVITY_BEB_TUTORIAL, require(1334) /* DismissibleContent */.DismissibleContent.ACTIVITIES_TUTORIAL_COACH_MARK);
  },
  cleanup() {

  }
};
items[12] = {
  version: 15,
  run(userContent) {
    return migrateHotspotLocation(userContent, require(5596) /* HotspotStore */.HotspotLocations.NOW_PLAYING_CONSENT_CARD, require(1334) /* DismissibleContent */.DismissibleContent.NOW_PLAYING_CONSENT_CARD);
  },
  cleanup() {

  }
};
items[13] = {
  version: 16,
  run(userContent) {
    const Storage = require(587) /* Storage */.Storage;
    const value = Storage.get("PromotionsPersistedStore");
    if (null == value) {
      return false;
    } else {
      const lastDismissedOutboundPromotionStartDate = value._state.lastDismissedOutboundPromotionStartDate;
      let flag = null != lastDismissedOutboundPromotionStartDate;
      if (flag) {
        if (null == userContent.userContent) {
          const UserContentSettings = require(1282) /* _callSuper */.UserContentSettings;
          userContent.userContent = UserContentSettings.create();
        }
        flag = null == userContent.userContent.lastDismissedOutboundPromotionStartDate;
      }
      if (flag) {
        const StringValue = require(1313) /* _callSuper */.StringValue;
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
    const PersistedStore = importDefault(566).PersistedStore;
    const state = PersistedStore.migrateAndReadStoreState("ExpressionSuggestionsPersistedStore", null).state;
    if (null == state) {
      return false;
    } else {
      const expressionSuggestionsEnabled = state.expressionSuggestionsEnabled;
      let flag = null != expressionSuggestionsEnabled;
      if (flag) {
        if (null == textAndImages.textAndImages) {
          const TextAndImagesSettings = require(1282) /* _callSuper */.TextAndImagesSettings;
          textAndImages.textAndImages = TextAndImagesSettings.create();
        }
        flag = null == textAndImages.textAndImages.expressionSuggestionsEnabled;
      }
      if (flag) {
        const BoolValue = require(1313) /* _callSuper */.BoolValue;
        const obj = { value: expressionSuggestionsEnabled };
        textAndImages.textAndImages.expressionSuggestionsEnabled = BoolValue.create(obj);
        flag = true;
      }
      return flag;
    }
  },
  cleanup() {
    const Storage = require(587) /* Storage */.Storage;
    Storage.remove("ExpressionSuggestionsPersistedStore");
  }
};
items[15] = {
  version: 18,
  run(userContent) {
    let flag = false;
    if (migrateHotspotLocation(userContent, require(5596) /* HotspotStore */.HotspotLocations.GUILD_DELETE_FEEDBACK, require(1334) /* DismissibleContent */.DismissibleContent.GUILD_DELETE_FEEDBACK)) {
      flag = true;
    }
    if (migrateHotspotLocation(userContent, require(5596) /* HotspotStore */.HotspotLocations.GUILD_LEAVE_FEEDBACK, require(1334) /* DismissibleContent */.DismissibleContent.GUILD_LEAVE_FEEDBACK)) {
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
    const Storage = require(587) /* Storage */.Storage;
    const value = Storage.get("forumHelperCardStorageKey");
    let flag = false;
    if (tmp2) {
      flag = migrateDismissibleContent(userContent, require(1334) /* DismissibleContent */.DismissibleContent.FORUM_CHANNEL_HELPER_CARD);
    }
    return flag;
  },
  cleanup() {
    const Storage = require(587) /* Storage */.Storage;
    Storage.remove("forumHelperCardStorageKey");
  }
};
items[17] = {
  version: 20,
  run(userContent) {
    const Storage = require(587) /* Storage */.Storage;
    const value = Storage.get("lastChangeLogId");
    if (null == value) {
      return false;
    } else {
      if (obj.isSnowflake(value)) {
        if (null == userContent.userContent) {
          const UserContentSettings = require(1282) /* _callSuper */.UserContentSettings;
          userContent.userContent = UserContentSettings.create();
        } else if (null != userContent.userContent) {
          if (null != userContent.userContent.lastReceivedChangelogId) {
            if ("0" !== userContent.userContent.lastReceivedChangelogId) {
              const Storage3 = require(587) /* Storage */.Storage;
              Storage3.remove("lastChangeLogId");
              return false;
            }
          }
        }
        userContent.userContent.lastReceivedChangelogId = value;
        return true;
      } else {
        const Storage2 = require(587) /* Storage */.Storage;
        Storage2.remove("lastChangeLogId");
        return false;
      }
      obj = require(6753) /* _createForOfIteratorHelperLoose */;
    }
  },
  cleanup() {
    const Storage = require(587) /* Storage */.Storage;
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
    let flag = uiDensity === require(1282) /* _callSuper */.UIDensity.COMPACT;
    if (flag) {
      appearance.appearance.uiDensity = require(1282) /* _callSuper */.UIDensity.DEFAULT;
      flag = true;
    }
    return flag;
  },
  cleanup() {

  }
};
let result = require("MAX_ACCOUNTS").fileFinishedImporting("modules/user_settings/PreloadedUserSettingsMigrations.tsx");

export default items;
