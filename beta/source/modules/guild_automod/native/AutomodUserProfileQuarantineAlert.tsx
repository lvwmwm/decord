// Module ID: 11348
// Function ID: 11349
// Name: AutomodUserProfileQuarantineAlert
// Dependencies: [32, 109, 19, 17, 502, 2108, 2067, 11341, 1074, 4455, 21, 4836, 576, 5300, 1115, 1177, 11349, 4832, 11350, 6800, 563, 4475, 5298, 1241, 2]
// Exports: default

// Module 11348 (AutomodUserProfileQuarantineAlert)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl6 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4455 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4475 */;
import Text_Text from "Text/Text" /* 4832 */;
import AlertDefault from "Alert" /* 5300 */;
import openUserSettings from "openUserSettings" /* 6800 */;
import Constants2 from "Constants" /* 11341 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_14;
let closure_16;
let closure_17;
let map1;
let size;
let tmp4;
const AssetRegistryDefault = tmp4(11349);
function ChatBlockedAlert(arg0) {
  let buttonCta;
  let description;
  let intl;
  let items;
  let obj2;
  let onClose;
  let onConfirm;
  let title;
  ({ title, description, buttonCta, onConfirm } = arg0);
  const tmp = _objectWithoutProperties(arg0, closure_3);
  const tmp2 = closure_18();
  const obj = { style: tmp2.wrapper, cancelText: intl.string(intl6.t["ETE/oC"]), onCancel: onClose, confirmText: buttonCta, onConfirm, children: closure_17(View, obj2) };
  const tmp6 = AlertDefault;
  const merged = Object.assign(tmp);
  intl = intl6.intl;
  onClose = undefined;
  if (tmp != null) {
    onClose = tmp.onClose;
  }
  obj2 = { style: tmp2.body, children: items };
  const obj3 = { source: AssetRegistryDefault, size: native.Icon.Sizes.CUSTOM, style: tmp2.mainIcon };
  const Icon = tmp8(1177).Icon;
  items = [authStore3(Icon, obj3), , ];
  const obj4 = { style: tmp2.title, accessibilityRole: "header", variant: "heading-md/medium", color: "mobile-text-heading-primary", children: title };
  items[1] = authStore3(Text_Text.Text, obj4);
  const obj5 = { style: tmp2.description, variant: "text-sm/medium", color: "text-default", children: description };
  items[2] = authStore3(Text_Text.Text, obj5);
  return authStore3(tmp6, obj);
}
function PerServerProfileAlert(arg0) {
  let automodReason;
  let closure_129_0;
  let guildId;
  let guildName;
  let intl5;
  let stringResult;
  let stringResult1;
  let tmp2;
  let tmp8;
  ({ guildId, guildName, automodReason } = arg0);
  const tmp = _objectWithoutProperties(arg0, closure_4);
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) {
    const intl2 = intl6.intl;
    stringResult = intl2.string(intl6.t.SpDXI7);
    tmp2 = require;
  } else {
    tmp2 = require;
    const intl = intl6.intl;
    stringResult = intl.string(intl6.t.TBeZmG);
  }
  const tmp2Result = tmp2(11350);
  [closure_129_0, tmp8] = tmp2Result.useOpenFixQuarantinedProfileModal({ guildId });
  _slicedToArray(tmp2Result.useOpenFixQuarantinedProfileModal({ guildId }), 2);
  if (!tmp8) {
    const intl3 = tmp2(1115).intl;
    stringResult = intl3.string(tmp2(1115).t.FFj5Dt);
  }
  const intl4 = tmp2(1115).intl;
  const string = intl4.string;
  const t = tmp2(1115).t;
  if (tmp8) {
    stringResult1 = string(t["/PGQf0"]);
  } else {
    stringResult1 = string(t.WikgZ1);
  }
  const obj = {
    title: intl5.format(tmp2(1115).t.kcYdTq, { guildName }),
    description: stringResult,
    buttonCta: stringResult1,
    onConfirm() {
      closure_1_0();
    }
  };
  const merged = Object.assign(tmp);
  intl5 = tmp2(1115).intl;
  return authStore3(ChatBlockedAlert, obj);
}
function ServerTagAlert(guildName) {
  let intl;
  let intl2;
  let intl3;
  guildName = guildName.guildName;
  let obj = {
    title: intl.format(intl6.t.c8TwbL, { guildName }),
    description: intl2.string(intl6.t.EJJLHp),
    buttonCta: intl3.string(intl6.t.Viksoo),
    onConfirm() {
      const obj = openUserSettings;
      const obj2 = { screen: constants.PROFILE_CUSTOMIZATION };
      obj.openUserSettings(obj2);
    }
  };
  const merged = Object.assign(_objectWithoutProperties(guildName, closure_5));
  intl = intl6.intl;
  intl2 = intl6.intl;
  intl3 = intl6.intl;
  return authStore3(ChatBlockedAlert, obj);
}
let closure_3 = ["title", "description", "buttonCta", "onConfirm"];
let closure_4 = ["guildId", "guildName", "automodReason"];
let closure_5 = ["guildName"];
const View = react_native.View;
const QUARANTINE_USER_ALERT_KEY = Constants2.QUARANTINE_USER_ALERT_KEY;
({ AnalyticEvents: map1, UserSettingsSections: closure_14 } = Constants);
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let obj = { wrapper: { padding: 16 }, body: { flexDirection: "column", alignItems: "center" }, mainIcon: size, title: { marginBottom: 16, textAlign: "center" }, description: { textAlign: "center" } };
size = { width: 48, height: 48, tintColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, marginBottom: 16 };
let closure_18 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_automod/native/AutomodUserProfileQuarantineAlert.tsx");

export default function AutomodUserProfileQuarantineAlert(guildId) {
  let id;
  guildId = guildId.guildId;
  const tmp = guildId;
  let obj = guildId(563);
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  let obj2 = guildId(563);
  const items1 = [GuildStore];
  const items2 = [guildId];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildStore.getGuild(guildId), items2);
  let str;
  if (stateFromStores1 != null) {
    str = stateFromStores1.name;
  }
  if (str == null) {
    str = "";
  }
  const items3 = [GuildMemberStore];
  const items4 = [guildId, stateFromStores];
  const tmpResult = tmp(563);
  const stateFromStores2 = tmpResult.useStateFromStores(items3, () => {
    if (null == guildId) {
      return null;
    } else {
      const obj = AutomodPermissionUtils;
      const automodQuarantinedGuildMemberFlags = obj.getAutomodQuarantinedGuildMemberFlags(GuildMemberStore.getMember(tmp, stateFromStores));
      const obj2 = AutomodPermissionUtils;
      return obj2.getAutomodReason(automodQuarantinedGuildMemberFlags);
    }
  }, items4);
  stateFromStores(5298)(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: QUARANTINE_USER_ALERT_KEY, guild_id: guildId, other_user_id: stateFromStores };
    obj.track(map1.OPEN_MODAL, obj2);
  });
  if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) {
    let tmp13;
    if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) {
      if (stateFromStores2 === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
        const obj3 = { guildName: str };
        const merged = Object.assign(guildId);
        tmp13 = closure_16(ServerTagAlert, obj3);
      } else {
        const obj4 = { automodReason: stateFromStores2, guildName: str };
        const merged1 = Object.assign(guildId);
        tmp13 = closure_16(PerServerProfileAlert, obj4);
      }
    }
    return tmp13;
  }
  const obj5 = { automodReason: stateFromStores2, guildName: str };
  const merged2 = Object.assign(guildId);
  tmp13 = closure_16(PerServerProfileAlert, obj5);
};
