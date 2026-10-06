// Module ID: 16145
// Function ID: 16146
// Name: captureScreen
// Dependencies: [41, 42, 93, 95, 98, 19, 17, 21, 16146]
// Exports: captureScreen, ensureModuleIsLoaded

// Module 16145 (captureScreen)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import react_nativeDefault from "react-native" /* 16146 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react_native from "react-native" /* 17 */;

const react = react2;

let Platform;
let StyleProp;
let hasOwnProperty;
let metroRequire;
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
function validateOptions(options) {
  options = {};
  const merged = Object.assign(closure_12);
  const merged1 = Object.assign(options);
  let tmp4 = "width" in options;
  if (tmp4) {
    tmp4 = typeof options.width !== "number" || options.width <= 0;
    const tmp5 = typeof options.width !== "number" || options.width <= 0;
  }
  const errors = [];
  if (tmp4) {
    errors.push("option width should be a positive number");
    delete size["width"];
  }
  let tmp7 = "height" in options;
  if (tmp7) {
    tmp7 = typeof options.height !== "number" || options.height <= 0;
    const tmp8 = typeof options.height !== "number" || options.height <= 0;
  }
  if (tmp7) {
    errors.push("option height should be a positive number");
    delete size["height"];
  }
  const tmp10 = typeof options.quality !== "number" || options.quality < 0 || options.quality > 1;
  if (tmp10) {
    errors.push("option quality should be a number between 0.0 and 1.0");
    options.quality = closure_12.quality;
  }
  if (typeof options.snapshotContentContainer !== "boolean") {
    errors.push("option snapshotContentContainer should be a boolean");
  }
  if (typeof options.handleGLSurfaceViewOnAndroid !== "boolean") {
    errors.push("option handleGLSurfaceViewOnAndroid should be a boolean");
  }
  const obj = closure_10;
  if (-1 === closure_10.indexOf(options.format)) {
    options.format = closure_12.format;
    const text = `option format '${size.format}`;
    errors.push(`${`option format '${size.format}`}' is not in valid formats: ${obj.join(" | ")}`);
  }
  const obj2 = closure_11;
  if (-1 === closure_11.indexOf(options.result)) {
    options.result = closure_12.result;
    const text1 = `option result '${size.result}`;
    errors.push(`${`option result '${size.result}`}' is not in valid formats: ${obj2.join(" | ")}`);
  }
  return { options, errors };
}
function captureRef(current, options) {
  let errors;
  if (react_nativeDefault) {
    let tmp7 = current;
    if (tmp7) {
      tmp7 = current;
      if (typeof current === "object") {
        tmp7 = current;
        if ("current" in current) {
          tmp7 = current;
          if (current.current) {
            if (!current.current) {
              const _Error2 = Error;
              const self3 = this;
              const self4 = this;
              const error = new Error("ref.current is null");
              return reject(error);
            }
          }
        }
      }
    }
    let tmp11 = tmp7;
    if (typeof tmp7 !== "number") {
      tmp11 = metroRequire(tmp7);
      if (!tmp11) {
        const _Error3 = Error;
        const _String = String;
        const reject2 = Promise.reject;
        const self5 = this;
        const self6 = this;
        const error1 = new Error("findNodeHandle failed to resolve view=" + String(tmp7));
        return reject2(error1);
      }
    }
    ({ errors, options } = validateOptions(options));
    validateOptions(options);
    const tmpResult = react_nativeDefault;
    return tmpResult.captureRef(tmp11, options);
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error2 = new Error("react-native-view-shot: NativeModules.RNViewShot is undefined. Make sure the library is linked on the native side.");
    throw error2;
  }
}
function releaseCapture(str) {
  if (typeof str === "string") {
    const obj = react_nativeDefault;
    obj.releaseCapture(str);
  }
}
const Component = react2.Component;
({ View: hasOwnProperty, Platform, findNodeHandle: metroRequire, StyleProp } = react_native);
const jsx = Fragment.jsx;
const promise = new Promise(() => {

});
if (!react_nativeDefault) {
  const _console = console;
  console.warn("react-native-view-shot: NativeModules.RNViewShot is undefined. Make sure the library is linked on the native side.");
}
let items = ["png", "jpg"];
function ensureModuleIsLoaded() {
  if (!react_nativeDefault) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("react-native-view-shot: NativeModules.RNViewShot is undefined. Make sure the library is linked on the native side.");
    throw error;
  }
}
let closure_10 = items.concat(["webm", "raw"]);
let items1 = ["tmpfile", "base64", "data-uri"];
let closure_11 = items1.concat(["zip-base64"]);
let closure_12 = { format: "png", quality: 1, result: "tmpfile", snapshotContentContainer: false, handleGLSurfaceViewOnAndroid: false };
class ViewShot {
  constructor() {
    let constructResult;
    const f144327 = (resolveFirstLayout) => {
      closure_0.resolveFirstLayout = resolveFirstLayout;
    };
    const self = this;
    const items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, ViewShot);
    const items1 = [...items];
    let tmp2 = _getPrototypeOf;
    const obj = _getPrototypeOf(ViewShot);
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.firstLayoutPromise = new Promise(f144327);
    tmp3Result.capture = () => {
      const firstLayoutPromise = closure_0.firstLayoutPromise;
      const nextPromise = firstLayoutPromise.then(() => {
        let tmp2;
        const root = closure_1_0.root;
        if (root) {
          tmp2 = closure_2_14(root, tmp.props.options);
        } else {
          tmp2 = closure_2_9;
        }
        return tmp2;
      });
      return nextPromise.then((result) => {
        closure_1_0.onCapture(result);
        return result;
      }, (arg0) => {
        closure_1_0.onCaptureFailure(arg0);
        throw arg0;
      });
    };
    tmp3Result.onCapture = (lastCapturedURI) => {
      if (closure_0.root) {
        if (closure_0.lastCapturedURI) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(closure_2_15, 500, tmp.lastCapturedURI);
        }
        closure_0.lastCapturedURI = lastCapturedURI;
        const onCapture = tmp.props.onCapture;
        if (onCapture) {
          onCapture(lastCapturedURI);
        }
      }
    };
    tmp3Result.onCaptureFailure = (arg0) => {
      if (closure_0.root) {
        const onCaptureFailure = closure_0.props.onCaptureFailure;
        if (onCaptureFailure) {
          onCaptureFailure(arg0);
        }
      }
    };
    tmp3Result.syncCaptureLoop = (arg0) => {
      let lastCapturedURI;
      cancelAnimationFrame(lastCapturedURI._raf);
      const tmp = lastCapturedURI;
      if ("continuous" === arg0) {
        lastCapturedURI = "-";
        function loop() {
          lastCapturedURI._raf = requestAnimationFrame(loop);
          if (lastCapturedURI !== lastCapturedURI.lastCapturedURI) {
            lastCapturedURI = obj.lastCapturedURI;
            lastCapturedURI.capture();
          }
        }
        const _requestAnimationFrame = requestAnimationFrame;
        tmp._raf = requestAnimationFrame(loop);
      }
    };
    tmp3Result.onRef = (root) => {
      closure_0.root = root;
    };
    tmp3Result.onLayout = (nativeEvent) => {
      const onLayout = closure_0.props.onLayout;
      const firstLayout = closure_0.resolveFirstLayout(nativeEvent.nativeEvent.layout);
      if (onLayout) {
        onLayout(nativeEvent);
      }
    };
    new Promise(f144327);
    return tmp3Result;
  }
}
_inherits(ViewShot, Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const self = this;
    if ("mount" === this.props.captureMode) {
      self.capture();
    } else {
      self.syncCaptureLoop(self.props.captureMode);
    }
  }
};
const items2 = [
  entry,
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(captureMode) {
      const self = this;
      const tmp = undefined !== this.props.captureMode && self.props.captureMode !== captureMode.captureMode;
      if (tmp) {
        self.syncCaptureLoop(self.props.captureMode);
      }
      if ("update" === self.props.captureMode) {
        self.capture();
      }
    }
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.syncCaptureLoop(null);
    }
  },
  {
    key: "render",
    value: function render() {
      return <hasOwnProperty ref={this.onRef} collapsable={false} onLayout={this.onLayout} style={this.props.style}>{this.props.children}</hasOwnProperty>;
    }
  }
];
const importDefaultResultResult = _createClass(ViewShot, items2);
importDefaultResultResult.captureRef = captureRef;
importDefaultResultResult.releaseCapture = releaseCapture;

export default importDefaultResultResult;
export { ensureModuleIsLoaded };
export { captureRef };
export { releaseCapture };
export const captureScreen = function captureScreen(options) {
  let errors;
  if (react_nativeDefault) {
    ({ errors, options } = validateOptions(options));
    validateOptions(options);
    const tmpResult = react_nativeDefault;
    return tmpResult.captureScreen(options);
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("react-native-view-shot: NativeModules.RNViewShot is undefined. Make sure the library is linked on the native side.");
    throw error;
  }
};
