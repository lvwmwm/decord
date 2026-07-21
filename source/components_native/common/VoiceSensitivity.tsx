// Module ID: 10703
// Function ID: 83331
// Name: VoiceSensitivity
// Dependencies: []
// Exports: default

// Module 10703 (VoiceSensitivity)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const AppStates = arg1(dependencyMap[7]).AppStates;
const NativePermissionTypes = arg1(dependencyMap[8]).NativePermissionTypes;
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = { sensitivity: { "Bool(false)": "help_article", "Bool(false)": "message" }, sensitivityBar: {} };
obj = { "Bool(false)": "MicrophoneIcon", "Bool(false)": "png", "Bool(false)": true, "Bool(false)": "/assets/images/native/icons/voice_calls/light_theme", "Bool(false)": 24, "Bool(false)": 24, "Bool(false)": null, backgroundColor: importDefault(dependencyMap[11]).unsafe_rawColors.WHITE };
obj.sensitivityFill = obj;
obj.sensitivityCommon = {};
const tmp2 = arg1(dependencyMap[9]);
obj.sensitivityMin = { backgroundColor: importDefault(dependencyMap[11]).unsafe_rawColors.YELLOW_300 };
const obj1 = { backgroundColor: importDefault(dependencyMap[11]).unsafe_rawColors.YELLOW_300 };
obj.sensitivityMax = { backgroundColor: importDefault(dependencyMap[11]).unsafe_rawColors.GREEN_360 };
const obj3 = { flex: 1 };
const obj2 = { backgroundColor: importDefault(dependencyMap[11]).unsafe_rawColors.GREEN_360 };
obj3.backgroundColor = arg1(dependencyMap[12]).hexWithOpacity(importDefault(dependencyMap[11]).unsafe_rawColors.PRIMARY_400, 0.6);
obj.sensitivityDefault = obj3;
const obj7 = arg1(dependencyMap[12]);
obj.sensitivitySpeaking = { flex: 1, backgroundColor: importDefault(dependencyMap[11]).unsafe_rawColors.GREEN_360 };
obj.sensitivitySlider = {};
let closure_14 = obj.createStyles(obj);
const obj4 = { flex: 1, backgroundColor: importDefault(dependencyMap[11]).unsafe_rawColors.GREEN_360 };
const result = arg1(dependencyMap[23]).fileFinishedImporting("components_native/common/VoiceSensitivity.tsx");

export default function VoiceSensitivity(auto) {
  let tmp14;
  auto = auto.auto;
  const arg1 = auto;
  const importDefault = auto.onThresholdChange;
  const tmp = callback3();
  const sum = auto.threshold + 100;
  const ref = React.useRef(null);
  const ref1 = React.useRef(null);
  const tmp6 = callback(React.useState(currentUserSpeaking.isCurrentUserSpeaking()), 2);
  const first = tmp6[0];
  const dependencyMap = first;
  let closure_3 = tmp6[1];
  const width = importDefault(dependencyMap[13])().width;
  let callback = width;
  let obj = arg1(dependencyMap[14]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => state.getState(), []);
  const React = stateFromStores;
  const tmp9 = callback(React.useState(0), 2);
  const first1 = tmp9[0];
  const View = first1;
  let closure_7 = tmp9[1];
  const tmp11 = callback(React.useState(sum), 2);
  const first2 = tmp11[0];
  const currentUserSpeaking = first2;
  closure_9 = tmp11[1];
  const ref2 = React.useRef(null);
  [tmp14, closure_10] = callback(React.useState(first2 / 100), 2);
  const tmp15 = callback(React.useState(width * (1 - first1 / -100)), 2);
  let closure_11 = tmp15[1];
  const items1 = [auto, first2];
  const effect = React.useEffect(() => {
    if (!auto) {
      lib(first2 / 100);
    }
  }, items1);
  const items2 = [auto, first1, width];
  const effect1 = React.useEffect(() => {
    if (!auto) {
      callback3(width * (1 - first1 / -100));
    }
  }, items2);
  callback = React.useCallback((arg0, arg1) => {
    callback(arg1);
    callback2(arg0);
  }, []);
  const items3 = [callback, stateFromStores];
  const callback1 = React.useCallback((arg0) => {
    state(arg0);
  }, []);
  const effect2 = React.useEffect(() => {
    function _listenOnlyIfWeHavePermission() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback2(tmp);
      const _listenOnlyIfWeHavePermission = obj;
      return obj(...arguments);
    }
    if (stateFromStores === lib.ACTIVE) {
      let closure_0 = false;
      function listenOnlyIfWeHavePermission() {
        return _listenOnlyIfWeHavePermission(...arguments);
      }();
      return () => {
        const callback = true;
        const mediaEngine = mediaEngine.getMediaEngine();
        mediaEngine.removeListener(callback(closure_2[16]).MediaEngineEvent.VoiceActivity, closure_12);
      };
    }
  }, items3);
  const callback2 = React.useRef(false);
  const callback3 = React.useRef(false);
  let closure_15 = React.useRef(null);
  const items4 = [auto, first];
  const effect3 = React.useEffect(() => {
    if (ref.current) {
      if (auto) {
        if (tmp3.current) {
          if (first) {
            if (null != tmp5.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(ref2.current);
              ref2.current = null;
            }
            const AccessibilityAnnouncer = auto(first[17]).AccessibilityAnnouncer;
            const intl = auto(first[18]).intl;
            AccessibilityAnnouncer.announce(intl.string(auto(first[18]).t.haLKZ0));
          } else {
            const _setTimeout = setTimeout;
            tmp5.current = setTimeout(() => {
              closure_15.current = null;
              const AccessibilityAnnouncer = callback(closure_2[17]).AccessibilityAnnouncer;
              const intl = callback(closure_2[18]).intl;
              AccessibilityAnnouncer.announce(intl.string(callback(closure_2[18]).t.X2hJL7));
            }, 1000);
          }
          return () => {
            if (null != ref.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(ref.current);
              ref.current = null;
            }
          };
        }
      } else {
        tmp3.current = false;
      }
    } else {
      ref.current = true;
    }
  }, items4);
  if (auto) {
    obj = {};
    obj = { -9223372036854775808: "png", 0: true, 0: "/assets/images/native/icons/voice_calls/light_theme", 0: 24, 9223372036854775807: 24, 9223372036854775807: null };
    const intl = arg1(dependencyMap[18]).intl;
    obj.aria-label = intl.string(arg1(dependencyMap[18]).t.yZcOjo);
    let num5 = 0;
    if (first) {
      num5 = 100;
    }
    obj.aria-valuenow = num5;
    const intl2 = arg1(dependencyMap[18]).intl;
    const string = intl2.string;
    const t = arg1(dependencyMap[18]).t;
    if (first) {
      let stringResult = string(t.haLKZ0);
    } else {
      stringResult = string(t.X2hJL7);
    }
    obj.aria-valuetext = stringResult;
    obj.onAccessibilityFocus = function onAccessibilityFocus() {
      closure_14.current = true;
    };
    obj.onAccessibilityBlur = function onAccessibilityBlur() {
      closure_14.current = false;
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref2.current);
        ref2.current = null;
      }
    };
    obj.style = tmp.sensitivity;
    const obj1 = { style: tmp.sensitivityBar };
    const obj2 = {};
    const items5 = [tmp.sensitivityCommon, first ? tmp.sensitivitySpeaking : tmp.sensitivityDefault];
    obj2.style = items5;
    obj1.children = callback(View, obj2);
    obj.children = callback(View, obj1);
    const items6 = [callback(arg1(dependencyMap[19]).AccessibilityFocusView, obj), ];
    const obj3 = { inset: true };
    const intl3 = arg1(dependencyMap[18]).intl;
    obj3.children = intl3.string(arg1(dependencyMap[18]).t.W3K5Im);
    items6[1] = callback(arg1(dependencyMap[20]).FormHint, obj3);
    obj.children = items6;
    return callback2(View, obj);
  } else {
    const obj4 = { style: tmp.sensitivity };
    const obj5 = { style: tmp.sensitivityBar };
    const obj6 = { ref };
    const items7 = [, , ];
    ({ sensitivityCommon: arr6[0], sensitivityMin: arr6[1] } = tmp);
    const obj7 = { flex: tmp14 };
    items7[2] = obj7;
    obj6.style = items7;
    const items8 = [callback(View, obj6), ];
    const obj8 = { ref: ref1 };
    const items9 = [, , ];
    ({ sensitivityCommon: arr8[0], sensitivityMax: arr8[1] } = tmp);
    const obj9 = { flex: 1 - tmp14 };
    items9[2] = obj9;
    obj8.style = items9;
    items8[1] = callback(View, obj8);
    obj5.children = items8;
    const items10 = [callback2(View, obj5), , ];
    let obj10 = { ref: ref2 };
    const items11 = [tmp.sensitivityFill, ];
    const obj11 = { left: tmp15[0] };
    items11[1] = obj11;
    obj10.style = items11;
    items10[1] = callback(View, obj10);
    const obj12 = {
      "Bool(false)": 410124289,
      "Bool(false)": 402653184,
      "Bool(false)": 16777216,
      "Bool(false)": 37836098,
      "Bool(false)": 20302848,
      "Bool(false)": -747089664,
      style: tmp.sensitivitySlider,
      value: sum,
      onValueChange: callback1,
      onSlidingComplete: function handleSlidingComplete(arg0) {
          onThresholdChange(-1 * (100 - arg0));
        }
    };
    obj10 = arg1(dependencyMap[22]);
    let fn;
    if (obj10.isAndroid()) {
      fn = () => true;
    }
    obj12.onResponderGrant = fn;
    items10[2] = callback(importDefault(dependencyMap[21]), obj12);
    obj4.children = items10;
    return callback2(View, obj4);
  }
  const tmp13 = callback(React.useState(first2 / 100), 2);
};
