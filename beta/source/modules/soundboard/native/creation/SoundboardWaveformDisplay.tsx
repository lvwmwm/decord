// Module ID: 19806
// Function ID: 19807
// Name: SoundboardWaveformDisplay
// Dependencies: [19, 17, 12824, 21, 4913, 575, 206, 13120, 2]
// Exports: default

// Module 19806 (SoundboardWaveformDisplay)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import VoiceMessageConstants from "VoiceMessageConstants" /* 12824 */;
import downsampleWaveformDefault from "downsampleWaveform" /* 13120 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const WAVEFORM_WAVE_MAX_VALUE = VoiceMessageConstants.WAVEFORM_WAVE_MAX_VALUE;
let jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "row", alignItems: "center" }, bar: obj2, barActive: { backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE }, barTrimmedOut: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED } };
obj2 = { flex: 1, marginHorizontal: 1, borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
({ backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE });
({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED });
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/soundboard/native/creation/SoundboardWaveformDisplay.tsx");

export default function SoundboardWaveformDisplay(waveform) {
  let bar;
  waveform = waveform.waveform;
  let num = waveform.barCount;
  if (num === undefined) {
    num = 32;
  }
  let num2 = waveform.height;
  if (num2 === undefined) {
    num2 = 32;
  }
  let num3 = waveform.trimStartRatio;
  if (num3 === undefined) {
    num3 = 0;
  }
  let num4 = waveform.trimEndRatio;
  if (num4 === undefined) {
    num4 = 1;
  }
  let memo;
  const tmp = memo();
  jsx = tmp;
  let items = [waveform, num];
  memo = num2.useMemo(function() {
    let fillResult;
    function decodeWaveform(waveform) {
      if (null == waveform) {
        return [];
      } else {
        try {
          const _Array = Array;
          const obj = waveform(num[6]);
          return from(obj.toByteArray(waveform));
        } catch (err) {
          return [];
        }
      }
    }
    const arr = decodeWaveform(waveform);
    if (0 === arr.length) {
      let _Array = Array;
      const self = this;
      const self2 = this;
      const array = new Array(num);
      fillResult = array.fill(0);
    } else {
      fillResult = arr;
      if (arr.length > num) {
        fillResult = downsampleWaveformDefault(arr, tmp);
      }
    }
    return fillResult;
  }, items);
  const items1 = [tmp.container, { height: num2 }];
  return <num3 style={items1}>{memo.map((item, index) => {
    num = 0;
    if (memo.length > 1) {
      num = index / (memo.length - 1);
    }
    const items = [bar.bar, , ];
    if (num >= num3) {
      let barTrimmedOut;
      if (num <= num4) {
        barTrimmedOut = tmp3.barActive;
      }
      const obj = { style: items };
      items[1] = barTrimmedOut;
      const _Math = Math;
      items[2] = { height: Math.max(2, item / WAVEFORM_WAVE_MAX_VALUE * 2) };
      const obj2 = { height: Math.max(2, item / WAVEFORM_WAVE_MAX_VALUE * 2) };
      return tmp(tmp2, obj, index);
    }
    barTrimmedOut = tmp3.barTrimmedOut;
  })}</num3>;
};
