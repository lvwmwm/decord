// Module ID: 5262
// Function ID: 5263
// Dependencies: [5263, 5264, 5265, 5324, 5325, 5326, 5327, 5331, 5332, 5285, 5333, 5334, 5329, 5328, 5335, 5286, 5336]

// Module 5262
import ErrorMessages from "ErrorMessages" /* 5264 */;
import FlashList from "FlashList" /* 5265 */;
import _mod5285 from "module_5285" /* 5285 */;
import react from "react" /* 5286 */;
import _mod5324 from "module_5324" /* 5324 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5325 */;
import react_nativeDefault from "react-native" /* 5326 */;
import _mod5327 from "module_5327" /* 5327 */;
import autoScroll from "autoScroll" /* 5328 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5329 */;
import _mod5331 from "module_5331" /* 5331 */;
import _mod5332 from "module_5332" /* 5332 */;
import _mod5333 from "module_5333" /* 5333 */;
import react2 from "react" /* 5334 */;
import _modDef5335 from "module_5335" /* 5335 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5336 */;
import react_native from "react-native" /* 5263 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5324.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5327.useBenchmark;
  exports.BenchmarkParams = _mod5327.BenchmarkParams;
  exports.BenchmarkResult = _mod5327.BenchmarkResult;
  exports.useDataMultiplier = _mod5331.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5332.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5332.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5285.useLayoutState;
  exports.useRecyclingState = _mod5333.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5335;
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
