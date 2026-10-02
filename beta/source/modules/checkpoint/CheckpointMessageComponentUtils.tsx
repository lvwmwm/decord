// Module ID: 5082
// Function ID: 5083
// Name: checkpoint/CheckpointMessageComponentUtils
// Dependencies: [5062, 5083, 1985, 1127, 3008, 2]
// Exports: getCheckpointDataFromMessage, getCheckpointLabel, transformCheckpoint2026CardComponent, transformCheckpoint2026CardToRowGeneratedComponent

// Module 5082 (checkpoint/CheckpointMessageComponentUtils)
import intl2 from "intl" /* 1127 */;
import Server from "Server" /* 1985 */;
import _modDef3008 from "module_3008" /* 3008 */;
import CheckpointConstants from "CheckpointConstants" /* 5062 */;
import CheckpointExperiment from "CheckpointExperiment" /* 5083 */;
import size from "module_2" /* 2 */;

const CheckpointVersions = CheckpointConstants.CheckpointVersions;
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointMessageComponentUtils.tsx");

export const transformCheckpoint2026CardComponent = function transformCheckpoint2026CardComponent(checkpoint_data) {
  let obj3;
  let tmp = null;
  const obj = CheckpointExperiment;
  if (obj.getIsCheckpointEnabled("transformCheckpoint2026CardComponent")) {
    let tmp3 = null;
    if (null != checkpoint_data.character) {
      const obj2 = { version: checkpoint_data.version, character: obj3 };
      tmp3 = obj2;
      obj3 = { base: checkpoint_data.character.base, shoes: checkpoint_data.character.shoes, outfit: checkpoint_data.character.outfit, face: checkpoint_data.character.face, hat: checkpoint_data.character.hat, wearable: checkpoint_data.character.wearable, aura: checkpoint_data.character.aura };
    }
    tmp = tmp3;
  }
  return tmp;
};
export const transformCheckpoint2026CardToRowGeneratedComponent = function transformCheckpoint2026CardToRowGeneratedComponent(checkpointData) {
  let items;
  const obj = { characterLayerUrls: items };
  const merged = Object.assign(checkpointData);
  if (null != checkpointData.character) {
    const character = checkpointData.character;
    items = [];
  } else {
    items = [];
  }
  return obj;
};
export const getCheckpointDataFromMessage = function getCheckpointDataFromMessage(contentMessage) {
  const first = contentMessage.components[0];
  let checkpointData = null;
  if (null != first) {
    checkpointData = null;
    if (first.type === Server.ComponentType.CHECKPOINT_CARD) {
      checkpointData = first.checkpointData;
    }
  }
  return checkpointData;
};
export const getCheckpointLabel = function getCheckpointLabel(checkpointDataFromMessage) {
  if (CheckpointVersions.V2025 === checkpointDataFromMessage.version) {
    const intl = intl2.intl;
    return intl.string(_modDef3008.goiR2u);
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
};
