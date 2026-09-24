// Module ID: 13104
// Function ID: 13105
// Dependencies: [13103, 13105]
// Exports: getAsyncContextStrategy, setAsyncContextStrategy

// Module 13104
import _mod13103 from "module_13103" /* 13103 */;
import _mod13105 from "module_13105" /* 13105 */;

require = arg1;
const dependencyMap = arg6;

export const getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = _mod13103.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = _mod13105.getStackAsyncContextStrategy();
    const tmpResult = _mod13105;
  }
  return acs;
};
export const setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = _mod13103.getMainCarrier();
  _mod13103.getSentryCarrier(mainCarrier).acs = acs;
};
