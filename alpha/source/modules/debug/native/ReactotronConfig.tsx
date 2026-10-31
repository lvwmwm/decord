// Module ID: 16230
// Function ID: 16231
// Name: ReactotronConfig
// Dependencies: [16231, 2]

// Module 16230 (ReactotronConfig)
import reactNativeCorePlugins from "reactNativeCorePlugins" /* 16231 */;
import size from "module_2" /* 2 */;

const configureResult = reactNativeCorePlugins.configure({});
const reactNative = configureResult.useReactNative();
reactNative.connect();
const result = size.fileFinishedImporting("modules/debug/native/ReactotronConfig.tsx");
