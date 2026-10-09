// Module ID: 16630
// Function ID: 16631
// Name: OneColumnGuildUpsellList
// Dependencies: [32, 19, 15841, 21, 5091, 8952, 1273, 558, 576, 1504, 504, 6848, 6872, 16631, 8608, 2]

// Module 16630 (OneColumnGuildUpsellList)
import Fragment from "Fragment" /* 21 */;
import GameCommunityMultiGuildUpsellCardDefault from "GameCommunityMultiGuildUpsellCard" /* 16631 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore" /* 15841 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, num, offset, scrollToOffsetResult, set, tmp6;

let react = react_mod;
const jsx = Fragment.jsx;
const viewabilityConfig = { itemVisiblePercentThreshold: 50, minimumViewTime: 500 };
let c8 = 0;
let closure_9 = createStyles.createStyles({ hidden: { opacity: 0 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOnViewableItemsChanged(arg0, arg1) {
  let closure_0;
  let first;
  let ref;
  let tmp7;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("react");
  const cResult = obj.c(5);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    cResult[0] = set;
    first = set;
  } else {
    first = cResult[0];
  }
  dependencyMap = react.useRef(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      const current = ref.current;
      current.clear();
    };
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  const tmpResult = tmp(1504);
  const focusEffect = tmpResult.useFocusEffect(tmp7);
  if (cResult[2] === arg1) {
    let tmp9;
    if (cResult[3] === arg0) {
      tmp9 = cResult[4];
    }
    return tmp9;
  }
  const fn2 = function u(viewableItems) {
    let location_stack;
    viewableItems = viewableItems.viewableItems;
    let item = viewableItems.forEach((item) => {
      let obj2;
      item = item.item;
      if (null != item) {
        let hasItem = null == item.id;
        if (!hasItem) {
          const current = ref.current;
          hasItem = current.has(item.id);
        }
        if (!hasItem) {
          const current2 = ref.current;
          const tmp5 = closure_1_0[item.id];
          current2.add(item.id);
          const obj = { type: closure_0(ref[6]).ImpressionTypes.PANE, name: closure_0(ref[6]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD, properties: obj2 };
          const trackImpression = closure_0(ref[5]).trackImpression;
          closure_0(ref[5]);
          obj2 = { game_id: tmp5, guild_id: item.id, location_stack };
          trackImpression(obj);
        }
      }
    });
  };
  cResult[2] = arg1;
  cResult[3] = arg0;
  cResult[4] = fn2;
  tmp9 = fn2;
}) : (function useOnViewableItemsChanged(arg0, arg1) {
  let closure_0;
  let ref;
  _require = arg0;
  let closure_1 = arg1;
  const useRef = react.useRef;
  set = new Set();
  dependencyMap = useRef(set);
  let obj = require("Link");
  const focusEffect = obj.useFocusEffect(react.useCallback(() => {
    const current = ref.current;
    current.clear();
  }, []));
  const items = [arg0, arg1];
  return react.useCallback((viewableItems) => {
    let location_stack;
    viewableItems = viewableItems.viewableItems;
    let item = viewableItems.forEach((item) => {
      let obj2;
      item = item.item;
      if (null != item) {
        let hasItem = null == item.id;
        if (!hasItem) {
          const current = ref.current;
          hasItem = current.has(item.id);
        }
        if (!hasItem) {
          const current2 = ref.current;
          const tmp5 = closure_1_0[item.id];
          current2.add(item.id);
          const obj = { type: closure_0(ref[6]).ImpressionTypes.PANE, name: closure_0(ref[6]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD, properties: obj2 };
          const trackImpression = closure_0(ref[5]).trackImpression;
          closure_0(ref[5]);
          obj2 = { game_id: tmp5, guild_id: item.id, location_stack };
          trackImpression(obj);
        }
      }
    });
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function OneColumnGuildUpsellList(onDismiss) {
  let cardAction;
  let closure_4;
  let contentContainerStyle;
  let first1;
  let ref;
  let stateFromStoresObject;
  let subheader;
  let suggestedGuilds;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp7;
  let tmp = cardAction;
  let tmp2 = ref;
  let obj = cardAction(ref[8]);
  const cResult = obj.c(22);
  ({ suggestedGuilds, contentContainerStyle, subheader, cardAction } = onDismiss);
  onDismiss = onDismiss.onDismiss;
  let tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function v(id) {
      return id.id;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  ref = react.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return offset > 0;
      }
    }
    cResult[1] = E;
    tmp7 = E;
  } else {
    class E {
      constructor() {
        return offset > 0;
      }
    }
  }
  const tmp8 = first1(react.useState(tmp7), 2);
  first1 = tmp8[0];
  react = tmp8[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor(nativeEvent) {
        const y = nativeEvent.nativeEvent.contentOffset.y;
      }
    }
    cResult[2] = O;
  } else {
    class O {
      constructor(nativeEvent) {
        const y = nativeEvent.nativeEvent.contentOffset.y;
      }
    }
  }
  if (cResult[3] !== first1) {
    class A {
      constructor() {
        tmp = closure_3;
        if (tmp) {
          tmp2 = closure_2;
          current = closure_2.current;
          tmp3 = null;
          if (current != null) {
            obj = { offset: null, animated: false };
            tmp4 = c8;
            obj.offset = c8;
            scrollToOffsetResult = current.scrollToOffset(obj);
          }
          tmp6 = globalThis;
          _requestAnimationFrame = requestAnimationFrame;
          animationFrame = requestAnimationFrame(() => {
            const current = ref.current;
            if (current != null) {
              const obj = { offset, animated: false };
              current.scrollToOffset(obj);
            }
            closure_1_4(false);
          });
        }
        return;
      }
    }
    cResult[3] = first1;
    cResult[4] = A;
  } else {
    class A {
      constructor() {
        tmp = closure_3;
        if (tmp) {
          tmp2 = closure_2;
          current = closure_2.current;
          tmp3 = null;
          if (current != null) {
            obj = { offset: null, animated: false };
            tmp4 = c8;
            obj.offset = c8;
            scrollToOffsetResult = current.scrollToOffset(obj);
          }
          tmp6 = globalThis;
          _requestAnimationFrame = requestAnimationFrame;
          animationFrame = requestAnimationFrame(() => {
            const current = ref.current;
            if (current != null) {
              const obj = { offset, animated: false };
              current.scrollToOffset(obj);
            }
            closure_1_4(false);
          });
        }
        return;
      }
    }
  }
  if (cResult[5] !== first1) {
    class D {
      constructor() {
        if (closure_3) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 500;
          closure_0 = setTimeout(() => closure_1_4(false), 500);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    const items = [first1];
    cResult[5] = first1;
    cResult[6] = D;
    cResult[7] = items;
    tmp13 = items;
    tmp12 = D;
  } else {
    class D {
      constructor() {
        if (closure_3) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 500;
          closure_0 = setTimeout(() => closure_1_4(false), 500);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    tmp13 = cResult[7];
  }
  const effect = obj2.useEffect(tmp12, tmp13);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        if (closure_3) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 500;
          closure_0 = setTimeout(() => closure_1_4(false), 500);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    const items1 = [stateFromStoresObject];
    class N {
      constructor() {
        return stateFromStoresObject.getGuildGameIds();
      }
    }
    cResult[8] = items1;
    cResult[9] = N;
    tmp16 = N;
    tmp15 = items1;
  } else {
    class D {
      constructor() {
        if (closure_3) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 500;
          closure_0 = setTimeout(() => closure_1_4(false), 500);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    tmp16 = cResult[9];
  }
  const tmpResult = tmp(tmp2[10]);
  stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp15, tmp16);
  onDismiss(tmp2[11]);
  if (cResult[10] === cardAction) {
    class D {
      constructor() {
        if (closure_3) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 500;
          closure_0 = setTimeout(() => closure_1_4(false), 500);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
  }
  class V {
    constructor(item) {
      item = item.item;
      let tmp = null;
      const obj = { guild: item, gameId: stateFromStoresObject[item.id], cardAction, onDismiss: tmp };
      const tmp2 = null != stateFromStoresObject[item.id];
      const tmp3 = jsx;
      const tmp4 = GameCommunityMultiGuildUpsellCardDefault;
      if (tmp2) {
        tmp = onDismiss;
      }
      return tmp3(tmp4, obj, item.id);
    }
  }
  cResult[10] = cardAction;
  cResult[11] = stateFromStoresObject;
  cResult[12] = onDismiss;
  cResult[13] = V;
}) : (function OneColumnGuildUpsellList(cardAction) {
  let closure_4;
  let closure_8;
  let contentContainerStyle;
  let hidden;
  let subheader;
  let suggestedGuilds;
  let tmp12;
  cardAction = cardAction.cardAction;
  const onDismiss = cardAction.onDismiss;
  let first;
  react = undefined;
  let stateFromStoresObject;
  ({ suggestedGuilds, contentContainerStyle, subheader } = cardAction);
  let tmp = closure_9();
  const callback = react.useCallback((id) => id.id, []);
  const ref = react.useRef(null);
  let tmp4 = first(react.useState(() => closure_8 > 0), 2);
  first = tmp4[0];
  react = tmp4[1];
  const items = [first];
  const callback1 = react.useCallback((nativeEvent) => {
    const y = nativeEvent.nativeEvent.contentOffset.y;
  }, []);
  const items1 = [first];
  const callback2 = react.useCallback(() => {
    const tmp = first;
    if (tmp) {
      offset = closure_8;
      let current = ref.current;
      if (current != null) {
        let obj = { offset: tmp2, animated: false };
        current.scrollToOffset(obj);
      }
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        const current = ref.current;
        if (current != null) {
          const obj = { offset, animated: false };
          current.scrollToOffset(obj);
        }
        closure_4(false);
      });
    }
  }, items);
  const effect = react.useEffect(() => {
    let closure_0;
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_4(false), 500);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  let obj = cardAction(ref[10]);
  const items2 = [stateFromStoresObject];
  stateFromStoresObject = obj.useStateFromStoresObject(items2, () => stateFromStoresObject.getGuildGameIds());
  const items3 = [onDismiss, stateFromStoresObject, cardAction];
  const tmp10 = onDismiss(ref[11]);
  const analyticsLocations = tmp10(onDismiss(ref[12]).GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT).analyticsLocations;
  const callback3 = react.useCallback((item) => {
    item = item.item;
    let tmp = null;
    const obj = { guild: item, gameId: stateFromStoresObject[item.id], cardAction, onDismiss: tmp };
    const tmp2 = null != stateFromStoresObject[item.id];
    const tmp3 = jsx;
    const tmp4 = GameCommunityMultiGuildUpsellCardDefault;
    if (tmp2) {
      tmp = onDismiss;
    }
    return tmp3(tmp4, obj, item.id);
  }, items3);
  const obj2 = { ref, style: hidden, onViewableItemsChanged: tmp12, viewabilityConfig, contentContainerStyle, keyExtractor: callback, data: suggestedGuilds, ListHeaderComponent: subheader, renderItem: callback3, drawDistance: 3000, onScroll: callback1, scrollEventThrottle: 16, onLoad: callback2 };
  hidden = undefined;
  tmp12 = closure_10(stateFromStoresObject, analyticsLocations);
  const FlashList = cardAction(ref[14]).FlashList;
  const tmp13 = jsx;
  if (first) {
    hidden = tmp.hidden;
  }
  return tmp13(FlashList, obj2);
});
const result = size.fileFinishedImporting("modules/game_community_upsell/native/OneColumnGuildUpsellList.tsx");

export const OneColumnGuildUpsellList = tmp2;
