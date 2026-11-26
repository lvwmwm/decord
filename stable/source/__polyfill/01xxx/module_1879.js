// Module ID: 1879
// Function ID: 1880
// Dependencies: [41, 42, 93, 95, 98, 19, 17, 21, 1880, 1707, 1881, 1706, 1658, 1882, 1883]

// Module 1879
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import _mod1658 from "module_1658" /* 1658 */;
import _mod1706 from "module_1706" /* 1706 */;
import findHostInstance from "findHostInstance" /* 1707 */;
import _mod1881 from "module_1881" /* 1881 */;
import CSSKeyframesRuleImpl from "CSSKeyframesRuleImpl" /* 1882 */;
import filterCSSProps2 from "filterCSSProps" /* 1883 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react_native from "react-native" /* 17 */;

let Platform;
let hasOwnProperty;
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
const Component = react.Component;
({ Platform, StyleSheet: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
class AnimatedComponent {
  constructor(ChildComponent, arg1) {
    let constructResult;
    const self = this;
    _classCallCheck(this, AnimatedComponent);
    const items = [arg1];
    const obj = _getPrototypeOf(AnimatedComponent);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = tmp3(self, constructResult);
    let closure_0 = tmp3Result;
    tmp3Result._cssStyle = {};
    tmp3Result._componentRef = null;
    tmp3Result._rawComponentRef = null;
    tmp3Result._componentDOMRef = null;
    tmp3Result._willUnmount = false;
    tmp3Result._setComponentRef = (_rawComponentRef) => {
      const forwardedRef = props.props.forwardedRef;
      if (_rawComponentRef) {
        const obj3 = AnimatedComponent(closure_2_1[8]);
        props._forwardedRefCleanup = obj3.assignRef(forwardedRef, _rawComponentRef);
        if (_rawComponentRef !== props._rawComponentRef) {
          props._rawComponentRef = _rawComponentRef;
          const _resolveComponentRefResult = props._resolveComponentRef(_rawComponentRef);
          if (_resolveComponentRefResult !== props._componentRef) {
            props._updateComponentRef(_resolveComponentRefResult);
          }
        }
        props._onSetLocalRef();
      } else if (props._forwardedRefCleanup) {
        props._forwardedRefCleanup();
        props._forwardedRefCleanup = undefined;
      } else {
        const obj2 = AnimatedComponent(closure_2_1[8]);
        obj2.assignRef(forwardedRef, null);
      }
    };
    tmp3Result._resolveComponentRef = (getAnimatableRef) => {
      let animatableRef = getAnimatableRef;
      if (animatableRef) {
        animatableRef = getAnimatableRef;
        if (getAnimatableRef.getAnimatableRef) {
          animatableRef = getAnimatableRef.getAnimatableRef();
        }
      }
      return animatableRef;
    };
    tmp3Result.ChildComponent = ChildComponent;
    return tmp3Result;
  }
}
_inherits(AnimatedComponent, Component);
const entry = {
  key: "getComponentViewTag",
  value: function getComponentViewTag() {
    return this._getViewInfo().viewTag;
  }
};
let items = [
  entry,
  {
    key: "_onSetLocalRef",
    value: function _onSetLocalRef() {

    }
  },
  {
    key: "_getViewInfo",
    value: function _getViewInfo() {
      const self = this;
      if (undefined === this._viewInfo) {
        self._viewInfo = self._resolveViewInfo();
      }
      return self._viewInfo;
    }
  },
  {
    key: "_resolveViewInfo",
    value: function _resolveViewInfo() {
      let reactViewName;
      let tmpResult2;
      const obj = findHostInstance;
      const findHostInstanceResult = obj.findHostInstance(this);
      if (findHostInstanceResult) {
        const tmpResult = _mod1881;
        const viewInfo = tmpResult.getViewInfo(findHostInstanceResult);
        let num = viewInfo.viewTag;
        if (num == null) {
          num = -1;
        }
        const obj2 = { viewTag: num, shadowNodeWrapper: tmpResult2.getShadowNodeWrapperFromRef(this, findHostInstanceResult), reactViewName };
        reactViewName = viewInfo.reactViewName;
        tmpResult2 = _mod1706;
        return obj2;
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("[Reanimated] Cannot find host instance for this component. Maybe it renders nothing?");
        throw error;
      }
    }
  },
  {
    key: "_refreshComponentRef",
    value: function _refreshComponentRef() {
      const self = this;
      const _rawComponentRef = this._rawComponentRef;
      let getAnimatableRef;
      if (_rawComponentRef != null) {
        getAnimatableRef = _rawComponentRef.getAnimatableRef;
      }
      if (getAnimatableRef) {
        const _resolveComponentRefResult = self._resolveComponentRef(_rawComponentRef);
        if (_resolveComponentRefResult !== self._componentRef) {
          self._updateComponentRef(_resolveComponentRefResult);
        }
      }
    }
  },
  {
    key: "_updateComponentRef",
    value: function _updateComponentRef(_resolveComponentRefResult) {
      const self = this;
      const _viewInfo = this._viewInfo;
      this._componentRef = _resolveComponentRefResult;
      if (undefined !== _viewInfo) {
        const _resolveViewInfoResult = self._resolveViewInfo();
        if (_resolveViewInfoResult.viewTag !== _viewInfo.viewTag) {
          self._detachHostBindings(_viewInfo);
          if (_viewInfo.shadowNodeWrapper) {
            const obj = _mod1658;
            obj.markNodeAsRemovable(_viewInfo.shadowNodeWrapper);
          }
          self._viewInfo = _resolveViewInfoResult;
          if (self._CSSManager) {
            const _CSSManager = self._CSSManager;
            _CSSManager.unmountCleanup();
            self._CSSManager = self._createCSSManager();
            const _CSSManager2 = self._CSSManager;
            _CSSManager2.update(self._cssStyle, self.props);
          }
          self._attachHostBindings();
        } else {
          self._viewInfo = _resolveViewInfoResult;
        }
      }
    }
  },
  {
    key: "_detachHostBindings",
    value: function _detachHostBindings(arg0) {

    }
  },
  {
    key: "_attachHostBindings",
    value: function _attachHostBindings() {

    }
  },
  {
    key: "_createCSSManager",
    value: function _createCSSManager() {
      const CSSManager = CSSKeyframesRuleImpl.CSSManager;
      let name = this.ChildComponent.displayName;
      const _getViewInfoResult = this._getViewInfo();
      if (name == null) {
        name = this.ChildComponent.name;
      }
      const cSSManager = new CSSManager(_getViewInfoResult, name);
      return cSSManager;
    }
  },
  {
    key: "_updateStyles",
    value: function _updateStyles(style) {
      let flattenResult = hasOwnProperty.flatten(style.style);
      if (flattenResult == null) {
        flattenResult = {};
      }
      this._cssStyle = flattenResult;
    }
  },
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      this._updateStyles(this.props);
      const _viewInfo = this._viewInfo;
      let viewTag;
      if (_viewInfo != null) {
        viewTag = _viewInfo.viewTag;
      }
      const tmp3 = self._willUnmount && typeof viewTag === "number";
      if (tmp3) {
        const obj = _mod1658;
        const result = obj.unmarkNodeAsRemovable(viewTag);
      }
      if (self._CSSManager == null) {
        self._CSSManager = self._createCSSManager();
      }
      const _CSSManager = self._CSSManager;
      if (_CSSManager != null) {
        _CSSManager.update(self._cssStyle, self.props);
      }
      self._willUnmount = false;
    }
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      if (this._CSSManager) {
        const _CSSManager = self._CSSManager;
        _CSSManager.unmountCleanup();
      }
      const _viewInfo = self._viewInfo;
      let shadowNodeWrapper;
      if (_viewInfo != null) {
        shadowNodeWrapper = _viewInfo.shadowNodeWrapper;
      }
      if (shadowNodeWrapper) {
        const obj = _mod1658;
        obj.markNodeAsRemovable(shadowNodeWrapper);
      }
      self._willUnmount = true;
    }
  },
  {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(arg0) {
      const self = this;
      this._updateStyles(arg0);
      if (this._CSSManager) {
        const _CSSManager = self._CSSManager;
        _CSSManager.update(self._cssStyle, arg0);
      }
      return true;
    }
  },
  {
    key: "render",
    value: function render(props) {
      const self = this;
      const ChildComponent = this.ChildComponent;
      const filterCSSProps = filterCSSProps2.filterCSSProps;
      filterCSSProps2;
      const tmp = jsx;
      if (props == null) {
        props = self.props;
      }
      const obj = { collapsable: false, ref: self._setComponentRef };
      const merged = Object.assign(filterCSSProps(props));
      return tmp(ChildComponent, obj);
    }
  }
];

export default _createClass(AnimatedComponent, items);
