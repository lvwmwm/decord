// Module ID: 8365
// Function ID: 8366
// Name: MethodsScreen
// Dependencies: [5, 32, 19, 17, 8342, 673, 21, 1929, 8366, 8368, 8370, 1234, 8372, 4481, 709, 8348, 8374, 8375, 8378, 8380, 4741, 8343, 8354, 8355, 8381, 8351, 8352, 4934, 5647, 4477, 8341, 1994, 1296, 4936, 1233, 2918, 5642, 5560, 8382, 8495, 7149, 4731, 5579, 8496, 8497, 511, 6940, 2]
// Exports: default

// Module 8365 (MethodsScreen)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { ActivityIndicator } from "get ActivityIndicator" /* 17 */;
import { TRUSTED_PROVIDERS_URL } from "set" /* 8342 */;
import { HelpdeskArticles } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const require = arg1;
function MethodsScreen(onClose) {
  ({ entryPoint, navigation } = onClose);
  let _require = navigation;
  onClose = onClose.onClose;
  const onComplete = onClose.onComplete;
  const modalSessionId = onClose.modalSessionId;
  methods = undefined;
  let first;
  closure_6 = undefined;
  let memo;
  let callback;
  let initiateAgeVerificationV2;
  closure_10 = undefined;
  let callback2;
  c12 = undefined;
  closure_13 = undefined;
  let isAgeVerificationCustomTabOpen;
  let memo2;
  let callback1;
  let isAgeVerificationAuthSessionOpen;
  closure_18 = undefined;
  closure_19 = undefined;
  let tmp = callback2();
  let obj = _require(onComplete[15]);
  const isSuspendedUser = obj.useIsSuspendedUser();
  obj1 = _require(onComplete[16]);
  const shouldShowExpressiveModalSubtitleAlt = obj1.useShouldShowExpressiveModalSubtitleAlt("age_verification_expressive_v2_modal");
  let obj2 = _require(onComplete[17]);
  const ageVerificationMethodsV2 = obj2.useAgeVerificationMethodsV2();
  ({ loading, methods } = ageVerificationMethodsV2);
  ({ footerMessage, outageBannerMessage, refetch } = ageVerificationMethodsV2);
  const tmp7 = methods(first.useState(false), 2);
  first = tmp7[0];
  closure_6 = tmp7[1];
  const effect = first.useEffect(() => {
    c0 = false;
    const result = callback(onComplete[18]).checkGoogleWalletAvailable();
    result.then((arg0) => {
      if (!c0) {
        closure_1_6(arg0);
      }
    });
    return () => {
      c0 = true;
    };
  }, []);
  memo = first.useMemo(() => {
    let isIOSResult = callback(onComplete[11]).isIOS();
    if (isIOSResult) {
      isIOSResult = callback(onComplete[19]).isAppStoreAgeSignalSupported();
      const tmpResult = callback(onComplete[19]);
    }
    return isIOSResult;
  }, []);
  let items = [methods, first, memo];
  const memo1 = first.useMemo(() => methods.filter((method) => {
    method = method.method;
    if (closure_1_0(closure_1_2[7]).AgeAssuranceMethod.GOOGLE_WALLET === method) {
      return closure_5;
    } else if (tmp(tmp2[7]).AgeAssuranceMethod.OS_SIGNAL === method) {
      return closure_7;
    } else {
      return true;
    }
    tmp = closure_1_0;
    tmp2 = closure_1_2;
  }), items);
  const items1 = [onComplete, onClose];
  callback = first.useCallback(() => {
    if (onComplete != null) {
      tmp();
    }
    onClose();
  }, items1);
  let obj3 = _require(onComplete[20]);
  initiateAgeVerificationV2 = obj3.useInitiateAgeVerificationV2({ onComplete: callback, entryPoint, onMethodUnavailable: refetch }).initiateAgeVerificationV2;
  closure_10 = first.useRef(false);
  [c11, c12] = methods(first.useState(null), 2);
  _require = undefined;
  _require = modalSessionId((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c6 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              if (!closure_1_10.current) {
                obj1 = navigation(onComplete[21]);
                const result = obj1.trackAgeVerificationModalClicked(c3, navigation(onComplete[21]).AgeVerificationModalVersion.EXPRESSIVE_V2, navigation(onComplete[21]).AgeVerificationModalCta.METHOD_SELECT, tmp49.method);
                if (tmp49.method !== navigation(onComplete[7]).AgeAssuranceMethod.GOOGLE_WALLET) {
                  if (tmp49.method !== tmp22(tmp23[7]).AgeAssuranceMethod.OS_SIGNAL) {
                    let tmp22Result = tmp22(tmp23[22]);
                    const result1 = tmp22Result.releaseAgeVerificationCustomTab();
                    tmp22Result = tmp22(tmp23[23]);
                    const result2 = tmp22Result.closeAgeVerificationAuthSession();
                    closure_1_10.current = true;
                    closure_1_12(tmp50);
                    c5 = 1;
                    c3 = 2;
                    c6 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = closure_1_9(tmp49);
                    return obj1;
                  } else {
                    navigation.navigate(constants.APP_STORE_VERIFICATION);
                  }
                } else {
                  navigation.navigate(constants.GOOGLE_WALLET_VERIFICATION);
                }
              }
              c6 = 3;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            closure_1_10.current = false;
            closure_1_12(null);
            throw closure_4;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            c5 = 0;
            closure_1_10.current = false;
            closure_1_12(null);
          }
          c5 = 0;
          closure_1_10.current = false;
          closure_1_12(null);
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp40) {
          closure_4 = tmp40;
          if (tmp4 === c5) {
            c6 = tmp2;
            throw tmp40;
          } else {
            c3 = tmp;
          }
        }
      }
    })();
  });
  const items2 = [navigation, initiateAgeVerificationV2, modalSessionId];
  closure_13 = first.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  let obj4 = _require(onComplete[22]);
  isAgeVerificationCustomTabOpen = obj4.useIsAgeVerificationCustomTabOpen();
  let obj5 = _require(onComplete[22]);
  const items3 = [methods];
  const ageVerificationCustomTabCopy = obj5.useAgeVerificationCustomTabCopy();
  memo2 = first.useMemo(() => {
    let externalWindow;
    const found = methods.find((externalWindow) => null != externalWindow.externalWindow);
    if (found != null) {
      externalWindow = found.externalWindow;
    }
    return externalWindow;
  }, items3);
  const effect1 = first.useEffect(() => {
    const result = callback(onComplete[22]).resumeAgeVerificationCustomTab();
  }, []);
  const items4 = [memo2];
  const effect2 = first.useEffect(() => {
    if (null != memo2) {
      const result = callback(onComplete[22]).setAgeVerificationCustomTabCopy(tmp);
      const obj = callback(onComplete[22]);
    }
  }, items4);
  const items5 = [callback];
  callback1 = first.useCallback(() => {
    if (obj.isAgeVerified()) {
      let tmpResult = tmp(tmp2[22]);
      if (tmpResult.getIsAgeVerificationCustomTabAwaitingResult()) {
        tmpResult = tmp(tmp2[22]);
        if (!tmpResult.getIsAgeVerificationCustomTabOpen()) {
          const result = tmp(tmp2[22]).releaseAgeVerificationCustomTab();
          callback();
          const tmpResult1 = tmp(tmp2[22]);
        }
      }
      let isAgeVerificationAuthSessionAwaitingResult = tmp(tmp2[23]).getIsAgeVerificationAuthSessionAwaitingResult();
      if (isAgeVerificationAuthSessionAwaitingResult) {
        isAgeVerificationAuthSessionAwaitingResult = !tmp(tmp2[23]).getIsAgeVerificationAuthSessionOpen();
        const tmpResult3 = tmp(tmp2[23]);
      }
      if (isAgeVerificationAuthSessionAwaitingResult) {
        const result1 = tmp(tmp2[23]).closeAgeVerificationAuthSession();
        callback();
        const tmpResult4 = tmp(tmp2[23]);
      }
      const tmpResult2 = tmp(tmp2[23]);
    }
  }, items5);
  let obj6 = _require(onComplete[20]);
  const watchAgeVerificationStatusChange = obj6.useWatchAgeVerificationStatusChange(callback1);
  let obj7 = _require(onComplete[23]);
  isAgeVerificationAuthSessionOpen = obj7.useIsAgeVerificationAuthSessionOpen();
  closure_18 = first.useRef(isAgeVerificationCustomTabOpen);
  closure_19 = first.useRef(isAgeVerificationAuthSessionOpen);
  const items6 = [isAgeVerificationCustomTabOpen, callback1];
  const effect3 = first.useEffect(() => {
    let current = ref.current;
    if (current) {
      current = !isAgeVerificationCustomTabOpen;
    }
    if (current) {
      callback1();
    }
    ref.current = isAgeVerificationCustomTabOpen;
  }, items6);
  const items7 = [isAgeVerificationAuthSessionOpen, callback1];
  const effect4 = first.useEffect(() => {
    let current = ref2.current;
    if (current) {
      current = !isAgeVerificationAuthSessionOpen;
    }
    if (current) {
      callback1();
    }
    ref2.current = isAgeVerificationAuthSessionOpen;
  }, items7);
  if (isAgeVerificationCustomTabOpen) {
    obj = { copy: null };
    obj[0] = ageVerificationCustomTabCopy;
    let tmp24Result = tmp24(onClose(tmp3[24]), obj);
  } else {
    obj = { align: "stretch", spacing: 24, style: null, children: null };
    obj[2] = tmp.container;
    const items8 = [tmp24(tmp2(tmp3[28]).AgeVerificationSpotIllustration, { width: 150, height: 100 }), ];
    obj1 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    let tmp2Result = tmp2(tmp3[20]);
    obj1[3] = tmp2Result.getAgeVerificationGetStartedTitle(entryPoint, true);
    const items9 = [tmp24(tmp2(tmp3[29]).Text, obj1), ];
    obj2 = { variant: "text-md/medium", color: "text-strong", style: null, children: null };
    obj2[2] = tmp.header;
    tmp2Result = tmp2(tmp3[20]);
    let fn;
    if (shouldShowExpressiveModalSubtitleAlt) {
      fn = () => {
        onClose(onComplete[30]).openUrl(memo);
        const obj = onClose(onComplete[30]);
        const result = callback(onComplete[21]).trackAgeVerificationModalClicked(modalSessionId, callback(onComplete[21]).AgeVerificationModalVersion.EXPRESSIVE_V2, callback(onComplete[21]).AgeVerificationModalCta.TRUSTED_PROVIDERS);
      };
    }
    obj3 = { align: "center", justify: "center", spacing: 16, children: null };
    obj4 = { align: "center", justify: "center", spacing: 8, children: null };
    obj2[3] = tmp2Result.getAgeVerificationGetStartedSubtitle(entryPoint, () => {
      const obj = onClose(onComplete[30]);
      obj.openUrl(onClose(onComplete[31]).getArticleURL(callback.TIGGER_PAWTECT_LEARN_MORE));
      const obj2 = onClose(onComplete[31]);
      const result = callback(onComplete[21]).trackAgeVerificationModalClicked(modalSessionId, callback(onComplete[21]).AgeVerificationModalVersion.EXPRESSIVE_V2, callback(onComplete[21]).AgeVerificationModalCta.LEARN_MORE);
    }, isSuspendedUser, fn, true);
    items9[1] = tmp24(tmp2(tmp3[29]).Text, obj2);
    obj4[3] = items9;
    items8[1] = closure_10(tmp2(tmp3[27]).Stack, obj4);
    obj3[3] = items8;
    const items10 = [closure_10(tmp2(tmp3[27]).Stack, obj3), , , ];
    tmp24Result = loading;
    if (loading) {
      obj5 = { align: "center", justify: "center", style: null, children: null };
      obj5[2] = tmp.loadingContainer;
      obj5[3] = tmp24(closure_6, { size: "large" });
      tmp24Result = tmp24(tmp2(tmp3[27]).Stack, obj5);
    }
    items10[1] = tmp24Result;
    let tmp25Result = !loading;
    if (!loading) {
      let tmp24Result1 = null != outageBannerMessage;
      if (tmp24Result1) {
        obj6 = { messageType: null, children: null };
        obj6[0] = tmp2(tmp3[32]).HelpMessageTypes.WARNING;
        obj6[1] = outageBannerMessage;
        tmp24Result1 = tmp24(tmp2(tmp3[32]).HelpMessage, obj6);
      }
      const items11 = [tmp24Result1, , ];
      if (tmp11) {
        items11[1] = !tmp11;
        let tmp24Result2 = tmp11;
        if (tmp11) {
          obj7 = { hasIcons: true, children: null };
          obj7[1] = memo1.map((children) => {
            callback = children;
            const method = children.method;
            if (callback(onComplete[7]).AgeAssuranceMethod.FACIAL_AGE_ESTIMATION === method) {
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
              let obj = { IconComponent: null, variant: "secondary" };
              obj[0] = GoogleNeutralIcon;
              let tmp4 = initiateAgeVerificationV2(tmp(tmp2[37]).TableRow.Icon, obj);
              let tmp5 = initiateAgeVerificationV2;
            } else if (null != children.icon) {
              obj = { icon: null };
              obj[0] = children.icon;
              tmp4 = initiateAgeVerificationV2(onClose(tmp2[38]), obj);
              tmp5 = initiateAgeVerificationV2;
            } else {
              obj1 = { IconComponent: null, variant: "secondary" };
              obj1[0] = tmp(tmp2[39]).UnknownGameIcon;
              tmp4 = initiateAgeVerificationV2(tmp(tmp2[37]).TableRow.Icon, obj1);
              tmp5 = initiateAgeVerificationV2;
            }
            const combined = "" + children.method + "-" + children.vendor;
            if (c11 === combined) {
              let tmp5Result = tmp5(closure_6, {});
            } else {
              const obj2 = { size: "md", color: null };
              obj2[1] = onClose(tmp2[14]).colors.INTERACTIVE_ICON_DEFAULT;
              tmp5Result = tmp5(tmp(tmp2[40]).ChevronSmallRightIcon, obj2);
            }
            const obj3 = { trailing: tmp5Result, disabled: null != c11, icon: tmp4, label: children.title, subLabel: null, onPress: null };
            const items = [tmp5(callback(onComplete[29]).Text, { variant: "text-sm/normal", color: "text-muted", children: children.description }), ];
            tmp5Result = null != children.providedBy;
            if (tmp5Result) {
              const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
              obj5[2] = children.providedBy;
              tmp5Result = tmp5(tmp(tmp2[29]).Text, obj5);
            }
            items[1] = tmp5Result;
            obj3[4] = closure_10(callback(onComplete[27]).Stack, { direction: "vertical", spacing: 4, children: items });
            obj3[5] = function onPress() {
              return closure_1_13(closure_0, combined);
            };
            return tmp5(callback(onComplete[37]).TableRow, obj3, combined);
          });
          tmp24Result2 = tmp24(tmp2(tmp3[36]).TableRowGroup, obj7);
        }
        const obj8 = { direction: "vertical", spacing: 12, children: null };
        items11[2] = tmp24Result2;
        obj8[2] = items11;
        tmp25Result = tmp25(tmp2(tmp3[27]).Stack, obj8);
      } else {
        const obj9 = { style: null, children: null };
        obj9[0] = tmp.emptyContainer;
        let obj10 = { messageType: null, button: null, children: null };
        obj10[0] = tmp2(tmp3[32]).HelpMessageTypes.ERROR;
        const obj11 = { variant: "primary", size: "sm", text: null, onPress: null };
        const intl = tmp2(tmp3[34]).intl;
        obj11[2] = intl.string(onClose(tmp3[35]).hDvmYP);
        obj11[3] = refetch;
        obj10[1] = tmp24(tmp2(tmp3[33]).Button, obj11);
        const intl2 = tmp2(tmp3[34]).intl;
        const tmp35 = onClose(tmp3[35]);
        obj10[2] = intl2.string(ageVerificationMethodsV2.error ? tmp35.Bkmk4Y : tmp35.cR6336);
        obj10 = tmp24(tmp2(tmp3[32]).HelpMessage, obj10);
        obj9[1] = obj10;
        tmp24(tmp2(tmp3[27]).Stack, obj9);
      }
    }
    items10[2] = tmp25Result;
    let tmp24Result4 = !loading;
    if (!loading) {
      tmp24Result4 = tmp11;
    }
    if (tmp24Result4) {
      tmp24Result4 = null != footerMessage;
    }
    if (tmp24Result4) {
      const obj12 = { variant: "text-sm/normal", color: "text-subtle", style: null, children: null };
      obj12[2] = tmp.footer;
      obj12[3] = footerMessage;
      tmp24Result4 = tmp24(tmp2(tmp3[29]).Text, obj12);
    }
    const obj13 = { children: null };
    const obj14 = { children: null };
    items10[3] = tmp24Result4;
    obj[3] = items10;
    obj14[0] = closure_10(tmp2(tmp3[27]).Stack, obj);
    obj13[0] = tmp24(tmp2(tmp3[26]).ModalContent, obj14);
    tmp24Result = tmp24(tmp2(tmp3[25]).ModalScreen, obj13);
  }
  return tmp24Result;
}
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { headerStyle: null, container: null, header: null, loadingContainer: null, emptyContainer: null, footer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "stretch" };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { marginTop: ThemesDefault.space.PX_24 };
let obj1 = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[5] = { textAlign: "center" };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let closure_12 = { METHODS: "METHODS", GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION", APP_STORE_VERIFICATION: "APP_STORE_VERIFICATION" };
let obj2 = { marginTop: ThemesDefault.space.PX_24 };
let result = require("set").fileFinishedImporting("modules/age_assurance/native/AgeVerificationExpressiveV2Modal.tsx");

export default function AgeVerificationExpressiveV2Modal(entryPoint) {
  entryPoint = entryPoint.entryPoint;
  const onClose = entryPoint.onClose;
  const onComplete = entryPoint.onComplete;
  closure_3 = undefined;
  let memo;
  const tmp = callback2();
  closure_3 = tmp;
  memo = React.useMemo(() => entryPoint(onComplete[45]).v4(), []);
  const items = [tmp, memo, entryPoint, onClose, onComplete];
  const items1 = [memo, entryPoint];
  const memo1 = React.useMemo(() => {
    closure_0 = closeModal;
    closure_1 = closure_0;
    closure_2 = closure_1;
    closure_3 = closure_2;
    closeModal = function closeModal() {
      let arr = callback(4731);
      arr = arr.pop();
      dependencyMap();
    };
    let obj = {};
    obj = {
      headerStyle: closure_3.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: entryPoint(onComplete[42]).getHeaderCloseButton(closeModal),
      render(arg0, navigation) {
        return closure_1_9(closure_1_13, { entryPoint: closure_1, navigation, onClose: closeModal, onComplete: closure_3, modalSessionId: closure_0 });
      }
    };
    obj[closure_1_12.METHODS] = obj;
    obj = {
      headerStyle: closure_3.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    const obj3 = entryPoint(onComplete[42]);
    obj[2] = entryPoint(onComplete[42]).getHeaderBackButton();
    obj[3] = function render() {
      return closure_1_9(callback(8496), { onClose: closeModal, onComplete: closure_3, modalSessionId: closure_0 });
    };
    obj[closure_1_12.GOOGLE_WALLET_VERIFICATION] = obj;
    obj1 = {
      headerStyle: closure_3.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    const obj5 = entryPoint(onComplete[42]);
    obj1[2] = entryPoint(onComplete[42]).getHeaderBackButton();
    obj1[3] = function render() {
      return closure_1_9(callback(8497), { onClose: closeModal, modalSessionId: closure_0 });
    };
    obj[closure_1_12.APP_STORE_VERIFICATION] = obj1;
    return obj;
  }, items);
  const effect = React.useEffect(() => {
    const result = entryPoint(onComplete[21]).trackAgeVerificationModalViewed(memo, entryPoint(onComplete[21]).AgeVerificationModalVersion.EXPRESSIVE_V2, entryPoint);
  }, items1);
  let obj = { screens: memo1, initialRouteName: constants.METHODS, headerBackTitle: null };
  const intl = entryPoint(onComplete[34]).intl;
  obj[2] = intl.string(entryPoint(onComplete[34]).t["13/7kX"]);
  return callback(entryPoint(onComplete[46]).Navigator, obj);
};
