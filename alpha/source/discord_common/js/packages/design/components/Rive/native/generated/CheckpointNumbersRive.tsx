// Module ID: 4874
// Function ID: 4875
// Name: CheckpointNumbersRive
// Dependencies: [109, 19, 21, 558, 4804, 576, 4875, 4857, 2]

// Module 4874 (CheckpointNumbersRive)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import BaseRive2 from "BaseRive" /* 4804 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let tmp;
const RiveErrorBoundary2 = tmp(4857);
let closure_3 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let closure_4 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = Fragment.jsx;
const artboardProperties = { Artboard: { TextColor: "color", "Fire CountUp": "trigger", DisplayValue: "number" } };
const artboardViewModelInstances = { Artboard: ["Instance"] };
let ReactCompilerGating = ReactCompilerGating_mod;
let obj = {
  Artboard: ReactCompilerGating.isReactCompilerEnabled() ? (function ArtboardBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let TextColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      TextColor = dataBinding.TextColor;
    }
    let TextColor1;
    if (onDataBindingChange != null) {
      TextColor1 = onDataBindingChange.TextColor;
    }
    const colorBinding = useColorBinding("TextColor", instance, TextColor, TextColor1, playIfNeeded);
    let prop;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["Fire CountUp"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["Fire CountUp"];
    }
    const triggerBinding = useTriggerBinding("Fire CountUp", instance, prop, prop1, playIfNeeded);
    let DisplayValue;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      DisplayValue = dataBinding.DisplayValue;
    }
    let DisplayValue1;
    if (onDataBindingChange != null) {
      DisplayValue1 = onDataBindingChange.DisplayValue;
    }
    const numberBinding = useNumberBinding("DisplayValue", instance, DisplayValue, DisplayValue1, playIfNeeded);
    return null;
  }) : (function ArtboardBindings(arg0) {
    let dataBinding;
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    ({ instance, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let TextColor;
    const useColorBinding = BaseRive2.useColorBinding;
    BaseRive2;
    if (dataBinding != null) {
      TextColor = dataBinding.TextColor;
    }
    let TextColor1;
    if (onDataBindingChange != null) {
      TextColor1 = onDataBindingChange.TextColor;
    }
    const colorBinding = useColorBinding("TextColor", instance, TextColor, TextColor1, playIfNeeded);
    let prop;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding["Fire CountUp"];
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange["Fire CountUp"];
    }
    const triggerBinding = useTriggerBinding("Fire CountUp", instance, prop, prop1, playIfNeeded);
    let DisplayValue;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      DisplayValue = dataBinding.DisplayValue;
    }
    let DisplayValue1;
    if (onDataBindingChange != null) {
      DisplayValue1 = onDataBindingChange.DisplayValue;
    }
    const numberBinding = useNumberBinding("DisplayValue", instance, DisplayValue, DisplayValue1, playIfNeeded);
    return null;
  })
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointNumbersRiveInner(arg0) {
  let artboard;
  let dataBinding;
  let defaultViewModelInstance;
  let fallback;
  let onDataBindingChange;
  let ref;
  let stateMachine;
  let str;
  let tmp10;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let tmp2 = str;
  obj = require("react");
  const cResult = obj.c(19);
  const tmp = _require;
  if (cResult[0] !== arg0) {
    ({ ref, fallback, artboard, stateMachine, defaultViewModelInstance, dataBinding, onDataBindingChange } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, closure_3);
    _require = dataBinding;
    importDefault = onDataBindingChange;
    cResult[0] = arg0;
    cResult[1] = dataBinding;
    cResult[2] = onDataBindingChange;
    cResult[3] = ref;
    cResult[4] = tmp13;
    cResult[5] = stateMachine;
    cResult[6] = artboard;
    cResult[7] = defaultViewModelInstance;
    tmp10 = defaultViewModelInstance;
    tmp9 = artboard;
    tmp8 = stateMachine;
    tmp7 = tmp13;
    tmp6 = ref;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  str = "Artboard";
  if (undefined !== tmp9) {
    str = tmp9;
  }
  let str2 = "Instance";
  if (undefined !== tmp10) {
    str2 = tmp10;
  }
  if (cResult[8] === str) {
    if (cResult[9] === tmp4) {
      let tmp14;
      if (cResult[10] === tmp5) {
        tmp14 = cResult[11];
      }
      if (cResult[12] === str) {
        if (cResult[13] === str2) {
          if (cResult[14] === tmp6) {
            if (cResult[15] === tmp14) {
              if (cResult[16] === tmp7) {
                let tmp15;
                if (cResult[17] === tmp8) {
                  tmp15 = cResult[18];
                }
                return tmp15;
              }
            }
          }
        }
      }
      const BaseRive = tmp(tmp2[4]).BaseRive;
      let merged = Object.assign(tmp7);
      const tmp23 = <BaseRive ref={tmp6} src={require("module_4875")} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={str2} stateMachine={tmp8} renderDataBinding={tmp14} />;
      cResult[12] = str;
      cResult[13] = str2;
      cResult[14] = tmp6;
      cResult[15] = tmp14;
      cResult[16] = tmp7;
      cResult[17] = tmp8;
      cResult[18] = tmp23;
      tmp15 = tmp23;
    }
  }
  const fn = function x(arg0) {
    let tmp2 = null;
    if (null != obj[str]) {
      const merged = Object.assign(arg0);
      tmp2 = <tmp dataBinding={dataBinding} onDataBindingChange={onDataBindingChange} />;
    }
    return tmp2;
  };
  cResult[8] = str;
  cResult[9] = tmp4;
  cResult[10] = tmp5;
  cResult[11] = fn;
  tmp14 = fn;
}) : (function CheckpointNumbersRiveInner(ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = ref);
  let str = "Artboard";
  ref = ref.ref;
  if (undefined !== artboard) {
    str = artboard;
  }
  const defaultViewModelInstance = ref.defaultViewModelInstance;
  let str2 = "Instance";
  const stateMachine = ref.stateMachine;
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  const dataBinding = ref.dataBinding;
  const onDataBindingChange = ref.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const tmp = _objectWithoutProperties(ref, closure_4);
  const callback = react.useCallback((arg0) => {
    let tmp2 = null;
    if (null != obj[str]) {
      const merged = Object.assign(arg0);
      tmp2 = <tmp dataBinding={dataBinding} onDataBindingChange={onDataBindingChange} />;
    }
    return tmp2;
  }, items);
  const BaseRive = str(onDataBindingChange[4]).BaseRive;
  let merged = Object.assign(tmp);
  return <BaseRive ref={ref} src={dataBinding(onDataBindingChange[6])} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={str2} stateMachine={stateMachine} renderDataBinding={callback} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointNumbersRiveWithBoundary(fallback) {
  let tmp4;
  obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] !== fallback) {
    const merged = Object.assign(fallback);
    const tmp10 = <closure_11 />;
    cResult[0] = fallback;
    cResult[1] = tmp10;
    tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === fallback.fallback) {
    let tmp11;
    if (cResult[3] === tmp4) {
      tmp11 = cResult[4];
    }
    return tmp11;
  }
  const tmp12 = jsx(RiveErrorBoundary2.RiveErrorBoundary, { fallback: fallback.fallback, children: tmp4 });
  cResult[2] = fallback.fallback;
  cResult[3] = tmp4;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : (function CheckpointNumbersRiveWithBoundary(fallback) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
});
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointNumbersRive.tsx");

export const CheckpointNumbersRive = tmp2;
