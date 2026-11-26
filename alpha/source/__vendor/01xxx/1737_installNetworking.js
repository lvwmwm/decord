// Module ID: 1737
// Function ID: 1738
// Name: installNetworking
// Dependencies: [1738, 1741, 1746, 1745, 1740, 1747, 216]
// Exports: installNetworking

// Module 1737 (installNetworking)
import _mod216 from "module_216" /* 216 */;
import XMLHttpRequest from "XMLHttpRequest" /* 1738 */;
import DOMException from "DOMException" /* 1740 */;
import Blob from "Blob" /* 1741 */;
import FormData from "FormData" /* 1745 */;
import FileReader from "FileReader" /* 1746 */;
import AbortSignal from "AbortSignal" /* 1747 */;

let c2 = false;

export function installNetworking() {
  if (undefined !== globalThis.__workletsNetworking) {
    const tmp19 = c2;
    if (!tmp19) {
      c2 = true;
      const _globalThis = globalThis;
      if (XMLHttpRequest == null) {
        _globalThis.XMLHttpRequest = XMLHttpRequest.XMLHttpRequest;
      }
      if (_globalThis.Blob == null) {
        _globalThis.Blob = Blob.Blob;
      }
      if (_globalThis.FileReader == null) {
        _globalThis.FileReader = FileReader.FileReader;
      }
      if (_globalThis.FormData == null) {
        _globalThis.FormData = FormData.FormData;
      }
      if (_globalThis.DOMException == null) {
        _globalThis.DOMException = DOMException.DOMException;
      }
      if (_globalThis.AbortController == null) {
        _globalThis.AbortController = AbortSignal.AbortController;
      }
      if (_globalThis.AbortSignal == null) {
        _globalThis.AbortSignal = AbortSignal.AbortSignal;
      }
      _mod216;
    }
  }
}
