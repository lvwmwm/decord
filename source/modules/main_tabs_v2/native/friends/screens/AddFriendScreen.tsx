// Module ID: 15319
// Function ID: 116619
// Name: AddFriendScreen
// Dependencies: []
// Exports: default

// Module 15319 (AddFriendScreen)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const ContactPermissions = arg1(dependencyMap[5]).ContactPermissions;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { headerText: {}, subheaderText: {} };
obj = { marginTop: 16, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWER };
obj.input = obj;
obj.otherOptionsContainer = { 0: "<string:16777479>", 9223372036854775807: "<string:36295491>" };
obj.rowContainer = { marginTop: 8 };
const tmp3 = arg1(dependencyMap[6]);
obj.background = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWER };
let closure_13 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOWER };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendScreen.tsx");

export default function AddFriendScreen(navigation) {
  let tmp4;
  navigation = navigation.navigation;
  const arg1 = navigation;
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  const contactSyncAccount = obj.useContactSyncAccount();
  const importDefault = contactSyncAccount;
  let obj1 = arg1(dependencyMap[9]);
  [tmp4, closure_2] = callback(React.useState(!obj1.isContactSyncEnabled(contactSyncAccount)), 2);
  const callback = React.useCallback(() => {
    const currentUser = currentUser.getCurrentUser();
    let userTag;
    if (null != currentUser) {
      let obj = contactSyncAccount(closure_2[10]);
      userTag = obj.getUserTag(currentUser);
    }
    contactSyncAccount(closure_2[11]).track(constants.FRIEND_ADD_VIEWED, { "Null": null, "Null": null });
    const intl = navigation(closure_2[12]).intl;
    obj = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
    const obj2 = contactSyncAccount(closure_2[11]);
    const formatToPlainStringResult = intl.formatToPlainString(navigation(closure_2[12]).t.6E9a1J, obj);
    navigation(closure_2[13]).showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
  }, []);
  const items = [callback, navigation, contactSyncAccount];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        let obj = callback(closure_2[14]);
        const intl = callback(closure_2[12]).intl;
        obj = {};
        const renderHeaderTextButton = obj.getRenderHeaderTextButton(intl.string(callback(closure_2[12]).t.RDE0Sc), closure_3);
        const merged = Object.assign(arg0);
        return renderHeaderTextButton(obj);
      }
    });
    const result = navigation(closure_2[9]).checkContactPermissions();
    result.then((arg0) => {
      let tmp = arg0 === constants.NOT_DETERMINED;
      let isAndroidResult = callback(callback2[15]).isAndroid();
      if (isAndroidResult) {
        isAndroidResult = arg0 === constants.UNAUTHORIZED;
      }
      if (!tmp) {
        tmp = isAndroidResult;
      }
      if (!tmp) {
        tmp = !callback(callback2[9]).isContactSyncEnabled(closure_1);
        const obj2 = callback(callback2[9]);
      }
      callback2(tmp);
    });
  }, items);
  obj = {};
  const items1 = [callback2(importDefault(dependencyMap[16]), { absolute: true }), ];
  obj = { keyboardShouldPersistTaps: "handled", style: tmp.background };
  obj1 = { 0: 24, 9223372036854775807: 24, 0: null, -9223372036854775808: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.headerText };
  const intl = arg1(dependencyMap[12]).intl;
  obj1.children = intl.string(arg1(dependencyMap[12]).t.GWMTSE);
  const items2 = [callback2(arg1(dependencyMap[17]).Text, obj1), , , ];
  const obj2 = { style: tmp.subheaderText };
  const intl2 = arg1(dependencyMap[12]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[12]).t.Rn/sLl);
  items2[1] = callback2(arg1(dependencyMap[17]).Text, obj2);
  items2[2] = callback2(importDefault(dependencyMap[18]), { style: tmp.input, autoFocusInput: false, sourcePage: navigation.route.params.sourcePage });
  const obj4 = { style: tmp.otherOptionsContainer };
  const obj5 = { 9223372036854775807: "key", 9223372036854775807: "Text", 9223372036854775807: "flags" };
  const intl3 = arg1(dependencyMap[12]).intl;
  obj5.children = intl3.string(arg1(dependencyMap[12]).t.dukg0Z);
  const items3 = [callback2(arg1(dependencyMap[17]).Text, obj5), ];
  let tmp11 = null;
  if (tmp4) {
    const obj6 = { style: tmp.rowContainer, location: "Add Friend Modal" };
    tmp11 = callback2(importDefault(dependencyMap[19]), obj6);
  }
  items3[1] = tmp11;
  obj4.children = items3;
  items2[3] = closure_11(closure_5, obj4);
  obj.children = items2;
  items1[1] = closure_11(closure_6, obj);
  obj.children = items1;
  return closure_11(closure_12, obj);
};
