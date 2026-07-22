// Module ID: 16477
// Function ID: 127324
// Name: NativeReactAssetModule
// Dependencies: []
// Exports: default

// Module 16477 (NativeReactAssetModule)
const _module = require(dependencyMap[0]);
const Image = _module.Image;
const _module1 = require(dependencyMap[1]);
if (_module1.isAndroid()) {
  let NativeReactAssetModule = importDefault(dependencyMap[2]);
} else {
  NativeReactAssetModule = _module.NativeModules.NativeReactAssetModule;
}
const _module2 = require(dependencyMap[4]);
const result = _module2.fileFinishedImporting("modules/react_asset/native/reactAssetProvider.tsx");

export default function reactAssetProvider() {
  return new Promise((arg0) => {
    closure_3.keysRequest((arr) => {
      arr = arr(closure_1[3]).NATIVE_REQUIRED_ASSETS;
      closure_3.valuesResult(arr.map((arg0) => {
        let str = "";
        if (null != NATIVE_REQUIRED_ASSETS[arg0]) {
          str = closure_2.resolveAssetSource(NATIVE_REQUIRED_ASSETS[arg0]).uri;
        }
        return str;
      }));
      arr(true);
    });
  });
};
