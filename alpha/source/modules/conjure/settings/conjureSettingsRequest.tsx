// Module ID: 12232
// Function ID: 12233
// Name: conjureSettingsRequest
// Dependencies: [2]
// Exports: conjureSettingsRequestBlocks

// Module 12232 (conjureSettingsRequest)
import size from "module_2" /* 2 */;

let set;

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
