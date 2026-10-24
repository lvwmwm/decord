// Module ID: 12373
// Function ID: 12374
// Name: conjureSettingsRequest
// Dependencies: [2]
// Exports: conjureSettingsRequestBlocks, conjureSettingsRequestIsPickOnly, conjureSettingsRequestKeys

// Module 12373 (conjureSettingsRequest)
import size from "module_2" /* 2 */;

let set = new Set(["select", "channel", "role", "user"]);
const result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsRequest.tsx");

export const conjureSettingsRequestBlocks = function conjureSettingsRequestBlocks(arg0, settings) {
  let someResult = null != settings;
  if (someResult) {
    let keys = arg0.keys;
    if (keys == null) {
      keys = [];
    }
    someResult = keys.some((item) => {
      settings = item;
      const schema = settings.schema;
      const found = schema.find((key) => key.key === closure_0);
      if (null == found) {
        return false;
      } else if ("secret" === found.type) {
        const secrets = tmp.secrets;
        const found1 = secrets.find((name) => name.name === closure_0);
        set = undefined;
        if (found1 != null) {
          set = found1.set;
        }
        return true !== set;
      } else {
        return null == tmp3 || "" === tmp3;
      }
    });
  }
  return someResult;
};
export const conjureSettingsRequestIsPickOnly = function conjureSettingsRequestIsPickOnly(arg0, arg1) {
  let schema = arg1;
  let keys = arg0.keys;
  if (keys == null) {
    keys = [];
  }
  const everyResult = null != arg1 && 0 !== keys.length && keys.every((item) => {
    schema = item;
    schema = schema.schema;
    const found = schema.find((key) => key.key === closure_0);
    const hasItem = null != found && set.has(found.type);
    return hasItem;
  });
  return everyResult;
};
export const conjureSettingsRequestKeys = function conjureSettingsRequestKeys(settingsRequest, settings) {
  let keys = settingsRequest.keys;
  if (keys == null) {
    keys = [];
  }
  if (keys.length <= 0) {
    const schema = settings.schema;
    keys = schema.map((key) => key.key);
  }
  return keys;
};
