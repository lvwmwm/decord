// Module ID: 6756
// Function ID: 6757
// Dependencies: [6757, 6758, 6759, 6818, 6819, 6820, 6821, 6825, 6826, 6779, 6827, 6828, 6823, 6822, 6829, 6780, 6830]

// Module 6756
import ErrorMessages from "ErrorMessages" /* 6758 */;
import FlashList from "FlashList" /* 6759 */;
import _mod6779 from "module_6779" /* 6779 */;
import react from "react" /* 6780 */;
import _mod6818 from "module_6818" /* 6818 */;
import RenderTargetOptions from "RenderTargetOptions" /* 6819 */;
import react_nativeDefault from "react-native" /* 6820 */;
import _mod6821 from "module_6821" /* 6821 */;
import autoScroll from "autoScroll" /* 6822 */;
import JSFPSMonitor from "JSFPSMonitor" /* 6823 */;
import _mod6825 from "module_6825" /* 6825 */;
import _mod6826 from "module_6826" /* 6826 */;
import _mod6827 from "module_6827" /* 6827 */;
import react2 from "react" /* 6828 */;
import _modDef6829 from "module_6829" /* 6829 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 6830 */;
import react_native from "react-native" /* 6757 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6818.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod6821.useBenchmark;
  exports.BenchmarkParams = _mod6821.BenchmarkParams;
  exports.BenchmarkResult = _mod6821.BenchmarkResult;
  exports.useDataMultiplier = _mod6825.useDataMultiplier;
  exports.useFlatListBenchmark = _mod6826.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod6826.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6779.useLayoutState;
  exports.useRecyclingState = _mod6827.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef6829;
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
