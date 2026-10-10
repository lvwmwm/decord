// Module ID: 6531
// Function ID: 6532
// Dependencies: [6532, 6533, 6534, 6593, 6594, 6595, 6596, 6600, 6601, 6554, 6602, 6603, 6598, 6597, 6604, 6555, 6605]

// Module 6531
import ErrorMessages from "ErrorMessages" /* 6533 */;
import FlashList from "FlashList" /* 6534 */;
import _mod6554 from "module_6554" /* 6554 */;
import react from "react" /* 6555 */;
import _mod6593 from "module_6593" /* 6593 */;
import RenderTargetOptions from "RenderTargetOptions" /* 6594 */;
import react_nativeDefault from "react-native" /* 6595 */;
import _mod6596 from "module_6596" /* 6596 */;
import autoScroll from "autoScroll" /* 6597 */;
import JSFPSMonitor from "JSFPSMonitor" /* 6598 */;
import _mod6600 from "module_6600" /* 6600 */;
import _mod6601 from "module_6601" /* 6601 */;
import _mod6602 from "module_6602" /* 6602 */;
import react2 from "react" /* 6603 */;
import _modDef6604 from "module_6604" /* 6604 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 6605 */;
import react_native from "react-native" /* 6532 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6593.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod6596.useBenchmark;
  exports.BenchmarkParams = _mod6596.BenchmarkParams;
  exports.BenchmarkResult = _mod6596.BenchmarkResult;
  exports.useDataMultiplier = _mod6600.useDataMultiplier;
  exports.useFlatListBenchmark = _mod6601.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod6601.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6554.useLayoutState;
  exports.useRecyclingState = _mod6602.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef6604;
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
