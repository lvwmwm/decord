// Module ID: 14371
// Function ID: 108480
// Name: CollectiblesShopHeaderTitle
// Dependencies: []
// Exports: default

// Module 14371 (CollectiblesShopHeaderTitle)
function CollectiblesShopHeaderTitle(currentScreen) {
  const tmp = callback2();
  let obj = { style: tmp.headerTitleContainer };
  const items = [callback(arg1(dependencyMap[10]).ShopIcon, { flexDirection: null, alignItems: "f8bf13e5289aa31d46196df3283f80c3" }), ];
  obj = { style: tmp.headerTitle };
  if (currentScreen.currentScreen === constants.ORBS) {
    const intl2 = arg1(dependencyMap[12]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[12]).t.ElYQFS);
  } else {
    const intl = arg1(dependencyMap[12]).intl;
    stringResult = intl.string(arg1(dependencyMap[12]).t.pWG4ze);
  }
  obj.children = stringResult;
  items[1] = callback(arg1(dependencyMap[11]).Heading, obj);
  obj.children = items;
  return closure_11(View, obj);
}
function CollectiblesShopHeaderRight(currentScreen) {
  currentScreen = currentScreen.currentScreen;
  const arg1 = currentScreen;
  let obj = arg1(dependencyMap[13]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser(), []);
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[14]);
  const balance = obj1.useFetchVirtualCurrencyBalance().balance;
  const dependencyMap = balance;
  const items1 = [currentScreen];
  const items2 = [balance];
  const memo = React.useMemo(() => {
    let obj = {};
    const intl = currentScreen(balance[12]).intl;
    obj.label = intl.string(currentScreen(balance[12]).t.xNiB/O);
    obj.action = function action() {
      let obj = callback(closure_2[15]);
      obj = {};
      const items = [callback2(closure_2[16]).COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM];
      obj.analyticsLocations = items;
      obj.analyticsSource = callback2(closure_2[16]).COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM;
      obj.screen = constants.FEATURED_PAGE;
      const result = obj.openCollectiblesShopMobile(obj);
    };
    let CheckmarkSmallIcon;
    if (currentScreen === constants.FEATURED_PAGE) {
      CheckmarkSmallIcon = currentScreen(balance[17]).CheckmarkSmallIcon;
    }
    obj.trailingIndicator = CheckmarkSmallIcon;
    const items = [obj, , ];
    obj = {};
    const intl2 = currentScreen(balance[12]).intl;
    obj.label = intl2.string(currentScreen(balance[12]).t.RSyoZu);
    obj.action = function action() {
      let obj = callback(closure_2[15]);
      obj = {};
      const items = [callback2(closure_2[16]).COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM];
      obj.analyticsLocations = items;
      obj.analyticsSource = callback2(closure_2[16]).COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM;
      obj.screen = constants.SHOP_ALL;
      const result = obj.openCollectiblesShopMobile(obj);
    };
    let CheckmarkSmallIcon1;
    if (currentScreen === constants.SHOP_ALL) {
      CheckmarkSmallIcon1 = currentScreen(balance[17]).CheckmarkSmallIcon;
    }
    obj.trailingIndicator = CheckmarkSmallIcon1;
    items[1] = obj;
    obj = {};
    const intl3 = currentScreen(balance[12]).intl;
    obj.label = intl3.string(currentScreen(balance[12]).t.EBYkzk);
    obj.action = function action() {
      let obj = callback(closure_2[15]);
      obj = {};
      const items = [callback2(closure_2[16]).COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM];
      obj.analyticsLocations = items;
      obj.analyticsSource = callback2(closure_2[16]).COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM;
      obj.screen = constants.ORBS;
      const result = obj.openCollectiblesShopMobile(obj);
    };
    let CheckmarkSmallIcon2;
    if (currentScreen === constants.ORBS) {
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
      let obj = callback2(closure_2[21]);
      obj = { type: "GO_TO_QUEST_HOME", source: callback2(closure_2[16]).COLLECTIBLES_SHOP, balance: closure_2 };
      obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      callback2(closure_2[18]).hideActionSheet();
      const obj3 = callback2(closure_2[18]);
      obj = { mergeExistingRoutes: true, filter: constants2.VIRTUAL_CURRENCY, fromContent: callback(closure_2[23]).QuestContent.ORBS_BALANCE_MENU };
      callback(closure_2[22]).openQuestHome(obj);
    };
    obj.primaryButtonConfig = obj;
    const obj1 = {};
    const intl2 = currentScreen(balance[12]).intl;
    obj1.buttonText = intl2.string(currentScreen(balance[12]).t./g10LC);
    obj1.onButtonPress = function onButtonPress() {
      let obj = callback2(closure_2[21]);
      obj = { type: "GO_BACK", source: callback2(closure_2[16]).COLLECTIBLES_SHOP, balance: closure_2 };
      obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      callback2(closure_2[18]).hideActionSheet();
    };
    obj.secondaryButtonConfig = obj1;
    obj.source = stateFromStores(balance[16]).COLLECTIBLES_SHOP;
    obj.openLazy(() => callback(paths[20])(paths[19], paths.paths).then((arg0) => arg0.default), "BalanceWidgetActionSheet", obj);
  }, items2);
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  items3[1] = id;
  obj = { style: callback2().headerRightContainer };
  const callback1 = React.useCallback(() => {
    let id;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    if (null != id) {
      let obj = stateFromStores(balance[21]);
      obj = { cta_name: "wishlist header button", page_type: currentScreen };
      obj.track(constants2.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
      stateFromStores(balance[24]).popAll();
      obj = { userId: stateFromStores.id };
      const obj3 = stateFromStores(balance[24]);
      const items = [stateFromStores(balance[16]).COLLECTIBLES_SHOP];
      obj.sourceAnalyticsLocations = items;
      obj.initialSection = constants3.WISHLIST;
      stateFromStores(balance[25])(obj);
      const tmp9 = stateFromStores(balance[25]);
    }
  }, items3);
  const items4 = [callback(arg1(dependencyMap[26]).BalanceWidgetPillButton, { balance, onPress: callback }), , ];
  let tmp10 = null != stateFromStores;
  if (tmp10) {
    obj = {};
    const intl = arg1(dependencyMap[12]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[12]).t.7lZ31J);
    obj.icon = callback(arg1(dependencyMap[28]).HeartIcon, { flexDirection: -1571794688, alignItems: 27174209 });
    obj.onPress = callback1;
    tmp10 = callback(arg1(dependencyMap[27]).IconButton, obj);
  }
  items4[1] = tmp10;
  obj1 = { items: memo, align: "below" };
  const intl2 = arg1(dependencyMap[12]).intl;
  obj1.title = intl2.string(arg1(dependencyMap[12]).t.nSFuC0);
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
    obj["icon"] = callback(currentScreen(balance[30]).MenuIcon, { flexDirection: -1571794688, alignItems: 27174209 });
    return callback(currentScreen(balance[27]).IconButton, obj);
  };
  items4[2] = callback(arg1(dependencyMap[29]).ContextMenu, obj1, currentScreen);
  obj.children = items4;
  return closure_11(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).CollectiblesMobileShopScreen;
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const RewardFilterTypes = arg1(dependencyMap[5]).RewardFilterTypes;
const UserProfileSections = arg1(dependencyMap[6]).UserProfileSections;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, marginTop: importDefault(dependencyMap[9]).space.PX_8, paddingLeft: importDefault(dependencyMap[9]).space.PX_8, gap: importDefault(dependencyMap[9]).space.PX_8 };
obj.headerTitleContainer = obj;
obj.headerTitle = { flexShrink: 1 };
const obj1 = { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, gap: importDefault(dependencyMap[9]).space.PX_8, marginTop: importDefault(dependencyMap[9]).space.PX_8 };
obj.headerRightContainer = obj1;
let closure_12 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[32]).fileFinishedImporting("modules/collectibles/native/useCollectiblesShopHeader.tsx");

export default function useCollectiblesShopHeader() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const currentScreen = obj.currentScreen;
  const arg1 = currentScreen;
  let importDefault;
  const navigation = arg1(dependencyMap[31]).useNavigation();
  importDefault = navigation;
  const items = [navigation, currentScreen];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        return callback(closure_13, { currentScreen: closure_0 });
      },
      headerRight() {
        return callback(closure_14, { currentScreen: closure_0 });
      }
    });
  }, items);
};
