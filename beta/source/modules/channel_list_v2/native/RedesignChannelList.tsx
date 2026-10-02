// Module ID: 15734
// Function ID: 15735
// Name: RedesignChannelList
// Dependencies: [109, 32, 19, 17, 4826, 6949, 15649, 2073, 2102, 4861, 1086, 21, 558, 576, 1494, 4694, 10752, 15735, 15736, 15763, 15811, 14616, 15654, 15812, 15764, 15814, 6960, 504, 6959, 15815, 15819, 6952, 15820, 10491, 15635, 14617, 15873, 15886, 6494, 11315, 6578, 15732, 15889, 15891, 15895, 15896, 15905, 2076, 15907, 9673, 15915, 11249, 2]

// Module 15734 (RedesignChannelList)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import ChannelListState from "ChannelListState" /* 6952 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10491 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 15654 */;
import RedesignGuildHeaderDefault from "RedesignGuildHeader" /* 15764 */;
import registerSidebarVisibilityMethods from "registerSidebarVisibilityMethods" /* 15811 */;
import ChannelsUnreadBarsDefault from "ChannelsUnreadBars" /* 15812 */;
import renderRedesignChannelListItem from "renderRedesignChannelListItem" /* 15820 */;
import GuildUpsellChannelListDefault from "GuildUpsellChannelList" /* 15896 */;
import GuildsEmptyDefault from "GuildsEmpty" /* 15905 */;
import NsfwGateGuildSidebarDefault from "NsfwGateGuildSidebar" /* 15915 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4826 */;
import ChannelListStore from "ChannelListStore" /* 6949 */;
import HomeDrawerStore from "HomeDrawerStore" /* 15649 */;
import GuildStore from "GuildStore" /* 2073 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2102 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4861 */;
import Constants from "Constants" /* 1086 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, navigation, selectedGuildId;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let tmp;
const TTIFirstContentfulPaint = tmp(11249);
let closure_3 = ["selectedGuildId", "selectedChannelId"];
let react = react_mod;
const View = react_native.View;
({ EMPTY_NUX_SERVER: closure_14, MOBILE_GUILD_UPSELL_LIST: closure_15 } = Constants);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(4);
  const obj2 = require("BaseNavigationContainer");
  navigation = obj2.useNavigation();
  if (cResult[0] === arg0) {
    let tmp3;
    let tmp4;
    if (cResult[1] === navigation) {
      tmp3 = cResult[2];
      tmp4 = cResult[3];
    }
    const effect = react.useEffect(tmp3, tmp4);
  }
  const fn = function t() {
    let closure_1;
    let v1;
    let c0 = -1;
    navigation = navigation.addListener("tabPress", (arg0) => {
      let focused;
      let timeout = arg0;
      const obj = v1(dependencyMap[15]);
      if (null != obj.coerceGuildsRoute(navigation(dependencyMap[16])())) {
        let tmp = timeout;
        if (-1 === timeout) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout);
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            clearTimeout(c0);
            c0 = -1;
            const ref = focused.isFocused();
            const animationFrame = requestAnimationFrame(() => {
              let tmp = ref;
              const useReducedMotion = AccessibilityStore.useReducedMotion;
              if (ref) {
                tmp = !ref.defaultPrevented;
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
  };
  const items = [navigation, arg0];
  cResult[0] = arg0;
  cResult[1] = navigation;
  cResult[2] = fn;
  cResult[3] = items;
  tmp4 = items;
  tmp3 = fn;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("BaseNavigationContainer");
  navigation = obj.useNavigation();
  const items = [navigation, arg0];
  const effect = react.useEffect(() => {
    let closure_1;
    let v1;
    let c0 = -1;
    navigation = navigation.addListener("tabPress", (arg0) => {
      let focused;
      let timeout = arg0;
      const obj = v1(dependencyMap[15]);
      if (null != obj.coerceGuildsRoute(navigation(dependencyMap[16])())) {
        let tmp = timeout;
        if (-1 === timeout) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout);
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            clearTimeout(c0);
            c0 = -1;
            const ref = focused.isFocused();
            const animationFrame = requestAnimationFrame(() => {
              let tmp = ref;
              const useReducedMotion = AccessibilityStore.useReducedMotion;
              if (ref) {
                tmp = !ref.defaultPrevented;
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
  }, items);
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let applicationAccountLinkMarkAsDismissed;
  let contentInset;
  let gameClaimMarkAsDismissed;
  let guildChannels;
  let listBottom;
  let listPaddingBottom;
  let listTop;
  let listViewportHeight;
  let startApplicationAccountLinkAuthorization;
  let style;
  let tmp10;
  let tmp12;
  let tmp7;
  let tmp8;
  let tmp2 = guildChannels;
  let obj = gameClaimMarkAsDismissed(guildChannels[13]);
  const cResult = obj.c(100);
  ({ contentInset, gameClaimMarkAsDismissed } = guild);
  guild = guild.guild;
  guildChannels = guild.guildChannels;
  const selectedChannelId = guild.selectedChannelId;
  const selectedVoiceChannelId = guild.selectedVoiceChannelId;
  ({ style, applicationAccountLinkMarkAsDismissed } = guild);
  react = guild.startApplicationAccountLinkAuthorization;
  const accountLinkApplication = guild.accountLinkApplication;
  const favoritesSuggestionsNoticeHeight = guild.favoritesSuggestionsNoticeHeight;
  let obj2 = gameClaimMarkAsDismissed(guildChannels[18]);
  const categoryStyles = obj2.useCategoryStyles();
  const tmp5 = guild(guildChannels[19])(guild);
  const bannerHeight = tmp5.bannerHeight;
  const bannerWidth = tmp5.bannerWidth;
  const headerHeight = tmp5.headerHeight;
  const fontScale = tmp5.fontScale;
  ({ listTop, listBottom, listPaddingBottom, listViewportHeight } = tmp5);
  let obj3 = react;
  const ref = react.useRef(null);
  if (cResult[0] !== guildChannels) {
    const fn = function t() {
      const obj = registerSidebarVisibilityMethods;
      const result = obj.registerFastListChannelVisibilityMethod(ref, guildChannels);
    };
    const items = [ref, guildChannels];
    cResult[0] = guildChannels;
    cResult[1] = fn;
    cResult[2] = items;
    tmp8 = items;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const effect = obj3.useEffect(tmp7, tmp8);
  if (cResult[3] !== guildChannels) {
    const sections = guildChannels.getSections(false);
    cResult[3] = guildChannels;
    cResult[4] = sections;
    tmp10 = sections;
  } else {
    tmp10 = cResult[4];
  }
  let closure_16 = tmp10;
  const id = guild.id;
  if (cResult[5] !== id) {
    let obj4 = { id };
    cResult[5] = id;
    cResult[6] = obj4;
    tmp12 = obj4;
  } else {
    tmp12 = cResult[6];
  }
  const tmpResult = gameClaimMarkAsDismissed(tmp2[21]);
  tmpResult.useExternalScrollEventHandler(tmp12);
  const tmpResult7 = gameClaimMarkAsDismissed(tmp2[22]);
  const isHomeDrawerEnabled = tmpResult7.useIsHomeDrawerEnabled();
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function x() {
      const state = bannerHeight.getState();
      state.noteInteraction();
    };
    cResult[7] = fn2;
  }
  if (cResult[8] === guild) {
    if (cResult[9] === guildChannels) {
      if (cResult[12] === bannerHeight) {
        if (cResult[13] === bannerWidth) {
          let tmp21;
          let tmp23;
          let tmp22;
          const _Symbol = Symbol;
          class X {
            constructor(scrollPosValue) {
              const obj = { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth };
              return authStore3(RedesignGuildHeaderDefault, obj, guild.id);
            }
          }
          if (tmp18 === Symbol.for("react.memo_cache_sentinel")) {
            class J {
              constructor() {
                const obj = gameClaimMarkAsDismissed(guildChannels[25]);
                const result = obj.logChannelListEndReached();
              }
            }
            class X {
              constructor(scrollPosValue) {
                const obj = { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth };
                return authStore3(RedesignGuildHeaderDefault, obj, guild.id);
              }
            }
          } else {
            class J {
              constructor() {
                const obj = gameClaimMarkAsDismissed(guildChannels[25]);
                const result = obj.logChannelListEndReached();
              }
            }
          }
          const tmpResult8 = gameClaimMarkAsDismissed(tmp2[26]);
          const recentlyActiveChannelsEnabled = tmpResult8.useRecentlyActiveChannelsEnabled();
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class J {
              constructor() {
                const obj = gameClaimMarkAsDismissed(guildChannels[25]);
                const result = obj.logChannelListEndReached();
              }
            }
            const items1 = [];
            class X {
              constructor(scrollPosValue) {
                const obj = { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth };
                return authStore3(RedesignGuildHeaderDefault, obj, guild.id);
              }
            }
            cResult[17] = items1;
            tmp21 = items1;
          } else {
            class J {
              constructor() {
                const obj = gameClaimMarkAsDismissed(guildChannels[25]);
                const result = obj.logChannelListEndReached();
              }
            }
          }
          if (cResult[18] !== guild.id) {
            class J {
              constructor() {
                const obj = gameClaimMarkAsDismissed(guildChannels[25]);
                const result = obj.logChannelListEndReached();
              }
            }
            const items2 = [];
            class X {
              constructor(scrollPosValue) {
                const obj = { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth };
                return authStore3(RedesignGuildHeaderDefault, obj, guild.id);
              }
            }
            cResult[18] = guild.id;
            cResult[19] = tmp24;
            cResult[20] = items2;
            tmp23 = items2;
            tmp22 = tmp24;
          } else {
            class J {
              constructor() {
                const obj = gameClaimMarkAsDismissed(guildChannels[25]);
                const result = obj.logChannelListEndReached();
              }
            }
            tmp23 = cResult[20];
          }
          const tmpResult9 = gameClaimMarkAsDismissed(tmp2[27]);
          const stateFromStores = tmpResult9.useStateFromStores(tmp21, tmp22, tmp23);
          const tmpResult10 = gameClaimMarkAsDismissed(tmp2[28]);
          const optInEnabledForGuild = tmpResult10.useOptInEnabledForGuild(guild.id);
          const tmpResult11 = gameClaimMarkAsDismissed(tmp2[29]);
          const guildLiveChannelNoticeInfo = tmpResult11.useGuildLiveChannelNoticeInfo(guild.id);
          if (cResult[21] === fontScale) {
            class J {
              constructor() {
                const obj = gameClaimMarkAsDismissed(guildChannels[25]);
                const result = obj.logChannelListEndReached();
              }
            }
            const liveChannelNoticeHeight = tmp28;
            class X {
              constructor(scrollPosValue) {
                const obj = { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth };
                return authStore3(RedesignGuildHeaderDefault, obj, guild.id);
              }
            }
            optInEnabledForGuild(ref);
            if (cResult[24] === guildChannels) {
              class J {
                constructor() {
                  const obj = gameClaimMarkAsDismissed(guildChannels[25]);
                  const result = obj.logChannelListEndReached();
                }
              }
              class X {
                constructor(scrollPosValue) {
                  const obj = { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth };
                  return authStore3(RedesignGuildHeaderDefault, obj, guild.id);
                }
              }
              function ce(section, row) {
                const obj = renderRedesignChannelListItem;
                const obj2 = { guildChannels, section, row, fontScale, voiceStates: stateFromStores, liveChannelNoticeHeight, favoritesSuggestionsNoticeHeight, listViewportHeight };
                const channelListItemSize = obj.getChannelListItemSize(obj2);
                return roundToNearestPixelDefault(channelListItemSize);
              }
              cResult[27] = favoritesSuggestionsNoticeHeight;
              cResult[28] = fontScale;
              cResult[29] = guildChannels;
              cResult[30] = listViewportHeight;
              cResult[31] = tmp28;
              cResult[32] = stateFromStores;
              cResult[33] = ce;
            }
            function se(arg0) {
              const diff = arg0 - 1;
              let tmp2 = diff;
              if (arg0 <= ChannelListState.SECTION_INDEX_FIRST_NAMED_CATEGORY) {
                tmp2 = diff;
                if (0 <= diff) {
                  let tmp4 = diff;
                  tmp2 = diff;
                  if (closure_16[diff] <= 0) {
                    const diff1 = tmp4 - 1;
                    tmp2 = diff1;
                    while (0 <= diff1) {
                      tmp4 = diff1;
                      tmp2 = diff1;
                      if (closure_16[diff1] > 0) {
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
            }
            cResult[24] = guildChannels;
            cResult[25] = tmp10;
            cResult[26] = se;
            const tmp31 = se;
          }
          const tmpResult12 = gameClaimMarkAsDismissed(tmp2[30]);
          const scaledLiveChannelNoticeHeight = tmpResult12.getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo);
          cResult[21] = fontScale;
          cResult[22] = guildLiveChannelNoticeInfo;
          cResult[23] = scaledLiveChannelNoticeHeight;
        }
      }
      class X {
        constructor(scrollPosValue) {
          const obj = { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth };
          return authStore3(RedesignGuildHeaderDefault, obj, guild.id);
        }
      }
      cResult[12] = bannerHeight;
      cResult[13] = bannerWidth;
      cResult[14] = guild;
      cResult[15] = X;
    }
  }
  class K {
    constructor(fastList) {
      const obj = { fastList, guildChannels, guild, headerHeight };
      return authStore3(ChannelsUnreadBarsDefault, obj);
    }
  }
  cResult[8] = guild;
  cResult[9] = guildChannels;
  cResult[10] = headerHeight;
  cResult[11] = K;
}) : ((gameClaimMarkAsDismissed) => {
  let LayerScope;
  let contentInset;
  let items14;
  let listBottom;
  let listPaddingBottom;
  let listViewportHeight;
  let obj15;
  let obj16;
  let row;
  let section;
  let style;
  let tmp33Result;
  let tmp44;
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
  let tmp2 = guildChannels;
  ({ contentInset, style } = gameClaimMarkAsDismissed);
  let obj = gameClaimMarkAsDismissed(guildChannels[18]);
  const categoryStyles = obj.useCategoryStyles();
  let tmp4 = guild;
  const tmp5 = guild(guildChannels[19])(guild);
  const bannerHeight = tmp5.bannerHeight;
  const bannerWidth = tmp5.bannerWidth;
  const headerHeight = tmp5.headerHeight;
  const fontScale = tmp5.fontScale;
  ({ listBottom, listPaddingBottom, listViewportHeight } = tmp5);
  const listTop = tmp5.listTop;
  const ref = startApplicationAccountLinkAuthorization.useRef(null);
  const items = [ref, guildChannels];
  const effect = startApplicationAccountLinkAuthorization.useEffect(() => {
    const obj = registerSidebarVisibilityMethods;
    const result = obj.registerFastListChannelVisibilityMethod(ref, guildChannels);
  }, items);
  const sections = guildChannels.getSections(false);
  const id = guild.id;
  let obj2 = gameClaimMarkAsDismissed(guildChannels[21]);
  const externalScrollEventHandler = obj2.useExternalScrollEventHandler({ id });
  let obj3 = gameClaimMarkAsDismissed(guildChannels[22]);
  const isHomeDrawerEnabled = obj3.useIsHomeDrawerEnabled();
  const items1 = [guildChannels, guild, headerHeight];
  const callback = startApplicationAccountLinkAuthorization.useCallback(() => {
    const state = bannerHeight.getState();
    state.noteInteraction();
  }, []);
  const items2 = [guild, bannerHeight, bannerWidth];
  const callback1 = startApplicationAccountLinkAuthorization.useCallback((fastList) => {
    const obj = { fastList, guildChannels, guild, headerHeight };
    return authStore3(ChannelsUnreadBarsDefault, obj);
  }, items1);
  const callback2 = startApplicationAccountLinkAuthorization.useCallback((scrollPosValue) => {
    const obj = { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth };
    return authStore3(RedesignGuildHeaderDefault, obj, guild.id);
  }, items2);
  const callback3 = startApplicationAccountLinkAuthorization.useCallback(() => {
    const obj = gameClaimMarkAsDismissed(guildChannels[25]);
    const result = obj.logChannelListEndReached();
  }, []);
  let obj4 = gameClaimMarkAsDismissed(guildChannels[26]);
  const recentlyActiveChannelsEnabled = obj4.useRecentlyActiveChannelsEnabled();
  const items3 = [fontScale];
  const items4 = [guild.id];
  const obj5 = gameClaimMarkAsDismissed(guildChannels[27]);
  const stateFromStores = obj5.useStateFromStores(items3, () => SortedVoiceStateStore.getVoiceStates(guild.id), items4);
  const obj6 = gameClaimMarkAsDismissed(guildChannels[28]);
  const optInEnabledForGuild = obj6.useOptInEnabledForGuild(guild.id);
  const obj7 = gameClaimMarkAsDismissed(guildChannels[29]);
  const guildLiveChannelNoticeInfo = obj7.useGuildLiveChannelNoticeInfo(guild.id);
  const obj8 = gameClaimMarkAsDismissed(guildChannels[30]);
  const scaledLiveChannelNoticeHeight = obj8.getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo);
  optInEnabledForGuild(ref);
  const items5 = [guildChannels, sections];
  const callback4 = startApplicationAccountLinkAuthorization.useCallback((arg0) => {
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
  }, items5);
  const items6 = [guildChannels, fontScale, stateFromStores, scaledLiveChannelNoticeHeight, favoritesSuggestionsNoticeHeight, listViewportHeight];
  const items7 = [guildChannels, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication];
  const callback5 = startApplicationAccountLinkAuthorization.useCallback((section, row) => {
    const obj = renderRedesignChannelListItem;
    const obj2 = { guildChannels, section, row, fontScale, voiceStates: stateFromStores, liveChannelNoticeHeight: scaledLiveChannelNoticeHeight, favoritesSuggestionsNoticeHeight, listViewportHeight };
    const channelListItemSize = obj.getChannelListItemSize(obj2);
    return roundToNearestPixelDefault(channelListItemSize);
  }, items6);
  const items8 = [guildChannels, fontScale, callback4];
  const callback6 = startApplicationAccountLinkAuthorization.useCallback((section, row) => {
    let obj2;
    let obj3;
    const obj = { children: obj2.renderChannelListItem(obj3) };
    obj2 = renderRedesignChannelListItem;
    obj3 = { guildChannels, section, row, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication };
    return authStore3(View, obj);
  }, items7);
  const items9 = [guildChannels, recentlyActiveChannelsEnabled, callback4, categoryStyles];
  const callback7 = startApplicationAccountLinkAuthorization.useCallback((section) => {
    const obj = renderRedesignChannelListItem;
    const channelListSectionHeaderSize = obj.getChannelListSectionHeaderSize(guildChannels, section, fontScale, callback4(section));
    return roundToNearestPixelDefault(channelListSectionHeaderSize);
  }, items8);
  const items10 = [guildChannels, optInEnabledForGuild, stateFromStores, selectedChannelId, selectedVoiceChannelId];
  const callback8 = startApplicationAccountLinkAuthorization.useCallback((section) => {
    const obj = renderRedesignChannelListItem;
    const obj2 = { children: obj.renderChannelListSectionHeader(guildChannels, section, recentlyActiveChannelsEnabled, callback4(section), categoryStyles) };
    return authStore3(View, obj2);
  }, items9);
  const items11 = [guildChannels, optInEnabledForGuild, stateFromStores, selectedChannelId, selectedVoiceChannelId];
  const callback9 = startApplicationAccountLinkAuthorization.useCallback((section) => {
    const obj = renderRedesignChannelListItem;
    const obj2 = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId };
    const result = obj.calculateVoiceSummary(obj2);
    const obj3 = renderRedesignChannelListItem;
    const channelListSectionFooterSize = obj3.getChannelListSectionFooterSize(guildChannels, section, result);
    return roundToNearestPixelDefault(channelListSectionFooterSize);
  }, items10);
  const items12 = [sections];
  const callback10 = startApplicationAccountLinkAuthorization.useCallback((section) => {
    const obj = renderRedesignChannelListItem;
    const obj2 = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId };
    const result = obj.calculateVoiceSummary(obj2);
    const obj3 = renderRedesignChannelListItem;
    const obj4 = { children: obj3.renderChannelListSectionFooter(guildChannels, section, ref, result) };
    return authStore3(View, obj4);
  }, items11);
  const items13 = [guildChannels];
  const memo = startApplicationAccountLinkAuthorization.useMemo(() => 0 === sections.reduce((acc, item) => acc + item, 0), items12);
  const callback11 = startApplicationAccountLinkAuthorization.useCallback((arg0, arg1, arg2) => {
    const obj = renderRedesignChannelListItem;
    return obj.getFastListRecyclerKey(guildChannels, arg0, arg1, arg2);
  }, items13);
  const context = startApplicationAccountLinkAuthorization.useContext(guild(guildChannels[34]));
  const obj9 = gameClaimMarkAsDismissed(guildChannels[35]);
  const youBarTotalHeight = obj9.useYouBarTotalHeight(16);
  const obj10 = gameClaimMarkAsDismissed(guildChannels[35]);
  const youBarTotalHeight1 = obj10.useYouBarTotalHeight(-16);
  const obj11 = { profile: gameClaimMarkAsDismissed(guildChannels[39]).Profiles.Channels, children: sections(LayerScope, obj16) };
  const tmp34 = guild(guildChannels[39]);
  LayerScope = gameClaimMarkAsDismissed(guildChannels[40]).LayerScope;
  const obj12 = { style, contentInset, children: items14 };
  items14 = [, ];
  const tmp36 = guild(guildChannels[41]);
  items14[0] = sections(guild(guildChannels[36]), { guild });
  const tmp35 = recentlyActiveChannelsEnabled;
  if (memo) {
    const obj13 = { guild };
    tmp33Result = tmp33(tmp4(tmp2[37]), obj13);
  } else {
    const obj14 = { insetEnd: youBarTotalHeight, scrollIndicatorInsets: obj15, waitFor: context, ref, chunkBase: listViewportHeight, stickyHeaderFooter: true, renderHeader: callback2, headerSize: listTop, footerSize: listBottom + listPaddingBottom, endReachedThreshold: listBottom + listPaddingBottom, onEndReached: callback3, renderAccessory: callback1, disableContentWrappers: true, sections, stickySectionsVariant: "disabled", renderSection: callback8, sectionSize: callback7, renderItem: callback6, itemSize: callback5, renderSectionFooter: callback10, sectionFooterSize: callback9, optimizeListItemRender: true, getRecyclerKey: callback11, initialScrollSection: section, initialScrollItem: row, initialScrollOrientation: "center", onScroll: tmp44, onScrollWorklet: externalScrollEventHandler };
    obj15 = { bottom: youBarTotalHeight1 };
    section = undefined;
    const tmp4Result = tmp4(tmp2[38]);
    const tmpResult = gameClaimMarkAsDismissed(tmp2[17]);
    if (!tmpResult.isGameCommunityServerPreview(id)) {
      const first = applicationAccountLinkMarkAsDismissed(guildChannels.getSectionRowsFromChannel(selectedChannelId), 1)[0];
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
    const tmpResult2 = gameClaimMarkAsDismissed(tmp2[17]);
    if (!tmpResult2.isGameCommunityServerPreview(id)) {
      const first1 = applicationAccountLinkMarkAsDismissed(guildChannels.getSectionRowsFromChannel(selectedChannelId), 1)[0];
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
    tmp44 = undefined;
    if (isHomeDrawerEnabled) {
      tmp44 = callback;
    }
    tmp33Result = tmp33(tmp4Result, obj14, guild.id);
  }
  items14[1] = tmp33Result;
  obj16 = { children: tmp35(tmp36, obj12) };
  return sections(tmp34, obj11);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let accountLinkApplication;
  let applicationAccountLinkMarkAsDismissed;
  let first;
  let gameClaimMarkAsDismissed;
  let guildActionRows;
  let guildChannels;
  let guildChannelsVersion;
  let rows;
  let startApplicationAccountLinkAuthorization;
  _require = guild;
  let obj = require("react");
  const cResult = obj.c(13);
  const tmp4 = require("useGuildActionRows")(guild.guild);
  importDefault = tmp4;
  const tmp5 = require("useChannelNoticeRows")(guild.guild);
  rows = tmp5.rows;
  ({ gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = tmp5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelListStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === rows) {
    if (cResult[2] === tmp4) {
      let tmp8;
      if (cResult[3] === guild.guild.id) {
        tmp8 = cResult[4];
      }
      const tmpResult = require("get initialized");
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp8);
      ({ guildChannels, guildChannelsVersion } = stateFromStoresObject);
      let tmp10 = null;
      const tmpResult2 = require("useShouldRenderChannelList");
      if (tmpResult2.useShouldRenderChannelList()) {
        if (cResult[5] === accountLinkApplication) {
          if (cResult[6] === applicationAccountLinkMarkAsDismissed) {
            if (cResult[7] === gameClaimMarkAsDismissed) {
              if (cResult[8] === guildChannels) {
                if (cResult[9] === guildChannelsVersion) {
                  if (cResult[10] === guild) {
                    let tmp11;
                    if (cResult[11] === startApplicationAccountLinkAuthorization) {
                      tmp11 = cResult[12];
                    }
                    tmp10 = tmp11;
                  }
                }
              }
            }
          }
        }
        const obj2 = { guildChannels, guildChannelsVersion, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication };
        const merged = Object.assign(guild);
        const tmp17 = closure_16(closure_20, obj2);
        cResult[5] = accountLinkApplication;
        cResult[6] = applicationAccountLinkMarkAsDismissed;
        cResult[7] = gameClaimMarkAsDismissed;
        cResult[8] = guildChannels;
        cResult[9] = guildChannelsVersion;
        cResult[10] = guild;
        cResult[11] = startApplicationAccountLinkAuthorization;
        cResult[12] = tmp17;
        tmp11 = tmp17;
      }
      return tmp10;
    }
  }
  const fn = function n() {
    const obj = { guildActionRows, channelNoticeRows: rows };
    return ChannelListStore.getGuild(guild.guild.id, obj);
  };
  cResult[1] = rows;
  cResult[2] = tmp4;
  cResult[3] = guild.guild.id;
  cResult[4] = fn;
  tmp8 = fn;
}) : ((guild) => {
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
    tmp3 = closure_16(closure_20, obj3);
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((selectedGuildId) => {
  let closure_0;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp4;
  let tmp5;
  let voiceChannelId;
  const obj = require("react");
  const cResult = obj.c(28);
  if (cResult[0] !== selectedGuildId) {
    selectedGuildId = selectedGuildId.selectedGuildId;
    _require = selectedGuildId;
    const selectedChannelId = selectedGuildId.selectedChannelId;
    const tmp9 = _objectWithoutProperties(selectedGuildId, closure_3);
    cResult[0] = selectedGuildId;
    cResult[1] = tmp9;
    cResult[2] = selectedChannelId;
    cResult[3] = selectedGuildId;
    tmp5 = selectedChannelId;
    tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    _require = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[4] = items;
    tmp10 = items;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== tmp6) {
    const fn = function u() {
      return GuildStore.getGuild(closure_0);
    };
    cResult[5] = tmp6;
    cResult[6] = fn;
    tmp12 = fn;
  } else {
    tmp12 = cResult[6];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp12);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SelectedChannelStore];
    const fn2 = function f() {
      return voiceChannelId.getVoiceChannelId();
    };
    cResult[7] = items1;
    cResult[8] = fn2;
    tmp15 = fn2;
    tmp14 = items1;
  } else {
    tmp14 = cResult[7];
    tmp15 = cResult[8];
  }
  const tmpResult5 = require("get initialized");
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp14, tmp15);
  if (tmp6 === closure_15) {
    let tmp41;
    if (cResult[9] !== tmp4.style) {
      const obj2 = { style: tmp4.style };
      const tmp44 = closure_16(GuildUpsellChannelListDefault, obj2);
      cResult[9] = tmp4.style;
      cResult[10] = tmp44;
      tmp41 = tmp44;
    } else {
      tmp41 = cResult[10];
    }
    return tmp41;
  } else {
    if (null != stateFromStores) {
      if (tmp6 !== closure_14) {
        const tmpResult6 = require("FavoritesUtils");
        if (tmpResult6.isFavoritesGuildId(tmp6)) {
          let tmp29;
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const tmpResult7 = require("FavoritesGuildChannels");
            cResult[14] = tmpResult7;
            tmp29 = tmpResult7;
          } else {
            tmp29 = cResult[14];
          }
          const _default = tmp29.default;
          if (cResult[15] === stateFromStores) {
            if (cResult[16] === tmp4) {
              if (cResult[17] === tmp5) {
                let tmp31;
                if (cResult[18] === stateFromStores1) {
                  tmp31 = cResult[19];
                }
                return tmp31;
              }
            }
          }
          const obj3 = { guild: stateFromStores, selectedChannelId: tmp5, selectedVoiceChannelId: stateFromStores1 };
          const merged = Object.assign(tmp4);
          const tmp36 = closure_16(_default, obj3);
          cResult[15] = stateFromStores;
          cResult[16] = tmp4;
          cResult[17] = tmp5;
          cResult[18] = stateFromStores1;
          cResult[19] = tmp36;
          tmp31 = tmp36;
        } else {
          let tmp18;
          const tmpResult8 = require("age_gate/AgeGateUtils");
          if (tmpResult8.shouldNSFWGateGuild(tmp6)) {
            if (cResult[20] === tmp4.style) {
              let tmp25;
              if (cResult[21] === tmp6) {
                tmp25 = cResult[22];
              }
              tmp18 = tmp25;
            }
            const obj4 = { style: tmp4.style, guildId: tmp6 };
            const tmp28 = closure_16(NsfwGateGuildSidebarDefault, obj4);
            cResult[20] = tmp4.style;
            cResult[21] = tmp6;
            cResult[22] = tmp28;
            tmp25 = tmp28;
          } else {
            if (cResult[23] === stateFromStores) {
              if (cResult[24] === tmp4) {
                if (cResult[25] === tmp5) {
                  if (cResult[26] === stateFromStores1) {
                    tmp18 = cResult[27];
                  }
                }
              }
            }
            const obj5 = { guild: stateFromStores, selectedChannelId: tmp5, selectedVoiceChannelId: stateFromStores1 };
            const merged1 = Object.assign(tmp4);
            const tmp24 = closure_16(closure_21, obj5);
            cResult[23] = stateFromStores;
            cResult[24] = tmp4;
            cResult[25] = tmp5;
            cResult[26] = stateFromStores1;
            cResult[27] = tmp24;
            tmp18 = tmp24;
          }
          return tmp18;
        }
      }
    }
    if (cResult[11] === tmp4.style) {
      let tmp37;
      if (cResult[12] === tmp6) {
        tmp37 = cResult[13];
      }
      return tmp37;
    }
    const obj6 = { style: tmp4.style, selectedGuildId: tmp6 };
    const tmp40 = closure_16(GuildsEmptyDefault, obj6);
    cResult[11] = tmp4.style;
    cResult[12] = tmp6;
    cResult[13] = tmp40;
    tmp37 = tmp40;
  }
}) : ((selectedGuildId) => {
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
  if (selectedGuildId === closure_15) {
    const obj3 = { style: merged.style };
    return closure_16(GuildUpsellChannelListDefault, obj3);
  } else {
    if (null != stateFromStores) {
      if (selectedGuildId !== closure_14) {
        const tmp2Result = selectedGuildId(2076);
        if (tmp2Result.isFavoritesGuildId(selectedGuildId)) {
          const obj4 = { guild: stateFromStores, selectedChannelId, selectedVoiceChannelId: stateFromStores1 };
          const _default = selectedGuildId(15907).default;
          const merged1 = Object.assign(merged);
          return closure_16(_default, obj4);
        } else {
          let tmp6Result;
          const tmp2Result2 = selectedGuildId(9673);
          if (tmp2Result2.shouldNSFWGateGuild(selectedGuildId)) {
            const obj5 = { style: merged.style, guildId: selectedGuildId };
            tmp6Result = tmp6(NsfwGateGuildSidebarDefault, obj5);
          } else {
            const obj6 = { guild: stateFromStores, selectedChannelId, selectedVoiceChannelId: stateFromStores1 };
            const merged2 = Object.assign(merged);
            tmp6Result = tmp6(closure_21, obj6);
          }
          return tmp6Result;
        }
      }
    }
    const obj7 = { style: merged.style, selectedGuildId };
    return closure_16(GuildsEmptyDefault, obj7);
  }
});
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let tmp12;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(7);
  const obj2 = useHomeDrawerGesture;
  const doesLandOnHomeDrawer = obj2.useDoesLandOnHomeDrawer();
  if (cResult[0] !== arg0) {
    const obj3 = {};
    const merged = Object.assign(arg0);
    const tmp11 = authStore3(closure_22, obj3);
    cResult[0] = arg0;
    cResult[1] = tmp11;
    tmp5 = tmp11;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== doesLandOnHomeDrawer) {
    let tmp13 = null;
    if (!doesLandOnHomeDrawer) {
      tmp13 = authStore3(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "channel-list", checkFocusedScreen: "guilds" });
    }
    cResult[2] = doesLandOnHomeDrawer;
    cResult[3] = tmp13;
    tmp12 = tmp13;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    let tmp15;
    if (cResult[5] === tmp12) {
      tmp15 = cResult[6];
    }
    return tmp15;
  }
  const obj4 = { children: items };
  items = [tmp5, tmp12];
  const tmp16 = closure_17(authStore4, obj4);
  cResult[4] = tmp5;
  cResult[5] = tmp12;
  cResult[6] = tmp16;
  tmp15 = tmp16;
}) : ((arg0) => {
  const obj = useHomeDrawerGesture;
  const obj2 = {};
  const doesLandOnHomeDrawer = obj.useDoesLandOnHomeDrawer();
  const merged = Object.assign(arg0);
  const children = [authStore3(closure_22, obj2), ];
  let tmp6Result = null;
  const tmp4 = closure_17;
  const tmp5 = authStore4;
  const tmp6 = authStore3;
  if (!doesLandOnHomeDrawer) {
    tmp6Result = tmp6(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "channel-list", checkFocusedScreen: "guilds" });
  }
  children[1] = tmp6Result;
  return tmp4(tmp5, { children });
}));
let result = size.fileFinishedImporting("modules/channel_list_v2/native/RedesignChannelList.tsx");

export default memo2Result;
export const ChannelList = memoResult;
