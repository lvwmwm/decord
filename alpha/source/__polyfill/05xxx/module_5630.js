// Module ID: 5630
// Function ID: 5631
// Dependencies: [5631, 5632, 5633, 5692, 5693, 5694, 5695, 5699, 5700, 5653, 5701, 5702, 5697, 5696, 5703, 5654, 5704]

// Module 5630
import ErrorMessages from "ErrorMessages" /* 5632 */;
import FlashList from "FlashList" /* 5633 */;
import _mod5653 from "module_5653" /* 5653 */;
import react from "react" /* 5654 */;
import _mod5692 from "module_5692" /* 5692 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5693 */;
import react_nativeDefault from "react-native" /* 5694 */;
import _mod5695 from "module_5695" /* 5695 */;
import autoScroll from "autoScroll" /* 5696 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5697 */;
import _mod5699 from "module_5699" /* 5699 */;
import _mod5700 from "module_5700" /* 5700 */;
import _mod5701 from "module_5701" /* 5701 */;
import react2 from "react" /* 5702 */;
import _modDef5703 from "module_5703" /* 5703 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5704 */;
import react_native from "react-native" /* 5631 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5692.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5695.useBenchmark;
  exports.BenchmarkParams = _mod5695.BenchmarkParams;
  exports.BenchmarkResult = _mod5695.BenchmarkResult;
  exports.useDataMultiplier = _mod5699.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5700.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5700.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5653.useLayoutState;
  exports.useRecyclingState = _mod5701.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5703;
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
