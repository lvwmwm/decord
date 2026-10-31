// Module ID: 18148
// Function ID: 18149
// Name: RedesignChannelList
// Dependencies: [32, 19, 17, 5015, 7705, 18061, 4885, 4917, 5767, 1072, 7713, 21, 1500, 5198, 11504, 18149, 18150, 18177, 18226, 18227, 17063, 18067, 18228, 18178, 18230, 7714, 504, 6885, 18231, 18235, 7707, 18236, 12271, 18045, 17064, 11562, 5611, 18095, 18291, 18303, 18306, 18308, 18310, 18059, 18311, 9676, 18313, 18317, 18330, 4888, 18335, 9972, 18343, 13320, 2]

// Module 18148 (RedesignChannelList)
import react_native from "react-native" /* 17 */;
import ChannelListState from "ChannelListState" /* 7707 */;
import GuildSidebarConstants from "GuildSidebarConstants" /* 7713 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12271 */;
import GuildsRenderExperiment2 from "GuildsRenderExperiment" /* 18059 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 18067 */;
import RedesignGuildHeaderDefault from "RedesignGuildHeader" /* 18178 */;
import registerSidebarVisibilityMethods from "registerSidebarVisibilityMethods" /* 18227 */;
import ChannelsUnreadBarsDefault from "ChannelsUnreadBars" /* 18228 */;
import renderRedesignChannelListItem from "renderRedesignChannelListItem" /* 18236 */;
import useShouldRenderChannelList from "useShouldRenderChannelList" /* 18310 */;
import GuildUpsellChannelListDefault from "GuildUpsellChannelList" /* 18317 */;
import GuildsEmptyDefault from "GuildsEmpty" /* 18330 */;
import NsfwGateGuildSidebarDefault from "NsfwGateGuildSidebar" /* 18343 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import ChannelListStore from "ChannelListStore" /* 7705 */;
import HomeDrawerStore from "HomeDrawerStore" /* 18061 */;
import GuildStore from "GuildStore" /* 4885 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5767 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap, navigation;

let closure_12;
let closure_15;
let closure_16;
let closure_17;
let map1;
let tmp;
const TTIFirstContentfulPaint = tmp(13320);
function GuildChannels(arg0) {
  let tmp2;
  const obj = useShouldRenderChannelList;
  const shouldRenderChannelList = obj.useShouldRenderChannelList();
  const GuildsRenderExperiment = GuildsRenderExperiment2.GuildsRenderExperiment;
  if (!GuildsRenderExperiment.useConfig({ location: "GuildChannels" }).enabled) {
    const obj2 = { shouldRender: shouldRenderChannelList };
    const merged = Object.assign(arg0);
    tmp2 = closure_15(GuildChannelsList, obj2);
  } else {
    tmp2 = null;
  }
  return tmp2;
}
function GuildChannelsList(shouldRender) {
  let accountLinkApplication;
  let applicationAccountLinkMarkAsDismissed;
  let c2;
  let channelNoticeRows;
  let gameClaimMarkAsDismissed;
  let startApplicationAccountLinkAuthorization;
  shouldRender = shouldRender.shouldRender;
  const merged = Object.assign(shouldRender, Object.assign({ shouldRender: 0 }));
  let found;
  dependencyMap = undefined;
  const arr = found(18311)(merged.guild);
  const hasItem = arr.includes(ChannelListGuildActionRow.GUILD_CONJURE);
  merged(9676);
  found = arr;
  const tmp5 = merged;
  if (hasItem) {
    found = arr;
    if (!tmp7) {
      found = arr.filter((item) => item !== constants.GUILD_CONJURE);
    }
  }
  ({ rows: c2, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = found(18313)(merged.guild));
  found(18313)(merged.guild);
  const items = [ChannelListStore];
  const tmp5Result = tmp5(504);
  const stateFromStoresObject = tmp5Result.useStateFromStoresObject(items, () => {
    const obj = { guildActionRows: found, channelNoticeRows };
    return ChannelListStore.getGuild(merged.guild.id, obj);
  });
  let tmp13 = null;
  if (shouldRender) {
    let obj = { guildChannels: tmp11, guildChannelsVersion: tmp12, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication };
    const merged1 = Object.assign(merged);
    tmp13 = closure_15(closure_18, obj);
  }
  return tmp13;
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
    return closure_15(GuildUpsellChannelListDefault, obj3);
  } else {
    if (null != stateFromStores) {
      if (selectedGuildId !== closure_12) {
        const tmp2Result = selectedGuildId(4888);
        if (tmp2Result.isFavoritesGuildId(selectedGuildId)) {
          const obj4 = { guild: stateFromStores, selectedChannelId, selectedVoiceChannelId: stateFromStores1 };
          const _default = selectedGuildId(18335).default;
          const merged1 = Object.assign(merged);
          return closure_15(_default, obj4);
        } else {
          let tmp6Result;
          const tmp2Result2 = selectedGuildId(9972);
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
    return closure_15(GuildsEmptyDefault, obj7);
  }
}
const View = react_native.View;
({ EMPTY_NUX_SERVER: closure_12, MOBILE_GUILD_UPSELL_LIST: map1 } = Constants);
const ChannelListGuildActionRow = GuildSidebarConstants.ChannelListGuildActionRow;
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = Fragment);
const memoResult = react.memo(function ChannelList(gameClaimMarkAsDismissed) {
  let LayerScope;
  let contentInset;
  let items15;
  let listBottom;
  let listPaddingBottom;
  let listTop;
  let obj19;
  let row;
  let section;
  let style;
  let tmp41;
  let tmp42Result;
  let youBarTotalHeight1;
  gameClaimMarkAsDismissed = gameClaimMarkAsDismissed.gameClaimMarkAsDismissed;
  const guild = gameClaimMarkAsDismissed.guild;
  const guildChannels = gameClaimMarkAsDismissed.guildChannels;
  const selectedChannelId = gameClaimMarkAsDismissed.selectedChannelId;
  const selectedVoiceChannelId = gameClaimMarkAsDismissed.selectedVoiceChannelId;
  const applicationAccountLinkMarkAsDismissed = gameClaimMarkAsDismissed.applicationAccountLinkMarkAsDismissed;
  const startApplicationAccountLinkAuthorization = gameClaimMarkAsDismissed.startApplicationAccountLinkAuthorization;
  const accountLinkApplication = gameClaimMarkAsDismissed.accountLinkApplication;
  const favoritesSuggestionsNoticeHeight = gameClaimMarkAsDismissed.favoritesSuggestionsNoticeHeight;
  let tmp = gameClaimMarkAsDismissed;
  let tmp2 = guildChannels;
  ({ contentInset, style } = gameClaimMarkAsDismissed);
  let obj = gameClaimMarkAsDismissed(guildChannels[16]);
  const categoryStyles = obj.useCategoryStyles();
  let tmp4 = guild;
  const tmp5 = guild(guildChannels[17])(guild);
  const bannerHeight = tmp5.bannerHeight;
  const bannerWidth = tmp5.bannerWidth;
  const headerHeight = tmp5.headerHeight;
  const fontScale = tmp5.fontScale;
  const listViewportHeight = tmp5.listViewportHeight;
  ({ listTop, listBottom, listPaddingBottom } = tmp5);
  const ref = selectedVoiceChannelId.useRef(null);
  let obj2 = guild(guildChannels[18]);
  const config = obj2.useConfig({ location: "Channel List" });
  const list = config.list;
  const items = [ref, guildChannels, list];
  const drawDistance = config.drawDistance;
  const effect = selectedVoiceChannelId.useEffect(() => {
    const obj = registerSidebarVisibilityMethods;
    const result = obj.registerFastListChannelVisibilityMethod(ref, guildChannels);
  }, items);
  const sections = guildChannels.getSections(false);
  const id = guild.id;
  let obj3 = gameClaimMarkAsDismissed(guildChannels[20]);
  const externalScrollEventHandler = obj3.useExternalScrollEventHandler({ id });
  let obj4 = gameClaimMarkAsDismissed(guildChannels[21]);
  const isHomeDrawerEnabled = obj4.useIsHomeDrawerEnabled();
  const items1 = [guildChannels, guild, headerHeight];
  const callback = selectedVoiceChannelId.useCallback(() => {
    const state = favoritesSuggestionsNoticeHeight.getState();
    state.noteInteraction();
  }, []);
  const items2 = [guild, bannerHeight, bannerWidth];
  const callback1 = selectedVoiceChannelId.useCallback((fastList) => {
    const obj = { fastList, guildChannels, guild, headerHeight };
    return ref(ChannelsUnreadBarsDefault, obj);
  }, items1);
  const callback2 = selectedVoiceChannelId.useCallback((scrollPosValue) => {
    const obj = { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth };
    return ref(RedesignGuildHeaderDefault, obj, guild.id);
  }, items2);
  const callback3 = selectedVoiceChannelId.useCallback(() => {
    const obj = gameClaimMarkAsDismissed(guildChannels[24]);
    const result = obj.logChannelListEndReached();
  }, []);
  const obj5 = gameClaimMarkAsDismissed(guildChannels[25]);
  const recentlyActiveChannelsEnabled = obj5.useRecentlyActiveChannelsEnabled();
  const items3 = [bannerWidth];
  const items4 = [guild.id];
  const obj6 = gameClaimMarkAsDismissed(guildChannels[26]);
  const stateFromStores = obj6.useStateFromStores(items3, () => SortedVoiceStateStore.getVoiceStates(guild.id), items4);
  const obj7 = gameClaimMarkAsDismissed(guildChannels[27]);
  const optInEnabledForGuild = obj7.useOptInEnabledForGuild(guild.id);
  const obj8 = gameClaimMarkAsDismissed(guildChannels[28]);
  const guildLiveChannelNoticeInfo = obj8.useGuildLiveChannelNoticeInfo(guild.id);
  const obj9 = gameClaimMarkAsDismissed(guildChannels[29]);
  const scaledLiveChannelNoticeHeight = obj9.getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo);
  const obj10 = gameClaimMarkAsDismissed(guildChannels[12]);
  navigation = obj10.useNavigation();
  const items5 = [navigation, ref];
  const effect1 = selectedVoiceChannelId.useEffect(() => {
    let closure_1;
    let c0 = -1;
    navigation = navigation.addListener("tabPress", (arg0) => {
      let focused;
      let timeout = arg0;
      const obj = ref(guildChannels[13]);
      if (null != obj.coerceGuildsRoute(navigation(guildChannels[14])())) {
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
    return ref(View, obj);
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
    return ref(View, obj2);
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
    return ref(View, obj4);
  }, items12);
  const items14 = [guildChannels];
  const memo = selectedVoiceChannelId.useMemo(() => 0 === sections.reduce((acc, item) => acc + item, 0), items13);
  const callback11 = selectedVoiceChannelId.useCallback((arg0, arg1, arg2) => {
    const obj = renderRedesignChannelListItem;
    return obj.getFastListRecyclerKey(guildChannels, arg0, arg1, arg2);
  }, items14);
  const context = selectedVoiceChannelId.useContext(guild(guildChannels[33]));
  const obj11 = gameClaimMarkAsDismissed(guildChannels[34]);
  const youBarTotalHeight = obj11.useYouBarTotalHeight(16);
  const obj13 = { endReachedThreshold: listBottom + listPaddingBottom, getItemSize: callback5, getRecyclerKey: callback11, getSectionFooterSize: callback9, getSectionHeaderSize: callback7, headerSize: listTop, initialScrollItem: row, initialScrollSection: section, insetEnd: youBarTotalHeight, listViewportHeight, onEndReached: callback3, onScroll: tmp41, onScrollWorklet: externalScrollEventHandler, renderAccessory: callback1, renderHeader: callback2, renderItem: callback6, renderSectionFooter: callback10, renderSectionHeader: callback8, scrollIndicatorInsetBottom: youBarTotalHeight1, sections, waitFor: context };
  const obj12 = gameClaimMarkAsDismissed(guildChannels[34]);
  youBarTotalHeight1 = obj12.useYouBarTotalHeight(-16);
  row = undefined;
  const obj14 = gameClaimMarkAsDismissed(guildChannels[15]);
  if (!obj14.isGameCommunityServerPreview(id)) {
    const first = selectedChannelId(guildChannels.getSectionRowsFromChannel(selectedChannelId), 1)[0];
    if (null != first) {
      if (null != first.row) {
        if (first.row >= 0) {
          if (first.section >= 0) {
            row = first.row;
          }
        }
      }
    }
  }
  section = undefined;
  const tmpResult = tmp(tmp2[15]);
  if (!tmpResult.isGameCommunityServerPreview(id)) {
    const first1 = selectedChannelId(guildChannels.getSectionRowsFromChannel(selectedChannelId), 1)[0];
    if (null != first1) {
      if (null != first1.row) {
        if (first1.row >= 0) {
          if (first1.section >= 0) {
            section = first1.section;
          }
        }
      }
    }
  }
  tmp41 = undefined;
  if (isHomeDrawerEnabled) {
    tmp41 = callback;
  }
  const obj15 = { profile: tmp(tmp2[35]).Profiles.Channels, children: ref(LayerScope, obj19) };
  const tmp4Result = tmp4(tmp2[35]);
  LayerScope = tmp(tmp2[36]).LayerScope;
  const obj16 = { style, contentInset, children: items15 };
  items15 = [, ];
  const tmp4Result3 = tmp4(tmp2[37]);
  items15[0] = ref(tmp4(tmp2[38]), { guild });
  const tmp44 = sections;
  if (memo) {
    const obj17 = { guild };
    tmp42Result = tmp42(tmp4(tmp2[39]), obj17);
  } else {
    const obj18 = { ref, drawDistanceMode: drawDistance };
    const tmp4Result4 = tmp4("legend" === list ? tmp2[40] : tmp2[41]);
    const merged = Object.assign(obj13);
    tmp42Result = tmp42(tmp4Result4, obj18, guild.id);
  }
  items15[1] = tmp42Result;
  obj19 = { children: tmp44(tmp4Result3, obj16) };
  return ref(tmp4Result, obj15);
});
const memoResult1 = react.memo(function ChannelsWithInstrumentation(arg0) {
  const obj = useHomeDrawerGesture;
  const obj2 = {};
  const doesLandOnHomeDrawer = obj.useDoesLandOnHomeDrawer();
  const merged = Object.assign(arg0);
  const children = [closure_15(ChannelsWrapper, obj2), ];
  let tmp6Result = null;
  const tmp4 = authStore4;
  const tmp5 = closure_17;
  const tmp6 = closure_15;
  if (!doesLandOnHomeDrawer) {
    tmp6Result = tmp6(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "channel-list", checkFocusedScreen: "guilds" });
  }
  children[1] = tmp6Result;
  return tmp4(tmp5, { children });
});
let result = size.fileFinishedImporting("modules/channel_list_v2/native/RedesignChannelList.tsx");

export default memoResult1;
export const ChannelList = memoResult;
