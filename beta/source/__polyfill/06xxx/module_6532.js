// Module ID: 6532
// Function ID: 6533
// Dependencies: [6533, 6534, 6535, 6594, 6595, 6596, 6597, 6601, 6602, 6555, 6603, 6604, 6599, 6598, 6605, 6556, 6606]

// Module 6532
import ErrorMessages from "ErrorMessages" /* 6534 */;
import FlashList from "FlashList" /* 6535 */;
import _mod6555 from "module_6555" /* 6555 */;
import react from "react" /* 6556 */;
import _mod6594 from "module_6594" /* 6594 */;
import RenderTargetOptions from "RenderTargetOptions" /* 6595 */;
import react_nativeDefault from "react-native" /* 6596 */;
import _mod6597 from "module_6597" /* 6597 */;
import autoScroll from "autoScroll" /* 6598 */;
import JSFPSMonitor from "JSFPSMonitor" /* 6599 */;
import _mod6601 from "module_6601" /* 6601 */;
import _mod6602 from "module_6602" /* 6602 */;
import _mod6603 from "module_6603" /* 6603 */;
import react2 from "react" /* 6604 */;
import _modDef6605 from "module_6605" /* 6605 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 6606 */;
import react_native from "react-native" /* 6533 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6594.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod6597.useBenchmark;
  exports.BenchmarkParams = _mod6597.BenchmarkParams;
  exports.BenchmarkResult = _mod6597.BenchmarkResult;
  exports.useDataMultiplier = _mod6601.useDataMultiplier;
  exports.useFlatListBenchmark = _mod6602.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod6602.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6555.useLayoutState;
  exports.useRecyclingState = _mod6603.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef6605;
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
