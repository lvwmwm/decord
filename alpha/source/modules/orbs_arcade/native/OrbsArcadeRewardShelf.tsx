// Module ID: 16963
// Function ID: 16964
// Name: OrbsArcadeRewardShelf
// Dependencies: [19, 17, 2063, 16954, 21, 575, 5009, 504, 13374, 9487, 5619, 1114, 16961, 16964, 16965, 16955, 9520, 7617, 16966, 16970, 671, 16971, 5582, 7372, 2]
// Exports: default

// Module 16963 (OrbsArcadeRewardShelf)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import intl6 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import useCountdownDefault from "useCountdown" /* 7617 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16955 */;
import OrbsArcadeRewardUtils from "OrbsArcadeRewardUtils" /* 16961 */;
import OrbsArcadeRewardPreviewDefault from "OrbsArcadeRewardPreview" /* 16964 */;
import OrbsArcadeRewardStatusLabelDefault from "OrbsArcadeRewardStatusLabel" /* 16965 */;
import ChestLogoSpotIllustration from "ChestLogoSpotIllustration" /* 16966 */;
import openOrbsArcadeSheets from "openOrbsArcadeSheets" /* 16971 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2063 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16954 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let items1;
let items2;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp2;
let unpackModuleId;
const NitroCoinSpotIllustration = tmp2(9520);
function OrbsArcadeClaimableRewardsShelfContent(rewards) {
  let intl;
  let items2;
  let items3;
  let locale;
  rewards = rewards.rewards;
  const tmp = closure_14();
  let obj = rewards(504);
  items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [stateFromStores, rewards];
  const memo = react.useMemo(() => {
    const listFormat = new Intl.ListFormat(stateFromStores);
    return listFormat.format(rewards.map((name) => name.name));
  }, items1);
  const obj2 = { children: items2 };
  const obj3 = {
    "aria-label": memo,
    shape: rewards(9487).CutoutShape.Circle,
    size: v50,
    gap: 2,
    depthX: 0.3,
    children: rewards.map((reward) => {
      const obj = { reward, size };
      return closure_1_9(OrbsArcadePileReward, obj, reward.id);
    })
  };
  const Pile = rewards(13374).Pile;
  items2 = [closure_9(Pile, obj3), ];
  const obj4 = { style: tmp.rewardShelfCopy, children: items3 };
  const obj5 = { variant: "heading-sm/semibold", color: "text-default", children: intl.string(rewards(1114).t.DCCcdz) };
  const Text = rewards(5619).Text;
  intl = rewards(1114).intl;
  items3 = [closure_9(Text, obj5), closure_9(rewards(5619).Text, { variant: "heading-sm/semibold", color: "text-subtle", lineClamp: 2, children: memo })];
  items2[1] = closure_10(closure_6, obj4);
  return closure_10(closure_11, obj2);
}
function OrbsArcadeFocusedRewardShelfContent(reward) {
  let items1;
  let obj7;
  reward = reward.reward;
  const gameState = reward.gameState;
  const tmp = closure_14();
  const obj = OrbsArcadeRewardUtils;
  const orbsArcadeRewardStatus = obj.getOrbsArcadeRewardStatus(reward.id, gameState);
  const obj2 = { children: items };
  items = [, ];
  const obj3 = { reward, size: v50 };
  items[0] = React4(OrbsArcadeRewardPreviewDefault, obj3);
  const obj4 = { style: tmp.rewardShelfCopy, children: items1 };
  items1 = [React4(OrbsArcadeRewardStatusLabelDefault, { reward, status: orbsArcadeRewardStatus, color: "text-default" }), , ];
  const obj5 = { variant: "heading-sm/semibold", color: "text-subtle", children: reward.name };
  items1[1] = React4(Text_Text.Text, obj5);
  const obj6 = { variant: "text-xs/medium", color: "text-muted", children: obj7.getOrbsArcadeRewardScoreLabel(reward, orbsArcadeRewardStatus) };
  const Text = Text_Text.Text;
  obj7 = OrbsArcadeRewardUtils;
  items1[2] = React4(Text, obj6);
  items[1] = authStore(metroRequire, obj4);
  return authStore(unpackModuleId, obj2);
}
function OrbsArcadePileReward(arg0) {
  let obj3;
  let reward;
  let tmp6;
  ({ reward, size } = arg0);
  const tmp = closure_17(size);
  if (reward.type !== OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    const obj2 = { reward, size };
    tmp6 = React4(OrbsArcadeRewardPreviewDefault, obj2);
  } else {
    const obj = { style: tmp.nitroCoin, children: React4(NitroCoinSpotIllustration.NitroCoinSpotIllustration, obj3) };
    obj3 = { height: 0.85 * size };
    tmp6 = React4(metroRequire, obj);
  }
  return tmp6;
}
function OrbsArcadeAllRewardsClaimedShelfContent(windowEndsAt) {
  let days;
  let hours;
  let intl;
  let items1;
  let obj10;
  let obj2;
  let obj3;
  windowEndsAt = windowEndsAt.windowEndsAt;
  const tmp = closure_14();
  let num = 0;
  const tmp3 = useCountdownDefault;
  if (null != windowEndsAt) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    num = new Date(windowEndsAt);
  }
  const obj = { style: tmp.chestLogo, children: React4(metroRequire, obj2) };
  obj2 = { style: tmp.chestLogoMirrored, children: React4(ChestLogoSpotIllustration.ChestLogoSpotIllustration, obj3) };
  obj3 = { accessible: false, height: v50 };
  const tmp3Result = tmp3(num, 60000, undefined, null == windowEndsAt);
  items = [React4(metroRequire, obj), ];
  const obj4 = { style: tmp.rewardShelfCopy, children: items1 };
  const obj5 = { variant: "heading-sm/semibold", color: "text-default", children: intl.string(intl6.t["/AJCN+"]) };
  const Text = Text_Text.Text;
  intl = intl6.intl;
  items1 = [React4(Text, obj5), ];
  let tmp9Result = null;
  const tmp10 = metroRequire;
  const tmp8 = unpackModuleId;
  const tmp9 = React4;
  if (null != windowEndsAt) {
    let formatToPlainStringResult;
    const Text2 = tmp11(5619).Text;
    const intl2 = tmp11(1114).intl;
    const formatToPlainString = intl2.formatToPlainString;
    ({ days, hours } = tmp3Result);
    const fkzORZ = tmp11(1114).t.fkzORZ;
    if (days > 0) {
      const intl5 = tmp11(1114).intl;
      const obj6 = { days };
      formatToPlainStringResult = intl5.formatToPlainString(tmp11(1114).t.GBLpQ8, obj6);
    } else if (hours > 0) {
      const intl4 = tmp11(1114).intl;
      const obj7 = { hours };
      formatToPlainStringResult = intl4.formatToPlainString(tmp11(1114).t.rhY1Rs, obj7);
    } else {
      const intl3 = tmp11(1114).intl;
      const formatToPlainString2 = intl3.formatToPlainString;
      const _Math = Math;
      const obj8 = { minutes: Math.max(tmp13, 1) };
      const prop = tmp11(1114).t["XIGt+W"];
      formatToPlainStringResult = formatToPlainString2(prop, obj8);
    }
    const obj9 = { variant: "text-xs/medium", color: "text-muted", children: formatToPlainString(fkzORZ, obj10) };
    obj10 = { duration: formatToPlainStringResult };
    tmp9Result = tmp9(Text2, obj9);
  }
  const obj11 = { children: items };
  items1[1] = tmp9Result;
  items[1] = authStore(tmp10, obj4);
  return authStore(tmp8, obj11);
}
let react = react_mod;
({ Pressable: closure_4, StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let c12 = 50;
let items = [nativeDefault.unsafe_rawColors.TRANSPARENT, "rgba(16, 142, 77, 0.5)"];
let createStyles = createStyles_mod;
let obj = { rewardShelf: obj2, rewardShelfCopy: { flex: 1 }, allRewardsClaimedShelf: { backgroundColor: "rgba(151, 151, 159, 0.08)" }, rewardShelfGlowContainer: obj3, chestLogo: { width: 50, height: 50, overflow: "hidden", alignItems: "center", justifyContent: "center" }, chestLogoMirrored: obj4 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, overflow: "hidden", paddingHorizontal: nativeDefault.space.PX_10, paddingVertical: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.lg, boxShadow: items1 };
items1 = [{ offsetX: 0, offsetY: 0, blurRadius: 10, color: "#0E482B" }];
obj4 = { transform: items2 };
items2 = [{ scaleX: -1 }];
let closure_14 = createStyles(obj);
createStyles = createStyles_mod;
let closure_17 = createStyles.createStyles((width) => ({ nitroCoin: { width, height: width, alignItems: "center", justifyContent: "center" } }));
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardShelf.tsx");

export default function OrbsArcadeRewardShelf(game) {
  let closure_3;
  let intl;
  let intl2;
  let intl3;
  let items5;
  let items6;
  let items7;
  let mapped;
  let obj4;
  let tmp22;
  game = game.game;
  let stateFromStores;
  react = undefined;
  let tmp = closure_14();
  const rewards = game.rewards;
  let obj = game(stateFromStores[7]);
  items = [OrbsArcadeStore];
  const items1 = [game.id];
  stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.getGameStateForGame(game.id), items1);
  const reduced = rewards.reduce((acc, scoreTarget) => {
    let tmp = acc;
    if (null == acc) {
      tmp = scoreTarget;
    }
    return tmp;
  }, undefined);
  const obj2 = game(stateFromStores[12]);
  const orbsArcadeFocusedReward = obj2.getOrbsArcadeFocusedReward(rewards, stateFromStores);
  let tmp7 = orbsArcadeFocusedReward;
  if (orbsArcadeFocusedReward == null) {
    tmp7 = reduced;
  }
  const tmp9 = rewards(stateFromStores[19])(tmp7);
  react = tmp9;
  let currentRun;
  if (stateFromStores != null) {
    currentRun = stateFromStores.currentRun;
  }
  let expiresAt;
  if (stateFromStores != null) {
    expiresAt = stateFromStores.expiresAt;
  }
  if (expiresAt == null) {
    expiresAt = null;
  }
  let tmp14 = null != expiresAt;
  if (tmp14) {
    let tmp15 = null == game.endsAt;
    if (!tmp15) {
      const _Date = Date;
      const _Date2 = Date;
      const parsed = Date.parse(expiresAt);
      tmp15 = parsed < Date.parse(game.endsAt);
    }
    tmp14 = tmp15;
  }
  const items2 = [rewards, stateFromStores];
  const memo = react.useMemo(() => {
    const obj = OrbsArcadeRewardUtils;
    return obj.getOrbsArcadeClaimableRewards(rewards, stateFromStores);
  }, items2);
  const items3 = [tmp9];
  let memo1 = react.useMemo(() => {
    items = [nativeDefault.unsafe_rawColors.TRANSPARENT, ];
    const obj = _modDef671(closure_3);
    const alphaResult = obj.alpha(0.5);
    items[1] = alphaResult.css();
    return items;
  }, items3);
  if (tmp11 && rewards.length > 0 && null == orbsArcadeFocusedReward) {
    memo1 = items;
  }
  let tmp31Result2 = null;
  if (0 !== rewards.length) {
    let tmp21Result;
    let prop;
    if (tmp11 && rewards.length > 0 && null == orbsArcadeFocusedReward) {
      prop = tmp.rewardShelfGlowContainer;
    }
    const items4 = [tmp.rewardShelf, ];
    let prop1;
    const obj3 = { style: prop, children: closure_10(tmp22, obj4) };
    tmp22 = closure_4;
    if (tmp11 && rewards.length > 0 && null == orbsArcadeFocusedReward) {
      prop1 = tmp.allRewardsClaimedShelf;
    }
    items4[1] = prop1;
    obj4 = {
      style: items4,
      accessibilityRole: "button",
      accessibilityLabel: intl.string(game(stateFromStores[11]).t.XpfUWL),
      onPress() {
          let result;
          const obj = OrbsArcadeRewardUtils;
          if (obj.getOrbsArcadeClaimableRewards(rewards, stateFromStores).length > 0) {
            const tmpResult = openOrbsArcadeSheets;
            result = tmpResult.openOrbsArcadeRewardUnlockedSheet(game.id);
          } else {
            const tmpResult2 = openOrbsArcadeSheets;
            result = tmpResult2.openOrbsArcadeRewardsSheet(game.id);
          }
          return result;
        },
      children: items5
    };
    intl = tmp2(tmp3[11]).intl;
    const obj5 = { style: absoluteFill.absoluteFill, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: memo1 };
    items5 = [closure_9(rewards(tmp3[22]), obj5), , ];
    if (tmp11 && rewards.length > 0 && null == orbsArcadeFocusedReward) {
      let tmp30 = null;
      const tmp29 = OrbsArcadeAllRewardsClaimedShelfContent;
      if (tmp14) {
        tmp30 = expiresAt;
      }
      const obj6 = { windowEndsAt: tmp30 };
      tmp21Result = tmp31(tmp29, obj6);
    } else {
      if (null != currentRun) {
        if (memo.length > 1) {
          const obj7 = { rewards: memo };
          tmp21Result = tmp31(OrbsArcadeClaimableRewardsShelfContent, obj7);
        }
      }
      if (null != currentRun) {
        if (null != tmp7) {
          const obj8 = { reward: tmp7, gameState: stateFromStores };
          tmp21Result = tmp31(OrbsArcadeFocusedRewardShelfContent, obj8);
        }
      }
      const obj9 = { children: items6 };
      const obj10 = {
        "aria-label": mapped.join(", "),
        shape: game(stateFromStores[9]).CutoutShape.Circle,
        size: 53,
        gap: 2,
        depthX: 0.3,
        children: rewards.map((reward) => {
              const obj = { reward, size: 53 };
              return closure_1_9(OrbsArcadePileReward, obj, reward.id);
            })
      };
      const Pile = tmp2(tmp3[8]).Pile;
      mapped = rewards.map((name) => name.name);
      items6 = [closure_9(Pile, obj10), ];
      const obj11 = { style: tmp.rewardShelfCopy, children: items7 };
      const obj12 = { variant: "heading-sm/semibold", color: "text-default", children: intl2.string(game(stateFromStores[11]).t.ehbzo8) };
      const Text = tmp2(tmp3[10]).Text;
      intl2 = tmp2(tmp3[11]).intl;
      items7 = [closure_9(Text, obj12), ];
      const obj13 = { variant: "text-xs/medium", color: "text-muted", children: intl3.string(game(stateFromStores[11]).t["5Gt1dt"]) };
      const Text2 = tmp2(tmp3[10]).Text;
      intl3 = tmp2(tmp3[11]).intl;
      items7[1] = closure_9(Text2, obj13);
      items6[1] = closure_10(closure_6, obj11);
      tmp21Result = tmp21(closure_11, obj9);
    }
    items5[1] = tmp21Result;
    const ChevronSmallRightIcon = tmp2(tmp3[23]).ChevronSmallRightIcon;
    const colors = tmp8(tmp3[5]).colors;
    const obj14 = { size: "md", color: null != currentRun ? colors.CONTROL_ICON_ONLY_ICON_DEFAULT : colors.ICON_MUTED };
    items5[2] = closure_9(ChevronSmallRightIcon, obj14);
    tmp31Result2 = tmp31(tmp32, obj3);
  }
  return tmp31Result2;
};
