// Module ID: 1895
// Function ID: 21222
// Name: GuildEntityDao
// Dependencies: [0, 0, 0, 0, 0]

// Module 1895 (GuildEntityDao)
import closure_2 from "result";
import closure_3 from "result";
import result from "result";

const tmp2 = () => {
  class GuildEntityDao {
    constructor(arg0, arg1, arg2) {
      flag = arg3;
      self = this;
      if (arg3 === undefined) {
        flag = true;
      }
      tmp = closure_2(self, GuildEntityDao);
      self.originalPrefix = arg0;
      items = [];
      items[0] = arg0;
      table = new GuildEntityDao(closure_1[2]).Table(items, arg1, arg2, flag);
      self.table = table;
      return;
    }
  }
  const arg1 = GuildEntityDao;
  let obj = {
    key: "prefix",
    get() {
      return this.table.prefix;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "withoutLogging",
    value() {
      return new GuildEntityDao(this.originalPrefix, this.table.tableId, this.table.database, false);
    }
  };
  items[1] = obj;
  obj = {
    key: "get",
    value(arg0, arg1) {
      const table = this.table;
      const items = [arg0, arg1];
      return table.get(items);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMany",
    value(arg0, arg1) {
      const table = this.table;
      const items = [arg0];
      return table.getMany(items, arg1);
    }
  };
  items[4] = {
    key: "getRange",
    value(arg0, arg1, arg2, arg3) {
      const table = this.table;
      const items = [arg0, arg1];
      const items1 = [arg0, arg2];
      return table.getRange(items, items1, arg3);
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
    value(arg0) {
      const table = this.table;
      const items = [arg0];
      return table.getChildIds(items);
    }
  };
  items[8] = {
    key: "getGuildIds",
    value() {
      const table = this.table;
      return table.getChildIds([]);
    }
  };
  items[9] = {
    key: "getGuildId",
    value(arg0) {
      const table = this.table;
      const items = [true, arg0];
      return table.getParentId(items);
    }
  };
  items[10] = {
    key: "put",
    value(arg0, arg1) {
      let Replace = arg2;
      const self = this;
      const GuildEntityDao = arg0;
      if (arg2 === undefined) {
        Replace = GuildEntityDao(arg1[3]).ConflictOptions.Replace;
      }
      return self.transaction((put) => put.put(put, arg1, Replace), "" + self.prefix + " put");
    }
  };
  items[11] = {
    key: "putAll",
    value(arg0, arg1) {
      let Replace = arg2;
      const self = this;
      const GuildEntityDao = arg0;
      if (arg2 === undefined) {
        Replace = GuildEntityDao(arg1[3]).ConflictOptions.Replace;
      }
      return self.transaction((putAll) => putAll.putAll(putAll, arg1, Replace), "" + self.prefix + " putAll");
    }
  };
  items[12] = {
    key: "replaceAll",
    value(arg0, arg1) {
      const GuildEntityDao = arg0;
      return this.transaction((str) => str.replaceAll(str, arg1), "" + this.prefix + " replaceAll");
    }
  };
  items[13] = {
    key: "delete",
    value(arg0, arg1) {
      const GuildEntityDao = arg0;
      return this.transaction((arg0) => arg0.delete(arg0, arg1), "" + this.prefix + " delete");
    }
  };
  items[14] = {
    key: "deleteGeneration",
    value(arg0, arg1) {
      const GuildEntityDao = arg0;
      return this.transaction((deleteGeneration) => deleteGeneration.deleteGeneration(deleteGeneration, arg1), "" + this.prefix + " deleteGeneration");
    }
  };
  items[15] = {
    key: "transaction",
    value(arg0, arg1) {
      const GuildEntityDao = arg0;
      const table = this.table;
      return table.transaction((arg0) => arg0(new closure_5(arg0)), arg1);
    }
  };
  items[16] = {
    key: "upgradeTransaction",
    value(arg0) {
      const table = this.table;
      return new closure_5(table.upgradeTransaction(arg0));
    }
  };
  items[17] = {
    key: "getManySyncUnsafe",
    value(arg0, arg1) {
      const table = this.table;
      const items = [arg0];
      return table.getManySyncUnsafe(items, arg1);
    }
  };
  items[18] = {
    key: "getMapEntriesSyncUnsafe",
    value() {
      const table = this.table;
      return table.getMapEntriesSyncUnsafe();
    }
  };
  items[19] = {
    key: "deleteSyncUnsafe",
    value(arg0) {
      const table = this.table;
      const items = [arg0];
      return table.deleteSyncUnsafe(items);
    }
  };
  const items1 = [
    {
      key: "cell",
      value(arg0, data, generation) {
        const items = [arg0, data.id];
        return { key: items, data, generation };
      }
    }
  ];
  return callback(GuildEntityDao, items, items1);
}();
const tmp3 = () => {
  class GuildEntityDaoTransaction {
    constructor(arg0) {
      tmp = closure_2(this, GuildEntityDaoTransaction);
      this.transaction = arg0;
      return;
    }
  }
  const arg1 = GuildEntityDaoTransaction;
  let obj = {
    key: "put",
    value(arg0, arg1) {
      let Replace = arg2;
      const self = this;
      if (arg2 === undefined) {
        Replace = GuildEntityDaoTransaction(closure_1[3]).ConflictOptions.Replace;
      }
      return self.putWithGeneration(arg0, arg1, null, Replace);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "putWithGeneration",
    value(arg0, arg1, arg2) {
      let Replace = arg3;
      if (arg3 === undefined) {
        Replace = GuildEntityDaoTransaction(closure_1[3]).ConflictOptions.Replace;
      }
      const transaction = this.transaction;
      return transaction.put(closure_4.cell(arg0, arg1, arg2), Replace);
    }
  };
  items[1] = obj;
  obj = {
    key: "putAll",
    value(arg0, arr) {
      let Replace = arg2;
      const GuildEntityDaoTransaction = arg0;
      if (arg2 === undefined) {
        Replace = GuildEntityDaoTransaction(closure_1[3]).ConflictOptions.Replace;
      }
      const transaction = this.transaction;
      return transaction.putAll(arr.map((arg0) => closure_4.cell(arg0, arg0, null)), Replace);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "replaceAll",
    value(arg0, arg1) {
      this.delete(arg0);
      this.putAll(arg0, arg1);
    }
  };
  items[4] = {
    key: "delete",
    value(arg0, arg1) {
      const self = this;
      const length = arguments.length;
      if (0 === length) {
        const transaction3 = self.transaction;
        return transaction3.delete([]);
      } else if (1 === length) {
        const transaction2 = self.transaction;
        const items = [arg0];
        return transaction2.delete(items);
      } else {
        const transaction = self.transaction;
        const items1 = [arg0, arg1];
        return transaction.delete(items1);
      }
    }
  };
  items[5] = {
    key: "deleteAllExcept",
    value(arg0) {
      const transaction = this.transaction;
      transaction.deleteAllExcept([], arg0);
    }
  };
  items[6] = {
    key: "deleteGeneration",
    value(arg0, arg1) {
      const transaction = this.transaction;
      return transaction.deleteGeneration([], arg0, arg1);
    }
  };
  const items1 = [
    {
      key: "fromDatabaseTransaction",
      value(prefix, tableId, transaction) {
        const tableTransaction = new GuildEntityDaoTransaction(closure_1[2]).TableTransaction(prefix, tableId, transaction);
        return new GuildEntityDaoTransaction(tableTransaction);
      }
    }
  ];
  return callback(GuildEntityDaoTransaction, items, items1);
}();
result = result.fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/GuildEntityDao.tsx");

export const GuildEntityDao = tmp2;
export const GuildEntityDaoTransaction = tmp3;
