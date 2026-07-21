// Module ID: 15336
// Function ID: 116782
// Name: UsernameSearchScreen
// Dependencies: []
// Exports: default

// Module 15336 (UsernameSearchScreen)
let closure_3 = importAll(dependencyMap[0]);
({ ScrollView: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticEvents: closure_6, AnalyticsSections: closure_7 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.background = obj;
const tmp4 = arg1(dependencyMap[3]);
obj.content = { flex: 1, backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
const obj1 = { flex: 1, backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.iosPaddingThemeAdjust = { paddingTop: importDefault(dependencyMap[5]).space.PX_40 };
const obj2 = { paddingTop: importDefault(dependencyMap[5]).space.PX_40 };
obj.container = { flexGrow: 1, backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
const obj4 = { "Bool(true)": 631504900, "Bool(true)": -991821820, "Bool(true)": -760741887, marginTop: importDefault(dependencyMap[5]).space.PX_16 };
obj.inputContainer = obj4;
obj.headerText = { textTransform: "none" };
let closure_10 = obj.createStyles(obj);
const obj3 = { flexGrow: 1, backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/UsernameSearchScreen.tsx");

export default function UsernameSearchScreen(navigation) {
  navigation = navigation.navigation;
  const arg1 = navigation;
  const tmp = callback3();
  const effect = React.useEffect(() => {
    let obj = ref(closure_2[6]);
    obj = { friend_add_type: constants2.FRIENDS_ADD_BY_USERNAME_MODAL };
    obj.track(constants.FRIEND_ADD_VIEWED, obj);
  }, []);
  const insets = importDefault(dependencyMap[7])().insets;
  const ref = React.useRef(null);
  const importDefault = ref;
  const items = [navigation];
  const effect1 = React.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    let closing = data.data.closing;
    if (!closing) {
      closing = callback(closure_2[8]).getIsScreenReaderEnabled();
      const obj = callback(closure_2[8]);
    }
    if (!closing) {
      const current = ref.current;
      if (null != current) {
        current.focus();
      }
    }
  }), items);
  let obj = arg1(dependencyMap[9]);
  const clientThemesOverride = obj.useClientThemesOverride();
  let obj1 = arg1(dependencyMap[10]);
  let prop = null;
  if (obj1.isIOS()) {
    prop = null;
    if (null != clientThemesOverride) {
      prop = null;
      if (insets.top > 0) {
        prop = tmp.iosPaddingThemeAdjust;
      }
    }
  }
  obj = { style: tmp.background };
  obj = { style: items1 };
  const items1 = [tmp.content, clientThemesOverride];
  const items2 = [callback(importDefault(dependencyMap[12]), { absolute: true }), ];
  obj1 = { useIsMobileGameCollectionExperimentEnabled: true, openSafetyFlow: true };
  const items3 = [tmp.container, prop, ];
  const tmp7 = importDefault(dependencyMap[11]);
  items3[2] = { paddingBottom: insets.bottom + importDefault(dependencyMap[5]).space.PX_16 };
  obj1.contentContainerStyle = items3;
  const obj3 = { style: tmp.inputContainer, autoFocusInput: false };
  const obj2 = { paddingBottom: insets.bottom + importDefault(dependencyMap[5]).space.PX_16 };
  const intl = arg1(dependencyMap[14]).intl;
  obj3.headerText = intl.string(arg1(dependencyMap[14]).t.YEOwDM);
  obj3.headerTextStyle = tmp.headerText;
  obj3.ref = ref;
  obj1.children = callback(importDefault(dependencyMap[13]), obj3);
  items2[1] = callback(closure_4, obj1);
  obj.children = items2;
  obj.children = callback2(tmp7, obj);
  return callback(closure_5, obj);
};
