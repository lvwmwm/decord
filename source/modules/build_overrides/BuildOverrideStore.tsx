// Module ID: 10429
// Function ID: 80400
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10429 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let obj = { NotResolved: 0, [0]: "NotResolved", Resolving: 1, [1]: "Resolving", Resolved: 2, [2]: "Resolved", Invalid: 3, [3]: "Invalid" };
const NotResolved = obj.NotResolved;
let closure_10 = null;
let closure_11 = {};
let tmp2 = (Store) => {
  class BuildOverrideStore {
    constructor() {
      self = this;
      tmp = closure_3(this, BuildOverrideStore);
      obj = closure_6(BuildOverrideStore);
      tmp2 = closure_5;
      if (closure_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = BuildOverrideStore;
  callback2(BuildOverrideStore, Store);
  let obj = {
    key: "getCurrentBuildOverride",
    value() {
      function resolveCurrentOverrideIfNecessary() {
        if (Resolving === closure_8.NotResolved) {
          const Resolving = closure_8.Resolving;
          const buildOverride = callback(closure_2[5]).getBuildOverride();
          buildOverride.then((overrides) => {
            let obj = callback(closure_2[6]);
            obj = { type: "CURRENT_BUILD_OVERRIDE_RESOLVED", overrides };
            obj.dispatch(obj);
          });
          const obj = callback(closure_2[5]);
        }
      }();
      return { state: closure_9, overrides: closure_10 };
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getBuildOverride",
    value(url) {
      function resolveBuildOverrideIfNecessary(url) {
        if (!(url in obj1)) {
          let obj = url(closure_2[5]);
          const validateURLResult = obj.validateURL(url);
          if (null != validateURLResult) {
            obj = {};
            const merged = Object.assign(obj1);
            obj = { url, validatedURL: validateURLResult.url };
            const _String = String;
            obj.payload = String(validateURLResult.payload);
            obj.state = closure_8.Resolving;
            obj[url] = obj;
            let obj1 = obj;
            const buildOverrideMeta = url(closure_2[5]).getBuildOverrideMeta(validateURLResult.url);
            buildOverrideMeta.then((override) => {
              let obj = callback(closure_2[6]);
              obj = { type: "BUILD_OVERRIDE_RESOLVED", url: override, override };
              obj.dispatch(obj);
            });
            const obj6 = url(closure_2[5]);
          } else {
            obj1 = {};
            const merged1 = Object.assign(obj1);
            const obj2 = { url, state: closure_8.Invalid };
            obj1[url] = obj2;
          }
        }
      }(url);
      return closure_11[url];
    }
  };
  items[1] = obj;
  obj = {
    key: "getBuildOverrides",
    value() {
      return closure_11;
    }
  };
  items[2] = obj;
  return callback(BuildOverrideStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "BuildOverrideStore";
obj = {
  BUILD_OVERRIDE_RESOLVED: function handleBuildOverrideResolved(arg0) {
    let override;
    let url;
    ({ url, override } = arg0);
    if (null == override) {
      let Resolved = obj.Invalid;
    } else {
      Resolved = obj.Resolved;
    }
    let obj = {};
    const merged = Object.assign(closure_11);
    obj = {};
    const merged1 = Object.assign(closure_11[url]);
    obj["state"] = Resolved;
    obj["override"] = override;
    obj[url] = obj;
    closure_11 = obj;
  },
  CURRENT_BUILD_OVERRIDE_RESOLVED: function handleCurrentBuildOverrideResolved(overrides) {
    const NotResolved = obj.Resolved;
    overrides = overrides.overrides;
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[6]), obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/build_overrides/BuildOverrideStore.tsx");

export default tmp2;
export const State = obj;
