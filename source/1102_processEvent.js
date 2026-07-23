// Module ID: 1102
// Function ID: 12587
// Name: processEvent
// Dependencies: [65, 977, 794]
// Exports: viewHierarchyIntegration

// Module 1102 (processEvent)
import _toConsumableArray from "_toConsumableArray";

const require = arg1;
function processEvent(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return fn(this, undefined, undefined, function*() {
    const exception = outer1_0.exception;
    const outer1_2 = exception;
    let values;
    if (null !== exception) {
      if (undefined !== outer1_2) {
        values = outer1_2.values;
      }
    }
    if (values) {
      if (outer1_0.exception.values.length > 0) {
        const NATIVE = callback(table[1]).NATIVE;
        const tmp8 = yield NATIVE.fetchViewHierarchy();
        while (true) {
          let tmp10 = tmp8;
          if (!tmp9) {
            break;
          } else {
            let obj = {};
            let tmp12 = outer2_4;
            obj.filename = outer2_4;
            let tmp13 = outer2_5;
            obj.contentType = outer2_5;
            let tmp14 = outer2_6;
            obj.attachmentType = outer2_6;
            obj.data = tmp8;
            let items = [obj];
            let attachments;
            let tmp11 = outer1_1;
            let tmp15 = outer2_2;
            if (null != outer1_1) {
              let tmp17 = outer1_1;
              attachments = outer1_1.attachments;
            }
            let items1 = attachments;
            if (!attachments) {
              items1 = [];
            }
            tmp11.attachments = items.concat(tmp15(items1));
            break;
          }
          let tmp18 = outer1_0;
          return outer1_0;
        }
      }
    }
    return outer1_0;
  });
}
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let _Promise = arg2;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function fulfilled(arg0) {
        step(iter.next(arg0));
      }
      let iter = function rejected(arg0) {
        step(iter.throw(arg0));
      };
      function step(iter) {
        if (iter.done) {
          callback(iter.value);
        } else {
          (function adopt(value) {
            let tmp = value;
            let closure_0 = value;
            if (!(value instanceof fulfilled)) {
              const prototype = fulfilled.prototype;
              tmp = new fulfilled((arg0) => {
                arg0(closure_0);
              });
            }
            return tmp;
          })(iter.value).then(fulfilled, iter);
          const promise = (function adopt(value) {
            let tmp = value;
            let closure_0 = value;
            if (!(value instanceof fulfilled)) {
              const prototype = fulfilled.prototype;
              tmp = new fulfilled((arg0) => {
                arg0(closure_0);
              });
            }
            return tmp;
          })(iter.value);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      step(iter.next());
    });
    return _Promise;
  };
}
let c4 = "view-hierarchy.json";
let c5 = "application/json";
let c6 = "event.view_hierarchy";

export const viewHierarchyIntegration = function viewHierarchyIntegration() {
  return {
    name: "ViewHierarchy",
    setupOnce() {

    },
    processEvent
  };
};
