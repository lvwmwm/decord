// Module ID: 13046
// Function ID: 13047
// Name: BoostedGuildTierProgressCircle
// Dependencies: [19, 17, 1074, 21, 4836, 576, 13047, 13051, 13052, 13053, 4743, 4728, 12088, 4832, 2]
// Exports: default

// Module 13046 (BoostedGuildTierProgressCircle)
import nativeDefault from "native" /* 576 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4728 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 4743 */;
import Tier048Px from "Tier048Px" /* 13047 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let size;
({ View: c3, Image: closure_4 } = react_native);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: hasOwnProperty, BoostedGuildTiers: metroRequire } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { guildTierProgressCircle: { position: "relative", width: 70, height: 70 }, guildTierBackground: size, guildTierNoneIcon: { width: 18, height: 30 }, guildTierIcon: { width: 24, height: 24 }, guildTierName: { lineHeight: 16, marginTop: 2 } };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xxl };
let closure_9 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/BoostedGuildTierProgressCircle.tsx");

export default function BoostedGuildTierProgressCircle(arg0) {
  let guild;
  let obj3;
  let obj9;
  let theme;
  let tmp19Result;
  ({ guild, theme } = arg0);
  const tmp = closure_9();
  useGuildPowerupsBoostCountDefault;
  if (guild != null) {
    const id = guild.id;
  }
  if (null == guild) {
    const obj2 = { style: tmp.guildTierBackground, children: metroImportDefault(React3, obj3) };
    obj3 = { source: obj9.getTier048PxSource(theme), style: tmp.guildTierNoneIcon, accessibilityElementsHidden: true, importantForAccessibility: "no" };
    obj9 = Tier048Px;
    return metroImportDefault(_false, obj2);
  } else {
    const obj10 = GuildBoostingUtils;
    const nextGuildTierFromGuild = obj10.getNextGuildTierFromGuild(guild.id);
    let tmp7 = null;
    if (null != nextGuildTierFromGuild) {
      tmp7 = hasOwnProperty[nextGuildTierFromGuild];
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
    if (null != guild) {
      let tier048PxSource;
      if (guild.premiumTier !== metroRequire.NONE) {
        const premiumTier = guild.premiumTier;
        if (metroRequire.TIER_1 === premiumTier) {
          tier048PxSource = tmp2(13051);
        } else if (metroRequire.TIER_2 === premiumTier) {
          tier048PxSource = tmp2(13052);
        } else if (metroRequire.TIER_3 === premiumTier) {
          tier048PxSource = tmp2(13053);
        }
      }
      const obj5 = { source: tier048PxSource, style: tmp.guildTierIcon, accessibilityElementsHidden: true, importantForAccessibility: "no" };
      const items = [metroImportDefault(tmp12, obj5), ];
      const obj6 = { style: tmp.guildTierName, variant: "text-xs/semibold", color: "interactive-text-active", children: tmp19Result.getTierName(guild.premiumTier) };
      const Text = tmp19(4832).Text;
      tmp19Result = GuildBoostingUtils;
      items[1] = metroImportDefault(Text, obj6);
      obj4.children = items;
      obj.children = tmp10(tmp11, obj4);
      return metroImportDefault(tmp9, obj);
    }
    const tmp19Result2 = Tier048Px;
    tier048PxSource = tmp19Result2.getTier048PxSource(theme);
  }
};
