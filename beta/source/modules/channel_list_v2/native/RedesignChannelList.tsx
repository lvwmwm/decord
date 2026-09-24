// Module ID: 16452
// Function ID: 16453
// Name: RedesignChannelList
// Dependencies: [109, 32, 19, 17, 4782, 7804, 16366, 2067, 2099, 4814, 1078, 21, 558, 568, 1491, 4648, 11508, 16453, 16454, 16481, 16529, 15365, 16371, 16530, 16482, 16532, 7815, 504, 7814, 16533, 16537, 7807, 16538, 11329, 16352, 15366, 16591, 16604, 7351, 12123, 7435, 16450, 16607, 16609, 16613, 16614, 16619, 2070, 16621, 10508, 16629, 12062, 2]

// Module 16452 (RedesignChannelList)
import c from "c" /* 568 */;
import ChannelListState from "ChannelListState" /* 7807 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11329 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 16371 */;
import RedesignGuildHeaderDefault from "RedesignGuildHeader" /* 16482 */;
import registerSidebarVisibilityMethods from "registerSidebarVisibilityMethods" /* 16529 */;
import ChannelsUnreadBarsDefault from "ChannelsUnreadBars" /* 16530 */;
import renderRedesignChannelListItem from "renderRedesignChannelListItem" /* 16538 */;
import GuildUpsellChannelListDefault from "GuildUpsellChannelList" /* 16614 */;
import GuildsEmptyDefault from "GuildsEmpty" /* 16619 */;
import NsfwGateGuildSidebarDefault from "NsfwGateGuildSidebar" /* 16629 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;
import ChannelListStore from "ChannelListStore" /* 7804 */;
import HomeDrawerStore from "HomeDrawerStore" /* 16366 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4814 */;

const TTIFirstContentfulPaint = tmp(12062);
require = fn;
let closure_3 = ["selectedGuildId", "selectedChannelId"];
const View = fn(17).View;
const Constants = fn(1078);
({ EMPTY_NUX_SERVER: closure_14, MOBILE_GUILD_UPSELL_LIST: closure_15 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  const obj = require("c");
  let navigation = require("BaseNavigationContainer").useNavigation();
  if (cResult[0] === arg0) {
    if (cResult[1] === navigation) {
      let tmp3 = cResult[2];
      let tmp4 = cResult[3];
    }
    const effect = noop.useEffect(tmp3, tmp4);
  }
  const fn = function t() {
    c0 = -1;
    navigation = navigation.addListener("tabPress", (arg0) => {
      let timeout = arg0;
      if (null != obj.coerceGuildsRoute(navigation(11508)())) {
        if (-1 === timeout) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout);
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            clearTimeout(c0);
            c0 = -1;
            focused.isFocused();
            const animationFrame = requestAnimationFrame(() => {
              let tmp = ref;
              if (ref) {
                tmp = !ref.defaultPrevented;
              }
              if (tmp) {
                tmp = null != ref.current;
              }
              if (tmp) {
                const current = ref.current;
                current.scrollToTop(!AccessibilityStore.useReducedMotion);
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
  _require = arg0;
  let navigation = require("BaseNavigationContainer").useNavigation();
  const items = [navigation, arg0];
  const effect = noop.useEffect(() => {
    c0 = -1;
    navigation = navigation.addListener("tabPress", (arg0) => {
      let timeout = arg0;
      if (null != obj.coerceGuildsRoute(navigation(11508)())) {
        if (-1 === timeout) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout);
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            clearTimeout(c0);
            c0 = -1;
            focused.isFocused();
            const animationFrame = requestAnimationFrame(() => {
              let tmp = ref;
              if (ref) {
                tmp = !ref.defaultPrevented;
              }
              if (tmp) {
                tmp = null != ref.current;
              }
              if (tmp) {
                const current = ref.current;
                current.scrollToTop(!AccessibilityStore.useReducedMotion);
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
ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = gameClaimMarkAsDismissed(guildChannels[13]).c(100);
  ({ contentInset, gameClaimMarkAsDismissed } = guild);
  guild = guild.guild;
  guildChannels = guild.guildChannels;
  const selectedChannelId = guild.selectedChannelId;
  const selectedVoiceChannelId = guild.selectedVoiceChannelId;
  ({ style, applicationAccountLinkMarkAsDismissed } = guild);
  noop = guild.startApplicationAccountLinkAuthorization;
  const accountLinkApplication = guild.accountLinkApplication;
  const favoritesSuggestionsNoticeHeight = guild.favoritesSuggestionsNoticeHeight;
  let obj = gameClaimMarkAsDismissed(guildChannels[13]);
  const categoryStyles = gameClaimMarkAsDismissed(guildChannels[18]).useCategoryStyles();
  const tmp5 = guild(guildChannels[19])(guild);
  const bannerHeight = tmp5.bannerHeight;
  const bannerWidth = tmp5.bannerWidth;
  const headerHeight = tmp5.headerHeight;
  const fontScale = tmp5.fontScale;
  ({ listTop, listBottom, listPaddingBottom, listViewportHeight } = tmp5);
  const ref = noop.useRef(null);
  if (cResult[0] !== guildChannels) {
    const fn = function t() {
      const result = registerSidebarVisibilityMethods.registerFastListChannelVisibilityMethod(ref, guildChannels);
    };
    const items = [ref, guildChannels];
    cResult[0] = guildChannels;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp8 = items;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const effect = noop.useEffect(tmp7, tmp8);
  if (cResult[3] !== guildChannels) {
    const sections = guildChannels.getSections(false);
    cResult[3] = guildChannels;
    cResult[4] = sections;
    let tmp10 = sections;
  } else {
    tmp10 = cResult[4];
  }
  dependencyMap = tmp10;
  const id = guild.id;
  if (cResult[5] !== id) {
    const obj4 = { id };
    cResult[5] = id;
    cResult[6] = obj4;
    let tmp12 = obj4;
  } else {
    tmp12 = cResult[6];
  }
  let obj2 = gameClaimMarkAsDismissed(guildChannels[18]);
  gameClaimMarkAsDismissed(guildChannels[21]).useExternalScrollEventHandler(tmp12);
  const tmpResult = gameClaimMarkAsDismissed(guildChannels[21]);
  const isHomeDrawerEnabled = gameClaimMarkAsDismissed(guildChannels[22]).useIsHomeDrawerEnabled();
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function x() {
      state = bannerHeight.getState();
      state.noteInteraction();
    };
    cResult[7] = fn2;
  }
  if (cResult[8] === guild) {
    if (cResult[9] === guildChannels) {
      if (cResult[12] === bannerHeight) {
        if (cResult[13] === bannerWidth) {
          const _Symbol = Symbol;
          class X {
            constructor(arg0) {
              obj = { guild, scrollPosition: guild.scrollPosValue, bannerHeight, bannerWidth };
              return jsx(closure_1(closure_2[24]), obj, guild.id);
            }
          }
          if (tmp18 === Symbol.for("react.memo_cache_sentinel")) {
            class J {
              constructor() {
                obj = gameClaimMarkAsDismissed(guildChannels[25]);
                result = obj.logChannelListEndReached();
                return;
              }
            }
            class X {
              constructor(arg0) {
                obj = { guild, scrollPosition: guild.scrollPosValue, bannerHeight, bannerWidth };
                return jsx(closure_1(closure_2[24]), obj, guild.id);
              }
            }
          } else {
            class J {
              constructor() {
                obj = gameClaimMarkAsDismissed(guildChannels[25]);
                result = obj.logChannelListEndReached();
                return;
              }
            }
          }
          const recentlyActiveChannelsEnabled = tmp(tmp2[26]).useRecentlyActiveChannelsEnabled();
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class J {
              constructor() {
                obj = gameClaimMarkAsDismissed(guildChannels[25]);
                result = obj.logChannelListEndReached();
                return;
              }
            }
            const items1 = [];
            class X {
              constructor(arg0) {
                obj = { guild, scrollPosition: guild.scrollPosValue, bannerHeight, bannerWidth };
                return jsx(closure_1(closure_2[24]), obj, guild.id);
              }
            }
            cResult[17] = items1;
            const tmp21 = items1;
          } else {
            class J {
              constructor() {
                obj = gameClaimMarkAsDismissed(guildChannels[25]);
                result = obj.logChannelListEndReached();
                return;
              }
            }
          }
          if (cResult[18] !== guild.id) {
            class J {
              constructor() {
                obj = gameClaimMarkAsDismissed(guildChannels[25]);
                result = obj.logChannelListEndReached();
                return;
              }
            }
            const items2 = [];
            class X {
              constructor(arg0) {
                obj = { guild, scrollPosition: guild.scrollPosValue, bannerHeight, bannerWidth };
                return jsx(closure_1(closure_2[24]), obj, guild.id);
              }
            }
            cResult[18] = guild.id;
            cResult[19] = tmp24;
            cResult[20] = items2;
            let tmp23 = items2;
            const tmp22 = tmp24;
          } else {
            class J {
              constructor() {
                obj = gameClaimMarkAsDismissed(guildChannels[25]);
                result = obj.logChannelListEndReached();
                return;
              }
            }
            tmp23 = cResult[20];
          }
          const tmpResult8 = tmp(tmp2[26]);
          const stateFromStores = tmp(tmp2[27]).useStateFromStores(tmp21, tmp22, tmp23);
          const tmpResult9 = tmp(tmp2[27]);
          const optInEnabledForGuild = tmp(tmp2[28]).useOptInEnabledForGuild(guild.id);
          const tmpResult10 = tmp(tmp2[28]);
          const guildLiveChannelNoticeInfo = tmp(tmp2[29]).useGuildLiveChannelNoticeInfo(guild.id);
          if (cResult[21] === fontScale) {
            class J {
              constructor() {
                obj = gameClaimMarkAsDismissed(guildChannels[25]);
                result = obj.logChannelListEndReached();
                return;
              }
            }
            const liveChannelNoticeHeight = tmp28;
            class X {
              constructor(arg0) {
                obj = { guild, scrollPosition: guild.scrollPosValue, bannerHeight, bannerWidth };
                return jsx(closure_1(closure_2[24]), obj, guild.id);
              }
            }
            optInEnabledForGuild(ref);
            if (cResult[24] === guildChannels) {
              class J {
                constructor() {
                  obj = gameClaimMarkAsDismissed(guildChannels[25]);
                  result = obj.logChannelListEndReached();
                  return;
                }
              }
              class X {
                constructor(arg0) {
                  obj = { guild, scrollPosition: guild.scrollPosValue, bannerHeight, bannerWidth };
                  return jsx(closure_1(closure_2[24]), obj, guild.id);
                }
              }
              function ce(section, row) {
                const channelListItemSize = renderRedesignChannelListItem.getChannelListItemSize({ guildChannels, section, row, fontScale, voiceStates: stateFromStores, liveChannelNoticeHeight, favoritesSuggestionsNoticeHeight, listViewportHeight });
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
                  if (dependencyMap[diff] <= 0) {
                    const diff1 = tmp4 - 1;
                    tmp2 = diff1;
                    while (0 <= diff1) {
                      tmp4 = diff1;
                      tmp2 = diff1;
                      if (dependencyMap[diff1] > 0) {
                        break;
                      }
                    }
                  }
                }
              }
              let tmp7 = -1 !== tmp2;
              if (-1 !== tmp2) {
                tmp7 = !renderRedesignChannelListItem.getChannelListSectionHasFooterDivider(guildChannels, tmp2);
              }
              return tmp7;
            }
            cResult[24] = guildChannels;
            cResult[25] = tmp10;
            cResult[26] = se;
          }
          const tmpResult11 = tmp(tmp2[29]);
          const scaledLiveChannelNoticeHeight = tmp(tmp2[30]).getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo);
          cResult[21] = fontScale;
          cResult[22] = guildLiveChannelNoticeInfo;
          cResult[23] = scaledLiveChannelNoticeHeight;
          const tmpResult12 = tmp(tmp2[30]);
        }
      }
      class X {
        constructor(arg0) {
          obj = { guild, scrollPosition: guild.scrollPosValue, bannerHeight, bannerWidth };
          return jsx(closure_1(closure_2[24]), obj, guild.id);
        }
      }
      cResult[12] = bannerHeight;
      cResult[13] = bannerWidth;
      cResult[14] = guild;
      cResult[15] = X;
    }
  }
  class K {
    constructor(arg0) {
      obj = { fastList: guild, guildChannels, guild, headerHeight };
      return jsx(closure_1(closure_2[23]), obj);
    }
  }
  cResult[8] = guild;
  cResult[9] = guildChannels;
  cResult[10] = headerHeight;
  cResult[11] = K;
}) : ((gameClaimMarkAsDismissed) => {
  gameClaimMarkAsDismissed = gameClaimMarkAsDismissed.gameClaimMarkAsDismissed;
  guild = gameClaimMarkAsDismissed.guild;
  const guildChannels = gameClaimMarkAsDismissed.guildChannels;
  const selectedChannelId = gameClaimMarkAsDismissed.selectedChannelId;
  const selectedVoiceChannelId = gameClaimMarkAsDismissed.selectedVoiceChannelId;
  const applicationAccountLinkMarkAsDismissed = gameClaimMarkAsDismissed.applicationAccountLinkMarkAsDismissed;
  const startApplicationAccountLinkAuthorization = gameClaimMarkAsDismissed.startApplicationAccountLinkAuthorization;
  const accountLinkApplication = gameClaimMarkAsDismissed.accountLinkApplication;
  const favoritesSuggestionsNoticeHeight = gameClaimMarkAsDismissed.favoritesSuggestionsNoticeHeight;
  listViewportHeight = undefined;
  ({ contentInset, style } = gameClaimMarkAsDismissed);
  const categoryStyles = gameClaimMarkAsDismissed(guildChannels[18]).useCategoryStyles();
  const tmp5 = guild(guildChannels[19])(guild);
  const bannerHeight = tmp5.bannerHeight;
  const bannerWidth = tmp5.bannerWidth;
  const headerHeight = tmp5.headerHeight;
  const fontScale = tmp5.fontScale;
  ({ listBottom, listPaddingBottom, listViewportHeight } = tmp5);
  const ref = startApplicationAccountLinkAuthorization.useRef(null);
  const items = [ref, guildChannels];
  const effect = startApplicationAccountLinkAuthorization.useEffect(() => {
    const result = registerSidebarVisibilityMethods.registerFastListChannelVisibilityMethod(ref, guildChannels);
  }, items);
  const sections = guildChannels.getSections(false);
  const id = guild.id;
  let obj = gameClaimMarkAsDismissed(guildChannels[18]);
  let obj2 = gameClaimMarkAsDismissed(guildChannels[21]);
  const externalScrollEventHandler = gameClaimMarkAsDismissed(guildChannels[21]).useExternalScrollEventHandler({ id });
  const isHomeDrawerEnabled = gameClaimMarkAsDismissed(guildChannels[22]).useIsHomeDrawerEnabled();
  const items1 = [guildChannels, guild, headerHeight];
  const callback = startApplicationAccountLinkAuthorization.useCallback(() => {
    state = bannerHeight.getState();
    state.noteInteraction();
  }, []);
  const items2 = [guild, bannerHeight, bannerWidth];
  const callback1 = startApplicationAccountLinkAuthorization.useCallback((fastList) => value2(ChannelsUnreadBarsDefault, { fastList, guildChannels, guild, headerHeight }), items1);
  const callback2 = startApplicationAccountLinkAuthorization.useCallback((scrollPosValue) => value2(RedesignGuildHeaderDefault, { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth }, guild.id), items2);
  const callback3 = startApplicationAccountLinkAuthorization.useCallback(() => {
    const result = gameClaimMarkAsDismissed(guildChannels[25]).logChannelListEndReached();
  }, []);
  let obj3 = gameClaimMarkAsDismissed(guildChannels[22]);
  const recentlyActiveChannelsEnabled = gameClaimMarkAsDismissed(guildChannels[26]).useRecentlyActiveChannelsEnabled();
  const obj4 = gameClaimMarkAsDismissed(guildChannels[26]);
  const items3 = [fontScale];
  const items4 = [guild.id];
  const stateFromStores = gameClaimMarkAsDismissed(guildChannels[27]).useStateFromStores(items3, () => SortedVoiceStateStore.getVoiceStates(guild.id), items4);
  const obj5 = gameClaimMarkAsDismissed(guildChannels[27]);
  const optInEnabledForGuild = gameClaimMarkAsDismissed(guildChannels[28]).useOptInEnabledForGuild(guild.id);
  const obj6 = gameClaimMarkAsDismissed(guildChannels[28]);
  const guildLiveChannelNoticeInfo = gameClaimMarkAsDismissed(guildChannels[29]).useGuildLiveChannelNoticeInfo(guild.id);
  const obj7 = gameClaimMarkAsDismissed(guildChannels[29]);
  const scaledLiveChannelNoticeHeight = gameClaimMarkAsDismissed(guildChannels[30]).getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo);
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
      tmp7 = !renderRedesignChannelListItem.getChannelListSectionHasFooterDivider(guildChannels, tmp2);
    }
    return tmp7;
  }, items5);
  const items6 = [guildChannels, fontScale, stateFromStores, scaledLiveChannelNoticeHeight, favoritesSuggestionsNoticeHeight, listViewportHeight];
  const items7 = [guildChannels, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication];
  const callback5 = startApplicationAccountLinkAuthorization.useCallback((section, row) => {
    const channelListItemSize = renderRedesignChannelListItem.getChannelListItemSize({ guildChannels, section, row, fontScale, voiceStates: stateFromStores, liveChannelNoticeHeight: scaledLiveChannelNoticeHeight, favoritesSuggestionsNoticeHeight, listViewportHeight });
    return roundToNearestPixelDefault(channelListItemSize);
  }, items6);
  const items8 = [guildChannels, fontScale, callback4];
  const callback6 = startApplicationAccountLinkAuthorization.useCallback((section, row) => {
    const obj = { children: renderRedesignChannelListItem.renderChannelListItem({ guildChannels, section, row, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication }) };
    return value2(View, obj);
  }, items7);
  const items9 = [guildChannels, recentlyActiveChannelsEnabled, callback4, categoryStyles];
  const callback7 = startApplicationAccountLinkAuthorization.useCallback((section) => {
    const channelListSectionHeaderSize = renderRedesignChannelListItem.getChannelListSectionHeaderSize(guildChannels, section, fontScale, callback4(section));
    return roundToNearestPixelDefault(channelListSectionHeaderSize);
  }, items8);
  const items10 = [guildChannels, optInEnabledForGuild, stateFromStores, selectedChannelId, selectedVoiceChannelId];
  const callback8 = startApplicationAccountLinkAuthorization.useCallback((section) => value2(View, { children: renderRedesignChannelListItem.renderChannelListSectionHeader(guildChannels, section, recentlyActiveChannelsEnabled, callback4(section), categoryStyles) }), items9);
  const items11 = [guildChannels, optInEnabledForGuild, stateFromStores, selectedChannelId, selectedVoiceChannelId];
  const callback9 = startApplicationAccountLinkAuthorization.useCallback((section) => {
    const result = renderRedesignChannelListItem.calculateVoiceSummary({ guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId });
    const obj2 = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId };
    const channelListSectionFooterSize = renderRedesignChannelListItem.getChannelListSectionFooterSize(guildChannels, section, result);
    return roundToNearestPixelDefault(channelListSectionFooterSize);
  }, items10);
  const items12 = [sections];
  const callback10 = startApplicationAccountLinkAuthorization.useCallback((section) => {
    const result = renderRedesignChannelListItem.calculateVoiceSummary({ guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId });
    const obj2 = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId };
    return value2(View, { children: renderRedesignChannelListItem.renderChannelListSectionFooter(guildChannels, section, ref, result) });
  }, items11);
  const items13 = [guildChannels];
  const memo = startApplicationAccountLinkAuthorization.useMemo(() => 0 === sections.reduce((acc, item) => acc + item, 0), items12);
  const callback11 = startApplicationAccountLinkAuthorization.useCallback((arg0, arg1, arg2) => renderRedesignChannelListItem.getFastListRecyclerKey(guildChannels, arg0, arg1, arg2), items13);
  const context = startApplicationAccountLinkAuthorization.useContext(guild(guildChannels[34]));
  const obj8 = gameClaimMarkAsDismissed(guildChannels[30]);
  const youBarTotalHeight = gameClaimMarkAsDismissed(guildChannels[35]).useYouBarTotalHeight(16);
  const obj9 = gameClaimMarkAsDismissed(guildChannels[35]);
  const youBarTotalHeight1 = gameClaimMarkAsDismissed(guildChannels[35]).useYouBarTotalHeight(-16);
  const obj11 = { profile: null, children: null };
  const obj10 = gameClaimMarkAsDismissed(guildChannels[35]);
  obj11.profile = gameClaimMarkAsDismissed(guildChannels[39]).Profiles.Channels;
  const obj12 = { style, contentInset, children: null };
  const tmp34 = guild(guildChannels[39]);
  const tmp35 = recentlyActiveChannelsEnabled;
  const items14 = [sections(guild(guildChannels[36]), { guild }), ];
  if (memo) {
    const obj13 = { guild };
    let tmp33Result = tmp33(tmp4(tmp2[37]), obj13);
  } else {
    const obj14 = { insetEnd: youBarTotalHeight, scrollIndicatorInsets: null, waitFor: null, ref: null, chunkBase: null, stickyHeaderFooter: true, renderHeader: null, headerSize: null, footerSize: null, endReachedThreshold: null, onEndReached: null, renderAccessory: null, disableContentWrappers: true, sections: null, stickySectionsVariant: "disabled", renderSection: null, sectionSize: null, renderItem: null, itemSize: null, renderSectionFooter: null, sectionFooterSize: null, optimizeListItemRender: true, getRecyclerKey: null, initialScrollSection: null, initialScrollItem: null, initialScrollOrientation: "center", onScroll: null, onScrollWorklet: null };
    const obj15 = { bottom: youBarTotalHeight1 };
    obj14.scrollIndicatorInsets = obj15;
    obj14.waitFor = context;
    obj14.ref = ref;
    obj14.chunkBase = listViewportHeight;
    obj14.renderHeader = callback2;
    obj14.headerSize = tmp5.listTop;
    obj14.footerSize = listBottom + listPaddingBottom;
    obj14.endReachedThreshold = listBottom + listPaddingBottom;
    obj14.onEndReached = callback3;
    obj14.renderAccessory = callback1;
    obj14.sections = sections;
    obj14.renderSection = callback8;
    obj14.sectionSize = callback7;
    obj14.renderItem = callback6;
    obj14.itemSize = callback5;
    obj14.renderSectionFooter = callback10;
    obj14.sectionFooterSize = callback9;
    obj14.getRecyclerKey = callback11;
    const tmp4Result = tmp4(tmp2[38]);
    let section;
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
    obj14.initialScrollSection = section;
    tmpResult = tmp(tmp2[17]);
    let row;
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
    obj14.initialScrollItem = row;
    let tmp44;
    if (isHomeDrawerEnabled) {
      tmp44 = callback;
    }
    obj14.onScroll = tmp44;
    obj14.onScrollWorklet = externalScrollEventHandler;
    tmp33Result = tmp33(tmp4Result, obj14, guild.id);
    tmpResult2 = tmp(tmp2[17]);
  }
  const tmp36 = guild(guildChannels[41]);
  items14[1] = tmp33Result;
  obj12.children = items14;
  obj11.children = sections(gameClaimMarkAsDismissed(guildChannels[40]).LayerScope, { children: tmp35(guild(guildChannels[41]), obj12) });
  return sections(tmp34, obj11);
}));
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  _require = guild;
  const cResult = require("c").c(13);
  const tmp4 = require("useGuildActionRows")(guild.guild);
  importDefault = tmp4;
  const tmp5 = require("useChannelNoticeRows")(guild.guild);
  rows = tmp5.rows;
  ({ gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = tmp5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelListStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === rows) {
    if (cResult[2] === tmp4) {
      if (cResult[3] === guild.guild.id) {
        let tmp8 = cResult[4];
      }
      const stateFromStoresObject = tmp(tmp2[27]).useStateFromStoresObject(first, tmp8);
      ({ guildChannels, guildChannelsVersion } = stateFromStoresObject);
      const tmpResult = tmp(tmp2[27]);
      if (!tmpResult2.useShouldRenderChannelList()) {
        return null;
      } else {
        if (cResult[5] === accountLinkApplication) {
          if (cResult[6] === applicationAccountLinkMarkAsDismissed) {
            if (cResult[7] === gameClaimMarkAsDismissed) {
              if (cResult[8] === guildChannels) {
                if (cResult[9] === guildChannelsVersion) {
                  if (cResult[10] === guild) {
                  }
                }
              }
            }
          }
        }
        const obj2 = {};
        const merged = Object.assign(guild);
        obj2.guildChannels = guildChannels;
        obj2.guildChannelsVersion = guildChannelsVersion;
        obj2.gameClaimMarkAsDismissed = gameClaimMarkAsDismissed;
        obj2.applicationAccountLinkMarkAsDismissed = applicationAccountLinkMarkAsDismissed;
        obj2.startApplicationAccountLinkAuthorization = startApplicationAccountLinkAuthorization;
        obj2.accountLinkApplication = accountLinkApplication;
        const tmp17 = closure_16(closure_20, obj2);
        cResult[5] = accountLinkApplication;
        cResult[6] = applicationAccountLinkMarkAsDismissed;
        cResult[7] = gameClaimMarkAsDismissed;
        cResult[8] = guildChannels;
        cResult[9] = guildChannelsVersion;
        cResult[10] = guild;
        cResult[11] = startApplicationAccountLinkAuthorization;
        cResult[12] = tmp17;
      }
      tmpResult2 = tmp(tmp2[44]);
    }
  }
  const fn = function n() {
    return ChannelListStore.getGuild(guild.guild.id, { guildActionRows, channelNoticeRows: rows });
  };
  cResult[1] = rows;
  cResult[2] = tmp4;
  cResult[3] = guild.guild.id;
  cResult[4] = fn;
  tmp8 = fn;
}) : ((guild) => {
  _require = guild;
  importDefault = require("useGuildActionRows")(guild.guild);
  const tmp = require("useChannelNoticeRows")(guild.guild);
  rows = tmp.rows;
  ({ gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = tmp);
  const items = [ChannelListStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ChannelListStore.getGuild(guild.guild.id, { guildActionRows, channelNoticeRows: rows }));
  ({ guildChannels, guildChannelsVersion } = stateFromStoresObject);
  const obj = require("initialize");
  let tmp3 = null;
  if (obj2.useShouldRenderChannelList()) {
    const obj3 = {};
    const merged = Object.assign(guild);
    obj3.guildChannels = guildChannels;
    obj3.guildChannelsVersion = guildChannelsVersion;
    obj3.gameClaimMarkAsDismissed = gameClaimMarkAsDismissed;
    obj3.applicationAccountLinkMarkAsDismissed = applicationAccountLinkMarkAsDismissed;
    obj3.startApplicationAccountLinkAuthorization = startApplicationAccountLinkAuthorization;
    obj3.accountLinkApplication = accountLinkApplication;
    tmp3 = closure_16(closure_20, obj3);
  }
  return tmp3;
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((selectedGuildId) => {
  const cResult = require("c").c(28);
  if (cResult[0] !== selectedGuildId) {
    selectedGuildId = selectedGuildId.selectedGuildId;
    _require = selectedGuildId;
    const selectedChannelId = selectedGuildId.selectedChannelId;
    const tmp9 = _objectWithoutProperties(selectedGuildId, closure_3);
    cResult[0] = selectedGuildId;
    cResult[1] = tmp9;
    cResult[2] = selectedChannelId;
    cResult[3] = selectedGuildId;
    let tmp5 = selectedChannelId;
    let tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    _require = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[4] = items;
    let tmp10 = items;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== tmp6) {
    const fn = function u() {
      return GuildStore.getGuild(closure_0);
    };
    cResult[5] = tmp6;
    cResult[6] = fn;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[6];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp10, tmp12);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SelectedChannelStore];
    const fn2 = function f() {
      return voiceChannelId.getVoiceChannelId();
    };
    cResult[7] = items1;
    cResult[8] = fn2;
    let tmp15 = fn2;
    let tmp14 = items1;
  } else {
    tmp14 = cResult[7];
    tmp15 = cResult[8];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp14, tmp15);
  if (tmp6 === closure_15) {
    if (cResult[9] !== tmp4.style) {
      const obj2 = { style: tmp4.style };
      const tmp45 = closure_16(GuildUpsellChannelListDefault, obj2);
      cResult[9] = tmp4.style;
      cResult[10] = tmp45;
      let tmp42 = tmp45;
    } else {
      tmp42 = cResult[10];
    }
    return tmp42;
  } else {
    if (null != stateFromStores) {
      if (tmp6 !== closure_14) {
        if (tmpResult6.isFavoritesGuildId(tmp6)) {
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const tmpResult7 = tmp(16621);
            cResult[14] = tmpResult7;
            let tmp30 = tmpResult7;
          } else {
            tmp30 = cResult[14];
          }
          if (cResult[15] === stateFromStores) {
            if (cResult[16] === tmp4) {
              if (cResult[17] === tmp5) {
                if (cResult[18] === stateFromStores1) {
                  let tmp32 = cResult[19];
                }
                return tmp32;
              }
            }
          }
          const obj3 = {};
          const merged = Object.assign(tmp4);
          obj3.guild = stateFromStores;
          obj3.selectedChannelId = tmp5;
          obj3.selectedVoiceChannelId = stateFromStores1;
          const tmp37 = closure_16(tmp30.default, obj3);
          cResult[15] = stateFromStores;
          cResult[16] = tmp4;
          cResult[17] = tmp5;
          cResult[18] = stateFromStores1;
          cResult[19] = tmp37;
          tmp32 = tmp37;
        } else {
          if (tmpResult8.shouldNSFWGateGuild(tmp6)) {
            if (cResult[20] === tmp4.style) {
            }
            const obj4 = { style: tmp4.style, guildId: tmp6 };
            const tmp28 = closure_16(NsfwGateGuildSidebarDefault, obj4);
            cResult[20] = tmp4.style;
            cResult[21] = tmp6;
            cResult[22] = tmp28;
          } else {
            if (cResult[23] === stateFromStores) {
              if (cResult[24] === tmp4) {
                if (cResult[25] === tmp5) {
                  if (cResult[26] === stateFromStores1) {
                    let tmp18 = cResult[27];
                  }
                  return tmp18;
                }
              }
            }
            const obj5 = {};
            const merged1 = Object.assign(tmp4);
            obj5.guild = stateFromStores;
            obj5.selectedChannelId = tmp5;
            obj5.selectedVoiceChannelId = stateFromStores1;
            const tmp24 = closure_16(closure_21, obj5);
            cResult[23] = stateFromStores;
            cResult[24] = tmp4;
            cResult[25] = tmp5;
            cResult[26] = stateFromStores1;
            cResult[27] = tmp24;
            tmp18 = tmp24;
          }
          tmpResult8 = tmp(10508);
        }
        tmpResult6 = tmp(2070);
      }
    }
    if (cResult[11] === tmp4.style) {
      if (cResult[12] === tmp6) {
        let tmp38 = cResult[13];
      }
      return tmp38;
    }
    const obj6 = { style: tmp4.style, selectedGuildId: tmp6 };
    const tmp41 = closure_16(GuildsEmptyDefault, obj6);
    cResult[11] = tmp4.style;
    cResult[12] = tmp6;
    cResult[13] = tmp41;
    tmp38 = tmp41;
  }
}) : ((selectedGuildId) => {
  selectedGuildId = selectedGuildId.selectedGuildId;
  const selectedChannelId = selectedGuildId.selectedChannelId;
  const merged = Object.assign(selectedGuildId, Object.assign({ selectedGuildId: 0, selectedChannelId: 0 }));
  const items = [GuildStore];
  const stateFromStores = selectedGuildId(504).useStateFromStores(items, () => GuildStore.getGuild(selectedGuildId));
  const obj = selectedGuildId(504);
  const items1 = [SelectedChannelStore];
  const stateFromStores1 = selectedGuildId(504).useStateFromStores(items1, () => voiceChannelId.getVoiceChannelId());
  if (selectedGuildId === closure_15) {
    const obj3 = { style: merged.style };
    return closure_16(GuildUpsellChannelListDefault, obj3);
  } else {
    if (null != stateFromStores) {
      if (selectedGuildId !== closure_14) {
        if (tmp2Result.isFavoritesGuildId(selectedGuildId)) {
          const obj4 = {};
          const merged1 = Object.assign(merged);
          obj4.guild = stateFromStores;
          obj4.selectedChannelId = selectedChannelId;
          obj4.selectedVoiceChannelId = stateFromStores1;
          return closure_16(tmp2(16621).default, obj4);
        } else {
          if (tmp2Result2.shouldNSFWGateGuild(selectedGuildId)) {
            const obj5 = { style: merged.style, guildId: selectedGuildId };
            let tmp6Result = tmp6(NsfwGateGuildSidebarDefault, obj5);
          } else {
            const obj6 = {};
            const merged2 = Object.assign(merged);
            obj6.guild = stateFromStores;
            obj6.selectedChannelId = selectedChannelId;
            obj6.selectedVoiceChannelId = stateFromStores1;
            tmp6Result = tmp6(closure_21, obj6);
          }
          return tmp6Result;
        }
        tmp2Result = tmp2(2070);
      }
    }
    const obj7 = { style: merged.style, selectedGuildId };
    return closure_16(GuildsEmptyDefault, obj7);
  }
  const obj2 = selectedGuildId(504);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/RedesignChannelList.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  const doesLandOnHomeDrawer = useHomeDrawerGesture.useDoesLandOnHomeDrawer();
  if (cResult[0] !== arg0) {
    const obj3 = {};
    const merged = Object.assign(arg0);
    const tmp11 = value2(closure_22, obj3);
    cResult[0] = arg0;
    cResult[1] = tmp11;
    let tmp5 = tmp11;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== doesLandOnHomeDrawer) {
    let tmp13 = null;
    if (!doesLandOnHomeDrawer) {
      tmp13 = value2(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "channel-list", checkFocusedScreen: "guilds" });
    }
    cResult[2] = doesLandOnHomeDrawer;
    cResult[3] = tmp13;
    let tmp12 = tmp13;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    if (cResult[5] === tmp12) {
      let tmp15 = cResult[6];
    }
    return tmp15;
  }
  const obj4 = { children: null };
  const items = [tmp5, tmp12];
  obj4.children = items;
  const tmp16 = constants(collapsedCategories, obj4);
  cResult[4] = tmp5;
  cResult[5] = tmp12;
  cResult[6] = tmp16;
  tmp15 = tmp16;
}) : ((arg0) => {
  const doesLandOnHomeDrawer = useHomeDrawerGesture.useDoesLandOnHomeDrawer();
  const merged = Object.assign(arg0);
  const children = [value2(closure_22, {}), ];
  let tmp6Result = null;
  if (!doesLandOnHomeDrawer) {
    tmp6Result = value2(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "channel-list", checkFocusedScreen: "guilds" });
  }
  children[1] = tmp6Result;
  return constants(collapsedCategories, { children });
}));
export const ChannelList = memoResult;
