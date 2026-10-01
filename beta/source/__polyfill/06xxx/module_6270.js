// Module ID: 6270
// Function ID: 6271
// Dependencies: [6271, 6272, 6273, 6332, 6333, 6334, 6335, 6339, 6340, 6293, 6341, 6342, 6337, 6336, 6343, 6294, 6344]

// Module 6270
import ErrorMessages from "ErrorMessages" /* 6272 */;
import FlashList from "FlashList" /* 6273 */;
import _mod6293 from "module_6293" /* 6293 */;
import react from "react" /* 6294 */;
import _mod6332 from "module_6332" /* 6332 */;
import RenderTargetOptions from "RenderTargetOptions" /* 6333 */;
import react_nativeDefault from "react-native" /* 6334 */;
import _mod6335 from "module_6335" /* 6335 */;
import autoScroll from "autoScroll" /* 6336 */;
import JSFPSMonitor from "JSFPSMonitor" /* 6337 */;
import _mod6339 from "module_6339" /* 6339 */;
import _mod6340 from "module_6340" /* 6340 */;
import _mod6341 from "module_6341" /* 6341 */;
import react2 from "react" /* 6342 */;
import _modDef6343 from "module_6343" /* 6343 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 6344 */;
import react_native from "react-native" /* 6271 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6332.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod6335.useBenchmark;
  exports.BenchmarkParams = _mod6335.BenchmarkParams;
  exports.BenchmarkResult = _mod6335.BenchmarkResult;
  exports.useDataMultiplier = _mod6339.useDataMultiplier;
  exports.useFlatListBenchmark = _mod6340.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod6340.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6293.useLayoutState;
  exports.useRecyclingState = _mod6341.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef6343;
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
