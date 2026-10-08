// Module ID: 12789
// Function ID: 12790
// Dependencies: [5, 17, 12782]
// Exports: saveDocuments

// Module 12789
import react_native from "react-native" /* 17 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let closure_1;

let obj = function _saveDocuments() {
  obj = _asyncToGenerator(async (arg0) => {
    let c2;
    let c3;
    let closure_0 = arg0;
    if (arg0 === 1) {
      throw arg1;
    }
    if (arg0 === 2) {
      return arg1;
    }
    await _asyncToGenerator(async () => {
      let tmp;
      closure_1 = tmp4;
      const tmp18 = tmp;
      if (tmp.sourceUris.length > 1) {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("DocumentPicker.saveDocuments: Android only allows to save one file at a time.\n\n      You provided an array with " + tmp.sourceUris.length + " entries.");
      }
      const NativeDocumentPicker2 = tmp(closure_1[2]).NativeDocumentPicker;
      tmp = await NativeDocumentPicker2.saveDocument(tmp18);
      const NativeDocumentPicker = tmp(closure_1[2]).NativeDocumentPicker;
      await NativeDocumentPicker.writeDocuments(tmp);
      return arg1;
    })();
    if (arg0 === 1) {
      throw arg1;
    }
    if (arg0 === 2) {
      return arg1;
    }
    return arg1.map(closure_129_4);
  });
  return obj(...arguments);
};
function keepOnlySpecifiedFields(uri) {
  return { uri: uri.uri, name: uri.name, error: uri.error };
}
const Platform = react_native.Platform;

export const saveDocuments = function saveDocuments(arg0) {
  return obj(...arguments);
};
