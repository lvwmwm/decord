// Module ID: 9148
// Function ID: 71711
// Name: MemberVerificationAlert
// Dependencies: []
// Exports: default

// Module 9148 (MemberVerificationAlert)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { p: "Array", guild: "isArray", colors: "accessibilityRole", x: "replace", ti: "marginBottom", jsxs: "key", y: "accessibilityRole", backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(dependencyMap[4]).radii.round };
obj.headerImage = obj;
obj.header = { "Null": 800, "Null": 16, "Null": 20 };
obj.subtitle = {};
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
  let obj = { "Bool(false)": null, "Bool(false)": 4, "Bool(false)": 4, "Bool(false)": "rgba(0, 0, 0, 0.75)" };
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
  const obj2 = { "Null": "RTC_CONNECTION_LOSS_RATE", "Null": "handleJoinThreadVoice", "Null": "toString", style: tmp3.header, children: header };
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
