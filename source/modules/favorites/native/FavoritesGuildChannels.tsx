// Module ID: 16195
// Function ID: 16196
// Name: FavoritesGuildChannels
// Dependencies: [19, 16124, 21, 6989, 4943, 16196, 16187, 16197, 16163, 16057, 16123, 16202, 16025, 2]
// Exports: default

// Module 16195 (FavoritesGuildChannels)
import noopAll from "noop" /* 19 */;
import getFontScale from "getFontScale" /* 4943 */;
import useScaledRowHeightDefault from "useScaledRowHeight" /* 6989 */;
import ChannelListStickyHeaderDefault from "ChannelListStickyHeader" /* 16057 */;
import PX_8Default from "PX_8" /* 16123 */;
import ChannelListPanelBackdropDefault from "ChannelListPanelBackdrop" /* 16163 */;
import getMissingFavoriteThreadIds from "getMissingFavoriteThreadIds" /* 16196 */;
import FavoritesGuildSuggestionsLoaderInnerDefault from "FavoritesGuildSuggestionsLoaderInner" /* 16197 */;
import EmptyBodyDefault from "EmptyBody" /* 16202 */;
import { useFavoritesGuildSuggestionCount as closure_3 } from "items" /* 16124 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5, Fragment: closure_6 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/favorites/native/FavoritesGuildChannels.tsx");

export default function FavoritesGuildChannels(arg0) {
  const tmp = callback();
  let tmp2 = importDefault;
  let obj = dependencyMap;
  obj1 = getFontScale;
  const fontScale = obj1.useFontScale();
  let obj2 = getMissingFavoriteThreadIds;
  obj = { withSuggestionsNotice: tmp > 0 };
  const favoritesGuildChannelList = obj2.useFavoritesGuildChannelList(obj);
  ({ guildChannels, shouldShowEmptyState, hasNoChannels } = favoritesGuildChannelList);
  const tmp3 = useScaledRowHeightDefault();
  if (!obj5.useShouldRenderChannelList()) {
    return null;
  } else {
    let tmp2Result = arg0;
    const items = [callback2(FavoritesGuildSuggestionsLoaderInnerDefault, {}), ];
    if (hasNoChannels) {
      obj = { style: null, contentInset: null, children: null };
      ({ style: obj8[0], contentInset: obj8[1] } = tmp2Result);
      tmp2Result = ChannelListPanelBackdropDefault;
      obj1 = { guild: null, showExtraButtons: false, canOpenGuildActionSheet: false };
      obj1[0] = tmp2Result.guild;
      const items1 = [tmp10(ChannelListStickyHeaderDefault, obj1), , ];
      tmp2Result = PX_8Default;
      items1[1] = tmp10(tmp2Result, {});
      let tmp10Result = null;
      if (shouldShowEmptyState) {
        tmp2 = EmptyBodyDefault;
        obj = {};
        tmp10Result = tmp10(tmp2, obj);
      }
      items1[2] = tmp10Result;
      obj[2] = items1;
      tmp10Result = tmp8(tmp2Result, obj);
    } else {
      obj2 = {};
      const merged = Object.assign(tmp2Result);
      obj2.guildChannels = guildChannels;
      obj2.guildChannelsVersion = 0;
      obj2.favoritesSuggestionsNoticeHeight = tmp4(16123).getFavoritesSuggestionsNoticeHeight(fontScale, tmp3, tmp);
      tmp10Result = tmp10(tmp4(16025).ChannelList, obj2);
      const tmp4Result = tmp4(16123);
    }
    const obj3 = { children: null };
    items[1] = tmp10Result;
    obj3[0] = items;
    closure_5(closure_6, obj3);
    const tmp9 = closure_6;
  }
};
