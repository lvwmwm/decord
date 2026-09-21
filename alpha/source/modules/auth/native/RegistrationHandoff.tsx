// Module ID: 16275
// Function ID: 16276
// Name: RegistrationHandoff
// Dependencies: [2]
// Exports: clearRegistrationHandoff, hasRegistrationHandoff, setRegistrationHandoff

// Module 16275 (RegistrationHandoff)
import size from "module_2" /* 2 */;

let c0 = false;
const result = size.fileFinishedImporting("modules/auth/native/RegistrationHandoff.tsx");

export function setRegistrationHandoff() {
  c0 = true;
}
export function hasRegistrationHandoff() {
  return c0;
}
export function clearRegistrationHandoff() {
  c0 = false;
}
