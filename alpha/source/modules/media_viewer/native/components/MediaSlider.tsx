// Module ID: 14323
// Function ID: 14324
// Name: MediaSlider
// Dependencies: [32, 19, 17, 21, 4792, 1380, 10522, 5371, 12, 671, 8373, 1113, 14324, 6911, 7089, 11778, 5383, 10908, 14325, 575, 2]
// Exports: default

// Module 14323 (MediaSlider)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4792 */;
import PlatformUtils_mod from "PlatformUtils" /* 1380 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let num;
let num2;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1, marginHorizontal: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, icon: { marginRight: 16 }, centerText: { lineHeight: num }, sliderContainer: { position: "relative", flex: 1, marginHorizontal: num2, justifyContent: "center" }, progressSliderContainer: { position: "relative", flex: 1, marginHorizontal: 0, justifyContent: "center" }, timelineBackgroundSlider: { position: "absolute", width: "100%", backgroundColor: "transparent", zIndex: 0 }, downloadProgressSlider: { position: "absolute", width: "100%", backgroundColor: "transparent", zIndex: 1 }, playbackSlider: { position: "absolute", width: "100%", zIndex: 2 } };
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
num = undefined;
if (PlatformUtils.isAndroid()) {
  num = 12;
}
PlatformUtils = PlatformUtils_mod;
num2 = 16;
if (PlatformUtils.isAndroid()) {
  num2 = 0;
}
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaSlider.tsx");

export default function MediaSlider(controls) {
  let PauseIcon;
  let alphaResult;
  let alphaResult1;
  let alphaResult2;
  let alphaResult3;
  let alphaResult4;
  let bnnNER;
  let c5;
  let c7;
  let formatToPlainString;
  let intl3;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj4;
  let stringResult;
  let tmp11Result4;
  let tmp11Result5;
  let tmp11Result6;
  let tmp3;
  let tmp7;
  controls = controls.controls;
  const paused = controls.paused;
  const setPaused = controls.setPaused;
  const onPlayPress = controls.onPlayPress;
  react = undefined;
  c5 = undefined;
  c7 = undefined;
  let ref;
  let closure_11;
  const style = controls.style;
  let tmp = ref();
  let obj = react;
  react = react.useRef(false);
  let tmp2 = onPlayPress(react.useState(0), 2);
  [tmp3, c5] = tmp2;
  const tmp4 = onPlayPress(react.useState(0), 2);
  let closure_6 = tmp4[1];
  const first = tmp4[0];
  [tmp7, c7] = onPlayPress(react.useState("transparent"), 2);
  onPlayPress(react.useState("transparent"), 2);
  ref = react.useRef(0);
  const tmp9 = onPlayPress(react.useState(0), 2);
  let closure_9 = tmp9[1];
  const first1 = tmp9[0];
  let num = 100;
  const obj2 = controls(setPaused[6]);
  if (obj2.useIsMediaViewerVideoPerfEnabled()) {
    num = 250;
  }
  const tmp14 = paused(setPaused[7])(() => {
    const obj = _modDef12;
    return obj.throttle((arg0) => {
      closure_1_5(arg0);
    }, num);
  });
  closure_11 = tmp14;
  const items = [tmp14];
  const tmp15 = paused(setPaused[7])(() => {
    let obj = _modDef12;
    return obj.throttle((arg0) => {
      closure_1_6(arg0);
      let str = "transparent";
      const tmp2 = closure_1_7;
      if (1 === arg0) {
        const obj = paused(setPaused[9])("#FFFFFF");
        const alphaResult = obj.alpha(0.2);
        str = alphaResult.hex();
      }
      tmp2(str);
    }, num);
  });
  const effect = obj.useEffect(() => () => {
    closure_1_11.cancel();
  }, items);
  const items1 = [tmp14];
  const items2 = [setPaused];
  const callback = obj.useCallback((arg0, current) => {
    closure_11(arg0);
    ref.current = current;
  }, items1);
  const subscribe = controls.useSubscribe(callback, obj.useCallback((arg0) => {
    setPaused(arg0);
  }, items2), tmp15);
  const items3 = [controls, paused];
  const items4 = [controls];
  const callback1 = obj.useCallback(() => {
    const tmp = paused;
    if (!tmp) {
      controls.pause(true);
      ref.current = true;
    }
  }, items3);
  const callback2 = obj.useCallback((arg0) => {
    controls.seek(arg0);
    const obj = controls;
    if (ref.current) {
      obj.pause(false);
      tmp2.current = false;
    }
  }, items4);
  const obj3 = { text: formatToPlainString(bnnNER, obj4) };
  const tmp11Result = controls(setPaused[10]);
  const timeFormat = tmp11Result.getTimeFormat(tmp3);
  const intl = tmp11(tmp12[11]).intl;
  formatToPlainString = intl.formatToPlainString;
  obj4 = { elapsed: tmp11Result4.formatTimeForA11yLabel(tmp3), duration: tmp11Result5.formatTimeForA11yLabel(ref.current) };
  bnnNER = tmp11(tmp12[11]).t.bnnNER;
  tmp11Result4 = controls(setPaused[12]);
  const obj5 = { style: items5, children: items6 };
  items5 = [tmp.container, style];
  tmp11Result5 = controls(setPaused[12]);
  const obj6 = {
    style: tmp.icon,
    accessibilityRole: "button",
    accessibilityLabel: stringResult,
    onPress() {
      if (paused) {
        onPlayPress();
      }
      controls.pause(!paused);
    },
    hitSlop: { top: 8, right: 8, bottom: 8, left: 8 },
    children: closure_6(PauseIcon, { size: "md", color: "white" })
  };
  const PressableOpacity = tmp11(tmp12[13]).PressableOpacity;
  const intl2 = tmp11(tmp12[11]).intl;
  const string = intl2.string;
  const t = tmp11(tmp12[11]).t;
  if (paused) {
    stringResult = string(t.RscU7I);
  } else {
    stringResult = string(t.ZcgDJX);
  }
  if (paused) {
    PauseIcon = tmp11(tmp12[14]).PlayIcon;
  } else {
    PauseIcon = tmp11(tmp12[15]).PauseIcon;
  }
  items6 = [closure_6(PressableOpacity, obj6), , , ];
  const obj7 = { style: items7, tabularNumbers: true, lineClamp: 1, color: "text-overlay-light", variant: "body-xs/medium", children: timeFormat };
  items7 = [tmp.centerText, { width: first1 }];
  items6[1] = closure_6(controls(setPaused[16]).Text, obj7);
  const obj8 = { style: tmp.sliderContainer, children: items9 };
  const obj9 = { pointerEvents: "none", style: tmp.progressSliderContainer, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items8 };
  const obj10 = { style: tmp.timelineBackgroundSlider, value: 1, minimumValue: 0, maximumValue: 1, thumbTintColor: alphaResult.hex(), minimumTrackTintColor: alphaResult1.hex(), maximumTrackTintColor: alphaResult2.hex() };
  const tmp13Result = paused(setPaused[17]);
  const obj14 = paused(setPaused[9])("#FFFFFF");
  alphaResult = obj14.alpha(0);
  const obj16 = paused(setPaused[9])("#FFFFFF");
  alphaResult1 = obj16.alpha(0.1);
  const obj18 = paused(setPaused[9])("#FFFFFF");
  alphaResult2 = obj18.alpha(0.1);
  items8 = [closure_6(tmp13Result, obj10), ];
  const obj11 = { style: tmp.downloadProgressSlider, value: first, minimumValue: 0, maximumValue: 1, thumbTintColor: alphaResult3.hex(), minimumTrackTintColor: alphaResult4.hex(), maximumTrackTintColor: tmp7 };
  const tmp13Result3 = paused(setPaused[17]);
  const obj21 = paused(setPaused[9])("#FFFFFF");
  alphaResult3 = obj21.alpha(0);
  const obj23 = paused(setPaused[9])("#FFFFFF");
  alphaResult4 = obj23.alpha(0.2);
  items8[1] = closure_6(tmp13Result3, obj11);
  items9 = [c7(c5, obj9), ];
  const obj12 = { style: tmp.playbackSlider, accessibilityLabel: intl3.string(controls(setPaused[11]).t["v//dvn"]), value: tmp3, thumbImage: paused(setPaused[18]), minimumValue: 0, maximumValue: ref.current, minimumTrackTintColor: paused(setPaused[19]).unsafe_rawColors.WHITE, maximumTrackTintColor: "transparent", onValueChange: tmp14, onSlidingStart: callback1, onSlidingComplete: callback2, accessibilityValue: obj3 };
  const tmp13Result4 = paused(setPaused[17]);
  intl3 = tmp11(tmp12[11]).intl;
  items9[1] = closure_6(tmp13Result4, obj12);
  items6[2] = c7(c5, obj8);
  const obj13 = {
    style: tmp.centerText,
    variant: "body-xs/medium",
    color: "text-overlay-light",
    tabularNumbers: true,
    lineClamp: 1,
    onLayout(nativeEvent) {
      closure_9(nativeEvent.nativeEvent.layout.width);
    },
    children: tmp11Result6.getTimeFormat(ref.current)
  };
  const Text = tmp11(tmp12[16]).Text;
  tmp11Result6 = controls(setPaused[10]);
  items6[3] = closure_6(Text, obj13);
  return c7(c5, obj5);
};
