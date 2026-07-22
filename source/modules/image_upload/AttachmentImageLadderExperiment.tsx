// Module ID: 1427
// Function ID: 16699
// Name: apexExperiment
// Dependencies: []
// Exports: getAttachmentImageLadderConfig

// Module 1427 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/image_upload/AttachmentImageLadderExperiment.tsx");

export default apexExperiment;
export const getAttachmentImageLadderConfig = function getAttachmentImageLadderConfig(location) {
  return apexExperiment.getConfig({ location: location.location });
};
