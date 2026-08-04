// Module ID: 13502
// Function ID: 13503
// Name: all
// Dependencies: [13503]

// Module 13502 (all)

export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = require(13503) /* all */(obj);
  }
  return tmp2;
};
