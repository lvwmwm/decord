// Module ID: 17863
// Function ID: 17864
// Name: useCollectiblesShopHeader
// Dependencies: [19, 17, 1383, 1074, 1072, 6781, 8754, 21, 5014, 575, 12328, 5624, 1113, 504, 9554, 9673, 16887, 7719, 7351, 7303, 1252, 5258, 9678, 6784, 6744, 8750, 14487, 8028, 9468, 9874, 17864, 1497, 2]
// Exports: default

// Module 17863 (useCollectiblesShopHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import intl4 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Text_Text from "Text/Text" /* 5624 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import QuestConstants from "QuestConstants" /* 6781 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8750 */;
import Constants2 from "Constants" /* 8754 */;
import ShopIcon from "ShopIcon" /* 12328 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let tmp;
let unpackModuleId;
const CheckmarkSmallIcon3 = tmp(7303);
function CollectiblesShopHeaderTitle(currentScreen) {
  let items;
  let stringResult;
  currentScreen = currentScreen.currentScreen;
  const tmp = closure_13();
  const obj = { style: tmp.headerTitleContainer, children: items };
  items = [unpackModuleId(ShopIcon.ShopIcon, { size: "md", color: "icon-strong" }), ];
  const obj2 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, lineClamp: 1, style: tmp.headerTitle, children: stringResult };
  const Heading = Text_Text.Heading;
  const tmp2 = authStore2;
  const tmp3 = View;
  const tmp4 = unpackModuleId;
  if (currentScreen === constants.ORBS) {
    const intl2 = tmp5(1113).intl;
    stringResult = intl2.string(tmp5(1113).t.ElYQFS);
  } else {
    const intl = tmp5(1113).intl;
    stringResult = intl.string(tmp5(1113).t.pWG4ze);
  }
  items[1] = tmp4(Heading, obj2);
  return tmp2(tmp3, obj);
}
function CollectiblesShopHeaderRight(currentScreen) {
  let currentUser;
  let hasUnreadUpdate;
  let intl;
  let intl2;
  let isOrbchievementsEnabled;
  currentScreen = currentScreen.currentScreen;
  let openBalanceWidgetActionSheet;
  let id;
  let tmp = closure_13();
  let obj = currentScreen(openBalanceWidgetActionSheet[13]);
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser(), []);
  let obj2 = currentScreen(openBalanceWidgetActionSheet[14]);
  const balance = obj2.useFetchVirtualCurrencyBalance().balance;
  let obj3 = currentScreen(openBalanceWidgetActionSheet[15]);
  const isEligibleForQuests = obj3.getIsEligibleForQuests();
  let obj4 = currentScreen(openBalanceWidgetActionSheet[16]);
  const orbBalanceEntrypoint = obj4.useOrbBalanceEntrypoint({ location: "MobileCollectiblesShopHeader" });
  openBalanceWidgetActionSheet = orbBalanceEntrypoint.openBalanceWidgetActionSheet;
  const items1 = [currentScreen];
  ({ isOrbchievementsEnabled, hasUnreadUpdate } = orbBalanceEntrypoint);
  const items2 = [balance, currentScreen, openBalanceWidgetActionSheet];
  const memo = id.useMemo(() => {
    let CheckmarkSmallIcon;
    let CheckmarkSmallIcon1;
    let CheckmarkSmallIcon2;
    let intl;
    let intl2;
    let intl3;
    let obj = {
      label: intl.string(intl4.t["xNiB/O"]),
      action() {
        let items;
        const obj = { analyticsLocations: items, analyticsSource: balance(openBalanceWidgetActionSheet[18]).COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM, screen: constants.FEATURED_PAGE };
        const openCollectiblesShopMobile = currentScreen(openBalanceWidgetActionSheet[17]).openCollectiblesShopMobile;
        items = [];
        currentScreen(openBalanceWidgetActionSheet[17]);
        items[0] = balance(openBalanceWidgetActionSheet[18]).COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM;
        const result = openCollectiblesShopMobile(obj);
      },
      trailingIndicator: CheckmarkSmallIcon
    };
    intl = intl4.intl;
    CheckmarkSmallIcon = undefined;
    if (currentScreen === constants.FEATURED_PAGE) {
      CheckmarkSmallIcon = CheckmarkSmallIcon3.CheckmarkSmallIcon;
    }
    let items = [obj, , ];
    const obj2 = {
      label: intl2.string(intl4.t.RSyoZu),
      action() {
        let items;
        const obj = { analyticsLocations: items, analyticsSource: balance(openBalanceWidgetActionSheet[18]).COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM, screen: constants.SHOP_ALL };
        const openCollectiblesShopMobile = currentScreen(openBalanceWidgetActionSheet[17]).openCollectiblesShopMobile;
        items = [];
        currentScreen(openBalanceWidgetActionSheet[17]);
        items[0] = balance(openBalanceWidgetActionSheet[18]).COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM;
        const result = openCollectiblesShopMobile(obj);
      },
      trailingIndicator: CheckmarkSmallIcon1
    };
    intl2 = intl4.intl;
    CheckmarkSmallIcon1 = undefined;
    if (currentScreen === constants.SHOP_ALL) {
      CheckmarkSmallIcon1 = CheckmarkSmallIcon3.CheckmarkSmallIcon;
    }
    items[1] = obj2;
    const obj3 = {
      label: intl3.string(intl4.t.fG3RIg),
      action() {
        let items;
        const obj = { analyticsLocations: items, analyticsSource: balance(openBalanceWidgetActionSheet[18]).COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM, screen: constants.ORBS };
        const openCollectiblesShopMobile = currentScreen(openBalanceWidgetActionSheet[17]).openCollectiblesShopMobile;
        items = [];
        currentScreen(openBalanceWidgetActionSheet[17]);
        items[0] = balance(openBalanceWidgetActionSheet[18]).COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM;
        const result = openCollectiblesShopMobile(obj);
      },
      trailingIndicator: CheckmarkSmallIcon2
    };
    intl3 = intl4.intl;
    CheckmarkSmallIcon2 = undefined;
    if (currentScreen === constants.ORBS) {
      CheckmarkSmallIcon2 = CheckmarkSmallIcon3.CheckmarkSmallIcon;
    }
    items[2] = obj3;
    return items;
  }, items1);
  id = undefined;
  const callback = id.useCallback(() => {
    let COLLECTIBLES_SHOP;
    let intl;
    let intl2;
    let obj2;
    let obj3;
    let obj = { balance, primaryButtonConfig: obj2, secondaryButtonConfig: obj3, source: AnalyticsLocationDefault.COLLECTIBLES_SHOP, analyticsPage: COLLECTIBLES_SHOP };
    obj2 = {
      buttonText: intl.string(intl4.t.SymzJC),
      onButtonPress() {
        const obj = balance(openBalanceWidgetActionSheet[20]);
        const obj2 = { type: "GO_TO_QUEST_HOME", source: balance(openBalanceWidgetActionSheet[18]).COLLECTIBLES_SHOP, balance };
        obj.track(constants2.ORB_BALANCE_ACTION_SHEET_ACTION, obj2);
        const obj3 = balance(openBalanceWidgetActionSheet[21]);
        obj3.hideActionSheet();
        const obj4 = currentScreen(openBalanceWidgetActionSheet[22]);
        const obj5 = { mergeExistingRoutes: true, filter: constants3.VIRTUAL_CURRENCY, fromContent: currentScreen(openBalanceWidgetActionSheet[23]).QuestContent.ORBS_BALANCE_MENU };
        obj4.openQuestHome(obj5);
      }
    };
    intl = intl4.intl;
    obj3 = {
      buttonText: intl2.string(intl4.t["/g10LC"]),
      onButtonPress() {
        const obj = balance(openBalanceWidgetActionSheet[20]);
        const obj2 = { type: "GO_BACK", source: balance(openBalanceWidgetActionSheet[18]).COLLECTIBLES_SHOP, balance };
        obj.track(constants2.ORB_BALANCE_ACTION_SHEET_ACTION, obj2);
        const obj3 = balance(openBalanceWidgetActionSheet[21]);
        obj3.hideActionSheet();
      }
    };
    intl2 = intl4.intl;
    const tmp = openBalanceWidgetActionSheet;
    if (currentScreen === constants.ORBS) {
      COLLECTIBLES_SHOP = metroImportAll.SHOP_ORBS_TAB;
    } else {
      COLLECTIBLES_SHOP = metroImportAll.COLLECTIBLES_SHOP;
    }
    tmp(obj);
  }, items2);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const items3 = [currentScreen, id];
  let obj5 = { style: tmp.headerRightContainer, children: null };
  if (!isEligibleForQuests) {
    let tmp14;
    let tmp15;
    if (!isOrbchievementsEnabled) {
      tmp14 = closure_11;
      const obj6 = { balance };
      tmp15 = closure_11(tmp2(tmp3[26]).BalanceWidgetPill, obj6);
    }
    const items4 = [tmp15, , ];
    let tmp14Result = null != stateFromStores;
    if (tmp14Result) {
      const obj7 = { accessibilityLabel: intl.string(currentScreen(openBalanceWidgetActionSheet[12]).t["7lZ31J"]), variant: "tertiary", size: "sm", icon: tmp14(currentScreen(openBalanceWidgetActionSheet[28]).HeartIcon, { size: "sm", color: "redesign-button-tertiary-text" }), onPress: tmp10 };
      let IconButton = tmp2(tmp3[27]).IconButton;
      intl = tmp2(tmp3[12]).intl;
      tmp14Result = tmp14(IconButton, obj7);
    }
    items4[1] = tmp14Result;
    const obj8 = {
      items: memo,
      align: "below",
      title: intl2.string(currentScreen(openBalanceWidgetActionSheet[12]).t.nSFuC0),
      keyboardShouldPersistTaps: "handled",
      children(ref) {
          let intl;
          ref = ref.ref;
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref, variant: "tertiary", accessibilityLabel: intl.string(currentScreen(openBalanceWidgetActionSheet[12]).t.nSFuC0), size: "sm", icon: closure_1_11(currentScreen(openBalanceWidgetActionSheet[30]).MenuIcon, { size: "sm", color: "redesign-button-tertiary-text" }) };
          const IconButton = currentScreen(openBalanceWidgetActionSheet[27]).IconButton;
          const merged1 = Object.assign(merged);
          intl = currentScreen(openBalanceWidgetActionSheet[12]).intl;
          return closure_1_11(IconButton, obj);
        }
    };
    const ContextMenu = tmp2(tmp3[29]).ContextMenu;
    intl2 = tmp2(tmp3[12]).intl;
    items4[2] = tmp14(ContextMenu, obj8, currentScreen);
    obj5.children = items4;
    return tmp11(tmp12, obj5);
  }
  tmp15 = closure_11(tmp2(tmp3[26]).BalanceWidgetPillButton, { balance, onPress: callback, showNotificationBadge: hasUnreadUpdate });
  tmp14 = closure_11;
}
const View = react_native.View;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ AnalyticEvents: metroImportDefault, AnalyticsPages: metroImportAll } = Constants);
const RewardFilterTypes = QuestConstants.RewardFilterTypes;
const UserProfileSections = Constants2.UserProfileSections;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerTitleContainer: obj2, headerTitle: { flexShrink: 1 }, headerRightContainer: obj3 };
obj2 = { width: "100%", flexDirection: "row", alignItems: "center", marginTop: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
let closure_13 = createStyles(obj);
let result = size.fileFinishedImporting("modules/collectibles/native/useCollectiblesShopHeader.tsx");

export default function useCollectiblesShopHeader() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const currentScreen = obj.currentScreen;
  const obj2 = currentScreen(1497);
  navigation = obj2.useNavigation();
  const items = [navigation, currentScreen];
  const layoutEffect = react.useLayoutEffect(() => {
    let obj = {
      headerTitle() {
        const obj = { currentScreen };
        return closure_2_11(CollectiblesShopHeaderTitle, obj);
      },
      headerRight() {
        const obj = { currentScreen };
        return closure_2_11(CollectiblesShopHeaderRight, obj);
      }
    };
    navigation.setOptions(obj);
  }, items);
};
