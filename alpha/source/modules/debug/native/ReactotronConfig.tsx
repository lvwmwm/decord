// Module ID: 16730
// Function ID: 16731
// Name: ReactotronConfig
// Dependencies: [16731, 2]

// Module 16730 (ReactotronConfig)
import reactNativeCorePlugins from "reactNativeCorePlugins" /* 16731 */;
import size from "module_2" /* 2 */;

const configureResult = reactNativeCorePlugins.configure({});
const reactNative = configureResult.useReactNative();
reactNative.connect();
const result = size.fileFinishedImporting("modules/debug/native/ReactotronConfig.tsx");
