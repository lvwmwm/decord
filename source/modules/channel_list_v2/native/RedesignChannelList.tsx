// Module ID: 15065
// Function ID: 114652
// Name: getInitialPosition
// Dependencies: [57, 31, 27, 4157, 5760, 14906, 1838, 1907, 4238, 653, 33, 1459, 4016, 10903, 1324, 15066, 15084, 14993, 14104, 15118, 15085, 15120, 5774, 566, 5771, 15121, 15125, 5763, 15126, 9891, 14896, 14105, 10872, 5484, 15173, 15175, 15188, 7655, 15191, 15193, 15197, 15198, 15087, 15199, 15201, 1841, 9334, 15205, 10026, 2]

// Module 15065 (getInitialPosition)
import _slicedToArray from "_slicedToArray";
import importAllResult from "useYouBarTotalHeight";
import { View } from "_superPropGet";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import computeMaxX from "computeMaxX";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "Layer";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
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
  importDefault = importDefault(rows[38])(guild.guild);
  const tmp = importDefault(rows[39])(guild.guild);
  rows = tmp.rows;
  ({ gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = tmp);
  let obj = _require(rows[23]);
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
    tmp3 = callback2(closure_17, obj);
  }
  return tmp3;
}
function FavoriteChannels(arg0) {
  let guildChannels;
  let shouldShowEmptyState;
  let guild = arg0;
  let obj = require(15198) /* _createForOfIteratorHelperLoose */;
  const favoritesGuildChannelList = obj.useFavoritesGuildChannelList();
  ({ guildChannels, shouldShowEmptyState } = favoritesGuildChannelList);
  let obj1 = require(15197) /* useShouldRenderChannelList */;
  if (!obj1.useShouldRenderChannelList()) {
    return null;
  } else if (shouldShowEmptyState) {
    obj = {};
    ({ style: obj4.style, contentInset: obj4.contentInset } = guild);
    obj = { guild: guild.guild, showExtraButtons: false, canOpenGuildActionSheet: false };
    const items = [callback2(importDefault(15087), obj), ];
    obj1 = {};
    guild = guild.guild;
    obj1.guild = guild;
    items[1] = callback2(importDefault(15188), obj1);
    obj.children = items;
    let tmp7 = callback3(importDefault(15173), obj);
    const tmp11 = importDefault(15173);
  } else {
    const obj2 = {};
    const merged = Object.assign(guild);
    obj2["guildChannels"] = guildChannels;
    obj2["guildChannelsVersion"] = 0;
    tmp7 = callback2(closure_17, obj2);
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
  if (selectedGuildId === closure_13) {
    obj = { style: merged.style };
    let tmp7Result = callback2(importDefault(15199), obj);
  } else {
    if (null != stateFromStores) {
      if (selectedGuildId !== closure_12) {
        if (obj9.isFavoritesGuildId(selectedGuildId)) {
          obj1 = {};
          const merged1 = Object.assign(merged);
          obj1["guild"] = stateFromStores;
          obj1["selectedChannelId"] = selectedChannelId;
          obj1["selectedVoiceChannelId"] = stateFromStores1;
          tmp7Result = callback2(FavoriteChannels, obj1);
        } else {
          let obj2 = selectedGuildId(9334);
          if (obj2.shouldNSFWGateGuild(selectedGuildId)) {
            obj2 = { style: merged.style, guildId: selectedGuildId };
            tmp7Result = tmp7(importDefault(15205), obj2);
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
    tmp7Result = callback2(importDefault(15201), obj4);
  }
  return tmp7Result;
}
({ EMPTY_NUX_SERVER: closure_12, MOBILE_GUILD_UPSELL_LIST: closure_13 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let closure_17 = importAllResult.memo((gameClaimMarkAsDismissed) => {
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
  let tmp = guild(guildChannels[14])("ChannelList");
  let computeMaxX = tmp;
  let obj = gameClaimMarkAsDismissed(guildChannels[15]);
  const categoryStyles = obj.useCategoryStyles();
  const tmp3 = guild(guildChannels[16])(guild);
  const bannerHeight = tmp3.bannerHeight;
  const bannerWidth = tmp3.bannerWidth;
  const headerHeight = tmp3.headerHeight;
  const fontScale = tmp3.fontScale;
  ({ listBottom, listPaddingBottom, listViewportHeight } = tmp3);
  const ref = selectedVoiceChannelId.useRef(null);
  let items = [ref, guildChannels];
  let effect = selectedVoiceChannelId.useEffect(() => {
    const result = gameClaimMarkAsDismissed(guildChannels[17]).registerFastListChannelVisibilityMethod(ref, guildChannels);
  }, items);
  const sections = guildChannels.getSections(false);
  let obj1 = gameClaimMarkAsDismissed(guildChannels[18]);
  const items1 = [guildChannels, guild, headerHeight];
  const callback = selectedVoiceChannelId.useCallback(() => {
    const state = tmp.getState();
    state.noteInteraction();
  }, []);
  const items2 = [guild, bannerHeight, bannerWidth];
  const callback1 = selectedVoiceChannelId.useCallback((fastList) => listViewportHeight(guild(guildChannels[19]), { fastList, guildChannels, guild, headerHeight }), items1);
  const callback2 = selectedVoiceChannelId.useCallback((scrollPosValue) => listViewportHeight(guild(guildChannels[20]), { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth }, guild.id), items2);
  const callback3 = selectedVoiceChannelId.useCallback(() => {
    const result = gameClaimMarkAsDismissed(guildChannels[21]).logChannelListEndReached();
  }, []);
  let obj2 = gameClaimMarkAsDismissed(guildChannels[22]);
  const recentlyActiveChannelsEnabled = obj2.useRecentlyActiveChannelsEnabled();
  let obj3 = gameClaimMarkAsDismissed(guildChannels[23]);
  const items3 = [bannerWidth];
  const items4 = [guild.id];
  const stateFromStores = obj3.useStateFromStores(items3, () => bannerWidth.getVoiceStates(guild.id), items4);
  let obj4 = gameClaimMarkAsDismissed(guildChannels[24]);
  const optInEnabledForGuild = obj4.useOptInEnabledForGuild(guild.id);
  const externalScrollEventHandler = obj1.useExternalScrollEventHandler({ id: guild.id });
  const guildLiveChannelNoticeInfo = gameClaimMarkAsDismissed(guildChannels[25]).useGuildLiveChannelNoticeInfo(guild.id);
  const obj6 = gameClaimMarkAsDismissed(guildChannels[25]);
  const scaledLiveChannelNoticeHeight = gameClaimMarkAsDismissed(guildChannels[26]).getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo);
  (function useDrawerAwareScrollToTop(ref) {
    let closure_0 = ref;
    let navigation = gameClaimMarkAsDismissed(guildChannels[11]).useNavigation();
    const items = [navigation, ref];
    const effect = selectedVoiceChannelId.useEffect(() => {
      let c0 = -1;
      navigation = navigation.addListener("tabPress", (arg0) => {
        let timeout = arg0;
        if (null != obj.coerceGuildsRoute(guild(guildChannels[13])())) {
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
  const items5 = [guildChannels, sections, tmp];
  const callback4 = selectedVoiceChannelId.useCallback((arg0) => {
    const diff = arg0 - 1;
    let tmp2 = diff;
    if (arg0 <= gameClaimMarkAsDismissed(guildChannels[27]).SECTION_INDEX_FIRST_NAMED_CATEGORY) {
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
      tmp7 = !gameClaimMarkAsDismissed(guildChannels[28]).getChannelListSectionHasFooterDivider(guildChannels, tmp2, computeMaxX);
      const obj = gameClaimMarkAsDismissed(guildChannels[28]);
    }
    return tmp7;
  }, items5);
  const items6 = [guildChannels, fontScale, stateFromStores, scaledLiveChannelNoticeHeight, listViewportHeight, tmp];
  const items7 = [guildChannels, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication];
  const callback5 = selectedVoiceChannelId.useCallback((section, row) => {
    let obj = gameClaimMarkAsDismissed(guildChannels[28]);
    obj = { guildChannels, section, row, fontScale, voiceStates: stateFromStores, liveChannelNoticeHeight: scaledLiveChannelNoticeHeight, listViewportHeight, isRefreshEnabled: computeMaxX };
    const channelListItemSize = obj.getChannelListItemSize(obj);
    return guild(guildChannels[29])(channelListItemSize);
  }, items6);
  const items8 = [guildChannels, fontScale, callback4];
  const callback6 = selectedVoiceChannelId.useCallback((section, row) => {
    let obj = {};
    obj = { guildChannels, section, row, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication };
    obj.children = gameClaimMarkAsDismissed(guildChannels[28]).renderChannelListItem(obj);
    return listViewportHeight(applicationAccountLinkMarkAsDismissed, obj);
  }, items7);
  const items9 = [guildChannels, recentlyActiveChannelsEnabled, callback4, categoryStyles, tmp];
  const callback7 = selectedVoiceChannelId.useCallback((section) => {
    const channelListSectionHeaderSize = gameClaimMarkAsDismissed(guildChannels[28]).getChannelListSectionHeaderSize(guildChannels, section, fontScale, callback4(section));
    return guild(guildChannels[29])(channelListSectionHeaderSize);
  }, items8);
  const items10 = [guildChannels, optInEnabledForGuild, stateFromStores, selectedChannelId, selectedVoiceChannelId, tmp];
  const callback8 = selectedVoiceChannelId.useCallback((recentsSectionNumber) => {
    let obj = gameClaimMarkAsDismissed(guildChannels[28]);
    obj = { children: obj.renderChannelListSectionHeader(guildChannels, recentsSectionNumber, recentlyActiveChannelsEnabled, callback4(recentsSectionNumber), categoryStyles, computeMaxX) };
    return listViewportHeight(applicationAccountLinkMarkAsDismissed, obj);
  }, items9);
  const items11 = [guildChannels, optInEnabledForGuild, stateFromStores, selectedChannelId, selectedVoiceChannelId, tmp];
  const callback9 = selectedVoiceChannelId.useCallback((section) => {
    let obj = gameClaimMarkAsDismissed(guildChannels[28]);
    obj = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId };
    const result = obj.calculateVoiceSummary(obj);
    const channelListSectionFooterSize = gameClaimMarkAsDismissed(guildChannels[28]).getChannelListSectionFooterSize(guildChannels, section, result, computeMaxX);
    return guild(guildChannels[29])(channelListSectionFooterSize);
  }, items10);
  const items12 = [sections];
  const callback10 = selectedVoiceChannelId.useCallback((section) => {
    let obj = gameClaimMarkAsDismissed(guildChannels[28]);
    obj = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: stateFromStores, selectedChannelId, selectedVoiceChannelId };
    const result = obj.calculateVoiceSummary(obj);
    obj = { children: gameClaimMarkAsDismissed(guildChannels[28]).renderChannelListSectionFooter(guildChannels, section, ref, result, computeMaxX) };
    return listViewportHeight(applicationAccountLinkMarkAsDismissed, obj);
  }, items11);
  const items13 = [guildChannels];
  const memo = selectedVoiceChannelId.useMemo(() => 0 === sections.reduce((arg0, arg1) => arg0 + arg1, 0), items12);
  const callback11 = selectedVoiceChannelId.useCallback((arg0, section, row) => gameClaimMarkAsDismissed(guildChannels[28]).getFastListRecyclerKey(guildChannels, arg0, section, row), items13);
  const context = selectedVoiceChannelId.useContext(guild(guildChannels[30]));
  const obj7 = gameClaimMarkAsDismissed(guildChannels[26]);
  const youBarTotalHeight = gameClaimMarkAsDismissed(guildChannels[31]).useYouBarTotalHeight(16);
  const obj8 = gameClaimMarkAsDismissed(guildChannels[31]);
  const youBarTotalHeight1 = gameClaimMarkAsDismissed(guildChannels[31]).useYouBarTotalHeight(-16);
  obj = {};
  const obj9 = gameClaimMarkAsDismissed(guildChannels[31]);
  const tmp30 = listViewportHeight;
  obj.profile = gameClaimMarkAsDismissed(guildChannels[32]).Profiles.Channels;
  obj = {};
  obj1 = { style, contentInset };
  const tmp31 = guild(guildChannels[32]);
  const tmp32 = listViewportHeight;
  const tmp33 = ref;
  const items14 = [listViewportHeight(guild(guildChannels[35]), { guild }), ];
  if (memo) {
    obj2 = { guild };
    let tmp35Result = tmp35(tmp36(tmp37[36]), obj2);
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
    obj3.initialScrollSection = stateFromStores(guildChannels, selectedChannelId, "section");
    obj3.initialScrollItem = stateFromStores(guildChannels, selectedChannelId, "item");
    obj3.initialScrollOrientation = "center";
    obj3.onScroll = callback;
    obj3.onScrollWorklet = externalScrollEventHandler;
    tmp35Result = tmp35(tmp36(tmp37[37]), obj3, guild.id);
    const tmp36Result = tmp36(tmp37[37]);
  }
  items14[1] = tmp35Result;
  obj1.children = items14;
  obj.children = tmp33(guild(guildChannels[34]), obj1);
  obj.children = tmp32(gameClaimMarkAsDismissed(guildChannels[33]).LayerScope, obj);
  return tmp30(tmp31, obj);
});
const memoResult = importAllResult.memo((arg0) => {
  let obj = {};
  obj = {};
  const merged = Object.assign(arg0);
  const items = [callback2(ChannelsWrapper, obj), callback2(require(10026) /* TTIFirstContentfulPaint */.TTIFirstContentfulPaint, { label: "channel-list", checkFocusedScreen: "guilds" })];
  obj.children = items;
  return callback3(closure_16, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/channel_list_v2/native/RedesignChannelList.tsx");

export default memoResult;
