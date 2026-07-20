// Module ID: 11852
// Function ID: 91787
// Name: ReportContent
// Dependencies: []
// Exports: default

// Module 11852 (ReportContent)
function ReportContent(applicationId) {
  applicationId = applicationId.applicationId;
  const arg1 = applicationId;
  const tmp = callback3();
  const importDefault = tmp;
  let obj = arg1(dependencyMap[6]);
  const navigation = obj.useNavigation();
  const dependencyMap = navigation;
  const tmp3 = callback(React.useState("issue_selection"), 2);
  const first = tmp3[0];
  let callback = first;
  const React = tmp3[1];
  const tmp5 = callback(React.useState([]), 2);
  const first1 = tmp5[0];
  let closure_6 = tmp5[1];
  const tmp7 = callback(React.useState(""), 2);
  const first2 = tmp7[0];
  let closure_8 = tmp7[1];
  const tmp9 = callback(React.useState(null), 2);
  const first3 = tmp9[0];
  let closure_10 = tmp9[1];
  const tmp11 = callback(React.useState(""), 2);
  const first4 = tmp11[0];
  const callback3 = first4;
  let closure_12 = tmp11[1];
  const memo = React.useMemo(() => applicationId(navigation[7]).generateViewId(), []);
  const effect = React.useEffect(() => {
    const detectableGames = applicationId(navigation[8]).fetchDetectableGames();
    const obj = applicationId(navigation[8]);
    detectableGames.then(closure_6).catch(() => {

    });
  }, []);
  callback = React.useCallback(() => {
    tmp(navigation[9]).popWithKey(closure_10);
  }, []);
  const items = [first, navigation, callback];
  const layoutEffect = React.useLayoutEffect(() => {
    if ("issue_selection" === first) {
      let obj = {};
      const intl2 = applicationId(navigation[10]).intl;
      obj.title = intl2.string(applicationId(navigation[10]).t.6tnjbD);
      obj.headerLeft = function headerLeft() {
        return null;
      };
      obj.headerRight = function headerRight() {
        const obj = { IconComponent: callback(closure_2[12]).XSmallIcon };
        const intl = callback(closure_2[10]).intl;
        obj.accessibilityLabel = intl.string(callback(closure_2[10]).t.cpT0Cq);
        obj.onPress = closure_14;
        return callback3(callback(closure_2[11]).HeaderActionButton, obj);
      };
      navigation.setOptions(obj);
    } else if ("game_search" === first) {
      obj = {};
      const intl = applicationId(navigation[10]).intl;
      obj.title = intl.string(applicationId(navigation[10]).t.TZgkxY);
      obj.headerLeft = applicationId(navigation[13]).getHeaderBackButton(() => callback2("issue_selection"));
      obj.headerRight = function headerRight() {
        return null;
      };
      navigation.setOptions(obj);
      const obj2 = applicationId(navigation[13]);
    } else {
      obj = {};
      const intl3 = applicationId(navigation[10]).intl;
      obj.title = intl3.string(applicationId(navigation[10]).t.tdDpJj);
      obj.headerLeft = applicationId(navigation[13]).getHeaderBackButton(() => callback2("issue_selection"));
      obj.headerRight = function headerRight() {
        return null;
      };
      navigation.setOptions(obj);
      const obj5 = applicationId(navigation[13]);
    }
  }, items);
  const items1 = [memo, applicationId, first2, first3, first4, callback];
  let closure_15 = React.useCallback(() => {
    let obj = applicationId(navigation[7]);
    obj = { viewId: memo, applicationId };
    let trimmed;
    if ("" !== first2.trim()) {
      trimmed = first2.trim();
    }
    obj.suggestedGameName = trimmed;
    let id;
    if (null != first3) {
      id = first3.id;
    }
    let tmp5 = null;
    if (null != id) {
      tmp5 = id;
    }
    obj.suggestedGameApplicationId = tmp5;
    let trimmed1;
    if ("" !== first4.trim()) {
      trimmed1 = first4.trim();
    }
    obj.feedback = trimmed1;
    obj.submitted = true;
    const result = obj.trackGameProfileFeedback(obj);
    callback();
  }, items1);
  const items2 = [first1, first2];
  let closure_16 = React.useMemo(() => {
    if ("" === first2.trim()) {
      return [];
    } else {
      let closure_0 = first2.toLowerCase();
      const found = first1.filter((name) => {
        const formatted = name.name.toLowerCase();
        return formatted.includes(closure_0);
      });
      return found.slice(0, 10);
    }
  }, items2);
  obj = {
    style: tmp.container,
    keyboardShouldPersistTaps: "handled",
    children: () => {
      if ("issue_selection" === first) {
        let obj = { style: tmp.content };
        obj = {};
        const intl7 = applicationId(navigation[10]).intl;
        obj.children = intl7.string(applicationId(navigation[10]).t.IQHicr);
        const items = [first2(applicationId(navigation[14]).Text, obj), ];
        const obj1 = {
          value: undefined,
          onChange(arg0) {
              const timerId = setTimeout(() => {
                let str = "other_feedback";
                if ("wrong_game_shown" === arg0) {
                  str = "game_search";
                }
                closure_4(str);
              }, 100);
            },
          hasIcons: false
        };
        const obj2 = { value: "wrong_game_shown" };
        const intl8 = applicationId(navigation[10]).intl;
        obj2.label = intl8.string(applicationId(navigation[10]).t.TZgkxY);
        const items1 = [first2(applicationId(navigation[16]).TableRadioRow, obj2), ];
        const obj3 = { value: "other_feedback" };
        const intl9 = applicationId(navigation[10]).intl;
        obj3.label = intl9.string(applicationId(navigation[10]).t.tdDpJj);
        items1[1] = first2(applicationId(navigation[16]).TableRadioRow, obj3);
        obj1.children = items1;
        items[1] = callback(applicationId(navigation[15]).TableRadioGroup, obj1);
        obj.children = items;
        return callback(closure_6, obj);
      } else if ("game_search" === tmp) {
        const obj4 = {};
        const obj5 = { style: tmp.content };
        const obj6 = {};
        const intl4 = applicationId(navigation[10]).intl;
        obj6.children = intl4.string(applicationId(navigation[10]).t.79o/iq);
        const items2 = [first2(applicationId(navigation[14]).Text, obj6), , ];
        const obj7 = {
          value: first2,
          onChange(arg0) {
              callback3(arg0);
              let tmp2 = null != name;
              if (tmp2) {
                tmp2 = arg0 !== name.name;
              }
              if (tmp2) {
                callback4(null);
              }
            }
        };
        const intl5 = applicationId(navigation[10]).intl;
        obj7.placeholder = intl5.string(applicationId(navigation[10]).t./SGi7v);
        items2[1] = first2(applicationId(navigation[17]).TextInput, obj7);
        let tmp27Result = closure_16.length > 0;
        if (tmp27Result) {
          const obj8 = {};
          let id;
          if (null != first3) {
            id = first3.id;
          }
          obj8.value = id;
          obj8.onChange = function onChange(arg0) {
            const found = closure_16.find((id) => id.id === id);
            let tmp2 = null;
            if (null != found) {
              tmp2 = found;
            }
            callback4(tmp2);
            if (null != tmp2) {
              callback3(tmp2.name);
            }
          };
          obj8.hasIcons = false;
          obj8.children = closure_16.map((id) => callback2(callback(closure_2[16]).TableRadioRow, { value: id.id, label: id.name }, "" + id.id + "-" + arg1));
          tmp27Result = first2(applicationId(navigation[15]).TableRadioGroup, obj8);
          const tmp27 = first2;
        }
        items2[2] = tmp27Result;
        obj5.children = items2;
        const items3 = [callback(closure_6, obj5), ];
        const obj9 = { style: tmp.submitContainer };
        const obj10 = {};
        const intl6 = applicationId(navigation[10]).intl;
        obj10.text = intl6.string(applicationId(navigation[10]).t.geKm7t);
        obj10.disabled = "" === first2.trim();
        obj10.onPress = closure_15;
        obj9.children = first2(applicationId(navigation[18]).Button, obj10);
        items3[1] = first2(closure_6, obj9);
        obj4.children = items3;
        return callback(first3, obj4);
      } else if ("other_feedback" === tmp) {
        obj = {};
        const obj11 = { style: tmp.content };
        const obj12 = {};
        const intl = applicationId(navigation[10]).intl;
        obj12.children = intl.string(applicationId(navigation[10]).t.IblYEw);
        const items4 = [first2(applicationId(navigation[14]).Text, obj12), ];
        const obj13 = { value: first4, onChange: closure_12 };
        const intl2 = applicationId(navigation[10]).intl;
        obj13.placeholder = intl2.string(applicationId(navigation[10]).t.aiPKV4);
        obj13.maxLength = 300;
        items4[1] = first2(applicationId(navigation[19]).TextArea, obj13);
        obj11.children = items4;
        const items5 = [callback(closure_6, obj11), ];
        const obj14 = { style: tmp.submitContainer };
        const obj15 = {};
        const intl3 = applicationId(navigation[10]).intl;
        obj15.text = intl3.string(applicationId(navigation[10]).t.geKm7t);
        obj15.disabled = "" === first4.trim();
        obj15.onPress = closure_15;
        obj14.children = first2(applicationId(navigation[18]).Button, obj15);
        items5[1] = first2(closure_6, obj14);
        obj.children = items5;
        return callback(first3, obj);
      }
    }()
  };
  return first2(first1, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ScrollView: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[3]));
let closure_10 = "game-detection-report";
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.content = { padding: importDefault(dependencyMap[5]).space.PX_16, gap: importDefault(dependencyMap[5]).space.PX_24 };
const obj1 = { padding: importDefault(dependencyMap[5]).space.PX_16, gap: importDefault(dependencyMap[5]).space.PX_24 };
obj.submitContainer = { padding: importDefault(dependencyMap[5]).space.PX_16 };
let closure_11 = obj.createStyles(obj);
const obj2 = { padding: importDefault(dependencyMap[5]).space.PX_16 };
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/game_profile/native/components/GameDetectionReportModal.tsx");

export default function GameDetectionReportModal(applicationId) {
  const screens = React.useMemo(() => ({
    ["REPORT"]: {
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback(closure_12, {});
      }
    }
  }), []);
  const initialRouteStack = [{ name: "REPORT", params: { applicationId: applicationId.applicationId } }];
  return callback2(arg1(dependencyMap[20]).Navigator, { screens, initialRouteStack });
};
export const MODAL_KEY = "game-detection-report";
