// Module ID: 13295
// Function ID: 13296
// Name: useGuildPowerupLevelPerks
// Dependencies: [19, 1388, 8212, 1112, 2757, 1254, 2]
// Exports: default

// Module 13295 (useGuildPowerupLevelPerks)
import intl4 from "intl" /* 1112 */;
import GlobalUtils from "GlobalUtils" /* 1254 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import _modDef2757 from "module_2757" /* 2757 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 8212 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const PerkIcons = PremiumConstants.PerkIcons;
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
      const obj = { perkIcon: PerkIcons.EMOJI, description: intl.formatToPlainString(_modDef2757["NXvV0+"], obj2) };
      intl = intl4.intl;
      obj2 = { totalEmojis: closure_0.features.total_emoji_slots, additionalEmojis: closure_0.features.additional_emoji_slots };
      push(obj);
    }
    const tmp8 = includeStickers;
    if (tmp8) {
      const push2 = items.push;
      const obj3 = { perkIcon: PerkIcons.STICKER, description: intl2.formatToPlainString(_modDef2757.ZEvvPz, obj4) };
      intl2 = intl4.intl;
      obj4 = { totalStickers: closure_0.features.total_sticker_slots, additionalStickers: closure_0.features.additional_sticker_slots };
      push2(obj3);
    }
    const tmp15 = includeSoundboards;
    if (tmp15) {
      const push3 = items.push;
      const obj5 = { perkIcon: PerkIcons.SOUNDBOARD, description: intl3.formatToPlainString(_modDef2757["s9u/E7"], obj6) };
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
