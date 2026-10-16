// Module ID: 19063
// Function ID: 19064
// Name: reactAssetProvider
// Dependencies: [17, 19064, 19065, 2]
// Exports: default

// Module 19063 (reactAssetProvider)
import react_native from "react-native" /* 17 */;
import react_nativeDefault from "react-native" /* 19064 */;
import native_required_assets from "native_required_assets" /* 19065 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const result = size.fileFinishedImporting("modules/react_asset/native/reactAssetProvider.tsx");

export default function reactAssetProvider() {
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    let obj = closure_1(closure_2[1]);
    obj.keysRequest((arr) => {
      const NATIVE_REQUIRED_ASSETS = native_required_assets.NATIVE_REQUIRED_ASSETS;
      const mapped = arr.map((item) => {
        let str = "";
        if (null != NATIVE_REQUIRED_ASSETS[item]) {
          str = closure_2_3.resolveAssetSource(tmp[item]).uri;
        }
        return str;
      });
      const obj = react_nativeDefault;
      obj.valuesResult(mapped);
      closure_0(true);
    });
  });
  return promise;
};
