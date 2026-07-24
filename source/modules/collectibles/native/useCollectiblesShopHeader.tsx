// Module ID: 14553
// Function ID: 111054
// Name: CollectiblesShopHeaderTitle
// Dependencies: [31, 27, 1849, 655, 653, 4976, 8308, 33, 4130, 689, 11290, 4126, 1212, 566, 8764, 6773, 5482, 5154, 4098, 9830, 1934, 675, 10946, 4979, 4337, 8537, 9818, 7533, 8715, 9338, 14554, 1456, 2]
// Exports: default

// Module 14553 (CollectiblesShopHeaderTitle)
import useNavigation from "useNavigation";
import { View } from "IconButton";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CollectiblesMobileShopScreen as closure_6 } from "items";
import { AnalyticEvents } from "ME";
import { RewardFilterTypes } from "QuestsExperimentLocations";
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
function CollectiblesShopHeaderTitle(currentScreen) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.headerTitleContainer };
  const items = [callback(require(11290) /* ShopIcon */.ShopIcon, { size: "md", color: "icon-strong" }), ];
  obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, lineClamp: 1, style: tmp.headerTitle };
  if (currentScreen.currentScreen === constants.ORBS) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.ElYQFS);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t.pWG4ze);
  }
  obj.children = stringResult;
  items[1] = callback(require(4126) /* Text */.Heading, obj);
  obj.children = items;
  return closure_11(View, obj);
}
function CollectiblesShopHeaderRight(currentScreen) {
  currentScreen = currentScreen.currentScreen;
  let obj = currentScreen(balance[13]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getCurrentUser(), []);
  let obj1 = currentScreen(balance[14]);
  balance = obj1.useFetchVirtualCurrencyBalance().balance;
  const items1 = [currentScreen];
  const items2 = [balance];
  const memo = React.useMemo(() => {
    let obj = {};
    const intl = currentScreen(balance[12]).intl;
    obj.label = intl.string(currentScreen(balance[12]).t["xNiB/O"]);
    obj.action = function action() {
      let obj = currentScreen(balance[15]);
      obj = {};
      const items = [stateFromStores(balance[16]).COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM];
      obj.analyticsLocations = items;
      obj.analyticsSource = stateFromStores(balance[16]).COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM;
      obj.screen = outer2_6.FEATURED_PAGE;
      const result = obj.openCollectiblesShopMobile(obj);
    };
    let CheckmarkSmallIcon;
    if (currentScreen === outer1_6.FEATURED_PAGE) {
      CheckmarkSmallIcon = currentScreen(balance[17]).CheckmarkSmallIcon;
    }
    obj.trailingIndicator = CheckmarkSmallIcon;
    let items = [obj, , ];
    obj = {};
    const intl2 = currentScreen(balance[12]).intl;
    obj.label = intl2.string(currentScreen(balance[12]).t.RSyoZu);
    obj.action = function action() {
      let obj = currentScreen(balance[15]);
      obj = {};
      const items = [stateFromStores(balance[16]).COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM];
      obj.analyticsLocations = items;
      obj.analyticsSource = stateFromStores(balance[16]).COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM;
      obj.screen = outer2_6.SHOP_ALL;
      const result = obj.openCollectiblesShopMobile(obj);
    };
    let CheckmarkSmallIcon1;
    if (currentScreen === outer1_6.SHOP_ALL) {
      CheckmarkSmallIcon1 = currentScreen(balance[17]).CheckmarkSmallIcon;
    }
    obj.trailingIndicator = CheckmarkSmallIcon1;
    items[1] = obj;
    obj = {};
    const intl3 = currentScreen(balance[12]).intl;
    obj.label = intl3.string(currentScreen(balance[12]).t.EBYkzk);
    obj.action = function action() {
      let obj = currentScreen(balance[15]);
      obj = {};
      const items = [stateFromStores(balance[16]).COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM];
      obj.analyticsLocations = items;
      obj.analyticsSource = stateFromStores(balance[16]).COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM;
      obj.screen = outer2_6.ORBS;
      const result = obj.openCollectiblesShopMobile(obj);
    };
    let CheckmarkSmallIcon2;
    if (currentScreen === outer1_6.ORBS) {
      CheckmarkSmallIcon2 = currentScreen(balance[17]).CheckmarkSmallIcon;
    }
    obj.trailingIndicator = CheckmarkSmallIcon2;
    items[2] = obj;
    return items;
  }, items1);
  const items3 = [currentScreen, ];
  let id;
  const callback = React.useCallback(() => {
    let obj = stateFromStores(balance[18]);
    obj = { balance };
    obj = {};
    const intl = currentScreen(balance[12]).intl;
    obj.buttonText = intl.string(currentScreen(balance[12]).t.SymzJC);
    obj.onButtonPress = function onButtonPress() {
      let obj = stateFromStores(balance[21]);
      obj = { type: "GO_TO_QUEST_HOME", source: stateFromStores(balance[16]).COLLECTIBLES_SHOP, balance: outer1_2 };
      obj.track(outer2_7.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      stateFromStores(balance[18]).hideActionSheet();
      const obj3 = stateFromStores(balance[18]);
      obj = { mergeExistingRoutes: true, filter: outer2_8.VIRTUAL_CURRENCY, fromContent: currentScreen(balance[23]).QuestContent.ORBS_BALANCE_MENU };
      currentScreen(balance[22]).openQuestHome(obj);
    };
    obj.primaryButtonConfig = obj;
    const obj1 = {};
    const intl2 = currentScreen(balance[12]).intl;
    obj1.buttonText = intl2.string(currentScreen(balance[12]).t["/g10LC"]);
    obj1.onButtonPress = function onButtonPress() {
      let obj = stateFromStores(balance[21]);
      obj = { type: "GO_BACK", source: stateFromStores(balance[16]).COLLECTIBLES_SHOP, balance: outer1_2 };
      obj.track(outer2_7.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      stateFromStores(balance[18]).hideActionSheet();
    };
    obj.secondaryButtonConfig = obj1;
    obj.source = stateFromStores(balance[16]).COLLECTIBLES_SHOP;
    obj.openLazy(() => currentScreen(balance[20])(balance[19], balance.paths).then((arg0) => arg0.default), "BalanceWidgetActionSheet", obj);
  }, items2);
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  items3[1] = id;
  obj = { style: _createForOfIteratorHelperLoose().headerRightContainer };
  const callback1 = React.useCallback(() => {
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    if (null != id) {
      let obj = stateFromStores(balance[21]);
      obj = { cta_name: "wishlist header button", page_type: currentScreen };
      obj.track(outer1_7.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
      stateFromStores(balance[24]).popAll();
      obj = { userId: stateFromStores.id };
      const obj3 = stateFromStores(balance[24]);
      const items = [stateFromStores(balance[16]).COLLECTIBLES_SHOP];
      obj.sourceAnalyticsLocations = items;
      obj.initialSection = outer1_9.WISHLIST;
      stateFromStores(balance[25])(obj);
      const tmp9 = stateFromStores(balance[25]);
    }
  }, items3);
  const items4 = [callback(currentScreen(balance[26]).BalanceWidgetPillButton, { balance, onPress: callback }), , ];
  let tmp10 = null != stateFromStores;
  if (tmp10) {
    obj = { accessibilityLabel: null, variant: "tertiary", size: "sm" };
    let intl = currentScreen(balance[12]).intl;
    obj.accessibilityLabel = intl.string(currentScreen(balance[12]).t["7lZ31J"]);
    obj.icon = callback(currentScreen(balance[28]).HeartIcon, { size: "sm", color: "redesign-button-tertiary-text" });
    obj.onPress = callback1;
    tmp10 = callback(currentScreen(balance[27]).IconButton, obj);
  }
  items4[1] = tmp10;
  obj1 = { items: memo, align: "below" };
  let intl2 = currentScreen(balance[12]).intl;
  obj1.title = intl2.string(currentScreen(balance[12]).t.nSFuC0);
  obj1.keyboardShouldPersistTaps = "handled";
  obj1.children = function children(ref) {
    let obj = Object.create(null);
    obj.ref = 0;
    const merged = Object.assign(ref, obj);
    obj = { ref: ref.ref };
    const merged1 = Object.assign(merged);
    obj["variant"] = "tertiary";
    const intl = currentScreen(balance[12]).intl;
    obj["accessibilityLabel"] = intl.string(currentScreen(balance[12]).t.nSFuC0);
    obj["size"] = "sm";
    obj["icon"] = outer1_10(currentScreen(balance[30]).MenuIcon, { size: "sm", color: "redesign-button-tertiary-text" });
    return outer1_10(currentScreen(balance[27]).IconButton, obj);
  };
  items4[2] = callback(currentScreen(balance[29]).ContextMenu, obj1, currentScreen);
  obj.children = items4;
  return closure_11(View, obj);
}
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: "100%", flexDirection: "row", alignItems: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_8, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.headerTitleContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerTitle = { flexShrink: 1 };
let obj1 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.headerRightContainer = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/useCollectiblesShopHeader.tsx");

export default function useCollectiblesShopHeader() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const currentScreen = obj.currentScreen;
  let navigation;
  navigation = currentScreen(1456).useNavigation();
  const items = [navigation, currentScreen];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        return outer2_10(outer2_13, { currentScreen: outer1_0 });
      },
      headerRight() {
        return outer2_10(outer2_14, { currentScreen: outer1_0 });
      }
    });
  }, items);
};
