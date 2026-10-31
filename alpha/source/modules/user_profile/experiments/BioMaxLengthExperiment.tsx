// Module ID: 8733
// Function ID: 8734
// Name: BioMaxLengthExperiment
// Dependencies: [1072, 1447, 2]
// Exports: getBioMaxLength, useBioMaxLength

// Module 8733 (BioMaxLengthExperiment)
import Constants from "Constants" /* 1072 */;
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let BIO_MAX_LENGTH;
let BIO_MAX_LENGTH_INCREASED;
let obj2;
({ BIO_MAX_LENGTH, BIO_MAX_LENGTH_INCREASED } = Constants);
let obj = { name: "2026-08-user-bio-max-length", kind: "user", defaultConfig: { maxLength: BIO_MAX_LENGTH }, variations: obj2 };
obj2 = { 0: { maxLength: BIO_MAX_LENGTH }, 1: { maxLength: BIO_MAX_LENGTH_INCREASED } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/BioMaxLengthExperiment.tsx");

export function useBioMaxLength(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj).maxLength;
}
export function getBioMaxLength(location) {
  const obj = { location: location.location };
  return closure_0.getConfig(obj).maxLength;
}
