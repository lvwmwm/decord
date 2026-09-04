// Module ID: 6792
// Function ID: 6793
// Dependencies: [6793, 6794, 6795, 6854, 6855, 6856, 6857, 6861, 6862, 6815, 6863, 6864, 6859, 6858, 6865, 6816, 6866]

// Module 6792
import _mod6794 from "module_6794" /* 6794 */;
import FlashList from "FlashList" /* 6795 */;
import useLayoutState from "useLayoutState" /* 6815 */;
import context from "context" /* 6816 */;
import _mod6854 from "module_6854" /* 6854 */;
import _mod6855 from "module_6855" /* 6855 */;
import FlashListDefault from "FlashList" /* 6856 */;
import getFormattedString from "getFormattedString" /* 6857 */;
import Cancellable from "Cancellable" /* 6858 */;
import JSFPSMonitor from "JSFPSMonitor" /* 6859 */;
import useDataMultiplier from "useDataMultiplier" /* 6861 */;
import runScrollBenchmark from "runScrollBenchmark" /* 6862 */;
import useRecyclingState from "useRecyclingState" /* 6863 */;
import useMappingHelper from "useMappingHelper" /* 6864 */;
import _modDef6865 from "module_6865" /* 6865 */;
import LayoutCommitObserver from "LayoutCommitObserver" /* 6866 */;
import isNewArch from "isNewArch" /* 6793 */;

if (isNewArch.isNewArch()) {
  exports.FlashList = FlashList.FlashList;
  exports.FlashListRef = _mod6854.FlashListRef;
  exports.FlashListProps = _mod6855.FlashListProps;
  exports.ListRenderItem = _mod6855.ListRenderItem;
  exports.ListRenderItemInfo = _mod6855.ListRenderItemInfo;
  exports.RenderTarget = _mod6855.RenderTarget;
  exports.RenderTargetOptions = _mod6855.RenderTargetOptions;
  exports.AnimatedFlashList = FlashListDefault;
  exports.useBenchmark = getFormattedString.useBenchmark;
  exports.BenchmarkParams = getFormattedString.BenchmarkParams;
  exports.BenchmarkResult = getFormattedString.BenchmarkResult;
  exports.useDataMultiplier = useDataMultiplier.useDataMultiplier;
  exports.useFlatListBenchmark = runScrollBenchmark.useFlatListBenchmark;
  exports.FlatListBenchmarkParams = runScrollBenchmark.FlatListBenchmarkParams;
  exports.useLayoutState = useLayoutState.useLayoutState;
  exports.useRecyclingState = useRecyclingState.useRecyclingState;
  exports.useMappingHelper = useMappingHelper.useMappingHelper;
  exports.JSFPSMonitor = JSFPSMonitor.JSFPSMonitor;
  exports.JSFPSResult = JSFPSMonitor.JSFPSResult;
  exports.autoScroll = Cancellable.autoScroll;
  exports.Cancellable = Cancellable.Cancellable;
  exports.ViewToken = _modDef6865;
  exports.useFlashListContext = context.useFlashListContext;
  exports.LayoutCommitObserver = LayoutCommitObserver.LayoutCommitObserver;
  exports.LayoutCommitObserverProps = LayoutCommitObserver.LayoutCommitObserverProps;
} else {
  const _Error = Error;
  const error = new Error(_mod6794.ErrorMessages.flashListV2OnlySupportsNewArchitecture);
  throw error;
}
