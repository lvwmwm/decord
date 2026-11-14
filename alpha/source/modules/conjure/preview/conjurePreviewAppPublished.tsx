// Module ID: 13191
// Function ID: 13192
// Name: conjurePreviewAppPublished
// Dependencies: [2]
// Exports: nextConjurePreviewAppPublished, notifyConjurePreviewAppPublished

// Module 13191 (conjurePreviewAppPublished)
import size from "module_2" /* 2 */;

let set;

const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewAppPublished.tsx");

export function nextConjurePreviewAppPublished(arg0, arg1) {
  const f106689 = function(arg0) {
    closure_0 = arg0;
    function onPublished() {
      finish(true);
    }
    set = closure_0.get(closure_0);
    const obj = closure_0;
    const tmp = closure_0;
    if (set == null) {
      let tmp2 = globalThis;
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
    }
    const result = obj.set(tmp, set);
    setTimeout(() => finish(false), set);
    finish = function finish(arg0) {
      clearTimeout(finish);
      set.delete(onPublished);
      let tmp4 = 0 === set.size;
      const tmp2 = set;
      if (tmp4) {
        tmp4 = map.get(closure_0) === tmp2;
      }
      if (tmp4) {
        map.delete(closure_0);
      }
      closure_0(arg0);
    };
    set.add(onPublished);
  };
  let closure_0 = arg0;
  let closure_1 = arg1;
  function finish() {

  }
  let obj = {
    published: new Promise(f106689),
    cancel() {
      return finish(false);
    }
  };
  new Promise(f106689);
  return obj;
}
export function notifyConjurePreviewAppPublished(projectId) {
  let items1 = map.get(projectId);
  if (items1 == null) {
    items1 = [];
  }
  const items = [...items1];
  for (const item10014 of items) {
    let item10014Result = item10014();
    continue;
  }
}
