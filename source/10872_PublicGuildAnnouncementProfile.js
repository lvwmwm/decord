// Module ID: 10872
// Function ID: 84545
// Name: PublicGuildAnnouncementProfile
// Dependencies: []
// Exports: default

// Module 10872 (PublicGuildAnnouncementProfile)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { content: { padding: 16 } };
obj = { borderRadius: importDefault(dependencyMap[4]).radii.lg };
obj.avatar = obj;
obj.nameWrapper = { -9223372036854775808: true, filter: true };
obj.headerText = { marginLeft: 8 };
obj.description = { marginTop: 8 };
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/public_guilds/native/components/PublicGuildAnnouncementProfile.tsx");

export default function PublicGuildAnnouncementProfile() {
  const tmp = callback3();
  let obj = { startExpanded: true };
  obj = { style: tmp.content };
  obj = { style: tmp.avatar };
  let obj3 = arg1(dependencyMap[7]);
  obj.source = obj3.getPublicSystemMessageAvatar();
  const items = [callback(importDefault(dependencyMap[6]), obj), , , ];
  const obj1 = { style: tmp.nameWrapper };
  const obj2 = { source: importDefault(dependencyMap[9]), disableColor: true };
  const items1 = [callback(arg1(dependencyMap[8]).Icon, obj2), ];
  obj3 = { style: tmp.headerText };
  const intl = arg1(dependencyMap[11]).intl;
  obj3.children = intl.string(arg1(dependencyMap[11]).t.xfAlNx);
  items1[1] = callback(arg1(dependencyMap[10]).Text, obj3);
  obj1.children = items1;
  items[1] = callback2(View, obj1);
  const obj4 = { style: tmp.description };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj4.children = intl2.string(arg1(dependencyMap[11]).t.BUZ0sl);
  items[2] = callback(arg1(dependencyMap[10]).Text, obj4);
  const obj5 = { style: tmp.description };
  const intl3 = arg1(dependencyMap[11]).intl;
  obj5.children = intl3.string(arg1(dependencyMap[11]).t.w5beJH);
  items[3] = callback(arg1(dependencyMap[10]).Text, obj5);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(arg1(dependencyMap[5]).BottomSheet, obj);
};
