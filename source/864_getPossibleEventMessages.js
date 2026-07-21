// Module ID: 864
// Function ID: 9652
// Name: getPossibleEventMessages
// Dependencies: []

// Module 864 (getPossibleEventMessages)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getPossibleEventMessages = function getPossibleEventMessages(message) {
  const items = [];
  if (message.message) {
    items.push(tmp.message);
  }
  let value = tmp5;
  if (null != message.exception.values[message.exception.values.length - 1]) {
    value = iter2.value;
  }
  if (value) {
    items.push(iter2.value);
    if (iter2.type) {
      const _HermesInternal = HermesInternal;
      items.push("" + iter.type + ": " + iter.value);
    }
  }
};
