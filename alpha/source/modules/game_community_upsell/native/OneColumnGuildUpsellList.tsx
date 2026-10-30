// Module ID: 18285
// Function ID: 18286
// Name: OneColumnGuildUpsellList
// Dependencies: [32, 19, 17548, 21, 5009, 6023, 1261, 1499, 504, 7320, 7345, 18286, 7288, 2]
// Exports: OneColumnGuildUpsellList

// Module 18285 (OneColumnGuildUpsellList)
import Fragment from "Fragment" /* 21 */;
import GameCommunityMultiGuildUpsellCardDefault from "GameCommunityMultiGuildUpsellCard" /* 18286 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore" /* 17548 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let set, viewableItems;

let _slicedToArray = _slicedToArray_mod;
const jsx = Fragment.jsx;
const viewabilityConfig = { itemVisiblePercentThreshold: 50, minimumViewTime: 500 };
let c8 = 0;
let closure_9 = createStyles.createStyles({ hidden: { opacity: 0 } });
const result = size.fileFinishedImporting("modules/game_community_upsell/native/OneColumnGuildUpsellList.tsx");

export function OneColumnGuildUpsellList(onDismiss) {
  let closure_3;
  let closure_8;
  let contentContainerStyle;
  let first;
  let guildGameIds;
  let hidden;
  let subheader;
  let suggestedGuilds;
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
  let obj = onDismiss(first[8]);
  const items2 = [MobileGameCommunitiesStore];
  stateFromStoresObject = obj.useStateFromStoresObject(items2, () => guildGameIds.getGuildGameIds());
  const tmp10 = ref(first[9]);
  const analyticsLocations = tmp10(ref(first[10]).GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT).analyticsLocations;
  const items3 = [onDismiss, stateFromStoresObject];
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
  const useRef = stateFromStoresObject.useRef;
  set = new Set();
  let closure_2 = useRef(set);
  let obj2 = onDismiss(first[7]);
  const focusEffect = obj2.useFocusEffect(stateFromStoresObject.useCallback(() => {
    const current = ref.current;
    current.clear();
  }, []));
  const items4 = [stateFromStoresObject, analyticsLocations];
  const callback4 = stateFromStoresObject.useCallback((viewableItems) => {
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
          const obj = { type: stateFromStoresObject(ref[6]).ImpressionTypes.PANE, name: stateFromStoresObject(ref[6]).ImpressionNames.GAME_COMMUNITY_MULTI_GUILD_UPSELL_CARD, properties: obj2 };
          const trackImpression = stateFromStoresObject(ref[5]).trackImpression;
          stateFromStoresObject(ref[5]);
          obj2 = { game_id: tmp5, guild_id: item.id, location_stack };
          trackImpression(obj);
        }
      }
    });
  }, items4);
  const obj3 = { ref, style: hidden, onViewableItemsChanged: callback4, viewabilityConfig, contentContainerStyle, keyExtractor: callback, data: suggestedGuilds, ListHeaderComponent: subheader, renderItem: callback3, drawDistance: 3000, onScroll: callback1, scrollEventThrottle: 16, onLoad: callback2 };
  hidden = undefined;
  const FlashList = onDismiss(first[12]).FlashList;
  const tmp15 = jsx;
  if (first) {
    hidden = tmp.hidden;
  }
  return tmp15(FlashList, obj3);
}
