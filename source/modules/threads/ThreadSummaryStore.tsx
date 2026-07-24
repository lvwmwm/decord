// Module ID: 7017
// Function ID: 56309
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 7017 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
function handleSummarizeThreadFinish() {
  let c5 = false;
}
let c5 = false;
let tmp2 = ((Store) => {
  class ThreadSummaryStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = ThreadSummaryStore(this, ThreadSummaryStore);
      items1 = [...items];
      obj = outer1_3(ThreadSummaryStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items1, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.summaryInProgress = false;
      return tmp2Result;
    }
  }
  callback2(ThreadSummaryStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const outer1_5 = false;
    }
  };
  let items = [obj, ];
  obj = {
    key: "isInProgress",
    value() {
      return outer1_5;
    }
  };
  items[1] = obj;
  return callback(ThreadSummaryStore, items);
})(require("initialize").Store);
tmp2.displayName = "ThreadSummaryStore";
tmp2 = new tmp2(require("dispatcher"), {
  SUMMARIZE_THREAD_START: function handleSummarizeThreadStart() {
    let c5 = true;
  },
  SUMMARIZE_THREAD_SUCCESS: handleSummarizeThreadFinish,
  SUMMARIZE_THREAD_FAILURE: handleSummarizeThreadFinish
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/threads/ThreadSummaryStore.tsx");

export default tmp2;
