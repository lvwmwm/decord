// Module ID: 5500
// Function ID: 5501
// Dependencies: [5501, 5502, 5503, 5562, 5563, 5564, 5565, 5569, 5570, 5523, 5571, 5572, 5567, 5566, 5573, 5524, 5574]

// Module 5500
import ErrorMessages from "ErrorMessages" /* 5502 */;
import FlashList from "FlashList" /* 5503 */;
import _mod5523 from "module_5523" /* 5523 */;
import react from "react" /* 5524 */;
import _mod5562 from "module_5562" /* 5562 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5563 */;
import react_nativeDefault from "react-native" /* 5564 */;
import _mod5565 from "module_5565" /* 5565 */;
import autoScroll from "autoScroll" /* 5566 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5567 */;
import _mod5569 from "module_5569" /* 5569 */;
import _mod5570 from "module_5570" /* 5570 */;
import _mod5571 from "module_5571" /* 5571 */;
import react2 from "react" /* 5572 */;
import _modDef5573 from "module_5573" /* 5573 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5574 */;
import react_native from "react-native" /* 5501 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5562.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5565.useBenchmark;
  exports.BenchmarkParams = _mod5565.BenchmarkParams;
  exports.BenchmarkResult = _mod5565.BenchmarkResult;
  exports.useDataMultiplier = _mod5569.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5570.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5570.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5523.useLayoutState;
  exports.useRecyclingState = _mod5571.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5573;
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
