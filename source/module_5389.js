// Module ID: 5389
// Function ID: 46096
// Dependencies: [5390, 5391, 5392, 5455, 5456, 5457, 5458, 5462, 5463, 5412, 5464, 5465, 5460, 5459, 5466, 5413, 5467]

// Module 5389
import isNewArch from "isNewArch";

if (isNewArch.isNewArch()) {
  exports.FlashList = require("FlashList").FlashList;
  exports.FlashListRef = require("module_5455").FlashListRef;
  exports.FlashListProps = require("module_5456").FlashListProps;
  exports.ListRenderItem = require("module_5456").ListRenderItem;
  exports.ListRenderItemInfo = require("module_5456").ListRenderItemInfo;
  exports.RenderTarget = require("module_5456").RenderTarget;
  exports.RenderTargetOptions = require("module_5456").RenderTargetOptions;
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
  exports.ViewToken = require("module_5466");
  exports.useFlashListContext = require("context").useFlashListContext;
  exports.LayoutCommitObserver = require("LayoutCommitObserver").LayoutCommitObserver;
  exports.LayoutCommitObserverProps = require("LayoutCommitObserver").LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(require("module_5391").ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
