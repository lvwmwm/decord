// Module ID: 5806
// Function ID: 5807
// Dependencies: [5807, 5808, 5809, 5868, 5869, 5870, 5871, 5875, 5876, 5829, 5877, 5878, 5873, 5872, 5879, 5830, 5880]

// Module 5806
import ErrorMessages from "ErrorMessages" /* 5808 */;
import FlashList from "FlashList" /* 5809 */;
import _mod5829 from "module_5829" /* 5829 */;
import react from "react" /* 5830 */;
import _mod5868 from "module_5868" /* 5868 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5869 */;
import react_nativeDefault from "react-native" /* 5870 */;
import _mod5871 from "module_5871" /* 5871 */;
import autoScroll from "autoScroll" /* 5872 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5873 */;
import _mod5875 from "module_5875" /* 5875 */;
import _mod5876 from "module_5876" /* 5876 */;
import _mod5877 from "module_5877" /* 5877 */;
import react2 from "react" /* 5878 */;
import _modDef5879 from "module_5879" /* 5879 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5880 */;
import react_native from "react-native" /* 5807 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5868.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5871.useBenchmark;
  exports.BenchmarkParams = _mod5871.BenchmarkParams;
  exports.BenchmarkResult = _mod5871.BenchmarkResult;
  exports.useDataMultiplier = _mod5875.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5876.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5876.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5829.useLayoutState;
  exports.useRecyclingState = _mod5877.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5879;
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
