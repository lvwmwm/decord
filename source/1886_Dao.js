// Module ID: 1886
// Function ID: 21008
// Name: Dao
// Dependencies: [0, 0, 0, 0, 0]

// Module 1886 (Dao)
import closure_2 from "result";
import closure_3 from "result";
import result from "result";

const tmp3 = () => {
  class DaoTransaction {
    constructor(arg0) {
      tmp = closure_2(this, DaoTransaction);
      this.transaction = arg0;
      return;
    }
  }
  const arg1 = DaoTransaction;
  let obj = {
    key: "put",
    value(arg0, data) {
      let Replace = arg2;
      if (arg2 === undefined) {
        Replace = DaoTransaction(closure_1[3]).ConflictOptions.Replace;
      }
      const transaction = this.transaction;
      const items = [arg0];
      transaction.put({ key: items, data, generation: null }, Replace);
    }
  };
  const items = [obj, ];
  obj = {
    key: "delete",
    value(arg0) {
      const self = this;
      if (0 === arguments.length) {
        const transaction2 = self.transaction;
        let deleteResult = transaction2.delete();
      } else {
        const transaction = self.transaction;
        const items = [arg0];
        deleteResult = transaction.delete(items);
      }
      return deleteResult;
    }
  };
  items[1] = obj;
  obj = {
    key: "fromDatabaseTransaction",
    value(prefix, tableId, transaction) {
      const tableTransaction = new DaoTransaction(closure_1[2]).TableTransaction(prefix, tableId, transaction);
      return new DaoTransaction(tableTransaction);
    }
  };
  const items1 = [obj];
  return callback(DaoTransaction, items, items1);
}();
result = result.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Dao.tsx");

export const Dao = () => {
  class Dao {
    constructor(arg0, arg1, arg2) {
      flag = arg3;
      self = this;
      if (arg3 === undefined) {
        flag = true;
      }
      tmp = closure_2(self, Dao);
      self.originalPrefix = arg0;
      items = [];
      items[0] = arg0;
      table = new Dao(closure_1[2]).Table(items, arg1, arg2, flag);
      self.table = table;
      return;
    }
  }
  const arg1 = Dao;
  let obj = {
    key: "prefix",
    get() {
      return this.table.prefix;
    }
  };
  const items = [obj, , , , , , , , , , , , , , ];
  obj = {
    key: "withoutLogging",
    value() {
      return new Dao(this.originalPrefix, this.table.tableId, this.table.database, false);
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
      const items = [true, arg0];
      return table.getParentId(items);
    }
  };
  items[9] = {
    key: "put",
    value(arg0, data) {
      let Replace = arg2;
      if (arg2 === undefined) {
        Replace = Dao(closure_1[3]).ConflictOptions.Replace;
      }
      const table = this.table;
      const items = [arg0];
      return table.put({ key: items, data, generation: null }, Replace);
    }
  };
  items[10] = {
    key: "delete",
    value(arg0) {
      const self = this;
      if (0 === arguments.length) {
        const table2 = self.table;
        let deleteResult = table2.delete();
      } else {
        const table = self.table;
        const items = [arg0];
        deleteResult = table.delete(items);
      }
      return deleteResult;
    }
  };
  items[11] = {
    key: "transaction",
    value(arg0, arg1) {
      const Dao = arg0;
      const table = this.table;
      return table.transaction((arg0) => arg0(new closure_4(arg0)), arg1);
    }
  };
  items[12] = {
    key: "upgradeTransaction",
    value(arg0) {
      const table = this.table;
      return new closure_4(table.upgradeTransaction(arg0));
    }
  };
  items[13] = {
    key: "getManySyncUnsafe",
    value(arg0) {
      const table = this.table;
      return table.getManySyncUnsafe([], arg0);
    }
  };
  items[14] = {
    key: "getMapEntriesSyncUnsafe",
    value() {
      const table = this.table;
      return table.getMapEntriesSyncUnsafe();
    }
  };
  return callback(Dao, items);
}();
export const DaoTransaction = tmp3;
