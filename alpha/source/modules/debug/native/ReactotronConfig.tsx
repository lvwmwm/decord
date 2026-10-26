// Module ID: 15650
// Function ID: 15651
// Name: ReactotronConfig
// Dependencies: [15651, 2]

// Module 15650 (ReactotronConfig)
import reactNativeCorePlugins from "reactNativeCorePlugins" /* 15651 */;
import size from "module_2" /* 2 */;

const configureResult = reactNativeCorePlugins.configure({});
const reactNative = configureResult.useReactNative();
reactNative.connect();
const result = size.fileFinishedImporting("modules/debug/native/ReactotronConfig.tsx");
