// Module ID: 14372
// Function ID: 108502
// Name: feedBlock
// Dependencies: []
// Exports: default

// Module 14372 (feedBlock)
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).CollectiblesMobileShopScreen;
const Consents = arg1(dependencyMap[6]).Consents;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { -2036989357: "<string:354549762>", 996371416: "<string:3477209090>", 5330602: "<string:587203104>", gap: importDefault(dependencyMap[9]).space.PX_16 };
obj.feedContainer = obj;
const tmp3 = arg1(dependencyMap[7]);
obj.feedHeader = { gap: importDefault(dependencyMap[9]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16 };
const obj2 = { <string:3352632547>: null, <string:2849265413>: 0, <string:3032608799>: 360, <string:4037645763>: 0, gap: importDefault(dependencyMap[9]).space.PX_8 };
obj.feedTitle = obj2;
const obj1 = { gap: importDefault(dependencyMap[9]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[9]).space.PX_16 };
obj.feedFooter = { gap: importDefault(dependencyMap[9]).space.PX_16 };
obj.feedFooterImage = { width: 24, paddingHorizontal: 24 };
obj.feedFooterOrbImage = {};
let closure_13 = obj.createStyles(obj);
const obj3 = { gap: importDefault(dependencyMap[9]).space.PX_16 };
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/collectibles/native/FeedBlock.tsx");

export default function _default(feedBlock) {
  let disableBundleStaticBackground;
  let preferVCPrice;
  feedBlock = feedBlock.feedBlock;
  const arg1 = feedBlock;
  const screen = feedBlock.screen;
  function goToShopAll() {
    let obj = feedBlock(tmp3[15]);
    obj = {};
    const items = [stateFromStores1(tmp3[16]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON];
    obj.analyticsLocations = items;
    obj.analyticsSource = stateFromStores1(tmp3[16]).COLLECTIBLES_MOBILE_SHOP_ALL_BUTTON;
    obj.screen = constants.SHOP_ALL;
    const result = obj.openCollectiblesShopMobile(obj);
  }
  ({ preferVCPrice, disableBundleStaticBackground } = feedBlock);
  let str = callback2();
  let obj = arg1(dependencyMap[10]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => feedBlock(tmp3[11]).isThemeDark(theme.theme));
  let obj1 = arg1(dependencyMap[10]);
  const items1 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_8.hasConsented(constants2.PERSONALIZATION));
  const importDefault = stateFromStores1;
  const tmp3 = importDefault(dependencyMap[12])();
  const dependencyMap = tmp3;
  const items2 = [feedBlock.sortedSkuIds, tmp3, stateFromStores1];
  const memo = React.useMemo(() => {
    const sortedSkuIds = feedBlock.sortedSkuIds;
    let items;
    if (null != sortedSkuIds) {
      items = sortedSkuIds[closure_0(undefined, closure_2[13]).ShopHomeSortType.RECOMMENDED];
    }
    if (null == items) {
      items = [];
    }
    const sortedSkuIds2 = feedBlock.sortedSkuIds;
    let items1;
    if (null != sortedSkuIds2) {
      items1 = sortedSkuIds2[closure_0(undefined, closure_2[13]).ShopHomeSortType.POPULAR];
    }
    if (null == items1) {
      items1 = [];
    }
    let tmp5 = stateFromStores1;
    if (stateFromStores1) {
      tmp5 = items.length > 0;
    }
    const obj = {};
    if (tmp5) {
      items1 = items;
    }
    obj.feedProducts = tmp3(items1);
    obj.isPersonalized = tmp5;
    return obj;
  }, items2);
  let isPersonalized = memo.isPersonalized;
  let obj2 = arg1(dependencyMap[14]);
  const filteredAndSortedProducts = obj2.useFilteredAndSortedProducts({ products: memo.feedProducts, maxProducts: 36, screen });
  let obj3 = arg1(dependencyMap[10]);
  const items3 = [closure_6];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => useReducedMotion.useReducedMotion);
  const intl = arg1(dependencyMap[18]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[18]).t;
  if (isPersonalized) {
    let stringResult = string(t.NSv5KV);
  } else {
    stringResult = string(t.ivaAA7);
  }
  obj = { value: importDefault(dependencyMap[17])(importDefault(dependencyMap[16]).COLLECTIBLES_SHOP_POPULAR_PICKS).analyticsLocations };
  obj = { style: str.feedContainer };
  obj1 = { style: str.feedHeader };
  obj2 = { style: str.feedTitle };
  obj3 = { variant: "heading-lg/semibold", children: stringResult };
  const items4 = [callback(arg1(dependencyMap[19]).Heading, obj3), ];
  if (isPersonalized) {
    const obj4 = {
      onPress() {
          return stateFromStores1(tmp3[21]).openLazy(feedBlock(tmp3[23])(tmp3[22], tmp3.paths), "PersonalizationDisclaimerActionSheet", {});
        },
      hitSlop: 14
    };
    const intl2 = arg1(dependencyMap[18]).intl;
    obj4.aria-label = intl2.string(arg1(dependencyMap[18]).t.hvVgAZ);
    const obj5 = { size: "xs" };
    obj4.children = callback(arg1(dependencyMap[24]).CircleInformationIcon, obj5);
    isPersonalized = callback(arg1(dependencyMap[20]).PressableOpacity, obj4);
  }
  items4[1] = isPersonalized;
  obj2.children = items4;
  const items5 = [closure_12(closure_5, obj2), ];
  let tmp16 = !tmp6;
  if (screen !== constants.ORBS) {
    const obj6 = { onPress: goToShopAll };
    const intl3 = arg1(dependencyMap[18]).intl;
    obj6.text = intl3.string(arg1(dependencyMap[18]).t.xFcotU);
    obj6.variant = "primary";
    obj6.size = "sm";
    tmp16 = callback(arg1(dependencyMap[25]).Button, obj6);
  }
  items5[1] = tmp16;
  obj1.children = items5;
  const items6 = [closure_12(closure_5, obj1), , ];
  const obj7 = { products: filteredAndSortedProducts, loadingCardsNum: 36, preferVCPrice, accessibilityLabel: stringResult, disableBundleStaticBackground };
  items6[1] = callback(importDefault(dependencyMap[26]), obj7);
  const obj8 = { style: str.feedFooter };
  const obj9 = {};
  const intl4 = arg1(dependencyMap[18]).intl;
  obj9.children = intl4.string(arg1(dependencyMap[18]).t.Yr70c4);
  const items7 = [callback(arg1(dependencyMap[19]).Text, obj9), , ];
  const obj10 = { onPress: goToShopAll };
  const intl5 = arg1(dependencyMap[18]).intl;
  obj10.text = intl5.string(arg1(dependencyMap[18]).t.AfrvRD);
  obj10.variant = "primary";
  obj10.size = "md";
  items7[1] = callback(arg1(dependencyMap[25]).Button, obj10);
  if (screen === constants.ORBS) {
    if (stateFromStores2) {
      const obj11 = {};
      const obj12 = { uri: importDefault(dependencyMap[27]) };
      obj11.source = obj12;
      obj11.style = str.feedFooterOrbImage;
      obj11.accessibilityElementsHidden = true;
      str = "no-hide-descendants";
      obj11.importantForAccessibility = "no-hide-descendants";
      let tmp29Result = callback(closure_4, obj11);
    } else {
      if (obj18.isAndroid()) {
        const obj13 = {};
        let tmp30Result = tmp30(tmp31[29]);
        obj13.url = tmp30(tmp31[30]);
        obj13.style = `no-hide-descendants`.feedFooterOrbImage;
        tmp29Result = tmp29(tmp30Result, obj13);
      } else {
        const obj14 = { grow: true, key: true, label: null, name: false, backgroundColor: "no", justifyContent: "none" };
        const obj15 = {};
        tmp30Result = tmp30(tmp31[31]);
        obj15.uri = tmp30(tmp31[30]);
        obj14.source = obj15;
        obj14.style = `no-hide-descendants`.feedFooterOrbImage;
        tmp29Result = tmp29(tmp30Result, obj14);
      }
      const obj18 = arg1(dependencyMap[28]);
    }
  } else {
    const obj16 = {};
    if (stateFromStores) {
      obj16.source = tmp24(tmp25[32]);
      obj16.style = str.feedFooterImage;
      obj16.accessibilityElementsHidden = true;
      obj16.importantForAccessibility = "no-hide-descendants";
      let tmp26 = obj16;
    } else {
      obj16.source = tmp24(tmp25[33]);
      obj16.style = str.feedFooterImage;
      obj16.accessibilityElementsHidden = true;
      obj16.importantForAccessibility = "no-hide-descendants";
      tmp26 = obj16;
    }
    items7[2] = callback(closure_4, tmp26);
    obj8.children = items7;
    items6[2] = closure_12(closure_5, obj8);
    obj.children = items6;
    obj.children = tmp11(tmp12, obj);
    return callback(arg1(dependencyMap[17]).AnalyticsLocationProvider, obj);
  }
};
