// Module ID: 1427
// Function ID: 16701
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: getAttachmentImageLadderConfig

// Module 1427 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-07-attachment-image-ladder", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/image_upload/AttachmentImageLadderExperiment.tsx");

export default apexExperiment;
export const getAttachmentImageLadderConfig = function getAttachmentImageLadderConfig(location) {
  return apexExperiment.getConfig({ location: location.location });
};
