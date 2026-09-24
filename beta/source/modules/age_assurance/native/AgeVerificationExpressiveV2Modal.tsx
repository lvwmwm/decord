// Module ID: 8751
// Function ID: 8752
// Name: AgeVerificationExpressiveV2Modal
// Dependencies: [5, 32, 19, 17, 8720, 1078, 21, 1384, 8752, 8754, 8756, 1368, 8758, 4790, 580, 8760, 8761, 8747, 5002, 8721, 8733, 8734, 8763, 8730, 8731, 5218, 5939, 4786, 8719, 2112, 1181, 5220, 1119, 3038, 5935, 5854, 8764, 8877, 7488, 4993, 5871, 8878, 8879, 558, 568, 1259, 7278, 2]

// Module 8751 (AgeVerificationExpressiveV2Modal)
import nativeDefault from "native" /* 580 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2112 */;
import NavigatorHeader from "NavigatorHeader" /* 5871 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8719 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8721 */;
import AgeVerificationCustomTab from "AgeVerificationCustomTab" /* 8733 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function MethodsScreen(onClose) {
  ({ entryPoint, navigation } = onClose);
  _require = navigation;
  onClose = onClose.onClose;
  const modalSessionId = onClose.modalSessionId;
  methods = undefined;
  let onComplete;
  c8 = undefined;
  c9 = undefined;
  let isAgeVerificationCustomTabOpen;
  const tmp = isAgeVerificationCustomTabOpen();
  const shouldShowExpressiveModalSubtitleAlt = require("ShowExpressiveModalSubtitleAltFlag").useShouldShowExpressiveModalSubtitleAlt("age_verification_expressive_v2_modal");
  let obj = require("ShowExpressiveModalSubtitleAltFlag");
  const ageVerificationMethodsV2 = require("useAgeVerificationMethodsV2").useAgeVerificationMethodsV2();
  ({ loading, methods } = ageVerificationMethodsV2);
  ({ footerMessage, outageBannerMessage, refetch, error } = ageVerificationMethodsV2);
  let obj2 = require("useAgeVerificationMethodsV2");
  const availableMethodsV2 = require("AgeVerificationMethodAvailability").useAvailableMethodsV2(methods);
  let items = [onComplete, onClose];
  onComplete = onComplete.useCallback(() => {
    if (onComplete != null) {
      tmp();
    }
    onClose();
  }, items);
  let obj3 = require("AgeVerificationMethodAvailability");
  const initiateAgeVerificationV2 = require("AgeVerificationUtils").useInitiateAgeVerificationV2({ onComplete, entryPoint, onMethodUnavailable: refetch }).initiateAgeVerificationV2;
  closure_7 = onComplete.useRef(false);
  let obj4 = require("AgeVerificationUtils");
  [c8, c9] = methods(onComplete.useState(null), 2);
  _require = modalSessionId((arg0, arg1) => {
    const navigation = arg0;
    closure_1 = arg1;
    c3 = 0;
    c6 = 0;
    c5 = 0;
    return (function*(arg0, value) {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp3;
              if (!ref.current) {
                const obj2 = navigation(onComplete[19]);
                const result = obj2.trackAgeVerificationModalClicked(c3, navigation(onComplete[19]).AgeVerificationModalVersion.EXPRESSIVE_V2, navigation(onComplete[19]).AgeVerificationModalCta.METHOD_SELECT, tmp48.method);
                if (tmp48.method !== navigation(onComplete[7]).AgeAssuranceMethod.GOOGLE_WALLET) {
                  if (tmp48.method !== tmp22(tmp23[7]).AgeAssuranceMethod.OS_SIGNAL) {
                    const result1 = tmp22(tmp23[20]).releaseAgeVerificationCustomTab();
                    const tmp22Result = tmp22(tmp23[20]);
                    const result2 = tmp22(tmp23[21]).closeAgeVerificationAuthSession();
                    ref.current = true;
                    _undefined(tmp49);
                    c5 = 1;
                    c3 = 2;
                    v3 = 1;
                    const obj5 = { value: v3(tmp48), done: false };
                    return obj5;
                  } else {
                    navigation.navigate(memo.APP_STORE_VERIFICATION);
                  }
                } else {
                  navigation.navigate(memo.GOOGLE_WALLET_VERIFICATION);
                }
              }
              v3 = 3;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            ref.current = false;
            _undefined(null);
            throw closure_4;
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c5 = 0;
            ref.current = false;
            _undefined(null);
          }
          c5 = 0;
          ref.current = false;
          _undefined(null);
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp40) {
          closure_4 = tmp40;
          if (tmp4 === c5) {
            v3 = tmp2;
            throw tmp40;
          } else {
            c3 = tmp;
          }
        }
      }
    })();
  });
  const items1 = [navigation, initiateAgeVerificationV2, modalSessionId];
  closure_10 = onComplete.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  const tmp8 = methods(onComplete.useState(null), 2);
  isAgeVerificationCustomTabOpen = require("AgeVerificationCustomTab").useIsAgeVerificationCustomTabOpen();
  let obj5 = require("AgeVerificationCustomTab");
  const items2 = [methods];
  const ageVerificationCustomTabCopy = require("AgeVerificationCustomTab").useAgeVerificationCustomTabCopy();
  const memo = onComplete.useMemo(() => {
    let externalWindow;
    const found = methods.find((externalWindow) => null != externalWindow.externalWindow);
    if (found != null) {
      externalWindow = found.externalWindow;
    }
    return externalWindow;
  }, items2);
  const effect = onComplete.useEffect(() => {
    const result = closure_0(onComplete[20]).resumeAgeVerificationCustomTab();
  }, []);
  const items3 = [memo];
  const effect1 = onComplete.useEffect(() => {
    if (null != memo) {
      const result = AgeVerificationCustomTab.setAgeVerificationCustomTabCopy(tmp);
    }
  }, items3);
  const items4 = [onComplete];
  const callback1 = onComplete.useCallback(() => {
    if (obj.isAgeVerified()) {
      if (tmpResult.getIsAgeVerificationCustomTabAwaitingResult()) {
        if (!tmpResult6.getIsAgeVerificationCustomTabOpen()) {
          const result = tmp(8733).releaseAgeVerificationCustomTab();
          callback();
          const tmpResult7 = tmp(8733);
        }
        tmpResult6 = tmp(8733);
      }
      tmpResult = tmp(8733);
      let isAgeVerificationAuthSessionAwaitingResult = tmp(8734).getIsAgeVerificationAuthSessionAwaitingResult();
      if (isAgeVerificationAuthSessionAwaitingResult) {
        isAgeVerificationAuthSessionAwaitingResult = !tmp(8734).getIsAgeVerificationAuthSessionOpen();
        const tmpResult9 = tmp(8734);
      }
      if (isAgeVerificationAuthSessionAwaitingResult) {
        const result1 = tmp(8734).closeAgeVerificationAuthSession();
        callback();
        const tmpResult10 = tmp(8734);
      }
      const tmpResult8 = tmp(8734);
    }
  }, items4);
  const obj6 = require("AgeVerificationCustomTab");
  const watchAgeVerificationStatusChange = require("AgeVerificationUtils").useWatchAgeVerificationStatusChange(callback1);
  let obj7 = require("AgeVerificationUtils");
  const isAgeVerificationAuthSessionOpen = require("AgeVerificationAuthSession").useIsAgeVerificationAuthSessionOpen();
  onComplete.useRef(isAgeVerificationCustomTabOpen);
  onComplete.useRef(isAgeVerificationAuthSessionOpen);
  const items5 = [isAgeVerificationCustomTabOpen, callback1];
  const effect2 = onComplete.useEffect(() => {
    let current = ref.current;
    if (current) {
      current = !isAgeVerificationCustomTabOpen;
    }
    if (current) {
      callback1();
    }
    ref.current = isAgeVerificationCustomTabOpen;
  }, items5);
  const items6 = [isAgeVerificationAuthSessionOpen, callback1];
  const effect3 = onComplete.useEffect(() => {
    let current = ref2.current;
    if (current) {
      current = !isAgeVerificationAuthSessionOpen;
    }
    if (current) {
      callback1();
    }
    ref2.current = isAgeVerificationAuthSessionOpen;
  }, items6);
  if (isAgeVerificationCustomTabOpen) {
    const obj9 = { copy: ageVerificationCustomTabCopy };
    let tmp19Result = tmp19(onClose(tmp3[22]), obj9);
  } else {
    const obj10 = { align: "stretch", spacing: 24, style: tmp.container, children: null };
    const items7 = [tmp19(tmp2(tmp3[26]).AgeVerificationSpotIllustration, { width: 150, height: 100 }), ];
    const obj11 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: tmp2(tmp3[18]).getAgeVerificationGetStartedTitle(entryPoint, true) };
    const items8 = [tmp19(tmp2(tmp3[27]).Text, obj11), ];
    const obj12 = { variant: "text-md/medium", color: "text-subtle", style: tmp.header, children: null };
    const tmp2Result2 = tmp2(tmp3[18]);
    let fn;
    if (shouldShowExpressiveModalSubtitleAlt) {
      fn = () => {
        AgeVerificationActionCreatorsDefault.openUrl(TRUSTED_PROVIDERS_URL);
        const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.TRUSTED_PROVIDERS);
      };
    }
    const obj13 = { align: "center", justify: "center", spacing: 16, children: null };
    const obj14 = { align: "center", justify: "center", spacing: 8, children: null };
    obj12.children = tmp2Result2.getAgeVerificationGetStartedSubtitle(entryPoint, () => {
      const obj = AgeVerificationActionCreatorsDefault;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE);
    }, undefined, fn, true);
    items8[1] = tmp19(tmp2(tmp3[27]).Text, obj12);
    obj14.children = items8;
    items7[1] = closure_10(tmp2(tmp3[25]).Stack, obj14);
    obj13.children = items7;
    const items9 = [closure_10(tmp2(tmp3[25]).Stack, obj13), , , ];
    let tmp19Result6 = loading;
    if (loading) {
      const obj15 = { align: "center", justify: "center", style: tmp.loadingContainer, children: tmp19(initiateAgeVerificationV2, { size: "large" }) };
      tmp19Result6 = tmp19(tmp2(tmp3[25]).Stack, obj15);
    }
    items9[1] = tmp19Result6;
    let tmp20Result = !loading;
    if (!loading) {
      let tmp19Result7 = tmp6;
      if (tmp6) {
        tmp19Result7 = null != outageBannerMessage;
      }
      if (tmp19Result7) {
        const obj16 = { messageType: tmp2(tmp3[30]).HelpMessageTypes.WARNING, children: outageBannerMessage };
        tmp19Result7 = tmp19(tmp2(tmp3[30]).HelpMessage, obj16);
      }
      const items10 = [tmp19Result7, , ];
      if (tmp6) {
        items10[1] = !tmp6;
        let tmp19Result8 = tmp6;
        if (tmp6) {
          const obj17 = {
            hasIcons: true,
            children: availableMethodsV2.map((children) => {
                      closure_0 = children;
                      const method = children.method;
                      if (closure_0(onComplete[7]).AgeAssuranceMethod.FACIAL_AGE_ESTIMATION === method) {
                        let GoogleNeutralIcon = tmp(tmp2[8]).VideoSelfieIcon;
                      } else if (tmp(tmp2[7]).AgeAssuranceMethod.ID_SELFIE_MATCH === method) {
                        GoogleNeutralIcon = tmp(tmp2[9]).IdCardIcon;
                      } else if (tmp(tmp2[7]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
                        GoogleNeutralIcon = tmp(tmp2[10]).GoogleNeutralIcon;
                      } else if (tmp(tmp2[7]).AgeAssuranceMethod.OS_SIGNAL === method) {
                        if (tmpResult.isIOS()) {
                          let GoogleNeutralIcon2 = tmp(tmp2[12]).AppleNeutralIcon;
                        } else {
                          GoogleNeutralIcon2 = tmp(tmp2[10]).GoogleNeutralIcon;
                        }
                        GoogleNeutralIcon = GoogleNeutralIcon2;
                        tmpResult = tmp(tmp2[11]);
                      }
                      if (null != GoogleNeutralIcon) {
                        const obj = { IconComponent: GoogleNeutralIcon, variant: "secondary" };
                        let tmp4 = _undefined(tmp(tmp2[35]).TableRow.Icon, obj);
                        let tmp5 = _undefined;
                      } else if (null != children.icon) {
                        const obj2 = { icon: children.icon };
                        tmp4 = _undefined(onClose(tmp2[36]), obj2);
                        tmp5 = _undefined;
                      } else {
                        const obj3 = { IconComponent: tmp(tmp2[37]).UnknownGameIcon, variant: "secondary" };
                        tmp4 = _undefined(tmp(tmp2[35]).TableRow.Icon, obj3);
                        tmp5 = _undefined;
                      }
                      const combined = "" + children.method + "-" + children.vendor;
                      if (c8 === combined) {
                        let tmp5Result = tmp5(initiateAgeVerificationV2, {});
                      } else {
                        const obj4 = { size: "md", color: onClose(tmp2[14]).colors.INTERACTIVE_ICON_DEFAULT };
                        tmp5Result = tmp5(tmp(tmp2[38]).ChevronSmallRightIcon, obj4);
                      }
                      const obj5 = { trailing: tmp5Result, disabled: null != c8, icon: tmp4, label: children.title, subLabel: null, onPress: null };
                      const items = [tmp5(closure_0(onComplete[27]).Text, { variant: "text-sm/normal", color: "text-muted", children: children.description }), ];
                      let tmp5Result2 = null != children.providedBy;
                      if (tmp5Result2) {
                        const obj7 = { variant: "text-sm/normal", color: "text-muted", children: children.providedBy };
                        tmp5Result2 = tmp5(tmp(tmp2[27]).Text, obj7);
                      }
                      items[1] = tmp5Result2;
                      obj5.subLabel = closure_10(closure_0(onComplete[25]).Stack, { direction: "vertical", spacing: 4, children: items });
                      obj5.onPress = function onPress() {
                        return closure_10(closure_0, combined);
                      };
                      return tmp5(closure_0(onComplete[35]).TableRow, obj5, combined);
                    })
          };
          tmp19Result8 = tmp19(tmp2(tmp3[34]).TableRowGroup, obj17);
        }
        const obj18 = { direction: "vertical", spacing: 12, children: null };
        items10[2] = tmp19Result8;
        obj18.children = items10;
        tmp20Result = tmp20(tmp2(tmp3[25]).Stack, obj18);
      } else {
        const obj19 = { style: tmp.emptyContainer, children: null };
        let obj20 = { messageType: tmp2(tmp3[30]).HelpMessageTypes.ERROR, button: null, children: null };
        const obj21 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl = tmp2(tmp3[32]).intl;
        obj21.text = intl.string(onClose(tmp3[33]).hDvmYP);
        obj21.onPress = refetch;
        obj20.button = tmp19(tmp2(tmp3[31]).Button, obj21);
        const intl2 = tmp2(tmp3[32]).intl;
        const tmp29 = onClose(tmp3[33]);
        obj20.children = intl2.string(error ? tmp29.Bkmk4Y : tmp29.cR6336);
        obj20 = tmp19(tmp2(tmp3[30]).HelpMessage, obj20);
        obj19.children = obj20;
        tmp19(tmp2(tmp3[25]).Stack, obj19);
      }
    }
    items9[2] = tmp20Result;
    let tmp19Result10 = !loading;
    if (!loading) {
      tmp19Result10 = tmp6;
    }
    if (tmp19Result10) {
      tmp19Result10 = null != footerMessage;
    }
    if (tmp19Result10) {
      const obj22 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.footer, children: footerMessage };
      tmp19Result10 = tmp19(tmp2(tmp3[27]).Text, obj22);
    }
    const obj23 = { children: null };
    const obj24 = { children: null };
    items9[3] = tmp19Result10;
    obj10.children = items9;
    obj24.children = closure_10(tmp2(tmp3[25]).Stack, obj10);
    obj23.children = tmp19(tmp2(tmp3[24]).ModalContent, obj24);
    tmp19Result = tmp19(tmp2(tmp3[23]).ModalScreen, obj23);
    const tmp2Result = tmp2(tmp3[18]);
  }
  return tmp19Result;
}
const ActivityIndicator = fn(17).ActivityIndicator;
const TRUSTED_PROVIDERS_URL = fn(8720).TRUSTED_PROVIDERS_URL;
const HelpdeskArticles = fn(1078).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { headerStyle: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" }, container: { alignSelf: "stretch" }, header: { textAlign: "center" }, loadingContainer: null, emptyContainer: null, footer: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
obj2.loadingContainer = { marginTop: nativeDefault.space.PX_24 };
let obj4 = { marginTop: nativeDefault.space.PX_24 };
obj2.emptyContainer = { marginTop: nativeDefault.space.PX_24 };
obj2.footer = { textAlign: "center" };
let closure_11 = createStyles.createStyles(obj2);
const constants = { METHODS: "METHODS", GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION", APP_STORE_VERIFICATION: "APP_STORE_VERIFICATION" };
const ReactCompilerGating = fn(558);
let obj5 = { marginTop: nativeDefault.space.PX_24 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationExpressiveV2Modal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((entryPoint) => {
  const cResult = entryPoint(568).c(12);
  entryPoint = entryPoint.entryPoint;
  ({ onClose, onComplete } = entryPoint);
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const v4Result = tmp(1259).v4();
    cResult[0] = v4Result;
    let first = v4Result;
    const tmpResult = tmp(1259);
  } else {
    first = cResult[0];
  }
  if (cResult[1] === entryPoint) {
    if (cResult[2] === onClose) {
      if (cResult[3] === onComplete) {
        if (cResult[4] === tmp4) {
          let tmp7 = cResult[5];
        }
        if (cResult[6] !== entryPoint) {
          class V {
            constructor() {
              obj = closure_0(closure_2[19]);
              result = obj.trackAgeVerificationModalViewed(closure_1, closure_0(closure_2[19]).AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
              return;
            }
          }
          const items = [first, entryPoint];
          cResult[6] = entryPoint;
          cResult[7] = V;
          cResult[8] = items;
          let tmp9 = items;
          const tmp8 = V;
        } else {
          class V {
            constructor() {
              obj = closure_0(closure_2[19]);
              result = obj.trackAgeVerificationModalViewed(closure_1, closure_0(closure_2[19]).AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
              return;
            }
          }
          tmp9 = cResult[8];
        }
        const effect = noop.useEffect(tmp8, tmp9);
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class V {
            constructor() {
              obj = closure_0(closure_2[19]);
              result = obj.trackAgeVerificationModalViewed(closure_1, closure_0(closure_2[19]).AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
              return;
            }
          }
          const stringResult = obj10.string(tmp(1119).t["13/7kX"]);
          cResult[9] = stringResult;
          const tmp12 = stringResult;
        } else {
          class V {
            constructor() {
              obj = closure_0(closure_2[19]);
              result = obj.trackAgeVerificationModalViewed(closure_1, closure_0(closure_2[19]).AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
              return;
            }
          }
        }
        if (cResult[10] !== tmp7) {
          class V {
            constructor() {
              obj = closure_0(closure_2[19]);
              result = obj.trackAgeVerificationModalViewed(closure_1, closure_0(closure_2[19]).AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
              return;
            }
          }
          const obj2 = { screens: tmp7, initialRouteName: constants.METHODS, headerBackTitle: tmp12 };
          const tmp16 = closure_9(tmp(7278).Navigator, obj2);
          cResult[10] = tmp7;
          cResult[11] = tmp16;
          const tmp14 = tmp16;
        } else {
          class V {
            constructor() {
              obj = closure_0(closure_2[19]);
              result = obj.trackAgeVerificationModalViewed(closure_1, closure_0(closure_2[19]).AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
              return;
            }
          }
        }
        return tmp14;
      }
    }
  }
  closure_129_0 = first;
  closure_129_1 = entryPoint;
  closure_129_2 = onClose;
  closure_129_3 = onComplete;
  function closeModal() {
    onClose(onComplete[39]).pop();
    closure_2();
  }
  closure_129_4 = closeModal;
  const obj3 = {};
  const obj4 = {
    headerStyle: tmp4.headerStyle,
    headerTitle() {
      return null;
    },
    headerLeft: null,
    render: null
  };
  const obj = entryPoint(568);
  obj4.headerLeft = entryPoint(5871).getHeaderCloseButton(closeModal);
  obj4.render = function render(arg0, navigation) {
    return closure_2_9(MethodsScreen, { entryPoint, navigation, onClose: closeModal, onComplete, modalSessionId });
  };
  obj3[constants.METHODS] = obj4;
  const obj5 = {
    headerStyle: tmp4.headerStyle,
    headerTitle() {
      return null;
    },
    headerLeft: null,
    render: null
  };
  const tmpResult4 = entryPoint(5871);
  obj5.headerLeft = entryPoint(5871).getHeaderBackButton();
  obj5.render = function render() {
    return closure_2_9(onClose(onComplete[41]), { onClose: closeModal, onComplete, modalSessionId });
  };
  obj3[constants.GOOGLE_WALLET_VERIFICATION] = obj5;
  const obj6 = {
    headerStyle: tmp4.headerStyle,
    headerTitle() {
      return null;
    },
    headerLeft: null,
    render: null
  };
  const tmpResult5 = entryPoint(5871);
  obj6.headerLeft = entryPoint(5871).getHeaderBackButton();
  obj6.render = function render() {
    return closure_2_9(onClose(onComplete[42]), { onClose: closeModal, modalSessionId });
  };
  obj3[constants.APP_STORE_VERIFICATION] = obj6;
  cResult[1] = entryPoint;
  cResult[2] = onClose;
  cResult[3] = onComplete;
  cResult[4] = tmp4;
  cResult[5] = obj3;
  tmp7 = obj3;
}) : ((entryPoint) => {
  entryPoint = entryPoint.entryPoint;
  const onClose = entryPoint.onClose;
  const onComplete = entryPoint.onComplete;
  const tmp = closure_11();
  closure_3 = tmp;
  const memo = noop.useMemo(() => entryPoint(onComplete[45]).v4(), []);
  const items = [tmp, memo, entryPoint, onClose, onComplete];
  const items1 = [memo, entryPoint];
  const memo1 = noop.useMemo(() => {
    const modalSessionId = memo;
    closure_2 = onClose;
    function closeModal() {
      onClose(onComplete[39]).pop();
      closure_2();
    }
    const obj = {};
    const obj2 = {
      headerStyle: onComplete.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: NavigatorHeader.getHeaderCloseButton(closeModal),
      render(arg0, navigation) {
        return closure_2_9(MethodsScreen, { entryPoint, navigation, onClose: closeModal, onComplete, modalSessionId });
      }
    };
    obj[constants.METHODS] = obj2;
    const obj4 = {
      headerStyle: onComplete.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    obj4.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj4.render = function render() {
      return closure_2_9(onClose(onComplete[41]), { onClose: closeModal, onComplete, modalSessionId });
    };
    obj[constants.GOOGLE_WALLET_VERIFICATION] = obj4;
    const obj6 = {
      headerStyle: onComplete.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    obj6.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj6.render = function render() {
      return closure_2_9(onClose(onComplete[42]), { onClose: closeModal, modalSessionId });
    };
    obj[constants.APP_STORE_VERIFICATION] = obj6;
    return obj;
  }, items);
  const effect = noop.useEffect(() => {
    const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed(memo, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
  }, items1);
  let obj = { screens: memo1, initialRouteName: constants.METHODS, headerBackTitle: null };
  const intl = entryPoint(onComplete[32]).intl;
  obj.headerBackTitle = intl.string(entryPoint(onComplete[32]).t["13/7kX"]);
  return closure_9(entryPoint(onComplete[46]).Navigator, obj);
});
