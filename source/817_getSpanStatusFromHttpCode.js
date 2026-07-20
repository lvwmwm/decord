// Module ID: 817
// Function ID: 9130
// Name: getSpanStatusFromHttpCode
// Dependencies: []

// Module 817 (getSpanStatusFromHttpCode)
function getSpanStatusFromHttpCode(arg0) {
  if (arg0 < 400) {
    if (arg0 >= 100) {
      const obj = { code: 1 };
      return obj;
    }
  }
  if (arg0 >= 400) {
    if (arg0 < 500) {
      if (401 === arg0) {
        return { mcpTransport: "isArray", networkTransport: "key" };
      } else if (403 === arg0) {
        return { mcpTransport: null, networkTransport: null };
      } else if (404 === arg0) {
        return { mcpTransport: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003059127912, networkTransport: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000617945156202228 };
      } else if (409 === arg0) {
        return { mcpTransport: null, networkTransport: null };
      } else if (413 === arg0) {
        return { mcpTransport: true, networkTransport: true };
      } else if (429 === arg0) {
        return {};
      } else {
        return 499 === arg0 ? { mcpTransport: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000594038406498409, networkTransport: null } : { mcpTransport: null, networkTransport: null };
      }
    }
  }
  if (arg0 >= 500) {
    if (arg0 < 600) {
      if (501 === arg0) {
        return {};
      } else if (503 === arg0) {
        return { mcpTransport: 557057.0764942479, networkTransport: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041760575417409096 };
      } else {
        return 504 === arg0 ? { mcpTransport: null, networkTransport: null } : { mcpTransport: true, networkTransport: true };
      }
    }
  }
  return { mcpTransport: true, networkTransport: true };
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.SPAN_STATUS_ERROR = 2;
arg5.SPAN_STATUS_OK = 1;
arg5.SPAN_STATUS_UNSET = 0;
arg5.getSpanStatusFromHttpCode = getSpanStatusFromHttpCode;
arg5.setHttpStatus = function setHttpStatus(setAttribute) {
  const attr = setAttribute.setAttribute("http.response.status_code", arg1);
  const tmp2 = getSpanStatusFromHttpCode(arg1);
  if ("unknown_error" !== tmp2.message) {
    setAttribute.setStatus(tmp2);
  }
};
