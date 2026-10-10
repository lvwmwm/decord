// Module ID: 13774
// Function ID: 13775
// Name: BoostedGuildTierProgressCircle
// Dependencies: [19, 17, 1085, 21, 5092, 587, 13775, 13779, 13780, 13781, 558, 576, 8029, 6156, 8024, 5088, 12328, 2]

// Module 13774 (BoostedGuildTierProgressCircle)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5088 */;
import FastImageDefault from "FastImage" /* 6156 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 8024 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 8029 */;
import ProgressCircleDefault from "ProgressCircle" /* 12328 */;
import Tier048Px from "Tier048Px" /* 13775 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let size;
const View = react_native.View;
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_4, BoostedGuildTiers: hasOwnProperty } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { guildTierProgressCircle: { position: "relative", width: 70, height: 70 }, guildTierBackground: size, guildTierNoneIcon: { width: 18, height: 30 }, guildTierIcon: { width: 24, height: 24 }, guildTierName: { lineHeight: 16, marginTop: 2 } };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xxl };
let closure_8 = createStyles.createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function BoostedGuildTierProgressCircle(arg0) {
  let guild;
  let items;
  let theme;
  const obj = react2;
  const cResult = obj.c(27);
  ({ guild, theme } = arg0);
  const tmp4 = closure_8();
  useGuildPowerupsBoostCountDefault;
  if (guild != null) {
    const id = guild.id;
  }
  if (null == guild) {
    let tmp30;
    const guildTierBackground = tmp4.guildTierBackground;
    if (cResult[0] !== theme) {
      const tmpResult = Tier048Px;
      const tier048PxSource = tmpResult.getTier048PxSource(theme);
      cResult[0] = theme;
      cResult[1] = tier048PxSource;
      tmp30 = tier048PxSource;
    } else {
      tmp30 = cResult[1];
    }
    if (cResult[2] === tmp4.guildTierNoneIcon) {
      let tmp32;
      if (cResult[3] === tmp30) {
        tmp32 = cResult[4];
      }
      if (cResult[5] === tmp4.guildTierBackground) {
        let tmp35;
        if (cResult[6] === tmp32) {
          tmp35 = cResult[7];
        }
        return tmp35;
      }
      const obj2 = { style: guildTierBackground, children: tmp32 };
      const tmp38 = metroRequire(View, obj2);
      cResult[5] = tmp4.guildTierBackground;
      cResult[6] = tmp32;
      cResult[7] = tmp38;
      tmp35 = tmp38;
    }
    const obj3 = { source: tmp30, style: tmp4.guildTierNoneIcon, accessibilityElementsHidden: true, importantForAccessibility: "no" };
    const tmp34 = metroRequire(FastImageDefault, obj3);
    cResult[2] = tmp4.guildTierNoneIcon;
    cResult[3] = tmp30;
    cResult[4] = tmp34;
    tmp32 = tmp34;
  } else {
    let tmp12;
    const tmpResult4 = GuildBoostingUtils;
    const nextGuildTierFromGuild = tmpResult4.getNextGuildTierFromGuild(guild.id);
    let tmp9 = null;
    if (null != nextGuildTierFromGuild) {
      tmp9 = React3[nextGuildTierFromGuild];
    }
    let num2 = 100;
    if (null != tmp9) {
      num2 = 100;
      if (tmp9 > 0) {
        num2 = tmp7 / tmp9 * 100;
      }
    }
    if (cResult[8] === guild) {
      if (cResult[9] === theme) {
        tmp12 = cResult[10];
      }
      if (cResult[11] === tmp4.guildTierIcon) {
        let tmp15;
        let tmp18;
        if (cResult[12] === tmp12) {
          tmp15 = cResult[13];
        }
        const guildTierName = tmp4.guildTierName;
        if (cResult[14] !== guild.premiumTier) {
          const tmpResult5 = GuildBoostingUtils;
          const tierName = tmpResult5.getTierName(guild.premiumTier);
          cResult[14] = guild.premiumTier;
          cResult[15] = tierName;
          tmp18 = tierName;
        } else {
          tmp18 = cResult[15];
        }
        if (cResult[16] === tmp4.guildTierName) {
          let tmp20;
          if (cResult[17] === tmp18) {
            tmp20 = cResult[18];
          }
          if (cResult[19] === tmp4.guildTierBackground) {
            if (cResult[20] === tmp15) {
              let tmp23;
              if (cResult[21] === tmp20) {
                tmp23 = cResult[22];
              }
              if (cResult[23] === num2) {
                if (cResult[24] === tmp4.guildTierProgressCircle) {
                  let tmp27;
                  if (cResult[25] === tmp23) {
                    tmp27 = cResult[26];
                  }
                  return tmp27;
                }
              }
              const obj4 = { style: tmp10, percent: num2, children: tmp23 };
              const tmp29 = metroRequire(ProgressCircleDefault, obj4);
              cResult[23] = num2;
              cResult[24] = tmp4.guildTierProgressCircle;
              cResult[25] = tmp23;
              cResult[26] = tmp29;
              tmp27 = tmp29;
            }
          }
          const obj5 = { style: tmp11, children: items };
          items = [tmp15, tmp20];
          const tmp26 = metroImportDefault(View, obj5);
          cResult[19] = tmp4.guildTierBackground;
          cResult[20] = tmp15;
          cResult[21] = tmp20;
          cResult[22] = tmp26;
          tmp23 = tmp26;
        }
        const obj6 = { style: guildTierName, variant: "text-xs/semibold", color: "interactive-text-active", children: tmp18 };
        const tmp22 = metroRequire(Text_Text.Text, obj6);
        cResult[16] = tmp4.guildTierName;
        cResult[17] = tmp18;
        cResult[18] = tmp22;
        tmp20 = tmp22;
      }
      const obj7 = { source: tmp12, style: tmp4.guildTierIcon, accessibilityElementsHidden: true, importantForAccessibility: "no" };
      const tmp17 = metroRequire(FastImageDefault, obj7);
      cResult[11] = tmp4.guildTierIcon;
      cResult[12] = tmp12;
      cResult[13] = tmp17;
      tmp15 = tmp17;
    }
    if (null != guild) {
      let tier048PxSource1;
      if (guild.premiumTier !== hasOwnProperty.NONE) {
        const premiumTier = guild.premiumTier;
        if (hasOwnProperty.TIER_1 === premiumTier) {
          tier048PxSource1 = tmp5(13779);
        } else if (hasOwnProperty.TIER_2 === premiumTier) {
          tier048PxSource1 = tmp5(13780);
        } else if (hasOwnProperty.TIER_3 === premiumTier) {
          tier048PxSource1 = tmp5(13781);
        }
      }
      cResult[8] = guild;
      cResult[9] = theme;
      cResult[10] = tier048PxSource1;
      tmp12 = tier048PxSource1;
    }
    const tmpResult6 = Tier048Px;
    tier048PxSource1 = tmpResult6.getTier048PxSource(theme);
  }
}) : (function BoostedGuildTierProgressCircle(arg0) {
  let guild;
  let obj3;
  let obj9;
  let theme;
  let tmp19Result;
  let tmp2Result;
  ({ guild, theme } = arg0);
  const tmp = closure_8();
  useGuildPowerupsBoostCountDefault;
  if (guild != null) {
    const id = guild.id;
  }
  if (null == guild) {
    const obj2 = { style: tmp.guildTierBackground, children: metroRequire(tmp2Result, obj3) };
    obj3 = { source: obj9.getTier048PxSource(theme), style: tmp.guildTierNoneIcon, accessibilityElementsHidden: true, importantForAccessibility: "no" };
    tmp2Result = FastImageDefault;
    obj9 = Tier048Px;
    return metroRequire(View, obj2);
  } else {
    const obj10 = GuildBoostingUtils;
    const nextGuildTierFromGuild = obj10.getNextGuildTierFromGuild(guild.id);
    let tmp7 = null;
    if (null != nextGuildTierFromGuild) {
      tmp7 = React3[nextGuildTierFromGuild];
    }
    let num2 = 100;
    if (null != tmp7) {
      num2 = 100;
      if (tmp7 > 0) {
        num2 = tmp5 / tmp7 * 100;
      }
    }
    const obj = { style: tmp.guildTierProgressCircle, percent: num2, children: null };
    const obj4 = { style: tmp.guildTierBackground, children: null };
    const tmp10 = metroImportDefault;
    const tmp11 = View;
    const tmp2Result3 = ProgressCircleDefault;
    if (null != guild) {
      let tmp2Result4;
      if (guild.premiumTier !== hasOwnProperty.NONE) {
        const premiumTier = guild.premiumTier;
        if (hasOwnProperty.TIER_1 === premiumTier) {
          tmp2Result4 = tmp2(13779);
        } else if (hasOwnProperty.TIER_2 === premiumTier) {
          tmp2Result4 = tmp2(13780);
        } else if (hasOwnProperty.TIER_3 === premiumTier) {
          tmp2Result4 = tmp2(13781);
        }
      }
      const obj5 = { source: tmp2Result4, style: tmp.guildTierIcon, accessibilityElementsHidden: true, importantForAccessibility: "no" };
      const items = [metroRequire(tmp12, obj5), ];
      const obj6 = { style: tmp.guildTierName, variant: "text-xs/semibold", color: "interactive-text-active", children: tmp19Result.getTierName(guild.premiumTier) };
      const Text = tmp19(5088).Text;
      tmp19Result = GuildBoostingUtils;
      items[1] = metroRequire(Text, obj6);
      obj4.children = items;
      obj.children = tmp10(tmp11, obj4);
      return metroRequire(tmp2Result3, obj);
    }
    const tmp19Result2 = Tier048Px;
    tmp2Result4 = tmp19Result2.getTier048PxSource(theme);
  }
});
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/BoostedGuildTierProgressCircle.tsx");

export default tmp5;
