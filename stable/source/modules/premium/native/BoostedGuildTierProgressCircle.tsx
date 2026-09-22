// Module ID: 13597
// Function ID: 13598
// Name: BoostedGuildTierProgressCircle
// Dependencies: [19, 17, 1074, 21, 4636, 576, 13598, 13602, 13603, 13604, 4545, 4530, 12724, 4632, 2]
// Exports: default

// Module 13597 (BoostedGuildTierProgressCircle)
import nativeDefault from "native" /* 576 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4530 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 4545 */;
import Tier048Px from "Tier048Px" /* 13598 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: hasOwnProperty, BoostedGuildTiers: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { guildTierProgressCircle: { position: "relative", width: 70, height: 70 }, guildTierBackground: null, guildTierNoneIcon: null, guildTierIcon: null, guildTierName: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xxl };
obj2.guildTierBackground = size;
obj2.guildTierNoneIcon = { width: 18, height: 30 };
obj2.guildTierIcon = { width: 24, height: 24 };
obj2.guildTierName = { lineHeight: 16, marginTop: 2 };
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/BoostedGuildTierProgressCircle.tsx");

export default function BoostedGuildTierProgressCircle(arg0) {
  ({ guild, theme } = arg0);
  const tmp = closure_9();
  useGuildPowerupsBoostCountDefault;
  if (guild != null) {
    const id = guild.id;
  }
  if (null == guild) {
    const obj2 = { style: tmp.guildTierBackground, children: null };
    const obj3 = { source: Tier048Px.getTier048PxSource(theme), style: tmp.guildTierNoneIcon, accessibilityElementsHidden: true, importantForAccessibility: "no" };
    obj2.children = React5(React4, obj3);
    return React5(React3, obj2);
  } else {
    const nextGuildTierFromGuild = GuildBoostingUtils.getNextGuildTierFromGuild(guild.id);
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
      if (guild.premiumTier !== constants.NONE) {
        const premiumTier = guild.premiumTier;
        if (tmp13.TIER_1 === premiumTier) {
          let tier048PxSource = tmp2(13602);
        } else if (tmp13.TIER_2 === premiumTier) {
          tier048PxSource = tmp2(13603);
        } else if (tmp13.TIER_3 === premiumTier) {
          tier048PxSource = tmp2(13604);
        }
      }
      const obj5 = { source: tier048PxSource, style: tmp.guildTierIcon, accessibilityElementsHidden: true, importantForAccessibility: "no" };
      const items = [tmp8(tmp12, obj5), ];
      const obj6 = { style: tmp.guildTierName, variant: "text-xs/semibold", color: "interactive-text-active", children: tmp19(4530).getTierName(guild.premiumTier) };
      items[1] = tmp8(tmp19(4632).Text, obj6);
      obj4.children = items;
      obj.children = tmp10(tmp11, obj4);
      return tmp8(tmp9, obj);
    }
    tier048PxSource = Tier048Px.getTier048PxSource(theme);
    const tmp19Result2 = Tier048Px;
  }
};
