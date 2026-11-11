// Module ID: 12351
// Function ID: 12352
// Name: conjureProjectLink
// Dependencies: [2]
// Exports: conjureProjectLinkCode, conjureProjectLinkTicket, isConjureShareTicketExpired

// Module 12351 (conjureProjectLink)
import size from "module_2" /* 2 */;

function parseConjureProjectLink(uRL) {
  let tmp6;
  if ("https:" !== uRL.protocol) {
    if ("http:" !== uRL.protocol) {
      return null;
    }
  }
  let replaced;
  if (uRL.host != null) {
    const str3 = uRL.host.toLowerCase();
    replaced = str3.replace(/^www[.]/, "");
  }
  if (null != replaced) {
    if (set.has(replaced)) {
      let match;
      if (uRL.pathname != null) {
        match = str5.match(re1);
      }
      let tmp5 = null;
      if (null != match) {
        const obj = { applicationId: match[1], ticket: tmp6 };
        tmp6 = match[2];
        if (tmp6 == null) {
          tmp6 = null;
        }
        tmp5 = obj;
      }
      return tmp5;
    }
  }
  return null;
}
const set = new Set(["conjure.town", "conjure.city"]);
const re1 = /^\/([0-9]{17,20})\/[a-z0-9-]{1,48}(?:\/([A-Za-z0-9_-]{16,200}\.[A-Za-z0-9_-]{16,64}))?\/?$/;
const result = size.fileFinishedImporting("modules/conjure/share/conjureProjectLink.tsx");

export { parseConjureProjectLink };
export function conjureProjectLinkCode(arg0, arg1) {
  let combined = arg0;
  if (null != arg1) {
    const _HermesInternal = HermesInternal;
    combined = "" + arg0 + "/" + arg1;
  }
  return combined;
}
export function conjureProjectLinkTicket(url) {
  try {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(url);
    let ticket;
    const tmp7 = parseConjureProjectLink(uRL);
    if (tmp7 != null) {
      ticket = tmp7.ticket;
    }
    if (ticket == null) {
      ticket = null;
    }
    return ticket;
  } catch (err) {
    return null;
  }
}
export function isConjureShareTicketExpired(arg0) {
  let timestamp = arg1;
  if (arg1 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  try {
    const _JSON = JSON;
    const _atob = atob;
    const str2 = arg0.split(".", 1)[0];
    const str4 = str2.replace(/-/g, "+");
    const exp = JSON.parse(atob(str4.replace(/_/g, "/"))).exp;
    return typeof exp === "number" && 1000 * tmp5 <= timestamp;
  } catch (err) {
    return false;
  }
}
