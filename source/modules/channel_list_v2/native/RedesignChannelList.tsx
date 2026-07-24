// Module ID: 15010
// Function ID: 114347
// Name: getInitialPosition
// Dependencies: [57, 31, 27, 4122, 6757, 14850, 1838, 1906, 653, 33, 1459, 3981, 10914, 4130, 689, 1324, 15011, 15030, 14937, 14048, 15056, 15031, 15058, 14040, 6768, 15029, 6767, 15059, 15063, 6760, 15064, 9923, 14840, 14049, 14849, 1557, 10883, 5449, 15111, 15112, 15125, 7677, 15128, 15130, 566, 15134, 15135, 15136, 15138, 5077, 9384, 15142, 10057, 2]

// Module 15010 (getInitialPosition)
import _slicedToArray from "_slicedToArray";
import importAllResult from "t";
import { View } from "useGuildHasLiveChannelNotice";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import computeMaxX from "computeMaxX";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "useYouBarTotalHeight";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
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
  importDefault = importDefault(rows[42])(guild.guild);
  const tmp = importDefault(rows[43])(guild.guild);
  rows = tmp.rows;
  ({ gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = tmp);
  let obj = _require(rows[44]);
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
    tmp3 = callback2(closure_18, obj);
  }
  return tmp3;
}
function FavoriteChannels(arg0) {
  let guildChannels;
  let shouldShowEmptyState;
  let guild = arg0;
  let obj = require(15135) /* _createForOfIteratorHelperLoose */;
  const favoritesGuildChannelList = obj.useFavoritesGuildChannelList();
  ({ guildChannels, shouldShowEmptyState } = favoritesGuildChannelList);
  if (!obj2.useShouldRenderChannelList()) {
    return null;
  } else if (shouldShowEmptyState) {
    obj = {};
    guild = guild.guild;
    obj.guild = guild;
    let tmp2Result = tmp2(importDefault(15125), obj);
  } else {
    obj = {};
    const merged = Object.assign(guild);
    obj["guildChannels"] = guildChannels;
    obj["guildChannelsVersion"] = 0;
    tmp2Result = tmp2(closure_18, obj);
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
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getGuild(selectedGuildId));
  let obj1 = selectedGuildId(566);
  const items1 = [closure_10];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_10.getVoiceChannelId());
  if (selectedGuildId === closure_12) {
    obj = { style: merged.style };
    let tmp7Result = callback2(importDefault(15136), obj);
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
          let obj2 = selectedGuildId(9384);
          if (obj2.shouldNSFWGateGuild(selectedGuildId)) {
            obj2 = { style: merged.style, guildId: selectedGuildId };
            tmp7Result = tmp7(importDefault(15142), obj2);
          } else {
            const obj3 = {};
            const merged2 = Object.assign(merged);
            obj3["guild"] = stateFromStores;
            obj3["selectedChannelId"] = selectedChannelId;
            obj3["selectedVoiceChannelId"] = stateFromStores1;
            tmp7Result = tmp7(GuildChannels, obj3);
          }
        }
        obj9 = selectedGuildId(5077);
      }
    }
    const obj4 = { style: merged.style, selectedGuildId };
    tmp7Result = callback2(importDefault(15138), obj4);
  }
  return tmp7Result;
}
({ EMPTY_NUX_SERVER: closure_11, MOBILE_GUILD_UPSELL_LIST: closure_12, DM_WIDTH: closure_13 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let obj = { container: { flex: 1, position: "relative", overflow: "hidden" } };
obj = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.PANEL_BG };
obj.panelTint = obj;
obj.listWrapper = { flex: 1 };
let closure_17 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_18 = importAllResult.memo((contentInset) => {
  let listBottom;
  let listPaddingBottom;
  let listViewportHeight;
  contentInset = contentInset.contentInset;
  const gameClaimMarkAsDismissed = contentInset.gameClaimMarkAsDismissed;
  const guild = contentInset.guild;
  const guildChannels = contentInset.guildChannels;
  const selectedChannelId = contentInset.selectedChannelId;
  const selectedVoiceChannelId = contentInset.selectedVoiceChannelId;
  const style = contentInset.style;
  const applicationAccountLinkMarkAsDismissed = contentInset.applicationAccountLinkMarkAsDismissed;
  const startApplicationAccountLinkAuthorization = contentInset.startApplicationAccountLinkAuthorization;
  const accountLinkApplication = contentInset.accountLinkApplication;
  let tmp = gameClaimMarkAsDismissed(guild[15])("ChannelList");
  let closure_10 = tmp;
  let tmp2 = listViewportHeight();
  let closure_11 = tmp2;
  let obj = contentInset(guild[16]);
  const categoryStyles = obj.useCategoryStyles();
  let tmp4 = gameClaimMarkAsDismissed(guild[17])(guild);
  const bannerHeight = tmp4.bannerHeight;
  const bannerWidth = tmp4.bannerWidth;
  const headerHeight = tmp4.headerHeight;
  const fontScale = tmp4.fontScale;
  ({ listBottom, listPaddingBottom, listViewportHeight } = tmp4);
  const ref = selectedChannelId.useRef(null);
  let items = [ref, guildChannels];
  let effect = selectedChannelId.useEffect(() => {
    const result = contentInset(guild[18]).registerFastListChannelVisibilityMethod(ref, guildChannels);
  }, items);
  const sections = guildChannels.getSections(false);
  let obj1 = contentInset(guild[19]);
  const items1 = [guildChannels, guild, headerHeight];
  const callback = selectedChannelId.useCallback(() => {
    const state = startApplicationAccountLinkAuthorization.getState();
    state.noteInteraction();
  }, []);
  const items2 = [guild, bannerHeight, bannerWidth];
  const callback1 = selectedChannelId.useCallback((fastList) => bannerWidth(gameClaimMarkAsDismissed(guild[20]), { fastList, guildChannels, guild, headerHeight }), items1);
  const callback2 = selectedChannelId.useCallback((scrollPosValue) => bannerWidth(gameClaimMarkAsDismissed(guild[21]), { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth }, guild.id), items2);
  const callback3 = selectedChannelId.useCallback(() => {
    const result = contentInset(guild[22]).logChannelListEndReached();
  }, []);
  let obj2 = contentInset(guild[23]);
  const mobileQuestDockHeight = obj2.useMobileQuestDockHeight();
  const items3 = [contentInset, style, tmp2, mobileQuestDockHeight];
  const memo = selectedChannelId.useMemo(() => {
    const items = [tmp2.container, , ];
    const obj = {};
    let top;
    if (null != contentInset) {
      top = contentInset.top;
      tmp2 = contentInset;
    }
    let num = 0;
    if (null != top) {
      num = top;
    }
    obj.marginTop = num;
    let bottom;
    if (null != contentInset) {
      bottom = contentInset.bottom;
    }
    let num2 = 0;
    if (null != bottom) {
      num2 = bottom;
    }
    obj.paddingBottom = num2 + mobileQuestDockHeight;
    let left;
    if (null != contentInset) {
      left = contentInset.left;
    }
    let num3 = 0;
    if (null != left) {
      num3 = left;
    }
    obj.marginLeft = num3;
    let right;
    if (null != contentInset) {
      right = contentInset.right;
    }
    let num4 = 0;
    if (null != right) {
      num4 = right;
    }
    obj.marginRight = num4;
    items[1] = obj;
    items[2] = style;
    return items;
  }, items3);
  let obj3 = contentInset(guild[24]);
  const recentlyActiveChannelsEnabled = obj3.useRecentlyActiveChannelsEnabled();
  const tmp16 = gameClaimMarkAsDismissed(guild[25])(guild.id);
  let obj4 = contentInset(guild[26]);
  const optInEnabledForGuild = obj4.useOptInEnabledForGuild(guild.id);
  let obj5 = contentInset(guild[27]);
  const guildLiveChannelNoticeInfo = obj5.useGuildLiveChannelNoticeInfo(guild.id);
  let obj6 = contentInset(guild[28]);
  const scaledLiveChannelNoticeHeight = obj6.getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo);
  (function useDrawerAwareScrollToTop(ref) {
    let closure_0 = ref;
    let navigation = contentInset(guild[10]).useNavigation();
    const items = [navigation, ref];
    const effect = selectedChannelId.useEffect(() => {
      let c0 = -1;
      navigation = navigation.addListener("tabPress", (arg0) => {
        let timeout = arg0;
        if (null != obj.coerceGuildsRoute(gameClaimMarkAsDismissed(guild[12])())) {
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
  const items4 = [guildChannels, sections, tmp];
  const callback4 = selectedChannelId.useCallback((arg0) => {
    const diff = arg0 - 1;
    let tmp2 = diff;
    if (arg0 <= contentInset(guild[29]).SECTION_INDEX_FIRST_NAMED_CATEGORY) {
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
      tmp7 = !contentInset(guild[30]).getChannelListSectionHasFooterDivider(guildChannels, tmp2, closure_10);
      const obj = contentInset(guild[30]);
    }
    return tmp7;
  }, items4);
  const items5 = [guildChannels, fontScale, tmp16, scaledLiveChannelNoticeHeight, listViewportHeight, tmp];
  const items6 = [guildChannels, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication];
  const callback5 = selectedChannelId.useCallback((section, row) => {
    let obj = contentInset(guild[30]);
    obj = { guildChannels, section, row, fontScale, voiceStates: closure_22, liveChannelNoticeHeight: scaledLiveChannelNoticeHeight, listViewportHeight, isRefreshEnabled: closure_10 };
    const channelListItemSize = obj.getChannelListItemSize(obj);
    return gameClaimMarkAsDismissed(guild[31])(channelListItemSize);
  }, items5);
  const items7 = [guildChannels, fontScale, callback4];
  const callback6 = selectedChannelId.useCallback((section, row) => {
    let obj = {};
    obj = { guildChannels, section, row, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication };
    obj.children = contentInset(guild[30]).renderChannelListItem(obj);
    return bannerWidth(selectedVoiceChannelId, obj);
  }, items6);
  const items8 = [guildChannels, recentlyActiveChannelsEnabled, callback4, categoryStyles, tmp];
  const callback7 = selectedChannelId.useCallback((section) => {
    const channelListSectionHeaderSize = contentInset(guild[30]).getChannelListSectionHeaderSize(guildChannels, section, fontScale, callback4(section));
    return gameClaimMarkAsDismissed(guild[31])(channelListSectionHeaderSize);
  }, items7);
  const items9 = [guildChannels, optInEnabledForGuild, tmp16, selectedChannelId, selectedVoiceChannelId, tmp];
  const callback8 = selectedChannelId.useCallback((recentsSectionNumber) => {
    let obj = contentInset(guild[30]);
    obj = { children: obj.renderChannelListSectionHeader(guildChannels, recentsSectionNumber, recentlyActiveChannelsEnabled, callback4(recentsSectionNumber), categoryStyles, closure_10) };
    return bannerWidth(selectedVoiceChannelId, obj);
  }, items8);
  const items10 = [guildChannels, optInEnabledForGuild, tmp16, selectedChannelId, selectedVoiceChannelId, tmp];
  const callback9 = selectedChannelId.useCallback((section) => {
    let obj = contentInset(guild[30]);
    obj = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: closure_22, selectedChannelId, selectedVoiceChannelId };
    const result = obj.calculateVoiceSummary(obj);
    const channelListSectionFooterSize = contentInset(guild[30]).getChannelListSectionFooterSize(guildChannels, section, result, closure_10);
    return gameClaimMarkAsDismissed(guild[31])(channelListSectionFooterSize);
  }, items9);
  const items11 = [sections];
  const callback10 = selectedChannelId.useCallback((section) => {
    let obj = contentInset(guild[30]);
    obj = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: closure_22, selectedChannelId, selectedVoiceChannelId };
    const result = obj.calculateVoiceSummary(obj);
    obj = { children: contentInset(guild[30]).renderChannelListSectionFooter(guildChannels, section, ref, result, closure_10) };
    return bannerWidth(selectedVoiceChannelId, obj);
  }, items10);
  const items12 = [guildChannels];
  const memo1 = selectedChannelId.useMemo(() => 0 === sections.reduce((arg0, arg1) => arg0 + arg1, 0), items11);
  const callback11 = selectedChannelId.useCallback((arg0, section, row) => contentInset(guild[30]).getFastListRecyclerKey(guildChannels, arg0, section, row), items12);
  const context = selectedChannelId.useContext(gameClaimMarkAsDismissed(guild[32]));
  let obj7 = contentInset(guild[33]);
  const youBarTotalHeight = obj7.useYouBarTotalHeight(16);
  const externalScrollEventHandler = obj1.useExternalScrollEventHandler({ id: guild.id });
  const youBarTotalHeight1 = contentInset(guild[33]).useYouBarTotalHeight(-16);
  obj = {};
  const obj9 = contentInset(guild[33]);
  const tmp33 = bannerWidth;
  obj.profile = contentInset(guild[36]).Profiles.Channels;
  obj = {};
  obj1 = { style: memo };
  obj2 = { offsetX: bannerHeight, offsetY: gameClaimMarkAsDismissed(guild[35])().top, parentSpringTranslateX: selectedChannelId.useContext(contentInset(guild[34]).HomeDrawerStateContext).panelSpringTranslateX };
  const items13 = [bannerWidth(gameClaimMarkAsDismissed(guild[38]), obj2), , ];
  obj3 = { pointerEvents: "none", style: tmp2.panelTint };
  items13[1] = bannerWidth(selectedVoiceChannelId, obj3);
  obj4 = { style: tmp2.listWrapper };
  const items14 = [bannerWidth(gameClaimMarkAsDismissed(guild[39]), { guild }), ];
  if (memo1) {
    obj5 = { guild };
    let tmp38Result = tmp38(tmp39(tmp40[40]), obj5);
  } else {
    obj6 = { insetEnd: youBarTotalHeight };
    obj7 = { bottom: youBarTotalHeight1 };
    obj6.scrollIndicatorInsets = obj7;
    obj6.waitFor = context;
    obj6.ref = ref;
    obj6.chunkBase = listViewportHeight;
    obj6.stickyHeaderFooter = true;
    obj6.renderHeader = callback2;
    obj6.headerSize = tmp4.listTop;
    obj6.footerSize = listBottom + listPaddingBottom;
    obj6.endReachedThreshold = listBottom + listPaddingBottom;
    obj6.onEndReached = callback3;
    obj6.renderAccessory = callback1;
    obj6.disableContentWrappers = true;
    obj6.sections = sections;
    obj6.stickySectionsVariant = "disabled";
    obj6.renderSection = callback8;
    obj6.sectionSize = callback7;
    obj6.renderItem = callback6;
    obj6.itemSize = callback5;
    obj6.renderSectionFooter = callback10;
    obj6.sectionFooterSize = callback9;
    obj6.optimizeListItemRender = true;
    obj6.getRecyclerKey = callback11;
    obj6.initialScrollSection = sections(guildChannels, selectedChannelId, "section");
    obj6.initialScrollItem = sections(guildChannels, selectedChannelId, "item");
    obj6.initialScrollOrientation = "center";
    obj6.onScroll = callback;
    obj6.onScrollWorklet = externalScrollEventHandler;
    tmp38Result = tmp38(tmp39(tmp40[41]), obj6, guild.id);
    const tmp39Result = tmp39(tmp40[41]);
  }
  items14[1] = tmp38Result;
  obj4.children = items14;
  items13[2] = headerHeight(selectedVoiceChannelId, obj4);
  obj1.children = items13;
  obj.children = headerHeight(selectedVoiceChannelId, obj1);
  obj.children = bannerWidth(contentInset(guild[37]).LayerScope, obj);
  return tmp33(gameClaimMarkAsDismissed(guild[36]), obj);
});
const memoResult = importAllResult.memo((arg0) => {
  let obj = {};
  obj = {};
  const merged = Object.assign(arg0);
  const items = [callback2(ChannelsWrapper, obj), callback2(require(10057) /* TTIFirstContentfulPaint */.TTIFirstContentfulPaint, { label: "channel-list", checkFocusedScreen: "guilds" })];
  obj.children = items;
  return callback3(closure_16, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/channel_list_v2/native/RedesignChannelList.tsx");

export default memoResult;
