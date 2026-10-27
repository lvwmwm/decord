// Module ID: 15651
// Function ID: 15652
// Name: ReactotronConfig
// Dependencies: [15652, 2]

// Module 15651 (ReactotronConfig)
import reactNativeCorePlugins from "reactNativeCorePlugins" /* 15652 */;
import size from "module_2" /* 2 */;

const configureResult = reactNativeCorePlugins.configure({});
const reactNative = configureResult.useReactNative();
reactNative.connect();
const result = size.fileFinishedImporting("modules/debug/native/ReactotronConfig.tsx");
