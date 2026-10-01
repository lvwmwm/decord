// Module ID: 13507
// Function ID: 13508
// Name: LeaveServerAlert
// Dependencies: [1074, 21, 5209, 1115, 5209, 9048, 2]
// Exports: default

// Module 13507 (LeaveServerAlert)
import Constants from "Constants" /* 1074 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const GuildFeatures = Constants.GuildFeatures;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/LeaveServerAlert.tsx");

export default function LeaveServerAlert(guild) {
  let AlertActions;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let obj3;
  let stringResult;
  guild = guild.guild;
  const features = guild.features;
  const AlertModal = guild(5209).AlertModal;
  const hasItem = features.has(GuildFeatures.HUB);
  const intl = guild(1115).intl;
  const string = intl.string;
  const t = guild(1115).t;
  if (hasItem) {
    stringResult = string(t.Dv8gFT);
  } else {
    stringResult = string(t.J2TBi3);
  }
  let obj = { title: stringResult, content: intl2.formatToPlainString(guild(1115).t.TB1og8, obj2), actions: closure_5(AlertActions, obj3) };
  intl2 = tmp2(1115).intl;
  obj2 = { name: guild.name };
  obj3 = { children: items };
  AlertActions = tmp2(5209).AlertActions;
  const obj4 = {
    variant: "destructive",
    onPress() {
      const obj = GuildSettingsActionCreatorsDefault;
      return obj.leaveGuild(guild.id);
    },
    text: intl3.string(guild(1115).t.p89ACt)
  };
  const AlertActionButton = tmp2(5209).AlertActionButton;
  intl3 = tmp2(1115).intl;
  items = [closure_4(AlertActionButton, obj4, "confirm"), ];
  const obj5 = { variant: "secondary", text: intl4.string(guild(1115).t.gm1Vej) };
  const AlertActionButton2 = tmp2(5209).AlertActionButton;
  intl4 = tmp2(1115).intl;
  items[1] = closure_4(AlertActionButton2, obj5, "cancel");
  return closure_4(AlertModal, obj);
};
