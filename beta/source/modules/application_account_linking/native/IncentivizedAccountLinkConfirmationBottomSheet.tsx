// Module ID: 17415
// Function ID: 17416
// Name: IncentivizedAccountLinkConfirmationBottomSheet
// Dependencies: [19, 17, 4780, 1074, 21, 504, 16160, 1364, 9122, 16161, 5836, 5218, 1115, 13278, 576, 4755, 4483, 2108, 10527, 3258, 2]
// Exports: default

// Module 17415 (IncentivizedAccountLinkConfirmationBottomSheet)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import LinkingDefault from "Linking" /* 4483 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import components_Button_Button from "components/Button/Button" /* 5218 */;
import PromoSheet from "PromoSheet" /* 10527 */;
import WindowLaunchIcon from "WindowLaunchIcon" /* 13278 */;
import _modDef16160 from "module_16160" /* 16160 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4780 */;

require = fn;
const Image = fn(17).Image;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsx = fn(21).jsx;
let c7 = 150;
let size = fn(2);
const result = size.fileFinishedImporting("modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default function IncentivizedAccountLinkConfirmationBottomSheet() {
  const items = [AccessibilityStore];
  if (obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion)) {
    let obj2 = { source: null, style: null };
    const obj3 = { uri: _modDef16160 };
    obj2.source = obj3;
    const size = { width: v150, height: v150 };
    obj2.style = size;
    let tmp3Result = <Image source={null} style={null} />;
    let tmp8 = importDefault;
    let tmp9 = jsx;
  } else {
    if (tmpResult.isAndroid()) {
      const obj4 = { url: tmp4(16161), style: null };
      const size1 = { width: v150, height: v150 };
      obj4.style = size1;
      tmp3Result = tmp3(tmp4(9122), obj4);
      tmp8 = tmp4;
      tmp9 = tmp3;
      const tmp4Result = tmp4(9122);
    } else {
      const obj5 = { source: null, resizeMode: "contain", style: null };
      const obj6 = { uri: tmp4(16161) };
      obj5.source = obj6;
      const size2 = { width: v150, height: v150 };
      obj5.style = size2;
      tmp3Result = tmp3(tmp4(5836), obj5);
      tmp8 = tmp4;
      tmp9 = tmp3;
      const tmp4Result2 = tmp4(5836);
    }
    tmpResult = tmp(1364);
  }
  const obj7 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
  const intl = tmp(1115).intl;
  obj7.text = intl.string(util.t.aRIFWD);
  obj = initialize;
  obj7.icon = tmp9(WindowLaunchIcon.WindowLaunchIcon, { size: "sm", color: tmp8(576).colors.WHITE });
  obj7.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = LinkingDefault;
    obj2.openURL(HelpdeskUtilsDefault.getArticleURL(constants.IN_GAME_FEATURES));
  };
  const obj8 = { size: "sm", color: tmp8(576).colors.WHITE };
  const obj9 = { title: null, description: null, actions: null, illustration: null, onDismiss: null };
  const intl2 = tmp(1115).intl;
  obj9.title = intl2.string(tmp8(3258).ublzTG);
  const intl3 = tmp(1115).intl;
  obj9.description = intl3.string(tmp8(3258).JgM2xu);
  obj9.actions = tmp9(components_Button_Button.Button, obj7);
  obj9.illustration = tmp3Result;
  obj9.onDismiss = function onDismiss() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return tmp9(PromoSheet.PromoSheet, obj9);
};
