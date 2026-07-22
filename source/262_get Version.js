// Module ID: 262
// Function ID: 3363
// Name: get Version
// Dependencies: []

// Module 262 (get Version)
const obj = { "Null": null, "Null": null };
Object.defineProperty(obj, "Version", {
  get: function() {
    return this.constants.Version;
  },
  set: undefined
});
Object.defineProperty(obj, "constants", {
  get: function() {
    const self = this;
    if (null == this.__constants) {
      self.__constants = arg2(arg6[0]).getConstants();
      const obj = arg2(arg6[0]);
    }
    return self.__constants;
  },
  set: undefined
});
Object.defineProperty(obj, "isTesting", { get: () => false, set: undefined });
Object.defineProperty(obj, "isDisableAnimations", {
  get: function() {
    let isTesting = this.constants.isDisableAnimations;
    if (null == isTesting) {
      isTesting = this.isTesting;
    }
    return isTesting;
  },
  set: undefined
});
Object.defineProperty(obj, "isTV", {
  get: function() {
    return "tv" === this.constants.uiMode;
  },
  set: undefined
});
Object.defineProperty(obj, "isVision", { get: () => false, set: undefined });
obj.select = function select(android) {
  if ("android" in android) {
    android = android.android;
  } else {
    android = "native" in android ? android.native : android.default;
  }
  return android;
};
arg5.default = obj;
