// Module ID: 12963
// Function ID: 12964
// Name: LocalSvg
// Dependencies: [41, 42, 93, 95, 98, 32, 109, 5, 19, 17, 21, 8031, 8057, 12822]
// Exports: getUriFromSource, isUriAnAndroidResourceIdentifier, loadLocalRawResourceDefault

// Module 12963 (LocalSvg)
import Fragment from "Fragment" /* 21 */;
import inlineStyles from "inlineStyles" /* 8031 */;
import react_native from "react-native" /* 8057 */;
import _mod12822 from "module_12822" /* 12822 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import "react";
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;

let c2, c5, closure_3, closure_4, closure_5, closure_7, setState;

let Component;
let Platform;
let c10;
let c9;
let unpackModuleId;
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
function loadAndroidRawResource(uri) {
  return obj(...arguments);
}
let obj = function _loadAndroidRawResource() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let _default;
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c4;
      try {
        c5 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp3;
            c4 = 1;
            c2 = 2;
            c5 = 1;
            const obj4 = { value: _default.getRawResource(closure_0), done: false };
            _default = react_native.default;
            return obj4;
          }
        } else if (1 === c2) {
          c4 = 0;
          closure_0 = closure_3;
          const _console = console;
          console.error("Error in RawResourceUtils while trying to natively load an Android raw resource: ", closure_0);
          c5 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c4 = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp12) {
        closure_3 = tmp12;
        if (0 === c4) {
          c5 = 3;
          throw tmp12;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function loadLocalRawResourceAndroid(channelIcon) {
  const assetSource = unpackModuleId.resolveAssetSource(channelIcon);
  let uri;
  if (assetSource != null) {
    uri = assetSource.uri;
  }
  if (uri) {
    let text;
    let tmp3 = typeof uri === "string";
    if (typeof uri === "string") {
      tmp3 = uri.indexOf("/") <= -1;
    }
    if (tmp3) {
      text = loadAndroidRawResource(uri);
    }
    return text;
  }
  obj = inlineStyles;
  text = obj.fetchText(uri);
}
class LocalSvg {
  constructor(asset) {
    let closure_1;
    let first;
    asset = asset.asset;
    const tmp = _objectWithoutProperties(asset, closure_2);
    [first, dependencyMap] = closure_9(null);
    const items = [asset];
    closure_10(() => {
      if (typeof loadLocalRawResourceAndroid === "function") {
        const assetSource = unpackModuleId.resolveAssetSource(tmp);
        let uri;
        if (assetSource != null) {
          uri = assetSource.uri;
        }
        if (uri) {
          let text;
          let tmp6 = typeof uri === "string";
          if (typeof uri === "string") {
            tmp6 = uri.indexOf("/") <= -1;
          }
          if (tmp6) {
            text = loadAndroidRawResource(uri);
          }
          text.then(closure_1);
        }
        obj = inlineStyles;
        text = obj.fetchText(uri);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }, items);
    const SvgCss = asset(12822).SvgCss;
    const merged = Object.assign(tmp);
    return <SvgCss xml={first} />;
  }
}
let closure_2 = ["asset"];
({ useState: c9, useEffect: c10, Component } = react);
({ Image: unpackModuleId, Platform } = react_native2);
const jsx = Fragment.jsx;
class WithLocalSvg {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, WithLocalSvg);
    const items1 = [...items];
    obj = _getPrototypeOf(WithLocalSvg);
    const tmp2 = _getPrototypeOf;
    const tmp3 = _possibleConstructorReturn;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.state = { xml: null };
    return tmp3Result;
  }
}
_inherits(WithLocalSvg, Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    this.load(this.props.asset);
  }
};
let items = [
  entry,
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(asset) {
      const self = this;
      asset = this.props.asset;
      if (asset !== asset.asset) {
        self.load(asset);
      }
    }
  },
,

];
const entry1 = {
  key: "load",
  value: function load(arg0) {
    return closure_1(...arguments);
  }
};
_asyncToGenerator(async function(arg0) {
  const self = this;
  closure_1 = arg0;
  let c8 = 0;
  let c9 = 0;
  let c6 = 0;
  return (async (arg0, value) => {
    let tmp8;
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        let tmp4;
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            return { value, done: true };
          } else {
            closure_5 = self;
            closure_4 = tmp8;
            tmp8 = closure_1;
            c6 = 1;
            setState = self.setState;
            closure_2 = {};
            tmp4 = null;
            if (closure_1) {
              tmp8 = closure_1_16(tmp8);
              c8 = 2;
              c9 = 1;
              return { value: tmp8, done: false };
            } else {
              closure_2.xml = tmp4;
              setState(closure_2);
              c6 = 0;
            }
          }
        } else if (1 === tmp3) {
          c6 = 0;
          let closure_0 = closure_7;
          const _console = console;
          console.error(closure_0);
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else {
          tmp4 = value;
          if (arg0 === 2) {
            c6 = 0;
            c9 = 3;
            return { value, done: true };
          }
        }
        c9 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp16) {
        closure_7 = tmp16;
        if (0 === c6) {
          c9 = 3;
          throw tmp16;
        } else {
          c8 = 1;
        }
      }
    }
  })();
});
items[2] = entry1;
items[3] = {
  key: "render",
  value: function render() {
    return jsx(_mod12822.SvgWithCss, { xml: this.state.xml, override: this.props });
  }
};
const WithLocalSvg_export = _createClass(WithLocalSvg, items);

export default LocalSvg;
export function getUriFromSource(channelIcon) {
  const assetSource = unpackModuleId.resolveAssetSource(channelIcon);
  let uri;
  if (assetSource != null) {
    uri = assetSource.uri;
  }
  return uri;
}
export function loadLocalRawResourceDefault(channelIcon) {
  const assetSource = unpackModuleId.resolveAssetSource(channelIcon);
  let uri;
  if (assetSource != null) {
    uri = assetSource.uri;
  }
  obj = inlineStyles;
  return obj.fetchText(uri);
}
export function isUriAnAndroidResourceIdentifier(str) {
  let tmp = typeof str === "string";
  if (typeof str === "string") {
    tmp = str.indexOf("/") <= -1;
  }
  return tmp;
}
export { loadAndroidRawResource };
export { loadLocalRawResourceAndroid };
export const loadLocalRawResource = loadLocalRawResourceAndroid;
export { LocalSvg };
export { WithLocalSvg_export as WithLocalSvg };
