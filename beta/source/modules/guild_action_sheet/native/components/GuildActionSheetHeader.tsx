// Module ID: 13512
// Function ID: 13513
// Name: GuildActionSheetHeader
// Dependencies: [19, 17, 13513, 2067, 6696, 1074, 21, 4836, 576, 1365, 1115, 8206, 8205, 8354, 8209, 5435, 4528, 1177, 4832, 6364, 504, 2059, 13514, 13515, 1479, 5896, 1397, 1432, 7297, 4531, 5899, 8202, 12849, 2]
// Exports: default

// Module 13512 (GuildActionSheetHeader)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2059 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import AssetRegistryDefault from "AssetRegistry" /* 8206 */;
import GuildPopoutActionCreators from "GuildPopoutActionCreators" /* 13514 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildPopoutStore from "GuildPopoutStore" /* 13513 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildSubscriptionsStore from "GuildSubscriptionsStore" /* 6696 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c10;
let closure_4;
let hasOwnProperty;
let num;
let obj2;
let obj3;
let size;
let tmp4;
let unpackModuleId;
const AssetRegistryDefault2 = tmp4(8209);
function CommunityPill(guildVisibility) {
  let content;
  let intl3;
  let items;
  let GlobeEarthIcon;
  guildVisibility = guildVisibility.guildVisibility;
  const tmp = closure_12();
  const intl = GlobeEarthIcon(1115).intl;
  importDefault = intl.string(GlobeEarthIcon(1115).t.TME4LJ);
  let tmp4Result = AssetRegistryDefault;
  if (guildVisibility === GlobeEarthIcon(8205).GuildVisibility.PUBLIC) {
    const intl2 = tmp2(1115).intl;
    importDefault = intl2.string(tmp2(1115).t.op2cJ6);
    GlobeEarthIcon = tmp2(8354).GlobeEarthIcon;
    tmp4Result = AssetRegistryDefault2;
  }
  let obj = {
    style: tmp.communityPill,
    accessibilityRole: "button",
    onPress() {
      const obj = ToastActionCreatorsDefault;
      const obj2 = { key: "SERVER_BADGE_DESCRIPTION_INVITE_ONLY", content, IconComponent: GlobeEarthIcon };
      obj.open(obj2);
    },
    children: items
  };
  const PressableOpacity = tmp2(5435).PressableOpacity;
  let obj2 = { style: tmp.communityPillIcon, source: tmp4Result, disableColor: true };
  items = [closure_10(GlobeEarthIcon(1177).Icon, obj2), ];
  const obj3 = { variant: "text-xs/medium", color: "text-default", style: tmp.communityPillText, children: intl3.string(GlobeEarthIcon(1115).t.K7iRig) };
  const Text = tmp2(4832).Text;
  intl3 = tmp2(1115).intl;
  items[1] = closure_10(Text, obj3);
  return closure_11(PressableOpacity, obj);
}
({ View: closure_4, Image: hasOwnProperty } = react_native);
const GuildFeatures = Constants.GuildFeatures;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: { padding: 16 }, avatar: { borderRadius: 14.117647058823529, height: 60, width: 60 }, headerContainer: obj2, avatarBackground: size, description: { marginTop: 8 }, memberInfo: { marginTop: 16, flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 16 }, nameRow: { flexDirection: "row", alignItems: "center", marginTop: 8 }, communityPill: obj3, communityPillIcon: { width: 16, height: 16, marginRight: 6 }, communityPillText: { lineHeight: num }, guildBanner: { position: "absolute", left: "50%", top: 0 } };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
size = { height: 68, width: 68, marginBottom: 12, marginLeft: -4, padding: 4, borderRadius: 16, alignContent: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj3 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, paddingTop: 4, paddingRight: 8, paddingBottom: 4, paddingLeft: 6, borderRadius: nativeDefault.radii.round };
num = undefined;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
let closure_12 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetHeader.tsx");

export default function GuildActionSheetHeader(guild) {
  let description;
  let guildBanner;
  let guildSplashSource;
  let height;
  let items10;
  let items11;
  let items5;
  let items6;
  let items8;
  let items9;
  let memberCount;
  let name;
  let obj6;
  let onlineCount;
  let tmp18;
  let tmp19;
  let tmp2Result;
  let tmp2Result5;
  let tmp5Result7;
  guild = guild.guild;
  let stateFromStores;
  let width;
  let c4;
  const tmp = closure_12();
  importDefault = tmp;
  const tmp4 = require("useIsWindowLarge")();
  let obj = guild(stateFromStores[20]);
  const items = [GuildSubscriptionsStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildSubscriptionsStore.isSubscribedToAnyGuildChannel(guild.id));
  let obj2 = width;
  const items1 = [guild, stateFromStores];
  const effect = width.useEffect(() => {
    let isGuildRecordResult = !stateFromStores;
    if (isGuildRecordResult) {
      const obj = GuildRecordUtils;
      isGuildRecordResult = obj.isGuildRecord(guild);
    }
    if (isGuildRecordResult) {
      const obj2 = GuildPopoutActionCreators;
      const guildForPopout = obj2.fetchGuildForPopout(guild.id);
    }
  }, items1);
  const items2 = [GuildStore];
  const obj3 = guild(stateFromStores[20]);
  let stateFromStores1 = obj3.useStateFromStores(items2, () => GuildStore.getGuild(guild.id));
  const items3 = [GuildPopoutStore];
  const obj4 = guild(stateFromStores[20]);
  const stateFromStores2 = obj4.useStateFromStores(items3, () => GuildPopoutStore.getGuild(guild.id));
  if (stateFromStores1 == null) {
    stateFromStores1 = stateFromStores2;
  }
  if (stateFromStores1 == null) {
    stateFromStores1 = guild;
  }
  const tmp5Result = guild(stateFromStores[23]);
  const guildHeaderCounts = tmp5Result.useGuildHeaderCounts(stateFromStores1.id);
  memberCount = undefined;
  onlineCount = undefined;
  if (stateFromStores) {
    ({ onlineCount, memberCount } = guildHeaderCounts);
  }
  let tmp11 = memberCount;
  let tmp12 = onlineCount;
  if (null != stateFromStores2) {
    let presenceCount = onlineCount;
    if (onlineCount == null) {
      presenceCount = stateFromStores2.presenceCount;
    }
    let memberCount2 = memberCount;
    if (memberCount == null) {
      memberCount2 = stateFromStores2.memberCount;
    }
    tmp11 = memberCount2;
    tmp12 = presenceCount;
  }
  width = tmp2(tmp3[24])().width;
  const tmp5Result6 = guild(stateFromStores[21]);
  if (tmp5Result6.isGuildRecord(stateFromStores1)) {
    const features = stateFromStores1.features;
    const obj5 = { style: tmp.avatarBackground, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", children: closure_10(tmp2Result, obj6) };
    const hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    obj6 = { style: tmp.avatar, guild: stateFromStores1, size: guild(stateFromStores[25]).GuildIconSizes.XLARGE, animate: true };
    let guildBannerSource = null;
    tmp2Result = require("GuildIcon");
    const tmp22 = closure_10;
    const tmp25 = closure_10(c4, obj5);
    if (null != stateFromStores1.banner) {
      guildBannerSource = null;
      if (!tmp4) {
        const obj7 = { id: null, banner: null };
        ({ id: obj15.id, banner: obj15.banner } = stateFromStores1);
        const tmp2Result4 = require("AvatarUtils");
        guildBannerSource = tmp2Result4.getGuildBannerSource(obj7, hasItem);
      }
    }
    guildSplashSource = guildBannerSource;
    tmp18 = tmp25;
    tmp19 = tmp22;
  } else {
    const obj9 = { id: null, icon: null, canAnimate: true, size: 68 };
    ({ id: obj8.id, icon: obj8.icon } = stateFromStores1);
    const obj11 = { style: tmp.avatar, source: tmp2Result5.getGuildIconSource(obj9) };
    guildSplashSource = null;
    tmp2Result5 = require("AvatarUtils");
    const tmp13 = closure_10;
    const tmp15 = closure_10(closure_5, obj11);
    if (null != stateFromStores1.splash) {
      guildSplashSource = null;
      if (!tmp4) {
        ({ id: obj10.id, splash: obj10.splash } = stateFromStores1);
        const obj12 = { id: null, splash: null, size: width * tmp5Result7.getDevicePixelRatio() };
        const getGuildSplashSource = tmp2(tmp3[26]).getGuildSplashSource;
        require("AvatarUtils");
        tmp5Result7 = guild(stateFromStores[27]);
        guildSplashSource = getGuildSplashSource(obj12);
      }
    }
    tmp18 = tmp15;
    tmp19 = tmp13;
  }
  ({ description, name } = stateFromStores1);
  const tmp5Result8 = guild(stateFromStores[12]);
  const guildTraits = tmp5Result8.getGuildTraits(stateFromStores1);
  const result = 0.56 * width;
  c4 = result;
  const items4 = [tmp.guildBanner, width, result];
  const tmp5Result9 = guild(stateFromStores[28]);
  const clientThemesOverride = tmp5Result9.useClientThemesOverride();
  const memo = obj2.useMemo(() => {
    const obj = { width, height, marginLeft: -width / 2 };
    const merged = Object.assign(guildBanner.guildBanner);
    return obj;
  }, items4);
  const obj13 = { style: items5, children: items6 };
  items5 = [tmp.headerContainer, clientThemesOverride];
  let tmp19Result = null != guildSplashSource;
  const tmp5Result10 = guild(stateFromStores[29]);
  const token = tmp5Result10.useToken(tmp2(tmp3[8]).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  if (tmp19Result) {
    const obj14 = { style: memo, source: guildSplashSource };
    tmp19Result = tmp19(tmp2(tmp3[30]), obj14);
  }
  items6 = [tmp19Result, ];
  const items7 = [tmp.content, ];
  let num = 0;
  if (null != guildSplashSource) {
    num = result - 48;
  }
  const obj16 = { style: items7, children: items8 };
  items7[1] = { marginTop: num };
  items8 = [tmp18, , , ];
  const obj17 = { style: tmp.nameRow, children: items9 };
  items9 = [tmp19(tmp2(tmp3[31]), { guild: stateFromStores1 }), tmp19(tmp5(tmp3[18]).Text, { lineClamp: 2, accessibilityRole: "header", variant: token, color: "mobile-text-heading-primary", children: name })];
  items8[1] = closure_11(c4, obj17);
  let tmp19Result5 = null;
  if (null != description) {
    const obj18 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
    tmp19Result5 = tmp19(tmp5(tmp3[18]).Text, obj18);
  }
  items8[2] = tmp19Result5;
  let tmp19Result6 = null;
  const obj19 = { style: tmp.memberInfo, children: items10 };
  if (guildTraits.community) {
    const obj20 = { guildVisibility: guildTraits.visibility };
    tmp19Result6 = tmp19(CommunityPill, obj20);
  }
  items10 = [tmp19Result6, ];
  let tmp19Result7 = null != tmp12;
  const obj21 = { style: { gap: 15, flexDirection: "row" }, children: items11 };
  if (tmp19Result7) {
    const obj22 = { type: "online", count: tmp12 };
    tmp19Result7 = tmp19(tmp2(tmp3[32]), obj22);
  }
  items11 = [tmp19Result7, ];
  let tmp19Result8 = null != tmp11;
  if (tmp19Result8) {
    const obj23 = { type: "total", count: tmp11 };
    tmp19Result8 = tmp19(tmp2(tmp3[32]), obj23);
  }
  items11[1] = tmp19Result8;
  items10[1] = closure_11(c4, obj21);
  items8[3] = closure_11(c4, obj19);
  items6[1] = closure_11(c4, obj16);
  return closure_11(c4, obj13);
};
