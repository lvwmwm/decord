// Module ID: 12725
// Function ID: 12726
// Name: useGuildPowerupLevelPerks
// Dependencies: [19, 4680, 558, 568, 1119, 2518, 4684, 1374, 2]

// Module 12725 (useGuildPowerupLevelPerks)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import GlobalUtils from "GlobalUtils" /* 1374 */;
import _modDef2518 from "module_2518" /* 2518 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4684 */;
import noop from "module_19" /* 19 */;

require = fn;
const GUILD_FEATURE_TO_PERK = fn(4680).GUILD_FEATURE_TO_PERK;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupLevelPerks.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((features, arg1) => {
  const cResult = c.c(28);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = { includeEmojis: true, includeStickers: true, includeSoundboards: true };
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  ({ includeEmojis, includeStickers, includeSoundboards } = tmp4);
  if (cResult[2] === includeEmojis) {
    if (cResult[3] === includeSoundboards) {
      if (cResult[4] === includeStickers) {
        if (cResult[5] === features.features.additional_emoji_slots) {
          if (cResult[6] === features.features.additional_sound_slots) {
            if (cResult[7] === features.features.additional_sticker_slots) {
              if (cResult[8] === features.features.features) {
                if (cResult[9] === features.features.total_emoji_slots) {
                  if (cResult[10] === features.features.total_sound_slots) {
                    if (cResult[11] === features.features.total_sticker_slots) {
                      let tmp5 = cResult[12];
                    }
                    return tmp5;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const items = [];
  closure_0 = GUILD_FEATURE_TO_PERK();
  if (!includeEmojis) {
    if (!includeStickers) {
      if (!includeSoundboards) {
        features = features.features.features;
        const mapped = features.map((item) => closure_0[item]);
        const combined = items.concat(mapped.filter(tmp(1374).isNotNullish));
        cResult[2] = includeEmojis;
        cResult[3] = includeSoundboards;
        cResult[4] = includeStickers;
        cResult[5] = features.features.additional_emoji_slots;
        cResult[6] = features.features.additional_sound_slots;
        cResult[7] = features.features.additional_sticker_slots;
        cResult[8] = features.features.features;
        cResult[9] = features.features.total_emoji_slots;
        cResult[10] = features.features.total_sound_slots;
        cResult[11] = features.features.total_sticker_slots;
        cResult[12] = combined;
        tmp5 = combined;
      } else {
        if (cResult[23] === features.features.additional_sound_slots) {
          if (cResult[24] === features.features.total_sound_slots) {
            let tmp16 = cResult[25];
          }
          if (cResult[26] !== tmp16) {
            const obj3 = { perkIcon: tmp(4684).PerkIcons.SOUNDBOARD, description: tmp16 };
            cResult[26] = tmp16;
            cResult[27] = obj3;
            let tmp19 = obj3;
          } else {
            tmp19 = cResult[27];
          }
          items.push(tmp19);
        }
        const intl3 = tmp(1119).intl;
        const obj4 = { totalSoundboards: features.features.total_sound_slots, additionalSoundboards: features.features.additional_sound_slots };
        const formatToPlainStringResult = intl3.formatToPlainString(_modDef2518["s9u/E7"], obj4);
        cResult[23] = features.features.additional_sound_slots;
        cResult[24] = features.features.total_sound_slots;
        cResult[25] = formatToPlainStringResult;
        tmp16 = formatToPlainStringResult;
      }
    } else {
      if (cResult[18] === features.features.additional_sticker_slots) {
        if (cResult[19] === features.features.total_sticker_slots) {
          let tmp11 = cResult[20];
        }
        if (cResult[21] !== tmp11) {
          const obj5 = { perkIcon: tmp(4684).PerkIcons.STICKER, description: tmp11 };
          cResult[21] = tmp11;
          cResult[22] = obj5;
          let tmp14 = obj5;
        } else {
          tmp14 = cResult[22];
        }
        items.push(tmp14);
      }
      const intl2 = tmp(1119).intl;
      const obj6 = { totalStickers: features.features.total_sticker_slots, additionalStickers: features.features.additional_sticker_slots };
      const formatToPlainStringResult1 = intl2.formatToPlainString(_modDef2518.ZEvvPz, obj6);
      cResult[18] = features.features.additional_sticker_slots;
      cResult[19] = features.features.total_sticker_slots;
      cResult[20] = formatToPlainStringResult1;
      tmp11 = formatToPlainStringResult1;
    }
  } else {
    if (cResult[13] === features.features.additional_emoji_slots) {
      if (cResult[14] === features.features.total_emoji_slots) {
        let tmp6 = cResult[15];
      }
      if (cResult[16] !== tmp6) {
        const obj7 = { perkIcon: tmp(4684).PerkIcons.EMOJI, description: tmp6 };
        cResult[16] = tmp6;
        cResult[17] = obj7;
        let tmp9 = obj7;
      } else {
        tmp9 = cResult[17];
      }
      items.push(tmp9);
    }
    const intl = tmp(1119).intl;
    const obj8 = { totalEmojis: features.features.total_emoji_slots, additionalEmojis: features.features.additional_emoji_slots };
    const formatToPlainStringResult2 = intl.formatToPlainString(_modDef2518["NXvV0+"], obj8);
    cResult[13] = features.features.additional_emoji_slots;
    cResult[14] = features.features.total_emoji_slots;
    cResult[15] = formatToPlainStringResult2;
    tmp6 = formatToPlainStringResult2;
  }
}) : ((arg0) => {
  closure_0 = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { includeEmojis: true, includeStickers: true, includeSoundboards: true };
  }
  const includeEmojis = obj.includeEmojis;
  const includeStickers = obj.includeStickers;
  const includeSoundboards = obj.includeSoundboards;
  let items = [arg0, includeEmojis, includeStickers, includeSoundboards];
  return includeSoundboards.useMemo(() => {
    const items = [];
    closure_0 = GUILD_FEATURE_TO_PERK();
    if (includeEmojis) {
      const obj = { perkIcon: GuildBoostingUtils.PerkIcons.EMOJI, description: null };
      const intl = util.intl;
      const obj2 = { totalEmojis: closure_0.features.total_emoji_slots, additionalEmojis: closure_0.features.additional_emoji_slots };
      obj.description = intl.formatToPlainString(_modDef2518["NXvV0+"], obj2);
      items.push(obj);
    }
    if (includeStickers) {
      const obj3 = { perkIcon: GuildBoostingUtils.PerkIcons.STICKER, description: null };
      const intl2 = util.intl;
      const obj4 = { totalStickers: closure_0.features.total_sticker_slots, additionalStickers: closure_0.features.additional_sticker_slots };
      obj3.description = intl2.formatToPlainString(_modDef2518.ZEvvPz, obj4);
      items.push(obj3);
    }
    if (includeSoundboards) {
      const obj5 = { perkIcon: GuildBoostingUtils.PerkIcons.SOUNDBOARD, description: null };
      const intl3 = util.intl;
      const obj6 = { totalSoundboards: closure_0.features.total_sound_slots, additionalSoundboards: closure_0.features.additional_sound_slots };
      obj5.description = intl3.formatToPlainString(_modDef2518["s9u/E7"], obj6);
      items.push(obj5);
    }
    const features = closure_0.features.features;
    const mapped = features.map((item) => closure_0[item]);
    return items.concat(mapped.filter(GlobalUtils.isNotNullish));
  }, items);
});
