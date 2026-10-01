// Module ID: 15710
// Function ID: 15711
// Name: EmojiSourceUtils
// Dependencies: [5, 17, 4487, 1397, 2]
// Exports: getEmojiSource

// Module 15710 (EmojiSourceUtils)
import react_native from "react-native" /* 17 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c2, c5, closure_4, name;

let obj = function _getEmojiSource() {
  obj = _asyncToGenerator(async (arg0) => {
    const user = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    const iter = (async (arg0, value) => {
      let obj6;
      if (c7 === 2) {
        c7 = 3;
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
          let num11;
          let closure_2;
          let closure_3;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              c5 = 0;
              closure_4 = tmp;
              num11 = closure_1;
              if (closure_1 === undefined) {
                num11 = 32;
              }
              closure_2 = undefined;
              closure_3 = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "flex", done: true };
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              name = user.name;
              const getEmojiUrl = closure_133_0(closure_133_1[2]).getEmojiUrl;
              closure_133_0(closure_133_1[2]);
              if (name == null) {
                name = "";
              }
              const obj5 = { name, id: user.id, animated: false };
              const emojiUrl = getEmojiUrl(obj5, num11);
              c2 = emojiUrl;
              if (emojiUrl == null) {
                c2 = "";
              }
              closure_2 = c2;
              if ("" !== closure_2) {
                c7 = 3;
                const obj7 = { value: obj6.makeSource(closure_2), done: true };
                obj6 = closure_133_0(closure_133_1[3]);
                return obj7;
              } else {
                const ImageManager = closure_133_3.ImageManager;
                c6 = 2;
                c7 = 1;
                const obj8 = { value: ImageManager.getEmojiBase64(user.name, num11), done: false };
                return obj8;
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            closure_3 = value;
            const _HermesInternal = HermesInternal;
            c7 = 3;
            const obj10 = { value: obj.makeSource("data:image/png;base64," + closure_3), done: true };
            obj = closure_133_0(closure_133_1[3]);
            return obj10;
          }
        } catch (tmp28) {
          c7 = 3;
          throw tmp28;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const NativeModules = react_native.NativeModules;
const result = size.fileFinishedImporting("modules/emojis/native/utils/EmojiSourceUtils.tsx");

export const getEmojiSource = function getEmojiSource() {
  return obj(...arguments);
};
