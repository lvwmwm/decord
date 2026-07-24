// Module ID: 1897
// Function ID: 21270
// Name: makeCell
// Dependencies: [6, 7, 1887, 1889, 2]

// Module 1897 (makeCell)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
function makeCell(arg0, arg1, data) {
  const tmp = makeStorageId(data.id);
  const items = [arg0, arg1, tmp];
  return { key: items, data, generation: tmp };
}
function makeStorageId(id) {
  return id.padStart(19, "0");
}
const tmp3 = (() => {
  class MessageDaoTransaction {
    constructor(arg0) {
      tmp = outer1_2(this, MessageDaoTransaction);
      this.transaction = arg0;
      return;
    }
  }
  let obj = {
    key: "put",
    value(arg0, arg1, arg2) {
      let Replace = arg3;
      if (arg3 === undefined) {
        Replace = MessageDaoTransaction(outer1_1[3]).ConflictOptions.Replace;
      }
      const transaction = this.transaction;
      transaction.put(outer1_5(arg0, arg1, arg2), Replace);
    }
  };
  let items = [obj, , , , , , , , , , ];
  obj = {
    key: "putAll",
    value(arg0, arg1, arr) {
      let Replace = arg3;
      let closure_0 = arg0;
      let closure_1 = arg1;
      if (arg3 === undefined) {
        Replace = MessageDaoTransaction(outer1_1[3]).ConflictOptions.Replace;
      }
      const transaction = this.transaction;
      transaction.putAll(arr.map((arg0) => outer2_5(closure_0, closure_1, arg0)), Replace);
    }
  };
  items[1] = obj;
  obj = {
    key: "replaceChannel",
    value(arg0, arg1, arg2) {
      this.deleteChannel(arg0, arg1);
      this.putAll(arg0, arg1, arg2);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "deleteAll",
    value() {
      const transaction = this.transaction;
      transaction.delete();
    }
  };
  items[4] = {
    key: "deleteGuild",
    value(arg0) {
      const transaction = this.transaction;
      const items = [arg0];
      transaction.delete(items);
    }
  };
  items[5] = {
    key: "deleteChannel",
    value(arg0, arg1) {
      const transaction = this.transaction;
      const items = [arg0, arg1];
      transaction.delete(items);
    }
  };
  items[6] = {
    key: "deleteMessage",
    value(arg0, arg1, arg2) {
      const transaction = this.transaction;
      const items = [arg0, arg1, outer1_6(arg2)];
      transaction.delete(items);
    }
  };
  items[7] = {
    key: "trimOrphans",
    value(prefix) {
      const messages = this.transaction.messages;
      messages.trimOrphans(prefix);
    }
  };
  items[8] = {
    key: "trimChannel",
    value(arg0, arg1, limit) {
      const messages = this.transaction.messages;
      const items = [arg0, arg1];
      messages.trimChannel(items, limit);
    }
  };
  items[9] = {
    key: "trimChannelsIn",
    value(prefix, outer5_12) {
      const messages = this.transaction.messages;
      messages.trimChannelsIn(prefix, outer5_12);
    }
  };
  items[10] = {
    key: "trimChannelsNotIn",
    value(prefix, outer5_11) {
      const messages = this.transaction.messages;
      messages.trimChannelsNotIn(prefix, outer5_11);
    }
  };
  const items1 = [
    {
      key: "fromTableTransaction",
      value(tableTransaction) {
        return new MessageDaoTransaction(tableTransaction);
      }
    },
    {
      key: "fromDatabaseTransaction",
      value(prefix, tableId, transaction) {
        const tableTransaction = new MessageDaoTransaction(outer1_1[2]).TableTransaction(prefix, tableId, transaction);
        return new MessageDaoTransaction(tableTransaction);
      }
    }
  ];
  return callback(MessageDaoTransaction, items, items1);
})();
let closure_4 = tmp3;
const tmp2 = (() => {
  class MessageDao {
    constructor(arg0, arg1, arg2) {
      flag = arg3;
      self = this;
      if (arg3 === undefined) {
        flag = true;
      }
      tmp = outer1_2(self, MessageDao);
      self.originalPrefix = arg0;
      items = [];
      items[0] = arg0;
      table = new MessageDao(outer1_1[2]).Table(items, arg1, arg2, flag);
      self.table = table;
      return;
    }
  }
  let obj = {
    key: "prefix",
    get() {
      return this.table.prefix;
    }
  };
  let items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "withoutLogging",
    value() {
      return new MessageDao(this.originalPrefix, this.table.tableId, this.table.database, false);
    }
  };
  items[1] = obj;
  obj = {
    key: "get",
    value(arg0, arg1, arg2) {
      const table = this.table;
      const items = [arg0, arg1, outer1_6(arg2)];
      return table.get(items);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLatest",
    value(arg0, arg1, limit) {
      const table = this.table;
      const items = [arg0, arg1];
      return table.getMany(items, { ordering: MessageDao(outer1_1[3]).Ordering.Descending, limit });
    }
  };
  items[4] = {
    key: "getRange",
    value(arg0, arg1, arg2, arg3, arg4) {
      const table = this.table;
      const items = [arg0, arg1, outer1_6(arg2)];
      const items1 = [arg0, arg1, outer1_6(arg3)];
      return table.getRange(items, items1, arg4);
    }
  };
  items[5] = {
    key: "getMostRecents",
    value(guildId) {
      const messages = this.table.messages;
      return messages.getLatest(guildId);
    }
  };
  items[6] = {
    key: "put",
    value(arg0, arg1, arg2) {
      let Replace = arg3;
      if (arg3 === undefined) {
        Replace = MessageDao(outer1_1[3]).ConflictOptions.Replace;
      }
      const table = this.table;
      return table.put(outer1_5(arg0, arg1, arg2), Replace);
    }
  };
  items[7] = {
    key: "putAll",
    value(arg0, arg1, arr) {
      let Replace = arg3;
      let closure_0 = arg0;
      let closure_1 = arg1;
      if (arg3 === undefined) {
        Replace = MessageDao(outer1_1[3]).ConflictOptions.Replace;
      }
      const table = this.table;
      return table.putAll(arr.map((arg0) => outer2_5(closure_0, closure_1, arg0)), Replace);
    }
  };
  items[8] = {
    key: "deleteAll",
    value() {
      const table = this.table;
      return table.delete();
    }
  };
  items[9] = {
    key: "deleteGuild",
    value(arg0) {
      const table = this.table;
      const items = [arg0];
      return table.delete(items);
    }
  };
  items[10] = {
    key: "deleteChannel",
    value(arg0, arg1) {
      const table = this.table;
      const items = [arg0, arg1];
      return table.delete(items);
    }
  };
  items[11] = {
    key: "deleteMessage",
    value(arg0, arg1, arg2) {
      const table = this.table;
      const items = [arg0, arg1, outer1_6(arg2)];
      return table.delete(items);
    }
  };
  items[12] = {
    key: "transaction",
    value(arg0, arg1) {
      let closure_0 = arg0;
      const table = this.table;
      return table.transaction((arg0) => callback(new outer2_4(arg0)), arg1);
    }
  };
  items[13] = {
    key: "upgradeTransaction",
    value(arg0) {
      const table = this.table;
      return new outer1_4(table.upgradeTransaction(arg0));
    }
  };
  return callback(MessageDao, items);
})();
const result = require("prefixCell").fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/MessageDao.tsx");

export const MessageDao = tmp2;
export const MessageDaoTransaction = tmp3;
