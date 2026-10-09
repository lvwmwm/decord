// Module ID: 6530
// Function ID: 6531
// Dependencies: [6531, 6532, 6533, 6592, 6593, 6594, 6595, 6599, 6600, 6553, 6601, 6602, 6597, 6596, 6603, 6554, 6604]

// Module 6530
import ErrorMessages from "ErrorMessages" /* 6532 */;
import FlashList from "FlashList" /* 6533 */;
import _mod6553 from "module_6553" /* 6553 */;
import react from "react" /* 6554 */;
import _mod6592 from "module_6592" /* 6592 */;
import RenderTargetOptions from "RenderTargetOptions" /* 6593 */;
import react_nativeDefault from "react-native" /* 6594 */;
import _mod6595 from "module_6595" /* 6595 */;
import autoScroll from "autoScroll" /* 6596 */;
import JSFPSMonitor from "JSFPSMonitor" /* 6597 */;
import _mod6599 from "module_6599" /* 6599 */;
import _mod6600 from "module_6600" /* 6600 */;
import _mod6601 from "module_6601" /* 6601 */;
import react2 from "react" /* 6602 */;
import _modDef6603 from "module_6603" /* 6603 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 6604 */;
import react_native from "react-native" /* 6531 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6592.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod6595.useBenchmark;
  exports.BenchmarkParams = _mod6595.BenchmarkParams;
  exports.BenchmarkResult = _mod6595.BenchmarkResult;
  exports.useDataMultiplier = _mod6599.useDataMultiplier;
  exports.useFlatListBenchmark = _mod6600.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod6600.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6553.useLayoutState;
  exports.useRecyclingState = _mod6601.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef6603;
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
