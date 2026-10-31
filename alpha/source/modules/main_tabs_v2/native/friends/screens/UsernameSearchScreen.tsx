// Module ID: 18844
// Function ID: 18845
// Name: UsernameSearchScreen
// Dependencies: [19, 17, 1072, 21, 5014, 575, 1252, 5607, 5274, 9821, 1375, 6954, 10736, 15675, 1113, 2]
// Exports: default

// Module 18844 (UsernameSearchScreen)
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
({ AnalyticEvents: metroRequire, AnalyticsSections: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { background: obj2, content: obj3, iosPaddingThemeAdjust: obj4, container: obj5, inputContainer: obj6, headerText: { textTransform: "none" } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj4 = { paddingTop: nativeDefault.space.PX_40 };
obj5 = { flexGrow: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16 };
obj6 = { marginTop: nativeDefault.space.PX_16, backgroundColor: "transparent", paddingHorizontal: 0 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/UsernameSearchScreen.tsx");

export default function UsernameSearchScreen(navigation) {
  let constants2;
  let intl;
  let items1;
  let items2;
  let items3;
  let obj4;
  let obj7;
  let tmp3Result;
  let tmp3Result2;
  navigation = navigation.navigation;
  let ref;
  const tmp = closure_10();
  const effect = react.useEffect(() => {
    const obj = ref(dependencyMap[6]);
    const obj2 = { friend_add_type: constants2.FRIENDS_ADD_BY_USERNAME_MODAL };
    obj.track(constants.FRIEND_ADD_VIEWED, obj2);
  }, []);
  const insets = ref(5607)().insets;
  ref = react.useRef(null);
  const items = [navigation];
  const effect1 = react.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    let closing = data.data.closing;
    if (!closing) {
      const obj = navigation(dependencyMap[8]);
      closing = obj.getIsScreenReaderEnabled();
    }
    if (!closing) {
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    }
  }), items);
  let obj = navigation(9821);
  const clientThemesOverride = obj.useClientThemesOverride();
  let obj2 = navigation(1375);
  let prop = null;
  if (obj2.isIOS()) {
    prop = null;
    if (null != clientThemesOverride) {
      prop = null;
      if (insets.top > 0) {
        prop = tmp.iosPaddingThemeAdjust;
      }
    }
  }
  const obj3 = { style: tmp.background, children: closure_9(tmp3Result, obj4) };
  obj4 = { style: items1, children: items2 };
  items1 = [tmp.content, clientThemesOverride];
  items2 = [, ];
  tmp3Result = ref(6954);
  items2[0] = closure_8(ref(10736), { absolute: true });
  const obj5 = { alwaysBounceVertical: false, keyboardShouldPersistTaps: "handled", contentContainerStyle: items3, children: closure_8(tmp3Result2, obj7) };
  items3 = [tmp.container, prop, { paddingBottom: insets.bottom + tmp3(575).space.PX_16 }];
  obj7 = { style: tmp.inputContainer, autoFocusInput: false, headerText: intl.string(navigation(1113).t.YEOwDM), headerTextStyle: tmp.headerText, ref };
  ({ paddingBottom: insets.bottom + ref(575).space.PX_16 });
  tmp3Result2 = ref(15675);
  intl = tmp7(1113).intl;
  items2[1] = closure_8(closure_4, obj5);
  return closure_8(closure_5, obj3);
};
