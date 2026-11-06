// Module ID: 16229
// Function ID: 16230
// Name: ReactotronConfig
// Dependencies: [16230, 2]

// Module 16229 (ReactotronConfig)
import reactNativeCorePlugins from "reactNativeCorePlugins" /* 16230 */;
import size from "module_2" /* 2 */;

const configureResult = reactNativeCorePlugins.configure({});
const reactNative = configureResult.useReactNative();
reactNative.connect();
const result = size.fileFinishedImporting("modules/debug/native/ReactotronConfig.tsx");
