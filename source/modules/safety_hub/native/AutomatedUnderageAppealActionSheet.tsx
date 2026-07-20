// Module ID: 11023
// Function ID: 85840
// Name: items
// Dependencies: []
// Exports: default

// Module 11023 (items)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ AGE_APPEAL_ACTION_SHEET_NAME: closure_6, SafetyHubLinks: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { flex: 1, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, paddingTop: importDefault(dependencyMap[6]).space.PX_8 };
obj.container = obj;
obj.header = { alignItems: "center" };
const tmp3 = arg1(dependencyMap[4]);
obj.content = { flex: 1, gap: importDefault(dependencyMap[6]).space.PX_16 };
const obj1 = { flex: 1, gap: importDefault(dependencyMap[6]).space.PX_16 };
obj.moreInfo = { gap: importDefault(dependencyMap[6]).space.PX_4 };
const obj2 = { gap: importDefault(dependencyMap[6]).space.PX_4 };
obj.learnMore = { marginTop: importDefault(dependencyMap[6]).space.PX_12, textAlign: "center", paddingBottom: importDefault(dependencyMap[6]).space.PX_32 };
const obj3 = { marginTop: importDefault(dependencyMap[6]).space.PX_12, textAlign: "center", paddingBottom: importDefault(dependencyMap[6]).space.PX_32 };
obj.footer = { marginTop: importDefault(dependencyMap[6]).space.PX_8 };
const obj5 = { 9223372036854775807: "boolean", -9223372036854775808: "string", 9223372036854775807: "boolean", 0: "string", borderRadius: importDefault(dependencyMap[6]).radii.round, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_SUBTLE };
obj.number = obj5;
let closure_10 = obj.createStyles(obj);
const obj6 = {};
const intl = arg1(dependencyMap[7]).intl;
obj6.title = intl.string(arg1(dependencyMap[7]).t.1+E7LP);
const intl2 = arg1(dependencyMap[7]).intl;
obj6.description = intl2.string(arg1(dependencyMap[7]).t.BXiat/);
const items = [obj6, , ];
const obj7 = {};
const intl3 = arg1(dependencyMap[7]).intl;
obj7.title = intl3.string(arg1(dependencyMap[7]).t.iMQXtK);
const intl4 = arg1(dependencyMap[7]).intl;
obj7.description = intl4.string(arg1(dependencyMap[7]).t.oQ0vwu);
items[1] = obj7;
const obj8 = {};
const intl5 = arg1(dependencyMap[7]).intl;
obj8.title = intl5.string(arg1(dependencyMap[7]).t.oY/z1Q);
const intl6 = arg1(dependencyMap[7]).intl;
obj8.description = intl6.string(arg1(dependencyMap[7]).t.wtj02W);
items[2] = obj8;
const obj4 = { marginTop: importDefault(dependencyMap[6]).space.PX_8 };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/safety_hub/native/AutomatedUnderageAppealActionSheet.tsx");

export default function AutomatedUnderageAppealActionSheet(onClose) {
  onClose = onClose.onClose;
  const arg1 = onClose;
  const importDefault = onClose.classificationId;
  const tmp = callback3();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => callback1.getAgeVerificationWebviewUrl());
  const React = stateFromStores;
  let obj1 = arg1(dependencyMap[8]);
  const items1 = [closure_5];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => callback1.getIsLoadingAgeVerification());
  const bottom = importDefault(dependencyMap[9])().bottom;
  const items2 = [onClose];
  const callback = React.useCallback(() => {
    if (null != onClose) {
      onClose();
      const tmp = onClose;
    }
    classificationId(tmp[10]).close();
  }, items2);
  const View = callback;
  const items3 = [callback];
  const callback1 = React.useCallback(() => {
    classificationId(tmp[10]).success();
    callback();
    const obj = classificationId(tmp[10]);
    const result = classificationId(tmp[10]).start_verification_check();
  }, items3);
  closure_5 = callback1;
  const items4 = [stateFromStores, callback1];
  const effect = React.useEffect(() => {
    if ("" !== stateFromStores) {
      let obj = classificationId(tmp[11]);
      obj = { webviewUrl: stateFromStores, onComplete: callback1, entryPoint: onClose(classificationId[12]).AgeVerificationModalEntryPoint.AUTOMATED_UNDERAGE_APPEALS };
      obj.showAgeVerification(obj);
      classificationId(classificationId[13]).hideActionSheet(closure_6);
      const obj3 = classificationId(classificationId[13]);
    }
  }, items4);
  obj = { scrollable: true };
  const sum = 425 + bottom;
  const sum1 = sum + importDefault(dependencyMap[6]).space.PX_16;
  obj.startHeight = sum1 + importDefault(dependencyMap[6]).space.PX_32;
  obj = { style: tmp.container };
  obj1 = {};
  const obj2 = {};
  const merged = Object.assign(tmp.content);
  obj2["paddingBottom"] = bottom;
  obj1.style = obj2;
  const obj3 = { style: tmp.header };
  const obj4 = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj4.children = intl.string(arg1(dependencyMap[7]).t.9SDLnj);
  const items5 = [callback(arg1(dependencyMap[16]).Text, obj4), ];
  const obj5 = { INTEGRATION_CREATE: true, ConstraintReasonCode: "/assets/images/native/icons/voice_calls/dark_theme" };
  const intl2 = arg1(dependencyMap[7]).intl;
  obj5.children = intl2.string(arg1(dependencyMap[7]).t.yvx//1);
  items5[1] = callback(arg1(dependencyMap[16]).Text, obj5);
  obj3.children = items5;
  const items6 = [callback2(View, obj3), , , ];
  const obj6 = {};
  const obj7 = {
    hasIcons: true,
    children: items.map((arg0, arg1) => {
      let description;
      let title;
      ({ title, description } = arg0);
      let obj = { label: title, subLabel: description };
      obj = { style: tmp.number };
      obj = { INTEGRATION_CREATE: false, ConstraintReasonCode: false, children: arg1 + 1 };
      obj.children = callback(onClose(tmp[16]).Text, obj);
      obj.icon = callback(callback, obj);
      return callback(onClose(tmp[18]).TableRow, obj, arg1);
    })
  };
  obj6.children = callback(arg1(dependencyMap[17]).TableRowGroup, obj7);
  items6[1] = callback(View, obj6);
  const obj8 = { style: tmp.moreInfo };
  const obj9 = {};
  const intl3 = arg1(dependencyMap[7]).intl;
  obj9.title = intl3.string(arg1(dependencyMap[7]).t.WPwp1b);
  obj9.hasIcons = false;
  const obj10 = {};
  const intl4 = arg1(dependencyMap[7]).intl;
  obj10.label = intl4.string(arg1(dependencyMap[7]).t.N9WJMM);
  const intl5 = arg1(dependencyMap[7]).intl;
  obj10.subLabel = intl5.string(arg1(dependencyMap[7]).t.NHq382);
  obj10.onPress = function onPress() {
    return classificationId(tmp[19]).openURL(constants.AGE_VERIFICATION_LINK);
  };
  obj9.children = callback(arg1(dependencyMap[18]).TableRow, obj10);
  obj8.children = callback(arg1(dependencyMap[17]).TableRowGroup, obj9);
  items6[2] = callback(View, obj8);
  const obj11 = { style: tmp.footer };
  const obj12 = {
    onPress() {
      return onClose(tmp[21]).requestSuspendedUserAgeVerification(classificationId);
    },
    loading: stateFromStores1,
    disabled: stateFromStores1
  };
  const intl6 = arg1(dependencyMap[7]).intl;
  obj12.text = intl6.string(arg1(dependencyMap[7]).t.54b8V0);
  const items7 = [callback(arg1(dependencyMap[20]).Button, obj12), ];
  const obj13 = { INTEGRATION_CREATE: "data", ConstraintReasonCode: "category", style: tmp.learnMore };
  const intl7 = arg1(dependencyMap[7]).intl;
  obj13.children = intl7.format(arg1(dependencyMap[7]).t.ZbWsOF, { learnMoreLink: constants.LEARN_MORE_UU_APPEAL_LINK });
  items7[1] = callback(arg1(dependencyMap[22]).TextWithIOSLinkWorkaround, obj13);
  obj11.children = items7;
  items6[3] = callback2(View, obj11);
  obj1.children = items6;
  obj.children = callback2(View, obj1);
  obj.children = callback(arg1(dependencyMap[15]).BottomSheetScrollView, obj);
  return callback(arg1(dependencyMap[14]).BottomSheet, obj);
};
