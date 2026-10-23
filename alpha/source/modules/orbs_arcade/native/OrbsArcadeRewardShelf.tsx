// Module ID: 16374
// Function ID: 16375
// Name: OrbsArcadeRewardShelf
// Dependencies: [19, 17, 16366, 21, 587, 4969, 558, 576, 16372, 16375, 16376, 5232, 16367, 9438, 1128, 7552, 16377, 504, 16381, 683, 16382, 5256, 12900, 9405, 7303, 2]

// Module 16374 (OrbsArcadeRewardShelf)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import intl4 from "intl" /* 1128 */;
import Text_Text from "Text/Text" /* 5232 */;
import LinearGradientDefault from "LinearGradient" /* 5256 */;
import useCountdownDefault from "useCountdown" /* 7552 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16367 */;
import OrbsArcadeRewardUtils from "OrbsArcadeRewardUtils" /* 16372 */;
import OrbsArcadeRewardPreviewDefault from "OrbsArcadeRewardPreview" /* 16375 */;
import OrbsArcadeRewardStatusLabelDefault from "OrbsArcadeRewardStatusLabel" /* 16376 */;
import ChestLogoSpotIllustration from "ChestLogoSpotIllustration" /* 16377 */;
import useOrbsArcadeRewardAccentColorDefault from "useOrbsArcadeRewardAccentColor" /* 16381 */;
import openOrbsArcadeSheets from "openOrbsArcadeSheets" /* 16382 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16366 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let items1;
let items2;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp;
const NitroCoinSpotIllustration = tmp(9438);
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
({ Pressable: closure_4, StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let c11 = 50;
let items = [nativeDefault.unsafe_rawColors.TRANSPARENT, "rgba(16, 142, 77, 0.5)"];
let createStyles = createStyles_mod;
let obj = { rewardShelf: obj2, rewardShelfCopy: { flex: 1 }, allRewardsClaimedShelf: { backgroundColor: "rgba(151, 151, 159, 0.08)" }, rewardShelfGlowContainer: obj3, chestLogo: { width: 50, height: 50, overflow: "hidden", alignItems: "center", justifyContent: "center" }, chestLogoMirrored: obj4 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, overflow: "hidden", paddingHorizontal: nativeDefault.space.PX_10, paddingVertical: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.lg, boxShadow: items1 };
items1 = [{ offsetX: 0, offsetY: 0, blurRadius: 10, color: "#0E482B" }];
obj4 = { transform: items2 };
items2 = [{ scaleX: -1 }];
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeFocusedRewardShelfContent(arg0) {
  let gameState;
  let items1;
  let reward;
  const obj = react2;
  const cResult = obj.c(23);
  ({ reward, gameState } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === gameState) {
    let tmp5;
    let tmp7;
    if (cResult[1] === reward.id) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== reward) {
      const obj2 = { reward, size: v50 };
      const tmp11 = metroImportAll(OrbsArcadeRewardPreviewDefault, obj2);
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
        const tmp19 = metroImportAll(Text_Text.Text, obj3);
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
          const tmp24 = metroImportAll(Text_Text.Text, obj4);
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
              const tmp32 = React4(authStore, obj5);
              cResult[20] = tmp7;
              cResult[21] = tmp25;
              cResult[22] = tmp32;
              tmp29 = tmp32;
            }
          }
        }
        const obj6 = { style: tmp12, children: items1 };
        items1 = [tmp13, tmp17, tmp22];
        const tmp28 = React4(metroRequire, obj6);
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
    const tmp16 = metroImportAll(OrbsArcadeRewardStatusLabelDefault, obj7);
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
  const tmp = closure_13();
  const obj = OrbsArcadeRewardUtils;
  const orbsArcadeRewardStatus = obj.getOrbsArcadeRewardStatus(reward.id, gameState);
  const obj2 = { children: items };
  items = [, ];
  const obj3 = { reward, size: v50 };
  items[0] = metroImportAll(OrbsArcadeRewardPreviewDefault, obj3);
  const obj4 = { style: tmp.rewardShelfCopy, children: items1 };
  items1 = [metroImportAll(OrbsArcadeRewardStatusLabelDefault, { reward, status: orbsArcadeRewardStatus, color: "text-default" }), , ];
  const obj5 = { variant: "heading-sm/semibold", color: "text-subtle", children: reward.name };
  items1[1] = metroImportAll(Text_Text.Text, obj5);
  const obj6 = { variant: "text-xs/medium", color: "text-muted", children: obj7.getOrbsArcadeRewardScoreLabel(reward, orbsArcadeRewardStatus) };
  const Text = Text_Text.Text;
  obj7 = OrbsArcadeRewardUtils;
  items1[2] = metroImportAll(Text, obj6);
  items[1] = React4(metroRequire, obj4);
  return React4(authStore, obj2);
});
createStyles = createStyles_mod;
let closure_15 = createStyles.createStyles((width) => ({ nitroCoin: { width, height: width, alignItems: "center", justifyContent: "center" } }));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadePileReward(arg0) {
  let reward;
  const obj = react2;
  const cResult = obj.c(8);
  ({ reward, size } = arg0);
  const tmp4 = closure_15(size);
  if (reward.type !== OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    if (cResult[0] === reward) {
      let tmp12;
      if (cResult[1] === size) {
        tmp12 = cResult[2];
      }
      return tmp12;
    }
    const obj2 = { reward, size };
    const tmp15 = metroImportAll(OrbsArcadeRewardPreviewDefault, obj2);
    cResult[0] = reward;
    cResult[1] = size;
    cResult[2] = tmp15;
    tmp12 = tmp15;
  } else {
    let tmp5;
    const result = 0.85 * size;
    if (cResult[3] !== result) {
      const obj3 = { height: result };
      const tmp7 = metroImportAll(NitroCoinSpotIllustration.NitroCoinSpotIllustration, obj3);
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
    const tmp11 = metroImportAll(metroRequire, obj4);
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
  const tmp = closure_15(size);
  if (reward.type !== OrbsArcadeTypes.OrbsArcadeRewardType.FRACTIONAL_PREMIUM) {
    const obj2 = { reward, size };
    tmp6 = metroImportAll(OrbsArcadeRewardPreviewDefault, obj2);
  } else {
    const obj = { style: tmp.nitroCoin, children: metroImportAll(NitroCoinSpotIllustration.NitroCoinSpotIllustration, obj3) };
    obj3 = { height: 0.85 * size };
    tmp6 = metroImportAll(metroRequire, obj);
  }
  return tmp6;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeAllRewardsClaimedShelfContent(windowEndsAt) {
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
  const tmp4 = closure_13();
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
    const tmp13 = metroImportAll(ChestLogoSpotIllustration.ChestLogoSpotIllustration, obj2);
    cResult[2] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp4.chestLogoMirrored) {
    const obj3 = { style: tmp4.chestLogoMirrored, children: tmp10 };
    const tmp17 = metroImportAll(metroRequire, obj3);
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
      const Text = tmp(5232).Text;
      intl = tmp(1128).intl;
      const tmp22 = metroImportAll(Text, obj4);
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
        const tmp34 = React4(authStore, obj5);
        cResult[15] = tmp18;
        cResult[16] = tmp27;
        cResult[17] = tmp34;
        tmp31 = tmp34;
      }
      const obj6 = { style: tmp4.rewardShelfCopy, children: items1 };
      items1 = [tmp20, tmp23];
      const tmp30 = React4(metroRequire, obj6);
      cResult[12] = tmp4.rewardShelfCopy;
      cResult[13] = tmp23;
      cResult[14] = tmp30;
      tmp27 = tmp30;
    }
    let tmp24 = null;
    if (null != windowEndsAt) {
      const obj7 = { variant: "text-xs/medium", color: "text-muted", children: formatToPlainString(fkzORZ, obj8) };
      const Text2 = tmp(5232).Text;
      const intl2 = tmp(1128).intl;
      formatToPlainString = intl2.formatToPlainString;
      obj8 = { duration: formatTimeUntil(tmp9) };
      fkzORZ = tmp(1128).t.fkzORZ;
      tmp24 = metroImportAll(Text2, obj7);
    }
    cResult[9] = tmp9;
    cResult[10] = windowEndsAt;
    cResult[11] = tmp24;
    tmp23 = tmp24;
  }
  const obj9 = { style: tmp4.chestLogo, children: tmp14 };
  const tmp19 = metroImportAll(metroRequire, obj9);
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
  const tmp = closure_13();
  let num = 0;
  const tmp3 = useCountdownDefault;
  if (null != windowEndsAt) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    num = new Date(windowEndsAt);
  }
  const obj = { style: tmp.chestLogo, children: metroImportAll(metroRequire, obj2) };
  obj2 = { style: tmp.chestLogoMirrored, children: metroImportAll(ChestLogoSpotIllustration.ChestLogoSpotIllustration, obj3) };
  obj3 = { accessible: false, height: v50 };
  const tmp3Result = tmp3(num, 60000, undefined, null == windowEndsAt);
  items = [metroImportAll(metroRequire, obj), ];
  const obj4 = { style: tmp.rewardShelfCopy, children: items1 };
  const obj5 = { variant: "heading-sm/semibold", color: "text-default", children: intl.string(intl4.t["/AJCN+"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items1 = [metroImportAll(Text, obj5), ];
  let tmp9Result = null;
  const tmp10 = metroRequire;
  const tmp8 = authStore;
  const tmp9 = metroImportAll;
  if (null != windowEndsAt) {
    const obj6 = { variant: "text-xs/medium", color: "text-muted", children: formatToPlainString(fkzORZ, obj7) };
    const Text2 = tmp11(5232).Text;
    const intl2 = tmp11(1128).intl;
    formatToPlainString = intl2.formatToPlainString;
    obj7 = { duration: formatTimeUntil(tmp3Result) };
    fkzORZ = tmp11(1128).t.fkzORZ;
    tmp9Result = tmp9(Text2, obj6);
  }
  const obj8 = { children: items };
  items1[1] = tmp9Result;
  items[1] = React4(tmp10, obj4);
  return React4(tmp8, obj8);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeRewardShelf(game) {
  let first;
  let intl2;
  let intl3;
  let items3;
  let items4;
  let mapped;
  let tmp10;
  let tmp7;
  let tmp8;
  let tmp = game;
  let obj = game(576);
  const cResult = obj.c(44);
  game = game.game;
  const tmp4 = closure_13();
  const rewards = game.rewards;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [OrbsArcadeStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== game.id) {
    const fn = function h() {
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
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] !== rewards) {
    let tmp11;
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function _(arg0, scoreTarget) {
        let tmp = arg0;
        if (null == arg0) {
          tmp = scoreTarget;
        }
        return tmp;
      };
      cResult[6] = fn2;
      tmp11 = fn2;
    } else {
      tmp11 = cResult[6];
    }
    const reduced = rewards.reduce(tmp11, undefined);
    cResult[4] = rewards;
    cResult[5] = reduced;
    tmp10 = reduced;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[7] === stateFromStores) {
    let tmp13;
    let tmp27;
    let tmp29;
    if (cResult[8] === rewards) {
      tmp13 = cResult[9];
    }
    let tmp16 = tmp13;
    if (tmp13 == null) {
      tmp16 = tmp10;
    }
    const tmp18 = useOrbsArcadeRewardAccentColorDefault(tmp16);
    let enrolledAt;
    if (stateFromStores != null) {
      enrolledAt = stateFromStores.enrolledAt;
    }
    let expiresAt;
    if (stateFromStores != null) {
      expiresAt = stateFromStores.expiresAt;
    }
    if (expiresAt == null) {
      expiresAt = null;
    }
    let tmp24 = null != expiresAt;
    if (tmp24) {
      let tmp25 = null == game.endsAt;
      if (!tmp25) {
        const _Date = Date;
        const _Date2 = Date;
        const parsed = Date.parse(expiresAt);
        tmp25 = parsed < Date.parse(game.endsAt);
      }
      tmp24 = tmp25;
    }
    if (cResult[10] !== tmp18) {
      const obj4 = _modDef683(tmp18);
      const alphaResult = obj4.alpha(0.5);
      const cssResult = alphaResult.css();
      cResult[10] = tmp18;
      cResult[11] = cssResult;
      tmp27 = cssResult;
    } else {
      tmp27 = cResult[11];
    }
    if (cResult[12] !== tmp27) {
      const items2 = [nativeDefault.unsafe_rawColors.TRANSPARENT, tmp27];
      cResult[12] = tmp27;
      cResult[13] = items2;
      tmp29 = items2;
    } else {
      tmp29 = cResult[13];
    }
    if (tmp21 && rewards.length > 0 && null == tmp13) {
      tmp29 = items;
    }
    if (0 === rewards.length) {
      return null;
    } else {
      if (tmp21 && rewards.length > 0 && null == tmp13) {
        const rewardShelfGlowContainer = tmp4.rewardShelfGlowContainer;
      }
      let prop;
      if (tmp21 && rewards.length > 0 && null == tmp13) {
        prop = tmp4.allRewardsClaimedShelf;
      }
      if (cResult[14] === tmp4.rewardShelf) {
        let tmp36;
        let tmp35;
        let tmp47Result;
        const _Symbol2 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1128).intl;
          cResult[17] = intl.string(tmp(1128).t.XpfUWL);
          const stringResult = intl.string(tmp(1128).t.XpfUWL);
        }
        if (cResult[18] !== game.id) {
          class W {
            constructor() {
              const obj = openOrbsArcadeSheets;
              return obj.openOrbsArcadeRewardsSheet(game.id);
            }
          }
          cResult[18] = game.id;
          cResult[19] = W;
        } else {
          class W {
            constructor() {
              const obj = openOrbsArcadeSheets;
              return obj.openOrbsArcadeRewardsSheet(game.id);
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          class W {
            constructor() {
              const obj = openOrbsArcadeSheets;
              return obj.openOrbsArcadeRewardsSheet(game.id);
            }
          }
          const point = { x: 0, y: 1 };
          cResult[20] = tmp37;
          cResult[21] = point;
          tmp36 = point;
          tmp35 = tmp37;
        } else {
          class W {
            constructor() {
              const obj = openOrbsArcadeSheets;
              return obj.openOrbsArcadeRewardsSheet(game.id);
            }
          }
          tmp36 = cResult[21];
        }
        if (cResult[22] !== tmp29) {
          class W {
            constructor() {
              const obj = openOrbsArcadeSheets;
              return obj.openOrbsArcadeRewardsSheet(game.id);
            }
          }
          const obj2 = { style: closure_5.absoluteFill, start: tmp35, end: tmp36, colors: tmp29 };
          cResult[22] = tmp29;
          cResult[23] = closure_8(LinearGradientDefault, obj2);
          const tmp40 = closure_8(LinearGradientDefault, obj2);
        } else {
          class W {
            constructor() {
              const obj = openOrbsArcadeSheets;
              return obj.openOrbsArcadeRewardsSheet(game.id);
            }
          }
        }
        if (cResult[24] === (tmp21 && rewards.length > 0 && null == tmp13)) {
          class W {
            constructor() {
              const obj = openOrbsArcadeSheets;
              return obj.openOrbsArcadeRewardsSheet(game.id);
            }
          }
        }
        if (tmp21 && rewards.length > 0 && null == tmp13) {
          class W {
            constructor() {
              const obj = openOrbsArcadeSheets;
              return obj.openOrbsArcadeRewardsSheet(game.id);
            }
          }
          const tmp47 = closure_8;
          const tmp48 = closure_18;
          if (tmp24) {
            class W {
              constructor() {
                const obj = openOrbsArcadeSheets;
                return obj.openOrbsArcadeRewardsSheet(game.id);
              }
            }
          }
          const obj3 = { windowEndsAt: tmp49 };
          tmp47Result = tmp47(tmp48, obj3);
        } else {
          class W {
            constructor() {
              const obj = openOrbsArcadeSheets;
              return obj.openOrbsArcadeRewardsSheet(game.id);
            }
          }
          const obj5 = { children: items3 };
          const obj6 = {
            "aria-label": mapped.join(", "),
            shape: tmp(9405).CutoutShape.Circle,
            size: 53,
            gap: 2,
            depthX: 0.3,
            children: rewards.map((reward) => {
                      const obj = { reward, size: 53 };
                      return closure_1_8(closure_1_16, obj, reward.id);
                    })
          };
          const Pile = tmp(12900).Pile;
          mapped = rewards.map((name) => name.name);
          items3 = [closure_8(Pile, obj6), ];
          const obj7 = { style: tmp4.rewardShelfCopy, children: items4 };
          const obj8 = { variant: "heading-sm/semibold", color: "text-default", children: intl2.string(tmp(1128).t.ehbzo8) };
          const Text = tmp(5232).Text;
          intl2 = tmp(1128).intl;
          items4 = [closure_8(Text, obj8), ];
          const obj9 = { variant: "text-xs/medium", color: "text-muted", children: intl3.string(tmp(1128).t["5Gt1dt"]) };
          const Text2 = tmp(5232).Text;
          intl3 = tmp(1128).intl;
          items4[1] = closure_8(Text2, obj9);
          items3[1] = closure_9(closure_6, obj7);
          tmp47Result = closure_9(closure_10, obj5);
        }
        cResult[24] = tmp21 && rewards.length > 0 && null == tmp13;
        cResult[25] = tmp16;
        cResult[26] = stateFromStores;
        cResult[27] = tmp24;
        cResult[28] = null != enrolledAt;
        cResult[29] = rewards;
        cResult[30] = tmp4.rewardShelfCopy;
        cResult[31] = expiresAt;
        cResult[32] = tmp47Result;
      }
      const items5 = [tmp4.rewardShelf, prop];
      cResult[14] = tmp4.rewardShelf;
      cResult[15] = prop;
      cResult[16] = items5;
    }
  }
  const tmpResult2 = tmp(16372);
  const orbsArcadeFocusedReward = tmpResult2.getOrbsArcadeFocusedReward(rewards, stateFromStores);
  cResult[7] = stateFromStores;
  cResult[8] = rewards;
  cResult[9] = orbsArcadeFocusedReward;
  tmp13 = orbsArcadeFocusedReward;
}) : (function OrbsArcadeRewardShelf(game) {
  let closure_1;
  let intl;
  let intl2;
  let intl3;
  let items4;
  let items5;
  let items6;
  let mapped;
  let obj4;
  let tmp22;
  game = game.game;
  importDefault = undefined;
  let tmp = closure_13();
  const rewards = game.rewards;
  let obj = game(504);
  items = [OrbsArcadeStore];
  const items1 = [game.id];
  const stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.getGameStateForGame(game.id), items1);
  const reduced = rewards.reduce((acc, scoreTarget) => {
    let tmp = acc;
    if (null == acc) {
      tmp = scoreTarget;
    }
    return tmp;
  }, undefined);
  const obj2 = game(16372);
  const orbsArcadeFocusedReward = obj2.getOrbsArcadeFocusedReward(rewards, stateFromStores);
  let tmp7 = orbsArcadeFocusedReward;
  if (orbsArcadeFocusedReward == null) {
    tmp7 = reduced;
  }
  const tmp9 = useOrbsArcadeRewardAccentColorDefault(tmp7);
  importDefault = tmp9;
  let enrolledAt;
  if (stateFromStores != null) {
    enrolledAt = stateFromStores.enrolledAt;
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
  const items2 = [tmp9];
  let memo = react.useMemo(() => {
    items = [nativeDefault.unsafe_rawColors.TRANSPARENT, ];
    const obj = _modDef683(closure_1);
    const alphaResult = obj.alpha(0.5);
    items[1] = alphaResult.css();
    return items;
  }, items2);
  if (tmp11 && rewards.length > 0 && null == orbsArcadeFocusedReward) {
    memo = items;
  }
  let tmp30Result2 = null;
  if (0 !== rewards.length) {
    let tmp21Result;
    let prop;
    if (tmp11 && rewards.length > 0 && null == orbsArcadeFocusedReward) {
      prop = tmp.rewardShelfGlowContainer;
    }
    const items3 = [tmp.rewardShelf, ];
    let prop1;
    const obj3 = { style: prop, children: closure_9(tmp22, obj4) };
    tmp22 = closure_4;
    if (tmp11 && rewards.length > 0 && null == orbsArcadeFocusedReward) {
      prop1 = tmp.allRewardsClaimedShelf;
    }
    items3[1] = prop1;
    obj4 = {
      style: items3,
      accessibilityRole: "button",
      accessibilityLabel: intl.string(game(1128).t.XpfUWL),
      onPress() {
          const obj = openOrbsArcadeSheets;
          return obj.openOrbsArcadeRewardsSheet(game.id);
        },
      children: items4
    };
    intl = tmp2(1128).intl;
    const obj5 = { style: closure_5.absoluteFill, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: memo };
    items4 = [closure_8(LinearGradientDefault, obj5), , ];
    if (tmp11 && rewards.length > 0 && null == orbsArcadeFocusedReward) {
      let tmp29 = null;
      const tmp28 = closure_18;
      if (tmp14) {
        tmp29 = expiresAt;
      }
      const obj6 = { windowEndsAt: tmp29 };
      tmp21Result = tmp30(tmp28, obj6);
    } else {
      if (null != enrolledAt) {
        if (null != tmp7) {
          const obj7 = { reward: tmp7, gameState: stateFromStores };
          tmp21Result = tmp30(closure_14, obj7);
        }
      }
      const obj8 = { children: items5 };
      const obj9 = {
        "aria-label": mapped.join(", "),
        shape: game(9405).CutoutShape.Circle,
        size: 53,
        gap: 2,
        depthX: 0.3,
        children: rewards.map((reward) => {
              const obj = { reward, size: 53 };
              return closure_1_8(closure_1_16, obj, reward.id);
            })
      };
      const Pile = tmp2(12900).Pile;
      mapped = rewards.map((name) => name.name);
      items5 = [closure_8(Pile, obj9), ];
      const obj10 = { style: tmp.rewardShelfCopy, children: items6 };
      const obj11 = { variant: "heading-sm/semibold", color: "text-default", children: intl2.string(game(1128).t.ehbzo8) };
      const Text = tmp2(5232).Text;
      intl2 = tmp2(1128).intl;
      items6 = [closure_8(Text, obj11), ];
      const obj12 = { variant: "text-xs/medium", color: "text-muted", children: intl3.string(game(1128).t["5Gt1dt"]) };
      const Text2 = tmp2(5232).Text;
      intl3 = tmp2(1128).intl;
      items6[1] = closure_8(Text2, obj12);
      items5[1] = closure_9(closure_6, obj10);
      tmp21Result = tmp21(closure_10, obj8);
    }
    items4[1] = tmp21Result;
    const ChevronSmallRightIcon = tmp2(7303).ChevronSmallRightIcon;
    const colors = tmp8(587).colors;
    const obj13 = { size: "md", color: null != enrolledAt ? colors.CONTROL_ICON_ONLY_ICON_DEFAULT : colors.ICON_MUTED };
    items4[2] = closure_8(ChevronSmallRightIcon, obj13);
    tmp30Result2 = tmp30(tmp31, obj3);
  }
  return tmp30Result2;
});
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeRewardShelf.tsx");

export default tmp5;
