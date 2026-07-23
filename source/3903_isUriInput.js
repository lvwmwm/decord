// Module ID: 3903
// Function ID: 32288
// Name: isUriInput
// Dependencies: [5, 57, 31, 27, 3886, 3883]
// Exports: useRiveFile

// Module 3903 (isUriInput)
import callDispose from "callDispose";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { Image } from "get ActivityIndicator";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function isUriInput(src) {
  let tmp = null != src;
  if (tmp) {
    tmp = "object" === typeof src;
  }
  if (tmp) {
    tmp = "uri" in src;
  }
  return tmp;
}
function transformFilesHandledMapping(arg0) {
  let obj = {};
  if (undefined !== arg0) {
    const _Object = Object;
    const entries = Object.entries(arg0);
    const item = entries.forEach((arg0) => {
      let tmp = outer1_3(arg0, 2);
      obj[tmp[0]] = (function parsePossibleSources(__type) {
        let fileName;
        let path;
        let tmp = null !== __type;
        if (tmp) {
          tmp = "object" === typeof __type;
        }
        if (tmp) {
          tmp = "__type" in __type;
        }
        if (tmp) {
          tmp = "HybridObject<RiveImage>" === __type.__type;
        }
        if (tmp) {
          let obj = { image: __type };
          return obj;
        } else {
          const source = __type.source;
          if ("number" === typeof source) {
            const assetSource = outer2_8.resolveAssetSource(source);
            if (assetSource) {
              if (assetSource.uri) {
                obj = { sourceAssetId: assetSource.uri };
                return obj;
              }
            }
            const _Error2 = Error;
            const error = new Error("Invalid asset source provided.");
            throw error;
          } else {
            const uri = source.uri;
            if ("object" === tmp2) {
              if (uri) {
                const obj1 = { sourceUrl: uri };
                return obj1;
              }
            }
            ({ fileName, path } = source);
            if ("object" === tmp2) {
              if (fileName) {
                obj = { sourceAsset: fileName };
                if (path) {
                  obj.path = path;
                }
                return obj;
              }
            }
            const _Error = Error;
            const error1 = new Error("Invalid source provided.");
            throw error1;
          }
        }
      })(tmp[1]);
    });
    return obj;
  }
}
({ useState: closure_4, useEffect: closure_5, useMemo: closure_6, useRef: closure_7 } = result);

export const useRiveFile = function useRiveFile(src, arg1) {
  let dependencyMap;
  let tmp4;
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let obj = arguments[1];
    }
    obj = { riveFile: undefined, isLoading: true, error: null };
    [tmp4, dependencyMap] = callback(str(obj), 2);
    const items = [obj.referencedAssets];
    const tmp6 = riveFile(() => outer1_10(obj.referencedAssets), items);
    let callDispose = tmp6;
    callback = callback2(tmp6);
    str = "primitive";
    if (isUriInput(src)) {
      str = "uri";
    }
    let uri = src;
    if (isUriInput(src)) {
      uri = src.uri;
    }
    const items1 = [str, uri];
    uri(() => {
      let c0 = null;
      (() => {
        let closure_0 = callback(async () => {
          if ("uri" === outer3_4) {
            let obj = { uri: outer3_5 };
            let tmp = obj;
          } else {
            tmp = outer3_5;
          }
          if (null == tmp) {
            obj = { riveFile: null, isLoading: false };
            const _Error = Error;
            const error = new Error("No Rive file input provided.");
            obj.error = error;
            outer3_1(obj);
          } else {
            if ("string" === typeof obj2) {
              if (!obj2.startsWith("http://")) {
                if (!obj2.startsWith("https://")) {
                  const RiveFileFactory3 = obj(outer4_1[4]).RiveFileFactory;
                  const tmp20 = yield RiveFileFactory3.fromResource(obj2, outer3_3.current);
                  return tmp20;
                }
              }
              const RiveFileFactory4 = obj(outer4_1[4]).RiveFileFactory;
              const tmp27 = yield RiveFileFactory4.fromURL(obj2, outer3_3.current);
              let closure_0 = tmp27;
            } else {
              if ("number" !== typeof obj2) {
                if (!("uri" in obj2)) {
                  const _ArrayBuffer = ArrayBuffer;
                  if (obj2 instanceof ArrayBuffer) {
                    const RiveFileFactory = obj(outer4_1[4]).RiveFileFactory;
                    closure_0 = yield RiveFileFactory.fromBytes(obj2, outer3_3.current);
                  }
                }
              }
              const RiveFileFactory2 = obj(outer4_1[4]).RiveFileFactory;
              closure_0 = yield RiveFileFactory2.fromSource(obj2, outer3_3.current);
            }
            obj = { riveFile: closure_0, isLoading: false, error: null };
            outer3_1(obj);
          }
        });
        return function loadRiveFile() {
          return callback(...arguments);
        };
      })()();
      return () => {
        if (c0) {
          obj = obj(outer2_1[5]);
          obj.callDispose(c0);
        }
      };
    }, items1);
    riveFile = tmp4.riveFile;
    const items2 = [tmp6, riveFile];
    uri(() => {
      if (tmp) {
        const obj = { data: callDispose };
        const result = riveFile.updateReferencedAssets(obj);
        ref.current = callDispose;
      }
    }, items2);
    obj = {};
    ({ riveFile: obj3.riveFile, isLoading: obj3.isLoading, error: obj3.error } = tmp4);
    return obj;
  }
  obj = {};
};
