// Module ID: 5236
// Function ID: 45222
// Name: _isNativeReflectConstruct
// Dependencies: [65, 6, 7, 15, 17, 18, 77, 31, 27, 33, 5237, 5221, 5226, 5222, 5238, 5220, 5239, 5240, 5241, 5242, 5243, 5232]
// Exports: default

// Module 5236 (_isNativeReflectConstruct)
import _toConsumableArray from "_toConsumableArray";
import _defineProperty from "_defineProperty";
import result from "result";
import findHandler from "findHandler";
import transformIntoHandlerTags from "transformIntoHandlerTags";
import module_5241 from "module_5241";
import importDefaultResult from "_defineProperty";
import closure_9 from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import hasProperty from "hasProperty";

let DeviceEventEmitter;
let Platform;
let UIManager;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function hasUnresolvedRefs(simultaneousHandlers) {
  function extract(simultaneousHandlers) {
    if (Array.isArray(simultaneousHandlers)) {
      let someResult = simultaneousHandlers.some((current) => {
        let tmp = current;
        if (current) {
          tmp = null === current.current;
        }
        return tmp;
      });
    } else {
      someResult = simultaneousHandlers;
      if (simultaneousHandlers) {
        someResult = null === simultaneousHandlers.current;
      }
    }
    return someResult;
  }
  return extract(simultaneousHandlers.simultaneousHandlers) || extract(simultaneousHandlers.waitFor);
}
({ Platform, UIManager, DeviceEventEmitter } = get_ActivityIndicator);
require("customDirectEventTypes").customDirectEventTypes.topGestureHandlerEvent = { registrationName: "onGestureHandlerEvent" };
hasProperty = hasProperty.isFabric();
if (hasProperty) {
  hasProperty = {};
  hasProperty = { registrationName: "onGestureHandlerEvent" };
  hasProperty.topOnGestureHandlerEvent = hasProperty;
  let obj1 = { registrationName: "onGestureHandlerStateChange" };
  hasProperty.topOnGestureHandlerStateChange = obj1;
}
let merged = Object.assign({ onGestureHandlerEvent: { registrationName: "onGestureHandlerEvent" }, onGestureHandlerStateChange: { registrationName: "onGestureHandlerStateChange" } }, hasProperty);
UIManager.genericDirectEventTypes = Object.assign({}, UIManager.genericDirectEventTypes, merged);
let viewManagerConfig;
if (null != UIManager.getViewManagerConfig) {
  viewManagerConfig = UIManager.getViewManagerConfig("getConstants");
}
if (viewManagerConfig) {
  let _Object = Object;
  viewManagerConfig.genericDirectEventTypes = Object.assign({}, viewManagerConfig.genericDirectEventTypes, merged);
}
let fn = UIManager.setJSResponder;
if (undefined === fn) {
  fn = () => {

  };
}
let fn2 = UIManager.clearJSResponder;
if (undefined === fn2) {
  fn2 = () => {

  };
}
UIManager.setJSResponder = (prototype, _invoke) => {
  importDefault(5226).handleSetJSResponder(prototype, _invoke);
  fn(prototype, _invoke);
};
UIManager.clearJSResponder = () => {
  const result = importDefault(5226).handleClearJSResponder();
  fn2();
};
const importDefaultResultResult = importDefaultResult({}, require("module_5222").State.UNDETERMINED, undefined);
const importDefaultResultResult1 = importDefaultResult(importDefaultResult({}, require("module_5222").State.UNDETERMINED, undefined), require("module_5222").State.BEGAN, "onBegan");
const importDefaultResultResult2 = importDefaultResult(importDefaultResult(importDefaultResult({}, require("module_5222").State.UNDETERMINED, undefined), require("module_5222").State.BEGAN, "onBegan"), require("module_5222").State.FAILED, "onFailed");
const importDefaultResultResult3 = importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult({}, require("module_5222").State.UNDETERMINED, undefined), require("module_5222").State.BEGAN, "onBegan"), require("module_5222").State.FAILED, "onFailed"), require("module_5222").State.CANCELLED, "onCancelled");
let closure_12 = importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult({}, require("module_5222").State.UNDETERMINED, undefined), require("module_5222").State.BEGAN, "onBegan"), require("module_5222").State.FAILED, "onFailed"), require("module_5222").State.CANCELLED, "onCancelled"), require("module_5222").State.ACTIVE, "onActivated"), require("module_5222").State.END, "onEnded");

export default function createHandler(name) {
  let _toConsumableArray;
  let customNativeProps;
  name = name.name;
  let allowedProps = name.allowedProps;
  if (undefined === allowedProps) {
    allowedProps = [];
  }
  let config = name.config;
  if (undefined === config) {
    config = {};
  }
  ({ transformProps: _toConsumableArray, customNativeProps } = name);
  if (undefined === customNativeProps) {
    customNativeProps = [];
  }
  let tmp = ((Component) => {
    class Handler {
      constructor(arg0) {
        self = this;
        tmp = customNativeProps(this, apply);
        items = [];
        items[0] = Component;
        obj = outer2_7(apply);
        tmp2 = outer2_6;
        if (outer2_13()) {
          tmp4 = globalThis;
          _Reflect = Reflect;
          tmp5 = outer2_7;
          constructResult = Reflect.construct(obj, items, outer2_7(self).constructor);
        } else {
          constructResult = obj.apply(self, items);
        }
        tmp2Result = tmp2(self, constructResult);
        apply = tmp2Result;
        tmp2Result.handlerTag = -1;
        tmp2Result.onGestureHandlerEvent = (nativeEvent) => {
          if (nativeEvent.nativeEvent.handlerTag === tmp2Result.handlerTag) {
            if ("function" === typeof tmp2Result.props.onGestureEvent) {
              if (null != tmp2Result.props.onGestureEvent) {
                const props2 = tmp2Result.props;
                props2.onGestureEvent(nativeEvent);
              }
            }
          } else if (null != tmp2Result.props.onGestureHandlerEvent) {
            const props = tmp2Result.props;
            const result = props.onGestureHandlerEvent(nativeEvent);
          }
        };
        tmp2Result.onGestureHandlerStateChange = (nativeEvent) => {
          if (nativeEvent.nativeEvent.handlerTag === tmp2Result.handlerTag) {
            if ("function" === typeof tmp2Result.props.onHandlerStateChange) {
              if (null != tmp2Result.props.onHandlerStateChange) {
                const props = tmp2Result.props;
                props.onHandlerStateChange(nativeEvent);
              }
            }
            let tmp10 = tmp9;
            if (outer3_12[nativeEvent.nativeEvent.state]) {
              tmp10 = tmp2Result.props[tmp9];
            }
            let tmp12 = tmp10;
            if (tmp10) {
              tmp12 = "function" === typeof tmp10;
            }
            if (tmp12) {
              tmp10(nativeEvent);
            }
          } else if (null != tmp2Result.props.onGestureHandlerStateChange) {
            const props2 = tmp2Result.props;
            const result = props2.onGestureHandlerStateChange(nativeEvent);
          }
        };
        tmp2Result.refHandler = (viewNode) => {
          tmp2Result.viewNode = viewNode;
          const Children = outer3_9.Children;
          const onlyResult = Children.only(tmp2Result.props.children);
          if (obj.isReact19()) {
            const props = onlyResult.props;
            let ref;
            if (null != props) {
              ref = props.ref;
            }
          } else if (null != onlyResult) {
            ref = onlyResult.ref;
          }
          if (ref) {
            if ("function" === typeof ref) {
              ref(viewNode);
            } else {
              ref.current = viewNode;
            }
          }
        };
        tmp2Result.createGestureHandler = (config) => {
          tmp2Result.handlerTag = name(config[14]).getNextHandlerTag();
          tmp2Result.config = config;
          const obj = name(config[14]);
          allowedProps(config[12]).createGestureHandler(Handler, tmp2Result.handlerTag, config);
        };
        tmp2Result.attachGestureHandler = (viewTag) => {
          tmp2Result.viewTag = viewTag;
          let obj = name(config[15]);
          obj = { onGestureEvent: tmp2Result.onGestureHandlerEvent, onGestureStateChange: tmp2Result.onGestureHandlerStateChange };
          let result = obj.registerOldGestureHandler(tmp2Result.handlerTag, obj);
          const props = tmp2Result.props;
          let onGestureEvent;
          if (null != props) {
            onGestureEvent = props.onGestureEvent;
          }
          let tmp3 = onGestureEvent;
          if (onGestureEvent) {
            let tmp4 = "current" in onGestureEvent;
            if (!tmp4) {
              tmp4 = "workletEventHandler" in onGestureEvent;
            }
            tmp3 = tmp4;
          }
          const props2 = tmp2Result.props;
          if (!tmp3) {
            if (!onHandlerStateChange) {
              if (onGestureEvent) {
                if ("__isNative" in onGestureEvent) {
                  let REANIMATED_WORKLET = name(config[16]).ActionType.NATIVE_ANIMATED_EVENT;
                }
              }
              REANIMATED_WORKLET = name(config[16]).ActionType.JS_FUNCTION_OLD_API;
            }
            allowedProps(config[12]).attachGestureHandler(tmp2Result.handlerTag, viewTag, REANIMATED_WORKLET);
            const obj3 = allowedProps(config[12]);
            const result1 = name(config[17]).scheduleFlushOperations();
            const obj4 = name(config[17]);
            name(config[18]).ghQueueMicrotask(() => {
              const MountRegistry = name(config[19]).MountRegistry;
              const result = MountRegistry.gestureHandlerWillMount(outer1_0);
            });
          }
          REANIMATED_WORKLET = name(config[16]).ActionType.REANIMATED_WORKLET;
        };
        tmp2Result.updateGestureHandler = (config) => {
          tmp2Result.config = config;
          allowedProps(config[12]).updateGestureHandler(tmp2Result.handlerTag, config);
          const obj = allowedProps(config[12]);
          const result = name(config[17]).scheduleFlushOperations();
        };
        tmp2Result.config = {};
        tmp2Result.propsRef = outer2_9.createRef();
        tmp2Result.isMountedRef = outer2_9.createRef();
        tmp2Result.state = { allowTouches: true };
        if (Component.id) {
          tmp7 = name;
          tmp8 = config;
          num = 15;
          if (undefined !== name(config[15]).handlerIDToTag[Component.id]) {
            tmp11 = globalThis;
            _Error = Error;
            _HermesInternal = HermesInternal;
            str = "Handler with ID \"";
            str2 = "\" already registered";
            prototype = Error.prototype;
            tmp12 = new.target;
            tmp13 = new.target;
            error = new Error("Handler with ID \"" + Component.id + "\" already registered");
            tmp15 = error;
            throw error;
          } else {
            tmp9 = name;
            tmp10 = config;
            name(config[15]).handlerIDToTag[Component.id] = tmp2Result.handlerTag;
          }
        }
        return tmp2Result;
      }
    }
    outer1_8(Handler, Component);
    let obj = {
      key: "componentDidMount",
      value: function componentDidMount() {
        let self = this;
        self = this;
        this.isMountedRef.current = true;
        if (outer2_14(this.props)) {
          name(config[18]).ghQueueMicrotask(() => {
            self.update(1);
          });
          const obj = name(config[18]);
        }
        if (outer1_3) {
          let props = outer1_3(self.props);
        } else {
          props = self.props;
        }
        const items = [];
        const obj2 = name(config[17]);
        self.createGestureHandler(obj2.filterConfig(props, items.concat(outer2_3(outer1_1), outer2_3(outer1_4)), outer1_2));
        if (self.viewNode) {
          self.attachGestureHandler(allowedProps(config[20])(self.viewNode));
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("[Gesture Handler] Failed to obtain view for " + self.displayName + ". Note that old API doesn't support functional components.");
          throw error;
        }
        const tmp5 = outer2_3(outer1_1);
      }
    };
    let items = [obj, , , , , ];
    obj = {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        const self = this;
        const tmp = allowedProps(config[20])(this.viewNode);
        if (this.viewTag !== tmp) {
          self.attachGestureHandler(tmp);
        }
        self.update(1);
      }
    };
    items[1] = obj;
    obj = {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        const self = this;
        const inspectorToggleListener = this.inspectorToggleListener;
        if (null != inspectorToggleListener) {
          inspectorToggleListener.remove();
        }
        self.isMountedRef.current = false;
        const result = name(config[15]).unregisterOldGestureHandler(self.handlerTag);
        const obj = name(config[15]);
        allowedProps(config[12]).dropGestureHandler(self.handlerTag);
        const obj2 = allowedProps(config[12]);
        const result1 = name(config[17]).scheduleFlushOperations();
        if (self.props.id) {
          const handlerIDToTag = name(config[15]).handlerIDToTag;
          delete tmp[tmp2];
        }
        const MountRegistry = name(config[19]).MountRegistry;
        const result2 = MountRegistry.gestureHandlerWillUnmount(self);
      }
    };
    items[2] = obj;
    items[3] = {
      key: "update",
      value: function update(arg0) {
        let self = this;
        let closure_0 = arg0;
        self = this;
        if (this.isMountedRef.current) {
          if (outer2_14(self.props)) {
            if (arg0 > 0) {
              name(config[18]).ghQueueMicrotask(() => {
                self.update(closure_0 - 1);
              });
              const obj3 = name(config[18]);
            }
          }
          if (outer1_3) {
            let props = outer1_3(self.props);
          } else {
            props = self.props;
          }
          const items = [];
          const obj = name(config[17]);
          const filterConfigResult = obj.filterConfig(props, items.concat(outer2_3(outer1_1), outer2_3(outer1_4)), outer1_2);
          const tmp8 = outer2_3(outer1_1);
          if (!obj2.deepEqual(self.config, filterConfigResult)) {
            self.updateGestureHandler(filterConfigResult);
          }
          obj2 = name(config[11]);
        }
      }
    };
    items[4] = {
      key: "setNativeProps",
      value: function setNativeProps(arg0) {
        const self = this;
        const merged = Object.assign({}, this.props, arg0);
        let tmp2 = merged;
        if (outer1_3) {
          tmp2 = outer1_3(merged);
        }
        const items = [];
        const obj = name(config[17]);
        self.updateGestureHandler(obj.filterConfig(tmp2, items.concat(outer2_3(outer1_1), outer2_3(outer1_4)), outer1_2));
      }
    };
    items[5] = {
      key: "render",
      value: function render() {
        let onGestureEvent;
        let onGestureHandlerEvent;
        let onGestureHandlerEvent2;
        let onGestureHandlerStateChange;
        let onGestureHandlerStateChange2;
        let onHandlerStateChange;
        let props;
        let props2;
        const self = this;
        ({ onGestureHandlerEvent, props } = this);
        ({ onGestureEvent, onGestureHandlerEvent: onGestureHandlerEvent2 } = props);
        if (onGestureEvent) {
          if ("function" !== typeof onGestureEvent) {
            let tmp = onGestureEvent;
            if (onGestureHandlerEvent2) {
              const _Error4 = Error;
              const error = new Error("Nesting touch handlers with native animated driver is not supported yet");
              throw error;
            }
          }
          ({ onGestureHandlerStateChange, props: props2 } = self);
          ({ onHandlerStateChange, onGestureHandlerStateChange: onGestureHandlerStateChange2 } = props2);
          if (onHandlerStateChange) {
            if ("function" !== typeof onHandlerStateChange) {
              let tmp7 = onHandlerStateChange;
              if (onGestureHandlerStateChange2) {
                const _Error3 = Error;
                const error1 = new Error("Nesting touch handlers with native animated driver is not supported yet");
                throw error1;
              }
            }
            let obj = {};
            let tmp13;
            if (self.state.allowTouches) {
              tmp13 = tmp;
            }
            obj.onGestureHandlerEvent = tmp13;
            let tmp14;
            if (self.state.allowTouches) {
              tmp14 = tmp7;
            }
            obj.onGestureHandlerStateChange = tmp14;
            self.propsRef.current = obj;
            const Children = outer2_9.Children;
            const onlyResult = Children.only(self.props.children);
            const _Object = Object;
            obj = { ref: self.refHandler, collapsable: false };
            let obj2 = name(config[11]);
            if (obj2.isTestEnv()) {
              obj = { handlerType: Handler, handlerTag: self.handlerTag, enabled: self.props.enabled };
              let obj1 = obj;
            } else {
              obj1 = {};
            }
            obj2 = {};
            const testID = self.props.testID;
            if (null != testID) {
              let testID2 = testID;
            } else {
              testID2 = onlyResult.props.testID;
            }
            obj2.testID = testID2;
            return outer2_9.cloneElement(onlyResult, Object.assign(obj, obj1, obj2, obj), onlyResult.props.children);
          }
          tmp7 = onGestureHandlerStateChange;
          if (onGestureHandlerStateChange2) {
            tmp7 = onGestureHandlerStateChange;
            if ("function" !== typeof onGestureHandlerStateChange2) {
              const _Error2 = Error;
              const error2 = new Error("Nesting touch handlers with native animated driver is not supported yet");
              throw error2;
            }
          }
        }
        tmp = onGestureHandlerEvent;
        if (onGestureHandlerEvent2) {
          tmp = onGestureHandlerEvent;
          if ("function" !== typeof onGestureHandlerEvent2) {
            const _Error = Error;
            const error3 = new Error("Nesting touch handlers with native animated driver is not supported yet");
            throw error3;
          }
        }
      }
    };
    return outer1_5(Handler, items);
  })(Component.Component);
  tmp.displayName = name;
  tmp.contextType = allowedProps(config[21]);
  return tmp;
};
