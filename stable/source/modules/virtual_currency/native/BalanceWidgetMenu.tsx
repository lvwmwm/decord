// Module ID: 16012
// Function ID: 16013
// Name: BalanceWidgetMenu
// Dependencies: [19, 1074, 1076, 2038, 5693, 21, 5854, 4784, 1115, 10921, 2027, 1241, 12049, 5696, 16013, 9161, 4755, 11398, 1980, 7459, 7815, 11397, 4608, 5234, 2]
// Exports: default

// Module 16012 (BalanceWidgetMenu)
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import dismissible_content from "dismissible_content" /* 2027 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4608 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import Text_Text from "Text/Text" /* 4784 */;
import QuestTypes from "QuestTypes" /* 5696 */;
import TableRow from "TableRow" /* 5854 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7459 */;
import _mod9161 from "module_9161" /* 9161 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10921 */;
import BalanceWidgetPillButtonDefault from "BalanceWidgetPillButton" /* 11397 */;
import QuestUtils from "QuestUtils" /* 12049 */;
import noop from "module_19" /* 19 */;

require = fn;
function OrbsBalanceRow(isBusy) {
  let flag = isBusy.isBusy;
  ({ onPress, accessibilityLabel, trailing } = isBusy);
  if (flag === undefined) {
    flag = false;
  }
  const obj = { label: null, accessibilityLabel: null, accessibilityState: null, onPress: null, trailing: null, start: true, end: true };
  const obj2 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.gGtZpz);
  obj.label = jsx(Text_Text.Text, { variant: "text-sm/semibold", color: "text-default", children: null });
  obj.accessibilityLabel = accessibilityLabel;
  let obj3;
  if (flag) {
    obj3 = { busy: true };
  }
  obj.accessibilityState = obj3;
  obj.onPress = onPress;
  obj.trailing = trailing;
  return jsx(TableRow.TableRow, { label: null, accessibilityLabel: null, accessibilityState: null, onPress: null, trailing: null, start: true, end: true });
}
class OrbsOnboardingMenuDismissibleContent {
  constructor() {
    obj = { contentTypes: null, groupName: null, children: null };
    tmp = closure_1(closure_2[9]);
    items = [];
    items[0] = closure_0(closure_2[10]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL;
    obj.contentTypes = items;
    obj.groupName = closure_7.VIRTUAL_CURRENCY_MOBILE_ONBOARDING;
    obj.children = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      if (markAsDismissed.visibleContent === markAsDismissed(2027).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL) {
        let obj = { accessibilityLabel: null, onPress: null, trailing: null };
        const intl = tmp(1115).intl;
        obj.accessibilityLabel = intl.string(tmp(1115).t.Kt2QDh);
        obj.onPress = function onPress() {
          markAsDismissed(constants2.TAKE_ACTION);
          AnalyticsUtilsDefault.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
          const obj2 = QuestUtils;
          obj2.openQuestHome({ filter: constants3.VIRTUAL_CURRENCY, fromContent: QuestTypes.QuestContent.MOBILE_ORBS_ONBOARDING_DC });
        };
        obj.trailing = closure_9(closure_1(16013), {});
        return closure_9(closure_10, obj);
      } else {
        return null;
      }
    };
    return jsx(tmp, obj);
  }
}
function BalanceWidgetMenu() {
  str = str(9161).useFetchVirtualCurrencyBalance().balance;
  let items = [str];
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
    let obj3 = { balance: str, primaryButtonConfig: null, secondaryButtonConfig: null, source: null };
    let obj4 = { buttonText: null, onButtonPress: null };
    const intl = util.intl;
    obj4.buttonText = intl.string(util.t.WrzJBf);
    obj4.onButtonPress = function onButtonPress() {
      const obj = AnalyticsUtilsDefault;
      obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, { type: "GO_TO_SHOP", source: AnalyticsLocationDefault.YOU_SCREEN, balance });
      const obj2 = { type: "GO_TO_SHOP", source: AnalyticsLocationDefault.YOU_SCREEN, balance };
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const obj5 = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP];
      obj5.analyticsLocations = items;
      obj5.analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
      obj5.screen = constants2.ORBS;
      const result = str(7815).openCollectiblesShopMobile(obj5);
    };
    obj3.primaryButtonConfig = obj4;
    let obj5 = { buttonText: null, onButtonPress: null };
    const intl2 = util.intl;
    obj5.buttonText = intl2.string(util.t.SymzJC);
    obj5.onButtonPress = function onButtonPress() {
      const obj = AnalyticsUtilsDefault;
      obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, { type: "GO_TO_QUEST_HOME", source: AnalyticsLocationDefault.YOU_SCREEN, balance });
      const obj2 = { type: "GO_TO_QUEST_HOME", source: AnalyticsLocationDefault.YOU_SCREEN, balance };
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const obj4 = str(12049);
      obj4.openQuestHome({ mergeExistingRoutes: true, filter: constants3.VIRTUAL_CURRENCY, fromContent: str(5696).QuestContent.ORBS_BALANCE_MENU });
    };
    obj3.secondaryButtonConfig = obj5;
    obj3.source = AnalyticsLocationDefault.YOU_SCREEN;
    ActionSheetActionCreatorsDefault.openLazy(() => balance(paths[18])(paths[17], paths.paths).then((result) => result.default), "BalanceWidgetMenu", obj3);
  }, items);
  let intl = str(1115).intl;
  let str2;
  if (str != null) {
    str2 = str.toString();
  }
  if (str2 == null) {
    str2 = "";
  }
  let obj = str(9161);
  return <tmp4 accessibilityLabel={intl.formatToPlainString(str(1115).t.zPaLL9, { balance: str2 })} onPress={callback} trailing={jsx(BalanceWidgetPillButtonDefault, { balance: str, onPress: callback, accessible: false })} />;
}
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_5 = fn(1076).CollectiblesMobileShopScreen;
const DismissibleContentConstants = fn(2038);
({ ContentDismissActionType: metroRequire, DismissibleContentGroupName: closure_7 } = DismissibleContentConstants);
const RewardFilterTypes = fn(5693).RewardFilterTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetMenu.tsx");

export default function BalanceWidgetMenuWrapper() {
  const balance = _mod9161.useFetchVirtualCurrencyBalance().balance;
  DismissibleContentUnsafeUtils;
  if (null == balance) {
    const obj2 = { accessibilityLabel: null, trailing: null, isBusy: true };
    const intl = tmp(1115).intl;
    obj2.accessibilityLabel = intl.string(tmp(1115).t.cKwv4k);
    obj2.trailing = jsx(tmp(5234).Ellipsis, { variant: "primary", size: "sm" });
    let tmp5Result = <OrbsBalanceRow accessibilityLabel={null} trailing={null} isBusy />;
  } else {
    if (balance <= 0) {
      if (!tmp4) {
        let tmp6 = OrbsOnboardingMenuDismissibleContent;
      }
      tmp5Result = tmp5(tmp6, {});
    }
    tmp6 = BalanceWidgetMenu;
  }
  return tmp5Result;
};
export { OrbsOnboardingMenuDismissibleContent };
