// Module ID: 12062
// Function ID: 12063
// Name: GuildBoostingMarketingConstants
// Dependencies: [1074, 1374, 4728, 1115, 2]

// Module 12062 (GuildBoostingMarketingConstants)
import intl3 from "intl" /* 1115 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4728 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let items;
let items2;
let items3;
function getCopy() {
  const intl = intl3.intl;
  const obj = { numEmojiSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.emoji };
  return intl.formatToPlainString(intl3.t.Tlz0x1, obj);
}
const getCopy2 = function getCopy() {
  const intl = intl3.intl;
  const obj = { numSoundboardSlots: BoostedGuildFeatures[BoostedGuildTiers.TIER_1].limits.soundboardSounds };
  return intl.formatToPlainString(intl3.t["v+MIfo"], obj);
};
const getCopy3 = function getCopy() {
  const intl = intl3.intl;
  return intl.string(intl3.t.PbAyub);
};
const getCopy4 = function getCopy() {
  const intl = intl3.intl;
  return intl.string(intl3.t["WH+OeI"]);
};
const getCopy5 = function getCopy() {
  const intl = intl3.intl;
  return intl.string(intl3.t.y4ft4D);
};
const getCopy6 = function getCopy() {
  let intl2;
  const intl = intl3.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { uploadSizeLimit: intl2.string(intl3.t.M6qV8j) };
  const aFRl53 = intl3.t.aFRl53;
  intl2 = intl3.intl;
  return formatToPlainString(aFRl53, obj);
};
const getCopy7 = function getCopy() {
  const intl = intl3.intl;
  return intl.string(intl3.t["6PV6Qc"]);
};
const getCopy8 = function getCopy() {
  const intl = intl3.intl;
  return intl.string(intl3.t["1a5rjl"]);
};
const getCopy9 = function getCopy() {
  const intl = intl3.intl;
  return intl.string(intl3.t.adNGjW);
};
const getCopy10 = function getCopy() {
  let intl2;
  const intl = intl3.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { uploadSizeLimit: intl2.string(intl3.t.yMOW8D) };
  const aFRl53 = intl3.t.aFRl53;
  intl2 = intl3.intl;
  return formatToPlainString(aFRl53, obj);
};
const getCopy11 = function getCopy() {
  const intl = intl3.intl;
  return intl.string(intl3.t.Tsljqo);
};
const getCopy12 = function getCopy() {
  const intl = intl3.intl;
  return intl.string(intl3.t.nRKlmC);
};
const getCopy13 = function getCopy() {
  const intl = intl3.intl;
  const obj = { numStageSeats: MAX_STAGE_VIDEO_USER_LIMIT_TIER3 };
  return intl.formatToPlainString(intl3.t.hsZ88d, obj);
};
const BoostedGuildTiers = Constants.BoostedGuildTiers;
const MAX_STAGE_VIDEO_USER_LIMIT_TIER3 = Constants.MAX_STAGE_VIDEO_USER_LIMIT_TIER3;
const BoostedGuildFeatures = PremiumConstants.BoostedGuildFeatures;
let obj = { tier: BoostedGuildTiers.TIER_1, perks: items };
items = [{ perkIcon: GuildBoostingUtils.PerkIcons.EMOJI, getCopy }, , , ];
({ perkIcon: GuildBoostingUtils.PerkIcons.EMOJI, getCopy });
items[1] = { perkIcon: GuildBoostingUtils.PerkIcons.SOUNDBOARD, getCopy: getCopy2, isNew: true };
({ perkIcon: GuildBoostingUtils.PerkIcons.SOUNDBOARD, getCopy: getCopy2, isNew: true });
items[2] = { perkIcon: GuildBoostingUtils.PerkIcons.ANIMATED, getCopy: getCopy3 };
({ perkIcon: GuildBoostingUtils.PerkIcons.ANIMATED, getCopy: getCopy3 });
items[3] = { perkIcon: GuildBoostingUtils.PerkIcons.AUDIO, getCopy: getCopy4 };
const items1 = [obj, , ];
const obj6 = { tier: BoostedGuildTiers.TIER_2, perks: items2 };
({ perkIcon: GuildBoostingUtils.PerkIcons.AUDIO, getCopy: getCopy4 });
items2 = [{ perkIcon: GuildBoostingUtils.PerkIcons.STREAM, getCopy: getCopy5 }, , , ];
({ perkIcon: GuildBoostingUtils.PerkIcons.STREAM, getCopy: getCopy5 });
items2[1] = { perkIcon: GuildBoostingUtils.PerkIcons.UPLOAD, getCopy: getCopy6 };
({ perkIcon: GuildBoostingUtils.PerkIcons.UPLOAD, getCopy: getCopy6 });
items2[2] = { perkIcon: GuildBoostingUtils.PerkIcons.CUSTOM_ROLE_ICON, getCopy: getCopy7 };
({ perkIcon: GuildBoostingUtils.PerkIcons.CUSTOM_ROLE_ICON, getCopy: getCopy7 });
items2[3] = { perkIcon: GuildBoostingUtils.PerkIcons.CUSTOMIZATION, getCopy: getCopy8 };
items1[1] = obj6;
const obj11 = { tier: BoostedGuildTiers.TIER_3, perks: items3 };
({ perkIcon: GuildBoostingUtils.PerkIcons.CUSTOMIZATION, getCopy: getCopy8 });
items3 = [{ perkIcon: GuildBoostingUtils.PerkIcons.VANITY, getCopy: getCopy9 }, , , , ];
({ perkIcon: GuildBoostingUtils.PerkIcons.VANITY, getCopy: getCopy9 });
items3[1] = { perkIcon: GuildBoostingUtils.PerkIcons.UPLOAD, getCopy: getCopy10 };
({ perkIcon: GuildBoostingUtils.PerkIcons.UPLOAD, getCopy: getCopy10 });
items3[2] = { perkIcon: GuildBoostingUtils.PerkIcons.AUDIO, getCopy: getCopy11 };
({ perkIcon: GuildBoostingUtils.PerkIcons.AUDIO, getCopy: getCopy11 });
items3[3] = { perkIcon: GuildBoostingUtils.PerkIcons.ANIMATED, getCopy: getCopy12 };
({ perkIcon: GuildBoostingUtils.PerkIcons.ANIMATED, getCopy: getCopy12 });
items3[4] = { perkIcon: GuildBoostingUtils.PerkIcons.STAGE_VIDEO, getCopy: getCopy13 };
items1[2] = obj11;
({ perkIcon: GuildBoostingUtils.PerkIcons.STAGE_VIDEO, getCopy: getCopy13 });
const result = size.fileFinishedImporting("modules/guild_boosting/GuildBoostingMarketingConstants.tsx");

export const TIER_CARDS = items1;
