// Module ID: 1427
// Function ID: 16694
// Name: apexExperiment
// Dependencies: []
// Exports: getAttachmentImageLadderConfig

// Module 1427 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: 218104074, -1845285747: 1140851015, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/image_upload/AttachmentImageLadderExperiment.tsx");

export default apexExperiment;
export const getAttachmentImageLadderConfig = function getAttachmentImageLadderConfig(location) {
  return apexExperiment.getConfig({ location: location.location });
};
