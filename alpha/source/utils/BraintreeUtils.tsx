// Module ID: 4728
// Function ID: 4729
// Name: BraintreeUtils
// Dependencies: [4729, 1071, 4730, 4733, 2119, 4733, 2]
// Exports: collectDeviceData, getBraintreeSDK

// Module 4728 (BraintreeUtils)
import Constants from "Constants" /* 1071 */;
import core_CodeSplittingUtils from "core/CodeSplittingUtils" /* 4730 */;
import BraintreeStore from "BraintreeStore" /* 4729 */;
import size from "module_2" /* 2 */;

let dataCollector;

function createPromise() {
  return closure_1_0(paths[4])(paths[3], paths.paths);
}
const f86052 = (result) => result.default;
const PaymentSettings = Constants.PaymentSettings;
const result = size.fileFinishedImporting("utils/BraintreeUtils.tsx");

export function getBraintreeSDK() {
  const obj = core_CodeSplittingUtils;
  const obj2 = { createPromise, webpackId: 4733 };
  const importWithRetryResult = obj.importWithRetry(obj2);
  return importWithRetryResult.then(f86052);
}
export function collectDeviceData() {
  let nextPromise1;
  let client = BraintreeStore.getClient();
  if (null == client) {
    let obj2 = { createPromise, webpackId: 4733 };
    const obj3 = core_CodeSplittingUtils;
    let importWithRetryResult = obj3.importWithRetry(obj2);
    let nextPromise = importWithRetryResult.then(f86052);
    nextPromise1 = nextPromise.then((client) => {
      client = client.client;
      let obj = { authorization: constants.BRAINTREE.KEY };
      let obj2 = client.create(obj);
      let nextPromise = obj2.then((result) => {
        let paths;
        let closure_0 = result;
        let obj = closure_1_0(closure_1_1[2]);
        let obj2 = { createPromise, webpackId: closure_1_1[5] };
        const importWithRetryResult = obj.importWithRetry(obj2);
        let nextPromise = importWithRetryResult.then(f86052);
        return nextPromise.then((dataCollector) => {
          dataCollector = dataCollector.dataCollector;
          const obj = { client };
          const obj2 = dataCollector.create(obj);
          const nextPromise = obj2.then((deviceData) => deviceData.deviceData);
          return nextPromise.catch(() => null);
        });
      });
      return nextPromise.catch(() => null);
    });
  } else {
    let obj = core_CodeSplittingUtils;
    const obj4 = { createPromise, webpackId: 4733 };
    const importWithRetryResult1 = obj.importWithRetry(obj4);
    const nextPromise2 = importWithRetryResult1.then(f86052);
    nextPromise1 = nextPromise2.then((dataCollector) => {
      dataCollector = dataCollector.dataCollector;
      const obj = { client };
      const obj2 = dataCollector.create(obj);
      const nextPromise = obj2.then((deviceData) => deviceData.deviceData);
      return nextPromise.catch(() => null);
    });
  }
  return nextPromise1;
}
