// Module ID: 17694
// Function ID: 17695
// Name: BalanceWidgetMenu
// Dependencies: [19, 1072, 1074, 4860, 6781, 21, 6975, 5624, 1113, 10520, 4847, 1252, 9678, 6784, 17695, 9553, 16887, 7351, 5258, 7719, 17696, 14497, 5044, 5647, 2]
// Exports: default

// Module 17694 (BalanceWidgetMenu)
import Fragment from "Fragment" /* 21 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import intl3 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5044 */;
import Text_Text from "Text/Text" /* 5624 */;
import QuestConstants from "QuestConstants" /* 6781 */;
import QuestTypes from "QuestTypes" /* 6784 */;
import TableRow2 from "TableRow" /* 6975 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import _mod9553 from "module_9553" /* 9553 */;
import QuestUtils from "QuestUtils" /* 9678 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10520 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
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
    const tmp = SelectedDismissibleContentDefault;
    const items = [dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL];
    return <tmp contentTypes={items} groupName={metroImportAll.VIRTUAL_CURRENCY_MOBILE_ONBOARDING}>{function children(markAsDismissed) {
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
          trailing: closure_10(closure_1(closure_2[14]), {})
        };
        intl = tmp(tmp2[8]).intl;
        return closure_10(closure_11, obj);
      } else {
        return null;
      }
    }}</tmp>;
  }
}
function BalanceWidgetMenu() {
  let isOrbchievementsEnabled;
  let notificationType;
  let obj5;
  let str;
  let tmp5Result;
  let obj = str(9553);
  str = obj.useFetchVirtualCurrencyBalance().balance;
  let obj2 = str(16887);
  const orbBalanceEntrypoint = obj2.useOrbBalanceEntrypoint({ location: "MobileBalanceWidgetMenu" });
  const openBalanceWidgetActionSheet = orbBalanceEntrypoint.openBalanceWidgetActionSheet;
  let items = [str, openBalanceWidgetActionSheet];
  ({ isOrbchievementsEnabled, notificationType } = orbBalanceEntrypoint);
  const callback = react.useCallback(() => {
    let balance;
    let intl;
    let intl2;
    let obj3;
    let obj4;
    let obj = AnalyticsUtilsDefault;
    obj.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
    let obj2 = { balance: str, primaryButtonConfig: obj3, secondaryButtonConfig: obj4, source: AnalyticsLocationDefault.YOU_SCREEN, analyticsPage: hasOwnProperty.USER_PROFILE };
    obj3 = {
      buttonText: intl.string(intl3.t.WrzJBf),
      onButtonPress() {
        let items;
        const obj = openBalanceWidgetActionSheet(dependencyMap[11]);
        const obj2 = { type: "GO_TO_SHOP", source: openBalanceWidgetActionSheet(dependencyMap[17]).YOU_SCREEN, balance };
        obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj2);
        const obj3 = openBalanceWidgetActionSheet(dependencyMap[18]);
        obj3.hideActionSheet();
        const obj4 = { analyticsLocations: items, analyticsSource: openBalanceWidgetActionSheet(dependencyMap[17]).COLLECTIBLES_SHOP, screen: constants2.ORBS };
        const openCollectiblesShopMobile = str(dependencyMap[19]).openCollectiblesShopMobile;
        items = [];
        str(dependencyMap[19]);
        items[0] = openBalanceWidgetActionSheet(dependencyMap[17]).COLLECTIBLES_SHOP;
        const result = openCollectiblesShopMobile(obj4);
      }
    };
    intl = intl3.intl;
    obj4 = {
      buttonText: intl2.string(intl3.t.SymzJC),
      onButtonPress() {
        const obj = openBalanceWidgetActionSheet(dependencyMap[11]);
        const obj2 = { type: "GO_TO_QUEST_HOME", source: openBalanceWidgetActionSheet(dependencyMap[17]).YOU_SCREEN, balance };
        obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj2);
        const obj3 = openBalanceWidgetActionSheet(dependencyMap[18]);
        obj3.hideActionSheet();
        const obj4 = str(dependencyMap[12]);
        const obj5 = { mergeExistingRoutes: true, filter: constants3.VIRTUAL_CURRENCY, fromContent: str(dependencyMap[13]).QuestContent.ORBS_BALANCE_MENU };
        obj4.openQuestHome(obj5);
      }
    };
    intl2 = intl3.intl;
    openBalanceWidgetActionSheet(obj2);
  }, items);
  if (isOrbchievementsEnabled) {
    let obj3 = { balance: str, notificationType, onPress: callback };
    tmp5Result = tmp5(tmp(17696).OrbWalletEntryRow, obj3);
  } else {
    let intl = tmp(1113).intl;
    const formatToPlainString = intl.formatToPlainString;
    let str2;
    const zPaLL9 = tmp(1113).t.zPaLL9;
    const tmp6 = OrbsBalanceRow;
    if (str != null) {
      str2 = str.toString();
    }
    if (str2 == null) {
      str2 = "";
    }
    let obj4 = { accessibilityLabel: formatToPlainString(zPaLL9, obj5), onPress: callback, trailing: null };
    obj5 = { balance: str2 };
    tmp5Result = tmp5(tmp6, obj4);
  }
  return tmp5Result;
}
({ AnalyticEvents: closure_4, AnalyticsPages: hasOwnProperty } = Constants);
let closure_6 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ ContentDismissActionType: metroImportDefault, DismissibleContentGroupName: metroImportAll } = DismissibleContentConstants);
const RewardFilterTypes = QuestConstants.RewardFilterTypes;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetMenu.tsx");

export default function BalanceWidgetMenuWrapper() {
  let tmp5Result;
  const obj = _mod9553;
  const balance = obj.useFetchVirtualCurrencyBalance().balance;
  DismissibleContentUnsafeUtils;
  if (null == balance) {
    const intl = tmp(1113).intl;
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
