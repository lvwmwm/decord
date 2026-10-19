// Module ID: 6809
// Function ID: 6810
// Dependencies: [6810, 6811, 6812, 6871, 6872, 6873, 6874, 6878, 6879, 6832, 6880, 6881, 6876, 6875, 6882, 6833, 6883]

// Module 6809
import ErrorMessages from "ErrorMessages" /* 6811 */;
import FlashList from "FlashList" /* 6812 */;
import _mod6832 from "module_6832" /* 6832 */;
import react from "react" /* 6833 */;
import _mod6871 from "module_6871" /* 6871 */;
import RenderTargetOptions from "RenderTargetOptions" /* 6872 */;
import react_nativeDefault from "react-native" /* 6873 */;
import _mod6874 from "module_6874" /* 6874 */;
import autoScroll from "autoScroll" /* 6875 */;
import JSFPSMonitor from "JSFPSMonitor" /* 6876 */;
import _mod6878 from "module_6878" /* 6878 */;
import _mod6879 from "module_6879" /* 6879 */;
import _mod6880 from "module_6880" /* 6880 */;
import react2 from "react" /* 6881 */;
import _modDef6882 from "module_6882" /* 6882 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 6883 */;
import react_native from "react-native" /* 6810 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6871.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod6874.useBenchmark;
  exports.BenchmarkParams = _mod6874.BenchmarkParams;
  exports.BenchmarkResult = _mod6874.BenchmarkResult;
  exports.useDataMultiplier = _mod6878.useDataMultiplier;
  exports.useFlatListBenchmark = _mod6879.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod6879.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6832.useLayoutState;
  exports.useRecyclingState = _mod6880.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef6882;
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
