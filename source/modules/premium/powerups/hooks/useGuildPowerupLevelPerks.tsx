// Module ID: 11548
// Function ID: 89902
// Name: useGuildPowerupLevelPerks
// Dependencies: []
// Exports: default

// Module 11548 (useGuildPowerupLevelPerks)
let closure_3 = importAll(dependencyMap[0]);
const GUILD_FEATURE_TO_PERK = arg1(dependencyMap[1]).GUILD_FEATURE_TO_PERK;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupLevelPerks.tsx");

export default function useGuildPowerupLevelPerks(arg0) {
  let obj = arg1;
  const arg1 = arg0;
  if (arg1 === undefined) {
    obj = { 0: "Small", 0: "sm", 9223372036854775807: "Placeholder" };
  }
  const includeEmojis = obj.includeEmojis;
  const importDefault = includeEmojis;
  const includeStickers = obj.includeStickers;
  const dependencyMap = includeStickers;
  const includeSoundboards = obj.includeSoundboards;
  const React = includeSoundboards;
  const items = [arg0, includeEmojis, includeStickers, includeSoundboards];
  return React.useMemo(() => {
    const items = [];
    const lib = callback();
    if (includeEmojis) {
      let obj = { perkIcon: lib(includeStickers[2]).PerkIcons.EMOJI };
      const intl = lib(includeStickers[3]).intl;
      obj = { totalEmojis: lib.features.total_emoji_slots, additionalEmojis: lib.features.additional_emoji_slots };
      obj.description = intl.formatToPlainString(includeEmojis(includeStickers[4]).NXvV0+, obj);
      items.push(obj);
    }
    if (includeStickers) {
      obj = { perkIcon: lib(includeStickers[2]).PerkIcons.STICKER };
      const intl2 = lib(includeStickers[3]).intl;
      const obj1 = { totalStickers: lib.features.total_sticker_slots, additionalStickers: lib.features.additional_sticker_slots };
      obj.description = intl2.formatToPlainString(includeEmojis(includeStickers[4]).ZEvvPz, obj1);
      items.push(obj);
    }
    if (includeSoundboards) {
      const obj2 = { perkIcon: lib(includeStickers[2]).PerkIcons.SOUNDBOARD };
      const intl3 = lib(includeStickers[3]).intl;
      const obj3 = { totalSoundboards: lib.features.total_sound_slots, additionalSoundboards: lib.features.additional_sound_slots };
      obj2.description = intl3.formatToPlainString(includeEmojis(includeStickers[4]).s9u/E7, obj3);
      items.push(obj2);
    }
    const features = lib.features.features;
    const mapped = features.map((arg0) => closure_0[arg0]);
    return items.concat(mapped.filter(lib(includeStickers[5]).isNotNullish));
  }, items);
};
