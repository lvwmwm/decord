// Module ID: 18030
// Function ID: 18031
// Name: BalanceWidgetMenu
// Dependencies: [19, 17, 1072, 1074, 4986, 6836, 21, 7038, 5751, 1113, 10639, 4973, 1252, 9769, 6839, 18031, 9641, 17218, 7412, 5374, 7795, 5170, 18032, 14747, 5771, 2]
// Exports: default, useIsOrbWalletEntryRowShown, useOpenOrbWalletFromYouScreen

// Module 18030 (BalanceWidgetMenu)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import intl3 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import dismissible_content from "dismissible_content" /* 4973 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5170 */;
import Text_Text from "Text/Text" /* 5751 */;
import QuestConstants from "QuestConstants" /* 6836 */;
import QuestTypes from "QuestTypes" /* 6839 */;
import TableRow2 from "TableRow" /* 7038 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7412 */;
import _mod9641 from "module_9641" /* 9641 */;
import QuestUtils from "QuestUtils" /* 9769 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10639 */;
import useOrbBalanceEntrypoint from "useOrbBalanceEntrypoint" /* 17218 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4986 */;
import size from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
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
  ({ variant: "body-sm/semibold", color: "text-default", children: intl.string(intl3.t.gGtZpz) });
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
    return <tmp contentTypes={items} groupName={c9.VIRTUAL_CURRENCY_MOBILE_ONBOARDING}>{function children(markAsDismissed) {
      let intl;
      markAsDismissed = markAsDismissed.markAsDismissed;
      if (markAsDismissed.visibleContent === markAsDismissed(closure_2[11]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL) {
        let obj = {
          accessibilityLabel: intl.string(tmp(closure_2[9]).t.Kt2QDh),
          onPress() {
              markAsDismissed(constants2.TAKE_ACTION);
              const obj = AnalyticsUtilsDefault;
              obj.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
              const obj2 = QuestUtils;
              const obj3 = { filter: constants3.VIRTUAL_CURRENCY, fromContent: QuestTypes.QuestContent.MOBILE_ORBS_ONBOARDING_DC };
              obj2.openQuestHome(obj3);
            },
          trailing: closure_11(closure_1(closure_2[15]), {})
        };
        intl = tmp(tmp2[9]).intl;
        return closure_11(closure_12, obj);
      } else {
        return null;
      }
    }}</tmp>;
  }
}
function BalanceWidgetMenu(orbWalletEntryRowRef) {
  let obj6;
  let tmp7Result;
  let str;
  orbWalletEntryRowRef = orbWalletEntryRowRef.orbWalletEntryRowRef;
  let obj = str(9641);
  str = obj.useFetchVirtualCurrencyBalance({ disableFetch: true }).balance;
  let obj2 = str(17218);
  const isOrbWalletEntrypointEnabled = obj2.useIsOrbWalletEntrypointEnabled({ location: "MobileBalanceWidgetMenu" });
  let items = [str, isOrbWalletEntrypointEnabled];
  const callback = react.useCallback(() => {
    let balance;
    let intl;
    let intl2;
    let obj3;
    let obj4;
    let obj = AnalyticsUtilsDefault;
    obj.track(hasOwnProperty.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
    let obj2 = { balance: str, primaryButtonConfig: obj3, secondaryButtonConfig: obj4, source: AnalyticsLocationDefault.YOU_SCREEN, analyticsPage: metroRequire.USER_PROFILE };
    obj3 = {
      buttonText: intl.string(intl3.t.WrzJBf),
      onButtonPress() {
        let items;
        const obj = isOrbWalletEntrypointEnabled(dependencyMap[12]);
        const obj2 = { type: "GO_TO_SHOP", source: isOrbWalletEntrypointEnabled(dependencyMap[18]).YOU_SCREEN, balance };
        obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj2);
        const obj3 = isOrbWalletEntrypointEnabled(dependencyMap[19]);
        obj3.hideActionSheet();
        const obj4 = { analyticsLocations: items, analyticsSource: isOrbWalletEntrypointEnabled(dependencyMap[18]).COLLECTIBLES_SHOP, screen: constants2.ORBS };
        const openCollectiblesShopMobile = str(dependencyMap[20]).openCollectiblesShopMobile;
        items = [];
        str(dependencyMap[20]);
        items[0] = isOrbWalletEntrypointEnabled(dependencyMap[18]).COLLECTIBLES_SHOP;
        const result = openCollectiblesShopMobile(obj4);
      }
    };
    const openBalanceWidgetActionSheet = useOrbBalanceEntrypoint.openBalanceWidgetActionSheet;
    useOrbBalanceEntrypoint;
    intl = intl3.intl;
    obj4 = {
      buttonText: intl2.string(intl3.t.SymzJC),
      onButtonPress() {
        const obj = isOrbWalletEntrypointEnabled(dependencyMap[12]);
        const obj2 = { type: "GO_TO_QUEST_HOME", source: isOrbWalletEntrypointEnabled(dependencyMap[18]).YOU_SCREEN, balance };
        obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj2);
        const obj3 = isOrbWalletEntrypointEnabled(dependencyMap[19]);
        obj3.hideActionSheet();
        const obj4 = str(dependencyMap[13]);
        const obj5 = { mergeExistingRoutes: true, filter: constants3.VIRTUAL_CURRENCY, fromContent: str(dependencyMap[14]).QuestContent.ORBS_BALANCE_MENU };
        obj4.openQuestHome(obj5);
      }
    };
    intl2 = intl3.intl;
    let result = openBalanceWidgetActionSheet(isOrbWalletEntrypointEnabled, obj2);
  }, items);
  str(17218);
  if (isOrbWalletEntrypointEnabled) {
    let obj3 = { ref: orbWalletEntryRowRef, collapsable: false, children: null };
    let obj4 = { balance: str, notificationType: tmp6, onPress: callback };
    tmp7Result = tmp7(View, obj3);
  } else {
    let intl = tmp(1113).intl;
    const formatToPlainString = intl.formatToPlainString;
    let str2;
    const zPaLL9 = tmp(1113).t.zPaLL9;
    const tmp8 = OrbsBalanceRow;
    if (str != null) {
      str2 = str.toString();
    }
    if (str2 == null) {
      str2 = "";
    }
    let obj5 = { accessibilityLabel: formatToPlainString(zPaLL9, obj6), onPress: callback, trailing: null };
    obj6 = { balance: str2 };
    tmp7Result = tmp7(tmp8, obj5);
  }
  return tmp7Result;
}
const View = react_native.View;
({ AnalyticEvents: hasOwnProperty, AnalyticsPages: metroRequire } = Constants);
let closure_7 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ ContentDismissActionType: metroImportAll, DismissibleContentGroupName: c9 } = DismissibleContentConstants);
const RewardFilterTypes = QuestConstants.RewardFilterTypes;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetMenu.tsx");

export default function BalanceWidgetMenuWrapper(orbWalletEntryRowRef) {
  let tmp4Result;
  orbWalletEntryRowRef = orbWalletEntryRowRef.orbWalletEntryRowRef;
  const obj = _mod9641;
  const balance = obj.useFetchVirtualCurrencyBalance().balance;
  if (null == balance) {
    const intl = tmp(1113).intl;
    tmp4Result = <OrbsBalanceRow accessibilityLabel={intl.string(intl3.t.cKwv4k)} trailing={null} isBusy />;
  } else {
    let result = balance > 0;
    if (!result) {
      const tmpResult = DismissibleContentUnsafeUtils;
      result = tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(4973).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL);
    }
    if (result) {
      const obj3 = { orbWalletEntryRowRef };
      tmp4Result = tmp4(BalanceWidgetMenu, obj3);
    } else {
      tmp4Result = tmp4(OrbsOnboardingMenuDismissibleContent, {});
    }
  }
  return tmp4Result;
};
export { OrbsOnboardingMenuDismissibleContent };
export function useOpenOrbWalletFromYouScreen() {
  let balance;
  const obj = balance(9641);
  balance = obj.useFetchVirtualCurrencyBalance({ disableFetch: true }).balance;
  const obj2 = balance(17218);
  const isOrbWalletEntrypointEnabled = obj2.useIsOrbWalletEntrypointEnabled({ location: "MobileBalanceWidgetMenu" });
  const items = [balance, isOrbWalletEntrypointEnabled];
  const obj3 = {
    balance,
    isOrbchievementsEnabled: isOrbWalletEntrypointEnabled,
    openOrbWallet: react.useCallback(() => {
      let balance;
      let intl;
      let intl2;
      let obj3;
      let obj4;
      let obj = AnalyticsUtilsDefault;
      obj.track(hasOwnProperty.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
      let obj2 = { balance: str, primaryButtonConfig: obj3, secondaryButtonConfig: obj4, source: AnalyticsLocationDefault.YOU_SCREEN, analyticsPage: metroRequire.USER_PROFILE };
      obj3 = {
        buttonText: intl.string(intl3.t.WrzJBf),
        onButtonPress() {
          let items;
          const obj = isOrbWalletEntrypointEnabled(dependencyMap[12]);
          const obj2 = { type: "GO_TO_SHOP", source: isOrbWalletEntrypointEnabled(dependencyMap[18]).YOU_SCREEN, balance };
          obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj2);
          const obj3 = isOrbWalletEntrypointEnabled(dependencyMap[19]);
          obj3.hideActionSheet();
          const obj4 = { analyticsLocations: items, analyticsSource: isOrbWalletEntrypointEnabled(dependencyMap[18]).COLLECTIBLES_SHOP, screen: constants2.ORBS };
          const openCollectiblesShopMobile = str(dependencyMap[20]).openCollectiblesShopMobile;
          items = [];
          str(dependencyMap[20]);
          items[0] = isOrbWalletEntrypointEnabled(dependencyMap[18]).COLLECTIBLES_SHOP;
          const result = openCollectiblesShopMobile(obj4);
        }
      };
      const openBalanceWidgetActionSheet = useOrbBalanceEntrypoint.openBalanceWidgetActionSheet;
      useOrbBalanceEntrypoint;
      intl = intl3.intl;
      obj4 = {
        buttonText: intl2.string(intl3.t.SymzJC),
        onButtonPress() {
          const obj = isOrbWalletEntrypointEnabled(dependencyMap[12]);
          const obj2 = { type: "GO_TO_QUEST_HOME", source: isOrbWalletEntrypointEnabled(dependencyMap[18]).YOU_SCREEN, balance };
          obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj2);
          const obj3 = isOrbWalletEntrypointEnabled(dependencyMap[19]);
          obj3.hideActionSheet();
          const obj4 = str(dependencyMap[13]);
          const obj5 = { mergeExistingRoutes: true, filter: constants3.VIRTUAL_CURRENCY, fromContent: str(dependencyMap[14]).QuestContent.ORBS_BALANCE_MENU };
          obj4.openQuestHome(obj5);
        }
      };
      intl2 = intl3.intl;
      let result = openBalanceWidgetActionSheet(isOrbWalletEntrypointEnabled, obj2);
    }, items)
  };
  return obj3;
}
export function useIsOrbWalletEntryRowShown() {
  const obj = useOrbBalanceEntrypoint;
  let isOrbWalletEntrypointEnabled = obj.useIsOrbWalletEntrypointEnabled({ location: "MobileBalanceWidgetMenu" });
  const obj2 = _mod9641;
  const balance = obj2.useFetchVirtualCurrencyBalance({ disableFetch: true }).balance;
  if (isOrbWalletEntrypointEnabled) {
    isOrbWalletEntrypointEnabled = null != balance;
  }
  if (isOrbWalletEntrypointEnabled) {
    let result = balance > 0;
    if (!result) {
      const tmpResult = DismissibleContentUnsafeUtils;
      result = tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(4973).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL);
    }
    isOrbWalletEntrypointEnabled = result;
  }
  return isOrbWalletEntrypointEnabled;
}
