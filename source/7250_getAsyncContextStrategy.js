// Module ID: 7250
// Function ID: 58375
// Name: getAsyncContextStrategy
// Dependencies: []

// Module 7250 (getAsyncContextStrategy)
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
