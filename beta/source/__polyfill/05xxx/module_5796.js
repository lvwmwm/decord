// Module ID: 5796
// Function ID: 5797
// Dependencies: [5797, 5798, 5799, 5858, 5859, 5860, 5861, 5865, 5866, 5819, 5867, 5868, 5863, 5862, 5869, 5820, 5870]

// Module 5796
import ErrorMessages from "ErrorMessages" /* 5798 */;
import FlashList from "FlashList" /* 5799 */;
import _mod5819 from "module_5819" /* 5819 */;
import react from "react" /* 5820 */;
import _mod5858 from "module_5858" /* 5858 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5859 */;
import react_nativeDefault from "react-native" /* 5860 */;
import _mod5861 from "module_5861" /* 5861 */;
import autoScroll from "autoScroll" /* 5862 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5863 */;
import _mod5865 from "module_5865" /* 5865 */;
import _mod5866 from "module_5866" /* 5866 */;
import _mod5867 from "module_5867" /* 5867 */;
import react2 from "react" /* 5868 */;
import _modDef5869 from "module_5869" /* 5869 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5870 */;
import react_native from "react-native" /* 5797 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5858.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5861.useBenchmark;
  exports.BenchmarkParams = _mod5861.BenchmarkParams;
  exports.BenchmarkResult = _mod5861.BenchmarkResult;
  exports.useDataMultiplier = _mod5865.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5866.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5866.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5819.useLayoutState;
  exports.useRecyclingState = _mod5867.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5869;
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
