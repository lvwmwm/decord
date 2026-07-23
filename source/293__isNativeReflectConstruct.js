// Module ID: 293
// Function ID: 4493
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 33, 294, 112, 295, 300, 48, 253]

// Module 293 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import closure_6 from "jsxProd";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { createRef } from "result";
import jsxProd from "jsxProd";
import importAllResult from "result";

let closure_11;
let closure_12;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = ["drawerBackgroundColor", "onDrawerStateChanged", "renderNavigationView", "onDrawerOpen", "onDrawerClose"];
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = ["Idle", "Dragging", "Settling"];
let tmp4 = ((Component) => {
  class DrawerLayoutAndroid {
    constructor() {
      self = this;
      tmp = outer1_5(this, apply);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = outer1_8(apply);
      tmp4 = outer1_7;
      if (outer1_15()) {
        items1 = combined;
        if (!combined) {
          items1 = [];
        }
        tmp6 = outer1_8;
        constructResult = Reflect.construct(obj, items1, outer1_8(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp4Result = tmp4(self, constructResult);
      apply = tmp4Result;
      tmp4Result._nativeRef = outer1_10();
      tmp4Result.state = { drawerOpened: false };
      tmp4Result._onDrawerSlide = (arg0) => {
        if (tmp4Result.props.onDrawerSlide) {
          const props = tmp4Result.props;
          props.onDrawerSlide(arg0);
        }
        if ("on-drag" === tmp4Result.props.keyboardDismissMode) {
          outer2_1(outer2_2[8])();
        }
      };
      tmp4Result._onDrawerOpen = () => {
        tmp4Result.setState({ drawerOpened: true });
        if (tmp4Result.props.onDrawerOpen) {
          const props = tmp4Result.props;
          props.onDrawerOpen();
        }
      };
      tmp4Result._onDrawerClose = () => {
        tmp4Result.setState({ drawerOpened: false });
        if (tmp4Result.props.onDrawerClose) {
          const props = tmp4Result.props;
          props.onDrawerClose();
        }
      };
      tmp4Result._onDrawerStateChanged = (arg0) => {
        if (tmp4Result.props.onDrawerStateChanged) {
          const props = tmp4Result.props;
          props.onDrawerStateChanged(outer2_13[arg0.nativeEvent.drawerState]);
        }
      };
      return tmp4Result;
    }
  }
  callback2(DrawerLayoutAndroid, Component);
  let obj = {
    key: "render",
    value: function render() {
      let onDrawerClose;
      let onDrawerOpen;
      let onDrawerStateChanged;
      const self = this;
      const props = this.props;
      const drawerBackgroundColor = props.drawerBackgroundColor;
      let str = "white";
      if (undefined !== drawerBackgroundColor) {
        str = drawerBackgroundColor;
      }
      ({ onDrawerStateChanged, onDrawerOpen, onDrawerClose } = props);
      let tmp2 = null != self.props.statusBarBackgroundColor;
      let obj = { style: items };
      items = [outer1_14.drawerSubview, ];
      obj = { width: self.props.drawerWidth, backgroundColor: str };
      items[1] = obj;
      let str2 = "none";
      const tmp = outer1_4(props, outer1_3);
      const tmp3 = outer1_12;
      if (self.state.drawerOpened) {
        str2 = "auto";
      }
      obj.pointerEvents = str2;
      obj.collapsable = false;
      const items1 = [props.renderNavigationView(), ];
      let tmp5 = tmp2;
      if (tmp2) {
        obj = { style: outer1_14.drawerStatusBar };
        tmp5 = outer1_11(outer1_1(outer1_2[9]), obj);
      }
      items1[1] = tmp5;
      obj.children = items1;
      const tmp4 = outer1_1(outer1_2[9]);
      const obj1 = { style: outer1_14.mainSubview, collapsable: false };
      let tmp13 = tmp2;
      const tmp11 = outer1_12;
      const tmp3Result = tmp3(outer1_1(outer1_2[9]), obj);
      if (tmp2) {
        const obj2 = { translucent: true, backgroundColor: self.props.statusBarBackgroundColor };
        tmp13 = outer1_11(outer1_1(outer1_2[10]), obj2);
      }
      const items2 = [tmp13, , ];
      if (tmp2) {
        const obj3 = {};
        const items3 = [outer1_14.statusBar, ];
        const obj4 = { backgroundColor: self.props.statusBarBackgroundColor };
        items3[1] = obj4;
        obj3.style = items3;
        tmp2 = outer1_11(outer1_1(outer1_2[9]), obj3);
      }
      items2[1] = tmp2;
      items2[2] = self.props.children;
      obj1.children = items2;
      const tmp12 = outer1_1(outer1_2[9]);
      const obj5 = { ref: self._nativeRef, drawerBackgroundColor: str, drawerWidth: self.props.drawerWidth, drawerPosition: self.props.drawerPosition, drawerLockMode: self.props.drawerLockMode };
      const items4 = [outer1_14.base, self.props.style];
      obj5.style = items4;
      ({ _onDrawerSlide: obj8.onDrawerSlide, _onDrawerOpen: obj8.onDrawerOpen, _onDrawerClose: obj8.onDrawerClose, _onDrawerStateChanged: obj8.onDrawerStateChanged } = self);
      const items5 = [tmp11(outer1_1(outer1_2[9]), obj1), tmp3Result];
      obj5.children = items5;
      const tmp11Result = tmp11(outer1_1(outer1_2[9]), obj1);
      return outer1_12(outer1_1(outer1_2[11]), Object.assign({}, tmp, obj5));
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "openDrawer",
    value: function openDrawer() {
      const Commands = DrawerLayoutAndroid(outer1_2[11]).Commands;
      Commands.openDrawer(outer1_1(outer1_2[12])(this._nativeRef.current));
    }
  };
  items[1] = obj;
  obj = {
    key: "closeDrawer",
    value: function closeDrawer() {
      const Commands = DrawerLayoutAndroid(outer1_2[11]).Commands;
      Commands.closeDrawer(outer1_1(outer1_2[12])(this._nativeRef.current));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "blur",
    value: function blur() {
      outer1_1(outer1_2[12])(this._nativeRef.current).blur();
    }
  };
  items[4] = {
    key: "focus",
    value: function focus() {
      outer1_1(outer1_2[12])(this._nativeRef.current).focus();
    }
  };
  items[5] = {
    key: "measure",
    value: function measure(arg0) {
      outer1_1(outer1_2[12])(this._nativeRef.current).measure(arg0);
    }
  };
  items[6] = {
    key: "measureInWindow",
    value: function measureInWindow(arg0) {
      outer1_1(outer1_2[12])(this._nativeRef.current).measureInWindow(arg0);
    }
  };
  items[7] = {
    key: "measureLayout",
    value: function measureLayout(arg0, arg1, arg2) {
      outer1_1(outer1_2[12])(this._nativeRef.current).measureLayout(arg0, arg1, arg2);
    }
  };
  items[8] = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      outer1_1(outer1_2[12])(this._nativeRef.current).setNativeProps(arg0);
    }
  };
  let items1 = [
    {
      key: "positions",
      get() {
        console.warn("Setting DrawerLayoutAndroid drawerPosition using `DrawerLayoutAndroid.positions` is deprecated. Instead pass the string value \"left\" or \"right\"");
        return { Left: "left", Right: "right" };
      }
    }
  ];
  return callback(DrawerLayoutAndroid, items, items1);
})(require("result").Component);
let obj = { base: { flex: 1, elevation: 16 }, mainSubview: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }, drawerSubview: { position: "absolute", top: 0, bottom: 0 } };
obj = { height: require("_isNativeReflectConstruct").currentHeight };
obj.statusBar = obj;
let obj1 = { position: "absolute", top: 0, left: 0, right: 0, height: require("_isNativeReflectConstruct").currentHeight, backgroundColor: "rgba(0, 0, 0, 0.251)" };
obj.drawerStatusBar = obj1;
let closure_14 = require("setStyleAttributePreprocessor").create(obj);

export default tmp4;
