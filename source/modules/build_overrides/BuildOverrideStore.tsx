// Module ID: 10469
// Function ID: 80666
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4046, 686, 566, 2]

// Module 10469 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { NotResolved: 0, [0]: "NotResolved", Resolving: 1, [1]: "Resolving", Resolved: 2, [2]: "Resolved", Invalid: 3, [3]: "Invalid" };
const NotResolved = obj.NotResolved;
let c10 = null;
let closure_11 = {};
let tmp2 = ((Store) => {
  class BuildOverrideStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, BuildOverrideStore);
      obj = outer1_6(BuildOverrideStore);
      tmp2 = outer1_5;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(BuildOverrideStore, Store);
  let obj = {
    key: "getCurrentBuildOverride",
    value() {
      (function resolveCurrentOverrideIfNecessary() {
        if (outer2_9 === outer2_8.NotResolved) {
          outer2_9 = outer2_8.Resolving;
          const buildOverride = BuildOverrideStore(outer2_2[5]).getBuildOverride();
          buildOverride.then((overrides) => {
            let obj = outer3_1(outer3_2[6]);
            obj = { type: "CURRENT_BUILD_OVERRIDE_RESOLVED", overrides };
            obj.dispatch(obj);
          });
          let obj = BuildOverrideStore(outer2_2[5]);
        }
      })();
      return { state: outer1_9, overrides: outer1_10 };
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getBuildOverride",
    value(url) {
      (function resolveBuildOverrideIfNecessary(url) {
        let closure_0 = url;
        if (!(url in outer2_11)) {
          let obj = BuildOverrideStore(outer2_2[5]);
          const validateURLResult = obj.validateURL(url);
          if (null != validateURLResult) {
            obj = {};
            const merged = Object.assign(outer2_11);
            obj = { url, validatedURL: validateURLResult.url };
            const _String = String;
            obj.payload = String(validateURLResult.payload);
            obj.state = outer2_8.Resolving;
            obj[url] = obj;
            outer2_11 = obj;
            const buildOverrideMeta = BuildOverrideStore(outer2_2[5]).getBuildOverrideMeta(validateURLResult.url);
            buildOverrideMeta.then((override) => {
              let obj = outer3_1(outer3_2[6]);
              obj = { type: "BUILD_OVERRIDE_RESOLVED", url: closure_0, override };
              obj.dispatch(obj);
            });
            const obj6 = BuildOverrideStore(outer2_2[5]);
          } else {
            const obj1 = {};
            const merged1 = Object.assign(outer2_11);
            const obj2 = { url, state: outer2_8.Invalid };
            obj1[url] = obj2;
            outer2_11 = obj1;
          }
        }
      })(url);
      return outer1_11[url];
    }
  };
  items[1] = obj;
  obj = {
    key: "getBuildOverrides",
    value() {
      return outer1_11;
    }
  };
  items[2] = obj;
  return callback(BuildOverrideStore, items);
})(require("initialize").Store);
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
    obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(obj[url]);
    obj["state"] = Resolved;
    obj["override"] = override;
    obj[url] = obj;
  },
  CURRENT_BUILD_OVERRIDE_RESOLVED: function handleCurrentBuildOverrideResolved(overrides) {
    const Resolved = obj.Resolved;
    overrides = overrides.overrides;
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/build_overrides/BuildOverrideStore.tsx");

export default tmp2;
export const State = obj;
