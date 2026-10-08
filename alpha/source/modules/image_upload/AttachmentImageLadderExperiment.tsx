// Module ID: 1450
// Function ID: 1451
// Name: AttachmentImageLadderExperiment
// Dependencies: [1451, 1452, 2]
// Exports: getAttachmentImageLadderConfig

// Module 1450 (AttachmentImageLadderExperiment)
import AttachmentImageLadder from "AttachmentImageLadder" /* 1451 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj3;
let obj = { enabled: false, maxUpscale: AttachmentImageLadder.ATTACHMENT_LADDER_MAX_UPSCALE, minSnapDownDpr: 2 };
const obj2 = { name: "2026-07-attachment-image-ladder", kind: "user", defaultConfig: obj, variations: obj3 };
obj3 = { 0: obj, 1: null };
const createApexExperiment = ApexExperiment.createApexExperiment;
const obj4 = { enabled: true };
const merged = Object.assign(obj);
obj3[1] = obj4;
const apexExperiment = createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/image_upload/AttachmentImageLadderExperiment.tsx");

export default apexExperiment;
export const getAttachmentImageLadderConfig = function getAttachmentImageLadderConfig(location) {
  const obj = { location: location.location };
  return apexExperiment.getConfig(obj);
};
