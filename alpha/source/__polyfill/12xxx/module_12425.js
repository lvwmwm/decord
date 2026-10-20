// Module ID: 12425
// Function ID: 12426
// Dependencies: [12424, 12426]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 12425
import _mod12424 from "module_12424" /* 12424 */;

let tmp;
const _mod12426 = tmp(12426);

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  let acs;
  const obj = _mod12424;
  const sentryCarrier = obj.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    acs = sentryCarrier.acs;
  } else {
    const tmpResult = _mod12426;
    acs = tmpResult.getStackAsyncContextStrategy();
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const obj = _mod12424;
  const mainCarrier = obj.getMainCarrier();
  _mod12424.getSentryCarrier(mainCarrier).acs = acs;
  _mod12424;
};
