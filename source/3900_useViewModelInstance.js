// Module ID: 3900
// Function ID: 32277
// Name: useViewModelInstance
// Dependencies: []
// Exports: useViewModelInstance

// Module 3900 (useViewModelInstance)
const _module = require(dependencyMap[0]);
({ useMemo: closure_2, useRef: closure_3 } = _module);

export const useViewModelInstance = function useViewModelInstance(arg0, instanceName) {
  const require = arg0;
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
  const dependencyMap = name;
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
  const tmp6 = null != useNew && useNew;
  let required;
  if (null != instanceName) {
    required = instanceName.required;
  }
  let onInit;
  if (null != instanceName) {
    onInit = instanceName.onInit;
  }
  const tmp10 = viewModelName(onInit);
  tmp10.current = onInit;
  let obj = require(dependencyMap[2]);
  const items = [arg0, name, artboardName, viewModelName, tmp6];
  const disposableMemo = obj.useDisposableMemo(() => {
    const tmp = function createInstance(getViewModelInstance, name, artboardName, viewModelName, arg4) {
      if (getViewModelInstance) {
        let tmp2 = null != getViewModelInstance;
        if (tmp2) {
          tmp2 = "getViewModelInstance" in getViewModelInstance;
        }
        if (tmp2) {
          const viewModelInstance = getViewModelInstance.getViewModelInstance();
          let obj = {};
          let tmp17 = null;
          if (null != viewModelInstance) {
            tmp17 = viewModelInstance;
          }
          obj.instance = tmp17;
          obj.needsDispose = false;
          return obj;
        } else {
          let tmp3 = null != getViewModelInstance;
          if (tmp3) {
            tmp3 = "defaultArtboardViewModel" in getViewModelInstance;
          }
          if (tmp3) {
            if (viewModelName) {
              let viewModelByNameResult = getViewModelInstance.viewModelByName(viewModelName);
              if (!viewModelByNameResult) {
                obj = { enableHome: "<string:1243348993>", landOnHome: "<string:2137063425>" };
                const _HermesInternal3 = HermesInternal;
                obj.error = "ViewModel '" + viewModelName + "' not found";
                return obj;
              }
            } else {
              let ArtboardByNameResult;
              if (artboardName) {
                let obj3 = callback(closure_1[1]);
                ArtboardByNameResult = obj3.ArtboardByName(artboardName);
              }
              viewModelByNameResult = getViewModelInstance.defaultArtboardViewModel(ArtboardByNameResult);
              if (!viewModelByNameResult) {
                if (artboardName) {
                  const obj1 = { enableHome: "<string:1243348993>", landOnHome: "<string:2137063425>" };
                  const _HermesInternal2 = HermesInternal;
                  obj1.error = "Artboard '" + artboardName + "' not found or has no ViewModel";
                  let obj2 = obj1;
                } else {
                  obj2 = { enableHome: "<string:1243348993>", landOnHome: "<string:2137063425>" };
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
                obj3 = { enableHome: "<string:1243348993>", landOnHome: "<string:2137063425>" };
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
              let instanceByName1 = getViewModelInstance.createInstanceByName(name);
              if (!instanceByName1) {
                const obj5 = { enableHome: "<string:1243348993>", landOnHome: "<string:2137063425>" };
                const _HermesInternal = HermesInternal;
                obj5.error = "ViewModel instance '" + name + "' not found";
                return obj5;
              }
            } else if (arg4) {
              instanceByName1 = getViewModelInstance.createInstance();
            } else {
              instanceByName1 = getViewModelInstance.createDefaultInstance();
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
    }(arg0, name, artboardName, viewModelName, tmp6);
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
      needsDispose(name[3]).callDispose(needsDispose.instance);
      const obj = needsDispose(name[3]);
    }
  }, items);
  const items1 = [disposableMemo.error];
  if (tmp8) {
    if (null === disposableMemo.instance) {
      let _Error = Error;
      let str = "useViewModelInstance: Failed to get ViewModelInstance. Ensure the source has a valid ViewModel and instance available.";
      if (disposableMemo.error) {
        const _HermesInternal = HermesInternal;
        str = "useViewModelInstance: " + disposableMemo.error;
      }
      const prototype = _Error.prototype;
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
