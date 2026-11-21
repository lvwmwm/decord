// Module ID: 5381
// Function ID: 5382
// Dependencies: [5382, 5383, 5384, 5443, 5444, 5445, 5446, 5450, 5451, 5404, 5452, 5453, 5448, 5447, 5454, 5405, 5455]

// Module 5381
import ErrorMessages from "ErrorMessages" /* 5383 */;
import FlashList from "FlashList" /* 5384 */;
import _mod5404 from "module_5404" /* 5404 */;
import react from "react" /* 5405 */;
import _mod5443 from "module_5443" /* 5443 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5444 */;
import react_nativeDefault from "react-native" /* 5445 */;
import _mod5446 from "module_5446" /* 5446 */;
import autoScroll from "autoScroll" /* 5447 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5448 */;
import _mod5450 from "module_5450" /* 5450 */;
import _mod5451 from "module_5451" /* 5451 */;
import _mod5452 from "module_5452" /* 5452 */;
import react2 from "react" /* 5453 */;
import _modDef5454 from "module_5454" /* 5454 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5455 */;
import react_native from "react-native" /* 5382 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5443.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5446.useBenchmark;
  exports.BenchmarkParams = _mod5446.BenchmarkParams;
  exports.BenchmarkResult = _mod5446.BenchmarkResult;
  exports.useDataMultiplier = _mod5450.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5451.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5451.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5404.useLayoutState;
  exports.useRecyclingState = _mod5452.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5454;
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
