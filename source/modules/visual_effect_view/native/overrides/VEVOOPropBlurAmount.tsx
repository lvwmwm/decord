// Module ID: 14597
// Function ID: 109984
// Dependencies: []

// Module 14597
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ getVisualEffectViewOverrides: closure_5, setVisualEffectViewOverides: closure_6 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const tmp2 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ enabledSwitchStyle: { alignSelf: "flex-start" } });
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function VEVOOPropBlurAmount() {
  const tmp2 = callback2(importAllResult.useState(false), 2);
  const first = tmp2[0];
  let callback = tmp2[1];
  const tmp4 = callback2(importAllResult.useState(callback3().blurAmountOverride), 2);
  const first1 = tmp4[0];
  const importDefault = first1;
  let closure_2 = tmp4[1];
  const tmp = callback4();
  callback = importAllResult.useCallback((arg0) => {
    if (null != arg0) {
      callback2(arg0);
    }
    const obj = {};
    const merged = Object.assign(callback3());
    obj["blurAmountOverride"] = arg0;
    callback4(obj);
  }, []);
  const callback2 = callback;
  let obj = {};
  let toFixedResult;
  if (null != first1) {
    toFixedResult = first1.toFixed(3);
  }
  let str = "";
  if (null != toFixedResult) {
    str = toFixedResult;
  }
  obj.label = "Blur Amount " + str;
  obj.leadingStyle = tmp.enabledSwitchStyle;
  obj = {
    value: first,
    onValueChange(arg0) {
      callback(arg0);
      let tmp3;
      if (arg0) {
        tmp3 = first1;
      }
      callback(tmp3);
    }
  };
  obj.leading = jsx(callback(closure_2[6]).FormSwitch, obj);
  const ref = importAllResult.useRef(first1);
  const tmp7 = jsx;
  obj.subLabel = jsx(importDefault(closure_2[7]), { disabled: !first, disabledOpacity: !first, initialValue: importAllResult.useRef(first1), onValueChange: callback });
  obj.disabled = !first;
  return tmp7(callback(closure_2[5]).FormRow, obj);
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropBlurAmount.tsx");

export default memoResult;
