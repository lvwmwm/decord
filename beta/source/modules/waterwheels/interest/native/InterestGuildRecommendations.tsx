// Module ID: 20011
// Function ID: 20012
// Name: InterestGuildRecommendations
// Dependencies: [32, 19, 17, 5021, 1072, 21, 7097, 5170, 575, 5783, 1113, 18809, 5756, 1411, 7076, 2534, 5406, 20012, 9626, 7053, 6191, 9420, 5033, 7471, 20015, 504, 18806, 18807, 1252, 7103, 7388, 9935, 20016, 1652, 20017, 5790, 2]
// Exports: default

// Module 20011 (InterestGuildRecommendations)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import _modDef2534 from "module_2534" /* 2534 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import Text_Text from "Text/Text" /* 5783 */;
import GuildIconDefault from "GuildIcon" /* 7053 */;
import GuildBadgeV2Default from "GuildBadgeV2" /* 9420 */;
import ClipViewDefault from "ClipView" /* 9626 */;
import InterestGhostDefault from "InterestGhost" /* 18809 */;
import InterestGuildProfileSheetDefault from "InterestGuildProfileSheet" /* 20012 */;
import InterestGuildJoinButtonDefault from "InterestGuildJoinButton" /* 20015 */;
import InterestGuildActions from "InterestGuildActions" /* 20016 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildMembershipStore from "GuildMembershipStore" /* 5021 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import NavigatorHeader from "NavigatorHeader" /* 7097 */;
import createStyles from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
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
  let c4;
  let guilds;
  let onJoinResult;
  let onJoinTapped;
  let onProfileOpened;
  let onRowLayout;
  let require;
  let substr;
  let tmp2;
  ({ guilds, onRowLayout: require, onJoinTapped: importDefault, onProfileOpened: dependencyMap, onJoinResult: _slicedToArray } = arg0);
  react = undefined;
  [tmp2, c4] = react.useState(5);
  _slicedToArray(react.useState(5), 2);
  const effect = react.useEffect(() => {
    let closure_0;
    let closure_1;
    const timeout = setTimeout(() => closure_1_4(10), 80);
    const timeout2 = setTimeout(() => closure_1_4(15), 160);
    return () => {
      clearTimeout(closure_0);
      clearTimeout(closure_1);
    };
  }, []);
  let obj = {
    children: substr.map((guild, rowPosition) => {
      const obj = { guild, rowPosition, onRowLayout: require, onJoinTapped: importDefault, onProfileOpened: dependencyMap, onJoinResult: _slicedToArray };
      return React4(closure_15, obj, guild.id);
    })
  };
  substr = guilds.slice(0, tmp2);
  return closure_9(closure_11, obj);
}
let react = react_mod;
const View = react_native.View;
({ AnalyticEvents: metroImportDefault, GuildFeatures: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
const headerBackButton = NavigatorHeader.getHeaderBackButton();
let closure_13 = createStyles.createStyles(() => {
  let rect;
  let size1;
  let size2;
  let size3;
  let size4;
  let size5;
  let PX_64 = arg0;
  if (arg0 === undefined) {
    PX_64 = nativeDefault.space.PX_64;
  }
  const obj = { screen: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, header: { height: nativeDefault.space.PX_64, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, navLeading: { minWidth: PX_64, flexShrink: 0, alignItems: "flex-start" }, navTrailing: { minWidth: PX_64, flexShrink: 0, alignItems: "flex-end" }, content: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 }, intro: { alignItems: "center", paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 }, completion: { color: nativeDefault.colors.TEXT_BRAND }, guildIcon: size, guildIconImage: { borderRadius: nativeDefault.radii.none }, centered: { textAlign: "center" }, row: { paddingVertical: nativeDefault.space.PX_16, borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, gap: nativeDefault.space.PX_8 }, joinSpace: { width: nativeDefault.space.PX_64 + nativeDefault.space.PX_8 }, joinTarget: rect, rowHeader: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 }, profile: { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, minHeight: nativeDefault.space.PX_48 }, details: { flex: 1, minWidth: 0 }, name: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, nameText: { flexShrink: 1 }, badge: size1, online: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, dot: size2, empty: { alignItems: "center", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_32 }, skeletonIcon: size3, skeletonNameFrame: { height: Text_Text.TextStyleSheet["body-md/semibold"].lineHeight, justifyContent: "center" }, skeletonCountFrame: { height: Text_Text.TextStyleSheet["body-xs/medium"].lineHeight, justifyContent: "center" }, skeletonDescriptionFrame: { height: Text_Text.TextStyleSheet["body-sm/normal"].lineHeight, justifyContent: "center" }, skeletonLine: { height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round }, skeletonName: { width: "72%" }, skeletonShortName: { width: "56%" }, skeletonCount: size4, skeletonDescription: { width: "96%" }, skeletonShortDescription: { width: "78%" }, skeletonButton: size5 };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ height: nativeDefault.space.PX_64, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" });
  ({ paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 });
  ({ alignItems: "center", paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 });
  ({ color: nativeDefault.colors.TEXT_BRAND });
  size = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40, overflow: "hidden" };
  ({ borderRadius: nativeDefault.radii.none });
  ({ paddingVertical: nativeDefault.space.PX_16, borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, gap: nativeDefault.space.PX_8 });
  ({ width: nativeDefault.space.PX_64 + nativeDefault.space.PX_8 });
  rect = { position: "absolute", right: 0, top: nativeDefault.space.PX_24 };
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 });
  ({ flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, minHeight: nativeDefault.space.PX_48 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 });
  size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, marginRight: 0 };
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 });
  size2 = { width: nativeDefault.space.PX_6, height: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
  ({ alignItems: "center", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_32 });
  size3 = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40, borderRadius: nativeDefault.radii.sm };
  ({ height: Text_Text.TextStyleSheet["body-md/semibold"].lineHeight, justifyContent: "center" });
  ({ height: Text_Text.TextStyleSheet["body-xs/medium"].lineHeight, justifyContent: "center" });
  ({ height: Text_Text.TextStyleSheet["body-sm/normal"].lineHeight, justifyContent: "center" });
  ({ height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.round });
  size4 = { width: "40%", height: nativeDefault.space.PX_8 };
  size5 = { width: nativeDefault.space.PX_64 + nativeDefault.space.PX_8, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.modules.button.BORDER_RADIUS };
  return obj;
});
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
  let obj11;
  let obj17;
  let obj21;
  let obj45;
  let tmp12;
  guild = guild.guild;
  ({ rowPosition: importDefault, onRowLayout: dependencyMap, onJoinTapped: _slicedToArray, onProfileOpened: react, onJoinResult: View } = guild);
  const tmp = closure_13();
  let tmp2 = guild;
  let obj = guild(5756);
  const token = obj.useToken(nativeDefault.modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS);
  let obj2 = guild(5756);
  const token1 = obj2.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const obj5 = {
    onLayout(arg0) {
      return dependencyMap(importDefault + 1, arg0);
    },
    children: items7
  };
  const obj3 = AvatarUtilsDefault;
  const obj4 = { id: guild.id, icon: guild.icon, size: 40 };
  const guildIconURL = obj3.getGuildIconURL(obj4);
  const obj6 = {
    accessibilityRole: "button",
    accessibilityLabel: guild.name,
    accessibilityHint: intl.string(_modDef2534.nkweXX),
    onPress: function openProfile() {
      let user;
      react(guild.id, importDefault);
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const obj = { default: InterestGuildProfileSheetDefault };
      const resolved = Promise.resolve(obj);
      const obj2 = {
        guildId: guild.id,
        guildName: guild.name,
        onJoinTapped() {
          return closure_1_3(user.id, closure_1_1, "profile_sheet");
        },
        onJoinResult(arg0) {
          return closure_1_5(user.id, arg0);
        }
      };
      openLazy(resolved, "GuildProfileActionSheet:" + guild.id, obj2);
    },
    style: tmp.row,
    children: items6
  };
  const PressableHighlight = guild(7076).PressableHighlight;
  intl = guild(1113).intl;
  const obj7 = { style: tmp.rowHeader, children: items5 };
  const obj8 = { style: tmp.profile, children: items1 };
  const obj9 = { style: items, children: closure_9(tmp12, obj11) };
  items = [tmp.guildIcon, ];
  const obj10 = { borderRadius: token * nativeDefault.space.PX_40 / token1 };
  items[1] = obj10;
  const tmp11 = ClipViewDefault;
  obj11 = { icon: guildIconURL, value: guild.name, size: guild(7053).GuildIconSizes.NORMAL, selected: false, style: tmp.guildIconImage };
  tmp12 = GuildIconDefault;
  items1 = [closure_9(tmp11, obj9), ];
  const obj12 = { style: tmp.details, spacing: nativeDefault.space.PX_0, children: items3 };
  const Stack = guild(6191).Stack;
  const obj13 = { style: tmp.name, children: items2 };
  items2 = [, , ];
  const obj14 = { style: tmp.nameText, variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: guild.name };
  items2[0] = closure_9(guild(5783).Text, obj14);
  const features = guild.features;
  let hasItem = features.includes(constants2.VERIFIED);
  const tmp13 = constants2;
  if (!hasItem) {
    const features2 = guild.features;
    hasItem = features2.includes(tmp13.PARTNERED);
  }
  if (hasItem) {
    const obj15 = { guild: constructFromPartialGuildRecord(obj17), style: tmp.badge };
    obj17 = { id: null, name: null, icon: null, features: set };
    ({ id: obj16.id, name: obj16.name, icon: obj16.icon } = guild);
    const _Set = Set;
    const self = this;
    const self2 = this;
    const tmp4Result = GuildBadgeV2Default;
    constructFromPartialGuildRecord = tmp2(5033).constructFromPartialGuildRecord;
    tmp2(5033);
    set = new Set(guild.features);
    hasItem = tmp10(tmp4Result, obj15);
  }
  items2[1] = hasItem;
  items2[2] = closure_9(tmp2(7471).ChevronSmallRightIcon, { size: "xxs", accessible: false });
  items3 = [closure_10(View, obj13), ];
  const obj18 = { style: tmp.online, children: items4 };
  items4 = [, ];
  const obj19 = { style: tmp.dot };
  items4[0] = closure_9(View, obj19);
  const obj20 = { variant: "body-xs/medium", color: "text-muted", children: intl2.format(tmp2(1113).t["LC+S+m"], obj21) };
  const Text = tmp2(5783).Text;
  intl2 = tmp2(1113).intl;
  obj21 = { membersOnline: guild.approximate_presence_count };
  items4[1] = closure_9(Text, obj20);
  items3[1] = closure_10(View, obj18);
  items1[1] = closure_10(Stack, obj12);
  items5 = [closure_10(View, obj8), ];
  const obj22 = { style: tmp.joinSpace };
  items5[1] = closure_9(View, obj22);
  items6 = [closure_10(View, obj7), ];
  let tmp10Result = null != guild.description && "" !== guild.description;
  if (tmp10Result) {
    const obj23 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: guild.description };
    tmp10Result = tmp10(tmp2(5783).Text, obj23);
  }
  items6[1] = tmp10Result;
  items7 = [closure_10(PressableHighlight, obj6), ];
  const obj24 = { style: tmp.joinTarget, children: closure_9(InterestGuildJoinButtonDefault, obj45) };
  obj45 = {
    guildId: guild.id,
    guildName: guild.name,
    onJoinTapped() {
      return _slicedToArray(guild.id, importDefault, "row");
    },
    onJoinResult(arg0) {
      return View(guild.id, arg0);
    }
  };
  items7[1] = closure_9(View, obj24);
  return closure_10(View, obj5);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildRecommendations.tsx");

export default function InterestGuildRecommendations(analyticsContext) {
  let HeaderTextButton;
  let _undefined;
  let c6;
  let gameIds;
  let intl;
  let intl2;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items10;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj11;
  let obj18;
  let obj7;
  let onScroll;
  let scrollY;
  let tmp2;
  analyticsContext = analyticsContext.analyticsContext;
  ({ getMaxRowSeen: importDefault, gameIds } = analyticsContext);
  const resource = analyticsContext.resource;
  ({ onBack: react, onComplete: View } = analyticsContext);
  c6 = undefined;
  let obj = react;
  const onRowSeen = analyticsContext.onRowSeen;
  let tmp = resource(react.useState(0), 2);
  [tmp2, c6] = tmp;
  let tmp3 = resource(react.useState(0), 2);
  let closure_7 = tmp3[1];
  const tmp5 = gameIds;
  const tmp6 = closure_13(Math.max(require("native").space.PX_64, tmp2, tmp3[0]));
  const syncExternalStore = react.useSyncExternalStore(resource.subscribe, resource.getSnapshot);
  let obj2 = analyticsContext(gameIds[25]);
  let items = [c6];
  const items1 = [syncExternalStore.guilds];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let member;
    const guilds = syncExternalStore.guilds;
    return guilds.some((id) => member.isMember(id.id));
  }, items1);
  const tmp10 = require("useInterestRowVisibility")(onRowSeen);
  const obj3 = analyticsContext(gameIds[27]);
  const interestScrollHeader = obj3.useInterestScrollHeader(tmp10.onScroll);
  ({ scrollY, onScroll } = interestScrollHeader);
  const ref = react.useRef(0);
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
    react();
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
  const tmp8Result = analyticsContext(tmp5[29]);
  tmp8Result.useNavigatorBackPressHandler(() => {
    const obj = AnalyticsUtilsDefault;
    obj.track(metroImportDefault.WATERWHEELS_INTEREST_SERVERS_BACK, analyticsContext);
    react();
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
  const obj4 = { style: tmp6.screen, children: items7 };
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
  const obj5 = { style: tmp6.header, children: items6 };
  const obj6 = {
    style: tmp6.navLeading,
    onLayout(nativeEvent) {
      return _undefined(nativeEvent.nativeEvent.layout.width);
    },
    children: ref(str, obj7)
  };
  obj7 = { accessibilityLabel: intl.string(analyticsContext(tmp5[10]).t["13/7kX"]), onPress: handleBack };
  const SafeAreaPaddingView = tmp8(tmp5[30]).SafeAreaPaddingView;
  intl = tmp8(tmp5[10]).intl;
  items6 = [ref(View, obj6), , ];
  const obj8 = { title: intl2.string(require("module_2534")["mdhU/Q"]), scrollY };
  const InterestCompactTitle = tmp8(tmp5[27]).InterestCompactTitle;
  intl2 = tmp8(tmp5[10]).intl;
  items6[1] = ref(InterestCompactTitle, obj8);
  const obj9 = {
    style: tmp6.navTrailing,
    onLayout(nativeEvent) {
      return closure_7(nativeEvent.nativeEvent.layout.width);
    },
    children: ref(HeaderTextButton, obj11)
  };
  HeaderTextButton = tmp8(tmp5[31]).HeaderTextButton;
  const intl3 = tmp8(tmp5[10]).intl;
  const string = intl3.string;
  const t = tmp8(tmp5[10]).t;
  const obj10 = { top: true, children: ref2(View, obj5) };
  obj11 = {
    label: string(stateFromStores ? t.i4jeWR : t["5Wxrcd"]),
    labelStyle: tmp6.completion,
    onPress: function handleComplete() {
      let member;
      let obj2;
      let tmp12;
      if (!ref2.current) {
        tmp.current = true;
        const guilds = syncExternalStore.guilds;
        const found = guilds.filter((id) => member.isMember(id.id));
        const mapped = found.map((id) => id.id);
        const obj = { max_row_seen: importDefault(), joined_count: mapped.length, joined_guild_ids: mapped, pending_join_count: obj2.getInterestGuildJoinsInFlight().length, recommendations_loading: tmp12, recommendations_failed: syncExternalStore.failed, duration_ms: Math.max(0, Date.now() - ref.current) };
        const track = AnalyticsUtilsDefault.track;
        const WATERWHEELS_INTEREST_SERVERS_COMPLETE = metroImportDefault.WATERWHEELS_INTEREST_SERVERS_COMPLETE;
        AnalyticsUtilsDefault;
        const merged = Object.assign(analyticsContext);
        const _Math = Math;
        const _Date = Date;
        obj2 = InterestGuildActions;
        tmp12 = "loading" === syncExternalStore.status || "idle" === tmp2.status;
        track(WATERWHEELS_INTEREST_SERVERS_COMPLETE, obj);
        View();
      }
    }
  };
  items6[2] = ref(View, obj9);
  items7 = [ref(SafeAreaPaddingView, obj10), ];
  const obj12 = { contentContainerStyle: tmp6.content, onScroll, onLayout: tmp10.onViewportLayout, scrollEventThrottle: 16, children: items9 };
  const obj13 = { style: tmp6.intro, children: items8 };
  const ScrollView = tmp4(tmp5[33]).ScrollView;
  const obj14 = { variant: "heading-xl/semibold", color: "text-strong", children: intl4.string(require("module_2534").TQdfcH) };
  const Heading = tmp8(tmp5[9]).Heading;
  intl4 = tmp8(tmp5[10]).intl;
  items8 = [ref(Heading, obj14), ];
  const obj15 = { variant: "body-sm/normal", color: "text-default", style: tmp6.centered, lineBreakStrategyIOS: "push-out", textBreakStrategy: "balanced", children: intl5.string(require("module_2534")["G++b7J"]) };
  const Text = tmp8(tmp5[9]).Text;
  intl5 = tmp8(tmp5[10]).intl;
  items8[1] = ref(Text, obj15);
  items9 = [ref2(View, obj13), , , , ];
  let tmp20Result = gameIds.length > 0;
  if (tmp20Result) {
    const obj16 = { gameIds };
    tmp20Result = tmp20(tmp4(tmp5[34]), obj16);
  }
  items9[1] = tmp20Result;
  let tmp20Result3 = syncExternalStore.guilds.length > 0;
  if (tmp20Result3) {
    const obj17 = { onLayout: tmp10.onContentLayout, children: ref(ProgressiveGuildRows, obj18, syncExternalStore.key) };
    obj18 = { guilds: syncExternalStore.guilds, onRowLayout: tmp10.onRowLayout, onJoinTapped: callback, onProfileOpened: callback1, onJoinResult: callback2 };
    tmp20Result3 = tmp20(tmp19, obj17);
  }
  items9[2] = tmp20Result3;
  items9[3] = 0 === syncExternalStore.guilds.length && "loading" === syncExternalStore.status && tmp20(InterestGuildSkeleton, {});
  let tmp18Result = 0 === syncExternalStore.guilds.length && "loading" !== syncExternalStore.status;
  const tmp20Result4 = 0 === syncExternalStore.guilds.length && "loading" === syncExternalStore.status && tmp20(InterestGuildSkeleton, {});
  if (tmp18Result) {
    const obj19 = { style: tmp6.empty, children: items10 };
    const obj20 = { variant: "body-lg/normal", color: "text-muted", style: tmp6.centered, children: intl6.string(require("module_2534").A3YsGV) };
    const Text2 = tmp8(tmp5[9]).Text;
    intl6 = tmp8(tmp5[10]).intl;
    items10 = [ref(Text2, obj20), ];
    const obj21 = {
      variant: "secondary",
      size: "sm",
      text: intl7.string(require("module_2534").uGhymA),
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
    const Button = tmp8(tmp5[35]).Button;
    intl7 = tmp8(tmp5[10]).intl;
    items10[1] = ref(Button, obj21);
    tmp18Result = tmp18(tmp19, obj19);
  }
  items9[4] = tmp18Result;
  items7[1] = ref2(ScrollView, obj12);
  return ref2(View, obj4);
};
