// Module ID: 8278
// Function ID: 65358
// Name: num2
// Dependencies: []
// Exports: default

// Module 8278 (num2)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: { "Bool(false)": "y", "Bool(false)": "isArray", "Bool(false)": "exports", "Bool(false)": "code", "Bool(false)": "y" }, icon: { marginRight: 16 } };
let num = 16;
obj = {};
const tmp2 = arg1(dependencyMap[3]);
let num2;
if (obj4.isAndroid()) {
  num2 = 12;
}
obj.lineHeight = num2;
obj.centerText = obj;
const obj1 = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true };
const obj4 = arg1(dependencyMap[5]);
if (obj6.isAndroid()) {
  num = 0;
}
obj1.marginHorizontal = num;
obj.sliderContainer = obj1;
obj.progressSliderContainer = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null };
obj.timelineBackgroundSlider = {};
obj.downloadProgressSlider = {};
obj.playbackSlider = { -9223372036854775808: true, 0: true, 0: true };
let closure_8 = obj.createStyles(obj);
const obj6 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/media_viewer/native/components/MediaSlider.tsx");

export default function MediaSlider(controls) {
  let tmp6;
  controls = controls.controls;
  const arg1 = controls;
  const paused = controls.paused;
  const importDefault = paused;
  ({ setPaused: closure_2, onPlayPress: closure_3 } = controls);
  const tmp = callback4();
  const React = React.useRef(false);
  const tmp2 = callback(React.useState(0), 2);
  const first = tmp2[0];
  let closure_5 = tmp2[1];
  const tmp4 = callback(React.useState(0), 2);
  const callback2 = tmp4[1];
  [tmp6, closure_7] = callback(React.useState("transparent"), 2);
  const ref = React.useRef(0);
  const callback4 = ref;
  const tmp8 = callback(React.useState(0), 2);
  let closure_9 = tmp8[1];
  const tmp9 = importDefault(dependencyMap[6])(() => paused(closure_2[7]).throttle((arg0) => {
    callback(arg0);
  }, 100));
  let closure_11 = importDefault(dependencyMap[6])(() => paused(closure_2[7]).throttle((arg0) => {
    callback2(arg0);
    let str = "transparent";
    if (1 === arg0) {
      const obj = callback(closure_2[8])("#FFFFFF");
      str = callback(closure_2[8])("#FFFFFF").alpha(0.2).hex();
      const alphaResult = callback(closure_2[8])("#FFFFFF").alpha(0.2);
    }
    closure_7(str);
  }, 100));
  const items = [tmp9];
  const effect = React.useEffect(() => () => {
    closure_10.cancel();
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
  const callback = React.useCallback(() => {
    if (!paused) {
      controls.pause(true);
      closure_4.current = true;
    }
  }, items1);
  const callback1 = React.useCallback((arg0) => {
    controls.seek(arg0);
    if (ref.current) {
      controls.pause(false);
      ref.current = false;
    }
  }, items2);
  let obj = arg1(dependencyMap[9]);
  obj = { style: items3 };
  const items3 = [tmp.container, controls.style];
  const timeFormat = obj.getTimeFormat(first);
  obj = { style: tmp.icon, accessibilityRole: "button" };
  const intl = arg1(dependencyMap[11]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[11]).t;
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
  obj.hitSlop = {};
  if (paused) {
    let PauseIcon = tmp20(tmp21[12]).PlayIcon;
  } else {
    PauseIcon = tmp20(tmp21[13]).PauseIcon;
  }
  obj.children = callback2(PauseIcon, { accessibilityRole: null, "": "sm" });
  const items4 = [callback2(arg1(dependencyMap[10]).PressableOpacity, obj), , , ];
  const obj1 = { ./dist/is-chrome: "guild_id", dup: "guildId", ./dist/is-ios: "guildId", dup: "guildId", width: "guildId" };
  const items5 = [tmp.centerText, { width: tmp8[0] }];
  obj1.style = items5;
  obj1.children = timeFormat;
  items4[1] = callback2(arg1(dependencyMap[14]).Text, obj1);
  const obj2 = { style: tmp.sliderContainer };
  const obj3 = { pointerEvents: "none", style: tmp.progressSliderContainer };
  const obj4 = { style: tmp.timelineBackgroundSlider };
  const tmp15 = callback3;
  const tmp16 = closure_5;
  const tmp17 = callback2;
  const tmp19 = callback2;
  const tmp5 = callback(React.useState("transparent"), 2);
  let obj7 = importDefault(dependencyMap[8])("#FFFFFF");
  const tmp22 = importDefault(dependencyMap[15]);
  obj4.thumbTintColor = obj7.alpha(0).hex();
  const alphaResult = obj7.alpha(0);
  const obj10 = importDefault(dependencyMap[8])("#FFFFFF");
  obj4.minimumTrackTintColor = importDefault(dependencyMap[8])("#FFFFFF").alpha(0.1).hex();
  const alphaResult1 = importDefault(dependencyMap[8])("#FFFFFF").alpha(0.1);
  const obj12 = importDefault(dependencyMap[8])("#FFFFFF");
  obj4.maximumTrackTintColor = importDefault(dependencyMap[8])("#FFFFFF").alpha(0.1).hex();
  const items6 = [callback2(tmp22, obj4), ];
  const obj5 = { style: tmp.downloadProgressSlider, value: tmp4[0], minimumValue: 0, maximumValue: 1 };
  const alphaResult2 = importDefault(dependencyMap[8])("#FFFFFF").alpha(0.1);
  const tmp23 = importDefault(dependencyMap[15]);
  const obj15 = importDefault(dependencyMap[8])("#FFFFFF");
  obj5.thumbTintColor = importDefault(dependencyMap[8])("#FFFFFF").alpha(0).hex();
  const alphaResult3 = importDefault(dependencyMap[8])("#FFFFFF").alpha(0);
  const obj17 = importDefault(dependencyMap[8])("#FFFFFF");
  obj5.minimumTrackTintColor = importDefault(dependencyMap[8])("#FFFFFF").alpha(0.2).hex();
  obj5.maximumTrackTintColor = tmp6;
  items6[1] = callback2(tmp23, obj5);
  obj3.children = items6;
  const items7 = [callback3(closure_5, obj3), ];
  const obj6 = { style: tmp.playbackSlider, value: first };
  const alphaResult4 = importDefault(dependencyMap[8])("#FFFFFF").alpha(0.2);
  obj6.thumbImage = importDefault(dependencyMap[16]);
  obj6.minimumValue = 0;
  obj6.maximumValue = ref.current;
  obj6.minimumTrackTintColor = importDefault(dependencyMap[17]).unsafe_rawColors.WHITE;
  obj6.maximumTrackTintColor = "transparent";
  obj6.onValueChange = tmp9;
  obj6.onSlidingStart = callback;
  obj6.onSlidingComplete = callback1;
  items7[1] = callback2(importDefault(dependencyMap[15]), obj6);
  obj2.children = items7;
  items4[2] = callback3(closure_5, obj2);
  obj7 = {
    style: tmp.centerText,
    onLayout(nativeEvent) {
      callback3(nativeEvent.nativeEvent.layout.width);
    }
  };
  const tmp24 = importDefault(dependencyMap[15]);
  obj7.children = arg1(dependencyMap[9]).getTimeFormat(ref.current);
  items4[3] = callback2(arg1(dependencyMap[14]).Text, obj7);
  obj.children = items4;
  return tmp15(tmp16, obj);
};
