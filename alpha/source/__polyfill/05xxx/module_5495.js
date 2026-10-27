// Module ID: 5495
// Function ID: 5496
// Dependencies: [5496, 5497, 5498, 5557, 5558, 5559, 5560, 5564, 5565, 5518, 5566, 5567, 5562, 5561, 5568, 5519, 5569]

// Module 5495
import ErrorMessages from "ErrorMessages" /* 5497 */;
import FlashList from "FlashList" /* 5498 */;
import _mod5518 from "module_5518" /* 5518 */;
import react from "react" /* 5519 */;
import _mod5557 from "module_5557" /* 5557 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5558 */;
import react_nativeDefault from "react-native" /* 5559 */;
import _mod5560 from "module_5560" /* 5560 */;
import autoScroll from "autoScroll" /* 5561 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5562 */;
import _mod5564 from "module_5564" /* 5564 */;
import _mod5565 from "module_5565" /* 5565 */;
import _mod5566 from "module_5566" /* 5566 */;
import react2 from "react" /* 5567 */;
import _modDef5568 from "module_5568" /* 5568 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5569 */;
import react_native from "react-native" /* 5496 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5557.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5560.useBenchmark;
  exports.BenchmarkParams = _mod5560.BenchmarkParams;
  exports.BenchmarkResult = _mod5560.BenchmarkResult;
  exports.useDataMultiplier = _mod5564.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5565.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5565.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5518.useLayoutState;
  exports.useRecyclingState = _mod5566.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5568;
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
