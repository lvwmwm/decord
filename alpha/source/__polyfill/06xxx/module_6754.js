// Module ID: 6754
// Function ID: 6755
// Dependencies: [6755, 6756, 6757, 6816, 6817, 6818, 6819, 6823, 6824, 6777, 6825, 6826, 6821, 6820, 6827, 6778, 6828]

// Module 6754
import ErrorMessages from "ErrorMessages" /* 6756 */;
import FlashList from "FlashList" /* 6757 */;
import _mod6777 from "module_6777" /* 6777 */;
import react from "react" /* 6778 */;
import _mod6816 from "module_6816" /* 6816 */;
import RenderTargetOptions from "RenderTargetOptions" /* 6817 */;
import react_nativeDefault from "react-native" /* 6818 */;
import _mod6819 from "module_6819" /* 6819 */;
import autoScroll from "autoScroll" /* 6820 */;
import JSFPSMonitor from "JSFPSMonitor" /* 6821 */;
import _mod6823 from "module_6823" /* 6823 */;
import _mod6824 from "module_6824" /* 6824 */;
import _mod6825 from "module_6825" /* 6825 */;
import react2 from "react" /* 6826 */;
import _modDef6827 from "module_6827" /* 6827 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 6828 */;
import react_native from "react-native" /* 6755 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6816.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod6819.useBenchmark;
  exports.BenchmarkParams = _mod6819.BenchmarkParams;
  exports.BenchmarkResult = _mod6819.BenchmarkResult;
  exports.useDataMultiplier = _mod6823.useDataMultiplier;
  exports.useFlatListBenchmark = _mod6824.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod6824.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6777.useLayoutState;
  exports.useRecyclingState = _mod6825.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef6827;
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
