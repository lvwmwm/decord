// Module ID: 6523
// Function ID: 6524
// Dependencies: [6524, 6525, 6526, 6585, 6586, 6587, 6588, 6592, 6593, 6546, 6594, 6595, 6590, 6589, 6596, 6547, 6597]

// Module 6523
import ErrorMessages from "ErrorMessages" /* 6525 */;
import FlashList from "FlashList" /* 6526 */;
import _mod6546 from "module_6546" /* 6546 */;
import react from "react" /* 6547 */;
import _mod6585 from "module_6585" /* 6585 */;
import RenderTargetOptions from "RenderTargetOptions" /* 6586 */;
import react_nativeDefault from "react-native" /* 6587 */;
import _mod6588 from "module_6588" /* 6588 */;
import autoScroll from "autoScroll" /* 6589 */;
import JSFPSMonitor from "JSFPSMonitor" /* 6590 */;
import _mod6592 from "module_6592" /* 6592 */;
import _mod6593 from "module_6593" /* 6593 */;
import _mod6594 from "module_6594" /* 6594 */;
import react2 from "react" /* 6595 */;
import _modDef6596 from "module_6596" /* 6596 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 6597 */;
import react_native from "react-native" /* 6524 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6585.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod6588.useBenchmark;
  exports.BenchmarkParams = _mod6588.BenchmarkParams;
  exports.BenchmarkResult = _mod6588.BenchmarkResult;
  exports.useDataMultiplier = _mod6592.useDataMultiplier;
  exports.useFlatListBenchmark = _mod6593.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod6593.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6546.useLayoutState;
  exports.useRecyclingState = _mod6594.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef6596;
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
