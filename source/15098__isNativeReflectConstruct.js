// Module ID: 15098
// Function ID: 113933
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: captureScreen

// Module 15098 (_isNativeReflectConstruct)
let Platform;
let StyleProp;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function validateOptions(options) {
  options = Object.assign({}, closure_13, options);
  const errors = [];
  let tmp = "width" in options;
  if (tmp) {
    let tmp2 = "number" !== typeof options.width;
    if (!tmp2) {
      tmp2 = options.width <= 0;
    }
    tmp = tmp2;
  }
  if (tmp) {
    errors.push("option width should be a positive number");
    delete r2.width;
  }
  let tmp4 = "height" in options;
  if (tmp4) {
    let tmp5 = "number" !== typeof options.height;
    if (!tmp5) {
      tmp5 = options.height <= 0;
    }
    tmp4 = tmp5;
  }
  if (tmp4) {
    errors.push("option height should be a positive number");
    delete r2.height;
  }
  let tmp7 = "number" !== typeof options.quality;
  if (!tmp7) {
    tmp7 = options.quality < 0;
  }
  if (!tmp7) {
    tmp7 = options.quality > 1;
  }
  if (tmp7) {
    errors.push("option quality should be a number between 0.0 and 1.0");
    options.quality = closure_13.quality;
  }
  if ("boolean" !== typeof options.snapshotContentContainer) {
    errors.push("option snapshotContentContainer should be a boolean");
  }
  if ("boolean" !== typeof options.handleGLSurfaceViewOnAndroid) {
    errors.push("option handleGLSurfaceViewOnAndroid should be a boolean");
  }
  if (-1 === closure_11.indexOf(options.format)) {
    options.format = closure_13.format;
    const text = `option format '${size.format}`;
    errors.push(`${`option format '${size.format}`}' is not in valid formats: ${closure_11.join(" | ")}`);
  }
  if (-1 === closure_12.indexOf(options.result)) {
    options.result = closure_13.result;
    const text1 = `option result '${size.result}`;
    errors.push(`${`option result '${size.result}`}' is not in valid formats: ${closure_12.join(" | ")}`);
  }
  return { options, errors };
}
function ensureModuleIsLoaded() {
  if (!importDefault(dependencyMap[8])) {
    const _Error = Error;
    const error = new Error("react-native-view-shot: NativeModules.RNViewShot is undefined. Make sure the library is linked on the native side.");
    throw error;
  }
}
function captureRef(current, options) {
  ensureModuleIsLoaded();
  let tmp2 = current;
  if (current) {
    tmp2 = current;
    if ("object" === typeof current) {
      tmp2 = current;
      if ("current" in current) {
        tmp2 = current;
        if (current.current) {
          if (!current.current) {
            const _Error = Error;
            const error = new Error("ref.current is null");
            return Promise.reject(error);
          }
        }
      }
    }
  }
  let tmp8 = tmp2;
  if ("number" !== typeof tmp2) {
    tmp8 = callback3(tmp2);
    if (!tmp8) {
      const _Error2 = Error;
      const _String = String;
      const error1 = new Error("findNodeHandle failed to resolve view=" + String(tmp2));
      return Promise.reject(error1);
    }
  }
  const tmp15 = validateOptions(options);
  return importDefault(dependencyMap[8]).captureRef(tmp8, tmp15.options);
}
function releaseCapture(arg0) {
  if ("string" === typeof arg0) {
    importDefault(dependencyMap[8]).releaseCapture(arg0);
    const obj = importDefault(dependencyMap[8]);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
importDefault(dependencyMap[5]);
({ View: closure_7, Platform, findNodeHandle: closure_8, StyleProp } = arg1(dependencyMap[6]));
const jsx = arg1(dependencyMap[7]).jsx;
const promise = new Promise(() => {

});
if (!importDefault(dependencyMap[8])) {
  const _console = console;
  console.warn("react-native-view-shot: NativeModules.RNViewShot is undefined. Make sure the library is linked on the native side.");
}
const items = [1511587843, -1832452092];
let closure_11 = items.concat([]);
const items1 = [];
let closure_12 = items1.concat([]);
let closure_13 = {};
const tmp6 = (Component) => {
  class ViewShot {
    constructor() {
      self = this;
      tmp = closure_2(this, ViewShot);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_5(ViewShot);
      tmp3 = closure_4;
      if (closure_14()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, combined, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      ViewShot = tmp3Result;
      promise = new Promise((resolveFirstLayout) => {
        tmp3Result.resolveFirstLayout = resolveFirstLayout;
      });
      tmp3Result.firstLayoutPromise = promise;
      tmp3Result.capture = () => tmp3Result.firstLayoutPromise.then(() => {
        const root = closure_0.root;
        if (root) {
          let tmp = callback(root, closure_0.props.options);
        } else {
          tmp = closure_10;
        }
        return tmp;
      }).then((arg0) => {
        closure_0.onCapture(arg0);
        return arg0;
      }, (arg0) => {
        closure_0.onCaptureFailure(arg0);
        throw arg0;
      });
      tmp3Result.onCapture = (lastCapturedURI) => {
        if (tmp3Result.root) {
          if (tmp3Result.lastCapturedURI) {
            const _setTimeout = setTimeout;
            const timerId = setTimeout(closure_18, 500, tmp3Result.lastCapturedURI);
          }
          tmp3Result.lastCapturedURI = lastCapturedURI;
          const onCapture = tmp3Result.props.onCapture;
          if (onCapture) {
            onCapture(lastCapturedURI);
          }
        }
      };
      tmp3Result.onCaptureFailure = (arg0) => {
        if (tmp3Result.root) {
          const onCaptureFailure = tmp3Result.props.onCaptureFailure;
          if (onCaptureFailure) {
            onCaptureFailure(arg0);
          }
        }
      };
      tmp3Result.syncCaptureLoop = (arg0) => {
        cancelAnimationFrame(_raf._raf);
        if ("continuous" === arg0) {
          const _raf = "-";
          function loop() {
            _var._raf = requestAnimationFrame(loop);
            if (_var !== _var.lastCapturedURI) {
              const _var = _var.lastCapturedURI;
              _var.capture();
            }
          }
          const _requestAnimationFrame = requestAnimationFrame;
          _raf._raf = requestAnimationFrame(loop);
        }
      };
      tmp3Result.onRef = (root) => {
        tmp3Result.root = root;
      };
      tmp3Result.onLayout = (nativeEvent) => {
        const onLayout = tmp3Result.props.onLayout;
        const firstLayout = tmp3Result.resolveFirstLayout(nativeEvent.nativeEvent.layout);
        if (onLayout) {
          onLayout(nativeEvent);
        }
      };
      return tmp3Result;
    }
  }
  const importDefault = ViewShot;
  callback2(ViewShot, Component);
  let obj = {
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
  const items = [obj, , , ];
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(captureMode) {
      const self = this;
      let tmp = undefined !== this.props.captureMode;
      if (tmp) {
        tmp = self.props.captureMode !== captureMode.captureMode;
      }
      if (tmp) {
        self.syncCaptureLoop(self.props.captureMode);
      }
      if ("update" === self.props.captureMode) {
        self.capture();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.syncCaptureLoop(null);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value: function render() {
      return callback3(closure_7, { ref: this.onRef, collapsable: false, onLayout: this.onLayout, style: this.props.style, children: this.props.children });
    }
  };
  return callback(ViewShot, items);
}(arg1(dependencyMap[5]).Component);
tmp6.captureRef = captureRef;
tmp6.releaseCapture = releaseCapture;

export default tmp6;
export { ensureModuleIsLoaded };
export { captureRef };
export { releaseCapture };
export const captureScreen = function captureScreen(options) {
  ensureModuleIsLoaded();
  const tmp2 = validateOptions(options);
  return importDefault(dependencyMap[8]).captureScreen(tmp2.options);
};
