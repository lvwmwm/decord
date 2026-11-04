// Module ID: 19849
// Function ID: 19850
// Name: InterestGuildRecommendations
// Dependencies: [32, 19, 17, 1072, 21, 7139, 5141, 575, 5761, 1113, 18691, 5732, 1411, 7121, 2537, 5382, 19850, 9656, 7098, 6162, 9452, 5004, 7514, 19853, 18690, 7428, 9961, 19854, 5768, 2]
// Exports: default

// Module 19849 (InterestGuildRecommendations)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl10 from "intl" /* 1113 */;
import _modDef2537 from "module_2537" /* 2537 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import Text_Text from "Text/Text" /* 5761 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7428 */;
import HeaderShared from "HeaderShared" /* 9961 */;
import InterestScrollHeader from "InterestScrollHeader" /* 18690 */;
import InterestGhostDefault from "InterestGhost" /* 18691 */;
import InterestGuildProfileSheetDefault from "InterestGuildProfileSheet" /* 19850 */;
import InterestPickedGamesDefault from "InterestPickedGames" /* 19854 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import NavigatorHeader from "NavigatorHeader" /* 7139 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
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
function InterestGuildSkeleton() {
  let closure_0;
  let intl;
  let obj2;
  _require = closure_12();
  let obj = { accessible: true, accessibilityLabel: intl.string(require("intl").t.ZTNur7), accessibilityState: { busy: true }, children: closure_8(closure_6, obj2) };
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
      items[0] = metroImportAll(InterestGhostDefault, obj4);
      const obj5 = { style: closure_0.details, children: items2 };
      const obj6 = { style: closure_0.skeletonNameFrame, children: metroImportAll(InterestGhostDefault, { style: items1 }) };
      items1 = [closure_0.skeletonLine, arg1 % 2 === 0 ? closure_0.skeletonName : closure_0.skeletonShortName];
      items2 = [metroImportAll(metroRequire, obj6), ];
      const obj7 = { style: closure_0.skeletonCountFrame, children: metroImportAll(InterestGhostDefault, obj8) };
      obj8 = { style: items3 };
      items3 = [, ];
      ({ skeletonLine: arr4[0], skeletonCount: arr4[1] } = closure_0);
      items2[1] = metroImportAll(metroRequire, obj7);
      items[1] = React4(metroRequire, obj5);
      items4 = [React4(metroRequire, obj3), ];
      const obj9 = { style: closure_0.skeletonButton };
      items4[1] = metroImportAll(InterestGhostDefault, obj9);
      items5 = [React4(metroRequire, obj2), ];
      const obj10 = { children: items7 };
      const obj11 = { style: closure_0.skeletonDescriptionFrame, children: metroImportAll(InterestGhostDefault, obj12) };
      obj12 = { style: items6 };
      items6 = [, ];
      ({ skeletonLine: arr7[0], skeletonDescription: arr7[1] } = closure_0);
      items7 = [metroImportAll(metroRequire, obj11), ];
      const obj13 = { style: closure_0.skeletonDescriptionFrame, children: metroImportAll(InterestGhostDefault, obj14) };
      obj14 = { style: items8 };
      items8 = [, ];
      ({ skeletonLine: arr9[0], skeletonShortDescription: arr9[1] } = closure_0);
      items7[1] = metroImportAll(metroRequire, obj13);
      items5[1] = React4(metroRequire, obj10);
      return React4(metroRequire, obj, arg1);
    })
  };
  return closure_8(closure_6, obj);
}
function ProgressiveGuildRows(arg0) {
  let c1;
  let guilds;
  let joins;
  let require;
  let substr;
  let tmp2;
  ({ guilds, joins: require } = arg0);
  c1 = undefined;
  [tmp2, c1] = react.useState(5);
  _slicedToArray(react.useState(5), 2);
  const effect = react.useEffect(() => {
    let closure_0;
    let closure_1;
    const timeout = setTimeout(() => closure_1(10), 80);
    const timeout2 = setTimeout(() => closure_1(15), 160);
    return () => {
      clearTimeout(closure_0);
      clearTimeout(closure_1);
    };
  }, []);
  let obj = {
    children: substr.map((guild) => {
      const obj = { guild, joins: require };
      return metroImportAll(closure_14, obj, guild.id);
    })
  };
  substr = guilds.slice(0, tmp2);
  return closure_8(closure_10, obj);
}
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const GuildFeatures = Constants.GuildFeatures;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
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
let closure_12 = createStyles(obj);
let closure_14 = react.memo(function InterestGuildRow(guild) {
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
  const joins = guild.joins;
  let tmp = closure_12();
  let obj = guild(5732);
  const token = obj.useToken(joins(575).modules.mobile.GUILD_ITEM_SELECTED_BORDER_RADIUS);
  let obj2 = guild(5732);
  const token1 = obj2.useToken(joins(575).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const obj3 = joins(1411);
  const obj4 = { id: guild.id, icon: guild.icon, size: 40 };
  const guildIconURL = obj3.getGuildIconURL(obj4);
  const obj5 = {
    accessibilityRole: "button",
    accessibilityLabel: guild.name,
    accessibilityHint: intl.string(joins(2537).nkweXX),
    onPress: function openProfile() {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const obj = { default: InterestGuildProfileSheetDefault };
      const resolved = Promise.resolve(obj);
      const obj2 = { guildId: guild.id, guildName: guild.name, joins };
      openLazy(resolved, "GuildProfileActionSheet:" + guild.id, obj2);
    },
    style: tmp.row,
    children: items6
  };
  const PressableHighlight = guild(7121).PressableHighlight;
  intl = guild(1113).intl;
  const obj6 = { style: tmp.rowHeader, children: items5 };
  const obj7 = { style: tmp.profile, children: items1 };
  const obj8 = { style: items, children: closure_8(tmp12, obj10) };
  items = [tmp.guildIcon, ];
  const obj9 = { borderRadius: token * joins(575).space.PX_40 / token1 };
  items[1] = obj9;
  const tmp11 = joins(9656);
  obj10 = { icon: guildIconURL, value: guild.name, size: guild(7098).GuildIconSizes.NORMAL, selected: false, style: tmp.guildIconImage };
  tmp12 = joins(7098);
  items1 = [closure_8(tmp11, obj8), ];
  const obj11 = { style: tmp.details, spacing: joins(575).space.PX_0, children: items3 };
  const Stack = guild(6162).Stack;
  const obj12 = { style: tmp.name, children: items2 };
  items2 = [, , ];
  const obj13 = { style: tmp.nameText, variant: "body-md/semibold", color: "text-strong", lineClamp: 1, children: guild.name };
  items2[0] = closure_8(guild(5761).Text, obj13);
  const features = guild.features;
  let hasItem = features.includes(GuildFeatures.VERIFIED);
  const tmp13 = GuildFeatures;
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
    const tmp4Result = joins(9452);
    constructFromPartialGuildRecord = guild(5004).constructFromPartialGuildRecord;
    guild(5004);
    set = new Set(guild.features);
    hasItem = tmp10(tmp4Result, obj14);
  }
  items2[1] = hasItem;
  items2[2] = closure_8(guild(7514).ChevronSmallRightIcon, { size: "xxs", accessible: false });
  items3 = [closure_9(closure_6, obj12), ];
  const obj17 = { style: tmp.online, children: items4 };
  items4 = [, ];
  const obj18 = { style: tmp.dot };
  items4[0] = closure_8(closure_6, obj18);
  const obj19 = { variant: "body-xs/medium", color: "text-muted", children: intl2.format(guild(1113).t["LC+S+m"], obj20) };
  const Text = tmp2(5761).Text;
  intl2 = tmp2(1113).intl;
  obj20 = { membersOnline: guild.approximate_presence_count };
  items4[1] = closure_8(Text, obj19);
  items3[1] = closure_9(closure_6, obj17);
  items1[1] = closure_9(Stack, obj11);
  items5 = [closure_9(closure_6, obj7), ];
  const obj21 = { style: tmp.joinSpace };
  items5[1] = closure_8(closure_6, obj21);
  items6 = [closure_9(closure_6, obj6), ];
  let tmp10Result = null != guild.description && "" !== guild.description;
  if (tmp10Result) {
    const obj22 = { variant: "body-sm/normal", color: "text-subtle", lineClamp: 2, children: guild.description };
    tmp10Result = tmp10(tmp2(5761).Text, obj22);
  }
  const obj23 = { children: items7 };
  items6[1] = tmp10Result;
  items7 = [closure_9(PressableHighlight, obj5), ];
  const obj24 = { style: tmp.joinTarget, children: closure_8(joins(19853), obj45) };
  obj45 = { guildId: guild.id, guildName: guild.name, joins };
  items7[1] = closure_8(closure_6, obj24);
  return closure_9(closure_6, obj23);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildRecommendations.tsx");

export default function InterestGuildRecommendations(arg0) {
  let gameIds;
  let intl;
  let intl2;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let joins;
  let onBack;
  let onComplete;
  let onScroll;
  let resource;
  let scrollY;
  ({ resource, joins, onComplete } = arg0);
  ({ gameIds, onBack } = arg0);
  const tmp = closure_12();
  const syncExternalStore = react.useSyncExternalStore(resource.subscribe, resource.getSnapshot);
  const syncExternalStore1 = react.useSyncExternalStore(joins.subscribe, joins.getSnapshot);
  const obj = InterestScrollHeader;
  const interestScrollHeader = obj.useInterestScrollHeader();
  const obj2 = { style: tmp.screen, children: items1 };
  ({ scrollY, onScroll } = interestScrollHeader);
  const obj3 = { style: tmp.header, children: items };
  const obj4 = { accessibilityLabel: intl.string(intl10.t["13/7kX"]), onPress: onBack };
  const tmp7 = syncExternalStore1.joined.length > 0;
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  intl = intl10.intl;
  items = [metroImportAll(closure_11, obj4), , ];
  const obj5 = { title: intl2.string(_modDef2537["mdhU/Q"]), scrollY };
  const InterestCompactTitle = InterestScrollHeader.InterestCompactTitle;
  intl2 = intl10.intl;
  items[1] = metroImportAll(InterestCompactTitle, obj5);
  const HeaderTextButton = HeaderShared.HeaderTextButton;
  const intl3 = intl10.intl;
  const string = intl3.string;
  const t = intl10.t;
  const obj6 = { top: true, children: React4(metroRequire, obj3) };
  const obj7 = { label: string(tmp7 ? t.i4jeWR : t["5Wxrcd"]), labelStyle: tmp.completion, onPress: onComplete };
  items[2] = metroImportAll(HeaderTextButton, obj7);
  items1 = [metroImportAll(SafeAreaPaddingView, obj6), ];
  const obj8 = { contentContainerStyle: tmp.content, onScroll, scrollEventThrottle: 16, children: items3 };
  const obj9 = { style: tmp.intro, children: items2 };
  const obj10 = { variant: "heading-xl/semibold", color: "text-strong", children: intl4.string(_modDef2537.TQdfcH) };
  const Heading = tmp4(5761).Heading;
  intl4 = tmp4(1113).intl;
  items2 = [metroImportAll(Heading, obj10), ];
  const obj11 = { variant: "body-sm/normal", color: "text-default", style: tmp.centered, children: intl5.string(_modDef2537["G++b7J"]) };
  const Text = tmp4(5761).Text;
  intl5 = tmp4(1113).intl;
  items2[1] = metroImportAll(Text, obj11);
  items3 = [React4(metroRequire, obj9), metroImportAll(InterestPickedGamesDefault, { gameIds }), , , ];
  let tmp10Result = syncExternalStore.guilds.length > 0;
  const tmp12 = hasOwnProperty;
  if (tmp10Result) {
    const obj12 = { guilds: syncExternalStore.guilds, joins };
    tmp10Result = tmp10(ProgressiveGuildRows, obj12, syncExternalStore.key);
  }
  items3[2] = tmp10Result;
  items3[3] = 0 === syncExternalStore.guilds.length && "loading" === syncExternalStore.status && tmp10(InterestGuildSkeleton, {});
  let tmp8Result = 0 === syncExternalStore.guilds.length && "loading" !== syncExternalStore.status;
  const tmp10Result2 = 0 === syncExternalStore.guilds.length && "loading" === syncExternalStore.status && tmp10(InterestGuildSkeleton, {});
  if (tmp8Result) {
    const obj13 = { style: tmp.empty, children: items4 };
    const obj14 = { variant: "heading-sm/semibold", color: "text-strong", children: intl6.string(_modDef2537.rtXXRe) };
    const Heading2 = tmp4(5761).Heading;
    intl6 = tmp4(1113).intl;
    items4 = [metroImportAll(Heading2, obj14), , , ];
    const obj15 = { variant: "body-sm/normal", color: "text-muted", style: tmp.centered, children: intl7.string(_modDef2537.A3YsGV) };
    const Text2 = tmp4(5761).Text;
    intl7 = tmp4(1113).intl;
    items4[1] = metroImportAll(Text2, obj15);
    const obj16 = { variant: "secondary", size: "sm", text: intl8.string(_modDef2537.uGhymA), onPress: resource.retry };
    const Button = tmp4(5768).Button;
    intl8 = tmp4(1113).intl;
    items4[2] = metroImportAll(Button, obj16);
    const obj17 = { label: intl9.string(intl10.t.i4jeWR), labelStyle: tmp.completion, onPress: onComplete };
    const HeaderTextButton2 = tmp4(9961).HeaderTextButton;
    intl9 = tmp4(1113).intl;
    items4[3] = metroImportAll(HeaderTextButton2, obj17);
    tmp8Result = tmp8(tmp9, obj13);
  }
  items3[4] = tmp8Result;
  items1[1] = React4(tmp12, obj8);
  return React4(metroRequire, obj2);
};
