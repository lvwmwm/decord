// Module ID: 3859
// Function ID: 32080
// Name: useObservedValue
// Dependencies: [31, 27, 33, 3860, 3849, 3906, 3907, 3908, 2]
// Exports: useArtboardBinding, useBooleanBinding, useColorBinding, useEnumBinding, useImageBinding, useNumberBinding, useStringBinding, useTriggerBinding

// Module 3859 (useObservedValue)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let Platform;
let StyleSheet;
let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function useObservedValue(value, LVL1) {
  let closure_0 = value;
  let closure_1 = LVL1;
  importAllResult = importAllResult.useRef(LVL1);
  const items = [LVL1];
  const effect = importAllResult.useEffect(() => {
    closure_2.current = closure_1;
  }, items);
  const items1 = [value];
  const effect1 = importAllResult.useEffect(() => {
    if (undefined !== closure_0) {
      if (null != ref.current) {
        ref.current(closure_0);
      }
    }
  }, items1);
}
({ View: closure_3, StyleSheet, Image: closure_4, PixelRatio: closure_5, Platform } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
const styles = StyleSheet.create({ container: { flexGrow: 1 }, fill: { flex: 1 }, hidden: { opacity: 0 } });
const forwardRefResult = importAllResult.forwardRef(function BaseRiveInner(renderDataBinding) {
  let alignment;
  let artboard;
  let artboardProperties;
  let artboardViewModelInstances;
  let fit;
  let referencedAssets;
  let require;
  let src;
  let stateMachine;
  let style;
  let withReducedMotion;
  ({ artboard, defaultViewModelInstance: require, referencedAssets, stateMachine, fit, alignment, withReducedMotion } = renderDataBinding);
  ({ src, style, artboardProperties, artboardViewModelInstances } = renderDataBinding);
  if (withReducedMotion === undefined) {
    withReducedMotion = "halt";
  }
  renderDataBinding = renderDataBinding.renderDataBinding;
  let play;
  let pause;
  let obj = require(play[3]);
  let tmp;
  if (null != referencedAssets) {
    obj = { referencedAssets };
    tmp = obj;
  }
  const riveFile = obj.useRiveFile(src, tmp).riveFile;
  let obj2 = require(play[3]);
  const rive = obj2.useRive();
  const riveViewRef = rive.riveViewRef;
  const enabled = pause.useContext(require(play[4]).AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj3 = require(play[5]);
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
  const memo = pause.useMemo(() => closure_0, []);
  let obj4 = require(play[3]);
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
    None = require(play[3]).DataBindMode.None;
  }
  let reducedMotion;
  if (null != artboardProperties[artboard]) {
    reducedMotion = tmp13.reducedMotion;
  }
  let obj5 = require(play[6]);
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
  play = rivePlayback.play;
  pause = rivePlayback.pause;
  const items1 = [play, pause];
  const imperativeHandle = pause.useImperativeHandle(arg1, () => ({ play, pause }), items1);
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
      const obj6 = { fit: require(play[7]).FIT_MAP[fit] };
      let obj7 = obj6;
    } else {
      obj7 = {};
    }
    const merged1 = Object.assign(obj7);
    if (null != alignment) {
      const obj8 = { alignment: require(play[7]).ALIGNMENT_MAP[alignment] };
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
    closure_6(require(play[3]).RiveView, obj3);
    const tmp24 = closure_6;
  }
});
let result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/BaseRive.tsx");

export const BaseRive = forwardRefResult;
export const useNumberBinding = function useNumberBinding(AnimationState, instance, AnimationState2, AnimationState1, playIfNeeded) {
  const _require = AnimationState2;
  const dependencyMap = playIfNeeded;
  const iter = _require(3860).useRiveNumber(AnimationState, instance);
  const setValue = iter.setValue;
  const items = [AnimationState2, setValue, playIfNeeded];
  const effect = setValue.useEffect(() => {
    if (null != closure_0) {
      if ("number" !== typeof closure_0) {
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
      if (null != playIfNeeded) {
        playIfNeeded();
      }
      const tmp8 = setValue;
    }
  }, items);
  useObservedValue(iter.value, AnimationState1);
};
export const useStringBinding = function useStringBinding(LVL, instance, LVL2, LVL1, playIfNeeded) {
  const _require = LVL2;
  const dependencyMap = playIfNeeded;
  const iter = _require(3860).useRiveString(LVL, instance);
  const setValue = iter.setValue;
  const items = [LVL2, setValue, playIfNeeded];
  const effect = setValue.useEffect(() => {
    if (null != LVL2) {
      setValue(LVL2.toString());
      if (null != playIfNeeded) {
        playIfNeeded();
      }
    }
  }, items);
  useObservedValue(iter.value, LVL1);
};
export const useBooleanBinding = function useBooleanBinding(reducedMotion, instance, reducedMotionEnabled, pressed1, playIfNeeded) {
  const _require = reducedMotionEnabled;
  const dependencyMap = playIfNeeded;
  const iter = _require(3860).useRiveBoolean(reducedMotion, instance);
  const setValue = iter.setValue;
  const items = [reducedMotionEnabled, setValue, playIfNeeded];
  const effect = setValue.useEffect(() => {
    if (null != closure_0) {
      const _Boolean = Boolean;
      setValue(Boolean(closure_0));
      if (null != playIfNeeded) {
        playIfNeeded();
      }
    }
  }, items);
  useObservedValue(iter.value, pressed1);
};
export const useColorBinding = function useColorBinding(FillColor, instance, FillColor2, FillColor1, playIfNeeded) {
  const _require = FillColor2;
  const dependencyMap = FillColor1;
  const iter = _require(3860).useRiveColor(FillColor, instance);
  const setValue = iter.setValue;
  const value = iter.value;
  const items = [FillColor2, setValue, playIfNeeded];
  const effect = importAllResult.useEffect(() => {
    if (null != FillColor2) {
      setValue(FillColor2.toString());
      if (null != playIfNeeded) {
        playIfNeeded();
      }
    }
  }, items);
  let closure_5 = importAllResult.useRef(FillColor1);
  const items1 = [FillColor1];
  const effect1 = importAllResult.useEffect(() => {
    closure_5.current = closure_1;
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
  const _require = arg2;
  const dependencyMap = arg4;
  const iter = _require(3860).useRiveEnum(FillColor, instance);
  const setValue = iter.setValue;
  const items = [arg2, setValue, arg4];
  const effect = setValue.useEffect(() => {
    if (null != closure_0) {
      setValue(closure_0.toString());
      if (null != callback) {
        callback();
      }
    }
  }, items);
  useObservedValue(iter.value, LVL1);
};
export const useTriggerBinding = function useTriggerBinding(startAnimation, instance, startAnimation2, startAnimation1, playIfNeeded) {
  const _require = startAnimation2;
  const dependencyMap = playIfNeeded;
  let obj = _require(3860);
  let tmp;
  if (null != startAnimation1) {
    obj = { onTrigger: startAnimation1 };
    tmp = obj;
  }
  const trigger = obj.useRiveTrigger(startAnimation, instance, tmp).trigger;
  const items = [startAnimation2, trigger, playIfNeeded];
  const effect = trigger.useEffect(() => {
    if ("boolean" === typeof closure_0) {
      let tmp2 = closure_0;
    } else {
      tmp2 = 0 !== closure_0;
      if (tmp2) {
        tmp2 = null != closure_0;
      }
    }
    if (tmp2) {
      trigger();
      if (null != playIfNeeded) {
        playIfNeeded();
      }
    }
  }, items);
};
export const useImageBinding = function useImageBinding(img, instance, booleanBinding, booleanBinding2, playIfNeeded) {
  let closure_0 = img;
  let closure_1 = instance;
  let closure_3 = booleanBinding2;
  let closure_4 = playIfNeeded;
  const items = [img, instance, booleanBinding, playIfNeeded];
  const effect = importAllResult.useEffect(() => {
    if (null != instance) {
      if (null != closure_2) {
        let c0 = false;
        const RiveImages = img(instance[3]).RiveImages;
        let uri = closure_2;
        if ("number" === typeof closure_2) {
          uri = playIfNeeded.resolveAssetSource(tmp4).uri;
        }
        const fromURLAsync = RiveImages.loadFromURLAsync(uri);
        fromURLAsync.then((arg0) => {
          if (!c0) {
            const imagePropertyResult = outer1_1.imageProperty(c0);
            if (null != imagePropertyResult) {
              const result = imagePropertyResult.set(arg0);
            }
            if (null != outer1_4) {
              outer1_4();
            }
          }
        }).catch(() => {

        });
        return () => {
          let c0 = true;
        };
      }
    }
  }, items);
  let closure_5 = importAllResult.useRef(booleanBinding2);
  const items1 = [booleanBinding2];
  const effect1 = importAllResult.useEffect(() => {
    closure_5.current = closure_3;
  }, items1);
  const items2 = [img, instance];
  const effect2 = importAllResult.useEffect(() => {
    if (null != instance) {
      const imagePropertyResult = instance.imageProperty(closure_0);
      if (null != imagePropertyResult) {
        return imagePropertyResult.addListener(() => {
          let currentResult;
          if (null != outer1_5.current) {
            currentResult = outer1_5.current();
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
  let closure_3 = Icon2;
  let closure_4 = playIfNeeded;
  const items = [Icon, instance, file, Icon2, playIfNeeded];
  const effect = file.useEffect(() => {
    if (null != instance) {
      if (null != bindableArtboard) {
        if ("string" === typeof closure_3) {
          const artboardPropertyResult = instance.artboardProperty(closure_0);
          if (null != artboardPropertyResult) {
            const result = obj.set(bindableArtboard.getBindableArtboard(closure_3));
          }
          if (null != playIfNeeded) {
            playIfNeeded();
          }
          obj = artboardPropertyResult;
        }
      }
    }
  }, items);
};
