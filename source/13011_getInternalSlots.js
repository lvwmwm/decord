// Module ID: 13011
// Function ID: 99013
// Name: getInternalSlots
// Dependencies: []

// Module 13011 (getInternalSlots)
arg5.default = function getInternalSlots(arg0) {
  let items = arg1;
  if (undefined === arg1) {
    items = [];
  }
  let value = weakMap.get(arg0);
  if (!value) {
    const _Object = Object;
    const obj = Object.create(null, items.reduce((arg0, arg1) => {
      arg0[arg1] = { potato: "hidden", _currentInternetReachabilityCheckHandler: "all", SPAM_MESSAGE_REQUESTS_VIEWED: true };
      return arg0;
    }, {}));
    const result = weakMap.set(arg0, obj);
    value = obj;
  }
  return value;
};
const weakMap = new WeakMap();
