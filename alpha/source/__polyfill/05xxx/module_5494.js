// Module ID: 5494
// Function ID: 5495
// Dependencies: [5495, 5496, 5497, 5556, 5557, 5558, 5559, 5563, 5564, 5517, 5565, 5566, 5561, 5560, 5567, 5518, 5568]

// Module 5494
import ErrorMessages from "ErrorMessages" /* 5496 */;
import FlashList from "FlashList" /* 5497 */;
import _mod5517 from "module_5517" /* 5517 */;
import react from "react" /* 5518 */;
import _mod5556 from "module_5556" /* 5556 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5557 */;
import react_nativeDefault from "react-native" /* 5558 */;
import _mod5559 from "module_5559" /* 5559 */;
import autoScroll from "autoScroll" /* 5560 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5561 */;
import _mod5563 from "module_5563" /* 5563 */;
import _mod5564 from "module_5564" /* 5564 */;
import _mod5565 from "module_5565" /* 5565 */;
import react2 from "react" /* 5566 */;
import _modDef5567 from "module_5567" /* 5567 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5568 */;
import react_native from "react-native" /* 5495 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5556.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5559.useBenchmark;
  exports.BenchmarkParams = _mod5559.BenchmarkParams;
  exports.BenchmarkResult = _mod5559.BenchmarkResult;
  exports.useDataMultiplier = _mod5563.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5564.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5564.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5517.useLayoutState;
  exports.useRecyclingState = _mod5565.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5567;
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
