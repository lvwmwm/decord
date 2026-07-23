// Module ID: 13494
// Function ID: 103852
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5, 57, 31, 27, 10440, 33, 4130, 566, 10939, 4543, 1212, 1184, 686, 1273, 12159, 4126, 3842, 2]

// Module 13494 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import result from "result";
import getSystemLocale from "getSystemLocale";
import dispatcher from "dispatcher";
import Button from "Button";
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_9 from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_14;
let closure_15;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function MaybeClearBuildOverride() {
  function _clearOverride() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_8(tmp);
    return obj(...arguments);
  }
  const tmp = callback3(importAllResult.useState(false), 2);
  const _require = tmp[1];
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  if (null == obj.useStateFromStores(items, () => {
    const overrides = outer1_13.getCurrentBuildOverride().overrides;
    let id;
    if (null != overrides) {
      const tmp4 = overrides[callback(undefined, outer1_2[13]).DEVICE_FIELD];
      if (null != tmp4) {
        id = tmp4.id;
      }
    }
    return id;
  })) {
    return null;
  } else {
    obj = { variant: "secondary", loading: tmp[0] };
    const intl = _require(1212).intl;
    obj.text = intl.string(_require(1212).t["/Nz9rY"]);
    obj.onPress = function clearOverride() {
      return _clearOverride(...arguments);
    };
    return callback4(_require(4543).Button, obj);
  }
}
({ NativeModules: closure_11, View: closure_12 } = get_ActivityIndicator);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles({ buttons: { position: "absolute", right: 32, bottom: 32, left: 32, gap: 12 }, debugLogsContainer: { position: "absolute", right: 32, top: 64, display: "flex", flexDirection: "row", alignItems: "center", gap: 12 }, error: { marginTop: 24, textAlign: "center" }, text: { textAlign: "center" } });
let tmp5 = ((PureComponent) => {
  class ErrorBoundary {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_3(this, ErrorBoundary);
      items1 = [...items];
      obj = outer1_6(ErrorBoundary);
      tmp2 = outer1_5;
      if (outer1_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items1, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.state = { error: null, info: null };
      tmp2Result.discordErrorsSet = false;
      return tmp2Result;
    }
  }
  callback2(ErrorBoundary, PureComponent);
  let obj = {
    key: "componentDidCatch",
    value: function componentDidCatch(error, extra) {
      this.triggerSoftCrash(error, extra);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "triggerSoftCrash",
    value: function triggerSoftCrash(error, extra) {
      let obj = { error, info: extra };
      this.setState(obj);
      obj = { extra };
      outer1_1(outer1_2[16]).captureCrash(error, obj);
      const obj2 = outer1_1(outer1_2[16]);
      outer1_1(outer1_2[17]).dispatch({ type: "CLEAR_CACHES", reason: "App Crashed" });
    }
  };
  items[1] = obj;
  obj = {
    key: "handleReload",
    value: function handleReload() {
      const BundleUpdaterManager = outer1_11.BundleUpdaterManager;
      BundleUpdaterManager.reload();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      if (null == window.DiscordErrors) {
        const _window = window;
        const obj = {
          softCrash(error) {
              self.triggerSoftCrash(error);
            }
        };
        window.DiscordErrors = obj;
        tmp.discordErrorsSet = true;
      }
    }
  };
  items[4] = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.discordErrorsSet) {
        const _window = window;
        window.DiscordErrors = null;
        tmp.discordErrorsSet = false;
      }
    }
  };
  items[5] = {
    key: "render",
    value: function render() {
      const self = this;
      const tmp = outer1_16(this.context);
      const error = this.state.error;
      if (null !== error) {
        let obj = { Illustration: ErrorBoundary(outer1_2[19]).AppCrash };
        const intl = ErrorBoundary(outer1_2[15]).intl;
        obj.title = intl.string(ErrorBoundary(outer1_2[15]).t.tx8CkI);
        const intl2 = ErrorBoundary(outer1_2[15]).intl;
        obj.body = intl2.string(ErrorBoundary(outer1_2[15]).t.CvQlAH);
        ({ text: obj.titleStyle, text: obj.bodyStyle } = tmp);
        obj = { style: tmp.error, variant: "text-sm/medium", color: "text-muted" };
        let message;
        if (null != error) {
          message = error.message;
        }
        if (null == message) {
          let name;
          if (null != error) {
            name = error.name;
          }
          message = name;
        }
        let str = "Unknown Error";
        if (null != message) {
          str = message;
        }
        obj.children = str;
        const items = [outer1_14(ErrorBoundary(outer1_2[20]).Text, obj), , ];
        obj = { style: tmp.buttons };
        const items1 = [outer1_14(outer1_18, {}), ];
        const obj1 = {};
        const intl3 = ErrorBoundary(outer1_2[15]).intl;
        obj1.text = intl3.string(ErrorBoundary(outer1_2[15]).t["4n8OJn"]);
        obj1.onPress = self.handleReload;
        items1[1] = outer1_14(ErrorBoundary(outer1_2[14]).Button, obj1);
        obj.children = items1;
        items[1] = outer1_15(outer1_12, obj);
        items[2] = null;
        obj.children = items;
        let children = outer1_15(ErrorBoundary(outer1_2[18]).EmptyState, obj);
        const tmp2 = outer1_15;
        const tmp5 = outer1_14;
      } else {
        children = self.props.children;
      }
      return children;
    }
  };
  return callback(ErrorBoundary, items);
})(importAllResult.PureComponent);
tmp5.contextType = require("ManaContext").ThemeContext;
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/ErrorBoundary.tsx");

export default tmp5;
