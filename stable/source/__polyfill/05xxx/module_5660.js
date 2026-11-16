// Module ID: 5660
// Function ID: 5661
// Dependencies: [5661, 5662, 5663, 5722, 5723, 5724, 5725, 5729, 5730, 5683, 5731, 5732, 5727, 5726, 5733, 5684, 5734]

// Module 5660
import ErrorMessages from "ErrorMessages" /* 5662 */;
import FlashList from "FlashList" /* 5663 */;
import _mod5683 from "module_5683" /* 5683 */;
import react from "react" /* 5684 */;
import _mod5722 from "module_5722" /* 5722 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5723 */;
import react_nativeDefault from "react-native" /* 5724 */;
import _mod5725 from "module_5725" /* 5725 */;
import autoScroll from "autoScroll" /* 5726 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5727 */;
import _mod5729 from "module_5729" /* 5729 */;
import _mod5730 from "module_5730" /* 5730 */;
import _mod5731 from "module_5731" /* 5731 */;
import react2 from "react" /* 5732 */;
import _modDef5733 from "module_5733" /* 5733 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5734 */;
import react_native from "react-native" /* 5661 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5722.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5725.useBenchmark;
  exports.BenchmarkParams = _mod5725.BenchmarkParams;
  exports.BenchmarkResult = _mod5725.BenchmarkResult;
  exports.useDataMultiplier = _mod5729.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5730.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5730.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5683.useLayoutState;
  exports.useRecyclingState = _mod5731.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5733;
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
