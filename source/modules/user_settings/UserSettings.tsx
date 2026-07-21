// Module ID: 3801
// Function ID: 31118
// Name: explicitContentFromProto
// Dependencies: []
// Exports: explicitContentFromProto, explicitContentToProto, goreContentFromProto, goreContentToProto

// Module 3801 (explicitContentFromProto)
let StatusTypes;
function explicitContentFromProto(arg0) {
  let explicitContentFriendDm;
  let explicitContentGuilds;
  let explicitContentNonFriendDm;
  let obj = arg0;
  if (null == arg0) {
    obj = {};
  }
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = obj);
  obj = {};
  if (null == explicitContentGuilds) {
    explicitContentGuilds = arg1(dependencyMap[7]).ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj.explicitContentGuilds = explicitContentGuilds;
  if (null == explicitContentFriendDm) {
    explicitContentFriendDm = arg1(dependencyMap[7]).ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj.explicitContentFriendDm = explicitContentFriendDm;
  if (null == explicitContentNonFriendDm) {
    explicitContentNonFriendDm = arg1(dependencyMap[7]).ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj.explicitContentNonFriendDm = explicitContentNonFriendDm;
  return obj;
}
function explicitContentToProto(arg0) {
  let explicitContentFriendDm;
  let explicitContentGuilds;
  let explicitContentNonFriendDm;
  ({ explicitContentGuilds, explicitContentFriendDm, explicitContentNonFriendDm } = arg0);
  const obj = {};
  let tmp;
  if (null != explicitContentGuilds) {
    tmp = explicitContentGuilds;
  }
  obj.explicitContentGuilds = tmp;
  let tmp2;
  if (null != explicitContentFriendDm) {
    tmp2 = explicitContentFriendDm;
  }
  obj.explicitContentFriendDm = tmp2;
  let tmp3;
  if (null != explicitContentNonFriendDm) {
    tmp3 = explicitContentNonFriendDm;
  }
  obj.explicitContentNonFriendDm = tmp3;
  return obj;
}
function goreContentFromProto(arg0) {
  let goreContentFriendDm;
  let goreContentGuilds;
  let goreContentNonFriendDm;
  let obj = arg0;
  if (null == arg0) {
    obj = {};
  }
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = obj);
  obj = {};
  if (null == goreContentGuilds) {
    goreContentGuilds = arg1(dependencyMap[7]).ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj.goreContentGuilds = goreContentGuilds;
  if (null == goreContentFriendDm) {
    goreContentFriendDm = arg1(dependencyMap[7]).ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj.goreContentFriendDm = goreContentFriendDm;
  if (null == goreContentNonFriendDm) {
    goreContentNonFriendDm = arg1(dependencyMap[7]).ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  obj.goreContentNonFriendDm = goreContentNonFriendDm;
  return obj;
}
function goreContentToProto(arg0) {
  let goreContentFriendDm;
  let goreContentGuilds;
  let goreContentNonFriendDm;
  ({ goreContentGuilds, goreContentFriendDm, goreContentNonFriendDm } = arg0);
  const obj = {};
  let tmp;
  if (null != goreContentGuilds) {
    tmp = goreContentGuilds;
  }
  obj.goreContentGuilds = tmp;
  let tmp2;
  if (null != goreContentFriendDm) {
    tmp2 = goreContentFriendDm;
  }
  obj.goreContentFriendDm = tmp2;
  let tmp3;
  if (null != goreContentNonFriendDm) {
    tmp3 = goreContentNonFriendDm;
  }
  obj.goreContentNonFriendDm = tmp3;
  return obj;
}
let closure_2 = importDefault(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const UserSettingsDelay = tmp2.UserSettingsDelay;
({ DmSpamFilterTypes: closure_3, ExplicitContentFilterTypes: closure_4 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ AllFriendSourceFlags: closure_5, SpoilerRenderSetting: closure_6, StatusTypes } = arg1(dependencyMap[3]));
const StickerAnimationSettings = arg1(dependencyMap[4]).StickerAnimationSettings;
let obj = arg1(dependencyMap[5]);
const tmp4 = arg1(dependencyMap[3]);
const defineProtoSettingResult = obj.defineProtoSetting("textAndImages", "useLegacyChatInput", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj2 = arg1(dependencyMap[5]);
const defineProtoSettingResult1 = arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "useRichChatInput", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj3 = arg1(dependencyMap[5]);
const defineProtoSettingResult2 = arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "includeStickersInAutocomplete", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj4 = arg1(dependencyMap[5]);
const defineProtoSettingResult3 = arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "includeSoundmojiInAutocomplete", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj5 = arg1(dependencyMap[5]);
const defineProtoSettingResult4 = arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "renderSpoilers", (value) => {
  let ON_CLICK;
  if (null != value) {
    ON_CLICK = value.value;
  }
  if (null == ON_CLICK) {
    ON_CLICK = constants3.ON_CLICK;
  }
  return ON_CLICK;
}, (value) => {
  const StringValue = arg1(dependencyMap[6]).StringValue;
  return StringValue.create({ value });
});
const obj6 = arg1(dependencyMap[5]);
const defineProtoSettingResult5 = arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "useThreadSidebar", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj7 = arg1(dependencyMap[5]);
const defineProtoSettingResult6 = arg1(dependencyMap[5]).defineProtoSetting("notifications", "showInAppNotifications", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj8 = arg1(dependencyMap[5]);
const defineProtoSettingResult7 = arg1(dependencyMap[5]).defineProtoSetting("notifications", "reactionNotifications", (arg0) => {
  let NOTIFICATIONS_ENABLED = arg0;
  if (null == arg0) {
    NOTIFICATIONS_ENABLED = arg1(dependencyMap[7]).ReactionNotificationType.NOTIFICATIONS_ENABLED;
  }
  return NOTIFICATIONS_ENABLED;
}, (arg0) => arg0);
const obj9 = arg1(dependencyMap[5]);
const defineProtoSettingResult8 = arg1(dependencyMap[5]).defineProtoSetting("notifications", "customStatusPushNotifications", (arg0) => {
  let STATUS_PUSH_UNSET = arg0;
  if (null == arg0) {
    STATUS_PUSH_UNSET = arg1(dependencyMap[7]).CustomStatusPushNotificationType.STATUS_PUSH_UNSET;
  }
  return STATUS_PUSH_UNSET;
}, (arg0) => arg0);
const obj10 = arg1(dependencyMap[5]);
const defineProtoSettingResult9 = arg1(dependencyMap[5]).defineProtoSetting("notifications", "enableSummaryReminderNotifications", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj11 = arg1(dependencyMap[5]);
const defineProtoSettingResult10 = arg1(dependencyMap[5]).defineProtoSetting("notifications", "enableScreenDowntimeScheduleNotifications", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj12 = arg1(dependencyMap[5]);
const defineProtoSettingResult11 = arg1(dependencyMap[5]).defineProtoSetting("notifications", "enableVoiceActivityNotifications", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj13 = arg1(dependencyMap[5]);
const defineProtoSettingResult12 = arg1(dependencyMap[5]).defineProtoSetting("notifications", "enableFriendOnlineNotifications", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj14 = arg1(dependencyMap[5]);
const defineProtoSettingResult13 = arg1(dependencyMap[5]).defineProtoSetting("notifications", "enableFriendAnniversaryNotifications", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj15 = arg1(dependencyMap[5]);
const defineProtoSettingResult14 = arg1(dependencyMap[5]).defineProtoSetting("notifications", "enableServerTrendingNotifications", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj16 = arg1(dependencyMap[5]);
const defineProtoSettingResult15 = arg1(dependencyMap[5]).defineProtoSetting("notifications", "enableProfileUpdatesNotifications", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj17 = arg1(dependencyMap[5]);
const defineProtoSettingResult16 = arg1(dependencyMap[5]).defineProtoSetting("notifications", "enableFriendGamingActivityNotifications", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj18 = arg1(dependencyMap[5]);
const defineProtoSettingResult17 = arg1(dependencyMap[5]).defineProtoSetting("notifications", "enableUpcomingServerEventNotifications", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj19 = arg1(dependencyMap[5]);
const defineProtoSettingResult18 = arg1(dependencyMap[5]).defineProtoSetting("notifications", "quietMode", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
let closure_9 = [];
const obj20 = arg1(dependencyMap[5]);
const defineProtoSettingResult19 = arg1(dependencyMap[5]).defineProtoSetting("notifications", "focusModeExpiresAtMs", (arg0) => {
  let str = "0";
  if (null != arg0) {
    str = arg0;
  }
  return str;
}, (arg0) => arg0);
const obj21 = arg1(dependencyMap[5]);
const defineProtoSettingResult20 = arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "emojiPickerCollapsedSections", (arg0) => {
  let tmp = arg0;
  if (null == arg0) {
    tmp = closure_9;
  }
  return tmp;
}, (arg0) => arg0);
const obj22 = arg1(dependencyMap[5]);
const defineProtoSettingResult21 = arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "stickerPickerCollapsedSections", (arg0) => {
  let tmp = arg0;
  if (null == arg0) {
    tmp = closure_9;
  }
  return tmp;
}, (arg0) => arg0);
const obj23 = arg1(dependencyMap[5]);
const defineProtoSettingResult22 = arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "soundboardPickerCollapsedSections", (arg0) => {
  let tmp = arg0;
  if (null == arg0) {
    tmp = closure_9;
  }
  return tmp;
}, (arg0) => arg0);
const obj24 = arg1(dependencyMap[5]);
const defineProtoSettingResult23 = arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "viewImageDescriptions", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj25 = arg1(dependencyMap[5]);
const defineProtoSettingResult24 = arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "showCommandSuggestions", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj26 = arg1(dependencyMap[5]);
const defineProtoSettingResult25 = arg1(dependencyMap[5]).defineProtoSetting("voiceAndVideo", "alwaysPreviewVideo", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj27 = arg1(dependencyMap[5]);
const defineProtoSettingResult26 = arg1(dependencyMap[5]).defineProtoSetting("voiceAndVideo", "disableStreamPreviews", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj28 = arg1(dependencyMap[5]);
const defineProtoSettingResult27 = arg1(dependencyMap[5]).defineProtoSetting("notifications", "notifyFriendsOnGoLive", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj29 = arg1(dependencyMap[5]);
const defineProtoSettingResult28 = arg1(dependencyMap[5]).defineProtoSetting("notifications", "notifyFriendsOnComeOnline", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj30 = arg1(dependencyMap[5]);
const defineProtoSettingResult29 = arg1(dependencyMap[5]).defineProtoSetting("notifications", "notifyFriendsOnProfileUpdate", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj31 = arg1(dependencyMap[5]);
const defineProtoSettingResult30 = arg1(dependencyMap[5]).defineProtoSetting("notifications", "notificationCenterAckedBeforeId", (arg0) => {
  let str = "0";
  if (null != arg0) {
    str = arg0;
  }
  return str;
}, (arg0) => arg0);
const obj32 = arg1(dependencyMap[5]);
const defineProtoSettingResult31 = arg1(dependencyMap[5]).defineProtoSetting("gameLibrary", "installShortcutDesktop", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj33 = arg1(dependencyMap[5]);
const defineProtoSettingResult32 = arg1(dependencyMap[5]).defineProtoSetting("gameLibrary", "installShortcutStartMenu", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj34 = arg1(dependencyMap[5]);
const defineProtoSettingResult33 = arg1(dependencyMap[5]).defineProtoSetting("privacy", "allowActivityPartyPrivacyFriends", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
let closure_10 = [];
const obj35 = arg1(dependencyMap[5]);
const defineProtoSettingResult34 = arg1(dependencyMap[5]).defineProtoSetting("privacy", "allowActivityPartyPrivacyVoiceChannel", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj36 = arg1(dependencyMap[5]);
const defineProtoSettingResult35 = arg1(dependencyMap[5]).defineProtoSetting("privacy", "messageRequestRestrictedGuildIds", (arg0) => {
  let tmp = arg0;
  if (null == arg0) {
    tmp = closure_10;
  }
  return tmp;
}, (arg0) => arg0);
const obj37 = arg1(dependencyMap[5]);
const defineProtoSettingResult36 = arg1(dependencyMap[5]).defineProtoSetting("privacy", "defaultMessageRequestRestricted", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj38 = arg1(dependencyMap[5]);
const defineProtoSettingResult37 = arg1(dependencyMap[5]).defineProtoSetting("privacy", "nonSpamRetrainingOptIn", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return value;
}, (value) => {
  let obj;
  if (null != value) {
    const BoolValue = arg1(dependencyMap[6]).BoolValue;
    obj = { value };
    obj = BoolValue.create(obj);
  }
  return obj;
});
const obj39 = arg1(dependencyMap[5]);
const defineProtoSettingResult38 = arg1(dependencyMap[5]).defineProtoSetting("privacy", "contactSyncEnabled", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj40 = arg1(dependencyMap[5]);
const defineProtoSettingResult39 = arg1(dependencyMap[5]).defineProtoSetting("privacy", "defaultGuildsRestricted", (arg0) => null != arg0 && arg0, (arg0) => arg0);
const obj41 = arg1(dependencyMap[5]);
const defineProtoSettingResult40 = arg1(dependencyMap[5]).defineProtoSetting("privacy", "defaultGuildsRestrictedV2", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj42 = arg1(dependencyMap[5]);
const defineProtoSettingResult41 = arg1(dependencyMap[5]).defineProtoSetting("privacy", "restrictedGuildIds", (arg0) => {
  let items = arg0;
  if (null == arg0) {
    items = [];
  }
  return items;
}, (arg0) => arg0);
const obj43 = arg1(dependencyMap[5]);
const defineProtoSettingResult42 = arg1(dependencyMap[5]).defineProtoSetting("privacy", "friendDiscoveryFlags", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  let num = 0;
  if (null != value) {
    num = value;
  }
  return num;
}, (value) => {
  const UInt32Value = arg1(dependencyMap[6]).UInt32Value;
  return UInt32Value.create({ value });
});
const obj44 = arg1(dependencyMap[5]);
const defineProtoSettingResult43 = arg1(dependencyMap[5]).defineProtoSetting("privacy", "friendSourceFlags", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  if (null == value) {
    value = closure_5;
  }
  return value;
}, (value) => {
  const UInt32Value = arg1(dependencyMap[6]).UInt32Value;
  return UInt32Value.create({ value });
});
const obj45 = arg1(dependencyMap[5]);
const defineProtoSettingResult44 = arg1(dependencyMap[5]).defineProtoSetting("debug", "rtcPanelShowVoiceStates", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj46 = arg1(dependencyMap[5]);
const defineProtoSettingResult45 = arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "convertEmoticons", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj47 = arg1(dependencyMap[5]);
const defineProtoSettingResult46 = arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "messageDisplayCompact", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj48 = arg1(dependencyMap[5]);
const defineProtoSettingResult47 = arg1(dependencyMap[5]).defineProtoSetting("voiceAndVideo", "soundboardSettings", (arg0) => arg0, (arg0) => arg0);
const obj49 = arg1(dependencyMap[5]);
const defineProtoSettingResult48 = arg1(dependencyMap[5]).defineProtoSetting("voiceAndVideo", "soundmojiVolume", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  let num = 100;
  if (null != value) {
    num = value;
  }
  return num;
}, (value) => {
  const FloatValue = arg1(dependencyMap[6]).FloatValue;
  return FloatValue.create({ value });
});
const obj50 = arg1(dependencyMap[5]);
const defineProtoSettingResult49 = arg1(dependencyMap[5]).defineProtoSetting("voiceAndVideo", "streamNotificationsEnabled", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj51 = arg1(dependencyMap[5]);
const defineProtoSettingResult50 = arg1(dependencyMap[5]).defineProtoSetting("privacy", "dropsOptedOut", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj52 = arg1(dependencyMap[5]);
const defineProtoSettingResult51 = arg1(dependencyMap[5]).defineProtoSetting("privacy", "quests3PDataOptedOut", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj53 = arg1(dependencyMap[5]);
const defineProtoSettingResult52 = arg1(dependencyMap[5]).defineProtoSetting("voiceAndVideo", "nativePhoneIntegrationEnabled", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj54 = arg1(dependencyMap[5]);
const defineProtoSettingResult53 = arg1(dependencyMap[5]).defineProtoSetting("voiceAndVideo", "afkTimeout", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  let num = 60;
  if (null != value) {
    num = value;
  }
  return num;
}, (value) => {
  const UInt32Value = arg1(dependencyMap[6]).UInt32Value;
  return UInt32Value.create({ value });
});
const obj55 = arg1(dependencyMap[5]);
const defineProtoSettingResult54 = arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "viewNsfwGuilds", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj56 = arg1(dependencyMap[5]);
const defineProtoSettingResult55 = arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "viewNsfwCommands", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj57 = arg1(dependencyMap[5]);
const defineProtoSettingResult56 = arg1(dependencyMap[5]).defineProtoSetting("privacy", "detectPlatformAccounts", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj58 = arg1(dependencyMap[5]);
const defineProtoSettingResult57 = arg1(dependencyMap[5]).defineProtoSetting("gameLibrary", "disableGamesTab", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj59 = arg1(dependencyMap[5]);
const defineProtoSettingResult58 = arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "enableTtsCommand", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj60 = arg1(dependencyMap[5]);
const defineProtoSettingResult59 = arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "explicitContentFilter", (value) => {
  let NON_FRIENDS;
  if (null != value) {
    NON_FRIENDS = value.value;
  }
  if (null == NON_FRIENDS) {
    NON_FRIENDS = constants2.NON_FRIENDS;
  }
  return NON_FRIENDS;
}, (value) => {
  const UInt32Value = arg1(dependencyMap[6]).UInt32Value;
  return UInt32Value.create({ value });
});
const obj61 = arg1(dependencyMap[5]);
const defineProtoSettingResult60 = arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "dmSpamFilter", (value) => {
  let NON_FRIENDS;
  if (null != value) {
    NON_FRIENDS = value.value;
  }
  if (null == NON_FRIENDS) {
    NON_FRIENDS = constants.NON_FRIENDS;
  }
  return NON_FRIENDS;
}, (value) => {
  const UInt32Value = arg1(dependencyMap[6]).UInt32Value;
  return UInt32Value.create({ value });
});
const obj62 = arg1(dependencyMap[5]);
const defineProtoSettingResult61 = arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "dmSpamFilterV2", (arg0) => {
  let DEFAULT_UNSET = arg0;
  if (null == arg0) {
    DEFAULT_UNSET = arg1(dependencyMap[7]).DmSpamFilterV2.DEFAULT_UNSET;
  }
  return DEFAULT_UNSET;
}, (arg0) => arg0);
const obj63 = arg1(dependencyMap[5]);
const defineProtoSettingResult62 = arg1(dependencyMap[5]).defineProtoSetting("status", "showCurrentGame", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj64 = arg1(dependencyMap[5]);
const defineProtoSettingResult63 = arg1(dependencyMap[5]).defineProtoSetting("privacy", "recentGamesEnabled", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj65 = arg1(dependencyMap[5]);
const set = new Set(Object.values(StatusTypes));
const defineProtoSettingResult64 = arg1(dependencyMap[5]).defineProtoSetting("privacy", "profileVisibility", (arg0) => {
  let FRIENDS_AND_ALL_GUILDS = arg0;
  if (null == arg0) {
    FRIENDS_AND_ALL_GUILDS = arg1(dependencyMap[7]).ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
  }
  return FRIENDS_AND_ALL_GUILDS;
}, (arg0) => arg0);
const obj66 = arg1(dependencyMap[5]);
const defineProtoSettingResult65 = arg1(dependencyMap[5]).defineProtoSetting("status", "status", (value) => {
  if (null != value) {
    if (set.has(value.value)) {
      let UNKNOWN = value.value;
    }
    return UNKNOWN;
  }
  UNKNOWN = StatusTypes.UNKNOWN;
}, (value) => {
  const StringValue = arg1(dependencyMap[6]).StringValue;
  return StringValue.create({ value });
});
const obj67 = arg1(dependencyMap[5]);
const defineProtoSettingResult66 = arg1(dependencyMap[5]).defineProtoSetting("status", "statusExpiresAtMs", (arg0) => {
  let str = "0";
  if (null != arg0) {
    str = arg0;
  }
  return str;
}, (arg0) => arg0);
const obj68 = arg1(dependencyMap[5]);
const defineProtoSettingResult67 = arg1(dependencyMap[5]).defineProtoSetting("status", "statusCreatedAtMs", (arg0) => arg0, (arg0) => arg0);
const obj69 = arg1(dependencyMap[5]);
const defineProtoSettingResult68 = arg1(dependencyMap[5]).defineProtoSetting("status", "customStatus", (arg0) => arg0, (arg0) => arg0);
const obj70 = arg1(dependencyMap[5]);
const defineProtoSettingResult69 = arg1(dependencyMap[5]).defineProtoSetting("clips", "allowVoiceRecording", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
const obj71 = arg1(dependencyMap[5]);
const result = obj71.wrapSettingWithSelectiveSyncing(arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "inlineAttachmentMedia", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
}), "text", "inlineAttachmentMedia");
const obj72 = arg1(dependencyMap[5]);
const obj73 = arg1(dependencyMap[5]);
const result1 = obj73.wrapSettingWithSelectiveSyncing(arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "inlineEmbedMedia", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
}), "text", "inlineEmbedMedia");
const obj74 = arg1(dependencyMap[5]);
const obj75 = arg1(dependencyMap[5]);
const result2 = obj75.wrapSettingWithSelectiveSyncing(arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "renderEmbeds", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
}), "text", "renderEmbeds");
const obj76 = arg1(dependencyMap[5]);
const obj77 = arg1(dependencyMap[5]);
const result3 = obj77.wrapSettingWithSelectiveSyncing(arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "renderReactions", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
}), "text", "renderReactions");
const obj78 = arg1(dependencyMap[5]);
const obj79 = arg1(dependencyMap[5]);
obj = { comparator: importDefault(dependencyMap[8]) };
const result4 = obj79.wrapSettingWithSelectiveSyncing(arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "defaultReactionEmoji", (disableDoubleTap) => {
  let animated;
  let emojiId;
  let emojiName;
  let obj = disableDoubleTap;
  if (null == disableDoubleTap) {
    obj = {};
  }
  ({ emojiId, emojiName, animated } = obj);
  obj = {};
  let value;
  if (null != emojiId) {
    value = emojiId.value;
  }
  obj.emojiId = value;
  value = undefined;
  if (null != emojiName) {
    value = emojiName.value;
  }
  obj.emojiName = value;
  let value1;
  if (null != animated) {
    value1 = animated.value;
  }
  obj.animated = value1;
  let value2;
  if (null != disableDoubleTap) {
    if (null != disableDoubleTap.disableDoubleTap) {
      value2 = iter.value;
    }
  }
  obj.disableDoubleTap = null != value2 && value2;
  return obj;
}, (arg0) => {
  let animated;
  let disableDoubleTap;
  let emojiId;
  let emojiName;
  const obj = {};
  ({ emojiId, emojiName, animated, disableDoubleTap } = arg0);
  const UInt64Value = arg1(dependencyMap[6]).UInt64Value;
  obj.emojiId = UInt64Value.create({ value: emojiId });
  const StringValue = arg1(dependencyMap[6]).StringValue;
  obj.emojiName = StringValue.create({ value: emojiName });
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  obj.animated = BoolValue.create({ value: animated });
  const BoolValue2 = arg1(dependencyMap[6]).BoolValue;
  obj.disableDoubleTap = BoolValue2.create({ value: disableDoubleTap });
  return obj;
}, obj), "text", "defaultReactionEmoji");
const obj80 = arg1(dependencyMap[5]);
const items = [tmp2.ListDensityMode.AUTO, , ];
const obj82 = arg1(dependencyMap[5]);
items[1] = arg1(dependencyMap[9]).ChannelListLayoutTypes.COZY;
items[2] = arg1(dependencyMap[9]).ChannelListLayoutTypes.COMPACT;
const set1 = new Set(items);
const defineProtoSettingResult70 = arg1(dependencyMap[5]).defineProtoSetting("localization", "timezoneOffset", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  let tmp2 = null;
  if (null != value) {
    tmp2 = value;
  }
  return tmp2;
}, (arg0) => {
  const Int32Value = arg1(dependencyMap[6]).Int32Value;
  const obj = {};
  let num = 0;
  if (null != arg0) {
    num = arg0;
  }
  obj.value = num;
  return Int32Value.create(obj);
});
const obj83 = arg1(dependencyMap[5]);
const items1 = [arg1(dependencyMap[9]).MessagePreviewTypes.ALL, arg1(dependencyMap[9]).MessagePreviewTypes.UNREADS, arg1(dependencyMap[9]).MessagePreviewTypes.NONE];
const set2 = new Set(items1);
const defineProtoSettingResult71 = arg1(dependencyMap[5]).defineProtoSetting("appearance", "channelListLayout", (value) => {
  if (null != value) {
    if (set1.has(value.value)) {
      let COZY = value.value;
    }
    return COZY;
  }
  COZY = arg1(dependencyMap[9]).ChannelListLayoutTypes.COZY;
}, (value) => {
  const StringValue = arg1(dependencyMap[6]).StringValue;
  return StringValue.create({ value });
});
const obj84 = arg1(dependencyMap[5]);
const defineProtoSettingResult72 = arg1(dependencyMap[5]).defineProtoSetting("appearance", "messagePreviews", (value) => {
  if (null != value) {
    if (set2.has(value.value)) {
      let ALL = value.value;
    }
    return ALL;
  }
  ALL = arg1(dependencyMap[9]).MessagePreviewTypes.ALL;
}, (value) => {
  const StringValue = arg1(dependencyMap[6]).StringValue;
  return StringValue.create({ value });
});
const obj85 = arg1(dependencyMap[5]);
const result5 = obj85.wrapSettingWithSelectiveSyncing(arg1(dependencyMap[5]).defineProtoSetting("appearance", "developerMode", (arg0) => null != arg0 && arg0, (arg0) => arg0), "appearance", "developerMode");
const obj86 = arg1(dependencyMap[5]);
const obj87 = arg1(dependencyMap[5]);
const defineProtoSettingResult73 = arg1(dependencyMap[5]).defineProtoSetting("appearance", "darkSidebar", (arg0) => null != arg0 && arg0, (arg0) => arg0);
obj = { comparator: arg1(dependencyMap[10]).isEqual };
const obj88 = arg1(dependencyMap[5]);
const defineProtoSettingResult74 = arg1(dependencyMap[5]).defineProtoSetting("appearance", "clientThemeSettings", (backgroundGradientPresetId) => {
  let obj = {};
  let value;
  if (null != backgroundGradientPresetId) {
    if (null != backgroundGradientPresetId.backgroundGradientPresetId) {
      value = iter.value;
    }
  }
  obj.backgroundGradientPresetId = value;
  let prop;
  if (null != backgroundGradientPresetId) {
    prop = backgroundGradientPresetId.customUserThemeSettings;
  }
  let tmp3;
  if (null != prop) {
    obj = { colors: backgroundGradientPresetId.customUserThemeSettings.colors, gradientColorStops: backgroundGradientPresetId.customUserThemeSettings.gradientColorStops, gradientAngle: backgroundGradientPresetId.customUserThemeSettings.gradientAngle, baseMix: backgroundGradientPresetId.customUserThemeSettings.baseMix };
    tmp3 = obj;
  }
  obj.customUserThemeSettings = tmp3;
  return obj;
}, (backgroundGradientPresetId) => {
  let obj = {};
  obj = undefined;
  if (null != backgroundGradientPresetId.backgroundGradientPresetId) {
    const UInt32Value = arg1(dependencyMap[6]).UInt32Value;
    obj = { value: backgroundGradientPresetId.backgroundGradientPresetId };
    obj = UInt32Value.create(obj);
  }
  obj.backgroundGradientPresetId = obj;
  let tmp4;
  if (null != backgroundGradientPresetId.customUserThemeSettings) {
    const obj1 = { colors: backgroundGradientPresetId.customUserThemeSettings.colors, gradientColorStops: backgroundGradientPresetId.customUserThemeSettings.gradientColorStops, gradientAngle: backgroundGradientPresetId.customUserThemeSettings.gradientAngle, baseMix: backgroundGradientPresetId.customUserThemeSettings.baseMix };
    tmp4 = obj1;
  }
  obj.customUserThemeSettings = tmp4;
  return obj;
}, obj);
const obj90 = arg1(dependencyMap[5]);
const obj91 = arg1(dependencyMap[5]);
const result6 = obj90.wrapSettingWithOverride(obj91.wrapSettingWithSelectiveSyncing(arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "gifAutoPlay", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
}), "text", "gifAutoPlay"), "gifAutoPlay", () => {
  const iter = store.getOverride("gifAutoPlay");
  let value;
  if (null != iter) {
    value = iter.value;
  }
  return value;
}, () => {
  const items = [closure_2];
  return arg1(dependencyMap[11]).useStateFromStores(items, () => {
    const iter = override.getOverride("gifAutoPlay");
    let value;
    if (null != iter) {
      value = iter.value;
    }
    return value;
  });
});
const obj92 = arg1(dependencyMap[5]);
const obj93 = arg1(dependencyMap[5]);
const obj94 = arg1(dependencyMap[5]);
const result7 = obj93.wrapSettingWithOverride(obj94.wrapSettingWithSelectiveSyncing(arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "animateEmoji", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
}), "text", "animateEmoji"), "animateEmoji", () => {
  const iter = store.getOverride("animateEmoji");
  let value;
  if (null != iter) {
    value = iter.value;
  }
  return value;
}, () => {
  const items = [closure_2];
  return arg1(dependencyMap[11]).useStateFromStores(items, () => {
    const iter = override.getOverride("animateEmoji");
    let value;
    if (null != iter) {
      value = iter.value;
    }
    return value;
  });
});
const obj95 = arg1(dependencyMap[5]);
const obj96 = arg1(dependencyMap[5]);
const obj97 = arg1(dependencyMap[5]);
let closure_14 = [];
const result8 = obj96.wrapSettingWithOverride(obj97.wrapSettingWithSelectiveSyncing(arg1(dependencyMap[5]).defineProtoSetting("textAndImages", "animateStickers", (value) => {
  let ALWAYS_ANIMATE;
  if (null != value) {
    ALWAYS_ANIMATE = value.value;
  }
  if (null == ALWAYS_ANIMATE) {
    ALWAYS_ANIMATE = StickerAnimationSettings.ALWAYS_ANIMATE;
  }
  return ALWAYS_ANIMATE;
}, (value) => {
  const UInt32Value = arg1(dependencyMap[6]).UInt32Value;
  return UInt32Value.create({ value });
}), "text", "animateStickers"), "animateStickers", () => {
  const iter = store.getOverride("animateStickers");
  let value;
  if (null != iter) {
    value = iter.value;
  }
  return value;
}, () => {
  const items = [closure_2];
  return arg1(dependencyMap[11]).useStateFromStores(items, () => {
    const iter = override.getOverride("animateStickers");
    let value;
    if (null != iter) {
      value = iter.value;
    }
    return value;
  });
});
const obj98 = arg1(dependencyMap[5]);
const obj99 = arg1(dependencyMap[5]);
obj = arg1(dependencyMap[5]);
obj = { delay: UserSettingsDelay.FREQUENT_USER_ACTION };
let closure_15 = [];
const defineProtoSettingResult75 = arg1(dependencyMap[5]).defineProtoSetting("privacy", "activityRestrictedGuildIds", (arg0) => {
  let tmp = arg0;
  if (null == arg0) {
    tmp = closure_14;
  }
  return tmp;
}, (arg0) => arg0);
obj = arg1(dependencyMap[5]);
const defineProtoSettingResult76 = obj.defineProtoSetting("privacy", "activityRestrictedGuildIds", (arg0) => {
  let tmp = arg0;
  if (null == arg0) {
    tmp = closure_14;
  }
  return tmp;
}, (arg0) => arg0, obj);
obj = arg1(dependencyMap[5]);
obj = {};
obj = arg1(dependencyMap[5]);
obj.baseSetting = obj.defineProtoSetting("privacy", "defaultGuildsActivityRestricted", (arg0) => arg0, (arg0) => {
  let OFF = arg0;
  if (null == arg0) {
    OFF = arg1(dependencyMap[7]).GuildActivityStatusRestrictionDefault.OFF;
  }
  return OFF;
});
obj.isEligible = function isEligible() {
  return arg1(dependencyMap[12]).isSettingTeenByDefault(arg1(dependencyMap[13]).SettingsDefaultFeature.GUILD_ACTIVITY_STATUS);
};
obj.useIsEligible = function useIsEligible() {
  return arg1(dependencyMap[12]).useIsSettingTeenByDefault(arg1(dependencyMap[13]).SettingsDefaultFeature.GUILD_ACTIVITY_STATUS);
};
obj.ineligibleDefault = arg1(dependencyMap[7]).GuildActivityStatusRestrictionDefault.OFF;
obj.eligibleDefault = function eligibleDefault() {
  return arg1(dependencyMap[7]).GuildActivityStatusRestrictionDefault.ON_FOR_LARGE_GUILDS;
};
const result9 = obj.wrapSettingWithExperimentDefaults(obj);
obj = arg1(dependencyMap[5]);
obj = {};
obj = arg1(dependencyMap[5]);
obj.baseSetting = obj.defineProtoSetting("privacy", "defaultGuildsActivityRestrictedV2", (arg0) => {
  let tmp = null;
  if (arg0 !== arg1(dependencyMap[7]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_UNSET) {
    tmp = arg0;
  }
  return tmp;
}, (arg0) => {
  let ACTIVITY_STATUS_OFF = arg0;
  if (null == arg0) {
    ACTIVITY_STATUS_OFF = arg1(dependencyMap[7]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF;
  }
  return ACTIVITY_STATUS_OFF;
});
obj.isEligible = function isEligible() {
  return arg1(dependencyMap[12]).isSettingTeenByDefault(arg1(dependencyMap[13]).SettingsDefaultFeature.GUILD_ACTIVITY_STATUS);
};
obj.useIsEligible = function useIsEligible() {
  return arg1(dependencyMap[12]).useIsSettingTeenByDefault(arg1(dependencyMap[13]).SettingsDefaultFeature.GUILD_ACTIVITY_STATUS);
};
obj.ineligibleDefault = arg1(dependencyMap[7]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF;
obj.eligibleDefault = function eligibleDefault() {
  return arg1(dependencyMap[7]).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS;
};
const result10 = obj.wrapSettingWithExperimentDefaults(obj);
obj = arg1(dependencyMap[5]);
const defineProtoSettingResult77 = obj.defineProtoSetting("privacy", "activityJoiningRestrictedGuildIds", (arg0) => {
  let tmp = arg0;
  if (null == arg0) {
    tmp = closure_15;
  }
  return tmp;
}, (arg0) => arg0);
obj = arg1(dependencyMap[5]);
const defineProtoSettingResult78 = obj.defineProtoSetting("privacy", "familyCenterEnabledV2", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
obj = arg1(dependencyMap[5]);
const defineProtoSettingResult79 = obj.defineProtoSetting("privacy", "hideLegacyUsername", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
obj = arg1(dependencyMap[5]);
let definePropertyResult = obj.defineProtoSetting("privacy", "slayerSdkReceiveDmsInGame", (arg0) => {
  let SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET = arg0;
  if (null == arg0) {
    SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET = arg1(dependencyMap[7]).SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET;
  }
  return SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET;
}, (arg0) => arg0);
obj = arg1(dependencyMap[5]);
definePropertyResult = obj.defineProtoSetting("ads", "alwaysDeliver", (arg0) => null != arg0 && arg0, (arg0) => arg0);
obj = arg1(dependencyMap[5]);
definePropertyResult = obj.defineProtoSetting("textAndImages", "explicitContentSettings", explicitContentFromProto, explicitContentToProto);
obj = arg1(dependencyMap[5]);
definePropertyResult = obj.defineProtoSetting("textAndImages", "goreContentSettings", goreContentFromProto, goreContentToProto);
obj = arg1(dependencyMap[5]);
definePropertyResult = obj.defineProtoSetting("appearance", "searchResultExactCountEnabled", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
obj = arg1(dependencyMap[5]);
definePropertyResult = obj.defineProtoSetting("appearance", "happeningNowCardsDisabled", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
obj = arg1(dependencyMap[5]);
definePropertyResult = obj.defineProtoSetting("appearance", "timestampHourCycle", (arg0) => {
  let AUTO = arg0;
  if (null == arg0) {
    AUTO = arg1(dependencyMap[7]).TimestampHourCycle.AUTO;
  }
  return AUTO;
}, (arg0) => arg0);
obj = arg1(dependencyMap[5]);
definePropertyResult = obj.defineProtoSetting("appearance", "defaultGuildThemePreference", arg1(dependencyMap[14]).resolveDefaultGuildThemePreference, (arg0) => arg0);
obj = arg1(dependencyMap[5]);
definePropertyResult = obj.defineProtoSetting("appearance", "launchPadMode", (arg0) => {
  let LAUNCH_PAD_DISABLED = arg0;
  if (null == arg0) {
    LAUNCH_PAD_DISABLED = arg1(dependencyMap[7]).LaunchPadMode.LAUNCH_PAD_DISABLED;
  }
  return LAUNCH_PAD_DISABLED;
}, (arg0) => arg0);
obj = arg1(dependencyMap[5]);
definePropertyResult = obj.defineProtoSetting("appearance", "swipeRightToLeftMode", (arg0) => {
  let SWIPE_RIGHT_TO_LEFT_UNSET = arg0;
  if (null == arg0) {
    SWIPE_RIGHT_TO_LEFT_UNSET = arg1(dependencyMap[7]).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET;
  }
  return SWIPE_RIGHT_TO_LEFT_UNSET;
}, (arg0) => arg0);
obj = arg1(dependencyMap[5]);
definePropertyResult = obj.defineProtoSetting("userContent", "lastReceivedChangelogId", (arg0) => {
  let str = "0";
  if (null != arg0) {
    str = arg0;
  }
  return str;
}, (arg0) => arg0);
obj = arg1(dependencyMap[5]);
definePropertyResult = obj.defineProtoSetting("safetySettings", "ignoreProfileSpeedbumpDisabled", (arg0) => null != arg0 && arg0, (arg0) => arg0);
obj = arg1(dependencyMap[5]);
definePropertyResult = obj.defineProtoSetting("appearance", "uiDensity", (arg0) => {
  let DEFAULT = arg0;
  if (arg0 === arg1(dependencyMap[7]).UIDensity.UNSET_UI_DENSITY) {
    DEFAULT = arg1(dependencyMap[7]).UIDensity.DEFAULT;
  } else if (null == DEFAULT) {
    DEFAULT = arg1(dependencyMap[7]).UIDensity.DEFAULT;
  }
  return DEFAULT;
}, (arg0) => arg0);
obj = arg1(dependencyMap[5]);
obj = { delay: UserSettingsDelay.AUTOMATED };
definePropertyResult = obj.defineProtoSetting("inAppFeedbackSettings", "inAppFeedbackStates", (arg0) => {
  let obj = arg0;
  if (null == arg0) {
    obj = {};
  }
  return arg1(dependencyMap[10]).mapValues(obj, (arg0) => callback(closure_1[10]).mapValues(arg0, (value) => {
    value = undefined;
    if (null != value) {
      value = value.value;
    }
    let NumberResult;
    if (null != value) {
      const _Number = Number;
      NumberResult = Number(value.value);
    }
    return NumberResult;
  }));
}, (arg0) => arg1(dependencyMap[10]).mapValues(arg0, (arg0) => callback(closure_1[10]).mapValues(arg0, (arg0) => {
  const UInt64Value = callback(closure_1[6]).UInt64Value;
  const obj = {};
  let StringResult;
  if (null != arg0) {
    const _String = String;
    StringResult = String(arg0);
  }
  obj.value = StringResult;
  return UInt64Value.create(obj);
})), obj);
obj = arg1(dependencyMap[5]);
definePropertyResult = obj.defineProtoSetting("textAndImages", "isCrossDmSearchEnabled", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
obj = arg1(dependencyMap[5]);
definePropertyResult = obj.defineProtoSetting("privacy", "hideFriendRequestNotes", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null != value && value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
obj = arg1(dependencyMap[15]);
definePropertyResult = obj.fileFinishedImporting("modules/user_settings/UserSettings.tsx");

export const UseLegacyChatInput = defineProtoSettingResult;
export const UseRichChatInput = defineProtoSettingResult1;
export const IncludeStickersInAutocomplete = defineProtoSettingResult2;
export const IncludeSoundmojiInAutocomplete = defineProtoSettingResult3;
export const RenderSpoilers = defineProtoSettingResult4;
export const UseThreadSidebar = defineProtoSettingResult5;
export const ShowInAppNotifications = defineProtoSettingResult6;
export const ReactionNotifications = defineProtoSettingResult7;
export const CustomStatusPushNotifications = defineProtoSettingResult8;
export const EnableSummaryReminderNotifications = defineProtoSettingResult9;
export const EnableScreenDowntimeScheduleNotifications = defineProtoSettingResult10;
export const EnableVoiceActivityNotifications = defineProtoSettingResult11;
export const EnableFriendOnlineNotifications = defineProtoSettingResult12;
export const EnableFriendAnniversaryNotifications = defineProtoSettingResult13;
export const EnableServerTrendingNotifications = defineProtoSettingResult14;
export const EnableProfileUpdatesNotifications = defineProtoSettingResult15;
export const EnableFriendGamingActivityNotifications = defineProtoSettingResult16;
export const EnableUpcomingServerEventNotifications = defineProtoSettingResult17;
export const FocusMode = defineProtoSettingResult18;
export const FocusModeExpiresAtSetting = defineProtoSettingResult19;
export const EmojiPickerCollapsedSections = defineProtoSettingResult20;
export const StickerPickerCollapsedSections = defineProtoSettingResult21;
export const SoundboardPickerCollapsedSections = defineProtoSettingResult22;
export const ViewImageDescriptions = defineProtoSettingResult23;
export const ShowCommandSuggestions = defineProtoSettingResult24;
export const AlwaysPreviewVideo = defineProtoSettingResult25;
export const DisableStreamPreviews = defineProtoSettingResult26;
export const NotifyFriendsOnGoLive = defineProtoSettingResult27;
export const NotifyFriendsOnComeOnline = defineProtoSettingResult28;
export const NotifyFriendsOnProfileUpdate = defineProtoSettingResult29;
export const NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET = "0";
export const NotificationCenterAckedBeforeId = defineProtoSettingResult30;
export const InstallShortcutDesktop = defineProtoSettingResult31;
export const InstallShortcutStartMenu = defineProtoSettingResult32;
export const AllowActivityPartyPrivacyFriends = defineProtoSettingResult33;
export const AllowActivityPartyPrivacyVoiceChannel = defineProtoSettingResult34;
export const MessageRequestRestrictedGuildIds = defineProtoSettingResult35;
export const MessageRequestRestrictedDefault = defineProtoSettingResult36;
export const NonSpamRetrainingOptIn = defineProtoSettingResult37;
export const ContactSyncEnabled = defineProtoSettingResult38;
export const DefaultGuildsRestricted = defineProtoSettingResult39;
export const DefaultGuildsRestrictedV2 = defineProtoSettingResult40;
export const RestrictedGuildIds = defineProtoSettingResult41;
export const FriendDiscoverySettings = defineProtoSettingResult42;
export const FriendSourceFlagsSetting = defineProtoSettingResult43;
export const RtcPanelShowVoiceStates = defineProtoSettingResult44;
export const ConvertEmoticons = defineProtoSettingResult45;
export const MessageDisplayCompact = defineProtoSettingResult46;
export const SoundboardSettings = defineProtoSettingResult47;
export const SoundmojiVolume = defineProtoSettingResult48;
export const StreamNotificationsEnabled = defineProtoSettingResult49;
export const DropsOptedOut = defineProtoSettingResult50;
export const Quests3PDataOptedOut = defineProtoSettingResult51;
export const NativePhoneIntegrationEnabled = defineProtoSettingResult52;
export const AfkTimeout = defineProtoSettingResult53;
export const ViewNsfwGuilds = defineProtoSettingResult54;
export const ViewNsfwCommands = defineProtoSettingResult55;
export const DetectPlatformAccounts = defineProtoSettingResult56;
export const DisableGamesTab = defineProtoSettingResult57;
export const EnableTTSCommand = defineProtoSettingResult58;
export const ExplicitContentFilter = defineProtoSettingResult59;
export const DmSpamFilter = defineProtoSettingResult60;
export const DmSpamFilterV2 = defineProtoSettingResult61;
export const ShowCurrentGame = defineProtoSettingResult62;
export const RecentGamesEnabled = defineProtoSettingResult63;
export const ProfileVisibility = defineProtoSettingResult64;
export const StatusSetting = defineProtoSettingResult65;
export const StatusExpiresAtSetting = defineProtoSettingResult66;
export const StatusCreatedAtSetting = defineProtoSettingResult67;
export const CustomStatusSetting = defineProtoSettingResult68;
export const ClipsAllowVoiceRecording = defineProtoSettingResult69;
export const InlineAttachmentMedia = result;
export const InlineEmbedMedia = result1;
export const RenderEmbeds = result2;
export const RenderReactions = result3;
export const DoubleTapReactionEmoji = result4;
export const TimezoneOffset = defineProtoSettingResult70;
export const ValidChannelListLayoutTypes = set1;
export const ChannelListLayoutSetting = defineProtoSettingResult71;
export const ValidMessagePreviewTypes = set2;
export const MessagePreviewSetting = defineProtoSettingResult72;
export const DeveloperMode = result5;
export const DarkSidebar = defineProtoSettingResult73;
export const ClientThemeSettings = defineProtoSettingResult74;
export const GifAutoPlay = result6;
export const AnimateEmoji = result7;
export const AnimateStickers = result8;
export const ActivityRestrictedGuilds = defineProtoSettingResult75;
export const ActivityRestrictedGuildsFrequent = defineProtoSettingResult76;
export const ActivityJoiningRestrictedGuilds = defineProtoSettingResult77;
export const DefaultGuildsActivityRestricted = result9;
export const DefaultGuildsActivityRestrictedV2 = result10;
export const FamilyCenterEnabled = defineProtoSettingResult78;
export const LegacyUsernameDisabled = defineProtoSettingResult79;
export const AllowGameFriendDmsInDiscord = obj.defineProtoSetting("privacy", "allowGameFriendDmsInDiscord", (value) => {
  value = undefined;
  if (null != value) {
    value = value.value;
  }
  return null == value || value;
}, (value) => {
  const BoolValue = arg1(dependencyMap[6]).BoolValue;
  return BoolValue.create({ value });
});
export const SlayerSDKReceiveDMsInGame = definePropertyResult;
export const AlwaysDeliverAds = definePropertyResult;
export { explicitContentFromProto };
export { explicitContentToProto };
export const ExplicitContentSettings = definePropertyResult;
export { goreContentFromProto };
export { goreContentToProto };
export const GoreContentSettings = definePropertyResult;
export const SearchResultExactCountEnabled = definePropertyResult;
export const HappeningNowCardsDisabled = definePropertyResult;
export const TimestampHourCycle = definePropertyResult;
export const DefaultGuildThemePreference = definePropertyResult;
export const LaunchPadModeSetting = definePropertyResult;
export const SwipeRightToLeftModeSetting = definePropertyResult;
export const LastReceivedChangelogId = definePropertyResult;
export const IgnoreProfileSpeedbumpDisabled = definePropertyResult;
export const UIDensitySetting = definePropertyResult;
export const InAppFeedbackStates = definePropertyResult;
export const IsCrossDMSearchEnabledSetting = definePropertyResult;
export const HideFriendRequestNotes = definePropertyResult;
