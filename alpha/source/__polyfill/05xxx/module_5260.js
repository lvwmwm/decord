// Module ID: 5260
// Function ID: 5261
// Dependencies: [5261, 5262, 5263, 5322, 5323, 5324, 5325, 5329, 5330, 5283, 5331, 5332, 5327, 5326, 5333, 5284, 5334]

// Module 5260
import ErrorMessages from "ErrorMessages" /* 5262 */;
import FlashList from "FlashList" /* 5263 */;
import _mod5283 from "module_5283" /* 5283 */;
import react from "react" /* 5284 */;
import _mod5322 from "module_5322" /* 5322 */;
import RenderTargetOptions from "RenderTargetOptions" /* 5323 */;
import react_nativeDefault from "react-native" /* 5324 */;
import _mod5325 from "module_5325" /* 5325 */;
import autoScroll from "autoScroll" /* 5326 */;
import JSFPSMonitor from "JSFPSMonitor" /* 5327 */;
import _mod5329 from "module_5329" /* 5329 */;
import _mod5330 from "module_5330" /* 5330 */;
import _mod5331 from "module_5331" /* 5331 */;
import react2 from "react" /* 5332 */;
import _modDef5333 from "module_5333" /* 5333 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 5334 */;
import react_native from "react-native" /* 5261 */;

if (react_native.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod5322.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = react_nativeDefault;
  exports.useBenchmark = _mod5325.useBenchmark;
  exports.BenchmarkParams = _mod5325.BenchmarkParams;
  exports.BenchmarkResult = _mod5325.BenchmarkResult;
  exports.useDataMultiplier = _mod5329.useDataMultiplier;
  exports.useFlatListBenchmark = _mod5330.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = _mod5330.FlatListBenchmarkParams;
  exports.useLayoutState = _mod5283.useLayoutState;
  exports.useRecyclingState = _mod5331.useRecyclingState;
  exports.useMappingHelper = react2.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = autoScroll.autoScroll;
  exports.Cancellable = autoScroll.Cancellable;
  exports.ViewToken = _modDef5333;
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
