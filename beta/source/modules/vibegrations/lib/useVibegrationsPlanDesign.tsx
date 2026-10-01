// Module ID: 16343
// Function ID: 16344
// Name: useVibegrationsPlanDesign
// Dependencies: [32, 19, 12642, 2]
// Exports: useVibegrationsPlanDesign

// Module 16343 (useVibegrationsPlanDesign)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12642 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ getAttachmentUrl: c2, isAttachmentAvailable: c3 } = VibegrationsConnectionStore);
const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsPlanDesign.tsx");

export const useVibegrationsPlanDesign = function useVibegrationsPlanDesign(projectId, id) {
  let closure_2;
  let closure_3;
  let closure_5;
  let first;
  let first1;
  let first2;
  let items1;
  _slicedToArray = projectId;
  react = id;
  [first, closure_2] = react.useState(null);
  [first1, closure_3] = react.useState(false);
  [first2, closure_5] = react.useState(0);
  const items = [projectId, id, first2];
  const effect = react.useEffect(() => {
    let c0 = false;
    const promise = closure_2(c0, closure_1);
    promise.then((result) => {
      const tmp = c0;
      if (!tmp) {
        closure_2(result);
      }
    }, () => {
      const tmp = c0;
      if (!tmp) {
        if (0 === first2) {
          closure_5(1);
        } else {
          closure_3(true);
        }
      }
    });
    return () => {
      c0 = true;
    };
  }, items);
  const obj = {
    src: first,
    gone: first1,
    handleError: react.useCallback(() => {
      let tmp = closure_2(null);
      const promise = _false(projectId, id);
      promise.then((result) => {
        const tmp = result;
        if (tmp) {
          if (0 === first2) {
            closure_1_5(1);
          }
        }
        closure_1_3(true);
      }, () => closure_1_3(true));
    }, items1)
  };
  items1 = [projectId, id, first2];
  return obj;
};
