// Module ID: 13414
// Function ID: 13415
// Name: all
// Dependencies: [13387]

// Module 13414 (all)

export default (arg0) => {
  if (require(13387) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};
