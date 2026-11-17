// Module ID: 16213
// Function ID: 16214
// Name: errorUtil
// Dependencies: []

// Module 16213 (errorUtil)
let obj = {
  errToObj: (message) => {
    let tmp;
    if (typeof message === "string") {
      tmp = { message };
      const obj = { message };
    } else {
      tmp = message || {};
    }
    return tmp;
  },
  toString: (message) => {
    let tmp = message;
    if (typeof message !== "string") {
      message = undefined;
      if (null != message) {
        message = message.message;
      }
      tmp = message;
    }
    return tmp;
  }
};

export const errorUtil = obj;
