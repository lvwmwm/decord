// Module ID: 17033
// Function ID: 17034
// Name: MobileNotifSettingsNodes
// Dependencies: [11065, 1128, 2917, 14754, 15469, 17034, 17035, 15473, 16545, 2]

// Module 17033 (MobileNotifSettingsNodes)
import intl2 from "intl" /* 1128 */;
import _modDef2917 from "module_2917" /* 2917 */;
import settings_NotifSettingsUtils from "settings/NotifSettingsUtils" /* 14754 */;
import NotifSettings from "NotifSettings" /* 15469 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15473 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16545 */;
import NotifSettingsActionCreators from "NotifSettingsActionCreators" /* 17034 */;
import useIsNotifSettingDisabledDefault from "useIsNotifSettingDisabled" /* 17035 */;
import SettingBuilders_mod from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

let SettingBuilders = SettingBuilders_mod;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2917.wv4QHR);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL
};
const toggle = SettingBuilders.createToggle(obj);
SettingBuilders = SettingBuilders_mod;
const obj2 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2917.n0Wp6j);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL
};
const toggle1 = SettingBuilders.createToggle(obj2);
SettingBuilders = SettingBuilders_mod;
const obj3 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2917.n0Wp6j);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL
};
const toggle2 = SettingBuilders.createToggle(obj3);
SettingBuilders = SettingBuilders_mod;
const obj4 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2917.Iy9grw);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL
};
const toggle3 = SettingBuilders.createToggle(obj4);
SettingBuilders = SettingBuilders_mod;
const obj5 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2917.Iy9grw);
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
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL
};
const toggle4 = SettingBuilders.createToggle(obj5);
SettingBuilders = SettingBuilders_mod;
const obj6 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2917["9EDo+/"]);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_LOW);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_LOW, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.GAMING_LOW);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.GAMING_LOW);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL
};
const toggle5 = SettingBuilders.createToggle(obj6);
SettingBuilders = SettingBuilders_mod;
const obj7 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2917["9EDo+/"]);
  },
  useValue() {
    const obj = settings_NotifSettingsUtils;
    return obj.useNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_DEFAULT);
  },
  onValueChange(arg0) {
    const obj = NotifSettingsActionCreators;
    return obj.updateNotifSettingToggleValue(NotifSettings.NotifSettings.GAMING_DEFAULT, arg0);
  },
  useIsDisabled() {
    const tmp = useIsNotifSettingDisabledDefault;
    return tmp(NotifSettings.NotifSettings.GAMING_DEFAULT);
  },
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useNotifSettingVisibility(NotifSettings.NotifSettings.GAMING_DEFAULT);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIF_CATEGORY_SOCIAL
};
const toggle6 = SettingBuilders.createToggle(obj7);
const result = size.fileFinishedImporting("modules/notifications/settings/native/MobileNotifSettingsNodes.tsx");

export const Reactions = toggle;
export const MissedMessagesLow = toggle1;
export const MissedMessagesDefault = toggle2;
export const VoiceActivityLow = toggle3;
export const VoiceActivityDefault = toggle4;
export const GamingLow = toggle5;
export const GamingDefault = toggle6;
