// Module ID: 9179
// Function ID: 71898
// Name: ChangeEmailWarning
// Dependencies: []
// Exports: default

// Module 9179 (ChangeEmailWarning)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).COMMON_SCAMS_EDUCATION_HC_ARTICLE;
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { <string:743828640>: "isArray", <string:3482404964>: "Array", <string:1940311795>: "constructor", <string:3335284451>: "values", padding: importDefault(dependencyMap[7]).space.PX_16 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.title = { marginTop: importDefault(dependencyMap[7]).space.PX_16 };
const obj1 = { marginTop: importDefault(dependencyMap[7]).space.PX_16 };
obj.body = { marginTop: importDefault(dependencyMap[7]).space.PX_8, textAlign: "center" };
const obj2 = { marginTop: importDefault(dependencyMap[7]).space.PX_8, textAlign: "center" };
obj.buttonContainer = { flexDirection: "row", gap: importDefault(dependencyMap[7]).space.PX_8, marginTop: importDefault(dependencyMap[7]).space.PX_16 };
let closure_11 = obj.createStyles(obj);
const obj3 = { flexDirection: "row", gap: importDefault(dependencyMap[7]).space.PX_8, marginTop: importDefault(dependencyMap[7]).space.PX_16 };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/verification/native/components/ChangeEmailWarning.tsx");

export default function ChangeEmailWarning(changeEmailReason) {
  changeEmailReason = changeEmailReason.changeEmailReason;
  const arg1 = changeEmailReason;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  let obj1 = arg1(dependencyMap[9]);
  const items = [closure_6];
  const items1 = [navigation, changeEmailReason];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp5 = null;
  if (null != stateFromStores) {
    obj = { onUnexpectedItemSize: null, minResolutionHeight: null };
    obj = { style: tmp.container };
    const items2 = [callback(arg1(dependencyMap[12]).TrafficConeSpotIllustration, {}), , , ];
    obj1 = { Opened: 24, marginVertical: 24, marginStart: null, marginEnd: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title };
    const intl = arg1(dependencyMap[14]).intl;
    obj1.children = intl.string(arg1(dependencyMap[14]).t.hhR7gX);
    items2[1] = callback(arg1(dependencyMap[13]).Text, obj1);
    const obj2 = { Opened: null, marginVertical: null, marginStart: null, marginEnd: null, style: tmp.body };
    const intl2 = arg1(dependencyMap[14]).intl;
    const obj3 = { hcArticle: closure_7 };
    const items3 = [intl2.format(arg1(dependencyMap[14]).t.rqWXUf, obj3), "\n\n", ];
    const intl3 = arg1(dependencyMap[14]).intl;
    items3[2] = intl3.string(arg1(dependencyMap[14]).t.3LW10C);
    obj2.children = items3;
    items2[2] = callback2(arg1(dependencyMap[15]).TextWithIOSLinkWorkaround, obj2);
    const obj4 = { style: tmp.buttonContainer };
    const obj5 = { 1263708765: 0.6, 1653359405: "400", 1162991478: null, -103325020: 0, -1907292063: 0 };
    const intl4 = arg1(dependencyMap[14]).intl;
    obj5.text = intl4.string(arg1(dependencyMap[14]).t.rwTBFs);
    obj5.onPress = tmp4;
    const items4 = [callback(arg1(dependencyMap[16]).Button, obj5), ];
    const obj6 = { 1263708765: true, 1653359405: true, 1162991478: true, -103325020: true, -1907292063: true };
    const intl5 = arg1(dependencyMap[14]).intl;
    obj6.text = intl5.string(arg1(dependencyMap[14]).t.ETE/oC);
    obj6.onPress = function onPress() {
      return navigation(closure_2[17]).close();
    };
    items4[1] = callback(arg1(dependencyMap[16]).Button, obj6);
    obj4.children = items4;
    items2[3] = callback2(closure_4, obj4);
    obj.children = items2;
    obj.children = callback2(closure_4, obj);
    tmp5 = callback(closure_5, obj);
  }
  return tmp5;
};
