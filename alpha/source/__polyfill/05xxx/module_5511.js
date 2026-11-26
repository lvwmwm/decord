// Module ID: 5511
// Function ID: 5512
// Dependencies: [5512, 5513, 5514, 5573, 5574, 5575, 5576, 5580, 5581, 5534, 5582, 5583, 5578, 5577, 5584, 5535, 5585]

// Module 5511
import ErrorMessages from "ErrorMessages" /* 5513 */;
import FlashList from "FlashList" /* 5514 */;
import _mod5534 from "module_5534" /* 5534 */;
import react from "react" /* 5535 */;
import _mod5573 from "module_5573" /* 5573 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5574 */;
import react_nativeDefault from "react-native" /* 5575 */;
import _mod5576 from "module_5576" /* 5576 */;
import autoScroll from "autoScroll" /* 5577 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5578 */;
import _mod5580 from "module_5580" /* 5580 */;
import _mod5581 from "module_5581" /* 5581 */;
import _mod5582 from "module_5582" /* 5582 */;
import react2 from "react" /* 5583 */;
import _modDef5584 from "module_5584" /* 5584 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5585 */;
import react_native from "react-native" /* 5512 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5573.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5576.useBenchmark;
  exports.BenchmarkParams = _mod5576.BenchmarkParams;
  exports.BenchmarkResult = _mod5576.BenchmarkResult;
  exports.useDataMultiplier = _mod5580.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5581.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5581.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5534.useLayoutState;
  exports.useRecyclingState = _mod5582.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5584;
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
