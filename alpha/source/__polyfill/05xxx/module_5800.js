// Module ID: 5800
// Function ID: 5801
// Dependencies: [5801, 5802, 5803, 5862, 5863, 5864, 5865, 5869, 5870, 5823, 5871, 5872, 5867, 5866, 5873, 5824, 5874]

// Module 5800
import ErrorMessages from "ErrorMessages" /* 5802 */;
import FlashList from "FlashList" /* 5803 */;
import _mod5823 from "module_5823" /* 5823 */;
import react from "react" /* 5824 */;
import _mod5862 from "module_5862" /* 5862 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5863 */;
import react_nativeDefault from "react-native" /* 5864 */;
import _mod5865 from "module_5865" /* 5865 */;
import autoScroll from "autoScroll" /* 5866 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5867 */;
import _mod5869 from "module_5869" /* 5869 */;
import _mod5870 from "module_5870" /* 5870 */;
import _mod5871 from "module_5871" /* 5871 */;
import react2 from "react" /* 5872 */;
import _modDef5873 from "module_5873" /* 5873 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5874 */;
import react_native from "react-native" /* 5801 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5862.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5865.useBenchmark;
  exports.BenchmarkParams = _mod5865.BenchmarkParams;
  exports.BenchmarkResult = _mod5865.BenchmarkResult;
  exports.useDataMultiplier = _mod5869.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5870.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5870.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5823.useLayoutState;
  exports.useRecyclingState = _mod5871.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5873;
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
