// Module ID: 12730
// Function ID: 97691
// Name: AddFriendModalScene
// Dependencies: []
// Exports: default

// Module 12730 (AddFriendModalScene)
function AddFriendModalScene(onSkip) {
  onSkip = onSkip.onSkip;
  const arg1 = onSkip;
  const importDefault = onSkip.sourceMetadata;
  const tmp = callback3();
  let obj = arg1(dependencyMap[10]);
  const contactSyncAccount = obj.useContactSyncAccount();
  const dependencyMap = contactSyncAccount;
  let obj1 = arg1(dependencyMap[10]);
  const tmp3 = callback(React.useState(!obj1.isContactSyncEnabled(contactSyncAccount)), 2);
  let callback = tmp3[1];
  importDefault(dependencyMap[11])(() => {
    sourceMetadata(contactSyncAccount[12]).track(constants.FRIEND_ADD_VIEWED, sourceMetadata);
    const obj = sourceMetadata(contactSyncAccount[12]);
    const result = onSkip(contactSyncAccount[10]).checkContactPermissions();
    result.then((arg0) => {
      let tmp = arg0 === constants.NOT_DETERMINED;
      let isAndroidResult = callback(closure_2[13]).isAndroid();
      if (isAndroidResult) {
        isAndroidResult = arg0 === constants.UNAUTHORIZED;
      }
      if (!tmp) {
        tmp = isAndroidResult;
      }
      if (!tmp) {
        tmp = !callback(closure_2[10]).isContactSyncEnabled(closure_2);
        const obj2 = callback(closure_2[10]);
      }
      callback2(tmp);
    });
  });
  let obj2 = arg1(dependencyMap[14]);
  const navigation = obj2.useNavigation();
  const React = navigation;
  const items = [onSkip];
  callback = React.useCallback(() => {
    if (null != onSkip) {
      onSkip();
    }
    let arr = sourceMetadata(contactSyncAccount[15]);
    arr = arr.pop();
  }, items);
  const callback1 = React.useCallback(() => {
    const currentUser = currentUser.getCurrentUser();
    let userTag;
    if (null != currentUser) {
      let obj = sourceMetadata(contactSyncAccount[16]);
      userTag = obj.getUserTag(currentUser);
    }
    sourceMetadata(contactSyncAccount[12]).track(constants.FRIEND_ADD_VIEWED, { "Null": null, "Null": null });
    const intl = onSkip(contactSyncAccount[17]).intl;
    obj = { url: "https://discord.com/", username: userTag };
    const obj2 = sourceMetadata(contactSyncAccount[12]);
    const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[17]).t.6E9a1J, obj);
    onSkip(contactSyncAccount[18]).showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
  }, []);
  const items1 = [callback, callback1, navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = {
      headerRight() {
        const obj = { source: callback2(closure_2[20]), onPress: closure_6 };
        const intl = callback(closure_2[17]).intl;
        obj.accessibilityLabel = intl.string(callback(closure_2[17]).t.RDE0Sc);
        return callback3(callback(closure_2[19]).HeaderActionButton, obj);
      },
      headerLeft: onSkip(contactSyncAccount[21]).getHeaderCloseButton(callback)
    };
    navigation.setOptions(obj);
  }, items1);
  obj = { keyboardShouldPersistTaps: "handled" };
  obj = { 0: 24, 9223372036854775807: 24, 0: null, -9223372036854775808: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.headerText };
  const intl = arg1(dependencyMap[17]).intl;
  obj.children = intl.string(arg1(dependencyMap[17]).t.GWMTSE);
  const items2 = [callback2(arg1(dependencyMap[22]).Text, obj), , , ];
  obj1 = { style: tmp.subheaderText };
  const intl2 = arg1(dependencyMap[17]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[17]).t.Rn/sLl);
  items2[1] = callback2(arg1(dependencyMap[22]).Text, obj1);
  obj2 = { style: tmp.input, autoFocusInput: false };
  items2[2] = callback2(importDefault(dependencyMap[23]), obj2);
  const obj3 = { style: tmp.otherOptionsContainer };
  const obj4 = { 9223372036854775807: "key", 9223372036854775807: "Text", 9223372036854775807: "flags" };
  const intl3 = arg1(dependencyMap[17]).intl;
  obj4.children = intl3.string(arg1(dependencyMap[17]).t.dukg0Z);
  const items3 = [callback2(arg1(dependencyMap[22]).Text, obj4), ];
  let tmp13 = null;
  if (tmp3[0]) {
    const obj5 = { style: tmp.rowContainer, location: "Add Friend Modal" };
    tmp13 = callback2(importDefault(dependencyMap[24]), obj5);
  }
  items3[1] = tmp13;
  obj3.children = items3;
  items2[3] = closure_11(callback, obj3);
  obj.children = items2;
  return closure_11(callback1, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
const tmp3 = arg1(dependencyMap[4]);
const AnalyticEvents = tmp3.AnalyticEvents;
const ContactPermissions = arg1(dependencyMap[5]).ContactPermissions;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = {};
const tmp4 = arg1(dependencyMap[6]);
const merged = Object.assign(importDefault(dependencyMap[8])(tmp3.Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[9]).colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj["marginTop"] = 32;
obj["marginHorizontal"] = 16;
obj["textAlign"] = "center";
obj.headerText = obj;
obj.subheaderText = {};
obj.input = { marginTop: 16 };
obj.otherOptionsContainer = { 0: "<string:16777479>", 9223372036854775807: "<string:36295491>" };
const importDefaultResult = importDefault(dependencyMap[8]);
obj.rowContainer = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_SURFACE_HIGH, marginTop: 8 };
let closure_12 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_SURFACE_HIGH, marginTop: 8 };
const result = arg1(dependencyMap[27]).fileFinishedImporting("components_native/add_friend/AddFriendModal.tsx");

export default function AddFriendModal(arg0) {
  const arg1 = arg0;
  const items = [arg0];
  const screens = React.useMemo(() => function getScreens(initialParams) {
    let obj = {};
    obj = { ignoreKeyboard: true };
    const intl = callback(closure_2[17]).intl;
    obj.title = intl.string(callback(closure_2[17]).t.w5uwoI);
    obj.initialParams = initialParams;
    obj.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return callback(closure_13, {});
    };
    obj.ADD_FRIEND = obj;
    return obj;
  }(arg0), items);
  return callback2(arg1(dependencyMap[26]).Navigator, { screens, initialRouteName: "ADD_FRIEND", headerStatusBarHeight: importDefault(dependencyMap[25])().top });
};
