// Module ID: 16611
// Function ID: 16612
// Name: FavoritesGuildChannels
// Dependencies: [19, 16541, 21, 558, 568, 7296, 5195, 16612, 16603, 16613, 16440, 16474, 16540, 16618, 16442, 2]

// Module 16611 (FavoritesGuildChannels)
import c from "c" /* 568 */;
import useFontScale from "useFontScale" /* 5195 */;
import useScaledRowHeightDefault from "useScaledRowHeight" /* 7296 */;
import FavoritesGuildChannelList from "FavoritesGuildChannelList" /* 16612 */;
import noop from "module_19" /* 19 */;

const ChannelListPanelBackdropDefault = tmp4(16440);
const ChannelListStickyHeaderDefault = tmp4(16474);
const FavoritesGuildSuggestedChannelsDefault = tmp4(16540);
const FavoritesGuildSuggestionsLoaderDefault = tmp4(16613);
const FavoritesGuildSidebarHeaderDefault = tmp4(16618);
require = fn;
let closure_3 = fn(16541).useFavoritesGuildSuggestionCount;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildChannels.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let obj = dependencyMap;
  const cResult = c.c(11);
  const tmp3 = closure_3();
  let tmp4 = importDefault;
  const tmp5 = useScaledRowHeightDefault();
  const fontScale = useFontScale.useFontScale();
  if (cResult[0] !== tmp3 > 0) {
    const obj4 = { withSuggestionsNotice: tmp7 };
    cResult[0] = tmp7;
    cResult[1] = obj4;
    let tmp8 = obj4;
  } else {
    tmp8 = cResult[1];
  }
  const favoritesGuildChannelList = FavoritesGuildChannelList.useFavoritesGuildChannelList(tmp8);
  ({ guildChannels, shouldShowEmptyState, hasNoChannels } = favoritesGuildChannelList);
  const tmpResult = FavoritesGuildChannelList;
  if (!tmpResult3.useShouldRenderChannelList()) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp13 = React4(FavoritesGuildSuggestionsLoaderDefault, {});
      cResult[2] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[2];
    }
    const items = [tmp11, ];
    if (hasNoChannels) {
      const obj5 = { style: null, contentInset: null, children: null };
      ({ style: obj9.style, contentInset: obj9.contentInset } = guild);
      const obj6 = { guild: guild.guild, showExtraButtons: false, canOpenGuildActionSheet: false };
      const items1 = [React4(ChannelListStickyHeaderDefault, obj6), React4(FavoritesGuildSuggestedChannelsDefault, {}), ];
      let tmp23Result = null;
      if (shouldShowEmptyState) {
        tmp4 = FavoritesGuildSidebarHeaderDefault;
        obj = {};
        tmp23Result = tmp23(tmp4, obj);
      }
      items1[2] = tmp23Result;
      obj5.children = items1;
      let tmp15Result = tmp15(ChannelListPanelBackdropDefault, obj5);
      tmp23 = React4;
      const tmp4Result = ChannelListPanelBackdropDefault;
    } else {
      const obj7 = {};
      const merged = Object.assign(guild);
      obj7.guildChannels = guildChannels;
      obj7.guildChannelsVersion = 0;
      obj7.favoritesSuggestionsNoticeHeight = tmp(16540).getFavoritesSuggestionsNoticeHeight(fontScale, tmp5, tmp3);
      tmp15Result = React4(tmp(16442).ChannelList, obj7);
      const tmpResult4 = tmp(16540);
    }
    const obj8 = { children: null };
    items[1] = tmp15Result;
    obj8.children = items;
    const tmp15Result2 = hasOwnProperty(timestampProducer, obj8);
    cResult[3] = fontScale;
    cResult[4] = guildChannels;
    cResult[5] = hasNoChannels;
    cResult[6] = guild;
    cResult[7] = shouldShowEmptyState;
    cResult[8] = tmp3;
    cResult[9] = tmp5;
    cResult[10] = tmp15Result2;
  }
}) : ((arg0) => {
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
      obj9.favoritesSuggestionsNoticeHeight = tmp4(16540).getFavoritesSuggestionsNoticeHeight(fontScale, tmp3, tmp);
      tmp10Result1 = tmp10(tmp4(16442).ChannelList, obj9);
      const tmp4Result = tmp4(16540);
    }
    const obj10 = { children: null };
    items[1] = tmp10Result1;
    obj10.children = items;
    hasOwnProperty(timestampProducer, obj10);
  }
});
