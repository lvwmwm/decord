// Module ID: 12844
// Function ID: 98186
// Name: CommunityPill
// Dependencies: []
// Exports: default

// Module 12844 (CommunityPill)
function CommunityPill(guildVisibility) {
  let arg1;
  const tmp = callback3();
  const intl = arg1(dependencyMap[10]).intl;
  let importDefault = intl.string(arg1(dependencyMap[10]).t.TME4LJ);
  let tmp2 = importDefault(dependencyMap[11]);
  if (guildVisibility.guildVisibility === arg1(dependencyMap[12]).GuildVisibility.PUBLIC) {
    const intl2 = arg1(dependencyMap[10]).intl;
    importDefault = intl2.string(arg1(dependencyMap[10]).t.op2cJ6);
    arg1 = arg1(dependencyMap[13]).GlobeEarthIcon;
    tmp2 = importDefault(dependencyMap[14]);
  }
  let obj = {
    style: tmp.communityPill,
    accessibilityRole: "button",
    onPress() {
      let obj = callback(closure_2[16]);
      obj = { key: "SERVER_BADGE_DESCRIPTION_INVITE_ONLY", content: callback, IconComponent: GlobeEarthIcon };
      obj.open(obj);
    }
  };
  obj = { style: tmp.communityPillIcon, source: tmp2, disableColor: true };
  const items = [callback(arg1(dependencyMap[17]).Icon, obj), ];
  obj = { style: tmp.communityPillText };
  const intl3 = arg1(dependencyMap[10]).intl;
  obj.children = intl3.string(arg1(dependencyMap[10]).t.K7iRig);
  items[1] = callback(arg1(dependencyMap[18]).Text, obj);
  obj.children = items;
  return callback2(arg1(dependencyMap[15]).PressableOpacity, obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const GuildFeatures = arg1(dependencyMap[5]).GuildFeatures;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { content: { padding: 16 }, avatar: {} };
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.headerContainer = obj;
const obj1 = { folderColor: "png", handleAutomaticGainControlChange: true, serverIP: "/assets/images/native/status", gameServerPanelUrl: 36, entitlementId: 24, H265: null, onlyChannels: "48a492306912f6e40271e3f606596ed0", handleResetDismissibilityClick: "StatusVROnline", backgroundColor: importDefault(dependencyMap[8]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.avatarBackground = obj1;
obj.description = { marginTop: 8 };
obj.memberInfo = { width: "%Float64Array%", height: "en-PK", borderRadius: "Float32Array", marginHorizontal: "GameDepthTier9LargeBadge", marginBottom: "read" };
obj.nameRow = {};
const tmp3 = arg1(dependencyMap[6]);
obj.communityPill = { backgroundColor: importDefault(dependencyMap[8]).colors.INTERACTIVE_BACKGROUND_HOVER, borderRadius: importDefault(dependencyMap[8]).radii.round };
obj.communityPillIcon = { useTrackPdpClick: "Array", GameDetectionDebugLevel: "onSelectUser", presenceCount: "SU" };
const obj3 = {};
const obj2 = { backgroundColor: importDefault(dependencyMap[8]).colors.INTERACTIVE_BACKGROUND_HOVER, borderRadius: importDefault(dependencyMap[8]).radii.round };
let num;
if (obj7.isAndroid()) {
  num = 14;
}
obj3.lineHeight = num;
obj.communityPillText = obj3;
obj.guildBanner = {};
let closure_12 = obj.createStyles(obj);
const obj7 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetHeader.tsx");

export default function GuildActionSheetHeader(guild) {
  let memberCount;
  let onlineCount;
  guild = guild.guild;
  const arg1 = guild;
  let React;
  let result;
  const tmp = callback3();
  const importDefault = tmp;
  const tmp2 = importDefault(dependencyMap[19])();
  let obj = arg1(dependencyMap[20]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => subscribedToAnyGuildChannel.isSubscribedToAnyGuildChannel(guild.id));
  const dependencyMap = stateFromStores;
  const items1 = [guild, stateFromStores];
  const effect = React.useEffect(() => {
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
  let obj1 = arg1(dependencyMap[20]);
  const items2 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => guild2.getGuild(guild.id));
  let obj2 = arg1(dependencyMap[20]);
  const items3 = [closure_6];
  const stateFromStores2 = obj2.useStateFromStores(items3, () => guild.getGuild(guild.id));
  let tmp7 = stateFromStores2;
  if (null != stateFromStores1) {
    tmp7 = stateFromStores1;
  }
  if (null != tmp7) {
    guild = tmp7;
  }
  let obj3 = arg1(dependencyMap[23]);
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
  const width = importDefault(dependencyMap[24])().width;
  React = width;
  let obj4 = arg1(dependencyMap[21]);
  if (obj4.isGuildRecord(guild)) {
    const features = guild.features;
    obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, style: tmp.avatarBackground };
    const hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    obj = { style: tmp.avatar, guild, size: arg1(dependencyMap[25]).GuildIconSizes.XLARGE, animate: true };
    obj.children = callback(importDefault(dependencyMap[25]), obj);
    let guildBannerSource = null;
    const tmp28 = importDefault(dependencyMap[25]);
    if (null != guild.banner) {
      guildBannerSource = null;
      if (!tmp2) {
        let obj13 = importDefault(dependencyMap[26]);
        obj1 = {};
        ({ id: obj15.id, banner: obj15.banner } = guild);
        guildBannerSource = obj13.getGuildBannerSource(obj1, hasItem);
      }
    }
    let guildSplashSource = guildBannerSource;
    let tmp20 = callback(result, obj);
    const tmp30 = callback(result, obj);
  } else {
    let obj5 = importDefault(dependencyMap[26]);
    obj2 = {};
    ({ id: obj7.id, icon: obj7.icon } = guild);
    obj2.canAnimate = true;
    obj2.size = 68;
    obj3 = { style: tmp.avatar, source: obj5.getGuildIconSource(obj2) };
    guildSplashSource = null;
    if (null != guild.splash) {
      guildSplashSource = null;
      if (!tmp2) {
        let obj8 = importDefault(dependencyMap[26]);
        obj4 = {};
        ({ id: obj10.id, splash: obj10.splash } = guild);
        let obj10 = arg1(dependencyMap[27]);
        obj4.size = width * obj10.getDevicePixelRatio();
        guildSplashSource = obj8.getGuildSplashSource(obj4);
      }
    }
    tmp20 = callback(closure_5, obj3);
    const tmp15 = callback(closure_5, obj3);
  }
  const description = guild.description;
  let obj15 = arg1(dependencyMap[12]);
  const guildTraits = obj15.getGuildTraits(guild);
  let obj16 = arg1(dependencyMap[28]);
  result = 0.56 * width;
  const items4 = [tmp.guildBanner, width, result];
  const clientThemesOverride = obj16.useClientThemesOverride();
  const memo = React.useMemo(() => {
    const obj = {};
    const merged = Object.assign(tmp.guildBanner);
    obj["width"] = width;
    obj["height"] = result;
    obj["marginLeft"] = -width / 2;
    return obj;
  }, items4);
  let obj17 = arg1(dependencyMap[29]);
  obj5 = { style: items5 };
  const items5 = [tmp.headerContainer, clientThemesOverride];
  let tmp41 = null != guildSplashSource;
  const token = obj17.useToken(importDefault(dependencyMap[8]).modules.mobile.CHANNEL_LIST_TITLE_TEXT_STYLE);
  if (tmp41) {
    const obj6 = { style: memo, source: guildSplashSource };
    tmp41 = callback(importDefault(dependencyMap[30]), obj6);
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
  const items9 = [callback(importDefault(dependencyMap[31]), obj10), ];
  const obj11 = { "Bool(true)": 2, "Bool(true)": "asset_hash", "Bool(true)": "scalar", "Bool(true)": 9, variant: token, children: guild.name };
  items9[1] = callback(arg1(dependencyMap[18]).Text, obj11);
  obj9.children = items9;
  items8[1] = callback2(result, obj9);
  let tmp47 = null;
  if (null != description) {
    const obj12 = { style: tmp.description, children: description };
    tmp47 = callback(arg1(dependencyMap[18]).Text, obj12);
  }
  items8[2] = tmp47;
  obj13 = { style: tmp.memberInfo };
  let tmp53 = null;
  if (guildTraits.community) {
    const obj14 = { guildVisibility: guildTraits.visibility };
    tmp53 = callback(CommunityPill, obj14);
  }
  const items10 = [tmp53, ];
  obj15 = { style: { 0: 282656770, 0: null } };
  let tmp58 = null != tmp9;
  if (tmp58) {
    obj16 = { type: "online", count: tmp9 };
    tmp58 = callback(importDefault(dependencyMap[32]), obj16);
  }
  const items11 = [tmp58, ];
  let tmp62 = null != tmp10;
  if (tmp62) {
    obj17 = { type: "total", count: tmp10 };
    tmp62 = callback(importDefault(dependencyMap[32]), obj17);
  }
  items11[1] = tmp62;
  obj15.children = items11;
  items10[1] = callback2(result, obj15);
  obj13.children = items10;
  items8[3] = callback2(result, obj13);
  obj7.children = items8;
  items6[1] = callback2(result, obj7);
  obj5.children = items6;
  return callback2(result, obj5);
};
