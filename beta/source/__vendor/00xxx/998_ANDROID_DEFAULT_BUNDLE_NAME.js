// Module ID: 998
// Function ID: 999
// Name: ANDROID_DEFAULT_BUNDLE_NAME
// Dependencies: [17, 694, 879]
// Exports: createReactNativeRewriteFrames

// Module 998 (ANDROID_DEFAULT_BUNDLE_NAME)
import react_native from "react-native" /* 17 */;
import _mod694 from "module_694" /* 694 */;
import _mod879 from "module_879" /* 879 */;

let filename;

const Platform = react_native.Platform;
let c2 = "app:///index.android.bundle";

export const ANDROID_DEFAULT_BUNDLE_NAME = "app:///index.android.bundle";
export const IOS_DEFAULT_BUNDLE_NAME = "app:///main.jsbundle";
export const createReactNativeRewriteFrames = function createReactNativeRewriteFrames() {
  const obj = _mod694;
  const obj2 = {
    iteratee(platform) {
      if ("java" !== platform.platform) {
        if ("cocoa" !== platform.platform) {
          if (platform.filename) {
            delete tmp["abs_path"];
            const str = platform.filename;
            const str3 = str.replace(/^file:\/\//, "");
            const str4 = str3.replace(/^address at /, "");
            platform.filename = str4.replace(/^.*\/[^.]+(\.app|CodePush|.*(?=\/))/, "");
            if ("[native code]" !== platform.filename) {
              if ("native" !== platform.filename) {
                const obj3 = _mod879;
                const isHermesEnabledResult = obj3.isHermesEnabled() && 1 === platform.lineno && undefined !== platform.colno;
                if (isHermesEnabledResult) {
                  platform.colno = platform.colno + 1;
                }
                const tmp8Result = _mod879;
                if (tmp8Result.isExpo()) {
                  platform.filename = filename;
                  return platform;
                } else {
                  let combined;
                  const tmp8Result2 = _mod879;
                  tmp8Result2.isExpo();
                  if ("/InternalBytecode.js" === platform.filename) {
                    platform.in_app = false;
                  }
                  filename = platform.filename;
                  if (0 === filename.indexOf("/")) {
                    const _HermesInternal2 = HermesInternal;
                    combined = "" + "app://" + platform.filename;
                  } else {
                    const _HermesInternal = HermesInternal;
                    combined = "" + "app://" + "/" + platform.filename;
                  }
                  platform.filename = combined;
                  return platform;
                }
              }
            }
            return platform;
          } else {
            return platform;
          }
        }
      }
      return platform;
    }
  };
  return obj.rewriteFramesIntegration(obj2);
};
