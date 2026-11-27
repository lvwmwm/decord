// Module ID: 12919
// Function ID: 12920
// Name: SidekickStats
// Dependencies: [17, 6396, 21, 5043, 575, 12890, 1112, 3495, 7137, 12859, 10505, 2]
// Exports: default

// Module 12919 (SidekickStats)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1112 */;
import _modDef3495 from "module_3495" /* 3495 */;
import CheckpointConstants from "CheckpointConstants" /* 6396 */;
import ChatIcon from "ChatIcon" /* 7137 */;
import MicrophoneIcon from "MicrophoneIcon" /* 10505 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 12859 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 12890 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { stats: obj2, stat: obj3 };
obj2 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_40, rowGap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/friends/SidekickStats.tsx");

export default function SidekickStats(sidekick) {
  let intl2;
  let items;
  let items1;
  let items2;
  let obj6;
  sidekick = sidekick.sidekick;
  const tmp = closure_7();
  const rounded = Math.round(sidekick.numMessagesSent);
  const rounded1 = Math.round(sidekick.numVoiceMinutes);
  const obj = CheckpointNumberUtils;
  const result = obj.formatCheckpointStatNumber(rounded);
  const obj2 = CheckpointNumberUtils;
  const result1 = obj2.formatCheckpointStatNumber(rounded1);
  const intl = intl3.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj3 = { duration: intl2.formatToPlainString(_modDef3495.x7PkHm, { minutes: rounded1 }) };
  const lw35aH = _modDef3495.lw35aH;
  intl2 = intl3.intl;
  const obj4 = { style: tmp.stats, children: items1 };
  const obj5 = { accessible: true, accessibilityLabel: obj6.formatCheckpointStatAccessibilityLabel("messages", rounded), style: tmp.stat, children: items };
  const formatToPlainStringResult = formatToPlainString(lw35aH, obj3);
  items = [, ];
  obj6 = CheckpointNumberUtils;
  const obj7 = { size: "md", color: CHECKPOINT_PRIMARY };
  items[0] = hasOwnProperty(ChatIcon.ChatIcon, obj7);
  items[1] = hasOwnProperty(CheckpointStatNumberDefault, { value: result });
  items1 = [metroRequire(View, obj5), ];
  const obj8 = { accessible: true, accessibilityLabel: formatToPlainStringResult, style: tmp.stat, children: items2 };
  items2 = [, ];
  const obj9 = { size: "md", color: CHECKPOINT_PRIMARY };
  items2[0] = hasOwnProperty(MicrophoneIcon.MicrophoneIcon, obj9);
  items2[1] = hasOwnProperty(CheckpointStatNumberDefault, { value: result1 });
  items1[1] = metroRequire(View, obj8);
  return metroRequire(View, obj4);
};
