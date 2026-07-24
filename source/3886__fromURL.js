// Module ID: 3886
// Function ID: 32168
// Name: _fromURL
// Dependencies: [5, 27, 3862]

// Module 3886 (_fromURL)
import asyncGeneratorStep from "asyncGeneratorStep";
import { Image } from "get ActivityIndicator";
import { NitroModules } from "module_3862";

let closure_3 = NitroModules.createHybridObject("RiveFileFactory");
let obj = {};
((arg0) => {
  async function _fromURL(arg0, arg1, arg2) {
    if (obj) {
      return obj.resume();
    } else {
      const tmp = arguments.length > 2 && undefined !== arguments[2];
      let tmp2 = !tmp;
      if (tmp) {
        tmp2 = arguments[2];
      }
      let tmp4;
      if (arg1) {
        obj = { data: arg1 };
        tmp4 = obj;
      }
      return _fromBytes.fromURL(arg0, tmp2, tmp4);
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
        obj = { data: tmp };
        tmp5 = obj;
      }
      return _fromBytes.fromFileURL(arg0, tmp3, tmp5);
    }
  }
  async function _fromResource(arg0, arg1, arg2) {
    if (obj) {
      return obj.resume();
    } else {
      const tmp = arguments.length > 2 && undefined !== arguments[2];
      let tmp2 = !tmp;
      if (tmp) {
        tmp2 = arguments[2];
      }
      let tmp4;
      if (arg1) {
        obj = { data: arg1 };
        tmp4 = obj;
      }
      return _fromBytes.fromResource(arg0, tmp2, tmp4);
    }
  }
  async function _fromBytes(arg0, arg1, arg2) {
    if (obj) {
      return obj.resume();
    } else {
      const tmp = arguments.length > 2 && undefined !== arguments[2];
      let tmp2 = !tmp;
      if (tmp) {
        tmp2 = arguments[2];
      }
      let tmp4;
      if (arg1) {
        obj = { data: arg1 };
        tmp4 = obj;
      }
      return _fromBytes.fromBytes(arg0, tmp2, tmp4);
    }
  }
  async function _fromSource(arg0, arg1, arg2) {
    if (obj) {
      return obj.resume();
    } else {
      const tmp2 = arguments.length > 2 && undefined !== arguments[2];
      let tmp3 = !tmp2;
      if (tmp2) {
        tmp3 = arguments[2];
      }
      let tmp7 = null;
      if ("number" === typeof arg0) {
        tmp7 = arg0;
      }
      let uri = null;
      if ("object" === typeof arg0) {
        uri = arg0.uri;
      }
      if (tmp7) {
        const assetSource = _fromResource.resolveAssetSource(tmp7);
        let uri1;
        if (null != assetSource) {
          uri1 = assetSource.uri;
        }
        uri = uri1;
      }
      if (uri) {
        if (str3.match(/https?:\/\//)) {
          let fromURLResult = _fromURL.fromURL(uri, arg1, tmp3);
        } else if (str3.match(/file:\/\//)) {
          fromURLResult = obj2.fromFileURL(str3, arg1, tmp4);
        } else {
          fromURLResult = obj2.fromResource(str3, arg1, tmp4);
        }
        return fromURLResult;
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Invalid source: could not resolve asset " + arg0 + ". Ensure 'riv' is in metro.config.js assetExts.");
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
})(obj);

export const RiveFileFactory = obj;
