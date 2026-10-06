// Module ID: 5595
// Function ID: 5596
// Name: ConnectedAccountRecord
// Dependencies: [1393, 2]

// Module 5595 (ConnectedAccountRecord)
import Record from "Record" /* 1393 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("records/ConnectedAccountRecord.tsx");
class ConnectedAccountRecord extends Record {
  constructor(revoked) {
    const tmp = new ConnectedAccountRecord(new.target, this, revoked, ConnectedAccountRecord);
    ({ id: tmp.id, type: tmp.type, name: tmp.name } = revoked);
    tmp.revoked = revoked.revoked || false;
    tmp.integrations = revoked.integrations || [];
    tmp.visibility = revoked.visibility || 0;
    tmp.friendSync = revoked.friend_sync || false;
    tmp.showActivity = revoked.show_activity || false;
    tmp.verified = revoked.verified || false;
    tmp.accessToken = revoked.access_token || null;
    tmp.twoWayLink = revoked.two_way_link || false;
    tmp.metadata = revoked.metadata || null;
    tmp.metadataVisibility = revoked.metadata_visibility || 0;
    return tmp;
  }
  toString() {
    return this.name;
  }
}
const prototype = ConnectedAccountRecord.prototype;

export default ConnectedAccountRecord;
