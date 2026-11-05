// Module ID: 13917
// Function ID: 13918
// Name: CheckpointCustomizationStat
// Dependencies: [19, 17, 13668, 6204, 21, 5143, 575, 6571, 12178, 1113, 3219, 8789, 3187, 9914, 13677, 9883, 9267, 504, 6574, 13900, 13881, 13878, 2]
// Exports: default

// Module 13917 (CheckpointCustomizationStat)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl8 from "intl" /* 1113 */;
import _modDef3187 from "module_3187" /* 3187 */;
import _modDef3219 from "module_3219" /* 3219 */;
import CheckpointConstants from "CheckpointConstants" /* 6204 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6571 */;
import CheckpointStatsUtils from "CheckpointStatsUtils" /* 6574 */;
import ChatIcon from "ChatIcon" /* 8789 */;
import CalendarIcon from "CalendarIcon" /* 9267 */;
import GameControllerIcon from "GameControllerIcon" /* 9883 */;
import ServerIcon from "ServerIcon" /* 9914 */;
import MicrophoneIcon from "MicrophoneIcon" /* 12178 */;
import EmojiSlightlySmilingFaceIcon from "EmojiSlightlySmilingFaceIcon" /* 13677 */;
import CheckpointTextDefault from "CheckpointText" /* 13878 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 13881 */;
import CheckpointTagDefault from "CheckpointTag" /* 13900 */;
import react from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 13668 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5143 */;
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
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointCustomizationStat.tsx");

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
    const obj2 = { Icon: MicrophoneIcon.MicrophoneIcon, value: totalVoiceMinutes, percentile: prop, title: intl6.string(_modDef3219["3/T12E"]) };
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
    const obj3 = { Icon: ChatIcon.ChatIcon, value: numMessagesSent, percentile: prop1, title: intl5.string(_modDef3187.wWKySP) };
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
    const obj4 = { Icon: ServerIcon.ServerIcon, value: numDaysInteracted, percentile: prop2, title: intl4.string(_modDef3219["M+a+t1"]) };
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
    const obj5 = { Icon: EmojiSlightlySmilingFaceIcon.EmojiSlightlySmilingFaceIcon, value: numEmojisSent, percentile: prop3, title: intl3.string(_modDef3219.ZTDCIv) };
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
    const obj6 = { Icon: GameControllerIcon.GameControllerIcon, value: totalGamesPlayed, percentile: prop4, title: intl2.string(_modDef3219.HM2fjf) };
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
      const obj7 = { Icon: CalendarIcon.CalendarIcon, value: totalDaysPlayed, percentile: prop5, title: intl.string(_modDef3219["4N5p4D"]) };
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
    let combined;
    const title = tmp8.title;
    ({ value, Icon } = tmp8);
    const _Math = Math;
    if (value == null) {
      value = 0;
    }
    const roundResult = round(value);
    const toLocaleStringResult = roundResult.toLocaleString(intl8.intl.currentLocale);
    const tmp2Result = CheckpointStatsUtils;
    const checkpointTopPercent = tmp2Result.getCheckpointTopPercent(tmp8.percentile);
    let formatToPlainStringResult = null;
    if (null != checkpointTopPercent) {
      const intl7 = tmp2(1113).intl;
      const obj8 = { percent: checkpointTopPercent };
      formatToPlainStringResult = intl7.formatToPlainString(_modDef3219.fOGKA4, obj8);
    }
    if (null != formatToPlainStringResult) {
      const _HermesInternal2 = HermesInternal;
      combined = "" + toLocaleStringResult + " " + title + ", " + formatToPlainStringResult;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + toLocaleStringResult + " " + title;
    }
    let tmp41 = null != formatToPlainStringResult;
    const obj9 = { style: tmp.stat, accessible: true, accessibilityLabel: combined, children: items1 };
    if (tmp41) {
      const obj10 = { children: formatToPlainStringResult.toLocaleUpperCase() };
      const tmp44 = CheckpointTagDefault;
      tmp41 = metroRequire(tmp44, obj10);
    }
    items1 = [tmp41, , ];
    const obj11 = { value: toLocaleStringResult };
    items1[1] = metroRequire(CheckpointStatNumberDefault, obj11);
    const obj12 = { style: tmp.label, children: items2 };
    const obj13 = { size: "xs", color: CHECKPOINT_PRIMARY };
    items2 = [metroRequire(Icon, obj13), ];
    const obj14 = { variant: "heading-xs/semibold", style: tmp.labelText, children: title.toLocaleUpperCase() };
    const tmp48 = CheckpointTextDefault;
    items2[1] = metroRequire(tmp48, obj14);
    items1[2] = metroImportDefault(View, obj12);
    return metroImportDefault(View, obj9);
  }
};
