// Module ID: 8962
// Function ID: 70676
// Name: convertOAuth2Authorization
// Dependencies: [483, 2]
// Exports: convertOAuth2Authorization

// Module 8962 (convertOAuth2Authorization)
const result = require("set").fileFinishedImporting("modules/oauth2/convertor.tsx");

export const convertOAuth2Authorization = function convertOAuth2Authorization(guilds) {
  let tmp = guilds;
  if (null != guilds.guilds) {
    let obj = {};
    let merged = Object.assign(guilds);
    guilds = guilds.guilds;
    obj["guilds"] = guilds.map((permissions) => {
      const obj = {};
      const merged = Object.assign(permissions);
      obj["permissions"] = outer1_0(outer1_1[0]).deserialize(permissions.permissions);
      return obj;
    });
    tmp = obj;
  }
  return tmp;
};
