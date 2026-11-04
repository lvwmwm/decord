// Module ID: 18601
// Function ID: 18602
// Name: FavoritesGuildChannels
// Dependencies: [19, 18514, 21, 7354, 5776, 18602, 18603, 18576, 18604, 18363, 18448, 18513, 18609, 18416, 2]
// Exports: default

// Module 18601 (FavoritesGuildChannels)
import useFontScale from "useFontScale" /* 5776 */;
import useScaledRowHeightDefault from "useScaledRowHeight" /* 7354 */;
import ChannelListPanelBackdropDefault from "ChannelListPanelBackdrop" /* 18363 */;
import ChannelListStickyHeaderDefault from "ChannelListStickyHeader" /* 18448 */;
import FavoritesGuildSuggestedChannels from "FavoritesGuildSuggestedChannels" /* 18513 */;
import FavoritesGuildSuggestionsStore from "FavoritesGuildSuggestionsStore" /* 18514 */;
import useShouldRenderChannelList from "useShouldRenderChannelList" /* 18576 */;
import FavoritesGuildChannelList from "FavoritesGuildChannelList" /* 18602 */;
import useFavoritesPruneInactiveThreadsDefault from "useFavoritesPruneInactiveThreads" /* 18603 */;
import FavoritesGuildSuggestionsLoaderDefault from "FavoritesGuildSuggestionsLoader" /* 18604 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const FavoritesGuildSuggestedChannelsDefault = FavoritesGuildSuggestedChannels;

let closure_4;
let hasOwnProperty;
let metroRequire;
let closure_3 = FavoritesGuildSuggestionsStore.useFavoritesGuildSuggestionCount;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildChannels.tsx");

export default function FavoritesGuildChannels(guild) {
  let guildChannels;
  let hasNoChannels;
  let items1;
  let shouldShowEmptyState;
  let tmp5Result;
  const tmp = closure_3();
  const tmp4 = useScaledRowHeightDefault();
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const obj2 = FavoritesGuildChannelList;
  const obj3 = { withSuggestionsNotice: tmp > 0 };
  const favoritesGuildChannelList = obj2.useFavoritesGuildChannelList(obj3);
  ({ guildChannels, shouldShowEmptyState, hasNoChannels } = favoritesGuildChannelList);
  useFavoritesPruneInactiveThreadsDefault();
  let tmp11Result2 = null;
  const obj4 = useShouldRenderChannelList;
  if (obj4.useShouldRenderChannelList()) {
    let tmp13Result1;
    const items = [React3(FavoritesGuildSuggestionsLoaderDefault, {}), ];
    const tmp12 = metroRequire;
    if (hasNoChannels) {
      const obj5 = { style: null, contentInset: null, children: items1 };
      ({ style: obj7.style, contentInset: obj7.contentInset } = guild);
      items1 = [, , ];
      const obj6 = { guild: guild.guild, showExtraButtons: false, canOpenGuildActionSheet: false };
      const tmp2Result = ChannelListPanelBackdropDefault;
      items1[0] = React3(ChannelListStickyHeaderDefault, obj6);
      items1[1] = React3(FavoritesGuildSuggestedChannelsDefault, {});
      let tmp13Result = null;
      if (shouldShowEmptyState) {
        tmp13Result = tmp13(tmp2(18609), {});
      }
      items1[2] = tmp13Result;
      tmp13Result1 = tmp11(tmp2Result, obj5);
    } else {
      const obj8 = { guildChannels, guildChannelsVersion: 0, favoritesSuggestionsNoticeHeight: tmp5Result.getFavoritesSuggestionsNoticeHeight(fontScale, tmp4, tmp) };
      const ChannelList = tmp5(18416).ChannelList;
      const merged = Object.assign(guild);
      tmp5Result = FavoritesGuildSuggestedChannels;
      tmp13Result1 = tmp13(ChannelList, obj8);
    }
    const obj9 = { children: items };
    items[1] = tmp13Result1;
    tmp11Result2 = tmp11(tmp12, obj9);
  }
  return tmp11Result2;
};
