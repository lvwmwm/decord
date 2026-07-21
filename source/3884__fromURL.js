// Module ID: 3884
// Function ID: 32160
// Name: _fromURL
// Dependencies: []

// Module 3884 (_fromURL)
let closure_1 = importDefault(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const NitroModules = arg1(dependencyMap[2]).NitroModules;
let closure_3 = NitroModules.createHybridObject("RiveFileFactory");
const obj = {};
(arg0) => {
  async function _fromURL(uri, data, arg2) {
    if (obj) {
      return obj.resume();
    } else {
      const tmp = arguments.length > 2 && undefined !== arguments[2];
      let tmp2 = !tmp;
      if (tmp) {
        tmp2 = arguments[2];
      }
      let tmp4;
      if (data) {
        const obj = { data };
        tmp4 = obj;
      }
      return closure_3.fromURL(uri, tmp2, tmp4);
    }
  }
  async function _fromFileURL(arg0, arg1) {
    if (obj) {
      return obj.resume();
    } else {
      let tmp;
      if (arguments.length > 1) {
        if (undefined !== arguments[1]) {
          tmp = arguments[1];
        }
      }
      const tmp2 = arguments.length > 2 && undefined !== arguments[2];
      let tmp3 = !tmp2;
      if (tmp2) {
        tmp3 = arguments[2];
      }
      let tmp5;
      if (tmp) {
        const obj = { data: tmp };
        tmp5 = obj;
      }
      return closure_3.fromFileURL(arg0, tmp3, tmp5);
    }
  }
  async function _fromResource(arg0, data, arg2) {
    if (obj) {
      return obj.resume();
    } else {
      const tmp = arguments.length > 2 && undefined !== arguments[2];
      let tmp2 = !tmp;
      if (tmp) {
        tmp2 = arguments[2];
      }
      let tmp4;
      if (data) {
        const obj = { data };
        tmp4 = obj;
      }
      return closure_3.fromResource(arg0, tmp2, tmp4);
    }
  }
  async function _fromBytes(arg0, data, arg2) {
    if (obj) {
      return obj.resume();
    } else {
      const tmp = arguments.length > 2 && undefined !== arguments[2];
      let tmp2 = !tmp;
      if (tmp) {
        tmp2 = arguments[2];
      }
      let tmp4;
      if (data) {
        const obj = { data };
        tmp4 = obj;
      }
      return closure_3.fromBytes(arg0, tmp2, tmp4);
    }
  }
  async function _fromSource(uri, current, arg2) {
    if (obj) {
      return obj.resume();
    } else {
      const tmp2 = arguments.length > 2 && undefined !== arguments[2];
      let tmp3 = !tmp2;
      if (tmp2) {
        tmp3 = arguments[2];
      }
      let tmp7 = null;
      if ("number" === typeof uri) {
        tmp7 = uri;
      }
      uri = null;
      if ("object" === typeof uri) {
        uri = uri.uri;
      }
      if (tmp7) {
        const assetSource = closure_2.resolveAssetSource(tmp7);
        let uri1;
        if (null != assetSource) {
          uri1 = assetSource.uri;
        }
        uri = uri1;
      }
      if (uri) {
        if (str3.match(/https?:\/\//)) {
          let fromURLResult = closure_0.fromURL(uri, current, tmp3);
        } else if (str3.match(/file:\/\//)) {
          fromURLResult = obj2.fromFileURL(str3, current, tmp4);
        } else {
          fromURLResult = obj2.fromResource(str3, current, tmp4);
        }
        return fromURLResult;
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Invalid source: could not resolve asset " + uri + ". Ensure 'riv' is in metro.config.js assetExts.");
        throw error;
      }
    }
  }
  arg0.fromURL = function fromURL(uri, current, arg2) {
    return _fromURL(...arguments);
  };
  arg0.fromFileURL = function fromFileURL(arg0, current, arg2) {
    return _fromFileURL(...arguments);
  };
  arg0.fromResource = function fromResource(arg0, current, arg2) {
    return _fromResource(...arguments);
  };
  arg0.fromBytes = function fromBytes(arg0, current, arg2) {
    return _fromBytes(...arguments);
  };
  arg0.fromSource = function fromSource(arg0, arg1) {
    return _fromSource(...arguments);
  };
}(obj);

export const RiveFileFactory = obj;
