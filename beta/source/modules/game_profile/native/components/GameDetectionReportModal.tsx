// Module ID: 9610
// Function ID: 9611
// Name: GameDetectionReportModal
// Dependencies: [32, 19, 17, 21, 5014, 575, 1497, 9340, 9141, 9611, 9144, 6744, 1113, 7558, 7054, 6998, 5624, 7058, 7061, 7082, 5634, 7253, 7169, 2]
// Exports: default

// Module 9610 (GameDetectionReportModal)
import nativeDefault from "native" /* 575 */;
import intl10 from "intl" /* 1113 */;
import NavigatorHeader from "NavigatorHeader" /* 6998 */;
import Navigator from "Navigator" /* 7169 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9340 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
  let obj16;
  let obj22;
  let str;
  let str2;
  let tmp11;
  let tmp19Result;
  applicationId = applicationId.applicationId;
  first = undefined;
  _slicedToArray = undefined;
  str = undefined;
  closure_5 = undefined;
  first1 = undefined;
  closure_7 = undefined;
  str2 = undefined;
  let onSelect;
  let tmp = onSelect();
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
  let obj3 = { surface: applicationId(first[9]).GameSearchSurface.DETECTION_REPORT, filterGroup: applicationId(first[10]).GameSearchFilterGroup.DEFAULT };
  const debouncedGameAutocomplete = obj2.useDebouncedGameAutocomplete(str, obj3);
  const results = debouncedGameAutocomplete.results;
  onSelect = debouncedGameAutocomplete.onSelect;
  const callback = str.useCallback(() => {
    const obj = navigation(first[11]);
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
            const obj = { IconComponent: applicationId(first[14]).XSmallIcon, accessibilityLabel: intl.string(applicationId(first[12]).t.cpT0Cq), onPress };
            const HeaderActionButton = applicationId(first[13]).HeaderActionButton;
            intl = applicationId(first[12]).intl;
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
  let obj4 = { style: tmp.container, keyboardShouldPersistTaps: "handled", children: tmp19Result };
  const tmp18 = closure_5;
  if ("issue_selection" === first) {
    let obj5 = { style: tmp.content, children: items3 };
    const obj6 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(tmp2(first[12]).t.IQHicr) };
    const Text2 = tmp2(tmp3[16]).Text;
    intl4 = tmp2(tmp3[12]).intl;
    items3 = [tmp17(Text2, obj6), ];
    const obj7 = {
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
    const TableRadioGroup2 = tmp2(tmp3[17]).TableRadioGroup;
    const obj8 = { value: "wrong_game_shown", label: intl5.string(tmp2(first[12]).t.TZgkxY) };
    const TableRadioRow = tmp2(tmp3[18]).TableRadioRow;
    intl5 = tmp2(tmp3[12]).intl;
    items4 = [tmp17(TableRadioRow, obj8), ];
    const obj9 = { value: "other_feedback", label: intl6.string(tmp2(first[12]).t.tdDpJj) };
    const TableRadioRow2 = tmp2(tmp3[18]).TableRadioRow;
    intl6 = tmp2(tmp3[12]).intl;
    items4[1] = closure_7(TableRadioRow2, obj9);
    items3[1] = str2(TableRadioGroup2, obj7);
    tmp19Result = str2(first1, obj5);
  } else if ("game_search" === first) {
    const obj10 = { style: tmp.content, children: items5 };
    const obj11 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(tmp2(first[12]).t["79o/iq"]) };
    const Text = tmp2(tmp3[16]).Text;
    intl = tmp2(tmp3[12]).intl;
    items5 = [tmp17(Text, obj11), , ];
    const obj12 = {
      value: str,
      onChange(arg0) {
          closure_5(arg0);
          const tmp2 = null != first1 && arg0 !== first1.name;
          if (tmp2) {
            closure_7(null);
          }
        },
      placeholder: intl2.string(tmp2(first[12]).t["/SGi7v"])
    };
    const TextInput = tmp2(tmp3[19]).TextInput;
    intl2 = tmp2(tmp3[12]).intl;
    items5[1] = closure_7(TextInput, obj12);
    let tmp17Result = memo1.length > 0;
    const tmp20 = memo;
    if (tmp17Result) {
      let id;
      const TableRadioGroup = tmp2(tmp3[17]).TableRadioGroup;
      if (first1 != null) {
        id = first1.id;
      }
      const obj13 = {
        value: id,
        onChange(arg0) {
              let closure_0 = arg0;
              let found = memo1.find((id) => id.id === closure_0);
              if (found == null) {
                found = null;
              }
              closure_7(found);
              if (null != found) {
                onSelect(found.id);
                closure_5(found.name);
              }
            },
        hasIcons: false,
        children: memo1.map((id, index) => {
              const obj = { value: id.id, label: id.name };
              return closure_7(applicationId(first[18]).TableRadioRow, obj, "" + id.id + "-" + index);
            })
      };
      tmp17Result = tmp17(TableRadioGroup, obj13);
    }
    const obj14 = { children: items6 };
    items5[2] = tmp17Result;
    items6 = [tmp19(tmp21, obj10), ];
    const obj15 = { style: tmp.submitContainer, children: closure_7(Button, obj16) };
    obj16 = { variant: "primary", size: "md", text: intl3.string(tmp2(first[12]).t.geKm7t), disabled: "" === str.trim(), onPress: callback1 };
    Button = tmp2(tmp3[20]).Button;
    intl3 = tmp2(tmp3[12]).intl;
    items6[1] = closure_7(first1, obj15);
    tmp19Result = tmp19(tmp20, obj14);
  } else if ("other_feedback" === first) {
    const obj17 = { children: items8 };
    const obj18 = { style: tmp.content, children: items7 };
    const obj19 = { variant: "text-sm/normal", color: "text-muted", children: intl7.string(tmp2(first[12]).t.IblYEw) };
    const Text3 = tmp2(tmp3[16]).Text;
    intl7 = tmp2(tmp3[12]).intl;
    items7 = [tmp17(Text3, obj19), ];
    const obj20 = { value: str2, onChange: tmp11, placeholder: intl8.string(tmp2(first[12]).t.aiPKV4), maxLength: 300 };
    const TextArea = tmp2(tmp3[21]).TextArea;
    intl8 = tmp2(tmp3[12]).intl;
    items7[1] = closure_7(TextArea, obj20);
    items8 = [str2(first1, obj18), ];
    const obj21 = { style: tmp.submitContainer, children: closure_7(Button2, obj22) };
    obj22 = { variant: "primary", size: "md", text: intl9.string(tmp2(first[12]).t.geKm7t), disabled: "" === str2.trim(), onPress: callback1 };
    Button2 = tmp2(tmp3[20]).Button;
    intl9 = tmp2(tmp3[12]).intl;
    items8[1] = closure_7(first1, obj21);
    tmp19Result = str2(memo, obj17);
  }
  return closure_7(tmp18, obj4);
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
