// Module ID: 14930
// Function ID: 14931
// Dependencies: [14910, 14931]

// Module 14930
import _mod14910 from "module_14910" /* 14910 */;
import _mod14931 from "module_14931" /* 14931 */;

let tmp4;
let tmp = _mod14910.process && _mod14910.process.versions;
if (!tmp) {
  tmp = _mod14910.Deno && _mod14910.Deno.version;
  _mod14910.Deno && _mod14910.Deno.version;
}
let tmp3;
if (tmp && tmp.v8) {
  let num3;
  const parts = str.split(".");
  if (parts[0] <= 0) {
    num3 = +parts[0] + parts[1];
  } else {
    num3 = 1;
  }
  tmp3 = num3;
  tmp4 = parts;
}
let match1 = !tmp3 && _mod14931;
if (match1) {
  const str3 = _mod14931;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod14931;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
