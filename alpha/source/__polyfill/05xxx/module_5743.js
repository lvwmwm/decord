// Module ID: 5743
// Function ID: 5744
// Dependencies: [5744, 5745, 5746, 5805, 5806, 5807, 5808, 5812, 5813, 5766, 5814, 5815, 5810, 5809, 5816, 5767, 5817]

// Module 5743
import ErrorMessages from "ErrorMessages" /* 5745 */;
import FlashList from "FlashList" /* 5746 */;
import _mod5766 from "module_5766" /* 5766 */;
import react from "react" /* 5767 */;
import _mod5805 from "module_5805" /* 5805 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5806 */;
import react_nativeDefault from "react-native" /* 5807 */;
import _mod5808 from "module_5808" /* 5808 */;
import autoScroll from "autoScroll" /* 5809 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5810 */;
import _mod5812 from "module_5812" /* 5812 */;
import _mod5813 from "module_5813" /* 5813 */;
import _mod5814 from "module_5814" /* 5814 */;
import react2 from "react" /* 5815 */;
import _modDef5816 from "module_5816" /* 5816 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5817 */;
import react_native from "react-native" /* 5744 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5805.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5808.useBenchmark;
  exports.BenchmarkParams = _mod5808.BenchmarkParams;
  exports.BenchmarkResult = _mod5808.BenchmarkResult;
  exports.useDataMultiplier = _mod5812.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5813.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5813.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5766.useLayoutState;
  exports.useRecyclingState = _mod5814.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5816;
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
