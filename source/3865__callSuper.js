// Module ID: 3865
// Function ID: 32118
// Name: _callSuper
// Dependencies: []

// Module 3865 (_callSuper)
let Platform;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_2(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const importDefaultResult = importDefault(dependencyMap[5]);
({ NativeModules: closure_5, Platform } = arg1(dependencyMap[6]));

export const ModuleNotFoundError = (arg0) => {
  class ModuleNotFoundError {
    constructor(arg0) {
      self = this;
      tmp = closure_1(this, ModuleNotFoundError);
      NativeUnimoduleProxy = closure_5.NativeUnimoduleProxy;
      ExponentConstants = undefined;
      if (null != NativeUnimoduleProxy) {
        modulesConstants = NativeUnimoduleProxy.modulesConstants;
        if (null != modulesConstants) {
          ExponentConstants = modulesConstants.ExponentConstants;
        }
      }
      str = "react-native";
      if (null != ExponentConstants) {
        str2 = "expo";
        if ("expo" === ExponentConstants.appOwnership) {
          str2 = "expo-go";
        }
        str = str2;
      }
      if ("expo-go" === str) {
        tmp8 = closure_6;
        tmp9 = ModuleNotFoundError;
        tmp10 = closure_2;
        return closure_2(closure_6(self, ModuleNotFoundError, [null]));
      } else {
        items = [];
        str7 = "Make sure react-native-nitro-modules/NitroModules is correctly autolinked (run `npx react-native config` to verify)";
        arr = items.push("Make sure react-native-nitro-modules/NitroModules is correctly autolinked (run `npx react-native config` to verify)");
        str8 = "Make sure you enabled the new architecture (TurboModules) and CodeGen properly generated the \"NativeNitroModules\"/NitroModules specs. See https://github.com/reactwg/react-native-new-architecture/blob/main/docs/enable-apps.md";
        arr1 = items.push("Make sure you enabled the new architecture (TurboModules) and CodeGen properly generated the \"NativeNitroModules\"/NitroModules specs. See https://github.com/reactwg/react-native-new-architecture/blob/main/docs/enable-apps.md");
        str9 = "Make sure you are using react-native 0.75.0 or higher.";
        arr2 = items.push("Make sure you are using react-native 0.75.0 or higher.");
        str10 = "Make sure you rebuilt the app.";
        arr3 = items.push("Make sure you rebuilt the app.");
        str11 = "expo";
        if ("expo" === str) {
          str3 = "Make sure you ran `expo prebuild`.";
          arr4 = items.push("Make sure you ran `expo prebuild`.");
        }
        str4 = "Make sure gradle is synced.";
        arr5 = items.push("Make sure gradle is synced.");
        str5 = "\n* ";
        str6 = "Failed to get NitroModules: The native \"NitroModules\" Turbo/Native-Module could not be found.\n* ";
        tmp5 = closure_6;
        tmp6 = ModuleNotFoundError;
        items1 = [, ];
        items1[0] = `Failed to get NitroModules: The native "NitroModules" Turbo/Native-Module could not be found.
  * ${arr2.join("\n* ")}`;
        obj = {};
        tmp7 = arg0;
        obj.cause = arg0;
        items1[1] = obj;
        return closure_6(self, ModuleNotFoundError, items1);
      }
    }
  }
  const callback = ModuleNotFoundError;
  callback3(ModuleNotFoundError, arg0);
  return callback(ModuleNotFoundError);
}(importDefaultResult(Error));
