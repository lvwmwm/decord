// Module ID: 13221
// Function ID: 13222
// Name: vibegrationsPreviewOperationSurfaces
// Dependencies: [13218, 2]
// Exports: createPreviewOperationSurfaces

// Module 13221 (vibegrationsPreviewOperationSurfaces)
import vibegrationsPreviewControlLease from "vibegrationsPreviewControlLease" /* 13218 */;
import size from "module_2" /* 2 */;

function bestEffort(arg0, fn) {
  try {
    fn();
  } catch (err) {
  }
}
let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPreviewOperationSurfaces.tsx");

export const createPreviewOperationSurfaces = function createPreviewOperationSurfaces(arg0) {
  closure_0 = arg0;
  const map = new Map();
  return {
    begin(TableRowGroup) {
      let result = TableRowGroup(map[0]).beginVibegrationsControlOperation(TableRowGroup);
      const tmp2 = TableRowGroup(TableRowGroup);
      if (null != tmp2) {
        value = map.get(TableRowGroup);
        closure_2 = value;
        if (null != value) {
          obj2.delete(TableRowGroup);
          bestEffort(0, () => value.end());
        }
        bestEffort(0, () => closure_1.dismiss());
        bestEffort(0, () => {
          const openResult = closure_1.open();
          TableRowGroup = openResult;
          closure_1 = TableRowGroup(map[0]).subscribeVibegrationsControl(() => {
            if (!obj.isVibegrationsControlActive(openResult)) {
              value = closure_1.get(tmp);
              if (null != value) {
                obj2.delete(tmp);
                closure_1_2(0, () => value.end());
              }
              const result = value(closure_1[0]).endVibegrationsControlOperation(tmp);
              obj2 = closure_1;
              const obj3 = value(closure_1[0]);
            }
          });
          let result = closure_1.set(TableRowGroup, {
            iframeId: openResult.iframeId,
            drain() {
              return openResult.drain();
            },
            end() {
              closure_1();
              openResult.end();
            }
          });
        });
        obj2 = map;
      }
    },
    end(openResult) {
      value = map.get(openResult);
      closure_0 = value;
      if (null != value) {
        map.delete(openResult);
        bestEffort(0, () => value.end());
      }
      const result = vibegrationsPreviewControlLease.endVibegrationsControlOperation(openResult);
    },
    drain(arg0) {
      value = map.get(arg0);
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
};
