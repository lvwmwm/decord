// Module ID: 7248
// Function ID: 58369
// Name: getSpanStatusFromHttpCode
// Dependencies: []

// Module 7248 (getSpanStatusFromHttpCode)
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
        return { -1179595444: 17891332, 1376044464: 3185 };
      } else if (403 === arg0) {
        return { -1179595444: null, 1376044464: null };
      } else if (404 === arg0) {
        return {};
      } else if (409 === arg0) {
        return {};
      } else if (413 === arg0) {
        return { -1179595444: true, 1376044464: true };
      } else if (429 === arg0) {
        return {};
      } else {
        return 499 === arg0 ? { -1179595444: 1111556098, 1376044464: 16778310 } : { -1179595444: null, 1376044464: null };
      }
    }
  }
  if (arg0 >= 500) {
    if (arg0 < 600) {
      if (501 === arg0) {
        return {};
      } else if (503 === arg0) {
        return { -1179595444: 557057.077966721, 1376044464: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004280798090950941 };
      } else {
        return 504 === arg0 ? { -1179595444: null, 1376044464: null } : { -1179595444: true, 1376044464: true };
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
