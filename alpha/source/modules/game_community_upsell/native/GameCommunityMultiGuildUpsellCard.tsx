// Module ID: 17755
// Function ID: 17756
// Name: GameCommunityMultiGuildUpsellCard
// Dependencies: [5, 32, 19, 17, 4973, 4905, 4846, 1084, 21, 4972, 587, 504, 1414, 1449, 1496, 7450, 7449, 6832, 7321, 1125, 9405, 5670, 9236, 1199, 5235, 5245, 9763, 7957, 9646, 2]
// Exports: default

// Module 17755 (GameCommunityMultiGuildUpsellCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1125 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1449 */;
import transitionToGuild from "transitionToGuild" /* 7450 */;
import IconButton2 from "IconButton" /* 7957 */;
import MoreHorizontalIcon from "MoreHorizontalIcon" /* 9646 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4973 */;
import LurkingStore from "LurkingStore" /* 4905 */;
import GuildStore from "GuildStore" /* 4846 */;
import Constants from "Constants" /* 1084 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4972 */;
import size_mod from "module_2" /* 2 */;

let c4, c5;

let c10;
let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let size2;
let size3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ GuildFeatures: c10, JoinGuildSources: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, bannerContainer: obj3, banner: { flex: 1 }, content: obj4, guildIconContainer: { position: "absolute", top: 58, left: 16 }, guildIcon: size, guildNameRow: obj5, guildBadge: obj6, guildName: { flex: 1, minWidth: 0 }, description: obj7, memberCounts: obj8, memberCount: obj9, dot: size1, dotOnline: size2, dismissButton: size3 };
obj2 = { backgroundColor: nativeDefault.colors.BG_SURFACE_RAISED, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1, borderRadius: nativeDefault.radii.lg, overflow: "hidden", flex: 1, marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { height: 88, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
obj4 = { flex: 1, justifyContent: "space-between", marginTop: 32, marginBottom: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_12 };
size = { width: 56, height: 56, borderRadius: nativeDefault.radii.lg };
obj5 = { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_4 };
obj6 = { marginRight: nativeDefault.space.PX_8 };
obj7 = { marginBottom: nativeDefault.space.PX_8 };
obj8 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj9 = { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_12, gap: 6 };
size1 = { width: 12, height: 12, borderRadius: 6, backgroundColor: nativeDefault.colors.TEXT_STATUS_OFFLINE };
size2 = { width: 12, height: 12, borderRadius: 6, backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
size3 = { position: "absolute", top: 8, right: 8, width: 2 * nativeDefault.radii.lg, height: 2 * nativeDefault.radii.lg, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
let closure_14 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/game_community_upsell/native/GameCommunityMultiGuildUpsellCard.tsx");

export default function GameCommunityMultiGuildUpsellCard(guild) {
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items10;
  let items12;
  let items13;
  let items14;
  let items15;
  let items8;
  let items9;
  let loading;
  let obj10;
  let obj20;
  let obj24;
  let obj26;
  let obj27;
  let obj28;
  let obj31;
  let obj6;
  let tmp16Result;
  let tmp18;
  guild = guild.guild;
  const gameId = guild.gameId;
  let onDismiss = guild.onDismiss;
  loading = undefined;
  _slicedToArray = undefined;
  let stateFromStores;
  let closure_6;
  let name;
  let tmp = closure_14();
  let obj = stateFromStores;
  [loading, _slicedToArray] = stateFromStores.useState(false);
  const tmp4 = guild;
  let obj2 = guild(onDismiss[11]);
  let items = [name];
  stateFromStores = obj2.useStateFromStores(items, () => name.useReducedMotion);
  let obj3 = guild(onDismiss[11]);
  const items1 = [GuildStore, LurkingStore];
  const items2 = [guild.id];
  const items3 = [, , ];
  ({ id: arr4[0], icon: arr4[1] } = guild);
  items3[2] = stateFromStores;
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let tmp2 = null != GuildStore.getGuild(guild.id);
    const tmp = guild;
    if (tmp2) {
      tmp2 = !LurkingStore.isLurking(tmp.id);
    }
    return tmp2;
  }, items2);
  let tmp9 = !stateFromStores;
  const memo = stateFromStores.useMemo(() => {
    let obj2;
    let icon = guild.icon;
    const tmp = guild;
    if (icon == null) {
      icon = null;
    }
    const obj = { id: tmp.id, icon, canAnimate: !stateFromStores, size: 56 * obj2.getDevicePixelRatio() };
    const getGuildIconSource = AvatarUtilsDefault.getGuildIconSource;
    AvatarUtilsDefault;
    obj2 = ImageLoaderUtils;
    return getGuildIconSource(obj);
  }, items3);
  if (!stateFromStores) {
    const features = guild.features;
    tmp9 = true === features.has(constants.ANIMATED_BANNER);
  }
  closure_6 = tmp9;
  const items4 = [, , , ];
  ({ id: arr5[0], splash: arr5[1], banner: arr5[2] } = guild);
  items4[3] = tmp9;
  const memo1 = obj.useMemo(() => {
    let banner;
    let guildSplashSource;
    let obj4;
    let splash;
    let width;
    ({ splash, banner } = banner);
    if (null != splash) {
      let obj2 = { id: tmp.id, splash, size: width * obj4.getDevicePixelRatio() };
      const getGuildSplashSource = gameId(onDismiss[12]).getGuildSplashSource;
      gameId(onDismiss[12]);
      const obj3 = guild(onDismiss[14]);
      width = obj3.getWindowDimensions().width;
      obj4 = guild(onDismiss[13]);
      guildSplashSource = getGuildSplashSource(obj2);
    } else {
      guildSplashSource = null;
      if (null != banner) {
        let obj = gameId(onDismiss[12]);
        guildSplashSource = obj.getAnimatableSourceWithFallback(closure_6, (hasItem) => {
          const obj = AvatarUtilsDefault;
          const obj2 = { id: guild.id, banner };
          return obj.getGuildBannerSource(obj2, hasItem);
        });
      }
    }
    return guildSplashSource;
  }, items4);
  const items5 = [guild.id];
  const callback = obj.useCallback(() => {
    const obj = transitionToGuild;
    obj.transitionToGuild(guild.id);
  }, items5);
  const items6 = [guild.id, loading];
  const items7 = [guild.id, gameId, onDismiss];
  const callback1 = obj.useCallback(loading(function*(arg0, value) {
    let closure_0;
    let closure_1;
    let closure_2;
    let obj2;
    let obj6;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            guild = tmp4;
            const tmp43 = first;
            if (!tmp43) {
              v2(true);
              c3 = 2;
              const obj7 = { joinSource: constants.GAME_COMMUNITY_UPSELL, shouldNavigate: false };
              c4 = 3;
              c5 = 1;
              const obj8 = { value: obj6.startLurking(guild.id, {}, obj7), done: false };
              obj6 = guild(onDismiss[16]);
              return obj8;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_129_4(false);
          throw onDismiss;
        } else {
          if (2 === c4) {
            c3 = 1;
            guild = onDismiss;
            const obj5 = guild(onDismiss[18]);
            const result = obj5.ignoreJoinGuildRefused(guild);
          } else if (3 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_4(false);
              c5 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              c4 = 4;
              c5 = 1;
              const obj10 = { value: obj2.transitionToGuildSync(closure_129_0.id, { navigationReplace: true }), done: false };
              obj2 = tmp(onDismiss[17]);
              return obj10;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_4(false);
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 1;
          }
          c3 = 0;
          closure_129_4(false);
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp37) {
        onDismiss = tmp37;
        if (0 === c3) {
          c5 = 3;
          throw tmp37;
        } else if (1 === tmp39) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  }), items6);
  const memo2 = obj.useMemo(() => {
    let id;
    let intl;
    let items;
    if (null == onDismiss) {
      items = [];
    } else {
      const obj = {
        label: intl.string(intl7.t.XW1okC),
        variant: "destructive",
        action() {
            return onDismiss(id.id, gameId);
          }
      };
      intl = intl7.intl;
      items = [obj];
    }
    return items;
  }, items7);
  let num = guild.presenceCount;
  if (num == null) {
    num = 0;
  }
  let num2 = guild.memberCount;
  if (num2 == null) {
    num2 = 0;
  }
  name = guild.name;
  const description = guild.description;
  let obj4 = { style: tmp.card, children: items9 };
  let obj5 = { style: tmp.bannerContainer, children: tmp16(tmp18, obj6) };
  obj6 = { style: tmp.banner, cutouts: items8, children: tmp16Result };
  size = { shape: tmp4(tmp5[20]).CutoutShape.RoundedRect, x: 12, y: 54, width: 64, height: 64, cornerRadius: gameId(tmp5[10]).radii.lg + 4 };
  items8 = [size];
  tmp18 = gameId(onDismiss[20]);
  if (null != memo1) {
    let obj7 = { style: tmp.banner, source: memo1, resizeMode: "cover" };
    tmp16Result = tmp16(tmp17(tmp5[21]), obj7);
  } else {
    let obj8 = { style: tmp.banner };
    tmp16Result = tmp16(tmp15, obj8);
  }
  items9 = [tmp16(tmp15, obj5), , , ];
  let obj9 = { style: tmp.guildIconContainer, children: tmp16(tmp17(tmp5[21]), obj10) };
  obj10 = { style: tmp.guildIcon, source: memo };
  items9[1] = closure_12(closure_6, obj9);
  const obj11 = { style: tmp.content, children: items12 };
  const obj12 = { style: tmp.guildNameRow, children: items10 };
  const obj13 = { guild, size: tmp4(onDismiss[23]).Icon.Sizes.REFRESH_SMALL_16, style: tmp.guildBadge };
  const tmp17Result = gameId(onDismiss[22]);
  items10 = [tmp16(tmp17Result, obj13), ];
  const obj14 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", style: tmp.guildName, lineClamp: 1, children: name };
  items10[1] = closure_12(tmp4(onDismiss[24]).Text, obj14);
  const items11 = [tmp14(tmp15, obj12), ];
  let tmp16Result3 = null != description;
  if (tmp16Result3) {
    tmp16Result3 = description.length > 0;
  }
  if (tmp16Result3) {
    const obj15 = { variant: "text-sm/medium", style: tmp.description, lineClamp: 3, children: description };
    tmp16Result3 = tmp16(tmp4(tmp5[24]).Text, obj15);
  }
  items11[1] = tmp16Result3;
  items12 = [tmp14(tmp15, { children: items11 }), ];
  let tmp14Result = num > 0;
  const obj16 = { style: tmp.memberCounts, children: items14 };
  if (tmp14Result) {
    const obj17 = { style: tmp.memberCount, children: items13 };
    const obj18 = { style: tmp.dotOnline };
    items13 = [tmp16(tmp15, obj18), ];
    const obj19 = { variant: "text-xs/medium", color: "text-subtle", children: intl.format(tmp4(onDismiss[19]).t["LC+S+m"], obj20) };
    const Text = tmp4(tmp5[24]).Text;
    intl = tmp4(tmp5[19]).intl;
    obj20 = { membersOnline: num };
    items13[1] = closure_12(Text, obj19);
    tmp14Result = tmp14(tmp15, obj17);
  }
  items14 = [tmp14Result, ];
  let tmp14Result2 = num2 > 0;
  if (tmp14Result2) {
    const obj21 = { style: tmp.memberCount, children: items15 };
    const obj22 = { style: tmp.dot };
    items15 = [tmp16(tmp15, obj22), ];
    const obj23 = { variant: "text-xs/medium", color: "text-subtle", children: intl2.format(tmp4(onDismiss[19]).t.zRl6XR, obj24) };
    const Text2 = tmp4(tmp5[24]).Text;
    intl2 = tmp4(tmp5[19]).intl;
    obj24 = { count: num2 };
    items15[1] = closure_12(Text2, obj23);
    tmp14Result2 = tmp14(tmp15, obj21);
  }
  items14[1] = tmp14Result2;
  const items16 = [tmp14(tmp15, obj16), ];
  const Button = tmp4(tmp5[25]).Button;
  if (stateFromStores1) {
    const obj25 = { variant: "active", size: "md", text: intl5.string(tmp4(onDismiss[19]).t.KLOhbO), accessibilityLabel: intl6.formatToPlainString(tmp4(onDismiss[19]).t["3IpLLa"], obj26), onPress: callback, grow: true };
    intl5 = tmp4(tmp5[19]).intl;
    intl6 = tmp4(tmp5[19]).intl;
    obj27 = obj25;
    obj26 = { guildName: name };
  } else {
    obj27 = { variant: "primary", size: "md", loading, text: intl3.string(tmp4(tmp5[19]).t.SKNnqq), accessibilityLabel: intl4.formatToPlainString(tmp4(tmp5[19]).t["/2nToO"], obj28), onPress: callback1, grow: true };
    intl3 = tmp4(tmp5[19]).intl;
    intl4 = tmp4(tmp5[19]).intl;
    obj28 = { guildName: name };
  }
  const obj29 = { children: items16 };
  items16[1] = closure_12(Button, obj27);
  items12[1] = closure_13(closure_6, obj29);
  items9[2] = closure_13(closure_6, obj11);
  let tmp16Result4 = memo2.length > 0;
  if (tmp16Result4) {
    const obj30 = { style: tmp.dismissButton, children: closure_12(tmp4(onDismiss[26]).ContextMenu, obj31) };
    obj31 = {
      items: memo2,
      children(ref) {
          let intl;
          let obj2;
          ref = ref.ref;
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref, icon: authStore2(MoreHorizontalIcon.MoreHorizontalIcon, { size: "sm" }), size: "sm", variant: "secondary-overlay", accessibilityLabel: intl.formatToPlainString(intl7.t.nosl52, obj2) };
          const IconButton = IconButton2.IconButton;
          const merged1 = Object.assign(merged);
          intl = intl7.intl;
          obj2 = { guildName: name };
          return authStore2(IconButton, obj);
        }
    };
    tmp16Result4 = tmp16(tmp15, obj30);
  }
  items9[3] = tmp16Result4;
  return closure_13(closure_6, obj4);
};
