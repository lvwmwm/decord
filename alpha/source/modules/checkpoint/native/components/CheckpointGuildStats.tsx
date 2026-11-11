// Module ID: 14394
// Function ID: 14395
// Name: CheckpointGuildStats
// Dependencies: [17, 6314, 21, 5243, 575, 14387, 12958, 14164, 8004, 2]
// Exports: default

// Module 14394 (CheckpointGuildStats)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import ChatIcon from "ChatIcon" /* 8004 */;
import MicrophoneIcon from "MicrophoneIcon" /* 12958 */;
import CheckpointTextDefault from "CheckpointText" /* 14164 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 14387 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { stats: obj2, stat: obj3, text: { fontSize: 16, lineHeight: 20 } };
obj2 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_7 = createStyles(obj);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGuildStats.tsx");

export default function CheckpointGuildStats(arg0) {
  let items;
  let items1;
  let items2;
  let numMessagesSent;
  let numVoiceMinutes;
  let obj5;
  let obj9;
  ({ numVoiceMinutes, numMessagesSent } = arg0);
  const tmp = closure_7();
  const rounded = Math.round(numVoiceMinutes);
  const rounded1 = Math.round(numMessagesSent);
  const obj = CheckpointNumberUtils;
  const result = obj.formatCheckpointStatNumber(rounded);
  const obj3 = { style: tmp.stats, children: items1 };
  const obj4 = { accessible: true, accessibilityLabel: obj5.formatCheckpointStatAccessibilityLabel("voice", rounded), style: tmp.stat, children: items };
  const obj2 = CheckpointNumberUtils;
  const result1 = obj2.formatCheckpointStatNumber(rounded1);
  items = [, ];
  obj5 = CheckpointNumberUtils;
  const obj6 = { size: "xs", color: CHECKPOINT_PRIMARY };
  items[0] = hasOwnProperty(MicrophoneIcon.MicrophoneIcon, obj6);
  const obj7 = { variant: "mono-md/bold", style: tmp.text, children: result };
  items[1] = hasOwnProperty(CheckpointTextDefault, obj7);
  items1 = [metroRequire(View, obj4), ];
  const obj8 = { accessible: true, accessibilityLabel: obj9.formatCheckpointStatAccessibilityLabel("messages", rounded1), style: tmp.stat, children: items2 };
  items2 = [, ];
  const obj10 = { size: "xs", color: CHECKPOINT_PRIMARY };
  obj9 = CheckpointNumberUtils;
  items2[0] = hasOwnProperty(ChatIcon.ChatIcon, obj10);
  const obj11 = { variant: "mono-md/bold", style: tmp.text, children: result1 };
  items2[1] = hasOwnProperty(CheckpointTextDefault, obj11);
  items1[1] = metroRequire(View, obj8);
  return metroRequire(View, obj3);
};
