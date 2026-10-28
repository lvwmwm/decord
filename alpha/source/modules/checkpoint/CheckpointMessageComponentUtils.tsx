// Module ID: 6071
// Function ID: 6072
// Name: checkpoint/CheckpointMessageComponentUtils
// Dependencies: [6050, 11, 6072, 6073, 6074, 6397, 1125, 2030, 6059, 3089, 4950, 3057, 1897, 1997, 2]
// Exports: formatCheckpoint2026PowerLevel, getCharacterLayerUrls, getCheckpoint2026PowerBarUnits, getCheckpointDataFromMessage, getCheckpointLabel, toCheckpointMessageComponentData, transformCheckpoint2026CardComponent, transformCheckpoint2026CardToRowGeneratedComponent

// Module 6071 (checkpoint/CheckpointMessageComponentUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl16 from "intl" /* 1125 */;
import Server from "Server" /* 1997 */;
import StringUtils from "StringUtils" /* 2030 */;
import _modDef3057 from "module_3057" /* 3057 */;
import _modDef3089 from "module_3089" /* 3089 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4950 */;
import CheckpointUtils from "CheckpointUtils" /* 6059 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6072 */;
import CheckpointCardTypes from "CheckpointCardTypes" /* 6073 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6074 */;
import CheckpointConstants from "CheckpointConstants" /* 6050 */;
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
  let formatToPlainStringResult;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl4;
  let intl6;
  let intl8;
  let intl9;
  let lw35aH;
  let numberFormat;
  let obj10;
  let obj11;
  let obj13;
  let obj15;
  let obj16;
  let obj18;
  let obj20;
  let obj21;
  let obj23;
  let obj3;
  let obj4;
  let obj6;
  let obj7;
  let obj9;
  let powerLevel;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp8;
  let tmpResult3;
  let toLocaleStringResult;
  let toLocaleStringResult1;
  let voiceDurationString;
  const obj = { powerLevel: numberFormat.format(powerLevel), powerLevelUnits: Math.min(Math.max(Math.round(stats.powerLevelPercentile / 100 * hasOwnProperty), React3), _false), voice: obj3, messages: obj6, topGuildDaysInteracted: obj9, topGuildName: tmp8, reactions: obj15, topEmojiName: tmp10, daysPlayed: obj20, topGameName: tmp13, topEmoji: null, topGuild: null, topGuildAcronymCharacter: tmp14, topGame: stats.topGame };
  powerLevel = stats.powerLevel;
  numberFormat = new Intl.NumberFormat(intl16.intl.currentLocale, { notation: "compact", compactDisplay: "short" });
  const rounded = Math.round(stats.totalVoiceMinutes);
  if (rounded > 0) {
    const tmpResult = CheckpointUtils;
    voiceDurationString = tmpResult.getVoiceDurationString(rounded);
  } else {
    const intl = tmp(1125).intl;
    const obj2 = { minutes: rounded };
    voiceDurationString = intl.formatToPlainString(tmp(1125).t.iXLF9W, obj2);
  }
  obj3 = { text: voiceDurationString, accessibilityLabel: formatToPlainString(lw35aH, obj4) };
  const intl2 = tmp(1125).intl;
  formatToPlainString = intl2.formatToPlainString;
  obj4 = { duration: tmpResult3.getAccessibleVoiceDurationString(rounded) };
  lw35aH = _modDef3089.lw35aH;
  tmpResult3 = CheckpointUtils;
  if (stats.numMessagesSent > 0) {
    const numMessagesSent = stats.numMessagesSent;
    toLocaleStringResult = numMessagesSent.toLocaleString(tmp(1125).intl.currentLocale);
  } else {
    const intl3 = tmp(1125).intl;
    const obj5 = { count: stats.numMessagesSent };
    toLocaleStringResult = intl3.formatToPlainString(tmp5(3089).foKBCN, obj5);
  }
  obj6 = { text: toLocaleStringResult, accessibilityLabel: intl4.formatToPlainString(_modDef3089.IdRUAC, obj7) };
  intl4 = tmp(1125).intl;
  obj7 = { count: stats.numMessagesSent };
  if (null == stats.topGuild) {
    const intl5 = tmp(1125).intl;
    const stringResult = intl5.string(_modDef3089.GultYJ);
    obj9 = { text: stringResult, accessibilityLabel: stringResult };
    const obj8 = { text: stringResult, accessibilityLabel: stringResult };
  } else {
    obj9 = { text: intl14.formatToPlainString(intl16.t.GBLpQ8, obj10), accessibilityLabel: intl15.formatToPlainString(_modDef3089.MpSH8v, obj11) };
    intl14 = tmp(1125).intl;
    obj10 = { days: stats.topGuildNumDaysInteracted };
    intl15 = tmp(1125).intl;
    obj11 = { days: stats.topGuildNumDaysInteracted };
  }
  tmp8 = undefined;
  if (null != stats.topGuild) {
    const obj12 = { text: stats.topGuild.guildName, accessibilityLabel: intl6.formatToPlainString(_modDef3089["9UTJ+t"], obj13) };
    intl6 = tmp(1125).intl;
    tmp8 = obj12;
    obj13 = { guildName: stats.topGuild.guildName };
  }
  if (stats.numEmojisSent > 0) {
    const numEmojisSent = stats.numEmojisSent;
    toLocaleStringResult1 = numEmojisSent.toLocaleString(tmp(1125).intl.currentLocale);
  } else {
    const intl7 = tmp(1125).intl;
    const obj14 = { count: stats.numEmojisSent };
    toLocaleStringResult1 = intl7.formatToPlainString(tmp5(3089).RHYx1k, obj14);
  }
  obj15 = { text: toLocaleStringResult1, accessibilityLabel: intl8.formatToPlainString(_modDef3089["36qpUG"], obj16) };
  intl8 = tmp(1125).intl;
  tmp10 = undefined;
  obj16 = { count: stats.numEmojisSent };
  if (stats.numEmojisSent > 0) {
    if (null != stats.topEmoji) {
      let result;
      if (null == stats.topEmoji.emojiId) {
        const tmp5Result = UnicodeEmojisDefault;
        result = tmp5Result.convertSurrogateToName(stats.topEmoji.emojiName);
      } else {
        const _HermesInternal = HermesInternal;
        result = ":" + stats.topEmoji.emojiName + ":";
      }
      const obj17 = { text: result, accessibilityLabel: intl9.formatToPlainString(_modDef3089.CcBo8C, obj18) };
      intl9 = tmp(1125).intl;
      tmp10 = obj17;
      obj18 = { emojiName: stats.topEmoji.emojiName };
    }
  }
  if (stats.totalDaysPlayed > 0) {
    const intl11 = tmp(1125).intl;
    const obj19 = { days: stats.totalDaysPlayed };
    formatToPlainStringResult = intl11.formatToPlainString(tmp(1125).t.GBLpQ8, obj19);
  } else {
    const intl10 = tmp(1125).intl;
    formatToPlainStringResult = intl10.string(tmp5(3089).mg1NPe);
  }
  obj20 = { text: formatToPlainStringResult, accessibilityLabel: intl12.formatToPlainString(_modDef3089.LYcKX7, obj21) };
  intl12 = tmp(1125).intl;
  tmp13 = undefined;
  obj21 = { days: stats.totalDaysPlayed };
  if (stats.totalDaysPlayed > 0) {
    if (null != stats.topGame) {
      const obj22 = { text: stats.topGame.applicationName, accessibilityLabel: intl13.formatToPlainString(_modDef3089.kLqpNC, obj23) };
      intl13 = tmp(1125).intl;
      tmp13 = obj22;
      obj23 = { gameName: stats.topGame.applicationName };
    }
  }
  ({ topEmoji: obj.topEmoji, topGuild: obj.topGuild } = stats);
  tmp14 = undefined;
  if (null != stats.topGuild) {
    const _Array = Array;
    const guildName = stats.topGuild.guildName;
    const tmpResult4 = StringUtils;
    const fromResult = from(tmpResult4.getAcronym(guildName));
    const atResult = fromResult.at(0);
    let toLocaleUpperCaseResult;
    if (atResult != null) {
      toLocaleUpperCaseResult = atResult.toLocaleUpperCase(tmp(1125).intl.currentLocale);
    }
    tmp14 = toLocaleUpperCaseResult;
  }
  return obj;
}
({ CHECKPOINT_2026_POWER_BAR_MAX_FILLED_UNITS: c3, CHECKPOINT_2026_POWER_BAR_MIN_FILLED_UNITS: closure_4, CHECKPOINT_2026_POWER_BAR_UNITS: hasOwnProperty, NATIVE_CHARACTER_LAYER_SIZE: metroRequire, CheckpointVersions: metroImportDefault } = CheckpointConstants);
let items = [CheckpointCardTypes.CheckpointCardTypes.DEFAULT, CheckpointCardTypes.CheckpointCardTypes.CHARACTER_ONLY];
const set = new Set(items);
const items1 = [CheckpointCardTypes.CheckpointCardTypes.DEFAULT, CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY];
const set1 = new Set(items1);
let result = size.fileFinishedImporting("modules/checkpoint/CheckpointMessageComponentUtils.tsx");

export const transformCheckpoint2026CardComponent = function transformCheckpoint2026CardComponent(checkpoint_data) {
  let tmp10;
  let tmp11;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp2 = null;
  const obj = CheckpointExperiments;
  if (obj.getIsCheckpointCardEnabled("transformCheckpoint2026CardComponent")) {
    let tmp4;
    if (null != checkpoint_data.character) {
      const obj2 = { version: checkpoint_data.version, character: tmp5, stats: tmp6 };
      tmp5 = undefined;
      if (null != checkpoint_data.character) {
        const obj6 = { base: null, shoes: null, outfit: null, face: null, hat: null, wearable: null, aura: null };
        ({ base: obj3.base, shoes: obj3.shoes, outfit: obj3.outfit, face: obj3.face, hat: obj3.hat, wearable: obj3.wearable, aura: obj3.aura } = checkpoint_data.character);
        tmp5 = obj6;
      }
      tmp6 = undefined;
      if (null != checkpoint_data.stats) {
        const stats = checkpoint_data.stats;
        const obj7 = { totalVoiceMinutes: null, numMessagesSent: null, numEmojisSent: null, totalDaysPlayed: null, topEmoji: tmp7, topGuild: tmp10, topGuildNumDaysInteracted: stats.top_guild_num_days_interacted, topGame: tmp11, powerLevel: null, powerLevelPercentile: null };
        ({ total_voice_minutes: obj4.totalVoiceMinutes, num_messages_sent: obj4.numMessagesSent, num_emojis_sent: obj4.numEmojisSent, total_days_played: obj4.totalDaysPlayed } = stats);
        tmp7 = undefined;
        if (null != stats.top_emoji) {
          let emoji_id;
          const obj5 = SnowflakeUtilsDefault;
          if (obj5.isProbablyAValidSnowflake(stats.top_emoji.emoji_id)) {
            emoji_id = stats.top_emoji.emoji_id;
          }
          tmp7 = { emojiId: emoji_id, emojiName: stats.top_emoji.emoji_name };
          const obj8 = { emojiId: emoji_id, emojiName: stats.top_emoji.emoji_name };
        }
        tmp10 = undefined;
        if (null != stats.top_guild) {
          tmp10 = { guildId: stats.top_guild.guild_id, guildName: stats.top_guild.guild_name, guildIcon: stats.top_guild.guild_icon };
          const obj14 = { guildId: stats.top_guild.guild_id, guildName: stats.top_guild.guild_name, guildIcon: stats.top_guild.guild_icon };
        }
        tmp11 = undefined;
        if (null != stats.top_game) {
          tmp11 = { applicationId: stats.top_game.application_id, applicationName: stats.top_game.application_name, applicationImageId: stats.top_game.application_image_id };
          const obj15 = { applicationId: stats.top_game.application_id, applicationName: stats.top_game.application_name, applicationImageId: stats.top_game.application_image_id };
        }
        ({ power_level: obj4.powerLevel, power_level_percentile: obj4.powerLevelPercentile } = stats);
        tmp6 = obj7;
      }
      tmp4 = obj2;
    } else {
      tmp4 = null;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
export const toCheckpointMessageComponentData = function toCheckpointMessageComponentData(arg0, arg1, guilds) {
  let icon;
  let num2;
  let num3;
  let num4;
  let num5;
  let num6;
  let num7;
  let tmp;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp4;
  const obj = { version: metroImportDefault.V2026, character: tmp, stats: tmp4 };
  tmp = undefined;
  if (set.has(arg0)) {
    tmp = arg1;
  }
  tmp4 = undefined;
  if (set1.has(arg0)) {
    if (null != guilds) {
      guilds = guilds.guilds;
      let first;
      if (guilds != null) {
        first = guilds.guilds[0];
      }
      const emojis = guilds.emojis;
      let first1;
      if (emojis != null) {
        first1 = emojis.emojis[0];
      }
      const games = guilds.games;
      let game;
      if (games != null) {
        const first2 = games.games[0];
        if (first2 != null) {
          game = first2.game;
        }
      }
      const voice = guilds.voice;
      let num;
      if (voice != null) {
        num = voice.totalVoiceMinutes;
      }
      if (num == null) {
        num = 0;
      }
      const messages = guilds.messages;
      const obj2 = { totalVoiceMinutes: num, numMessagesSent: num2, numEmojisSent: num3, totalDaysPlayed: num4, topEmoji: tmp11, topGuild: tmp12, topGuildNumDaysInteracted: num5, topGame: tmp13, powerLevel: num6, powerLevelPercentile: num7 };
      num2 = undefined;
      if (messages != null) {
        num2 = messages.numMessagesSent;
      }
      if (num2 == null) {
        num2 = 0;
      }
      const emojis2 = guilds.emojis;
      num3 = undefined;
      if (emojis2 != null) {
        num3 = emojis2.numEmojisSent;
      }
      if (num3 == null) {
        num3 = 0;
      }
      const games2 = guilds.games;
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
        const obj9 = { guildId: first.guild.id, guildName: first.guild.name, guildIcon: icon };
        icon = first.guild.icon;
        tmp12 = obj9;
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
        const obj10 = { applicationId: null, applicationName: null, applicationImageId: null };
        ({ id: obj5.applicationId, name: obj5.applicationName, iconHash: obj5.applicationImageId } = game);
        tmp13 = obj10;
      }
      const power = guilds.power;
      num6 = undefined;
      if (power != null) {
        num6 = power.powerLevel;
      }
      if (num6 == null) {
        num6 = 0;
      }
      const power2 = guilds.power;
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
  return obj;
};
export const getCharacterLayerUrls = function getCharacterLayerUrls(character, arg1) {
  _require = character;
  let closure_1 = arg1;
  const items = [];
  const obj = require("CheckpointCharacterTraits");
  const characterLayerOrdering = obj.getCharacterLayerOrdering(character.wearable);
  const item = characterLayerOrdering.forEach((item) => {
    const tmp = CheckpointCharacterTraits.CHECKPOINT_TRAIT_TO_OPTION_ASSETS[item][character[item]];
    let layer;
    if (tmp != null) {
      layer = tmp.layer;
    }
    const tmp3 = null != layer && "" !== layer;
    if (tmp3) {
      const _HermesInternal = HermesInternal;
      items.push("" + layer + "?height=" + importDefault + "&width=" + importDefault);
    }
  });
  return items;
};
export const formatCheckpoint2026PowerLevel = function formatCheckpoint2026PowerLevel(arg0) {
  const numberFormat = new Intl.NumberFormat(intl16.intl.currentLocale, { notation: "compact", compactDisplay: "short" });
  return numberFormat.format(arg0);
};
export const getCheckpoint2026PowerBarUnits = function getCheckpoint2026PowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 100 * hasOwnProperty), React3), _false);
};
export { transformCheckpoint2026StatsToRowGeneratedComponent };
export const transformCheckpoint2026CardToRowGeneratedComponent = function transformCheckpoint2026CardToRowGeneratedComponent(checkpointData) {
  let character;
  let closure_1;
  let intl;
  let items;
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
    const obj3 = character(items[4]);
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
        items.push("" + layer + "?height=" + importDefault + "&width=" + importDefault);
      }
    });
    tmp4 = obj2;
    obj4 = character(items[5]);
  }
  tmp7 = undefined;
  if (null != checkpointData.stats) {
    tmp7 = transformCheckpoint2026StatsToRowGeneratedComponent(checkpointData.stats);
  }
  tmp10 = undefined;
  const obj5 = character(items[2]);
  const tmp9 = character;
  if (obj5.getIsCheckpointEnabled("getCheckpointClickable")) {
    const obj6 = { ariaDescription: intl.string(tmp(items[11]).r8GEbK) };
    intl = tmp9(tmp2[6]).intl;
    tmp10 = obj6;
  }
  return obj;
};
export const getCheckpointDataFromMessage = function getCheckpointDataFromMessage(contentMessage) {
  const first = contentMessage.components[0];
  let checkpointData = null;
  if (null != first) {
    checkpointData = null;
    if (first.type === Server.ComponentType.CHECKPOINT_CARD) {
      checkpointData = first.checkpointData;
    }
  }
  return checkpointData;
};
export const getCheckpointLabel = function getCheckpointLabel(checkpointDataFromMessage) {
  if (metroImportDefault.V2025 === checkpointDataFromMessage.version) {
    const intl = intl16.intl;
    return intl.string(_modDef3057.goiR2u);
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
};
