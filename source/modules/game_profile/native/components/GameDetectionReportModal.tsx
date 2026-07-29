// Module ID: 11943
// Function ID: 11944
// Name: ReportContent
// Dependencies: [32, 19, 17, 21, 4189, 712, 1480, 8486, 11944, 4395, 1236, 6752, 5175, 5143, 4185, 7655, 7654, 6727, 4600, 7644, 5570, 2]
// Exports: default

// Module 11943 (ReportContent)
import _slicedToArray from "_slicedToArray";
import TextArea from "TextArea";
import get_ActivityIndicator from "TextInput";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function ReportContent(applicationId) {
  applicationId = applicationId.applicationId;
  let navigation;
  let first;
  let callback;
  let first1;
  let closure_5;
  let str;
  let closure_7;
  let first2;
  let closure_9;
  let str2;
  let memo;
  callback = undefined;
  let memo1;
  const tmp = memo();
  let obj = applicationId(first[6]);
  navigation = obj.useNavigation();
  const tmp5 = callback(first1.useState("issue_selection"), 2);
  first = tmp5[0];
  callback = tmp5[1];
  const tmp7 = callback(first1.useState([]), 2);
  first1 = tmp7[0];
  closure_5 = tmp7[1];
  const tmp9 = callback(first1.useState(""), 2);
  str = tmp9[0];
  closure_7 = tmp9[1];
  const tmp10 = callback(first1.useState(null), 2);
  first2 = tmp10[0];
  closure_9 = tmp10[1];
  const tmp12 = callback(first1.useState(""), 2);
  str2 = tmp12[0];
  memo = first1.useMemo(() => applicationId(first[7]).generateViewId(), []);
  const effect = first1.useEffect(() => {
    const detectableGames = applicationId(first[8]).fetchDetectableGames();
    const obj = applicationId(first[8]);
    detectableGames.then(closure_5).catch(() => {

    });
  }, []);
  callback = first1.useCallback(() => {
    navigation(first[9]).popWithKey(str2);
  }, []);
  const items = [first, navigation, callback];
  const layoutEffect = first1.useLayoutEffect(() => {
    if ("issue_selection" === first) {
      let obj = { title: null, headerLeft: null, headerRight: null };
      const intl2 = applicationId(first[10]).intl;
      obj[0] = intl2.string(applicationId(first[10]).t["6tnjbD"]);
      obj[1] = function headerLeft() {
        return null;
      };
      obj[2] = function headerRight() {
        const obj = { IconComponent: null, accessibilityLabel: null, onPress: null };
        obj[0] = outer1_0(outer1_2[12]).XSmallIcon;
        const intl = outer1_0(outer1_2[10]).intl;
        obj[1] = intl.string(outer1_0(outer1_2[10]).t.cpT0Cq);
        obj[2] = closure_12;
        return outer1_7(outer1_0(outer1_2[11]).HeaderActionButton, obj);
      };
      navigation.setOptions(obj);
    } else if ("game_search" === tmp) {
      obj = { title: null, headerLeft: null, headerRight: null };
      let intl = applicationId(first[10]).intl;
      obj[0] = intl.string(applicationId(first[10]).t.TZgkxY);
      obj[1] = applicationId(first[13]).getHeaderBackButton(() => callback("issue_selection"));
      obj[2] = function headerRight() {
        return null;
      };
      navigation.setOptions(obj);
      const obj2 = applicationId(first[13]);
    } else {
      obj = { title: null, headerLeft: null, headerRight: null };
      const intl3 = applicationId(first[10]).intl;
      obj[0] = intl3.string(applicationId(first[10]).t.tdDpJj);
      obj[1] = applicationId(first[13]).getHeaderBackButton(() => callback("issue_selection"));
      obj[2] = function headerRight() {
        return null;
      };
      navigation.setOptions(obj);
      const obj5 = applicationId(first[13]);
    }
  }, items);
  const items1 = [memo, applicationId, str, first2, str2, callback];
  const callback1 = first1.useCallback(() => {
    let obj = applicationId(first[7]);
    obj = { viewId: memo, applicationId, suggestedGameName: null, suggestedGameApplicationId: null, feedback: null, submitted: true };
    let trimmed;
    if ("" !== str.trim()) {
      trimmed = str.trim();
    }
    obj[2] = trimmed;
    let id;
    if (first2 != null) {
      id = first2.id;
    }
    if (id == null) {
      id = null;
    }
    obj[3] = id;
    let trimmed1;
    if ("" !== str2.trim()) {
      trimmed1 = str2.trim();
    }
    obj[4] = trimmed1;
    const result = obj.trackGameProfileFeedback(obj);
    callback();
  }, items1);
  const items2 = [first1, str];
  memo1 = first1.useMemo(() => {
    if ("" === str.trim()) {
      return [];
    } else {
      let closure_0 = str.toLowerCase();
      const found = first1.filter((name) => {
        const formatted = name.name.toLowerCase();
        return formatted.includes(closure_0);
      });
      return found.slice(0, 10);
    }
  }, items2);
  obj = { style: tmp.container, keyboardShouldPersistTaps: "handled", children: null };
  if ("issue_selection" === first) {
    obj = { style: null, children: null };
    obj[0] = tmp.content;
    const obj1 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl4 = tmp2(tmp3[10]).intl;
    obj1[2] = intl4.string(tmp2(tmp3[10]).t.IQHicr);
    const items3 = [tmp18(tmp2(tmp3[14]).Text, obj1), ];
    let obj2 = { value: "Array", onChange: false, hasIcons: null, children: "SpatialAudioPanel" };
    obj2[1] = function onChange(arg0) {
      let closure_0 = arg0;
      const timerId = setTimeout(() => {
        let str = "other_feedback";
        if ("wrong_game_shown" === closure_0) {
          str = "game_search";
        }
        outer1_3(str);
      }, 100);
    };
    const obj3 = { value: "wrong_game_shown", label: null };
    const intl5 = tmp2(tmp3[10]).intl;
    obj3[1] = intl5.string(tmp2(tmp3[10]).t.TZgkxY);
    const items4 = [tmp18(tmp2(tmp3[16]).TableRadioRow, obj3), ];
    const obj4 = { value: "other_feedback", label: null };
    const intl6 = tmp2(tmp3[10]).intl;
    obj4[1] = intl6.string(tmp2(tmp3[10]).t.tdDpJj);
    items4[1] = tmp18(tmp2(tmp3[16]).TableRadioRow, obj4);
    obj2[3] = items4;
    items3[1] = first2(tmp2(tmp3[15]).TableRadioGroup, obj2);
    obj[1] = items3;
    let tmp20Result = first2(str, obj);
  } else if ("game_search" === first) {
    let obj5 = { style: null, children: null };
    obj5[0] = tmp.content;
    const obj6 = { variant: "text-sm/normal", color: "text-muted", children: null };
    let intl = tmp2(tmp3[10]).intl;
    obj6[2] = intl.string(tmp2(tmp3[10]).t["79o/iq"]);
    const items5 = [tmp18(tmp2(tmp3[14]).Text, obj6), , ];
    const obj7 = { value: null, onChange: null, placeholder: null };
    obj7[0] = str;
    obj7[1] = function onChange(arg0) {
      callback(arg0);
      if (tmp2) {
        callback2(null);
      }
    };
    let intl2 = tmp2(tmp3[10]).intl;
    obj7[2] = intl2.string(tmp2(tmp3[10]).t["/SGi7v"]);
    items5[1] = tmp18(tmp2(tmp3[17]).TextInput, obj7);
    let tmp18Result = memo1.length > 0;
    if (tmp18Result) {
      let id;
      if (first2 != null) {
        id = first2.id;
      }
      const obj8 = { value: null, onChange: null, hasIcons: false, children: null };
      obj8[0] = id;
      obj8[1] = function onChange(arg0) {
        let closure_0 = arg0;
        let found = memo1.find((id) => id.id === closure_0);
        if (found == null) {
          found = null;
        }
        callback2(found);
        if (null != found) {
          callback(found.name);
        }
      };
      obj8[3] = memo1.map((id) => callback(applicationId(first[16]).TableRadioRow, { value: id.id, label: id.name }, "" + id.id + "-" + arg1));
      tmp18Result = tmp18(tmp2(tmp3[15]).TableRadioGroup, obj8);
    }
    const obj9 = { children: null };
    items5[2] = tmp18Result;
    obj5[1] = items5;
    const items6 = [first2(str, obj5), ];
    const obj10 = { style: null, children: null };
    obj10[0] = tmp.submitContainer;
    const obj11 = { variant: "primary", size: "md", text: null, disabled: null, onPress: null };
    let intl3 = tmp2(tmp3[10]).intl;
    obj11[2] = intl3.string(tmp2(tmp3[10]).t.geKm7t);
    obj11[3] = "" === str.trim();
    obj11[4] = callback1;
    obj10[1] = tmp18(tmp2(tmp3[18]).Button, obj11);
    items6[1] = tmp18(str, obj10);
    obj9[0] = items6;
    tmp20Result = tmp20(closure_9, obj9);
    const tmp21 = closure_9;
  } else if ("other_feedback" === first) {
    const obj12 = { children: null };
    const obj13 = { style: null, children: null };
    obj13[0] = tmp.content;
    const obj14 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl7 = tmp2(tmp3[10]).intl;
    obj14[2] = intl7.string(tmp2(tmp3[10]).t.IblYEw);
    const items7 = [tmp18(tmp2(tmp3[14]).Text, obj14), ];
    const obj15 = { value: null, onChange: null, placeholder: null, maxLength: 300 };
    obj15[0] = str2;
    obj15[1] = tmp12[1];
    const intl8 = tmp2(tmp3[10]).intl;
    obj15[2] = intl8.string(tmp2(tmp3[10]).t.aiPKV4);
    items7[1] = tmp18(tmp2(tmp3[19]).TextArea, obj15);
    obj13[1] = items7;
    const items8 = [first2(str, obj13), ];
    const obj16 = { style: null, children: null };
    obj16[0] = tmp.submitContainer;
    const obj17 = { variant: "primary", size: "md", text: null, disabled: null, onPress: null };
    const intl9 = tmp2(tmp3[10]).intl;
    obj17[2] = intl9.string(tmp2(tmp3[10]).t.geKm7t);
    obj17[3] = "" === str2.trim();
    obj17[4] = callback1;
    obj16[1] = tmp18(tmp2(tmp3[18]).Button, obj17);
    items8[1] = tmp18(str, obj16);
    obj12[0] = items8;
    tmp20Result = first2(closure_9, obj12);
  }
  obj[2] = tmp20Result;
  return closure_7(closure_5, obj);
}
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll, Fragment: c9 } = jsxProd);
let c10 = "game-detection-report";
createCacheKey = { container: null, content: null, submitContainer: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: require("Themes").space.PX_16, gap: require("Themes").space.PX_24 };
let obj1 = { padding: require("Themes").space.PX_16, gap: require("Themes").space.PX_24 };
createCacheKey[2] = { padding: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const REPORT = "REPORT";
let obj2 = { padding: require("Themes").space.PX_16 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/game_profile/native/components/GameDetectionReportModal.tsx");

export default function GameDetectionReportModal(applicationId) {
  const screens = React.useMemo(() => ({
    [closure_13]: {
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback(closure_12, {});
      }
    }
  }), []);
  const initialRouteStack = [{ name: REPORT, params: { applicationId: applicationId.applicationId } }];
  return callback2(require(5570) /* NavigationStack */.Navigator, { screens, initialRouteStack });
};
export const MODAL_KEY = "game-detection-report";
