// Module ID: 1097
// Function ID: 12561
// Name: ANDROID_DEFAULT_BUNDLE_NAME
// Dependencies: [27, 794, 978]
// Exports: createReactNativeRewriteFrames

// Module 1097 (ANDROID_DEFAULT_BUNDLE_NAME)
import { Platform } from "get ActivityIndicator";


export const ANDROID_DEFAULT_BUNDLE_NAME = "app:///index.android.bundle";
export const IOS_DEFAULT_BUNDLE_NAME = "app:///main.jsbundle";
export const createReactNativeRewriteFrames = function createReactNativeRewriteFrames() {
  let obj = require(794) /* registerSpanErrorInstrumentation */;
  obj = {
    iteratee(platform) {
      if ("java" !== platform.platform) {
        if ("cocoa" !== platform.platform) {
          if (platform.filename) {
            delete tmp.abs_path;
            const str = platform.filename;
            const str3 = platform.filename.replace(/^file:\/\//, "");
            platform.filename = platform.filename.replace(/^file:\/\//, "").replace(/^address at /, "").replace(/^.*\/[^.]+(\.app|CodePush|.*(?=\/))/, "");
            if ("[native code]" !== platform.filename) {
              if ("native" !== platform.filename) {
                let isHermesEnabledResult = outer1_0(outer1_1[2]).isHermesEnabled();
                if (isHermesEnabledResult) {
                  isHermesEnabledResult = 1 === platform.lineno;
                }
                if (isHermesEnabledResult) {
                  isHermesEnabledResult = undefined !== platform.colno;
                }
                if (isHermesEnabledResult) {
                  platform.colno = platform.colno + 1;
                }
                const obj3 = outer1_0(outer1_1[2]);
                if (obj.isExpo()) {
                  platform.filename = "app:///index.android.bundle";
                  return platform;
                } else {
                  outer1_0(outer1_1[2]).isExpo();
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
                obj = outer1_0(outer1_1[2]);
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
