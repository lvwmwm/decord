// Module ID: 13006
// Function ID: 13007
// Name: CheckpointGuildStats
// Dependencies: [17, 6016, 21, 4972, 587, 558, 576, 1125, 3057, 11648, 12986, 8542, 2]

// Module 13006 (CheckpointGuildStats)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1125 */;
import _modDef3057 from "module_3057" /* 3057 */;
import CheckpointConstants from "CheckpointConstants" /* 6016 */;
import ChatIcon from "ChatIcon" /* 8542 */;
import MicrophoneIcon from "MicrophoneIcon" /* 11648 */;
import CheckpointTextDefault from "CheckpointText" /* 12986 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointGuildStats(arg0) {
  let flag;
  let items;
  let items1;
  let items2;
  let numMessagesSent;
  let numVoiceMinutes;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp18;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react;
  const cResult = obj.c(38);
  ({ numVoiceMinutes, numMessagesSent } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === numMessagesSent) {
    if (cResult[1] === numVoiceMinutes) {
      if (cResult[2] === tmp4.stat) {
        if (cResult[3] === tmp4.stats) {
          let tmp30;
          if (cResult[4] === tmp4.text) {
            tmp5 = cResult[5];
            tmp6 = cResult[6];
            tmp7 = cResult[7];
            tmp8 = cResult[8];
            tmp9 = cResult[9];
            flag = cResult[10];
            tmp10 = cResult[11];
            tmp11 = cResult[12];
          }
          const _HermesInternal = HermesInternal;
          const combined = "" + tmp8 + " " + tmp9;
          const _Symbol = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { size: "xs", color: CHECKPOINT_PRIMARY };
            const tmp33 = hasOwnProperty(ChatIcon.ChatIcon, obj2);
            cResult[23] = tmp33;
            tmp30 = tmp33;
          } else {
            tmp30 = cResult[23];
          }
          if (cResult[24] === tmp7) {
            let tmp34;
            if (cResult[25] === tmp4.text) {
              tmp34 = cResult[26];
            }
            if (cResult[27] === tmp5) {
              if (cResult[28] === tmp4.stat) {
                if (cResult[29] === flag) {
                  if (cResult[30] === combined) {
                    let tmp38;
                    if (cResult[31] === tmp34) {
                      tmp38 = cResult[32];
                    }
                    if (cResult[33] === tmp6) {
                      if (cResult[34] === tmp10) {
                        if (cResult[35] === tmp11) {
                          let tmp41;
                          if (cResult[36] === tmp38) {
                            tmp41 = cResult[37];
                          }
                          return tmp41;
                        }
                      }
                    }
                    const obj3 = { style: tmp10, children: items };
                    items = [tmp11, tmp38];
                    const tmp43 = metroRequire(tmp6, obj3);
                    cResult[33] = tmp6;
                    cResult[34] = tmp10;
                    cResult[35] = tmp11;
                    cResult[36] = tmp38;
                    cResult[37] = tmp43;
                    tmp41 = tmp43;
                  }
                }
              }
            }
            const obj4 = { accessible: flag, accessibilityLabel: combined, style: tmp4.stat, children: items1 };
            items1 = [tmp30, tmp34];
            const tmp40 = metroRequire(tmp5, obj4);
            cResult[27] = tmp5;
            cResult[28] = tmp4.stat;
            cResult[29] = flag;
            cResult[30] = combined;
            cResult[31] = tmp34;
            cResult[32] = tmp40;
            tmp38 = tmp40;
          }
          const obj5 = { variant: "experimental/mono-md/bold", style: tmp4.text, children: tmp7 };
          const tmp37 = hasOwnProperty(CheckpointTextDefault, obj5);
          cResult[24] = tmp7;
          cResult[25] = tmp4.text;
          cResult[26] = tmp37;
          tmp34 = tmp37;
        }
      }
    }
  }
  const rounded = Math.round(numVoiceMinutes);
  if (cResult[13] !== numMessagesSent) {
    const _Math = Math;
    const rounded1 = Math.round(numMessagesSent);
    cResult[13] = numMessagesSent;
    cResult[14] = rounded1;
    tmp13 = rounded1;
  } else {
    tmp13 = cResult[14];
  }
  const intl = tmp(1125).intl;
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3057.UZbUtl, { numMinutes: rounded });
  const intl2 = tmp(1125).intl;
  const stats = tmp4.stats;
  const stringResult = intl2.string(_modDef3057.wWKySP);
  const combined1 = "" + rounded + " " + formatToPlainStringResult.toLocaleLowerCase();
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { size: "xs", color: CHECKPOINT_PRIMARY };
    const tmp21 = hasOwnProperty(MicrophoneIcon.MicrophoneIcon, obj6);
    cResult[15] = tmp21;
    tmp18 = tmp21;
  } else {
    tmp18 = cResult[15];
  }
  if (cResult[16] === tmp4.text) {
    let tmp22;
    if (cResult[17] === rounded) {
      tmp22 = cResult[18];
    }
    if (cResult[19] === tmp4.stat) {
      if (cResult[20] === combined1) {
        let tmp24;
        if (cResult[21] === tmp22) {
          tmp24 = cResult[22];
        }
        const toLocaleLowerCaseResult = stringResult.toLocaleLowerCase();
        cResult[0] = numMessagesSent;
        cResult[1] = numVoiceMinutes;
        cResult[2] = tmp4.stat;
        cResult[3] = tmp4.stats;
        cResult[4] = tmp4.text;
        cResult[5] = View;
        cResult[6] = View;
        cResult[7] = tmp13;
        cResult[8] = tmp13;
        cResult[9] = toLocaleLowerCaseResult;
        cResult[10] = true;
        cResult[11] = stats;
        cResult[12] = tmp24;
        tmp11 = tmp24;
        tmp10 = stats;
        flag = true;
        tmp9 = toLocaleLowerCaseResult;
        tmp8 = tmp13;
        tmp7 = tmp13;
        tmp6 = tmp16;
        tmp5 = tmp16;
      }
    }
    const obj7 = { accessible: true, accessibilityLabel: combined1, style: tmp4.stat, children: items2 };
    items2 = [tmp18, tmp22];
    const tmp26 = metroRequire(View, obj7);
    cResult[19] = tmp4.stat;
    cResult[20] = combined1;
    cResult[21] = tmp22;
    cResult[22] = tmp26;
    tmp24 = tmp26;
  }
  const obj8 = { variant: "experimental/mono-md/bold", style: tmp4.text, children: rounded };
  const tmp23 = hasOwnProperty(CheckpointTextDefault, obj8);
  cResult[16] = tmp4.text;
  cResult[17] = rounded;
  cResult[18] = tmp23;
  tmp22 = tmp23;
}) : (function CheckpointGuildStats(arg0) {
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
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3057.UZbUtl, { numMinutes: rounded });
  const intl2 = intl3.intl;
  const obj = { style: tmp.stats, children: items1 };
  const stringResult = intl2.string(_modDef3057.wWKySP);
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
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointGuildStats.tsx");

export default tmp4;
