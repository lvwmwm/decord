// Module ID: 1102
// Function ID: 12586
// Name: processEvent
// Dependencies: []
// Exports: viewHierarchyIntegration

// Module 1102 (processEvent)
function processEvent(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  return fn(this, undefined, undefined, function*() {
    let attachments;
    const exception = lib.exception;
    let values;
    if (null !== exception) {
      if (undefined !== exception) {
        values = exception.values;
      }
    }
    if (values) {
      if (lib.exception.values.length > 0) {
        const NATIVE = lib(attachments[1]).NATIVE;
        const tmp8 = yield NATIVE.fetchViewHierarchy();
        while (true) {
          let tmp10 = tmp8;
          if (!tmp9) {
            break;
          } else {
            let obj = {};
            let tmp12 = closure_4;
            obj.filename = closure_4;
            let tmp13 = closure_5;
            obj.contentType = closure_5;
            let tmp14 = closure_6;
            obj.attachmentType = closure_6;
            obj.data = tmp8;
            let items = [obj];
            attachments = undefined;
            let tmp11 = attachments;
            let tmp15 = exception;
            if (null != attachments) {
              let tmp17 = attachments;
              attachments = attachments.attachments;
            }
            let items1 = attachments;
            if (!attachments) {
              items1 = [];
            }
            tmp11.attachments = items.concat(tmp15(items1));
            // break
          }
          let tmp18 = lib;
          return lib;
        }
      }
    }
    return lib;
  });
}
let closure_2 = importDefault(dependencyMap[0]);
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let _Promise = arg2;
    arg1 = arg0;
    const dependencyMap = arg1;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      function fulfilled(arg0) {
        step(iter.next(arg0));
      }
      let arg3 = function rejected(arg0) {
        step(iter.throw(arg0));
      };
      function step(iter) {
        if (iter.done) {
          iter(iter.value);
        } else {
          function adopt(value) {
            let tmp = value;
            if (!(value instanceof ctor)) {
              const prototype = ctor.prototype;
              tmp = new ctor((arg0) => {
                arg0(arg0);
              });
            }
            return tmp;
          }(iter.value).then(fulfilled, iter);
          const promise = function adopt(value) {
            let tmp = value;
            if (!(value instanceof ctor)) {
              const prototype = ctor.prototype;
              tmp = new ctor((arg0) => {
                arg0(arg0);
              });
            }
            return tmp;
          }(iter.value);
        }
      }
      let items = arg1;
      if (!arg1) {
        items = [];
      }
      const iter = arg3.apply(arg0, items);
      arg3 = iter;
      step(iter.next());
    });
    return _Promise;
  };
}
let closure_4 = "view-hierarchy.json";
let closure_5 = "application/json";
let closure_6 = "event.view_hierarchy";

export const viewHierarchyIntegration = function viewHierarchyIntegration() {
  return {
    name: "ViewHierarchy",
    setupOnce() {

    },
    processEvent
  };
};
