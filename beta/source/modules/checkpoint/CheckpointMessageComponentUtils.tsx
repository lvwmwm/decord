// Module ID: 6252
// Function ID: 6253
// Name: checkpoint/CheckpointMessageComponentUtils
// Dependencies: [6231, 5933, 11, 6253, 6254, 6255, 6275, 6597, 1113, 3248, 6240, 5116, 6601, 6602, 3216, 2021, 2116, 2]
// Exports: formatCheckpoint2026PowerLevel, getCharacterLayerUrls, getCheckpoint2026PowerBarUnits, getCheckpointDataFromMessage, getCheckpointLabel, toCheckpointMessageComponentData, transformCheckpoint2026CardComponent, transformCheckpoint2026CardToRowGeneratedComponent

// Module 6252 (checkpoint/CheckpointMessageComponentUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl18 from "intl" /* 1113 */;
import Server from "Server" /* 2116 */;
import _modDef3216 from "module_3216" /* 3216 */;
import _modDef3248 from "module_3248" /* 3248 */;
import TimeUtils from "TimeUtils" /* 5933 */;
import CheckpointUtils from "CheckpointUtils" /* 6240 */;
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6253 */;
import CheckpointCardTypes from "CheckpointCardTypes" /* 6254 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6255 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6275 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6601 */;
import CheckpointConstants from "CheckpointConstants" /* 6231 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function transformCheckpoint2026StatsToRowGeneratedComponent(stats) {
  let formatToPlainString;
  let formatToPlainStringResult1;
  let formatToPlainStringResult2;
  let guildAcronymCharacter;
  let intl10;
  let intl11;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl6;
  let intl8;
  let lw35aH;
  let numberFormat;
  let obj11;
  let obj12;
  let obj13;
  let obj15;
  let obj17;
  let obj18;
  let obj20;
  let obj22;
  let obj23;
  let obj25;
  let obj5;
  let obj6;
  let obj8;
  let obj9;
  let powerLevel;
  let tmp15;
  let tmp17;
  let tmp20;
  let tmp4;
  let tmpResult3;
  let toLocaleStringResult;
  let toLocaleStringResult1;
  const obj = { powerLevel: numberFormat.format(powerLevel), powerLevelUnits: Math.min(Math.max(Math.round(stats.powerLevelPercentile / 100 * hasOwnProperty), React3), _false), voice: obj5, messages: obj8, topGuildDaysInteracted: obj11, topGuildName: tmp15, reactions: obj17, topEmojiName: tmp17, daysPlayed: obj22, topGameName: tmp20, topEmoji: null, topGuild: null, topGuildAcronymCharacter: guildAcronymCharacter, topGame: stats.topGame };
  powerLevel = stats.powerLevel;
  numberFormat = new Intl.NumberFormat(intl18.intl.currentLocale, { notation: "compact", compactDisplay: "short" });
  const rounded = Math.round(stats.totalVoiceMinutes);
  if (rounded > 0) {
    let formatToPlainStringResult;
    let tmp10;
    const tmpResult = TimeUtils;
    const timeAndUnit = tmpResult.getTimeAndUnit(rounded, items);
    let num = timeAndUnit.time;
    const unit = timeAndUnit.unit;
    const _Math = Math;
    if (num == null) {
      num = 0;
    }
    const roundResult = round(num);
    if (unit === TimeUtils.TimeUnits.HOURS) {
      const intl3 = tmp(1113).intl;
      const obj2 = { hours: roundResult };
      formatToPlainStringResult = intl3.formatToPlainString(_modDef3248.CQfBsB, obj2);
      tmp10 = importDefault;
    } else {
      const intl2 = tmp(1113).intl;
      tmp10 = importDefault;
      const obj3 = { minutes: roundResult };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3248.yRfTht, obj3);
    }
    tmp4 = tmp10;
    formatToPlainStringResult1 = formatToPlainStringResult;
  } else {
    const intl = tmp(1113).intl;
    tmp4 = importDefault;
    const obj4 = { minutes: rounded };
    formatToPlainStringResult1 = intl.formatToPlainString(_modDef3248.x7PkHm, obj4);
  }
  obj5 = { text: formatToPlainStringResult1, accessibilityLabel: formatToPlainString(lw35aH, obj6) };
  const intl4 = tmp(1113).intl;
  formatToPlainString = intl4.formatToPlainString;
  obj6 = { duration: tmpResult3.getAccessibleVoiceDurationString(rounded) };
  lw35aH = tmp4(3248).lw35aH;
  tmpResult3 = CheckpointUtils;
  if (stats.numMessagesSent > 0) {
    const numMessagesSent = stats.numMessagesSent;
    toLocaleStringResult = numMessagesSent.toLocaleString(tmp(1113).intl.currentLocale);
  } else {
    const intl5 = tmp(1113).intl;
    const obj7 = { count: stats.numMessagesSent };
    toLocaleStringResult = intl5.formatToPlainString(tmp4(3248).foKBCN, obj7);
  }
  obj8 = { text: toLocaleStringResult, accessibilityLabel: intl6.formatToPlainString(tmp4(3248).IdRUAC, obj9) };
  intl6 = tmp(1113).intl;
  obj9 = { count: stats.numMessagesSent };
  if (null == stats.topGuild) {
    const intl7 = tmp(1113).intl;
    const stringResult = intl7.string(tmp4(3248).GultYJ);
    obj11 = { text: stringResult, accessibilityLabel: stringResult };
    const obj10 = { text: stringResult, accessibilityLabel: stringResult };
  } else {
    obj11 = { text: intl16.formatToPlainString(tmp4(3248).cQXIkj, obj12), accessibilityLabel: intl17.formatToPlainString(tmp4(3248).MpSH8v, obj13) };
    intl16 = tmp(1113).intl;
    obj12 = { days: stats.topGuildNumDaysInteracted };
    intl17 = tmp(1113).intl;
    obj13 = { days: stats.topGuildNumDaysInteracted };
  }
  tmp15 = undefined;
  if (null != stats.topGuild) {
    const obj14 = { text: stats.topGuild.guildName, accessibilityLabel: intl8.formatToPlainString(tmp4(3248)["9UTJ+t"], obj15) };
    intl8 = tmp(1113).intl;
    tmp15 = obj14;
    obj15 = { guildName: stats.topGuild.guildName };
  }
  if (stats.numEmojisSent > 0) {
    const numEmojisSent = stats.numEmojisSent;
    toLocaleStringResult1 = numEmojisSent.toLocaleString(tmp(1113).intl.currentLocale);
  } else {
    const intl9 = tmp(1113).intl;
    const obj16 = { count: stats.numEmojisSent };
    toLocaleStringResult1 = intl9.formatToPlainString(tmp4(3248).RHYx1k, obj16);
  }
  obj17 = { text: toLocaleStringResult1, accessibilityLabel: intl10.formatToPlainString(tmp4(3248)["36qpUG"], obj18) };
  intl10 = tmp(1113).intl;
  tmp17 = undefined;
  obj18 = { count: stats.numEmojisSent };
  if (stats.numEmojisSent > 0) {
    if (null != stats.topEmoji) {
      let result;
      if (null == stats.topEmoji.emojiId) {
        const tmp4Result = tmp4(5116);
        result = tmp4Result.convertSurrogateToName(stats.topEmoji.emojiName);
      } else {
        const _HermesInternal = HermesInternal;
        result = ":" + stats.topEmoji.emojiName + ":";
      }
      const obj19 = { text: result, accessibilityLabel: intl11.formatToPlainString(tmp4(3248).CcBo8C, obj20) };
      intl11 = tmp(1113).intl;
      tmp17 = obj19;
      obj20 = { emojiName: stats.topEmoji.emojiName };
    }
  }
  if (stats.totalDaysPlayed > 0) {
    const intl13 = tmp(1113).intl;
    const obj21 = { days: stats.totalDaysPlayed };
    formatToPlainStringResult2 = intl13.formatToPlainString(tmp4(3248).cQXIkj, obj21);
  } else {
    const intl12 = tmp(1113).intl;
    formatToPlainStringResult2 = intl12.string(tmp4(3248).mg1NPe);
  }
  obj22 = { text: formatToPlainStringResult2, accessibilityLabel: intl14.formatToPlainString(tmp4(3248).LYcKX7, obj23) };
  intl14 = tmp(1113).intl;
  tmp20 = undefined;
  obj23 = { days: stats.totalDaysPlayed };
  if (stats.totalDaysPlayed > 0) {
    if (null != stats.topGame) {
      const obj24 = { text: stats.topGame.applicationName, accessibilityLabel: intl15.formatToPlainString(tmp4(3248).kLqpNC, obj25) };
      intl15 = tmp(1113).intl;
      tmp20 = obj24;
      obj25 = { gameName: stats.topGame.applicationName };
    }
  }
  ({ topEmoji: obj.topEmoji, topGuild: obj.topGuild } = stats);
  guildAcronymCharacter = undefined;
  if (null != stats.topGuild) {
    const tmpResult4 = CheckpointStatsUtils;
    guildAcronymCharacter = tmpResult4.getGuildAcronymCharacter(stats.topGuild.guildName);
  }
  return obj;
}
({ CHECKPOINT_2026_POWER_BAR_MAX_FILLED_UNITS: c3, CHECKPOINT_2026_POWER_BAR_MIN_FILLED_UNITS: closure_4, CHECKPOINT_2026_POWER_BAR_UNITS: hasOwnProperty, NATIVE_CHARACTER_LAYER_SIZE: metroRequire, CheckpointVersions: metroImportDefault } = CheckpointConstants);
let items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const items1 = [CheckpointCardTypes.CheckpointCardTypes.DEFAULT, CheckpointCardTypes.CheckpointCardTypes.CHARACTER_ONLY];
const set = new Set(items1);
const items2 = [CheckpointCardTypes.CheckpointCardTypes.DEFAULT, CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY];
const set1 = new Set(items2);
let result = size.fileFinishedImporting("modules/checkpoint/CheckpointMessageComponentUtils.tsx");

export function transformCheckpoint2026CardComponent(checkpoint_data) {
  let NONE;
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp8;
  let tmp9;
  if (null != checkpoint_data.character) {
    const obj = { version: checkpoint_data.version, character: tmp2, stats: tmp3, cardColorPalette: NONE };
    tmp2 = undefined;
    if (null != checkpoint_data.character) {
      const obj5 = { base: null, shoes: null, outfit: null, face: null, hat: null, wearable: null, aura: null };
      ({ base: obj2.base, shoes: obj2.shoes, outfit: obj2.outfit, face: obj2.face, hat: obj2.hat, wearable: obj2.wearable, aura: obj2.aura } = checkpoint_data.character);
      tmp2 = obj5;
    }
    tmp3 = undefined;
    if (null != checkpoint_data.stats) {
      const stats = checkpoint_data.stats;
      const obj6 = { totalVoiceMinutes: null, numMessagesSent: null, numEmojisSent: null, totalDaysPlayed: null, topEmoji: tmp4, topGuild: tmp8, topGuildNumDaysInteracted: stats.top_guild_num_days_interacted, topGame: tmp9, powerLevel: null, powerLevelPercentile: null };
      ({ total_voice_minutes: obj3.totalVoiceMinutes, num_messages_sent: obj3.numMessagesSent, num_emojis_sent: obj3.numEmojisSent, total_days_played: obj3.totalDaysPlayed } = stats);
      tmp4 = undefined;
      if (null != stats.top_emoji) {
        let emoji_id;
        const obj4 = SnowflakeUtilsDefault;
        if (obj4.isProbablyAValidSnowflake(stats.top_emoji.emoji_id)) {
          emoji_id = stats.top_emoji.emoji_id;
        }
        tmp4 = { emojiId: emoji_id, emojiName: stats.top_emoji.emoji_name };
        const obj7 = { emojiId: emoji_id, emojiName: stats.top_emoji.emoji_name };
      }
      tmp8 = undefined;
      if (null != stats.top_guild) {
        tmp8 = { guildId: stats.top_guild.guild_id, guildName: stats.top_guild.guild_name, guildIcon: stats.top_guild.guild_icon };
        const obj12 = { guildId: stats.top_guild.guild_id, guildName: stats.top_guild.guild_name, guildIcon: stats.top_guild.guild_icon };
      }
      tmp9 = undefined;
      if (null != stats.top_game) {
        tmp9 = { applicationId: stats.top_game.application_id, applicationName: stats.top_game.application_name, applicationImageId: stats.top_game.application_image_id };
        const obj13 = { applicationId: stats.top_game.application_id, applicationName: stats.top_game.application_name, applicationImageId: stats.top_game.application_image_id };
      }
      ({ power_level: obj3.powerLevel, power_level_percentile: obj3.powerLevelPercentile } = stats);
      tmp3 = obj6;
    }
    NONE = checkpoint_data.card_color_palette;
    if (NONE == null) {
      NONE = CheckpointCardColorPalette.CheckpointCardColorPalette.NONE;
    }
    tmp = obj;
  } else {
    tmp = null;
  }
  return tmp;
}
export function toCheckpointMessageComponentData(STATS_ONLY, stateFromStores, stats) {
  let icon;
  let num2;
  let num3;
  let num4;
  let num5;
  let num6;
  let num7;
  let obj6;
  let tmp;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp4;
  const obj = { version: metroImportDefault.V2026, character: tmp, stats: tmp4, cardColorPalette: obj6.getCharacterCardColorPalette(stateFromStores) };
  tmp = undefined;
  if (set.has(STATS_ONLY)) {
    tmp = stateFromStores;
  }
  tmp4 = undefined;
  if (set1.has(STATS_ONLY)) {
    if (null != stats) {
      const guilds = stats.guilds;
      let first;
      if (guilds != null) {
        first = guilds.guilds[0];
      }
      const emojis = stats.emojis;
      let first1;
      if (emojis != null) {
        first1 = emojis.emojis[0];
      }
      const games = stats.games;
      let game;
      if (games != null) {
        const first2 = games.games[0];
        if (first2 != null) {
          game = first2.game;
        }
      }
      const voice = stats.voice;
      let num;
      if (voice != null) {
        num = voice.totalVoiceMinutes;
      }
      if (num == null) {
        num = 0;
      }
      const messages = stats.messages;
      const obj2 = { totalVoiceMinutes: num, numMessagesSent: num2, numEmojisSent: num3, totalDaysPlayed: num4, topEmoji: tmp11, topGuild: tmp12, topGuildNumDaysInteracted: num5, topGame: tmp13, powerLevel: num6, powerLevelPercentile: num7 };
      num2 = undefined;
      if (messages != null) {
        num2 = messages.numMessagesSent;
      }
      if (num2 == null) {
        num2 = 0;
      }
      const emojis2 = stats.emojis;
      num3 = undefined;
      if (emojis2 != null) {
        num3 = emojis2.numEmojisSent;
      }
      if (num3 == null) {
        num3 = 0;
      }
      const games2 = stats.games;
      num4 = undefined;
      if (games2 != null) {
        num4 = games2.totalDaysPlayed;
      }
      if (num4 == null) {
        num4 = 0;
      }
      tmp11 = undefined;
      if (null != first1) {
        const obj4 = { emojiId: null, emojiName: null };
        ({ id: obj3.emojiId, name: obj3.emojiName } = first1);
        tmp11 = obj4;
      }
      tmp12 = undefined;
      if (null != first) {
        const obj10 = { guildId: first.guild.id, guildName: first.guild.name, guildIcon: icon };
        icon = first.guild.icon;
        tmp12 = obj10;
      }
      num5 = undefined;
      if (first != null) {
        num5 = first.numDaysInteracted;
      }
      if (num5 == null) {
        num5 = 0;
      }
      tmp13 = undefined;
      if (null != game) {
        const obj11 = { applicationId: null, applicationName: null, applicationImageId: null };
        ({ id: obj5.applicationId, name: obj5.applicationName, iconHash: obj5.applicationImageId } = game);
        tmp13 = obj11;
      }
      const power = stats.power;
      num6 = undefined;
      if (power != null) {
        num6 = power.powerLevel;
      }
      if (num6 == null) {
        num6 = 0;
      }
      const power2 = stats.power;
      num7 = undefined;
      if (power2 != null) {
        num7 = power2.powerLevelPercentile;
      }
      if (num7 == null) {
        num7 = 0;
      }
      tmp4 = obj2;
    }
  }
  obj6 = CheckpointCardColors;
  return obj;
}
export function getCharacterLayerUrls(wearable, arg1) {
  _require = wearable;
  let closure_1 = arg1;
  items = [];
  const obj = require("CheckpointCharacterTraits");
  const characterLayerOrdering = obj.getCharacterLayerOrdering(wearable.wearable);
  const item = characterLayerOrdering.forEach((item) => {
    const tmp = CheckpointCharacterTraits.CHECKPOINT_TRAIT_TO_OPTION_ASSETS[item][character[item]];
    let layer;
    if (tmp != null) {
      layer = tmp.layer;
    }
    const tmp3 = null != layer && "" !== layer;
    if (tmp3) {
      const _HermesInternal = HermesInternal;
      items.push("" + layer + "?height=" + importDefault + "&width=" + importDefault + "&format=webp");
    }
  });
  return items;
}
export function formatCheckpoint2026PowerLevel(arg0) {
  const numberFormat = new Intl.NumberFormat(intl18.intl.currentLocale, { notation: "compact", compactDisplay: "short" });
  return numberFormat.format(arg0);
}
export function getCheckpoint2026PowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 100 * hasOwnProperty), React3), _false);
}
export { transformCheckpoint2026StatsToRowGeneratedComponent };
export function transformCheckpoint2026CardToRowGeneratedComponent(checkpointData) {
  let character;
  let closure_1;
  let intl;
  let message;
  let obj4;
  let primaryBackgroundColor;
  let secondaryBackgroundColor;
  let tertiaryBackgroundColor;
  let tmp10;
  let tmp3;
  let tmp4;
  let tmp7;
  checkpointData = checkpointData.checkpointData;
  ({ message, primaryBackgroundColor, secondaryBackgroundColor, tertiaryBackgroundColor } = checkpointData);
  let tmp = importDefault;
  const obj = { version: checkpointData.version, authorId: message.author.id, primaryBackgroundColor, secondaryBackgroundColor, tertiaryBackgroundColor, character: tmp4, stats: tmp7, clickable: tmp10 };
  tmp4 = undefined;
  if (null != checkpointData.character) {
    character = checkpointData.character;
    importDefault = tmp3;
    const obj2 = { layerUrls: items, accessibilityLabel: obj4.getCheckpointCharacterAccessibilityLabel(character) };
    items = [];
    const obj3 = character(items[6]);
    const characterLayerOrdering = obj3.getCharacterLayerOrdering(character.wearable);
    const item = characterLayerOrdering.forEach((item) => {
      const tmp = CheckpointCharacterTraits.CHECKPOINT_TRAIT_TO_OPTION_ASSETS[item][character[item]];
      let layer;
      if (tmp != null) {
        layer = tmp.layer;
      }
      const tmp3 = null != layer && "" !== layer;
      if (tmp3) {
        const _HermesInternal = HermesInternal;
        items.push("" + layer + "?height=" + importDefault + "&width=" + importDefault + "&format=webp");
      }
    });
    tmp4 = obj2;
    obj4 = character(items[7]);
  }
  tmp7 = undefined;
  if (null != checkpointData.stats) {
    tmp7 = transformCheckpoint2026StatsToRowGeneratedComponent(checkpointData.stats);
  }
  tmp10 = undefined;
  const obj5 = character(items[13]);
  const tmp9 = character;
  if (obj5.getIsCheckpointEnabled("getCheckpointClickable")) {
    const obj6 = { ariaDescription: intl.string(tmp(items[14]).r8GEbK) };
    intl = tmp9(tmp2[8]).intl;
    tmp10 = obj6;
  }
  return obj;
}
export function getCheckpointDataFromMessage(contentMessage) {
  const first = contentMessage.components[0];
  let checkpointData = null;
  if (null != first) {
    checkpointData = null;
    if (first.type === Server.ComponentType.CHECKPOINT_CARD) {
      checkpointData = first.checkpointData;
    }
  }
  return checkpointData;
}
export function getCheckpointLabel(checkpointDataFromMessage) {
  if (metroImportDefault.V2025 === checkpointDataFromMessage.version) {
    const intl = intl18.intl;
    return intl.string(_modDef3216.goiR2u);
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
}
