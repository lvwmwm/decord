// Module ID: 9520
// Function ID: 74097
// Name: fetchSummary
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: deleteSummary, fetchSummaries, setHighlightedSummary, setSelectedSummary, setSummaryFeedback, stopPolling, toggleTopicsBar, updateVisibleMessages, useChannelSummaries

// Module 9520 (fetchSummary)
import __exportStarResult1 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";
import closure_6 from "__exportStarResult1";
import closure_7 from "__exportStarResult1";
import { Routes } from "__exportStarResult1";

function fetchSummary(channelId, summaryId) {
  return _fetchSummary(...arguments);
}
function _fetchSummary() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchSummary = obj;
  return obj(...arguments);
}
function fetchSummaries(channelId) {
  return _fetchSummaries(...arguments);
}
function _fetchSummaries() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchSummaries = obj;
  return obj(...arguments);
}
function setHighlightedSummary(channelId) {
  let obj = importDefault(dependencyMap[7]);
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
  let obj = importDefault(dependencyMap[7]);
  obj = { type: "SET_SELECTED_SUMMARY", channelId };
  let tmp4 = null;
  if (null != summaryId) {
    tmp4 = summaryId;
  }
  obj.summaryId = tmp4;
  obj.dispatch(obj);
}
function updateVisibleMessages(arg0, arg1) {
  let obj = importDefault(dependencyMap[7]);
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
  if (null == closure_10[arg0]) {
    closure_10[arg0] = 0;
  }
  if (null === arg1) {
    closure_10[arg0] = 0;
  } else {
    closure_10[arg0] = closure_10[arg0] + arg1;
  }
  return closure_10[arg0];
}
function setSummaryFeedback(summary, rating) {
  let obj = importDefault(dependencyMap[7]);
  obj = { type: "SET_SUMMARY_FEEDBACK", summary, rating };
  obj.dispatch(obj);
}
function fetchChannelAffinities() {
  return _fetchChannelAffinities(...arguments);
}
function _fetchChannelAffinities() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchChannelAffinities = obj;
  return obj(...arguments);
}
function fetchSummariesBulk() {
  return _fetchSummariesBulk(...arguments);
}
function _fetchSummariesBulk() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchSummariesBulk = obj;
  return obj(...arguments);
}
function useMaybeFetchChannelAffinitiesAndSummaries(channelIds) {
  let items = channelIds;
  if (channelIds === undefined) {
    items = [];
  }
  const arg1 = items;
  let importDefault;
  let dependencyMap;
  const items1 = [closure_5];
  const stateFromStores = arg1(dependencyMap[12]).useStateFromStores(items1, () => connected.isConnected());
  importDefault = stateFromStores;
  const items2 = [items];
  const memo = React.useMemo(() => items.join(","), items2);
  dependencyMap = memo;
  const items3 = [memo, stateFromStores];
  const effect = React.useEffect(() => {
    function _fetch() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _fetch = obj;
      return obj(...arguments);
    }
    if (stateFromStores) {
      function fetch() {
        return _fetch(...arguments);
      }();
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
  return arg1(dependencyMap[12]).useStateFromStoresArray(items, () => closure_7.topSummaries(), []);
}
function deleteSummary(arg0) {
  return _deleteSummary(...arguments);
}
function _deleteSummary() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _deleteSummary = obj;
  return obj(...arguments);
}
let closure_9 = 30 * require("__exportStarResult1").Millis.SECOND;
let closure_10 = {};
let closure_11 = {};
const result = require("__exportStarResult1").fileFinishedImporting("modules/summaries/SummaryActionCreators.tsx");

export default { setSummaryFeedback, updateVisibleMessages, setSelectedSummary, setHighlightedSummary, fetchSummaries, fetchSummariesBulk, useChannelSummaries, deleteSummary };
export { fetchSummary };
export { fetchSummaries };
export { setHighlightedSummary };
export const toggleTopicsBar = function toggleTopicsBar() {
  importDefault(dependencyMap[7]).dispatch({ type: "TOGGLE_TOPICS_BAR" });
};
export { setSelectedSummary };
export { updateVisibleMessages };
export const stopPolling = function stopPolling(arg0) {
  if (updateCount(arg0, -1) <= 0) {
    updateCount(arg0, 0);
    const _clearInterval = clearInterval;
    clearInterval(closure_11[arg0]);
  }
};
export { setSummaryFeedback };
export { fetchChannelAffinities };
export { fetchSummariesBulk };
export { useMaybeFetchChannelAffinitiesAndSummaries };
export { useChannelSummaries };
export { deleteSummary };
