// Module ID: 18875
// Function ID: 18876
// Name: GuildUpsellList
// Dependencies: [5, 32, 19, 17, 18137, 21, 5243, 575, 6275, 1260, 1500, 504, 7852, 7871, 18876, 7822, 2]
// Exports: GuildUpsellList

// Module 18875 (GuildUpsellList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import GameCommunityMultiGuildUpsellCardDefault from "GameCommunityMultiGuildUpsellCard" /* 18876 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore" /* 18137 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let set, viewableItems;

let obj2;
let obj3;
let _asyncToGenerator = _asyncToGenerator_mod;
const View = react_native.View;
const jsx = Fragment.jsx;
const viewabilityConfig = { itemVisiblePercentThreshold: 50, minimumViewTime: 500 };
let obj = { offset: 0, index: 0, numColumns: 1, isInHeader: true };
let createStyles = createStyles_mod;
obj = { hidden: { opacity: 0 }, gridItem: { flex: 1 }, leftColumn: obj2, rightColumn: obj3 };
obj2 = { paddingRight: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/game_community_upsell/native/GuildUpsellList.tsx");

export function GuildUpsellList(numColumns) {
  let contentContainerStyle;
  let gridItem;
  let hidden;
  let subheader;
  numColumns = numColumns.numColumns;
  const suggestedGuilds = numColumns.suggestedGuilds;
  const onDismiss = numColumns.onDismiss;
  let first;
  ({ contentContainerStyle, subheader } = numColumns);
  let tmp = closure_11();
  _asyncToGenerator = tmp;
  const callback = first.useCallback((id) => id.id, []);
  const ref = first.useRef(null);
  first = ref(first.useState(() => obj), 1)[0];
  let tmp5 = ref(first.useState(() => first.offset > 0), 2);
  const first1 = tmp5[0];
  const guildGameIds = tmp5[1];
  let items = [first1, numColumns];
  const callback1 = first.useCallback((nativeEvent) => {
    const tmp = first1;
    if (!tmp) {
      const _Math = Math;
      const bound = Math.max(0, nativeEvent.nativeEvent.contentOffset.y);
      const current = ref.current;
      let num2;
      const tmp5 = ref;
      if (current != null) {
        num2 = current.getFirstVisibleIndex();
      }
      if (num2 == null) {
        num2 = 0;
      }
      let tmp7 = num2 < 0;
      if (!tmp7) {
        const current2 = tmp5.current;
        let num3;
        if (current2 != null) {
          num3 = current2.getFirstItemOffset();
        }
        if (num3 == null) {
          num3 = 0;
        }
        tmp7 = bound < num3;
      }
    }
  }, items);
  const items1 = [first1, first, numColumns, suggestedGuilds.length];
  const items2 = [first1];
  const callback2 = first.useCallback(_asyncToGenerator(async () => {
    let closure_0;
    const tmp19 = first1;
    if (tmp19) {
      const tmp8 = first;
      if (first.numColumns !== numColumns) {
        if (!tmp8.isInHeader) {
          if (suggestedGuilds.length > 0) {
            let current = ref.current;
            let scrollToIndexResult;
            if (current != null) {
              const obj4 = { index: Math.max(0, Math.min(tmp8.index, arr.length - 1)), animated: false };
              let _Math = Math;
              const _Math2 = Math;
              const scrollToIndex = current.scrollToIndex;
              scrollToIndexResult = scrollToIndex(obj4);
            }
            let c1 = 1;
            let c2 = 1;
            const obj5 = { value: scrollToIndexResult, done: false };
            return obj5;
          }
        }
      }
      function restoreOffset() {
        let firstItemOffset;
        const current = ref.current;
        const tmp = ref;
        if (current != null) {
          firstItemOffset = current.getFirstItemOffset();
        }
        if (closure_1_5.numColumns !== closure_1_0) {
          if (closure_1_5.isInHeader) {
            if (null != firstItemOffset) {
              let offset;
              if (firstItemOffset > 0) {
                const _Math = Math;
                offset = Math.min(tmp3.offset, firstItemOffset);
              }
              const current2 = tmp.current;
              if (current2 != null) {
                obj = { offset, animated: false };
                current2.scrollToOffset(obj);
              }
            }
          }
        }
        offset = tmp3.offset;
      }
      restoreOffset();
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        if (typeof restoreOffset === "function") {
          let firstItemOffset;
          const current = ref.current;
          const tmp = ref;
          if (current != null) {
            firstItemOffset = current.getFirstItemOffset();
          }
          if (closure_2_5.numColumns !== closure_2_0) {
            if (closure_2_5.isInHeader) {
              if (null != firstItemOffset) {
                let offset;
                if (firstItemOffset > 0) {
                  const _Math = Math;
                  offset = Math.min(tmp4.offset, firstItemOffset);
                }
                const current2 = tmp.current;
                if (current2 != null) {
                  obj = { offset, animated: false };
                  current2.scrollToOffset(obj);
                }
                closure_2_7(false);
              }
            }
          }
          offset = tmp4.offset;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
    }
    await "HermesInternal";
    const flag = false;
    closure_128_7(false);
  }), items1);
  const effect = first.useEffect(() => {
    let closure_0;
    if (first1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => guildGameIds(false), 500);
      return () => clearTimeout(closure_0);
    }
  }, items2);
  obj = numColumns(onDismiss[11]);
  const items3 = [guildGameIds];
  const stateFromStoresObject = obj.useStateFromStoresObject(items3, () => guildGameIds.getGuildGameIds());
  const tmp11 = suggestedGuilds(onDismiss[12]);
  const analyticsLocations = tmp11(suggestedGuilds(onDismiss[13]).GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT).analyticsLocations;
  const items4 = [onDismiss, stateFromStoresObject, numColumns, tmp];
  const callback3 = first.useCallback((item) => {
    item = item.item;
    let tmp = null;
    const index = item.index;
    const tmp2 = null != stateFromStoresObject[item.id];
    GameCommunityMultiGuildUpsellCardDefault;
    if (tmp2) {
      tmp = onDismiss;
    }
    const tmp3Result = <tmp4 key={item.id} guild={item} gameId={stateFromStoresObject[item.id]} onDismiss={tmp} />;
    let tmp3Result2 = tmp3Result;
    if (1 !== numColumns) {
      const items = [gridItem.gridItem, ];
      const obj2 = { style: items, children: tmp3Result };
      items[1] = index % 2 === 0 ? gridItem.leftColumn : gridItem.rightColumn;
      tmp3Result2 = tmp3(View, obj2);
    }
    return tmp3Result2;
  }, items4);
  const useRef = first.useRef;
  set = new Set();
  let closure_2 = useRef(set);
  let obj2 = numColumns(onDismiss[10]);
  const focusEffect = obj2.useFocusEffect(first.useCallback(() => {
    const current = ref.current;
    current.clear();
  }, []));
  const items5 = [stateFromStoresObject, analyticsLocations];
  const callback4 = first.useCallback((viewableItems) => {
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
          obj = { type: stateFromStoresObject(ref[9]).ImpressionTypes.PANE, name: stateFromStoresObject(ref[9]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD, properties: obj2 };
          const trackImpression = stateFromStoresObject(ref[8]).trackImpression;
          stateFromStoresObject(ref[8]);
          obj2 = { game_id: tmp5, guild_id: item.id, location_stack };
          trackImpression(obj);
        }
      }
    });
  }, items5);
  const obj3 = { numColumns, ref, style: hidden, onViewableItemsChanged: callback4, viewabilityConfig, contentContainerStyle, keyExtractor: callback, data: suggestedGuilds, ListHeaderComponent: subheader, renderItem: callback3, drawDistance: 3000, onScroll: callback1, scrollEventThrottle: 16, onLoad: callback2 };
  hidden = undefined;
  const FlashList = numColumns(onDismiss[15]).FlashList;
  const tmp16 = stateFromStoresObject;
  if (first1) {
    hidden = tmp.hidden;
  }
  return tmp16(FlashList, obj3);
}
