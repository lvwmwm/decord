// Module ID: 14614
// Function ID: 14615
// Name: QuestHomeOrbShopCarousel
// Dependencies: [32, 19, 17, 1182, 7115, 5756, 21, 576, 14601, 4836, 504, 4832, 1115, 8337, 8179, 14591, 14615, 8226, 7131, 7141, 8229, 4540, 2]
// Exports: default, useQuestHomeOrbShopCarouselData

// Module 14614 (QuestHomeOrbShopCarousel)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import AnalyticsActions from "AnalyticsActions" /* 7131 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8229 */;
import SkeletonCardDefault from "SkeletonCard" /* 8337 */;
import usePopularOrbShopProducts from "usePopularOrbShopProducts" /* 14601 */;
import QuestHomeOrbShopRewardCardDefault from "QuestHomeOrbShopRewardCard" /* 14615 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import BountyStore from "BountyStore" /* 7115 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_12;

let c10;
let c9;
function ListEdgeSpacer(width) {
  const obj = { style: { width: width.width } };
  return React4(View, obj);
}
function ItemSeparator() {
  let obj2;
  const obj = { style: obj2 };
  obj2 = { width: PX_12 };
  return React4(View, obj);
}
function QuestHomeOrbShopCarouselHeading(belowCarousel) {
  let Heading;
  let compactHeading;
  let intl;
  let listEdgeSpacing;
  let num;
  let num2;
  let obj3;
  let flag = belowCarousel.belowCarousel;
  const orbRewardAmount = belowCarousel.orbRewardAmount;
  if (flag === undefined) {
    flag = false;
  }
  ({ compactHeading, listEdgeSpacing } = belowCarousel);
  if (compactHeading === undefined) {
    compactHeading = false;
  }
  const obj = { paddingHorizontal: listEdgeSpacing, marginTop: num, marginBottom: num2 };
  num = 0;
  const tmp2 = View;
  if (flag) {
    num = nativeDefault.space.PX_8;
  }
  num2 = 0;
  if (!flag) {
    num2 = nativeDefault.space.PX_8;
  }
  let str = "text-xs/medium";
  const obj2 = { style: obj, children: React4(Heading, obj3) };
  Heading = Text_Text.Heading;
  if (!flag) {
    let str2 = "text-md/semibold";
    if (compactHeading) {
      str2 = "text-sm/semibold";
    }
    str = str2;
  }
  obj3 = { variant: str, color: "text-strong", children: intl.format(intl2.t.CXlsRP, { orbAmount: orbRewardAmount }) };
  intl = tmp7(1115).intl;
  return React4(tmp2, obj2);
}
function QuestHomeOrbShopCarouselPlaceholder(cardWidth) {
  let cardStride;
  let intl;
  let items3;
  let listStyle;
  cardWidth = cardWidth.cardWidth;
  const cardHeight = cardWidth.cardHeight;
  const listEdgeSpacing = cardWidth.listEdgeSpacing;
  const items = [cardWidth, cardHeight];
  ({ listStyle, cardStride } = cardWidth);
  const callback = react.useCallback(() => {
    size = { width: cardWidth, height: cardHeight };
    return React4(SkeletonCardDefault, size);
  }, items);
  const items1 = [listEdgeSpacing];
  const callback1 = react.useCallback((arg0) => "placeholder-" + arg0, []);
  const items2 = [listEdgeSpacing];
  const callback2 = react.useCallback(() => {
    const obj = { width: listEdgeSpacing };
    return React4(ListEdgeSpacer, obj);
  }, items1);
  const callback3 = react.useCallback(() => {
    const obj = { width: listEdgeSpacing };
    return React4(ListEdgeSpacer, obj);
  }, items2);
  let obj = { horizontal: true, accessibilityRole: "list", accessibilityLabel: intl.string(cardWidth(listEdgeSpacing[12]).t.hVV8Wi), accessibilityState: { busy: true }, data, keyExtractor: callback1, renderItem: callback, style: items3, contentContainerStyle, decelerationRate: "fast", snapToInterval: cardStride, showsHorizontalScrollIndicator: false, ListHeaderComponent: callback2, ListFooterComponent: callback3, ItemSeparatorComponent: ItemSeparator };
  const FlashList = cardWidth(listEdgeSpacing[14]).FlashList;
  intl = cardWidth(listEdgeSpacing[12]).intl;
  items3 = [listStyle, contentContainerStyle];
  return closure_9(FlashList, obj);
}
const View = react_native.View;
const BOUNTY_ORB_AMOUNT = QuestConstants.BOUNTY_ORB_AMOUNT;
({ jsx: c9, jsxs: c10 } = Fragment);
const PX_20 = nativeDefault.space.PX_20;
const PX_12 = nativeDefault.space.PX_12;
const contentContainerStyle = { backgroundColor: "transparent" };
let obj = { length: usePopularOrbShopProducts.MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL };
const data = Array.from(obj, (arg0, arg1) => arg1);
let closure_17 = createStyles.createStyles(() => {
  const obj = { standaloneRoot: { marginTop: nativeDefault.space.PX_32 }, headerMediaRoot: { paddingBottom: nativeDefault.space.PX_8 } };
  ({ marginTop: nativeDefault.space.PX_32 });
  ({ paddingBottom: nativeDefault.space.PX_8 });
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestHomeOrbShopCarousel.tsx");

export default function QuestHomeOrbShopCarousel(showOrbShopPlaceholderCarousel) {
  let ONYX;
  let intl;
  let items6;
  let items7;
  let obj3;
  let obtainableOrbRewards;
  let orbShopProducts;
  let ref;
  let tmp19Result2;
  let tmp20;
  ({ orbShopProducts, obtainableOrbRewards } = showOrbShopPlaceholderCarousel);
  let flag = showOrbShopPlaceholderCarousel.showOrbShopPlaceholderCarousel;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = showOrbShopPlaceholderCarousel.embedded;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = showOrbShopPlaceholderCarousel.replacesHeaderMedia;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let listEdgeSpacing = showOrbShopPlaceholderCarousel.listEdgeSpacing;
  if (listEdgeSpacing === undefined) {
    listEdgeSpacing = ref;
  }
  let flag4 = showOrbShopPlaceholderCarousel.clickable;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let COLLECTIBLES_SHOP_CARD_WIDTH;
  let COLLECTIBLES_SHOP_CARD_HEIGHT;
  let c7;
  let first;
  let closure_9;
  let length;
  ref = undefined;
  closure_12 = undefined;
  let tmp = closure_17();
  const tmp2 = obtainableOrbRewards;
  const tmp3 = flag3;
  obtainableOrbRewards(flag3[10]);
  [][0] = COLLECTIBLES_SHOP_CARD_HEIGHT;
  if (flag2) {
    ONYX = tmp2(tmp3[15]).ThemeTypes.ONYX;
  } else {
    ONYX = tmp5;
  }
  if (flag3) {
    COLLECTIBLES_SHOP_CARD_WIDTH = tmp2(tmp3[16]).QUEST_HOME_REPLACE_MEDIA_CARD_WIDTH;
  } else {
    COLLECTIBLES_SHOP_CARD_WIDTH = tmp2(tmp3[17]).COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  if (flag3) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = tmp2(tmp3[16]).QUEST_HOME_REPLACE_MEDIA_CARD_HEIGHT;
  } else {
    COLLECTIBLES_SHOP_CARD_HEIGHT = tmp2(tmp3[17]).COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  const sum = COLLECTIBLES_SHOP_CARD_WIDTH + closure_12;
  c7 = sum;
  let obj = flag4;
  const items = [COLLECTIBLES_SHOP_CARD_HEIGHT];
  const memo = flag4.useMemo(() => ({ height: COLLECTIBLES_SHOP_CARD_HEIGHT }), items);
  const items1 = [listEdgeSpacing];
  const items2 = [listEdgeSpacing];
  const callback = flag4.useCallback(() => {
    const obj = { width: listEdgeSpacing };
    return React4(ListEdgeSpacer, obj);
  }, items1);
  const callback1 = flag4.useCallback(() => {
    const obj = { width: listEdgeSpacing };
    return React4(ListEdgeSpacer, obj);
  }, items2);
  const tmp10 = listEdgeSpacing(flag4.useState(0), 2);
  first = tmp10[0];
  closure_9 = tmp10[1];
  length = orbShopProducts.length;
  ref = flag4.useRef(false);
  let tmp12 = obtainableOrbRewards > 0;
  if (tmp12) {
    tmp12 = flag || length > 0;
  }
  closure_12 = tmp12;
  const items3 = [length, tmp12, obtainableOrbRewards, flag];
  const effect = obj.useEffect(() => {
    let current = ref.current;
    const tmp = ref;
    if (!current) {
      current = !closure_12;
    }
    if (!current) {
      current = flag;
    }
    if (!current) {
      tmp.current = true;
      const obj2 = { obtainableOrbRewards, carouselSize: length, isPlaceholderCarousel: false };
      const obj = AnalyticsActions;
      const result = obj.trackQuestHomeOrbShopCarouselViewed(obj2);
    }
  }, items3);
  const items4 = [first, sum, length];
  const items5 = [COLLECTIBLES_SHOP_CARD_HEIGHT, COLLECTIBLES_SHOP_CARD_WIDTH, flag4, flag3];
  const callback2 = obj.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.contentOffset.x / c7);
    if (rounded !== first) {
      let LEFT;
      const trackQuestHomeOrbShopCarouselScroll = AnalyticsActions.trackQuestHomeOrbShopCarouselScroll;
      AnalyticsActions;
      if (rounded > tmp2) {
        LEFT = tmp3(7141).HorizontalScrollingDirection.RIGHT;
      } else {
        LEFT = tmp3(7141).HorizontalScrollingDirection.LEFT;
      }
      const obj = { scrollingDirection: LEFT, carouselPosition: rounded, carouselSize: length };
      const result = trackQuestHomeOrbShopCarouselScroll(obj);
      closure_9(rounded);
    }
  }, items4);
  const callback3 = obj.useCallback((arg0) => {
    let index;
    let item;
    let obj2;
    ({ item, index } = arg0);
    const obj = { newValue: { tilePosition: index, pageSection: "quest_home_orb_shop" }, children: React4(QuestHomeOrbShopRewardCardDefault, obj2) };
    const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
    obj2 = { product: item, cardWidth: COLLECTIBLES_SHOP_CARD_WIDTH, cardHeight: COLLECTIBLES_SHOP_CARD_HEIGHT, hideCardDetails: flag3, clickable: flag4 };
    return React4(CollectiblesAnalyticsProvider, obj);
  }, items5);
  if (tmp12) {
    let standaloneRoot;
    if (flag3) {
      standaloneRoot = tmp.headerMediaRoot;
    } else if (!flag2) {
      standaloneRoot = tmp.standaloneRoot;
    }
    let obj2 = { theme: ONYX, children: tmp20(COLLECTIBLES_SHOP_CARD_WIDTH, obj3) };
    let tmp19Result = !flag3;
    obj3 = { style: standaloneRoot, children: items6 };
    const ThemeContextProvider = tmp2(tmp3[21]).ThemeContextProvider;
    tmp20 = length;
    if (!flag3) {
      const obj4 = { orbRewardAmount: obtainableOrbRewards, listEdgeSpacing, compactHeading: flag2 };
      tmp19Result = tmp19(QuestHomeOrbShopCarouselHeading, obj4);
    }
    items6 = [tmp19Result, , ];
    const obj5 = { style: memo, children: tmp19Result2 };
    if (flag) {
      const obj6 = { listStyle: memo, cardWidth: COLLECTIBLES_SHOP_CARD_WIDTH, cardHeight: COLLECTIBLES_SHOP_CARD_HEIGHT, cardStride: sum, listEdgeSpacing };
      tmp19Result2 = tmp19(QuestHomeOrbShopCarouselPlaceholder, obj6);
    } else {
      const obj7 = { horizontal: true, accessibilityRole: "list", accessibilityLabel: intl.string(tmp2(tmp3[12]).t.hVV8Wi), data: orbShopProducts, keyExtractor: tmp17, renderItem: callback3, style: items7, contentContainerStyle, decelerationRate: "fast", snapToInterval: sum, showsHorizontalScrollIndicator: false, ListHeaderComponent: callback, ListFooterComponent: callback1, ItemSeparatorComponent: ItemSeparator, onMomentumScrollEnd: callback2 };
      const FlashList = tmp2(tmp3[14]).FlashList;
      intl = tmp2(tmp3[12]).intl;
      items7 = [memo, contentContainerStyle];
      tmp19Result2 = tmp19(FlashList, obj7);
    }
    items6[1] = closure_9(COLLECTIBLES_SHOP_CARD_WIDTH, obj5);
    if (flag3) {
      const obj8 = { orbRewardAmount: obtainableOrbRewards, belowCarousel: true, listEdgeSpacing, compactHeading: true };
      flag3 = tmp19(QuestHomeOrbShopCarouselHeading, obj8);
    }
    items6[2] = flag3;
    return closure_9(ThemeContextProvider, obj2);
  } else {
    return null;
  }
};
export const useQuestHomeOrbShopCarouselData = function useQuestHomeOrbShopCarouselData(arg0) {
  let bountyCompleted;
  let enabled;
  let sortType;
  ({ enabled, sortType } = arg0);
  const items = [BountyStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => {
    let num = 0;
    const questHomeBounties = bountyCompleted.questHomeBounties;
    for (const item10007 of questHomeBounties) {
      if (!bountyCompleted.isBountyCompleted(item10007.id)) {
        num = num + BOUNTY_ORB_AMOUNT;
      }
      continue;
    }
    return num;
  });
  const obj2 = usePopularOrbShopProducts;
  const popularOrbShopProducts = obj2.usePopularOrbShopProducts({ enabled, sortType });
  return { products: popularOrbShopProducts.products, obtainableOrbRewards: stateFromStores, showPlaceholderCarousel: popularOrbShopProducts.showPlaceholderCarousel };
};
