// Module ID: 7657
// Function ID: 61066
// Name: createFakeSharedValue
// Dependencies: [2]
// Exports: createFakeSharedValue

// Module 7657 (createFakeSharedValue)
const result = require("set").fileFinishedImporting("modules/reanimated/ReanimatedHelperTypes.tsx");

export const createFakeSharedValue = function createFakeSharedValue(COLLAPSED) {
  return {
    value: COLLAPSED,
    get() {
      const error = new Error("FakeSharedValue: You cannot get a value on fake shared value");
      throw error;
    },
    set() {
      const error = new Error("FakeSharedValue: You cannot set a value on fake shared value");
      throw error;
    },
    addListener() {
      const error = new Error("FakeSharedValue: You cannot add a listener to a fake shared value, please use a real one");
      throw error;
    },
    removeListener() {
      const error = new Error("FakeSharedValue: You cannot remove a listener to a fake shared value, please use a real one");
      throw error;
    },
    modify() {
      const error = new Error("FakeSharedValue: You cannot modify a shared value, please use a real one");
      throw error;
    }
  };
};
