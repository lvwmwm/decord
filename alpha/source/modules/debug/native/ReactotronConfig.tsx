// Module ID: 15626
// Function ID: 15627
// Name: ReactotronConfig
// Dependencies: [15627, 2]

// Module 15626 (ReactotronConfig)
import reactNativeCorePlugins from "reactNativeCorePlugins" /* 15627 */;
import size from "module_2" /* 2 */;

const configureResult = reactNativeCorePlugins.configure({});
const reactNative = configureResult.useReactNative();
reactNative.connect();
const result = size.fileFinishedImporting("modules/debug/native/ReactotronConfig.tsx");
