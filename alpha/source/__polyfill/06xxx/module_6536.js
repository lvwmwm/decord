// Module ID: 6536
// Function ID: 6537
// Dependencies: [6537, 6538, 6539, 6598, 6599, 6600, 6601, 6605, 6606, 6559, 6607, 6608, 6603, 6602, 6609, 6560, 6610]

// Module 6536
import ErrorMessages from "ErrorMessages" /* 6538 */;
import FlashList from "FlashList" /* 6539 */;
import _mod6559 from "module_6559" /* 6559 */;
import react from "react" /* 6560 */;
import _mod6598 from "module_6598" /* 6598 */;
import RenderTargetOptions from "RenderTargetOptions" /* 6599 */;
import react_nativeDefault from "react-native" /* 6600 */;
import _mod6601 from "module_6601" /* 6601 */;
import autoScroll from "autoScroll" /* 6602 */;
import JSFPSMonitor from "JSFPSMonitor" /* 6603 */;
import _mod6605 from "module_6605" /* 6605 */;
import _mod6606 from "module_6606" /* 6606 */;
import _mod6607 from "module_6607" /* 6607 */;
import react2 from "react" /* 6608 */;
import _modDef6609 from "module_6609" /* 6609 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 6610 */;
import react_native from "react-native" /* 6537 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6598.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod6601.useBenchmark;
  exports.BenchmarkParams = _mod6601.BenchmarkParams;
  exports.BenchmarkResult = _mod6601.BenchmarkResult;
  exports.useDataMultiplier = _mod6605.useDataMultiplier;
  exports.useFlatListBenchmark = _mod6606.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod6606.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6559.useLayoutState;
  exports.useRecyclingState = _mod6607.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef6609;
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
