// Module ID: 17253
// Function ID: 17254
// Name: MobileNotifSettingsNodes
// Dependencies: [11181, 1128, 2864, 14941, 15648, 17254, 17255, 15652, 16764, 2]

// Module 17253 (MobileNotifSettingsNodes)
import intl2 from "intl" /* 1128 */;
import _modDef2864 from "module_2864" /* 2864 */;
import settings_NotifSettingsUtils from "settings/NotifSettingsUtils" /* 14941 */;
import NotifSettings from "NotifSettings" /* 15648 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15652 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16764 */;
import NotifSettingsActionCreators from "NotifSettingsActionCreators" /* 17254 */;
import useIsNotifSettingDisabledDefault from "useIsNotifSettingDisabled" /* 17255 */;
import SettingBuilders_mod from "SettingBuilders" /* 11181 */;
import size from "module_2" /* 2 */;

let SettingBuilders = SettingBuilders_mod;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.NxgGZA);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_REQUESTS);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_REQUESTS, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.FRIEND_REQUESTS);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIEND_REQUESTS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864["4McnAv"]);
  }
};
const toggle = SettingBuilders.createToggle(obj);
SettingBuilders = SettingBuilders_mod;
const obj2 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864["IUH/Oe"]);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.CALLS);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.CALLS, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.CALLS);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.CALLS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.YvbYqb);
  }
};
const toggle1 = SettingBuilders.createToggle(obj2);
SettingBuilders = SettingBuilders_mod;
const obj3 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.n0Wp6j);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.MISSED_MESSAGES_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.N14gsO);
  }
};
const toggle2 = SettingBuilders.createToggle(obj3);
SettingBuilders = SettingBuilders_mod;
const obj4 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.n0Wp6j);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.MISSED_MESSAGES_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.N14gsO);
  }
};
const toggle3 = SettingBuilders.createToggle(obj4);
SettingBuilders = SettingBuilders_mod;
const obj5 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.S9Z8aG);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.INVITES_RECONNECTING);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.INVITES_RECONNECTING, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.INVITES_RECONNECTING);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.INVITES_RECONNECTING);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864["70621N"]);
  }
};
const toggle4 = SettingBuilders.createToggle(obj5);
SettingBuilders = SettingBuilders_mod;
const obj6 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.roU6W6);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.TRENDING_SUGGESTIONS);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.TRENDING_SUGGESTIONS, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.TRENDING_SUGGESTIONS);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.TRENDING_SUGGESTIONS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864["AKm6+k"]);
  }
};
const toggle5 = SettingBuilders.createToggle(obj6);
SettingBuilders = SettingBuilders_mod;
const obj7 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.nLISld);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.UPDATES_OFFERS);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.UPDATES_OFFERS, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.UPDATES_OFFERS);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.UPDATES_OFFERS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_DISCOVERY_HIGHLIGHTS,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.rCdFq6);
  }
};
const toggle6 = SettingBuilders.createToggle(obj7);
SettingBuilders = SettingBuilders_mod;
const obj8 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.AAZKLL);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.CUSTOM_STATUS_UPDATE);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.CUSTOM_STATUS_UPDATE, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.CUSTOM_STATUS_UPDATE);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.CUSTOM_STATUS_UPDATE);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.ReIwY3);
  }
};
const toggle7 = SettingBuilders.createToggle(obj8);
SettingBuilders = SettingBuilders_mod;
const obj9 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864["/aEaD/"]);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_ONLINE);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_ONLINE, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.FRIEND_ONLINE);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIEND_ONLINE);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.UamA9K);
  }
};
const toggle8 = SettingBuilders.createToggle(obj9);
SettingBuilders = SettingBuilders_mod;
const obj10 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.nDMkO6);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_REQUEST_REMINDER);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_REQUEST_REMINDER, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.FRIEND_REQUEST_REMINDER);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIEND_REQUEST_REMINDER);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.FpYT36);
  }
};
const toggle9 = SettingBuilders.createToggle(obj10);
SettingBuilders = SettingBuilders_mod;
const obj11 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864["8t+tz0"]);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_SUGGESTIONS);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIEND_SUGGESTIONS, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.FRIEND_SUGGESTIONS);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIEND_SUGGESTIONS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.AgSgnj);
  }
};
const toggle10 = SettingBuilders.createToggle(obj11);
SettingBuilders = SettingBuilders_mod;
const obj12 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.semyB9);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.NUDGE_NEW_FRIEND_DM);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.NUDGE_NEW_FRIEND_DM, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.NUDGE_NEW_FRIEND_DM);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.NUDGE_NEW_FRIEND_DM);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.cmBiIi);
  }
};
const toggle11 = SettingBuilders.createToggle(obj12);
SettingBuilders = SettingBuilders_mod;
const obj13 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.tQCxJ5);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.PROFILE_UPDATES);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.PROFILE_UPDATES, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.PROFILE_UPDATES);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.PROFILE_UPDATES);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_FRIEND_ACTIVITY_TITLE,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.IvKJa3);
  }
};
const toggle12 = SettingBuilders.createToggle(obj13);
SettingBuilders = SettingBuilders_mod;
const obj14 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.LjJQt7);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIENDS_GAMING);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIENDS_GAMING, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.FRIENDS_GAMING);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIENDS_GAMING);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.BDz0u9);
  }
};
const toggle13 = SettingBuilders.createToggle(obj14);
SettingBuilders = SettingBuilders_mod;
const obj15 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864["9EDo+/"]);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIENDS_GAMING_LOW);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIENDS_GAMING_LOW, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.FRIENDS_GAMING_LOW);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIENDS_GAMING_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle14 = SettingBuilders.createToggle(obj15);
SettingBuilders = SettingBuilders_mod;
const obj16 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864["9EDo+/"]);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.FRIENDS_GAMING_DEFAULT);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FRIENDS_GAMING_DEFAULT, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.FRIENDS_GAMING_DEFAULT);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.FRIENDS_GAMING_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle15 = SettingBuilders.createToggle(obj16);
SettingBuilders = SettingBuilders_mod;
const obj17 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864["9EDo+/"]);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_OTHER);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_OTHER, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.GAMING_OTHER);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.GAMING_OTHER);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.Xb2n2D);
  }
};
const toggle16 = SettingBuilders.createToggle(obj17);
SettingBuilders = SettingBuilders_mod;
const obj18 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.Yv02mS);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.GO_LIVE);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GO_LIVE, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.GO_LIVE);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.GO_LIVE);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.bt8V96);
  }
};
const toggle17 = SettingBuilders.createToggle(obj18);
SettingBuilders = SettingBuilders_mod;
const obj19 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.Iy9grw);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.VOICE_ACTIVITY_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle18 = SettingBuilders.createToggle(obj19);
SettingBuilders = SettingBuilders_mod;
const obj20 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.Iy9grw);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.VOICE_ACTIVITY_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle19 = SettingBuilders.createToggle(obj20);
SettingBuilders = SettingBuilders_mod;
const obj21 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.DxG4wK);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_CHANNEL_ACTIVITY);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.VOICE_CHANNEL_ACTIVITY, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.VOICE_CHANNEL_ACTIVITY);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.VOICE_CHANNEL_ACTIVITY);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864["0fxqGh"]);
  }
};
const toggle20 = SettingBuilders.createToggle(obj21);
SettingBuilders = SettingBuilders_mod;
const obj22 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.MOjygY);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.POLLS);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.POLLS, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.POLLS);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.POLLS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864["Rb3xh+"]);
  }
};
const toggle21 = SettingBuilders.createToggle(obj22);
SettingBuilders = SettingBuilders_mod;
const obj23 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.wv4QHR);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.REACTIONS);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.REACTIONS, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.REACTIONS);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.REACTIONS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.wmNqrk);
  }
};
const toggle22 = SettingBuilders.createToggle(obj23);
SettingBuilders = SettingBuilders_mod;
const obj24 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864["40TIqW"]);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.GUILD_EVENT_NOTIFICATIONS);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GUILD_EVENT_NOTIFICATIONS, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.GUILD_EVENT_NOTIFICATIONS);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.GUILD_EVENT_NOTIFICATIONS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.nuXMqX);
  }
};
const toggle23 = SettingBuilders.createToggle(obj24);
SettingBuilders = SettingBuilders_mod;
const obj25 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.HibKoy);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.FORUM_NOTIFICATIONS);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.FORUM_NOTIFICATIONS, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.FORUM_NOTIFICATIONS);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.FORUM_NOTIFICATIONS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.CHkkuK);
  }
};
const toggle24 = SettingBuilders.createToggle(obj25);
SettingBuilders = SettingBuilders_mod;
const obj26 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.kIrLfg);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.OTHER_GUILD);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.OTHER_GUILD, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.OTHER_GUILD);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.OTHER_GUILD);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864["izT+u4"]);
  }
};
const toggle25 = SettingBuilders.createToggle(obj26);
SettingBuilders = SettingBuilders_mod;
const obj27 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.tP1neL);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.SAFETY_ALERTS);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.SAFETY_ALERTS, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.SAFETY_ALERTS);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.SAFETY_ALERTS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.F3W6x5);
  }
};
const toggle26 = SettingBuilders.createToggle(obj27);
SettingBuilders = SettingBuilders_mod;
const obj28 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2864["4n388K"]);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.STAGE_NOTIFICATIONS);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.STAGE_NOTIFICATIONS, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.STAGE_NOTIFICATIONS);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.STAGE_NOTIFICATIONS);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2864.Pb4RGX);
  }
};
const toggle27 = SettingBuilders.createToggle(obj28);
const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsNodes.tsx");

export const FriendRequests = toggle;
export const Calls = toggle1;
export const MissedMessagesLow = toggle2;
export const MissedMessagesDefault = toggle3;
export const InvitesReconnecting = toggle4;
export const TrendingSuggestions = toggle5;
export const UpdatesOffers = toggle6;
export const CustomStatusUpdate = toggle7;
export const FriendOnline = toggle8;
export const FriendRequestReminder = toggle9;
export const FriendSuggestions = toggle10;
export const NudgeNewFriendDm = toggle11;
export const ProfileUpdates = toggle12;
export const FriendsGaming = toggle13;
export const FriendsGamingLow = toggle14;
export const FriendsGamingDefault = toggle15;
export const GamingOther = toggle16;
export const GoLive = toggle17;
export const VoiceActivityLow = toggle18;
export const VoiceActivityDefault = toggle19;
export const VoiceChannelActivity = toggle20;
export const Polls = toggle21;
export const Reactions = toggle22;
export const GuildEventNotifications = toggle23;
export const ForumNotifications = toggle24;
export const OtherGuild = toggle25;
export const SafetyAlerts = toggle26;
export const StageNotifications = toggle27;
