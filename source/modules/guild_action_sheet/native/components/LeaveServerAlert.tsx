// Module ID: 12969
// Function ID: 100396
// Name: LeaveServerAlert
// Dependencies: [653, 33, 4475, 1212, 4475, 8438, 2]
// Exports: default

// Module 12969 (LeaveServerAlert)
import { GuildFeatures } from "ME";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/guild_action_sheet/native/components/LeaveServerAlert.tsx");

export default function LeaveServerAlert(guild) {
  guild = guild.guild;
  let obj = {};
  const features = guild.features;
  const hasItem = features.has(GuildFeatures.HUB);
  const intl = guild(1212).intl;
  const string = intl.string;
  const t = guild(1212).t;
  if (hasItem) {
    let stringResult = string(t.Dv8gFT);
  } else {
    stringResult = string(t.J2TBi3);
  }
  obj.title = stringResult;
  const intl2 = guild(1212).intl;
  obj = { name: guild.name };
  obj.content = intl2.formatToPlainString(guild(1212).t.TB1og8, obj);
  obj = {};
  const obj1 = {
    variant: "destructive",
    onPress() {
      return outer1_1(outer1_2[5]).leaveGuild(guild.id);
    }
  };
  const intl3 = guild(1212).intl;
  obj1.text = intl3.string(guild(1212).t.p89ACt);
  const items = [callback(guild(4475).AlertActionButton, obj1, "confirm"), ];
  const obj2 = { variant: "secondary" };
  const intl4 = guild(1212).intl;
  obj2.text = intl4.string(guild(1212).t.gm1Vej);
  items[1] = callback(guild(4475).AlertActionButton, obj2, "cancel");
  obj.children = items;
  obj.actions = callback2(guild(4475).AlertActions, obj);
  return callback(guild(4475).AlertModal, obj);
};
