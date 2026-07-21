// Module ID: 9023
// Function ID: 70928
// Name: Header
// Dependencies: []
// Exports: default

// Module 9023 (Header)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const UserFlags = arg1(dependencyMap[2]).UserFlags;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { borderTopLeftRadius: importDefault(dependencyMap[5]).radii.sm, borderTopRightRadius: importDefault(dependencyMap[5]).radii.sm };
obj.header = obj;
obj.applicationNameWrapper = { flexDirection: "row" };
obj.headerIcons = { "Bool(false)": "KEYBOARD_PRESS", "Bool(false)": "buffered", "Bool(false)": "y", "Bool(false)": "isArray" };
obj.ellipseGroup = { "Bool(true)": "<string:1912603177>", "Bool(true)": "resolve", "Bool(true)": "resolve" };
const tmp3 = arg1(dependencyMap[3]);
obj.ellipse = { backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.botTag = { "Null": false, "Null": false };
let closure_7 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/oauth2/native/Header.tsx");

export default function Header(accountScopes) {
  let application;
  let bot;
  let user;
  ({ user, application, bot } = accountScopes);
  const tmp = callback3();
  let obj = importDefault(dependencyMap[6]);
  obj = { id: application.id, icon: application.icon };
  let userAvatarSource;
  const applicationIconSource = obj.getApplicationIconSource(obj);
  if (null != user) {
    let obj2 = importDefault(dependencyMap[6]);
    userAvatarSource = obj2.getUserAvatarSource(user);
  }
  obj = { style: tmp.header };
  const obj1 = { style: tmp.headerIcons };
  obj2 = { source: applicationIconSource, size: arg1(dependencyMap[7]).AvatarSizes.XLARGE };
  const items = [callback(arg1(dependencyMap[7]).Avatar, obj2), , ];
  const obj3 = { style: tmp.ellipseGroup };
  const items1 = [callback(View, { style: tmp.ellipse }), callback(View, { style: tmp.ellipse }), callback(View, { style: tmp.ellipse })];
  obj3.children = items1;
  items[1] = callback2(View, obj3);
  const obj7 = { source: userAvatarSource, size: arg1(dependencyMap[7]).AvatarSizes.XLARGE };
  items[2] = callback(arg1(dependencyMap[7]).Avatar, obj7);
  obj1.children = items;
  const items2 = [callback2(View, obj1), , ];
  const obj8 = { style: tmp.applicationNameWrapper };
  const items3 = [callback(arg1(dependencyMap[8]).Text, { children: application.name }), ];
  let tmp9Result = null;
  if (null != bot) {
    const obj10 = { style: tmp.botTag };
    let hasFlagResult = null != bot.public_flags;
    if (hasFlagResult) {
      hasFlagResult = arg1(dependencyMap[10]).hasFlag(bot.public_flags, UserFlags.VERIFIED_BOT);
      const obj15 = arg1(dependencyMap[10]);
    }
    obj10.verified = hasFlagResult;
    tmp9Result = callback(importDefault(dependencyMap[9]), obj10);
    const tmp12 = importDefault(dependencyMap[9]);
    const tmp9 = callback;
  }
  items3[1] = tmp9Result;
  obj8.children = items3;
  items2[1] = callback2(View, obj8);
  const obj11 = {};
  if (accountScopes.accountScopes.length > 0) {
    const intl2 = arg1(dependencyMap[11]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[11]).t.jFbDnJ);
  } else {
    const intl = arg1(dependencyMap[11]).intl;
    stringResult = intl.string(arg1(dependencyMap[11]).t.X+Fdpo);
  }
  obj11.children = stringResult;
  items2[2] = callback(arg1(dependencyMap[8]).Text, obj11);
  obj.children = items2;
  return callback2(View, obj);
};
