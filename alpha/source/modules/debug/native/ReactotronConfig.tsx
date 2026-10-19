// Module ID: 15430
// Function ID: 15431
// Name: ReactotronConfig
// Dependencies: [15431, 2]

// Module 15430 (ReactotronConfig)
import reactNativeCorePlugins from "reactNativeCorePlugins" /* 15431 */;
import size from "module_2" /* 2 */;

const configureResult = reactNativeCorePlugins.configure({});
const reactNative = configureResult.useReactNative();
reactNative.connect();
const result = size.fileFinishedImporting("modules/debug/native/ReactotronConfig.tsx");
