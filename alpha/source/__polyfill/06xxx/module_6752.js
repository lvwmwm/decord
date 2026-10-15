// Module ID: 6752
// Function ID: 6753
// Dependencies: [6753, 6754, 6755, 6814, 6815, 6816, 6817, 6821, 6822, 6775, 6823, 6824, 6819, 6818, 6825, 6776, 6826]

// Module 6752
import ErrorMessages from "ErrorMessages" /* 6754 */;
import FlashList from "FlashList" /* 6755 */;
import _mod6775 from "module_6775" /* 6775 */;
import react from "react" /* 6776 */;
import _mod6814 from "module_6814" /* 6814 */;
import RenderTargetOptions from "RenderTargetOptions" /* 6815 */;
import react_nativeDefault from "react-native" /* 6816 */;
import _mod6817 from "module_6817" /* 6817 */;
import autoScroll from "autoScroll" /* 6818 */;
import JSFPSMonitor from "JSFPSMonitor" /* 6819 */;
import _mod6821 from "module_6821" /* 6821 */;
import _mod6822 from "module_6822" /* 6822 */;
import _mod6823 from "module_6823" /* 6823 */;
import react2 from "react" /* 6824 */;
import _modDef6825 from "module_6825" /* 6825 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 6826 */;
import react_native from "react-native" /* 6753 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6814.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod6817.useBenchmark;
  exports.BenchmarkParams = _mod6817.BenchmarkParams;
  exports.BenchmarkResult = _mod6817.BenchmarkResult;
  exports.useDataMultiplier = _mod6821.useDataMultiplier;
  exports.useFlatListBenchmark = _mod6822.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod6822.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6775.useLayoutState;
  exports.useRecyclingState = _mod6823.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef6825;
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
