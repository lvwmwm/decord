// Module ID: 12942
// Function ID: 12943
// Name: getIconURL
// Dependencies: [4325, 4998, 2]

// Module 12942 (getIconURL)
import "createExecutable";

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
  return importDefault(4998).get("xbox").icon.lightPNG;
};

export default XboxApplicationRecord;
export const XBOX_APPLICATION_ID_PREFIX = "xbox:";
