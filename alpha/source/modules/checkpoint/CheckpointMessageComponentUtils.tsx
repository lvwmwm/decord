// Module ID: 5991
// Function ID: 5992
// Name: checkpoint/CheckpointMessageComponentUtils
// Dependencies: [5970, 11, 5992, 5993, 5994, 6314, 6315, 5979, 1128, 3078, 4894, 3046, 1900, 2000, 2]
// Exports: getCharacterLayerUrls, getCheckpointDataFromMessage, getCheckpointLabel, transformCheckpoint2026CardComponent, transformCheckpoint2026CardToRowGeneratedComponent

// Module 5991 (checkpoint/CheckpointMessageComponentUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl19 from "intl" /* 1128 */;
import Server from "Server" /* 2000 */;
import _modDef3046 from "module_3046" /* 3046 */;
import _modDef3078 from "module_3078" /* 3078 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4894 */;
import CheckpointUtils from "CheckpointUtils" /* 5979 */;
import CheckpointExperiments from "CheckpointExperiments" /* 5992 */;
import CheckpointTrait from "CheckpointTrait" /* 5993 */;
import CheckpointCharacterAssets from "CheckpointCharacterAssets" /* 5994 */;
import CheckpointConstants from "CheckpointConstants" /* 5970 */;
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
  let intl10;
  let intl14;
  let intl15;
  let intl17;
  let intl18;
  let intl4;
  let intl6;
  let intl9;
  let lw35aH;
  let numberFormat;
  let obj10;
  let obj11;
  let obj13;
  let obj14;
  let obj16;
  let obj17;
  let obj19;
  let obj20;
  let obj22;
  let obj23;
  let obj25;
  let obj26;
  let obj3;
  let obj4;
  let obj6;
  let obj7;
  let obj9;
  let tmpResult2;
  let toLocaleStringResult;
  let toLocaleStringResult1;
  let voiceDurationString;
  obj = { powerLevel: numberFormat.format(stats.powerLevel), powerLevelUnits: Math.min(Math.max(Math.round(stats.powerLevelPercentile / 100 * hasOwnProperty), React3), _false), voice: obj3, messages: obj6, topGuildDaysInteracted: obj9, topGuildName: obj13, reactions: obj16, topEmojiName: obj19, daysPlayed: obj22, topGameName: obj25, topEmoji: null, topGuild: null, topGame: null };
  numberFormat = new Intl.NumberFormat(intl19.intl.currentLocale, { notation: "compact", compactDisplay: "short" });
  const rounded = Math.round(stats.totalVoiceMinutes);
  if (rounded > 0) {
    const tmpResult = CheckpointUtils;
    voiceDurationString = tmpResult.getVoiceDurationString(rounded);
  } else {
    const intl = tmp(1128).intl;
    const obj2 = { minutes: rounded };
    voiceDurationString = intl.formatToPlainString(tmp(1128).t.iXLF9W, obj2);
  }
  obj3 = { text: voiceDurationString, accessibilityLabel: formatToPlainString(lw35aH, obj4) };
  const intl2 = tmp(1128).intl;
  formatToPlainString = intl2.formatToPlainString;
  obj4 = { duration: tmpResult2.getAccessibleVoiceDurationString(rounded) };
  lw35aH = _modDef3078.lw35aH;
  tmpResult2 = CheckpointUtils;
  if (stats.numMessagesSent > 0) {
    const numMessagesSent = stats.numMessagesSent;
    toLocaleStringResult = numMessagesSent.toLocaleString(tmp(1128).intl.currentLocale);
  } else {
    const intl3 = tmp(1128).intl;
    const obj5 = { count: stats.numMessagesSent };
    toLocaleStringResult = intl3.formatToPlainString(tmp5(3078).foKBCN, obj5);
  }
  obj6 = { text: toLocaleStringResult, accessibilityLabel: intl4.formatToPlainString(_modDef3078.IdRUAC, obj7) };
  intl4 = tmp(1128).intl;
  obj7 = { count: stats.numMessagesSent };
  if (null == stats.topGuild) {
    const intl5 = tmp(1128).intl;
    const stringResult = intl5.string(_modDef3078.GultYJ);
    obj9 = { text: stringResult, accessibilityLabel: stringResult };
    const obj8 = { text: stringResult, accessibilityLabel: stringResult };
  } else {
    obj9 = { text: intl17.formatToPlainString(intl19.t.GBLpQ8, obj10), accessibilityLabel: intl18.formatToPlainString(_modDef3078.MpSH8v, obj11) };
    intl17 = tmp(1128).intl;
    obj10 = { days: stats.topGuildNumDaysInteracted };
    intl18 = tmp(1128).intl;
    obj11 = { days: stats.topGuildNumDaysInteracted };
  }
  if (null == stats.topGuild) {
    const intl7 = tmp(1128).intl;
    const stringResult1 = intl7.string(intl19.t["52UOf9"]);
    obj13 = { text: stringResult1, accessibilityLabel: stringResult1 };
    const obj12 = { text: stringResult1, accessibilityLabel: stringResult1 };
  } else {
    obj13 = { text: stats.topGuild.guildName, accessibilityLabel: intl6.formatToPlainString(_modDef3078["9UTJ+t"], obj14) };
    intl6 = tmp(1128).intl;
    obj14 = { guildName: stats.topGuild.guildName };
  }
  if (stats.numEmojisSent > 0) {
    const numEmojisSent = stats.numEmojisSent;
    toLocaleStringResult1 = numEmojisSent.toLocaleString(tmp(1128).intl.currentLocale);
  } else {
    const intl8 = tmp(1128).intl;
    const obj15 = { count: stats.numEmojisSent };
    toLocaleStringResult1 = intl8.formatToPlainString(tmp5(3078).RHYx1k, obj15);
  }
  obj16 = { text: toLocaleStringResult1, accessibilityLabel: intl9.formatToPlainString(_modDef3078["36qpUG"], obj17) };
  intl9 = tmp(1128).intl;
  obj17 = { count: stats.numEmojisSent };
  if (null == stats.topEmoji) {
    const intl11 = tmp(1128).intl;
    const stringResult2 = intl11.string(intl19.t.lxsmBd);
    obj19 = { text: stringResult2, accessibilityLabel: stringResult2 };
    const obj18 = { text: stringResult2, accessibilityLabel: stringResult2 };
  } else {
    let result;
    if (null == stats.topEmoji.emojiId) {
      const tmp5Result = UnicodeEmojisDefault;
      result = tmp5Result.convertSurrogateToName(stats.topEmoji.emojiName);
    } else {
      const _HermesInternal = HermesInternal;
      result = ":" + stats.topEmoji.emojiName + ":";
    }
    obj19 = { text: result, accessibilityLabel: intl10.formatToPlainString(_modDef3078.CcBo8C, obj20) };
    intl10 = tmp(1128).intl;
    obj20 = { emojiName: stats.topEmoji.emojiName };
  }
  if (stats.totalDaysPlayed > 0) {
    const intl13 = tmp(1128).intl;
    const obj21 = { days: stats.totalDaysPlayed };
    formatToPlainStringResult = intl13.formatToPlainString(tmp(1128).t.GBLpQ8, obj21);
  } else {
    const intl12 = tmp(1128).intl;
    formatToPlainStringResult = intl12.string(tmp5(3078).mg1NPe);
  }
  obj22 = { text: formatToPlainStringResult, accessibilityLabel: intl14.formatToPlainString(_modDef3078.LYcKX7, obj23) };
  intl14 = tmp(1128).intl;
  obj23 = { days: stats.totalDaysPlayed };
  if (null == stats.topGame) {
    const intl16 = tmp(1128).intl;
    const stringResult3 = intl16.string(intl19.t["5eYZiW"]);
    obj25 = { text: stringResult3, accessibilityLabel: stringResult3 };
    const obj24 = { text: stringResult3, accessibilityLabel: stringResult3 };
  } else {
    obj25 = { text: stats.topGame.applicationName, accessibilityLabel: intl15.formatToPlainString(_modDef3078.kLqpNC, obj26) };
    intl15 = tmp(1128).intl;
    obj26 = { gameName: stats.topGame.applicationName };
  }
  ({ topEmoji: obj.topEmoji, topGuild: obj.topGuild, topGame: obj.topGame } = stats);
  return obj;
}
({ CHECKPOINT_2026_POWER_BAR_MAX_FILLED_UNITS: c3, CHECKPOINT_2026_POWER_BAR_MIN_FILLED_UNITS: closure_4, CHECKPOINT_2026_POWER_BAR_UNITS: hasOwnProperty, NATIVE_CHARACTER_LAYER_SIZE: metroRequire, CheckpointVersions: metroImportDefault } = CheckpointConstants);
let obj = {};
obj[CheckpointTrait.CheckpointTrait.BASE] = CheckpointCharacterAssets.CHARACTER_BASE_TRAIT_ASSETS;
obj[CheckpointTrait.CheckpointTrait.SHOES] = CheckpointCharacterAssets.CHARACTER_SHOES_TRAIT_ASSETS;
obj[CheckpointTrait.CheckpointTrait.OUTFIT] = CheckpointCharacterAssets.CHARACTER_OUTFIT_TRAIT_ASSETS;
obj[CheckpointTrait.CheckpointTrait.FACE] = CheckpointCharacterAssets.CHARACTER_FACE_TRAIT_ASSETS;
obj[CheckpointTrait.CheckpointTrait.HAT] = CheckpointCharacterAssets.CHARACTER_HAT_TRAIT_ASSETS;
obj[CheckpointTrait.CheckpointTrait.WEARABLE] = CheckpointCharacterAssets.CHARACTER_WEARABLE_TRAIT_ASSETS;
obj[CheckpointTrait.CheckpointTrait.AURA] = CheckpointCharacterAssets.CHARACTER_AURA_TRAIT_ASSETS;
let result = size.fileFinishedImporting("modules/checkpoint/CheckpointMessageComponentUtils.tsx");

export const transformCheckpoint2026CardComponent = function transformCheckpoint2026CardComponent(checkpoint_data) {
  let tmp10;
  let tmp11;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp2 = null;
  obj = CheckpointExperiments;
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
export const getCharacterLayerUrls = function getCharacterLayerUrls(wearable, arg1) {
  let items;
  _require = wearable;
  let closure_1 = arg1;
  const CHECKPOINT_WEARABLE_LAYER_BACKGROUND = require("CheckpointTraitConfig").CHECKPOINT_WEARABLE_LAYER_BACKGROUND;
  const hasItem = CHECKPOINT_WEARABLE_LAYER_BACKGROUND.has(wearable.wearable);
  const tmp2 = require("CheckpointTraitConfig");
  items = [];
  const arr = hasItem ? tmp2.CHECKPOINT_LAYER_BACKGROUND_WEARABLE_ORDERING : tmp2.CHECKPOINT_LAYER_DEFAULT_ORDERING;
  const item = arr.forEach((item) => {
    let layer;
    if (obj[item][character[item]] != null) {
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
export { transformCheckpoint2026StatsToRowGeneratedComponent };
export const transformCheckpoint2026CardToRowGeneratedComponent = function transformCheckpoint2026CardToRowGeneratedComponent(checkpointData) {
  let character;
  let closure_1;
  let intl;
  let items;
  let message;
  let primaryBackgroundColor;
  let secondaryBackgroundColor;
  let tertiaryBackgroundColor;
  let tmp12;
  let tmp3;
  let tmp4;
  let tmp5Result;
  let tmp9;
  checkpointData = checkpointData.checkpointData;
  ({ message, primaryBackgroundColor, secondaryBackgroundColor, tertiaryBackgroundColor } = checkpointData);
  const tmp = importDefault;
  obj = { version: checkpointData.version, authorId: message.author.id, primaryBackgroundColor, secondaryBackgroundColor, tertiaryBackgroundColor, character: tmp4, stats: tmp9, clickable: tmp12 };
  tmp4 = undefined;
  if (null != checkpointData.character) {
    character = checkpointData.character;
    importDefault = tmp3;
    items = undefined;
    const CHECKPOINT_WEARABLE_LAYER_BACKGROUND = character(tmp2[5]).CHECKPOINT_WEARABLE_LAYER_BACKGROUND;
    const hasItem = CHECKPOINT_WEARABLE_LAYER_BACKGROUND.has(character.wearable);
    const tmp7 = character(tmp2[5]);
    const arr = hasItem ? tmp7.CHECKPOINT_LAYER_BACKGROUND_WEARABLE_ORDERING : tmp7.CHECKPOINT_LAYER_DEFAULT_ORDERING;
    const obj2 = { layerUrls: items, accessibilityLabel: tmp5Result.getCheckpointCharacterAccessibilityLabel(character) };
    items = [];
    const item = arr.forEach((item) => {
      let layer;
      if (obj[item][character[item]] != null) {
        layer = tmp.layer;
      }
      const tmp3 = null != layer && "" !== layer;
      if (tmp3) {
        const _HermesInternal = HermesInternal;
        items.push("" + layer + "?height=" + importDefault + "&width=" + importDefault);
      }
    });
    tmp4 = obj2;
    tmp5Result = character(items[6]);
  }
  tmp9 = undefined;
  if (null != checkpointData.stats) {
    tmp9 = transformCheckpoint2026StatsToRowGeneratedComponent(checkpointData.stats);
  }
  tmp12 = undefined;
  const obj4 = character(items[2]);
  const tmp11 = character;
  if (obj4.getIsCheckpointEnabled("getCheckpointClickable")) {
    const obj3 = { ariaDescription: intl.string(tmp(items[11]).r8GEbK) };
    intl = tmp11(tmp2[8]).intl;
    tmp12 = obj3;
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
    const intl = intl19.intl;
    return intl.string(_modDef3046.goiR2u);
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
};
