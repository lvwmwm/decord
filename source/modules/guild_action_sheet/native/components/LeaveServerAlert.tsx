// Module ID: 12846
// Function ID: 98185
// Name: LeaveServerAlert
// Dependencies: []
// Exports: default

// Module 12846 (LeaveServerAlert)
const GuildFeatures = require(dependencyMap[0]).GuildFeatures;
const _module = require(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = _module);
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/guild_action_sheet/native/components/LeaveServerAlert.tsx");

export default function LeaveServerAlert(guild) {
  guild = guild.guild;
  const require = guild;
  let obj = {};
  const features = guild.features;
  const hasItem = features.has(GuildFeatures.HUB);
  const intl = require(dependencyMap[3]).intl;
  const string = intl.string;
  const t = require(dependencyMap[3]).t;
  if (hasItem) {
    let stringResult = string(t.Dv8gFT);
  } else {
    stringResult = string(t.J2TBi3);
  }
  obj.title = stringResult;
  const intl2 = require(dependencyMap[3]).intl;
  obj = { name: guild.name };
  obj.content = intl2.formatToPlainString(require(dependencyMap[3]).t.TB1og8, obj);
  obj = {};
  const obj1 = {
    variant: "destructive",
    onPress() {
      return callback(closure_2[5]).leaveGuild(guild.id);
    }
  };
  const intl3 = require(dependencyMap[3]).intl;
  obj1.text = intl3.string(require(dependencyMap[3]).t.p89ACt);
  const items = [callback(require(dependencyMap[2]).AlertActionButton, obj1, "confirm"), ];
  const obj2 = { variant: "secondary" };
  const intl4 = require(dependencyMap[3]).intl;
  obj2.text = intl4.string(require(dependencyMap[3]).t.gm1Vej);
  items[1] = callback(require(dependencyMap[2]).AlertActionButton, obj2, "cancel");
  obj.children = items;
  obj.actions = callback2(require(dependencyMap[4]).AlertActions, obj);
  return callback(require(dependencyMap[2]).AlertModal, obj);
};
