// Module ID: 9527
// Function ID: 74138
// Name: fetchSummary
// Dependencies: [5, 31, 4808, 1348, 9484, 653, 664, 686, 507, 4029, 22, 9486, 624, 2]
// Exports: deleteSummary, fetchSummaries, setHighlightedSummary, setSelectedSummary, setSummaryFeedback, stopPolling, toggleTopicsBar, updateVisibleMessages, useChannelSummaries

// Module 9527 (fetchSummary)
import ME from "ME";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { Routes } from "ME";

const require = arg1;
function fetchSummary(channelId, summaryId) {
  return _fetchSummary(...arguments);
}
function _fetchSummary() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function fetchSummaries(channelId) {
  return _fetchSummaries(...arguments);
}
function _fetchSummaries() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function setHighlightedSummary(channelId) {
  let obj = importDefault(686);
  obj = { type: "SET_HIGHLIGHTED_SUMMARY", channelId };
  let tmp = null;
  if (null != arg1) {
    tmp = arg1;
  }
  obj.summaryId = tmp;
  obj.dispatch(obj);
}
function setSelectedSummary(channelId, summaryId) {
  if (tmp) {
    fetchSummary(channelId, summaryId);
  }
  let obj = importDefault(686);
  obj = { type: "SET_SELECTED_SUMMARY", channelId };
  let tmp4 = null;
  if (null != summaryId) {
    tmp4 = summaryId;
  }
  obj.summaryId = tmp4;
  obj.dispatch(obj);
}
function updateVisibleMessages(arg0, arg1) {
  let obj = importDefault(686);
  obj = { type: "UPDATE_VISIBLE_MESSAGES" };
  let tmp = null;
  if (null != arg0) {
    tmp = arg0;
  }
  obj.topVisibleMessage = tmp;
  let tmp2 = null;
  if (null != arg1) {
    tmp2 = arg1;
  }
  obj.bottomVisibleMessage = tmp2;
  obj.dispatch(obj);
}
function updateCount(arg0, arg1) {
  if (null == dependencyMap[arg0]) {
    dependencyMap[arg0] = 0;
  }
  if (null === arg1) {
    dependencyMap[arg0] = 0;
  } else {
    dependencyMap[arg0] = dependencyMap[arg0] + arg1;
  }
  return dependencyMap[arg0];
}
function setSummaryFeedback(summary, rating) {
  let obj = importDefault(686);
  obj = { type: "SET_SUMMARY_FEEDBACK", summary, rating };
  obj.dispatch(obj);
}
function fetchChannelAffinities() {
  return _fetchChannelAffinities(...arguments);
}
function _fetchChannelAffinities() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function fetchSummariesBulk() {
  return _fetchSummariesBulk(...arguments);
}
function _fetchSummariesBulk() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function useMaybeFetchChannelAffinitiesAndSummaries(channelIds) {
  let items = channelIds;
  if (channelIds === undefined) {
    items = [];
  }
  let stateFromStores;
  let memo;
  const items1 = [_isNativeReflectConstruct];
  stateFromStores = items(memo[12]).useStateFromStores(items1, () => outer1_5.isConnected());
  const items2 = [items];
  memo = React.useMemo(() => items.join(","), items2);
  const items3 = [memo, stateFromStores];
  const effect = React.useEffect(() => {
    function _fetch() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = outer2_3(tmp);
      return obj(...arguments);
    }
    if (stateFromStores) {
      (function fetch() {
        return _fetch(...arguments);
      })();
    }
  }, items3);
}
function useChannelSummaries(channelIds) {
  channelIds = channelIds.channelIds;
  if (channelIds === undefined) {
    channelIds = [];
  }
  useMaybeFetchChannelAffinitiesAndSummaries(channelIds);
  const items = [closure_7];
  return require(624) /* defaultAreStatesEqual */.useStateFromStoresArray(items, () => outer1_7.topSummaries(), []);
}
function deleteSummary(arg0) {
  return _deleteSummary(...arguments);
}
function _deleteSummary() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let closure_9 = 30 * require("set").Millis.SECOND;
let closure_10 = {};
let closure_11 = {};
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/summaries/SummaryActionCreators.tsx");

export default { setSummaryFeedback, updateVisibleMessages, setSelectedSummary, setHighlightedSummary, fetchSummaries, fetchSummariesBulk, useChannelSummaries, deleteSummary };
export { fetchSummary };
export { fetchSummaries };
export { setHighlightedSummary };
export const toggleTopicsBar = function toggleTopicsBar() {
  importDefault(686).dispatch({ type: "TOGGLE_TOPICS_BAR" });
};
export { setSelectedSummary };
export { updateVisibleMessages };
export const stopPolling = function stopPolling(arg0) {
  if (updateCount(arg0, -1) <= 0) {
    updateCount(arg0, 0);
    const _clearInterval = clearInterval;
    clearInterval(table[arg0]);
  }
};
export { setSummaryFeedback };
export { fetchChannelAffinities };
export { fetchSummariesBulk };
export { useMaybeFetchChannelAffinitiesAndSummaries };
export { useChannelSummaries };
export { deleteSummary };
