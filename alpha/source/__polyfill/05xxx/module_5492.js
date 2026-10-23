// Module ID: 5492
// Function ID: 5493
// Dependencies: [5493, 5494, 5495, 5554, 5555, 5556, 5557, 5561, 5562, 5515, 5563, 5564, 5559, 5558, 5565, 5516, 5566]

// Module 5492
import ErrorMessages from "ErrorMessages" /* 5494 */;
import FlashList from "FlashList" /* 5495 */;
import _mod5515 from "module_5515" /* 5515 */;
import react from "react" /* 5516 */;
import _mod5554 from "module_5554" /* 5554 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5555 */;
import react_nativeDefault from "react-native" /* 5556 */;
import _mod5557 from "module_5557" /* 5557 */;
import autoScroll from "autoScroll" /* 5558 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5559 */;
import _mod5561 from "module_5561" /* 5561 */;
import _mod5562 from "module_5562" /* 5562 */;
import _mod5563 from "module_5563" /* 5563 */;
import react2 from "react" /* 5564 */;
import _modDef5565 from "module_5565" /* 5565 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5566 */;
import react_native from "react-native" /* 5493 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5554.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5557.useBenchmark;
  exports.BenchmarkParams = _mod5557.BenchmarkParams;
  exports.BenchmarkResult = _mod5557.BenchmarkResult;
  exports.useDataMultiplier = _mod5561.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5562.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5562.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5515.useLayoutState;
  exports.useRecyclingState = _mod5563.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5565;
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
