// Module ID: 14926
// Function ID: 14927
// Name: PasskeyUpsellView
// Dependencies: [32, 19, 17, 14922, 1078, 2042, 21, 4758, 580, 558, 568, 1488, 1119, 14927, 7190, 14928, 5839, 2112, 7371, 14931, 4754, 1368, 5188, 2]

// Module 14926 (PasskeyUpsellView)
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2112 */;
import NavigatorHeader from "NavigatorHeader" /* 5839 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 7190 */;
import PasskeyUpsellManagerDefault from "PasskeyUpsellManager" /* 14927 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const _modDef14931 = tmp12(14931);
require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const WebAuthnScreens = fn(14922).WebAuthnScreens;
const HelpdeskArticles = fn(1078).HelpdeskArticles;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { container: { flex: 1, flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, scrollViewContainer: null, headerContainer: null, headerImage: null, headerText: null, circleIcon: null, listContainer: null, row: null, text: null, buttonContainer: null };
let obj3 = { flex: 1, flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.scrollViewContainer = { flexGrow: 1, justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { flexGrow: 1, justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_16 };
obj2.headerContainer = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16 };
obj2.headerImage = { height: 190, width: 220, resizeMode: "contain" };
obj2.headerText = { textAlign: "center" };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.round };
obj2.circleIcon = size;
let obj5 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16 };
obj2.listContainer = { gap: nativeDefault.space.PX_24, marginLeft: nativeDefault.space.PX_8, marginRight: nativeDefault.space.PX_8 };
let obj6 = { gap: nativeDefault.space.PX_24, marginLeft: nativeDefault.space.PX_8, marginRight: nativeDefault.space.PX_8 };
obj2.row = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
obj2.text = { flex: 1 };
let obj7 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center" };
obj2.buttonContainer = { gap: nativeDefault.space.PX_16, alignItems: "center" };
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj8 = { gap: nativeDefault.space.PX_16, alignItems: "center" };
size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/PasskeyUpsellView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = navigation(568).c(96);
  let obj = navigation(568);
  navigation = navigation(1488).useNavigation();
  const tmp5 = closure_13();
  importDefault = onRegisterSuccess(noop.useState(""), 2)[1];
  const obj2 = navigation(1488);
  const obj3 = noop;
  [r10026, dependencyMap] = onRegisterSuccess(noop.useState(false), 2);
  if (cResult[0] !== navigation) {
    onRegisterSuccess = function onRegisterSuccess(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      const intl = util.intl;
      obj.name = intl.string(util.t["8H5RmH"]);
      navigation.push(WebAuthnScreens.NAME, obj);
    };
    const fn = function l() {
      PasskeyUpsellManagerDefault.markDismissed(ContentDismissActionType.TAKE_ACTION);
      NativeCeremoniesDefault.registerPasskey({ setRegistering, setError, onRegisterSuccess });
    };
    cResult[0] = navigation;
    cResult[1] = fn;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        obj = closure_1(closure_2[13]);
        markDismissedResult = obj.markDismissed(closure_1_10.USER_DISMISS);
        obj2 = closure_1(closure_2[15]);
        result = obj2.closePasskeyUpsellModal();
        return;
      }
    }
    cResult[2] = R;
    const tmp8 = R;
  } else {
    class R {
      constructor() {
        obj = closure_1(closure_2[13]);
        markDismissedResult = obj.markDismissed(closure_1_10.USER_DISMISS);
        obj2 = closure_1(closure_2[15]);
        result = obj2.closePasskeyUpsellModal();
        return;
      }
    }
  }
  noop = tmp8;
  if (cResult[3] !== navigation) {
    class E {
      constructor() {
        obj = { headerLeft: null };
        obj2 = closure_0(closure_2[16]);
        obj.headerLeft = obj2.getHeaderCloseButton(closure_4);
        setOptionsResult = closure_0.setOptions(obj);
        return;
      }
    }
    const items = [navigation];
    cResult[3] = navigation;
    cResult[4] = E;
    cResult[5] = items;
    let tmp10 = items;
    const tmp9 = E;
  } else {
    class E {
      constructor() {
        obj = { headerLeft: null };
        obj2 = closure_0(closure_2[16]);
        obj.headerLeft = obj2.getHeaderCloseButton(closure_4);
        setOptionsResult = closure_0.setOptions(obj);
        return;
      }
    }
    tmp10 = cResult[5];
  }
  const layoutEffect = obj3.useLayoutEffect(tmp9, tmp10);
  if (cResult[6] === tmp5.buttonContainer) {
    class E {
      constructor() {
        obj = { headerLeft: null };
        obj2 = closure_0(closure_2[16]);
        obj.headerLeft = obj2.getHeaderCloseButton(closure_4);
        setOptionsResult = closure_0.setOptions(obj);
        return;
      }
    }
  }
  const tmp6 = onRegisterSuccess(noop.useState(false), 2);
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SETTING_UP_TWO_FACTOR);
  const SafeAreaPaddingView = tmp(7371).SafeAreaPaddingView;
  ({ scrollViewContainer, headerContainer } = tmp5);
  if (cResult[29] !== tmp5.headerImage) {
    class E {
      constructor() {
        obj = { headerLeft: null };
        obj2 = closure_0(closure_2[16]);
        obj.headerLeft = obj2.getHeaderCloseButton(closure_4);
        setOptionsResult = closure_0.setOptions(obj);
        return;
      }
    }
    const obj5 = { source: _modDef14931, style: tmp5.headerImage };
    const tmp16 = closure_11(closure_6, obj5);
    cResult[29] = tmp5.headerImage;
    cResult[30] = tmp16;
  } else {
    class E {
      constructor() {
        obj = { headerLeft: null };
        obj2 = closure_0(closure_2[16]);
        obj.headerLeft = obj2.getHeaderCloseButton(closure_4);
        setOptionsResult = closure_0.setOptions(obj);
        return;
      }
    }
  }
  if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        obj = { headerLeft: null };
        obj2 = closure_0(closure_2[16]);
        obj.headerLeft = obj2.getHeaderCloseButton(closure_4);
        setOptionsResult = closure_0.setOptions(obj);
        return;
      }
    }
    const stringResult = obj6.string(tmp(1119).t.CjleBl);
    cResult[31] = stringResult;
    const tmp17 = stringResult;
  } else {
    class E {
      constructor() {
        obj = { headerLeft: null };
        obj2 = closure_0(closure_2[16]);
        obj.headerLeft = obj2.getHeaderCloseButton(closure_4);
        setOptionsResult = closure_0.setOptions(obj);
        return;
      }
    }
  }
  if (cResult[32] !== tmp5.headerText) {
    class E {
      constructor() {
        obj = { headerLeft: null };
        obj2 = closure_0(closure_2[16]);
        obj.headerLeft = obj2.getHeaderCloseButton(closure_4);
        setOptionsResult = closure_0.setOptions(obj);
        return;
      }
    }
    const obj7 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp5.headerText, children: tmp17 };
    const tmp20 = closure_11(tmp(4754).Text, obj7);
    cResult[32] = tmp5.headerText;
    cResult[33] = tmp20;
  } else {
    class E {
      constructor() {
        obj = { headerLeft: null };
        obj2 = closure_0(closure_2[16]);
        obj.headerLeft = obj2.getHeaderCloseButton(closure_4);
        setOptionsResult = closure_0.setOptions(obj);
        return;
      }
    }
  }
  if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        obj = { headerLeft: null };
        obj2 = closure_0(closure_2[16]);
        obj.headerLeft = obj2.getHeaderCloseButton(closure_4);
        setOptionsResult = closure_0.setOptions(obj);
        return;
      }
    }
    let intl = tmp(1119).intl;
    if (isIOSResult) {
      class E {
        constructor() {
          obj = { headerLeft: null };
          obj2 = closure_0(closure_2[16]);
          obj.headerLeft = obj2.getHeaderCloseButton(closure_4);
          setOptionsResult = closure_0.setOptions(obj);
          return;
        }
      }
      const stringResult1 = intl.string(tmp(1119).t);
    } else {
      class E {
        constructor() {
          obj = { headerLeft: null };
          obj2 = closure_0(closure_2[16]);
          obj.headerLeft = obj2.getHeaderCloseButton(closure_4);
          setOptionsResult = closure_0.setOptions(obj);
          return;
        }
      }
    }
    cResult[34] = stringResult1;
    isIOSResult = obj8.isIOS();
  } else {
    class E {
      constructor() {
        obj = { headerLeft: null };
        obj2 = closure_0(closure_2[16]);
        obj.headerLeft = obj2.getHeaderCloseButton(closure_4);
        setOptionsResult = closure_0.setOptions(obj);
        return;
      }
    }
    if (cResult[37] === tmp5.headerContainer) {
      class E {
        constructor() {
          obj = { headerLeft: null };
          obj2 = closure_0(closure_2[16]);
          obj.headerLeft = obj2.getHeaderCloseButton(closure_4);
          setOptionsResult = closure_0.setOptions(obj);
          return;
        }
      }
    }
    const obj9 = { style: headerContainer, children: null };
    const items1 = [tmp14, tmp19, tmp24];
    obj9.children = items1;
    const tmp28 = closure_12(closure_5, obj9);
    cResult[37] = tmp5.headerContainer;
    cResult[38] = tmp14;
    cResult[39] = tmp19;
    cResult[40] = tmp24;
    cResult[41] = tmp28;
  }
}) : (() => {
  function onRegisterSuccess(onCancel) {
    const obj = {};
    const merged = Object.assign(onCancel);
    const intl = util.intl;
    obj.name = intl.string(util.t["8H5RmH"]);
    navigation.push(WebAuthnScreens.NAME, obj);
  }
  function onCancel() {
    setError(setRegistering[13]).markDismissed(constants.USER_DISMISS);
    const obj = setError(setRegistering[13]);
    const result = setError(setRegistering[15]).closePasskeyUpsellModal();
  }
  navigation = navigation(1488).useNavigation();
  const tmp4 = closure_13();
  let obj = navigation(1488);
  [r10018, importDefault] = onRegisterSuccess(onCancel.useState(""), 2);
  const tmp5 = onRegisterSuccess(onCancel.useState(""), 2);
  [tmp7, dependencyMap] = onRegisterSuccess(onCancel.useState(false), 2);
  const items = [navigation];
  const layoutEffect = onCancel.useLayoutEffect(() => {
    const obj = { headerLeft: NavigatorHeader.getHeaderCloseButton(onCancel) };
    navigation.setOptions(obj);
  }, items);
  const tmp6 = onRegisterSuccess(onCancel.useState(false), 2);
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SETTING_UP_TWO_FACTOR);
  const obj3 = { bottom: true, style: tmp4.container, children: null };
  const obj4 = { contentContainerStyle: tmp4.scrollViewContainer, children: null };
  const obj5 = { style: tmp4.headerContainer, children: null };
  const items1 = [closure_11(closure_6, { source: _modDef14931, style: tmp4.headerImage }), , ];
  const obj7 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp4.headerText, children: null };
  let intl = navigation(1119).intl;
  obj7.children = intl.string(navigation(1119).t.CjleBl);
  items1[1] = closure_11(navigation(4754).Text, obj7);
  const obj8 = { variant: "heading-md/normal", color: "text-default", style: tmp4.headerText, children: null };
  const obj6 = { source: _modDef14931, style: tmp4.headerImage };
  const tmp12 = closure_7;
  const obj9 = navigation(1368);
  const intl2 = navigation(1119).intl;
  const string = intl2.string;
  const t = navigation(1119).t;
  if (isIOSResult) {
    let stringResult = string(t["7yxR9t"]);
  } else {
    stringResult = string(t.d6uxJy);
  }
  obj8.children = stringResult;
  items1[2] = closure_11(navigation(4754).Text, obj8);
  obj5.children = items1;
  const items2 = [closure_12(closure_5, obj5), , ];
  const obj10 = { style: tmp4.listContainer, children: null };
  const obj11 = { style: tmp4.row, children: null };
  const items3 = [closure_11(closure_5, { style: tmp4.circleIcon }), ];
  const obj13 = { variant: "heading-md/normal", color: "text-default", style: tmp4.text, children: null };
  const intl3 = tmp(1119).intl;
  obj13.children = intl3.string(navigation(1119).t.HtqVkj);
  items3[1] = closure_11(navigation(4754).Text, obj13);
  obj11.children = items3;
  const items4 = [closure_12(closure_5, obj11), ];
  const obj14 = { style: tmp4.row, children: null };
  const items5 = [closure_11(closure_5, { style: tmp4.circleIcon }), ];
  const obj16 = { variant: "heading-md/normal", color: "text-default", style: tmp4.text, children: null };
  isIOSResult = navigation(1368).isIOS();
  const obj12 = { style: tmp4.circleIcon };
  const obj15 = { style: tmp4.circleIcon };
  const tmpResult = navigation(1368);
  const intl4 = tmp(1119).intl;
  const string2 = intl4.string;
  const t2 = tmp(1119).t;
  if (isIOSResult1) {
    let string2Result = string2(t2.U409I8);
  } else {
    string2Result = string2(t2.uYfqlo);
  }
  obj16.children = string2Result;
  items5[1] = closure_11(navigation(4754).Text, obj16);
  obj14.children = items5;
  items4[1] = closure_12(closure_5, obj14);
  obj10.children = items4;
  items2[1] = closure_12(closure_5, obj10);
  const obj17 = { style: tmp4.buttonContainer, children: null };
  const obj18 = { variant: "text-sm/semibold", color: "text-brand", children: null };
  const intl5 = tmp(1119).intl;
  obj18.children = intl5.format(navigation(1119).t.OeGXVv, { learnMoreLink: articleURL });
  const items6 = [closure_11(navigation(4754).Text, obj18), , ];
  const intl6 = tmp(1119).intl;
  const string3 = intl6.string;
  const t3 = tmp(1119).t;
  if (tmp7) {
    let string3Result = string3(t3.wePEBF);
  } else {
    string3Result = string3(t3.NIFmCJ);
  }
  items6[1] = closure_11(navigation(5188).Button, {
    text: string3Result,
    onPress() {
      PasskeyUpsellManagerDefault.markDismissed(ContentDismissActionType.TAKE_ACTION);
      NativeCeremoniesDefault.registerPasskey({ setRegistering, setError, onRegisterSuccess });
    },
    size: "lg",
    disabled: tmp7,
    loading: tmp7,
    grow: true
  });
  const intl7 = tmp(1119).intl;
  const string4 = intl7.string;
  const t4 = tmp(1119).t;
  if (tmp7) {
    let string4Result = string4(t4.wePEBF);
  } else {
    string4Result = string4(t4["7J6/nG"]);
  }
  items6[2] = closure_11(navigation(5188).Button, { text: string4Result, onPress: onCancel, size: "lg", variant: "secondary", grow: true });
  obj17.children = items6;
  items2[2] = closure_12(closure_5, obj17);
  obj4.children = items2;
  obj3.children = closure_12(tmp12, obj4);
  return closure_11(navigation(7371).SafeAreaPaddingView, obj3);
});
