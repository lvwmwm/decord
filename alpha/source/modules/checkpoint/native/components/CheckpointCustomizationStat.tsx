// Module ID: 14416
// Function ID: 14417
// Name: CheckpointCustomizationStat
// Dependencies: [19, 17, 14150, 6314, 21, 5243, 575, 6681, 12958, 1113, 3269, 8004, 3237, 10876, 14174, 7374, 8391, 504, 14387, 6684, 14396, 14377, 14164, 2]
// Exports: default

// Module 14416 (CheckpointCustomizationStat)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _modDef3237 from "module_3237" /* 3237 */;
import _modDef3269 from "module_3269" /* 3269 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6681 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6684 */;
import GameControllerIcon from "GameControllerIcon" /* 7374 */;
import ChatIcon from "ChatIcon" /* 8004 */;
import CalendarIcon from "CalendarIcon" /* 8391 */;
import ServerIcon from "ServerIcon" /* 10876 */;
import MicrophoneIcon from "MicrophoneIcon" /* 12958 */;
import CheckpointTextDefault from "CheckpointText" /* 14164 */;
import EmojiSlightlySmilingFaceIcon from "EmojiSlightlySmilingFaceIcon" /* 14174 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 14377 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 14387 */;
import CheckpointTagDefault from "CheckpointTag" /* 14396 */;
import react from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 14150 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { stat: { maxWidth: 144, alignItems: "flex-start" }, label: obj2, labelText: { flexShrink: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointCustomizationStat.tsx");

export default function CheckpointCustomizationStat(customizationOption) {
  let Icon;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let numDaysInteracted;
  let numEmojisSent;
  let numMessagesSent;
  let prop;
  let prop1;
  let prop2;
  let prop3;
  let prop4;
  let prop5;
  let stats;
  let tmp8;
  let totalDaysPlayed;
  let totalGamesPlayed;
  let totalVoiceMinutes;
  let value;
  customizationOption = customizationOption.customizationOption;
  const tmp = closure_8();
  const items = [CheckpointStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => stats.stats);
  if (CheckpointCustomizationUtils.CheckpointCustomizationOption.FACE === customizationOption) {
    const obj2 = { Icon: MicrophoneIcon.MicrophoneIcon, statType: "voice", value: totalVoiceMinutes, percentile: prop, title: intl6.string(_modDef3269["3/T12E"]) };
    totalVoiceMinutes = undefined;
    if (stateFromStores != null) {
      const voice = stateFromStores.voice;
      if (voice != null) {
        totalVoiceMinutes = voice.totalVoiceMinutes;
      }
    }
    prop = undefined;
    if (stateFromStores != null) {
      const voice2 = stateFromStores.voice;
      if (voice2 != null) {
        prop = voice2.totalVoiceMinutesPercentile;
      }
    }
    intl6 = tmp2(1113).intl;
    tmp8 = obj2;
  } else if (CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT === customizationOption) {
    const obj3 = { Icon: ChatIcon.ChatIcon, statType: "messages", value: numMessagesSent, percentile: prop1, title: intl5.string(_modDef3237.wWKySP) };
    numMessagesSent = undefined;
    if (stateFromStores != null) {
      const messages = stateFromStores.messages;
      if (messages != null) {
        numMessagesSent = messages.numMessagesSent;
      }
    }
    prop1 = undefined;
    if (stateFromStores != null) {
      const messages2 = stateFromStores.messages;
      if (messages2 != null) {
        prop1 = messages2.numMessagesSentPercentile;
      }
    }
    intl5 = tmp2(1113).intl;
    tmp8 = obj3;
  } else if (CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT === customizationOption) {
    const obj4 = { Icon: ServerIcon.ServerIcon, statType: "topServerDays", value: numDaysInteracted, percentile: prop2, title: intl4.string(_modDef3269["M+a+t1"]) };
    numDaysInteracted = undefined;
    if (stateFromStores != null) {
      const guilds = stateFromStores.guilds;
      if (guilds != null) {
        const first = guilds.guilds[0];
        if (first != null) {
          numDaysInteracted = first.numDaysInteracted;
        }
      }
    }
    prop2 = undefined;
    if (stateFromStores != null) {
      const guilds2 = stateFromStores.guilds;
      if (guilds2 != null) {
        const first1 = guilds2.guilds[0];
        if (first1 != null) {
          prop2 = first1.numDaysInteractedPercentile;
        }
      }
    }
    intl4 = tmp2(1113).intl;
    tmp8 = obj4;
  } else if (CheckpointCustomizationUtils.CheckpointCustomizationOption.SHOES === customizationOption) {
    const obj5 = { Icon: EmojiSlightlySmilingFaceIcon.EmojiSlightlySmilingFaceIcon, statType: "emoji", value: numEmojisSent, percentile: prop3, title: intl3.string(_modDef3269.ZTDCIv) };
    numEmojisSent = undefined;
    if (stateFromStores != null) {
      const emojis = stateFromStores.emojis;
      if (emojis != null) {
        numEmojisSent = emojis.numEmojisSent;
      }
    }
    prop3 = undefined;
    if (stateFromStores != null) {
      const emojis2 = stateFromStores.emojis;
      if (emojis2 != null) {
        prop3 = emojis2.numEmojisSentPercentile;
      }
    }
    intl3 = tmp2(1113).intl;
    tmp8 = obj5;
  } else if (CheckpointCustomizationUtils.CheckpointCustomizationOption.WEARABLE === customizationOption) {
    const obj6 = { Icon: GameControllerIcon.GameControllerIcon, statType: "games", value: totalGamesPlayed, percentile: prop4, title: intl2.string(_modDef3269.HM2fjf) };
    totalGamesPlayed = undefined;
    if (stateFromStores != null) {
      const games3 = stateFromStores.games;
      if (games3 != null) {
        totalGamesPlayed = games3.totalGamesPlayed;
      }
    }
    prop4 = undefined;
    if (stateFromStores != null) {
      const games4 = stateFromStores.games;
      if (games4 != null) {
        prop4 = games4.totalGamesPlayedPercentile;
      }
    }
    intl2 = tmp2(1113).intl;
    tmp8 = obj6;
  } else {
    tmp8 = null;
    if (CheckpointCustomizationUtils.CheckpointCustomizationOption.AURA === customizationOption) {
      const obj7 = { Icon: CalendarIcon.CalendarIcon, statType: "gameDays", value: totalDaysPlayed, percentile: prop5, title: intl.string(_modDef3269["4N5p4D"]) };
      totalDaysPlayed = undefined;
      if (stateFromStores != null) {
        const games = stateFromStores.games;
        if (games != null) {
          totalDaysPlayed = games.totalDaysPlayed;
        }
      }
      prop5 = undefined;
      if (stateFromStores != null) {
        const games2 = stateFromStores.games;
        if (games2 != null) {
          prop5 = games2.totalDaysPlayedPercentile;
        }
      }
      intl = tmp2(1113).intl;
      tmp8 = obj7;
    }
  }
  if (null == tmp8) {
    return null;
  } else {
    const title = tmp8.title;
    ({ value, Icon } = tmp8);
    const _Math = Math;
    if (value == null) {
      value = 0;
    }
    const roundResult = round(value);
    const tmp2Result = CheckpointNumberUtils;
    const result = tmp2Result.formatCheckpointStatNumber(roundResult);
    const tmp2Result3 = CheckpointStatsUtils;
    const checkpointTopPercent = tmp2Result3.getCheckpointTopPercent(tmp8.percentile);
    let formatToPlainStringResult = null;
    if (null != checkpointTopPercent) {
      const intl7 = tmp2(1113).intl;
      const obj8 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl7.formatToPlainString(_modDef3269.fOGKA4, obj8);
    }
    const tmp2Result4 = CheckpointNumberUtils;
    const result1 = tmp2Result4.formatCheckpointStatAccessibilityLabel(tmp8.statType, roundResult);
    let formatToPlainStringResult1 = result1;
    if (null != formatToPlainStringResult) {
      const intl8 = tmp2(1113).intl;
      const obj9 = { stat: result1, percentile: formatToPlainStringResult };
      formatToPlainStringResult1 = intl8.formatToPlainString(_modDef3269.OxxTjh, obj9);
    }
    let tmp41 = null != formatToPlainStringResult;
    const obj10 = { style: tmp.stat, accessible: true, accessibilityLabel: formatToPlainStringResult1, children: items1 };
    if (tmp41) {
      const obj11 = { children: formatToPlainStringResult.toLocaleUpperCase() };
      const tmp44 = CheckpointTagDefault;
      tmp41 = metroRequire(tmp44, obj11);
    }
    items1 = [tmp41, , ];
    const obj12 = { value: result };
    items1[1] = metroRequire(CheckpointStatNumberDefault, obj12);
    const obj13 = { style: tmp.label, children: items2 };
    const obj14 = { size: "xs", color: CHECKPOINT_PRIMARY };
    items2 = [metroRequire(Icon, obj14), ];
    const obj15 = { variant: "heading-xs/semibold", style: tmp.labelText, children: title.toLocaleUpperCase() };
    const tmp48 = CheckpointTextDefault;
    items2[1] = metroRequire(tmp48, obj15);
    items1[2] = metroImportDefault(View, obj13);
    return metroImportDefault(View, obj10);
  }
};
