// Module ID: 8516
// Function ID: 8517
// Name: convertor
// Dependencies: [1086, 2]
// Exports: convertOAuth2Authorization

// Module 8516 (convertor)
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/oauth2/convertor.tsx");

export const convertOAuth2Authorization = function convertOAuth2Authorization(guilds) {
  let tmp = guilds;
  if (null != guilds.guilds) {
    let obj = {};
    let merged = Object.assign(guilds);
    guilds = guilds.guilds;
    obj.guilds = guilds.map((permissions) => {
      const obj = {};
      const merged = Object.assign(permissions);
      const deserializer = BigFlagUtilsAll;
      obj.permissions = deserializer.deserialize(permissions.permissions);
      return obj;
    });
    tmp = obj;
  }
  return tmp;
};
