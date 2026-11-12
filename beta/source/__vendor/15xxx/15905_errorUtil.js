// Module ID: 15905
// Function ID: 15906
// Name: errorUtil
// Dependencies: []

// Module 15905 (errorUtil)
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
