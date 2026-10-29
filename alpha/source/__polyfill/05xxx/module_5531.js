// Module ID: 5531
// Function ID: 5532
// Dependencies: [5532, 5533, 5534, 5593, 5594, 5595, 5596, 5600, 5601, 5554, 5602, 5603, 5598, 5597, 5604, 5555, 5605]

// Module 5531
import ErrorMessages from "ErrorMessages" /* 5533 */;
import FlashList from "FlashList" /* 5534 */;
import _mod5554 from "module_5554" /* 5554 */;
import react from "react" /* 5555 */;
import _mod5593 from "module_5593" /* 5593 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5594 */;
import react_nativeDefault from "react-native" /* 5595 */;
import _mod5596 from "module_5596" /* 5596 */;
import autoScroll from "autoScroll" /* 5597 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5598 */;
import _mod5600 from "module_5600" /* 5600 */;
import _mod5601 from "module_5601" /* 5601 */;
import _mod5602 from "module_5602" /* 5602 */;
import react2 from "react" /* 5603 */;
import _modDef5604 from "module_5604" /* 5604 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5605 */;
import react_native from "react-native" /* 5532 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5593.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5596.useBenchmark;
  exports.BenchmarkParams = _mod5596.BenchmarkParams;
  exports.BenchmarkResult = _mod5596.BenchmarkResult;
  exports.useDataMultiplier = _mod5600.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5601.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5601.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5554.useLayoutState;
  exports.useRecyclingState = _mod5602.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5604;
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
