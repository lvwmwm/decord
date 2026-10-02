// Module ID: 10775
// Function ID: 10776
// Name: FilePickerUtils
// Dependencies: [5, 1086, 10776, 1370, 5205, 1127, 5017, 2]
// Exports: handleDocumentSelection

// Module 10775 (FilePickerUtils)
import Constants from "Constants" /* 1086 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_1, code, type;

let obj = function _handleDocumentSelection() {
  obj = _asyncToGenerator(async () => {
    let closure_3;
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    let iter = (async (arg0, value) => {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let tmp3;
      function getPickerTypesForExtensions(extensions) {
        const items = [];
        const iter = extensions[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if ("jfif" !== nextResult) {
            let tmp10 = closure_1_0;
            let tmp11 = type;
            let obj2 = closure_1_0(type[2]);
            obj = { kind: "extension", value: tmp2 };
            let isKnownTypeResult = obj2.isKnownType(obj);
            if (isKnownTypeResult.isKnown) {
              let tmp10Result = tmp10(tmp11[3]);
              let tmp4 = tmp10Result.isIOS() ? tmp15 : tmp14;
              if (null == tmp4) {
                iter.return();
              } else {
                let arr = items.push(tmp5);
              }
            } else {
              iter.return();
            }
          }
          continue;
        }
        let tmp9;
        if (items.length > 0) {
          tmp9 = items;
        }
        return tmp9;
      }
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let tmp70;
        let c4;
        try {
          let flag;
          let extensions;
          c6 = 2;
          let tmp4 = c5;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              type = tmp;
              closure_1 = tmp4;
              flag = undefined;
              extensions = undefined;
              let obj5 = closure_0;
              if (closure_0 === undefined) {
                obj5 = {};
              }
              flag = obj5.pickMultiple ?? true;
              extensions = obj5.extensions;
              type = undefined;
              tmp70 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              let obj8;
              let tmp54;
              if (null != extensions) {
                if (extensions.length > 0) {
                  tmp54 = getPickerTypesForExtensions(extensions);
                }
              }
              type = tmp54;
              c4 = 1;
              const pick = closure_130_0(closure_130_2[2]).pick;
              closure_130_0(closure_130_2[2]);
              const obj7 = closure_130_0(closure_130_2[3]);
              if (obj7.isIOS()) {
                obj8 = { mode: "open" };
              } else {
                obj8 = { mode: "import" };
              }
              const obj9 = { allowMultiSelection: flag, type };
              const merged = Object.assign(obj8);
              c5 = 3;
              c6 = 1;
              const obj10 = { value: pick(obj9), done: false };
              return obj10;
            }
          } else if (2 === tmp4) {
            c4 = 0;
            code = tmp70;
            const obj4 = closure_130_0(closure_130_2[2]);
            if (obj4.isErrorWithCode(code)) {
              if (code.code === closure_130_0(closure_130_2[2]).errorCodes.OPERATION_CANCELED) {
                c6 = 3;
                return { value: "IconComponent", done: null };
              }
            }
            const _JSON = JSON;
            const obj11 = { error_message: JSON.stringify(code) };
            const trackWithMetadata = closure_130_0(closure_130_2[6]).trackWithMetadata;
            const MOBILE_FILE_PICKER_ERROR = closure_130_4.MOBILE_FILE_PICKER_ERROR;
            closure_130_0(closure_130_2[6]);
            trackWithMetadata(MOBILE_FILE_PICKER_ERROR, obj11);
            const obj12 = { title: intl3.string(closure_130_0(closure_130_2[5]).t.rWHepR), body: intl4.string(closure_130_0(closure_130_2[5]).t.fZRH9P) };
            const show2 = closure_130_1(closure_130_2[4]).show;
            closure_130_1(closure_130_2[4]);
            intl3 = closure_130_0(closure_130_2[5]).intl;
            intl4 = closure_130_0(closure_130_2[5]).intl;
            show2(obj12);
            c6 = 3;
            return { value: "IconComponent", done: null };
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            let tmp6;
            tmp70 = value;
            if (tmp70.some((size) => 0 === size.size)) {
              let tmp8 = closure_130_1;
              let tmp9 = closure_130_2;
              let tmp10 = closure_130_1(closure_130_2[4]);
              obj = { title: intl.string(closure_130_0(closure_130_2[5]).t.B3vFdU), body: intl2.string(closure_130_0(closure_130_2[5]).t["9ZpT2C"]) };
              let tmp11 = closure_130_0;
              let tmp12 = closure_130_2;
              const show = tmp10.show;
              intl = closure_130_0(closure_130_2[5]).intl;
              const tmp14 = closure_130_2;
              const tmp15 = closure_130_0;
              intl2 = closure_130_0(closure_130_2[5]).intl;
              show(obj);
            } else {
              const tmp5 = closure_1;
              tmp6 = tmp70;
            }
            c4 = 0;
            c6 = 3;
            return { value: tmp6, done: true };
          }
        } catch (tmp70) {
          if (0 === c4) {
            c6 = 3;
            throw tmp70;
          } else {
            c5 = 2;
          }
        }
      }
    })();
    let nextResult = iter.next();
    return iter;
  });
  return obj(...arguments);
};
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("utils/native/FilePickerUtils.tsx");

export const handleDocumentSelection = function handleDocumentSelection() {
  return obj(...arguments);
};
