// Module ID: 14667
// Function ID: 111802
// Name: BalanceWidget
// Dependencies: [31, 27, 653, 655, 1345, 4976, 33, 1324, 4660, 4126, 1212, 9642, 1334, 675, 10919, 4979, 14668, 8722, 4098, 9798, 1934, 5484, 6773, 9797, 3946, 4558, 4130, 689, 2]
// Exports: default

// Module 14667 (BalanceWidget)
import result from "result";
import { View } from "_createForOfIteratorHelperLoose";
import { AnalyticEvents } from "ME";
import { CollectiblesMobileShopScreen as closure_6 } from "items";
import ContentDismissActionType from "ContentDismissActionType";
import { RewardFilterTypes } from "QuestsExperimentLocations";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_7;
let closure_8;
const require = arg1;
function BalanceWidget(arg0) {
  let accessibilityLabel;
  let accessibilityState;
  let children;
  let onPress;
  let style;
  ({ onPress, style, accessibilityLabel, accessibilityState, children } = arg0);
  const tmp = callback3(importDefault(1324)("BalanceWidgetMenu"));
  let obj = { onPress, style: items, accessible: true, accessibilityRole: "button", accessibilityLabel, accessibilityState, activeOpacity: 0.8 };
  items = [tmp.pressable, style];
  obj = { variant: "text-sm/semibold", color: "text-default", style: tmp.label };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.gGtZpz);
  const items1 = [callback(require(4126) /* Text */.Text, obj), ];
  obj = { style: tmp.pill, children };
  items1[1] = callback(View, obj);
  obj.children = items1;
  return callback2(require(4660) /* PressableBase */.PressableOpacity, obj);
}
class OrbsOnboardingMenuDismissibleContent {
  constructor(arg0) {
    style = global.style;
    obj = {};
    tmp = require("SelectedDismissibleContent");
    items = [];
    items[0] = require("DismissibleContent").DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL;
    obj.contentTypes = items;
    obj.groupName = c8.VIRTUAL_CURRENCY_MOBILE_ONBOARDING;
    obj.children = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      if (markAsDismissed.visibleContent === style(outer1_2[12]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL) {
        function handleOnboardingPress() {
          markAsDismissed(outer2_7.TAKE_ACTION);
          let obj = outer2_1(outer2_2[13]);
          obj.track(outer2_5.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
          obj = { filter: outer2_9.VIRTUAL_CURRENCY, fromContent: style(outer2_2[15]).QuestContent.MOBILE_ORBS_ONBOARDING_DC };
          style(outer2_2[14]).openQuestHome(obj);
        }
        let obj = { onPress: handleOnboardingPress, style: markAsDismissed };
        const intl = style(outer1_2[10]).intl;
        obj.accessibilityLabel = intl.string(style(outer1_2[10]).t.Kt2QDh);
        obj = { onPress: handleOnboardingPress, accessible: false };
        obj.children = outer1_10(outer1_1(outer1_2[16]), obj);
        return outer1_10(outer1_13, obj);
      } else {
        return null;
      }
    };
    return jsx(tmp, obj);
  }
}
function BalanceWidgetMenu(style) {
  let obj = str(8722);
  str = obj.useFetchVirtualCurrencyBalance().balance;
  let items = [str];
  const callback = React.useCallback(() => {
    let obj = outer1_1(outer1_2[13]);
    obj.track(outer1_5.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
    let obj1 = outer1_1(outer1_2[18]);
    obj = { balance: str };
    obj = {};
    const intl = str(outer1_2[10]).intl;
    obj.buttonText = intl.string(str(outer1_2[10]).t.WrzJBf);
    obj.onButtonPress = function onButtonPress() {
      let obj = outer2_1(outer2_2[13]);
      obj = { type: "GO_TO_SHOP", source: outer2_1(outer2_2[21]).YOU_SCREEN, balance: outer1_0 };
      obj.track(outer2_5.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      outer2_1(outer2_2[18]).hideActionSheet();
      const obj3 = outer2_1(outer2_2[18]);
      obj = {};
      const items = [outer2_1(outer2_2[21]).COLLECTIBLES_SHOP];
      obj.analyticsLocations = items;
      obj.analyticsSource = outer2_1(outer2_2[21]).COLLECTIBLES_SHOP;
      obj.screen = outer2_6.ORBS;
      const result = str(outer2_2[22]).openCollectiblesShopMobile(obj);
    };
    obj.primaryButtonConfig = obj;
    obj1 = {};
    const intl2 = str(outer1_2[10]).intl;
    obj1.buttonText = intl2.string(str(outer1_2[10]).t.SymzJC);
    obj1.onButtonPress = function onButtonPress() {
      let obj = outer2_1(outer2_2[13]);
      obj = { type: "GO_TO_QUEST_HOME", source: outer2_1(outer2_2[21]).YOU_SCREEN, balance: outer1_0 };
      obj.track(outer2_5.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      outer2_1(outer2_2[18]).hideActionSheet();
      const obj3 = outer2_1(outer2_2[18]);
      obj = { mergeExistingRoutes: true, filter: outer2_9.VIRTUAL_CURRENCY, fromContent: str(outer2_2[15]).QuestContent.ORBS_BALANCE_MENU };
      str(outer2_2[14]).openQuestHome(obj);
    };
    obj.secondaryButtonConfig = obj1;
    obj.source = outer1_1(outer1_2[21]).YOU_SCREEN;
    obj1.openLazy(() => str(outer2_2[20])(outer2_2[19], outer2_2.paths).then((arg0) => arg0.default), "BalanceWidgetMenu", obj);
  }, items);
  obj = { onPress: callback, style: style.style };
  let intl = str(1212).intl;
  obj = {};
  str = undefined;
  if (null != str) {
    str = str.toString();
  }
  let str2 = "";
  if (null != str) {
    str2 = str;
  }
  obj.balance = str2;
  obj.accessibilityLabel = intl.formatToPlainString(str(1212).t.zPaLL9, obj);
  obj.children = callback(importDefault(9797), { balance: str, onPress: callback, accessible: false });
  return callback(BalanceWidget, obj);
}
({ ContentDismissActionType: closure_7, DismissibleContentGroupName: closure_8 } = ContentDismissActionType);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { flex: 1, flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: importDefault(689).space.PX_8 };
  if (arg0) {
    obj = { paddingHorizontal: importDefault(689).space.PX_8, paddingVertical: importDefault(689).space.PX_8 };
    let obj1 = obj;
  } else {
    obj1 = { padding: 16 };
  }
  const merged = Object.assign(obj1);
  const radii = importDefault(689).radii;
  obj["borderRadius"] = arg0 ? radii.md : radii.lg;
  obj.pressable = obj;
  obj.label = { flex: 1 };
  obj.pill = { alignItems: "center" };
  obj.loadingContainer = { height: 36, justifyContent: "center" };
  return obj;
});
let result = require("ME").fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetMenu.tsx");

export default function BalanceWidgetMenuWrapper(style) {
  let obj = require(8722);
  const balance = obj.useFetchVirtualCurrencyBalance().balance;
  require(3946) /* UNSAFE_isDismissibleContentDismissed */;
  if (null == balance) {
    obj = {
      onPress() {

        },
      style: style.style
    };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.cKwv4k);
    obj = { busy: true };
    obj.accessibilityState = obj;
    const obj1 = { style: tmp.loadingContainer, children: callback(require(4558) /* EllipsisCircle */.Ellipsis, { variant: "primary", size: "sm" }) };
    obj.children = callback(View, obj1);
    let tmp4Result = callback(BalanceWidget, obj);
  } else {
    if (balance <= 0) {
      if (!tmp3) {
        let tmp5 = OrbsOnboardingMenuDismissibleContent;
      }
      const obj2 = {};
      const merged = Object.assign(style);
      tmp4Result = tmp4(tmp5, obj2);
    }
    tmp5 = BalanceWidgetMenu;
  }
  return tmp4Result;
};
export { OrbsOnboardingMenuDismissibleContent };
