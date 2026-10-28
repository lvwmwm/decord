// Module ID: 16671
// Function ID: 16672
// Name: OrbsArcadeRewardShelf
// Dependencies: [19, 17, 2065, 16662, 21, 587, 5004, 558, 576, 504, 13003, 9437, 5270, 1125, 16669, 16672, 16673, 16663, 9470, 7589, 16674, 16678, 683, 16679, 5294, 7341, 2]

// Module 16671 (OrbsArcadeRewardShelf)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import intl4 from "intl" /* 1125 */;
import Text_Text from "Text/Text" /* 5270 */;
import useCountdownDefault from "useCountdown" /* 7589 */;
import ClipView from "ClipView" /* 9437 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16663 */;
import OrbsArcadeRewardUtils from "OrbsArcadeRewardUtils" /* 16669 */;
import OrbsArcadeRewardPreviewDefault from "OrbsArcadeRewardPreview" /* 16672 */;
import OrbsArcadeRewardStatusLabelDefault from "OrbsArcadeRewardStatusLabel" /* 16673 */;
import ChestLogoSpotIllustration from "ChestLogoSpotIllustration" /* 16674 */;
import openOrbsArcadeSheets from "openOrbsArcadeSheets" /* 16679 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2065 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16662 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
let tmp;
let unpackModuleId;
const NitroCoinSpotIllustration = tmp(9470);
function formatTimeUntil(tmp3Result) {
  let days;
  let formatToPlainStringResult;
  let hours;
  ({ days, hours } = tmp3Result);
  if (days > 0) {
    const intl3 = intl4.intl;
    const obj2 = { days };
    formatToPlainStringResult = intl3.formatToPlainString(intl4.t.GBLpQ8, obj2);
  } else if (hours > 0) {
    const intl2 = intl4.intl;
    const obj3 = { hours };
    formatToPlainStringResult = intl2.formatToPlainString(intl4.t.rhY1Rs, obj3);
  } else {
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const _Math = Math;
    const obj = { minutes: Math.max(tmp, 1) };
    const prop = intl4.t["XIGt+W"];
    formatToPlainStringResult = formatToPlainString(prop, obj);
  }
  return formatToPlainStringResult;
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeClaimableRewardsShelfContent(rewards) {
  let intl;
  let items1;
  let items2;
  let locale;
  let tmp10;
  let tmp28;
  let tmp5;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(21);
  rewards = rewards.rewards;
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [LocaleStore];
    const fn = function n() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === stateFromStores) {
    let tmp9;
    if (cResult[3] === rewards) {
      tmp9 = cResult[4];
    }
    if (cResult[6] !== rewards) {
      let tmp14;
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor(reward) {
            const obj = { reward, size };
            return closure_1_9(closure_1_18, obj, reward.id);
          }
        }
        cResult[8] = A;
        tmp14 = A;
      } else {
        class A {
          constructor(reward) {
            const obj = { reward, size };
            return closure_1_9(closure_1_18, obj, reward.id);
          }
        }
      }
      const mapped = rewards.map(tmp14);
      cResult[6] = rewards;
      cResult[7] = mapped;
    } else {
      class A {
        constructor(reward) {
          const obj = { reward, size };
          return closure_1_9(closure_1_18, obj, reward.id);
        }
      }
    }
    if (cResult[9] === tmp9) {
      let tmp20;
      class A {
        constructor(reward) {
          const obj = { reward, size };
          return closure_1_9(closure_1_18, obj, reward.id);
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor(reward) {
            const obj = { reward, size };
            return closure_1_9(closure_1_18, obj, reward.id);
          }
        }
        const obj2 = { variant: "heading-sm/semibold", color: "text-default", children: intl.string(intl4.t.DCCcdz) };
        const Text = tmp(5270).Text;
        intl = tmp(1125).intl;
        const tmp21 = React4(Text, obj2);
        cResult[12] = tmp21;
        tmp20 = tmp21;
      } else {
        class A {
          constructor(reward) {
            const obj = { reward, size };
            return closure_1_9(closure_1_18, obj, reward.id);
          }
        }
      }
      if (cResult[13] !== tmp9) {
        class A {
          constructor(reward) {
            const obj = { reward, size };
            return closure_1_9(closure_1_18, obj, reward.id);
          }
        }
        const obj3 = { variant: "heading-sm/semibold", color: "text-subtle", lineClamp: 2, children: tmp9 };
        cResult[13] = tmp9;
        cResult[14] = React4(Text_Text.Text, obj3);
        const tmp23 = React4(Text_Text.Text, obj3);
      } else {
        class A {
          constructor(reward) {
            const obj = { reward, size };
            return closure_1_9(closure_1_18, obj, reward.id);
          }
        }
      }
      if (cResult[15] === tmp4.rewardShelfCopy) {
        class A {
          constructor(reward) {
            const obj = { reward, size };
            return closure_1_9(closure_1_18, obj, reward.id);
          }
        }
        if (cResult[18] === tmp16) {
          class A {
            constructor(reward) {
              const obj = { reward, size };
              return closure_1_9(closure_1_18, obj, reward.id);
            }
          }
          return tmp28;
        }
        const obj4 = { children: items1 };
        items1 = [tmp16, tmp24];
        const tmp31 = authStore(unpackModuleId, obj4);
        cResult[18] = tmp16;
        cResult[19] = tmp24;
        cResult[20] = tmp31;
        tmp28 = tmp31;
      }
      const obj5 = { style: tmp4.rewardShelfCopy, children: items2 };
      items2 = [tmp20, tmp22];
      cResult[15] = tmp4.rewardShelfCopy;
      cResult[16] = tmp22;
      cResult[17] = authStore(metroRequire, obj5);
      const tmp27 = authStore(metroRequire, obj5);
    }
    const obj6 = { "aria-label": tmp9, shape: ClipView.CutoutShape.Circle, size: v50, gap: 2, depthX: 0.3, children: tmp13 };
    const Pile = tmp(13003).Pile;
    cResult[9] = tmp9;
    cResult[10] = tmp13;
    cResult[11] = React4(Pile, obj6);
    const tmp19 = React4(Pile, obj6);
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor(reward) {
        const obj = { reward, size };
        return closure_1_9(closure_1_18, obj, reward.id);
      }
    }
    cResult[5] = tmp11;
    tmp10 = tmp11;
  } else {
    class A {
      constructor(reward) {
        const obj = { reward, size };
        return closure_1_9(closure_1_18, obj, reward.id);
      }
    }
  }
  const listFormat = new Intl.ListFormat(stateFromStores);
  const formatResult = listFormat.format(rewards.map(tmp10));
  cResult[2] = stateFromStores;
  cResult[3] = rewards;
  cResult[4] = formatResult;
  tmp9 = formatResult;
}) : (function OrbsArcadeClaimableRewardsShelfContent(rewards) {
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
    shape: rewards(9437).CutoutShape.Circle,
    size: v50,
    gap: 2,
    depthX: 0.3,
    children: rewards.map((reward) => {
      const obj = { reward, size };
      return closure_1_9(closure_1_18, obj, reward.id);
    })
  };
  const Pile = rewards(13003).Pile;
  items2 = [closure_9(Pile, obj3), ];
  const obj4 = { style: tmp.rewardShelfCopy, children: items3 };
  const obj5 = { variant: "heading-sm/semibold", color: "text-default", children: intl.string(rewards(1125).t.DCCcdz) };
  const Text = rewards(5270).Text;
  intl = rewards(1125).intl;
  items3 = [closure_9(Text, obj5), closure_9(rewards(5270).Text, { variant: "heading-sm/semibold", color: "text-subtle", lineClamp: 2, children: memo })];
  items2[1] = closure_10(closure_6, obj4);
  return closure_10(closure_11, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeFocusedRewardShelfContent(arg0) {
  let gameState;
  let items1;
  let reward;
  const obj = react2;
  const cResult = obj.c(23);
  ({ reward, gameState } = arg0);
  const tmp4 = closure_14();
  if (cResult[0] === gameState) {
    let tmp5;
    let tmp7;
    if (cResult[1] === reward.id) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== reward) {
      const obj2 = { reward, size: v50 };
      const tmp11 = React4(OrbsArcadeRewardPreviewDefault, obj2);
      cResult[3] = reward;
      cResult[4] = tmp11;
      tmp7 = tmp11;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === reward) {
      let tmp13;
      let tmp17;
      if (cResult[6] === tmp5) {
        tmp13 = cResult[7];
      }
      if (cResult[8] !== reward.name) {
        const obj3 = { variant: "heading-sm/semibold", color: "text-subtle", children: reward.name };
        const tmp19 = React4(Text_Text.Text, obj3);
        cResult[8] = reward.name;
        cResult[9] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[9];
      }
      if (cResult[10] === reward) {
        let tmp20;
        let tmp22;
        if (cResult[11] === tmp5) {
          tmp20 = cResult[12];
        }
        if (cResult[13] !== tmp20) {
          const obj4 = { variant: "text-xs/medium", color: "text-muted", children: tmp20 };
          const tmp24 = React4(Text_Text.Text, obj4);
          cResult[13] = tmp20;
          cResult[14] = tmp24;
          tmp22 = tmp24;
        } else {
          tmp22 = cResult[14];
        }
        if (cResult[15] === tmp4.rewardShelfCopy) {
          if (cResult[16] === tmp13) {
            if (cResult[17] === tmp17) {
              let tmp25;
              if (cResult[18] === tmp22) {
                tmp25 = cResult[19];
              }
              if (cResult[20] === tmp7) {
                let tmp29;
                if (cResult[21] === tmp25) {
                  tmp29 = cResult[22];
                }
                return tmp29;
              }
              const obj5 = { children: items };
              items = [tmp7, tmp25];
              const tmp32 = authStore(unpackModuleId, obj5);
              cResult[20] = tmp7;
              cResult[21] = tmp25;
              cResult[22] = tmp32;
              tmp29 = tmp32;
            }
          }
        }
        const obj6 = { style: tmp12, children: items1 };
        items1 = [tmp13, tmp17, tmp22];
        const tmp28 = authStore(metroRequire, obj6);
        cResult[15] = tmp4.rewardShelfCopy;
        cResult[16] = tmp13;
        cResult[17] = tmp17;
        cResult[18] = tmp22;
        cResult[19] = tmp28;
        tmp25 = tmp28;
      }
      const tmpResult = OrbsArcadeRewardUtils;
      const orbsArcadeRewardScoreLabel = tmpResult.getOrbsArcadeRewardScoreLabel(reward, tmp5);
      cResult[10] = reward;
      cResult[11] = tmp5;
      cResult[12] = orbsArcadeRewardScoreLabel;
      tmp20 = orbsArcadeRewardScoreLabel;
    }
    const obj7 = { reward, status: tmp5, color: "text-default" };
    const tmp16 = React4(OrbsArcadeRewardStatusLabelDefault, obj7);
    cResult[5] = reward;
    cResult[6] = tmp5;
    cResult[7] = tmp16;
    tmp13 = tmp16;
  }
  const tmpResult2 = OrbsArcadeRewardUtils;
  const orbsArcadeRewardStatus = tmpResult2.getOrbsArcadeRewardStatus(reward.id, gameState);
  cResult[0] = gameState;
  cResult[1] = reward.id;
  cResult[2] = orbsArcadeRewardStatus;
  tmp5 = orbsArcadeRewardStatus;
}) : (function OrbsArcadeFocusedRewardShelfContent(reward) {
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
});
createStyles = createStyles_mod;
let closure_17 = createStyles.createStyles((width) => ({ nitroCoin: { width, height: width, alignItems: "center", justifyContent: "center" } }));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadePileReward(arg0) {
  let reward;
  const obj = react2;
  const cResult = obj.c(8);
  ({ reward, size } = arg0);
  const tmp4 = closure_17(size);
  if (reward.type !== OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    if (cResult[0] === reward) {
      let tmp12;
      if (cResult[1] === size) {
        tmp12 = cResult[2];
      }
      return tmp12;
    }
    const obj2 = { reward, size };
    const tmp15 = React4(OrbsArcadeRewardPreviewDefault, obj2);
    cResult[0] = reward;
    cResult[1] = size;
    cResult[2] = tmp15;
    tmp12 = tmp15;
  } else {
    let tmp5;
    const result = 0.85 * size;
    if (cResult[3] !== result) {
      const obj3 = { height: result };
      const tmp7 = React4(NitroCoinSpotIllustration.NitroCoinSpotIllustration, obj3);
      cResult[3] = result;
      cResult[4] = tmp7;
      tmp5 = tmp7;
    } else {
      tmp5 = cResult[4];
    }
    if (cResult[5] === tmp4.nitroCoin) {
      let tmp8;
      if (cResult[6] === tmp5) {
        tmp8 = cResult[7];
      }
      return tmp8;
    }
    const obj4 = { style: tmp4.nitroCoin, children: tmp5 };
    const tmp11 = React4(metroRequire, obj4);
    cResult[5] = tmp4.nitroCoin;
    cResult[6] = tmp5;
    cResult[7] = tmp11;
    tmp8 = tmp11;
  }
}) : (function OrbsArcadePileReward(arg0) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeAllRewardsClaimedShelfContent(windowEndsAt) {
  let fkzORZ;
  let formatToPlainString;
  let intl;
  let items1;
  let obj8;
  let tmp10;
  let tmp14;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(18);
  windowEndsAt = windowEndsAt.windowEndsAt;
  const tmp4 = closure_14();
  if (cResult[0] !== windowEndsAt) {
    let num2 = 0;
    if (null != windowEndsAt) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      num2 = new Date(windowEndsAt);
    }
    cResult[0] = windowEndsAt;
    cResult[1] = num2;
    tmp5 = num2;
  } else {
    tmp5 = cResult[1];
  }
  const tmp9 = useCountdownDefault(tmp5, 60000, undefined, null == windowEndsAt);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { accessible: false, height: v50 };
    const tmp13 = React4(ChestLogoSpotIllustration.ChestLogoSpotIllustration, obj2);
    cResult[2] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp4.chestLogoMirrored) {
    const obj3 = { style: tmp4.chestLogoMirrored, children: tmp10 };
    const tmp17 = React4(metroRequire, obj3);
    cResult[3] = tmp4.chestLogoMirrored;
    cResult[4] = tmp17;
    tmp14 = tmp17;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === tmp4.chestLogo) {
    let tmp18;
    let tmp20;
    if (cResult[6] === tmp14) {
      tmp18 = cResult[7];
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "heading-sm/semibold", color: "text-default", children: intl.string(intl4.t["/AJCN+"]) };
      const Text = tmp(5270).Text;
      intl = tmp(1125).intl;
      const tmp22 = React4(Text, obj4);
      cResult[8] = tmp22;
      tmp20 = tmp22;
    } else {
      tmp20 = cResult[8];
    }
    if (cResult[9] === tmp9) {
      let tmp23;
      if (cResult[10] === windowEndsAt) {
        tmp23 = cResult[11];
      }
      if (cResult[12] === tmp4.rewardShelfCopy) {
        let tmp27;
        if (cResult[13] === tmp23) {
          tmp27 = cResult[14];
        }
        if (cResult[15] === tmp18) {
          let tmp31;
          if (cResult[16] === tmp27) {
            tmp31 = cResult[17];
          }
          return tmp31;
        }
        const obj5 = { children: items };
        items = [tmp18, tmp27];
        const tmp34 = authStore(unpackModuleId, obj5);
        cResult[15] = tmp18;
        cResult[16] = tmp27;
        cResult[17] = tmp34;
        tmp31 = tmp34;
      }
      const obj6 = { style: tmp4.rewardShelfCopy, children: items1 };
      items1 = [tmp20, tmp23];
      const tmp30 = authStore(metroRequire, obj6);
      cResult[12] = tmp4.rewardShelfCopy;
      cResult[13] = tmp23;
      cResult[14] = tmp30;
      tmp27 = tmp30;
    }
    let tmp24 = null;
    if (null != windowEndsAt) {
      const obj7 = { variant: "text-xs/medium", color: "text-muted", children: formatToPlainString(fkzORZ, obj8) };
      const Text2 = tmp(5270).Text;
      const intl2 = tmp(1125).intl;
      formatToPlainString = intl2.formatToPlainString;
      obj8 = { duration: formatTimeUntil(tmp9) };
      fkzORZ = tmp(1125).t.fkzORZ;
      tmp24 = React4(Text2, obj7);
    }
    cResult[9] = tmp9;
    cResult[10] = windowEndsAt;
    cResult[11] = tmp24;
    tmp23 = tmp24;
  }
  const obj9 = { style: tmp4.chestLogo, children: tmp14 };
  const tmp19 = React4(metroRequire, obj9);
  cResult[5] = tmp4.chestLogo;
  cResult[6] = tmp14;
  cResult[7] = tmp19;
  tmp18 = tmp19;
}) : (function OrbsArcadeAllRewardsClaimedShelfContent(windowEndsAt) {
  let fkzORZ;
  let formatToPlainString;
  let intl;
  let items1;
  let obj2;
  let obj3;
  let obj7;
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
    const Text2 = tmp11(5270).Text;
    const intl2 = tmp11(1125).intl;
    formatToPlainString = intl2.formatToPlainString;
    obj7 = { duration: formatTimeUntil(tmp3Result) };
    fkzORZ = tmp11(1125).t.fkzORZ;
    tmp9Result = tmp9(Text2, obj6);
  }
  const obj8 = { children: items };
  items1[1] = tmp9Result;
  items[1] = authStore(tmp10, obj4);
  return authStore(tmp8, obj8);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeRewardShelf(game) {
  let first;
  let stateFromStores;
  let tmp25;
  let tmp7;
  let tmp8;
  let tmp = game;
  let obj = game(stateFromStores[8]);
  const cResult = obj.c(50);
  game = game.game;
  const tmp4 = closure_14();
  const rewards = game.rewards;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [OrbsArcadeStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== game.id) {
    const fn = function c() {
      return OrbsArcadeStore.getGameStateForGame(game.id);
    };
    const items1 = [game.id];
    cResult[1] = game.id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let tmpResult = tmp(tmp2[9]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] !== rewards) {
    let tmp11;
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor(arg0, scoreTarget) {
          let tmp = arg0;
          if (null == arg0) {
            tmp = scoreTarget;
          }
          return tmp;
        }
      }
      cResult[6] = L;
      tmp11 = L;
    } else {
      class L {
        constructor(arg0, scoreTarget) {
          let tmp = arg0;
          if (null == arg0) {
            tmp = scoreTarget;
          }
          return tmp;
        }
      }
    }
    const reduced = rewards.reduce(tmp11, undefined);
    cResult[4] = rewards;
    cResult[5] = reduced;
  } else {
    class L {
      constructor(arg0, scoreTarget) {
        let tmp = arg0;
        if (null == arg0) {
          tmp = scoreTarget;
        }
        return tmp;
      }
    }
  }
  if (cResult[7] === stateFromStores) {
    class L {
      constructor(arg0, scoreTarget) {
        let tmp = arg0;
        if (null == arg0) {
          tmp = scoreTarget;
        }
        return tmp;
      }
    }
    if (tmp13 == null) {
      class L {
        constructor(arg0, scoreTarget) {
          let tmp = arg0;
          if (null == arg0) {
            tmp = scoreTarget;
          }
          return tmp;
        }
      }
    }
    const tmp18 = rewards(stateFromStores[21])(tmp13);
    const tmp17 = rewards;
    if (stateFromStores != null) {
      class L {
        constructor(arg0, scoreTarget) {
          let tmp = arg0;
          if (null == arg0) {
            tmp = scoreTarget;
          }
          return tmp;
        }
      }
    }
    let tmp22 = null != undefined;
    if (tmp22) {
      class L {
        constructor(arg0, scoreTarget) {
          let tmp = arg0;
          if (null == arg0) {
            tmp = scoreTarget;
          }
          return tmp;
        }
      }
      tmp22 = rewards.length > 0;
    }
    if (tmp22) {
      class L {
        constructor(arg0, scoreTarget) {
          let tmp = arg0;
          if (null == arg0) {
            tmp = scoreTarget;
          }
          return tmp;
        }
      }
    }
    if (stateFromStores != null) {
      class L {
        constructor(arg0, scoreTarget) {
          let tmp = arg0;
          if (null == arg0) {
            tmp = scoreTarget;
          }
          return tmp;
        }
      }
    }
    if (undefined == null) {
      class L {
        constructor(arg0, scoreTarget) {
          let tmp = arg0;
          if (null == arg0) {
            tmp = scoreTarget;
          }
          return tmp;
        }
      }
    }
    let tmp24 = null != tmp23;
    if (tmp24) {
      class L {
        constructor(arg0, scoreTarget) {
          let tmp = arg0;
          if (null == arg0) {
            tmp = scoreTarget;
          }
          return tmp;
        }
      }
      if (!tmp25) {
        class L {
          constructor(arg0, scoreTarget) {
            let tmp = arg0;
            if (null == arg0) {
              tmp = scoreTarget;
            }
            return tmp;
          }
        }
        const _Date = Date;
        const parsed = Date.parse(tmp23);
        tmp25 = parsed < Date.parse(game.endsAt);
      }
      tmp24 = tmp25;
    }
    if (cResult[10] === stateFromStores) {
      class L {
        constructor(arg0, scoreTarget) {
          let tmp = arg0;
          if (null == arg0) {
            tmp = scoreTarget;
          }
          return tmp;
        }
      }
      if (cResult[13] !== tmp18) {
        class L {
          constructor(arg0, scoreTarget) {
            let tmp = arg0;
            if (null == arg0) {
              tmp = scoreTarget;
            }
            return tmp;
          }
        }
        const alphaResult = obj5.alpha(0.5);
        cResult[13] = tmp18;
        cResult[14] = alphaResult.css();
        const cssResult = alphaResult.css();
      } else {
        class L {
          constructor(arg0, scoreTarget) {
            let tmp = arg0;
            if (null == arg0) {
              tmp = scoreTarget;
            }
            return tmp;
          }
        }
      }
      if (cResult[15] !== tmp29) {
        class L {
          constructor(arg0, scoreTarget) {
            let tmp = arg0;
            if (null == arg0) {
              tmp = scoreTarget;
            }
            return tmp;
          }
        }
        tmp32[0] = tmp17(stateFromStores[5]).unsafe_rawColors.TRANSPARENT;
        tmp32[1] = tmp29;
        cResult[15] = tmp29;
        cResult[16] = tmp32;
      } else {
        class L {
          constructor(arg0, scoreTarget) {
            let tmp = arg0;
            if (null == arg0) {
              tmp = scoreTarget;
            }
            return tmp;
          }
        }
      }
      if (tmp22) {
        class L {
          constructor(arg0, scoreTarget) {
            let tmp = arg0;
            if (null == arg0) {
              tmp = scoreTarget;
            }
            return tmp;
          }
        }
      }
      if (0 === rewards.length) {
        class L {
          constructor(arg0, scoreTarget) {
            let tmp = arg0;
            if (null == arg0) {
              tmp = scoreTarget;
            }
            return tmp;
          }
        }
      } else {
        class L {
          constructor(arg0, scoreTarget) {
            let tmp = arg0;
            if (null == arg0) {
              tmp = scoreTarget;
            }
            return tmp;
          }
        }
        if (tmp22) {
          class L {
            constructor(arg0, scoreTarget) {
              let tmp = arg0;
              if (null == arg0) {
                tmp = scoreTarget;
              }
              return tmp;
            }
          }
        }
        if (tmp22) {
          class L {
            constructor(arg0, scoreTarget) {
              let tmp = arg0;
              if (null == arg0) {
                tmp = scoreTarget;
              }
              return tmp;
            }
          }
        }
        if (cResult[17] === tmp4.rewardShelf) {
          class L {
            constructor(arg0, scoreTarget) {
              let tmp = arg0;
              if (null == arg0) {
                tmp = scoreTarget;
              }
              return tmp;
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class L {
              constructor(arg0, scoreTarget) {
                let tmp = arg0;
                if (null == arg0) {
                  tmp = scoreTarget;
                }
                return tmp;
              }
            }
            cResult[20] = obj7.string(tmp(stateFromStores[13]).t.XpfUWL);
            obj7.string(tmp(stateFromStores[13]).t.XpfUWL);
            class J {
              constructor() {
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
              }
            }
          } else {
            class L {
              constructor(arg0, scoreTarget) {
                let tmp = arg0;
                if (null == arg0) {
                  tmp = scoreTarget;
                }
                return tmp;
              }
            }
          }
          if (cResult[21] === game.id) {
            class L {
              constructor(arg0, scoreTarget) {
                let tmp = arg0;
                if (null == arg0) {
                  tmp = scoreTarget;
                }
                return tmp;
              }
            }
          }
          class J {
            constructor() {
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
            }
          }
          cResult[21] = game.id;
          cResult[22] = stateFromStores;
          cResult[23] = rewards;
          cResult[24] = J;
        }
        tmp35[0] = tmp4.rewardShelf;
        tmp35[1] = undefined;
        cResult[17] = tmp4.rewardShelf;
        cResult[18] = undefined;
        cResult[19] = tmp35;
      }
    }
    const tmpResult3 = tmp(stateFromStores[14]);
    const orbsArcadeClaimableRewards = tmpResult3.getOrbsArcadeClaimableRewards(rewards, stateFromStores);
    cResult[10] = stateFromStores;
    cResult[11] = rewards;
    cResult[12] = orbsArcadeClaimableRewards;
  }
  const tmpResult4 = tmp(stateFromStores[14]);
  const orbsArcadeFocusedReward = tmpResult4.getOrbsArcadeFocusedReward(rewards, stateFromStores);
  cResult[7] = stateFromStores;
  cResult[8] = rewards;
  cResult[9] = orbsArcadeFocusedReward;
}) : (function OrbsArcadeRewardShelf(game) {
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
  let obj = game(stateFromStores[9]);
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
  const obj2 = game(stateFromStores[14]);
  const orbsArcadeFocusedReward = obj2.getOrbsArcadeFocusedReward(rewards, stateFromStores);
  let tmp7 = orbsArcadeFocusedReward;
  if (orbsArcadeFocusedReward == null) {
    tmp7 = reduced;
  }
  const tmp9 = rewards(stateFromStores[21])(tmp7);
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
    const obj = _modDef683(closure_3);
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
      accessibilityLabel: intl.string(game(stateFromStores[13]).t.XpfUWL),
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
    intl = tmp2(tmp3[13]).intl;
    const obj5 = { style: absoluteFill.absoluteFill, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: memo1 };
    items5 = [closure_9(rewards(tmp3[24]), obj5), , ];
    if (tmp11 && rewards.length > 0 && null == orbsArcadeFocusedReward) {
      let tmp30 = null;
      const tmp29 = closure_20;
      if (tmp14) {
        tmp30 = expiresAt;
      }
      const obj6 = { windowEndsAt: tmp30 };
      tmp21Result = tmp31(tmp29, obj6);
    } else {
      if (null != currentRun) {
        if (memo.length > 1) {
          const obj7 = { rewards: memo };
          tmp21Result = tmp31(closure_15, obj7);
        }
      }
      if (null != currentRun) {
        if (null != tmp7) {
          const obj8 = { reward: tmp7, gameState: stateFromStores };
          tmp21Result = tmp31(closure_16, obj8);
        }
      }
      const obj9 = { children: items6 };
      const obj10 = {
        "aria-label": mapped.join(", "),
        shape: game(stateFromStores[11]).CutoutShape.Circle,
        size: 53,
        gap: 2,
        depthX: 0.3,
        children: rewards.map((reward) => {
              const obj = { reward, size: 53 };
              return closure_1_9(closure_1_18, obj, reward.id);
            })
      };
      const Pile = tmp2(tmp3[10]).Pile;
      mapped = rewards.map((name) => name.name);
      items6 = [closure_9(Pile, obj10), ];
      const obj11 = { style: tmp.rewardShelfCopy, children: items7 };
      const obj12 = { variant: "heading-sm/semibold", color: "text-default", children: intl2.string(game(stateFromStores[13]).t.ehbzo8) };
      const Text = tmp2(tmp3[12]).Text;
      intl2 = tmp2(tmp3[13]).intl;
      items7 = [closure_9(Text, obj12), ];
      const obj13 = { variant: "text-xs/medium", color: "text-muted", children: intl3.string(game(stateFromStores[13]).t["5Gt1dt"]) };
      const Text2 = tmp2(tmp3[12]).Text;
      intl3 = tmp2(tmp3[13]).intl;
      items7[1] = closure_9(Text2, obj13);
      items6[1] = closure_10(closure_6, obj11);
      tmp21Result = tmp21(closure_11, obj9);
    }
    items5[1] = tmp21Result;
    const ChevronSmallRightIcon = tmp2(tmp3[25]).ChevronSmallRightIcon;
    const colors = tmp8(tmp3[5]).colors;
    const obj14 = { size: "md", color: null != currentRun ? colors.CONTROL_ICON_ONLY_ICON_DEFAULT : colors.ICON_MUTED };
    items5[2] = closure_9(ChevronSmallRightIcon, obj14);
    tmp31Result2 = tmp31(tmp32, obj3);
  }
  return tmp31Result2;
});
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardShelf.tsx");

export default tmp5;
