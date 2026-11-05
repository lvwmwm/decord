// Module ID: 5638
// Function ID: 5639
// Dependencies: [5639, 5640, 5641, 5700, 5701, 5702, 5703, 5707, 5708, 5661, 5709, 5710, 5705, 5704, 5711, 5662, 5712]

// Module 5638
import ErrorMessages from "ErrorMessages" /* 5640 */;
import FlashList from "FlashList" /* 5641 */;
import _mod5661 from "module_5661" /* 5661 */;
import react from "react" /* 5662 */;
import _mod5700 from "module_5700" /* 5700 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5701 */;
import react_nativeDefault from "react-native" /* 5702 */;
import _mod5703 from "module_5703" /* 5703 */;
import autoScroll from "autoScroll" /* 5704 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5705 */;
import _mod5707 from "module_5707" /* 5707 */;
import _mod5708 from "module_5708" /* 5708 */;
import _mod5709 from "module_5709" /* 5709 */;
import react2 from "react" /* 5710 */;
import _modDef5711 from "module_5711" /* 5711 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5712 */;
import react_native from "react-native" /* 5639 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5700.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5703.useBenchmark;
  exports.BenchmarkParams = _mod5703.BenchmarkParams;
  exports.BenchmarkResult = _mod5703.BenchmarkResult;
  exports.useDataMultiplier = _mod5707.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5708.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5708.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5661.useLayoutState;
  exports.useRecyclingState = _mod5709.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5711;
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
