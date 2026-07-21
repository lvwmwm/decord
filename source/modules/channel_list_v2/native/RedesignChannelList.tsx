// Module ID: 14836
// Function ID: 111781
// Name: getInitialPosition
// Dependencies: []

// Module 14836 (getInitialPosition)
function getInitialPosition(guildChannels, selectedChannelId, item) {
  const first = callback(guildChannels.getSectionRowsFromChannel(selectedChannelId), 1)[0];
  if (null != first) {
    if (null != first.row) {
      if (first.row >= 0) {
        if (first.section >= 0) {
          if ("section" === item) {
            let row = first.section;
          } else if ("item" === item) {
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
  const arg1 = guild;
  const importDefault = importDefault(dependencyMap[42])(guild.guild);
  const tmp = importDefault(dependencyMap[43])(guild.guild);
  const dependencyMap = tmp.rows;
  ({ gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication } = tmp);
  let obj = arg1(dependencyMap[44]);
  const items = [closure_7];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => guild.getGuild(arg0.guild.id, { guildActionRows: closure_1, channelNoticeRows: rows }));
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
  let obj = arg1(dependencyMap[46]);
  const favoritesGuildChannelList = obj.useFavoritesGuildChannelList();
  ({ guildChannels, shouldShowEmptyState } = favoritesGuildChannelList);
  if (!obj2.useShouldRenderChannelList()) {
    return null;
  } else if (shouldShowEmptyState) {
    obj = {};
    guild = guild.guild;
    obj.guild = guild;
    let tmp2Result = tmp2(importDefault(dependencyMap[40]), obj);
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
  const arg1 = selectedGuildId;
  const selectedChannelId = selectedGuildId.selectedChannelId;
  let obj = Object.create(null);
  obj.selectedGuildId = 0;
  obj.selectedChannelId = 0;
  const merged = Object.assign(selectedGuildId, obj);
  obj = arg1(dependencyMap[44]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(selectedGuildId));
  let obj1 = arg1(dependencyMap[44]);
  const items1 = [closure_10];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => voiceChannelId.getVoiceChannelId());
  if (selectedGuildId === closure_12) {
    obj = { style: merged.style };
    let tmp7Result = callback2(importDefault(dependencyMap[47]), obj);
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
          let obj2 = arg1(dependencyMap[50]);
          if (obj2.shouldNSFWGateGuild(selectedGuildId)) {
            obj2 = { style: merged.style, guildId: selectedGuildId };
            tmp7Result = tmp7(importDefault(dependencyMap[51]), obj2);
          } else {
            const obj3 = {};
            const merged2 = Object.assign(merged);
            obj3["guild"] = stateFromStores;
            obj3["selectedChannelId"] = selectedChannelId;
            obj3["selectedVoiceChannelId"] = stateFromStores1;
            tmp7Result = tmp7(GuildChannels, obj3);
          }
        }
        const obj9 = arg1(dependencyMap[49]);
      }
    }
    const obj4 = { style: merged.style, selectedGuildId };
    tmp7Result = callback2(importDefault(dependencyMap[48]), obj4);
  }
  return tmp7Result;
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
({ EMPTY_NUX_SERVER: closure_11, MOBILE_GUILD_UPSELL_LIST: closure_12, DM_WIDTH: closure_13 } = arg1(dependencyMap[8]));
const tmp2 = arg1(dependencyMap[8]);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = arg1(dependencyMap[9]));
const tmp3 = arg1(dependencyMap[9]);
let obj = { container: {} };
obj = { o: "center", concat: null, o: 4, borderRadius: 4, position: "rgba(0, 0, 0, 0.75)", backgroundColor: importDefault(dependencyMap[14]).colors.PANEL_BG };
obj.panelTint = obj;
obj.listWrapper = { flex: 1 };
let closure_17 = arg1(dependencyMap[13]).createStyles(obj);
let closure_18 = importAllResult.memo((contentInset) => {
  let listBottom;
  let listPaddingBottom;
  let listViewportHeight;
  contentInset = contentInset.contentInset;
  const arg1 = contentInset;
  const gameClaimMarkAsDismissed = contentInset.gameClaimMarkAsDismissed;
  const importDefault = gameClaimMarkAsDismissed;
  const guild = contentInset.guild;
  const dependencyMap = guild;
  const guildChannels = contentInset.guildChannels;
  let closure_3 = guildChannels;
  const selectedChannelId = contentInset.selectedChannelId;
  const selectedVoiceChannelId = contentInset.selectedVoiceChannelId;
  const View = selectedVoiceChannelId;
  const style = contentInset.style;
  let closure_6 = style;
  const applicationAccountLinkMarkAsDismissed = contentInset.applicationAccountLinkMarkAsDismissed;
  let closure_7 = applicationAccountLinkMarkAsDismissed;
  const startApplicationAccountLinkAuthorization = contentInset.startApplicationAccountLinkAuthorization;
  let closure_8 = startApplicationAccountLinkAuthorization;
  const accountLinkApplication = contentInset.accountLinkApplication;
  let closure_9 = accountLinkApplication;
  const tmp = importDefault(dependencyMap[15])("ChannelList");
  let closure_10 = tmp;
  const tmp2 = callback4();
  let obj = arg1(dependencyMap[16]);
  const categoryStyles = obj.useCategoryStyles();
  const tmp4 = importDefault(dependencyMap[17])(guild);
  const bannerHeight = tmp4.bannerHeight;
  const bannerWidth = tmp4.bannerWidth;
  const headerHeight = tmp4.headerHeight;
  const fontScale = tmp4.fontScale;
  ({ listBottom, listPaddingBottom, listViewportHeight } = tmp4);
  let callback4 = listViewportHeight;
  const ref = selectedChannelId.useRef(null);
  let closure_18 = ref;
  const items = [ref, guildChannels];
  const effect = importAllResult.useEffect(() => {
    const result = contentInset(guild[18]).registerFastListChannelVisibilityMethod(ref, guildChannels);
  }, items);
  const sections = guildChannels.getSections(false);
  const getInitialPosition = sections;
  let obj1 = arg1(dependencyMap[19]);
  const items1 = [guildChannels, guild, headerHeight];
  const callback = importAllResult.useCallback(() => {
    const state = startApplicationAccountLinkAuthorization.getState();
    state.noteInteraction();
  }, []);
  const items2 = [guild, bannerHeight, bannerWidth];
  const callback1 = importAllResult.useCallback((fastList) => bannerWidth(gameClaimMarkAsDismissed(guild[20]), { fastList, guildChannels, guild, headerHeight }), items1);
  const callback2 = importAllResult.useCallback((scrollPosValue) => bannerWidth(gameClaimMarkAsDismissed(guild[21]), { guild, scrollPosition: scrollPosValue.scrollPosValue, bannerHeight, bannerWidth }, guild.id), items2);
  const callback3 = importAllResult.useCallback(() => {
    const result = contentInset(guild[22]).logChannelListEndReached();
  }, []);
  let obj2 = arg1(dependencyMap[23]);
  const mobileQuestDockHeight = obj2.useMobileQuestDockHeight();
  const GuildChannels = mobileQuestDockHeight;
  const items3 = [contentInset, style, tmp2, mobileQuestDockHeight];
  const memo = importAllResult.useMemo(() => {
    const items = [tmp2.container, , ];
    const obj = {};
    let top;
    if (null != contentInset) {
      top = contentInset.top;
      const tmp2 = contentInset;
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
  let obj3 = arg1(dependencyMap[24]);
  const recentlyActiveChannelsEnabled = obj3.useRecentlyActiveChannelsEnabled();
  const FavoriteChannels = recentlyActiveChannelsEnabled;
  const tmp16 = importDefault(dependencyMap[25])(guild.id);
  let obj4 = arg1(dependencyMap[26]);
  const optInEnabledForGuild = obj4.useOptInEnabledForGuild(guild.id);
  let obj5 = arg1(dependencyMap[27]);
  const guildLiveChannelNoticeInfo = obj5.useGuildLiveChannelNoticeInfo(guild.id);
  let obj6 = arg1(dependencyMap[28]);
  const scaledLiveChannelNoticeHeight = obj6.getScaledLiveChannelNoticeHeight(fontScale, guildLiveChannelNoticeInfo);
  function useDrawerAwareScrollToTop(ref) {
    const contentInset = ref;
    const navigation = contentInset(guild[10]).useNavigation();
    const gameClaimMarkAsDismissed = navigation;
    const items = [navigation, ref];
    const effect = selectedChannelId.useEffect(() => {
      let closure_0 = -1;
      const navigation = navigation.addListener("tabPress", (arg0) => {
        let v1 = arg0;
        if (null != obj.coerceGuildsRoute(callback(closure_2[12])())) {
          if (-1 === v1) {
            const _clearTimeout2 = clearTimeout;
            clearTimeout(v1);
            const _setTimeout = setTimeout;
            v1 = setTimeout(() => {
              clearTimeout(closure_0);
              closure_0 = -1;
              closure_0 = focused.isFocused();
              const animationFrame = requestAnimationFrame(() => { ... });
            }, 300);
          } else {
            const _clearTimeout = clearTimeout;
            clearTimeout(v1);
            v1 = -1;
          }
        }
      });
      return () => {
        callback();
      };
    }, items);
  }(ref);
  const items4 = [guildChannels, sections, tmp];
  callback4 = importAllResult.useCallback((arg0) => {
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
      tmp7 = !contentInset(guild[30]).getChannelListSectionHasFooterDivider(guildChannels, tmp2, tmp);
      const obj = contentInset(guild[30]);
    }
    return tmp7;
  }, items4);
  const items5 = [guildChannels, fontScale, tmp16, scaledLiveChannelNoticeHeight, listViewportHeight, tmp];
  const items6 = [guildChannels, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication];
  const callback5 = importAllResult.useCallback((section, row) => {
    let obj = contentInset(guild[30]);
    obj = { guildChannels, section, row, fontScale, voiceStates: tmp16, liveChannelNoticeHeight: scaledLiveChannelNoticeHeight, listViewportHeight, isRefreshEnabled: tmp };
    const channelListItemSize = obj.getChannelListItemSize(obj);
    return gameClaimMarkAsDismissed(guild[31])(channelListItemSize);
  }, items5);
  const items7 = [guildChannels, fontScale, callback4];
  const callback6 = importAllResult.useCallback((section, row) => {
    let obj = {};
    obj = { guildChannels, section, row, selectedChannelId, guild, gameClaimMarkAsDismissed, applicationAccountLinkMarkAsDismissed, startApplicationAccountLinkAuthorization, accountLinkApplication };
    obj.children = contentInset(guild[30]).renderChannelListItem(obj);
    return bannerWidth(selectedVoiceChannelId, obj);
  }, items6);
  const items8 = [guildChannels, recentlyActiveChannelsEnabled, callback4, categoryStyles, tmp];
  const callback7 = importAllResult.useCallback((section) => {
    const channelListSectionHeaderSize = contentInset(guild[30]).getChannelListSectionHeaderSize(guildChannels, section, fontScale, callback4(section));
    return gameClaimMarkAsDismissed(guild[31])(channelListSectionHeaderSize);
  }, items7);
  const items9 = [guildChannels, optInEnabledForGuild, tmp16, selectedChannelId, selectedVoiceChannelId, tmp];
  const callback8 = importAllResult.useCallback((recentsSectionNumber) => {
    let obj = contentInset(guild[30]);
    obj = { children: obj.renderChannelListSectionHeader(guildChannels, recentsSectionNumber, recentlyActiveChannelsEnabled, callback4(recentsSectionNumber), categoryStyles, tmp) };
    return bannerWidth(selectedVoiceChannelId, obj);
  }, items8);
  const items10 = [guildChannels, optInEnabledForGuild, tmp16, selectedChannelId, selectedVoiceChannelId, tmp];
  const callback9 = importAllResult.useCallback((section) => {
    let obj = contentInset(guild[30]);
    obj = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: tmp16, selectedChannelId, selectedVoiceChannelId };
    const result = obj.calculateVoiceSummary(obj);
    const channelListSectionFooterSize = contentInset(guild[30]).getChannelListSectionFooterSize(guildChannels, section, result, tmp);
    return gameClaimMarkAsDismissed(guild[31])(channelListSectionFooterSize);
  }, items9);
  const items11 = [sections];
  const callback10 = importAllResult.useCallback((section) => {
    let obj = contentInset(guild[30]);
    obj = { guildChannels, section, optInChannelsEnabled: optInEnabledForGuild, voiceStates: tmp16, selectedChannelId, selectedVoiceChannelId };
    const result = obj.calculateVoiceSummary(obj);
    obj = { children: contentInset(guild[30]).renderChannelListSectionFooter(guildChannels, section, ref, result, tmp) };
    return bannerWidth(selectedVoiceChannelId, obj);
  }, items10);
  const items12 = [guildChannels];
  const memo1 = importAllResult.useMemo(() => 0 === sections.reduce((arg0, arg1) => arg0 + arg1, 0), items11);
  const callback11 = importAllResult.useCallback((arg0, section, row) => contentInset(guild[30]).getFastListRecyclerKey(guildChannels, arg0, section, row), items12);
  const context = importAllResult.useContext(importDefault(dependencyMap[32]));
  let obj7 = arg1(dependencyMap[33]);
  const youBarTotalHeight = obj7.useYouBarTotalHeight(16);
  const externalScrollEventHandler = obj1.useExternalScrollEventHandler({ id: guild.id });
  const youBarTotalHeight1 = arg1(dependencyMap[33]).useYouBarTotalHeight(-16);
  obj = {};
  const obj9 = arg1(dependencyMap[33]);
  const tmp33 = bannerWidth;
  obj.profile = arg1(dependencyMap[36]).Profiles.Channels;
  obj = {};
  obj1 = { style: memo };
  obj2 = { offsetX: bannerHeight, offsetY: importDefault(dependencyMap[35])().top, parentSpringTranslateX: importAllResult.useContext(arg1(dependencyMap[34]).HomeDrawerStateContext).panelSpringTranslateX };
  const items13 = [bannerWidth(importDefault(dependencyMap[38]), obj2), , ];
  obj3 = { pointerEvents: "none", style: tmp2.panelTint };
  items13[1] = bannerWidth(View, obj3);
  obj4 = { style: tmp2.listWrapper };
  const items14 = [bannerWidth(importDefault(dependencyMap[39]), { guild }), ];
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
    obj6.initialScrollSection = getInitialPosition(guildChannels, selectedChannelId, "section");
    obj6.initialScrollItem = getInitialPosition(guildChannels, selectedChannelId, "item");
    obj6.initialScrollOrientation = "center";
    obj6.onScroll = callback;
    obj6.onScrollWorklet = externalScrollEventHandler;
    tmp38Result = tmp38(tmp39(tmp40[41]), obj6, guild.id);
    const tmp39Result = tmp39(tmp40[41]);
  }
  items14[1] = tmp38Result;
  obj4.children = items14;
  items13[2] = headerHeight(View, obj4);
  obj1.children = items13;
  obj.children = headerHeight(View, obj1);
  obj.children = bannerWidth(arg1(dependencyMap[37]).LayerScope, obj);
  return tmp33(importDefault(dependencyMap[36]), obj);
});
const obj2 = arg1(dependencyMap[13]);
const memoResult = importAllResult.memo((arg0) => {
  let obj = {};
  obj = {};
  const merged = Object.assign(arg0);
  const items = [callback2(ChannelsWrapper, obj), callback2(arg1(dependencyMap[52]).TTIFirstContentfulPaint, {})];
  obj.children = items;
  return callback3(closure_16, obj);
});
const result = arg1(dependencyMap[53]).fileFinishedImporting("modules/channel_list_v2/native/RedesignChannelList.tsx");

export default memoResult;
