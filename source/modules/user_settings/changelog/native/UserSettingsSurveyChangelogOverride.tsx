// Module ID: 14555
// Function ID: 109677
// Name: SurveyOverrideInfoActionSheet
// Dependencies: []

// Module 14555 (SurveyOverrideInfoActionSheet)
function SurveyOverrideInfoActionSheet(survey) {
  let obj = { header: callback2(arg1(dependencyMap[9]).BottomSheetTitleHeader, { title: "Last Survey Data" }) };
  obj = { hasIcons: true };
  const entries = Object.entries(survey.survey);
  obj.children = entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const obj = { label: tmp };
    let str = "null";
    if (null != tmp2) {
      const _JSON = JSON;
      str = JSON.stringify(tmp2);
    }
    obj.subLabel = str;
    obj.icon = callback2(callback(closure_3[11]).CopyIcon, {});
    obj.onPress = function onPress() {
      let str = "null";
      if (null != callback) {
        const _JSON = JSON;
        str = JSON.stringify(callback);
      }
      callback(closure_3[12]).copy(str);
    };
    return callback2(callback(closure_3[10]).ActionSheetRow, obj, tmp);
  });
  obj.children = callback2(arg1(dependencyMap[10]).ActionSheetRow.Group, obj);
  return callback2(arg1(dependencyMap[8]).ActionSheet, obj);
}
function SurveyOverrideActionSheet() {
  const tmp = callback(importAllResult.useState(() => {
    const surveyOverride = surveyOverride.getSurveyOverride();
    let tmp2 = null;
    if (null != surveyOverride) {
      tmp2 = surveyOverride;
    }
    return tmp2;
  }), 2);
  const first = tmp[0];
  const arg1 = first;
  let obj = { header: callback2(arg1(dependencyMap[9]).BottomSheetTitleHeader, { title: "Survey Override" }) };
  obj = { -12885172: false, -9223372036854775808: false, 0: false, 0: false, 706246040: false, onChange: tmp[1] };
  const items = [callback2(arg1(dependencyMap[13]).TextInput, obj), ];
  obj = {};
  let str = "Fetch Survey";
  if ("" === first) {
    str = "Reset Survey Override";
  }
  obj.text = str;
  let str2 = "destructive";
  if ("" !== first) {
    let str3 = "primary";
    if (null == first) {
      str3 = "secondary";
    }
    str2 = str3;
  }
  obj.variant = str2;
  obj.onPress = function onPress() {
    if ("" === first) {
      callback2(closure_3[15]).overrideSurvey(null);
      const obj2 = callback2(closure_3[15]);
    } else {
      callback2(closure_3[15]).overrideSurvey(first);
      const obj = callback2(closure_3[15]);
    }
    callback(closure_3[16]).hideActionSheet("SurveyOverrideActionSheet");
  };
  items[1] = callback2(arg1(dependencyMap[14]).Button, obj);
  obj.children = items;
  return closure_10(arg1(dependencyMap[8]).ActionSheet, obj);
}
function SurveyInfo() {
  let obj = arg1(dependencyMap[17]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => currentSurvey.getCurrentSurvey());
  const tmp2 = importDefault(dependencyMap[18])(stateFromStores);
  const arg1 = tmp2;
  obj = { "Bool(false)": "Hide first # of categories", "Bool(false)": "text-lg/semibold" };
  obj = {
    9223372036854775807: true,
    -9223372036854775808: true,
    0: true,
    onPress() {
      let obj = callback(closure_3[16]);
      obj = { default: closure_13 };
      obj.openLazy(Promise.resolve(obj), "SurveyOverrideActionSheet");
    }
  };
  const items1 = [callback2(arg1(dependencyMap[20]).TableRow, obj), ];
  const obj1 = { label: "Previous survey data" };
  let str;
  if (null == tmp2) {
    str = "No survey data";
  }
  obj1.subLabel = str;
  obj1.arrow = null != tmp2;
  let fn;
  if (null != tmp2) {
    fn = () => {
      let obj = callback(closure_3[16]);
      obj = { default: closure_12 };
      obj = { survey: tmp2 };
      obj.openLazy(Promise.resolve(obj), "SurveyOverrideInfoActionSheet", obj);
    };
  }
  obj1.onPress = fn;
  items1[1] = callback2(arg1(dependencyMap[20]).TableRow, obj1);
  obj.children = items1;
  return closure_10(arg1(dependencyMap[19]).TableRowGroup, obj);
}
function ChangelogOverrideDebuggingActionSheet() {
  let obj = { header: callback2(arg1(dependencyMap[9]).BottomSheetTitleHeader, { title: "Changelog Debugging" }) };
  obj = { variant: "text-md/semibold", children: "" + JSON.stringify(stateForDebugging.getStateForDebugging(), undefined, "\t") };
  obj.children = callback2(arg1(dependencyMap[21]).Text, obj);
  return callback2(arg1(dependencyMap[8]).ActionSheet, obj);
}
function ChangelogOverrideActionSheet() {
  const tmp = callback(importAllResult.useState(() => closure_7.overrideId()), 2);
  const first = tmp[0];
  const arg1 = first;
  let obj = { header: callback2(arg1(dependencyMap[9]).BottomSheetTitleHeader, { title: "Changelog Override" }) };
  const items = [callback2(arg1(dependencyMap[13]).TextInput, { onChange: tmp[1] }), ];
  obj = {};
  let str = "Fetch Changelog";
  if ("" === first) {
    str = "Reset Changelog Override";
  }
  obj.text = str;
  let str2 = "destructive";
  if ("" !== first) {
    let str3 = "primary";
    if (null == first) {
      str3 = "secondary";
    }
    str2 = str3;
  }
  obj.variant = str2;
  obj.onPress = function onPress() {
    if ("" === first) {
      callback(closure_3[22]).setChangelogOverride(null);
      const obj2 = callback(closure_3[22]);
    } else {
      callback(closure_3[22]).setChangelogOverride(first);
      const obj = callback(closure_3[22]);
    }
    callback(closure_3[16]).hideActionSheet("ChangelogOverrideActionSheet");
  };
  items[1] = callback2(arg1(dependencyMap[14]).Button, obj);
  obj.children = items;
  return closure_10(arg1(dependencyMap[8]).ActionSheet, obj);
}
function ChangelogInfo() {
  let obj = { "Bool(false)": "<string:2902459525>", "Bool(false)": "<string:1107297490>" };
  obj = {
    9223372036854775807: "useMessageCount",
    -9223372036854775808: "%WeakMap%",
    0: "generateNonce",
    onPress() {
      let obj = callback(closure_3[16]);
      obj = { default: closure_16 };
      obj.openLazy(Promise.resolve(obj), "ChangelogOverrideActionSheet");
    }
  };
  const items = [callback2(arg1(dependencyMap[20]).TableRow, obj), ];
  obj = {
    onPress() {
      let obj = callback(closure_3[16]);
      obj = { default: closure_15 };
      obj.openLazy(Promise.resolve(obj), "ChangelogOverrideDebuggingActionSheet");
    }
  };
  items[1] = callback2(arg1(dependencyMap[20]).TableRow, obj);
  obj.children = items;
  return callback3(arg1(dependencyMap[19]).TableRowGroup, obj);
}
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const ScrollView = arg1(dependencyMap[2]).ScrollView;
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
let obj = {};
obj = { padding: importDefault(dependencyMap[7]).space.PX_16, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj.scrollView = obj;
let closure_11 = arg1(dependencyMap[6]).createStyles(obj);
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function UserSettingsSurveyChangelogOverride() {
  let obj = { style: callback4().scrollView };
  obj = { spacing: 16 };
  const items = [callback2(SurveyInfo, {}), callback2(ChangelogInfo, {})];
  obj.children = items;
  obj.children = callback3(arg1(dependencyMap[23]).Stack, obj);
  return callback2(ScrollView, obj);
});
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/user_settings/changelog/native/UserSettingsSurveyChangelogOverride.tsx");

export default memoResult;
