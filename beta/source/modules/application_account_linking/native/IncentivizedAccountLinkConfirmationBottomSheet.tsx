// Module ID: 16767
// Function ID: 16768
// Name: IncentivizedAccountLinkConfirmationBottomSheet
// Dependencies: [19, 17, 4825, 1074, 21, 504, 15449, 1364, 8272, 15450, 5899, 5281, 1115, 12512, 576, 4800, 4525, 2111, 9691, 3263, 2]
// Exports: default

// Module 16767 (IncentivizedAccountLinkConfirmationBottomSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import LinkingDefault from "Linking" /* 4525 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import FastImageDefault from "FastImage" /* 5899 */;
import APNGDecorationNativeComponentDefault from "APNGDecorationNativeComponent" /* 8272 */;
import _modDef15449 from "module_15449" /* 15449 */;
import _modDef15450 from "module_15450" /* 15450 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size_mod from "module_2" /* 2 */;

const Image = react_native.Image;
const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
let c7 = 150;
let size = size_mod;
const result = size.fileFinishedImporting("modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default function IncentivizedAccountLinkConfirmationBottomSheet() {
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
    tmp3Result = <Image source={{ uri: _modDef15449 }} style={size} />;
    tmp8 = importDefault;
    tmp9 = jsx;
    const obj3 = { uri: _modDef15449 };
  } else {
    const tmpResult = PlatformUtils;
    if (tmpResult.isAndroid()) {
      const obj4 = { url: _modDef15450, style: size1 };
      size1 = { width: v150, height: v150 };
      const tmp4Result = APNGDecorationNativeComponentDefault;
      tmp3Result = tmp3(tmp4Result, obj4);
      tmp8 = tmp4;
      tmp9 = tmp3;
    } else {
      const obj5 = { source: obj6, resizeMode: "contain", style: size2 };
      obj6 = { uri: _modDef15450 };
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
  const Button = tmp(5281).Button;
  intl = tmp(1115).intl;
  obj8 = { size: "sm", color: tmp8(576).colors.WHITE };
  WindowLaunchIcon = tmp(12512).WindowLaunchIcon;
  const obj9 = {
    title: intl2.string(tmp8(3263).ublzTG),
    description: intl3.string(tmp8(3263).JgM2xu),
    actions: tmp9Result,
    illustration: tmp3Result,
    onDismiss() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  tmp9Result = tmp9(Button, obj7);
  const PromoSheet = tmp(9691).PromoSheet;
  intl2 = tmp(1115).intl;
  intl3 = tmp(1115).intl;
  return tmp9(PromoSheet, obj9);
};
