// Module ID: 9940
// Function ID: 9941
// Name: serializeFormData
// Dependencies: [5, 9941, 9933]
// Exports: assertBodyAllowed, isFormData, normalizeBody, normalizeBodyPure, resolveBlobBody, resolveRequestBody, serializeFormData

// Module 9940 (serializeFormData)
import NitroRequest from "NitroRequest" /* 9933 */;
import TEXT_CONTENT_TYPE from "TEXT_CONTENT_TYPE" /* 9941 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let GET, closure_1, closure_6, closure_7, closure_8, headers2, method2;

let tmp10;
let tmp11;
let tmp12;
let tmp13;
let tmp14;
let tmp15;
let tmp16;
let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
let obj = function _resolveRequestBody() {
  obj = _asyncToGenerator(async (value, body) => {
    let c9 = 0;
    let c11 = 0;
    let c10 = 0;
    return (async (arg0, value) => {
      let cloneResult;
      let cloneResult1;
      if (c11 === 2) {
        c11 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c11 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c11 = 3;
              return { value, done: true };
            } else {
              closure_8 = tmp3;
              const request = body;
              value = body;
              body = undefined;
              body2 = undefined;
              if (typeof value !== "string") {
                const _URL = URL;
                if (!(value instanceof URL)) {
                  const tmp27 = require;
                  const tmp28 = dependencyMap;
                  if (value instanceof NitroRequest.NitroRequest) {
                    const tmp27Result = tmp27(tmp28[2]);
                    const rawBodyOfResult = tmp27Result.rawBodyOf(value);
                    body = undefined;
                    if (request != null) {
                      body = request.body;
                    }
                    let tmp36 = request;
                    if (null == body) {
                      tmp36 = request;
                      if (null != rawBodyOfResult) {
                        body2 = request;
                        if (request == null) {
                          body2 = {};
                        }
                        const obj4 = { headers: headers2, body: rawBodyOfResult };
                        const merged = Object.assign(body2);
                        let headers;
                        if (request != null) {
                          headers = request.headers;
                        }
                        headers2 = headers;
                        if (headers == null) {
                          headers2 = obj21.headers;
                        }
                        tmp36 = obj4;
                      }
                    }
                    c11 = 3;
                    return { value: tmp36, done: true };
                  } else {
                    let body1;
                    if (request != null) {
                      body1 = request.body;
                    }
                    if (null != body1) {
                      c11 = 3;
                      return { value: request, done: true };
                    } else if (typeof value.clone !== "function") {
                      c11 = 3;
                      return { value: request, done: true };
                    } else {
                      let method;
                      if (request != null) {
                        method = request.method;
                      }
                      method2 = method;
                      if (method == null) {
                        method2 = obj21.method;
                      }
                      GET = method2;
                      if (method2 == null) {
                        GET = "GET";
                      }
                      const formatted = GET.toUpperCase();
                      if ("GET" !== formatted) {
                        if ("HEAD" !== formatted) {
                          c10 = 1;
                          const _bodyInit = obj21._bodyInit;
                          const _Blob = Blob;
                          if (typeof Blob === "undefined") {
                            const _ArrayBuffer = ArrayBuffer;
                            if (typeof ArrayBuffer === "undefined") {
                              const _ArrayBuffer2 = ArrayBuffer;
                              c9 = 3;
                              c11 = 1;
                              const obj8 = { value: cloneResult.text(), done: false };
                              cloneResult = value.clone();
                              return obj8;
                            } else {
                              const _ArrayBuffer3 = ArrayBuffer;
                            }
                          } else {
                            const _Blob2 = Blob;
                          }
                          if (typeof value.arrayBuffer === "function") {
                            c9 = 2;
                            c11 = 1;
                            const obj9 = { value: cloneResult1.arrayBuffer(), done: false };
                            cloneResult1 = value.clone();
                            return obj9;
                          }
                        }
                      }
                      c11 = 3;
                      return { value: request, done: true };
                    }
                  }
                }
              }
              c11 = 3;
              return { value: request, done: true };
            }
          } else if (1 === c9) {
            c10 = 0;
            c11 = 3;
            return { value, done: true };
          } else if (2 === c9) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 0;
              c11 = 3;
              return { value, done: true };
            } else {
              let tmp24;
              body = value;
              if (0 === body.byteLength) {
                tmp24 = value;
              } else {
                closure_6 = value;
                if (value == null) {
                  closure_6 = {};
                }
                const obj14 = { body };
                const merged1 = Object.assign(closure_6);
                tmp24 = obj14;
              }
              c10 = 0;
              c11 = 3;
              return { value: tmp24, done: true };
            }
          } else if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 0;
            c11 = 3;
            return { value, done: true };
          } else {
            let tmp13;
            body2 = value;
            if (0 === body2.length) {
              tmp13 = value;
            } else {
              closure_7 = value;
              if (value == null) {
                closure_7 = {};
              }
              obj = { body: body2 };
              const merged2 = Object.assign(closure_7);
              tmp13 = obj;
            }
            c10 = 0;
            c11 = 3;
            return { value: tmp13, done: true };
          }
        } catch (tmp42) {
          if (0 === c10) {
            c11 = 3;
            throw tmp42;
          } else {
            c9 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _resolveBlobBody() {
  obj = _asyncToGenerator(async (arg0) => {
    const headers = arg0;
    let c4 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      if (c5 === 2) {
        c5 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let body2;
          let closure_4;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              let c3 = 0;
              let c2 = 0;
              body2 = undefined;
              body = undefined;
              headers2 = undefined;
              closure_4 = undefined;
              if (headers != null) {
                body = tmp36.body;
              }
              if (body) {
                const _Blob = Blob;
                if (typeof Blob !== "undefined") {
                  const _Blob2 = Blob;
                  if (headers.body instanceof Blob) {
                    body2 = tmp36.body;
                    const self = this;
                    const self2 = this;
                    c4 = 1;
                    c5 = 1;
                    const obj4 = {
                      value: new Promise((arg0, arg1) => {
                                      let closure_0 = arg0;
                                      closure_1 = arg1;
                                      const fileReader = new FileReader();
                                      fileReader.onload = () => closure_0(fileReader.result);
                                      fileReader.onerror = () => closure_1(fileReader.error);
                                      const asArrayBuffer = fileReader.readAsArrayBuffer(closure_1_1);
                                    }),
                      done: false
                    };
                    return obj4;
                  }
                }
                c5 = 3;
                return { value: headers, done: true };
              } else {
                c5 = 3;
                return { value: headers, done: true };
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            body = value;
            headers2 = headers.headers;
            if (body2.type) {
              obj = closure_131_0(closure_131_1[1]);
              const headersToPairsResult = obj.headersToPairs(headers2);
              closure_1 = headersToPairsResult;
              if (headersToPairsResult == null) {
                closure_1 = [];
              }
              closure_4 = closure_1;
              if (!closure_4.some((key) => {
                const str = key.key;
                return "content-type" === str.toLowerCase();
              })) {
                const entry = { key: "Content-Type", value: body2.type };
                const arr = closure_4.push(entry);
                headers2 = closure_4.map((item) => {
                  const items = [, ];
                  ({ key: arr[0], value: arr[1] } = item);
                  return items;
                });
              }
            }
            const obj8 = { body, headers: headers2 };
            const merged = Object.assign(headers);
            c5 = 3;
            return { value: obj8, done: true };
          }
        } catch (tmp29) {
          c5 = 3;
          throw tmp29;
        }
      }
    })();
  });
  return obj(...arguments);
};
let items = [{ code: "(function viewToBuffer_Pnpm_bodyJs1(view){const buf=view.buffer;if(view.byteOffset===0&&view.byteLength===buf.byteLength)return buf;return buf.slice(view.byteOffset,view.byteOffset+view.byteLength);})" }];
[tmp2] = items;
function viewToBuffer(buffer) {
  let substr;
  buffer = buffer.buffer;
  if (0 !== buffer.byteOffset) {
    substr = buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
  } else {
    substr = buffer;
  }
  return substr;
}
viewToBuffer.__workletHash = 6585710296313;
viewToBuffer.__initData = tmp2;
const items1 = [{ code: "(function assertBodyAllowed_Pnpm_bodyJs2(method,body){if(body==null)return;const m=(method!==null&&method!==void 0?method:'GET').toUpperCase();if(m==='GET'||m==='HEAD'){throw new TypeError('Request with GET/HEAD method cannot have body.');}})" }];
[tmp3] = items1;
function serializeFormData(getParts) {
  let fileName;
  let str3;
  const items = [];
  if (typeof getParts.getParts === "function") {
    const parts = getParts.getParts();
    const iter = parts[Symbol.iterator]();
    let str = "application/octet-stream";
    let str2 = "file";
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp8 = nextResult;
      if (undefined !== nextResult.string) {
        let obj2 = { name: tmp8.fieldName, value: String(tmp8.string) };
        let _String = String;
        let push2 = items.push;
        let push2Result = push2(obj2);
      } else if (tmp8.uri) {
        obj = { name: null, fileUri: null, fileName, mimeType: str3 };
        ({ fieldName: obj.name, uri: obj.fileUri, fileName } = tmp8);
        let push = items.push;
        if (fileName == null) {
          fileName = tmp8.name;
        }
        if (fileName == null) {
          fileName = "file";
        }
        str3 = tmp8.type;
        if (str3 == null) {
          str3 = "application/octet-stream";
        }
        let arr = push(obj);
      }
      continue;
    }
    return items;
  } else {
    const item = getParts.forEach((value, name) => {
      let fileUri;
      let str;
      let str2;
      if (typeof value === "string") {
        const obj2 = { name, value };
        items.push(obj2);
      } else {
        const tmp = value && typeof value === "object";
        if (tmp) {
          obj = { name, fileUri, fileName: str, mimeType: str2 };
          fileUri = value.uri;
          const push = items.push;
          if (fileUri == null) {
            fileUri = value.fileUri;
          }
          str = value.name;
          if (str == null) {
            str = value.fileName;
          }
          if (str == null) {
            str = "file";
          }
          str2 = value.type;
          if (str2 == null) {
            str2 = value.mimeType;
          }
          if (str2 == null) {
            str2 = "application/octet-stream";
          }
          push(obj);
        }
      }
    });
    return items;
  }
}
function isFormData(append) {
  let tmp = typeof FormData !== "undefined";
  if (typeof FormData !== "undefined") {
    const _FormData = FormData;
    tmp = append instanceof FormData;
  }
  if (!tmp) {
    let tmp2 = !append;
    if (append) {
      tmp2 = typeof append !== "object";
    }
    if (!tmp2) {
      tmp2 = typeof append.append !== "function";
    }
    if (!tmp2) {
      tmp2 = typeof append.getParts !== "function";
    }
    tmp = !tmp2;
  }
  return tmp;
}
function assertBodyAllowed(arg0, body) {
  if (null != body) {
    let str = arg0;
    if (arg0 == null) {
      str = "GET";
    }
    const formatted = str.toUpperCase();
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("Request with GET/HEAD method cannot have body.");
    throw typeError;
  }
}
assertBodyAllowed.__workletHash = 5605608569406;
assertBodyAllowed.__initData = tmp3;
const items2 = [{ code: "(function normalizeBody_Pnpm_bodyJs3(body){let[TEXT_CONTENT_TYPE,isFormData,serializeFormData,URLSearchParams,FORM_CONTENT_TYPE,BYTES_CONTENT_TYPE,viewToBuffer]=this.__closure;if(body==null)return undefined;if(typeof body==='string')return{bodyString:body,contentType:TEXT_CONTENT_TYPE};if(isFormData(body)){return{bodyFormData:serializeFormData(body)};}if(body instanceof URLSearchParams)return{bodyString:body.toString(),contentType:FORM_CONTENT_TYPE};if(typeof ArrayBuffer!=='undefined'&&body instanceof ArrayBuffer)return{bodyBytes:body,contentType:BYTES_CONTENT_TYPE};if(ArrayBuffer.isView(body)){return{bodyBytes:viewToBuffer(body),contentType:BYTES_CONTENT_TYPE};}throw new Error('Unsupported body type for nitro fetch');})" }, TEXT_CONTENT_TYPE.TEXT_CONTENT_TYPE, isFormData, serializeFormData, URLSearchParams, TEXT_CONTENT_TYPE.FORM_CONTENT_TYPE, TEXT_CONTENT_TYPE.BYTES_CONTENT_TYPE, viewToBuffer];
let c4;
let c5;
let c6;
[tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items2;
function normalizeBody(body1) {
  if (null != body1) {
    if (typeof body1 === "string") {
      return { bodyString: body1, contentType };
    } else if (_undefined(body1)) {
      const obj3 = { bodyFormData: _undefined2(body1) };
      return obj3;
    } else if (body1 instanceof c3) {
      const obj4 = { bodyString: body1.toString(), contentType: contentType2 };
      return obj4;
    } else {
      const _ArrayBuffer = ArrayBuffer;
      if (typeof ArrayBuffer !== "undefined") {
        const _ArrayBuffer3 = ArrayBuffer;
        if (body1 instanceof ArrayBuffer) {
          return { bodyBytes: body1, contentType: contentType3 };
        }
      }
      const _ArrayBuffer2 = ArrayBuffer;
      if (ArrayBuffer.isView(body1)) {
        obj = { bodyBytes: _undefined3(body1), contentType: contentType3 };
        return obj;
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Unsupported body type for nitro fetch");
        throw error;
      }
    }
  }
}
const items3 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
normalizeBody.__closure = items3;
normalizeBody.__workletHash = 10320267193798;
normalizeBody.__initData = tmp4;
const items4 = [{ code: "(function normalizeBodyPure_Pnpm_bodyJs4(body){let[TEXT_CONTENT_TYPE,FORM_CONTENT_TYPE,BYTES_CONTENT_TYPE,viewToBuffer]=this.__closure;if(body==null)return undefined;if(typeof body==='string')return{bodyString:body,contentType:TEXT_CONTENT_TYPE};if(typeof body==='object'&&body!==null&&typeof body.toString==='function'&&Object.prototype.toString.call(body)==='[object URLSearchParams]'){return{bodyString:body.toString(),contentType:FORM_CONTENT_TYPE};}if(typeof ArrayBuffer!=='undefined'&&Object.prototype.toString.call(body)==='[object ArrayBuffer]'){return{bodyBytes:body,contentType:BYTES_CONTENT_TYPE};}if(ArrayBuffer.isView(body)){return{bodyBytes:viewToBuffer(body),contentType:BYTES_CONTENT_TYPE};}throw new Error('Unsupported body type for nitro fetch worklet (FormData is not available in worklets)');})" }, TEXT_CONTENT_TYPE.TEXT_CONTENT_TYPE, TEXT_CONTENT_TYPE.FORM_CONTENT_TYPE, TEXT_CONTENT_TYPE.BYTES_CONTENT_TYPE, viewToBuffer];
let c0;
let c1;
let c2;
let c3;
[tmp12, tmp13, tmp14, tmp15, tmp16] = items4;
function normalizeBodyPure(bodyString) {
  if (null != bodyString) {
    if (typeof bodyString === "string") {
      return { bodyString, contentType };
    } else {
      if (typeof bodyString === "object") {
        if (null !== bodyString) {
          if (typeof bodyString.toString === "function") {
            const _Object = Object;
            if ("[object URLSearchParams]" === toString.call(bodyString)) {
              const obj3 = { bodyString: bodyString.toString(), contentType: contentType2 };
              return obj3;
            }
          }
        }
      }
      const _ArrayBuffer = ArrayBuffer;
      if (typeof ArrayBuffer !== "undefined") {
        const _Object2 = Object;
        const toString2 = Object.prototype.toString;
        if ("[object ArrayBuffer]" === toString2.call(bodyString)) {
          return { bodyBytes: bodyString, contentType: contentType3 };
        }
      }
      const _ArrayBuffer2 = ArrayBuffer;
      if (ArrayBuffer.isView(bodyString)) {
        obj = { bodyBytes: _undefined(bodyString), contentType: contentType3 };
        return obj;
      } else {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Unsupported body type for nitro fetch worklet (FormData is not available in worklets)");
        throw error;
      }
    }
  }
}
const items5 = [tmp13, tmp14, tmp15, tmp16];
normalizeBodyPure.__closure = items5;
normalizeBodyPure.__workletHash = 15447287653261;
normalizeBodyPure.__initData = tmp12;

export { serializeFormData };
export { isFormData };
export { assertBodyAllowed };
export { normalizeBody };
export { normalizeBodyPure };
export function resolveRequestBody(arg0, arg1) {
  return obj(...arguments);
}
export function resolveBlobBody(value) {
  return obj(...arguments);
}
