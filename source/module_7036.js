// Module ID: 7036
// Function ID: 7037
// Dependencies: [7037, 7038, 7039, 7098, 7099, 7100, 7101, 7105, 7106, 7059, 7107, 7108, 7103, 7102, 7109, 7060, 7110]

// Module 7036
import isNewArch from "isNewArch";

if (isNewArch.isNewArch()) {
  exports.FlashList = require("FlashList").FlashList;
  exports.FlashListRef = require("module_7098").FlashListRef;
  exports.FlashListProps = require("module_7099").FlashListProps;
  exports.ListRenderItem = require("module_7099").ListRenderItem;
  exports.ListRenderItemInfo = require("module_7099").ListRenderItemInfo;
  exports.RenderTarget = require("module_7099").RenderTarget;
  exports.RenderTargetOptions = require("module_7099").RenderTargetOptions;
  exports.AnimatedFlashList = require("FlashList");
  exports.useBenchmark = require("getFormattedString").useBenchmark;
  exports.BenchmarkParams = require("getFormattedString").BenchmarkParams;
  exports.BenchmarkResult = require("getFormattedString").BenchmarkResult;
  exports.useDataMultiplier = require("useDataMultiplier").useDataMultiplier;
  exports.useFlatListBenchmark = require("runScrollBenchmark").useFlatListBenchmark;
  exports.FlatListBenchmarkParams = require("runScrollBenchmark").FlatListBenchmarkParams;
  exports.useLayoutState = require("useLayoutState").useLayoutState;
  exports.useRecyclingState = require("useRecyclingState").useRecyclingState;
  exports.useMappingHelper = require("useMappingHelper").useMappingHelper;
  exports.JSFPSMonitor = require("JSFPSMonitor").JSFPSMonitor;
  exports.JSFPSResult = require("JSFPSMonitor").JSFPSResult;
  exports.autoScroll = require("Cancellable").autoScroll;
  exports.Cancellable = require("Cancellable").Cancellable;
  exports.ViewToken = require("module_7109");
  exports.useFlashListContext = require("context").useFlashListContext;
  exports.LayoutCommitObserver = require("LayoutCommitObserver").LayoutCommitObserver;
  exports.LayoutCommitObserverProps = require("LayoutCommitObserver").LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(require("module_7038").ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
