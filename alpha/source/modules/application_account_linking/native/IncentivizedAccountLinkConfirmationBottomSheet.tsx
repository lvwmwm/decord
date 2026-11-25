// Module ID: 19245
// Function ID: 19246
// Name: IncentivizedAccountLinkConfirmationBottomSheet
// Dependencies: [19, 1071, 21, 19246, 1112, 3756, 5610, 14051, 575, 5226, 5691, 2187, 2]
// Exports: default

// Module 19245 (IncentivizedAccountLinkConfirmationBottomSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import intl4 from "intl" /* 1112 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2187 */;
import _modDef3756 from "module_3756" /* 3756 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import components_Button_Button from "components/Button/Button" /* 5610 */;
import LinkingDefault from "Linking" /* 5691 */;
import WindowLaunchIcon2 from "WindowLaunchIcon" /* 14051 */;
import IncentivizedAccountLinkConfirmationPromoSheetDefault from "IncentivizedAccountLinkConfirmationPromoSheet" /* 19246 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/application_account_linking/native/IncentivizedAccountLinkConfirmationBottomSheet.tsx");

export default function IncentivizedAccountLinkConfirmationBottomSheet(orbCount) {
  let intl3;
  orbCount = orbCount.orbCount;
  IncentivizedAccountLinkConfirmationPromoSheetDefault;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  let obj2 = {
    text: intl3.string(intl4.t.aRIFWD),
    icon: null,
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
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  ({ size: "sm", color: nativeDefault.colors.WHITE });
  const WindowLaunchIcon = WindowLaunchIcon2.WindowLaunchIcon;
  return <tmp title={intl.formatToPlainString(_modDef3756.g56Cg0, { orbCount })} description={intl2.string(_modDef3756["Mh/Ooc"])} actions={null} />;
};
