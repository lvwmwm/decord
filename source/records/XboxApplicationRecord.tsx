// Module ID: 13404
// Function ID: 13405
// Name: getIconURL
// Dependencies: [4504, 5227, 2]

// Module 13404 (getIconURL)
import createExecutableDefault from "createExecutable" /* 4504 */;
import getPlatformUserUrlDefault from "getPlatformUserUrl" /* 5227 */;

createExecutableDefault;
let c2 = "xbox:";
const result = require("set").fileFinishedImporting("records/XboxApplicationRecord.tsx");
class XboxApplicationRecord extends tmp2 {
  constructor(arg0) {
    tmp3 = new XboxApplicationRecord(global, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    tmp3.id = "" + c2 + global.name;
    tmp3.name = global.name;
    return tmp3;
  }
}
XboxApplicationRecord.prototype["getIconURL"] = function getIconURL() {
  return getPlatformUserUrlDefault.get("xbox").icon.lightPNG;
};

export default XboxApplicationRecord;
export const XBOX_APPLICATION_ID_PREFIX = "xbox:";
