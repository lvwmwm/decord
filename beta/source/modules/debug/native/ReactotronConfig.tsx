// Module ID: 16576
// Function ID: 16577
// Name: ReactotronConfig
// Dependencies: [16577, 2]

// Module 16576 (ReactotronConfig)
import reactNativeCorePlugins from "reactNativeCorePlugins" /* 16577 */;
import size from "module_2" /* 2 */;

const configureResult = reactNativeCorePlugins.configure({});
const reactNative = configureResult.useReactNative();
reactNative.connect();
const result = size.fileFinishedImporting("modules/debug/native/ReactotronConfig.tsx");
