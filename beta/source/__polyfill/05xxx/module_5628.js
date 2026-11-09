// Module ID: 5628
// Function ID: 5629
// Dependencies: [5629, 5630, 5631, 5690, 5691, 5692, 5693, 5697, 5698, 5651, 5699, 5700, 5695, 5694, 5701, 5652, 5702]

// Module 5628
import ErrorMessages from "ErrorMessages" /* 5630 */;
import FlashList from "FlashList" /* 5631 */;
import _mod5651 from "module_5651" /* 5651 */;
import react from "react" /* 5652 */;
import _mod5690 from "module_5690" /* 5690 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5691 */;
import react_nativeDefault from "react-native" /* 5692 */;
import _mod5693 from "module_5693" /* 5693 */;
import autoScroll from "autoScroll" /* 5694 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5695 */;
import _mod5697 from "module_5697" /* 5697 */;
import _mod5698 from "module_5698" /* 5698 */;
import _mod5699 from "module_5699" /* 5699 */;
import react2 from "react" /* 5700 */;
import _modDef5701 from "module_5701" /* 5701 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5702 */;
import react_native from "react-native" /* 5629 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5690.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5693.useBenchmark;
  exports.BenchmarkParams = _mod5693.BenchmarkParams;
  exports.BenchmarkResult = _mod5693.BenchmarkResult;
  exports.useDataMultiplier = _mod5697.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5698.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5698.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5651.useLayoutState;
  exports.useRecyclingState = _mod5699.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5701;
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
