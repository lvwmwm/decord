// Module ID: 4555
// Function ID: 4556
// Name: BaseRive
// Dependencies: [19, 17, 21, 4556, 4545, 4606, 4607, 4608, 2]
// Exports: useArtboardBinding, useBooleanBinding, useColorBinding, useEnumBinding, useImageBinding, useNumberBinding, useStringBinding, useTriggerBinding

// Module 4555 (BaseRive)
import DataBindByName from "DataBindByName" /* 4556 */;
import ManaContext from "ManaContext" /* 4606 */;
import useRivePlayback from "useRivePlayback" /* 4607 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet, Image: closure_4, PixelRatio: hasOwnProperty, Platform } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const container = StyleSheet.create({ container: { flexGrow: 1 }, fill: { flex: 1 }, hidden: { opacity: 0 } });
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/BaseRive.tsx");

export const BaseRive = noop.forwardRef(function BaseRiveInner(renderDataBinding, ref) {
  ({ artboard, defaultViewModelInstance: require, referencedAssets, stateMachine, fit, alignment, withReducedMotion } = renderDataBinding);
  ({ src, style, artboardProperties, artboardViewModelInstances } = renderDataBinding);
  if (withReducedMotion === undefined) {
    withReducedMotion = "halt";
  }
  renderDataBinding = renderDataBinding.renderDataBinding;
  let play;
  let pause;
  let tmp3;
  if (null != referencedAssets) {
    const obj2 = { referencedAssets };
    tmp3 = obj2;
  }
  let riveFile = DataBindByName.useRiveFile(src, tmp3).riveFile;
  const rive = DataBindByName.useRive();
  const riveViewRef = rive.riveViewRef;
  const enabled = noop.useContext(tmp(4545).AccessibilityPreferencesContext).reducedMotion.enabled;
  const tmpResult = DataBindByName;
  const experiments = ManaContext.useManaContext().experiments;
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
  const memo = obj4.useMemo(() => require, []);
  const tmp9 = items.length > 0;
  const tmpResult4 = ManaContext;
  if (null != memo) {
    let tmp12 = riveFile;
    if (riveFile == null) {
      tmp12 = null;
    }
    let tmp11 = tmp12;
  } else {
    tmp11 = null;
  }
  let instance = DataBindByName.useViewModelInstance(tmp11, { artboardName: artboard, instanceName: memo }).instance;
  let None = instance;
  if (instance == null) {
    None = tmp(4556).DataBindMode.None;
  }
  let reducedMotion;
  if (artboardProperties[artboard] != null) {
    reducedMotion = tmp14.reducedMotion;
  }
  const tmp16 = null != reducedMotion;
  const tmpResult5 = DataBindByName;
  const obj3 = { isReady: null != riveViewRef, appStatePlaybackEnabled: flag, shouldShortLoopForReducedMotion: null };
  let tmp17 = enabled;
  if (enabled) {
    tmp17 = !tmp16;
  }
  if (tmp17) {
    tmp17 = "play" !== withReducedMotion;
  }
  obj3.shouldShortLoopForReducedMotion = tmp17;
  const rivePlayback = useRivePlayback.useRivePlayback(riveViewRef, obj3);
  play = rivePlayback.play;
  pause = rivePlayback.pause;
  const items1 = [play, pause];
  const imperativeHandle = obj4.useImperativeHandle(ref, () => ({ play, pause }), items1);
  const items2 = [container.container, ];
  let hidden;
  if (null == riveViewRef) {
    hidden = tmp22.hidden;
  }
  const obj5 = { style: items2, children: null };
  items2[1] = hidden;
  if (null == riveFile) {
    const items3 = [tmp24, ];
    let renderDataBindingResult;
    if (renderDataBinding != null) {
      if (instance == null) {
        instance = null;
      }
      const obj6 = { instance, file: null, reducedMotionEnabled: null, playIfNeeded: null };
      if (riveFile == null) {
        riveFile = null;
      }
      obj6.file = riveFile;
      obj6.reducedMotionEnabled = enabled;
      obj6.playIfNeeded = rivePlayback.playIfNeeded;
      renderDataBindingResult = renderDataBinding(obj6);
    }
    items3[1] = renderDataBindingResult;
    obj5.children = items3;
    return React5(React3, obj5);
  } else {
    const obj7 = { file: riveFile, hybridRef: rive.setHybridRef, artboardName: artboard, autoPlay: true, dataBind: None, style: null };
    const items4 = [tmp22.fill, style];
    obj7.style = items4;
    if (null != stateMachine) {
      const obj8 = { stateMachineName: stateMachine };
      let obj9 = obj8;
    } else {
      obj9 = {};
    }
    const merged = Object.assign(obj9);
    if (null != fit) {
      const obj10 = { fit: tmp(4608).FIT_MAP[fit] };
      let obj11 = obj10;
    } else {
      obj11 = {};
    }
    const merged1 = Object.assign(obj11);
    if (null != alignment) {
      const obj12 = { alignment: tmp(4608).ALIGNMENT_MAP[alignment] };
      let obj13 = obj12;
    } else {
      obj13 = {};
    }
    const merged2 = Object.assign(obj13);
    if (null != value) {
      const obj14 = { layoutScaleFactor: value };
      let obj15 = obj14;
    } else {
      obj15 = {};
    }
    const merged3 = Object.assign(obj15);
    timestampProducer(tmp(4556).RiveView, obj7);
  }
});
export const useNumberBinding = function useNumberBinding(AnimationState, instance, AnimationState2, AnimationState1, playIfNeeded) {
  AnimationState1 = playIfNeeded;
  const iter = DataBindByName.useRiveNumber(AnimationState, instance);
  const setValue = iter.setValue;
  value = iter.value;
  const items = [AnimationState2, setValue, playIfNeeded];
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      if (typeof str !== "number") {
        const _Number = Number;
        const _parseFloat = parseFloat;
        let num = 0;
        if (!Number.isNaN(parseFloat(str.toString()))) {
          const _parseFloat2 = parseFloat;
          num = parseFloat(str.toString());
        }
        let tmp2 = num;
      } else {
        const _Number2 = Number;
        tmp2 = str;
      }
      closure_2(tmp2);
      if (AnimationState1 != null) {
        AnimationState1();
      }
    }
  }, items);
  closure_0 = value;
  closure_2 = noop.useRef(AnimationState1);
  const items1 = [AnimationState1];
  const effect1 = noop.useEffect(() => {
    closure_2.current = current;
  }, items1);
  const items2 = [value];
  const effect2 = noop.useEffect(() => {
    if (undefined !== closure_0) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
};
export const useStringBinding = function useStringBinding(LVL, instance, LVL2, LVL1, playIfNeeded) {
  LVL1 = playIfNeeded;
  const iter = DataBindByName.useRiveString(LVL, instance);
  const setValue = iter.setValue;
  value = iter.value;
  const items = [LVL2, setValue, playIfNeeded];
  const effect = noop.useEffect(() => {
    if (null != LVL2) {
      closure_2(LVL2.toString());
      if (LVL1 != null) {
        LVL1();
      }
    }
  }, items);
  LVL2 = value;
  closure_2 = noop.useRef(LVL1);
  const items1 = [LVL1];
  const effect1 = noop.useEffect(() => {
    closure_2.current = current;
  }, items1);
  const items2 = [value];
  const effect2 = noop.useEffect(() => {
    if (undefined !== closure_0) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
};
export const useBooleanBinding = function useBooleanBinding(reducedMotion, instance, reducedMotionEnabled, on1, playIfNeeded) {
  on1 = playIfNeeded;
  const iter = DataBindByName.useRiveBoolean(reducedMotion, instance);
  const setValue = iter.setValue;
  value = iter.value;
  const items = [reducedMotionEnabled, setValue, playIfNeeded];
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      const _Boolean = Boolean;
      closure_2(Boolean(tmp));
      if (on1 != null) {
        on1();
      }
    }
  }, items);
  closure_0 = value;
  closure_2 = noop.useRef(on1);
  const items1 = [on1];
  const effect1 = noop.useEffect(() => {
    closure_2.current = current;
  }, items1);
  const items2 = [value];
  const effect2 = noop.useEffect(() => {
    if (undefined !== closure_0) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
};
export const useColorBinding = function useColorBinding(FillColor, instance, FillColor2, FillColor1, playIfNeeded) {
  let current = FillColor1;
  const iter = DataBindByName.useRiveColor(FillColor, instance);
  const setValue = iter.setValue;
  value = iter.value;
  const items = [FillColor2, setValue, playIfNeeded];
  const effect = noop.useEffect(() => {
    if (null != FillColor2) {
      setValue(FillColor2.toString());
      if (playIfNeeded != null) {
        playIfNeeded();
      }
    }
  }, items);
  noop.useRef(FillColor1);
  const items1 = [FillColor1];
  const effect1 = noop.useEffect(() => {
    closure_5.current = current;
  }, items1);
  const items2 = [value];
  const effect2 = noop.useEffect(() => {
    if (null != value) {
      current = ref.current;
      if (current != null) {
        current(value.toInt());
      }
    }
  }, items2);
};
export const useEnumBinding = function useEnumBinding(FillColor, instance, arg2, set, arg4) {
  const iter = DataBindByName.useRiveEnum(FillColor, instance);
  const setValue = iter.setValue;
  value = iter.value;
  const items = [arg2, setValue, arg4];
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      ref(closure_0.toString());
      if (current != null) {
        current();
      }
    }
  }, items);
  closure_0 = value;
  let current = set;
  noop.useRef(set);
  const items1 = [set];
  const effect1 = noop.useEffect(() => {
    closure_2.current = current;
  }, items1);
  const items2 = [value];
  const effect2 = noop.useEffect(() => {
    if (undefined !== closure_0) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
};
export const useTriggerBinding = function useTriggerBinding(startAnimation, instance, startAnimation2, startAnimation1, playIfNeeded) {
  closure_0 = startAnimation2;
  let tmp;
  if (null != startAnimation1) {
    const obj2 = { onTrigger: startAnimation1 };
    tmp = obj2;
  }
  const trigger = DataBindByName.useRiveTrigger(startAnimation, instance, tmp).trigger;
  const items = [startAnimation2, trigger, playIfNeeded];
  const effect = noop.useEffect(() => {
    let tmp2 = closure_0;
    if (typeof closure_0 !== "boolean") {
      let tmp4 = 0 !== tmp;
      if (tmp4) {
        tmp4 = null != tmp;
      }
      tmp2 = tmp4;
    }
    if (tmp2) {
      trigger();
      if (playIfNeeded != null) {
        playIfNeeded();
      }
    }
  }, items);
};
export const useImageBinding = function useImageBinding(img, instance, prop12, prop13, playIfNeeded) {
  noop = prop12;
  let current = prop13;
  const items = [img, instance, prop12, playIfNeeded];
  const effect = noop.useEffect(() => {
    if (null != instance) {
      if (null != closure_2) {
        c0 = false;
        const RiveImages = img(instance[3]).RiveImages;
        let uri = tmp;
        if (typeof tmp === "number") {
          uri = playIfNeeded.resolveAssetSource(tmp).uri;
        }
        const fromURLAsync = RiveImages.loadFromURLAsync(uri);
        fromURLAsync.then((result) => {
          if (!c0) {
            const imagePropertyResult = closure_1.imageProperty(closure_0);
            if (imagePropertyResult != null) {
              result = imagePropertyResult.set(result);
            }
            if (closure_4 != null) {
              tmp6();
            }
          }
        }).catch(() => {

        });
        return () => {
          c0 = true;
        };
      }
    }
  }, items);
  closure_5 = noop.useRef(prop13);
  const items1 = [prop13];
  const effect1 = noop.useEffect(() => {
    closure_5.current = current;
  }, items1);
  const items2 = [img, instance];
  const effect2 = noop.useEffect(() => {
    if (null != instance) {
      const imagePropertyResult = instance.imageProperty(closure_0);
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
  closure_0 = Icon;
  closure_2 = file;
  closure_3 = Icon2;
  closure_4 = playIfNeeded;
  const items = [Icon, instance, file, Icon2, playIfNeeded];
  const effect = noop.useEffect(() => {
    if (null != instance) {
      if (null != closure_2) {
        if (typeof closure_3 === "string") {
          try {
            const artboardPropertyResult = instance.artboardProperty(closure_0);
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
      obj2 = closure_2;
    }
  }, items);
};
