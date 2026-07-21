// Module ID: 11718
// Function ID: 90984
// Name: ContactSyncInviteFriends
// Dependencies: []
// Exports: default

// Module 11718 (ContactSyncInviteFriends)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ AnalyticEvents: closure_5, AnalyticsSections: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { container: { overflow: "isArray", isInitial: "op", Wp9bEl: "start", GemLeftUpwards3dIllustration: "r" }, art: { marginBottom: 16 }, title: { "Null": null, "Null": null }, subtitle: { "Bool(false)": "errExpectingATEXT", "Bool(false)": "j" } };
obj = { marginTop: importDefault(dependencyMap[6]).space.PX_24, marginHorizontal: importDefault(dependencyMap[6]).space.PX_16, paddingBottom: importDefault(dependencyMap[6]).space.PX_32 };
obj.button = obj;
let closure_10 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/contact_sync/native/components/ContactSyncInviteFriends.tsx");

export default function ContactSyncInviteFriends() {
  const tmp = callback4();
  let obj = callback(dependencyMap[7]);
  const items = [closure_4];
  const callback = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj = {};
  obj = { style: tmp.container };
  const obj1 = { style: tmp.art, source: importDefault(dependencyMap[9]) };
  const items1 = [callback2(importDefault(dependencyMap[8]), obj1), , ];
  const obj2 = { Opened: 24, marginVertical: 24, marginStart: null, marginEnd: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title };
  const intl = callback(dependencyMap[11]).intl;
  obj2.children = intl.string(callback(dependencyMap[11]).t.ZxBpLf);
  items1[1] = callback2(callback(dependencyMap[10]).Text, obj2);
  const obj3 = { style: tmp.subtitle };
  const intl2 = callback(dependencyMap[11]).intl;
  obj3.children = intl2.string(callback(dependencyMap[11]).t.fXtCJ+);
  items1[2] = callback2(callback(dependencyMap[10]).Text, obj3);
  obj.children = items1;
  const items2 = [callback3(View, obj), ];
  const obj4 = { style: tmp.button };
  const obj5 = { "Bool(true)": "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi", "Bool(true)": null };
  const intl3 = callback(dependencyMap[11]).intl;
  obj5.text = intl3.string(callback(dependencyMap[11]).t.6Qgrev);
  obj5.onPress = function onPress() {
    let obj = callback2(closure_2[13]);
    obj = { friend_add_type: "Invite", source_page: constants2.CONTACT_SYNC_MODAL };
    obj.track(constants.FRIEND_ADD_VIEWED, obj);
    const intl = callback(closure_2[11]).intl;
    obj = { url: "https://discord.com/" };
    let str = "";
    if (null != callback) {
      str = callback2(closure_2[14]).getUserTag(callback);
      const obj4 = callback2(closure_2[14]);
    }
    obj.username = str;
    const formatToPlainStringResult = intl.formatToPlainString(callback(closure_2[11]).t.6E9a1J, obj);
    callback(closure_2[15]).showShareActionSheet({ message: formatToPlainStringResult }, constants2.CONTACT_SYNC_MODAL);
  };
  obj4.children = callback2(callback(dependencyMap[12]).Button, obj5);
  items2[1] = callback2(View, obj4);
  obj.children = items2;
  return callback3(closure_9, obj);
};
