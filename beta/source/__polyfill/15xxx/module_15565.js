// Module ID: 15565
// Function ID: 15566
// Dependencies: [15545, 15566]

// Module 15565
import _mod15545 from "module_15545" /* 15545 */;
import _mod15566 from "module_15566" /* 15566 */;

let tmp4;
let tmp = _mod15545.process && _mod15545.process.versions;
if (!tmp) {
  tmp = _mod15545.Deno && _mod15545.Deno.version;
  _mod15545.Deno && _mod15545.Deno.version;
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
let match1 = !tmp3 && _mod15566;
if (match1) {
  const str3 = _mod15566;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod15566;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
