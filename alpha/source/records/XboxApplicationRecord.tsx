// Module ID: 13870
// Function ID: 13871
// Name: XboxApplicationRecord
// Dependencies: [2021, 5759, 2]

// Module 13870 (XboxApplicationRecord)
import PlatformsDefault from "Platforms" /* 5759 */;
import ApplicationRecord from "ApplicationRecord" /* 2021 */;
import size from "module_2" /* 2 */;

let c2 = "xbox:";
const result = size.fileFinishedImporting("records/XboxApplicationRecord.tsx");
class XboxApplicationRecord extends ApplicationRecord {
  constructor(name) {
    const tmp3 = new XboxApplicationRecord(name, tmp2, tmp);
    tmp3.id = "" + c2 + name.name;
    tmp3.name = name.name;
    return tmp3;
  }
  getIconURL() {
    const obj = PlatformsDefault;
    return obj.get("xbox").icon.lightPNG;
  }
}
const prototype = XboxApplicationRecord.prototype;

export default XboxApplicationRecord;
export const XBOX_APPLICATION_ID_PREFIX = "xbox:";
