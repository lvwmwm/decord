// Module ID: 5480
// Function ID: 5481
// Dependencies: [5481, 5482, 5483, 5542, 5543, 5544, 5545, 5549, 5550, 5503, 5551, 5552, 5547, 5546, 5553, 5504, 5554]

// Module 5480
import ErrorMessages from "ErrorMessages" /* 5482 */;
import FlashList from "FlashList" /* 5483 */;
import _mod5503 from "module_5503" /* 5503 */;
import react from "react" /* 5504 */;
import _mod5542 from "module_5542" /* 5542 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5543 */;
import react_nativeDefault from "react-native" /* 5544 */;
import _mod5545 from "module_5545" /* 5545 */;
import autoScroll from "autoScroll" /* 5546 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5547 */;
import _mod5549 from "module_5549" /* 5549 */;
import _mod5550 from "module_5550" /* 5550 */;
import _mod5551 from "module_5551" /* 5551 */;
import react2 from "react" /* 5552 */;
import _modDef5553 from "module_5553" /* 5553 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5554 */;
import react_native from "react-native" /* 5481 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5542.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5545.useBenchmark;
  exports.BenchmarkParams = _mod5545.BenchmarkParams;
  exports.BenchmarkResult = _mod5545.BenchmarkResult;
  exports.useDataMultiplier = _mod5549.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5550.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5550.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5503.useLayoutState;
  exports.useRecyclingState = _mod5551.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5553;
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
