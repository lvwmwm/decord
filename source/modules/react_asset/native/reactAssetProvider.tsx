// Module ID: 16594
// Function ID: 129498
// Name: NativeReactAssetModule
// Dependencies: [27, 477, 16595, 16596, 2]
// Exports: default

// Module 16594 (NativeReactAssetModule)
import get_ActivityIndicator from "get ActivityIndicator";
import set from "set";
import set from "enforcing";

const Image = get_ActivityIndicator.Image;
if (set.isAndroid()) {
  let NativeReactAssetModule = require("enforcing");
} else {
  NativeReactAssetModule = get_ActivityIndicator.NativeModules.NativeReactAssetModule;
}
const result = set.fileFinishedImporting("modules/react_asset/native/reactAssetProvider.tsx");

export default function reactAssetProvider() {
  return new Promise((arg0) => {
    let closure_0 = arg0;
    outer1_3.keysRequest((arr) => {
      const NATIVE_REQUIRED_ASSETS = outer2_0(outer2_1[3]).NATIVE_REQUIRED_ASSETS;
      outer2_3.valuesResult(arr.map((arg0) => {
        let str = "";
        if (null != NATIVE_REQUIRED_ASSETS[arg0]) {
          str = outer3_2.resolveAssetSource(NATIVE_REQUIRED_ASSETS[arg0]).uri;
        }
        return str;
      }));
      NATIVE_REQUIRED_ASSETS(true);
    });
  });
};
