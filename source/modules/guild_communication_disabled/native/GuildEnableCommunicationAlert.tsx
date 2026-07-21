// Module ID: 10977
// Function ID: 85450
// Name: GuildEnableCommunicationAlert
// Dependencies: []
// Exports: default

// Module 10977 (GuildEnableCommunicationAlert)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_6 = importDefault(dependencyMap[4]);
({ CLEAR_COMMUNICATION_DISABLED_MODAL_NAME: closure_7, GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: closure_8 } = arg1(dependencyMap[5]));
const tmp4 = arg1(dependencyMap[6]);
const AnalyticEvents = tmp4.AnalyticEvents;
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { fontFamily: tmp4.Fonts.PRIMARY_SEMIBOLD };
let closure_12 = obj.createStyles({ wrapper: { padding: 16 }, body: { paddingTop: 16 }, description: { lineHeight: 18 }, cta: { paddingTop: 8 }, countdown: obj });
const tmp5 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/guild_communication_disabled/native/GuildEnableCommunicationAlert.tsx");

export default function GuildEnableCommunicationAlert(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const userId = guildId.userId;
  const importDefault = userId;
  let obj = { -9223372036854775808: "spring", 9223372036854775807: "linear", 9223372036854775807: "easeInEaseOut" };
  Object.setPrototypeOf(null);
  const merged = Object.assign(guildId, obj);
  function _handleConfirmRemoveTimeout(arg0, arg1) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _handleConfirmRemoveTimeout = obj;
    return obj(...arguments);
  }
  const tmp3 = callback();
  const dependencyMap = tmp3;
  let closure_3 = _handleConfirmRemoveTimeout(importDefault(dependencyMap[9])(userId, guildId), 1)[0];
  importDefault(dependencyMap[10])(() => {
    let obj = userId(tmp3[11]);
    obj = { type: closure_7, guild_id: guildId, other_user_id: userId };
    obj.track(constants.OPEN_MODAL, obj);
  });
  obj = {};
  const merged1 = Object.assign(merged);
  const intl = arg1(dependencyMap[14]).intl;
  obj["title"] = intl.string(arg1(dependencyMap[14]).t.+ZD3ou);
  obj["style"] = tmp3.wrapper;
  const intl2 = arg1(dependencyMap[14]).intl;
  obj["cancelText"] = intl2.string(arg1(dependencyMap[14]).t.ETE/oC);
  let onClose;
  if (null != merged) {
    onClose = merged.onClose;
  }
  obj["onClose"] = onClose;
  obj["onCancel"] = guildId.onCancel;
  const intl3 = arg1(dependencyMap[14]).intl;
  obj["confirmText"] = intl3.string(arg1(dependencyMap[14]).t.qXtNtS);
  obj["onConfirm"] = function handleConfirmRemoveTimeout() {
    return _handleConfirmRemoveTimeout(...arguments);
  };
  obj = { style: tmp3.body };
  const obj1 = { style: tmp3.description, variant: "text-sm/medium" };
  const intl4 = arg1(dependencyMap[14]).intl;
  const obj2 = {};
  const user = user.getUser(userId);
  const tmp11 = closure_11;
  const tmp12 = View;
  const tmp5 = closure_10;
  const tmp6 = importDefault(dependencyMap[16]);
  const name = importDefault(dependencyMap[18]).getName(guildId, null, user);
  let str = "";
  if (null != name) {
    str = name;
  }
  obj2.username = str;
  obj2.countdown = function countdown(arg0) {
    let num = 0;
    if (null != closure_3) {
      const _Date = Date;
      num = new Date(closure_3);
    }
    const obj = { style: tmp3.countdown, deadline: num, withUnits: true };
    return callback2(userId(tmp3[19]), obj);
  };
  obj1.children = intl4.format(arg1(dependencyMap[14]).t.t+abNU, obj2);
  const items = [closure_10(arg1(dependencyMap[17]).Text, obj1), ];
  const obj3 = { style: items1, variant: "text-sm/medium" };
  const items1 = [, ];
  ({ cta: arr2[0], description: arr2[1] } = tmp3);
  const intl5 = tmp9(tmp10[14]).intl;
  obj3.children = intl5.format(arg1(dependencyMap[14]).t.KtENkK, { link: closure_8 });
  items[1] = closure_10(arg1(dependencyMap[20]).TextWithIOSLinkWorkaround, obj3);
  obj.children = items;
  obj["children"] = tmp11(tmp12, obj);
  return tmp5(tmp6, obj);
};
