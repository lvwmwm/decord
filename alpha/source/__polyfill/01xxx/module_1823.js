// Module ID: 1823
// Function ID: 1824
// Dependencies: [41, 42, 93, 95, 96, 98, 19, 21, 1793, 1824, 1838, 1665, 1697, 1865, 1867, 1837, 1825, 1868, 1870, 1871, 1876, 1881]

// Module 1823
import react from "react" /* 19 */;
import Fragment2 from "Fragment" /* 21 */;
import _mod1665 from "module_1665" /* 1665 */;
import LayoutAnimationType3 from "LayoutAnimationType" /* 1697 */;
import InlinePropManager from "InlinePropManager" /* 1824 */;
import flattenArray3 from "flattenArray" /* 1825 */;
import JSPropsUpdaterNativeDefault from "JSPropsUpdaterNative" /* 1837 */;
import PropsFilter from "PropsFilter" /* 1838 */;
import _mod1865 from "module_1865" /* 1865 */;
import PropsRegistryGarbageCollector2 from "PropsRegistryGarbageCollector" /* 1867 */;
import _mod1868 from "module_1868" /* 1868 */;
import maybeBuild from "maybeBuild" /* 1870 */;
import _modDef1876 from "module_1876" /* 1876 */;
import _mod1881 from "module_1881" /* 1881 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _get from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;
import DynamicFlags from "module_1793" /* 1793 */;

let set, settledProps;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const Fragment = react.Fragment;
const jsx = Fragment2.jsx;
let closure_10 = 0;
let staticFeatureFlag = DynamicFlags.getStaticFeatureFlag("FORCE_REACT_RENDER_FOR_SETTLED_ANIMATIONS");
if (staticFeatureFlag) {
  const _module1 = DynamicFlags;
  const str = "USE_ANIMATION_BACKEND";
  staticFeatureFlag = !_module1.getStaticFeatureFlag("USE_ANIMATION_BACKEND");
}
class AnimatedComponent {
  constructor(arg0, arg1, _displayName, _options) {
    let constructResult;
    const self = this;
    _classCallCheck(this, AnimatedComponent);
    const items = [arg0, arg1];
    const obj = _getPrototypeOf(AnimatedComponent);
    const tmp2 = _getPrototypeOf;
    const tmp3 = _possibleConstructorReturn;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result._animatedStyles = [];
    tmp3Result._prevAnimatedStyles = [];
    tmp3Result._animatedProps = [];
    tmp3Result._prevAnimatedProps = [];
    tmp3Result._isFirstRender = true;
    tmp3Result.jestAnimatedStyle = { value: {} };
    tmp3Result.jestAnimatedProps = { value: {} };
    const inlinePropManager = new InlinePropManager.InlinePropManager();
    tmp3Result._InlinePropManager = inlinePropManager;
    const propsFilter = new PropsFilter.PropsFilter();
    tmp3Result._PropsFilter = propsFilter;
    closure_10 = tmp10 + 1;
    tmp3Result.reanimatedID = +closure_10;
    tmp3Result._options = _options;
    tmp3Result._displayName = _displayName;
    const tmp11 = staticFeatureFlag;
    if (tmp11) {
      tmp3Result.state = {};
    }
    if (_mod1665.IS_JEST) {
      const obj2 = { value: {} };
      tmp3Result.jestAnimatedStyle = obj2;
      const obj3 = { value: {} };
      tmp3Result.jestAnimatedProps = obj3;
    }
    const result = tmp3Result._configureSharedTransition(true);
    const context = tmp3Result.context;
    let current;
    const entering = tmp3Result.props.entering;
    if (context != null) {
      current = context.current;
    }
    if (!current) {
      const result1 = tmp3Result._configureLayoutAnimation(tmp6(1697).LayoutAnimationType.ENTERING, entering);
    }
    return tmp3Result;
  }
}
_inherits(AnimatedComponent, _modDef1876);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    let current;
    const self = this;
    let fn = _get(_getPrototypeOf(AnimatedComponent.prototype), "componentDidMount", this);
    if (typeof fn === "function") {
      fn = (items1) => fn2.apply(self, items1);
    }
    fn([]);
    const nativeEventsManager = new _mod1865.NativeEventsManager(self, self._options);
    self._NativeEventsManager = nativeEventsManager;
    const _NativeEventsManager = self._NativeEventsManager;
    if (_NativeEventsManager != null) {
      _NativeEventsManager.attachEvents();
    }
    const result = self._updateAnimatedStylesAndProps();
    const _InlinePropManager = self._InlinePropManager;
    _InlinePropManager.attachInlineProps(self, self._getViewInfo());
    const tmp8 = staticFeatureFlag;
    if (tmp8) {
      const componentViewTag = self.getComponentViewTag();
      if (-1 !== componentViewTag) {
        const PropsRegistryGarbageCollector = tmp2(1867).PropsRegistryGarbageCollector;
        PropsRegistryGarbageCollector.registerView(componentViewTag, self);
      }
    }
    const _options = self._options;
    let length;
    if (_options != null) {
      const jsProps = _options.jsProps;
      if (jsProps != null) {
        length = jsProps.length;
      }
    }
    if (length) {
      const obj = JSPropsUpdaterNativeDefault;
      obj.registerComponent(self, self._options.jsProps);
    }
    const context = self.context;
    if (context != null) {
      current = context.current;
    }
    const IS_IOS = tmp2(1665).IS_IOS;
    let _isFirstRender = !IS_IOS;
    if (IS_IOS) {
      _isFirstRender = self._isFirstRender;
    }
    if (!_isFirstRender) {
      _isFirstRender = current;
    }
    if (!_isFirstRender) {
      const result1 = self._configureLayoutAnimation(tmp2(1697).LayoutAnimationType.ENTERING, self.props.entering);
    }
    const result2 = self._configureLayoutAnimation(tmp2(1697).LayoutAnimationType.LAYOUT, self.props.layout);
    const result3 = self._configureLayoutAnimation(tmp2(1697).LayoutAnimationType.EXITING, self.props.exiting);
    self._isFirstRender = false;
  }
};
let items = [
  entry,
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      let fn = _get(_getPrototypeOf(AnimatedComponent.prototype), "componentWillUnmount", this);
      if (typeof fn === "function") {
        fn = (items1) => fn2.apply(self, items1);
      }
      fn([]);
      const _NativeEventsManager = self._NativeEventsManager;
      if (_NativeEventsManager != null) {
        _NativeEventsManager.detachEvents();
      }
      self._detachStyles();
      const _InlinePropManager = self._InlinePropManager;
      _InlinePropManager.detachInlineProps();
      const tmp5 = staticFeatureFlag;
      if (tmp5) {
        const componentViewTag = self.getComponentViewTag();
        if (-1 !== componentViewTag) {
          const PropsRegistryGarbageCollector = PropsRegistryGarbageCollector2.PropsRegistryGarbageCollector;
          PropsRegistryGarbageCollector.unregisterView(componentViewTag);
        }
      }
      const _options = self._options;
      let length;
      if (_options != null) {
        const jsProps = _options.jsProps;
        if (jsProps != null) {
          length = jsProps.length;
        }
      }
      if (length) {
        const obj = JSPropsUpdaterNativeDefault;
        obj.unregisterComponent(self);
      }
    }
  },
  {
    key: "_syncStylePropsBackToReact",
    value: function _syncStylePropsBackToReact(arg0) {
      let closure_0 = arg0;
      const tmp2 = staticFeatureFlag;
      if (tmp2) {
        const self = this;
        let tmp3 = globalThis;
        const _Set = Set;
        const _animatedProps = this._animatedProps;
        const items = [];
        let tmp4 = items;
        let _Object = Object;
        let tmp6 = items;
        const arraySpreadResult = HermesBuiltin.arraySpread(items, _animatedProps.flatMap((initial) => {
          let obj;
          const _Object = Object;
          if (initial.initial != null) {
            obj = iter.value;
          }
          if (obj == null) {
            obj = {};
          }
          return keys(obj);
        }), 0);
        HermesBuiltin.arraySpread(items, Object.keys(this._InlinePropManager._inlineTopLevelProps), arraySpreadResult);
        const self2 = this;
        const self3 = this;
        set = new Set(items);
        if (0 !== set.size) {
          self.setState((settledProps) => {
            settledProps = {};
            const merged = Object.assign(settledProps.settledProps);
            const obj = {};
            const merged1 = Object.assign(settledProps.settledStyle);
            for (const key10011 in closure_0) {
              let tmp6 = closure_0[key10011];
              if (set.has(key10011)) {
                settledProps[key10011] = tmp6;
                continue;
              } else {
                obj[key10011] = tmp6;
                continue;
              }
              continue;
            }
            return { settledProps, settledStyle: obj };
          });
        } else {
          self.setState((settledStyle) => {
            let obj2;
            const obj = { settledStyle: obj2 };
            obj2 = {};
            const merged = Object.assign(settledStyle.settledStyle);
            const merged1 = Object.assign(closure_0);
            return obj;
          });
        }
      }
    }
  },
  {
    key: "_detachHostBindings",
    value: function _detachHostBindings(viewTag) {
      const self = this;
      viewTag = viewTag.viewTag;
      this._detachStyles(viewTag);
      const _InlinePropManager = this._InlinePropManager;
      _InlinePropManager.detachInlineProps();
      let tmp3 = staticFeatureFlag;
      if (tmp3) {
        const viewsMap = PropsRegistryGarbageCollector2.PropsRegistryGarbageCollector.viewsMap;
        tmp3 = viewsMap.get(viewTag) === self;
      }
      if (tmp3) {
        const PropsRegistryGarbageCollector = PropsRegistryGarbageCollector2.PropsRegistryGarbageCollector;
        PropsRegistryGarbageCollector.unregisterView(viewTag);
      }
      const _options = self._options;
      let length;
      if (_options != null) {
        const jsProps = _options.jsProps;
        if (jsProps != null) {
          length = jsProps.length;
        }
      }
      if (length) {
        const obj = JSPropsUpdaterNativeDefault;
        obj.unregisterComponent(self);
      }
    }
  },
  {
    key: "_attachHostBindings",
    value: function _attachHostBindings() {
      const self = this;
      const result = this._configureLayoutAnimation(LayoutAnimationType3.LayoutAnimationType.LAYOUT, this.props.layout);
      const result1 = this._configureLayoutAnimation(LayoutAnimationType3.LayoutAnimationType.EXITING, this.props.exiting);
      this._sharedTransition = undefined;
      const result2 = this._configureSharedTransition();
      const tmp6 = staticFeatureFlag;
      if (tmp6) {
        const componentViewTag = self.getComponentViewTag();
        if (-1 !== componentViewTag) {
          const PropsRegistryGarbageCollector = PropsRegistryGarbageCollector2.PropsRegistryGarbageCollector;
          PropsRegistryGarbageCollector.registerView(componentViewTag, self);
        }
      }
      const _options = self._options;
      let length;
      if (_options != null) {
        const jsProps = _options.jsProps;
        if (jsProps != null) {
          length = jsProps.length;
        }
      }
      if (length) {
        const obj = JSPropsUpdaterNativeDefault;
        obj.registerComponent(self, self._options.jsProps);
      }
      const result3 = self._updateAnimatedStylesAndProps();
      const _InlinePropManager = self._InlinePropManager;
      _InlinePropManager.attachInlineProps(self, self._getViewInfo());
    }
  },
  {
    key: "_detachStyles",
    value: function _detachStyles(viewTag) {
      const self = this;
      let componentViewTag = viewTag;
      if (viewTag === undefined) {
        componentViewTag = self.getComponentViewTag();
      }
      if (-1 !== componentViewTag) {
        const items = [];
        HermesBuiltin.arraySpread(items, self._animatedStyles, HermesBuiltin.arraySpread(items, self._prevAnimatedStyles, 0));
        for (const item10006 of items) {
          let viewDescriptors = item10006.viewDescriptors;
          let removeResult = viewDescriptors.remove(componentViewTag);
          continue;
        }
        const items1 = [];
        HermesBuiltin.arraySpread(items1, self._animatedProps, HermesBuiltin.arraySpread(items1, self._prevAnimatedProps, 0));
        const iter = items1[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if (nextResult != null) {
            let viewDescriptors2 = nextResult.viewDescriptors;
            if (viewDescriptors2 != null) {
              let removeResult1 = viewDescriptors2.remove(componentViewTag);
            }
          }
          continue;
        }
      }
    }
  },
  {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      const self = this;
      const _options = this._options;
      let setNativeProps1;
      if (_options != null) {
        setNativeProps1 = _options.setNativeProps;
      }
      if (setNativeProps1) {
        const _options2 = self._options;
        _options2.setNativeProps(self._componentRef, arg0);
      } else {
        const _componentRef = self._componentRef;
        if (_componentRef != null) {
          const setNativeProps = _componentRef.setNativeProps;
          if (setNativeProps != null) {
            setNativeProps(arg0);
          }
        }
      }
    }
  },
  {
    key: "_handleAnimatedStylesUpdate",
    value: function _handleAnimatedStylesUpdate(_prevAnimatedProps, _animatedProps, jestAnimatedProps) {
      let shadowNodeWrapper;
      let tag;
      const current = jestAnimatedProps;
      ({ viewTag: dependencyMap, shadowNodeWrapper: _classCallCheck } = this._getViewInfo());
      this._getViewInfo();
      set = new Set(_animatedProps);
      function isStyleAttached(viewDescriptors) {
        viewDescriptors = viewDescriptors.viewDescriptors;
        return viewDescriptors.has(dependencyMap);
      }
      if (_prevAnimatedProps) {
        function _loop(iter) {
          _animatedProps = iter;
          if (!_animatedProps.some((viewDescriptors) => {
            let tmp = viewDescriptors !== iter;
            if (!tmp) {
              if (typeof isStyleAttached === "function") {
                viewDescriptors = viewDescriptors.viewDescriptors;
                tmp = !viewDescriptors.has(dependencyMap);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            let flag = !tmp;
            if (flag) {
              set.delete(viewDescriptors);
              flag = true;
            }
            return flag;
          })) {
            let viewDescriptors = iter.viewDescriptors;
            let tmp = closure_2;
            viewDescriptors.remove(closure_2);
          }
        }
        const iter = _prevAnimatedProps[Symbol.iterator]();
        while (iter !== undefined) {
          let _loopResult = _loop(iter.next());
          continue;
        }
      }
      const item = set.forEach((viewDescriptors) => {
        viewDescriptors = viewDescriptors.viewDescriptors;
        const obj = { tag: dependencyMap, shadowNodeWrapper: _classCallCheck };
        viewDescriptors.add(obj, viewDescriptors.styleUpdaterContainer);
        if (_mod1665.IS_JEST) {
          const _Object = Object;
          const merged = Object.assign(current.value, viewDescriptors.initial.value);
          viewDescriptors.jestAnimatedValues.current = current;
        }
      });
    }
  },
  {
    key: "_updateAnimatedStylesAndProps",
    value: function _updateAnimatedStylesAndProps() {
      const result = this._handleAnimatedStylesUpdate(this._prevAnimatedStyles, this._animatedStyles, this.jestAnimatedStyle);
      const result1 = this._handleAnimatedStylesUpdate(this._prevAnimatedProps, this._animatedProps, this.jestAnimatedProps);
    }
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(current) {
      const self = this;
      this._refreshComponentRef();
      const _NativeEventsManager = this._NativeEventsManager;
      if (_NativeEventsManager != null) {
        _NativeEventsManager.updateEvents(current);
      }
      const result = self._updateAnimatedStylesAndProps();
      const _InlinePropManager = self._InlinePropManager;
      _InlinePropManager.attachInlineProps(self, self._getViewInfo());
    }
  },
  {
    key: "_updateStyles",
    value: function _updateStyles(style) {
      const filterStyles = flattenArray3.filterStyles;
      flattenArray3;
      style = style.style;
      const flattenArray = flattenArray3.flattenArray;
      flattenArray3;
      if (style == null) {
        style = [];
      }
      const self = this;
      const filterStylesResult = filterStyles(flattenArray(style));
      this._prevAnimatedStyles = this._animatedStyles;
      this._animatedStyles = filterStylesResult.animatedStyles;
      const filterStyles2 = flattenArray3.filterStyles;
      flattenArray3;
      let animatedProps = style.animatedProps;
      const flattenArray2 = flattenArray3.flattenArray;
      flattenArray3;
      if (animatedProps == null) {
        animatedProps = [];
      }
      const filterStyles2Result = filterStyles2(flattenArray2(animatedProps));
      self._prevAnimatedProps = self._animatedProps;
      self._animatedProps = filterStyles2Result.animatedStyles;
      if (filterStyles2Result.cssStyle) {
        const obj = {};
        const merged = Object.assign(style);
        const merged1 = Object.assign(filterStyles2Result.cssStyle);
        delete obj2["style"];
        delete obj2["animatedProps"];
        self._cssStyle = obj;
      } else {
        let cssStyle = filterStylesResult.cssStyle;
        if (cssStyle == null) {
          cssStyle = {};
        }
        self._cssStyle = cssStyle;
      }
    }
  },
  {
    key: "_configureLayoutAnimation",
    value: function _configureLayoutAnimation(EXITING, exiting, exiting2) {
      if (exiting !== exiting2) {
        let reanimatedID;
        const self = this;
        const updateLayoutAnimations = _mod1868.updateLayoutAnimations;
        _mod1868;
        const tmp2 = require;
        if (EXITING === LayoutAnimationType3.LayoutAnimationType.ENTERING) {
          reanimatedID = self.reanimatedID;
        } else {
          reanimatedID = self.getComponentViewTag();
        }
        let maybeBuildResult = exiting;
        if (maybeBuildResult) {
          const tmp2Result = tmp2(1870);
          maybeBuildResult = tmp2Result.maybeBuild(exiting);
        }
        const result = updateLayoutAnimations(reanimatedID, EXITING, maybeBuildResult);
      }
    }
  },
  {
    key: "_configureSharedTransition",
    value: function _configureSharedTransition(arg0) {
      const obj = DynamicFlags;
      if (obj.getStaticFeatureFlag("ENABLE_SHARED_ELEMENT_TRANSITIONS")) {
        const self = this;
        if (this.props.sharedTransitionTag) {
          let _sharedTransition = self.props.sharedTransitionStyle;
          if (_sharedTransition == null) {
            _sharedTransition = self._sharedTransition;
          }
          if (_sharedTransition == null) {
            const self2 = this;
            const self3 = this;
            _sharedTransition = new tmp(1871).SharedTransition();
          }
          const tmp11 = self._sharedTransition === _sharedTransition && self._sharedTransitionTag === self.props.sharedTransitionTag;
          if (!tmp11) {
            let reanimatedID2;
            const updateLayoutAnimations2 = _mod1868.updateLayoutAnimations;
            const tmpResult = _mod1868;
            if (arg0) {
              reanimatedID2 = self.reanimatedID;
            } else {
              reanimatedID2 = self.getComponentViewTag();
            }
            const LayoutAnimationType2 = tmp(1697).LayoutAnimationType;
            const tmp13 = arg0 ? LayoutAnimationType2.SHARED_ELEMENT_TRANSITION_NATIVE_ID : LayoutAnimationType2.SHARED_ELEMENT_TRANSITION;
            const tmpResult3 = maybeBuild;
            const result = updateLayoutAnimations2(reanimatedID2, tmp13, tmpResult3.maybeBuild(_sharedTransition), undefined, self.props.sharedTransitionTag);
            self._sharedTransition = _sharedTransition;
            self._sharedTransitionTag = self.props.sharedTransitionTag;
          }
        } else if (self._sharedTransitionTag) {
          let reanimatedID;
          const updateLayoutAnimations = _mod1868.updateLayoutAnimations;
          const tmpResult4 = _mod1868;
          if (arg0) {
            reanimatedID = self.reanimatedID;
          } else {
            reanimatedID = self.getComponentViewTag();
          }
          const LayoutAnimationType = tmp(1697).LayoutAnimationType;
          const tmp5 = arg0 ? LayoutAnimationType.SHARED_ELEMENT_TRANSITION_NATIVE_ID : LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
          const result1 = updateLayoutAnimations(reanimatedID, tmp5, undefined, undefined, undefined);
          self._sharedTransitionTag = undefined;
        }
      }
    }
  },
  {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(layout) {
      const result = this._configureLayoutAnimation(LayoutAnimationType3.LayoutAnimationType.LAYOUT, this.props.layout, layout.layout);
      const result1 = this._configureLayoutAnimation(LayoutAnimationType3.LayoutAnimationType.EXITING, this.props.exiting, layout.exiting);
      const result2 = this._configureSharedTransition();
      return null;
    }
  },
  {
    key: "render",
    value: function render() {
      let combined;
      let current;
      let items;
      const f83088 = (item) => !(item && "viewDescriptors" in item);
      const f83089 = (viewDescriptors) => {
        let tmp = viewDescriptors;
        if (Array.isArray(viewDescriptors)) {
          let tmp2 = viewDescriptors;
          if (tmp2) {
            let mapped;
            const _Array = Array;
            if (Array.isArray(viewDescriptors)) {
              const found = viewDescriptors.filter(f83088);
              mapped = found.map(f83089);
            } else {
              viewDescriptors = undefined;
              if (viewDescriptors != null) {
                viewDescriptors = viewDescriptors.viewDescriptors;
              }
              mapped = viewDescriptors;
              if (viewDescriptors) {
                mapped = {};
              }
            }
            tmp2 = mapped;
          }
          tmp = tmp2;
        }
        return tmp;
      };
      const self = this;
      const _PropsFilter = this._PropsFilter;
      const result = _PropsFilter.filterNonAnimatedProps(this);
      if (_mod1665.IS_JEST) {
        ({ jestAnimatedStyle: tmp2.jestAnimatedStyle, jestAnimatedProps: tmp2.jestAnimatedProps } = self);
      }
      const context = self.context;
      if (context != null) {
        current = context.current;
      }
      if (_mod1665.IS_JEST) {
        let style = self.props.style;
        if (style) {
          const style1 = self.props.style;
          let tmp8 = style1;
          if (tmp8) {
            let mapped;
            let _Array = Array;
            if (Array.isArray(style1)) {
              let found = style1.filter(f83088);
              mapped = found.map(f83089);
            } else {
              let viewDescriptors;
              if (style1 != null) {
                viewDescriptors = style1.viewDescriptors;
              }
              mapped = style1;
              if (viewDescriptors) {
                mapped = {};
              }
            }
            tmp8 = mapped;
          }
          style = tmp8;
        }
        ({ jestAnimatedStyle: obj2.jestAnimatedStyle, jestAnimatedProps: obj2.jestAnimatedProps } = self);
      } else if (!current) {
        const _HermesInternal = HermesInternal;
        combined = "" + self.reanimatedID;
      }
      const tmp11 = "RadialGradient" !== self.ChildComponent.displayName && "LinearGradient" !== self.ChildComponent.displayName;
      if (!tmp11) {
        if (undefined === result.children) {
          result.children = <></>;
        }
      }
      const tmp14 = staticFeatureFlag;
      if (tmp14) {
        let fn2Result;
        if (self.state.settledStyle) {
          let fn2 = _get(_getPrototypeOf(AnimatedComponent.prototype), "render", self);
          if (typeof fn2 === "function") {
            fn2 = (items1) => fn2.apply(self, items1);
          }
          const obj3 = { nativeID: combined, style: items };
          const merged = Object.assign(result);
          const merged1 = Object.assign(self.state.settledProps);
          items = [];
          items[HermesBuiltin.arraySpread(items, flattenArray3.flattenArray(result.style), 0)] = self.state.settledStyle;
          flattenArray3;
          const merged2 = Object.assign(tmp5);
          const items1 = [obj3];
          fn2Result = fn2(items1);
        }
        return fn2Result;
      }
      let fn = _get(_getPrototypeOf(AnimatedComponent.prototype), "render", self);
      if (typeof fn === "function") {
        fn = (items1) => fn2.apply(self, items1);
      }
      const obj4 = { nativeID: combined };
      const merged3 = Object.assign(result);
      const merged4 = Object.assign(tmp5);
      const items2 = [obj4];
      fn2Result = fn(items2);
    }
  }
];
const importDefaultResultResult = _createClass(AnimatedComponent, items);
importDefaultResultResult.contextType = _mod1881.SkipEnteringContext;

export default importDefaultResultResult;
