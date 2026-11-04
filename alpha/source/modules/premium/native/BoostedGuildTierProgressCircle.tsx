// Module ID: 15623
// Function ID: 15624
// Name: BoostedGuildTierProgressCircle
// Dependencies: [19, 17, 1072, 21, 5141, 575, 15624, 15628, 15629, 15630, 8609, 5851, 8604, 12438, 5761, 2]
// Exports: default

// Module 15623 (BoostedGuildTierProgressCircle)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5851 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 8604 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 8609 */;
import ProgressCircleDefault from "ProgressCircle" /* 12438 */;
import Tier048Px from "Tier048Px" /* 15624 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
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
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/BoostedGuildTierProgressCircle.tsx");

export default function BoostedGuildTierProgressCircle(arg0) {
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
          tmp2Result4 = tmp2(15628);
        } else if (hasOwnProperty.TIER_2 === premiumTier) {
          tmp2Result4 = tmp2(15629);
        } else if (hasOwnProperty.TIER_3 === premiumTier) {
          tmp2Result4 = tmp2(15630);
        }
      }
      const obj5 = { source: tmp2Result4, style: tmp.guildTierIcon, accessibilityElementsHidden: true, importantForAccessibility: "no" };
      const items = [metroRequire(tmp12, obj5), ];
      const obj6 = { style: tmp.guildTierName, variant: "body-xs/semibold", color: "interactive-text-active", children: tmp19Result.getTierName(guild.premiumTier) };
      const Text = tmp19(5761).Text;
      tmp19Result = GuildBoostingUtils;
      items[1] = metroRequire(Text, obj6);
      obj4.children = items;
      obj.children = tmp10(tmp11, obj4);
      return metroRequire(tmp2Result3, obj);
    }
    const tmp19Result2 = Tier048Px;
    tmp2Result4 = tmp19Result2.getTier048PxSource(theme);
  }
};
