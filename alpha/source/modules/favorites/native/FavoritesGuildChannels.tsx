// Module ID: 16621
// Function ID: 16622
// Name: FavoritesGuildChannels
// Dependencies: [19, 16552, 21, 7296, 5194, 16622, 16613, 16623, 16401, 16485, 16551, 16628, 16453, 2]
// Exports: default

// Module 16621 (FavoritesGuildChannels)
import useFontScale from "useFontScale" /* 5194 */;
import useScaledRowHeightDefault from "useScaledRowHeight" /* 7296 */;
import FavoritesGuildChannelList from "FavoritesGuildChannelList" /* 16622 */;
import noop from "module_19" /* 19 */;

const ChannelListPanelBackdropDefault = tmp2(16401);
const ChannelListStickyHeaderDefault = tmp2(16485);
const FavoritesGuildSuggestedChannelsDefault = tmp2(16551);
const FavoritesGuildSuggestionsLoaderDefault = tmp2(16623);
const FavoritesGuildSidebarHeaderDefault = tmp2(16628);
require = fn;
let closure_3 = fn(16552).useFavoritesGuildSuggestionCount;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildChannels.tsx");

export default function FavoritesGuildChannels(arg0) {
  const tmp = closure_3();
  let tmp2 = importDefault;
  let obj = dependencyMap;
  const tmp3 = useScaledRowHeightDefault();
  const fontScale = useFontScale.useFontScale();
  const favoritesGuildChannelList = FavoritesGuildChannelList.useFavoritesGuildChannelList({ withSuggestionsNotice: tmp > 0 });
  ({ guildChannels, shouldShowEmptyState, hasNoChannels } = favoritesGuildChannelList);
  const obj4 = { withSuggestionsNotice: tmp > 0 };
  if (!obj5.useShouldRenderChannelList()) {
    return null;
  } else {
    let tmp2Result2 = arg0;
    const items = [React4(FavoritesGuildSuggestionsLoaderDefault, {}), ];
    if (hasNoChannels) {
      const obj6 = { style: null, contentInset: null, children: null };
      ({ style: obj8.style, contentInset: obj8.contentInset } = tmp2Result2);
      const obj7 = { guild: tmp2Result2.guild, showExtraButtons: false, canOpenGuildActionSheet: false };
      const items1 = [tmp10(ChannelListStickyHeaderDefault, obj7), , ];
      tmp2Result2 = FavoritesGuildSuggestedChannelsDefault;
      items1[1] = tmp10(tmp2Result2, {});
      let tmp10Result = null;
      if (shouldShowEmptyState) {
        tmp2 = FavoritesGuildSidebarHeaderDefault;
        obj = {};
        tmp10Result = tmp10(tmp2, obj);
      }
      items1[2] = tmp10Result;
      obj6.children = items1;
      let tmp10Result1 = tmp8(ChannelListPanelBackdropDefault, obj6);
      const tmp2Result = ChannelListPanelBackdropDefault;
    } else {
      const obj9 = {};
      const merged = Object.assign(tmp2Result2);
      obj9.guildChannels = guildChannels;
      obj9.guildChannelsVersion = 0;
      obj9.favoritesSuggestionsNoticeHeight = tmp4(16551).getFavoritesSuggestionsNoticeHeight(fontScale, tmp3, tmp);
      tmp10Result1 = tmp10(tmp4(16453).ChannelList, obj9);
      const tmp4Result = tmp4(16551);
    }
    const obj10 = { children: null };
    items[1] = tmp10Result1;
    obj10.children = items;
    hasOwnProperty(timestampProducer, obj10);
  }
};
