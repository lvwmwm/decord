// Module ID: 17634
// Function ID: 17635
// Name: BalanceWidgetMenu
// Dependencies: [5, 19, 1072, 1074, 4855, 6775, 21, 6969, 5619, 1114, 10500, 4842, 1253, 9658, 6778, 17635, 9531, 17636, 5253, 17637, 1995, 14460, 7345, 7712, 14459, 5039, 5642, 2]
// Exports: default

// Module 17634 (BalanceWidgetMenu)
import Fragment from "Fragment" /* 21 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import intl3 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import dismissible_content from "dismissible_content" /* 4842 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5039 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Text_Text from "Text/Text" /* 5619 */;
import QuestConstants from "QuestConstants" /* 6775 */;
import QuestTypes from "QuestTypes" /* 6778 */;
import TableRow2 from "TableRow" /* 6969 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import _mod9531 from "module_9531" /* 9531 */;
import QuestUtils from "QuestUtils" /* 9658 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10500 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import size from "module_2" /* 2 */;

let c1;

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
function BalanceWidgetMenu() {
  let str;
  let obj = str(9531);
  str = obj.useFetchVirtualCurrencyBalance().balance;
  let obj2 = str(17636);
  const isOrbchievementsEnabled = obj2.useIsOrbchievementsEnabled({ location: "NativeBalanceWidgetMenu" });
  let items = [str, isOrbchievementsEnabled];
  const callback = react.useCallback(() => {
    let intl;
    let intl2;
    let obj3;
    let obj4;
    let obj = AnalyticsUtilsDefault;
    obj.track(hasOwnProperty.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
    const tmp2 = ActionSheetActionCreatorsDefault;
    const openLazy = tmp2.openLazy;
    let obj2 = { balance: str, primaryButtonConfig: obj3, secondaryButtonConfig: obj4, source: AnalyticsLocationDefault.YOU_SCREEN, analyticsPage: metroRequire.USER_PROFILE };
    obj3 = {
      buttonText: intl.string(intl3.t.WrzJBf),
      onButtonPress() {
        let items;
        const obj = isOrbchievementsEnabled(dependencyMap[12]);
        const obj2 = { type: "GO_TO_SHOP", source: isOrbchievementsEnabled(dependencyMap[22]).YOU_SCREEN, balance };
        obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj2);
        const obj3 = isOrbchievementsEnabled(dependencyMap[18]);
        obj3.hideActionSheet();
        const obj4 = { analyticsLocations: items, analyticsSource: isOrbchievementsEnabled(dependencyMap[22]).COLLECTIBLES_SHOP, screen: constants2.ORBS };
        const openCollectiblesShopMobile = str(dependencyMap[23]).openCollectiblesShopMobile;
        items = [];
        str(dependencyMap[23]);
        items[0] = isOrbchievementsEnabled(dependencyMap[22]).COLLECTIBLES_SHOP;
        const result = openCollectiblesShopMobile(obj4);
      }
    };
    const tmp3 = _asyncToGenerator(async (arg0, value) => {
      let v3;
      if (balance === 2) {
        balance = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          balance = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              balance = 3;
              throw value;
            } else if (arg0 === 2) {
              balance = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const tmp13 = balance(closure_1_2[20]);
              if (isOrbchievementsEnabled) {
                c1 = 2;
                balance = 1;
                const obj4 = { value: tmp13(closure_1_2[19], closure_1_2.paths), done: false };
                return obj4;
              } else {
                c1 = 1;
                balance = 1;
                const obj5 = { value: tmp13(closure_1_2[21], closure_1_2.paths), done: false };
                return obj5;
              }
            }
          } else {
            let _default;
            if (1 === tmp3) {
              if (arg0 === 1) {
                balance = 3;
                throw value;
              } else if (arg0 === 2) {
                balance = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                _default = value.default;
              }
            } else if (arg0 === 1) {
              balance = 3;
              throw value;
            } else if (arg0 === 2) {
              balance = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              _default = value.default;
            }
            balance = 3;
            const obj7 = { value: _default, done: true };
            return obj7;
          }
        } catch (tmp6) {
          balance = 3;
          throw tmp6;
        }
      }
    });
    intl = intl3.intl;
    obj4 = {
      buttonText: intl2.string(intl3.t.SymzJC),
      onButtonPress() {
        const obj = isOrbchievementsEnabled(dependencyMap[12]);
        const obj2 = { type: "GO_TO_QUEST_HOME", source: isOrbchievementsEnabled(dependencyMap[22]).YOU_SCREEN, balance };
        obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj2);
        const obj3 = isOrbchievementsEnabled(dependencyMap[18]);
        obj3.hideActionSheet();
        const obj4 = str(dependencyMap[13]);
        const obj5 = { mergeExistingRoutes: true, filter: constants3.VIRTUAL_CURRENCY, fromContent: str(dependencyMap[14]).QuestContent.ORBS_BALANCE_MENU };
        obj4.openQuestHome(obj5);
      }
    };
    intl2 = intl3.intl;
    openLazy(tmp3, "BalanceWidgetMenu", obj2);
  }, items);
  let intl = str(1114).intl;
  const formatToPlainString = intl.formatToPlainString;
  let str2;
  const zPaLL9 = str(1114).t.zPaLL9;
  const tmp5 = OrbsBalanceRow;
  if (str != null) {
    str2 = str.toString();
  }
  if (str2 == null) {
    str2 = "";
  }
  let obj3 = { accessibilityLabel: formatToPlainString(zPaLL9, { balance: str2 }), onPress: callback, trailing: tmp4(isOrbchievementsEnabled(14459), { balance: str, onPress: callback, accessible: false }) };
  return jsx(tmp5, obj3);
}
({ AnalyticEvents: hasOwnProperty, AnalyticsPages: metroRequire } = Constants);
let closure_7 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ ContentDismissActionType: metroImportAll, DismissibleContentGroupName: c9 } = DismissibleContentConstants);
const RewardFilterTypes = QuestConstants.RewardFilterTypes;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetMenu.tsx");

export default function BalanceWidgetMenuWrapper() {
  let tmp5Result;
  const obj = _mod9531;
  const balance = obj.useFetchVirtualCurrencyBalance().balance;
  DismissibleContentUnsafeUtils;
  if (null == balance) {
    const intl = tmp(1114).intl;
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
