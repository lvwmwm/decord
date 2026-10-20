// Module ID: 12323
// Function ID: 12324
// Name: conjureSecretsRequests
// Dependencies: [5, 11077, 2]
// Exports: submitProjectSecrets

// Module 12323 (conjureSecretsRequests)
import conjureWorkerFetch from "conjureWorkerFetch" /* 11077 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_2, closure_3;

let obj = function _submitProjectSecrets() {
  obj = _asyncToGenerator(async (arg0, json) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let obj2;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp2;
              closure_0 = undefined;
              c4 = 1;
              c5 = 1;
              const obj5 = { method: "PUT", json };
              const obj6 = { value: obj2.fetchConjureWorker(closure_0, "/agent/secrets", obj5), done: false };
              obj2 = conjureWorkerFetch;
              return obj6;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_0 = value;
            if (410 === closure_0.status) {
              const self3 = this;
              throw new closure_131_3("secret request expired");
            } else if (closure_0.ok) {
              c5 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("secret submission failed (" + closure_0.status + ")");
              throw error;
            }
          }
        } catch (tmp19) {
          c5 = 3;
          throw tmp19;
        }
      }
    })();
  });
  return obj(...arguments);
};
class ConjureSecretRequestExpiredError extends Error {
}
const result = size.fileFinishedImporting("modules/conjure/secrets/conjureSecretsRequests.tsx");

export { ConjureSecretRequestExpiredError };
export const submitProjectSecrets = function submitProjectSecrets() {
  return obj(...arguments);
};
