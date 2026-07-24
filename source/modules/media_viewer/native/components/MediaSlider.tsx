// Module ID: 8329
// Function ID: 65635
// Name: num2
// Dependencies: [57, 31, 27, 33, 4130, 477, 5450, 22, 666, 4704, 4660, 1212, 8330, 8332, 4126, 7658, 8334, 689, 2]
// Exports: default

// Module 8329 (num2)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "set";
import set from "get ActivityIndicator";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1, marginHorizontal: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, icon: { marginRight: 16 } };
let num = 16;
_createForOfIteratorHelperLoose = {};
let num2;
if (set.isAndroid()) {
  num2 = 12;
}
_createForOfIteratorHelperLoose.lineHeight = num2;
_createForOfIteratorHelperLoose.centerText = _createForOfIteratorHelperLoose;
let obj1 = { position: "relative", flex: 1, marginHorizontal: null, justifyContent: "center" };
if (set.isAndroid()) {
  num = 0;
}
obj1.marginHorizontal = num;
_createForOfIteratorHelperLoose.sliderContainer = obj1;
_createForOfIteratorHelperLoose.progressSliderContainer = { position: "relative", flex: 1, marginHorizontal: 0, justifyContent: "center" };
_createForOfIteratorHelperLoose.timelineBackgroundSlider = { position: "absolute", width: "100%", backgroundColor: "transparent", zIndex: 0 };
_createForOfIteratorHelperLoose.downloadProgressSlider = { position: "absolute", width: "100%", backgroundColor: "transparent", zIndex: 1 };
_createForOfIteratorHelperLoose.playbackSlider = { position: "absolute", width: "100%", zIndex: 2 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = set.fileFinishedImporting("modules/media_viewer/native/components/MediaSlider.tsx");

export default function MediaSlider(controls) {
  let _slicedToArray;
  let closure_7;
  let dependencyMap;
  let tmp6;
  controls = controls.controls;
  const paused = controls.paused;
  ({ setPaused: dependencyMap, onPlayPress: _slicedToArray } = controls);
  const tmp = ref();
  React = React.useRef(false);
  const tmp2 = callback(React.useState(0), 2);
  const first = tmp2[0];
  let closure_5 = tmp2[1];
  const tmp4 = callback(React.useState(0), 2);
  const callback2 = tmp4[1];
  [tmp6, closure_7] = callback(React.useState("transparent"), 2);
  ref = React.useRef(0);
  const tmp8 = callback(React.useState(0), 2);
  let closure_9 = tmp8[1];
  const tmp9 = paused(5450)(() => paused(outer1_2[7]).throttle((arg0) => {
    outer1_5(arg0);
  }, 100));
  let closure_10 = tmp9;
  let closure_11 = paused(5450)(() => paused(outer1_2[7]).throttle((arg0) => {
    outer1_6(arg0);
    let str = "transparent";
    if (1 === arg0) {
      const obj = paused(outer2_2[8])("#FFFFFF");
      str = paused(outer2_2[8])("#FFFFFF").alpha(0.2).hex();
      const alphaResult = paused(outer2_2[8])("#FFFFFF").alpha(0.2);
    }
    outer1_7(str);
  }, 100));
  const items = [tmp9];
  const effect = React.useEffect(() => () => {
    outer1_10.cancel();
  }, items);
  const subscribe = controls.useSubscribe((arg0, current) => {
    tmp9(arg0);
    ref.current = current;
  }, (arg0) => {
    callback(arg0);
  }, (arg0) => {
    callback4(arg0);
  });
  const items1 = [controls, paused];
  const items2 = [controls];
  callback = React.useCallback(() => {
    if (!paused) {
      controls.pause(true);
      result.current = true;
    }
  }, items1);
  const callback1 = React.useCallback((arg0) => {
    controls.seek(arg0);
    if (ref.current) {
      controls.pause(false);
      ref.current = false;
    }
  }, items2);
  let obj = controls(4704);
  obj = { style: items3 };
  items3 = [tmp.container, controls.style];
  const timeFormat = obj.getTimeFormat(first);
  obj = { style: tmp.icon, accessibilityRole: "button" };
  const intl = controls(1212).intl;
  const string = intl.string;
  const t = controls(1212).t;
  if (paused) {
    let stringResult = string(t.RscU7I);
  } else {
    stringResult = string(t.ZcgDJX);
  }
  obj.accessibilityLabel = stringResult;
  obj.onPress = function onPress() {
    if (paused) {
      callback2();
    }
    controls.pause(!paused);
  };
  obj.hitSlop = { top: 8, right: 8, bottom: 8, left: 8 };
  if (paused) {
    let PauseIcon = tmp20(8330).PlayIcon;
  } else {
    PauseIcon = tmp20(8332).PauseIcon;
  }
  obj.children = callback2(PauseIcon, { size: "md", color: "white" });
  const items4 = [callback2(controls(4660).PressableOpacity, obj), , , ];
  const obj1 = { style: null, tabularNumbers: true, lineClamp: 1, color: "text-overlay-light", variant: "text-xs/medium" };
  const items5 = [tmp.centerText, { width: tmp8[0] }];
  obj1.style = items5;
  obj1.children = timeFormat;
  items4[1] = callback2(controls(4126).Text, obj1);
  const obj2 = { style: tmp.sliderContainer };
  const obj3 = { pointerEvents: "none", style: tmp.progressSliderContainer };
  const obj4 = { style: tmp.timelineBackgroundSlider, value: 1, minimumValue: 0, maximumValue: 1 };
  const tmp15 = callback3;
  const tmp16 = closure_5;
  const tmp17 = callback2;
  const tmp19 = callback2;
  const tmp5 = callback(React.useState("transparent"), 2);
  let obj7 = paused(666)("#FFFFFF");
  const tmp22 = paused(7658);
  obj4.thumbTintColor = obj7.alpha(0).hex();
  let alphaResult = obj7.alpha(0);
  const obj10 = paused(666)("#FFFFFF");
  obj4.minimumTrackTintColor = paused(666)("#FFFFFF").alpha(0.1).hex();
  const alphaResult1 = paused(666)("#FFFFFF").alpha(0.1);
  const obj12 = paused(666)("#FFFFFF");
  obj4.maximumTrackTintColor = paused(666)("#FFFFFF").alpha(0.1).hex();
  const items6 = [callback2(tmp22, obj4), ];
  const obj5 = { style: tmp.downloadProgressSlider, value: tmp4[0], minimumValue: 0, maximumValue: 1 };
  const alphaResult2 = paused(666)("#FFFFFF").alpha(0.1);
  const tmp23 = paused(7658);
  const obj15 = paused(666)("#FFFFFF");
  obj5.thumbTintColor = paused(666)("#FFFFFF").alpha(0).hex();
  const alphaResult3 = paused(666)("#FFFFFF").alpha(0);
  const obj17 = paused(666)("#FFFFFF");
  obj5.minimumTrackTintColor = paused(666)("#FFFFFF").alpha(0.2).hex();
  obj5.maximumTrackTintColor = tmp6;
  items6[1] = callback2(tmp23, obj5);
  obj3.children = items6;
  const items7 = [callback3(closure_5, obj3), ];
  const obj6 = { style: tmp.playbackSlider, value: first };
  const alphaResult4 = paused(666)("#FFFFFF").alpha(0.2);
  obj6.thumbImage = paused(8334);
  obj6.minimumValue = 0;
  obj6.maximumValue = ref.current;
  obj6.minimumTrackTintColor = paused(689).unsafe_rawColors.WHITE;
  obj6.maximumTrackTintColor = "transparent";
  obj6.onValueChange = tmp9;
  obj6.onSlidingStart = callback;
  obj6.onSlidingComplete = callback1;
  items7[1] = callback2(paused(7658), obj6);
  obj2.children = items7;
  items4[2] = callback3(closure_5, obj2);
  obj7 = {
    style: tmp.centerText,
    variant: "text-xs/medium",
    color: "text-overlay-light",
    tabularNumbers: true,
    lineClamp: 1,
    onLayout(nativeEvent) {
      callback3(nativeEvent.nativeEvent.layout.width);
    }
  };
  const tmp24 = paused(7658);
  obj7.children = controls(4704).getTimeFormat(ref.current);
  items4[3] = callback2(controls(4126).Text, obj7);
  obj.children = items4;
  return tmp15(tmp16, obj);
};
