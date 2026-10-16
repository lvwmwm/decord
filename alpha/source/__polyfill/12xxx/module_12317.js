// Module ID: 12317
// Function ID: 12318
// Dependencies: [12316, 12318]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12317
import _mod12316 from "module_12316" /* 12316 */;

let tmp;
const _mod12318 = tmp(12318);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12316;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12318;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12316;
  const mainCarrier = obj.getMainCarrier();
  _mod12316.getSentryCarrier(mainCarrier).acs = acs;
  _mod12316;
};
