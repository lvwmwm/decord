// Module ID: 5623
// Function ID: 5624
// Dependencies: [5624, 5625, 5626, 5685, 5686, 5687, 5688, 5692, 5693, 5646, 5694, 5695, 5690, 5689, 5696, 5647, 5697]

// Module 5623
import ErrorMessages from "ErrorMessages" /* 5625 */;
import FlashList from "FlashList" /* 5626 */;
import _mod5646 from "module_5646" /* 5646 */;
import react from "react" /* 5647 */;
import _mod5685 from "module_5685" /* 5685 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5686 */;
import react_nativeDefault from "react-native" /* 5687 */;
import _mod5688 from "module_5688" /* 5688 */;
import autoScroll from "autoScroll" /* 5689 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5690 */;
import _mod5692 from "module_5692" /* 5692 */;
import _mod5693 from "module_5693" /* 5693 */;
import _mod5694 from "module_5694" /* 5694 */;
import react2 from "react" /* 5695 */;
import _modDef5696 from "module_5696" /* 5696 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5697 */;
import react_native from "react-native" /* 5624 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5685.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5688.useBenchmark;
  exports.BenchmarkParams = _mod5688.BenchmarkParams;
  exports.BenchmarkResult = _mod5688.BenchmarkResult;
  exports.useDataMultiplier = _mod5692.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5693.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5693.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5646.useLayoutState;
  exports.useRecyclingState = _mod5694.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5696;
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
