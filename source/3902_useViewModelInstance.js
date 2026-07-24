// Module ID: 3902
// Function ID: 32283
// Name: useViewModelInstance
// Dependencies: [31, 3891, 3895, 3883]
// Exports: useViewModelInstance

// Module 3902 (useViewModelInstance)
import result from "result";

let closure_2;
let closure_3;
({ useMemo: closure_2, useRef: closure_3 } = result);

export const useViewModelInstance = function useViewModelInstance(arg0, instanceName) {
  const _require = arg0;
  instanceName = undefined;
  if (null != instanceName) {
    instanceName = instanceName.instanceName;
  }
  let name;
  if (null != instanceName) {
    name = instanceName.name;
  }
  if (null != instanceName) {
    name = instanceName;
  }
  let artboardName;
  if (null != instanceName) {
    artboardName = instanceName.artboardName;
  }
  let viewModelName;
  if (null != instanceName) {
    viewModelName = instanceName.viewModelName;
  }
  let useNew;
  if (null != instanceName) {
    useNew = instanceName.useNew;
  }
  let closure_4 = tmp6;
  let required;
  if (null != instanceName) {
    required = instanceName.required;
  }
  let onInit;
  if (null != instanceName) {
    onInit = instanceName.onInit;
  }
  const tmp10 = viewModelName(onInit);
  let closure_5 = tmp10;
  tmp10.current = onInit;
  let obj = _require(name[2]);
  const items = [arg0, name, artboardName, viewModelName, null != useNew && useNew];
  const disposableMemo = obj.useDisposableMemo(() => {
    const tmp = (function createInstance(closure_0, name, artboardName, viewModelName, closure_4) {
      if (closure_0) {
        let tmp2 = null != closure_0;
        if (tmp2) {
          tmp2 = "getViewModelInstance" in closure_0;
        }
        if (tmp2) {
          const viewModelInstance = closure_0.getViewModelInstance();
          let obj = {};
          let tmp17 = null;
          if (null != viewModelInstance) {
            tmp17 = viewModelInstance;
          }
          obj.instance = tmp17;
          obj.needsDispose = false;
          return obj;
        } else {
          let tmp3 = null != closure_0;
          if (tmp3) {
            tmp3 = "defaultArtboardViewModel" in closure_0;
          }
          if (tmp3) {
            if (viewModelName) {
              let viewModelByNameResult = closure_0.viewModelByName(viewModelName);
              if (!viewModelByNameResult) {
                obj = { instance: null, needsDispose: false };
                const _HermesInternal3 = HermesInternal;
                obj.error = "ViewModel '" + viewModelName + "' not found";
                return obj;
              }
            } else {
              let ArtboardByNameResult;
              if (artboardName) {
                let obj3 = callback(name[1]);
                ArtboardByNameResult = obj3.ArtboardByName(artboardName);
              }
              viewModelByNameResult = closure_0.defaultArtboardViewModel(ArtboardByNameResult);
              if (!viewModelByNameResult) {
                if (artboardName) {
                  const obj1 = { instance: null, needsDispose: false };
                  const _HermesInternal2 = HermesInternal;
                  obj1.error = "Artboard '" + artboardName + "' not found or has no ViewModel";
                  let obj2 = obj1;
                } else {
                  obj2 = { instance: null, needsDispose: false };
                }
                return obj2;
              }
            }
            if (name) {
              let instanceByName = viewModelByNameResult.createInstanceByName(name);
            } else {
              instanceByName = viewModelByNameResult.createDefaultInstance();
            }
            if (!instanceByName) {
              if (name) {
                obj3 = { instance: null, needsDispose: false };
                const _HermesInternal4 = HermesInternal;
                obj3.error = "ViewModel instance '" + name + "' not found";
              }
              return obj3;
            }
            const obj4 = {};
            let tmp15 = null;
            if (null != instanceByName) {
              tmp15 = instanceByName;
            }
            obj4.instance = tmp15;
            obj4.needsDispose = true;
            obj3 = obj4;
          } else {
            if (name) {
              let instanceByName1 = closure_0.createInstanceByName(name);
              if (!instanceByName1) {
                const obj5 = { instance: null, needsDispose: false };
                const _HermesInternal = HermesInternal;
                obj5.error = "ViewModel instance '" + name + "' not found";
                return obj5;
              }
            } else if (closure_4) {
              instanceByName1 = closure_0.createInstance();
            } else {
              instanceByName1 = closure_0.createDefaultInstance();
            }
            const obj6 = {};
            let tmp7 = null;
            if (null != instanceByName1) {
              tmp7 = instanceByName1;
            }
            obj6.instance = tmp7;
            obj6.needsDispose = true;
            return obj6;
          }
        }
      } else {
        obj = { instance: undefined, needsDispose: false };
        return obj;
      }
    })(closure_0, name, artboardName, viewModelName, closure_4);
    let current = tmp.instance;
    if (current) {
      current = tmp10.current;
    }
    if (current) {
      tmp10.current(tmp.instance);
    }
    return tmp;
  }, (needsDispose) => {
    if (tmp) {
      callback(name[3]).callDispose(needsDispose.instance);
      const obj = callback(name[3]);
    }
  }, items);
  const items1 = [disposableMemo.error];
  if (tmp8) {
    if (null === disposableMemo.instance) {
      let _Error = Error;
      let str = "useViewModelInstance: Failed to get ViewModelInstance. Ensure the source has a valid ViewModel and instance available.";
      if (disposableMemo.error) {
        let _HermesInternal = HermesInternal;
        str = "useViewModelInstance: " + disposableMemo.error;
      }
      let prototype = _Error.prototype;
      _Error = new _Error(str);
      throw _Error;
    }
  }
  const instance = disposableMemo.instance;
  if (disposableMemo.instance) {
    obj = { instance, error: null };
    let obj1 = obj;
  } else if (undefined === instance) {
    obj = { instance: undefined, error: null };
    obj1 = obj;
  } else {
    obj1 = { instance: null, error: tmp12 };
  }
  return obj1;
};
