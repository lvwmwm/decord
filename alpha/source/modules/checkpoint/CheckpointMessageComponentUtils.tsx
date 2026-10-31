// Module ID: 6087
// Function ID: 6088
// Name: checkpoint/CheckpointMessageComponentUtils
// Dependencies: [6066, 11, 6088, 6089, 6090, 6091, 6111, 6433, 1113, 3092, 6075, 4960, 6437, 3060, 1892, 1992, 2]
// Exports: formatCheckpoint2026PowerLevel, getCharacterLayerUrls, getCheckpoint2026PowerBarUnits, getCheckpointDataFromMessage, getCheckpointLabel, toCheckpointMessageComponentData, transformCheckpoint2026CardComponent, transformCheckpoint2026CardToRowGeneratedComponent

// Module 6087 (checkpoint/CheckpointMessageComponentUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl16 from "intl" /* 1113 */;
import Server from "Server" /* 1992 */;
import _modDef3060 from "module_3060" /* 3060 */;
import _modDef3092 from "module_3092" /* 3092 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4960 */;
import CheckpointUtils from "CheckpointUtils" /* 6075 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6088 */;
import CheckpointCardTypes from "CheckpointCardTypes" /* 6090 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6091 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6111 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6437 */;
import CheckpointConstants from "CheckpointConstants" /* 6066 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp;
const CheckpointCardColorPalette = tmp(6089);
function transformCheckpoint2026StatsToRowGeneratedComponent(stats) {
  let formatToPlainString;
  let formatToPlainStringResult;
  let guildAcronymCharacter;
  let intl;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl3;
  let intl4;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let lw35aH;
  let numberFormat;
  let obj10;
  let obj11;
  let obj13;
  let obj14;
  let obj15;
  let obj16;
  let obj18;
  let obj2;
  let obj20;
  let obj21;
  let obj23;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let obj9;
  let powerLevel;
  let tmp10;
  let tmp6;
  let tmp7;
  const obj = { powerLevel: numberFormat.format(powerLevel), powerLevelUnits: Math.min(Math.max(Math.round(stats.powerLevelPercentile / 100 * hasOwnProperty), React3), _false), voice: obj2, messages: obj4, topGuildDaysInteracted: obj9, topGuildName: tmp6, reactions: obj14, topEmojiName: tmp7, daysPlayed: obj20, topGameName: tmp10, topEmoji: null, topGuild: null, topGuildAcronymCharacter: guildAcronymCharacter, topGame: stats.topGame };
  powerLevel = stats.powerLevel;
  numberFormat = new Intl.NumberFormat(intl16.intl.currentLocale, { notation: "compact", compactDisplay: "short" });
  const rounded = Math.round(stats.totalVoiceMinutes);
  obj2 = { text: intl.formatToPlainString(_modDef3092["Ww/dDO"], { count: rounded }), accessibilityLabel: formatToPlainString(lw35aH, obj3) };
  intl = intl16.intl;
  const intl2 = intl16.intl;
  formatToPlainString = intl2.formatToPlainString;
  obj3 = { duration: obj5.getAccessibleVoiceDurationString(rounded) };
  lw35aH = _modDef3092.lw35aH;
  obj5 = CheckpointUtils;
  obj4 = { text: intl3.formatToPlainString(_modDef3092.foKBCN, obj6), accessibilityLabel: intl4.formatToPlainString(_modDef3092.IdRUAC, obj7) };
  intl3 = intl16.intl;
  obj6 = { count: stats.numMessagesSent };
  intl4 = intl16.intl;
  obj7 = { count: stats.numMessagesSent };
  if (null == stats.topGuild) {
    const intl5 = tmp(1113).intl;
    const stringResult = intl5.string(_modDef3092.GultYJ);
    obj9 = { text: stringResult, accessibilityLabel: stringResult };
    const obj8 = { text: stringResult, accessibilityLabel: stringResult };
  } else {
    obj9 = { text: intl14.formatToPlainString(_modDef3092["51Y/V2"], obj10), accessibilityLabel: intl15.formatToPlainString(_modDef3092.MpSH8v, obj11) };
    intl14 = tmp(1113).intl;
    obj10 = { count: stats.topGuildNumDaysInteracted };
    intl15 = tmp(1113).intl;
    obj11 = { days: stats.topGuildNumDaysInteracted };
  }
  tmp6 = undefined;
  if (null != stats.topGuild) {
    const obj12 = { text: stats.topGuild.guildName, accessibilityLabel: intl6.formatToPlainString(_modDef3092["9UTJ+t"], obj13) };
    intl6 = tmp(1113).intl;
    tmp6 = obj12;
    obj13 = { guildName: stats.topGuild.guildName };
  }
  obj14 = { text: intl7.formatToPlainString(_modDef3092.RHYx1k, obj15), accessibilityLabel: intl8.formatToPlainString(_modDef3092["36qpUG"], obj16) };
  intl7 = tmp(1113).intl;
  obj15 = { count: stats.numEmojisSent };
  intl8 = tmp(1113).intl;
  tmp7 = undefined;
  obj16 = { count: stats.numEmojisSent };
  if (stats.numEmojisSent > 0) {
    if (null != stats.topEmoji) {
      let result;
      if (null == stats.topEmoji.emojiId) {
        const tmp4Result = UnicodeEmojisDefault;
        result = tmp4Result.convertSurrogateToName(stats.topEmoji.emojiName);
      } else {
        const _HermesInternal = HermesInternal;
        result = ":" + stats.topEmoji.emojiName + ":";
      }
      const obj17 = { text: result, accessibilityLabel: intl9.formatToPlainString(_modDef3092.CcBo8C, obj18) };
      intl9 = tmp(1113).intl;
      tmp7 = obj17;
      obj18 = { emojiName: stats.topEmoji.emojiName };
    }
  }
  if (stats.totalDaysPlayed > 0) {
    const intl11 = tmp(1113).intl;
    const obj19 = { count: stats.totalDaysPlayed };
    formatToPlainStringResult = intl11.formatToPlainString(tmp4(3092)["LD/96a"], obj19);
  } else {
    const intl10 = tmp(1113).intl;
    formatToPlainStringResult = intl10.string(tmp4(3092).mg1NPe);
  }
  obj20 = { text: formatToPlainStringResult, accessibilityLabel: intl12.formatToPlainString(_modDef3092.LYcKX7, obj21) };
  intl12 = tmp(1113).intl;
  tmp10 = undefined;
  obj21 = { days: stats.totalDaysPlayed };
  if (stats.totalDaysPlayed > 0) {
    if (null != stats.topGame) {
      const obj22 = { text: stats.topGame.applicationName, accessibilityLabel: intl13.formatToPlainString(_modDef3092.kLqpNC, obj23) };
      intl13 = tmp(1113).intl;
      tmp10 = obj22;
      obj23 = { gameName: stats.topGame.applicationName };
    }
  }
  ({ topEmoji: obj.topEmoji, topGuild: obj.topGuild } = stats);
  guildAcronymCharacter = undefined;
  if (null != stats.topGuild) {
    const tmpResult = CheckpointStatsUtils;
    guildAcronymCharacter = tmpResult.getGuildAcronymCharacter(stats.topGuild.guildName);
  }
  return obj;
}
({ CHECKPOINT_2026_POWER_BAR_MAX_FILLED_UNITS: c3, CHECKPOINT_2026_POWER_BAR_MIN_FILLED_UNITS: closure_4, CHECKPOINT_2026_POWER_BAR_UNITS: hasOwnProperty, NATIVE_CHARACTER_LAYER_SIZE: metroRequire, CheckpointVersions: metroImportDefault } = CheckpointConstants);
let items = [CheckpointCardTypes.CheckpointCardTypes.DEFAULT, CheckpointCardTypes.CheckpointCardTypes.CHARACTER_ONLY];
const set = new Set(items);
const items1 = [CheckpointCardTypes.CheckpointCardTypes.DEFAULT, CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY];
const set1 = new Set(items1);
let result = size.fileFinishedImporting("modules/checkpoint/CheckpointMessageComponentUtils.tsx");

export function transformCheckpoint2026CardComponent(checkpoint_data) {
  let NONE;
  let tmp11;
  let tmp12;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp3 = null;
  const obj = CheckpointExperiments;
  if (obj.getIsCheckpointCardEnabled("transformCheckpoint2026CardComponent")) {
    let tmp5;
    if (null != checkpoint_data.character) {
      const obj2 = { version: checkpoint_data.version, character: tmp6, stats: tmp7, cardColorPalette: NONE };
      tmp6 = undefined;
      if (null != checkpoint_data.character) {
        const obj6 = { base: null, shoes: null, outfit: null, face: null, hat: null, wearable: null, aura: null };
        ({ base: obj3.base, shoes: obj3.shoes, outfit: obj3.outfit, face: obj3.face, hat: obj3.hat, wearable: obj3.wearable, aura: obj3.aura } = checkpoint_data.character);
        tmp6 = obj6;
      }
      tmp7 = undefined;
      if (null != checkpoint_data.stats) {
        const stats = checkpoint_data.stats;
        const obj7 = { totalVoiceMinutes: null, numMessagesSent: null, numEmojisSent: null, totalDaysPlayed: null, topEmoji: tmp8, topGuild: tmp11, topGuildNumDaysInteracted: stats.top_guild_num_days_interacted, topGame: tmp12, powerLevel: null, powerLevelPercentile: null };
        ({ total_voice_minutes: obj4.totalVoiceMinutes, num_messages_sent: obj4.numMessagesSent, num_emojis_sent: obj4.numEmojisSent, total_days_played: obj4.totalDaysPlayed } = stats);
        tmp8 = undefined;
        if (null != stats.top_emoji) {
          let emoji_id;
          const obj5 = SnowflakeUtilsDefault;
          if (obj5.isProbablyAValidSnowflake(stats.top_emoji.emoji_id)) {
            emoji_id = stats.top_emoji.emoji_id;
          }
          tmp8 = { emojiId: emoji_id, emojiName: stats.top_emoji.emoji_name };
          const obj8 = { emojiId: emoji_id, emojiName: stats.top_emoji.emoji_name };
        }
        tmp11 = undefined;
        if (null != stats.top_guild) {
          tmp11 = { guildId: stats.top_guild.guild_id, guildName: stats.top_guild.guild_name, guildIcon: stats.top_guild.guild_icon };
          const obj14 = { guildId: stats.top_guild.guild_id, guildName: stats.top_guild.guild_name, guildIcon: stats.top_guild.guild_icon };
        }
        tmp12 = undefined;
        if (null != stats.top_game) {
          tmp12 = { applicationId: stats.top_game.application_id, applicationName: stats.top_game.application_name, applicationImageId: stats.top_game.application_image_id };
          const obj15 = { applicationId: stats.top_game.application_id, applicationName: stats.top_game.application_name, applicationImageId: stats.top_game.application_image_id };
        }
        ({ power_level: obj4.powerLevel, power_level_percentile: obj4.powerLevelPercentile } = stats);
        tmp7 = obj7;
      }
      NONE = checkpoint_data.card_color_palette;
      if (NONE == null) {
        NONE = CheckpointCardColorPalette.CheckpointCardColorPalette.NONE;
      }
      tmp5 = obj2;
    } else {
      tmp5 = null;
    }
    tmp3 = tmp5;
  }
  return tmp3;
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
  const items = [];
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
      items.push("" + layer + "?height=" + importDefault + "&width=" + importDefault);
    }
  });
  return items;
}
export function formatCheckpoint2026PowerLevel(arg0) {
  const numberFormat = new Intl.NumberFormat(intl16.intl.currentLocale, { notation: "compact", compactDisplay: "short" });
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
        items.push("" + layer + "?height=" + importDefault + "&width=" + importDefault);
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
  const obj5 = character(items[2]);
  const tmp9 = character;
  if (obj5.getIsCheckpointEnabled("getCheckpointClickable")) {
    const obj6 = { ariaDescription: intl.string(tmp(items[13]).r8GEbK) };
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
    const intl = intl16.intl;
    return intl.string(_modDef3060.goiR2u);
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
}
