// Module ID: 15021
// Function ID: 114479
// Name: getInitialPosition
// Dependencies: [57, 31, 27, 4123, 5750, 14862, 1838, 1907, 653, 33, 1459, 3982, 10865, 1324, 15022, 15041, 14949, 14060, 15078, 15042, 15080, 5764, 15040, 5761, 15081, 15085, 5753, 15086, 9851, 14852, 14061, 10834, 5449, 15133, 15135, 15148, 7619, 15151, 15153, 566, 15157, 15158, 15044, 15159, 15161, 1841, 9290, 15165, 9986, 2]

// Module 15021 (getInitialPosition)
import _slicedToArray from "_slicedToArray";
import importAllResult from "setLevels";
import { View } from "hasGuildActions";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import computeMaxX from "computeMaxX";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "ChannelListPanelBackdrop";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
const require = arg1;
function getInitialPosition(arg0, arg1, arg2) {
  const first = callback(arg0.getSectionRowsFromChannel(arg1), 1)[0];
  if (null != first) {
    if (null != first.row) {
      if (first.row >= 0) {
        if (first.section >= 0) {
          if ("section" === arg2) {
            let row = first.section;
          } else if ("item" === arg2) {
            row = first.row;
          }
          return row;
        }
      }
    }
  }
}
function GuildChannels(guild) {
  let accountLinkApplication;
  let applicationAccountLinkMarkAsDismissed;
  let gameClaimMarkAsDismissed;
  let guildChannels;
  let guildChannelsVersion;
  let startApplicationAccountLinkAuthorization;
  const _require = guild;
  importDefault = importDefault(rows[37])(guild.guild);
  const tmp = importDefault(rows[38])(guild.guild);
  rows = tmp.rows;
  ({ gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = tmp);
  let obj = _require(rows[39]);
  const items = [closure_7];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => outer1_7.getGuild(guild.guild.id, { guildActionRows: closure_1, channelNoticeRows: rows }));
  ({ guildChannels, guildChannelsVersion } = stateFromStoresObject);
  let tmp3 = null;
  if (obj2.useShouldRenderChannelList()) {
    obj = {};
    const merged = Object.assign(guild);
    obj["guildChannels"] = guildChannels;
    obj["guildChannelsVersion"] = guildChannelsVersion;
    obj["gameClaimMarkAsDismissed"] = gameClaimMarkAsDismissed;
    obj["applicationAccountLinkMarkAsDismissed"] = applicationAccountLinkMarkAsDismissed;
    obj["startApplicationAccountLinkAuthorization"] = startApplicationAccountLinkAuthorization;
    obj["accountLinkApplication"] = accountLinkApplication;
    tmp3 = callback2(closure_16, obj);
  }
  return tmp3;
}
function FavoriteChannels(arg0) {
  let guildChannels;
  let shouldShowEmptyState;
  let guild = arg0;
  let obj = require(15158) /* _createForOfIteratorHelperLoose */;
  const favoritesGuildChannelList = obj.useFavoritesGuildChannelList();
  ({ guildChannels, shouldShowEmptyState } = favoritesGuildChannelList);
  let obj1 = require(15157) /* useShouldRenderChannelList */;
  if (!obj1.useShouldRenderChannelList()) {
    return null;
  } else if (shouldShowEmptyState) {
    obj = {};
    ({ style: obj4.style, contentInset: obj4.contentInset } = guild);
    obj = { guild: guild.guild, showExtraButtons: false, canOpenGuildActionSheet: false };
    const items = [callback2(importDefault(15044), obj), ];
    obj1 = {};
    guild = guild.guild;
    obj1.guild = guild;
    items[1] = callback2(importDefault(15148), obj1);
    obj.children = items;
    let tmp7 = callback3(importDefault(15133), obj);
    const tmp11 = importDefault(15133);
  } else {
    const obj2 = {};
    const merged = Object.assign(guild);
    obj2["guildChannels"] = guildChannels;
    obj2["guildChannelsVersion"] = 0;
    tmp7 = callback2(closure_16, obj2);
  }
}
function ChannelsWrapper(selectedGuildId) {
  selectedGuildId = selectedGuildId.selectedGuildId;
  const selectedChannelId = selectedGuildId.selectedChannelId;
  let obj = Object.create(null);
  obj.selectedGuildId = 0;
  obj.selectedChannelId = 0;
  const merged = Object.assign(selectedGuildId, obj);
  obj = selectedGuildId(566);
  const items = [_createForOfIteratorHelperLoose];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getGuild(selectedGuildId));
  let obj1 = selectedGuildId(566);
  const items1 = [closure_10];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_10.getVoiceChannelId());
  if (selectedGuildId === closure_12) {
    obj = { style: merged.style };
    let tmp7Result = callback2(importDefault(15159), obj);
  } else {
    if (null != stateFromStores) {
      if (selectedGuildId !== closure_11) {
        if (obj9.isFavoritesGuildId(selectedGuildId)) {
          obj1 = {};
          const merged1 = Object.assign(merged);
          obj1["guild"] = stateFromStores;
          obj1["selectedChannelId"] = selectedChannelId;
          obj1["selectedVoiceChannelId"] = stateFromStores1;
          tmp7Result = callback2(FavoriteChannels, obj1);
        } else {
          let obj2 = selectedGuildId(9290);
          if (obj2.shouldNSFWGateGuild(selectedGuildId)) {
            obj2 = { style: merged.style, guildId: selectedGuildId };
            tmp7Result = tmp7(importDefault(15165), obj2);
          } else {
            const obj3 = {};
            const merged2 = Object.assign(merged);
            obj3["guild"] = stateFromStores;
            obj3["selectedChannelId"] = selectedChannelId;
            obj3["selectedVoiceChannelId"] = stateFromStores1;
            tmp7Result = tmp7(GuildChannels, obj3);
          }
        }
        obj9 = selectedGuildId(1841);
      }
    }
    const obj4 = { style: merged.style, selectedGuildId };
    tmp7Result = callback2(importDefault(15161), obj4);
  }
  return tmp7Result;
}
({ EMPTY_NUX_SERVER: closure_11, MOBILE_GUILD_UPSELL_LIST: closure_12 } = ME);
({ jsx: closure_13, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
let closure_16 = importAllResult.memo((gameClaimMarkAsDismissed) => {
  let contentInset;
  let listBottom;
  let listPaddingBottom;
  let listViewportHeight;
  let style;
  gameClaimMarkAsDismissed = gameClaimMarkAsDismissed.gameClaimMarkAsDismissed;
  const guild = gameClaimMarkAsDismissed.guild;
  const guildChannels = gameClaimMarkAsDismissed.guildChannels;
  const selectedChannelId = gameClaimMarkAsDismissed.selectedChannelId;
  const selectedVoiceChannelId = gameClaimMarkAsDismissed.selectedVoiceChannelId;
  const applicationAccountLinkMarkAsDismissed = gameClaimMarkAsDismissed.applicationAccountLinkMarkAsDismissed;
  const startApplicationAccountLinkAuthorization = gameClaimMarkAsDismissed.startApplicationAccountLinkAuthorization;
  const accountLinkApplication = gameClaimMarkAsDismissed.accountLinkApplication;
  ({ contentInset, style } = gameClaimMarkAsDismissed);
  let tmp = guild(guildChannels[13])("ChannelList");
  let computeMaxX = tmp;
  let obj = gameClaimMarkAsDismissed(guildChannels[14]);
  const categoryStyles = obj.useCategoryStyles();
  const tmp3 = guild(guildChannels[15])(guild);
  const bannerHeight = tmp3.bannerHeight;
  const bannerWidth = tmp3.bannerWidth;
  const headerHeight = tmp3.headerHeight;
  const fontScale = tmp3.fontScale;
  ({ listBottom, listPaddingBottom, listViewportHeight } = tmp3);
  const ref = selectedVoiceChannelId.useRef(null);
  let items = [ref, guildChannels];
  let effect = selectedVoiceChannelId.useEffect(() => {
    const result = gameClaimMarkAsDismissed(guildChannels[16]).registerFastListChannelVisibilityMethod(ref, guildChannels);
  }, items);
  const sections = guildChannels.getSections(false);
  let obj1 = gameClaimMarkAsDismissed(guildChannels[17]);
  const items1 = [guildChannels, guild, headerHeight];
  const callback = selectedVoiceChannelId.useCallback(() => {
    const state = tmp.getState();
    state.noteInteraction();
  }, []);
  const items2 = [guild, bannerHeight, bannerWidth];
  const callback1 = selectedVoiceChannelId.useCallback((fastList) => fontScale(guild(guildChannels[18]), { fastList, guildChannels, guild, headerHeight }), items1);
  const callback2 = selectedVoiceChannelId.useCallback((scrollPosValue) => fontScale(guild(guildChannels[19]), { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth }, guild.id), items2);
  const callback3 = selectedVoiceChannelId.useCallback(() => {
    const result = gameClaimMarkAsDismissed(guildChannels[20]).logChannelListEndReached();
  }, []);
  let obj2 = gameClaimMarkAsDismissed(guildChannels[21]);
  const recentlyActiveChannelsEnabled = obj2.useRecentlyActiveChannelsEnabled();
  const tmp13 = guild(guildChannels[22])(guild.id);
  const GuildChannels = tmp13;
  let obj3 = gameClaimMarkAsDismissed(guildChannels[23]);
  const optInEnabledForGuild = obj3.useOptInEnabledForGuild(guild.id);
  let obj4 = gameClaimMarkAsDismissed(guildChannels[24]);
  const guildLiveChannelNoticeInfo = obj4.useGuildLiveChannelNoticeInfo(guild.id);
  const externalScrollEventHandler = obj1.useExternalScrollEventHandler({ id: guild.id });
  const scaledLiveChannelNoticeHeight = gameClaimMarkAsDismissed(guildChannels[25]).getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo);
  (function useDrawerAwareScrollToTop(ref) {
    let closure_0 = ref;
    let navigation = gameClaimMarkAsDismissed(guildChannels[10]).useNavigation();
    const items = [navigation, ref];
    const effect = selectedVoiceChannelId.useEffect(() => {
      let c0 = -1;
      navigation = navigation.addListener("tabPress", (arg0) => {
        let timeout = arg0;
        if (null != obj.coerceGuildsRoute(guild(guildChannels[12])())) {
          if (-1 === timeout) {
            const _clearTimeout2 = clearTimeout;
            clearTimeout(timeout);
            const _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              clearTimeout(c0);
              c0 = -1;
              let closure_0 = focused.isFocused();
              const animationFrame = requestAnimationFrame(() => { ... });
            }, 300);
          } else {
            const _clearTimeout = clearTimeout;
            clearTimeout(timeout);
            timeout = -1;
          }
        }
      });
      return () => {
        callback();
      };
    }, items);
  })(ref);
  const items3 = [guildChannels, sections, tmp];
  const callback4 = selectedVoiceChannelId.useCallback((arg0) => {
    const diff = arg0 - 1;
    let tmp2 = diff;
    if (arg0 <= gameClaimMarkAsDismissed(guildChannels[26]).SECTION_INDEX_FIRST_NAMED_CATEGORY) {
      tmp2 = diff;
      if (diff >= 0) {
        let tmp4 = diff;
        tmp2 = diff;
        if (sections[diff] <= 0) {
          const diff1 = tmp4 - 1;
          tmp2 = diff1;
          while (diff1 >= 0) {
            let tmp6 = sections;
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
    if (tmp7) {
      tmp7 = !gameClaimMarkAsDismissed(guildChannels[27]).getChannelListSectionHasFooterDivider(guildChannels, tmp2, computeMaxX);
      const obj = gameClaimMarkAsDismissed(guildChannels[27]);
    }
    return tmp7;
  }, items3);
  const items4 = [guildChannels, fontScale, tmp13, scaledLiveChannelNoticeHeight, listViewportHeight, tmp];
  const items5 = [guildChannels, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication];
  const callback5 = selectedVoiceChannelId.useCallback((section, row) => {
    let obj = gameClaimMarkAsDismissed(guildChannels[27]);
    obj = { guildChannels, section, row, fontScale, voiceStates: closure_18, liveChannelNoticeHeight: scaledLiveChannelNoticeHeight, listViewportHeight, isRefreshEnabled: computeMaxX };
    const channelListItemSize = obj.getChannelListItemSize(obj);
    return guild(guildChannels[28])(channelListItemSize);
  }, items4);
  const items6 = [guildChannels, fontScale, callback4];
  const callback6 = selectedVoiceChannelId.useCallback((section, row) => {
    let obj = {};
    obj = { guildChannels, section, row, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication };
    obj.children = gameClaimMarkAsDismissed(guildChannels[27]).renderChannelListItem(obj);
    return fontScale(applicationAccountLinkMarkAsDismissed, obj);
  }, items5);
  const items7 = [guildChannels, recentlyActiveChannelsEnabled, callback4, categoryStyles, tmp];
  const callback7 = selectedVoiceChannelId.useCallback((section) => {
    const channelListSectionHeaderSize = gameClaimMarkAsDismissed(guildChannels[27]).getChannelListSectionHeaderSize(guildChannels, section, fontScale, callback4(section));
    return guild(guildChannels[28])(channelListSectionHeaderSize);
  }, items6);
  const items8 = [guildChannels, optInEnabledForGuild, tmp13, selectedChannelId, selectedVoiceChannelId, tmp];
  const callback8 = selectedVoiceChannelId.useCallback((recentsSectionNumber) => {
    let obj = gameClaimMarkAsDismissed(guildChannels[27]);
    obj = { children: obj.renderChannelListSectionHeader(guildChannels, recentsSectionNumber, recentlyActiveChannelsEnabled, callback4(recentsSectionNumber), categoryStyles, computeMaxX) };
    return fontScale(applicationAccountLinkMarkAsDismissed, obj);
  }, items7);
  const items9 = [guildChannels, optInEnabledForGuild, tmp13, selectedChannelId, selectedVoiceChannelId, tmp];
  const callback9 = selectedVoiceChannelId.useCallback((section) => {
    let obj = gameClaimMarkAsDismissed(guildChannels[27]);
    obj = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: closure_18, selectedChannelId, selectedVoiceChannelId };
    const result = obj.calculateVoiceSummary(obj);
    const channelListSectionFooterSize = gameClaimMarkAsDismissed(guildChannels[27]).getChannelListSectionFooterSize(guildChannels, section, result, computeMaxX);
    return guild(guildChannels[28])(channelListSectionFooterSize);
  }, items8);
  const items10 = [sections];
  const callback10 = selectedVoiceChannelId.useCallback((section) => {
    let obj = gameClaimMarkAsDismissed(guildChannels[27]);
    obj = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: closure_18, selectedChannelId, selectedVoiceChannelId };
    const result = obj.calculateVoiceSummary(obj);
    obj = { children: gameClaimMarkAsDismissed(guildChannels[27]).renderChannelListSectionFooter(guildChannels, section, ref, result, computeMaxX) };
    return fontScale(applicationAccountLinkMarkAsDismissed, obj);
  }, items9);
  const items11 = [guildChannels];
  const memo = selectedVoiceChannelId.useMemo(() => 0 === sections.reduce((arg0, arg1) => arg0 + arg1, 0), items10);
  const callback11 = selectedVoiceChannelId.useCallback((arg0, section, row) => gameClaimMarkAsDismissed(guildChannels[27]).getFastListRecyclerKey(guildChannels, arg0, section, row), items11);
  const context = selectedVoiceChannelId.useContext(guild(guildChannels[29]));
  const obj6 = gameClaimMarkAsDismissed(guildChannels[25]);
  const youBarTotalHeight = gameClaimMarkAsDismissed(guildChannels[30]).useYouBarTotalHeight(16);
  const obj7 = gameClaimMarkAsDismissed(guildChannels[30]);
  const youBarTotalHeight1 = gameClaimMarkAsDismissed(guildChannels[30]).useYouBarTotalHeight(-16);
  obj = {};
  const obj8 = gameClaimMarkAsDismissed(guildChannels[30]);
  const tmp30 = fontScale;
  obj.profile = gameClaimMarkAsDismissed(guildChannels[31]).Profiles.Channels;
  obj = {};
  obj1 = { style, contentInset };
  const tmp31 = guild(guildChannels[31]);
  const tmp32 = fontScale;
  const tmp33 = listViewportHeight;
  const items12 = [fontScale(guild(guildChannels[34]), { guild }), ];
  if (memo) {
    obj2 = { guild };
    let tmp35Result = tmp35(tmp36(tmp37[35]), obj2);
  } else {
    obj3 = { insetEnd: youBarTotalHeight };
    obj4 = { bottom: youBarTotalHeight1 };
    obj3.scrollIndicatorInsets = obj4;
    obj3.waitFor = context;
    obj3.ref = ref;
    obj3.chunkBase = listViewportHeight;
    obj3.stickyHeaderFooter = true;
    obj3.renderHeader = callback2;
    obj3.headerSize = tmp3.listTop;
    obj3.footerSize = listBottom + listPaddingBottom;
    obj3.endReachedThreshold = listBottom + listPaddingBottom;
    obj3.onEndReached = callback3;
    obj3.renderAccessory = callback1;
    obj3.disableContentWrappers = true;
    obj3.sections = sections;
    obj3.stickySectionsVariant = "disabled";
    obj3.renderSection = callback8;
    obj3.sectionSize = callback7;
    obj3.renderItem = callback6;
    obj3.itemSize = callback5;
    obj3.renderSectionFooter = callback10;
    obj3.sectionFooterSize = callback9;
    obj3.optimizeListItemRender = true;
    obj3.getRecyclerKey = callback11;
    obj3.initialScrollSection = recentlyActiveChannelsEnabled(guildChannels, selectedChannelId, "section");
    obj3.initialScrollItem = recentlyActiveChannelsEnabled(guildChannels, selectedChannelId, "item");
    obj3.initialScrollOrientation = "center";
    obj3.onScroll = callback;
    obj3.onScrollWorklet = externalScrollEventHandler;
    tmp35Result = tmp35(tmp36(tmp37[36]), obj3, guild.id);
    const tmp36Result = tmp36(tmp37[36]);
  }
  items12[1] = tmp35Result;
  obj1.children = items12;
  obj.children = tmp33(guild(guildChannels[33]), obj1);
  obj.children = tmp32(gameClaimMarkAsDismissed(guildChannels[32]).LayerScope, obj);
  return tmp30(tmp31, obj);
});
const memoResult = importAllResult.memo((arg0) => {
  let obj = {};
  obj = {};
  const merged = Object.assign(arg0);
  const items = [callback2(ChannelsWrapper, obj), callback2(require(9986) /* TTIFirstContentfulPaint */.TTIFirstContentfulPaint, { label: "channel-list", checkFocusedScreen: "guilds" })];
  obj.children = items;
  return callback3(closure_15, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/channel_list_v2/native/RedesignChannelList.tsx");

export default memoResult;
