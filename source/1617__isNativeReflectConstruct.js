// Module ID: 1617
// Function ID: 17919
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: createAnimatedComponent

// Module 1617 (_isNativeReflectConstruct)
let Platform;
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
          tmp = callback(arg0);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
arg1(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
({ Platform, processColor: closure_9, StyleSheet: closure_10 } = arg1(dependencyMap[7]));
const jsx = arg1(dependencyMap[8]).jsx;
const tmp3 = arg1(dependencyMap[7]);
const isWebResult = arg1(dependencyMap[9]).isWeb();
const obj = arg1(dependencyMap[9]);
let closure_13 = arg1(dependencyMap[9]).isJest();
const obj2 = arg1(dependencyMap[9]);
let closure_14 = arg1(dependencyMap[9]).isReact19();
const obj3 = arg1(dependencyMap[9]);
let closure_15 = arg1(dependencyMap[9]).shouldBeUseWeb();
if (isWebResult) {
  const result = arg1(dependencyMap[10]).configureWebLayoutAnimations();
  const obj5 = arg1(dependencyMap[10]);
}
let closure_16 = 0;

export const createAnimatedComponent = function createAnimatedComponent(name) {
  const arg1 = name;
  const importDefault = arg1;
  if (!closure_14) {
    let tmp4 = "function" !== typeof name;
    if (!tmp4) {
      tmp4 = name.prototype && name.prototype.isReactComponent;
      const tmp5 = name.prototype && name.prototype.isReactComponent;
    }
    const _HermesInternal = HermesInternal;
    importDefault(dependencyMap[11])(tmp4, "Looks like you're passing a function component `" + name.name + "` to `createAnimatedComponent` function which supports only class components. Please wrap your function component with `React.forwardRef()` or use a class component instead.");
    const tmp3 = importDefault(dependencyMap[11]);
  }
  const tmp8 = (Component) => {
    class AnimatedComponent {
      constructor(arg0) {
        self = this;
        tmp = closure_3(this, AnimatedComponent);
        items = [];
        items[0] = Component;
        obj = closure_6(AnimatedComponent);
        tmp2 = closure_5;
        if (closure_17()) {
          tmp4 = globalThis;
          _Reflect = Reflect;
          tmp5 = closure_6;
          constructResult = Reflect.construct(obj, items, closure_6(self).constructor);
        } else {
          constructResult = obj.apply(self, items);
        }
        tmp2Result = tmp2(self, constructResult);
        AnimatedComponent = tmp2Result;
        tmp2Result._styles = null;
        tmp2Result._isFirstRender = true;
        tmp2Result.jestAnimatedStyle = { value: {} };
        tmp2Result.jestAnimatedProps = { value: {} };
        tmp2Result._componentRef = null;
        tmp2Result._hasAnimatedRef = false;
        tmp2Result._componentDOMRef = null;
        tmp2Result._sharedElementTransition = null;
        tmp6 = closure_1(closure_2[12]);
        tmp6 = new tmp6();
        tmp2Result._jsPropsUpdater = tmp6;
        inlinePropManager = new AnimatedComponent(closure_2[13]).InlinePropManager();
        tmp2Result._InlinePropManager = inlinePropManager;
        propsFilter = new AnimatedComponent(closure_2[14]).PropsFilter();
        tmp2Result._PropsFilter = propsFilter;
        tmp10 = +closure_16;
        closure_16 = tmp10 + 1;
        tmp2Result.reanimatedID = tmp10;
        tmp2Result._willUnmount = false;
        tmp2Result._resolveComponentRef = (getAnimatableRef) => {
          if (getAnimatableRef) {
            if (getAnimatableRef.getAnimatableRef) {
              tmp2Result._hasAnimatedRef = true;
              let animatableRef = getAnimatableRef.getAnimatableRef();
            }
            return animatableRef;
          }
          animatableRef = getAnimatableRef;
          if (closure_15) {
            if (getAnimatableRef) {
              if (getAnimatableRef.elementRef) {
                tmp2Result._componentDOMRef = getAnimatableRef.elementRef.current;
                animatableRef = getAnimatableRef;
              }
            }
            tmp2Result._componentDOMRef = getAnimatableRef;
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
                  if (!closure_15) {
                    const result = tmp2Result(closure_2[16]).enableLayoutAnimations(true, false);
                    const obj = tmp2Result(closure_2[16]);
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
                    isFabricResult = tmp2Result(closure_2[9]).isFabric();
                    const obj2 = tmp2Result(closure_2[9]);
                  }
                  if (!isFabricResult) {
                    isFabricResult = current;
                  }
                  if (!isFabricResult) {
                    isFabricResult = closure_12;
                  }
                  if (!isFabricResult) {
                    const result2 = tmp2Result._configureLayoutAnimation(tmp2Result(closure_2[17]).LayoutAnimationType.ENTERING, tmp2Result.props.entering);
                  }
                }
              }
        };
        tmp2Result._setComponentRef = closure_1(closure_2[15])(obj);
        if (closure_13) {
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
        obj6 = AnimatedComponent(closure_2[9]);
        tmp12 = obj6.isFabric() && !current;
        if (tmp12) {
          tmp13 = AnimatedComponent;
          tmp14 = closure_2;
          num = 17;
          result = tmp2Result._configureLayoutAnimation(AnimatedComponent(closure_2[17]).LayoutAnimationType.ENTERING, tmp2Result.props.entering);
        }
        return tmp2Result;
      }
    }
    Component = AnimatedComponent;
    callback2(AnimatedComponent, Component);
    let obj = {
      key: "componentDidMount",
      value: function componentDidMount() {
        const self = this;
        if (!closure_12) {
          const NativeEventsManager = AnimatedComponent(closure_2[18]).NativeEventsManager;
          const prototype = NativeEventsManager.prototype;
          const nativeEventsManager = new NativeEventsManager(self, closure_1);
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
        let isFabricResult = AnimatedComponent(closure_2[9]).isFabric();
        if (isFabricResult) {
          isFabricResult = -1 !== componentViewTag;
        }
        if (isFabricResult) {
          const PropsRegistryGarbageCollector = AnimatedComponent(closure_2[19]).PropsRegistryGarbageCollector;
          PropsRegistryGarbageCollector.registerView(componentViewTag, self);
        }
        if (-1 !== componentViewTag) {
          const ComponentRegistry = AnimatedComponent(closure_2[20]).ComponentRegistry;
          ComponentRegistry.register(componentViewTag, self);
        }
        const result2 = self._configureLayoutAnimation(AnimatedComponent(closure_2[17]).LayoutAnimationType.LAYOUT, self.props.layout);
        const result3 = self._configureLayoutAnimation(AnimatedComponent(closure_2[17]).LayoutAnimationType.EXITING, self.props.exiting);
        if (closure_12) {
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
            delete r4.dummyClone;
            if (self.props.exiting) {
              AnimatedComponent(closure_2[10]).saveSnapshot(_componentDOMRef);
              const obj2 = AnimatedComponent(closure_2[10]);
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
                  const result4 = AnimatedComponent(closure_2[10]).startWebLayoutAnimation(self.props, _componentDOMRef, AnimatedComponent(closure_2[17]).LayoutAnimationType.ENTERING);
                  const obj4 = AnimatedComponent(closure_2[10]);
                }
              }
              const obj3 = AnimatedComponent(closure_2[10]);
            } else {
              self._isFirstRender = false;
            }
          }
        }
        let _willUnmount = !closure_15;
        if (_willUnmount) {
          _willUnmount = AnimatedComponent(closure_2[9]).isFabric();
          const obj5 = AnimatedComponent(closure_2[9]);
        }
        if (_willUnmount) {
          _willUnmount = self._willUnmount;
        }
        if (_willUnmount) {
          _willUnmount = "number" === typeof componentViewTag;
        }
        if (_willUnmount) {
          const result5 = AnimatedComponent(closure_2[16]).unmarkNodeAsRemovable(componentViewTag);
          const obj6 = AnimatedComponent(closure_2[16]);
        }
        self._isFirstRender = false;
      }
    };
    const items = [obj, , , , , , , , , , , , , , ];
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
        let isFabricResult = AnimatedComponent(closure_2[9]).isFabric();
        if (isFabricResult) {
          isFabricResult = -1 !== componentViewTag;
        }
        if (isFabricResult) {
          const PropsRegistryGarbageCollector = AnimatedComponent(closure_2[19]).PropsRegistryGarbageCollector;
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
          const ComponentRegistry = AnimatedComponent(closure_2[20]).ComponentRegistry;
          ComponentRegistry.unregister(componentViewTag);
        }
        if (closure_12) {
          if (self._componentDOMRef) {
            if (exiting) {
              if (obj5.getReducedMotionFromConfig(exiting)) {
                if (null != exiting.callbackV) {
                  exiting.callbackV(true);
                }
              } else {
                const result2 = AnimatedComponent(closure_2[21]).addHTMLMutationObserver();
                const obj6 = AnimatedComponent(closure_2[21]);
                ({ props, _componentDOMRef } = self);
                const result3 = AnimatedComponent(closure_2[10]).startWebLayoutAnimation(props, _componentDOMRef, AnimatedComponent(closure_2[17]).LayoutAnimationType.EXITING);
                const obj7 = AnimatedComponent(closure_2[10]);
              }
              const obj5 = AnimatedComponent(closure_2[10]);
            }
            const _viewInfo = self._viewInfo;
            let isFabricResult1 = !closure_15;
            if (isFabricResult1) {
              isFabricResult1 = AnimatedComponent(closure_2[9]).isFabric();
              const obj8 = AnimatedComponent(closure_2[9]);
            }
            if (isFabricResult1) {
              isFabricResult1 = shadowNodeWrapper;
            }
            if (isFabricResult1) {
              AnimatedComponent(closure_2[16]).markNodeAsRemovable(shadowNodeWrapper);
              const obj9 = AnimatedComponent(closure_2[16]);
            }
            self._willUnmount = true;
          }
        }
        if (exiting) {
          if (!closure_12) {
            if (!obj2.isFabric()) {
              if ("getReduceMotion" in exiting) {
                if ("function" === typeof exiting.getReduceMotion) {
                  let reduceMotionFromConfig = AnimatedComponent(closure_2[22]).getReduceMotionFromConfig(exiting.getReduceMotion());
                  const obj4 = AnimatedComponent(closure_2[22]);
                }
                if (!reduceMotionFromConfig) {
                  const result4 = self._configureLayoutAnimation(AnimatedComponent(closure_2[17]).LayoutAnimationType.EXITING, exiting);
                }
              }
              reduceMotionFromConfig = AnimatedComponent(closure_2[22]).getReduceMotionFromConfig();
              const obj3 = AnimatedComponent(closure_2[22]);
            }
            const obj2 = AnimatedComponent(closure_2[9]);
          }
        }
      }
    };
    items[1] = obj;
    obj = {
      key: "_syncStylePropsBackToReact",
      value: function _syncStylePropsBackToReact(arg0) {
        const AnimatedComponent = arg0;
        this.setState((settledProps) => ({ settledProps: Object.assign({}, settledProps.settledProps, settledProps) }));
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
            }
            const animatedProps = self.props.animatedProps;
            if (tmp7) {
              const viewDescriptors2 = self.props.animatedProps.viewDescriptors;
              viewDescriptors2.remove(componentViewTag);
            }
            const tmp7 = null != animatedProps && animatedProps.viewDescriptors;
          }
        }
      }
    };
    items[5] = {
      key: "_updateFromNative",
      value: function _updateFromNative(props) {
        const self = this;
        if (null != nativeProps) {
          if (nativeProps.setNativeProps) {
            nativeProps.setNativeProps(self._componentRef, props);
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
        if (null == nativeProps) {
          obj = {};
          const AnimatedComponent = obj;
          for (const key10017 in arg0) {
            let tmp6 = key10017;
            let tmp7 = arg0[key10017];
            if ("color" === key10017) {
              if (tmp7) {
                if ("string" === typeof tmp7) {
                  let tmp4 = closure_9;
                  let tmp3 = closure_9(tmp7);
                  obj[key10017] = tmp3;
                  // continue
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
            const obj = { reanimatedProps: Object.assign({}, reanimatedProps.reanimatedProps, obj) };
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
          if (closure_15) {
            ({ _componentRef: viewTag, _componentDOMRef } = self);
            viewName = null;
            viewConfig = null;
            let shadowNodeWrapperFromRef = null;
          } else {
            let obj = AnimatedComponent(closure_2[23]);
            const findHostInstanceResult = obj.findHostInstance(self);
            if (findHostInstanceResult) {
              let tmp4Result = tmp4(tmp5[25]);
              const viewInfo = tmp4Result.getViewInfo(findHostInstanceResult);
              ({ viewTag, viewName, viewConfig } = viewInfo);
              tmp4Result = tmp4(tmp5[9]);
              shadowNodeWrapperFromRef = null;
              if (tmp4Result.isFabric()) {
                shadowNodeWrapperFromRef = AnimatedComponent(closure_2[26]).getShadowNodeWrapperFromRef(self, findHostInstanceResult);
                const obj4 = AnimatedComponent(closure_2[26]);
              }
              _componentDOMRef = null;
            } else {
              const ReanimatedError = tmp4(tmp5[24]).ReanimatedError;
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
        const self = this;
        const AnimatedComponent = this;
        if (this.props.style) {
          let obj = AnimatedComponent(_styles[27]);
          let items = function onlyAnimatedStyles(arr) {
            return arr.filter((viewDescriptors) => {
              viewDescriptors = undefined;
              if (null != viewDescriptors) {
                viewDescriptors = viewDescriptors.viewDescriptors;
              }
              return viewDescriptors;
            });
          }(obj.flattenArray(self.props.style));
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
          AnimatedComponent(_styles[28]).adaptViewConfig(viewConfig);
          const obj2 = AnimatedComponent(_styles[28]);
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
              const self = item10066;
              if (!items.some((arg0) => {
                let tmp = arg0 !== arg0;
                if (!tmp) {
                  tmp = !callback(arg0);
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
            }
          }
          if (animatedProps) {
            if (closure_13) {
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
              const tmp17 = null != animatedProps && animatedProps.jestAnimatedValues;
            }
          }
          if (!tmp8) {
            const item = set.forEach((viewDescriptors) => {
              viewDescriptors = viewDescriptors.viewDescriptors;
              viewDescriptors.add({ tag: viewTag, name: viewName, shadowNodeWrapper }, viewDescriptors.styleUpdaterContainer);
              if (closure_13) {
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
        const result = this._configureLayoutAnimation(AnimatedComponent(closure_2[17]).LayoutAnimationType.LAYOUT, this.props.layout, layout.layout);
        const result1 = this._configureLayoutAnimation(AnimatedComponent(closure_2[17]).LayoutAnimationType.EXITING, this.props.exiting, layout.exiting);
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
        let _componentDOMRef = closure_12;
        if (closure_12) {
          _componentDOMRef = self.props.exiting;
        }
        if (_componentDOMRef) {
          _componentDOMRef = self._componentDOMRef;
        }
        if (_componentDOMRef) {
          AnimatedComponent(closure_2[10]).saveSnapshot(self._componentDOMRef);
          const obj = AnimatedComponent(closure_2[10]);
        }
        if (closure_12) {
          if (arg2) {
            if (self.props.layout) {
              if (obj2.getReducedMotionFromConfig(self.props.layout)) {
                layout = self.props.layout;
                const callbackV = layout.callbackV;
                if (null != callbackV) {
                  callbackV.call(layout, true);
                }
              } else {
                const result4 = AnimatedComponent(closure_2[10]).tryActivateLayoutTransition(self.props, self._componentDOMRef, arg2);
                const obj3 = AnimatedComponent(closure_2[10]);
              }
              const obj2 = AnimatedComponent(closure_2[10]);
            }
          }
        }
      }
    };
    items[10] = {
      key: "_configureLayoutAnimation",
      value: function _configureLayoutAnimation(EXITING, exiting, exiting2) {
        const self = this;
        if (!closure_12) {
          if (exiting !== exiting2) {
            const obj = AnimatedComponent(closure_2[29]);
            if (obj2.isFabric()) {
              if (EXITING === AnimatedComponent(closure_2[17]).LayoutAnimationType.ENTERING) {
                let reanimatedID = self.reanimatedID;
              }
              let maybeBuildResult = tmp;
              if (tmp) {
                let style;
                if (EXITING !== AnimatedComponent(closure_2[17]).LayoutAnimationType.LAYOUT) {
                  const props = self.props;
                  if (null != props) {
                    style = props.style;
                  }
                }
                maybeBuildResult = AnimatedComponent(closure_2[30]).maybeBuild(tmp, style, AnimatedComponent.displayName);
                const obj3 = AnimatedComponent(closure_2[30]);
              }
              const result = obj.updateLayoutAnimations(reanimatedID, EXITING, maybeBuildResult);
            }
            reanimatedID = self.getComponentViewTag();
            const obj2 = AnimatedComponent(closure_2[9]);
          }
        }
      }
    };
    items[11] = {
      key: "_configureSharedTransition",
      value: function _configureSharedTransition(arg0) {
        const self = this;
        const tmp = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
        if (!closure_12) {
          const sharedTransitionTag = self.props.sharedTransitionTag;
          if (sharedTransitionTag) {
            let _sharedElementTransition2 = self.props.sharedTransitionStyle;
            if (null == _sharedElementTransition2) {
              _sharedElementTransition2 = self._sharedElementTransition;
            }
            if (null == _sharedElementTransition2) {
              const SharedTransition = AnimatedComponent(closure_2[31]).SharedTransition;
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
              let reduceMotionFromConfig = AnimatedComponent(closure_2[22]).getReduceMotionFromConfig(getReduceMotion.getReduceMotion());
              const obj2 = AnimatedComponent(closure_2[22]);
            }
            return reduceMotionFromConfig;
          }
        }
        reduceMotionFromConfig = AnimatedComponent(closure_2[22]).getReduceMotionFromConfig();
      }
    };
    items[13] = {
      key: "getSnapshotBeforeUpdate",
      value: function getSnapshotBeforeUpdate(props2, memoizedState) {
        const self = this;
        let boundingClientRect = null;
        if (closure_12) {
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
        if (closure_13) {
          ({ jestAnimatedStyle: tmp.jestAnimatedStyle, jestAnimatedProps: tmp.jestAnimatedProps } = self);
        }
        let tmp2 = self._isFirstRender && closure_12 && result.entering;
        if (tmp2) {
          let obj = AnimatedComponent(closure_2[10]);
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
            let obj5 = AnimatedComponent(closure_2[9]);
            if (obj5.isFabric()) {
              const _HermesInternal = HermesInternal;
              const combined = "" + self.reanimatedID;
            }
          }
          if (closure_13) {
            obj = {};
            let style2 = self.props.style;
            if (style2) {
              style2 = callback5(self.props.style);
            }
            obj.jestInlineStyle = style2;
            ({ jestAnimatedStyle: obj8.jestAnimatedStyle, jestAnimatedProps: obj8.jestAnimatedProps } = self);
            let obj1 = obj;
          } else {
            obj1 = {};
          }
          let obj8 = AnimatedComponent(closure_2[9]);
          if (obj8.isFabric()) {
            const _Object3 = Object;
            const _Object4 = Object;
            const obj2 = { nativeID: combined };
            const obj3 = { style: Object.assign({}, closure_10.flatten(result.style), self.state.settledProps) };
            const obj4 = { ref: self._setComponentRef };
            const _Object5 = Object;
            return callback3(AnimatedComponent, Object.assign(obj2, result, obj1, obj3, self.state.settledProps, self.state.reanimatedProps, obj4, obj));
          } else {
            const _Object = Object;
            obj5 = { nativeID: combined };
            const obj6 = { ref: self._setComponentRef };
            const _Object2 = Object;
            return callback3(AnimatedComponent, Object.assign(obj5, result, obj1, self.state.reanimatedProps, obj6, obj));
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
    return callback(AnimatedComponent, items);
  }(Component.Component);
  const dependencyMap = tmp8;
  tmp8.contextType = arg1(dependencyMap[32]).SkipEnteringContext;
  tmp8.displayName = "AnimatedComponent(" + name.displayName || name.name || "Component" + ")";
  const componentWithRefResult = arg1(dependencyMap[33]).componentWithRef((arg0, forwardedRef) => {
    let tmp3 = null;
    if (null !== forwardedRef) {
      const obj = { forwardedRef };
      tmp3 = obj;
    }
    return closure_11(tmp8, Object.assign({}, arg0, tmp3));
  });
  componentWithRefResult.displayName = name.displayName || name.name || "Component";
  return componentWithRefResult;
};
