// Module ID: 4560
// Function ID: 4561
// Name: BaseRive
// Dependencies: [19, 17, 21, 4561, 4550, 4611, 4612, 4613, 2]
// Exports: useArtboardBinding, useBooleanBinding, useColorBinding, useEnumBinding, useImageBinding, useNumberBinding, useStringBinding, useTriggerBinding

// Module 4560 (BaseRive)
import DataBindByName from "DataBindByName" /* 4561 */;
import ManaContext from "ManaContext" /* 4611 */;
import useRivePlayback2 from "useRivePlayback" /* 4612 */;
import RiveTypes from "RiveTypes" /* 4613 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let Platform;
let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const f78990 = () => {
  ref.current = current;
};
let react = react_mod;
({ View: c3, StyleSheet, Image: closure_4, PixelRatio: hasOwnProperty, Platform } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const container = StyleSheet.create({ container: { flexGrow: 1 }, fill: { flex: 1 }, hidden: { opacity: 0 } });
const forwardRefResult = react.forwardRef(function BaseRiveInner(renderDataBinding, ref) {
  let alignment;
  let artboard;
  let artboardProperties;
  let artboardViewModelInstances;
  let closure_129_0;
  let fit;
  let items3;
  let items4;
  let referencedAssets;
  let src;
  let stateMachine;
  let style;
  let tmp13;
  let tmp20;
  let value;
  let withReducedMotion;
  ({ artboard, defaultViewModelInstance: closure_129_0, referencedAssets, stateMachine, fit, alignment, withReducedMotion } = renderDataBinding);
  ({ src, style, artboardProperties, artboardViewModelInstances } = renderDataBinding);
  if (withReducedMotion === undefined) {
    withReducedMotion = "halt";
  }
  renderDataBinding = renderDataBinding.renderDataBinding;
  let play;
  let pause;
  let tmp4;
  const useRiveFile = DataBindByName.useRiveFile;
  DataBindByName;
  if (null != referencedAssets) {
    tmp4 = { referencedAssets };
    const obj = { referencedAssets };
  }
  let riveFile = useRiveFile(src, tmp4).riveFile;
  const tmpResult = DataBindByName;
  const rive = tmpResult.useRive();
  const riveViewRef = rive.riveViewRef;
  const setHybridRef = rive.setHybridRef;
  const enabled = react.useContext(tmp(4550).AccessibilityPreferencesContext).reducedMotion.enabled;
  const tmpResult4 = ManaContext;
  const experiments = tmpResult4.useManaContext().experiments;
  let flag;
  if (experiments != null) {
    const enabledExperiments = experiments.enabledExperiments;
    if (enabledExperiments != null) {
      flag = enabledExperiments.includes("rive-app-state-playback");
    }
  }
  if (flag == null) {
    flag = false;
  }
  if ("layout" === fit) {
    value = hasOwnProperty.get();
  }
  let items = artboardViewModelInstances[artboard];
  if (items == null) {
    items = [];
  }
  const memo = obj3.useMemo(() => closure_1_0, []);
  const useViewModelInstance = DataBindByName.useViewModelInstance;
  DataBindByName;
  if (null != memo) {
    let tmp14 = riveFile;
    if (riveFile == null) {
      tmp14 = null;
    }
    tmp13 = tmp14;
  } else {
    tmp13 = null;
  }
  let instance = useViewModelInstance(tmp13, { artboardName: artboard, instanceName: memo }).instance;
  let None = instance;
  if (instance == null) {
    None = tmp(4561).DataBindMode.None;
  }
  let reducedMotion;
  if (artboardProperties[artboard] != null) {
    reducedMotion = tmp16.reducedMotion;
  }
  const obj2 = { isReady: null != riveViewRef, appStatePlaybackEnabled: flag, shouldShortLoopForReducedMotion: tmp20 };
  tmp20 = enabled;
  const tmp18 = null != reducedMotion;
  const useRivePlayback = useRivePlayback2.useRivePlayback;
  useRivePlayback2;
  if (enabled) {
    tmp20 = !tmp18;
  }
  if (tmp20) {
    tmp20 = "play" !== withReducedMotion;
  }
  const rivePlayback = useRivePlayback(riveViewRef, obj2);
  play = rivePlayback.play;
  pause = rivePlayback.pause;
  const items1 = [play, pause];
  const playIfNeeded = rivePlayback.playIfNeeded;
  const imperativeHandle = obj3.useImperativeHandle(ref, () => ({ play, pause }), items1);
  const items2 = [container.container, ];
  let hidden;
  const tmp23 = metroImportDefault;
  const tmp24 = _false;
  if (null == riveViewRef) {
    hidden = tmp25.hidden;
  }
  const obj4 = { style: items2, children: items4 };
  items2[1] = hidden;
  let tmp28Result = null != riveFile;
  if (tmp28Result) {
    let obj7;
    let obj9;
    let obj11;
    let obj13;
    const obj5 = { file: riveFile, hybridRef: setHybridRef, artboardName: artboard, autoPlay: true, dataBind: None, style: items3 };
    items3 = [container.fill, style];
    const RiveView = tmp(4561).RiveView;
    const tmp28 = metroRequire;
    if (null != stateMachine) {
      obj7 = { stateMachineName: stateMachine };
      const obj6 = { stateMachineName: stateMachine };
    } else {
      obj7 = {};
    }
    const merged = Object.assign(obj7);
    if (null != fit) {
      obj9 = { fit: RiveTypes.FIT_MAP[fit] };
      const obj8 = { fit: RiveTypes.FIT_MAP[fit] };
    } else {
      obj9 = {};
    }
    const merged1 = Object.assign(obj9);
    if (null != alignment) {
      obj11 = { alignment: RiveTypes.ALIGNMENT_MAP[alignment] };
      const obj10 = { alignment: RiveTypes.ALIGNMENT_MAP[alignment] };
    } else {
      obj11 = {};
    }
    const merged2 = Object.assign(obj11);
    if (null != value) {
      obj13 = { layoutScaleFactor: value };
      const obj12 = { layoutScaleFactor: value };
    } else {
      obj13 = {};
    }
    const merged3 = Object.assign(obj13);
    tmp28Result = tmp28(RiveView, obj5);
  }
  items4 = [tmp28Result, ];
  let renderDataBindingResult;
  if (renderDataBinding != null) {
    if (instance == null) {
      instance = null;
    }
    const obj14 = { instance, file: riveFile, reducedMotionEnabled: enabled, playIfNeeded };
    if (riveFile == null) {
      riveFile = null;
    }
    renderDataBindingResult = renderDataBinding(obj14);
  }
  items4[1] = renderDataBindingResult;
  return tmp23(tmp24, obj4);
});
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/BaseRive.tsx");

export const BaseRive = forwardRefResult;
export const useNumberBinding = function useNumberBinding(AnimationState, instance, AnimationState2, AnimationState1, playIfNeeded) {
  let closure_0 = AnimationState2;
  const obj = DataBindByName;
  const iter = obj.useRiveNumber(AnimationState, instance);
  const setValue = iter.setValue;
  const value = iter.value;
  const items = [AnimationState2, setValue, playIfNeeded];
  const effect = react.useEffect(() => {
    if (null != closure_0) {
      let tmp2;
      const tmp5 = setValue;
      if (typeof closure_0 !== "number") {
        const _Number = Number;
        const _parseFloat = parseFloat;
        let num = 0;
        if (!Number.isNaN(parseFloat(closure_0.toString()))) {
          const _parseFloat2 = parseFloat;
          num = parseFloat(str.toString());
        }
        tmp2 = num;
      } else {
        const _Number2 = Number;
        tmp2 = str;
      }
      tmp5(tmp2);
      if (closure_1 != null) {
        closure_1();
      }
    }
  }, items);
  let closure_1 = AnimationState1;
  let closure_2 = react.useRef(AnimationState1);
  const items1 = [AnimationState1];
  const effect1 = react.useEffect(f78990, items1);
  const items2 = [value];
  const effect2 = react.useEffect(() => {
    if (undefined !== value) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
};
export const useStringBinding = function useStringBinding(LVL, instance, LVL2, LVL1, playIfNeeded) {
  let closure_0 = LVL2;
  const obj = DataBindByName;
  const iter = obj.useRiveString(LVL, instance);
  const setValue = iter.setValue;
  const value = iter.value;
  const items = [LVL2, setValue, playIfNeeded];
  const effect = react.useEffect(() => {
    const str = closure_0;
    if (null != closure_0) {
      setValue(str.toString());
      if (closure_1 != null) {
        closure_1();
      }
    }
  }, items);
  let closure_1 = LVL1;
  let closure_2 = react.useRef(LVL1);
  const items1 = [LVL1];
  const effect1 = react.useEffect(f78990, items1);
  const items2 = [value];
  const effect2 = react.useEffect(() => {
    if (undefined !== value) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
};
export const useBooleanBinding = function useBooleanBinding(reducedMotion, instance, reducedMotionEnabled, on1, playIfNeeded) {
  let closure_0 = reducedMotionEnabled;
  const obj = DataBindByName;
  const iter = obj.useRiveBoolean(reducedMotion, instance);
  const setValue = iter.setValue;
  const value = iter.value;
  const items = [reducedMotionEnabled, setValue, playIfNeeded];
  const effect = react.useEffect(() => {
    if (null != closure_0) {
      const _Boolean = Boolean;
      setValue(Boolean(tmp));
      if (closure_1 != null) {
        closure_1();
      }
    }
  }, items);
  let closure_1 = on1;
  let closure_2 = react.useRef(on1);
  const items1 = [on1];
  const effect1 = react.useEffect(f78990, items1);
  const items2 = [value];
  const effect2 = react.useEffect(() => {
    if (undefined !== value) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
};
export const useColorBinding = function useColorBinding(FillColor, instance, FillColor2, FillColor1, playIfNeeded) {
  let closure_0 = FillColor2;
  let closure_1 = FillColor1;
  let closure_2 = playIfNeeded;
  let obj = DataBindByName;
  const iter = obj.useRiveColor(FillColor, instance);
  const setValue = iter.setValue;
  const value = iter.value;
  const items = [FillColor2, setValue, playIfNeeded];
  const effect = react.useEffect(() => {
    const str = closure_0;
    if (null != closure_0) {
      setValue(str.toString());
      if (closure_2 != null) {
        closure_2();
      }
    }
  }, items);
  let closure_5 = react.useRef(FillColor1);
  const items1 = [FillColor1];
  const effect1 = react.useEffect(() => {
    ref.current = current;
  }, items1);
  const items2 = [value];
  const effect2 = react.useEffect(() => {
    const obj = value;
    if (null != value) {
      current = ref.current;
      if (current != null) {
        current(obj.toInt());
      }
    }
  }, items2);
};
export const useEnumBinding = function useEnumBinding(FillColor, instance, arg2, set, arg4) {
  let closure_0 = arg2;
  const obj = DataBindByName;
  const iter = obj.useRiveEnum(FillColor, instance);
  const setValue = iter.setValue;
  const value = iter.value;
  const items = [arg2, setValue, arg4];
  const effect = react.useEffect(() => {
    const str = closure_0;
    if (null != closure_0) {
      setValue(str.toString());
      if (closure_1 != null) {
        closure_1();
      }
    }
  }, items);
  let closure_1 = set;
  let closure_2 = react.useRef(set);
  const items1 = [set];
  const effect1 = react.useEffect(f78990, items1);
  const items2 = [value];
  const effect2 = react.useEffect(() => {
    if (undefined !== value) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
};
export const useTriggerBinding = function useTriggerBinding(startAnimation, instance, startAnimation2, startAnimation1, playIfNeeded) {
  let closure_0 = startAnimation2;
  let closure_1 = playIfNeeded;
  const tmp = DataBindByName;
  let tmp2;
  const useRiveTrigger = tmp.useRiveTrigger;
  if (null != startAnimation1) {
    tmp2 = { onTrigger: startAnimation1 };
    const obj = { onTrigger: startAnimation1 };
  }
  const trigger = useRiveTrigger(startAnimation, instance, tmp2).trigger;
  const items = [startAnimation2, trigger, playIfNeeded];
  const effect = react.useEffect(() => {
    let tmp2 = closure_0;
    if (typeof closure_0 !== "boolean") {
      tmp2 = 0 !== tmp && null != tmp;
      const tmp4 = 0 !== tmp && null != tmp;
    }
    if (tmp2) {
      trigger();
      if (closure_1 != null) {
        closure_1();
      }
    }
  }, items);
};
export const useImageBinding = function useImageBinding(img, instance, prop12, prop13, playIfNeeded) {
  react = prop12;
  let current = prop13;
  const items = [img, instance, prop12, playIfNeeded];
  const effect = react.useEffect(() => {
    if (null != instance) {
      let tmp = closure_2;
      if (null != closure_2) {
        let c0 = false;
        const RiveImages = img(instance[3]).RiveImages;
        let uri = tmp;
        const loadFromURLAsync = RiveImages.loadFromURLAsync;
        if (typeof tmp === "number") {
          uri = playIfNeeded.resolveAssetSource(tmp).uri;
        }
        const fromURLAsync = loadFromURLAsync(uri);
        const nextPromise = fromURLAsync.then((result) => {
          const tmp = c0;
          if (!tmp) {
            const imagePropertyResult = instance.imageProperty(img);
            if (imagePropertyResult != null) {
              result = imagePropertyResult.set(result);
            }
            if (playIfNeeded != null) {
              tmp7();
            }
          }
        });
        nextPromise.catch(() => {

        });
        return () => {
          c0 = true;
        };
      }
    }
  }, items);
  let closure_5 = react.useRef(prop13);
  const items1 = [prop13];
  const effect1 = react.useEffect(() => {
    closure_5.current = current;
  }, items1);
  const items2 = [img, instance];
  const effect2 = react.useEffect(() => {
    let ref;
    const obj = instance;
    if (null != instance) {
      const imagePropertyResult = obj.imageProperty(img);
      if (null != imagePropertyResult) {
        return imagePropertyResult.addListener(() => {
          current = ref.current;
          let currentResult;
          if (current != null) {
            currentResult = current();
          }
          return currentResult;
        });
      }
    }
  }, items2);
};
export const useArtboardBinding = function useArtboardBinding(Icon, instance, file, Icon2, playIfNeeded) {
  let closure_0 = Icon;
  let closure_1 = instance;
  let closure_2 = file;
  let closure_3 = Icon2;
  let closure_4 = playIfNeeded;
  const items = [Icon, instance, file, Icon2, playIfNeeded];
  const effect = react.useEffect(() => {
    const obj = closure_1;
    if (null != closure_1) {
      const obj2 = closure_2;
      if (null != closure_2) {
        if (typeof closure_3 === "string") {
          try {
            const artboardPropertyResult = obj.artboardProperty(closure_0);
            if (artboardPropertyResult != null) {
              const result = artboardPropertyResult.set(obj2.getBindableArtboard(tmp));
            }
            if (closure_4 != null) {
              tmp4();
            }
          } catch (err) {
          }
        }
      }
    }
  }, items);
};
