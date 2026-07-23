// Module ID: 1893
// Function ID: 21159
// Name: EntityDao
// Dependencies: [6, 7, 1887, 1889, 2]

// Module 1893 (EntityDao)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class EntityDao {
    constructor(arg0, arg1, arg2) {
      flag = arg3;
      self = this;
      if (arg3 === undefined) {
        flag = true;
      }
      tmp = outer1_2(self, EntityDao);
      self.originalPrefix = arg0;
      items = [];
      items[0] = arg0;
      table = new EntityDao(outer1_1[2]).Table(items, arg1, arg2, flag);
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
  let items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "withoutLogging",
    value() {
      return new EntityDao(this.originalPrefix, this.table.tableId, this.table.database, false);
    }
  };
  items[1] = obj;
  obj = {
    key: "get",
    value(arg0) {
      const table = this.table;
      const items = [arg0];
      return table.get(items);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMany",
    value(arg0) {
      const table = this.table;
      return table.getMany([], arg0);
    }
  };
  items[4] = {
    key: "getRange",
    value(arg0, arg1, arg2) {
      const table = this.table;
      const items = [arg0];
      const items1 = [arg1];
      return table.getRange(items, items1, arg2);
    }
  };
  items[5] = {
    key: "getKvEntries",
    value() {
      const table = this.table;
      return table.getKvEntries();
    }
  };
  items[6] = {
    key: "getMapEntries",
    value() {
      const table = this.table;
      return table.getMapEntries();
    }
  };
  items[7] = {
    key: "getIds",
    value() {
      const table = this.table;
      return table.getChildIds([]);
    }
  };
  items[8] = {
    key: "getParentId",
    value(arg0) {
      const table = this.table;
      const items = [null, arg0];
      return table.getParentId(items);
    }
  };
  items[9] = {
    key: "put",
    value(arg0) {
      let Replace = arg1;
      const self = this;
      let closure_0 = arg0;
      if (arg1 === undefined) {
        Replace = EntityDao(outer1_1[3]).ConflictOptions.Replace;
      }
      return self.transaction((put) => put.put(closure_0, Replace), "" + self.prefix + " put");
    }
  };
  items[10] = {
    key: "putAll",
    value(arg0) {
      let Replace = arg1;
      const self = this;
      let closure_0 = arg0;
      if (arg1 === undefined) {
        Replace = EntityDao(outer1_1[3]).ConflictOptions.Replace;
      }
      return self.transaction((putAll) => putAll.putAll(closure_0, Replace), "" + self.prefix + " putAll");
    }
  };
  items[11] = {
    key: "replaceAll",
    value(arg0) {
      let closure_0 = arg0;
      return this.transaction((str) => str.replaceAll(closure_0), "" + this.prefix + " replaceAll");
    }
  };
  items[12] = {
    key: "delete",
    value(arg0) {
      let closure_0 = arg0;
      return this.transaction((arg0) => arg0.delete(closure_0), "" + this.prefix + " delete");
    }
  };
  items[13] = {
    key: "transaction",
    value(arg0, arg1) {
      let closure_0 = arg0;
      const table = this.table;
      return table.transaction((arg0) => callback(new outer2_5(arg0)), arg1);
    }
  };
  items[14] = {
    key: "upgradeTransaction",
    value(arg0) {
      const table = this.table;
      return new outer1_5(table.upgradeTransaction(arg0));
    }
  };
  items[15] = {
    key: "getManySyncUnsafe",
    value(arg0) {
      const table = this.table;
      return table.getManySyncUnsafe([], arg0);
    }
  };
  items[16] = {
    key: "getMapEntriesSyncUnsafe",
    value() {
      const table = this.table;
      return table.getMapEntriesSyncUnsafe();
    }
  };
  let items1 = [
    {
      key: "cell",
      value(data, generation) {
        const items = [data.id];
        return { key: items, data, generation };
      }
    }
  ];
  return callback(EntityDao, items, items1);
})();
let closure_4 = tmp2;
const tmp3 = (() => {
  class EntityDaoTransaction {
    constructor(arg0) {
      tmp = outer1_2(this, EntityDaoTransaction);
      this.transaction = arg0;
      return;
    }
  }
  let obj = {
    key: "put",
    value(arg0) {
      let Replace = arg1;
      if (arg1 === undefined) {
        Replace = EntityDaoTransaction(outer1_1[3]).ConflictOptions.Replace;
      }
      const transaction = this.transaction;
      return transaction.put(outer1_4.cell(arg0, null), Replace);
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "putAll",
    value(arr) {
      let Replace = arg1;
      if (arg1 === undefined) {
        Replace = EntityDaoTransaction(outer1_1[3]).ConflictOptions.Replace;
      }
      const transaction = this.transaction;
      return transaction.putAll(arr.map((arg0) => outer2_4.cell(arg0, null)), Replace);
    }
  };
  items[1] = obj;
  obj = {
    key: "replaceAll",
    value(arg0) {
      this.delete();
      this.putAll(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "delete",
    value(arg0) {
      const self = this;
      if (0 === arguments.length) {
        const transaction2 = self.transaction;
        let deleteResult = transaction2.delete([]);
      } else {
        const transaction = self.transaction;
        const items = [arg0];
        deleteResult = transaction.delete(items);
      }
      return deleteResult;
    }
  };
  items[4] = {
    key: "deleteAllExcept",
    value(arg0) {
      const transaction = this.transaction;
      transaction.deleteAllExcept([], arg0);
    }
  };
  const items1 = [
    {
      key: "fromDatabaseTransaction",
      value(prefix, tableId, transaction) {
        const tableTransaction = new EntityDaoTransaction(outer1_1[2]).TableTransaction(prefix, tableId, transaction);
        return new EntityDaoTransaction(tableTransaction);
      }
    }
  ];
  return callback(EntityDaoTransaction, items, items1);
})();
let closure_5 = tmp3;
const result = require("prefixCell").fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/EntityDao.tsx");

export const EntityDao = tmp2;
export const EntityDaoTransaction = tmp3;
