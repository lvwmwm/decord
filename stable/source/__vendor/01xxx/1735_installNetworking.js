// Module ID: 1735
// Function ID: 1736
// Name: installNetworking
// Dependencies: [1736, 1739, 1744, 1743, 1738, 1745, 216]
// Exports: installNetworking

// Module 1735 (installNetworking)
import _mod216 from "module_216" /* 216 */;
import XMLHttpRequest from "XMLHttpRequest" /* 1736 */;
import DOMException from "DOMException" /* 1738 */;
import Blob from "Blob" /* 1739 */;
import FormData from "FormData" /* 1743 */;
import FileReader from "FileReader" /* 1744 */;
import AbortSignal from "AbortSignal" /* 1745 */;

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
