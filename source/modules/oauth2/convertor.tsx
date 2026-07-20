// Module ID: 8950
// Function ID: 70599
// Name: convertOAuth2Authorization
// Dependencies: [6, 7]
// Exports: convertOAuth2Authorization

// Module 8950 (convertOAuth2Authorization)
import _defineProperties from "_defineProperties";

const result = _defineProperties.fileFinishedImporting("modules/oauth2/convertor.tsx");

export const convertOAuth2Authorization = function convertOAuth2Authorization(guilds) {
  let tmp = guilds;
  if (null != guilds.guilds) {
    const obj = {};
    const merged = Object.assign(guilds);
    guilds = guilds.guilds;
    obj["guilds"] = guilds.map((permissions) => {
      const obj = {};
      const merged = Object.assign(permissions);
      obj["permissions"] = callback(closure_1[0]).deserialize(permissions.permissions);
      return obj;
    });
    tmp = obj;
  }
  return tmp;
};
