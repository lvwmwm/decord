// Module ID: 13501
// Function ID: 102439
// Name: GuildProfileEmptyState
// Dependencies: []
// Exports: default

// Module 13501 (GuildProfileEmptyState)
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
({ ScrollView: closure_4, View: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp4 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ container: {}, image: { "Bool(false)": "row", "Bool(false)": "100%", "Bool(false)": "center" }, header: { 1403544290: "2026-04-user-profile-performance-analytics", 1092309656: "US", 1382375868: "usd", 711252411: 30 }, createButton: { y: "Array", channelId: "isArray" } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/profiles/native/GuildProfileEmptyState.tsx");

export default function GuildProfileEmptyState() {
  const tmp2 = callback4();
  let obj = { contentContainerStyle: tmp2.container };
  obj = { style: tmp2.image, children: callback2(importDefault(dependencyMap[5]), obj) };
  obj = { style: tmp2.image };
  const items = [callback2(closure_5, obj), , , , ];
  const obj1 = { style: tmp2.header };
  const intl = arg1(dependencyMap[7]).intl;
  obj1.children = intl.string(arg1(dependencyMap[7]).t.Z1OZCV);
  items[1] = callback2(arg1(dependencyMap[6]).Text, obj1);
  const obj2 = { "Null": 1, "Null": "tail", alignItems: null, style: tmp2.header };
  const intl2 = arg1(dependencyMap[7]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[7]).t.UEmBq7);
  items[2] = callback2(arg1(dependencyMap[6]).Text, obj2);
  const obj3 = { style: tmp2.createButton };
  const obj4 = {};
  const intl3 = arg1(dependencyMap[7]).intl;
  const stringResult = intl3.string(arg1(dependencyMap[7]).t.6dIB4R);
  obj4.text = stringResult;
  // CreateGeneratorClosureLongIndex (0x67)
  obj4.onPress = callback(stringResult);
  obj3.children = callback2(arg1(dependencyMap[8]).Button, obj4);
  items[3] = callback2(closure_5, obj3);
  const obj5 = {};
  const intl4 = arg1(dependencyMap[7]).intl;
  obj5.text = intl4.string(arg1(dependencyMap[7]).t.yRjK4p);
  obj5.variant = "secondary";
  // CreateGeneratorClosureLongIndex (0x67)
  obj5.onPress = callback(tmp);
  items[4] = callback2(arg1(dependencyMap[8]).Button, obj5);
  obj.children = items;
  return callback3(closure_4, obj);
};
