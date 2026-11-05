// Module ID: 10008
// Function ID: 10009
// Dependencies: [9992, 9999, 10000]
// Exports: buildNitroRequest, buildNitroRequestPure

// Module 10008
import NitroRequest from "NitroRequest" /* 9992 */;
import serializeFormData from "serializeFormData" /* 9999 */;
import TEXT_CONTENT_TYPE from "TEXT_CONTENT_TYPE" /* 10000 */;

let tmp10;
let tmp11;
let tmp12;
let tmp13;
let tmp14;
let tmp15;
let tmp16;
let tmp17;
let tmp18;
let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
let items = [{ code: "(function buildNitroRequest_Pnpm_requestJs1(input,init){let[NitroRequestClass,rawBodyOf,URL,assertBodyAllowed,headersToPairs,normalizeBody,applyDefaultContentType,applyCacheHeaders,normalizeAndValidateHeaders]=this.__closure;var _init$redirect,_headersToPairs,_method$toUpperCase,_method;let url;let method;let headersInit;let body;let redirectOption=(_init$redirect=init===null||init===void 0?void 0:init.redirect)!==null&&_init$redirect!==void 0?_init$redirect:'follow';let cacheOption=init===null||init===void 0?void 0:init.cache;let credentialsOption=init===null||init===void 0?void 0:init.credentials;if(input instanceof NitroRequestClass){var _init$method,_init$headers,_ref,_init$body;url=input.url;method=(_init$method=init===null||init===void 0?void 0:init.method)!==null&&_init$method!==void 0?_init$method:input.method;headersInit=(_init$headers=init===null||init===void 0?void 0:init.headers)!==null&&_init$headers!==void 0?_init$headers:input.headers;body=(_ref=(_init$body=init===null||init===void 0?void 0:init.body)!==null&&_init$body!==void 0?_init$body:rawBodyOf(input))!==null&&_ref!==void 0?_ref:null;if(!(init!==null&&init!==void 0&&init.redirect))redirectOption=input.redirect;if(!(init!==null&&init!==void 0&&init.cache))cacheOption=input.cache;if(!(init!==null&&init!==void 0&&init.credentials))credentialsOption=input.credentials;}else if(typeof input==='string'||input instanceof URL){var _init$body2;url=String(input);method=init===null||init===void 0?void 0:init.method;headersInit=init===null||init===void 0?void 0:init.headers;body=(_init$body2=init===null||init===void 0?void 0:init.body)!==null&&_init$body2!==void 0?_init$body2:null;}else{var _init$method2,_init$body3;url=input.url;method=(_init$method2=init===null||init===void 0?void 0:init.method)!==null&&_init$method2!==void 0?_init$method2:input.method;headersInit=input.headers;body=(_init$body3=init===null||init===void 0?void 0:init.body)!==null&&_init$body3!==void 0?_init$body3:null;if(!(init!==null&&init!==void 0&&init.credentials))credentialsOption=input.credentials;}assertBodyAllowed(method,body);const headers=(_headersToPairs=headersToPairs(headersInit))!==null&&_headersToPairs!==void 0?_headersToPairs:[];const normalized=normalizeBody(body);applyDefaultContentType(headers,normalized===null||normalized===void 0?void 0:normalized.contentType);applyCacheHeaders(headers,cacheOption);normalizeAndValidateHeaders(headers);const followRedirects=redirectOption==='follow';const prefetchCacheTtlMs=typeof(init===null||init===void 0?void 0:init.prefetchCacheTtlMs)==='number'?init.prefetchCacheTtlMs:undefined;const timeoutMs=typeof(init===null||init===void 0?void 0:init.timeoutMs)==='number'?init.timeoutMs:undefined;const priority=(init===null||init===void 0?void 0:init.priority)==='high'||(init===null||init===void 0?void 0:init.priority)==='low'?init.priority:undefined;return{url:url,method:(_method$toUpperCase=(_method=method)===null||_method===void 0?void 0:_method.toUpperCase())!==null&&_method$toUpperCase!==void 0?_method$toUpperCase:'GET',headers:headers.length>0?headers:undefined,bodyString:normalized===null||normalized===void 0?void 0:normalized.bodyString,bodyBytes:normalized===null||normalized===void 0?void 0:normalized.bodyBytes,bodyFormData:normalized===null||normalized===void 0?void 0:normalized.bodyFormData,followRedirects:followRedirects,credentials:credentialsOption,prefetchCacheTtlMs:prefetchCacheTtlMs,timeoutMs:timeoutMs,priority:priority};})" }, NitroRequest.NitroRequest, NitroRequest.rawBodyOf, URL, serializeFormData.assertBodyAllowed, TEXT_CONTENT_TYPE.headersToPairs, serializeFormData.normalizeBody, TEXT_CONTENT_TYPE.applyDefaultContentType, TEXT_CONTENT_TYPE.applyCacheHeaders, TEXT_CONTENT_TYPE.normalizeAndValidateHeaders];
let c6;
let c7;
let c8;
[tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
function buildNitroRequest(url, redirect) {
  let bodyBytes;
  let bodyFormData;
  let bodyString;
  let cache;
  let credentials;
  let credentials2;
  let priority;
  let str2;
  let str4;
  let tmp35;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let str;
  if (redirect != null) {
    str = redirect.redirect;
  }
  if (str == null) {
    str = "follow";
  }
  if (redirect != null) {
    cache = redirect.cache;
  }
  if (redirect != null) {
    credentials = redirect.credentials;
  }
  if (url instanceof c0) {
    const url2 = url.url;
    let method;
    if (redirect != null) {
      method = redirect.method;
    }
    if (method == null) {
      method = url.method;
    }
    let headers1;
    if (redirect != null) {
      headers1 = redirect.headers;
    }
    if (headers1 == null) {
      headers1 = url.headers;
    }
    let body;
    if (redirect != null) {
      body = redirect.body;
    }
    if (body == null) {
      body = _undefined(url);
    }
    if (body == null) {
      body = null;
    }
    redirect = undefined;
    if (redirect != null) {
      redirect = redirect.redirect;
    }
    if (!redirect) {
      str = url.redirect;
    }
    let cache1;
    if (redirect != null) {
      cache1 = redirect.cache;
    }
    if (!cache1) {
      cache = url.cache;
    }
    let credentials1;
    if (redirect != null) {
      credentials1 = redirect.credentials;
    }
    credentials2 = credentials;
    tmp4 = cache;
    tmp5 = str;
    tmp6 = body;
    tmp7 = headers1;
    str2 = method;
    tmp8 = url2;
    if (!credentials1) {
      credentials2 = url.credentials;
      tmp4 = cache;
      tmp5 = str;
      tmp6 = body;
      tmp7 = headers1;
      str2 = method;
      tmp8 = url2;
    }
  } else {
    if (typeof url !== "string") {
      if (!(url instanceof c2)) {
        url = url.url;
        let method1;
        if (redirect != null) {
          method1 = redirect.method;
        }
        if (method1 == null) {
          method1 = url.method;
        }
        const headers = url.headers;
        let body1;
        if (redirect != null) {
          body1 = redirect.body;
        }
        if (body1 == null) {
          body1 = null;
        }
        let credentials3;
        if (redirect != null) {
          credentials3 = redirect.credentials;
        }
        credentials2 = credentials;
        tmp4 = cache;
        tmp5 = str;
        tmp6 = body1;
        tmp7 = headers;
        str2 = method1;
        tmp8 = url;
        if (!credentials3) {
          credentials2 = url.credentials;
          tmp4 = cache;
          tmp5 = str;
          tmp6 = body1;
          tmp7 = headers;
          str2 = method1;
          tmp8 = url;
        }
      }
    }
    const _String = String;
    let method2;
    const StringResult = String(url);
    if (redirect != null) {
      method2 = redirect.method;
    }
    let headers2;
    if (redirect != null) {
      headers2 = redirect.headers;
    }
    let body2;
    if (redirect != null) {
      body2 = redirect.body;
    }
    if (body2 == null) {
      body2 = null;
    }
    tmp6 = body2;
    credentials2 = credentials;
    tmp4 = cache;
    tmp5 = str;
    tmp7 = headers2;
    str2 = method2;
    tmp8 = StringResult;
  }
  _undefined2(str2, tmp6);
  const tmp22 = _undefined3(tmp7);
  let items = tmp22;
  if (tmp22 == null) {
    items = [];
  }
  const tmp23 = _undefined4(tmp6);
  let contentType;
  const tmp24 = c6;
  if (tmp23 != null) {
    contentType = tmp23.contentType;
  }
  tmp24(items, contentType);
  _undefined5(items, tmp4);
  _undefined6(items);
  let prefetchCacheTtlMs;
  if (redirect != null) {
    prefetchCacheTtlMs = redirect.prefetchCacheTtlMs;
  }
  let prefetchCacheTtlMs1;
  if (typeof prefetchCacheTtlMs === "number") {
    prefetchCacheTtlMs1 = redirect.prefetchCacheTtlMs;
  }
  let timeoutMs;
  if (redirect != null) {
    timeoutMs = redirect.timeoutMs;
  }
  let timeoutMs1;
  if (typeof timeoutMs === "number") {
    timeoutMs1 = redirect.timeoutMs;
  }
  let priority1;
  if (redirect != null) {
    priority1 = redirect.priority;
  }
  if ("high" === priority1) {
    priority = redirect.priority;
  } else {
    let priority2;
    if (redirect != null) {
      priority2 = redirect.priority;
    }
  }
  const request = { url: tmp8, method: str4, headers: tmp35, bodyString, bodyBytes, bodyFormData, followRedirects: "follow" === tmp5, credentials: credentials2, prefetchCacheTtlMs: prefetchCacheTtlMs1, timeoutMs: timeoutMs1, priority };
  str4 = undefined;
  if (str2 != null) {
    str4 = str2.toUpperCase();
  }
  if (str4 == null) {
    str4 = "GET";
  }
  tmp35 = undefined;
  if (items.length > 0) {
    tmp35 = items;
  }
  bodyString = undefined;
  if (tmp23 != null) {
    bodyString = tmp23.bodyString;
  }
  bodyBytes = undefined;
  if (tmp23 != null) {
    bodyBytes = tmp23.bodyBytes;
  }
  bodyFormData = undefined;
  if (tmp23 != null) {
    bodyFormData = tmp23.bodyFormData;
  }
  return request;
}
const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
buildNitroRequest.__closure = items1;
buildNitroRequest.__workletHash = 3106736496530;
buildNitroRequest.__initData = tmp2;
const items2 = [{ code: "(function buildNitroRequestPure_Pnpm_requestJs2(input,init){let[assertBodyAllowed,headersToPairsPure,normalizeBodyPure,applyDefaultContentType,applyCacheHeaders,normalizeAndValidateHeaders]=this.__closure;var _headersToPairsPure,_method$toUpperCase,_method;let url;let method;let headersInit;let body;const isUrlObject=typeof input==='object'&&input!==null&&Object.prototype.toString.call(input)==='[object URL]';if(typeof input==='string'||isUrlObject){var _init$body;url=String(input);method=init===null||init===void 0?void 0:init.method;headersInit=init===null||init===void 0?void 0:init.headers;body=(_init$body=init===null||init===void 0?void 0:init.body)!==null&&_init$body!==void 0?_init$body:null;}else{var _init$method,_init$body2;const req=input;url=req.url;method=(_init$method=init===null||init===void 0?void 0:init.method)!==null&&_init$method!==void 0?_init$method:req.method;headersInit=req.headers;body=(_init$body2=init===null||init===void 0?void 0:init.body)!==null&&_init$body2!==void 0?_init$body2:null;}assertBodyAllowed(method,body);const headers=(_headersToPairsPure=headersToPairsPure(headersInit))!==null&&_headersToPairsPure!==void 0?_headersToPairsPure:[];const normalized=normalizeBodyPure(body);applyDefaultContentType(headers,normalized===null||normalized===void 0?void 0:normalized.contentType);applyCacheHeaders(headers,init===null||init===void 0?void 0:init.cache);normalizeAndValidateHeaders(headers);const prefetchCacheTtlMs=typeof(init===null||init===void 0?void 0:init.prefetchCacheTtlMs)==='number'?init.prefetchCacheTtlMs:undefined;const timeoutMs=typeof(init===null||init===void 0?void 0:init.timeoutMs)==='number'?init.timeoutMs:undefined;const priority=(init===null||init===void 0?void 0:init.priority)==='high'||(init===null||init===void 0?void 0:init.priority)==='low'?init.priority:undefined;return{url:url,method:(_method$toUpperCase=(_method=method)===null||_method===void 0?void 0:_method.toUpperCase())!==null&&_method$toUpperCase!==void 0?_method$toUpperCase:'GET',headers:headers.length>0?headers:undefined,bodyString:normalized===null||normalized===void 0?void 0:normalized.bodyString,bodyBytes:normalized===null||normalized===void 0?void 0:normalized.bodyBytes,followRedirects:true,credentials:init===null||init===void 0?void 0:init.credentials,prefetchCacheTtlMs:prefetchCacheTtlMs,timeoutMs:timeoutMs,priority:priority};})" }, serializeFormData.assertBodyAllowed, TEXT_CONTENT_TYPE.headersToPairsPure, serializeFormData.normalizeBodyPure, TEXT_CONTENT_TYPE.applyDefaultContentType, TEXT_CONTENT_TYPE.applyCacheHeaders, TEXT_CONTENT_TYPE.normalizeAndValidateHeaders];
let c0;
let c1;
let c2;
let c3;
let c4;
let c5;
[tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
function buildNitroRequestPure(url, method) {
  let bodyBytes;
  let bodyString;
  let credentials;
  let str4;
  let tmp31;
  let tmp = typeof url === "object";
  if (typeof url === "object") {
    tmp = null !== url;
  }
  if (tmp) {
    const _Object = Object;
    tmp = "[object URL]" === toString.call(url);
  }
  if (typeof url !== "string") {
    let headers;
    let body;
    let priority;
    if (!tmp) {
      url = url.url;
      method = undefined;
      if (method != null) {
        method = method.method;
      }
      if (method == null) {
        method = url.method;
      }
      headers = url.headers;
      body = undefined;
      if (method != null) {
        body = method.body;
      }
      if (body == null) {
        body = null;
      }
    }
    _undefined(method, body);
    let items = _undefined2(headers);
    if (items == null) {
      items = [];
    }
    const tmp16 = _undefined3(body);
    let contentType;
    const tmp17 = c3;
    if (tmp16 != null) {
      contentType = tmp16.contentType;
    }
    tmp17(items, contentType);
    let cache;
    const tmp20 = c4;
    if (method != null) {
      cache = method.cache;
    }
    tmp20(items, cache);
    _undefined4(items);
    let prefetchCacheTtlMs;
    if (method != null) {
      prefetchCacheTtlMs = method.prefetchCacheTtlMs;
    }
    let prefetchCacheTtlMs1;
    if (typeof prefetchCacheTtlMs === "number") {
      prefetchCacheTtlMs1 = method.prefetchCacheTtlMs;
    }
    let timeoutMs;
    if (method != null) {
      timeoutMs = method.timeoutMs;
    }
    let timeoutMs1;
    if (typeof timeoutMs === "number") {
      timeoutMs1 = method.timeoutMs;
    }
    let priority1;
    if (method != null) {
      priority1 = method.priority;
    }
    if ("high" === priority1) {
      priority = method.priority;
    } else {
      let priority2;
      if (method != null) {
        priority2 = method.priority;
      }
    }
    const request = { url, method: str4, headers: tmp31, bodyString, bodyBytes, followRedirects: true, credentials, prefetchCacheTtlMs: prefetchCacheTtlMs1, timeoutMs: timeoutMs1, priority };
    str4 = undefined;
    if (method != null) {
      str4 = method.toUpperCase();
    }
    if (str4 == null) {
      str4 = "GET";
    }
    tmp31 = undefined;
    if (items.length > 0) {
      tmp31 = items;
    }
    bodyString = undefined;
    if (tmp16 != null) {
      bodyString = tmp16.bodyString;
    }
    bodyBytes = undefined;
    if (tmp16 != null) {
      bodyBytes = tmp16.bodyBytes;
    }
    credentials = undefined;
    if (method != null) {
      credentials = method.credentials;
    }
    return request;
  }
  let method1;
  const StringResult = String(url);
  if (method != null) {
    method1 = method.method;
  }
  let headers1;
  if (method != null) {
    headers1 = method.headers;
  }
  let body1;
  if (method != null) {
    body1 = method.body;
  }
  if (body1 == null) {
    body1 = null;
  }
  body = body1;
  headers = headers1;
  method = method1;
  url = StringResult;
}
const items3 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
buildNitroRequestPure.__closure = items3;
buildNitroRequestPure.__workletHash = 6882032400301;
buildNitroRequestPure.__initData = tmp12;

export { buildNitroRequest };
export { buildNitroRequestPure };
