// Module ID: 11020
// Function ID: 11021
// Name: FilePickerUtils
// Dependencies: [5, 1085, 11021, 1369, 5708, 1126, 5070, 2]
// Exports: handleDocumentSelection

// Module 11020 (FilePickerUtils)
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let code, type;

let obj = function _handleDocumentSelection() {
  obj = _asyncToGenerator(async () => {
    let closure_1;
    let closure_3;
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    let iter = (async () => {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let obj8;
      let tmp54;
      let tmp6;
      let tmp70;
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
      type = tmp;
      let obj5 = closure_0;
      if (closure_0 === undefined) {
        obj5 = {};
      }
      const extensions = obj5.extensions;
      const flag = obj5.pickMultiple ?? true;
      await "Reflect";
      if (null != extensions) {
        if (extensions.length > 0) {
          tmp54 = getPickerTypesForExtensions(extensions);
        }
      }
      type = tmp54;
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
      await pick(obj9);
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
      tmp70 = await "IconComponent";
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
        tmp6 = tmp70;
      }
      return tmp6;
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
