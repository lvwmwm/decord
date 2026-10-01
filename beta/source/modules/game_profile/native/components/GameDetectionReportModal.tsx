// Module ID: 8366
// Function ID: 8367
// Name: GameDetectionReportModal
// Dependencies: [32, 19, 17, 21, 4836, 576, 1485, 8139, 8367, 5039, 1115, 6795, 5992, 5936, 4832, 5997, 6000, 6024, 5281, 6506, 6421, 2]
// Exports: default

// Module 8366 (GameDetectionReportModal)
import nativeDefault from "native" /* 576 */;
import intl10 from "intl" /* 1115 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import Navigator from "Navigator" /* 6421 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8139 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
function ReportContent(applicationId) {
  let Button;
  let Button2;
  let closure_3;
  let closure_5;
  let closure_7;
  let first;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj15;
  let obj21;
  let str;
  let str2;
  let tmp11;
  let tmp18Result;
  applicationId = applicationId.applicationId;
  first = undefined;
  _slicedToArray = undefined;
  str = undefined;
  closure_5 = undefined;
  first1 = undefined;
  closure_7 = undefined;
  str2 = undefined;
  let callback;
  let tmp = callback();
  let tmp2 = applicationId;
  let obj = applicationId(first[6]);
  navigation = obj.useNavigation();
  [first, _slicedToArray] = str.useState("issue_selection");
  [str, closure_5] = str.useState("");
  [first1, closure_7] = str.useState(null);
  [str2, tmp11] = str.useState("");
  const memo = str.useMemo(() => {
    const obj = applicationId(first[7]);
    return obj.generateViewId();
  }, []);
  let obj2 = applicationId(first[8]);
  const results = obj2.useDebouncedGameAutocomplete(str).results;
  callback = str.useCallback(() => {
    const obj = navigation(first[9]);
    obj.popWithKey(results);
  }, []);
  let items = [first, navigation, callback];
  const layoutEffect = str.useLayoutEffect(() => {
    let intl;
    let intl2;
    let intl3;
    let obj2;
    let obj5;
    let onPress;
    if ("issue_selection" === first) {
      const setOptions2 = navigation.setOptions;
      const obj3 = {
        title: intl2.string(intl10.t["6tnjbD"]),
        headerLeft() {
            return null;
          },
        headerRight() {
            let intl;
            const obj = { IconComponent: applicationId(first[12]).XSmallIcon, accessibilityLabel: intl.string(applicationId(first[10]).t.cpT0Cq), onPress };
            const HeaderActionButton = applicationId(first[11]).HeaderActionButton;
            intl = applicationId(first[10]).intl;
            return closure_7(HeaderActionButton, obj);
          }
      };
      intl2 = intl10.intl;
      setOptions2(obj3);
    } else if ("game_search" === tmp) {
      let obj = {
        title: intl.string(intl10.t.TZgkxY),
        headerLeft: obj2.getHeaderBackButton(() => closure_1_3("issue_selection")),
        headerRight() {
            return null;
          }
      };
      const setOptions = navigation.setOptions;
      intl = intl10.intl;
      obj2 = NavigatorHeader;
      setOptions(obj);
    } else {
      const setOptions3 = navigation.setOptions;
      const obj4 = {
        title: intl3.string(intl10.t.tdDpJj),
        headerLeft: obj5.getHeaderBackButton(() => closure_1_3("issue_selection")),
        headerRight() {
            return null;
          }
      };
      intl3 = intl10.intl;
      obj5 = NavigatorHeader;
      setOptions3(obj4);
    }
  }, items);
  const items1 = [memo, applicationId, str, first1, str2, callback];
  const callback1 = str.useCallback(() => {
    let id;
    let trimmed;
    let trimmed1;
    const obj = { viewId: memo, applicationId, suggestedGameName: trimmed, suggestedGameApplicationId: id, feedback: trimmed1, submitted: true };
    const trackGameProfileFeedback = GameProfileAnalyticUtils.trackGameProfileFeedback;
    trimmed = undefined;
    GameProfileAnalyticUtils;
    if ("" !== str.trim()) {
      trimmed = str.trim();
    }
    id = undefined;
    if (first1 != null) {
      id = first1.id;
    }
    if (id == null) {
      id = null;
    }
    trimmed1 = undefined;
    if ("" !== str2.trim()) {
      trimmed1 = str2.trim();
    }
    const result = trackGameProfileFeedback(obj);
    callback();
  }, items1);
  const items2 = [results];
  const memo1 = str.useMemo(() => {
    let items = results;
    if (results == null) {
      items = [];
    }
    return items.slice(0, 10);
  }, items2);
  let obj3 = { style: tmp.container, keyboardShouldPersistTaps: "handled", children: tmp18Result };
  const tmp17 = closure_5;
  if ("issue_selection" === first) {
    let obj4 = { style: tmp.content, children: items3 };
    let obj5 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(tmp2(tmp3[10]).t.IQHicr) };
    const Text2 = tmp2(tmp3[14]).Text;
    intl4 = tmp2(tmp3[10]).intl;
    items3 = [tmp16(Text2, obj5), ];
    const obj6 = {
      value: "Array",
      onChange(arg0) {
          let closure_0 = arg0;
          const timerId = setTimeout(() => {
            str = "other_feedback";
            const tmp = closure_3;
            if ("wrong_game_shown" === closure_0) {
              str = "game_search";
            }
            tmp(str);
          }, 100);
        },
      hasIcons: null,
      children: items4
    };
    const TableRadioGroup2 = tmp2(tmp3[15]).TableRadioGroup;
    const obj7 = { value: "wrong_game_shown", label: intl5.string(tmp2(first[10]).t.TZgkxY) };
    const TableRadioRow = tmp2(tmp3[16]).TableRadioRow;
    intl5 = tmp2(tmp3[10]).intl;
    items4 = [tmp16(TableRadioRow, obj7), ];
    const obj8 = { value: "other_feedback", label: intl6.string(tmp2(first[10]).t.tdDpJj) };
    const TableRadioRow2 = tmp2(tmp3[16]).TableRadioRow;
    intl6 = tmp2(tmp3[10]).intl;
    items4[1] = closure_7(TableRadioRow2, obj8);
    items3[1] = str2(TableRadioGroup2, obj6);
    tmp18Result = str2(first1, obj4);
  } else if ("game_search" === first) {
    const obj9 = { style: tmp.content, children: items5 };
    const obj10 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(tmp2(first[10]).t["79o/iq"]) };
    const Text = tmp2(tmp3[14]).Text;
    intl = tmp2(tmp3[10]).intl;
    items5 = [tmp16(Text, obj10), , ];
    const obj11 = {
      value: str,
      onChange(arg0) {
          closure_5(arg0);
          const tmp2 = null != first1 && arg0 !== first1.name;
          if (tmp2) {
            closure_7(null);
          }
        },
      placeholder: intl2.string(tmp2(first[10]).t["/SGi7v"])
    };
    const TextInput = tmp2(tmp3[17]).TextInput;
    intl2 = tmp2(tmp3[10]).intl;
    items5[1] = closure_7(TextInput, obj11);
    let tmp16Result = memo1.length > 0;
    const tmp19 = memo;
    if (tmp16Result) {
      let id;
      const TableRadioGroup = tmp2(tmp3[15]).TableRadioGroup;
      if (first1 != null) {
        id = first1.id;
      }
      const obj12 = {
        value: id,
        onChange(arg0) {
              let closure_0 = arg0;
              let found = memo1.find((id) => id.id === closure_0);
              if (found == null) {
                found = null;
              }
              closure_7(found);
              if (null != found) {
                closure_5(found.name);
              }
            },
        hasIcons: false,
        children: memo1.map((id, index) => {
              const obj = { value: id.id, label: id.name };
              return closure_7(applicationId(first[16]).TableRadioRow, obj, "" + id.id + "-" + index);
            })
      };
      tmp16Result = tmp16(TableRadioGroup, obj12);
    }
    const obj13 = { children: items6 };
    items5[2] = tmp16Result;
    items6 = [tmp18(tmp20, obj9), ];
    const obj14 = { style: tmp.submitContainer, children: closure_7(Button, obj15) };
    obj15 = { variant: "primary", size: "md", text: intl3.string(tmp2(first[10]).t.geKm7t), disabled: "" === str.trim(), onPress: callback1 };
    Button = tmp2(tmp3[18]).Button;
    intl3 = tmp2(tmp3[10]).intl;
    items6[1] = closure_7(first1, obj14);
    tmp18Result = tmp18(tmp19, obj13);
  } else if ("other_feedback" === first) {
    const obj16 = { children: items8 };
    const obj17 = { style: tmp.content, children: items7 };
    const obj18 = { variant: "text-sm/normal", color: "text-muted", children: intl7.string(tmp2(first[10]).t.IblYEw) };
    const Text3 = tmp2(tmp3[14]).Text;
    intl7 = tmp2(tmp3[10]).intl;
    items7 = [tmp16(Text3, obj18), ];
    const obj19 = { value: str2, onChange: tmp11, placeholder: intl8.string(tmp2(first[10]).t.aiPKV4), maxLength: 300 };
    const TextArea = tmp2(tmp3[19]).TextArea;
    intl8 = tmp2(tmp3[10]).intl;
    items7[1] = closure_7(TextArea, obj19);
    items8 = [str2(first1, obj17), ];
    const obj20 = { style: tmp.submitContainer, children: closure_7(Button2, obj21) };
    obj21 = { variant: "primary", size: "md", text: intl9.string(tmp2(first[10]).t.geKm7t), disabled: "" === str2.trim(), onPress: callback1 };
    Button2 = tmp2(tmp3[18]).Button;
    intl9 = tmp2(tmp3[10]).intl;
    items8[1] = closure_7(first1, obj20);
    tmp18Result = str2(memo, obj16);
  }
  return closure_7(tmp17, obj3);
}
let _slicedToArray = _slicedToArray_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let c10 = "game-detection-report";
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3, submitContainer: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj4 = { padding: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
const REPORT = "REPORT";
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameDetectionReportModal.tsx");

export default function GameDetectionReportModal(applicationId) {
  let items;
  applicationId = applicationId.applicationId;
  const memo = react.useMemo(() => {
    let obj = {
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        return closure_1_7(closure_1_12, obj);
      }
    };
    return { [closure_1_13]: obj };
  }, []);
  let obj = { screens: memo, initialRouteStack: items };
  items = [];
  const obj2 = { name: REPORT, params: { applicationId } };
  items[0] = obj2;
  return metroImportDefault(Navigator.Navigator, obj);
};
export const MODAL_KEY = "game-detection-report";
