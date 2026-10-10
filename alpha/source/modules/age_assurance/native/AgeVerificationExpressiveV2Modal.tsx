// Module ID: 7548
// Function ID: 7549
// Name: AgeVerificationExpressiveV2Modal
// Dependencies: [5, 32, 19, 17, 5917, 1085, 21, 1398, 7549, 7551, 7553, 1382, 7555, 7557, 6639, 5092, 587, 7559, 7560, 7544, 7561, 5918, 7530, 7531, 5909, 7562, 7514, 7515, 5377, 7563, 5088, 7497, 2128, 7567, 1126, 3120, 6264, 6179, 7575, 7688, 6905, 5934, 6200, 7690, 7691, 558, 576, 1279, 6687, 2]

// Module 7548 (AgeVerificationExpressiveV2Modal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2128 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5909 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 5917 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5918 */;
import NavigatorHeader from "NavigatorHeader" /* 6200 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7497 */;
import AgeVerificationCustomTab from "AgeVerificationCustomTab" /* 7530 */;
import AgeVerificationAuthSession from "AgeVerificationAuthSession" /* 7531 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2, closure_4, v3;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
function headerTitle() {
  return null;
}
const headerTitle2 = function headerTitle() {
  return null;
};
const headerTitle3 = function headerTitle() {
  return null;
};
function MethodsScreen(onClose) {
  let InlineNotice;
  let _undefined;
  let c8;
  let c9;
  let entryPoint;
  let error;
  let fn;
  let footerMessage;
  let getAgeVerificationGetStartedSubtitle;
  let intl2;
  let items9;
  let loading;
  let methods;
  let obj18;
  let obj19;
  let obj24;
  let outageBannerMessage;
  let refetch;
  let tmp19Result;
  let tmp2Result;
  ({ entryPoint, navigation } = onClose);
  onClose = onClose.onClose;
  const modalSessionId = onClose.modalSessionId;
  methods = undefined;
  let onComplete;
  c8 = undefined;
  c9 = undefined;
  let isAgeVerificationCustomTabOpen;
  let tmp = isAgeVerificationCustomTabOpen();
  const tmp2 = navigation;
  const tmp3 = onComplete;
  let obj = navigation(onComplete[17]);
  const shouldShowExpressiveModalSubtitleAlt = obj.useShouldShowExpressiveModalSubtitleAlt("age_verification_expressive_v2_modal");
  let obj2 = navigation(onComplete[18]);
  const ageVerificationMethodsV2 = obj2.useAgeVerificationMethodsV2();
  ({ loading, methods } = ageVerificationMethodsV2);
  ({ footerMessage, outageBannerMessage, refetch, error } = ageVerificationMethodsV2);
  let obj3 = navigation(onComplete[19]);
  const availableMethodsV2 = obj3.useAvailableMethodsV2(methods);
  let items = [onComplete, onClose];
  onComplete = onComplete.useCallback(() => {
    if (onComplete != null) {
      tmp();
    }
    onClose();
  }, items);
  let obj4 = navigation(onComplete[20]);
  const initiateAgeVerificationV2 = obj4.useInitiateAgeVerificationV2({ onComplete, entryPoint, onMethodUnavailable: refetch }).initiateAgeVerificationV2;
  let closure_7 = onComplete.useRef(false);
  [c8, c9] = methods(onComplete.useState(null), 2);
  const tmp8 = methods(onComplete.useState(null), 2);
  const useCallback = onComplete.useCallback;
  let closure_0 = modalSessionId((arg0, arg1) => {
    navigation = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c6 = 0;
    let c5 = 0;
    return (function*(arg0, value) {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              if (!ref.current) {
                const trackAgeVerificationModalClicked = navigation(onComplete[21]).trackAgeVerificationModalClicked;
                const tmp21 = navigation(onComplete[21]);
                const result = trackAgeVerificationModalClicked(c3, navigation(onComplete[21]).AgeVerificationModalVersion.EXPRESSIVE_V2, navigation(onComplete[21]).AgeVerificationModalCta.METHOD_SELECT, tmp45.method);
                if (navigation.method !== navigation(onComplete[7]).AgeAssuranceMethod.GOOGLE_WALLET) {
                  if (navigation.method !== navigation(onComplete[7]).AgeAssuranceMethod.OS_SIGNAL) {
                    const tmp19Result = navigation(onComplete[22]);
                    const result1 = tmp19Result.releaseAgeVerificationCustomTab();
                    const tmp19Result2 = navigation(onComplete[23]);
                    const result2 = tmp19Result2.closeAgeVerificationAuthSession();
                    ref.current = true;
                    closure_1_9(tmp46);
                    c5 = 1;
                    c3 = 2;
                    v3 = 1;
                    const obj4 = { value: v3(navigation), done: false };
                    return obj4;
                  } else {
                    navigation.navigate(constants.APP_STORE_VERIFICATION);
                  }
                } else {
                  navigation.navigate(constants.GOOGLE_WALLET_VERIFICATION);
                }
              }
            }
          } else if (1 === tmp4) {
            c5 = 0;
            ref.current = false;
            closure_1_9(null);
            throw closure_4;
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            ref.current = false;
            closure_1_9(null);
            v3 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            ref.current = false;
            closure_1_9(null);
          }
          v3 = 3;
          return { value: "IconComponent", done: "+51" };
        } catch (tmp38) {
          closure_4 = tmp38;
          if (0 === c5) {
            v3 = 3;
            throw tmp38;
          } else {
            c3 = 1;
          }
        }
      }
    })();
  });
  const items1 = [navigation, initiateAgeVerificationV2, modalSessionId];
  let closure_10 = useCallback(function() {
    return closure_0(...arguments);
  }, items1);
  let obj5 = navigation(onComplete[22]);
  isAgeVerificationCustomTabOpen = obj5.useIsAgeVerificationCustomTabOpen();
  let obj6 = navigation(onComplete[22]);
  const items2 = [methods];
  const ageVerificationCustomTabCopy = obj6.useAgeVerificationCustomTabCopy();
  const memo = onComplete.useMemo(() => {
    let externalWindow;
    const found = methods.find((externalWindow) => null != externalWindow.externalWindow);
    if (found != null) {
      externalWindow = found.externalWindow;
    }
    return externalWindow;
  }, items2);
  const effect = onComplete.useEffect(() => {
    const obj = navigation(onComplete[22]);
    const result = obj.resumeAgeVerificationCustomTab();
  }, []);
  const items3 = [memo];
  const effect1 = onComplete.useEffect(() => {
    if (null != memo) {
      const obj = AgeVerificationCustomTab;
      const result = obj.setAgeVerificationCustomTabCopy(tmp);
    }
  }, items3);
  const items4 = [onComplete];
  const callback1 = onComplete.useCallback(() => {
    const obj = AgeVerificationUtils;
    if (obj.isAgeVerified()) {
      const tmpResult = AgeVerificationCustomTab;
      if (tmpResult.getIsAgeVerificationCustomTabAwaitingResult()) {
        const tmpResult6 = AgeVerificationCustomTab;
        if (!tmpResult6.getIsAgeVerificationCustomTabOpen()) {
          const tmpResult7 = AgeVerificationCustomTab;
          const result = tmpResult7.releaseAgeVerificationCustomTab();
          callback();
        }
      }
      const tmpResult8 = AgeVerificationAuthSession;
      let isAgeVerificationAuthSessionAwaitingResult = tmpResult8.getIsAgeVerificationAuthSessionAwaitingResult();
      if (isAgeVerificationAuthSessionAwaitingResult) {
        const tmpResult9 = AgeVerificationAuthSession;
        isAgeVerificationAuthSessionAwaitingResult = !tmpResult9.getIsAgeVerificationAuthSessionOpen();
      }
      if (isAgeVerificationAuthSessionAwaitingResult) {
        const tmpResult10 = AgeVerificationAuthSession;
        const result1 = tmpResult10.closeAgeVerificationAuthSession();
        callback();
      }
    }
  }, items4);
  let obj7 = navigation(onComplete[24]);
  const watchAgeVerificationStatusChange = obj7.useWatchAgeVerificationStatusChange(callback1);
  const obj8 = navigation(onComplete[23]);
  const isAgeVerificationAuthSessionOpen = obj8.useIsAgeVerificationAuthSessionOpen();
  const ref = onComplete.useRef(isAgeVerificationCustomTabOpen);
  const ref2 = onComplete.useRef(isAgeVerificationAuthSessionOpen);
  const items5 = [isAgeVerificationCustomTabOpen, callback1];
  const effect2 = onComplete.useEffect(() => {
    let current = ref.current;
    const tmp = ref;
    if (current) {
      current = !isAgeVerificationCustomTabOpen;
    }
    if (current) {
      callback1();
    }
    tmp.current = isAgeVerificationCustomTabOpen;
  }, items5);
  const items6 = [isAgeVerificationAuthSessionOpen, callback1];
  const effect3 = onComplete.useEffect(() => {
    let current = ref2.current;
    const tmp = ref2;
    if (current) {
      current = !isAgeVerificationAuthSessionOpen;
    }
    if (current) {
      callback1();
    }
    tmp.current = isAgeVerificationAuthSessionOpen;
  }, items6);
  if (isAgeVerificationCustomTabOpen) {
    const obj9 = { copy: ageVerificationCustomTabCopy };
    tmp19Result = tmp19(onClose(tmp3[25]), obj9);
  } else {
    const ModalScreen = tmp2(tmp3[26]).ModalScreen;
    const ModalContent = tmp2(tmp3[27]).ModalContent;
    const obj10 = { align: "stretch", spacing: 24, style: tmp.container, children: items9 };
    let Stack = tmp2(tmp3[28]).Stack;
    const Stack2 = tmp2(tmp3[28]).Stack;
    const items7 = [tmp19(tmp2(tmp3[29]).AgeVerificationSpotIllustration, { width: 150, height: 100 }), ];
    const Stack3 = tmp2(tmp3[28]).Stack;
    const obj11 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: tmp2Result.getAgeVerificationGetStartedTitle(entryPoint, true) };
    const Text = tmp2(tmp3[30]).Text;
    tmp2Result = tmp2(tmp3[24]);
    const items8 = [tmp19(Text, obj11), ];
    const obj12 = {
      variant: "text-md/medium",
      color: "text-subtle",
      style: tmp.header,
      children: getAgeVerificationGetStartedSubtitle(entryPoint, () => {
          const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
          AgeVerificationActionCreatorsDefault;
          const obj = HelpdeskUtilsDefault;
          openUrl(obj.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
          const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
          AgeVerificationAnalyticsUtils;
          const result = trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE);
        }, undefined, fn, true)
    };
    const Text2 = tmp2(tmp3[30]).Text;
    const tmp2Result2 = tmp2(tmp3[24]);
    fn = undefined;
    getAgeVerificationGetStartedSubtitle = tmp2Result2.getAgeVerificationGetStartedSubtitle;
    if (shouldShowExpressiveModalSubtitleAlt) {
      fn = () => {
        const obj = AgeVerificationActionCreatorsDefault;
        obj.openUrl(TRUSTED_PROVIDERS_URL);
        const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
        AgeVerificationAnalyticsUtils;
        const result = trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.TRUSTED_PROVIDERS);
      };
    }
    const obj13 = { align: "center", justify: "center", spacing: 16, children: items7 };
    const obj14 = { align: "center", justify: "center", spacing: 8, children: items8 };
    items8[1] = c9(Text2, obj12);
    items7[1] = closure_10(Stack3, obj14);
    items9 = [tmp20(Stack2, obj13), , , ];
    let tmp19Result6 = loading;
    if (tmp19Result6) {
      const obj15 = { align: "center", justify: "center", style: tmp.loadingContainer, children: c9(initiateAgeVerificationV2, { size: "large" }) };
      const Stack4 = tmp2(tmp3[28]).Stack;
      tmp19Result6 = tmp19(Stack4, obj15);
    }
    items9[1] = tmp19Result6;
    let tmp20Result = !loading;
    if (tmp20Result) {
      let tmp19Result7 = tmp6;
      const Stack5 = tmp2(tmp3[28]).Stack;
      if (availableMethodsV2.length > 0) {
        tmp19Result7 = null != outageBannerMessage;
      }
      if (tmp19Result7) {
        const obj16 = { type: "warning", message: outageBannerMessage, role: "status" };
        tmp19Result7 = tmp19(tmp2(tmp3[33]).InlineNotice, obj16);
      }
      const items10 = [tmp19Result7, , ];
      let tmp19Result8 = !tmp6;
      if (tmp19Result8) {
        let cR6336;
        let tmp32;
        const obj17 = { style: tmp.emptyContainer, children: c9(InlineNotice, obj18) };
        const Stack6 = tmp2(tmp3[28]).Stack;
        InlineNotice = tmp2(tmp3[33]).InlineNotice;
        const intl = tmp2(tmp3[34]).intl;
        const string = intl.string;
        const tmp31 = onClose(tmp3[35]);
        if (error) {
          cR6336 = tmp31.Bkmk4Y;
          tmp32 = tmp30;
        } else {
          cR6336 = tmp31.cR6336;
          tmp32 = tmp30;
        }
        obj18 = { type: "critical", message: string(cR6336), role: "alert", action: obj19 };
        obj19 = { text: intl2.string(tmp32(tmp3[35]).hDvmYP), onClick: refetch };
        intl2 = tmp2(tmp3[34]).intl;
        tmp19Result8 = tmp19(Stack6, obj17);
      }
      items10[1] = tmp19Result8;
      let tmp19Result9 = tmp6;
      if (tmp19Result9) {
        const obj20 = {
          hasIcons: true,
          children: availableMethodsV2.map((children) => {
                  let KeyIcon;
                  let Stack;
                  let items;
                  let tmp14;
                  let tmp4;
                  let tmp5;
                  let tmp5Result;
                  let closure_0 = children;
                  const method = children.method;
                  if (navigation(onComplete[7]).AgeAssuranceMethod.FACIAL_AGE_ESTIMATION === method) {
                    KeyIcon = tmp(tmp2[8]).VideoSelfieIcon;
                  } else if (navigation(onComplete[7]).AgeAssuranceMethod.ID_SELFIE_MATCH === method) {
                    KeyIcon = tmp(tmp2[9]).IdCardIcon;
                  } else if (navigation(onComplete[7]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
                    KeyIcon = tmp(tmp2[10]).GoogleNeutralIcon;
                  } else if (navigation(onComplete[7]).AgeAssuranceMethod.OS_SIGNAL === method) {
                    let GoogleNeutralIcon;
                    const tmpResult = navigation(onComplete[11]);
                    if (tmpResult.isIOS()) {
                      GoogleNeutralIcon = tmp(tmp2[12]).AppleNeutralIcon;
                    } else {
                      GoogleNeutralIcon = tmp(tmp2[10]).GoogleNeutralIcon;
                    }
                    KeyIcon = GoogleNeutralIcon;
                  } else if (navigation(onComplete[7]).AgeAssuranceMethod.CREDIT_CARD === method) {
                    KeyIcon = tmp(tmp2[13]).CreditCardIcon;
                  } else if (navigation(onComplete[7]).AgeAssuranceMethod.NEW_METHOD === method) {
                    KeyIcon = tmp(tmp2[14]).KeyIcon;
                  }
                  if (null != KeyIcon) {
                    const obj = { IconComponent: KeyIcon, variant: "secondary" };
                    tmp4 = _undefined(tmp(tmp2[37]).TableRow.Icon, obj);
                    tmp5 = _undefined;
                  } else if (null != children.icon) {
                    const obj2 = { icon: children.icon };
                    tmp4 = _undefined(onClose(tmp2[38]), obj2);
                    tmp5 = _undefined;
                  } else {
                    const obj3 = { IconComponent: navigation(onComplete[39]).UnknownGameIcon, variant: "secondary" };
                    const Icon = tmp(tmp2[37]).TableRow.Icon;
                    tmp4 = _undefined(Icon, obj3);
                    tmp5 = _undefined;
                  }
                  const combined = "" + children.method + "-" + children.vendor;
                  const TableRow = tmp(tmp2[37]).TableRow;
                  const tmp10 = c8;
                  if (c8 === combined) {
                    tmp5Result = tmp5(initiateAgeVerificationV2, {});
                  } else {
                    const obj4 = { size: "md", color: onClose(onComplete[16]).colors.INTERACTIVE_ICON_DEFAULT };
                    const ChevronSmallRightIcon = tmp(tmp2[40]).ChevronSmallRightIcon;
                    tmp5Result = tmp5(ChevronSmallRightIcon, obj4);
                  }
                  const obj5 = {
                    trailing: tmp5Result,
                    disabled: null != tmp10,
                    icon: tmp4,
                    label: children.title,
                    subLabel: tmp14(Stack, { direction: "vertical", spacing: 4, children: items }),
                    onPress() {
                      return closure_10(children, combined);
                    }
                  };
                  Stack = tmp(tmp2[28]).Stack;
                  items = [, ];
                  const obj6 = { variant: "text-sm/normal", color: "text-muted", children: children.description };
                  items[0] = tmp5(navigation(onComplete[30]).Text, obj6);
                  let tmp5Result2 = null != children.providedBy;
                  tmp14 = closure_10;
                  if (tmp5Result2) {
                    const obj7 = { variant: "text-sm/normal", color: "text-muted", children: children.providedBy };
                    tmp5Result2 = tmp5(tmp(tmp2[30]).Text, obj7);
                  }
                  items[1] = tmp5Result2;
                  return tmp5(TableRow, obj5, combined);
                })
        };
        const TableRowGroup = tmp2(tmp3[36]).TableRowGroup;
        tmp19Result9 = tmp19(TableRowGroup, obj20);
      }
      const obj21 = { direction: "vertical", spacing: 12, children: items10 };
      items10[2] = tmp19Result9;
      tmp20Result = tmp20(Stack5, obj21);
    }
    items9[2] = tmp20Result;
    let tmp19Result10 = !loading && tmp6 && null != footerMessage;
    if (tmp19Result10) {
      const obj22 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.footer, children: footerMessage };
      tmp19Result10 = tmp19(tmp2(tmp3[30]).Text, obj22);
    }
    const obj23 = { children: c9(ModalContent, obj24) };
    items9[3] = tmp19Result10;
    obj24 = { children: closure_10(Stack, obj10) };
    tmp19Result = tmp19(ModalScreen, obj23);
  }
  return tmp19Result;
}
const ActivityIndicator = react_native.ActivityIndicator;
const TRUSTED_PROVIDERS_URL = AgeVerificationConstants.TRUSTED_PROVIDERS_URL;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerStyle: obj2, container: { alignSelf: "stretch" }, header: { textAlign: "center" }, loadingContainer: obj3, emptyContainer: obj4, footer: { textAlign: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24 };
obj4 = { marginTop: nativeDefault.space.PX_24 };
let closure_11 = createStyles(obj);
const constants = { METHODS: "METHODS", GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION", APP_STORE_VERIFICATION: "APP_STORE_VERIFICATION" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function AgeVerificationExpressiveV2Modal(entryPoint) {
  let first;
  let onClose;
  let onComplete;
  let tmpResult4;
  let tmpResult5;
  let tmpResult6;
  let obj = entryPoint(576);
  const cResult = obj.c(12);
  entryPoint = entryPoint.entryPoint;
  ({ onClose, onComplete } = entryPoint);
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = entryPoint(1279);
    const v4Result = tmpResult.v4();
    cResult[0] = v4Result;
    first = v4Result;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === entryPoint) {
    if (cResult[2] === onClose) {
      if (cResult[3] === onComplete) {
        let tmp7;
        let tmp9;
        let tmp8;
        let tmp12;
        let tmp14;
        if (cResult[4] === tmp4) {
          tmp7 = cResult[5];
        }
        if (cResult[6] !== entryPoint) {
          class V {
            constructor() {
              const obj = AgeVerificationAnalyticsUtils;
              const result = obj.trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
            }
          }
          const items = [first, entryPoint];
          cResult[6] = entryPoint;
          cResult[7] = V;
          cResult[8] = items;
          tmp9 = items;
          tmp8 = V;
        } else {
          class V {
            constructor() {
              const obj = AgeVerificationAnalyticsUtils;
              const result = obj.trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
            }
          }
          tmp9 = cResult[8];
        }
        const effect = react.useEffect(tmp8, tmp9);
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class V {
            constructor() {
              const obj = AgeVerificationAnalyticsUtils;
              const result = obj.trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
            }
          }
          const stringResult = obj10.string(entryPoint(1126).t["13/7kX"]);
          cResult[9] = stringResult;
          tmp12 = stringResult;
        } else {
          class V {
            constructor() {
              const obj = AgeVerificationAnalyticsUtils;
              const result = obj.trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
            }
          }
        }
        if (cResult[10] !== tmp7) {
          class V {
            constructor() {
              const obj = AgeVerificationAnalyticsUtils;
              const result = obj.trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
            }
          }
          const obj2 = { screens: tmp7, initialRouteName: constants.METHODS, headerBackTitle: tmp12 };
          const tmp16 = closure_9(entryPoint(6687).Navigator, obj2);
          cResult[10] = tmp7;
          cResult[11] = tmp16;
          tmp14 = tmp16;
        } else {
          class V {
            constructor() {
              const obj = AgeVerificationAnalyticsUtils;
              const result = obj.trackAgeVerificationModalViewed(first, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
            }
          }
        }
        return tmp14;
      }
    }
  }
  function closeModal() {
    const arr = entryPoint(onClose[41]);
    arr.pop();
    closure_2();
  }
  const obj3 = {};
  const METHODS = constants.METHODS;
  const obj4 = {
    headerStyle: tmp4.headerStyle,
    headerTitle,
    headerLeft: tmpResult4.getHeaderCloseButton(closeModal),
    render(arg0, navigation) {
      const obj = { entryPoint, navigation, onClose: closeModal, onComplete, modalSessionId };
      return closure_2_9(closure_2_13, obj);
    }
  };
  obj3[METHODS] = obj4;
  tmpResult4 = entryPoint(6200);
  const GOOGLE_WALLET_VERIFICATION = constants.GOOGLE_WALLET_VERIFICATION;
  const obj5 = {
    headerStyle: tmp4.headerStyle,
    headerTitle: headerTitle2,
    headerLeft: tmpResult5.getHeaderBackButton(),
    render() {
      const obj = { onClose: closeModal, onComplete, modalSessionId };
      return closure_2_9(entryPoint(onClose[43]), obj);
    }
  };
  obj3[GOOGLE_WALLET_VERIFICATION] = obj5;
  tmpResult5 = entryPoint(6200);
  const APP_STORE_VERIFICATION = constants.APP_STORE_VERIFICATION;
  const obj6 = {
    headerStyle: tmp4.headerStyle,
    headerTitle: headerTitle3,
    headerLeft: tmpResult6.getHeaderBackButton(),
    render() {
      const obj = { onClose: closeModal, modalSessionId };
      return closure_2_9(entryPoint(onClose[44]), obj);
    }
  };
  obj3[APP_STORE_VERIFICATION] = obj6;
  cResult[1] = entryPoint;
  cResult[2] = onClose;
  cResult[3] = onComplete;
  cResult[4] = tmp4;
  cResult[5] = obj3;
  tmp7 = obj3;
  tmpResult6 = entryPoint(6200);
}) : (function AgeVerificationExpressiveV2Modal(entryPoint) {
  let intl;
  entryPoint = entryPoint.entryPoint;
  const onClose = entryPoint.onClose;
  const onComplete = entryPoint.onComplete;
  const tmp = closure_11();
  let closure_3 = tmp;
  const memo = react.useMemo(() => {
    const obj = entryPoint(onComplete[47]);
    return obj.v4();
  }, []);
  const items = [tmp, memo, entryPoint, onClose, onComplete];
  const items1 = [memo, entryPoint];
  const memo1 = react.useMemo(() => {
    let obj3;
    let obj5;
    let obj7;
    let closure_0 = memo;
    closure_3 = onComplete;
    function closeModal() {
      const arr = entryPoint(onClose[41]);
      arr.pop();
      closure_2();
    }
    let obj = {};
    const METHODS = constants.METHODS;
    const obj2 = {
      headerStyle: closure_3.headerStyle,
      headerTitle,
      headerLeft: obj3.getHeaderCloseButton(closeModal),
      render(arg0, navigation) {
        const obj = { entryPoint, navigation, onClose: closeModal, onComplete, modalSessionId };
        return closure_2_9(closure_2_13, obj);
      }
    };
    obj[METHODS] = obj2;
    obj3 = NavigatorHeader;
    const GOOGLE_WALLET_VERIFICATION = constants.GOOGLE_WALLET_VERIFICATION;
    const obj4 = {
      headerStyle: closure_3.headerStyle,
      headerTitle: headerTitle2,
      headerLeft: obj5.getHeaderBackButton(),
      render() {
        const obj = { onClose: closeModal, onComplete, modalSessionId };
        return closure_2_9(entryPoint(onClose[43]), obj);
      }
    };
    obj[GOOGLE_WALLET_VERIFICATION] = obj4;
    obj5 = NavigatorHeader;
    const APP_STORE_VERIFICATION = constants.APP_STORE_VERIFICATION;
    const obj6 = {
      headerStyle: closure_3.headerStyle,
      headerTitle: headerTitle3,
      headerLeft: obj7.getHeaderBackButton(),
      render() {
        const obj = { onClose: closeModal, modalSessionId };
        return closure_2_9(entryPoint(onClose[44]), obj);
      }
    };
    obj[APP_STORE_VERIFICATION] = obj6;
    obj7 = NavigatorHeader;
    return obj;
  }, items);
  const effect = react.useEffect(() => {
    const obj = AgeVerificationAnalyticsUtils;
    const result = obj.trackAgeVerificationModalViewed(memo, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
  }, items1);
  let obj = { screens: memo1, initialRouteName: constants.METHODS, headerBackTitle: intl.string(entryPoint(onComplete[34]).t["13/7kX"]) };
  const Navigator = entryPoint(onComplete[48]).Navigator;
  intl = entryPoint(onComplete[34]).intl;
  return closure_9(Navigator, obj);
});
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationExpressiveV2Modal.tsx");

export default tmp4;
