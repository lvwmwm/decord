// Module ID: 17124
// Function ID: 17125
// Name: IncentivizedAccountLinkConfirmationBottomSheet
// Dependencies: [19, 17, 4879, 1085, 21, 558, 576, 504, 4854, 4565, 2115, 15741, 1369, 8465, 15742, 5974, 5594, 1126, 12757, 587, 3269, 10045, 2]

// Module 17124 (IncentivizedAccountLinkConfirmationBottomSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import _modDef3269 from "module_3269" /* 3269 */;
import LinkingDefault from "Linking" /* 4565 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import FastImageDefault from "FastImage" /* 5974 */;
import APNGDecorationNativeComponentDefault from "APNGDecorationNativeComponent" /* 8465 */;
import PromoSheet2 from "PromoSheet" /* 10045 */;
import _modDef15741 from "module_15741" /* 15741 */;
import _modDef15742 from "module_15742" /* 15742 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const Image = react_native.Image;
const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
let c7 = 150;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
    const fn = function u() {
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
    const fn2 = function _() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const openURL = LinkingDefault.openURL;
      LinkingDefault;
      const obj2 = HelpdeskUtilsDefault;
      openURL(obj2.getArticleURL(constants.IN_GAME_FEATURES));
    };
    cResult[2] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function f() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    };
    cResult[3] = fn3;
    tmp9 = fn3;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    let tmp11Result;
    if (stateFromStores) {
      size = { width: v150, height: v150 };
      tmp11Result = <Image source={{ uri: _modDef15741 }} style={size} />;
      const obj3 = { uri: _modDef15741 };
    } else {
      const tmpResult2 = PlatformUtils;
      if (tmpResult2.isAndroid()) {
        const obj4 = { url: _modDef15742, style: size1 };
        size1 = { width: v150, height: v150 };
        const tmp12Result = APNGDecorationNativeComponentDefault;
        tmp11Result = tmp11(tmp12Result, obj4);
      } else {
        const obj5 = { source: obj6, resizeMode: "contain", style: size2 };
        obj6 = { uri: _modDef15742 };
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
    const Button = tmp(5594).Button;
    const intl = tmp(1126).intl;
    ({ size: "sm", color: nativeDefault.colors.WHITE });
    const WindowLaunchIcon = tmp(12757).WindowLaunchIcon;
    const tmp25 = <Button text={intl.string(intl4.t.aRIFWD)} icon={null} iconPosition="end" size="lg" onPress={tmp8} />;
    cResult[6] = tmp25;
    tmp22 = tmp25;
  } else {
    tmp22 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(_modDef3269.ublzTG);
    const intl3 = tmp(1126).intl;
    const stringResult1 = intl3.string(_modDef3269.JgM2xu);
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
}) : (() => {
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
    size = { width: v150, height: v150 };
    tmp3Result = <Image source={{ uri: _modDef15741 }} style={size} />;
    tmp8 = importDefault;
    tmp9 = jsx;
    const obj3 = { uri: _modDef15741 };
  } else {
    const tmpResult = PlatformUtils;
    if (tmpResult.isAndroid()) {
      const obj4 = { url: _modDef15742, style: size1 };
      size1 = { width: v150, height: v150 };
      const tmp4Result = APNGDecorationNativeComponentDefault;
      tmp3Result = tmp3(tmp4Result, obj4);
      tmp8 = tmp4;
      tmp9 = tmp3;
    } else {
      const obj5 = { source: obj6, resizeMode: "contain", style: size2 };
      obj6 = { uri: _modDef15742 };
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
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const openURL = LinkingDefault.openURL;
      LinkingDefault;
      const obj2 = HelpdeskUtilsDefault;
      openURL(obj2.getArticleURL(constants.IN_GAME_FEATURES));
    }
  };
  const Button = tmp(5594).Button;
  intl = tmp(1126).intl;
  obj8 = { size: "sm", color: tmp8(587).colors.WHITE };
  WindowLaunchIcon = tmp(12757).WindowLaunchIcon;
  const obj9 = {
    title: intl2.string(tmp8(3269).ublzTG),
    description: intl3.string(tmp8(3269).JgM2xu),
    actions: tmp9Result,
    illustration: tmp3Result,
    onDismiss() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  tmp9Result = tmp9(Button, obj7);
  const PromoSheet = tmp(10045).PromoSheet;
  intl2 = tmp(1126).intl;
  intl3 = tmp(1126).intl;
  return tmp9(PromoSheet, obj9);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default tmp3;
