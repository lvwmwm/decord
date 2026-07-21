// Module ID: 11003
// Function ID: 85623
// Name: ChatBlockedAlert
// Dependencies: []
// Exports: default

// Module 11003 (ChatBlockedAlert)
function ChatBlockedAlert(arg0) {
  let buttonCta;
  let description;
  let onConfirm;
  let title;
  ({ title, description, buttonCta, onConfirm } = arg0);
  const tmp = callback3(arg0, closure_3);
  const tmp2 = callback6();
  let obj = {};
  const merged = Object.assign(tmp);
  obj["style"] = tmp2.wrapper;
  const intl = arg1(dependencyMap[14]).intl;
  obj["cancelText"] = intl.string(arg1(dependencyMap[14]).t.ETE/oC);
  let onClose;
  if (null != tmp) {
    onClose = tmp.onClose;
  }
  obj["onCancel"] = onClose;
  obj["confirmText"] = buttonCta;
  obj["onConfirm"] = onConfirm;
  obj = { style: tmp2.body };
  obj = { source: importDefault(dependencyMap[16]), size: arg1(dependencyMap[15]).Icon.Sizes.CUSTOM, style: tmp2.mainIcon };
  const items = [callback4(arg1(dependencyMap[15]).Icon, obj), , ];
  const obj1 = { Opened: null, marginVertical: null, marginStart: null, marginEnd: null, style: tmp2.title, children: title };
  items[1] = callback4(arg1(dependencyMap[17]).Text, obj1);
  items[2] = callback4(arg1(dependencyMap[17]).Text, { style: tmp2.description, children: description });
  obj.children = items;
  obj["children"] = callback5(View, obj);
  return callback4(importDefault(dependencyMap[13]), obj);
}
function PerServerProfileAlert(arg0) {
  let automodReason;
  let guildId;
  let guildName;
  ({ guildId, guildName, automodReason } = arg0);
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) {
    const intl2 = callback(dependencyMap[14]).intl;
    let stringResult = intl2.string(callback(dependencyMap[14]).t.SpDXI7);
  } else {
    const intl = callback(dependencyMap[14]).intl;
    stringResult = intl.string(callback(dependencyMap[14]).t.TBeZmG);
  }
  let obj = callback(dependencyMap[18]);
  const tmp7 = callback2(obj.useOpenFixQuarantinedProfileModal({ guildId }), 2);
  const callback = tmp7[0];
  if (!tmp7[1]) {
    const intl3 = callback(dependencyMap[14]).intl;
    stringResult = intl3.string(callback(dependencyMap[14]).t.FFj5Dt);
  }
  const intl4 = callback(dependencyMap[14]).intl;
  const string = intl4.string;
  const t = callback(dependencyMap[14]).t;
  if (tmp7[1]) {
    let stringResult1 = string(t./PGQf0);
  } else {
    stringResult1 = string(t.WikgZ1);
  }
  obj = {};
  const merged = Object.assign(callback3(arg0, closure_4));
  const intl5 = callback(dependencyMap[14]).intl;
  obj["title"] = intl5.format(callback(dependencyMap[14]).t.kcYdTq, { guildName });
  obj["description"] = stringResult;
  obj["buttonCta"] = stringResult1;
  obj["onConfirm"] = function onConfirm() {
    callback();
  };
  return callback4(ChatBlockedAlert, obj);
}
function ServerTagAlert(guildName) {
  const obj = {};
  const merged = Object.assign(callback3(guildName, closure_5));
  const intl = arg1(dependencyMap[14]).intl;
  obj["title"] = intl.format(arg1(dependencyMap[14]).t.c8TwbL, { guildName: guildName.guildName });
  const intl2 = arg1(dependencyMap[14]).intl;
  obj["description"] = intl2.string(arg1(dependencyMap[14]).t.EJJLHp);
  const intl3 = arg1(dependencyMap[14]).intl;
  obj["buttonCta"] = intl3.string(arg1(dependencyMap[14]).t.Viksoo);
  obj["onConfirm"] = function onConfirm() {
    let obj = callback(closure_2[19]);
    obj = { screen: constants.PROFILE_CUSTOMIZATION };
    obj.openUserSettings(obj);
  };
  return callback4(ChatBlockedAlert, obj);
}
let closure_3 = ["<string:1070034059>", "<string:171798692>", "<string:1071686615>", 0.19];
let closure_4 = [null, null, null];
let closure_5 = ["LengthDelimited"];
let closure_6 = importDefault(dependencyMap[0]);
let closure_7 = importDefault(dependencyMap[1]);
importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
const QUARANTINE_USER_ALERT_KEY = arg1(dependencyMap[7]).QUARANTINE_USER_ALERT_KEY;
({ AnalyticEvents: closure_13, UserSettingsSections: closure_14 } = arg1(dependencyMap[8]));
const GuildMemberFlags = arg1(dependencyMap[9]).GuildMemberFlags;
const tmp3 = arg1(dependencyMap[8]);
({ jsx: closure_16, jsxs: closure_17 } = arg1(dependencyMap[10]));
let obj = arg1(dependencyMap[11]);
obj = { wrapper: { padding: 16 }, body: {} };
obj = { "Bool(false)": null, "Bool(false)": "b7eca7761481c5ff3cc170b16fbdff57", "Bool(false)": "img_no_results", "Bool(false)": "png", tintColor: importDefault(dependencyMap[12]).colors.TEXT_FEEDBACK_CRITICAL };
obj.mainIcon = obj;
obj.title = { "Null": "center", "Null": "center" };
obj.description = { textAlign: "center" };
let closure_18 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/guild_automod/native/AutomodUserProfileQuarantineAlert.tsx");

export default function AutomodUserProfileQuarantineAlert(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let obj = arg1(dependencyMap[20]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[20]);
  const items1 = [closure_11];
  const items2 = [guildId];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => guild.getGuild(guildId), items2);
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
  const stateFromStores2 = arg1(dependencyMap[20]).useStateFromStores(items3, () => {
    if (null == guildId) {
      return null;
    } else {
      const automodQuarantinedGuildMemberFlags = guildId(closure_2[21]).getAutomodQuarantinedGuildMemberFlags(member.getMember(guildId, stateFromStores));
      const obj = guildId(closure_2[21]);
      return guildId(closure_2[21]).getAutomodReason(automodQuarantinedGuildMemberFlags);
    }
  }, items4);
  importDefault(dependencyMap[22])(() => {
    let obj = stateFromStores(closure_2[23]);
    obj = { type: closure_12, guild_id: guildId, other_user_id: stateFromStores };
    obj.track(constants.OPEN_MODAL, obj);
  });
  if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) {
    if (stateFromStores2 !== GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) {
      if (stateFromStores2 === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
        obj = { guildName: str };
        const merged = Object.assign(guildId);
        let tmp13 = callback4(ServerTagAlert, obj);
      } else {
        obj = { automodReason: stateFromStores2, guildName: str };
        const merged1 = Object.assign(guildId);
        tmp13 = callback4(PerServerProfileAlert, obj);
      }
    }
    return tmp13;
  }
  obj1 = { automodReason: stateFromStores2, guildName: str };
  const merged2 = Object.assign(guildId);
  tmp13 = callback4(PerServerProfileAlert, obj1);
};
