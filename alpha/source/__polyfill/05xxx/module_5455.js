// Module ID: 5455
// Function ID: 5456
// Dependencies: [5456, 5457, 5458, 5517, 5518, 5519, 5520, 5524, 5525, 5478, 5526, 5527, 5522, 5521, 5528, 5479, 5529]

// Module 5455
import ErrorMessages from "ErrorMessages" /* 5457 */;
import FlashList from "FlashList" /* 5458 */;
import _mod5478 from "module_5478" /* 5478 */;
import react from "react" /* 5479 */;
import _mod5517 from "module_5517" /* 5517 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5518 */;
import react_nativeDefault from "react-native" /* 5519 */;
import _mod5520 from "module_5520" /* 5520 */;
import autoScroll from "autoScroll" /* 5521 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5522 */;
import _mod5524 from "module_5524" /* 5524 */;
import _mod5525 from "module_5525" /* 5525 */;
import _mod5526 from "module_5526" /* 5526 */;
import react2 from "react" /* 5527 */;
import _modDef5528 from "module_5528" /* 5528 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5529 */;
import react_native from "react-native" /* 5456 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5517.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5520.useBenchmark;
  exports.BenchmarkParams = _mod5520.BenchmarkParams;
  exports.BenchmarkResult = _mod5520.BenchmarkResult;
  exports.useDataMultiplier = _mod5524.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5525.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5525.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5478.useLayoutState;
  exports.useRecyclingState = _mod5526.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5528;
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
