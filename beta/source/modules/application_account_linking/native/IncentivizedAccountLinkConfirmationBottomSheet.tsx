// Module ID: 17410
// Function ID: 17411
// Name: IncentivizedAccountLinkConfirmationBottomSheet
// Dependencies: [19, 17, 4748, 1074, 21, 504, 16157, 1364, 9090, 16158, 5804, 5186, 1115, 13249, 576, 4723, 4451, 2108, 10488, 3226, 2]
// Exports: default

// Module 17410 (IncentivizedAccountLinkConfirmationBottomSheet)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import LinkingDefault from "Linking" /* 4451 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import components_Button_Button from "components/Button/Button" /* 5186 */;
import PromoSheet from "PromoSheet" /* 10488 */;
import WindowLaunchIcon from "WindowLaunchIcon" /* 13249 */;
import _modDef16157 from "module_16157" /* 16157 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;

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
    const obj3 = { uri: _modDef16157 };
    obj2.source = obj3;
    const size = { width: v150, height: v150 };
    obj2.style = size;
    let tmp3Result = <Image source={null} style={null} />;
    let tmp8 = importDefault;
    let tmp9 = jsx;
  } else {
    if (tmpResult.isAndroid()) {
      const obj4 = { url: tmp4(16158), style: null };
      const size1 = { width: v150, height: v150 };
      obj4.style = size1;
      tmp3Result = tmp3(tmp4(9090), obj4);
      tmp8 = tmp4;
      tmp9 = tmp3;
      const tmp4Result = tmp4(9090);
    } else {
      const obj5 = { source: null, resizeMode: "contain", style: null };
      const obj6 = { uri: tmp4(16158) };
      obj5.source = obj6;
      const size2 = { width: v150, height: v150 };
      obj5.style = size2;
      tmp3Result = tmp3(tmp4(5804), obj5);
      tmp8 = tmp4;
      tmp9 = tmp3;
      const tmp4Result2 = tmp4(5804);
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
  obj9.title = intl2.string(tmp8(3226).ublzTG);
  const intl3 = tmp(1115).intl;
  obj9.description = intl3.string(tmp8(3226).JgM2xu);
  obj9.actions = tmp9(components_Button_Button.Button, obj7);
  obj9.illustration = tmp3Result;
  obj9.onDismiss = function onDismiss() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return tmp9(PromoSheet.PromoSheet, obj9);
};
