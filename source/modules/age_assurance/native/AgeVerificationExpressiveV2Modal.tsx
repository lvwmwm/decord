// Module ID: 6768
// Function ID: 6769
// Name: MethodsScreen
// Dependencies: [5, 32, 19, 17, 676, 21, 1892, 6769, 6771, 6773, 4189, 712, 6752, 6775, 6778, 4405, 6777, 6780, 6781, 4598, 6782, 4185, 6744, 1945, 1297, 4600, 1236, 2741, 5554, 5220, 4395, 5143, 7613, 514, 5570, 2]
// Exports: default

// Module 6768 (MethodsScreen)
import closure_3 from "jsxProd";
import GoogleWalletVerificationScreen from "GoogleWalletVerificationScreen";
import Stack from "Stack";
import { ActivityIndicator } from "ModalScreen";
import { HelpdeskArticles } from "ME";
import jsxProd from "Text";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
function MethodsScreen(onComplete) {
  let entryPoint;
  let error;
  let loading;
  let methods;
  let navigation;
  let refetch;
  ({ entryPoint, navigation } = onComplete);
  let _require = navigation;
  methods = undefined;
  let first;
  let callback;
  let initiateAgeVerification;
  let React;
  let closure_6;
  const tmp = callback4();
  let obj = _require(first[12]);
  const isSuspendedUser = obj.useIsSuspendedUser();
  let obj1 = _require(first[13]);
  const ageVerificationMethodsV2 = obj1.useAgeVerificationMethodsV2();
  ({ loading, methods } = ageVerificationMethodsV2);
  ({ error, refetch } = ageVerificationMethodsV2);
  const tmp6 = initiateAgeVerification(React.useState(false), 2);
  first = tmp6[0];
  callback = tmp6[1];
  const effect = React.useEffect(() => {
    let c0 = false;
    const result = callback(first[14]).checkGoogleWalletAvailable();
    result.then((arg0) => {
      if (!c0) {
        outer1_3(arg0);
      }
    });
    return () => {
      let c0 = true;
    };
  }, []);
  let items = [methods, first];
  const memo = React.useMemo(() => methods.filter((method) => method.method !== outer1_0(outer1_2[6]).AgeAssuranceMethod.GOOGLE_WALLET || closure_2), items);
  let obj2 = _require(first[15]);
  initiateAgeVerification = obj2.useInitiateAgeVerification({ onComplete: onComplete.onClose, entryPoint, shouldShowExpressiveModal: true }).initiateAgeVerification;
  React = React.useRef(false);
  _require = undefined;
  _require = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c5 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (ref === 2) {
        ref = 3;
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
          ref = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              ref = 3;
              throw arg1;
            } else if (arg0 === 2) {
              ref = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp3;
              if (!ref.current) {
                if (tmp37.method !== navigation(first[6]).AgeAssuranceMethod.GOOGLE_WALLET) {
                  const tmp21 = tmp16(tmp17[16]).V2_METHOD_TO_VERIFICATION_METHOD[tmp37.method];
                  const tmp22 = tmp16(tmp17[16]).V2_VENDOR_TO_VERIFICATION_VENDOR[tmp37.vendor];
                  if (null != tmp21) {
                    if (null != tmp22) {
                      ref.current = true;
                      let v0 = 1;
                      c2 = 2;
                      ref = 1;
                      const obj1 = { value: null, done: false };
                      obj1[0] = v0(tmp21, tmp22);
                      return obj1;
                    }
                  }
                  navigation.navigate(outer2_12.METHOD_ERROR);
                } else {
                  navigation.navigate(outer2_12.GOOGLE_WALLET_VERIFICATION);
                }
              }
              ref = 3;
            }
          } else if (1 === tmp7) {
            v0 = 0;
            ref.current = false;
            throw closure_3;
          } else if (arg0 === 1) {
            ref = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            v0 = 0;
            ref.current = false;
          }
          v0 = 0;
          ref.current = false;
          ref = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp28) {
          closure_3 = tmp28;
          if (tmp4 === v0) {
            ref = tmp2;
            throw tmp28;
          } else {
            c2 = tmp;
          }
        }
      }
    })();
  });
  const items1 = [navigation, initiateAgeVerification];
  closure_6 = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  obj = { align: "stretch", spacing: 24, style: tmp.container, children: null };
  obj = { align: "center", justify: "center", spacing: 16, children: null };
  const items2 = [callback2(_require(first[20]).AgeVerificationSpotIllustration, { width: 150, height: 100 }), ];
  obj1 = { align: "center", justify: "center", spacing: 8, children: null };
  obj2 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  let obj7 = _require(first[15]);
  obj2[3] = obj7.getAgeVerificationGetStartedTitle(entryPoint);
  const items3 = [callback2(_require(first[21]).Text, obj2), ];
  const obj3 = { variant: "text-md/medium", color: "text-strong", style: tmp.header, children: null };
  let obj9 = _require(first[15]);
  obj3[3] = obj9.getAgeVerificationGetStartedSubtitle(entryPoint, () => {
    const obj = methods(first[22]);
    obj.openUrl(methods(first[23]).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
  }, isSuspendedUser);
  items3[1] = callback2(_require(first[21]).Text, obj3);
  obj1[3] = items3;
  items2[1] = callback3(_require(first[19]).Stack, obj1);
  obj[3] = items2;
  const items4 = [callback3(_require(first[19]).Stack, obj), , , ];
  let tmp10Result = loading;
  if (loading) {
    const obj4 = { align: "center", justify: "center", style: null, children: null };
    obj4[2] = tmp.loadingContainer;
    obj4[3] = tmp10(closure_6, { size: "large" });
    tmp10Result = tmp10(tmp2(tmp3[19]).Stack, obj4);
  }
  items4[1] = tmp10Result;
  let tmp14 = !loading;
  if (!loading) {
    tmp14 = !tmp9;
  }
  if (!tmp14) {
    items4[2] = tmp14;
    tmp10Result = !loading;
    if (!loading) {
      tmp10Result = tmp9;
    }
    if (tmp10Result) {
      const obj5 = { hasIcons: true, children: null };
      obj5[1] = memo.map((children) => {
        const callback = children;
        let tmp2Result;
        if (null != outer1_10[children.method]) {
          let obj = { IconComponent: null, variant: "secondary" };
          obj[0] = tmp;
          tmp2Result = tmp2(tmp3(tmp4[29]).TableRow.Icon, obj);
        }
        obj = { arrow: true, icon: tmp2Result, label: children.title, subLabel: null, onPress: null };
        obj = { variant: "text-sm/normal", color: "text-muted", children: children.description };
        const items = [outer1_8(callback(first[21]).Text, obj), ];
        tmp2Result = null != children.providedBy;
        if (tmp2Result) {
          const obj1 = { variant: "text-sm/normal", color: "text-subtle", children: null };
          obj1[2] = children.providedBy;
          tmp2Result = tmp2(tmp3(tmp4[21]).Text, obj1);
        }
        items[1] = tmp2Result;
        obj[3] = outer1_9(callback(first[19]).Stack, { direction: "vertical", spacing: 4, children: items });
        obj[4] = function onPress() {
          outer1_6(closure_0);
        };
        return outer1_8(callback(first[29]).TableRow, obj, "" + children.method + "-" + children.vendor);
      });
      tmp10Result = tmp10(tmp2(tmp3[28]).TableRowGroup, obj5);
    }
    const obj6 = { children: null };
    obj7 = { children: null };
    items4[3] = tmp10Result;
    obj[3] = items4;
    obj7[0] = callback3(_require(first[19]).Stack, obj);
    obj6[0] = tmp10(_require(first[18]).ModalContent, obj7);
    return tmp10(_require(first[17]).ModalScreen, obj6);
  } else {
    const obj8 = { style: null, children: null };
    obj8[0] = tmp.emptyContainer;
    obj9 = { messageType: null, button: null, children: null };
    obj9[0] = tmp2(tmp3[24]).HelpMessageTypes.ERROR;
    const obj10 = { variant: "primary", size: "sm", text: null, onPress: null };
    const intl = tmp2(tmp3[26]).intl;
    obj10[2] = intl.string(methods(tmp3[27]).hDvmYP);
    obj10[3] = refetch;
    obj9[1] = tmp10(tmp2(tmp3[25]).Button, obj10);
    const intl2 = tmp2(tmp3[26]).intl;
    const tmp16 = methods(tmp3[27]);
    obj9[2] = intl2.string(error ? tmp16.Bkmk4Y : tmp16.cR6336);
    obj9 = tmp10(tmp2(tmp3[24]).HelpMessage, obj9);
    obj8[1] = obj9;
    tmp10(tmp2(tmp3[19]).Stack, obj8);
  }
}
function MethodErrorScreen() {
  let obj = { children: null };
  obj = { children: null };
  obj = { style: callback4().errorMessage, children: null };
  const obj1 = { messageType: null, children: null };
  obj1[0] = require(1297) /* Button */.HelpMessageTypes.ERROR;
  const intl = require(1236) /* getSystemLocale */.intl;
  obj1[1] = intl.string(importDefault(2741)["1RD2jW"]);
  obj[1] = callback2(require(1297) /* Button */.HelpMessage, obj1);
  obj[0] = callback2(require(4598) /* Stack */.Stack, obj);
  obj[0] = callback2(require(6781) /* ModalContent */.ModalContent, obj);
  return callback2(require(6780) /* ModalScreen */.ModalScreen, obj);
}
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let obj = {};
obj[require("create").AgeAssuranceMethod.GOOGLE_WALLET] = require("WalletIcon").WalletIcon;
obj[require("create").AgeAssuranceMethod.FACIAL_AGE_ESTIMATION] = require("UserCircleIcon").UserCircleIcon;
obj[require("create").AgeAssuranceMethod.ID_SELFIE_MATCH] = require("IdIcon").IdIcon;
obj = { headerStyle: null, container: null, header: null, loadingContainer: null, emptyContainer: null, errorMessage: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
obj[0] = obj;
obj[1] = { alignSelf: "stretch" };
obj[2] = { textAlign: "center" };
createCacheKey = { marginTop: require("Themes").space.PX_24 };
obj[3] = createCacheKey;
obj[4] = { marginTop: require("Themes").space.PX_24 };
let obj2 = { marginTop: require("Themes").space.PX_24 };
obj[5] = { marginTop: require("Themes").space.PX_24 };
let closure_11 = createCacheKey.createStyles(obj);
let closure_12 = { METHODS: "METHODS", GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION", METHOD_ERROR: "METHOD_ERROR" };
let obj3 = { marginTop: require("Themes").space.PX_24 };
let result = require("noop").fileFinishedImporting("modules/age_assurance/native/AgeVerificationExpressiveV2Modal.tsx");

export default function AgeVerificationExpressiveV2Modal(entryPoint) {
  entryPoint = entryPoint.entryPoint;
  const onClose = entryPoint.onClose;
  let dependencyMap;
  let memo;
  const tmp = callback4();
  dependencyMap = tmp;
  memo = React.useMemo(() => entryPoint(_undefined[33]).v4(), []);
  const items = [tmp, memo, entryPoint, onClose];
  const memo1 = React.useMemo(() => {
    let closure_0 = closeModal;
    let closure_1 = closure_0;
    const _undefined = closure_1;
    closeModal = function closeModal() {
      let arr = callback(4395);
      arr = arr.pop();
      dependencyMap();
    };
    let obj = {};
    obj = {
      headerStyle: _undefined.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    obj[2] = entryPoint(_undefined[31]).getHeaderCloseButton(closeModal);
    obj[3] = function render(arg0, navigation) {
      return outer1_8(outer1_13, { entryPoint: closure_1, navigation, onClose: closeModal });
    };
    obj[outer1_12.METHODS] = obj;
    obj = {
      headerStyle: _undefined.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    const obj3 = entryPoint(_undefined[31]);
    obj[2] = entryPoint(_undefined[31]).getHeaderBackButton();
    obj[3] = function render() {
      return outer1_8(callback(7613), { onClose: closeModal, modalSessionId: closure_0 });
    };
    obj[outer1_12.GOOGLE_WALLET_VERIFICATION] = obj;
    const obj1 = {
      headerStyle: _undefined.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    const obj5 = entryPoint(_undefined[31]);
    obj1[2] = entryPoint(_undefined[31]).getHeaderBackButton();
    obj1[3] = function render() {
      return callback2(closure_14, {});
    };
    obj[outer1_12.METHOD_ERROR] = obj1;
    return obj;
  }, items);
  let obj = { screens: memo1, initialRouteName: constants.METHODS, headerBackTitle: null };
  const intl = entryPoint(1236).intl;
  obj[2] = intl.string(entryPoint(1236).t["13/7kX"]);
  return callback2(entryPoint(5570).Navigator, obj);
};
