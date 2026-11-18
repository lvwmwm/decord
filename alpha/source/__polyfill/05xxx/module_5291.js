// Module ID: 5291
// Function ID: 5292
// Dependencies: [5292, 5293, 5294, 5353, 5354, 5355, 5356, 5360, 5361, 5314, 5362, 5363, 5358, 5357, 5364, 5315, 5365]

// Module 5291
import ErrorMessages from "ErrorMessages" /* 5293 */;
import FlashList from "FlashList" /* 5294 */;
import _mod5314 from "module_5314" /* 5314 */;
import react from "react" /* 5315 */;
import _mod5353 from "module_5353" /* 5353 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5354 */;
import react_nativeDefault from "react-native" /* 5355 */;
import _mod5356 from "module_5356" /* 5356 */;
import autoScroll from "autoScroll" /* 5357 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5358 */;
import _mod5360 from "module_5360" /* 5360 */;
import _mod5361 from "module_5361" /* 5361 */;
import _mod5362 from "module_5362" /* 5362 */;
import react2 from "react" /* 5363 */;
import _modDef5364 from "module_5364" /* 5364 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5365 */;
import react_native from "react-native" /* 5292 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5353.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5356.useBenchmark;
  exports.BenchmarkParams = _mod5356.BenchmarkParams;
  exports.BenchmarkResult = _mod5356.BenchmarkResult;
  exports.useDataMultiplier = _mod5360.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5361.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5361.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5314.useLayoutState;
  exports.useRecyclingState = _mod5362.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5364;
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
