// Module ID: 15297
// Function ID: 15298
// Name: BalanceWidgetMenu
// Dependencies: [19, 1074, 1076, 2042, 5756, 21, 5917, 4832, 1115, 10088, 2029, 1241, 10678, 5759, 15298, 8315, 4800, 10564, 1981, 6603, 6961, 10563, 4654, 5297, 2]
// Exports: default

// Module 15297 (BalanceWidgetMenu)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import intl3 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import TableRow2 from "TableRow" /* 5917 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import _mod8315 from "module_8315" /* 8315 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10088 */;
import BalanceWidgetPillButtonDefault from "BalanceWidgetPillButton" /* 10563 */;
import QuestUtils from "QuestUtils" /* 10678 */;
import react from "react" /* 19 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
function OrbsBalanceRow(isBusy) {
  let accessibilityLabel;
  let intl;
  let obj3;
  let onPress;
  let trailing;
  let flag = isBusy.isBusy;
  ({ onPress, accessibilityLabel, trailing } = isBusy);
  if (flag === undefined) {
    flag = false;
  }
  const obj = { label: null, accessibilityLabel, accessibilityState: obj3, onPress, trailing, start: true, end: true };
  const TableRow = TableRow2.TableRow;
  ({ variant: "text-sm/semibold", color: "text-default", children: intl.string(intl3.t.gGtZpz) });
  const Text = Text_Text.Text;
  intl = intl3.intl;
  obj3 = undefined;
  const tmp = jsx;
  if (flag) {
    obj3 = { busy: true };
  }
  return tmp(TableRow, obj);
}
class OrbsOnboardingMenuDismissibleContent {
  constructor() {
    let constants2;
    let constants3;
    const tmp = SelectedDismissibleContentDefault;
    const items = [dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL];
    return <tmp contentTypes={items} groupName={metroImportDefault.VIRTUAL_CURRENCY_MOBILE_ONBOARDING}>{function children(markAsDismissed) {
      let intl;
      markAsDismissed = markAsDismissed.markAsDismissed;
      if (markAsDismissed.visibleContent === markAsDismissed(closure_2[10]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL) {
        let obj = {
          accessibilityLabel: intl.string(tmp(closure_2[8]).t.Kt2QDh),
          onPress() {
              markAsDismissed(constants2.TAKE_ACTION);
              const obj = AnalyticsUtilsDefault;
              obj.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
              const obj2 = QuestUtils;
              const obj3 = { filter: constants3.VIRTUAL_CURRENCY, fromContent: QuestTypes.QuestContent.MOBILE_ORBS_ONBOARDING_DC };
              obj2.openQuestHome(obj3);
            },
          trailing: closure_9(closure_1(closure_2[14]), {})
        };
        intl = tmp(tmp2[8]).intl;
        return closure_9(closure_10, obj);
      } else {
        return null;
      }
    }}</tmp>;
  }
}
function BalanceWidgetMenu() {
  let constants2;
  let constants3;
  let str;
  let obj = str(8315);
  str = obj.useFetchVirtualCurrencyBalance().balance;
  let items = [str];
  const callback = react.useCallback(() => {
    let balance;
    let intl;
    let intl2;
    let obj3;
    let obj4;
    let paths;
    let obj = AnalyticsUtilsDefault;
    obj.track(AnalyticEvents.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
    let obj2 = { balance: str, primaryButtonConfig: obj3, secondaryButtonConfig: obj4, source: AnalyticsLocationDefault.YOU_SCREEN };
    obj3 = {
      buttonText: intl.string(intl3.t.WrzJBf),
      onButtonPress() {
        let items;
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type: "GO_TO_SHOP", source: AnalyticsLocationDefault.YOU_SCREEN, balance };
        obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj2);
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.hideActionSheet();
        const obj4 = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP, screen: constants2.ORBS };
        const openCollectiblesShopMobile = str(dependencyMap[20]).openCollectiblesShopMobile;
        items = [];
        str(dependencyMap[20]);
        items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
        const result = openCollectiblesShopMobile(obj4);
      }
    };
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    intl = intl3.intl;
    obj4 = {
      buttonText: intl2.string(intl3.t.SymzJC),
      onButtonPress() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type: "GO_TO_QUEST_HOME", source: AnalyticsLocationDefault.YOU_SCREEN, balance };
        obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj2);
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.hideActionSheet();
        const obj4 = str(dependencyMap[12]);
        const obj5 = { mergeExistingRoutes: true, filter: constants3.VIRTUAL_CURRENCY, fromContent: str(dependencyMap[13]).QuestContent.ORBS_BALANCE_MENU };
        obj4.openQuestHome(obj5);
      }
    };
    intl2 = intl3.intl;
    openLazy(() => {
      const promise = balance(paths[18])(paths[17], paths.paths);
      return promise.then((result) => result.default);
    }, "BalanceWidgetMenu", obj2);
  }, items);
  const tmp3 = jsx;
  let intl = str(1115).intl;
  const formatToPlainString = intl.formatToPlainString;
  let str2;
  const zPaLL9 = str(1115).t.zPaLL9;
  const tmp4 = OrbsBalanceRow;
  if (str != null) {
    str2 = str.toString();
  }
  if (str2 == null) {
    str2 = "";
  }
  let obj2 = { accessibilityLabel: formatToPlainString(zPaLL9, { balance: str2 }), onPress: callback, trailing: tmp3(BalanceWidgetPillButtonDefault, { balance: str, onPress: callback, accessible: false }) };
  return tmp3(tmp4, obj2);
}
const AnalyticEvents = Constants.AnalyticEvents;
let closure_5 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ ContentDismissActionType: metroRequire, DismissibleContentGroupName: metroImportDefault } = DismissibleContentConstants);
const RewardFilterTypes = QuestConstants.RewardFilterTypes;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetMenu.tsx");

export default function BalanceWidgetMenuWrapper() {
  let tmp5Result;
  const obj = _mod8315;
  const balance = obj.useFetchVirtualCurrencyBalance().balance;
  DismissibleContentUnsafeUtils;
  if (null == balance) {
    const intl = tmp(1115).intl;
    tmp5Result = <OrbsBalanceRow accessibilityLabel={intl.string(intl3.t.cKwv4k)} trailing={null} isBusy />;
  } else {
    if (balance <= 0) {
      let tmp6;
      if (!tmp4) {
        tmp6 = OrbsOnboardingMenuDismissibleContent;
      }
      tmp5Result = tmp5(tmp6, {});
    }
    tmp6 = BalanceWidgetMenu;
  }
  return tmp5Result;
};
export { OrbsOnboardingMenuDismissibleContent };
