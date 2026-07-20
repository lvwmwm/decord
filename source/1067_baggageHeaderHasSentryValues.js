// Module ID: 1067
// Function ID: 12253
// Name: baggageHeaderHasSentryValues
// Dependencies: []

// Module 1067 (baggageHeaderHasSentryValues)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.baggageHeaderHasSentryValues = function baggageHeaderHasSentryValues(baggage) {
  const parts = baggage.split(",");
  return parts.some((str) => {
    const trimmed = str.trim();
    return trimmed.startsWith("sentry-");
  });
};
arg5.createHeadersSafely = function createHeadersSafely(request_headers) {
  const headers = new Headers(request_headers);
  return headers;
};
arg5.getFullURL = function getFullURL(url) {
  const uRL = new URL(url, arg1(arg6[0]).WINDOW.location.origin);
  return uRL.href;
};
arg5.isPerformanceResourceTiming = function isPerformanceResourceTiming(entryType) {
  let tmp = "resource" === entryType.entryType;
  if (tmp) {
    tmp = "initiatorType" in entryType;
  }
  if (tmp) {
    tmp = "string" === typeof entryType.nextHopProtocol;
  }
  if (tmp) {
    let tmp2 = "fetch" === entryType.initiatorType;
    if (!tmp2) {
      tmp2 = "xmlhttprequest" === entryType.initiatorType;
    }
    tmp = tmp2;
  }
  return tmp;
};
