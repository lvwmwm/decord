// Module ID: 18068
// Function ID: 18069
// Name: EmojiRecord
// Dependencies: [1404, 1403, 2]

// Module 18068 (EmojiRecord)
import Record from "Record" /* 1404 */;
import UserRecord from "UserRecord" /* 1403 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("records/EmojiRecord.tsx");
class EmojiRecord extends Record {
  constructor(user) {
    const tmp2 = new EmojiRecord(tmp, new.target, this);
    ({ id: tmp2.id, name: tmp2.name, managed: tmp2.managed, roles: tmp2.roles, requiredColons: tmp2.requiredColons } = user);
    tmp2.user = new UserRecord(user.user);
    ({ animated: tmp2.animated, available: tmp2.available } = user);
    new UserRecord(user.user);
    return tmp2;
  }
}

export default EmojiRecord;
