// Module ID: 3901
// Function ID: 32281
// Name: isUriInput
// Dependencies: []
// Exports: useRiveFile

// Module 3901 (isUriInput)
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
  const obj = {};
  const arg1 = obj;
  if (undefined !== arg0) {
    const _Object = Object;
    const entries = Object.entries(arg0);
    const item = entries.forEach((arg0) => {
      const tmp = callback(arg0, 2);
      obj[tmp[0]] = function parsePossibleSources(__type) {
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
            const assetSource = closure_8.resolveAssetSource(source);
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
      }(tmp[1]);
    });
    return obj;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ useState: closure_4, useEffect: closure_5, useMemo: closure_6, useRef: closure_7 } = arg1(dependencyMap[2]));
const Image = arg1(dependencyMap[3]).Image;

export const useRiveFile = function useRiveFile(src, arg1) {
  let tmp4;
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let obj = arguments[1];
    }
    arg1 = obj;
    obj = { "Bool(true)": "BG_GRADIENT_RETRO_RAINCLOUD_1", "Bool(true)": 73.12, registerAsset: "BG_GRADIENT_HANAMI_1", riveFile: undefined };
    [tmp4, closure_1] = callback(str(obj), 2);
    const items = [obj.referencedAssets];
    const tmp6 = riveFile(() => callback(obj.referencedAssets), items);
    let closure_2 = tmp6;
    const callback = callback2(tmp6);
    let str = "primitive";
    if (isUriInput(src)) {
      str = "uri";
    }
    let uri = src;
    if (isUriInput(src)) {
      uri = src.uri;
    }
    const items1 = [str, uri];
    uri(() => {
      let closure_0 = null;
      () => {
        let closure_0 = callback(async () => {
          if ("uri" === closure_4) {
            let obj = { uri: closure_5 };
            let tmp = obj;
          } else {
            tmp = closure_5;
          }
          if (null == tmp) {
            obj = { "Bool(true)": true, "Bool(true)": true };
            const _Error = Error;
            const error = new Error("No Rive file input provided.");
            obj.error = error;
            callback2(obj);
          } else {
            if ("string" === typeof obj2) {
              if (!obj2.startsWith("http://")) {
                if (!obj2.startsWith("https://")) {
                  const RiveFileFactory3 = callback(callback2[4]).RiveFileFactory;
                  const tmp20 = yield RiveFileFactory3.fromResource(obj2, closure_3.current);
                  return tmp20;
                }
              }
              const RiveFileFactory4 = callback(callback2[4]).RiveFileFactory;
              const tmp27 = yield RiveFileFactory4.fromURL(obj2, closure_3.current);
              let callback = tmp27;
            } else {
              if ("number" !== typeof obj2) {
                if (!("uri" in obj2)) {
                  const _ArrayBuffer = ArrayBuffer;
                  if (obj2 instanceof ArrayBuffer) {
                    const RiveFileFactory = callback(callback2[4]).RiveFileFactory;
                    callback = yield RiveFileFactory.fromBytes(obj2, closure_3.current);
                  }
                }
              }
              const RiveFileFactory2 = callback(callback2[4]).RiveFileFactory;
              callback = yield RiveFileFactory2.fromSource(obj2, closure_3.current);
            }
            obj = { riveFile: callback };
            callback2(obj);
          }
        });
        return function loadRiveFile() {
          return callback(...arguments);
        };
      }()();
      return () => {
        if (_null) {
          _null(closure_1[5]).callDispose(_null);
          const obj = _null(closure_1[5]);
        }
      };
    }, items1);
    const riveFile = tmp4.riveFile;
    const items2 = [tmp6, riveFile];
    uri(() => {
      if (tmp) {
        const obj = { data: tmp6 };
        const result = riveFile.updateReferencedAssets(obj);
        ref.current = tmp6;
      }
    }, items2);
    obj = {};
    ({ riveFile: obj3.riveFile, isLoading: obj3.isLoading, error: obj3.error } = tmp4);
    return obj;
  }
  obj = {};
};
