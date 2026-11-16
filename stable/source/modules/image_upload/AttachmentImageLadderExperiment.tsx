// Module ID: 1447
// Function ID: 1448
// Name: AttachmentImageLadderExperiment
// Dependencies: [1072, 1448, 38, 1449, 2]
// Exports: getAttachmentImageLadderConfig, parseTreatmentConfig

// Module 1447 (AttachmentImageLadderExperiment)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1072 */;
import AttachmentImageLadder from "AttachmentImageLadder" /* 1448 */;
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

function parseTreatmentConfig(arg0) {
  let items;
  let obj;
  const parsed = JSON.parse(arg0);
  let maxUpscale = parsed.maxUpscale;
  if (maxUpscale == null) {
    maxUpscale = obj.maxUpscale;
  }
  let isFiniteResult = typeof maxUpscale === "number";
  const tmp7 = _modDef38;
  if (typeof maxUpscale === "number") {
    const _Number2 = Number;
    isFiniteResult = Number.isFinite(maxUpscale);
  }
  if (isFiniteResult) {
    isFiniteResult = maxUpscale >= 1;
  }
  if (isFiniteResult) {
    isFiniteResult = maxUpscale <= 1.5;
  }
  tmp7(isFiniteResult, "maxUpscale must be a number in [1, %s]", 1.5);
  let minSnapDownDpr = parsed.minSnapDownDpr;
  if (minSnapDownDpr == null) {
    minSnapDownDpr = obj.minSnapDownDpr;
  }
  let isFiniteResult1 = typeof minSnapDownDpr === "number";
  const tmp4Result = _modDef38;
  if (typeof minSnapDownDpr === "number") {
    const _Number3 = Number;
    isFiniteResult1 = Number.isFinite(minSnapDownDpr);
  }
  if (isFiniteResult1) {
    isFiniteResult1 = minSnapDownDpr >= 1;
  }
  if (isFiniteResult1) {
    isFiniteResult1 = minSnapDownDpr <= 4;
  }
  tmp4Result(isFiniteResult1, "minSnapDownDpr must be a number in [1, %s]", 4);
  let ladder = parsed.ladder;
  if (ladder == null) {
    ladder = obj.ladder;
  }
  const tmp4Result2 = _modDef38;
  const isArray = Array.isArray(ladder) && ladder.length > 0 && ladder.length <= 32;
  tmp4Result2(isArray, "ladder must be a non-empty array of at most %s rungs", 32);
  const iter = ladder[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp20 = nextResult;
    let _Number = Number;
    let tmp25 = _modDef38;
    let isIntegerResult = Number.isInteger(nextResult);
    if (isIntegerResult) {
      isIntegerResult = tmp20 >= 16;
    }
    if (isIntegerResult) {
      isIntegerResult = tmp20 <= closure_2;
    }
    let str = "ladder rungs must be integers in [%s, %s]";
    let tmp25Result = tmp25(isIntegerResult, "ladder rungs must be integers in [%s, %s]", 16, closure_2);
    continue;
  }
  obj = { enabled: true, ladder: items.sort((arg0, arg1) => arg0 - arg1), maxUpscale, minSnapDownDpr };
  items = [...tmp17];
  return obj;
}
let closure_2 = Constants.MEDIA_PROXY_MAX_TARGET_RESOLUTION;
const defaultConfig = { enabled: false, ladder: AttachmentImageLadder.ATTACHMENT_LADDER, maxUpscale: AttachmentImageLadder.ATTACHMENT_LADDER_MAX_UPSCALE, minSnapDownDpr: 2 };
const obj2 = { name: "2026-07-attachment-image-ladder", kind: "user", defaultConfig, variations: { 0: defaultConfig, 1: parseTreatmentConfig } };
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/image_upload/AttachmentImageLadderExperiment.tsx");

export default apexExperiment;
export { parseTreatmentConfig };
export function getAttachmentImageLadderConfig(location) {
  const obj = { location: location.location };
  return apexExperiment.getConfig(obj);
}
