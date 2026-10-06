// Module ID: 14207
// Function ID: 14208
// Name: PasskeyUpsellView
// Dependencies: [32, 19, 17, 14203, 1086, 2048, 21, 4837, 588, 558, 576, 1491, 1127, 14208, 6365, 14209, 5933, 2114, 6546, 14212, 4833, 1370, 5282, 2]

// Module 14207 (PasskeyUpsellView)
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import intl8 from "intl" /* 1127 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2114 */;
import NavigatorHeader from "NavigatorHeader" /* 5933 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 6365 */;
import WebAuthnConstants from "WebAuthnConstants" /* 14203 */;
import PasskeyUpsellManagerDefault from "PasskeyUpsellManager" /* 14208 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 14209 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let importDefault, navigation;

let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
let tmp12;
let unpackModuleId;
const AssetRegistryDefault = tmp12(14212);
({ View: hasOwnProperty, Image: metroRequire, ScrollView: metroImportDefault } = react_native);
const WebAuthnScreens = WebAuthnConstants.WebAuthnScreens;
const HelpdeskArticles = Constants.HelpdeskArticles;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollViewContainer: obj3, headerContainer: obj4, headerImage: { height: 190, width: 220, resizeMode: "contain" }, headerText: { textAlign: "center" }, circleIcon: size, listContainer: obj5, row: obj6, text: { flex: 1 }, buttonContainer: obj7 };
obj2 = { flex: 1, flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 1, justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16 };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.round };
obj5 = { gap: nativeDefault.space.PX_24, marginLeft: nativeDefault.space.PX_8, marginRight: nativeDefault.space.PX_8 };
obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
obj7 = { gap: nativeDefault.space.PX_16, alignItems: "center" };
let closure_13 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let headerContainer;
  let items1;
  let onRegisterSuccess;
  let scrollViewContainer;
  let setError;
  let setRegistering;
  let tmp10;
  let tmp17;
  let tmp21;
  let tmp8;
  let tmp9;
  let obj = navigation(576);
  const cResult = obj.c(96);
  let obj2 = navigation(1491);
  navigation = obj2.useNavigation();
  const tmp5 = closure_13();
  let obj3 = R;
  importDefault = onRegisterSuccess(R.useState(""), 2)[1];
  [r10026, dependencyMap] = onRegisterSuccess(R.useState(false), 2);
  onRegisterSuccess(R.useState(false), 2);
  if (cResult[0] !== navigation) {
    onRegisterSuccess = function onRegisterSuccess(R) {
      let intl;
      const push = navigation.push;
      const NAME = WebAuthnScreens.NAME;
      const obj = { name: intl.string(intl8.t["8H5RmH"]) };
      const merged = Object.assign(R);
      intl = intl8.intl;
      push(NAME, obj);
    };
    const fn = function l() {
      const obj = PasskeyUpsellManagerDefault;
      obj.markDismissed(ContentDismissActionType.TAKE_ACTION);
      const obj2 = NativeCeremoniesDefault;
      const obj3 = { setRegistering: dependencyMap, setError, onRegisterSuccess };
      obj2.registerPasskey(obj3);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        const obj = setError(dependencyMap[13]);
        obj.markDismissed(constants.USER_DISMISS);
        const obj2 = setError(dependencyMap[15]);
        const result = obj2.closePasskeyUpsellModal();
      }
    }
    cResult[2] = R;
    tmp8 = R;
  } else {
    class R {
      constructor() {
        const obj = setError(dependencyMap[13]);
        obj.markDismissed(constants.USER_DISMISS);
        const obj2 = setError(dependencyMap[15]);
        const result = obj2.closePasskeyUpsellModal();
      }
    }
  }
  R = tmp8;
  if (cResult[3] !== navigation) {
    class E {
      constructor() {
        let obj2;
        const setOptions = navigation.setOptions;
        const obj = { headerLeft: obj2.getHeaderCloseButton(R) };
        obj2 = NavigatorHeader;
        setOptions(obj);
      }
    }
    const items = [navigation];
    cResult[3] = navigation;
    cResult[4] = E;
    cResult[5] = items;
    tmp10 = items;
    tmp9 = E;
  } else {
    class E {
      constructor() {
        let obj2;
        const setOptions = navigation.setOptions;
        const obj = { headerLeft: obj2.getHeaderCloseButton(R) };
        obj2 = NavigatorHeader;
        setOptions(obj);
      }
    }
    tmp10 = cResult[5];
  }
  const layoutEffect = obj3.useLayoutEffect(tmp9, tmp10);
  if (cResult[6] === tmp5.buttonContainer) {
    class E {
      constructor() {
        let obj2;
        const setOptions = navigation.setOptions;
        const obj = { headerLeft: obj2.getHeaderCloseButton(R) };
        obj2 = NavigatorHeader;
        setOptions(obj);
      }
    }
  }
  const obj4 = HelpdeskUtilsDefault;
  const articleURL = obj4.getArticleURL(HelpdeskArticles.SETTING_UP_TWO_FACTOR);
  const SafeAreaPaddingView = tmp(6546).SafeAreaPaddingView;
  ({ scrollViewContainer, headerContainer } = tmp5);
  if (cResult[29] !== tmp5.headerImage) {
    class E {
      constructor() {
        let obj2;
        const setOptions = navigation.setOptions;
        const obj = { headerLeft: obj2.getHeaderCloseButton(R) };
        obj2 = NavigatorHeader;
        setOptions(obj);
      }
    }
    const obj5 = { source: AssetRegistryDefault, style: tmp5.headerImage };
    cResult[29] = tmp5.headerImage;
    cResult[30] = closure_11(closure_6, obj5);
    const tmp16 = closure_11(closure_6, obj5);
  } else {
    class E {
      constructor() {
        let obj2;
        const setOptions = navigation.setOptions;
        const obj = { headerLeft: obj2.getHeaderCloseButton(R) };
        obj2 = NavigatorHeader;
        setOptions(obj);
      }
    }
  }
  const headerText = tmp5.headerText;
  if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        let obj2;
        const setOptions = navigation.setOptions;
        const obj = { headerLeft: obj2.getHeaderCloseButton(R) };
        obj2 = NavigatorHeader;
        setOptions(obj);
      }
    }
    const stringResult = obj6.string(navigation(1127).t.CjleBl);
    cResult[31] = stringResult;
    tmp17 = stringResult;
  } else {
    class E {
      constructor() {
        let obj2;
        const setOptions = navigation.setOptions;
        const obj = { headerLeft: obj2.getHeaderCloseButton(R) };
        obj2 = NavigatorHeader;
        setOptions(obj);
      }
    }
  }
  if (cResult[32] !== tmp5.headerText) {
    class E {
      constructor() {
        let obj2;
        const setOptions = navigation.setOptions;
        const obj = { headerLeft: obj2.getHeaderCloseButton(R) };
        obj2 = NavigatorHeader;
        setOptions(obj);
      }
    }
    const obj7 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: headerText, children: tmp17 };
    cResult[32] = tmp5.headerText;
    cResult[33] = closure_11(navigation(4833).Text, obj7);
    const tmp20 = closure_11(navigation(4833).Text, obj7);
  } else {
    class E {
      constructor() {
        let obj2;
        const setOptions = navigation.setOptions;
        const obj = { headerLeft: obj2.getHeaderCloseButton(R) };
        obj2 = NavigatorHeader;
        setOptions(obj);
      }
    }
  }
  if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        let obj2;
        const setOptions = navigation.setOptions;
        const obj = { headerLeft: obj2.getHeaderCloseButton(R) };
        obj2 = NavigatorHeader;
        setOptions(obj);
      }
    }
    const isIOSResult = obj8.isIOS();
    const string = tmp(1127).intl.string;
    const t = tmp(1127).t;
    if (isIOSResult) {
      class E {
        constructor() {
          let obj2;
          const setOptions = navigation.setOptions;
          const obj = { headerLeft: obj2.getHeaderCloseButton(R) };
          obj2 = NavigatorHeader;
          setOptions(obj);
        }
      }
    } else {
      class E {
        constructor() {
          let obj2;
          const setOptions = navigation.setOptions;
          const obj = { headerLeft: obj2.getHeaderCloseButton(R) };
          obj2 = NavigatorHeader;
          setOptions(obj);
        }
      }
    }
    cResult[34] = tmp23;
    tmp21 = tmp23;
  } else {
    class E {
      constructor() {
        let obj2;
        const setOptions = navigation.setOptions;
        const obj = { headerLeft: obj2.getHeaderCloseButton(R) };
        obj2 = NavigatorHeader;
        setOptions(obj);
      }
    }
  }
  if (cResult[35] !== tmp5.headerText) {
    class E {
      constructor() {
        let obj2;
        const setOptions = navigation.setOptions;
        const obj = { headerLeft: obj2.getHeaderCloseButton(R) };
        obj2 = NavigatorHeader;
        setOptions(obj);
      }
    }
    const obj9 = { variant: "heading-md/normal", color: "text-default", style: tmp5.headerText, children: tmp21 };
    cResult[35] = tmp5.headerText;
    cResult[36] = closure_11(navigation(4833).Text, obj9);
    const tmp25 = closure_11(navigation(4833).Text, obj9);
  } else {
    class E {
      constructor() {
        let obj2;
        const setOptions = navigation.setOptions;
        const obj = { headerLeft: obj2.getHeaderCloseButton(R) };
        obj2 = NavigatorHeader;
        setOptions(obj);
      }
    }
  }
  if (cResult[37] === tmp5.headerContainer) {
    class E {
      constructor() {
        let obj2;
        const setOptions = navigation.setOptions;
        const obj = { headerLeft: obj2.getHeaderCloseButton(R) };
        obj2 = NavigatorHeader;
        setOptions(obj);
      }
    }
  }
  const obj10 = { style: headerContainer, children: items1 };
  items1 = [tmp14, tmp19, tmp24];
  cResult[37] = tmp5.headerContainer;
  cResult[38] = tmp14;
  cResult[39] = tmp19;
  cResult[40] = tmp24;
  cResult[41] = closure_12(closure_5, obj10);
  closure_12(closure_5, obj10);
}) : (() => {
  let intl;
  let intl3;
  let intl5;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj4;
  let setError;
  let setRegistering;
  let string2Result;
  let string3Result;
  let string4Result;
  let stringResult;
  let tmp12;
  let tmp7;
  function onRegisterSuccess(onCancel) {
    let intl;
    const push = navigation.push;
    const NAME = WebAuthnScreens.NAME;
    const obj = { name: intl.string(intl8.t["8H5RmH"]) };
    const merged = Object.assign(onCancel);
    intl = intl8.intl;
    push(NAME, obj);
  }
  function onCancel() {
    const obj = PasskeyUpsellManagerDefault;
    obj.markDismissed(constants.USER_DISMISS);
    const obj2 = PasskeyUpsellActionCreatorsDefault;
    const result = obj2.closePasskeyUpsellModal();
  }
  let obj = navigation(1491);
  navigation = obj.useNavigation();
  const tmp4 = closure_13();
  [r10018, importDefault] = onRegisterSuccess(onCancel.useState(""), 2);
  onRegisterSuccess(onCancel.useState(""), 2);
  [tmp7, dependencyMap] = onRegisterSuccess(onCancel.useState(false), 2);
  const items = [navigation];
  onRegisterSuccess(onCancel.useState(false), 2);
  const layoutEffect = onCancel.useLayoutEffect(() => {
    let obj2;
    const setOptions = navigation.setOptions;
    const obj = { headerLeft: obj2.getHeaderCloseButton(onCancel) };
    obj2 = NavigatorHeader;
    setOptions(obj);
  }, items);
  let obj2 = HelpdeskUtilsDefault;
  const articleURL = obj2.getArticleURL(HelpdeskArticles.SETTING_UP_TWO_FACTOR);
  let obj3 = { bottom: true, style: tmp4.container, children: closure_12(tmp12, obj4) };
  obj4 = { contentContainerStyle: tmp4.scrollViewContainer, children: items2 };
  const obj5 = { style: tmp4.headerContainer, children: items1 };
  const obj6 = { source: AssetRegistryDefault, style: tmp4.headerImage };
  const SafeAreaPaddingView = navigation(6546).SafeAreaPaddingView;
  items1 = [closure_11(closure_6, obj6), , ];
  const obj7 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp4.headerText, children: intl.string(navigation(1127).t.CjleBl) };
  const Text = navigation(4833).Text;
  intl = navigation(1127).intl;
  items1[1] = closure_11(Text, obj7);
  const obj8 = { variant: "heading-md/normal", color: "text-default", style: tmp4.headerText, children: stringResult };
  const Text2 = navigation(4833).Text;
  const obj9 = navigation(1370);
  const isIOSResult = obj9.isIOS();
  const intl2 = navigation(1127).intl;
  const string = intl2.string;
  const t = navigation(1127).t;
  tmp12 = closure_7;
  if (isIOSResult) {
    stringResult = string(t["7yxR9t"]);
  } else {
    stringResult = string(t.d6uxJy);
  }
  items1[2] = closure_11(Text2, obj8);
  items2 = [closure_12(closure_5, obj5), , ];
  const obj11 = { style: tmp4.row, children: items3 };
  items3 = [, ];
  const obj10 = { style: tmp4.listContainer, children: items4 };
  const obj12 = { style: tmp4.circleIcon };
  items3[0] = closure_11(closure_5, obj12);
  const obj13 = { variant: "heading-md/normal", color: "text-default", style: tmp4.text, children: intl3.string(navigation(1127).t.HtqVkj) };
  const Text3 = tmp(4833).Text;
  intl3 = tmp(1127).intl;
  items3[1] = closure_11(Text3, obj13);
  items4 = [closure_12(closure_5, obj11), ];
  const obj14 = { style: tmp4.row, children: items5 };
  items5 = [, ];
  const obj15 = { style: tmp4.circleIcon };
  items5[0] = closure_11(closure_5, obj15);
  const obj16 = { variant: "heading-md/normal", color: "text-default", style: tmp4.text, children: string2Result };
  const Text4 = tmp(4833).Text;
  const tmpResult = navigation(1370);
  const isIOSResult1 = tmpResult.isIOS();
  const intl4 = tmp(1127).intl;
  const string2 = intl4.string;
  const t2 = tmp(1127).t;
  if (isIOSResult1) {
    string2Result = string2(t2.U409I8);
  } else {
    string2Result = string2(t2.uYfqlo);
  }
  items5[1] = closure_11(Text4, obj16);
  items4[1] = closure_12(closure_5, obj14);
  items2[1] = closure_12(closure_5, obj10);
  const obj17 = { style: tmp4.buttonContainer, children: items6 };
  const obj18 = { variant: "text-sm/semibold", color: "text-brand", children: intl5.format(navigation(1127).t.OeGXVv, { learnMoreLink: articleURL }) };
  const Text5 = tmp(4833).Text;
  intl5 = tmp(1127).intl;
  items6 = [closure_11(Text5, obj18), , ];
  const Button = tmp(5282).Button;
  const intl6 = tmp(1127).intl;
  const string3 = intl6.string;
  const t3 = tmp(1127).t;
  if (tmp7) {
    string3Result = string3(t3.wePEBF);
  } else {
    string3Result = string3(t3.NIFmCJ);
  }
  const obj19 = {
    text: string3Result,
    onPress() {
      const obj = PasskeyUpsellManagerDefault;
      obj.markDismissed(ContentDismissActionType.TAKE_ACTION);
      const obj2 = NativeCeremoniesDefault;
      const obj3 = { setRegistering: dependencyMap, setError: importDefault, onRegisterSuccess };
      obj2.registerPasskey(obj3);
    },
    size: "lg",
    disabled: tmp7,
    loading: tmp7,
    grow: true
  };
  items6[1] = closure_11(Button, obj19);
  const Button2 = tmp(5282).Button;
  const intl7 = tmp(1127).intl;
  const string4 = intl7.string;
  const t4 = tmp(1127).t;
  if (tmp7) {
    string4Result = string4(t4.wePEBF);
  } else {
    string4Result = string4(t4["7J6/nG"]);
  }
  items6[2] = closure_11(Button2, { text: string4Result, onPress: onCancel, size: "lg", variant: "secondary", grow: true });
  items2[2] = closure_12(closure_5, obj17);
  return closure_11(SafeAreaPaddingView, obj3);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/PasskeyUpsellView.tsx");

export default tmp5;
