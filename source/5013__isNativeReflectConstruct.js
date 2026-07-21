// Module ID: 5013
// Function ID: 42821
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: default

// Module 5013 (_isNativeReflectConstruct)
let DeviceEventEmitter;
let Platform;
let UIManager;
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const importDefaultResult = importDefault(dependencyMap[6]);
let closure_9 = importAll(dependencyMap[7]);
({ Platform, UIManager, DeviceEventEmitter } = arg1(dependencyMap[8]));
const jsx = arg1(dependencyMap[9]).jsx;
arg1(dependencyMap[10]).customDirectEventTypes.topGestureHandlerEvent = { registrationName: "onGestureHandlerEvent" };
let obj = arg1(dependencyMap[11]);
let isFabricResult = obj.isFabric();
if (isFabricResult) {
  obj = {};
  obj = { registrationName: "onGestureHandlerEvent" };
  obj.topOnGestureHandlerEvent = obj;
  const obj1 = { registrationName: "onGestureHandlerStateChange" };
  obj.topOnGestureHandlerStateChange = obj1;
  isFabricResult = obj;
}
const merged = Object.assign({ onGestureHandlerEvent: { registrationName: "onGestureHandlerEvent" }, onGestureHandlerStateChange: { registrationName: "onGestureHandlerStateChange" } }, isFabricResult);
UIManager.genericDirectEventTypes = Object.assign({}, UIManager.genericDirectEventTypes, merged);
let viewManagerConfig;
if (null != UIManager.getViewManagerConfig) {
  viewManagerConfig = UIManager.getViewManagerConfig("getConstants");
}
if (viewManagerConfig) {
  const _Object = Object;
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
UIManager.setJSResponder = (arg0, arg1) => {
  importDefault(dependencyMap[12]).handleSetJSResponder(arg0, arg1);
  fn(arg0, arg1);
};
UIManager.clearJSResponder = () => {
  const result = importDefault(dependencyMap[12]).handleClearJSResponder();
  fn2();
};
const tmp3 = arg1(dependencyMap[8]);
const importDefaultResultResult = importDefaultResult({}, arg1(dependencyMap[13]).State.UNDETERMINED, undefined);
const importDefaultResultResult1 = importDefaultResult(importDefaultResult({}, arg1(dependencyMap[13]).State.UNDETERMINED, undefined), arg1(dependencyMap[13]).State.BEGAN, "onBegan");
const importDefaultResultResult2 = importDefaultResult(importDefaultResult(importDefaultResult({}, arg1(dependencyMap[13]).State.UNDETERMINED, undefined), arg1(dependencyMap[13]).State.BEGAN, "onBegan"), arg1(dependencyMap[13]).State.FAILED, "onFailed");
const importDefaultResultResult3 = importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult({}, arg1(dependencyMap[13]).State.UNDETERMINED, undefined), arg1(dependencyMap[13]).State.BEGAN, "onBegan"), arg1(dependencyMap[13]).State.FAILED, "onFailed"), arg1(dependencyMap[13]).State.CANCELLED, "onCancelled");
let closure_12 = importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult({}, arg1(dependencyMap[13]).State.UNDETERMINED, undefined), arg1(dependencyMap[13]).State.BEGAN, "onBegan"), arg1(dependencyMap[13]).State.FAILED, "onFailed"), arg1(dependencyMap[13]).State.CANCELLED, "onCancelled"), arg1(dependencyMap[13]).State.ACTIVE, "onActivated"), arg1(dependencyMap[13]).State.END, "onEnded");

export default function createHandler(name) {
  let customNativeProps;
  name = name.name;
  const arg1 = name;
  let allowedProps = name.allowedProps;
  if (undefined === allowedProps) {
    allowedProps = [];
  }
  const importDefault = allowedProps;
  let config = name.config;
  if (undefined === config) {
    config = {};
  }
  const dependencyMap = config;
  ({ transformProps: closure_3, customNativeProps } = name);
  if (undefined === customNativeProps) {
    customNativeProps = [];
  }
  let closure_4 = customNativeProps;
  const tmp = (Component) => {
    class Handler {
      constructor(arg0) {
        self = this;
        tmp = closure_4(this, Handler);
        items = [];
        items[0] = Component;
        obj = closure_7(Handler);
        tmp2 = closure_6;
        if (closure_13()) {
          tmp4 = globalThis;
          _Reflect = Reflect;
          tmp5 = closure_7;
          constructResult = Reflect.construct(obj, items, closure_7(self).constructor);
        } else {
          constructResult = obj.apply(self, items);
        }
        tmp2Result = tmp2(self, constructResult);
        Handler = tmp2Result;
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
            if (closure_12[nativeEvent.nativeEvent.state]) {
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
          const Children = React.Children;
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
          tmp2Result.handlerTag = tmp2Result(closure_2[14]).getNextHandlerTag();
          tmp2Result.config = config;
          const obj = tmp2Result(closure_2[14]);
          callback(closure_2[12]).createGestureHandler(tmp2Result, tmp2Result.handlerTag, config);
        };
        tmp2Result.attachGestureHandler = (viewTag) => {
          tmp2Result.viewTag = viewTag;
          let obj = tmp2Result(closure_2[15]);
          obj = { onGestureEvent: tmp2Result.onGestureHandlerEvent, onGestureStateChange: tmp2Result.onGestureHandlerStateChange };
          const result = obj.registerOldGestureHandler(tmp2Result.handlerTag, obj);
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
                  let REANIMATED_WORKLET = tmp2Result(closure_2[16]).ActionType.NATIVE_ANIMATED_EVENT;
                }
              }
              REANIMATED_WORKLET = tmp2Result(closure_2[16]).ActionType.JS_FUNCTION_OLD_API;
            }
            callback(closure_2[12]).attachGestureHandler(tmp2Result.handlerTag, viewTag, REANIMATED_WORKLET);
            const obj3 = callback(closure_2[12]);
            const result1 = tmp2Result(closure_2[17]).scheduleFlushOperations();
            const obj4 = tmp2Result(closure_2[17]);
            tmp2Result(closure_2[18]).ghQueueMicrotask(() => {
              const MountRegistry = callback(closure_2[19]).MountRegistry;
              const result = MountRegistry.gestureHandlerWillMount(callback);
            });
          }
          REANIMATED_WORKLET = tmp2Result(closure_2[16]).ActionType.REANIMATED_WORKLET;
        };
        tmp2Result.updateGestureHandler = (config) => {
          tmp2Result.config = config;
          callback(closure_2[12]).updateGestureHandler(tmp2Result.handlerTag, config);
          const obj = callback(closure_2[12]);
          const result = tmp2Result(closure_2[17]).scheduleFlushOperations();
        };
        tmp2Result.config = {};
        tmp2Result.propsRef = closure_9.createRef();
        tmp2Result.isMountedRef = closure_9.createRef();
        tmp2Result.state = { allowTouches: true };
        if (Component.id) {
          tmp7 = Handler;
          tmp8 = closure_2;
          num = 15;
          if (undefined !== Handler(closure_2[15]).handlerIDToTag[Component.id]) {
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
            tmp9 = Handler;
            tmp10 = closure_2;
            Handler(closure_2[15]).handlerIDToTag[Component.id] = tmp2Result.handlerTag;
          }
        }
        return tmp2Result;
      }
    }
    const name = Handler;
    callback2(Handler, Component);
    let obj = {
      key: "componentDidMount",
      value: function componentDidMount() {
        const self = this;
        const Handler = this;
        this.isMountedRef.current = true;
        if (callback6(this.props)) {
          Handler(closure_2[18]).ghQueueMicrotask(() => {
            self.update(1);
          });
          const obj = Handler(closure_2[18]);
        }
        if (callback2) {
          let props = callback2(self.props);
        } else {
          props = self.props;
        }
        const items = [];
        const obj2 = Handler(closure_2[17]);
        self.createGestureHandler(obj2.filterConfig(props, items.concat(callback2(callback), callback2(closure_4)), closure_2));
        if (self.viewNode) {
          self.attachGestureHandler(callback(closure_2[20])(self.viewNode));
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("[Gesture Handler] Failed to obtain view for " + Handler.displayName + ". Note that old API doesn't support functional components.");
          throw error;
        }
        const tmp5 = callback2(callback);
      }
    };
    const items = [obj, , , , , ];
    obj = {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        const self = this;
        const tmp = callback(closure_2[20])(this.viewNode);
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
        const result = Handler(closure_2[15]).unregisterOldGestureHandler(self.handlerTag);
        const obj = Handler(closure_2[15]);
        callback(closure_2[12]).dropGestureHandler(self.handlerTag);
        const obj2 = callback(closure_2[12]);
        const result1 = Handler(closure_2[17]).scheduleFlushOperations();
        if (self.props.id) {
          const handlerIDToTag = Handler(closure_2[15]).handlerIDToTag;
          delete r2[r4];
        }
        const MountRegistry = Handler(closure_2[19]).MountRegistry;
        const result2 = MountRegistry.gestureHandlerWillUnmount(self);
      }
    };
    items[2] = obj;
    items[3] = {
      key: "update",
      value: function update(arg0) {
        let self = this;
        self = this;
        if (this.isMountedRef.current) {
          if (callback6(self.props)) {
            if (arg0 > 0) {
              Handler(closure_2[18]).ghQueueMicrotask(() => {
                self.update(arg0 - 1);
              });
              const obj3 = Handler(closure_2[18]);
            }
          }
          if (callback2) {
            let props = callback2(self.props);
          } else {
            props = self.props;
          }
          const items = [];
          const obj = Handler(closure_2[17]);
          const filterConfigResult = obj.filterConfig(props, items.concat(callback2(self), callback2(closure_4)), closure_2);
          const tmp8 = callback2(self);
          if (!obj2.deepEqual(self.config, filterConfigResult)) {
            self.updateGestureHandler(filterConfigResult);
          }
          const obj2 = Handler(closure_2[11]);
        }
      }
    };
    items[4] = {
      key: "setNativeProps",
      value: function setNativeProps(arg0) {
        const self = this;
        const merged = Object.assign({}, this.props, arg0);
        let tmp2 = merged;
        if (callback2) {
          tmp2 = callback2(merged);
        }
        const items = [];
        const obj = Handler(closure_2[17]);
        self.updateGestureHandler(obj.filterConfig(tmp2, items.concat(callback2(closure_1), callback2(closure_4)), closure_2));
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
            const Children = React.Children;
            const onlyResult = Children.only(self.props.children);
            const _Object = Object;
            obj = { ref: self.refHandler, collapsable: false };
            let obj2 = Handler(closure_2[11]);
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
            return React.cloneElement(onlyResult, Object.assign(obj, obj1, obj2, obj), onlyResult.props.children);
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
    return callback(Handler, items);
  }(Component.Component);
  tmp.displayName = name;
  tmp.contextType = importDefault(dependencyMap[21]);
  return tmp;
};
