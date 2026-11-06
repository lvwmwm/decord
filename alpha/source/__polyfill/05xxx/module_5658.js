// Module ID: 5658
// Function ID: 5659
// Dependencies: [5659, 5660, 5661, 5720, 5721, 5722, 5723, 5727, 5728, 5681, 5729, 5730, 5725, 5724, 5731, 5682, 5732]

// Module 5658
import ErrorMessages from "ErrorMessages" /* 5660 */;
import FlashList from "FlashList" /* 5661 */;
import _mod5681 from "module_5681" /* 5681 */;
import react from "react" /* 5682 */;
import _mod5720 from "module_5720" /* 5720 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5721 */;
import react_nativeDefault from "react-native" /* 5722 */;
import _mod5723 from "module_5723" /* 5723 */;
import autoScroll from "autoScroll" /* 5724 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5725 */;
import _mod5727 from "module_5727" /* 5727 */;
import _mod5728 from "module_5728" /* 5728 */;
import _mod5729 from "module_5729" /* 5729 */;
import react2 from "react" /* 5730 */;
import _modDef5731 from "module_5731" /* 5731 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5732 */;
import react_native from "react-native" /* 5659 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5720.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5723.useBenchmark;
  exports.BenchmarkParams = _mod5723.BenchmarkParams;
  exports.BenchmarkResult = _mod5723.BenchmarkResult;
  exports.useDataMultiplier = _mod5727.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5728.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5728.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5681.useLayoutState;
  exports.useRecyclingState = _mod5729.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5731;
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
