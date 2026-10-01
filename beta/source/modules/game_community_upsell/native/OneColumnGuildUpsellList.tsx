// Module ID: 15903
// Function ID: 15904
// Name: OneColumnGuildUpsellList
// Dependencies: [32, 19, 15176, 21, 4836, 8230, 1249, 1486, 504, 6583, 6603, 15904, 8179, 2]
// Exports: OneColumnGuildUpsellList

// Module 15903 (OneColumnGuildUpsellList)
import Fragment from "Fragment" /* 21 */;
import GameCommunityMultiGuildUpsellCardDefault from "GameCommunityMultiGuildUpsellCard" /* 15904 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore" /* 15176 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let set, viewableItems;

let react = react_mod;
const jsx = Fragment.jsx;
const viewabilityConfig = { itemVisiblePercentThreshold: 50, minimumViewTime: 500 };
let c8 = 0;
let closure_9 = createStyles.createStyles({ hidden: { opacity: 0 } });
const result = size.fileFinishedImporting("modules/game_community_upsell/native/OneColumnGuildUpsellList.tsx");

export const OneColumnGuildUpsellList = function OneColumnGuildUpsellList(cardAction) {
  let closure_4;
  let closure_8;
  let contentContainerStyle;
  let hidden;
  let subheader;
  let suggestedGuilds;
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
  let obj = cardAction(ref[8]);
  const items2 = [stateFromStoresObject];
  stateFromStoresObject = obj.useStateFromStoresObject(items2, () => stateFromStoresObject.getGuildGameIds());
  const tmp10 = onDismiss(ref[9]);
  const analyticsLocations = tmp10(onDismiss(ref[10]).GAME_COMMUNITY_MULTI_GUILD_UPSELL_GUILDS_BAR_ENTRYPOINT).analyticsLocations;
  const items3 = [onDismiss, stateFromStoresObject, cardAction];
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
  const useRef = react.useRef;
  set = new Set();
  let closure_2 = useRef(set);
  let obj2 = cardAction(ref[7]);
  const focusEffect = obj2.useFocusEffect(react.useCallback(() => {
    const current = ref.current;
    current.clear();
  }, []));
  const items4 = [stateFromStoresObject, analyticsLocations];
  const callback4 = react.useCallback((viewableItems) => {
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
  const FlashList = cardAction(ref[12]).FlashList;
  const tmp15 = jsx;
  if (first) {
    hidden = tmp.hidden;
  }
  return tmp15(FlashList, obj3);
};
