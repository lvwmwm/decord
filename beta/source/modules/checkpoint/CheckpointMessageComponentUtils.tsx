// Module ID: 5559
// Function ID: 5560
// Name: checkpoint/CheckpointMessageComponentUtils
// Dependencies: [5537, 11, 5560, 5561, 5562, 5882, 5547, 1128, 3141, 4859, 3109, 1900, 2000, 2]
// Exports: getCharacterLayerUrls, getCheckpointDataFromMessage, getCheckpointLabel, transformCheckpoint2026CardComponent, transformCheckpoint2026CardToRowGeneratedComponent

// Module 5559 (checkpoint/CheckpointMessageComponentUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl20 from "intl" /* 1128 */;
import Server from "Server" /* 2000 */;
import _modDef3109 from "module_3109" /* 3109 */;
import CheckpointExperiments from "CheckpointExperiments" /* 5560 */;
import CheckpointTrait from "CheckpointTrait" /* 5561 */;
import CheckpointCharacterAssets from "CheckpointCharacterAssets" /* 5562 */;
import CheckpointConstants from "CheckpointConstants" /* 5537 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
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
export const transformCheckpoint2026CardToRowGeneratedComponent = function transformCheckpoint2026CardToRowGeneratedComponent(checkpointData) {
  let character;
  let closure_1;
  let formatToPlainString;
  let intl10;
  let intl14;
  let intl15;
  let intl17;
  let intl18;
  let intl19;
  let intl4;
  let intl6;
  let intl9;
  let items;
  let lw35aH;
  let message;
  let numberFormat;
  let obj10;
  let obj12;
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
  let obj28;
  let obj29;
  let obj6;
  let obj7;
  let obj9;
  let primaryBackgroundColor;
  let secondaryBackgroundColor;
  let tertiaryBackgroundColor;
  let tmp10Result2;
  let tmp26;
  let tmp3;
  let tmp4;
  let tmp9;
  checkpointData = checkpointData.checkpointData;
  const tmp = importDefault;
  ({ message, primaryBackgroundColor, secondaryBackgroundColor, tertiaryBackgroundColor } = checkpointData);
  obj = { version: checkpointData.version, authorId: message.author.id, primaryBackgroundColor, secondaryBackgroundColor, tertiaryBackgroundColor, character: tmp4, stats: tmp9, clickable: tmp26 };
  tmp4 = undefined;
  if (null != checkpointData.character) {
    character = checkpointData.character;
    importDefault = tmp3;
    items = undefined;
    const CHECKPOINT_WEARABLE_LAYER_BACKGROUND = character(tmp2[5]).CHECKPOINT_WEARABLE_LAYER_BACKGROUND;
    const hasItem = CHECKPOINT_WEARABLE_LAYER_BACKGROUND.has(character.wearable);
    const tmp7 = character(tmp2[5]);
    const obj2 = { layerUrls: items };
    items = [];
    const arr = hasItem ? tmp7.CHECKPOINT_LAYER_BACKGROUND_WEARABLE_ORDERING : tmp7.CHECKPOINT_LAYER_DEFAULT_ORDERING;
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
  }
  tmp9 = undefined;
  if (null != checkpointData.stats) {
    let voiceDurationString;
    let toLocaleStringResult;
    let toLocaleStringResult1;
    let formatToPlainStringResult;
    const stats = checkpointData.stats;
    const _Intl = Intl;
    const self = this;
    const self2 = this;
    const obj4 = { powerLevel: numberFormat.format(stats.powerLevel), powerLevelUnits: Math.min(Math.max(Math.round(stats.powerLevelPercentile / 100 * closure_5), closure_4), closure_3), voice: obj6, messages: obj9, topGuildDaysInteracted: obj12, topGuildName: obj16, reactions: obj19, topEmojiName: obj22, daysPlayed: obj25, topGameName: obj28, topEmoji: null, topGuild: null, topGame: null };
    numberFormat = new Intl.NumberFormat(character(tmp2[7]).intl.currentLocale, { notation: "compact", compactDisplay: "short" });
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    const _Math4 = Math;
    const rounded = Math.round(stats.totalVoiceMinutes);
    if (rounded > 0) {
      const tmp10Result = character(items[6]);
      voiceDurationString = tmp10Result.getVoiceDurationString(rounded);
    } else {
      const intl = tmp10(tmp2[7]).intl;
      const obj5 = { minutes: rounded };
      voiceDurationString = intl.formatToPlainString(tmp10(tmp2[7]).t.iXLF9W, obj5);
    }
    obj6 = { text: voiceDurationString, accessibilityLabel: formatToPlainString(lw35aH, obj7) };
    const intl2 = tmp10(tmp2[7]).intl;
    formatToPlainString = intl2.formatToPlainString;
    obj7 = { duration: tmp10Result2.getAccessibleVoiceDurationString(rounded) };
    lw35aH = tmp(tmp2[8]).lw35aH;
    tmp10Result2 = character(items[6]);
    if (stats.numMessagesSent > 0) {
      const numMessagesSent = stats.numMessagesSent;
      toLocaleStringResult = numMessagesSent.toLocaleString(tmp10(tmp2[7]).intl.currentLocale);
    } else {
      const intl3 = tmp10(tmp2[7]).intl;
      const obj8 = { count: stats.numMessagesSent };
      toLocaleStringResult = intl3.formatToPlainString(tmp(tmp2[8]).foKBCN, obj8);
    }
    obj9 = { text: toLocaleStringResult, accessibilityLabel: intl4.formatToPlainString(tmp(items[8]).IdRUAC, obj10) };
    intl4 = tmp10(tmp2[7]).intl;
    obj10 = { count: stats.numMessagesSent };
    if (null == stats.topGuild) {
      const intl5 = tmp10(tmp2[7]).intl;
      const stringResult = intl5.string(tmp(items[8]).GultYJ);
      obj12 = { text: stringResult, accessibilityLabel: stringResult };
      const obj11 = { text: stringResult, accessibilityLabel: stringResult };
    } else {
      obj12 = { text: intl18.formatToPlainString(character(items[7]).t.GBLpQ8, obj13), accessibilityLabel: intl19.formatToPlainString(tmp(items[8]).MpSH8v, obj14) };
      intl18 = tmp10(tmp2[7]).intl;
      obj13 = { days: stats.topGuildNumDaysInteracted };
      intl19 = tmp10(tmp2[7]).intl;
      obj14 = { days: stats.topGuildNumDaysInteracted };
    }
    if (null == stats.topGuild) {
      const intl7 = tmp10(tmp2[7]).intl;
      const stringResult1 = intl7.string(character(items[7]).t["52UOf9"]);
      obj16 = { text: stringResult1, accessibilityLabel: stringResult1 };
      const obj15 = { text: stringResult1, accessibilityLabel: stringResult1 };
    } else {
      obj16 = { text: stats.topGuild.guildName, accessibilityLabel: intl6.formatToPlainString(tmp(items[8])["9UTJ+t"], obj17) };
      intl6 = tmp10(tmp2[7]).intl;
      obj17 = { guildName: stats.topGuild.guildName };
    }
    if (stats.numEmojisSent > 0) {
      const numEmojisSent = stats.numEmojisSent;
      toLocaleStringResult1 = numEmojisSent.toLocaleString(tmp10(tmp2[7]).intl.currentLocale);
    } else {
      const intl8 = tmp10(tmp2[7]).intl;
      const obj18 = { count: stats.numEmojisSent };
      toLocaleStringResult1 = intl8.formatToPlainString(tmp(tmp2[8]).RHYx1k, obj18);
    }
    obj19 = { text: toLocaleStringResult1, accessibilityLabel: intl9.formatToPlainString(tmp(items[8])["36qpUG"], obj20) };
    intl9 = tmp10(tmp2[7]).intl;
    obj20 = { count: stats.numEmojisSent };
    if (null == stats.topEmoji) {
      const intl11 = tmp10(tmp2[7]).intl;
      const stringResult2 = intl11.string(character(items[7]).t.lxsmBd);
      obj22 = { text: stringResult2, accessibilityLabel: stringResult2 };
      const obj21 = { text: stringResult2, accessibilityLabel: stringResult2 };
    } else {
      let result;
      if (null == stats.topEmoji.emojiId) {
        const tmpResult = tmp(items[9]);
        result = tmpResult.convertSurrogateToName(stats.topEmoji.emojiName);
      } else {
        let _HermesInternal = HermesInternal;
        result = ":" + stats.topEmoji.emojiName + ":";
      }
      obj22 = { text: result, accessibilityLabel: intl10.formatToPlainString(tmp(items[8]).CcBo8C, obj23) };
      intl10 = tmp10(tmp2[7]).intl;
      obj23 = { emojiName: stats.topEmoji.emojiName };
    }
    if (stats.totalDaysPlayed > 0) {
      const intl13 = tmp10(tmp2[7]).intl;
      const obj24 = { days: stats.totalDaysPlayed };
      formatToPlainStringResult = intl13.formatToPlainString(tmp10(tmp2[7]).t.GBLpQ8, obj24);
    } else {
      const intl12 = tmp10(tmp2[7]).intl;
      formatToPlainStringResult = intl12.string(tmp(tmp2[8]).mg1NPe);
    }
    obj25 = { text: formatToPlainStringResult, accessibilityLabel: intl14.formatToPlainString(tmp(items[8]).LYcKX7, obj26) };
    intl14 = tmp10(tmp2[7]).intl;
    obj26 = { days: stats.totalDaysPlayed };
    if (null == stats.topGame) {
      const intl16 = tmp10(tmp2[7]).intl;
      const stringResult3 = intl16.string(character(items[7]).t["5eYZiW"]);
      obj28 = { text: stringResult3, accessibilityLabel: stringResult3 };
      const obj27 = { text: stringResult3, accessibilityLabel: stringResult3 };
    } else {
      obj28 = { text: stats.topGame.applicationName, accessibilityLabel: intl15.formatToPlainString(tmp(items[8]).kLqpNC, obj29) };
      intl15 = tmp10(tmp2[7]).intl;
      obj29 = { gameName: stats.topGame.applicationName };
    }
    ({ topEmoji: obj3.topEmoji, topGuild: obj3.topGuild, topGame: obj3.topGame } = stats);
    tmp9 = obj4;
  }
  tmp26 = undefined;
  const obj31 = character(items[2]);
  const tmp25 = character;
  if (obj31.getIsCheckpointEnabled("getCheckpointClickable")) {
    const obj30 = { ariaDescription: intl17.string(tmp(items[10]).r8GEbK) };
    intl17 = tmp25(tmp2[7]).intl;
    tmp26 = obj30;
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
    const intl = intl20.intl;
    return intl.string(_modDef3109.goiR2u);
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
};
