// Module ID: 9148
// Function ID: 71722
// Name: MemberVerificationAlert
// Dependencies: []
// Exports: default

// Module 9148 (MemberVerificationAlert)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { "Null": 8398474916890618000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000028158560070041693, "Null": -1096316180974559000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": -1001128459244600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, STEP_GUILD_JOIN: 56665227084011570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, STEP_GUILD_TEMPLATE: 26947487844348960000000000000000000000000000000000000000000000000000000000000000000000, STEP_FRIEND_LIST: 65207579416737600000000000000000000000000000000000000000000000000000000000000000000000000000, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(dependencyMap[4]).radii.round };
obj.headerImage = obj;
obj.header = {};
obj.subtitle = { hour: "gSbmdt", minute: "%Int16ArrayPrototype%", second: "MiniaturesSpotIllustration" };
obj.buttons = {};
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlert.tsx");

export default function MemberVerificationAlert(arg0) {
  let buttons;
  let header;
  let icon;
  let subtitle;
  ({ icon, subtitle } = arg0);
  let obj = { 1627391014: "ERROR", 720523751: "ERROR", 1498656353: "NOT_RESPONDER", 1673738212: "NOT_RESPONDER" };
  ({ header, buttons } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  const tmp3 = callback2();
  obj = {};
  const merged1 = Object.assign(merged);
  obj["noDefaultButtons"] = true;
  let tmp7 = null;
  if (null != icon) {
    obj = { style: tmp3.headerImage };
    const obj1 = { size: "lg" };
    obj.children = callback(icon, obj1);
    tmp7 = callback(View, obj);
  }
  const items = [tmp7, , , ];
  const obj2 = { delete: "accessibilityLabel", dispatch: "r", raw: "isArray", style: tmp3.header, children: header };
  items[1] = callback(arg1(dependencyMap[6]).Heading, obj2);
  let tmp10 = null;
  if (null != subtitle) {
    const obj3 = { style: tmp3.subtitle, children: subtitle };
    tmp10 = callback(arg1(dependencyMap[6]).Text, obj3);
  }
  items[2] = tmp10;
  items[3] = callback(View, { style: tmp3.buttons, children: buttons });
  obj["children"] = items;
  return closure_5(importDefault(dependencyMap[5]), obj);
};
