// Module ID: 13485
// Function ID: 13486
// Name: reactNativeCorePlugins
// Dependencies: [13486, 2]

// Module 13485 (reactNativeCorePlugins)
import importDefaultResult from "reactNativeCorePlugins";

const reactNative = require("reactNativeCorePlugins").configure({}).useReactNative();
reactNative.connect();
const configureResult = require("reactNativeCorePlugins").configure({});
const result = require("set").fileFinishedImporting("modules/debug/native/ReactotronConfig.tsx");
