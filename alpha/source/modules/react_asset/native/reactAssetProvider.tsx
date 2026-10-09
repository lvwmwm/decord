// Module ID: 18595
// Function ID: 18596
// Name: reactAssetProvider
// Dependencies: [17, 1382, 18596, 18597, 2]
// Exports: default

// Module 18595 (reactAssetProvider)
import react_nativeDefault from "react-native" /* 18596 */;
import native_required_assets from "native_required_assets" /* 18597 */;
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import size from "module_2" /* 2 */;

let NativeModules;
let c2;
({ Image: c2, NativeModules } = react_native);
if (PlatformUtils.isAndroid()) {
  let NativeReactAssetModule = react_nativeDefault;
} else {
  NativeReactAssetModule = NativeModules.NativeReactAssetModule;
}
const result = size.fileFinishedImporting("modules/react_asset/native/reactAssetProvider.tsx");

export default function reactAssetProvider() {
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    closure_3.keysRequest((arr) => {
      const NATIVE_REQUIRED_ASSETS = native_required_assets.NATIVE_REQUIRED_ASSETS;
      NativeReactAssetModule.valuesResult(arr.map((item) => {
        let str = "";
        if (null != NATIVE_REQUIRED_ASSETS[item]) {
          str = closure_2_2.resolveAssetSource(tmp[item]).uri;
        }
        return str;
      }));
      closure_0(true);
    });
  });
  return promise;
};
