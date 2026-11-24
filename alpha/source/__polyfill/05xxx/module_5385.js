// Module ID: 5385
// Function ID: 5386
// Dependencies: [5386, 5387, 5388, 5447, 5448, 5449, 5450, 5454, 5455, 5408, 5456, 5457, 5452, 5451, 5458, 5409, 5459]

// Module 5385
import ErrorMessages from "ErrorMessages" /* 5387 */;
import FlashList from "FlashList" /* 5388 */;
import _mod5408 from "module_5408" /* 5408 */;
import react from "react" /* 5409 */;
import _mod5447 from "module_5447" /* 5447 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5448 */;
import react_nativeDefault from "react-native" /* 5449 */;
import _mod5450 from "module_5450" /* 5450 */;
import autoScroll from "autoScroll" /* 5451 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5452 */;
import _mod5454 from "module_5454" /* 5454 */;
import _mod5455 from "module_5455" /* 5455 */;
import _mod5456 from "module_5456" /* 5456 */;
import react2 from "react" /* 5457 */;
import _modDef5458 from "module_5458" /* 5458 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5459 */;
import react_native from "react-native" /* 5386 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5447.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5450.useBenchmark;
  exports.BenchmarkParams = _mod5450.BenchmarkParams;
  exports.BenchmarkResult = _mod5450.BenchmarkResult;
  exports.useDataMultiplier = _mod5454.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5455.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5455.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5408.useLayoutState;
  exports.useRecyclingState = _mod5456.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5458;
  exports.useFlashListContext = react.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const self = this;
  const self2 = this;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
