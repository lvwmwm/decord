// Module ID: 13980
// Function ID: 107013
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 27, 6941, 4976, 33, 689, 8663, 13967, 10841, 566, 4126, 1212, 13981, 13982, 7879, 6959, 6969, 8666, 5449, 2]
// Exports: default, useQuestHomeOrbShopCarouselData

// Module 13980 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import jsxProd from "jsxProd";

let closure_8;
let closure_9;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function ListEdgeSpacer() {
  const style = { width: PX_16 };
  return callback(View, { style });
}
function ItemSeparator() {
  const style = { width: PX_12 };
  return callback(View, { style });
}
function QuestHomeOrbShopCarouselHeading(orbAmount) {
  let obj = {};
  obj = { paddingHorizontal: importDefault(689).space.PX_16, marginBottom: importDefault(689).space.PX_16 };
  obj.style = obj;
  obj = { variant: "text-md/semibold" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.format(require(1212) /* getSystemLocale */.t.CXlsRP, { orbAmount: orbAmount.orbRewardAmount });
  obj.children = callback(require(4126) /* Text */.Heading, obj);
  return callback(View, obj);
}
function QuestHomeOrbShopCarouselPlaceholder() {
  const callback = React.useCallback(() => {
    const obj = { height: outer1_0(outer1_2[14]).QUEST_HOME_ORB_SHOP_REWARD_CARD_HEIGHT };
    return outer1_8(outer1_1(outer1_2[13]), obj);
  }, []);
  const callback1 = React.useCallback((arg0) => "placeholder-" + arg0, []);
  let obj = { horizontal: true, accessibilityRole: "list" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.hVV8Wi);
  obj.accessibilityState = { busy: true };
  obj.data = closure_13;
  obj.keyExtractor = callback1;
  obj.renderItem = callback;
  obj.decelerationRate = "fast";
  obj.snapToInterval = closure_12;
  obj.showsHorizontalScrollIndicator = false;
  obj.ListHeaderComponent = ListEdgeSpacer;
  obj.ListFooterComponent = ListEdgeSpacer;
  obj.ItemSeparatorComponent = ItemSeparator;
  return callback(require(7879) /* defaultMVCPConfig */.FlashList, obj);
}
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_16 = require("_createForOfIteratorHelperLoose").space.PX_16;
const PX_12 = require("_createForOfIteratorHelperLoose").space.PX_12;
let closure_12 = require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_WIDTH + PX_12;
let closure_13 = Array.from({ length: require("_createForOfIteratorHelperLoose").MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL }, (arg0, arg1) => arg1);
let obj = { length: require("_createForOfIteratorHelperLoose").MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestHomeOrbShopCarousel.tsx");

export default function QuestHomeOrbShopCarousel(orbShopProducts) {
  orbShopProducts = orbShopProducts.orbShopProducts;
  const obtainableOrbRewards = orbShopProducts.obtainableOrbRewards;
  let flag = orbShopProducts.showOrbShopPlaceholderCarousel;
  if (flag === undefined) {
    flag = false;
  }
  let first;
  let React;
  let length;
  let _createForOfIteratorHelperLoose;
  let tmp = first(React.useState(0), 2);
  first = tmp[0];
  React = tmp[1];
  length = orbShopProducts.length;
  _createForOfIteratorHelperLoose = React.useRef(false);
  const items = [obtainableOrbRewards, orbShopProducts.length, flag];
  const effect = React.useEffect(() => {
    let tmp = ref.current || flag;
    if (!tmp) {
      tmp = 0 === orbShopProducts.length;
    }
    if (!tmp) {
      ref.current = true;
      let obj = orbShopProducts(flag[16]);
      obj = { obtainableOrbRewards, carouselSize: orbShopProducts.length, isPlaceholderCarousel: false };
      const result = obj.trackQuestHomeOrbShopCarouselViewed(obj);
    }
  }, items);
  const items1 = [first, length];
  const callback = React.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.contentOffset.x / outer1_12);
    if (rounded !== first) {
      let result = {};
      if (rounded > first) {
        let LEFT = orbShopProducts(flag[17]).HorizontalScrollingDirection.RIGHT;
      } else {
        LEFT = orbShopProducts(flag[17]).HorizontalScrollingDirection.LEFT;
      }
      result.scrollingDirection = LEFT;
      result.carouselPosition = rounded;
      result.carouselSize = length;
      result = orbShopProducts(flag[16]).trackQuestHomeOrbShopCarouselScroll(result);
      callback(rounded);
      const obj2 = orbShopProducts(flag[16]);
    }
  }, items1);
  const callback1 = React.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    const obj = { newValue: { tilePosition: index, pageSection: "quest_home_orb_shop" }, children: outer1_8(obtainableOrbRewards(flag[14]), { product: item }) };
    return outer1_8(orbShopProducts(flag[18]).CollectiblesAnalyticsProvider, obj);
  }, []);
  let tmp7 = null;
  if (obtainableOrbRewards > 0) {
    if (!flag) {
      if (0 === orbShopProducts.length) {
        tmp7 = null;
      }
    }
    let obj = {};
    obj = { marginTop: obtainableOrbRewards(flag[6]).space.PX_48 };
    obj.style = obj;
    obj = { orbRewardAmount: obtainableOrbRewards };
    const items2 = [callback(QuestHomeOrbShopCarouselHeading, obj), ];
    let obj1 = {};
    let obj2 = {};
    if (flag) {
      let tmp18Result = tmp18(QuestHomeOrbShopCarouselPlaceholder, {});
    } else {
      const obj3 = { horizontal: true, accessibilityRole: "list" };
      const intl = orbShopProducts(flag[12]).intl;
      obj3.accessibilityLabel = intl.string(orbShopProducts(flag[12]).t.hVV8Wi);
      obj3.data = orbShopProducts;
      obj3.keyExtractor = tmp6;
      obj3.renderItem = callback1;
      obj3.decelerationRate = "fast";
      obj3.snapToInterval = closure_12;
      obj3.showsHorizontalScrollIndicator = false;
      obj3.ListHeaderComponent = ListEdgeSpacer;
      obj3.ListFooterComponent = ListEdgeSpacer;
      obj3.ItemSeparatorComponent = ItemSeparator;
      obj3.onMomentumScrollEnd = callback;
      tmp18Result = tmp18(orbShopProducts(flag[15]).FlashList, obj3);
    }
    obj2.children = tmp18Result;
    obj2 = tmp15(orbShopProducts(flag[19]).LayerScope, obj2);
    obj1.children = obj2;
    obj1 = tmp15(length, obj1);
    items2[1] = obj1;
    obj.children = items2;
    closure_9(length, obj);
    const tmp10 = length;
    const tmp16 = length;
    const tmp9 = closure_9;
  }
  return tmp7;
};
export const useQuestHomeOrbShopCarouselData = function useQuestHomeOrbShopCarouselData(arg0) {
  let enabled;
  let variation;
  ({ enabled, variation } = arg0);
  let obj = require(13967) /* _createForOfIteratorHelperLoose */;
  const popularOrbShopProducts = obj.usePopularOrbShopProducts({ enabled, variation });
  obj = {
    products: popularOrbShopProducts.products,
    obtainableOrbRewards: (function useObtainableBountyOrbRewards() {
      const BountiesStage1Experiment = outer1_0(outer1_2[9]).BountiesStage1Experiment;
      const orbAmount = BountiesStage1Experiment.useConfig({ location: outer1_7.QUEST_HOME_MOBILE }).orbAmount;
      const items = [outer1_6];
      return outer1_0(outer1_2[10]).useStateFromStores(items, () => {
        let iter3;
        const tmp = outer2_14(outer2_6.questHomeBounties);
        const iter = tmp();
        let iter2 = iter;
        let num = 0;
        let num2 = 0;
        if (!iter.done) {
          do {
            let tmp2 = outer2_6;
            let sum = num;
            if (!outer2_6.isBountyCompleted(iter2.value.id)) {
              let tmp4 = orbAmount;
              sum = num + orbAmount;
            }
            iter3 = tmp();
            num = sum;
            iter2 = iter3;
            num2 = sum;
          } while (!iter3.done);
        }
        return num2;
      });
    })(),
    showPlaceholderCarousel: popularOrbShopProducts.showPlaceholderCarousel
  };
  return obj;
};
