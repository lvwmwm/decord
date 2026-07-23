// Module ID: 13345
// Function ID: 102514
// Name: result4
// Dependencies: []

// Module 13345 (result4)
arg5.default = undefined;
let closure_0 = { url: "http://localhost:8081" };
arg5.default = function openInEditor() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let closure_0 = {};
    return () => {
      closure_0 = Object.assign({}, closure_0, closure_0);
      return {
        onCommand(type) {
          if ("editor.open" === type.type) {
            const payload = type.payload;
            let num = payload.lineNumber;
            const _HermesInternal = HermesInternal;
            let obj = { file: payload.file };
            const combined = "" + url.url + "/open-stack-frame";
            if (!num) {
              num = 1;
            }
            obj.lineNumber = num;
            const _fetch = fetch;
            obj = { method: "POST" };
            const _JSON = JSON;
            obj.body = JSON.stringify(obj);
            const response = fetch(combined, obj);
          }
        }
      };
    };
  }
};
