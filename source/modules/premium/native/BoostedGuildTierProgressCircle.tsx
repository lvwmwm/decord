// Module ID: 12490
// Function ID: 96890
// Name: getTierIcon
// Dependencies: [31, 27, 653, 33, 4130, 689, 12491, 12495, 12496, 12497, 4037, 4022, 11652, 4126, 2]
// Exports: default

// Module 12490 (getTierIcon)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function getTierIcon(theme, premiumTier) {
  if (null != premiumTier) {
    if (premiumTier.premiumTier !== closure_6.NONE) {
      premiumTier = premiumTier.premiumTier;
      if (closure_6.TIER_1 === premiumTier) {
        return importDefault(12495);
      } else if (closure_6.TIER_2 === premiumTier) {
        return importDefault(12496);
      } else if (closure_6.TIER_3 === premiumTier) {
        return importDefault(12497);
      }
    }
  }
  return require(12491) /* getTier048PxSource */.getTier048PxSource(theme);
}
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_5, BoostedGuildTiers: closure_6 } = ME);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { guildTierProgressCircle: { position: "relative", width: 70, height: 70 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, width: 64, height: 64, alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.xxl };
_createForOfIteratorHelperLoose.guildTierBackground = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.guildTierNoneIcon = { width: 18, height: 30 };
_createForOfIteratorHelperLoose.guildTierIcon = { width: 24, height: 24 };
_createForOfIteratorHelperLoose.guildTierName = { lineHeight: 16, marginTop: 2 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/premium/native/BoostedGuildTierProgressCircle.tsx");

export default function BoostedGuildTierProgressCircle(arg0) {
  let guild;
  let theme;
  ({ guild, theme } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  importDefault(4037);
  if (null != guild) {
    const id = guild.id;
  }
  if (null == guild) {
    let obj = { style: tmp.guildTierBackground };
    obj = { source: getTierIcon(theme), style: tmp.guildTierNoneIcon, accessibilityElementsHidden: true, importantForAccessibility: "no" };
    obj.children = callback(closure_4, obj);
    return callback(closure_3, obj);
  } else {
    const nextGuildTierFromGuild = require(4022) /* _createForOfIteratorHelperLoose */.getNextGuildTierFromGuild(guild.id);
    let tmp5 = null;
    if (null != nextGuildTierFromGuild) {
      tmp5 = table[nextGuildTierFromGuild];
    }
    let num2 = 100;
    if (null != tmp5) {
      num2 = 100;
      if (tmp5 > 0) {
        num2 = tmp3 / tmp5 * 100;
      }
    }
    obj = { style: tmp.guildTierProgressCircle, percent: num2 };
    const obj1 = { style: tmp.guildTierBackground };
    const obj2 = {};
    const obj8 = require(4022) /* _createForOfIteratorHelperLoose */;
    obj2.source = getTierIcon(theme, guild);
    obj2.style = tmp.guildTierIcon;
    obj2.accessibilityElementsHidden = true;
    obj2.importantForAccessibility = "no";
    const items = [callback(closure_4, obj2), ];
    const obj3 = { style: tmp.guildTierName, variant: "text-xs/semibold", color: "interactive-text-active" };
    const tmp9 = importDefault(11652);
    obj3.children = require(4022) /* _createForOfIteratorHelperLoose */.getTierName(guild.premiumTier);
    items[1] = callback(require(4126) /* Text */.Text, obj3);
    obj1.children = items;
    obj.children = callback2(closure_3, obj1);
    return callback(tmp9, obj);
  }
};
