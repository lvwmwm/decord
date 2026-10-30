// Module ID: 12455
// Function ID: 12456
// Name: useConjureAttachmentImage
// Dependencies: [32, 19, 12453, 2]
// Exports: useConjureAttachmentImage

// Module 12455 (useConjureAttachmentImage)
import conjureAttachmentRequests from "conjureAttachmentRequests" /* 12453 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/chat/useConjureAttachmentImage.tsx");

export function useConjureAttachmentImage(projectId, id) {
  let closure_2;
  let closure_3;
  let closure_5;
  let first;
  let first1;
  let first2;
  let items1;
  let closure_1 = id;
  [first, _slicedToArray] = react.useState(null);
  [first1, react] = react.useState(false);
  [first2, closure_5] = react.useState(0);
  const items = [projectId, id, first2];
  const effect = react.useEffect(() => {
    let c0 = false;
    const obj = projectId(id[2]);
    const attachmentUrl = obj.getAttachmentUrl(c0, id);
    attachmentUrl.then((result) => {
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
  let obj = {
    src: first,
    gone: first1,
    handleError: react.useCallback(() => {
      let tmp = closure_2(null);
      const obj = conjureAttachmentRequests;
      const result = obj.isAttachmentAvailable(projectId, id);
      result.then((result) => {
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
}
