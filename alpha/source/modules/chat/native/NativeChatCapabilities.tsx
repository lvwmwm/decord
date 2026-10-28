// Module ID: 8628
// Function ID: 8629
// Name: NativeChatCapabilities
// Dependencies: [17, 1381, 8629, 2]
// Exports: nativeChatSupportsAudioEmbeds

// Module 8628 (NativeChatCapabilities)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import react_nativeDefault from "react-native" /* 8629 */;
import size from "module_2" /* 2 */;

let closure_3, constants;

const NativeModules = react_native.NativeModules;
const result = size.fileFinishedImporting("modules/chat/native/NativeChatCapabilities.tsx");

export const nativeChatSupportsAudioEmbeds = function nativeChatSupportsAudioEmbeds() {
  let tmp = closure_3;
  if (null == closure_3) {
    let tmp4;
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const getConstants = react_nativeDefault.getConstants;
      let supportsAudioEmbeds;
      react_nativeDefault;
      if (getConstants != null) {
        constants = getConstants();
        if (constants != null) {
          supportsAudioEmbeds = constants.supportsAudioEmbeds;
        }
      }
      tmp4 = true === supportsAudioEmbeds;
    } else {
      const DCDChatManager = NativeModules.DCDChatManager;
      let supportsAudioEmbeds1;
      if (DCDChatManager != null) {
        supportsAudioEmbeds1 = DCDChatManager.supportsAudioEmbeds;
      }
      tmp4 = true === supportsAudioEmbeds1;
    }
    closure_3 = tmp4;
    tmp = tmp4;
  }
  return tmp;
};
