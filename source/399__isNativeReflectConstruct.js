// Module ID: 399
// Function ID: 5772
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 399 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = [];
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const jsx = arg1(dependencyMap[7]).jsx;

export default (PureComponent) => {
  class SectionList {
    constructor() {
      self = this;
      tmp = closure_4(this, SectionList);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_7(SectionList);
      tmp3 = closure_6;
      if (closure_10()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, combined, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      SectionList = tmp3Result;
      tmp3Result._captureRef = (_wrapperListRef) => {
        tmp3Result._wrapperListRef = _wrapperListRef;
      };
      return tmp3Result;
    }
  }
  const importDefault = SectionList;
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
  const items = [obj, , , , , , ];
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
      return callback4(SectionList(closure_1[8]).VirtualizedSectionList, Object.assign({}, callback(props, closure_2), obj));
    }
  };
  return callback(SectionList, items);
}(importAll(dependencyMap[6]).PureComponent);
