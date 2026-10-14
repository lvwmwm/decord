// Module ID: 15016
// Function ID: 15017
// Name: ReactotronConfig
// Dependencies: [15017, 2]

// Module 15016 (ReactotronConfig)
import reactNativeCorePlugins from "reactNativeCorePlugins" /* 15017 */;
import size from "module_2" /* 2 */;

const configureResult = reactNativeCorePlugins.configure({});
const reactNative = configureResult.useReactNative();
reactNative.connect();
const result = size.fileFinishedImporting("modules/debug/native/ReactotronConfig.tsx");
