// Module ID: 17647
// Function ID: 17648
// Name: MobileNotifSettingsNodes
// Dependencies: [11970, 1112, 3207, 15155, 15857, 17648, 17649, 15860, 17109, 17151, 17148, 2]

// Module 17647 (MobileNotifSettingsNodes)
import intl4 from "intl" /* 1112 */;
import _modDef3207 from "module_3207" /* 3207 */;
import settings_NotifSettingsUtils from "settings/NotifSettingsUtils" /* 15155 */;
import NotifSettings from "NotifSettings" /* 15857 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15860 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17109 */;
import UpcomingServerEventExperiment from "UpcomingServerEventExperiment" /* 17148 */;
import SummaryReminderNotificationExperiment from "SummaryReminderNotificationExperiment" /* 17151 */;
import NotifSettingsActionCreators from "NotifSettingsActionCreators" /* 17648 */;
import useIsNotifSettingDisabledDefault from "useIsNotifSettingDisabled" /* 17649 */;
import SettingBuilders_mod from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

let SettingBuilders = SettingBuilders_mod;
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.XPZ3MF);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES
};
const toggle = SettingBuilders.createToggle(obj);
SettingBuilders = SettingBuilders_mod;
let obj2 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.vKk8Pc);
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
    const intl = intl4.intl;
    return intl.string(_modDef3207.KBUNsG);
  }
};
const toggle1 = SettingBuilders.createToggle(obj2);
SettingBuilders = SettingBuilders_mod;
let obj3 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207["4z4Nwr"]);
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
    const intl = intl4.intl;
    return intl.string(_modDef3207.EIpgpf);
  }
};
const toggle2 = SettingBuilders.createToggle(obj3);
SettingBuilders = SettingBuilders_mod;
const obj4 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207["4z4Nwr"]);
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
    const intl = intl4.intl;
    return intl.string(_modDef3207.EIpgpf);
  }
};
const toggle3 = SettingBuilders.createToggle(obj4);
SettingBuilders = SettingBuilders_mod;
const obj5 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.Hqhepa);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.SUMMARY_REMINDER);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.SUMMARY_REMINDER, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.SUMMARY_REMINDER);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    let showSettingsToggle = obj.useNotifSettingVisibility(NotifSettings.NotifSettings.SUMMARY_REMINDER);
    const obj2 = SummaryReminderNotificationExperiment;
    if (showSettingsToggle) {
      showSettingsToggle = obj2.useSummaryReminderNotificationExperiment("tabsV2Settings").showSettingsToggle;
    }
    return showSettingsToggle;
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_CALLS_MESSAGES
};
const toggle4 = SettingBuilders.createToggle(obj5);
SettingBuilders = SettingBuilders_mod;
const obj6 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.XIPvOz);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingRadioValue(NotifSettings.NotifSettings.REACTIONS_CHOICE);
  },
  onValueChange(arg0) {
    const updateNotifSettingRadioValue = NotifSettingsActionCreators.updateNotifSettingRadioValue;
    NotifSettingsActionCreators;
    return updateNotifSettingRadioValue(NotifSettings.NotifSettings.REACTIONS_CHOICE, Number(arg0));
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.REACTIONS_CHOICE);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_REACTIONS_CHOICE_ROUTE,
  hideTitle: true,
  useOptions() {
    let intl;
    let intl2;
    let intl3;
    const obj = { label: intl.string(_modDef3207.Lq41PP), value: 2 };
    intl = intl4.intl;
    const items = [obj, , ];
    const obj2 = { label: intl2.string(_modDef3207.RoC4aT), value: 1 };
    intl2 = intl4.intl;
    items[1] = obj2;
    const obj3 = { label: intl3.string(_modDef3207.kKc6Gs), value: 0 };
    intl3 = intl4.intl;
    items[2] = obj3;
    return items;
  }
};
const radio = SettingBuilders.createRadio(obj6);
SettingBuilders = SettingBuilders_mod;
const obj7 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.MKPw1A);
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
    const intl = intl4.intl;
    return intl.string(_modDef3207.PYWa6a);
  }
};
const toggle5 = SettingBuilders.createToggle(obj7);
SettingBuilders = SettingBuilders_mod;
const obj8 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207["9JqFYO"]);
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
    const intl = intl4.intl;
    return intl.string(_modDef3207["lFEv+c"]);
  }
};
const toggle6 = SettingBuilders.createToggle(obj8);
SettingBuilders = SettingBuilders_mod;
const obj9 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.iRfEpH);
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
    const intl = intl4.intl;
    return intl.string(_modDef3207.KqazEl);
  }
};
const toggle7 = SettingBuilders.createToggle(obj9);
SettingBuilders = SettingBuilders_mod;
const obj10 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.omDugL);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle8 = SettingBuilders.createToggle(obj10);
SettingBuilders = SettingBuilders_mod;
const obj11 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.omHz4g);
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
const toggle9 = SettingBuilders.createToggle(obj11);
SettingBuilders = SettingBuilders_mod;
const obj12 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.omHz4g);
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
const toggle10 = SettingBuilders.createToggle(obj12);
SettingBuilders = SettingBuilders_mod;
const obj13 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.Rx1V00);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle11 = SettingBuilders.createToggle(obj13);
SettingBuilders = SettingBuilders_mod;
const obj14 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207["4qUGgX"]);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.Va86jv);
  }
};
const toggle12 = SettingBuilders.createToggle(obj14);
SettingBuilders = SettingBuilders_mod;
const obj15 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207["2IvWoE"]);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.PKfGnH);
  }
};
const toggle13 = SettingBuilders.createToggle(obj15);
SettingBuilders = SettingBuilders_mod;
const obj16 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.YO9vGc);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = intl4.intl;
    return intl.string(_modDef3207["058DO3"]);
  }
};
const toggle14 = SettingBuilders.createToggle(obj16);
SettingBuilders = SettingBuilders_mod;
const obj17 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.LbsHO0);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY,
  useDescription() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.kfH3uY);
  }
};
const toggle15 = SettingBuilders.createToggle(obj17);
SettingBuilders = SettingBuilders_mod;
const obj18 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.MrF66q);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle16 = SettingBuilders.createToggle(obj18);
SettingBuilders = SettingBuilders_mod;
const obj19 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.Iy9grw);
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
const toggle17 = SettingBuilders.createToggle(obj19);
SettingBuilders = SettingBuilders_mod;
const obj20 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.Iy9grw);
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
const toggle18 = SettingBuilders.createToggle(obj20);
SettingBuilders = SettingBuilders_mod;
const obj21 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207["3aMhP8"]);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle19 = SettingBuilders.createToggle(obj21);
SettingBuilders = SettingBuilders_mod;
const obj22 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.HS0Ss8);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle20 = SettingBuilders.createToggle(obj22);
SettingBuilders = SettingBuilders_mod;
const obj23 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207["yuHcW/"]);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_FRIENDS_ACTIVITY
};
const toggle21 = SettingBuilders.createToggle(obj23);
SettingBuilders = SettingBuilders_mod;
const obj24 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.wv4QHR);
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
    const intl = intl4.intl;
    return intl.string(_modDef3207.wmNqrk);
  }
};
const toggle22 = SettingBuilders.createToggle(obj24);
SettingBuilders = SettingBuilders_mod;
const obj25 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207["41yM9h"]);
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
    const intl = intl4.intl;
    return intl.string(_modDef3207.XDPHgU);
  }
};
const toggle23 = SettingBuilders.createToggle(obj25);
SettingBuilders = SettingBuilders_mod;
const obj26 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.q0w8p2);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.UPCOMING_SERVER_EVENT);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.UPCOMING_SERVER_EVENT, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.UPCOMING_SERVER_EVENT);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    let showSettingsToggle = obj.useNotifSettingVisibility(NotifSettings.NotifSettings.UPCOMING_SERVER_EVENT);
    const obj2 = UpcomingServerEventExperiment;
    if (showSettingsToggle) {
      showSettingsToggle = obj2.useUpcomingServerEventExperiment("tabsV2Settings").showSettingsToggle;
    }
    return showSettingsToggle;
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS,
  useDescription() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.dreUaR);
  }
};
const toggle24 = SettingBuilders.createToggle(obj26);
SettingBuilders = SettingBuilders_mod;
const obj27 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207["49F8Gz"]);
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
    const intl = intl4.intl;
    return intl.string(_modDef3207.mQ1mtE);
  }
};
const toggle25 = SettingBuilders.createToggle(obj27);
SettingBuilders = SettingBuilders_mod;
const obj28 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.CdsMVG);
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
    const intl = intl4.intl;
    return intl.string(_modDef3207.pM2Bdy);
  }
};
const toggle26 = SettingBuilders.createToggle(obj28);
SettingBuilders = SettingBuilders_mod;
const obj29 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.quwpKF);
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
    const intl = intl4.intl;
    return intl.string(_modDef3207.zKIYjm);
  }
};
const toggle27 = SettingBuilders.createToggle(obj29);
SettingBuilders = SettingBuilders_mod;
const obj30 = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(_modDef3207.gFDQiO);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SERVERS
};
const toggle28 = SettingBuilders.createToggle(obj30);
const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsNodes.tsx");

export const FriendRequests = toggle;
export const Calls = toggle1;
export const MissedMessagesLow = toggle2;
export const MissedMessagesDefault = toggle3;
export const SummaryReminder = toggle4;
export const ReactionsChoice = radio;
export const InvitesReconnecting = toggle5;
export const TrendingSuggestions = toggle6;
export const UpdatesOffers = toggle7;
export const FriendOnline = toggle8;
export const FriendsGamingLow = toggle9;
export const FriendsGamingDefault = toggle10;
export const CustomStatusUpdate = toggle11;
export const ProfileUpdates = toggle12;
export const FriendRequestReminder = toggle13;
export const NudgeNewFriendDm = toggle14;
export const FriendSuggestions = toggle15;
export const GoLive = toggle16;
export const VoiceActivityLow = toggle17;
export const VoiceActivityDefault = toggle18;
export const VoiceChannelActivity = toggle19;
export const Polls = toggle20;
export const GamingOther = toggle21;
export const Reactions = toggle22;
export const GuildEventNotifications = toggle23;
export const UpcomingServerEvent = toggle24;
export const ForumNotifications = toggle25;
export const OtherGuild = toggle26;
export const SafetyAlerts = toggle27;
export const StageNotifications = toggle28;
