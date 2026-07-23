// Module ID: 3792
// Function ID: 29554
// Name: getBraintreeSDK
// Dependencies: [3793, 653, 3794, 3797, 1934, 3797, 2]
// Exports: collectDeviceData

// Module 3792 (getBraintreeSDK)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PaymentSettings } from "ME";

const require = arg1;
function getBraintreeSDK() {
  let obj = require(3794);
  obj = {
    createPromise() {
      return outer1_0(outer1_1[4])(outer1_1[3], outer1_1.paths);
    },
    webpackId: 3797
  };
  return obj.importWithRetry(obj).then((arg0) => arg0.default);
}
function getDeviceData(arg0) {
  let closure_0 = arg0;
  return getBraintreeSDK().then((dataCollector) => {
    dataCollector = dataCollector.dataCollector;
    let obj = { client: closure_0 };
    obj = dataCollector.create(obj);
    return obj.then((deviceData) => deviceData.deviceData).catch(() => null);
  });
}
const result = require("module_3794").fileFinishedImporting("utils/BraintreeUtils.tsx");

export { getBraintreeSDK };
export const collectDeviceData = function collectDeviceData() {
  client = client.getClient();
  if (null == client) {
    let nextPromise = getBraintreeSDK().then((client) => {
      client = client.client;
      let obj = { authorization: outer1_3.BRAINTREE.KEY };
      obj = client.create(obj);
      return obj.then((arg0) => outer2_5(arg0)).catch(() => null);
    });
    const promise = getBraintreeSDK();
  } else {
    nextPromise = getDeviceData(client);
  }
  return nextPromise;
};
