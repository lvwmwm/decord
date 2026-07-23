// Module ID: 1887
// Function ID: 21038
// Name: prefixCell
// Dependencies: [5, 6, 7, 1888, 1889, 2]

// Module 1887 (prefixCell)
import set from "set";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
function prefixCell(key, prefix) {
  let tmp = key;
  if (0 !== prefix.length) {
    const obj = { key: require(1888) /* combineKey */.combineKey(prefix, key.key) };
    ({ data: obj.data, generation: obj.generation } = key);
    tmp = obj;
    const obj2 = require(1888) /* combineKey */;
  }
  return tmp;
}
function prefixCells(arr) {
  let closure_0 = arg1;
  let mapped = arr;
  if (0 !== arg1.length) {
    mapped = arr.map((arg0) => outer1_6(arg0, closure_0));
  }
  return mapped;
}
const tmp3 = (() => {
  class TableTransaction {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = outer1_3(this, self);
      this.messages = {
        trimOrphans(prefix) {
              if (1 === self.prefix.length) {
                if (1 === prefix.length) {
                  const transaction = self.transaction;
                  const obj = { type: "messages.trim_orphans", table: self.tableId, channelKey: prefix[0], messageKey: self.prefix[0] };
                  transaction.add(obj);
                }
              }
              const error = new Error("trimOrphans: only one prefix component is supported at this time");
              throw error;
            },
        trimChannel(items, limit, outer1_9) {
              const transaction = self.transaction;
              const obj = { type: "messages.trim_channel", table: self.tableId, key: TableTransaction(outer2_1[3]).combineKey(self.prefix, items), limit };
              transaction.add(obj);
            },
        trimChannelsIn(prefix, outer5_12) {
              if (1 === self.prefix.length) {
                if (1 === prefix.length) {
                  const transaction = self.transaction;
                  const obj = { type: "messages.trim_channels_in", table: self.tableId, channelKey: prefix[0], messageKey: self.prefix[0], limit: outer5_12 };
                  transaction.add(obj);
                }
              }
              const error = new Error("trimChannelsIn: only one prefix component is supported at this time");
              throw error;
            },
        trimChannelsNotIn(prefix, outer5_11) {
              if (1 === self.prefix.length) {
                if (1 === prefix.length) {
                  const transaction = self.transaction;
                  const obj = { type: "messages.trim_channels_not_in", table: self.tableId, channelKey: prefix[0], messageKey: self.prefix[0], limit: outer5_11 };
                  transaction.add(obj);
                }
              }
              const error = new Error("trimChannelsNotIn: only one prefix component is supported at this time");
              throw error;
            }
      };
      this.prefix = arg0;
      this.tableId = arg1;
      this.transaction = arg2;
      return;
    }
  }
  let obj = {
    key: "put",
    value(arg0) {
      let Replace = arg1;
      const self = this;
      if (arg1 === undefined) {
        Replace = TableTransaction(outer1_1[4]).ConflictOptions.Replace;
      }
      const transaction = self.transaction;
      const obj = { type: "kv.put_one", table: self.tableId, cell: outer1_6(arg0, self.prefix), overwrite: Replace === TableTransaction(outer1_1[4]).ConflictOptions.Replace };
      transaction.add(obj);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "putAll",
    value(arg0) {
      let Replace = arg1;
      const self = this;
      if (arg1 === undefined) {
        Replace = TableTransaction(outer1_1[4]).ConflictOptions.Replace;
      }
      const transaction = self.transaction;
      const obj = { type: "kv.put_many", table: self.tableId, cells: outer1_7(arg0, self.prefix), overwrite: Replace === TableTransaction(outer1_1[4]).ConflictOptions.Replace };
      transaction.add(obj);
    }
  };
  items[1] = obj;
  obj = {
    key: "delete",
    value(items) {
      const self = this;
      if (items === undefined) {
        items = [];
      }
      const transaction = self.transaction;
      const obj = { type: "kv.delete_many", table: self.tableId, key: TableTransaction(outer1_1[3]).combineKeyPrefix(self.prefix, items) };
      transaction.add(obj);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "deleteRange",
    value(items, items) {
      let obj = TableTransaction(outer1_1[3]);
      const combineKeyResult = obj.combineKey(this.prefix, items);
      const transaction = this.transaction;
      obj = { type: "kv.delete_range", table: this.tableId };
      items = [combineKeyResult, TableTransaction(outer1_1[3]).combineKey(this.prefix, items)];
      obj.range = items;
      transaction.add(obj);
    }
  };
  items[4] = {
    key: "deleteAllExcept",
    value(items, retain) {
      const self = this;
      if (items === undefined) {
        items = [];
      }
      const transaction = self.transaction;
      const obj = { type: "kv.delete_all_except", table: self.tableId, key: TableTransaction(outer1_1[3]).combineKeyPrefix(self.prefix, items), retain };
      transaction.add(obj);
    }
  };
  items[5] = {
    key: "deleteGeneration",
    value(items, comparer, generation) {
      const self = this;
      if (items === undefined) {
        items = [];
      }
      const transaction = self.transaction;
      const obj = { type: "kv.delete_generation", table: self.tableId, key: TableTransaction(outer1_1[3]).combineKeyPrefix(self.prefix, items), generation, comparer };
      transaction.add(obj);
    }
  };
  const items1 = [
    {
      key: "fromDatabaseTransaction",
      value(prefix, tableId, transaction) {
        return new TableTransaction(prefix, tableId, transaction);
      }
    }
  ];
  return callback2(TableTransaction, items, items1);
})();
let closure_5 = tmp3;
let tmp2 = (() => {
  class Table {
    constructor(arg0, arg1, arg2, arg3) {
      self = this;
      tmp = outer1_3(this, Table);
      this.messages = {
        getLatest(guildId, channelId, arg2) {
              const database = self.database;
              return database.execute({ type: "messages.get_latest", table: self.tableId, guildId }, self.defaultDebugTag);
            }
      };
      this.prefix = arg0;
      this.tableId = arg1;
      this.database = arg2;
      tmp2 = null;
      this.defaultDebugTag = tmp2;
      return;
    }
  }
  let obj = {
    key: "close",
    value() {
      const database = this.database;
      database.close();
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , ];
  obj = { key: "get" };
  let closure_0 = callback(async function(arg0) {
    const self = this;
    const first = yield self.getMany(arg0, { limit: 1 })[0];
    let tmp2 = null;
    if (null != first) {
      tmp2 = first;
    }
    return tmp2;
  });
  obj.value = function get() {
    return callback(...arguments);
  };
  items[1] = obj;
  obj = {
    key: "getMany",
    value(items, ordering) {
      const self = this;
      if (items === undefined) {
        items = [];
      }
      const database = self.database;
      const obj = { type: "kv.get_many", table: self.tableId, key: callback(Table[3]).combineKeyPrefix(self.prefix, items) };
      ordering = undefined;
      if (null != ordering) {
        ordering = ordering.ordering;
      }
      obj.ordering = ordering;
      let limit;
      if (null != ordering) {
        limit = ordering.limit;
      }
      obj.limit = limit;
      return database.execute(obj, self.defaultDebugTag);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getRange",
    value(items, items, ordering) {
      let obj = callback(Table[3]);
      const combineKeyResult = obj.combineKey(this.prefix, items);
      const database = this.database;
      obj = { type: "kv.get_range", table: this.tableId };
      items = [combineKeyResult, callback(Table[3]).combineKey(this.prefix, items)];
      obj.range = items;
      ordering = undefined;
      if (null != ordering) {
        ordering = ordering.ordering;
      }
      obj.ordering = ordering;
      let limit;
      if (null != ordering) {
        limit = ordering.limit;
      }
      obj.limit = limit;
      return database.execute(obj, this.defaultDebugTag);
    }
  };
  items[4] = {
    key: "getKvEntries",
    value(items) {
      const self = this;
      if (items === undefined) {
        items = [];
      }
      const database = self.database;
      const obj = { type: "kv.get_kv_entries", table: self.tableId, key: callback(Table[3]).combineKeyPrefix(self.prefix, items) };
      return database.execute(obj, self.defaultDebugTag);
    }
  };
  items[5] = {
    key: "getMapEntries",
    value(items) {
      const self = this;
      if (items === undefined) {
        items = [];
      }
      const database = self.database;
      const obj = { type: "kv.get_map_entries", table: self.tableId, key: callback(Table[3]).combineKeyPrefix(self.prefix, items) };
      return database.execute(obj, self.defaultDebugTag);
    }
  };
  items[6] = {
    key: "getChildIds",
    value(items) {
      const self = this;
      if (items === undefined) {
        items = [];
      }
      const database = self.database;
      const obj = { type: "kv.get_child_ids", table: self.tableId, key: callback(Table[3]).combineKeyPrefix(self.prefix, items) };
      return database.execute(obj, self.defaultDebugTag);
    }
  };
  items[7] = {
    key: "getParentId",
    value(items) {
      const self = this;
      if (items === undefined) {
        items = [];
      }
      const database = self.database;
      const obj = { type: "kv.get_parent_id", table: self.tableId, key: callback(Table[3]).combineKey(self.prefix, items) };
      return database.execute(obj, self.defaultDebugTag);
    }
  };
  items[8] = {
    key: "put",
    value(arg0) {
      let Replace = arg1;
      const self = this;
      if (arg1 === undefined) {
        Replace = callback(Table[4]).ConflictOptions.Replace;
      }
      const database = self.database;
      const obj = { type: "kv.put_one", table: self.tableId, cell: outer1_6(arg0, self.prefix), overwrite: Replace === callback(Table[4]).ConflictOptions.Replace };
      return database.execute(obj, self.defaultDebugTag);
    }
  };
  items[9] = {
    key: "putAll",
    value(arg0) {
      let Replace = arg1;
      const self = this;
      if (arg1 === undefined) {
        Replace = callback(Table[4]).ConflictOptions.Replace;
      }
      const database = self.database;
      const obj = { type: "kv.put_many", table: self.tableId, cells: outer1_7(arg0, self.prefix), overwrite: Replace === callback(Table[4]).ConflictOptions.Replace };
      return database.execute(obj, self.defaultDebugTag);
    }
  };
  items[10] = {
    key: "replaceAll",
    value(arg0) {
      let closure_0 = arg0;
      return this.transaction((arg0) => {
        arg0.delete();
        arg0.putAll(closure_0);
      }, this.defaultDebugTag);
    }
  };
  items[11] = {
    key: "delete",
    value(items) {
      const self = this;
      if (items === undefined) {
        items = [];
      }
      const database = self.database;
      const obj = { type: "kv.delete_many", table: self.tableId, key: callback(Table[3]).combineKeyPrefix(self.prefix, items) };
      return database.execute(obj, self.defaultDebugTag);
    }
  };
  items[12] = {
    key: "deleteRange",
    value(items, items) {
      let obj = callback(Table[3]);
      const combineKeyResult = obj.combineKey(this.prefix, items);
      const database = this.database;
      obj = { type: "kv.delete_range", table: this.tableId };
      items = [combineKeyResult, callback(Table[3]).combineKey(this.prefix, items)];
      obj.range = items;
      return database.execute(obj, this.defaultDebugTag);
    }
  };
  items[13] = {
    key: "deleteGeneration",
    value(items, comparer, generation) {
      const self = this;
      if (items === undefined) {
        items = [];
      }
      const database = self.database;
      const obj = { type: "kv.delete_generation", table: self.tableId, key: callback(Table[3]).combineKeyPrefix(self.prefix, items), generation, comparer };
      return database.execute(obj, self.defaultDebugTag);
    }
  };
  items[14] = {
    key: "transaction",
    value(arg0, arg1) {
      const self = this;
      let closure_1 = arg0;
      const database = this.database;
      return database.transaction((arg0) => callback(new outer2_5(self.prefix, self.tableId, arg0)), arg1);
    }
  };
  items[15] = {
    key: "upgradeTransaction",
    value(arg0) {
      return new outer1_5(this.prefix, this.tableId, arg0);
    }
  };
  items[16] = {
    key: "getManySyncUnsafe",
    value(items, ordering) {
      const self = this;
      if (items === undefined) {
        items = [];
      }
      const database = self.database;
      const obj = { type: "kv.get_many", table: self.tableId, key: callback(Table[3]).combineKeyPrefix(self.prefix, items) };
      ordering = undefined;
      if (null != ordering) {
        ordering = ordering.ordering;
      }
      obj.ordering = ordering;
      let limit;
      if (null != ordering) {
        limit = ordering.limit;
      }
      obj.limit = limit;
      return database.executeSync(obj);
    }
  };
  items[17] = {
    key: "getMapEntriesSyncUnsafe",
    value(items) {
      const self = this;
      if (items === undefined) {
        items = [];
      }
      const database = self.database;
      const obj = { type: "kv.get_map_entries", table: self.tableId, key: callback(Table[3]).combineKeyPrefix(self.prefix, items) };
      return database.executeSync(obj);
    }
  };
  items[18] = {
    key: "deleteSyncUnsafe",
    value(items) {
      const self = this;
      if (items === undefined) {
        items = [];
      }
      const database = self.database;
      const obj = { type: "kv.delete_many", table: self.tableId, key: callback(Table[3]).combineKeyPrefix(self.prefix, items) };
      database.executeSync(obj);
    }
  };
  return callback2(Table, items);
})();
const result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Table.tsx");

export const Table = tmp2;
export const TableTransaction = tmp3;
