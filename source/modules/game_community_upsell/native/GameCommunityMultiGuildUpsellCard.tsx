// Module ID: 14967
// Function ID: 112655
// Name: getGuildIconSize
// Dependencies: []
// Exports: default

// Module 14967 (getGuildIconSize)
function getGuildIconSize(variant) {
  let num = 50;
  if ("one-column" === variant) {
    num = 56;
  }
  return num;
}
function getGuildIconTop(variant) {
  const tmp = getGuildIconSize(variant);
  if ("one-column" === variant) {
    let diff = 88 - tmp / 2 - 2;
  } else {
    diff = 80 - tmp / 2 - 2;
  }
  return diff;
}
function getCardWidth(arg0) {
  const width = arg1(dependencyMap[8]).getWindowDimensions().width;
  let result = width;
  if ("one-column" !== arg0) {
    result = width / 2;
  }
  return result;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ Image: closure_6, View: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[3]);
({ GuildFeatures: closure_10, JoinGuildSources: closure_11, AnalyticEvents: closure_12 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[7]));
const tmp4 = arg1(dependencyMap[7]);
let closure_15 = arg1(dependencyMap[9]).createStyles((variant) => {
  let num = 10;
  if ("one-column" === variant) {
    num = 12;
  }
  const tmp2 = getGuildIconSize(variant);
  let obj = {};
  obj = { entity_id: true, lurkLocation: true, automaticallyAdjustContentInsets: true, horizontal: true, pagingEnabled: true, scrollEnabled: true, backgroundColor: importDefault(dependencyMap[10]).colors.BG_SURFACE_RAISED, borderColor: importDefault(dependencyMap[10]).colors.BORDER_MUTED, borderRadius: importDefault(dependencyMap[10]).radii.lg, marginBottom: importDefault(dependencyMap[10]).space.PX_16 };
  obj.card = obj;
  obj = {};
  let num2 = 80;
  if ("one-column" === variant) {
    num2 = 88;
  }
  obj.height = num2;
  obj.backgroundColor = importDefault(dependencyMap[10]).colors.CARD_BACKGROUND_DEFAULT;
  obj.bannerContainer = obj;
  obj.banner = { flex: 1 };
  const obj1 = { markAsSpoilerTitle: 0.129, keyboardAppearance: 1 };
  let num3 = 28;
  if ("one-column" === variant) {
    num3 = 32;
  }
  obj1.marginTop = num3;
  obj1.marginBottom = importDefault(dependencyMap[10]).space.PX_12;
  obj1.marginHorizontal = importDefault(dependencyMap[10]).space.PX_12;
  obj.content = obj1;
  obj.guildIconContainer = { top: getGuildIconTop(variant) };
  const obj2 = { top: getGuildIconTop(variant) };
  obj.guildIcon = { width: tmp2, height: tmp2, borderRadius: importDefault(dependencyMap[10]).radii.lg };
  const obj3 = { width: tmp2, height: tmp2, borderRadius: importDefault(dependencyMap[10]).radii.lg };
  obj.guildNameRow = { marginBottom: importDefault(dependencyMap[10]).space.PX_4 };
  const obj5 = {};
  const space = importDefault(dependencyMap[10]).space;
  obj5.marginRight = "one-column" === variant ? space.PX_8 : space.PX_4;
  obj.guildBadge = obj5;
  obj.guildName = {};
  const obj6 = {};
  const space2 = importDefault(dependencyMap[10]).space;
  obj6.marginBottom = "one-column" === variant ? space2.PX_8 : space2.PX_4;
  obj.description = obj6;
  const obj4 = { marginBottom: importDefault(dependencyMap[10]).space.PX_4 };
  obj.memberCounts = { flexDirection: "row", gap: importDefault(dependencyMap[10]).space.PX_16 };
  const obj8 = { <string:3327959291>: 231584265132739040000000000000000000000000000000000000000000000000000000000000, <string:657281378>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000858413609814, <string:1666624098>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000169759663475, <string:1392078417>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004330043792816825, <string:3389288353>: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023797674773758956 };
  const space3 = importDefault(dependencyMap[10]).space;
  obj8.marginBottom = "one-column" === variant ? space3.PX_12 : space3.PX_8;
  obj.memberCount = obj8;
  const obj9 = { width: num, height: num };
  const result = num / 2;
  obj9.borderRadius = result;
  obj9.backgroundColor = importDefault(dependencyMap[10]).colors.TEXT_STATUS_OFFLINE;
  obj.dot = obj9;
  const obj10 = { width: num, height: num, borderRadius: result, backgroundColor: importDefault(dependencyMap[10]).colors.TEXT_STATUS_ONLINE };
  obj.dotOnline = obj10;
  const obj7 = { flexDirection: "row", gap: importDefault(dependencyMap[10]).space.PX_16 };
  obj.dismissButton = { width: 2 * importDefault(dependencyMap[10]).radii.lg, height: 2 * importDefault(dependencyMap[10]).radii.lg, borderRadius: importDefault(dependencyMap[10]).radii.lg, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
  return obj;
});
const obj = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/game_community_upsell/native/GameCommunityMultiGuildUpsellCard.tsx");

export default function GameCommunityMultiGuildUpsellCard(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const gameId = guild.gameId;
  const importDefault = gameId;
  const variant = guild.variant;
  const dependencyMap = variant;
  const onDismiss = guild.onDismiss;
  let callback = onDismiss;
  let closure_9;
  const tmp = callback5(variant);
  const tmp2 = callback2(React.useState(false), 2);
  const first = tmp2[0];
  const callback2 = first;
  const React = tmp2[1];
  let obj = arg1(dependencyMap[11]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => tmp6.useReducedMotion);
  let obj1 = arg1(dependencyMap[11]);
  const items1 = [closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => null != tmp8.getGuild(guild.id));
  const tmp6 = getGuildIconSize(variant);
  closure_8 = tmp6;
  const items2 = [, , , ];
  ({ id: arr3[0], icon: arr3[1] } = guild);
  items2[2] = stateFromStores;
  items2[3] = tmp6;
  let tmp8 = !stateFromStores;
  const memo = React.useMemo(() => {
    const icon = guild.icon;
    let tmp = null;
    if (null != icon) {
      tmp = icon;
    }
    let obj = gameId(variant[12]);
    obj = { id: guild.id, icon: tmp, canAnimate: !stateFromStores, size: tmp6 * guild(variant[13]).getDevicePixelRatio() };
    return obj.getGuildIconSource(obj);
  }, items2);
  if (tmp8) {
    const features = guild.features;
    tmp8 = true === features.has(constants.ANIMATED_BANNER);
  }
  closure_9 = tmp8;
  const items3 = [, , , , ];
  ({ id: arr4[0], splash: arr4[1], banner: arr4[2] } = guild);
  items3[3] = tmp8;
  items3[4] = variant;
  const fn = () => {
    let banner;
    let splash;
    ({ splash, banner } = guild);
    const guild = banner;
    if (null != splash) {
      let obj = { id: guild.id, splash };
      const obj2 = gameId(variant[12]);
      const tmp10 = callback2(variant);
      obj.size = tmp10 * guild(variant[13]).getDevicePixelRatio();
      let guildSplashSource = obj2.getGuildSplashSource(obj);
      const obj4 = guild(variant[13]);
    } else {
      guildSplashSource = null;
      if (null != banner) {
        obj = gameId(variant[12]);
        guildSplashSource = obj.getAnimatableSourceWithFallback(tmp8, (hasItem) => {
          let obj = callback(closure_2[12]);
          obj = { id: banner.id, banner };
          return obj.getGuildBannerSource(obj, hasItem);
        });
      }
    }
    return guildSplashSource;
  };
  const memo1 = React.useMemo(fn, items3);
  // CreateGeneratorClosureLongIndex (0x67)
  const items4 = [guild.id, stateFromStores1, first, gameId, variant];
  const items5 = [guild.id];
  callback = React.useCallback(callback(fn), items4);
  const items6 = [guild.id, gameId, onDismiss];
  const callback1 = React.useCallback(() => {
    guild(variant[16]).transitionToGuild(guild.id);
  }, items5);
  const memo2 = React.useMemo(() => {
    if (null == onDismiss) {
      let items = [];
    } else {
      const obj = {};
      const intl = guild(variant[17]).intl;
      obj.label = intl.string(guild(variant[17]).t.XW1okC);
      obj.variant = "destructive";
      obj.action = function action() {
        return callback(id.id, closure_1);
      };
      items = [obj];
    }
    return items;
  }, items6);
  const presenceCount = guild.presenceCount;
  let num = 0;
  if (null != presenceCount) {
    num = presenceCount;
  }
  const memberCount = guild.memberCount;
  let num2 = 0;
  if (null != memberCount) {
    num2 = memberCount;
  }
  const description = guild.description;
  obj = { style: tmp.card };
  obj = { style: tmp.bannerContainer };
  obj1 = { style: tmp.banner };
  const obj2 = { shape: arg1(dependencyMap[18]).CutoutShape.RoundedRect, x: 12, y: getGuildIconTop(variant) - 4 };
  const sum = tmp6 + 8;
  obj2.width = sum;
  obj2.height = sum;
  obj2.cornerRadius = importDefault(dependencyMap[10]).radii.lg + 4;
  const items7 = [obj2];
  obj1.cutouts = items7;
  if (null != memo1) {
    const obj3 = { style: tmp.banner, source: memo1, resizeMode: "cover" };
    let tmp20 = callback3(stateFromStores, obj3);
  } else {
    const obj4 = { style: tmp.banner };
    tmp20 = callback3(stateFromStores1, obj4);
  }
  obj1.children = tmp20;
  obj.children = callback3(importDefault(dependencyMap[18]), obj1);
  const items8 = [callback3(stateFromStores1, obj), , , ];
  const tmp13 = callback4;
  const tmp16 = importDefault(dependencyMap[18]);
  items8[1] = callback3(stateFromStores1, { style: tmp.guildIconContainer, children: callback3(stateFromStores, obj6) });
  const obj7 = { style: tmp.content };
  const obj8 = {};
  const obj9 = { style: tmp.guildNameRow };
  const obj10 = { guild };
  let tmp27 = "one-column" === variant;
  const obj5 = { style: tmp.guildIconContainer, children: callback3(stateFromStores, obj6) };
  const tmp23 = callback3;
  const Sizes = arg1(dependencyMap[20]).Icon.Sizes;
  obj10.size = tmp27 ? Sizes.REFRESH_SMALL_16 : Sizes.EXTRA_SMALL;
  obj10.style = tmp.guildBadge;
  const items9 = [tmp23(importDefault(dependencyMap[19]), obj10), ];
  const obj11 = {};
  let str2 = "heading-sm/bold";
  if (tmp27) {
    str2 = "heading-md/bold";
  }
  obj11.variant = str2;
  obj11.style = tmp.guildName;
  obj11.children = guild.name;
  items9[1] = callback3(arg1(dependencyMap[21]).Text, obj11);
  obj9.children = items9;
  const items10 = [callback4(stateFromStores1, obj9), ];
  let tmp30Result = null != description && description.length > 0;
  if (tmp30Result) {
    const obj12 = {};
    let str3 = "text-xs/medium";
    if (tmp27) {
      str3 = "text-sm/medium";
    }
    obj12.variant = str3;
    obj12.style = tmp.description;
    obj12.lineClamp = 3;
    obj12.children = description;
    tmp30Result = callback3(arg1(dependencyMap[21]).Text, obj12);
    const tmp30 = callback3;
  }
  items10[1] = tmp30Result;
  obj8.children = items10;
  const items11 = [callback4(stateFromStores1, obj8), ];
  const obj13 = {};
  const obj14 = { style: tmp.memberCounts };
  let tmp35 = num > 0;
  if (tmp35) {
    const obj15 = { style: tmp.memberCount };
    const obj16 = { style: tmp.dotOnline };
    const items12 = [callback3(stateFromStores1, obj16), ];
    const obj17 = {};
    const intl = arg1(dependencyMap[17]).intl;
    const obj18 = { membersOnline: num };
    obj17.children = intl.format(arg1(dependencyMap[17]).t.LC+S+m, obj18);
    items12[1] = callback3(arg1(dependencyMap[21]).Text, obj17);
    obj15.children = items12;
    tmp35 = callback4(stateFromStores1, obj15);
  }
  const items13 = [tmp35, ];
  if (tmp27) {
    tmp27 = num2 > 0;
  }
  if (tmp27) {
    const obj19 = { style: tmp.memberCount };
    const obj20 = { style: tmp.dot };
    const items14 = [callback3(stateFromStores1, obj20), ];
    const obj21 = {};
    const intl2 = arg1(dependencyMap[17]).intl;
    const obj22 = { count: num2 };
    obj21.children = intl2.format(arg1(dependencyMap[17]).t.zRl6XR, obj22);
    items14[1] = callback3(arg1(dependencyMap[21]).Text, obj21);
    obj19.children = items14;
    tmp27 = callback4(stateFromStores1, obj19);
  }
  items13[1] = tmp27;
  obj14.children = items13;
  const items15 = [callback4(stateFromStores1, obj14), ];
  if (stateFromStores1) {
    const obj23 = { accessibilityRole: "/assets/.cache/intl/bW9kdWxlcy9ndWlsZF9zZXR0aW5ncy9zZXJ2ZXJfbW9uZXRpemF0aW9uL3RhZ3Mvd2Vi", flags: null, <string:2572309345>: "1196cd91cfbb75ac7df7b4b444d58498", <string:1386796460>: "nl.messages.1196cd91cfbb75ac7df7b4b444d58498.compiled.messages", <string:3768829600>: "jsona" };
    const intl4 = arg1(dependencyMap[17]).intl;
    obj23.text = intl4.string(arg1(dependencyMap[17]).t.KLOhbO);
    obj23.onPress = callback1;
    let obj24 = obj23;
  } else {
    obj24 = { 9223372036854775807: 32768000, -9223372036854775808: 30653696, loading: first };
    const intl3 = arg1(dependencyMap[17]).intl;
    obj24.text = intl3.string(arg1(dependencyMap[17]).t.VJlc0S);
    obj24.onPress = callback;
    obj24.grow = true;
  }
  items15[1] = callback3(arg1(dependencyMap[22]).Button, obj24);
  obj13.children = items15;
  items11[1] = callback4(stateFromStores1, obj13);
  obj7.children = items11;
  items8[2] = callback4(stateFromStores1, obj7);
  let tmp51 = memo2.length > 0;
  if (tmp51) {
    const obj25 = { style: tmp.dismissButton };
    const obj26 = {
      items: memo2,
      children(ref) {
          let obj = Object.create(null);
          obj.ref = 0;
          const merged = Object.assign(ref, obj);
          obj = { ref: ref.ref };
          const merged1 = Object.assign(merged);
          obj["icon"] = callback(guild(variant[25]).MoreHorizontalIcon, { size: "sm" });
          obj["size"] = "sm";
          obj["variant"] = "secondary-overlay";
          const intl = guild(variant[17]).intl;
          obj["accessibilityLabel"] = intl.string(guild(variant[17]).t.ogxXGq);
          return callback(guild(variant[24]).IconButton, obj);
        }
    };
    obj25.children = callback3(arg1(dependencyMap[23]).ContextMenu, obj26);
    tmp51 = callback3(stateFromStores1, obj25);
  }
  items8[3] = tmp51;
  obj.children = items8;
  return tmp13(stateFromStores1, obj);
};
