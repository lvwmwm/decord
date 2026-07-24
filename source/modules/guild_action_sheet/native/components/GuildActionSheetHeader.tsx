// Module ID: 13026
// Function ID: 100743
// Name: CommunityPill
// Dependencies: [31, 27, 13027, 1838, 5657, 653, 33, 4130, 689, 478, 1212, 5707, 5704, 9062, 5710, 4660, 3831, 1273, 4126, 7423, 566, 1387, 13028, 13029, 1450, 5513, 1392, 1426, 8868, 3834, 5085, 5701, 10153, 2]
// Exports: default

// Module 13026 (CommunityPill)
import GuildBadgeV2 from "GuildBadgeV2";
import get_ActivityIndicator from "isAttachmentLadderEnabled";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import { GuildFeatures } from "ME";
import jsxProd from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import isWindows from "isWindows";

let closure_10;
let closure_11;
let closure_4;
let closure_5;
const require = arg1;
function CommunityPill(guildVisibility) {
  let GlobeEarthIcon;
  const tmp = _createForOfIteratorHelperLoose();
  const intl = GlobeEarthIcon(1212).intl;
  let importDefault = intl.string(GlobeEarthIcon(1212).t.TME4LJ);
  let tmp2 = importDefault(5707);
  if (guildVisibility.guildVisibility === GlobeEarthIcon(5704).GuildVisibility.PUBLIC) {
    const intl2 = GlobeEarthIcon(1212).intl;
    importDefault = intl2.string(GlobeEarthIcon(1212).t.op2cJ6);
    GlobeEarthIcon = GlobeEarthIcon(9062).GlobeEarthIcon;
    tmp2 = importDefault(5710);
  }
  let obj = {
    style: tmp.communityPill,
    accessibilityRole: "button",
    onPress() {
      let obj = callback(outer1_2[16]);
      obj = { key: "SERVER_BADGE_DESCRIPTION_INVITE_ONLY", content: callback, IconComponent: GlobeEarthIcon };
      obj.open(obj);
    }
  };
  obj = { style: tmp.communityPillIcon, source: tmp2, disableColor: true };
  const items = [callback(GlobeEarthIcon(1273).Icon, obj), ];
  obj = { variant: "text-xs/medium", color: "text-default", style: tmp.communityPillText };
  const intl3 = GlobeEarthIcon(1212).intl;
  obj.children = intl3.string(GlobeEarthIcon(1212).t.K7iRig);
  items[1] = callback(GlobeEarthIcon(4126).Text, obj);
  obj.children = items;
  return callback2(GlobeEarthIcon(4660).PressableOpacity, obj);
}
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { content: { padding: 16 }, avatar: { borderRadius: 14.117647058823529, height: 60, width: 60 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.headerContainer = _createForOfIteratorHelperLoose;
let obj1 = { height: 68, width: 68, marginBottom: 12, marginLeft: -4, padding: 4, borderRadius: 16, alignContent: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.avatarBackground = obj1;
_createForOfIteratorHelperLoose.description = { marginTop: 8 };
_createForOfIteratorHelperLoose.memberInfo = { marginTop: 16, flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 16 };
_createForOfIteratorHelperLoose.nameRow = { flexDirection: "row", alignItems: "center", marginTop: 8 };
let obj2 = { flexDirection: "row", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_HOVER, paddingTop: 4, paddingRight: 8, paddingBottom: 4, paddingLeft: 6, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.communityPill = obj2;
_createForOfIteratorHelperLoose.communityPillIcon = { width: 16, height: 16, marginRight: 6 };
let obj3 = {};
let num;
if (isWindows.isAndroid()) {
  num = 14;
}
obj3.lineHeight = num;
_createForOfIteratorHelperLoose.communityPillText = obj3;
_createForOfIteratorHelperLoose.guildBanner = { position: "absolute", left: "50%", top: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetHeader.tsx");

export default function GuildActionSheetHeader(guild) {
  let memberCount;
  let onlineCount;
  guild = guild.guild;
  let width;
  let c4;
  const tmp = _createForOfIteratorHelperLoose();
  const importDefault = tmp;
  const tmp2 = importDefault(stateFromStores[19])();
  let obj = guild(stateFromStores[20]);
  const items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => outer1_8.isSubscribedToAnyGuildChannel(guild.id));
  const items1 = [guild, stateFromStores];
  const effect = width.useEffect(() => {
    let isGuildRecordResult = !stateFromStores;
    if (isGuildRecordResult) {
      isGuildRecordResult = guild(stateFromStores[21]).isGuildRecord(guild);
      const obj = guild(stateFromStores[21]);
    }
    if (isGuildRecordResult) {
      const guildForPopout = guild(stateFromStores[22]).fetchGuildForPopout(guild.id);
      const obj2 = guild(stateFromStores[22]);
    }
  }, items1);
  let obj1 = guild(stateFromStores[20]);
  const items2 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_7.getGuild(guild.id));
  let obj2 = guild(stateFromStores[20]);
  const items3 = [_isNativeReflectConstruct];
  const stateFromStores2 = obj2.useStateFromStores(items3, () => outer1_6.getGuild(guild.id));
  let tmp7 = stateFromStores2;
  if (null != stateFromStores1) {
    tmp7 = stateFromStores1;
  }
  if (null != tmp7) {
    guild = tmp7;
  }
  let obj3 = guild(stateFromStores[23]);
  const guildHeaderCounts = obj3.useGuildHeaderCounts(guild.id);
  onlineCount = undefined;
  memberCount = undefined;
  if (stateFromStores) {
    ({ onlineCount, memberCount } = guildHeaderCounts);
  }
  let tmp9 = onlineCount;
  let tmp10 = memberCount;
  if (null != stateFromStores2) {
    let presenceCount = onlineCount;
    if (onlineCount == null) {
      presenceCount = stateFromStores2.presenceCount;
    }
    let memberCount2 = memberCount;
    if (memberCount == null) {
      memberCount2 = stateFromStores2.memberCount;
    }
    tmp10 = memberCount2;
    tmp9 = presenceCount;
  }
  width = importDefault(stateFromStores[24])().width;
  let obj4 = guild(stateFromStores[21]);
  if (obj4.isGuildRecord(guild)) {
    const features = guild.features;
    obj = { style: tmp.avatarBackground, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none" };
    const hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    obj = { style: tmp.avatar, guild, size: guild(stateFromStores[25]).GuildIconSizes.XLARGE, animate: true };
    obj.children = callback(importDefault(stateFromStores[25]), obj);
    let guildBannerSource = null;
    const tmp28 = importDefault(stateFromStores[25]);
    if (null != guild.banner) {
      guildBannerSource = null;
      if (!tmp2) {
        let obj13 = importDefault(stateFromStores[26]);
        obj1 = {};
        ({ id: obj15.id, banner: obj15.banner } = guild);
        guildBannerSource = obj13.getGuildBannerSource(obj1, hasItem);
      }
    }
    let guildSplashSource = guildBannerSource;
    let tmp20 = callback(c4, obj);
    const tmp30 = callback(c4, obj);
  } else {
    let obj5 = importDefault(stateFromStores[26]);
    obj2 = {};
    ({ id: obj7.id, icon: obj7.icon } = guild);
    obj2.canAnimate = true;
    obj2.size = 68;
    obj3 = { style: tmp.avatar, source: obj5.getGuildIconSource(obj2) };
    guildSplashSource = null;
    if (null != guild.splash) {
      guildSplashSource = null;
      if (!tmp2) {
        let obj8 = importDefault(stateFromStores[26]);
        obj4 = {};
        ({ id: obj10.id, splash: obj10.splash } = guild);
        let obj10 = guild(stateFromStores[27]);
        obj4.size = width * obj10.getDevicePixelRatio();
        guildSplashSource = obj8.getGuildSplashSource(obj4);
      }
    }
    tmp20 = callback(closure_5, obj3);
    const tmp15 = callback(closure_5, obj3);
  }
  const description = guild.description;
  let obj15 = guild(stateFromStores[12]);
  const guildTraits = obj15.getGuildTraits(guild);
  let obj16 = guild(stateFromStores[28]);
  const result = 0.56 * width;
  c4 = result;
  const items4 = [tmp.guildBanner, width, result];
  const clientThemesOverride = obj16.useClientThemesOverride();
  const memo = width.useMemo(() => {
    const obj = {};
    const merged = Object.assign(tmp.guildBanner);
    obj["width"] = width;
    obj["height"] = c4;
    obj["marginLeft"] = -width / 2;
    return obj;
  }, items4);
  let obj17 = guild(stateFromStores[29]);
  obj5 = { style: items5 };
  items5 = [tmp.headerContainer, clientThemesOverride];
  let tmp41 = null != guildSplashSource;
  const token = obj17.useToken(importDefault(stateFromStores[8]).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  if (tmp41) {
    const obj6 = { style: memo, source: guildSplashSource };
    tmp41 = callback(importDefault(stateFromStores[30]), obj6);
  }
  const items6 = [tmp41, ];
  const obj7 = {};
  const items7 = [tmp.content, ];
  obj8 = {};
  let num7 = 0;
  if (null != guildSplashSource) {
    num7 = result - 48;
  }
  obj8.marginTop = num7;
  items7[1] = obj8;
  obj7.style = items7;
  const items8 = [tmp20, , , ];
  const obj9 = { style: tmp.nameRow };
  obj10 = { guild };
  const items9 = [callback(importDefault(stateFromStores[31]), obj10), ];
  const obj11 = { lineClamp: 2, accessibilityRole: "header", variant: token, color: "mobile-text-heading-primary", children: guild.name };
  items9[1] = callback(guild(stateFromStores[18]).Text, obj11);
  obj9.children = items9;
  items8[1] = callback2(c4, obj9);
  let tmp47 = null;
  if (null != description) {
    const obj12 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
    tmp47 = callback(guild(stateFromStores[18]).Text, obj12);
  }
  items8[2] = tmp47;
  obj13 = { style: tmp.memberInfo };
  let tmp53 = null;
  if (guildTraits.community) {
    const obj14 = { guildVisibility: guildTraits.visibility };
    tmp53 = callback(CommunityPill, obj14);
  }
  const items10 = [tmp53, ];
  obj15 = { style: { gap: 15, flexDirection: "row" } };
  let tmp58 = null != tmp9;
  if (tmp58) {
    obj16 = { type: "online", count: tmp9 };
    tmp58 = callback(importDefault(stateFromStores[32]), obj16);
  }
  const items11 = [tmp58, ];
  let tmp62 = null != tmp10;
  if (tmp62) {
    obj17 = { type: "total", count: tmp10 };
    tmp62 = callback(importDefault(stateFromStores[32]), obj17);
  }
  items11[1] = tmp62;
  obj15.children = items11;
  items10[1] = callback2(c4, obj15);
  obj13.children = items10;
  items8[3] = callback2(c4, obj13);
  obj7.children = items8;
  items6[1] = callback2(c4, obj7);
  obj5.children = items6;
  return callback2(c4, obj5);
};
