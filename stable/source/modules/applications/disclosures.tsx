// Module ID: 9369
// Function ID: 9370
// Name: disclosures
// Dependencies: [5, 1074, 1270, 9370, 1114, 2]
// Exports: ackDisclosures, getDisclosures, getTextForDisclosure

// Module 9369 (disclosures)
import HTTPUtils from "HTTPUtils" /* 1270 */;
import applications from "applications" /* 9370 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_4 = async function _getDisclosures() {
  closure_1 = tmp2;
  const result = Endpoints.APPLICATION_DISCLOSURES(closure_0);
  const HTTP = HTTPUtils.HTTP;
  closure_129_0 = await HTTP.get({ url: result, retries: 3, rejectWithError: HTTPUtils.rejectWithMigratedError() });
  return { disclosures: closure_129_0.body.disclosures, ackedDisclosures: closure_129_0.body.acked_disclosures, allAcked: closure_129_0.body.all_acked };
};
let closure_5 = async function _ackDisclosures(arg0, disclosures) {
  closure_0 = arg0;
  c3 = 0;
  c2 = 0;
  return (async (arg0, value) => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const result = Endpoints.APPLICATION_DISCLOSURES(closure_0);
            const HTTP = HTTPUtils.HTTP;
            const request = { url: result, body: null, rejectWithError: null };
            const obj4 = { disclosures };
            request.body = obj4;
            request.rejectWithError = HTTPUtils.rejectWithMigratedError();
            c3 = 1;
            c2 = 1;
            const obj5 = { value: HTTP.post(request), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp5) {
        c2 = tmp;
        throw tmp5;
      }
    }
  })();
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/applications/disclosures.tsx");

export const ApplicationDisclosure = fn(9370).ApplicationDisclosureType;
export const getDisclosures = function getDisclosures() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const ackDisclosures = function ackDisclosures() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getTextForDisclosure = function getTextForDisclosure(disclosure) {
  if (applications.ApplicationDisclosureType.IP_LOCATION === disclosure) {
    const intl2 = tmp(1114).intl;
    return intl2.string(tmp(1114).t["6wPmjo"]);
  } else if (tmp(9370).ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS === disclosure) {
    const intl = tmp(1114).intl;
    return intl.string(tmp(1114).t["/uOMKZ"]);
  } else {
    return null;
  }
};
