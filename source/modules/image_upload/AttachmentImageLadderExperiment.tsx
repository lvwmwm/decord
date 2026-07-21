// Module ID: 1427
// Function ID: 16699
// Name: apexExperiment
// Dependencies: []
// Exports: getAttachmentImageLadderConfig

// Module 1427 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 844175713: "<string:1358954918>", 1387159956: "<string:2872788282>", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/image_upload/AttachmentImageLadderExperiment.tsx");

export default apexExperiment;
export const getAttachmentImageLadderConfig = function getAttachmentImageLadderConfig(location) {
  return apexExperiment.getConfig({ location: location.location });
};
