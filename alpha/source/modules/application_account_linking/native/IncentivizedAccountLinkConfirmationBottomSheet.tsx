// Module ID: 19881
// Function ID: 19882
// Name: IncentivizedAccountLinkConfirmationBottomSheet
// Dependencies: [19, 1072, 21, 19882, 1113, 3581, 5930, 10757, 575, 5546, 6006, 2188, 2]
// Exports: default

// Module 19881 (IncentivizedAccountLinkConfirmationBottomSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2188 */;
import _modDef3581 from "module_3581" /* 3581 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import components_Button_Button from "components/Button/Button" /* 5930 */;
import LinkingDefault from "Linking" /* 6006 */;
import WindowLaunchIcon2 from "WindowLaunchIcon" /* 10757 */;
import IncentivizedAccountLinkConfirmationPromoSheetDefault from "IncentivizedAccountLinkConfirmationPromoSheet" /* 19882 */;
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
  return <tmp title={intl.formatToPlainString(_modDef3581.g56Cg0, { orbCount })} description={intl2.string(_modDef3581["Mh/Ooc"])} actions={null} />;
};
