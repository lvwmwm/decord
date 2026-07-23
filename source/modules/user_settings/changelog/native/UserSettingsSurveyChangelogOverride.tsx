// Module ID: 14677
// Function ID: 111880
// Name: SurveyOverrideInfoActionSheet
// Dependencies: [57, 31, 27, 4141, 9277, 33, 4130, 689, 5500, 5186, 5502, 4078, 5492, 7512, 4543, 9278, 4098, 566, 8284, 5503, 5165, 4126, 7768, 4541, 2]

// Module 14677 (SurveyOverrideInfoActionSheet)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { ScrollView } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
let require = arg1;
function SurveyOverrideInfoActionSheet(survey) {
  let obj = { header: callback2(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { title: "Last Survey Data" }) };
  obj = { hasIcons: true };
  const entries = Object.entries(survey.survey);
  obj.children = entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const obj = { label: tmp };
    let str = "null";
    if (null != tmp2) {
      let _JSON = JSON;
      str = JSON.stringify(tmp2);
    }
    obj.subLabel = str;
    obj.icon = outer1_9(outer1_0(outer1_3[11]).CopyIcon, {});
    obj.onPress = function onPress() {
      let str = "null";
      if (null != closure_0) {
        const _JSON = JSON;
        str = JSON.stringify(closure_0);
      }
      outer2_0(outer2_3[12]).copy(str);
    };
    return outer1_9(outer1_0(outer1_3[10]).ActionSheetRow, obj, tmp);
  });
  obj.children = callback2(require(5502) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj);
  return callback2(require(5500) /* ActionSheet */.ActionSheet, obj);
}
function SurveyOverrideActionSheet() {
  const tmp = callback(importAllResult.useState(() => {
    const surveyOverride = outer1_8.getSurveyOverride();
    let tmp2 = null;
    if (null != surveyOverride) {
      tmp2 = surveyOverride;
    }
    return tmp2;
  }), 2);
  const first = tmp[0];
  let obj = { header: callback2(first(5186).BottomSheetTitleHeader, { title: "Survey Override" }) };
  obj = { label: "Survey Override", size: "md", placeholder: "Enter the ID of the Survey you want to test", onChange: tmp[1], isClearable: true };
  const items = [callback2(first(7512).TextInput, obj), ];
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
      outer1_2(outer1_3[15]).overrideSurvey(null);
      const obj2 = outer1_2(outer1_3[15]);
    } else {
      outer1_2(outer1_3[15]).overrideSurvey(first);
      const obj = outer1_2(outer1_3[15]);
    }
    outer1_1(outer1_3[16]).hideActionSheet("SurveyOverrideActionSheet");
  };
  items[1] = callback2(first(4543).Button, obj);
  obj.children = items;
  return closure_10(first(5500).ActionSheet, obj);
}
function SurveyInfo() {
  let obj = require(566) /* initialize */;
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getCurrentSurvey());
  const tmp2 = importDefault(8284)(stateFromStores);
  require = tmp2;
  obj = { title: "Surveys", hasIcons: false };
  obj = {
    label: "Survey override",
    subLabel: "Force a survey to be shown.",
    arrow: true,
    onPress() {
      let obj = outer1_1(outer1_3[16]);
      obj = { default: outer1_13 };
      obj.openLazy(Promise.resolve(obj), "SurveyOverrideActionSheet");
    }
  };
  const items1 = [callback2(require(5165) /* TableRowInner */.TableRow, obj), ];
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
      let obj = outer1_1(outer1_3[16]);
      obj = { default: outer1_12 };
      obj = { survey: closure_0 };
      obj.openLazy(Promise.resolve(obj), "SurveyOverrideInfoActionSheet", obj);
    };
  }
  obj1.onPress = fn;
  items1[1] = callback2(require(5165) /* TableRowInner */.TableRow, obj1);
  obj.children = items1;
  return closure_10(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj);
}
function ChangelogOverrideDebuggingActionSheet() {
  let obj = { header: callback2(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { title: "Changelog Debugging" }) };
  obj = { variant: "text-md/semibold", children: "" + JSON.stringify(stateForDebugging.getStateForDebugging(), undefined, "\t") };
  obj.children = callback2(require(4126) /* Text */.Text, obj);
  return callback2(require(5500) /* ActionSheet */.ActionSheet, obj);
}
function ChangelogOverrideActionSheet() {
  const tmp = callback(importAllResult.useState(() => outer1_7.overrideId()), 2);
  const first = tmp[0];
  let obj = { header: callback2(first(5186).BottomSheetTitleHeader, { title: "Changelog Override" }) };
  obj = { label: "Changelog Override", size: "md", placeholder: "Enter the ID of the changelog you want to test", onChange: tmp[1], isClearable: true };
  const items = [callback2(first(7512).TextInput, obj), ];
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
      outer1_1(outer1_3[22]).setChangelogOverride(null);
      const obj2 = outer1_1(outer1_3[22]);
    } else {
      outer1_1(outer1_3[22]).setChangelogOverride(first);
      const obj = outer1_1(outer1_3[22]);
    }
    outer1_1(outer1_3[16]).hideActionSheet("ChangelogOverrideActionSheet");
  };
  items[1] = callback2(first(4543).Button, obj);
  obj.children = items;
  return closure_10(first(5500).ActionSheet, obj);
}
function ChangelogInfo() {
  let obj = { title: "Changelog", hasIcons: false };
  obj = {
    label: "Changelog override",
    subLabel: "Force a changelog to be shown.",
    arrow: true,
    onPress() {
      let obj = outer1_1(outer1_3[16]);
      obj = { default: outer1_16 };
      obj.openLazy(Promise.resolve(obj), "ChangelogOverrideActionSheet");
    }
  };
  const items = [callback2(require(5165) /* TableRowInner */.TableRow, obj), ];
  obj = {
    label: "Changelog debugging",
    arrow: true,
    onPress() {
      let obj = outer1_1(outer1_3[16]);
      obj = { default: outer1_15 };
      obj.openLazy(Promise.resolve(obj), "ChangelogOverrideDebuggingActionSheet");
    }
  };
  items[1] = callback2(require(5165) /* TableRowInner */.TableRow, obj);
  obj.children = items;
  return callback3(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj);
}
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let obj = {};
obj = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.scrollView = obj;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function UserSettingsSurveyChangelogOverride() {
  let obj = { style: callback4().scrollView };
  obj = { spacing: 16 };
  const items = [callback2(SurveyInfo, {}), callback2(ChangelogInfo, {})];
  obj.children = items;
  obj.children = callback3(require(4541) /* Stack */.Stack, obj);
  return callback2(ScrollView, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/changelog/native/UserSettingsSurveyChangelogOverride.tsx");

export default memoResult;
