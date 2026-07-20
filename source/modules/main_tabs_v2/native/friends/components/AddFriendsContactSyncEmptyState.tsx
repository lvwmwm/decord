// Module ID: 15325
// Function ID: 116716
// Name: AddFriendsContactSyncEmptyState
// Dependencies: []
// Exports: default

// Module 15325 (AddFriendsContactSyncEmptyState)
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { alignItems: "center", marginTop: importDefault(dependencyMap[4]).space.PX_24, marginHorizontal: importDefault(dependencyMap[4]).space.PX_16, paddingBottom: importDefault(dependencyMap[4]).space.PX_12, backgroundColor: importDefault(dependencyMap[4]).colors.CARD_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[4]).radii.lg };
obj.content = obj;
const obj1 = { <string:1140607356>: null, <string:1751293292>: null, marginTop: importDefault(dependencyMap[4]).space.PX_24, marginBottom: importDefault(dependencyMap[4]).space.PX_16 };
obj.headerImage = obj1;
const obj2 = { "Bool(false)": 9, "Bool(false)": "BLURPLE_26", "Bool(false)": 1, marginBottom: importDefault(dependencyMap[4]).space.PX_8 };
obj.title = obj2;
const tmp4 = arg1(dependencyMap[2]);
obj.subtitle = { marginBottom: importDefault(dependencyMap[4]).space.PX_24, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_48, width: "100%", alignContent: "center" };
obj.subtitleText = { textAlign: "center" };
const obj3 = { marginBottom: importDefault(dependencyMap[4]).space.PX_24, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_48, width: "100%", alignContent: "center" };
obj.trailing = { width: "100%", paddingBottom: importDefault(dependencyMap[4]).space.PX_4, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_12 };
let closure_7 = obj.createStyles(obj);
const obj4 = { width: "100%", paddingBottom: importDefault(dependencyMap[4]).space.PX_4, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_12 };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/main_tabs_v2/native/friends/components/AddFriendsContactSyncEmptyState.tsx");

export default function AddFriendsContactSyncEmptyState() {
  const tmp = callback3();
  let obj = { style: tmp.content };
  obj = { resizeMode: "contain", style: tmp.headerImage, source: importDefault(dependencyMap[5]) };
  const items = [callback(closure_4, obj), , , ];
  obj = { Promise: "text-sm/normal", marginTop: "text-link", flags: true, style: tmp.title };
  const intl = arg1(dependencyMap[7]).intl;
  obj.children = intl.string(arg1(dependencyMap[7]).t./G+nci);
  items[1] = callback(arg1(dependencyMap[6]).Text, obj);
  const obj1 = { style: tmp.subtitle };
  const obj2 = { style: tmp.subtitleText, variant: "text-sm/medium" };
  const intl2 = arg1(dependencyMap[7]).intl;
  const obj3 = { learnMoreHook: arg1(dependencyMap[9]).handleOpenLearnMoreLink };
  obj2.children = intl2.format(arg1(dependencyMap[7]).t.OXdOPf, obj3);
  obj1.children = callback(arg1(dependencyMap[8]).TextWithIOSLinkWorkaround, obj2);
  items[2] = callback(closure_3, obj1);
  const obj4 = { style: tmp.trailing };
  const obj5 = { <string:1522289750>: null, <string:570601313>: null };
  const intl3 = arg1(dependencyMap[7]).intl;
  obj5.text = intl3.string(arg1(dependencyMap[7]).t.QUXSpo);
  obj5.onPress = function onPress() {
    callback(closure_2[11]).openContactSyncModal({}, "Add Friends Contact Sync Empty State");
  };
  obj4.children = callback(arg1(dependencyMap[10]).Button, obj5);
  items[3] = callback(closure_3, obj4);
  obj.children = items;
  return callback2(closure_3, obj);
};
