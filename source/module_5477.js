// Module ID: 5477
// Function ID: 5478
// Dependencies: [5478, 5479, 5480, 5539, 5540, 5541, 5542, 5546, 5547, 5500, 5548, 5549, 5544, 5543, 5550, 5501, 5551]

// Module 5477
import isNewArch from "isNewArch";

if (isNewArch.isNewArch()) {
  exports.FlashList = require("FlashList").FlashList;
  exports.FlashListRef = require("module_5539").FlashListRef;
  exports.FlashListProps = require("module_5540").FlashListProps;
  exports.ListRenderItem = require("module_5540").ListRenderItem;
  exports.ListRenderItemInfo = require("module_5540").ListRenderItemInfo;
  exports.RenderTarget = require("module_5540").RenderTarget;
  exports.RenderTargetOptions = require("module_5540").RenderTargetOptions;
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
  exports.ViewToken = require("module_5550");
  exports.useFlashListContext = require("context").useFlashListContext;
  exports.LayoutCommitObserver = require("LayoutCommitObserver").LayoutCommitObserver;
  exports.LayoutCommitObserverProps = require("LayoutCommitObserver").LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(require("module_5479").ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
