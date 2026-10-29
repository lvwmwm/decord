// Module ID: 18225
// Function ID: 18226
// Name: OneColumnGuildUpsellList
// Dependencies: [32, 19, 17494, 21, 5005, 6016, 1272, 558, 576, 1504, 504, 7313, 7338, 18226, 7280, 2]

// Module 18225 (OneColumnGuildUpsellList)
import Fragment from "Fragment" /* 21 */;
import GameCommunityMultiGuildUpsellCardDefault from "GameCommunityMultiGuildUpsellCard" /* 18226 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore" /* 17494 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, num, set;

let _slicedToArray = _slicedToArray_mod;
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
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function OneColumnGuildUpsellList(arg0) {
  let closure_3;
  let contentContainerStyle;
  let first;
  let first1;
  let guildGameIds;
  let offset;
  let onDismiss;
  let stateFromStoresObject;
  let subheader;
  let suggestedGuilds;
  let tmp10;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp7;
  let tmp = onDismiss;
  let tmp2 = first1;
  let obj = onDismiss(first1[8]);
  const cResult = obj.c(21);
  ({ suggestedGuilds, contentContainerStyle, subheader, onDismiss } = arg0);
  let tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function v(id) {
      return id.id;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const ref = stateFromStoresObject.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return offset > 0;
      }
    }
    cResult[1] = S;
    tmp7 = S;
  } else {
    class S {
      constructor() {
        return offset > 0;
      }
    }
  }
  [first1, _slicedToArray] = stateFromStoresObject.useState(tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return offset > 0;
      }
    }
    cResult[2] = tmp11;
    tmp10 = tmp11;
  } else {
    class S {
      constructor() {
        return offset > 0;
      }
    }
  }
  if (cResult[3] !== first1) {
    class S {
      constructor() {
        return offset > 0;
      }
    }
    cResult[3] = first1;
    cResult[4] = tmp13;
  } else {
    class S {
      constructor() {
        return offset > 0;
      }
    }
  }
  if (cResult[5] !== first1) {
    class D {
      constructor() {
        if (closure_2) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 500;
          closure_0 = setTimeout(() => closure_1_3(false), 500);
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
    tmp15 = items;
    tmp14 = D;
  } else {
    class D {
      constructor() {
        if (closure_2) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 500;
          closure_0 = setTimeout(() => closure_1_3(false), 500);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    tmp15 = cResult[7];
  }
  const effect = obj2.useEffect(tmp14, tmp15);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        if (closure_2) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 500;
          closure_0 = setTimeout(() => closure_1_3(false), 500);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    const items1 = [MobileGameCommunitiesStore];
    class A {
      constructor() {
        return guildGameIds.getGuildGameIds();
      }
    }
    cResult[8] = items1;
    cResult[9] = A;
    tmp18 = A;
    tmp17 = items1;
  } else {
    class D {
      constructor() {
        if (closure_2) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 500;
          closure_0 = setTimeout(() => closure_1_3(false), 500);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    tmp18 = cResult[9];
  }
  const tmpResult = tmp(tmp2[10]);
  stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp17, tmp18);
  ref(tmp2[11]);
  if (cResult[10] === stateFromStoresObject) {
    class D {
      constructor() {
        if (closure_2) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 500;
          closure_0 = setTimeout(() => closure_1_3(false), 500);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    const tmp24 = closure_10(stateFromStoresObject, tmp21);
    class A {
      constructor() {
        return guildGameIds.getGuildGameIds();
      }
    }
    if (first1) {
      class D {
        constructor() {
          if (closure_2) {
            tmp = globalThis;
            _setTimeout = setTimeout;
            num = 500;
            closure_0 = setTimeout(() => closure_1_3(false), 500);
            return () => clearTimeout(closure_0);
          } else {
            return;
          }
        }
      }
    }
    if (cResult[13] === contentContainerStyle) {
      class D {
        constructor() {
          if (closure_2) {
            tmp = globalThis;
            _setTimeout = setTimeout;
            num = 500;
            closure_0 = setTimeout(() => closure_1_3(false), 500);
            return () => clearTimeout(closure_0);
          } else {
            return;
          }
        }
      }
    }
    cResult[13] = contentContainerStyle;
    cResult[14] = tmp12;
    cResult[15] = tmp24;
    cResult[16] = tmp22;
    cResult[17] = subheader;
    cResult[18] = suggestedGuilds;
    cResult[19] = tmp25;
    cResult[20] = jsx(tmp(tmp2[14]).FlashList, { ref, style: tmp25, onViewableItemsChanged: tmp24, viewabilityConfig, contentContainerStyle, keyExtractor: first, data: suggestedGuilds, ListHeaderComponent: subheader, renderItem: tmp22, drawDistance: 3000, onScroll: tmp10, scrollEventThrottle: 16, onLoad: tmp12 });
    const tmp29 = jsx(tmp(tmp2[14]).FlashList, { ref, style: tmp25, onViewableItemsChanged: tmp24, viewabilityConfig, contentContainerStyle, keyExtractor: first, data: suggestedGuilds, ListHeaderComponent: subheader, renderItem: tmp22, drawDistance: 3000, onScroll: tmp10, scrollEventThrottle: 16, onLoad: tmp12 });
  }
  class P {
    constructor(item) {
      item = item.item;
      let tmp = null;
      const obj = { guild: item, gameId: stateFromStoresObject[item.id], onDismiss: tmp };
      const tmp2 = null != stateFromStoresObject[item.id];
      const tmp3 = jsx;
      const tmp4 = GameCommunityMultiGuildUpsellCardDefault;
      if (tmp2) {
        tmp = onDismiss;
      }
      return tmp3(tmp4, obj, item.id);
    }
  }
  cResult[10] = stateFromStoresObject;
  cResult[11] = onDismiss;
  cResult[12] = P;
}) : (function OneColumnGuildUpsellList(onDismiss) {
  let closure_3;
  let closure_8;
  let contentContainerStyle;
  let first;
  let guildGameIds;
  let hidden;
  let subheader;
  let suggestedGuilds;
  let tmp12;
  onDismiss = onDismiss.onDismiss;
  first = undefined;
  _slicedToArray = undefined;
  let stateFromStoresObject;
  ({ suggestedGuilds, contentContainerStyle, subheader } = onDismiss);
  let tmp = closure_9();
  const callback = stateFromStoresObject.useCallback((id) => id.id, []);
  const ref = stateFromStoresObject.useRef(null);
  [first, _slicedToArray] = stateFromStoresObject.useState(() => closure_8 > 0);
  const items = [first];
  const callback1 = stateFromStoresObject.useCallback((nativeEvent) => {
    const y = nativeEvent.nativeEvent.contentOffset.y;
  }, []);
  const items1 = [first];
  const callback2 = stateFromStoresObject.useCallback(() => {
    const tmp = first;
    if (tmp) {
      const offset = closure_8;
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
        closure_3(false);
      });
    }
  }, items);
  const effect = stateFromStoresObject.useEffect(() => {
    let closure_0;
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_3(false), 500);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  let obj = onDismiss(first[10]);
  const items2 = [MobileGameCommunitiesStore];
  stateFromStoresObject = obj.useStateFromStoresObject(items2, () => guildGameIds.getGuildGameIds());
  const items3 = [onDismiss, stateFromStoresObject];
  const tmp10 = ref(first[11]);
  const analyticsLocations = tmp10(ref(first[12]).GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT).analyticsLocations;
  const callback3 = stateFromStoresObject.useCallback((item) => {
    item = item.item;
    let tmp = null;
    const obj = { guild: item, gameId: stateFromStoresObject[item.id], onDismiss: tmp };
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
  const FlashList = onDismiss(first[14]).FlashList;
  const tmp13 = jsx;
  if (first) {
    hidden = tmp.hidden;
  }
  return tmp13(FlashList, obj2);
});
const result = size.fileFinishedImporting("modules/game_community_upsell/native/OneColumnGuildUpsellList.tsx");

export const OneColumnGuildUpsellList = tmp2;
