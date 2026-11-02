// Module ID: 16234
// Function ID: 16235
// Name: ReactotronConfig
// Dependencies: [16235, 2]

// Module 16234 (ReactotronConfig)
import reactNativeCorePlugins from "reactNativeCorePlugins" /* 16235 */;
import size from "module_2" /* 2 */;

const configureResult = reactNativeCorePlugins.configure({});
const reactNative = configureResult.useReactNative();
reactNative.connect();
const result = size.fileFinishedImporting("modules/debug/native/ReactotronConfig.tsx");
