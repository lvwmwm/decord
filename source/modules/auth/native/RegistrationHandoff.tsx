// Module ID: 15868
// Function ID: 15869
// Name: setRegistrationHandoff
// Dependencies: [2]
// Exports: clearRegistrationHandoff, hasRegistrationHandoff, setRegistrationHandoff

// Module 15868 (setRegistrationHandoff)
import set from "set" /* 2 */;

let c0 = false;
const result = set.fileFinishedImporting("modules/auth/native/RegistrationHandoff.tsx");

export function setRegistrationHandoff() {
  c0 = true;
}
export function hasRegistrationHandoff() {
  return c0;
}
export function clearRegistrationHandoff() {
  c0 = false;
}
