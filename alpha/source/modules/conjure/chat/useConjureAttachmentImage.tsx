// Module ID: 12180
// Function ID: 12181
// Name: useConjureAttachmentImage
// Dependencies: [32, 19, 558, 576, 12178, 2]

// Module 12180 (useConjureAttachmentImage)
import conjureAttachmentRequests from "conjureAttachmentRequests" /* 12178 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAttachmentImage(arg0, arg1) {
  let closure_0;
  let closure_1;
  let closure_5;
  let first;
  let tmp3;
  let tmp5;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("react");
  const cResult = obj.c(13);
  const tmp2 = _slicedToArray(react.useState(null), 2);
  [tmp3, _slicedToArray] = tmp2;
  const obj2 = react;
  const tmp4 = _slicedToArray(react.useState(false), 2);
  [tmp5, react] = tmp4;
  [first, closure_5] = react.useState(0);
  if (cResult[0] === arg1) {
    if (cResult[1] === first) {
      let tmp8;
      let tmp9;
      if (cResult[2] === arg0) {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      const effect = obj2.useEffect(tmp8, tmp9);
      if (cResult[5] === arg1) {
        if (cResult[6] === first) {
          let tmp11;
          if (cResult[7] === arg0) {
            tmp11 = cResult[8];
          }
          if (cResult[9] === tmp5) {
            if (cResult[10] === tmp11) {
              let tmp12;
              if (cResult[11] === tmp3) {
                tmp12 = cResult[12];
              }
              return tmp12;
            }
          }
          const obj3 = { src: tmp3, gone: tmp5, handleError: tmp11 };
          cResult[9] = tmp5;
          cResult[10] = tmp11;
          cResult[11] = tmp3;
          cResult[12] = obj3;
          tmp12 = obj3;
        }
      }
      const fn2 = function o() {
        let tmp = _slicedToArray(null);
        const obj = conjureAttachmentRequests;
        const result = obj.isAttachmentAvailable(closure_0, closure_1);
        result.then((result) => {
          const tmp = result;
          if (tmp) {
            if (0 === first) {
              closure_1_5(1);
            }
          }
          closure_1_3(true);
        }, () => closure_1_3(true));
      };
      cResult[5] = arg1;
      cResult[6] = first;
      cResult[7] = arg0;
      cResult[8] = fn2;
      tmp11 = fn2;
    }
  }
  const fn = function s() {
    let c0 = false;
    const obj = closure_0(closure_1[4]);
    const attachmentUrl = obj.getAttachmentUrl(c0, closure_1);
    attachmentUrl.then((result) => {
      const tmp = c0;
      if (!tmp) {
        _slicedToArray(result);
      }
    }, () => {
      const tmp = c0;
      if (!tmp) {
        if (0 === first) {
          closure_5(1);
        } else {
          react(true);
        }
      }
    });
    return () => {
      c0 = true;
    };
  };
  const items = [arg0, arg1, first];
  cResult[0] = arg1;
  cResult[1] = first;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items;
  tmp9 = items;
  tmp8 = fn;
}) : (function useConjureAttachmentImage(arg0, arg1) {
  let closure_2;
  let closure_3;
  let closure_5;
  let first;
  let first1;
  let first2;
  let items1;
  let closure_0 = arg0;
  let closure_1 = arg1;
  [first, _slicedToArray] = react.useState(null);
  [first1, react] = react.useState(false);
  [first2, closure_5] = react.useState(0);
  const items = [arg0, arg1, first2];
  const effect = react.useEffect(() => {
    let c0 = false;
    const obj = closure_0(closure_1[4]);
    const attachmentUrl = obj.getAttachmentUrl(c0, closure_1);
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
      const result = obj.isAttachmentAvailable(closure_0, closure_1);
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
  items1 = [arg0, arg1, first2];
  return obj;
});
let result = size.fileFinishedImporting("modules/conjure/chat/useConjureAttachmentImage.tsx");

export const useConjureAttachmentImage = tmp2;
