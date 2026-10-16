// Module ID: 968
// Function ID: 969
// Name: baggageHeaderHasSentryValues
// Dependencies: [905]
// Exports: baggageHeaderHasSentryValues, createHeadersSafely, getFullURL, isPerformanceResourceTiming

// Module 968 (baggageHeaderHasSentryValues)
import _mod905 from "module_905" /* 905 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const baggageHeaderHasSentryValues = function baggageHeaderHasSentryValues(baggage) {
  const parts = baggage.split(",");
  return parts.some((item) => {
    const trimmed = item.trim();
    return trimmed.startsWith("sentry-");
  });
};
export const createHeadersSafely = function createHeadersSafely(headers) {
  try {
    const _Headers = Headers;
    const self = this;
    const self2 = this;
    headers = new Headers(headers);
    return headers;
  } catch (err) {
  }
};
export const getFullURL = function getFullURL(arg0) {
  try {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(arg0, _mod905.WINDOW.location.origin);
    return uRL.href;
  } catch (err) {
  }
};
export const isPerformanceResourceTiming = function isPerformanceResourceTiming(entryType) {
  let tmp = "resource" === entryType.entryType && "initiatorType" in entryType && typeof entryType.nextHopProtocol === "string";
  if (tmp) {
    tmp = "fetch" === entryType.initiatorType || "xmlhttprequest" === entryType.initiatorType;
    const tmp2 = "fetch" === entryType.initiatorType || "xmlhttprequest" === entryType.initiatorType;
  }
  return tmp;
};
