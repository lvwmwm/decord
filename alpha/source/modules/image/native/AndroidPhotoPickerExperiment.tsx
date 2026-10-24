// Module ID: 8157
// Function ID: 8158
// Name: AndroidPhotoPickerExperiment
// Dependencies: [1455, 2]
// Exports: getAndroidPhotoPickerExperimentConfig

// Module 8157 (AndroidPhotoPickerExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-10-android-photo-picker", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/image/native/AndroidPhotoPickerExperiment.tsx");

export const getAndroidPhotoPickerExperimentConfig = function getAndroidPhotoPickerExperimentConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
