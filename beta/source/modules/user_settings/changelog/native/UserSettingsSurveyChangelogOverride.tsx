// Module ID: 15307
// Function ID: 15308
// Name: UserSettingsSurveyChangelogOverride
// Dependencies: [32, 19, 17, 4850, 5027, 21, 4836, 576, 6618, 6570, 6620, 4779, 6610, 6024, 5281, 5028, 4800, 504, 7720, 5999, 5917, 4832, 7539, 5279, 2]

// Module 15307 (UserSettingsSurveyChangelogOverride)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import SurveyActionCreatorsAll from "SurveyActionCreators" /* 5028 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import TableRow2 from "TableRow" /* 5917 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6570 */;
import ActionSheet2 from "ActionSheet" /* 6618 */;
import ActionSheetRow2 from "ActionSheetRow" /* 6620 */;
import ChangeLogActionCreatorsDefault from "ChangeLogActionCreators" /* 7539 */;
import usePreviousDefault from "usePrevious" /* 7720 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChangelogStore from "ChangelogStore" /* 4850 */;
import SurveyStore from "SurveyStore" /* 5027 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, surveyOverride;

let c10;
let c9;
let obj2;
function SurveyOverrideInfoActionSheet(survey) {
  let Group;
  let entries;
  let obj2;
  survey = survey.survey;
  let obj = { header: React4(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Last Survey Data" }), children: React4(Group, obj2) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = {
    hasIcons: true,
    children: entries.map((item) => {
      let str;
      let tmp;
      let tmp2;
      let tmp4;
      let tmp5;
      [tmp, tmp2] = item;
      const obj = {
        label: tmp,
        subLabel: str,
        icon: closure_9(tmp4(tmp5[11]).CopyIcon, {}),
        onPress() {
          let str = "null";
          const copy = require("ClipboardUtils").copy;
          require("ClipboardUtils");
          if (null != closure_1_0) {
            const _JSON = JSON;
            str = JSON.stringify(tmp2);
          }
          copy(str);
        }
      };
      str = "null";
      const ActionSheetRow = closure_0(closure_3[10]).ActionSheetRow;
      tmp4 = closure_0;
      tmp5 = closure_3;
      if (null != tmp2) {
        let _JSON = JSON;
        str = JSON.stringify(tmp2);
      }
      return closure_9(ActionSheetRow, obj, tmp);
    })
  };
  Group = ActionSheetRow2.ActionSheetRow.Group;
  entries = Object.entries(survey);
  return React4(ActionSheet, obj);
}
function SurveyOverrideActionSheet() {
  let first;
  let items;
  let str2;
  let tmp3;
  [first, tmp3] = react.useState(() => {
    surveyOverride = surveyOverride.getSurveyOverride();
    if (surveyOverride == null) {
      surveyOverride = null;
    }
    return surveyOverride;
  });
  let obj = { header: closure_9(first(6570).BottomSheetTitleHeader, { title: "Survey Override" }), children: items };
  const ActionSheet = first(6618).ActionSheet;
  items = [closure_9(first(6024).TextInput, { label: "Survey Override", size: "md", placeholder: "Enter the ID of the Survey you want to test", onChange: tmp3, clearable: true }), ];
  let str = "Fetch Survey";
  const Button = first(5281).Button;
  const tmp4 = closure_10;
  const tmp5 = closure_9;
  if ("" === first) {
    str = "Reset Survey Override";
  }
  let obj2 = {
    text: str,
    variant: str2,
    onPress() {
      if ("" === first) {
        const obj2 = SurveyActionCreatorsAll;
        obj2.overrideSurvey(null);
      } else {
        const obj = SurveyActionCreatorsAll;
        obj.overrideSurvey(tmp);
      }
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet("SurveyOverrideActionSheet");
    }
  };
  str2 = "destructive";
  if ("" !== first) {
    let str3 = "primary";
    if (null == first) {
      str3 = "secondary";
    }
    str2 = str3;
  }
  items[1] = tmp5(Button, obj2);
  return tmp4(ActionSheet, obj);
}
function SurveyInfo() {
  let currentSurvey;
  let fn;
  let survey;
  let obj = require("get initialized");
  const items = [SurveyStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentSurvey.getCurrentSurvey());
  const tmp2 = usePreviousDefault(stateFromStores);
  _require = tmp2;
  const TableRowGroup = require("TableRowGroup").TableRowGroup;
  let obj2 = {
    label: "Survey override",
    subLabel: "Force a survey to be shown.",
    arrow: true,
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { default: SurveyOverrideActionSheet };
      obj.openLazy(Promise.resolve(obj2), "SurveyOverrideActionSheet");
    }
  };
  const items1 = [closure_9(require("TableRow").TableRow, obj2), ];
  let str;
  const TableRow = require("TableRow").TableRow;
  const tmp3 = closure_10;
  const tmp4 = closure_9;
  if (null == tmp2) {
    str = "No survey data";
  }
  let obj3 = { label: "Previous survey data", subLabel: str, arrow: null != tmp2, onPress: fn };
  fn = undefined;
  if (null != tmp2) {
    fn = () => {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { default: SurveyOverrideInfoActionSheet };
      const obj3 = { survey };
      obj.openLazy(Promise.resolve(obj2), "SurveyOverrideInfoActionSheet", obj3);
    };
  }
  const obj4 = { title: "Surveys", hasIcons: false, children: items1 };
  items1[1] = tmp4(TableRow, obj3);
  return tmp3(TableRowGroup, obj4);
}
function ChangelogOverrideDebuggingActionSheet() {
  let Text;
  let obj2;
  const obj = { header: React4(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: "Changelog Debugging" }), children: React4(Text, obj2) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { variant: "text-md/semibold", children: "" + JSON.stringify(ChangelogStore.getStateForDebugging(), undefined, "\t") };
  Text = Text_Text.Text;
  return React4(ActionSheet, obj);
}
function ChangelogOverrideActionSheet() {
  let first;
  let items;
  let str2;
  let tmp3;
  [first, tmp3] = react.useState(() => ChangelogStore.overrideId());
  let obj = { header: closure_9(first(6570).BottomSheetTitleHeader, { title: "Changelog Override" }), children: items };
  const ActionSheet = first(6618).ActionSheet;
  items = [closure_9(first(6024).TextInput, { label: "Changelog Override", size: "md", placeholder: "Enter the ID of the changelog you want to test", onChange: tmp3, clearable: true }), ];
  let str = "Fetch Changelog";
  const Button = first(5281).Button;
  const tmp4 = closure_10;
  const tmp5 = closure_9;
  if ("" === first) {
    str = "Reset Changelog Override";
  }
  let obj2 = {
    text: str,
    variant: str2,
    onPress() {
      if ("" === first) {
        const obj2 = ChangeLogActionCreatorsDefault;
        obj2.setChangelogOverride(null);
      } else {
        const obj = ChangeLogActionCreatorsDefault;
        obj.setChangelogOverride(tmp);
      }
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet("ChangelogOverrideActionSheet");
    }
  };
  str2 = "destructive";
  if ("" !== first) {
    let str3 = "primary";
    if (null == first) {
      str3 = "secondary";
    }
    str2 = str3;
  }
  items[1] = tmp5(Button, obj2);
  return tmp4(ActionSheet, obj);
}
function ChangelogInfo() {
  let items;
  let obj = { title: "Changelog", hasIcons: false, children: items };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  let obj2 = {
    label: "Changelog override",
    subLabel: "Force a changelog to be shown.",
    arrow: true,
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { default: ChangelogOverrideActionSheet };
      obj.openLazy(Promise.resolve(obj2), "ChangelogOverrideActionSheet");
    }
  };
  items = [React4(TableRow2.TableRow, obj2), ];
  const obj3 = {
    label: "Changelog debugging",
    arrow: true,
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { default: ChangelogOverrideDebuggingActionSheet };
      obj.openLazy(Promise.resolve(obj2), "ChangelogOverrideDebuggingActionSheet");
    }
  };
  items[1] = React4(TableRow2.TableRow, obj3);
  return authStore(TableRowGroup, obj);
}
const ScrollView = react_native.ScrollView;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { scrollView: obj2 };
obj2 = { padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_11 = createStyles.createStyles(obj);
const memoResult = react.memo(function UserSettingsSurveyChangelogOverride() {
  let Stack;
  let items;
  let obj2;
  const obj = { style: closure_11().scrollView, children: authStore(Stack, obj2) };
  obj2 = { spacing: 16, children: items };
  Stack = Stack_Stack.Stack;
  items = [React4(SurveyInfo, {}), React4(ChangelogInfo, {})];
  return React4(ScrollView, obj);
});
const result = size.fileFinishedImporting("modules/user_settings/changelog/native/UserSettingsSurveyChangelogOverride.tsx");

export default memoResult;
