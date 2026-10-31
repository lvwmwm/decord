// Module ID: 13446
// Function ID: 13447
// Name: CheckpointCharacterReferencedAssets
// Dependencies: [1376, 13447, 13612, 13613, 2]
// Exports: getCheckpointCharacterReferencedAssets, getCheckpointCharacterVisibleTextureNames

// Module 13446 (CheckpointCharacterReferencedAssets)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1376 */;
import CheckpointCharacterTextureAssets from "CheckpointCharacterTextureAssets" /* 13447 */;
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 13612 */;
import size from "module_2" /* 2 */;

let set = new Set([1]);
const keys = Object.keys(CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET);
let closure_3 = keys.map((name) => {
  let combined;
  let obj2;
  const obj = { name, role: obj2.getCheckpointCharacterTextureRole(name), swapKey: combined };
  combined = name;
  obj2 = CheckpointCharacterTextureUtils;
  const obj3 = utils_PlatformUtils;
  if (obj3.isIOS()) {
    const _HermesInternal = HermesInternal;
    combined = "" + name + "-" + CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET[name].riveId;
  }
  return obj;
});
const result = size.fileFinishedImporting("modules/checkpoint/character/CheckpointCharacterReferencedAssets.tsx");

export function getCheckpointCharacterVisibleTextureNames(arg0, chapterID2, device2) {
  let closure_0 = arg0;
  let closure_1 = chapterID2;
  let closure_2 = device2;
  set = new Set();
  const item = set.forEach((item) => {
    let name;
    let role;
    ({ name, role } = item);
    const type = role.type;
    if (CheckpointCharacterTextureUtils.CheckpointCharacterTextureType.SLOT !== type) {
      if (CheckpointCharacterTextureUtils.CheckpointCharacterTextureType.TRAIT === type) {
        if (closure_0[role.path] === role.riveId) {
          set.add(name);
        }
      } else if (CheckpointCharacterTextureUtils.CheckpointCharacterTextureType.LAYOUT === type) {
        const layouts = role.layouts;
        if (layouts.includes(device2)) {
          set.add(name);
        }
      } else if (CheckpointCharacterTextureUtils.CheckpointCharacterTextureType.ALWAYS === type) {
        const hasItem = "tex_wireframe_spritesheet" !== name || set.has(chapterID2);
        if (hasItem) {
          set.add(name);
        }
      }
    }
  });
  return set;
}
export function getCheckpointCharacterReferencedAssets(checkpointCharacterLoadedTextureNames, arg1) {
  let closure_1 = arg1;
  let obj = {};
  const item = closure_3.forEach((name) => {
    let url;
    name = name.name;
    const swapKey = name.swapKey;
    if (checkpointCharacterLoadedTextureNames.has(name)) {
      const tmpResult = CheckpointCharacterTextureUtils;
      url = tmpResult.getCheckpointCharacterTextureUrl(name, closure_1);
    } else {
      url = tmp(13613).CHECKPOINT_CHARACTER_BLANK_TEXTURE.url;
    }
    obj = { source: { uri: url } };
    obj[swapKey] = obj;
  });
  return obj;
}
