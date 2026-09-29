// Module ID: 7126
// Function ID: 7127
// Dependencies: [7127, 7128, 7129, 7188, 7189, 7190, 7191, 7195, 7196, 7149, 7197, 7198, 7193, 7192, 7199, 7150, 7200]

// Module 7126
import ErrorMessages from "ErrorMessages" /* 7128 */;
import FlashList from "FlashList" /* 7129 */;
import _mod7149 from "module_7149" /* 7149 */;
import _mod7150 from "module_7150" /* 7150 */;
import _mod7188 from "module_7188" /* 7188 */;
import RenderTargetOptions from "RenderTargetOptions" /* 7189 */;
import _modDef7190 from "module_7190" /* 7190 */;
import _mod7191 from "module_7191" /* 7191 */;
import Cancellable from "Cancellable" /* 7192 */;
import JSFPSMonitor from "JSFPSMonitor" /* 7193 */;
import _mod7195 from "module_7195" /* 7195 */;
import runScrollBenchmark from "runScrollBenchmark" /* 7196 */;
import _mod7197 from "module_7197" /* 7197 */;
import _mod7198 from "module_7198" /* 7198 */;
import _modDef7199 from "module_7199" /* 7199 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 7200 */;
import get_ActivityIndicator from "module_7127" /* 7127 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod7188.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef7190;
  exports.useBenchmark = _mod7191.useBenchmark;
  exports.BenchmarkParams = _mod7191.BenchmarkParams;
  exports.BenchmarkResult = _mod7191.BenchmarkResult;
  exports.useDataMultiplier = _mod7195.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod7149.useLayoutState;
  exports.useRecyclingState = _mod7197.useRecyclingState;
  exports.useMappingHelper = _mod7198.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef7199;
  exports.useFlashListContext = _mod7150.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
