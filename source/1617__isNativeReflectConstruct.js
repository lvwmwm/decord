// Module ID: 1617
// Function ID: 17925
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1618, 31, 27, 33, 1585, 1636, 44, 1677, 1678, 1686, 1688, 1626, 1607, 1689, 1691, 1685, 1669, 1622, 1611, 1593, 1695, 1610, 1679, 1681, 1696, 1697, 1698, 1720, 1721]
// Exports: createAnimatedComponent

// Module 1617 (_isNativeReflectConstruct)
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import setAndForwardRef from "setAndForwardRef";
import isWorkletFunction from "isWorkletFunction";
import isWorkletEventHandler from "isWorkletEventHandler";
import startObservingProgress from "startObservingProgress";
import module_1698 from "module_1698";
import get_ActivityIndicator from "flattenArray";
import { jsx } from "getCurrentReactOwner";
import isJest from "isJest";
import isJest from "isJest";
import isJest from "isJest";
import isJest from "isJest";

let Platform;
let closure_10;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function filterOutAnimatedStyles(arr) {
  if (!arr) {
    return arr;
  } else {
    const _Array = Array;
    if (Array.isArray(arr)) {
      const found = arr.filter((arg0) => {
        let tmp = arg0;
        if (arg0) {
          tmp = "viewDescriptors" in arg0;
        }
        return !tmp;
      });
      let mapped = found.map((arg0) => {
        let tmp = arg0;
        if (Array.isArray(arg0)) {
          tmp = outer1_18(arg0);
        }
        return tmp;
      });
    } else {
      mapped = arr;
      if (null != arr) {
        mapped = arr;
        if (arr.viewDescriptors) {
          mapped = {};
        }
      }
    }
  }
}
({ Platform, processColor: closure_9, StyleSheet: closure_10 } = get_ActivityIndicator);
isJest = isJest.isWeb();
isJest = isJest.isJest();
isJest = isJest.isReact19();
isJest = isJest.shouldBeUseWeb();
if (isJest) {
  let result = require("startWebLayoutAnimation").configureWebLayoutAnimations();
  let obj5 = require("startWebLayoutAnimation");
}
let c16 = 0;

export const createAnimatedComponent = function createAnimatedComponent(name) {
  const _require = name;
  const importDefault = arg1;
  if (!isJest) {
    let tmp4 = "function" !== typeof name;
    if (!tmp4) {
      tmp4 = name.prototype && name.prototype.isReactComponent;
      let tmp5 = name.prototype && name.prototype.isReactComponent;
    }
    let _HermesInternal = HermesInternal;
    importDefault(44)(tmp4, "Looks like you're passing a function component `" + name.name + "` to `createAnimatedComponent` function which supports only class components. Please wrap your function component with `React.forwardRef()` or use a class component instead.");
    let tmp3 = importDefault(44);
  }
  let tmp8 = ((Component) => {
    class AnimatedComponent {
      constructor(arg0) {
        self = this;
        tmp = outer2_3(this, apply);
        items = [];
        items[0] = Component;
        obj = outer2_6(apply);
        tmp2 = outer2_5;
        if (outer2_17()) {
          tmp4 = globalThis;
          _Reflect = Reflect;
          tmp5 = outer2_6;
          constructResult = Reflect.construct(obj, items, outer2_6(self).constructor);
        } else {
          constructResult = obj.apply(self, items);
        }
        tmp2Result = tmp2(self, constructResult);
        apply = tmp2Result;
        tmp2Result._styles = null;
        tmp2Result._isFirstRender = true;
        tmp2Result.jestAnimatedStyle = { value: {} };
        tmp2Result.jestAnimatedProps = { value: {} };
        tmp2Result._componentRef = null;
        tmp2Result._hasAnimatedRef = false;
        tmp2Result._componentDOMRef = null;
        tmp2Result._sharedElementTransition = null;
        tmp6 = closure_1(Component[12]);
        tmp6 = new tmp6();
        tmp2Result._jsPropsUpdater = tmp6;
        inlinePropManager = new closure_0(Component[13]).InlinePropManager();
        tmp2Result._InlinePropManager = inlinePropManager;
        propsFilter = new closure_0(Component[14]).PropsFilter();
        tmp2Result._PropsFilter = propsFilter;
        tmp10 = +outer2_16;
        outer2_16 = tmp10 + 1;
        tmp2Result.reanimatedID = tmp10;
        tmp2Result._willUnmount = false;
        tmp2Result._resolveComponentRef = (getAnimatableRef) => {
          if (getAnimatableRef) {
            if (getAnimatableRef.getAnimatableRef) {
              closure_0._hasAnimatedRef = true;
              let animatableRef = getAnimatableRef.getAnimatableRef();
            }
            return animatableRef;
          }
          animatableRef = getAnimatableRef;
          if (outer3_15) {
            if (getAnimatableRef) {
              if (getAnimatableRef.elementRef) {
                closure_0._componentDOMRef = getAnimatableRef.elementRef.current;
                animatableRef = getAnimatableRef;
              }
            }
            closure_0._componentDOMRef = getAnimatableRef;
            animatableRef = getAnimatableRef;
          }
        };
        obj = {
          getForwardedRef() {
                return tmp2Result.props.forwardedRef;
              },
          setLocalRef(arg0) {
                let entering;
                let sharedTransitionTag;
                if (arg0) {
                  if (arg0 !== tmp2Result._componentRef) {
                    tmp2Result._componentRef = tmp2Result._resolveComponentRef(arg0);
                    tmp2Result._viewInfo = undefined;
                  }
                  const props = tmp2Result.props;
                  ({ entering, sharedTransitionTag } = props);
                  if (!outer3_15) {
                    const result = tmp2Result(1626).enableLayoutAnimations(true, false);
                    const obj = tmp2Result(1626);
                  }
                  if (sharedTransitionTag) {
                    const result1 = tmp2Result._configureSharedTransition();
                  }
                  const context = tmp2Result.context;
                  if (null != context) {
                    const current = context.current;
                  }
                  let isFabricResult = !entering;
                  if (!isFabricResult) {
                    isFabricResult = tmp2Result(1585).isFabric();
                    const obj2 = tmp2Result(1585);
                  }
                  if (!isFabricResult) {
                    isFabricResult = current;
                  }
                  if (!isFabricResult) {
                    isFabricResult = outer3_12;
                  }
                  if (!isFabricResult) {
                    const result2 = tmp2Result._configureLayoutAnimation(tmp2Result(1607).LayoutAnimationType.ENTERING, tmp2Result.props.entering);
                  }
                }
              }
        };
        tmp2Result._setComponentRef = closure_1(Component[15])(obj);
        if (outer2_13) {
          obj1 = {};
          obj1.value = {};
          tmp2Result.jestAnimatedStyle = obj1;
          obj2 = {};
          obj2.value = {};
          tmp2Result.jestAnimatedProps = obj2;
        }
        tmp2Result.state = { settledProps: {}, reanimatedProps: {} };
        context = tmp2Result.context;
        current = undefined;
        if (null != context) {
          current = context.current;
        }
        obj6 = closure_0(Component[9]);
        tmp12 = obj6.isFabric() && !current;
        if (tmp12) {
          tmp13 = closure_0;
          tmp14 = Component;
          num = 17;
          result = tmp2Result._configureLayoutAnimation(closure_0(Component[17]).LayoutAnimationType.ENTERING, tmp2Result.props.entering);
        }
        return tmp2Result;
      }
    }
    outer1_7(AnimatedComponent, Component);
    let obj = {
      key: "componentDidMount",
      value: function componentDidMount() {
        const self = this;
        if (!outer2_12) {
          const NativeEventsManager = AnimatedComponent(1689).NativeEventsManager;
          const prototype = NativeEventsManager.prototype;
          const nativeEventsManager = new NativeEventsManager(self, outer1_1);
          self._NativeEventsManager = nativeEventsManager;
        }
        const _NativeEventsManager = self._NativeEventsManager;
        if (null != _NativeEventsManager) {
          _NativeEventsManager.attachEvents();
        }
        const _jsPropsUpdater = self._jsPropsUpdater;
        const result = _jsPropsUpdater.addOnJSPropsChangeListener(self);
        const result1 = self._attachAnimatedStyles();
        const _InlinePropManager = self._InlinePropManager;
        _InlinePropManager.attachInlineProps(self, self._getViewInfo());
        const componentViewTag = self.getComponentViewTag();
        let isFabricResult = AnimatedComponent(1585).isFabric();
        if (isFabricResult) {
          isFabricResult = -1 !== componentViewTag;
        }
        if (isFabricResult) {
          const PropsRegistryGarbageCollector = AnimatedComponent(1691).PropsRegistryGarbageCollector;
          PropsRegistryGarbageCollector.registerView(componentViewTag, self);
        }
        if (-1 !== componentViewTag) {
          const ComponentRegistry = AnimatedComponent(1685).ComponentRegistry;
          ComponentRegistry.register(componentViewTag, self);
        }
        const result2 = self._configureLayoutAnimation(AnimatedComponent(1607).LayoutAnimationType.LAYOUT, self.props.layout);
        const result3 = self._configureLayoutAnimation(AnimatedComponent(1607).LayoutAnimationType.EXITING, self.props.exiting);
        if (outer2_12) {
          if (self._componentDOMRef) {
            const _componentDOMRef = self._componentDOMRef;
            const dummyClone = _componentDOMRef.dummyClone;
            if (null != dummyClone) {
              if (dummyClone.firstChild) {
                _componentDOMRef.appendChild(dummyClone.firstChild);
                while (null != dummyClone) {
                  if (!dummyClone.firstChild) {
                    break;
                  }
                }
              }
            }
            delete tmp.dummyClone;
            if (self.props.exiting) {
              AnimatedComponent(1636).saveSnapshot(_componentDOMRef);
              const obj2 = AnimatedComponent(1636);
            }
            if (self.props.entering) {
              if (obj3.getReducedMotionFromConfig(self.props.entering)) {
                self._isFirstRender = false;
                const entering = self.props.entering;
                const callbackV = entering.callbackV;
                if (null != callbackV) {
                  callbackV.call(entering, true);
                }
              } else {
                const context = self.context;
                let current;
                if (null != context) {
                  current = context.current;
                }
                if (current) {
                  if (_componentDOMRef.style) {
                    _componentDOMRef.style.visibility = "initial";
                  }
                } else {
                  const result4 = AnimatedComponent(1636).startWebLayoutAnimation(self.props, _componentDOMRef, AnimatedComponent(1607).LayoutAnimationType.ENTERING);
                  const obj4 = AnimatedComponent(1636);
                }
              }
              obj3 = AnimatedComponent(1636);
            } else {
              self._isFirstRender = false;
            }
          }
        }
        let _willUnmount = !outer2_15;
        if (_willUnmount) {
          _willUnmount = AnimatedComponent(1585).isFabric();
          const obj5 = AnimatedComponent(1585);
        }
        if (_willUnmount) {
          _willUnmount = self._willUnmount;
        }
        if (_willUnmount) {
          _willUnmount = "number" === typeof componentViewTag;
        }
        if (_willUnmount) {
          const result5 = AnimatedComponent(1626).unmarkNodeAsRemovable(componentViewTag);
          const obj6 = AnimatedComponent(1626);
        }
        self._isFirstRender = false;
      }
    };
    let items = [obj, , , , , , , , , , , , , , ];
    obj = {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        let _componentDOMRef;
        let props;
        const self = this;
        const _NativeEventsManager = this._NativeEventsManager;
        if (null != _NativeEventsManager) {
          _NativeEventsManager.detachEvents();
        }
        const _jsPropsUpdater = self._jsPropsUpdater;
        const result = _jsPropsUpdater.removeOnJSPropsChangeListener(self);
        const componentViewTag = self.getComponentViewTag();
        let isFabricResult = AnimatedComponent(1585).isFabric();
        if (isFabricResult) {
          isFabricResult = -1 !== componentViewTag;
        }
        if (isFabricResult) {
          const PropsRegistryGarbageCollector = AnimatedComponent(1691).PropsRegistryGarbageCollector;
          PropsRegistryGarbageCollector.unregisterView(componentViewTag);
        }
        self._detachStyles();
        const _InlinePropManager = self._InlinePropManager;
        _InlinePropManager.detachInlineProps();
        if (self.props.sharedTransitionTag) {
          const result1 = self._configureSharedTransition(true);
        }
        const _sharedElementTransition = self._sharedElementTransition;
        if (null != _sharedElementTransition) {
          _sharedElementTransition.unregisterTransition(self.getComponentViewTag(), true);
        }
        const exiting = self.props.exiting;
        if (-1 !== componentViewTag) {
          const ComponentRegistry = AnimatedComponent(1685).ComponentRegistry;
          ComponentRegistry.unregister(componentViewTag);
        }
        if (outer2_12) {
          if (self._componentDOMRef) {
            if (exiting) {
              if (obj5.getReducedMotionFromConfig(exiting)) {
                if (null != exiting.callbackV) {
                  exiting.callbackV(true);
                }
              } else {
                const result2 = AnimatedComponent(1669).addHTMLMutationObserver();
                const obj6 = AnimatedComponent(1669);
                ({ props, _componentDOMRef } = self);
                const result3 = AnimatedComponent(1636).startWebLayoutAnimation(props, _componentDOMRef, AnimatedComponent(1607).LayoutAnimationType.EXITING);
                const obj7 = AnimatedComponent(1636);
              }
              obj5 = AnimatedComponent(1636);
            }
            const _viewInfo = self._viewInfo;
            let isFabricResult1 = !outer2_15;
            if (isFabricResult1) {
              isFabricResult1 = AnimatedComponent(1585).isFabric();
              const obj8 = AnimatedComponent(1585);
            }
            if (isFabricResult1) {
              isFabricResult1 = shadowNodeWrapper;
            }
            if (isFabricResult1) {
              AnimatedComponent(1626).markNodeAsRemovable(shadowNodeWrapper);
              const obj9 = AnimatedComponent(1626);
            }
            self._willUnmount = true;
          }
        }
        if (exiting) {
          if (!outer2_12) {
            if (!obj2.isFabric()) {
              if ("getReduceMotion" in exiting) {
                if ("function" === typeof exiting.getReduceMotion) {
                  let reduceMotionFromConfig = AnimatedComponent(1622).getReduceMotionFromConfig(exiting.getReduceMotion());
                  const obj4 = AnimatedComponent(1622);
                }
                if (!reduceMotionFromConfig) {
                  const result4 = self._configureLayoutAnimation(AnimatedComponent(1607).LayoutAnimationType.EXITING, exiting);
                }
              }
              reduceMotionFromConfig = AnimatedComponent(1622).getReduceMotionFromConfig();
              const obj3 = AnimatedComponent(1622);
            }
            obj2 = AnimatedComponent(1585);
          }
        }
      }
    };
    items[1] = obj;
    obj = {
      key: "_syncStylePropsBackToReact",
      value: function _syncStylePropsBackToReact(arg0) {
        let closure_0 = arg0;
        this.setState((settledProps) => ({ settledProps: Object.assign({}, settledProps.settledProps, closure_0) }));
      }
    };
    items[2] = obj;
    items[3] = {
      key: "getComponentViewTag",
      value: function getComponentViewTag() {
        return this._getViewInfo().viewTag;
      }
    };
    items[4] = {
      key: "_detachStyles",
      value: function _detachStyles() {
        const self = this;
        const componentViewTag = this.getComponentViewTag();
        if (-1 !== componentViewTag) {
          if (null !== self._styles) {
            const _styles = self._styles;
            for (const item10012 of _styles) {
              let viewDescriptors = item10012.viewDescriptors;
              let tmp5 = componentViewTag;
              let removeResult = viewDescriptors.remove(tmp2);
              continue;
            }
            const animatedProps = self.props.animatedProps;
            if (tmp7) {
              const viewDescriptors2 = self.props.animatedProps.viewDescriptors;
              viewDescriptors2.remove(componentViewTag);
            }
            tmp7 = null != animatedProps && animatedProps.viewDescriptors;
          }
        }
      }
    };
    items[5] = {
      key: "_updateFromNative",
      value: function _updateFromNative(props) {
        const self = this;
        if (null != outer1_1) {
          if (outer1_1.setNativeProps) {
            outer1_1.setNativeProps(self._componentRef, props);
          }
        }
        const _componentRef = self._componentRef;
        if (!tmp2) {
          _componentRef.setNativeProps(props);
        }
      }
    };
    items[6] = {
      key: "_updateReanimatedProps",
      value: function _updateReanimatedProps(obj) {
        const self = this;
        if (null == outer1_1) {
          obj = {};
          for (const key10017 in arg0) {
            let tmp6 = key10017;
            let tmp7 = arg0[key10017];
            if ("color" === key10017) {
              if (tmp7) {
                if ("string" === typeof tmp7) {
                  let tmp4 = outer2_9;
                  let tmp3 = outer2_9(tmp7);
                  obj[key10017] = tmp3;
                  continue;
                }
              }
            }
            if ("top" != key10017) {
              if ("bottom" != key10017) {
                if (!key10017.startsWith("margin")) {
                  tmp3 = tmp7;
                }
              }
            }
          }
          self.setState((reanimatedProps) => {
            obj = { reanimatedProps: Object.assign({}, reanimatedProps.reanimatedProps, obj) };
            return obj;
          });
        }
      }
    };
    items[7] = {
      key: "_getViewInfo",
      value: function _getViewInfo() {
        let _componentDOMRef;
        let viewConfig;
        let viewName;
        let viewTag;
        const self = this;
        if (undefined !== this._viewInfo) {
          return self._viewInfo;
        } else {
          if (outer2_15) {
            ({ _componentRef: viewTag, _componentDOMRef } = self);
            viewName = null;
            viewConfig = null;
            let shadowNodeWrapperFromRef = null;
          } else {
            let obj = AnimatedComponent(1611);
            const findHostInstanceResult = obj.findHostInstance(self);
            if (findHostInstanceResult) {
              let tmp4Result = tmp4(1695);
              const viewInfo = tmp4Result.getViewInfo(findHostInstanceResult);
              ({ viewTag, viewName, viewConfig } = viewInfo);
              tmp4Result = tmp4(1585);
              shadowNodeWrapperFromRef = null;
              if (tmp4Result.isFabric()) {
                shadowNodeWrapperFromRef = AnimatedComponent(1610).getShadowNodeWrapperFromRef(self, findHostInstanceResult);
                const obj4 = AnimatedComponent(1610);
              }
              _componentDOMRef = null;
            } else {
              const ReanimatedError = tmp4(1593).ReanimatedError;
              const prototype = ReanimatedError.prototype;
              const reanimatedError = new ReanimatedError("Cannot find host instance for this component. Maybe it renders nothing?");
              throw reanimatedError;
            }
          }
          obj = { viewTag, viewName, shadowNodeWrapper: shadowNodeWrapperFromRef, viewConfig };
          self._viewInfo = obj;
          if (_componentDOMRef) {
            self._viewInfo.DOMElement = _componentDOMRef;
          }
          return self._viewInfo;
        }
      }
    };
    items[8] = {
      key: "_attachAnimatedStyles",
      value: function _attachAnimatedStyles() {
        let self = this;
        self = this;
        if (this.props.style) {
          let obj = AnimatedComponent(1679);
          let items = (function onlyAnimatedStyles(arr) {
            return arr.filter((viewDescriptors) => {
              viewDescriptors = undefined;
              if (null != viewDescriptors) {
                viewDescriptors = viewDescriptors.viewDescriptors;
              }
              return viewDescriptors;
            });
          })(obj.flattenArray(self.props.style));
        } else {
          items = [];
        }
        const animatedProps = self.props.animatedProps;
        const _styles = self._styles;
        self._styles = items;
        const _animatedProps = self._animatedProps;
        self._animatedProps = animatedProps;
        const _getViewInfoResult = self._getViewInfo();
        const viewTag = _getViewInfoResult.viewTag;
        const viewName = _getViewInfoResult.viewName;
        const shadowNodeWrapper = _getViewInfoResult.shadowNodeWrapper;
        const viewConfig = _getViewInfoResult.viewConfig;
        const animatedProps2 = self.props.animatedProps;
        let viewDescriptors;
        if (null != animatedProps2) {
          viewDescriptors = animatedProps2.viewDescriptors;
        }
        if (!viewDescriptors) {
          viewDescriptors = items.length;
        }
        if (viewDescriptors) {
          viewDescriptors = viewConfig;
        }
        if (viewDescriptors) {
          AnimatedComponent(1681).adaptViewConfig(viewConfig);
          const obj2 = AnimatedComponent(1681);
        }
        function isStyleAttached(viewDescriptors) {
          viewDescriptors = viewDescriptors.viewDescriptors;
          return viewDescriptors.has(viewTag);
        }
        const tmp8 = null != _styles && items.length === _styles.length && items.every((viewDescriptors) => {
          let tmp = viewDescriptors === _styles[arg1];
          if (tmp) {
            tmp = isStyleAttached(viewDescriptors);
          }
          return tmp;
        });
        const animatedProps3 = self.props.animatedProps;
        let tmp10 = !(null != animatedProps3 && animatedProps3.viewDescriptors);
        if (!tmp10) {
          let hasItem = _animatedProps === self.props.animatedProps;
          if (hasItem) {
            viewDescriptors = self.props.animatedProps.viewDescriptors;
            hasItem = viewDescriptors.has(viewTag);
          }
          tmp10 = hasItem;
        }
        if (!tmp8) {
          if (_styles) {
            function _loop(item10066) {
              let closure_0 = item10066;
              if (!items.some((arg0) => {
                let tmp = arg0 !== closure_0;
                if (!tmp) {
                  tmp = !outer1_6(arg0);
                }
                return !tmp;
              })) {
                const viewDescriptors = item10066.viewDescriptors;
                viewDescriptors.remove(viewTag);
              }
            }
            for (const item10066 of _styles) {
              let tmp13 = _loop;
              let _loopResult = _loop(item10066);
              continue;
            }
          }
          if (animatedProps) {
            if (outer2_13) {
              let value;
              if (null != animatedProps) {
                if (null != animatedProps.initial) {
                  value = iter.value;
                }
              }
              self.jestAnimatedProps.value = Object.assign({}, self.jestAnimatedProps.value, value);
              if (tmp17) {
                animatedProps.jestAnimatedValues.current = self.jestAnimatedProps;
              }
              tmp17 = null != animatedProps && animatedProps.jestAnimatedValues;
            }
          }
          if (!tmp8) {
            const item = set.forEach((viewDescriptors) => {
              viewDescriptors = viewDescriptors.viewDescriptors;
              viewDescriptors.add({ tag: viewTag, name: viewName, shadowNodeWrapper }, viewDescriptors.styleUpdaterContainer);
              if (outer3_13) {
                const _Object = Object;
                self.jestAnimatedStyle.value = Object.assign({}, self.jestAnimatedStyle.value, viewDescriptors.initial.value);
                viewDescriptors.jestAnimatedValues.current = self.jestAnimatedStyle;
              }
            });
          }
          let tmp19 = _animatedProps;
          if (_animatedProps) {
            tmp19 = _animatedProps !== self.props.animatedProps;
          }
          if (tmp19) {
            const viewDescriptors2 = _animatedProps.viewDescriptors;
            viewDescriptors2.remove(viewTag);
          }
          let viewDescriptors3 = !tmp10;
          if (viewDescriptors3) {
            const animatedProps4 = self.props.animatedProps;
            viewDescriptors3 = null != animatedProps4;
            const tmp21 = animatedProps4;
          }
          if (viewDescriptors3) {
            viewDescriptors3 = tmp21.viewDescriptors;
          }
          if (viewDescriptors3) {
            const viewDescriptors4 = self.props.animatedProps.viewDescriptors;
            obj = { tag: viewTag, name: viewName, shadowNodeWrapper };
            viewDescriptors4.add(obj, self.props.animatedProps.styleUpdaterContainer);
          }
        }
      }
    };
    items[9] = {
      key: "componentDidUpdate",
      value: function componentDidUpdate(layout) {
        const self = this;
        const result = this._configureLayoutAnimation(AnimatedComponent(1607).LayoutAnimationType.LAYOUT, this.props.layout, layout.layout);
        const result1 = this._configureLayoutAnimation(AnimatedComponent(1607).LayoutAnimationType.EXITING, this.props.exiting, layout.exiting);
        if (!tmp3) {
          const result2 = self._configureSharedTransition();
        }
        const _NativeEventsManager = self._NativeEventsManager;
        if (null != _NativeEventsManager) {
          _NativeEventsManager.updateEvents(layout);
        }
        const result3 = self._attachAnimatedStyles();
        const _InlinePropManager = self._InlinePropManager;
        _InlinePropManager.attachInlineProps(self, self._getViewInfo());
        let _componentDOMRef = outer2_12;
        if (outer2_12) {
          _componentDOMRef = self.props.exiting;
        }
        if (_componentDOMRef) {
          _componentDOMRef = self._componentDOMRef;
        }
        if (_componentDOMRef) {
          AnimatedComponent(1636).saveSnapshot(self._componentDOMRef);
          const obj = AnimatedComponent(1636);
        }
        if (outer2_12) {
          if (arg2) {
            if (self.props.layout) {
              if (obj2.getReducedMotionFromConfig(self.props.layout)) {
                layout = self.props.layout;
                const callbackV = layout.callbackV;
                if (null != callbackV) {
                  callbackV.call(layout, true);
                }
              } else {
                const result4 = AnimatedComponent(1636).tryActivateLayoutTransition(self.props, self._componentDOMRef, arg2);
                const obj3 = AnimatedComponent(1636);
              }
              obj2 = AnimatedComponent(1636);
            }
          }
        }
      }
    };
    items[10] = {
      key: "_configureLayoutAnimation",
      value: function _configureLayoutAnimation(EXITING, exiting, exiting2) {
        const self = this;
        if (!outer2_12) {
          if (exiting !== exiting2) {
            const obj = AnimatedComponent(1696);
            if (obj2.isFabric()) {
              if (EXITING === AnimatedComponent(1607).LayoutAnimationType.ENTERING) {
                let reanimatedID = self.reanimatedID;
              }
              let maybeBuildResult = tmp;
              if (tmp) {
                let style;
                if (EXITING !== AnimatedComponent(1607).LayoutAnimationType.LAYOUT) {
                  const props = self.props;
                  if (null != props) {
                    style = props.style;
                  }
                }
                maybeBuildResult = AnimatedComponent(1697).maybeBuild(tmp, style, AnimatedComponent.displayName);
                const obj3 = AnimatedComponent(1697);
              }
              const result = obj.updateLayoutAnimations(reanimatedID, EXITING, maybeBuildResult);
            }
            reanimatedID = self.getComponentViewTag();
            obj2 = AnimatedComponent(1585);
          }
        }
      }
    };
    items[11] = {
      key: "_configureSharedTransition",
      value: function _configureSharedTransition(arg0) {
        const self = this;
        const tmp = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
        if (!outer2_12) {
          const sharedTransitionTag = self.props.sharedTransitionTag;
          if (sharedTransitionTag) {
            let _sharedElementTransition2 = self.props.sharedTransitionStyle;
            if (null == _sharedElementTransition2) {
              _sharedElementTransition2 = self._sharedElementTransition;
            }
            if (null == _sharedElementTransition2) {
              const SharedTransition = AnimatedComponent(1698).SharedTransition;
              const prototype = SharedTransition.prototype;
              _sharedElementTransition2 = new SharedTransition();
            }
            _sharedElementTransition2.registerTransition(self.getComponentViewTag(), sharedTransitionTag, tmp);
            self._sharedElementTransition = _sharedElementTransition2;
          } else {
            const _sharedElementTransition = self._sharedElementTransition;
            if (null != _sharedElementTransition) {
              _sharedElementTransition.unregisterTransition(self.getComponentViewTag(), tmp);
            }
            self._sharedElementTransition = null;
          }
        }
      }
    };
    items[12] = {
      key: "_isReducedMotion",
      value: function _isReducedMotion(getReduceMotion) {
        if (getReduceMotion) {
          if ("getReduceMotion" in getReduceMotion) {
            if ("function" === typeof getReduceMotion.getReduceMotion) {
              let reduceMotionFromConfig = AnimatedComponent(1622).getReduceMotionFromConfig(getReduceMotion.getReduceMotion());
              const obj2 = AnimatedComponent(1622);
            }
            return reduceMotionFromConfig;
          }
        }
        reduceMotionFromConfig = AnimatedComponent(1622).getReduceMotionFromConfig();
      }
    };
    items[13] = {
      key: "getSnapshotBeforeUpdate",
      value: function getSnapshotBeforeUpdate(props2, memoizedState) {
        const self = this;
        let boundingClientRect = null;
        if (outer2_12) {
          boundingClientRect = null;
          if (self.props.layout) {
            const _componentDOMRef = self._componentDOMRef;
            boundingClientRect = null;
            if (null != _componentDOMRef) {
              boundingClientRect = null;
              if (_componentDOMRef.getBoundingClientRect) {
                const _componentDOMRef2 = self._componentDOMRef;
                boundingClientRect = _componentDOMRef2.getBoundingClientRect();
              }
            }
          }
        }
        return boundingClientRect;
      }
    };
    items[14] = {
      key: "render",
      value: function render() {
        const self = this;
        const _PropsFilter = this._PropsFilter;
        const result = _PropsFilter.filterNonAnimatedProps(this);
        if (outer2_13) {
          ({ jestAnimatedStyle: tmp.jestAnimatedStyle, jestAnimatedProps: tmp.jestAnimatedProps } = self);
        }
        let tmp2 = self._isFirstRender && outer2_12 && result.entering;
        if (tmp2) {
          let obj = AnimatedComponent(1636);
          tmp2 = !obj.getReducedMotionFromConfig(result.entering);
        }
        if (!tmp2) {
          obj = { collapsable: false };
          const context = self.context;
          let current;
          if (null != context) {
            current = context.current;
          }
          if (!current) {
            let obj5 = AnimatedComponent(1585);
            if (obj5.isFabric()) {
              const _HermesInternal = HermesInternal;
              const combined = "" + self.reanimatedID;
            }
          }
          if (outer2_13) {
            obj = {};
            let style2 = self.props.style;
            if (style2) {
              style2 = outer2_18(self.props.style);
            }
            obj.jestInlineStyle = style2;
            ({ jestAnimatedStyle: obj8.jestAnimatedStyle, jestAnimatedProps: obj8.jestAnimatedProps } = self);
            let obj1 = obj;
          } else {
            obj1 = {};
          }
          let obj8 = AnimatedComponent(1585);
          if (obj8.isFabric()) {
            const _Object3 = Object;
            const _Object4 = Object;
            const obj2 = { nativeID: combined };
            const obj3 = { style: Object.assign({}, outer2_10.flatten(result.style), self.state.settledProps) };
            const obj4 = { ref: self._setComponentRef };
            const _Object5 = Object;
            return outer2_11(AnimatedComponent, Object.assign(obj2, result, obj1, obj3, self.state.settledProps, self.state.reanimatedProps, obj4, obj));
          } else {
            const _Object = Object;
            obj5 = { nativeID: combined };
            const obj6 = { ref: self._setComponentRef };
            const _Object2 = Object;
            return outer2_11(AnimatedComponent, Object.assign(obj5, result, obj1, self.state.reanimatedProps, obj6, obj));
          }
        } else {
          const _Array = Array;
          if (Array.isArray(result.style)) {
            let style = result.style;
            const obj7 = { visibility: "hidden" };
            const items = [obj7];
            let combined1 = style.concat(items);
          } else {
            style = result.style;
            if (null == style) {
              style = {};
            }
            obj8 = { visibility: "hidden" };
            combined1 = Object.assign({}, style, obj8);
          }
          result.style = combined1;
        }
      }
    };
    return outer1_4(AnimatedComponent, items);
  })(Component.Component);
  const dependencyMap = tmp8;
  tmp8.contextType = _require(1720).SkipEnteringContext;
  tmp8.displayName = "AnimatedComponent(" + name.displayName || name.name || "Component" + ")";
  const componentWithRefResult = _require(1721).componentWithRef((arg0, forwardedRef) => {
    let tmp3 = null;
    if (null !== forwardedRef) {
      const obj = { forwardedRef };
      tmp3 = obj;
    }
    return outer1_11(closure_2, Object.assign({}, arg0, tmp3));
  });
  componentWithRefResult.displayName = name.displayName || name.name || "Component";
  return componentWithRefResult;
};
