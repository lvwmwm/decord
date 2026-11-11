// Module ID: 18699
// Function ID: 18700
// Name: RedesignChannelList
// Dependencies: [32, 19, 17, 5244, 8662, 18612, 5114, 5146, 6011, 1072, 8670, 21, 1502, 5429, 12492, 18700, 18701, 18726, 18772, 18773, 17589, 18618, 18774, 18727, 18776, 8672, 504, 6996, 18777, 18781, 8664, 18782, 10509, 18596, 17590, 12358, 5853, 18646, 18838, 18850, 18853, 18855, 18857, 18610, 18858, 10449, 18860, 18864, 18877, 18895, 5117, 18900, 11198, 18909, 14101, 2]

// Module 18699 (RedesignChannelList)
import react_native from "react-native" /* 17 */;
import ChannelListState from "ChannelListState" /* 8664 */;
import GuildSidebarConstants from "GuildSidebarConstants" /* 8670 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10509 */;
import GuildsRenderExperiment2 from "GuildsRenderExperiment" /* 18610 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 18618 */;
import RedesignGuildHeaderDefault from "RedesignGuildHeader" /* 18727 */;
import registerSidebarVisibilityMethods from "registerSidebarVisibilityMethods" /* 18773 */;
import ChannelsUnreadBarsDefault from "ChannelsUnreadBars" /* 18774 */;
import renderRedesignChannelListItem from "renderRedesignChannelListItem" /* 18782 */;
import useShouldRenderChannelList from "useShouldRenderChannelList" /* 18857 */;
import GuildUpsellChannelListDefault from "GuildUpsellChannelList" /* 18864 */;
import WaterwheelsDiscoverPanelDefault from "WaterwheelsDiscoverPanel" /* 18877 */;
import GuildsEmptyDefault from "GuildsEmpty" /* 18895 */;
import NsfwGateGuildSidebarDefault from "NsfwGateGuildSidebar" /* 18909 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import ChannelListStore from "ChannelListStore" /* 8662 */;
import HomeDrawerStore from "HomeDrawerStore" /* 18612 */;
import GuildStore from "GuildStore" /* 5114 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5146 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 6011 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap, navigation;

let closure_12;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let map1;
let tmp;
const TTIFirstContentfulPaint = tmp(14101);
function GuildChannels(arg0) {
  let tmp2;
  const obj = useShouldRenderChannelList;
  const shouldRenderChannelList = obj.useShouldRenderChannelList();
  const GuildsRenderExperiment = GuildsRenderExperiment2.GuildsRenderExperiment;
  if (!GuildsRenderExperiment.useConfig({ location: "GuildChannels" }).enabled) {
    const obj2 = { shouldRender: shouldRenderChannelList };
    const merged = Object.assign(arg0);
    tmp2 = authStore3(GuildChannelsList, obj2);
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
  let found1;
  dependencyMap = undefined;
  const arr = found1(18858)(merged.guild);
  const found = arr.filter(merged(18782).isMobileGuildActionRow);
  const hasItem = found.includes(ChannelListGuildActionRow.GUILD_CONJURE);
  merged(10449);
  found1 = found;
  const tmp4 = merged;
  if (hasItem) {
    found1 = found;
    if (!tmp7) {
      found1 = found.filter((item) => item !== constants.GUILD_CONJURE);
    }
  }
  ({ rows: c2, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = found1(18860)(merged.guild));
  found1(18860)(merged.guild);
  const items = [ChannelListStore];
  const tmp4Result = tmp4(504);
  const stateFromStoresObject = tmp4Result.useStateFromStoresObject(items, () => {
    const obj = { guildActionRows: found1, channelNoticeRows };
    return ChannelListStore.getGuild(merged.guild.id, obj);
  });
  let tmp13 = null;
  if (shouldRender) {
    let obj = { guildChannels: tmp11, guildChannelsVersion: tmp12, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication };
    const merged1 = Object.assign(merged);
    tmp13 = closure_16(closure_19, obj);
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
    return closure_16(GuildUpsellChannelListDefault, obj3);
  } else if (selectedGuildId === closure_14) {
    const obj4 = { style: merged.style };
    return closure_16(WaterwheelsDiscoverPanelDefault, obj4);
  } else {
    if (null != stateFromStores) {
      if (selectedGuildId !== closure_12) {
        const tmp2Result = selectedGuildId(5117);
        if (tmp2Result.isFavoritesGuildId(selectedGuildId)) {
          const obj5 = { guild: stateFromStores, selectedChannelId, selectedVoiceChannelId: stateFromStores1 };
          const _default = selectedGuildId(18900).default;
          const merged1 = Object.assign(merged);
          return closure_16(_default, obj5);
        } else {
          let tmp6Result;
          const tmp2Result2 = selectedGuildId(11198);
          if (tmp2Result2.shouldNSFWGateGuild(selectedGuildId)) {
            const obj6 = { style: merged.style, guildId: selectedGuildId };
            tmp6Result = tmp6(NsfwGateGuildSidebarDefault, obj6);
          } else {
            const obj7 = { guild: stateFromStores, selectedChannelId, selectedVoiceChannelId: stateFromStores1 };
            const merged2 = Object.assign(merged);
            tmp6Result = tmp6(GuildChannels, obj7);
          }
          return tmp6Result;
        }
      }
    }
    const obj8 = { style: merged.style, selectedGuildId };
    return closure_16(GuildsEmptyDefault, obj8);
  }
}
const View = react_native.View;
({ EMPTY_NUX_SERVER: closure_12, MOBILE_GUILD_UPSELL_LIST: map1, WATERWHEELS: closure_14 } = Constants);
const ChannelListGuildActionRow = GuildSidebarConstants.ChannelListGuildActionRow;
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = Fragment);
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
    return authStore3(ChannelsUnreadBarsDefault, obj);
  }, items1);
  const callback2 = selectedVoiceChannelId.useCallback((scrollPosValue) => {
    const obj = { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth };
    return authStore3(RedesignGuildHeaderDefault, obj, guild.id);
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
    return authStore3(View, obj);
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
    return authStore3(View, obj2);
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
    return authStore3(View, obj4);
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
  const obj15 = { profile: tmp(tmp2[35]).Profiles.Channels, children: sections(LayerScope, obj19) };
  const tmp4Result = tmp4(tmp2[35]);
  LayerScope = tmp(tmp2[36]).LayerScope;
  const obj16 = { style, contentInset, children: items15 };
  items15 = [, ];
  const tmp4Result3 = tmp4(tmp2[37]);
  items15[0] = sections(tmp4(tmp2[38]), { guild });
  const tmp44 = recentlyActiveChannelsEnabled;
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
  return sections(tmp4Result, obj15);
});
const memoResult1 = react.memo(function ChannelsWithInstrumentation(arg0) {
  const obj = useHomeDrawerGesture;
  const obj2 = {};
  const doesLandOnHomeDrawer = obj.useDoesLandOnHomeDrawer();
  const merged = Object.assign(arg0);
  const children = [authStore3(ChannelsWrapper, obj2), ];
  let tmp6Result = null;
  const tmp4 = closure_17;
  const tmp5 = authStore4;
  const tmp6 = authStore3;
  if (!doesLandOnHomeDrawer) {
    tmp6Result = tmp6(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "channel-list", checkFocusedScreen: "guilds" });
  }
  children[1] = tmp6Result;
  return tmp4(tmp5, { children });
});
let result = size.fileFinishedImporting("modules/channel_list_v2/native/RedesignChannelList.tsx");

export default memoResult1;
export const ChannelList = memoResult;
