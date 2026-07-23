// Module ID: 818
// Function ID: 9138
// Name: getAsyncContextStrategy
// Dependencies: [802, 819]

// Module 818 (getAsyncContextStrategy)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getAsyncContextStrategy = function getAsyncContextStrategy(arg0) {
  const sentryCarrier = require(802) /* getSentryCarrier */.getSentryCarrier(arg0);
  if (sentryCarrier.acs) {
    let acs = sentryCarrier.acs;
  } else {
    acs = require(819) /* getAsyncContextStack */.getStackAsyncContextStrategy();
    const obj2 = require(819) /* getAsyncContextStack */;
  }
  return acs;
};
arg5.setAsyncContextStrategy = function setAsyncContextStrategy(acs) {
  const mainCarrier = require(802) /* getSentryCarrier */.getMainCarrier();
  const obj = require(802) /* getSentryCarrier */;
  require(802) /* getSentryCarrier */.getSentryCarrier(mainCarrier).acs = acs;
};
