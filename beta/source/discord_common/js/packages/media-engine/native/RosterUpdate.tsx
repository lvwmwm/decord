// Module ID: 2137
// Function ID: 2138
// Name: RosterUpdate
// Dependencies: [2]
// Exports: parseNativeRosterUpdate, toRosterUpdate

// Module 2137 (RosterUpdate)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/RosterUpdate.tsx");

export function parseNativeRosterUpdate(parsed) {
  let changes;
  let mapped;
  let memberIds;
  if (null != parsed) {
    if (typeof parsed === "object") {
      if ("changes" in parsed) {
        if ("memberIds" in parsed) {
          ({ changes, memberIds } = parsed);
          if (null == changes) {
            changes = {};
          }
          const _Array = Array;
          const obj2 = { changes, memberIds: mapped };
          mapped = null;
          if (Array.isArray(memberIds)) {
            const _String = String;
            mapped = memberIds.map(String);
          }
          return obj2;
        }
      }
      return { changes: parsed, memberIds: null };
    }
  }
  return { changes: {}, memberIds: null };
}
export function toRosterUpdate(changes) {
  let mapped;
  let memberIds;
  if (null != changes) {
    let obj;
    if (typeof changes === "object") {
      if ("changes" in changes) {
        if ("memberIds" in changes) {
          ({ changes, memberIds } = changes);
          if (null == changes) {
            changes = {};
          }
          const _Array = Array;
          const obj2 = { changes, memberIds: mapped };
          mapped = null;
          if (Array.isArray(memberIds)) {
            const _String = String;
            mapped = memberIds.map(String);
          }
          obj = obj2;
        }
      }
      obj = { changes, memberIds: null };
    }
    return obj;
  }
  obj = { changes: {}, memberIds: null };
}
