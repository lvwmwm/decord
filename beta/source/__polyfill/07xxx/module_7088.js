// Module ID: 7088
// Function ID: 7089
// Dependencies: [7089, 7090, 7091, 7150, 7151, 7152, 7153, 7157, 7158, 7111, 7159, 7160, 7155, 7154, 7161, 7112, 7162]

// Module 7088
import ErrorMessages from "ErrorMessages" /* 7090 */;
import FlashList from "FlashList" /* 7091 */;
import _mod7111 from "module_7111" /* 7111 */;
import _mod7112 from "module_7112" /* 7112 */;
import _mod7150 from "module_7150" /* 7150 */;
import RenderTargetOptions from "RenderTargetOptions" /* 7151 */;
import _modDef7152 from "module_7152" /* 7152 */;
import _mod7153 from "module_7153" /* 7153 */;
import Cancellable from "Cancellable" /* 7154 */;
import JSFPSMonitor from "JSFPSMonitor" /* 7155 */;
import _mod7157 from "module_7157" /* 7157 */;
import runScrollBenchmark from "runScrollBenchmark" /* 7158 */;
import _mod7159 from "module_7159" /* 7159 */;
import _mod7160 from "module_7160" /* 7160 */;
import _modDef7161 from "module_7161" /* 7161 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 7162 */;
import get_ActivityIndicator from "module_7089" /* 7089 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod7150.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef7152;
  exports.useBenchmark = _mod7153.useBenchmark;
  exports.BenchmarkParams = _mod7153.BenchmarkParams;
  exports.BenchmarkResult = _mod7153.BenchmarkResult;
  exports.useDataMultiplier = _mod7157.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod7111.useLayoutState;
  exports.useRecyclingState = _mod7159.useRecyclingState;
  exports.useMappingHelper = _mod7160.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef7161;
  exports.useFlashListContext = _mod7112.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
