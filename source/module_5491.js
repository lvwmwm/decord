// Module ID: 5491
// Function ID: 5492
// Dependencies: [5492, 5493, 5494, 5553, 5554, 5555, 5556, 5560, 5561, 5514, 5562, 5563, 5558, 5557, 5564, 5515, 5565]

// Module 5491
import isNewArch from "isNewArch";

if (isNewArch.isNewArch()) {
  exports.FlashList = require("FlashList").FlashList;
  exports.FlashListRef = require("module_5553").FlashListRef;
  exports.FlashListProps = require("module_5554").FlashListProps;
  exports.ListRenderItem = require("module_5554").ListRenderItem;
  exports.ListRenderItemInfo = require("module_5554").ListRenderItemInfo;
  exports.RenderTarget = require("module_5554").RenderTarget;
  exports.RenderTargetOptions = require("module_5554").RenderTargetOptions;
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
  exports.ViewToken = require("module_5564");
  exports.useFlashListContext = require("context").useFlashListContext;
  exports.LayoutCommitObserver = require("LayoutCommitObserver").LayoutCommitObserver;
  exports.LayoutCommitObserverProps = require("LayoutCommitObserver").LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(require("module_5493").ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
