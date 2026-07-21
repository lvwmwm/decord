// Module ID: 7247
// Function ID: 58346
// Name: getSpanStatusFromHttpCode
// Dependencies: []

// Module 7247 (getSpanStatusFromHttpCode)
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
        return {};
      } else if (403 === arg0) {
        return { 9223372036854775807: null, 0: null };
      } else if (404 === arg0) {
        return { 9223372036854775807: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003059146125, 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000617897800868689 };
      } else if (409 === arg0) {
        return { 9223372036854775807: null, 0: null };
      } else if (413 === arg0) {
        return { 9223372036854775807: true, 0: true };
      } else if (429 === arg0) {
        return {};
      } else {
        return 499 === arg0 ? {} : { 9223372036854775807: true, 0: true };
      }
    }
  }
  if (arg0 >= 500) {
    if (arg0 < 600) {
      if (501 === arg0) {
        return { 9223372036854775807: "", 0: "plain" };
      } else if (503 === arg0) {
        return { 9223372036854775807: "auto.ai.mcp_server", 0: false };
      } else {
        return 504 === arg0 ? { 9223372036854775807: "pt-PT", 0: "portuguese" } : {};
      }
    }
  }
  return {};
}
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
