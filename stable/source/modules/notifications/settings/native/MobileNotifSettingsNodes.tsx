// Module ID: 16346
// Function ID: 16347
// Name: MobileNotifSettingsNodes
// Dependencies: [10664, 1126, 2894, 13978, 14705, 16347, 16348, 14710, 15791, 2]

// Module 16346 (MobileNotifSettingsNodes)
import intl2 from "intl" /* 1126 */;
import _modDef2894 from "module_2894" /* 2894 */;
import settings_NotifSettingsUtils from "settings/NotifSettingsUtils" /* 13978 */;
import NotifSettings from "NotifSettings" /* 14705 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14710 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15791 */;
import NotifSettingsActionCreators from "NotifSettingsActionCreators" /* 16347 */;
import useIsNotifSettingDisabledDefault from "useIsNotifSettingDisabled" /* 16348 */;
import SettingBuilders_mod from "SettingBuilders" /* 10664 */;
import size from "module_2" /* 2 */;

let SettingBuilders = SettingBuilders_mod;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2894.wv4QHR);
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
    return intl.string(_modDef2894.n0Wp6j);
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
    return intl.string(_modDef2894.n0Wp6j);
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
    return intl.string(_modDef2894.Iy9grw);
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
    return intl.string(_modDef2894.Iy9grw);
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
    return intl.string(_modDef2894["9EDo+/"]);
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
    return intl.string(_modDef2894["9EDo+/"]);
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
