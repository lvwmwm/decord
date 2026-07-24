// Module ID: 3867
// Function ID: 32126
// Name: _callSuper
// Dependencies: [7, 6, 15, 17, 18, 162, 27]

// Module 3867 (_callSuper)
import _defineProperties from "_defineProperties";
import getActivityIndicator from "get ActivityIndicator";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import get_ActivityIndicator from "get ActivityIndicator";

let Platform;
let closure_5;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let _defineProperties = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _defineProperties;
  }
  const result = _isNativeReflectConstruct();
}
({ NativeModules: closure_5, Platform } = get_ActivityIndicator);

export const ModuleNotFoundError = ((arg0) => {
  class ModuleNotFoundError {
    constructor(arg0) {
      self = this;
      tmp = outer1_1(this, ModuleNotFoundError);
      NativeUnimoduleProxy = outer1_5.NativeUnimoduleProxy;
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
        tmp8 = outer1_6;
        tmp9 = ModuleNotFoundError;
        tmp10 = outer1_2;
        return outer1_2(outer1_6(self, ModuleNotFoundError, ["NitroModules are not supported in Expo Go! Use EAS (`expo prebuild`) or eject to a bare workflow instead."]));
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
        tmp5 = outer1_6;
        tmp6 = ModuleNotFoundError;
        items1 = [, ];
        items1[0] = `Failed to get NitroModules: The native "NitroModules" Turbo/Native-Module could not be found.
  * ${arr2.join("\n* ")}`;
        obj = {};
        tmp7 = arg0;
        obj.cause = arg0;
        items1[1] = obj;
        return outer1_6(self, ModuleNotFoundError, items1);
      }
    }
  }
  callback2(ModuleNotFoundError, arg0);
  return ModuleNotFoundError(ModuleNotFoundError);
})(require("_wrapNativeSuper")(Error));
