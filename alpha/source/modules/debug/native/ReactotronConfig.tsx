// Module ID: 16735
// Function ID: 16736
// Name: ReactotronConfig
// Dependencies: [16736, 2]

// Module 16735 (ReactotronConfig)
import reactNativeCorePlugins from "reactNativeCorePlugins" /* 16736 */;
import size from "module_2" /* 2 */;

const configureResult = reactNativeCorePlugins.configure({});
const reactNative = configureResult.useReactNative();
reactNative.connect();
const result = size.fileFinishedImporting("modules/debug/native/ReactotronConfig.tsx");
