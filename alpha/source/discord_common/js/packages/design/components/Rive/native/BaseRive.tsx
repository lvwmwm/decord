// Module ID: 5089
// Function ID: 5090
// Name: BaseRive
// Dependencies: [5, 19, 17, 21, 5090, 5028, 5141, 5142, 5143, 5144, 2]
// Exports: BaseRive, useArtboardBinding, useBooleanBinding, useColorBinding, useEnumBinding, useImageBinding, useNumberBinding, useStringBinding, useTriggerBinding

// Module 5089 (BaseRive)
import DataBindByName from "DataBindByName" /* 5090 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c2, c3, current;

let Platform;
let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
const react2 = tmp(5028);
const ManaContext = tmp(5141);
const useRivePlayback2 = tmp(5142);
const RiveTypes = tmp(5143);
const f86925 = () => {
  ref.current = current;
};
function disposeRiveImageLater(arg0) {
  let closure_0 = arg0;
  const timerId = setTimeout(() => current.dispose(), c10);
}
let react = react_mod;
({ View: closure_4, StyleSheet, Image: hasOwnProperty, PixelRatio: metroRequire, Platform } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const container = StyleSheet.create({ container: { flexGrow: 1 }, fill: { flex: 1 }, hidden: { opacity: 0 } });
let c10 = 1000;
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/BaseRive.tsx");

export const BaseRive = function BaseRiveInner(renderDataBinding) {
  let alignment;
  let artboard;
  let artboardProperties;
  let artboardViewModelInstances;
  let closure_129_0;
  let closure_129_1;
  let fit;
  let items4;
  let items5;
  let referencedAssets;
  let src;
  let stateMachine;
  let style;
  let tmp14;
  let tmp21;
  let value;
  let withReducedMotion;
  ({ artboard, defaultViewModelInstance: closure_129_0, referencedAssets, onRiveFileChange: closure_129_1, stateMachine, fit, alignment, withReducedMotion } = renderDataBinding);
  ({ src, style, artboardProperties, artboardViewModelInstances } = renderDataBinding);
  if (withReducedMotion === undefined) {
    withReducedMotion = "halt";
  }
  renderDataBinding = renderDataBinding.renderDataBinding;
  let riveFile;
  let closure_3;
  let play;
  let pause;
  let tmp = require;
  let tmp2 = dependencyMap;
  const ref = renderDataBinding.ref;
  let tmp4;
  const useRiveFile = DataBindByName.useRiveFile;
  if (null != referencedAssets) {
    tmp4 = { referencedAssets };
    const obj = { referencedAssets };
  }
  riveFile = useRiveFile(src, tmp4).riveFile;
  closure_3 = react.useEffectEvent((arg0) => {
    let tmpResult;
    if (closure_1_1 != null) {
      tmpResult = tmp(arg0);
    }
    return tmpResult;
  });
  const items = [riveFile];
  const effect = react.useEffect(() => {
    let tmp2 = riveFile;
    const tmp = closure_3;
    if (riveFile == null) {
      tmp2 = null;
    }
    tmp(tmp2);
    return () => closure_1_3(null);
  }, items);
  let tmpResult = DataBindByName;
  const rive = tmpResult.useRive();
  const riveViewRef = rive.riveViewRef;
  const setHybridRef = rive.setHybridRef;
  const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
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
    value = metroRequire.get();
  }
  let items1 = artboardViewModelInstances[artboard];
  if (items1 == null) {
    items1 = [];
  }
  const memo = obj2.useMemo(() => closure_1_0, []);
  const useViewModelInstance = DataBindByName.useViewModelInstance;
  DataBindByName;
  if (null != memo) {
    let tmp15 = riveFile;
    if (riveFile == null) {
      tmp15 = null;
    }
    tmp14 = tmp15;
  } else {
    tmp14 = null;
  }
  let instance = useViewModelInstance(tmp14, { artboardName: artboard, instanceName: memo }).instance;
  let None = instance;
  if (instance == null) {
    None = DataBindByName.DataBindMode.None;
  }
  let reducedMotion;
  if (artboardProperties[artboard] != null) {
    reducedMotion = tmp17.reducedMotion;
  }
  const obj3 = { isReady: null != riveViewRef, appStatePlaybackEnabled: flag, shouldShortLoopForReducedMotion: tmp21 };
  tmp21 = enabled;
  const tmp19 = null != reducedMotion;
  const useRivePlayback = useRivePlayback2.useRivePlayback;
  useRivePlayback2;
  if (enabled) {
    tmp21 = !tmp19;
  }
  if (tmp21) {
    tmp21 = "play" !== withReducedMotion;
  }
  const rivePlayback = useRivePlayback(riveViewRef, obj3);
  play = rivePlayback.play;
  pause = rivePlayback.pause;
  const items2 = [play, pause];
  const playIfNeeded = rivePlayback.playIfNeeded;
  const imperativeHandle = obj2.useImperativeHandle(ref, () => ({ play, pause }), items2);
  const items3 = [container.container, ];
  let hidden;
  const tmp24 = metroImportAll;
  const tmp25 = React3;
  if (null == riveViewRef) {
    hidden = tmp26.hidden;
  }
  const obj4 = { style: items3, children: items5 };
  items3[1] = hidden;
  let tmp29Result = null != riveFile;
  if (tmp29Result) {
    let obj7;
    let obj9;
    let obj11;
    let obj13;
    const obj5 = { file: riveFile, hybridRef: setHybridRef, artboardName: artboard, autoPlay: true, dataBind: None, style: items4 };
    items4 = [container.fill, style];
    const RiveView = DataBindByName.RiveView;
    const tmp29 = metroImportDefault;
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
    tmp29Result = tmp29(RiveView, obj5);
  }
  items5 = [tmp29Result, ];
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
  items5[1] = renderDataBindingResult;
  return tmp24(tmp25, obj4);
};
export function useNumberBinding(chapterID, instance, chapterID2, chapterID1, playIfNeeded) {
  let closure_0 = chapterID2;
  const obj = DataBindByName;
  const iter = obj.useRiveNumber(chapterID, instance);
  const setValue = iter.setValue;
  const value = iter.value;
  const items = [chapterID2, setValue, playIfNeeded];
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
  let closure_1 = chapterID1;
  let closure_2 = react.useRef(chapterID1);
  const items1 = [chapterID1];
  const effect1 = react.useEffect(f86925, items1);
  const items2 = [value];
  const effect2 = react.useEffect(() => {
    if (undefined !== value) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
}
export function useStringBinding(LVL, instance, LVL2, LVL1, playIfNeeded) {
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
  const effect1 = react.useEffect(f86925, items1);
  const items2 = [value];
  const effect2 = react.useEffect(() => {
    if (undefined !== value) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
}
export function useBooleanBinding(reducedMotion, instance, reducedMotionEnabled, on1, playIfNeeded) {
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
  const effect1 = react.useEffect(f86925, items1);
  const items2 = [value];
  const effect2 = react.useEffect(() => {
    if (undefined !== value) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
}
export function useColorBinding(FillColor, instance, FillColor2, FillColor1, playIfNeeded) {
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
}
export function useEnumBinding(device, instance, device2, device1, playIfNeeded) {
  let closure_0 = device2;
  const obj = DataBindByName;
  const iter = obj.useRiveEnum(device, instance);
  const setValue = iter.setValue;
  const value = iter.value;
  const items = [device2, setValue, playIfNeeded];
  const effect = react.useEffect(() => {
    const str = closure_0;
    if (null != closure_0) {
      setValue(str.toString());
      if (closure_1 != null) {
        closure_1();
      }
    }
  }, items);
  let closure_1 = device1;
  let closure_2 = react.useRef(device1);
  const items1 = [device1];
  const effect1 = react.useEffect(f86925, items1);
  const items2 = [value];
  const effect2 = react.useEffect(() => {
    if (undefined !== value) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
}
export function useTriggerBinding(stateChange, instance, stateChange2, stateChange1, playIfNeeded) {
  let closure_0 = stateChange2;
  let closure_1 = playIfNeeded;
  const tmp = DataBindByName;
  let tmp2;
  const useRiveTrigger = tmp.useRiveTrigger;
  if (null != stateChange1) {
    tmp2 = { onTrigger: stateChange1 };
    const obj = { onTrigger: stateChange1 };
  }
  const trigger = useRiveTrigger(stateChange, instance, tmp2).trigger;
  const items = [stateChange2, trigger, playIfNeeded];
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
}
export function useImageBinding(outfit01Image, instance, outfit01Image2, outfit01Image1, playIfNeeded) {
  react = outfit01Image1;
  const current2 = playIfNeeded;
  let closure_5 = react.useRef(null);
  const effect = react.useEffect(() => {
    let ref;
    return () => {
      if (null != ref.current) {
        current = tmp.current;
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => current.dispose(), closure_2_10);
      }
      ref.current = null;
    };
  }, []);
  let closure_6 = react.useRef(playIfNeeded);
  const items = [playIfNeeded];
  const effect1 = react.useEffect(() => {
    closure_6.current = current2;
  }, items);
  let closure_7 = react.useRef(null);
  const items1 = [outfit01Image, instance, outfit01Image2];
  const effect2 = react.useEffect(() => {
    let isCancelled;
    function loadImage() {
      return closure_0(...arguments);
    }
    if (null != isCancelled) {
      let tmp = outfit01Image2;
      if (null != outfit01Image2) {
        let c0 = false;
        isCancelled = function isCancelled() {
          return c0;
        };
        outfit01Image = outfit01Image2(function*(arg0, value) {
          let obj5;
          function ensureImageUri(channelIcon) {
            if (typeof channelIcon === "number") {
              return closure_1_5.resolveAssetSource(channelIcon).uri;
            } else {
              return channelIcon;
            }
          }
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj = { value, done: true };
              return obj;
            } else {
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            try {
              let tmp;
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  tmp = undefined;
                  current = undefined;
                  c2 = 1;
                  c3 = 1;
                  const obj3 = { value: obj5.ignoreErrors(ref3.current), done: false };
                  obj5 = tmp(isCancelled[9]);
                  return obj3;
                }
              } else {
                if (1 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else if (!current()) {
                    const RiveImages = tmp(isCancelled[4]).RiveImages;
                    tmp = RiveImages.loadFromURLAsync(ensureImageUri(outfit01Image2));
                    ref3.current = tmp;
                    c2 = 2;
                    c3 = 1;
                    const obj6 = { value: tmp, done: false };
                    return obj6;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                } else {
                  current = value;
                  if (current()) {
                    current.dispose();
                  } else {
                    const imagePropertyResult = isCancelled.imageProperty(tmp);
                    if (imagePropertyResult != null) {
                      const result = imagePropertyResult.set(current);
                    }
                    if (null != ref.current) {
                      disposeRiveImageLater(ref.current);
                    }
                    ref.current = current;
                    current = ref2.current;
                    if (current != null) {
                      current();
                    }
                  }
                }
                c3 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } catch (tmp35) {
              c3 = 3;
              throw tmp35;
            }
          }
        });
        const tmp3 = outfit01Image;
        const tmp4 = instance;
        let obj = outfit01Image(instance[9]);
        obj.ignoreErrors(loadImage());
        return () => {
          c0 = true;
        };
      }
    }
  }, items1);
  let closure_8 = react.useRef(outfit01Image1);
  const items2 = [outfit01Image1];
  const effect3 = react.useEffect(() => {
    closure_8.current = current;
  }, items2);
  const items3 = [outfit01Image, instance];
  const effect4 = react.useEffect(() => {
    let ref;
    const obj = instance;
    if (null != instance) {
      const imagePropertyResult = obj.imageProperty(outfit01Image);
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
  }, items3);
}
export function useArtboardBinding(Icon, instance, file, Icon2, playIfNeeded) {
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
}
