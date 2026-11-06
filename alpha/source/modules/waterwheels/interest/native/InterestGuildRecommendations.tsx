// Module ID: 19888
// Function ID: 19889
// Name: InterestGuildRecommendations
// Dependencies: [32, 19, 17, 5021, 1072, 21, 7089, 5170, 575, 5781, 1113, 18711, 5754, 1411, 7068, 2534, 5404, 19889, 9611, 7045, 6185, 9405, 5033, 7461, 19892, 504, 18710, 1252, 7095, 19893, 7378, 9918, 1652, 19894, 5788, 2]
// Exports: default

// Module 19888 (InterestGuildRecommendations)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import _modDef2534 from "module_2534" /* 2534 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import Text_Text from "Text/Text" /* 5781 */;
import GuildIconDefault from "GuildIcon" /* 7045 */;
import GuildBadgeV2Default from "GuildBadgeV2" /* 9405 */;
import ClipViewDefault from "ClipView" /* 9611 */;
import InterestGhostDefault from "InterestGhost" /* 18711 */;
import InterestGuildProfileSheetDefault from "InterestGuildProfileSheet" /* 19889 */;
import InterestGuildJoinButtonDefault from "InterestGuildJoinButton" /* 19892 */;
import InterestGuildActions from "InterestGuildActions" /* 19893 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildMembershipStore from "GuildMembershipStore" /* 5021 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import NavigatorHeader from "NavigatorHeader" /* 7089 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj16;
let obj17;
let obj18;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let size;
let size1;
let size2;
let size3;
let size4;
let size5;
let unpackModuleId;
function InterestGuildSkeleton() {
  let closure_0;
  let intl;
  let obj2;
  _require = closure_13();
  let obj = { accessible: true, accessibilityLabel: intl.string(require("intl").t.ZTNur7), accessibilityState: { busy: true }, children: closure_9(View, obj2) };
  intl = require("intl").intl;
  obj2 = {
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: Array.from({ length: 6 }, (arg0, arg1) => {
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let obj12;
      let obj14;
      let obj8;
      const obj3 = { style: closure_0.profile, children: items };
      items = [, ];
      const obj = { style: closure_0.row, children: items5 };
      const obj2 = { style: closure_0.rowHeader, children: items4 };
      const obj4 = { style: closure_0.skeletonIcon };
      items[0] = React4(InterestGhostDefault, obj4);
      const obj5 = { style: closure_0.details, children: items2 };
      const obj6 = { style: closure_0.skeletonNameFrame, children: React4(InterestGhostDefault, { style: items1 }) };
      items1 = [closure_0.skeletonLine, arg1 % 2 === 0 ? closure_0.skeletonName : closure_0.skeletonShortName];
      items2 = [React4(View, obj6), ];
      const obj7 = { style: closure_0.skeletonCountFrame, children: React4(InterestGhostDefault, obj8) };
      obj8 = { style: items3 };
      items3 = [, ];
      ({ skeletonLine: arr4[0], skeletonCount: arr4[1] } = closure_0);
      items2[1] = React4(View, obj7);
      items[1] = authStore(View, obj5);
      items4 = [authStore(View, obj3), ];
      const obj9 = { style: closure_0.skeletonButton };
      items4[1] = React4(InterestGhostDefault, obj9);
      items5 = [authStore(View, obj2), ];
      const obj10 = { children: items7 };
      const obj11 = { style: closure_0.skeletonDescriptionFrame, children: React4(InterestGhostDefault, obj12) };
      obj12 = { style: items6 };
      items6 = [, ];
      ({ skeletonLine: arr7[0], skeletonDescription: arr7[1] } = closure_0);
      items7 = [React4(View, obj11), ];
      const obj13 = { style: closure_0.skeletonDescriptionFrame, children: React4(InterestGhostDefault, obj14) };
      obj14 = { style: items8 };
      items8 = [, ];
      ({ skeletonLine: arr9[0], skeletonShortDescription: arr9[1] } = closure_0);
      items7[1] = React4(View, obj13);
      items5[1] = authStore(View, obj10);
      return authStore(View, obj, arg1);
    })
  };
  return closure_9(View, obj);
}
function ProgressiveGuildRows(arg0) {
  let c3;
  let guilds;
  let onJoinResult;
  let onJoinTapped;
  let onProfileOpened;
  let require;
  let substr;
  let tmp2;
  ({ guilds, onJoinTapped: require, onProfileOpened: importDefault, onJoinResult: dependencyMap } = arg0);
  _slicedToArray = undefined;
  [tmp2, c3] = react.useState(5);
  _slicedToArray(react.useState(5), 2);
  const effect = react.useEffect(() => {
    let closure_0;
    let closure_1;
    const timeout = setTimeout(() => closure_1_3(10), 80);
    const timeout2 = setTimeout(() => closure_1_3(15), 160);
    return () => {
      clearTimeout(closure_0);
      clearTimeout(closure_1);
    };
  }, []);
  let obj = {
    children: substr.map((guild, rowPosition) => {
      const obj = { guild, rowPosition, onJoinTapped: require, onProfileOpened: importDefault, onJoinResult: dependencyMap };
      return React4(closure_15, obj, guild.id);
    })
  };
  substr = guilds.slice(0, tmp2);
  return closure_9(closure_11, obj);
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ AnalyticEvents: metroImportDefault, GuildFeatures: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
const headerBackButton = NavigatorHeader.getHeaderBackButton();
let createStyles = createStyles_mod;
let obj = { screen: obj2, header: obj3, content: obj4, intro: obj5, completion: obj6, guildIcon: size, guildIconImage: obj7, centered: { textAlign: "center" }, row: obj8, joinSpace: obj9, joinTarget: rect, rowHeader: obj10, profile: obj11, details: { flex: 1, minWidth: 0 }, name: obj12, nameText: { flexShrink: 1 }, badge: size1, online: obj13, dot: size2, empty: obj14, skeletonIcon: size3, skeletonNameFrame: obj15, skeletonCountFrame: obj16, skeletonDescriptionFrame: obj17, skeletonLine: obj18, skeletonName: { width: "72%" }, skeletonShortName: { width: "56%" }, skeletonCount: size4, skeletonDescription: { width: "96%" }, skeletonShortDescription: { width: "78%" }, skeletonButton: size5 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { height: nativeDefault.space.PX_64, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
obj5 = { alignItems: "center", paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
obj6 = { color: nativeDefault.colors.TEXT_BRAND };
size = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40, overflow: "hidden" };
obj7 = { borderRadius: nativeDefault.radii.none };
obj8 = { paddingVertical: nativeDefault.space.PX_16, borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, gap: nativeDefault.space.PX_8 };
obj9 = { width: nativeDefault.space.PX_64 + nativeDefault.space.PX_8 };
rect = { position: "absolute", right: 0, top: nativeDefault.space.PX_24 };
obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj11 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, minHeight: nativeDefault.space.PX_48 };
obj12 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, marginRight: 0 };
obj13 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
size2 = { width: nativeDefault.space.PX_6, height: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
obj14 = { alignItems: "center", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_32 };
size3 = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40, borderRadius: nativeDefault.radii.sm };
obj15 = { height: Text_Text.TextStyleSheet["body-md/semibold"].lineHeight, justifyContent: "center" };
obj16 = { height: Text_Text.TextStyleSheet["body-xs/medium"].lineHeight, justifyContent: "center" };
obj17 = { height: Text_Text.TextStyleSheet["body-sm/normal"].lineHeight, justifyContent: "center" };
obj18 = { height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round };
size4 = { width: "40%", height: nativeDefault.space.PX_8 };
size5 = { width: nativeDefault.space.PX_64 + nativeDefault.space.PX_8, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.modules.button.BORDER_RADIUS };
let closure_13 = createStyles(obj);
let closure_15 = react.memo(function InterestGuildRow(guild) {
  let constructFromPartialGuildRecord;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj10;
  let obj16;
  let obj20;
  let obj45;
  let tmp12;
  guild = guild.guild;
  ({ rowPosition: importDefault, onJoinTapped: dependencyMap, onProfileOpened: _slicedToArray, onJoinResult: react } = guild);
  const tmp = closure_13();
  let tmp2 = guild;
  let obj = guild(5754);
  const token = obj.useToken(nativeDefault.modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS);
  let obj2 = guild(5754);
  const token1 = obj2.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const obj3 = AvatarUtilsDefault;
  const obj4 = { id: guild.id, icon: guild.icon, size: 40 };
  const guildIconURL = obj3.getGuildIconURL(obj4);
  const obj5 = {
    accessibilityRole: "button",
    accessibilityLabel: guild.name,
    accessibilityHint: intl.string(_modDef2534.nkweXX),
    onPress: function openProfile() {
      let user;
      _slicedToArray(guild.id, importDefault);
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const obj = { default: InterestGuildProfileSheetDefault };
      const resolved = Promise.resolve(obj);
      const obj2 = {
        guildId: guild.id,
        guildName: guild.name,
        onJoinTapped() {
          return closure_1_2(user.id, closure_1_1, "profile_sheet");
        },
        onJoinResult(arg0) {
          return closure_1_4(user.id, arg0);
        }
      };
      openLazy(resolved, "GuildProfileActionSheet:" + guild.id, obj2);
    },
    style: tmp.row,
    children: items6
  };
  const PressableHighlight = guild(7068).PressableHighlight;
  intl = guild(1113).intl;
  const obj6 = { style: tmp.rowHeader, children: items5 };
  const obj7 = { style: tmp.profile, children: items1 };
  const obj8 = { style: items, children: closure_9(tmp12, obj10) };
  items = [tmp.guildIcon, ];
  const obj9 = { borderRadius: token * nativeDefault.space.PX_40 / token1 };
  items[1] = obj9;
  const tmp11 = ClipViewDefault;
  obj10 = { icon: guildIconURL, value: guild.name, size: guild(7045).GuildIconSizes.NORMAL, selected: false, style: tmp.guildIconImage };
  tmp12 = GuildIconDefault;
  items1 = [closure_9(tmp11, obj8), ];
  const obj11 = { style: tmp.details, spacing: nativeDefault.space.PX_0, children: items3 };
  const Stack = guild(6185).Stack;
  const obj12 = { style: tmp.name, children: items2 };
  items2 = [, , ];
  const obj13 = { style: tmp.nameText, variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: guild.name };
  items2[0] = closure_9(guild(5781).Text, obj13);
  const features = guild.features;
  let hasItem = features.includes(constants2.VERIFIED);
  const tmp13 = constants2;
  if (!hasItem) {
    const features2 = guild.features;
    hasItem = features2.includes(tmp13.PARTNERED);
  }
  if (hasItem) {
    const obj14 = { guild: constructFromPartialGuildRecord(obj16), style: tmp.badge };
    obj16 = { id: null, name: null, icon: null, features: set };
    ({ id: obj15.id, name: obj15.name, icon: obj15.icon } = guild);
    const _Set = Set;
    const self = this;
    const self2 = this;
    const tmp4Result = GuildBadgeV2Default;
    constructFromPartialGuildRecord = tmp2(5033).constructFromPartialGuildRecord;
    tmp2(5033);
    set = new Set(guild.features);
    hasItem = tmp10(tmp4Result, obj14);
  }
  items2[1] = hasItem;
  items2[2] = closure_9(tmp2(7461).ChevronSmallRightIcon, { size: "xxs", accessible: false });
  items3 = [closure_10(View, obj12), ];
  const obj17 = { style: tmp.online, children: items4 };
  items4 = [, ];
  const obj18 = { style: tmp.dot };
  items4[0] = closure_9(View, obj18);
  const obj19 = { variant: "body-xs/medium", color: "text-muted", children: intl2.format(tmp2(1113).t["LC+S+m"], obj20) };
  const Text = tmp2(5781).Text;
  intl2 = tmp2(1113).intl;
  obj20 = { membersOnline: guild.approximate_presence_count };
  items4[1] = closure_9(Text, obj19);
  items3[1] = closure_10(View, obj17);
  items1[1] = closure_10(Stack, obj11);
  items5 = [closure_10(View, obj7), ];
  const obj21 = { style: tmp.joinSpace };
  items5[1] = closure_9(View, obj21);
  items6 = [closure_10(View, obj6), ];
  let tmp10Result = null != guild.description && "" !== guild.description;
  if (tmp10Result) {
    const obj22 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: guild.description };
    tmp10Result = tmp10(tmp2(5781).Text, obj22);
  }
  const obj23 = { children: items7 };
  items6[1] = tmp10Result;
  items7 = [closure_10(PressableHighlight, obj5), ];
  const obj24 = { style: tmp.joinTarget, children: closure_9(InterestGuildJoinButtonDefault, obj45) };
  obj45 = {
    guildId: guild.id,
    guildName: guild.name,
    onJoinTapped() {
      return dependencyMap(guild.id, importDefault, "row");
    },
    onJoinResult(arg0) {
      return react(guild.id, arg0);
    }
  };
  items7[1] = closure_9(View, obj24);
  return closure_10(View, obj23);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildRecommendations.tsx");

export default function InterestGuildRecommendations(analyticsContext) {
  let intl;
  let intl2;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items10;
  let items6;
  let items7;
  let items8;
  let items9;
  let onScroll;
  let scrollY;
  analyticsContext = analyticsContext.analyticsContext;
  const gameIds = analyticsContext.gameIds;
  const resource = analyticsContext.resource;
  ({ onBack: _slicedToArray, onComplete: react } = analyticsContext);
  let ref;
  let tmp = closure_13();
  let obj = react;
  const syncExternalStore = react.useSyncExternalStore(resource.subscribe, resource.getSnapshot);
  let tmp3 = analyticsContext;
  let obj2 = analyticsContext(resource[25]);
  let items = [ref];
  const items1 = [syncExternalStore.guilds];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let member;
    const guilds = syncExternalStore.guilds;
    return guilds.some((id) => member.isMember(id.id));
  }, items1);
  const obj3 = analyticsContext(resource[26]);
  const interestScrollHeader = obj3.useInterestScrollHeader();
  ({ scrollY, onScroll } = interestScrollHeader);
  ref = react.useRef(0);
  const effect = react.useEffect(() => {
    ref.current = Date.now();
  }, []);
  const ref2 = react.useRef(false);
  const ref3 = react.useRef(null);
  let str = "error";
  if (!syncExternalStore.failed) {
    let str2 = "loaded";
    if ("ready" !== syncExternalStore.status) {
      let str4 = "loading";
      if ("unavailable" === syncExternalStore.status) {
        str4 = "empty";
      }
      str2 = str4;
    }
    str = str2;
  }
  const items2 = [analyticsContext, gameIds.length, syncExternalStore, str];
  function handleBack() {
    const obj = AnalyticsUtilsDefault;
    obj.track(metroImportDefault.WATERWHEELS_INTEREST_SERVERS_BACK, analyticsContext);
    _slicedToArray();
  }
  const effect1 = obj.useEffect(() => {
    let tmp2 = "loading" !== str;
    const tmp = str;
    if (tmp2) {
      tmp2 = ref3.current !== syncExternalStore;
    }
    if (tmp2) {
      ref3.current = syncExternalStore;
      const obj = { pick_count: gameIds.length, recommendation_count: syncExternalStore.guilds.length, load_state: tmp };
      const track = AnalyticsUtilsDefault.track;
      const WATERWHEELS_INTEREST_SERVERS_VIEWED = metroImportDefault.WATERWHEELS_INTEREST_SERVERS_VIEWED;
      AnalyticsUtilsDefault;
      const merged = Object.assign(analyticsContext);
      track(WATERWHEELS_INTEREST_SERVERS_VIEWED, obj);
    }
  }, items2);
  const tmp3Result = tmp3(resource[28]);
  tmp3Result.useNavigatorBackPressHandler(() => {
    const obj = AnalyticsUtilsDefault;
    obj.track(metroImportDefault.WATERWHEELS_INTEREST_SERVERS_BACK, analyticsContext);
    _slicedToArray();
    return true;
  });
  const items3 = [analyticsContext, gameIds];
  const items4 = [analyticsContext];
  const callback = obj.useCallback((guild_id, row_position, source) => {
    let items;
    const obj = { guild_id, row_position, pick_ids: items, source };
    const track = AnalyticsUtilsDefault.track;
    const WATERWHEELS_INTEREST_SERVERS_JOIN_TAPPED = metroImportDefault.WATERWHEELS_INTEREST_SERVERS_JOIN_TAPPED;
    AnalyticsUtilsDefault;
    const merged = Object.assign(analyticsContext);
    items = [...gameIds];
    track(WATERWHEELS_INTEREST_SERVERS_JOIN_TAPPED, obj);
  }, items3);
  const items5 = [analyticsContext];
  const callback1 = obj.useCallback((guild_id, row_position) => {
    const obj = { guild_id, row_position };
    const track = AnalyticsUtilsDefault.track;
    const WATERWHEELS_INTEREST_SERVERS_PROFILE_OPENED = metroImportDefault.WATERWHEELS_INTEREST_SERVERS_PROFILE_OPENED;
    AnalyticsUtilsDefault;
    const merged = Object.assign(analyticsContext);
    track(WATERWHEELS_INTEREST_SERVERS_PROFILE_OPENED, obj);
  }, items4);
  const obj4 = { style: tmp.screen, children: items7 };
  const callback2 = obj.useCallback((guild_id, result) => {
    let tmp3;
    const obj = { guild_id, success: tmp3, result };
    const track = AnalyticsUtilsDefault.track;
    const WATERWHEELS_INTEREST_SERVERS_JOIN_RESULT = metroImportDefault.WATERWHEELS_INTEREST_SERVERS_JOIN_RESULT;
    AnalyticsUtilsDefault;
    const merged = Object.assign(analyticsContext);
    tmp3 = null;
    if ("pending" !== result) {
      tmp3 = "joined" === result;
    }
    track(WATERWHEELS_INTEREST_SERVERS_JOIN_RESULT, obj);
  }, items5);
  const obj5 = { style: tmp.header, children: items6 };
  const obj6 = { accessibilityLabel: intl.string(tmp3(resource[10]).t["13/7kX"]), onPress: handleBack };
  const SafeAreaPaddingView = tmp3(tmp4[30]).SafeAreaPaddingView;
  intl = tmp3(tmp4[10]).intl;
  items6 = [str(closure_12, obj6), , ];
  const obj7 = { title: intl2.string(gameIds(resource[15])["mdhU/Q"]), scrollY };
  const InterestCompactTitle = tmp3(tmp4[26]).InterestCompactTitle;
  intl2 = tmp3(tmp4[10]).intl;
  items6[1] = str(InterestCompactTitle, obj7);
  const HeaderTextButton = tmp3(tmp4[31]).HeaderTextButton;
  const intl3 = tmp3(tmp4[10]).intl;
  const string = intl3.string;
  const t = tmp3(tmp4[10]).t;
  function handleComplete() {
    let member;
    let obj2;
    let tmp11;
    if (!ref2.current) {
      tmp.current = true;
      const guilds = syncExternalStore.guilds;
      const found = guilds.filter((id) => member.isMember(id.id));
      const mapped = found.map((id) => id.id);
      const obj = { joined_count: mapped.length, joined_guild_ids: mapped, pending_join_count: obj2.getInterestGuildJoinsInFlight().length, recommendations_loading: tmp11, recommendations_failed: syncExternalStore.failed, duration_ms: Math.max(0, Date.now() - ref.current) };
      const track = AnalyticsUtilsDefault.track;
      const WATERWHEELS_INTEREST_SERVERS_COMPLETE = metroImportDefault.WATERWHEELS_INTEREST_SERVERS_COMPLETE;
      AnalyticsUtilsDefault;
      const merged = Object.assign(analyticsContext);
      const _Math = Math;
      const _Date = Date;
      obj2 = InterestGuildActions;
      tmp11 = "loading" === syncExternalStore.status || "idle" === tmp2.status;
      track(WATERWHEELS_INTEREST_SERVERS_COMPLETE, obj);
      react();
    }
  }
  const obj8 = { top: true, children: closure_10(syncExternalStore, obj5) };
  const obj9 = { label: string(stateFromStores ? t.i4jeWR : t["5Wxrcd"]), labelStyle: tmp.completion, onPress: handleComplete };
  items6[2] = str(HeaderTextButton, obj9);
  items7 = [tmp15(SafeAreaPaddingView, obj8), ];
  const obj10 = { contentContainerStyle: tmp.content, onScroll, scrollEventThrottle: 16, children: items9 };
  const obj11 = { style: tmp.intro, children: items8 };
  const ScrollView = tmp16(tmp4[32]).ScrollView;
  const obj12 = { variant: "heading-xl/semibold", color: "text-strong", children: intl4.string(gameIds(resource[15]).TQdfcH) };
  const Heading = tmp3(tmp4[9]).Heading;
  intl4 = tmp3(tmp4[10]).intl;
  items8 = [tmp15(Heading, obj12), ];
  const obj13 = { variant: "body-sm/normal", color: "text-default", style: tmp.centered, children: intl5.string(gameIds(resource[15])["G++b7J"]) };
  const Text = tmp3(tmp4[9]).Text;
  intl5 = tmp3(tmp4[10]).intl;
  items8[1] = str(Text, obj13);
  items9 = [tmp13(tmp14, obj11), , , , ];
  let tmp15Result = gameIds.length > 0;
  if (tmp15Result) {
    const obj14 = { gameIds };
    tmp15Result = tmp15(tmp16(tmp4[33]), obj14);
  }
  items9[1] = tmp15Result;
  let tmp15Result3 = syncExternalStore.guilds.length > 0;
  if (tmp15Result3) {
    const obj15 = { guilds: syncExternalStore.guilds, onJoinTapped: callback, onProfileOpened: callback1, onJoinResult: callback2 };
    tmp15Result3 = tmp15(ProgressiveGuildRows, obj15, syncExternalStore.key);
  }
  items9[2] = tmp15Result3;
  items9[3] = 0 === syncExternalStore.guilds.length && "loading" === syncExternalStore.status && str(InterestGuildSkeleton, {});
  let tmp13Result = 0 === syncExternalStore.guilds.length && "loading" !== syncExternalStore.status;
  const tmp15Result4 = 0 === syncExternalStore.guilds.length && "loading" === syncExternalStore.status && str(InterestGuildSkeleton, {});
  if (tmp13Result) {
    const obj16 = { style: tmp.empty, children: items10 };
    const obj17 = { variant: "heading-sm/semibold", color: "text-strong", children: intl6.string(gameIds(resource[15]).rtXXRe) };
    const Heading2 = tmp3(tmp4[9]).Heading;
    intl6 = tmp3(tmp4[10]).intl;
    items10 = [tmp15(Heading2, obj17), , , ];
    const obj18 = { variant: "body-sm/normal", color: "text-muted", style: tmp.centered, children: intl7.string(gameIds(resource[15]).A3YsGV) };
    const Text2 = tmp3(tmp4[9]).Text;
    intl7 = tmp3(tmp4[10]).intl;
    items10[1] = str(Text2, obj18);
    const obj19 = {
      variant: "secondary",
      size: "sm",
      text: intl8.string(gameIds(resource[15]).uGhymA),
      onPress: function handleRetry() {
          const obj = { load_state: str };
          const track = AnalyticsUtilsDefault.track;
          const WATERWHEELS_INTEREST_SERVERS_RETRY = metroImportDefault.WATERWHEELS_INTEREST_SERVERS_RETRY;
          AnalyticsUtilsDefault;
          const merged = Object.assign(analyticsContext);
          track(WATERWHEELS_INTEREST_SERVERS_RETRY, obj);
          resource.retry();
        }
    };
    const Button = tmp3(tmp4[34]).Button;
    intl8 = tmp3(tmp4[10]).intl;
    items10[2] = str(Button, obj19);
    const obj20 = { label: intl9.string(tmp3(resource[10]).t.i4jeWR), labelStyle: tmp.completion, onPress: handleComplete };
    const HeaderTextButton2 = tmp3(tmp4[31]).HeaderTextButton;
    intl9 = tmp3(tmp4[10]).intl;
    items10[3] = str(HeaderTextButton2, obj20);
    tmp13Result = tmp13(tmp14, obj16);
  }
  items9[4] = tmp13Result;
  items7[1] = closure_10(ScrollView, obj10);
  return closure_10(syncExternalStore, obj4);
};
