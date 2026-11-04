// Module ID: 5526
// Function ID: 5527
// Dependencies: [5527, 5528, 5529, 5588, 5589, 5590, 5591, 5595, 5596, 5549, 5597, 5598, 5593, 5592, 5599, 5550, 5600]

// Module 5526
import ErrorMessages from "ErrorMessages" /* 5528 */;
import FlashList from "FlashList" /* 5529 */;
import _mod5549 from "module_5549" /* 5549 */;
import react from "react" /* 5550 */;
import _mod5588 from "module_5588" /* 5588 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5589 */;
import react_nativeDefault from "react-native" /* 5590 */;
import _mod5591 from "module_5591" /* 5591 */;
import autoScroll from "autoScroll" /* 5592 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5593 */;
import _mod5595 from "module_5595" /* 5595 */;
import _mod5596 from "module_5596" /* 5596 */;
import _mod5597 from "module_5597" /* 5597 */;
import react2 from "react" /* 5598 */;
import _modDef5599 from "module_5599" /* 5599 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5600 */;
import react_native from "react-native" /* 5527 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5588.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5591.useBenchmark;
  exports.BenchmarkParams = _mod5591.BenchmarkParams;
  exports.BenchmarkResult = _mod5591.BenchmarkResult;
  exports.useDataMultiplier = _mod5595.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5596.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5596.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5549.useLayoutState;
  exports.useRecyclingState = _mod5597.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5599;
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
