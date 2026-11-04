// Module ID: 5636
// Function ID: 5637
// Dependencies: [5637, 5638, 5639, 5698, 5699, 5700, 5701, 5705, 5706, 5659, 5707, 5708, 5703, 5702, 5709, 5660, 5710]

// Module 5636
import ErrorMessages from "ErrorMessages" /* 5638 */;
import FlashList from "FlashList" /* 5639 */;
import _mod5659 from "module_5659" /* 5659 */;
import react from "react" /* 5660 */;
import _mod5698 from "module_5698" /* 5698 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5699 */;
import react_nativeDefault from "react-native" /* 5700 */;
import _mod5701 from "module_5701" /* 5701 */;
import autoScroll from "autoScroll" /* 5702 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5703 */;
import _mod5705 from "module_5705" /* 5705 */;
import _mod5706 from "module_5706" /* 5706 */;
import _mod5707 from "module_5707" /* 5707 */;
import react2 from "react" /* 5708 */;
import _modDef5709 from "module_5709" /* 5709 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5710 */;
import react_native from "react-native" /* 5637 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5698.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5701.useBenchmark;
  exports.BenchmarkParams = _mod5701.BenchmarkParams;
  exports.BenchmarkResult = _mod5701.BenchmarkResult;
  exports.useDataMultiplier = _mod5705.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5706.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5706.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5659.useLayoutState;
  exports.useRecyclingState = _mod5707.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5709;
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
