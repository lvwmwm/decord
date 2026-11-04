// Module ID: 10001
// Function ID: 10002
// Name: NitroFetchHybrid
// Dependencies: [9999]
// Exports: clientUnavailableError, ensureClient

// Module 10001 (NitroFetchHybrid)
import hybridObject from "hybridObject" /* 9999 */;

let c3, client;


export const NitroFetchHybrid = hybridObject.NitroFetch;
export function ensureClient() {
  const tmp = client;
  if (tmp) {
    return client;
  } else {
    try {
      const NitroFetch = hybridObject.NitroFetch;
      client = NitroFetch.createClient();
      c3 = undefined;
    } catch (tmp6) {
      c3 = tmp6;
      const _console = console;
      console.error("Failed to create NitroFetch client", tmp6);
    }
    return client;
  }
}
export function clientUnavailableError() {
  let error;
  if (c3 instanceof Error) {
    error = c3;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    error = new Error("NitroFetch client not available");
  }
  return error;
}
