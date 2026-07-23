// Module ID: 11014
// Function ID: 85686
// Name: ChatBlockedAlert
// Dependencies: [57, 29, 31, 27, 1194, 1917, 1838, 11007, 653, 3746, 33, 4130, 689, 4561, 1212, 1273, 11015, 4126, 11016, 5796, 624, 3764, 4559, 675, 2]
// Exports: default

// Module 11014 (ChatBlockedAlert)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_createForOfIteratorHelperLoose";
import { QUARANTINE_USER_ALERT_KEY } from "AutomodEventType";
import ME from "ME";
import { GuildMemberFlags } from "GuildMemberFlags";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
let closure_16;
let closure_17;
const require = arg1;
function ChatBlockedAlert(arg0) {
  let buttonCta;
  let description;
  let onConfirm;
  let title;
  ({ title, description, buttonCta, onConfirm } = arg0);
  const tmp = callback2(arg0, closure_3);
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj = {};
  const merged = Object.assign(tmp);
  obj["style"] = tmp2.wrapper;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj["cancelText"] = intl.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  let onClose;
  if (null != tmp) {
    onClose = tmp.onClose;
  }
  obj["onCancel"] = onClose;
  obj["confirmText"] = buttonCta;
  obj["onConfirm"] = onConfirm;
  obj = { style: tmp2.body };
  obj = { source: importDefault(11015), size: require(1273) /* Button */.Icon.Sizes.CUSTOM, style: tmp2.mainIcon };
  const items = [callback3(require(1273) /* Button */.Icon, obj), , ];
  const obj1 = { style: tmp2.title, accessibilityRole: "header", variant: "heading-md/medium", color: "mobile-text-heading-primary", children: title };
  items[1] = callback3(require(4126) /* Text */.Text, obj1);
  const obj2 = { style: tmp2.description, variant: "text-sm/medium", color: "text-default", children: description };
  items[2] = callback3(require(4126) /* Text */.Text, obj2);
  obj.children = items;
  obj["children"] = callback4(View, obj);
  return callback3(importDefault(4561), obj);
}
function PerServerProfileAlert(arg0) {
  let automodReason;
  let guildId;
  let guildName;
  ({ guildId, guildName, automodReason } = arg0);
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) {
    const intl2 = _require(1212).intl;
    let stringResult = intl2.string(_require(1212).t.SpDXI7);
  } else {
    const intl = _require(1212).intl;
    stringResult = intl.string(_require(1212).t.TBeZmG);
  }
  let obj = _require(11016);
  const tmp7 = callback(obj.useOpenFixQuarantinedProfileModal({ guildId }), 2);
  _require = tmp7[0];
  if (!tmp7[1]) {
    const intl3 = _require(1212).intl;
    stringResult = intl3.string(_require(1212).t.FFj5Dt);
  }
  const intl4 = _require(1212).intl;
  const string = intl4.string;
  const t = _require(1212).t;
  if (tmp7[1]) {
    let stringResult1 = string(t["/PGQf0"]);
  } else {
    stringResult1 = string(t.WikgZ1);
  }
  obj = {};
  const merged = Object.assign(callback2(arg0, closure_4));
  const intl5 = _require(1212).intl;
  obj["title"] = intl5.format(_require(1212).t.kcYdTq, { guildName });
  obj["description"] = stringResult;
  obj["buttonCta"] = stringResult1;
  obj["onConfirm"] = function onConfirm() {
    callback();
  };
  return callback3(ChatBlockedAlert, obj);
}
function ServerTagAlert(guildName) {
  let obj = {};
  const merged = Object.assign(callback2(guildName, closure_5));
  const intl = require(1212) /* getSystemLocale */.intl;
  obj["title"] = intl.format(require(1212) /* getSystemLocale */.t.c8TwbL, { guildName: guildName.guildName });
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj["description"] = intl2.string(require(1212) /* getSystemLocale */.t.EJJLHp);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj["buttonCta"] = intl3.string(require(1212) /* getSystemLocale */.t.Viksoo);
  obj["onConfirm"] = function onConfirm() {
    let obj = outer1_0(outer1_2[19]);
    obj = { screen: outer1_14.PROFILE_CUSTOMIZATION };
    obj.openUserSettings(obj);
  };
  return callback3(ChatBlockedAlert, obj);
}
let closure_3 = ["title", "description", "buttonCta", "onConfirm"];
let closure_4 = ["guildId", "guildName", "automodReason"];
let closure_5 = ["guildName"];
({ AnalyticEvents: closure_13, UserSettingsSections: closure_14 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
_createForOfIteratorHelperLoose = { wrapper: { padding: 16 }, body: { flexDirection: "column", alignItems: "center" } };
_createForOfIteratorHelperLoose = { width: 48, height: 48, tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL, marginBottom: 16 };
_createForOfIteratorHelperLoose.mainIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { marginBottom: 16, textAlign: "center" };
_createForOfIteratorHelperLoose.description = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("result").fileFinishedImporting("modules/guild_automod/native/AutomodUserProfileQuarantineAlert.tsx");

export default function AutomodUserProfileQuarantineAlert(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(624);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getId());
  let obj1 = guildId(624);
  const items1 = [closure_11];
  const items2 = [guildId];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_11.getGuild(guildId), items2);
  let name;
  if (null != stateFromStores1) {
    name = stateFromStores1.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  const items3 = [closure_10];
  const items4 = [guildId, stateFromStores];
  const stateFromStores2 = guildId(624).useStateFromStores(items3, () => {
    if (null == guildId) {
      return null;
    } else {
      const automodQuarantinedGuildMemberFlags = guildId(outer1_2[21]).getAutomodQuarantinedGuildMemberFlags(outer1_10.getMember(guildId, stateFromStores));
      const obj = guildId(outer1_2[21]);
      return guildId(outer1_2[21]).getAutomodReason(automodQuarantinedGuildMemberFlags);
    }
  }, items4);
  stateFromStores(4559)(() => {
    let obj = stateFromStores(outer1_2[23]);
    obj = { type: outer1_12, guild_id: guildId, other_user_id: stateFromStores };
    obj.track(outer1_13.OPEN_MODAL, obj);
  });
  if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) {
    if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) {
      if (stateFromStores2 === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
        obj = { guildName: str };
        const merged = Object.assign(guildId);
        let tmp13 = callback3(ServerTagAlert, obj);
      } else {
        obj = { automodReason: stateFromStores2, guildName: str };
        const merged1 = Object.assign(guildId);
        tmp13 = callback3(PerServerProfileAlert, obj);
      }
    }
    return tmp13;
  }
  obj1 = { automodReason: stateFromStores2, guildName: str };
  const merged2 = Object.assign(guildId);
  tmp13 = callback3(PerServerProfileAlert, obj1);
};
