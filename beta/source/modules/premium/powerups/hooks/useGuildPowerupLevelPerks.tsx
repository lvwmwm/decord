// Module ID: 12022
// Function ID: 12023
// Name: useGuildPowerupLevelPerks
// Dependencies: [19, 4724, 4728, 1115, 2519, 1370, 2]
// Exports: default

// Module 12022 (useGuildPowerupLevelPerks)
import intl4 from "intl" /* 1115 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import _modDef2519 from "module_2519" /* 2519 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4728 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const GUILD_FEATURE_TO_PERK = GuildPowerupsConstants.GUILD_FEATURE_TO_PERK;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupLevelPerks.tsx");

export default function useGuildPowerupLevelPerks(arg0) {
  let closure_0 = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { includeEmojis: true, includeStickers: true, includeSoundboards: true };
  }
  const includeEmojis = obj.includeEmojis;
  const includeStickers = obj.includeStickers;
  const includeSoundboards = obj.includeSoundboards;
  let items = [arg0, includeEmojis, includeStickers, includeSoundboards];
  return includeSoundboards.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let obj2;
    let obj4;
    let obj6;
    const items = [];
    closure_0 = GUILD_FEATURE_TO_PERK();
    const tmp = includeEmojis;
    if (tmp) {
      const push = items.push;
      const obj = { perkIcon: GuildBoostingUtils.PerkIcons.EMOJI, description: intl.formatToPlainString(_modDef2519["NXvV0+"], obj2) };
      intl = intl4.intl;
      obj2 = { totalEmojis: closure_0.features.total_emoji_slots, additionalEmojis: closure_0.features.additional_emoji_slots };
      push(obj);
    }
    const tmp7 = includeStickers;
    if (tmp7) {
      const push2 = items.push;
      const obj3 = { perkIcon: GuildBoostingUtils.PerkIcons.STICKER, description: intl2.formatToPlainString(_modDef2519.ZEvvPz, obj4) };
      intl2 = intl4.intl;
      obj4 = { totalStickers: closure_0.features.total_sticker_slots, additionalStickers: closure_0.features.additional_sticker_slots };
      push2(obj3);
    }
    const tmp13 = includeSoundboards;
    if (tmp13) {
      const push3 = items.push;
      const obj5 = { perkIcon: GuildBoostingUtils.PerkIcons.SOUNDBOARD, description: intl3.formatToPlainString(_modDef2519["s9u/E7"], obj6) };
      intl3 = intl4.intl;
      obj6 = { totalSoundboards: closure_0.features.total_sound_slots, additionalSoundboards: closure_0.features.additional_sound_slots };
      push3(obj5);
    }
    const features = closure_0.features.features;
    const concat = items.concat;
    const mapped = features.map((item) => closure_0[item]);
    return concat(mapped.filter(GlobalUtils.isNotNullish));
  }, items);
};
