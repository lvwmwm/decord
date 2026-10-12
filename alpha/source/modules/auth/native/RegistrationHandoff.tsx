// Module ID: 16369
// Function ID: 16370
// Name: RegistrationHandoff
// Dependencies: [2]
// Exports: clearRegistrationHandoff, hasRegistrationHandoff, setRegistrationHandoff

// Module 16369 (RegistrationHandoff)
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
