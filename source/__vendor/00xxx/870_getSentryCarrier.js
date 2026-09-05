// Module ID: 870
// Function ID: 871
// Name: getSentryCarrier
// Dependencies: [682]

// Module 870 (getSentryCarrier)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 682 */;

require = arg1;
const dependencyMap = arg6;
arg5.getSentryCarrier = () => {
  const mainCarrier = registerSpanErrorInstrumentation.getMainCarrier();
  const tmp4 = mainCarrier.__SENTRY__ || {};
  mainCarrier.__SENTRY__ = tmp4;
  const tmp5 = tmp4[registerSpanErrorInstrumentation.SDK_VERSION] || {};
  tmp4[registerSpanErrorInstrumentation.SDK_VERSION] = tmp5;
  return tmp5;
};
