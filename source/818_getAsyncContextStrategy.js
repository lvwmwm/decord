// Module ID: 818
// Function ID: 9137
// Name: getAsyncContextStrategy
// Dependencies: []

// Module 818 (getAsyncContextStrategy)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = arg1(arg6[0]).getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = arg1(arg6[1]).getStackAsyncContextStrategy();
    const obj2 = arg1(arg6[1]);
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = arg1(arg6[0]).getMainCarrier();
  const obj = arg1(arg6[0]);
  arg1(arg6[0]).getSentryCarrier(mainCarrier).acs = acs;
};
