// Module ID: 5130
// Function ID: 43569
// Dependencies: []

// Module 5130
const _module = require(dependencyMap[0]);
if (_module.isNewArch()) {
  exports.FlashList = require(dependencyMap[2]).FlashList;
  exports.FlashListRef = require(dependencyMap[3]).FlashListRef;
  exports.FlashListProps = require(dependencyMap[4]).FlashListProps;
  exports.ListRenderItem = require(dependencyMap[4]).ListRenderItem;
  exports.ListRenderItemInfo = require(dependencyMap[4]).ListRenderItemInfo;
  exports.RenderTarget = require(dependencyMap[4]).RenderTarget;
  exports.RenderTargetOptions = require(dependencyMap[4]).RenderTargetOptions;
  exports.AnimatedFlashList = importDefault(dependencyMap[5]);
  exports.useBenchmark = require(dependencyMap[6]).useBenchmark;
  exports.BenchmarkParams = require(dependencyMap[6]).BenchmarkParams;
  exports.BenchmarkResult = require(dependencyMap[6]).BenchmarkResult;
  exports.useDataMultiplier = require(dependencyMap[7]).useDataMultiplier;
  exports.useFlatListBenchmark = require(dependencyMap[8]).useFlatListBenchmark;
  exports.FlatListBenchmarkParams = require(dependencyMap[8]).FlatListBenchmarkParams;
  exports.useLayoutState = require(dependencyMap[9]).useLayoutState;
  exports.useRecyclingState = require(dependencyMap[10]).useRecyclingState;
  exports.useMappingHelper = require(dependencyMap[11]).useMappingHelper;
  exports.JSFPSMonitor = require(dependencyMap[12]).JSFPSMonitor;
  exports.JSFPSResult = require(dependencyMap[12]).JSFPSResult;
  exports.autoScroll = require(dependencyMap[13]).autoScroll;
  exports.Cancellable = require(dependencyMap[13]).Cancellable;
  exports.ViewToken = importDefault(dependencyMap[14]);
  exports.useFlashListContext = require(dependencyMap[15]).useFlashListContext;
  exports.LayoutCommitObserver = require(dependencyMap[16]).LayoutCommitObserver;
  exports.LayoutCommitObserverProps = require(dependencyMap[16]).LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(require(dependencyMap[1]).ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
