// Module ID: 14553
// Function ID: 109642
// Name: BalanceWidget
// Dependencies: []
// Exports: default

// Module 14553 (BalanceWidget)
function BalanceWidget(arg0) {
  let accessibilityLabel;
  let accessibilityState;
  let children;
  let onPress;
  let style;
  ({ onPress, style, accessibilityLabel, accessibilityState, children } = arg0);
  const tmp = callback3(importDefault(dependencyMap[7])("BalanceWidgetMenu"));
  let obj = { onPress, style: items, accessible: true, accessibilityRole: "button", accessibilityLabel, accessibilityState, activeOpacity: 0.8 };
  const items = [tmp.pressable, style];
  obj = { cachedAt: "explicit_content_friend_dm", edpbxy: "enum", style: tmp.label };
  const intl = arg1(dependencyMap[10]).intl;
  obj.children = intl.string(arg1(dependencyMap[10]).t.gGtZpz);
  const items1 = [callback(arg1(dependencyMap[9]).Text, obj), ];
  obj = { style: tmp.pill, children };
  items1[1] = callback(View, obj);
  obj.children = items1;
  return callback2(arg1(dependencyMap[8]).PressableOpacity, obj);
}
class OrbsOnboardingMenuDismissibleContent {
  constructor(arg0) {
    arg1 = global.style;
    obj = {};
    tmp = importDefault(dependencyMap[11]);
    items = [];
    items[0] = arg1(dependencyMap[12]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL;
    obj.contentTypes = items;
    obj.groupName = closure_8.VIRTUAL_CURRENCY_MOBILE_ONBOARDING;
    obj.children = function children(markAsDismissed) {
      const style = markAsDismissed.markAsDismissed;
      if (markAsDismissed.visibleContent === style(closure_2[12]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL) {
        function handleOnboardingPress() {
          markAsDismissed(constants2.TAKE_ACTION);
          let obj = callback(closure_2[13]);
          obj.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
          obj = { filter: constants3.VIRTUAL_CURRENCY, fromContent: markAsDismissed(closure_2[15]).QuestContent.MOBILE_ORBS_ONBOARDING_DC };
          markAsDismissed(closure_2[14]).openQuestHome(obj);
        }
        let obj = { onPress: handleOnboardingPress, style };
        const intl = style(closure_2[10]).intl;
        obj.accessibilityLabel = intl.string(style(closure_2[10]).t.Kt2QDh);
        obj = { onPress: handleOnboardingPress, accessible: false };
        obj.children = callback2(callback(closure_2[16]), obj);
        return callback2(closure_13, obj);
      } else {
        return null;
      }
    };
    return jsx(tmp, obj);
  }
}
function BalanceWidgetMenu(style) {
  let obj = arg1(dependencyMap[17]);
  let str = obj.useFetchVirtualCurrencyBalance().balance;
  const arg1 = str;
  const items = [str];
  const callback = React.useCallback(() => {
    let obj = callback(closure_2[13]);
    obj.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
    let obj1 = callback(closure_2[18]);
    obj = { balance: str };
    obj = {};
    const intl = str(closure_2[10]).intl;
    obj.buttonText = intl.string(str(closure_2[10]).t.WrzJBf);
    obj.onButtonPress = function onButtonPress() {
      let obj = callback2(closure_2[13]);
      obj = { type: "GO_TO_SHOP", source: callback2(closure_2[21]).YOU_SCREEN, balance: callback };
      obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      callback2(closure_2[18]).hideActionSheet();
      const obj3 = callback2(closure_2[18]);
      obj = {};
      const items = [callback2(closure_2[21]).COLLECTIBLES_SHOP];
      obj.analyticsLocations = items;
      obj.analyticsSource = callback2(closure_2[21]).COLLECTIBLES_SHOP;
      obj.screen = constants2.ORBS;
      const result = callback(closure_2[22]).openCollectiblesShopMobile(obj);
    };
    obj.primaryButtonConfig = obj;
    obj1 = {};
    const intl2 = str(closure_2[10]).intl;
    obj1.buttonText = intl2.string(str(closure_2[10]).t.SymzJC);
    obj1.onButtonPress = function onButtonPress() {
      let obj = callback2(closure_2[13]);
      obj = { type: "GO_TO_QUEST_HOME", source: callback2(closure_2[21]).YOU_SCREEN, balance: callback };
      obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      callback2(closure_2[18]).hideActionSheet();
      const obj3 = callback2(closure_2[18]);
      obj = { mergeExistingRoutes: true, filter: constants3.VIRTUAL_CURRENCY, fromContent: callback(closure_2[15]).QuestContent.ORBS_BALANCE_MENU };
      callback(closure_2[14]).openQuestHome(obj);
    };
    obj.secondaryButtonConfig = obj1;
    obj.source = callback(closure_2[21]).YOU_SCREEN;
    obj1.openLazy(() => callback(paths[20])(paths[19], paths.paths).then((arg0) => arg0.default), "BalanceWidgetMenu", obj);
  }, items);
  obj = { onPress: callback, style: style.style };
  const intl = arg1(dependencyMap[10]).intl;
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
  obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[10]).t.zPaLL9, obj);
  obj.children = callback(importDefault(dependencyMap[23]), { balance: str, onPress: callback, accessible: false });
  return callback(BalanceWidget, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
let closure_6 = arg1(dependencyMap[3]).CollectiblesMobileShopScreen;
({ ContentDismissActionType: closure_7, DismissibleContentGroupName: closure_8 } = arg1(dependencyMap[4]));
const RewardFilterTypes = arg1(dependencyMap[5]).RewardFilterTypes;
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
let closure_12 = arg1(dependencyMap[26]).createStyles((arg0) => {
  let obj = {};
  obj = { gap: importDefault(dependencyMap[27]).space.PX_8 };
  if (arg0) {
    obj = { paddingHorizontal: importDefault(dependencyMap[27]).space.PX_8, paddingVertical: importDefault(dependencyMap[27]).space.PX_8 };
    let obj1 = obj;
  } else {
    obj1 = { padding: 16 };
  }
  const merged = Object.assign(obj1);
  const radii = importDefault(dependencyMap[27]).radii;
  obj["borderRadius"] = arg0 ? radii.md : radii.lg;
  obj.pressable = obj;
  obj.label = { flex: 1 };
  obj.pill = { alignItems: "center" };
  obj.loadingContainer = { "Bool(false)": null, "Bool(false)": null };
  return obj;
});
const obj = arg1(dependencyMap[26]);
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetMenu.tsx");

export default function BalanceWidgetMenuWrapper(style) {
  let obj = arg1(dependencyMap[17]);
  const balance = obj.useFetchVirtualCurrencyBalance().balance;
  arg1(dependencyMap[24]);
  if (null == balance) {
    obj = {
      onPress() {

        },
      style: style.style
    };
    const intl = arg1(dependencyMap[10]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[10]).t.cKwv4k);
    obj = { busy: true };
    obj.accessibilityState = obj;
    const obj1 = { style: tmp.loadingContainer, children: callback(arg1(dependencyMap[25]).Ellipsis, {}) };
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
