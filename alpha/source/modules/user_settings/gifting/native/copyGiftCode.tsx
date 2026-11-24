// Module ID: 13860
// Function ID: 13861
// Name: copyGiftCode
// Dependencies: [5, 5664, 7412, 5598, 2]
// Exports: default

// Module 13860 (copyGiftCode)
import GiftCodeUtils from "GiftCodeUtils" /* 5664 */;
import ClipboardUtils from "ClipboardUtils" /* 7412 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_2;

let obj = function _copyGiftCode() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    const code = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c5 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj7;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              c4 = 1;
              const obj6 = GiftCodeUtils;
              obj6.trackGiftCodeCopy(code, closure_1);
              const copy = ClipboardUtils.copy;
              ClipboardUtils;
              c3 = 2;
              c5 = 1;
              const obj4 = { value: copy(obj7.getGiftCodeURL(code.code)), done: false };
              obj7 = GiftCodeUtils;
              return obj4;
            }
          } else {
            if (1 === tmp4) {
              c4 = 0;
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c5 = 3;
              return { value, done: true };
            } else {
              obj = closure_130_0(closure_130_1[3]);
              obj.presentLinkCopied();
              c4 = 0;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          if (0 === c4) {
            c5 = 3;
            throw tmp9;
          } else {
            c3 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/user_settings/gifting/native/copyGiftCode.tsx");

export default function copyGiftCode() {
  return obj(...arguments);
};
