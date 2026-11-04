// Module ID: 953
// Function ID: 954
// Name: baggageHeaderHasSentryValues
// Dependencies: [890]
// Exports: baggageHeaderHasSentryValues, createHeadersSafely, getFullURL, isPerformanceResourceTiming

// Module 953 (baggageHeaderHasSentryValues)
import _mod890 from "module_890" /* 890 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function baggageHeaderHasSentryValues(baggage) {
  const parts = baggage.split(",");
  return parts.some((item) => {
    const trimmed = item.trim();
    return trimmed.startsWith("sentry-");
  });
}
export function createHeadersSafely(headers) {
  try {
    const _Headers = Headers;
    const self = this;
    const self2 = this;
    headers = new Headers(headers);
    return headers;
  } catch (err) {
  }
}
export function getFullURL(arg0) {
  try {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(arg0, _mod890.WINDOW.location.origin);
    return uRL.href;
  } catch (err) {
  }
}
export function isPerformanceResourceTiming(entryType) {
  let tmp = "resource" === entryType.entryType && "initiatorType" in entryType && typeof entryType.nextHopProtocol === "string";
  if (tmp) {
    tmp = "fetch" === entryType.initiatorType || "xmlhttprequest" === entryType.initiatorType;
    const tmp2 = "fetch" === entryType.initiatorType || "xmlhttprequest" === entryType.initiatorType;
  }
  return tmp;
}
