// Module ID: 18335
// Function ID: 18336
// Name: FavoritesGuildChannels
// Dependencies: [19, 18249, 21, 7217, 5642, 18336, 18310, 18337, 18095, 18180, 18248, 18342, 18148, 2]
// Exports: default

// Module 18335 (FavoritesGuildChannels)
import useFontScale from "useFontScale" /* 5642 */;
import useScaledRowHeightDefault from "useScaledRowHeight" /* 7217 */;
import ChannelListPanelBackdropDefault from "ChannelListPanelBackdrop" /* 18095 */;
import ChannelListStickyHeaderDefault from "ChannelListStickyHeader" /* 18180 */;
import FavoritesGuildSuggestedChannels from "FavoritesGuildSuggestedChannels" /* 18248 */;
import FavoritesGuildSuggestionsStore from "FavoritesGuildSuggestionsStore" /* 18249 */;
import useShouldRenderChannelList from "useShouldRenderChannelList" /* 18310 */;
import FavoritesGuildChannelList from "FavoritesGuildChannelList" /* 18336 */;
import FavoritesGuildSuggestionsLoaderDefault from "FavoritesGuildSuggestionsLoader" /* 18337 */;
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
  let tmp10Result2 = null;
  const obj4 = useShouldRenderChannelList;
  if (obj4.useShouldRenderChannelList()) {
    let tmp12Result1;
    const items = [React3(FavoritesGuildSuggestionsLoaderDefault, {}), ];
    const tmp11 = metroRequire;
    if (hasNoChannels) {
      const obj5 = { style: null, contentInset: null, children: items1 };
      ({ style: obj7.style, contentInset: obj7.contentInset } = guild);
      items1 = [, , ];
      const obj6 = { guild: guild.guild, showExtraButtons: false, canOpenGuildActionSheet: false };
      const tmp2Result = ChannelListPanelBackdropDefault;
      items1[0] = React3(ChannelListStickyHeaderDefault, obj6);
      items1[1] = React3(FavoritesGuildSuggestedChannelsDefault, {});
      let tmp12Result = null;
      if (shouldShowEmptyState) {
        tmp12Result = tmp12(tmp2(18342), {});
      }
      items1[2] = tmp12Result;
      tmp12Result1 = tmp10(tmp2Result, obj5);
    } else {
      const obj8 = { guildChannels, guildChannelsVersion: 0, favoritesSuggestionsNoticeHeight: tmp5Result.getFavoritesSuggestionsNoticeHeight(fontScale, tmp4, tmp) };
      const ChannelList = tmp5(18148).ChannelList;
      const merged = Object.assign(guild);
      tmp5Result = FavoritesGuildSuggestedChannels;
      tmp12Result1 = tmp12(ChannelList, obj8);
    }
    const obj9 = { children: items };
    items[1] = tmp12Result1;
    tmp10Result2 = tmp10(tmp11, obj9);
  }
  return tmp10Result2;
};
