// Module ID: 15735
// Function ID: 15736
// Name: RedesignChannelList
// Dependencies: [32, 19, 17, 4825, 6945, 15649, 2067, 2099, 4860, 1074, 21, 1488, 4692, 10788, 15736, 15737, 15764, 15812, 14628, 15655, 15813, 15765, 15815, 6956, 504, 6955, 15816, 15820, 6948, 15821, 10456, 15633, 14629, 11027, 6577, 15684, 15873, 15886, 6493, 15889, 15891, 15895, 15896, 15905, 2070, 15907, 9757, 15915, 11375, 2]

// Module 15735 (RedesignChannelList)
import react_native from "react-native" /* 17 */;
import ChannelListState from "ChannelListState" /* 6948 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10456 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 15655 */;
import RedesignGuildHeaderDefault from "RedesignGuildHeader" /* 15765 */;
import registerSidebarVisibilityMethods from "registerSidebarVisibilityMethods" /* 15812 */;
import ChannelsUnreadBarsDefault from "ChannelsUnreadBars" /* 15813 */;
import renderRedesignChannelListItem from "renderRedesignChannelListItem" /* 15821 */;
import GuildUpsellChannelListDefault from "GuildUpsellChannelList" /* 15896 */;
import GuildsEmptyDefault from "GuildsEmpty" /* 15905 */;
import NsfwGateGuildSidebarDefault from "NsfwGateGuildSidebar" /* 15915 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import ChannelListStore from "ChannelListStore" /* 6945 */;
import HomeDrawerStore from "HomeDrawerStore" /* 15649 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4860 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, navigation;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let tmp;
const TTIFirstContentfulPaint = tmp(11375);
function GuildChannels(guild) {
  let accountLinkApplication;
  let applicationAccountLinkMarkAsDismissed;
  let gameClaimMarkAsDismissed;
  let guildActionRows;
  let guildChannels;
  let guildChannelsVersion;
  let rows;
  let startApplicationAccountLinkAuthorization;
  _require = guild;
  importDefault = require("useGuildActionRows")(guild.guild);
  const tmp = require("useChannelNoticeRows")(guild.guild);
  rows = tmp.rows;
  ({ gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = tmp);
  let obj = require("get initialized");
  const items = [ChannelListStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { guildActionRows, channelNoticeRows: rows };
    return ChannelListStore.getGuild(guild.guild.id, obj);
  });
  ({ guildChannels, guildChannelsVersion } = stateFromStoresObject);
  let tmp3 = null;
  const obj2 = require("useShouldRenderChannelList");
  if (obj2.useShouldRenderChannelList()) {
    const obj3 = { guildChannels, guildChannelsVersion, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication };
    const merged = Object.assign(guild);
    tmp3 = closure_14(closure_17, obj3);
  }
  return tmp3;
}
function ChannelsWrapper(selectedGuildId) {
  let voiceChannelId;
  selectedGuildId = selectedGuildId.selectedGuildId;
  const selectedChannelId = selectedGuildId.selectedChannelId;
  const merged = Object.assign(selectedGuildId, Object.assign({ selectedGuildId: 0, selectedChannelId: 0 }));
  const items = [GuildStore];
  const obj = selectedGuildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(selectedGuildId));
  const items1 = [SelectedChannelStore];
  const obj2 = selectedGuildId(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => voiceChannelId.getVoiceChannelId());
  if (selectedGuildId === closure_13) {
    const obj3 = { style: merged.style };
    return closure_14(GuildUpsellChannelListDefault, obj3);
  } else {
    if (null != stateFromStores) {
      if (selectedGuildId !== closure_12) {
        const tmp2Result = selectedGuildId(2070);
        if (tmp2Result.isFavoritesGuildId(selectedGuildId)) {
          const obj4 = { guild: stateFromStores, selectedChannelId, selectedVoiceChannelId: stateFromStores1 };
          const _default = selectedGuildId(15907).default;
          const merged1 = Object.assign(merged);
          return closure_14(_default, obj4);
        } else {
          let tmp6Result;
          const tmp2Result2 = selectedGuildId(9757);
          if (tmp2Result2.shouldNSFWGateGuild(selectedGuildId)) {
            const obj5 = { style: merged.style, guildId: selectedGuildId };
            tmp6Result = tmp6(NsfwGateGuildSidebarDefault, obj5);
          } else {
            const obj6 = { guild: stateFromStores, selectedChannelId, selectedVoiceChannelId: stateFromStores1 };
            const merged2 = Object.assign(merged);
            tmp6Result = tmp6(GuildChannels, obj6);
          }
          return tmp6Result;
        }
      }
    }
    const obj7 = { style: merged.style, selectedGuildId };
    return closure_14(GuildsEmptyDefault, obj7);
  }
}
const View = react_native.View;
({ EMPTY_NUX_SERVER: closure_12, MOBILE_GUILD_UPSELL_LIST: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
const memoResult = react.memo((gameClaimMarkAsDismissed) => {
  let LayerScope;
  let contentInset;
  let items15;
  let listBottom;
  let listPaddingBottom;
  let listViewportHeight;
  let obj16;
  let obj17;
  let row;
  let section;
  let style;
  let tmp34Result;
  let tmp45;
  gameClaimMarkAsDismissed = gameClaimMarkAsDismissed.gameClaimMarkAsDismissed;
  const guild = gameClaimMarkAsDismissed.guild;
  const guildChannels = gameClaimMarkAsDismissed.guildChannels;
  const selectedChannelId = gameClaimMarkAsDismissed.selectedChannelId;
  const selectedVoiceChannelId = gameClaimMarkAsDismissed.selectedVoiceChannelId;
  const applicationAccountLinkMarkAsDismissed = gameClaimMarkAsDismissed.applicationAccountLinkMarkAsDismissed;
  const startApplicationAccountLinkAuthorization = gameClaimMarkAsDismissed.startApplicationAccountLinkAuthorization;
  const accountLinkApplication = gameClaimMarkAsDismissed.accountLinkApplication;
  const favoritesSuggestionsNoticeHeight = gameClaimMarkAsDismissed.favoritesSuggestionsNoticeHeight;
  listViewportHeight = undefined;
  let tmp = gameClaimMarkAsDismissed;
  let tmp2 = guildChannels;
  ({ contentInset, style } = gameClaimMarkAsDismissed);
  let obj = gameClaimMarkAsDismissed(guildChannels[15]);
  const categoryStyles = obj.useCategoryStyles();
  let tmp4 = guild;
  const tmp5 = guild(guildChannels[16])(guild);
  const bannerHeight = tmp5.bannerHeight;
  const bannerWidth = tmp5.bannerWidth;
  const headerHeight = tmp5.headerHeight;
  const fontScale = tmp5.fontScale;
  ({ listBottom, listPaddingBottom, listViewportHeight } = tmp5);
  const listTop = tmp5.listTop;
  const ref = selectedVoiceChannelId.useRef(null);
  const items = [ref, guildChannels];
  const effect = selectedVoiceChannelId.useEffect(() => {
    const obj = registerSidebarVisibilityMethods;
    const result = obj.registerFastListChannelVisibilityMethod(ref, guildChannels);
  }, items);
  const sections = guildChannels.getSections(false);
  const id = guild.id;
  let obj2 = gameClaimMarkAsDismissed(guildChannels[18]);
  const externalScrollEventHandler = obj2.useExternalScrollEventHandler({ id });
  let obj3 = gameClaimMarkAsDismissed(guildChannels[19]);
  const isHomeDrawerEnabled = obj3.useIsHomeDrawerEnabled();
  const items1 = [guildChannels, guild, headerHeight];
  const callback = selectedVoiceChannelId.useCallback(() => {
    const state = favoritesSuggestionsNoticeHeight.getState();
    state.noteInteraction();
  }, []);
  const items2 = [guild, bannerHeight, bannerWidth];
  const callback1 = selectedVoiceChannelId.useCallback((fastList) => {
    const obj = { fastList, guildChannels, guild, headerHeight };
    return authStore2(ChannelsUnreadBarsDefault, obj);
  }, items1);
  const callback2 = selectedVoiceChannelId.useCallback((scrollPosValue) => {
    const obj = { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth };
    return authStore2(RedesignGuildHeaderDefault, obj, guild.id);
  }, items2);
  const callback3 = selectedVoiceChannelId.useCallback(() => {
    const obj = gameClaimMarkAsDismissed(guildChannels[22]);
    const result = obj.logChannelListEndReached();
  }, []);
  let obj4 = gameClaimMarkAsDismissed(guildChannels[23]);
  const recentlyActiveChannelsEnabled = obj4.useRecentlyActiveChannelsEnabled();
  const items3 = [bannerWidth];
  const items4 = [guild.id];
  const obj5 = gameClaimMarkAsDismissed(guildChannels[24]);
  const stateFromStores = obj5.useStateFromStores(items3, () => SortedVoiceStateStore.getVoiceStates(guild.id), items4);
  const obj6 = gameClaimMarkAsDismissed(guildChannels[25]);
  const optInEnabledForGuild = obj6.useOptInEnabledForGuild(guild.id);
  const obj7 = gameClaimMarkAsDismissed(guildChannels[26]);
  const guildLiveChannelNoticeInfo = obj7.useGuildLiveChannelNoticeInfo(guild.id);
  const obj8 = gameClaimMarkAsDismissed(guildChannels[27]);
  const scaledLiveChannelNoticeHeight = obj8.getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo);
  const obj9 = gameClaimMarkAsDismissed(guildChannels[11]);
  navigation = obj9.useNavigation();
  const items5 = [navigation, ref];
  const effect1 = selectedVoiceChannelId.useEffect(() => {
    let closure_1;
    let c0 = -1;
    navigation = navigation.addListener("tabPress", (arg0) => {
      let focused;
      let timeout = arg0;
      const obj = ref(guildChannels[12]);
      if (null != obj.coerceGuildsRoute(navigation(guildChannels[13])())) {
        let tmp = timeout;
        if (-1 === timeout) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout);
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            clearTimeout(c0);
            c0 = -1;
            const defaultPrevented = focused.isFocused();
            const animationFrame = requestAnimationFrame(() => {
              let tmp = closure_0;
              const useReducedMotion = startApplicationAccountLinkAuthorization.useReducedMotion;
              if (closure_0) {
                tmp = !defaultPrevented.defaultPrevented;
              }
              if (tmp) {
                tmp = null != ref.current;
              }
              if (tmp) {
                const current = ref.current;
                current.scrollToTop(!useReducedMotion);
              }
            });
          }, 300);
        } else {
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout);
          timeout = -1;
        }
      }
    });
    return () => {
      closure_1();
    };
  }, items5);
  const items6 = [guildChannels, sections];
  const callback4 = selectedVoiceChannelId.useCallback((arg0) => {
    const diff = arg0 - 1;
    let tmp2 = diff;
    if (arg0 <= ChannelListState.SECTION_INDEX_FIRST_NAMED_CATEGORY) {
      tmp2 = diff;
      if (0 <= diff) {
        let tmp4 = diff;
        tmp2 = diff;
        if (sections[diff] <= 0) {
          const diff1 = tmp4 - 1;
          tmp2 = diff1;
          while (0 <= diff1) {
            tmp4 = diff1;
            tmp2 = diff1;
            if (sections[diff1] > 0) {
              break;
            }
          }
        }
      }
    }
    let tmp7 = -1 !== tmp2;
    if (-1 !== tmp2) {
      const obj = renderRedesignChannelListItem;
      tmp7 = !obj.getChannelListSectionHasFooterDivider(guildChannels, tmp2);
    }
    return tmp7;
  }, items6);
  const items7 = [guildChannels, fontScale, stateFromStores, scaledLiveChannelNoticeHeight, favoritesSuggestionsNoticeHeight, listViewportHeight];
  const items8 = [guildChannels, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication];
  const callback5 = selectedVoiceChannelId.useCallback((section, row) => {
    const obj = renderRedesignChannelListItem;
    const obj2 = { guildChannels, section, row, fontScale, voiceStates: stateFromStores, liveChannelNoticeHeight: scaledLiveChannelNoticeHeight, favoritesSuggestionsNoticeHeight, listViewportHeight };
    const channelListItemSize = obj.getChannelListItemSize(obj2);
    return roundToNearestPixelDefault(channelListItemSize);
  }, items7);
  const items9 = [guildChannels, fontScale, callback4];
  const callback6 = selectedVoiceChannelId.useCallback((section, row) => {
    let obj2;
    let obj3;
    const obj = { children: obj2.renderChannelListItem(obj3) };
    obj2 = renderRedesignChannelListItem;
    obj3 = { guildChannels, section, row, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication };
    return authStore2(View, obj);
  }, items8);
  const items10 = [guildChannels, recentlyActiveChannelsEnabled, callback4, categoryStyles];
  const callback7 = selectedVoiceChannelId.useCallback((section) => {
    const obj = renderRedesignChannelListItem;
    const channelListSectionHeaderSize = obj.getChannelListSectionHeaderSize(guildChannels, section, fontScale, callback4(section));
    return roundToNearestPixelDefault(channelListSectionHeaderSize);
  }, items9);
  const items11 = [guildChannels, optInEnabledForGuild, stateFromStores, selectedChannelId, selectedVoiceChannelId];
  const callback8 = selectedVoiceChannelId.useCallback((section) => {
    const obj = renderRedesignChannelListItem;
    const obj2 = { children: obj.renderChannelListSectionHeader(guildChannels, section, recentlyActiveChannelsEnabled, callback4(section), categoryStyles) };
    return authStore2(View, obj2);
  }, items10);
  const items12 = [guildChannels, optInEnabledForGuild, stateFromStores, selectedChannelId, selectedVoiceChannelId];
  const callback9 = selectedVoiceChannelId.useCallback((section) => {
    const obj = renderRedesignChannelListItem;
    const obj2 = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId };
    const result = obj.calculateVoiceSummary(obj2);
    const obj3 = renderRedesignChannelListItem;
    const channelListSectionFooterSize = obj3.getChannelListSectionFooterSize(guildChannels, section, result);
    return roundToNearestPixelDefault(channelListSectionFooterSize);
  }, items11);
  const items13 = [sections];
  const callback10 = selectedVoiceChannelId.useCallback((section) => {
    const obj = renderRedesignChannelListItem;
    const obj2 = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId };
    const result = obj.calculateVoiceSummary(obj2);
    const obj3 = renderRedesignChannelListItem;
    const obj4 = { children: obj3.renderChannelListSectionFooter(guildChannels, section, ref, result) };
    return authStore2(View, obj4);
  }, items12);
  const items14 = [guildChannels];
  const memo = selectedVoiceChannelId.useMemo(() => 0 === sections.reduce((acc, item) => acc + item, 0), items13);
  const callback11 = selectedVoiceChannelId.useCallback((arg0, arg1, arg2) => {
    const obj = renderRedesignChannelListItem;
    return obj.getFastListRecyclerKey(guildChannels, arg0, arg1, arg2);
  }, items14);
  const context = selectedVoiceChannelId.useContext(guild(guildChannels[31]));
  const obj10 = gameClaimMarkAsDismissed(guildChannels[32]);
  const youBarTotalHeight = obj10.useYouBarTotalHeight(16);
  const obj11 = gameClaimMarkAsDismissed(guildChannels[32]);
  const youBarTotalHeight1 = obj11.useYouBarTotalHeight(-16);
  const obj12 = { profile: gameClaimMarkAsDismissed(guildChannels[33]).Profiles.Channels, children: listViewportHeight(LayerScope, obj17) };
  const tmp35 = guild(guildChannels[33]);
  LayerScope = gameClaimMarkAsDismissed(guildChannels[34]).LayerScope;
  const obj13 = { style, contentInset, children: items15 };
  items15 = [, ];
  const tmp37 = guild(guildChannels[35]);
  items15[0] = listViewportHeight(guild(guildChannels[36]), { guild });
  const tmp36 = ref;
  if (memo) {
    const obj14 = { guild };
    tmp34Result = tmp34(tmp4(tmp2[37]), obj14);
  } else {
    const obj15 = { insetEnd: youBarTotalHeight, scrollIndicatorInsets: obj16, waitFor: context, ref, chunkBase: listViewportHeight, stickyHeaderFooter: true, renderHeader: callback2, headerSize: listTop, footerSize: listBottom + listPaddingBottom, endReachedThreshold: listBottom + listPaddingBottom, onEndReached: callback3, renderAccessory: callback1, disableContentWrappers: true, sections, stickySectionsVariant: "disabled", renderSection: callback8, sectionSize: callback7, renderItem: callback6, itemSize: callback5, renderSectionFooter: callback10, sectionFooterSize: callback9, optimizeListItemRender: true, getRecyclerKey: callback11, initialScrollSection: section, initialScrollItem: row, initialScrollOrientation: "center", onScroll: tmp45, onScrollWorklet: externalScrollEventHandler };
    obj16 = { bottom: youBarTotalHeight1 };
    section = undefined;
    const tmp4Result = tmp4(tmp2[38]);
    const tmpResult = tmp(tmp2[14]);
    if (!tmpResult.isGameCommunityServerPreview(id)) {
      const first = selectedChannelId(guildChannels.getSectionRowsFromChannel(selectedChannelId), 1)[0];
      if (null != first) {
        if (null != first.row) {
          if (first.row >= 0) {
            if (first.section >= 0) {
              section = first.section;
            }
          }
        }
      }
    }
    row = undefined;
    const tmpResult2 = tmp(tmp2[14]);
    if (!tmpResult2.isGameCommunityServerPreview(id)) {
      const first1 = selectedChannelId(guildChannels.getSectionRowsFromChannel(selectedChannelId), 1)[0];
      if (null != first1) {
        if (null != first1.row) {
          if (first1.row >= 0) {
            if (first1.section >= 0) {
              row = first1.row;
            }
          }
        }
      }
    }
    tmp45 = undefined;
    if (isHomeDrawerEnabled) {
      tmp45 = callback;
    }
    tmp34Result = tmp34(tmp4Result, obj15, guild.id);
  }
  items15[1] = tmp34Result;
  obj17 = { children: tmp36(tmp37, obj13) };
  return listViewportHeight(tmp35, obj12);
});
const memoResult1 = react.memo((arg0) => {
  const obj = useHomeDrawerGesture;
  const obj2 = {};
  const doesLandOnHomeDrawer = obj.useDoesLandOnHomeDrawer();
  const merged = Object.assign(arg0);
  const children = [authStore2(ChannelsWrapper, obj2), ];
  let tmp6Result = null;
  const tmp4 = closure_15;
  const tmp5 = authStore3;
  const tmp6 = authStore2;
  if (!doesLandOnHomeDrawer) {
    tmp6Result = tmp6(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "channel-list", checkFocusedScreen: "guilds" });
  }
  children[1] = tmp6Result;
  return tmp4(tmp5, { children });
});
let result = size.fileFinishedImporting("modules/channel_list_v2/native/RedesignChannelList.tsx");

export default memoResult1;
export const ChannelList = memoResult;
