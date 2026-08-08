// Module ID: 7235
// Function ID: 7236
// Name: handleSummarizeThreadFinish
// Dependencies: [589, 709, 2]

// Module 7235 (handleSummarizeThreadFinish)
import { Store } from "initialize";

function handleSummarizeThreadFinish() {
  let c0 = false;
}
let c0 = false;
class ThreadSummaryStore extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.summaryInProgress = false;
    return applyArgumentsResult;
  }
}
const prototype = ThreadSummaryStore.prototype;
prototype["initialize"] = function initialize() {
  let c0 = false;
};
prototype["isInProgress"] = function isInProgress() {
  return c0;
};
ThreadSummaryStore.displayName = "ThreadSummaryStore";
const threadSummaryStore = new ThreadSummaryStore(require("dispatcher"), {
  SUMMARIZE_THREAD_START: function handleSummarizeThreadStart() {
    let c0 = true;
  },
  SUMMARIZE_THREAD_SUCCESS: handleSummarizeThreadFinish,
  SUMMARIZE_THREAD_FAILURE: handleSummarizeThreadFinish
});
const result = require("set").fileFinishedImporting("modules/threads/ThreadSummaryStore.tsx");

export default threadSummaryStore;
