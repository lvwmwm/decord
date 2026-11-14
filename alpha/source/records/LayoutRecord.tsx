// Module ID: 16183
// Function ID: 16184
// Name: LayoutRecord
// Dependencies: [1408, 2]

// Module 16183 (LayoutRecord)
import Record from "Record" /* 1408 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("records/LayoutRecord.tsx");
class LayoutRecord extends Record {
  constructor(version) {
    const tmp3 = new LayoutRecord(tmp2, tmp, this);
    let num = Number(version.version);
    if (num == null) {
      num = 0;
    }
    tmp3.version = num;
    tmp3.id = version.id || "";
    tmp3.widgets = version.widgets || [];
    return tmp3;
  }
}

export default LayoutRecord;
