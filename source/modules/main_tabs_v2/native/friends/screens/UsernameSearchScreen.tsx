// Module ID: 15508
// Function ID: 119321
// Name: UsernameSearchScreen
// Dependencies: [31, 27, 653, 33, 4130, 689, 675, 5160, 4528, 8868, 477, 5585, 4662, 12914, 1212, 2]
// Exports: default

// Module 15508 (UsernameSearchScreen)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ ScrollView: closure_4, View: closure_5 } = get_ActivityIndicator);
({ AnalyticEvents: closure_6, AnalyticsSections: closure_7 } = ME);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.background = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.content = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj1 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.iosPaddingThemeAdjust = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_40 };
let obj2 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_40 };
_createForOfIteratorHelperLoose.container = { flexGrow: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const obj4 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: "transparent", paddingHorizontal: 0 };
_createForOfIteratorHelperLoose.inputContainer = obj4;
_createForOfIteratorHelperLoose.headerText = { textTransform: "none" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { flexGrow: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("ME").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/UsernameSearchScreen.tsx");

export default function UsernameSearchScreen(navigation) {
  navigation = navigation.navigation;
  const tmp = _createForOfIteratorHelperLoose();
  const effect = React.useEffect(() => {
    let obj = ref(outer1_2[6]);
    obj = { friend_add_type: outer1_7.FRIENDS_ADD_BY_USERNAME_MODAL };
    obj.track(outer1_6.FRIEND_ADD_VIEWED, obj);
  }, []);
  const insets = ref(5160)().insets;
  ref = React.useRef(null);
  const items = [navigation];
  const effect1 = React.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    let closing = data.data.closing;
    if (!closing) {
      closing = navigation(outer2_2[8]).getIsScreenReaderEnabled();
      const obj = navigation(outer2_2[8]);
    }
    if (!closing) {
      const current = outer1_1.current;
      if (null != current) {
        current.focus();
      }
    }
  }), items);
  let obj = navigation(8868);
  const clientThemesOverride = obj.useClientThemesOverride();
  let obj1 = navigation(477);
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
  items1 = [tmp.content, clientThemesOverride];
  const items2 = [callback(ref(4662), { absolute: true }), ];
  obj1 = { alwaysBounceVertical: false, keyboardShouldPersistTaps: "handled" };
  const items3 = [tmp.container, prop, ];
  const tmp7 = ref(5585);
  items3[2] = { paddingBottom: insets.bottom + ref(689).space.PX_16 };
  obj1.contentContainerStyle = items3;
  const obj3 = { style: tmp.inputContainer, autoFocusInput: false };
  const obj2 = { paddingBottom: insets.bottom + ref(689).space.PX_16 };
  const intl = navigation(1212).intl;
  obj3.headerText = intl.string(navigation(1212).t.YEOwDM);
  obj3.headerTextStyle = tmp.headerText;
  obj3.ref = ref;
  obj1.children = callback(ref(12914), obj3);
  items2[1] = callback(closure_4, obj1);
  obj.children = items2;
  obj.children = callback2(tmp7, obj);
  return callback(closure_5, obj);
};
