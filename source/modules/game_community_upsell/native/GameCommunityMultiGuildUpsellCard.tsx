// Module ID: 15141
// Function ID: 115221
// Name: getGuildIconSize
// Dependencies: [5, 57, 31, 27, 4122, 1838, 653, 33, 1450, 4130, 689, 566, 1392, 1426, 675, 5048, 5737, 1212, 7961, 5701, 1273, 4126, 4543, 9338, 7533, 9007, 2]
// Exports: default

// Module 15141 (getGuildIconSize)
import closure_3 from "_createForOfIteratorHelperLoose";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_6;
let closure_7;
const require = arg1;
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
  const width = require(1450) /* useWindowDimensions */.getWindowDimensions().width;
  let result = width;
  if ("one-column" !== arg0) {
    result = width / 2;
  }
  return result;
}
({ Image: closure_6, View: closure_7 } = get_ActivityIndicator);
({ GuildFeatures: closure_10, JoinGuildSources: closure_11, AnalyticEvents: closure_12 } = ME);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
let closure_15 = _createForOfIteratorHelperLoose.createStyles((variant) => {
  let num = 10;
  if ("one-column" === variant) {
    num = 12;
  }
  const tmp2 = getGuildIconSize(variant);
  let obj = {};
  obj = { backgroundColor: importDefault(689).colors.BG_SURFACE_RAISED, borderColor: importDefault(689).colors.BORDER_MUTED, borderWidth: 1, borderRadius: importDefault(689).radii.lg, overflow: "hidden", flex: 1, marginBottom: importDefault(689).space.PX_16 };
  obj.card = obj;
  obj = {};
  let num2 = 80;
  if ("one-column" === variant) {
    num2 = 88;
  }
  obj.height = num2;
  obj.backgroundColor = importDefault(689).colors.CARD_BACKGROUND_DEFAULT;
  obj.bannerContainer = obj;
  obj.banner = { flex: 1 };
  const obj1 = { flex: 1, justifyContent: "space-between" };
  let num3 = 28;
  if ("one-column" === variant) {
    num3 = 32;
  }
  obj1.marginTop = num3;
  obj1.marginBottom = importDefault(689).space.PX_12;
  obj1.marginHorizontal = importDefault(689).space.PX_12;
  obj.content = obj1;
  const obj2 = { position: "absolute", top: getGuildIconTop(variant), left: 16 };
  obj.guildIconContainer = obj2;
  obj.guildIcon = { width: tmp2, height: tmp2, borderRadius: importDefault(689).radii.lg };
  const obj4 = { flexDirection: "row", alignItems: "center", marginBottom: importDefault(689).space.PX_4 };
  obj.guildNameRow = obj4;
  const obj5 = {};
  const space = importDefault(689).space;
  obj5.marginRight = "one-column" === variant ? space.PX_8 : space.PX_4;
  obj.guildBadge = obj5;
  obj.guildName = { flex: 1, minWidth: 0 };
  const obj6 = {};
  const space2 = importDefault(689).space;
  obj6.marginBottom = "one-column" === variant ? space2.PX_8 : space2.PX_4;
  obj.description = obj6;
  const obj3 = { width: tmp2, height: tmp2, borderRadius: importDefault(689).radii.lg };
  obj.memberCounts = { flexDirection: "row", gap: importDefault(689).space.PX_16 };
  const obj8 = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: null, gap: 6 };
  const space3 = importDefault(689).space;
  obj8.marginBottom = "one-column" === variant ? space3.PX_12 : space3.PX_8;
  obj.memberCount = obj8;
  const obj9 = { width: num, height: num };
  const result = num / 2;
  obj9.borderRadius = result;
  obj9.backgroundColor = importDefault(689).colors.TEXT_STATUS_OFFLINE;
  obj.dot = obj9;
  const obj10 = { width: num, height: num, borderRadius: result, backgroundColor: importDefault(689).colors.TEXT_STATUS_ONLINE };
  obj.dotOnline = obj10;
  const obj11 = { position: "absolute", top: 8, right: 8, width: 2 * importDefault(689).radii.lg, height: 2 * importDefault(689).radii.lg, borderRadius: importDefault(689).radii.lg, backgroundColor: importDefault(689).colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
  obj.dismissButton = obj11;
  return obj;
});
let result = require("result").fileFinishedImporting("modules/game_community_upsell/native/GameCommunityMultiGuildUpsellCard.tsx");

export default function GameCommunityMultiGuildUpsellCard(guild) {
  guild = guild.guild;
  const gameId = guild.gameId;
  const variant = guild.variant;
  const onDismiss = guild.onDismiss;
  let c9;
  let tmp = callback3(variant);
  const tmp2 = first(React.useState(false), 2);
  first = tmp2[0];
  React = tmp2[1];
  let obj = guild(variant[11]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => tmp6.useReducedMotion);
  let obj1 = guild(variant[11]);
  const items1 = [c9];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => null != _undefined.getGuild(guild.id));
  const tmp6 = getGuildIconSize(variant);
  _isNativeReflectConstruct = tmp6;
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
    obj = { id: guild.id, icon: tmp, canAnimate: !stateFromStores, size: _isNativeReflectConstruct * guild(variant[13]).getDevicePixelRatio() };
    return obj.getGuildIconSource(obj);
  }, items2);
  if (tmp8) {
    const features = guild.features;
    tmp8 = true === features.has(constants.ANIMATED_BANNER);
  }
  c9 = tmp8;
  const items3 = [, , , , ];
  ({ id: arr4[0], splash: arr4[1], banner: arr4[2] } = guild);
  items3[3] = tmp8;
  items3[4] = variant;
  const fn = () => {
    let banner;
    let splash;
    ({ splash, banner } = banner);
    if (null != splash) {
      let obj = { id: banner.id, splash };
      const obj2 = gameId(variant[12]);
      const tmp10 = outer1_18(variant);
      obj.size = tmp10 * guild(variant[13]).getDevicePixelRatio();
      let guildSplashSource = obj2.getGuildSplashSource(obj);
      const obj4 = guild(variant[13]);
    } else {
      guildSplashSource = null;
      if (null != banner) {
        obj = gameId(variant[12]);
        guildSplashSource = obj.getAnimatableSourceWithFallback(c9, (hasItem) => {
          let obj = gameId(variant[12]);
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
  const callback = React.useCallback(onDismiss(fn), items4);
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
        return outer1_3(outer1_0.id, outer1_1);
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
  let obj2 = { shape: guild(variant[18]).CutoutShape.RoundedRect, x: 12, y: getGuildIconTop(variant) - 4 };
  const sum = tmp6 + 8;
  obj2.width = sum;
  obj2.height = sum;
  obj2.cornerRadius = gameId(variant[10]).radii.lg + 4;
  const items7 = [obj2];
  obj1.cutouts = items7;
  if (null != memo1) {
    const obj3 = { style: tmp.banner, source: memo1, resizeMode: "cover" };
    let tmp20 = callback(stateFromStores, obj3);
  } else {
    let obj4 = { style: tmp.banner };
    tmp20 = callback(stateFromStores1, obj4);
  }
  obj1.children = tmp20;
  obj.children = callback(gameId(variant[18]), obj1);
  const items8 = [callback(stateFromStores1, obj), , , ];
  const tmp13 = callback2;
  const tmp16 = gameId(variant[18]);
  items8[1] = callback(stateFromStores1, { style: tmp.guildIconContainer, children: callback(stateFromStores, obj6) });
  const obj7 = { style: tmp.content };
  const obj8 = {};
  const obj9 = { style: tmp.guildNameRow };
  const obj10 = { guild };
  let tmp27 = "one-column" === variant;
  const obj5 = { style: tmp.guildIconContainer, children: callback(stateFromStores, obj6) };
  const tmp23 = callback;
  const Sizes = guild(variant[20]).Icon.Sizes;
  obj10.size = tmp27 ? Sizes.REFRESH_SMALL_16 : Sizes.EXTRA_SMALL;
  obj10.style = tmp.guildBadge;
  const items9 = [tmp23(gameId(variant[19]), obj10), ];
  const obj11 = { variant: null, color: "mobile-text-heading-primary", accessibilityRole: "header", style: null, lineClamp: 1 };
  let str2 = "heading-sm/bold";
  if (tmp27) {
    str2 = "heading-md/bold";
  }
  obj11.variant = str2;
  obj11.style = tmp.guildName;
  obj11.children = guild.name;
  items9[1] = callback(guild(variant[21]).Text, obj11);
  obj9.children = items9;
  const items10 = [callback2(stateFromStores1, obj9), ];
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
    tmp30Result = callback(guild(variant[21]).Text, obj12);
    const tmp30 = callback;
  }
  items10[1] = tmp30Result;
  obj8.children = items10;
  const items11 = [callback2(stateFromStores1, obj8), ];
  const obj13 = {};
  const obj14 = { style: tmp.memberCounts };
  let tmp35 = num > 0;
  if (tmp35) {
    const obj15 = { style: tmp.memberCount };
    const obj16 = { style: tmp.dotOnline };
    const items12 = [callback(stateFromStores1, obj16), ];
    const obj17 = { variant: "text-xs/medium", color: "text-subtle" };
    let intl = guild(variant[17]).intl;
    const obj18 = { membersOnline: num };
    obj17.children = intl.format(guild(variant[17]).t["LC+S+m"], obj18);
    items12[1] = callback(guild(variant[21]).Text, obj17);
    obj15.children = items12;
    tmp35 = callback2(stateFromStores1, obj15);
  }
  const items13 = [tmp35, ];
  if (tmp27) {
    tmp27 = num2 > 0;
  }
  if (tmp27) {
    const obj19 = { style: tmp.memberCount };
    const obj20 = { style: tmp.dot };
    const items14 = [callback(stateFromStores1, obj20), ];
    const obj21 = { variant: "text-xs/medium", color: "text-subtle" };
    const intl2 = guild(variant[17]).intl;
    const obj22 = { count: num2 };
    obj21.children = intl2.format(guild(variant[17]).t.zRl6XR, obj22);
    items14[1] = callback(guild(variant[21]).Text, obj21);
    obj19.children = items14;
    tmp27 = callback2(stateFromStores1, obj19);
  }
  items13[1] = tmp27;
  obj14.children = items13;
  const items15 = [callback2(stateFromStores1, obj14), ];
  if (stateFromStores1) {
    const obj23 = { variant: "active", size: "sm", text: null, onPress: null, grow: true };
    const intl4 = guild(variant[17]).intl;
    obj23.text = intl4.string(guild(variant[17]).t.KLOhbO);
    obj23.onPress = callback1;
    let obj24 = obj23;
  } else {
    obj24 = { variant: "primary", size: "sm", loading: first };
    const intl3 = guild(variant[17]).intl;
    obj24.text = intl3.string(guild(variant[17]).t.VJlc0S);
    obj24.onPress = callback;
    obj24.grow = true;
  }
  items15[1] = callback(guild(variant[22]).Button, obj24);
  obj13.children = items15;
  items11[1] = callback2(stateFromStores1, obj13);
  obj7.children = items11;
  items8[2] = callback2(stateFromStores1, obj7);
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
          obj["icon"] = outer1_13(guild(variant[25]).MoreHorizontalIcon, { size: "sm" });
          obj["size"] = "sm";
          obj["variant"] = "secondary-overlay";
          const intl = guild(variant[17]).intl;
          obj["accessibilityLabel"] = intl.string(guild(variant[17]).t.ogxXGq);
          return outer1_13(guild(variant[24]).IconButton, obj);
        }
    };
    obj25.children = callback(guild(variant[23]).ContextMenu, obj26);
    tmp51 = callback(stateFromStores1, obj25);
  }
  items8[3] = tmp51;
  obj.children = items8;
  return tmp13(stateFromStores1, obj);
};
