// Module ID: 9176
// Function ID: 71873
// Name: ChangeEmailCollectReasons
// Dependencies: []
// Exports: default

// Module 9176 (ChangeEmailCollectReasons)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[1]);
({ CHANGE_EMAIL_REASONS_ORDER: closure_7, SUSPICIOUS_CHANGE_EMAIL_REASONS: closure_8 } = arg1(dependencyMap[3]));
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj.background = obj;
const tmp4 = arg1(dependencyMap[5]);
obj.container = { paddingVertical: importDefault(dependencyMap[7]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
const obj1 = { paddingVertical: importDefault(dependencyMap[7]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
obj.radioGroup = { paddingTop: importDefault(dependencyMap[7]).space.PX_16, paddingBottom: 38 };
obj.title = { textAlign: "center" };
let closure_12 = obj.createStyles(obj);
const obj2 = { paddingTop: importDefault(dependencyMap[7]).space.PX_16, paddingBottom: 38 };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/verification/native/components/ChangeEmailCollectReasons.tsx");

export default function ChangeEmailCollectReasons(changeEmailReason) {
  changeEmailReason = changeEmailReason.changeEmailReason;
  const arg1 = changeEmailReason;
  const setChangeEmailReason = changeEmailReason.setChangeEmailReason;
  const importDefault = setChangeEmailReason;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = arg1(dependencyMap[9]);
  const navigation = obj1.useNavigation();
  const dependencyMap = navigation;
  const items1 = [navigation, changeEmailReason];
  const items2 = [setChangeEmailReason];
  const callback = React.useCallback(() => {
    let obj = setChangeEmailReason(navigation[10]);
    obj = { change_email_reason_enum: changeEmailReason };
    obj.track(constants.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, obj);
    if (null != changeEmailReason) {
      if (set.has(changeEmailReason)) {
        navigation.push(changeEmailReason(navigation[11]).VerificationModalScenes.CHANGE_EMAIL_WARNING);
      }
    }
    navigation.push(changeEmailReason(navigation[11]).VerificationModalScenes.ENTER_EMAIL);
  }, items1);
  const callback1 = React.useCallback((change_email_reason_enum) => {
    let obj = setChangeEmailReason(navigation[10]);
    obj = { change_email_reason_enum };
    obj.track(constants.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj);
    setChangeEmailReason(change_email_reason_enum);
  }, items2);
  const React = callback1;
  const items3 = [changeEmailReason, callback1];
  let tmp7 = null;
  if (null != stateFromStores) {
    obj = { test: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001333156388934068, registerAsset: 56724000.96192874, style: tmp.background };
    obj = { style: tmp.container };
    obj1 = { 1501064855: 24, -1267889981: 24, -1145697943: null, -1266241916: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title };
    const intl = arg1(dependencyMap[16]).intl;
    obj1.children = intl.string(arg1(dependencyMap[16]).t.41NIIh);
    const items4 = [callback(arg1(dependencyMap[15]).Text, obj1), , ];
    const obj2 = { style: tmp.radioGroup, children: tmp6 };
    items4[1] = callback(closure_4, obj2);
    const obj3 = { key: true, onCloseCallback: true, onPress: callback };
    const intl2 = arg1(dependencyMap[16]).intl;
    obj3.text = intl2.string(arg1(dependencyMap[16]).t.XiOHRX);
    obj3.disabled = null == changeEmailReason;
    items4[2] = callback(arg1(dependencyMap[17]).Button, obj3);
    obj.children = items4;
    obj.children = callback2(closure_4, obj);
    tmp7 = callback(closure_5, obj);
  }
  return tmp7;
};
