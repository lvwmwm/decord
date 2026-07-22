// Module ID: 293
// Function ID: 4493
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 293 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = [52881784.90621606, 19991589055400618000000000000000000000, -51566351792145420000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 190359856548999340000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.0000000000009458744898768167];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const createRef = arg1(dependencyMap[6]).createRef;
const importAllResult = importAll(dependencyMap[6]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
let closure_13 = [0.295, 0.097, 0.95];
const tmp3 = arg1(dependencyMap[7]);
const tmp4 = (Component) => {
  class DrawerLayoutAndroid {
    constructor() {
      self = this;
      tmp = closure_5(this, DrawerLayoutAndroid);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_8(DrawerLayoutAndroid);
      tmp4 = closure_7;
      if (closure_15()) {
        items1 = combined;
        if (!combined) {
          items1 = [];
        }
        tmp6 = closure_8;
        constructResult = Reflect.construct(obj, items1, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp4Result = tmp4(self, constructResult);
      DrawerLayoutAndroid = tmp4Result;
      tmp4Result._nativeRef = closure_10();
      tmp4Result.state = { drawerOpened: false };
      tmp4Result._onDrawerSlide = (arg0) => {
        if (tmp4Result.props.onDrawerSlide) {
          const props = tmp4Result.props;
          props.onDrawerSlide(arg0);
        }
        if ("on-drag" === tmp4Result.props.keyboardDismissMode) {
          callback(closure_2[8])();
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
          props.onDrawerStateChanged(closure_13[arg0.nativeEvent.drawerState]);
        }
      };
      return tmp4Result;
    }
  }
  const arg1 = DrawerLayoutAndroid;
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
      const items = [closure_14.drawerSubview, ];
      obj = { width: self.props.drawerWidth, backgroundColor: str };
      items[1] = obj;
      let str2 = "none";
      const tmp = callback2(props, closure_3);
      const tmp3 = callback7;
      if (self.state.drawerOpened) {
        str2 = "auto";
      }
      obj.pointerEvents = str2;
      obj.collapsable = false;
      const items1 = [props.renderNavigationView(), ];
      let tmp5 = tmp2;
      if (tmp2) {
        obj = { style: closure_14.drawerStatusBar };
        tmp5 = callback6(callback(closure_2[9]), obj);
      }
      items1[1] = tmp5;
      obj.children = items1;
      const tmp4 = callback(closure_2[9]);
      const obj1 = { style: closure_14.mainSubview, collapsable: false };
      let tmp13 = tmp2;
      const tmp11 = callback7;
      const tmp3Result = tmp3(callback(closure_2[9]), obj);
      if (tmp2) {
        const obj2 = { translucent: true, backgroundColor: self.props.statusBarBackgroundColor };
        tmp13 = callback6(callback(closure_2[10]), obj2);
      }
      const items2 = [tmp13, , ];
      if (tmp2) {
        const obj3 = {};
        const items3 = [closure_14.statusBar, ];
        const obj4 = { backgroundColor: self.props.statusBarBackgroundColor };
        items3[1] = obj4;
        obj3.style = items3;
        tmp2 = callback6(callback(closure_2[9]), obj3);
      }
      items2[1] = tmp2;
      items2[2] = self.props.children;
      obj1.children = items2;
      const tmp12 = callback(closure_2[9]);
      const obj5 = { ref: self._nativeRef, drawerBackgroundColor: str, drawerWidth: self.props.drawerWidth, drawerPosition: self.props.drawerPosition, drawerLockMode: self.props.drawerLockMode };
      const items4 = [closure_14.base, self.props.style];
      obj5.style = items4;
      ({ _onDrawerSlide: obj8.onDrawerSlide, _onDrawerOpen: obj8.onDrawerOpen, _onDrawerClose: obj8.onDrawerClose, _onDrawerStateChanged: obj8.onDrawerStateChanged } = self);
      const items5 = [tmp11(callback(closure_2[9]), obj1), tmp3Result];
      obj5.children = items5;
      const tmp11Result = tmp11(callback(closure_2[9]), obj1);
      return callback7(callback(closure_2[11]), Object.assign({}, tmp, obj5));
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "openDrawer",
    value: function openDrawer() {
      const Commands = DrawerLayoutAndroid(closure_2[11]).Commands;
      Commands.openDrawer(callback(closure_2[12])(this._nativeRef.current));
    }
  };
  items[1] = obj;
  obj = {
    key: "closeDrawer",
    value: function closeDrawer() {
      const Commands = DrawerLayoutAndroid(closure_2[11]).Commands;
      Commands.closeDrawer(callback(closure_2[12])(this._nativeRef.current));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "blur",
    value: function blur() {
      callback(closure_2[12])(this._nativeRef.current).blur();
    }
  };
  items[4] = {
    key: "focus",
    value: function focus() {
      callback(closure_2[12])(this._nativeRef.current).focus();
    }
  };
  items[5] = {
    key: "measure",
    value: function measure(arg0) {
      callback(closure_2[12])(this._nativeRef.current).measure(arg0);
    }
  };
  items[6] = {
    key: "measureInWindow",
    value: function measureInWindow(arg0) {
      callback(closure_2[12])(this._nativeRef.current).measureInWindow(arg0);
    }
  };
  items[7] = {
    key: "measureLayout",
    value: function measureLayout(arg0, arg1, arg2) {
      callback(closure_2[12])(this._nativeRef.current).measureLayout(arg0, arg1, arg2);
    }
  };
  items[8] = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      callback(closure_2[12])(this._nativeRef.current).setNativeProps(arg0);
    }
  };
  const items1 = [
    {
      key: "positions",
      get() {
        console.warn("Setting DrawerLayoutAndroid drawerPosition using `DrawerLayoutAndroid.positions` is deprecated. Instead pass the string value \"left\" or \"right\"");
        return { fill: "<string:3235529365>", scale-down: "<string:21823490>" };
      }
    }
  ];
  return callback(DrawerLayoutAndroid, items, items1);
}(importAllResult.Component);
let obj = { base: { 1228397195: "vertical", 1574261717: false }, mainSubview: { left: "center", backgroundColor: -24, "Bool(true)": null, "Bool(true)": 1, "Bool(true)": "Malaysia" }, drawerSubview: {} };
obj = { height: importDefault(dependencyMap[10]).currentHeight };
obj.statusBar = obj;
const obj1 = { "Bool(false)": 131420590, "Bool(false)": -1717986767, "Bool(false)": -644245095, "Bool(false)": 94527, "Bool(false)": -715784192, "Bool(false)": -706669305, height: importDefault(dependencyMap[10]).currentHeight };
obj.drawerStatusBar = obj1;
let closure_14 = importDefault(dependencyMap[13]).create(obj);

export default tmp4;
