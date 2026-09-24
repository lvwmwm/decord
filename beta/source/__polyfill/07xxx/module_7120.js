// Module ID: 7120
// Function ID: 7121
// Dependencies: [7121, 7122, 7123, 7182, 7183, 7184, 7185, 7189, 7190, 7143, 7191, 7192, 7187, 7186, 7193, 7144, 7194]

// Module 7120
import ErrorMessages from "ErrorMessages" /* 7122 */;
import FlashList from "FlashList" /* 7123 */;
import _mod7143 from "module_7143" /* 7143 */;
import _mod7144 from "module_7144" /* 7144 */;
import _mod7182 from "module_7182" /* 7182 */;
import RenderTargetOptions from "RenderTargetOptions" /* 7183 */;
import _modDef7184 from "module_7184" /* 7184 */;
import _mod7185 from "module_7185" /* 7185 */;
import Cancellable from "Cancellable" /* 7186 */;
import JSFPSMonitor from "JSFPSMonitor" /* 7187 */;
import _mod7189 from "module_7189" /* 7189 */;
import runScrollBenchmark from "runScrollBenchmark" /* 7190 */;
import _mod7191 from "module_7191" /* 7191 */;
import _mod7192 from "module_7192" /* 7192 */;
import _modDef7193 from "module_7193" /* 7193 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 7194 */;
import get_ActivityIndicator from "module_7121" /* 7121 */;

if (get_ActivityIndicator.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod7182.FlashListRef;
  exports.FlashListProps = RenderTargetOptions.FlashListProps;
  exports.ListRenderItem = RenderTargetOptions.ListRenderItem;
  exports.ListRenderItemInfo = RenderTargetOptions.ListRenderItemInfo;
  exports.RenderTarget = RenderTargetOptions.RenderTarget;
  exports.RenderTargetOptions = RenderTargetOptions.RenderTargetOptions;
  exports.AnimatedFlashList = _modDef7184;
  exports.useBenchmark = _mod7185.useBenchmark;
  exports.BenchmarkParams = _mod7185.BenchmarkParams;
  exports.BenchmarkResult = _mod7185.BenchmarkResult;
  exports.useDataMultiplier = _mod7189.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = _mod7143.useLayoutState;
  exports.useRecyclingState = _mod7191.useRecyclingState;
  exports.useMappingHelper = _mod7192.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef7193;
  exports.useFlashListContext = _mod7144.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(ErrorMessages.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
