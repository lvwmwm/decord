// Module ID: 5411
// Function ID: 5412
// Dependencies: [5412, 5413, 5414, 5473, 5474, 5475, 5476, 5480, 5481, 5434, 5482, 5483, 5478, 5477, 5484, 5435, 5485]

// Module 5411
import isNewArch from "isNewArch";

if (isNewArch.isNewArch()) {
  exports.FlashList = require("FlashList").FlashList;
  exports.FlashListRef = require("module_5473").FlashListRef;
  exports.FlashListProps = require("module_5474").FlashListProps;
  exports.ListRenderItem = require("module_5474").ListRenderItem;
  exports.ListRenderItemInfo = require("module_5474").ListRenderItemInfo;
  exports.RenderTarget = require("module_5474").RenderTarget;
  exports.RenderTargetOptions = require("module_5474").RenderTargetOptions;
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
  exports.ViewToken = require("module_5484");
  exports.useFlashListContext = require("context").useFlashListContext;
  exports.LayoutCommitObserver = require("LayoutCommitObserver").LayoutCommitObserver;
  exports.LayoutCommitObserverProps = require("LayoutCommitObserver").LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(require("module_5413").ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
