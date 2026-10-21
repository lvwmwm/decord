// Module ID: 5476
// Function ID: 5477
// Dependencies: [5477, 5478, 5479, 5538, 5539, 5540, 5541, 5545, 5546, 5499, 5547, 5548, 5543, 5542, 5549, 5500, 5550]

// Module 5476
import ErrorMessages from "ErrorMessages" /* 5478 */;
import FlashList from "FlashList" /* 5479 */;
import _mod5499 from "module_5499" /* 5499 */;
import react from "react" /* 5500 */;
import _mod5538 from "module_5538" /* 5538 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5539 */;
import react_nativeDefault from "react-native" /* 5540 */;
import _mod5541 from "module_5541" /* 5541 */;
import autoScroll from "autoScroll" /* 5542 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5543 */;
import _mod5545 from "module_5545" /* 5545 */;
import _mod5546 from "module_5546" /* 5546 */;
import _mod5547 from "module_5547" /* 5547 */;
import react2 from "react" /* 5548 */;
import _modDef5549 from "module_5549" /* 5549 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5550 */;
import react_native from "react-native" /* 5477 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5538.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5541.useBenchmark;
  exports.BenchmarkParams = _mod5541.BenchmarkParams;
  exports.BenchmarkResult = _mod5541.BenchmarkResult;
  exports.useDataMultiplier = _mod5545.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5546.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5546.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5499.useLayoutState;
  exports.useRecyclingState = _mod5547.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5549;
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
