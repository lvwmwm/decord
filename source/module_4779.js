// Module ID: 4779
// Function ID: 41535
// Dependencies: []

// Module 4779
arg5.default = {
  get(arg0) {
    if (arg0) {
      return arg0;
    } else {
      if ("undefined" !== typeof globalThis.DOMParser) {
        const prototype2 = globalThis.DOMParser.prototype;
        const dOMParser = new globalThis.DOMParser();
        return dOMParser;
      } else {
        const result = globalThis.__non_webpack_require__("@xmldom/xmldom");
        const DOMParser2 = result.DOMParser;
        const obj = { onError: result.onErrorStopParsing };
        const prototype = DOMParser2.prototype;
        const dOMParser2 = new DOMParser2(obj);
        return dOMParser2;
      }
    }
  }
};
