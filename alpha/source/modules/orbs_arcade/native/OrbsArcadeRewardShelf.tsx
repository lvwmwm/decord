// Module ID: 17019
// Function ID: 17020
// Name: OrbsArcadeRewardShelf
// Dependencies: [19, 17, 2062, 17010, 21, 575, 5014, 5640, 504, 13409, 9509, 5624, 1113, 17017, 17020, 17021, 17011, 9542, 7624, 17022, 17026, 17027, 671, 17028, 5587, 13903, 2]
// Exports: default

// Module 17019 (OrbsArcadeRewardShelf)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import intl4 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import ButtonConstants from "ButtonConstants" /* 5640 */;
import useCountdownDefault from "useCountdown" /* 7624 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 17011 */;
import OrbsArcadeRewardUtils from "OrbsArcadeRewardUtils" /* 17017 */;
import OrbsArcadeRewardPreviewDefault from "OrbsArcadeRewardPreview" /* 17020 */;
import OrbsArcadeRewardStatusLabelDefault from "OrbsArcadeRewardStatusLabel" /* 17021 */;
import ChestLogoSpotIllustration from "ChestLogoSpotIllustration" /* 17022 */;
import OrbsArcadeWindowUtils from "OrbsArcadeWindowUtils" /* 17026 */;
import openOrbsArcadeSheets from "openOrbsArcadeSheets" /* 17028 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2062 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17010 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

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
let size;
let tmp2;
let unpackModuleId;
const NitroCoinSpotIllustration = tmp2(9542);
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
    shape: rewards(9509).CutoutShape.Circle,
    size: v50,
    gap: 2,
    depthX: 0.28,
    children: rewards.map((reward) => {
      const obj = { reward, size };
      return closure_1_9(OrbsArcadePileReward, obj, reward.id);
    })
  };
  const Pile = rewards(13409).Pile;
  items2 = [closure_9(Pile, obj3), ];
  const obj4 = { style: tmp.rewardShelfCopy, children: items3 };
  const obj5 = { variant: "heading-sm/semibold", color: "text-default", children: intl.string(rewards(1113).t.DCCcdz) };
  const Text = rewards(5624).Text;
  intl = rewards(1113).intl;
  items3 = [closure_9(Text, obj5), closure_9(rewards(5624).Text, { variant: "heading-sm/semibold", color: "text-subtle", lineClamp: 2, children: memo })];
  items2[1] = closure_10(closure_6, obj4);
  return closure_10(closure_11, obj2);
}
function OrbsArcadeFocusedRewardShelfContent(arg0) {
  let gameState;
  let items1;
  let obj7;
  let ownedRewardSkuIds;
  let reward;
  ({ reward, gameState, ownedRewardSkuIds } = arg0);
  const tmp = closure_14();
  const obj = OrbsArcadeRewardUtils;
  const orbsArcadeRewardStatus = obj.getOrbsArcadeRewardStatus(reward, gameState, ownedRewardSkuIds);
  const obj2 = { children: items };
  items = [, ];
  const obj3 = { reward, size: v50 };
  items[0] = React4(OrbsArcadeRewardPreviewDefault, obj3);
  const obj4 = { style: tmp.rewardShelfCopy, children: items1 };
  items1 = [React4(OrbsArcadeRewardStatusLabelDefault, { reward, status: orbsArcadeRewardStatus, color: "text-default" }), , ];
  const obj5 = { variant: "heading-sm/semibold", color: "text-subtle", children: reward.name };
  items1[1] = React4(Text_Text.Text, obj5);
  const obj6 = { variant: "text-xs/medium", color: "text-muted", children: obj7.getOrbsArcadeRewardScoreLabel(reward, orbsArcadeRewardStatus, gameState, ownedRewardSkuIds) };
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
  let fkzORZ;
  let formatToPlainString;
  let intl;
  let items1;
  let obj2;
  let obj3;
  let obj7;
  let tmp11Result;
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
  const obj5 = { variant: "heading-sm/semibold", color: "text-default", children: intl.string(intl4.t["/AJCN+"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items1 = [React4(Text, obj5), ];
  let tmp9Result = null;
  const tmp10 = metroRequire;
  const tmp8 = unpackModuleId;
  const tmp9 = React4;
  if (null != windowEndsAt) {
    const obj6 = { variant: "text-xs/medium", color: "text-muted", children: formatToPlainString(fkzORZ, obj7) };
    const Text2 = tmp11(5624).Text;
    const intl2 = tmp11(1113).intl;
    formatToPlainString = intl2.formatToPlainString;
    obj7 = { duration: tmp11Result.formatOrbsArcadeTimeUntil(tmp3Result) };
    fkzORZ = tmp11(1113).t.fkzORZ;
    tmp11Result = OrbsArcadeWindowUtils;
    tmp9Result = tmp9(Text2, obj6);
  }
  const obj8 = { children: items };
  items1[1] = tmp9Result;
  items[1] = authStore(tmp10, obj4);
  return authStore(tmp8, obj8);
}
let react = react_mod;
({ Pressable: closure_4, StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let c12 = 50;
let items = [nativeDefault.unsafe_rawColors.TRANSPARENT, "rgba(16, 142, 77, 0.5)"];
let createStyles = createStyles_mod;
let obj = { rewardShelf: obj2, chevronIconWrapper: size, rewardShelfCopy: { flex: 1 }, allRewardsClaimedShelf: { backgroundColor: "rgba(151, 151, 159, 0.08)" }, rewardShelfGlowContainer: obj3, chestLogo: { width: 50, height: 50, overflow: "hidden", alignItems: "center", justifyContent: "center" }, chestLogoMirrored: obj4 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, overflow: "hidden", paddingHorizontal: nativeDefault.space.PX_10, paddingVertical: nativeDefault.space.PX_6, minHeight: 74, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles = createStyles.createStyles;
size = { marginLeft: "auto", width: ButtonConstants.SMALL_BUTTON_HEIGHT, height: ButtonConstants.SMALL_BUTTON_HEIGHT, alignItems: "center", justifyContent: "center" };
obj3 = { borderRadius: nativeDefault.radii.lg, boxShadow: items1 };
items1 = [{ offsetX: 0, offsetY: 0, blurRadius: 10, color: "#0E482B" }];
obj4 = { transform: items2 };
items2 = [{ scaleX: -1 }];
let closure_14 = createStyles(obj);
createStyles = createStyles_mod;
let closure_17 = createStyles.createStyles((width) => ({ nitroCoin: { width, height: width, alignItems: "center", justifyContent: "center" } }));
size = size_mod;
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardShelf.tsx");

export default function OrbsArcadeRewardShelf(game) {
  let ChevronLargeRightIcon;
  let closure_3;
  let intl;
  let intl2;
  let intl3;
  let items6;
  let items7;
  let items8;
  let mapped;
  let obj16;
  let obj5;
  let ownedRewardSkuIds;
  let tmp23;
  game = game.game;
  let stateFromStores;
  react = undefined;
  let tmp = closure_14();
  const rewards = game.rewards;
  let obj = game(stateFromStores[8]);
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
  const items2 = [OrbsArcadeStore];
  const obj2 = game(stateFromStores[8]);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => ownedRewardSkuIds.ownedRewardSkuIds);
  const obj3 = game(stateFromStores[13]);
  const orbsArcadeFocusedReward = obj3.getOrbsArcadeFocusedReward(rewards, stateFromStores, stateFromStores1);
  let tmp8 = orbsArcadeFocusedReward;
  if (orbsArcadeFocusedReward == null) {
    tmp8 = reduced;
  }
  const tmp10 = rewards(stateFromStores[21])(tmp8);
  react = tmp10;
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
  let tmp15 = null != expiresAt;
  if (tmp15) {
    let tmp16 = null == game.endsAt;
    if (!tmp16) {
      const _Date = Date;
      const _Date2 = Date;
      const parsed = Date.parse(expiresAt);
      tmp16 = parsed < Date.parse(game.endsAt);
    }
    tmp15 = tmp16;
  }
  const items3 = [rewards, stateFromStores];
  const memo = react.useMemo(() => {
    const obj = OrbsArcadeRewardUtils;
    return obj.getOrbsArcadeClaimableRewards(rewards, stateFromStores);
  }, items3);
  const items4 = [tmp10];
  let memo1 = react.useMemo(() => {
    items = [nativeDefault.unsafe_rawColors.TRANSPARENT, ];
    const obj = _modDef671(closure_3);
    const alphaResult = obj.alpha(0.5);
    items[1] = alphaResult.css();
    return items;
  }, items4);
  if (tmp12 && rewards.length > 0 && null == orbsArcadeFocusedReward) {
    memo1 = items;
  }
  let tmp32Result2 = null;
  if (0 !== rewards.length) {
    let tmp22Result;
    let prop;
    if (tmp12 && rewards.length > 0 && null == orbsArcadeFocusedReward) {
      prop = tmp.rewardShelfGlowContainer;
    }
    const items5 = [tmp.rewardShelf, ];
    let prop1;
    const obj4 = { style: prop, children: closure_10(tmp23, obj5) };
    tmp23 = closure_4;
    if (tmp12 && rewards.length > 0 && null == orbsArcadeFocusedReward) {
      prop1 = tmp.allRewardsClaimedShelf;
    }
    items5[1] = prop1;
    obj5 = {
      style: items5,
      accessibilityRole: "button",
      accessibilityLabel: intl.string(game(stateFromStores[12]).t.XpfUWL),
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
      children: items6
    };
    intl = tmp2(tmp3[12]).intl;
    const obj6 = { style: absoluteFill.absoluteFill, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: memo1 };
    items6 = [closure_9(rewards(tmp3[24]), obj6), , ];
    if (tmp12 && rewards.length > 0 && null == orbsArcadeFocusedReward) {
      let tmp31 = null;
      const tmp30 = OrbsArcadeAllRewardsClaimedShelfContent;
      if (tmp15) {
        tmp31 = expiresAt;
      }
      const obj7 = { windowEndsAt: tmp31 };
      tmp22Result = tmp32(tmp30, obj7);
    } else {
      if (null != currentRun) {
        if (memo.length > 1) {
          const obj8 = { rewards: memo };
          tmp22Result = tmp32(OrbsArcadeClaimableRewardsShelfContent, obj8);
        }
      }
      if (null != currentRun) {
        if (null != tmp8) {
          const obj9 = { reward: tmp8, gameState: stateFromStores, ownedRewardSkuIds: stateFromStores1 };
          tmp22Result = tmp32(OrbsArcadeFocusedRewardShelfContent, obj9);
        }
      }
      const obj10 = { children: items7 };
      const obj11 = {
        "aria-label": mapped.join(", "),
        shape: game(stateFromStores[10]).CutoutShape.Circle,
        size: 53,
        gap: 2,
        depthX: 0.28,
        children: rewards.map((reward) => {
              const obj = { reward, size: 53 };
              return closure_1_9(OrbsArcadePileReward, obj, reward.id);
            })
      };
      const Pile = tmp2(tmp3[9]).Pile;
      mapped = rewards.map((name) => name.name);
      items7 = [closure_9(Pile, obj11), ];
      const obj12 = { style: tmp.rewardShelfCopy, children: items8 };
      const obj13 = { variant: "heading-sm/semibold", color: "text-default", children: intl2.string(game(stateFromStores[12]).t.ehbzo8) };
      const Text = tmp2(tmp3[11]).Text;
      intl2 = tmp2(tmp3[12]).intl;
      items8 = [closure_9(Text, obj13), ];
      const obj14 = { variant: "experimental/body-xs/medium", color: "text-muted", textBreakStrategy: "balanced", lineBreakStrategyIOS: "standard", children: intl3.string(game(stateFromStores[12]).t["5Gt1dt"]) };
      const Text2 = tmp2(tmp3[11]).Text;
      intl3 = tmp2(tmp3[12]).intl;
      items8[1] = closure_9(Text2, obj14);
      items7[1] = closure_10(closure_6, obj12);
      tmp22Result = tmp22(closure_11, obj10);
    }
    items6[1] = tmp22Result;
    const obj15 = { style: tmp.chevronIconWrapper, children: closure_9(ChevronLargeRightIcon, obj16) };
    ChevronLargeRightIcon = tmp2(tmp3[25]).ChevronLargeRightIcon;
    const colors = tmp9(tmp3[5]).colors;
    obj16 = { size: "xs", color: null != currentRun ? colors.CONTROL_ICON_ONLY_ICON_DEFAULT : colors.ICON_MUTED };
    items6[2] = closure_9(closure_6, obj15);
    tmp32Result2 = tmp32(tmp33, obj4);
  }
  return tmp32Result2;
};
