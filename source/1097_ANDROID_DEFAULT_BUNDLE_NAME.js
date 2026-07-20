// Module ID: 1097
// Function ID: 12556
// Name: ANDROID_DEFAULT_BUNDLE_NAME
// Dependencies: []
// Exports: createReactNativeRewriteFrames

// Module 1097 (ANDROID_DEFAULT_BUNDLE_NAME)
const Platform = require(dependencyMap[0]).Platform;

export const ANDROID_DEFAULT_BUNDLE_NAME = "app:///index.android.bundle";
export const IOS_DEFAULT_BUNDLE_NAME = "app:///main.jsbundle";
export const createReactNativeRewriteFrames = function createReactNativeRewriteFrames() {
  let obj = require(dependencyMap[1]);
  obj = {
    iteratee(platform) {
      if ("java" !== platform.platform) {
        if ("cocoa" !== platform.platform) {
          if (platform.filename) {
            delete r0.abs_path;
            const str = platform.filename;
            const str3 = platform.filename.replace(/^file:\/\//, "");
            platform.filename = platform.filename.replace(/^file:\/\//, "").replace(/^address at /, "").replace(/^.*\/[^.]+(\.app|CodePush|.*(?=\/))/, "");
            if ("[native code]" !== platform.filename) {
              if ("native" !== platform.filename) {
                let isHermesEnabledResult = callback(closure_1[2]).isHermesEnabled();
                if (isHermesEnabledResult) {
                  isHermesEnabledResult = 1 === platform.lineno;
                }
                if (isHermesEnabledResult) {
                  isHermesEnabledResult = undefined !== platform.colno;
                }
                if (isHermesEnabledResult) {
                  platform.colno = platform.colno + 1;
                }
                const obj3 = callback(closure_1[2]);
                if (obj.isExpo()) {
                  platform.filename = "app:///index.android.bundle";
                  return platform;
                } else {
                  callback(closure_1[2]).isExpo();
                  if ("/InternalBytecode.js" === platform.filename) {
                    platform.in_app = false;
                  }
                  const filename = platform.filename;
                  if (0 === filename.indexOf("/")) {
                    const _HermesInternal2 = HermesInternal;
                    let combined = "" + "app://" + platform.filename;
                  } else {
                    const _HermesInternal = HermesInternal;
                    combined = "" + "app://" + "/" + platform.filename;
                  }
                  platform.filename = combined;
                  return platform;
                }
                const obj = callback(closure_1[2]);
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
  return obj.rewriteFramesIntegration(obj);
};
