// Module ID: 399
// Function ID: 5772
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 33, 303]

// Module 399 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import jsxProd from "jsxProd";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { jsx } from "jsxProd";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = ["stickySectionHeadersEnabled"];

export default ((PureComponent) => {
  class SectionList {
    constructor() {
      self = this;
      tmp = outer1_4(this, apply);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = outer1_7(apply);
      tmp3 = outer1_6;
      if (outer1_10()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, combined, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      apply = tmp3Result;
      tmp3Result._captureRef = (_wrapperListRef) => {
        closure_0._wrapperListRef = _wrapperListRef;
      };
      return tmp3Result;
    }
  }
  callback2(SectionList, PureComponent);
  let obj = {
    key: "scrollToLocation",
    value: function scrollToLocation(arg0) {
      if (null != this._wrapperListRef) {
        const _wrapperListRef = this._wrapperListRef;
        _wrapperListRef.scrollToLocation(arg0);
      }
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "recordInteraction",
    value: function recordInteraction() {
      let _wrapperListRef = this._wrapperListRef;
      if (_wrapperListRef) {
        const _wrapperListRef2 = this._wrapperListRef;
        _wrapperListRef = _wrapperListRef2.getListRef();
      }
      if (_wrapperListRef) {
        _wrapperListRef.recordInteraction();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "flashScrollIndicators",
    value: function flashScrollIndicators() {
      let _wrapperListRef = this._wrapperListRef;
      if (_wrapperListRef) {
        const _wrapperListRef2 = this._wrapperListRef;
        _wrapperListRef = _wrapperListRef2.getListRef();
      }
      if (_wrapperListRef) {
        const result = _wrapperListRef.flashScrollIndicators();
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getScrollResponder",
    value: function getScrollResponder() {
      let _wrapperListRef = this._wrapperListRef;
      if (_wrapperListRef) {
        const _wrapperListRef2 = this._wrapperListRef;
        _wrapperListRef = _wrapperListRef2.getListRef();
      }
      return _wrapperListRef ? _wrapperListRef.getScrollResponder() : undefined;
    }
  };
  items[4] = {
    key: "getScrollableNode",
    value: function getScrollableNode() {
      let _wrapperListRef = this._wrapperListRef;
      if (_wrapperListRef) {
        const _wrapperListRef2 = this._wrapperListRef;
        _wrapperListRef = _wrapperListRef2.getListRef();
      }
      return _wrapperListRef ? _wrapperListRef.getScrollableNode() : undefined;
    }
  };
  items[5] = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      let _wrapperListRef = this._wrapperListRef;
      if (_wrapperListRef) {
        const _wrapperListRef2 = this._wrapperListRef;
        _wrapperListRef = _wrapperListRef2.getListRef();
      }
      if (_wrapperListRef) {
        _wrapperListRef.setNativeProps(arg0);
      }
    }
  };
  items[6] = {
    key: "render",
    value: function render() {
      const props = this.props;
      const stickySectionHeadersEnabled = props.stickySectionHeadersEnabled;
      let tmp2 = null != stickySectionHeadersEnabled;
      if (tmp2) {
        tmp2 = stickySectionHeadersEnabled;
      }
      const obj = {
        stickySectionHeadersEnabled: tmp2,
        ref: this._captureRef,
        getItemCount(arg0) {
          return arg0.length;
        },
        getItem(arg0, arg1) {
          return arg0[arg1];
        }
      };
      return outer1_9(SectionList(outer1_1[8]).VirtualizedSectionList, Object.assign({}, outer1_3(props, outer1_2), obj));
    }
  };
  return callback(SectionList, items);
})(require("result").PureComponent);
