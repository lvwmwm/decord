// Module ID: 6714
// Function ID: 59258
// Name: MethodsScreen
// Dependencies: [5, 57, 31, 27, 653, 33, 1868, 6715, 6717, 6719, 4131, 689, 6698, 6721, 6723, 4348, 6722, 6725, 6726, 4542, 6727, 4127, 6690, 1921, 1212, 2717, 4966, 4544, 5501, 5164, 4338, 5087, 7556, 491, 5517, 2]
// Exports: default

// Module 6714 (MethodsScreen)
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import HeaderBackImage from "HeaderBackImage";
import { ActivityIndicator } from "Button";
import { HelpdeskArticles } from "ME";
import jsxProd from "v1";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
function MethodsScreen(onComplete) {
  let entryPoint;
  let error;
  let loading;
  let methods;
  let navigation;
  let refetch;
  ({ entryPoint, navigation } = onComplete);
  const tmp = callback3();
  let obj = navigation(first[12]);
  const isSuspendedUser = obj.useIsSuspendedUser();
  let obj1 = navigation(first[13]);
  const ageVerificationMethodsV2 = obj1.useAgeVerificationMethodsV2();
  ({ loading, methods } = ageVerificationMethodsV2);
  ({ error, refetch } = ageVerificationMethodsV2);
  const tmp4 = initiateAgeVerification(React.useState(false), 2);
  first = tmp4[0];
  let closure_3 = tmp4[1];
  const effect = React.useEffect(() => {
    let c0 = false;
    const result = navigation(first[14]).checkGoogleWalletAvailable();
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
  const memo = React.useMemo(() => methods.filter((method) => method.method !== navigation(first[6]).AgeAssuranceMethod.GOOGLE_WALLET || outer1_2), items);
  let obj2 = navigation(first[15]);
  initiateAgeVerification = obj2.useInitiateAgeVerification({ onComplete: onComplete.onClose, entryPoint, shouldShowExpressiveModal: true }).initiateAgeVerification;
  React = React.useRef(false);
  const items1 = [navigation, initiateAgeVerification];
  let closure_6 = React.useCallback((() => {
    let closure_0 = callback(async (arg0) => {
      if (!outer2_5.current) {
        if (arg0.method !== navigation(first[6]).AgeAssuranceMethod.GOOGLE_WALLET) {
          const tmp8 = navigation(first[16]).V2_METHOD_TO_VERIFICATION_METHOD[arg0.method];
          const tmp10 = navigation(first[16]).V2_VENDOR_TO_VERIFICATION_VENDOR[arg0.vendor];
          if (null != tmp8) {
            if (null != tmp10) {
              outer2_5.current = true;
              yield outer2_4(tmp8, tmp10);
              outer2_5.current = false;
            }
          }
          navigation.navigate(outer3_12.METHOD_ERROR);
        } else {
          navigation.navigate(outer3_12.GOOGLE_WALLET_VERIFICATION);
        }
      }
    });
    return function() {
      return callback(...arguments);
    };
  })(), items1);
  obj = {};
  obj = {};
  obj1 = { align: "stretch", spacing: 24 };
  let num = 24;
  obj1.style = tmp.container;
  obj2 = { align: "center", justify: "center", spacing: 16 };
  const items2 = [callback(navigation(first[20]).AgeVerificationSpotIllustration, { width: 150, height: 100 }), ];
  const obj3 = { align: "center", justify: "center", spacing: 8 };
  const obj4 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary" };
  let obj9 = navigation(first[15]);
  obj4.children = obj9.getAgeVerificationGetStartedTitle(entryPoint);
  const items3 = [callback(navigation(first[21]).Text, obj4), ];
  const obj5 = { variant: "text-md/medium", color: "text-strong", style: tmp.header };
  let obj11 = navigation(first[15]);
  obj5.children = obj11.getAgeVerificationGetStartedSubtitle(entryPoint, () => {
    const obj = methods(first[22]);
    obj.openUrl(methods(first[23]).getArticleURL(outer1_7.TIGGER_PAWTECT_LEARN_MORE));
  }, isSuspendedUser);
  items3[1] = callback(navigation(first[21]).Text, obj5);
  obj3.children = items3;
  items2[1] = callback2(navigation(first[19]).Stack, obj3);
  obj2.children = items2;
  const items4 = [callback2(navigation(first[19]).Stack, obj2), , , ];
  let tmp11 = loading;
  if (loading) {
    const obj6 = { align: "center", justify: "center", style: tmp.loadingContainer };
    const obj7 = { size: "large" };
    obj6.children = callback(closure_6, obj7);
    tmp11 = callback(navigation(first[19]).Stack, obj6);
  }
  items4[1] = tmp11;
  if (!(!loading && memo.length <= 0)) {
    items4[2] = tmp17;
    let tmp30 = !loading && tmp7;
    if (tmp30) {
      const obj8 = {
        hasIcons: true,
        children: memo.map((title) => {
              let closure_0 = title;
              let obj = { arrow: true };
              let tmp3;
              if (null != outer1_10[title.method]) {
                obj = { IconComponent: tmp, variant: "secondary" };
                tmp3 = outer1_8(navigation(first[29]).TableRow.Icon, obj);
              }
              obj.icon = tmp3;
              obj.label = title.title;
              obj = { direction: "vertical", spacing: 4 };
              const obj1 = { variant: "text-sm/normal", color: "text-muted", children: title.description };
              const items = [outer1_8(navigation(first[21]).Text, obj1), ];
              let tmp8 = null != title.providedBy;
              if (tmp8) {
                const obj2 = { variant: "text-sm/normal", color: "text-subtle", children: title.providedBy };
                tmp8 = outer1_8(navigation(first[21]).Text, obj2);
              }
              items[1] = tmp8;
              obj.children = items;
              obj.subLabel = outer1_9(navigation(first[19]).Stack, obj);
              obj.onPress = function onPress() {
                outer1_6(closure_0);
              };
              return outer1_8(navigation(first[29]).TableRow, obj, "" + title.method + "-" + title.vendor);
            })
      };
      tmp30 = callback(navigation(first[28]).TableRowGroup, obj8);
    }
    items4[3] = tmp30;
    obj1.children = items4;
    obj.children = callback2(navigation(first[19]).Stack, obj1);
    obj.children = callback(navigation(first[18]).ModalContent, obj);
    return callback(navigation(first[17]).ModalScreen, obj);
  } else {
    obj9 = { direction: "vertical", align: "center", spacing: 16, style: tmp.emptyContainer };
    let ButtonGroup = callback;
    let Text = navigation(first[21]).Text;
    let obj10 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.emptyText };
    let Button = navigation(first[num]).intl;
    let string = Button.string;
    let tmp23 = methods(first[25]);
    obj10.children = string(error ? tmp23.Bkmk4Y : tmp23.cR6336);
    obj10 = [, ];
    obj10[0] = ButtonGroup(Text, obj10);
    ButtonGroup = navigation(first[26]).ButtonGroup;
    obj11 = {};
    tmp23 = callback;
    Button = navigation(first[27]).Button;
    const obj12 = { variant: "primary", size: "lg" };
    const intl = navigation(first[num]).intl;
    num = intl.string;
    obj12.text = num(methods(first[25]).hDvmYP);
    obj12.onPress = refetch;
    string = callback(Button, obj12);
    obj11.children = string;
    Text = callback(ButtonGroup, obj11);
    obj10[1] = Text;
    obj9.children = obj10;
    callback2(navigation(first[19]).Stack, obj9);
    const ButtonGroupResult = ButtonGroup(Text, obj10);
    const tmp18 = callback2;
  }
}
function MethodErrorScreen() {
  let obj = {};
  obj = {};
  obj = { variant: "text-md/normal", color: "text-default", style: callback3().errorMessage };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(importDefault(2717)["1RD2jW"]);
  obj.children = callback(require(4127) /* Text */.Text, obj);
  obj.children = callback(require(6726) /* ModalContent */.ModalContent, obj);
  return callback(require(6725) /* ModalScreen */.ModalScreen, obj);
}
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = {};
obj[require("_callSuper").AgeAssuranceMethod.GOOGLE_WALLET] = require("WalletIcon").WalletIcon;
obj[require("_callSuper").AgeAssuranceMethod.FACIAL_AGE_ESTIMATION] = require("UserCircleIcon").UserCircleIcon;
obj[require("_callSuper").AgeAssuranceMethod.ID_SELFIE_MATCH] = require("IdIcon").IdIcon;
obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
obj.headerStyle = obj;
obj.container = { alignSelf: "stretch" };
obj.header = { textAlign: "center" };
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj.loadingContainer = _createForOfIteratorHelperLoose;
obj.emptyContainer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj.emptyText = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_40, textAlign: "center" };
let obj3 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_40, textAlign: "center" };
obj.errorMessage = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, textAlign: "center" };
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_12 = { METHODS: "METHODS", GOOGLE_WALLET_VERIFICATION: "GOOGLE_WALLET_VERIFICATION", METHOD_ERROR: "METHOD_ERROR" };
let obj4 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, textAlign: "center" };
let result = require("result").fileFinishedImporting("modules/age_assurance/native/AgeVerificationExpressiveV2Modal.tsx");

export default function AgeVerificationExpressiveV2Modal(entryPoint) {
  entryPoint = entryPoint.entryPoint;
  const onClose = entryPoint.onClose;
  const tmp = callback3();
  let dependencyMap = tmp;
  const memo = React.useMemo(() => entryPoint(tmp[33]).v4(), []);
  const items = [tmp, memo, entryPoint, onClose];
  const memo1 = React.useMemo(() => (function getScreens(closure_2, memo, entryPoint, onClose) {
    let closure_0 = memo;
    let closure_1 = entryPoint;
    const dependencyMap = onClose;
    function closeModal() {
      let arr = onClose(onClose[30]);
      arr = arr.pop();
      onClose();
    }
    let obj = {};
    obj = {
      headerStyle: closure_2.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: entryPoint(5087).getHeaderCloseButton(closeModal),
      render(arg0, navigation) {
        return outer3_8(outer3_13, { entryPoint: closure_1, navigation, onClose: closeModal });
      }
    };
    obj[outer2_12.METHODS] = obj;
    obj = {
      headerStyle: closure_2.headerStyle,
      headerTitle() {
        return null;
      }
    };
    const obj3 = entryPoint(5087);
    obj.headerLeft = entryPoint(5087).getHeaderBackButton();
    obj.render = function render() {
      return outer3_8(onClose(onClose[32]), { onClose: closeModal, modalSessionId: closure_0 });
    };
    obj[outer2_12.GOOGLE_WALLET_VERIFICATION] = obj;
    const obj1 = {
      headerStyle: closure_2.headerStyle,
      headerTitle() {
        return null;
      }
    };
    const obj5 = entryPoint(5087);
    obj1.headerLeft = entryPoint(5087).getHeaderBackButton();
    obj1.render = function render() {
      return outer3_8(outer3_14, {});
    };
    obj[outer2_12.METHOD_ERROR] = obj1;
    return obj;
  })(closure_2, memo, entryPoint, onClose), items);
  let obj = { screens: memo1, initialRouteName: constants.METHODS };
  const intl = entryPoint(1212).intl;
  obj.headerBackTitle = intl.string(entryPoint(1212).t["13/7kX"]);
  return callback(entryPoint(5517).Navigator, obj);
};
