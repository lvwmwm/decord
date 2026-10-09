// Module ID: 17584
// Function ID: 17585
// Name: IncentivizedAccountLinkConfirmationBottomSheet
// Dependencies: [19, 5080, 1085, 21, 558, 576, 504, 5055, 4765, 2127, 6163, 16151, 1382, 8993, 16152, 5376, 1126, 12822, 587, 3341, 10290, 2]

// Module 17584 (IncentivizedAccountLinkConfirmationBottomSheet)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import _modDef3341 from "module_3341" /* 3341 */;
import LinkingDefault from "Linking" /* 4765 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import FastImageDefault from "FastImage" /* 6163 */;
import APNGDecorationNativeComponentDefault from "APNGDecorationNativeComponent" /* 8993 */;
import PromoSheet2 from "PromoSheet" /* 10290 */;
import _modDef16151 from "module_16151" /* 16151 */;
import _modDef16152 from "module_16152" /* 16152 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
let c6 = 150;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function IncentivizedAccountLinkConfirmationBottomSheet() {
  let obj6;
  let size1;
  let size2;
  let tmp10;
  let tmp22;
  let tmp26;
  let tmp27;
  let tmp31;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  let obj = react2;
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function l() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    function handleTakeAction() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const openURL = LinkingDefault.openURL;
      LinkingDefault;
      const obj2 = HelpdeskUtilsDefault;
      openURL(obj2.getArticleURL(constants.IN_GAME_FEATURES));
    }
    cResult[2] = handleTakeAction;
    tmp8 = handleTakeAction;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    function handleDismiss() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
    cResult[3] = handleDismiss;
    tmp9 = handleDismiss;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    let tmp11Result;
    if (stateFromStores) {
      const obj3 = { uri: _modDef16151 };
      FastImageDefault;
      size = { width: v150, height: v150 };
      tmp11Result = <tmp20 source={obj3} style={size} />;
    } else {
      const tmpResult2 = PlatformUtils;
      if (tmpResult2.isAndroid()) {
        const obj4 = { url: _modDef16152, style: size1 };
        size1 = { width: v150, height: v150 };
        const tmp12Result = APNGDecorationNativeComponentDefault;
        tmp11Result = tmp11(tmp12Result, obj4);
      } else {
        const obj5 = { source: obj6, resizeMode: "contain", style: size2 };
        obj6 = { uri: _modDef16152 };
        size2 = { width: v150, height: v150 };
        const tmp12Result2 = FastImageDefault;
        tmp11Result = tmp11(tmp12Result2, obj5);
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = tmp11Result;
    tmp10 = tmp11Result;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const Button = tmp(5376).Button;
    const intl = tmp(1126).intl;
    ({ size: "sm", color: nativeDefault.colors.WHITE });
    const WindowLaunchIcon = tmp(12822).WindowLaunchIcon;
    const tmp25 = <Button text={intl.string(intl4.t.aRIFWD)} icon={null} iconPosition="end" size="lg" onPress={tmp8} />;
    cResult[6] = tmp25;
    tmp22 = tmp25;
  } else {
    tmp22 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(_modDef3341.ublzTG);
    const intl3 = tmp(1126).intl;
    const stringResult1 = intl3.string(_modDef3341.JgM2xu);
    cResult[7] = stringResult;
    cResult[8] = stringResult1;
    tmp27 = stringResult1;
    tmp26 = stringResult;
  } else {
    tmp26 = cResult[7];
    tmp27 = cResult[8];
  }
  if (cResult[9] !== tmp10) {
    const tmp33 = jsx(PromoSheet2.PromoSheet, { title: tmp26, description: tmp27, actions: tmp22, illustration: tmp10, onDismiss: tmp9 });
    cResult[9] = tmp10;
    cResult[10] = tmp33;
    tmp31 = tmp33;
  } else {
    tmp31 = cResult[10];
  }
  return tmp31;
}) : (function IncentivizedAccountLinkConfirmationBottomSheet() {
  let WindowLaunchIcon;
  let intl;
  let intl2;
  let intl3;
  let obj6;
  let obj8;
  let size1;
  let size2;
  let tmp3Result;
  let tmp8;
  let tmp9;
  let tmp9Result;
  let useReducedMotion;
  let obj = get_initialized;
  const items = [AccessibilityStore];
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    const obj3 = { uri: _modDef16151 };
    FastImageDefault;
    size = { width: v150, height: v150 };
    tmp3Result = <tmp14 source={obj3} style={size} />;
    tmp8 = importDefault;
    tmp9 = jsx;
  } else {
    const tmpResult = PlatformUtils;
    if (tmpResult.isAndroid()) {
      const obj4 = { url: _modDef16152, style: size1 };
      size1 = { width: v150, height: v150 };
      const tmp4Result = APNGDecorationNativeComponentDefault;
      tmp3Result = tmp3(tmp4Result, obj4);
      tmp8 = tmp4;
      tmp9 = tmp3;
    } else {
      const obj5 = { source: obj6, resizeMode: "contain", style: size2 };
      obj6 = { uri: _modDef16152 };
      size2 = { width: v150, height: v150 };
      const tmp4Result2 = FastImageDefault;
      tmp3Result = tmp3(tmp4Result2, obj5);
      tmp8 = tmp4;
      tmp9 = tmp3;
    }
  }
  const obj7 = {
    text: intl.string(intl4.t.aRIFWD),
    icon: tmp9(WindowLaunchIcon, obj8),
    iconPosition: "end",
    size: "lg",
    onPress: function handleTakeAction() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const openURL = LinkingDefault.openURL;
      LinkingDefault;
      const obj2 = HelpdeskUtilsDefault;
      openURL(obj2.getArticleURL(constants.IN_GAME_FEATURES));
    }
  };
  const Button = tmp(5376).Button;
  intl = tmp(1126).intl;
  obj8 = { size: "sm", color: tmp8(587).colors.WHITE };
  WindowLaunchIcon = tmp(12822).WindowLaunchIcon;
  const obj9 = {
    title: intl2.string(tmp8(3341).ublzTG),
    description: intl3.string(tmp8(3341).JgM2xu),
    actions: tmp9Result,
    illustration: tmp3Result,
    onDismiss: function handleDismiss() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  tmp9Result = tmp9(Button, obj7);
  const PromoSheet = tmp(10290).PromoSheet;
  intl2 = tmp(1126).intl;
  intl3 = tmp(1126).intl;
  return tmp9(PromoSheet, obj9);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default tmp3;
