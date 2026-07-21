// Module ID: 7012
// Function ID: 56243
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7012 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleSummarizeThreadFinish() {
  let closure_5 = false;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = false;
let tmp2 = (Store) => {
  class ThreadSummaryStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = ThreadSummaryStore(this, ThreadSummaryStore);
      items1 = [...items];
      obj = closure_3(ThreadSummaryStore);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items1, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.summaryInProgress = false;
      return tmp2Result;
    }
  }
  let closure_0 = ThreadSummaryStore;
  callback2(ThreadSummaryStore, Store);
  let obj = {
    key: "initialize",
    value() {
      let closure_5 = false;
    }
  };
  const items = [obj, ];
  obj = {
    key: "isInProgress",
    value() {
      return closure_5;
    }
  };
  items[1] = obj;
  return callback(ThreadSummaryStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "ThreadSummaryStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  SUMMARIZE_THREAD_START: function handleSummarizeThreadStart() {
    let closure_5 = true;
  },
  SUMMARIZE_THREAD_SUCCESS: handleSummarizeThreadFinish,
  SUMMARIZE_THREAD_FAILURE: handleSummarizeThreadFinish
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/threads/ThreadSummaryStore.tsx");

export default tmp2;
