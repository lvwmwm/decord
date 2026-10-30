// Module ID: 9730
// Function ID: 9731
// Name: convertor
// Dependencies: [1084, 2]
// Exports: convertOAuth2Authorization

// Module 9730 (convertor)
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/oauth2/convertor.tsx");

export function convertOAuth2Authorization(guilds) {
  let tmp = guilds;
  if (null != guilds.guilds) {
    let obj = {
      guilds: guilds.map((permissions) => {
          let deserializer;
          const obj = { permissions: deserializer.deserialize(permissions.permissions) };
          const merged = Object.assign(permissions);
          deserializer = BigFlagUtilsAll;
          return obj;
        })
    };
    let merged = Object.assign(guilds);
    guilds = guilds.guilds;
    tmp = obj;
  }
  return tmp;
}
