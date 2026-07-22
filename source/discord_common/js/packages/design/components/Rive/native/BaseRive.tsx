// Module ID: 3857
// Function ID: 32074
// Name: useObservedValue
// Dependencies: []
// Exports: useArtboardBinding, useBooleanBinding, useColorBinding, useEnumBinding, useImageBinding, useNumberBinding, useStringBinding, useTriggerBinding

// Module 3857 (useObservedValue)
let Platform;
let StyleSheet;
function useObservedValue(value, LVL1) {
  LVL1 = value;
  const dependencyMap = LVL1;
  const React = React.useRef(LVL1);
  const items = [LVL1];
  const effect = React.useEffect(() => {
    closure_2.current = arg1;
  }, items);
  const items1 = [value];
  const effect1 = React.useEffect(() => {
    if (undefined !== arg0) {
      if (null != ref.current) {
        ref.current(arg0);
      }
    }
  }, items1);
}
const importAllResult = importAll(dependencyMap[0]);
({ View: closure_3, StyleSheet, Image: closure_4, PixelRatio: closure_5, Platform } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
const styles = StyleSheet.create({ container: { flexGrow: 1 }, fill: { flex: 1 }, hidden: { opacity: 0 } });
const tmp3 = arg1(dependencyMap[2]);
const forwardRefResult = importAllResult.forwardRef(function BaseRiveInner(renderDataBinding) {
  let alignment;
  let artboard;
  let artboardProperties;
  let artboardViewModelInstances;
  let fit;
  let referencedAssets;
  let src;
  let stateMachine;
  let style;
  let withReducedMotion;
  ({ artboard, defaultViewModelInstance: closure_0, referencedAssets, stateMachine, fit, alignment, withReducedMotion } = renderDataBinding);
  ({ src, style, artboardProperties, artboardViewModelInstances } = renderDataBinding);
  if (withReducedMotion === undefined) {
    withReducedMotion = "halt";
  }
  renderDataBinding = renderDataBinding.renderDataBinding;
  let dependencyMap;
  let importAllResult;
  let obj = arg1(dependencyMap[3]);
  let tmp;
  if (null != referencedAssets) {
    obj = { referencedAssets };
    tmp = obj;
  }
  const riveFile = obj.useRiveFile(src, tmp).riveFile;
  let obj2 = arg1(dependencyMap[3]);
  const rive = obj2.useRive();
  const riveViewRef = rive.riveViewRef;
  const enabled = importAllResult.useContext(arg1(dependencyMap[4]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj3 = arg1(dependencyMap[5]);
  const experiments = obj3.useManaContext().experiments;
  let hasItem;
  if (null != experiments) {
    const enabledExperiments = experiments.enabledExperiments;
    if (null != enabledExperiments) {
      hasItem = enabledExperiments.includes("rive-app-state-playback");
    }
  }
  if ("layout" === fit) {
    const value = closure_5.get();
  }
  let items = artboardViewModelInstances[artboard];
  if (null == items) {
    items = [];
  }
  const memo = importAllResult.useMemo(() => closure_0, []);
  let obj4 = arg1(dependencyMap[3]);
  if (null != memo) {
    let tmp10 = null;
    if (null != riveFile) {
      tmp10 = riveFile;
    }
  } else {
    tmp10 = null;
  }
  const instance = obj4.useViewModelInstance(tmp10, { artboardName: artboard, instanceName: memo }).instance;
  let None = instance;
  if (null == instance) {
    None = arg1(dependencyMap[3]).DataBindMode.None;
  }
  let reducedMotion;
  if (null != artboardProperties[artboard]) {
    reducedMotion = tmp13.reducedMotion;
  }
  let obj5 = arg1(dependencyMap[6]);
  obj = { isReady: tmp3, appStatePlaybackEnabled: null != hasItem && hasItem };
  let tmp16 = enabled;
  if (enabled) {
    tmp16 = !tmp15;
  }
  if (tmp16) {
    tmp16 = "play" !== withReducedMotion;
  }
  obj.shouldShortLoopForReducedMotion = tmp16;
  const rivePlayback = obj5.useRivePlayback(riveViewRef, obj);
  const play = rivePlayback.play;
  dependencyMap = play;
  const pause = rivePlayback.pause;
  importAllResult = pause;
  const items1 = [play, pause];
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({ play, pause }), items1);
  const obj1 = {};
  const items2 = [closure_8.container, ];
  let hidden;
  if (null == riveViewRef) {
    hidden = closure_8.hidden;
  }
  items2[1] = hidden;
  obj1.style = items2;
  if (null == riveFile) {
    const items3 = [tmp23, ];
    let renderDataBindingResult;
    if (null != renderDataBinding) {
      obj2 = {};
      let tmp46 = null;
      if (null != instance) {
        tmp46 = instance;
      }
      obj2.instance = tmp46;
      let tmp47 = null;
      if (null != riveFile) {
        tmp47 = riveFile;
      }
      obj2.file = tmp47;
      obj2.reducedMotionEnabled = enabled;
      obj2.playIfNeeded = rivePlayback.playIfNeeded;
      renderDataBindingResult = renderDataBinding(obj2);
    }
    items3[1] = renderDataBindingResult;
    obj1.children = items3;
    return closure_7(closure_3, obj1);
  } else {
    obj3 = { file: riveFile, hybridRef: rive.setHybridRef, artboardName: artboard, autoPlay: true, dataBind: None };
    const items4 = [closure_8.fill, style];
    obj3.style = items4;
    if (null != stateMachine) {
      obj4 = { stateMachineName: stateMachine };
      obj5 = obj4;
    } else {
      obj5 = {};
    }
    const merged = Object.assign(obj5);
    if (null != fit) {
      const obj6 = { fit: arg1(dependencyMap[7]).FIT_MAP[fit] };
      let obj7 = obj6;
    } else {
      obj7 = {};
    }
    const merged1 = Object.assign(obj7);
    if (null != alignment) {
      const obj8 = { alignment: arg1(dependencyMap[7]).ALIGNMENT_MAP[alignment] };
      let obj9 = obj8;
    } else {
      obj9 = {};
    }
    const merged2 = Object.assign(obj9);
    if (null != value) {
      const obj10 = { layoutScaleFactor: value };
      let obj11 = obj10;
    } else {
      obj11 = {};
    }
    const merged3 = Object.assign(obj11);
    closure_6(arg1(dependencyMap[3]).RiveView, obj3);
    const tmp24 = closure_6;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/BaseRive.tsx");

export const BaseRive = forwardRefResult;
export const useNumberBinding = function useNumberBinding(AnimationState, instance, AnimationState2, AnimationState1, playIfNeeded) {
  instance = AnimationState2;
  const dependencyMap = playIfNeeded;
  const iter = instance(dependencyMap[3]).useRiveNumber(AnimationState, instance);
  const setValue = iter.setValue;
  const items = [AnimationState2, setValue, playIfNeeded];
  const effect = setValue.useEffect(() => {
    if (null != arg2) {
      if ("number" !== typeof arg2) {
        const _Number2 = Number;
        const _parseFloat = parseFloat;
        let num = 0;
        if (!Number.isNaN(parseFloat(str.toString()))) {
          const _parseFloat2 = parseFloat;
          num = parseFloat(str.toString());
        }
        let tmp2 = num;
      } else {
        const _Number = Number;
        tmp2 = str;
      }
      setValue(tmp2);
      if (null != arg4) {
        arg4();
      }
      const tmp8 = setValue;
    }
  }, items);
  useObservedValue(iter.value, AnimationState1);
};
export const useStringBinding = function useStringBinding(LVL, instance, LVL2, LVL1, playIfNeeded) {
  instance = LVL2;
  const dependencyMap = playIfNeeded;
  const iter = instance(dependencyMap[3]).useRiveString(LVL, instance);
  const setValue = iter.setValue;
  const items = [LVL2, setValue, playIfNeeded];
  const effect = setValue.useEffect(() => {
    if (null != arg2) {
      setValue(arg2.toString());
      if (null != arg4) {
        arg4();
      }
    }
  }, items);
  useObservedValue(iter.value, LVL1);
};
export const useBooleanBinding = function useBooleanBinding(reducedMotion, instance, reducedMotionEnabled, pressed1, playIfNeeded) {
  instance = reducedMotionEnabled;
  const dependencyMap = playIfNeeded;
  const iter = instance(dependencyMap[3]).useRiveBoolean(reducedMotion, instance);
  const setValue = iter.setValue;
  const items = [reducedMotionEnabled, setValue, playIfNeeded];
  const effect = setValue.useEffect(() => {
    if (null != arg2) {
      const _Boolean = Boolean;
      setValue(Boolean(arg2));
      if (null != arg4) {
        arg4();
      }
    }
  }, items);
  useObservedValue(iter.value, pressed1);
};
export const useColorBinding = function useColorBinding(FillColor, instance, FillColor2, FillColor1, playIfNeeded) {
  instance = FillColor2;
  const dependencyMap = FillColor1;
  const iter = instance(dependencyMap[3]).useRiveColor(FillColor, instance);
  const setValue = iter.setValue;
  const value = iter.value;
  const items = [FillColor2, setValue, playIfNeeded];
  const effect = importAllResult.useEffect(() => {
    if (null != arg2) {
      setValue(arg2.toString());
      if (null != arg4) {
        arg4();
      }
    }
  }, items);
  let closure_5 = importAllResult.useRef(FillColor1);
  const items1 = [FillColor1];
  const effect1 = importAllResult.useEffect(() => {
    closure_5.current = arg3;
  }, items1);
  const items2 = [value];
  const effect2 = importAllResult.useEffect(() => {
    if (null != value) {
      if (null != ref.current) {
        ref.current(value.toInt());
      }
    }
  }, items2);
};
export const useEnumBinding = function useEnumBinding(FillColor, instance, arg2, LVL1) {
  instance = arg2;
  const dependencyMap = arg4;
  const iter = instance(dependencyMap[3]).useRiveEnum(FillColor, instance);
  const setValue = iter.setValue;
  const items = [arg2, setValue, arg4];
  const effect = setValue.useEffect(() => {
    if (null != arg2) {
      setValue(arg2.toString());
      if (null != arg4) {
        arg4();
      }
    }
  }, items);
  useObservedValue(iter.value, LVL1);
};
export const useTriggerBinding = function useTriggerBinding(startAnimation, instance, startAnimation2, startAnimation1, playIfNeeded) {
  instance = startAnimation2;
  const dependencyMap = playIfNeeded;
  let obj = instance(dependencyMap[3]);
  let tmp;
  if (null != startAnimation1) {
    obj = { onTrigger: startAnimation1 };
    tmp = obj;
  }
  const trigger = obj.useRiveTrigger(startAnimation, instance, tmp).trigger;
  const items = [startAnimation2, trigger, playIfNeeded];
  const effect = trigger.useEffect(() => {
    if ("boolean" === typeof arg2) {
      let tmp2 = arg2;
    } else {
      tmp2 = 0 !== arg2;
      if (tmp2) {
        tmp2 = null != arg2;
      }
    }
    if (tmp2) {
      trigger();
      if (null != arg4) {
        arg4();
      }
    }
  }, items);
};
export const useImageBinding = function useImageBinding(img, instance, booleanBinding, booleanBinding2, playIfNeeded) {
  instance = img;
  const dependencyMap = instance;
  const items = [img, instance, booleanBinding, playIfNeeded];
  const effect = importAllResult.useEffect(() => {
    if (null != arg1) {
      if (null != arg2) {
        const img = false;
        const RiveImages = img(arg1[3]).RiveImages;
        let uri = arg2;
        if ("number" === typeof arg2) {
          uri = arg4.resolveAssetSource(tmp4).uri;
        }
        const fromURLAsync = RiveImages.loadFromURLAsync(uri);
        fromURLAsync.then((arg0) => {
          if (!closure_0) {
            const imagePropertyResult = closure_1.imageProperty(closure_0);
            if (null != imagePropertyResult) {
              const result = imagePropertyResult.set(arg0);
            }
            if (null != callback) {
              callback();
            }
          }
        }).catch(() => {

        });
        return () => {
          let closure_0 = true;
        };
      }
    }
  }, items);
  let closure_5 = importAllResult.useRef(booleanBinding2);
  const items1 = [booleanBinding2];
  const effect1 = importAllResult.useEffect(() => {
    closure_5.current = arg3;
  }, items1);
  const items2 = [img, instance];
  const effect2 = importAllResult.useEffect(() => {
    if (null != arg1) {
      const imagePropertyResult = arg1.imageProperty(arg0);
      if (null != imagePropertyResult) {
        return imagePropertyResult.addListener(() => {
          let currentResult;
          if (null != ref.current) {
            currentResult = ref.current();
          }
          return currentResult;
        });
      }
    }
  }, items2);
};
export const useArtboardBinding = function useArtboardBinding(Icon, instance, file, Icon2, playIfNeeded) {
  instance = Icon;
  const dependencyMap = instance;
  const items = [Icon, instance, file, Icon2, playIfNeeded];
  const effect = file.useEffect(() => {
    if (null != arg1) {
      if (null != arg2) {
        if ("string" === typeof arg3) {
          const artboardPropertyResult = arg1.artboardProperty(arg0);
          if (null != artboardPropertyResult) {
            const result = obj.set(arg2.getBindableArtboard(arg3));
          }
          if (null != arg4) {
            arg4();
          }
          const obj = artboardPropertyResult;
        }
      }
    }
  }, items);
};
