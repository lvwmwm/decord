// Module ID: 8976
// Function ID: 8977
// Name: conjurePreviewOperationSurfaces
// Dependencies: [8973, 2]
// Exports: createPreviewOperationSurfaces

// Module 8976 (conjurePreviewOperationSurfaces)
import conjurePreviewControlLease from "conjurePreviewControlLease" /* 8973 */;
import size from "module_2" /* 2 */;

let closure_1, map;

function bestEffort(arg0, fn) {
  try {
    fn();
  } catch (err) {
  }
}
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewOperationSurfaces.tsx");

export const createPreviewOperationSurfaces = function createPreviewOperationSurfaces(arg0) {
  let closure_0 = arg0;
  map = new Map();
  let obj = {
    begin(Stack2) {
      let obj = Stack2(map[0]);
      let result = obj.beginConjureControlOperation(Stack2);
      const tmp2 = Stack2(Stack2);
      map = tmp2;
      if (null != tmp2) {
        let obj2 = map;
        let value = map.get(Stack2);
        if (null != value) {
          obj2.delete(Stack2);
          bestEffort(0, () => value.end());
        }
        bestEffort(0, () => closure_1.dismiss());
        bestEffort(0, () => {
          const openResult = closure_1.open();
          Stack2 = openResult;
          let obj = Stack2(map[0]);
          closure_1 = obj.subscribeConjureControl(() => {
            const obj = openResult(map[0]);
            if (!obj.isConjureControlActive(openResult)) {
              value = closure_1.get(tmp);
              const obj2 = closure_1;
              if (null != value) {
                obj2.delete(openResult);
                closure_1_2(0, () => value.end());
              }
              const obj3 = openResult(closure_1[0]);
              const result = obj3.endConjureControlOperation(tmp);
            }
          });
          let obj2 = {
            iframeId: openResult.iframeId,
            drain() {
              return openResult.drain();
            },
            end() {
              closure_1();
              openResult.end();
            }
          };
          let result = closure_1.set(Stack2, obj2);
        });
      }
    },
    end(openResult) {
      const value = map.get(openResult);
      const obj = map;
      if (null != value) {
        obj.delete(openResult);
        bestEffort(0, () => value.end());
      }
      const obj2 = conjurePreviewControlLease;
      const result = obj2.endConjureControlOperation(openResult);
    },
    drain(arg0) {
      const value = map.get(arg0);
      let drainResult;
      if (value != null) {
        drainResult = value.drain();
      }
      if (drainResult == null) {
        drainResult = [];
      }
      return drainResult;
    }
  };
  return obj;
};
