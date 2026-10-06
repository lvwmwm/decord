// Module ID: 6263
// Function ID: 6264
// Dependencies: [6264, 6265, 6266, 6325, 6326, 6327, 6328, 6332, 6333, 6286, 6334, 6335, 6330, 6329, 6336, 6287, 6337]

// Module 6263
import ErrorMessages from "ErrorMessages" /* 6265 */;
import FlashList from "FlashList" /* 6266 */;
import _mod6286 from "module_6286" /* 6286 */;
import react from "react" /* 6287 */;
import _mod6325 from "module_6325" /* 6325 */;
import RenderTargetOptions from "RenderTargetOptions" /* 6326 */;
import react_nativeDefault from "react-native" /* 6327 */;
import _mod6328 from "module_6328" /* 6328 */;
import autoScroll from "autoScroll" /* 6329 */;
import JSFPSMonitor from "JSFPSMonitor" /* 6330 */;
import _mod6332 from "module_6332" /* 6332 */;
import _mod6333 from "module_6333" /* 6333 */;
import _mod6334 from "module_6334" /* 6334 */;
import react2 from "react" /* 6335 */;
import _modDef6336 from "module_6336" /* 6336 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 6337 */;
import react_native from "react-native" /* 6264 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6325.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod6328.useBenchmark;
  exports.BenchmarkParams = _mod6328.BenchmarkParams;
  exports.BenchmarkResult = _mod6328.BenchmarkResult;
  exports.useDataMultiplier = _mod6332.useDataMultiplier;
  exports.useFlatListBenchmark = _mod6333.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod6333.FlatListBenchmarkParams;
  exports.useLayoutState = _mod6286.useLayoutState;
  exports.useRecyclingState = _mod6334.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef6336;
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
