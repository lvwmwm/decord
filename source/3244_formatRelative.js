// Module ID: 3244
// Function ID: 25907
// Name: formatRelative
// Dependencies: []
// Exports: default

// Module 3244 (formatRelative)
let closure_0 = {};
let closure_1 = { "Bool(false)": "noin tunti", "Bool(false)": "noin {{count}} tuntia", "Bool(false)": "tunti", "Bool(false)": "{{count}} tuntia", "Bool(false)": "p\u00E4iv\u00E4", "Bool(false)": "{{count}} p\u00E4iv\u00E4\u00E4" };

export default function formatRelative(arg0, getUTCHours) {
  if (1 !== getUTCHours.getUTCHours()) {
    let tmp2 = closure_1[arg0];
  } else {
    tmp2 = closure_0[arg0];
  }
  return tmp2;
};
export default exports.default;
