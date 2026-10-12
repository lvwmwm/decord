// Module ID: 14571
// Function ID: 14572
// Dependencies: [14551, 14572]

// Module 14571
import _mod14551 from "module_14551" /* 14551 */;
import _mod14572 from "module_14572" /* 14572 */;

let tmp4;
let tmp = _mod14551.process && _mod14551.process.versions;
if (!tmp) {
  tmp = _mod14551.Deno && _mod14551.Deno.version;
  _mod14551.Deno && _mod14551.Deno.version;
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
let match1 = !tmp3 && _mod14572;
if (match1) {
  const str3 = _mod14572;
  const match = str3.match(/Edge\/(\d+)/);
  let tmp8 = !match;
  if (match) {
    tmp8 = match[1] >= 74;
  }
  match1 = tmp8;
  tmp4 = match;
}
if (match1) {
  const str4 = _mod14572;
  match1 = str4.match(/Chrome\/(\d+)/);
  tmp4 = match1;
}
if (match1) {
  tmp3 = +tmp4[1];
}

export default tmp3;
