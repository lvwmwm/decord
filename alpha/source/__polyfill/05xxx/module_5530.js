// Module ID: 5530
// Function ID: 5531
// Dependencies: [5531, 5532, 5533, 5592, 5593, 5594, 5595, 5599, 5600, 5553, 5601, 5602, 5597, 5596, 5603, 5554, 5604]

// Module 5530
import ErrorMessages from "ErrorMessages" /* 5532 */;
import FlashList from "FlashList" /* 5533 */;
import _mod5553 from "module_5553" /* 5553 */;
import react from "react" /* 5554 */;
import _mod5592 from "module_5592" /* 5592 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5593 */;
import react_nativeDefault from "react-native" /* 5594 */;
import _mod5595 from "module_5595" /* 5595 */;
import autoScroll from "autoScroll" /* 5596 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5597 */;
import _mod5599 from "module_5599" /* 5599 */;
import _mod5600 from "module_5600" /* 5600 */;
import _mod5601 from "module_5601" /* 5601 */;
import react2 from "react" /* 5602 */;
import _modDef5603 from "module_5603" /* 5603 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5604 */;
import react_native from "react-native" /* 5531 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5592.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5595.useBenchmark;
  exports.BenchmarkParams = _mod5595.BenchmarkParams;
  exports.BenchmarkResult = _mod5595.BenchmarkResult;
  exports.useDataMultiplier = _mod5599.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5600.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5600.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5553.useLayoutState;
  exports.useRecyclingState = _mod5601.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5603;
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
