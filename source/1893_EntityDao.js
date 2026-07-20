// Module ID: 1893
// Function ID: 21153
// Name: EntityDao
// Dependencies: [0, 0, 0, 0, 0]

// Module 1893 (EntityDao)
import closure_2 from "result";
import closure_3 from "result";
import result from "result";

const tmp2 = () => {
  class EntityDao {
    constructor(arg0, arg1, arg2) {
      flag = arg3;
      self = this;
      if (arg3 === undefined) {
        flag = true;
      }
      tmp = closure_2(self, EntityDao);
      self.originalPrefix = arg0;
      items = [];
      items[0] = arg0;
      table = new EntityDao(closure_1[2]).Table(items, arg1, arg2, flag);
      self.table = table;
      return;
    }
  }
  const arg1 = EntityDao;
  let obj = {
    key: "prefix",
    get() {
      return this.table.prefix;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , ];
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
      const items = [true, arg0];
      return table.getParentId(items);
    }
  };
  items[9] = {
    key: "put",
    value(arg0) {
      let Replace = arg1;
      const self = this;
      const EntityDao = arg0;
      if (arg1 === undefined) {
        Replace = EntityDao(Replace[3]).ConflictOptions.Replace;
      }
      return self.transaction((put) => put.put(put, Replace), "" + self.prefix + " put");
    }
  };
  items[10] = {
    key: "putAll",
    value(arg0) {
      let Replace = arg1;
      const self = this;
      const EntityDao = arg0;
      if (arg1 === undefined) {
        Replace = EntityDao(Replace[3]).ConflictOptions.Replace;
      }
      return self.transaction((putAll) => putAll.putAll(putAll, Replace), "" + self.prefix + " putAll");
    }
  };
  items[11] = {
    key: "replaceAll",
    value(arg0) {
      const EntityDao = arg0;
      return this.transaction((str) => str.replaceAll(str), "" + this.prefix + " replaceAll");
    }
  };
  items[12] = {
    key: "delete",
    value(arg0) {
      const EntityDao = arg0;
      return this.transaction((arg0) => arg0.delete(arg0), "" + this.prefix + " delete");
    }
  };
  items[13] = {
    key: "transaction",
    value(arg0, arg1) {
      const EntityDao = arg0;
      const table = this.table;
      return table.transaction((arg0) => arg0(new closure_5(arg0)), arg1);
    }
  };
  items[14] = {
    key: "upgradeTransaction",
    value(arg0) {
      const table = this.table;
      return new closure_5(table.upgradeTransaction(arg0));
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
  const items1 = [
    {
      key: "cell",
      value(data, generation) {
        const items = [data.id];
        return { key: items, data, generation };
      }
    }
  ];
  return callback(EntityDao, items, items1);
}();
const tmp3 = () => {
  class EntityDaoTransaction {
    constructor(arg0) {
      tmp = closure_2(this, EntityDaoTransaction);
      this.transaction = arg0;
      return;
    }
  }
  const arg1 = EntityDaoTransaction;
  let obj = {
    key: "put",
    value(arg0) {
      let Replace = arg1;
      if (arg1 === undefined) {
        Replace = EntityDaoTransaction(closure_1[3]).ConflictOptions.Replace;
      }
      const transaction = this.transaction;
      return transaction.put(closure_4.cell(arg0, null), Replace);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "putAll",
    value(arr) {
      let Replace = arg1;
      if (arg1 === undefined) {
        Replace = EntityDaoTransaction(closure_1[3]).ConflictOptions.Replace;
      }
      const transaction = this.transaction;
      return transaction.putAll(arr.map((arg0) => closure_4.cell(arg0, null)), Replace);
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
        const tableTransaction = new EntityDaoTransaction(closure_1[2]).TableTransaction(prefix, tableId, transaction);
        return new EntityDaoTransaction(tableTransaction);
      }
    }
  ];
  return callback(EntityDaoTransaction, items, items1);
}();
result = result.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/EntityDao.tsx");

export const EntityDao = tmp2;
export const EntityDaoTransaction = tmp3;
