// Module ID: 13859
// Function ID: 104817
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default, useQuestHomeOrbShopCarouselData

// Module 13859 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  return callback2(View, { style });
}
function ItemSeparator() {
  const style = { width: PX_12 };
  return callback2(View, { style });
}
function QuestHomeOrbShopCarouselHeading(orbAmount) {
  let obj = {};
  obj = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, marginBottom: importDefault(dependencyMap[6]).space.PX_16 };
  obj.style = obj;
  obj = { variant: "text-md/semibold" };
  const intl = arg1(dependencyMap[12]).intl;
  obj.children = intl.format(arg1(dependencyMap[12]).t.CXlsRP, { orbAmount: orbAmount.orbRewardAmount });
  obj.children = callback2(arg1(dependencyMap[11]).Heading, obj);
  return callback2(View, obj);
}
function QuestHomeOrbShopCarouselPlaceholder() {
  const callback = React.useCallback(() => {
    const obj = { height: callback(closure_2[14]).QUEST_HOME_ORB_SHOP_REWARD_CARD_HEIGHT };
    return callback3(callback2(closure_2[13]), obj);
  }, []);
  const callback1 = React.useCallback((arg0) => "placeholder-" + arg0, []);
  const obj = { "Bool(false)": -19496671207239274000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": -19496450042518790000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
  const intl = arg1(dependencyMap[12]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[12]).t.hVV8Wi);
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
  return callback2(arg1(dependencyMap[15]).FlashList, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const QuestsExperimentLocations = arg1(dependencyMap[4]).QuestsExperimentLocations;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
const PX_16 = importDefault(dependencyMap[6]).space.PX_16;
const PX_12 = importDefault(dependencyMap[6]).space.PX_12;
let closure_12 = arg1(dependencyMap[7]).COLLECTIBLES_SHOP_CARD_WIDTH + PX_12;
const tmp2 = arg1(dependencyMap[5]);
let closure_13 = Array.from({ length: arg1(dependencyMap[8]).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL }, (arg0, arg1) => arg1);
const obj = { length: arg1(dependencyMap[8]).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/quests/native/QuestHomeOrbShopCarousel.tsx");

export default function QuestHomeOrbShopCarousel(orbShopProducts) {
  orbShopProducts = orbShopProducts.orbShopProducts;
  const arg1 = orbShopProducts;
  const obtainableOrbRewards = orbShopProducts.obtainableOrbRewards;
  const importDefault = obtainableOrbRewards;
  let flag = orbShopProducts.showOrbShopPlaceholderCarousel;
  if (flag === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  let callback;
  let React;
  let View;
  let closure_6;
  const tmp = callback(React.useState(0), 2);
  const first = tmp[0];
  callback = first;
  React = tmp[1];
  View = length;
  closure_6 = React.useRef(false);
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
  const items1 = [first, orbShopProducts.length];
  callback = React.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.contentOffset.x / closure_12);
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
    const obj = { newValue: { tilePosition: index, pageSection: "quest_home_orb_shop" }, children: callback2(obtainableOrbRewards(flag[14]), { product: item }) };
    return callback2(orbShopProducts(flag[18]).CollectiblesAnalyticsProvider, obj);
  }, []);
  let tmp7 = null;
  if (obtainableOrbRewards > 0) {
    if (!flag) {
      if (0 === orbShopProducts.length) {
        tmp7 = null;
      }
    }
    let obj = {};
    obj = { marginTop: importDefault(dependencyMap[6]).space.PX_48 };
    obj.style = obj;
    obj = { orbRewardAmount: obtainableOrbRewards };
    const items2 = [callback2(QuestHomeOrbShopCarouselHeading, obj), ];
    let obj1 = {};
    let obj2 = {};
    if (flag) {
      let tmp18Result = tmp18(QuestHomeOrbShopCarouselPlaceholder, {});
    } else {
      const obj3 = { "Bool(false)": -19496671207239274000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": -19496450042518790000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
      const intl = arg1(dependencyMap[12]).intl;
      obj3.accessibilityLabel = intl.string(arg1(dependencyMap[12]).t.hVV8Wi);
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
      tmp18Result = tmp18(arg1(dependencyMap[15]).FlashList, obj3);
    }
    obj2.children = tmp18Result;
    obj2 = tmp15(arg1(dependencyMap[19]).LayerScope, obj2);
    obj1.children = obj2;
    obj1 = tmp15(View, obj1);
    items2[1] = obj1;
    obj.children = items2;
    closure_9(View, obj);
    const tmp10 = View;
    const tmp16 = View;
    const tmp9 = closure_9;
  }
  return tmp7;
};
export const useQuestHomeOrbShopCarouselData = function useQuestHomeOrbShopCarouselData(arg0) {
  let enabled;
  let variation;
  ({ enabled, variation } = arg0);
  let obj = arg1(dependencyMap[8]);
  const popularOrbShopProducts = obj.usePopularOrbShopProducts({ enabled, variation });
  obj = {
    products: popularOrbShopProducts.products,
    obtainableOrbRewards: function useObtainableBountyOrbRewards() {
      const BountiesStage1Experiment = orbAmount(closure_2[9]).BountiesStage1Experiment;
      const orbAmount = BountiesStage1Experiment.useConfig({ location: constants.QUEST_HOME_MOBILE }).orbAmount;
      const items = [closure_6];
      return orbAmount(closure_2[10]).useStateFromStores(items, () => {
        let iter3;
        const tmp = callback(questHomeBounties.questHomeBounties);
        const iter = tmp();
        let iter2 = iter;
        let num = 0;
        let num2 = 0;
        if (!iter.done) {
          do {
            let tmp2 = closure_6;
            let sum = num;
            if (!closure_6.isBountyCompleted(iter2.value.id)) {
              let tmp4 = closure_0;
              sum = num + closure_0;
            }
            iter3 = tmp();
            num = sum;
            iter2 = iter3;
            num2 = sum;
          } while (!iter3.done);
        }
        return num2;
      });
    }(),
    showPlaceholderCarousel: popularOrbShopProducts.showPlaceholderCarousel
  };
  return obj;
};
