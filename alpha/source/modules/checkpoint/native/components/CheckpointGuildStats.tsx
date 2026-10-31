// Module ID: 13644
// Function ID: 13645
// Name: CheckpointGuildStats
// Dependencies: [17, 6066, 21, 5014, 575, 1113, 3060, 11971, 13624, 8643, 2]
// Exports: default

// Module 13644 (CheckpointGuildStats)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import _modDef3060 from "module_3060" /* 3060 */;
import CheckpointConstants from "CheckpointConstants" /* 6066 */;
import ChatIcon from "ChatIcon" /* 8643 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11971 */;
import CheckpointTextDefault from "CheckpointText" /* 13624 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGuildStats.tsx");

export default function CheckpointGuildStats(arg0) {
  let items;
  let items1;
  let items2;
  let numMessagesSent;
  let numVoiceMinutes;
  ({ numVoiceMinutes, numMessagesSent } = arg0);
  const tmp = closure_7();
  const rounded = Math.round(numVoiceMinutes);
  const rounded1 = Math.round(numMessagesSent);
  const intl = intl3.intl;
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3060.UZbUtl, { numMinutes: rounded });
  const intl2 = intl3.intl;
  const obj = { style: tmp.stats, children: items1 };
  const stringResult = intl2.string(_modDef3060.wWKySP);
  const obj2 = { accessible: true, accessibilityLabel: "" + rounded + " " + formatToPlainStringResult.toLocaleLowerCase(), style: tmp.stat, children: items };
  items = [, ];
  const obj3 = { size: "xs", color: CHECKPOINT_PRIMARY };
  items[0] = hasOwnProperty(MicrophoneIcon.MicrophoneIcon, obj3);
  const obj4 = { variant: "experimental/mono-md/bold", style: tmp.text, children: rounded };
  items[1] = hasOwnProperty(CheckpointTextDefault, obj4);
  items1 = [metroRequire(View, obj2), ];
  const obj5 = { accessible: true, accessibilityLabel: "" + rounded1 + " " + stringResult.toLocaleLowerCase(), style: tmp.stat, children: items2 };
  items2 = [, ];
  const obj6 = { size: "xs", color: CHECKPOINT_PRIMARY };
  items2[0] = hasOwnProperty(ChatIcon.ChatIcon, obj6);
  const obj7 = { variant: "experimental/mono-md/bold", style: tmp.text, children: rounded1 };
  items2[1] = hasOwnProperty(CheckpointTextDefault, obj7);
  items1[1] = metroRequire(View, obj5);
  return metroRequire(View, obj);
};
