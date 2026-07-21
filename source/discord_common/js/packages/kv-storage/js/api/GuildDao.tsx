// Module ID: 1894
// Function ID: 21188
// Name: GuildDao
// Dependencies: [0, 0, 0, 0, 0]

// Module 1894 (GuildDao)
import __exportStarResult1 from "__exportStarResult1";
import closure_3 from "__exportStarResult1";

const tmp3 = () => {
  class GuildDaoTransaction {
    constructor(arg0) {
      tmp = __exportStarResult1(this, GuildDaoTransaction);
      this.state = arg0;
      return;
    }
  }
  const arg1 = GuildDaoTransaction;
  let obj = {
    key: "put",
    value(arg0, arg1, arg2) {
      let Replace = arg3;
      const self = this;
      if (arg3 === undefined) {
        Replace = GuildDaoTransaction(closure_1[3]).ConflictOptions.Replace;
      }
      self.putWithGeneration(arg0, arg1, arg2, null, Replace);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "putWithGeneration",
    value(arg0, arg1, data, generation) {
      let Replace = arg4;
      if (arg4 === undefined) {
        Replace = GuildDaoTransaction(closure_1[3]).ConflictOptions.Replace;
      }
      const state = this.state;
      const items = [arg0, arg1];
      return state.put({ key: items, data, generation }, Replace);
    }
  };
  items[1] = obj;
  obj = {
    key: "delete",
    value(arg0, arg1) {
      const self = this;
      const length = arguments.length;
      if (0 === length) {
        const state3 = self.state;
        state3.delete([]);
      } else if (1 === length) {
        const state2 = self.state;
        const items = [arg0];
        state2.delete(items);
      } else {
        const state = self.state;
        const items1 = [arg0, arg1];
        state.delete(items1);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "deleteGeneration",
    value(arg0, arg1) {
      const state = this.state;
      return state.deleteGeneration([], arg0, arg1);
    }
  };
  const items1 = [
    {
      key: "fromDatabaseTransaction",
      value(prefix, tableId, transaction) {
        const tableTransaction = new GuildDaoTransaction(closure_1[2]).TableTransaction(prefix, tableId, transaction);
        return new GuildDaoTransaction(tableTransaction);
      }
    }
  ];
  return callback(GuildDaoTransaction, items, items1);
}();
const tmp2 = () => {
  class GuildDao {
    constructor(arg0, arg1, arg2) {
      flag = arg3;
      self = this;
      if (arg3 === undefined) {
        flag = true;
      }
      tmp = __exportStarResult1(self, GuildDao);
      self.originalPrefix = arg0;
      items = [];
      items[0] = arg0;
      table = new GuildDao(closure_1[2]).Table(items, arg1, arg2, flag);
      self.table = table;
      return;
    }
  }
  const arg1 = GuildDao;
  let obj = {
    key: "prefix",
    get() {
      return this.table.prefix;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "withoutLogging",
    value() {
      return new GuildDao(this.originalPrefix, this.table.tableId, this.table.database, false);
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
    value(arg0, arg1, arg2) {
      let Replace = arg3;
      const self = this;
      if (arg3 === undefined) {
        Replace = GuildDao(closure_1[3]).ConflictOptions.Replace;
      }
      return self.putWithGeneration(arg0, arg1, arg2, null, Replace);
    }
  };
  items[11] = {
    key: "putWithGeneration",
    value(arg0, arg1, data, generation) {
      let Replace = arg4;
      if (arg4 === undefined) {
        Replace = GuildDao(closure_1[3]).ConflictOptions.Replace;
      }
      const table = this.table;
      const items = [arg0, arg1];
      return table.put({ key: items, data, generation }, Replace);
    }
  };
  items[12] = {
    key: "delete",
    value(arg0, arg1) {
      const self = this;
      const length = arguments.length;
      if (0 === length) {
        const table3 = self.table;
        return table3.delete([]);
      } else if (1 === length) {
        const table2 = self.table;
        const items = [arg0];
        return table2.delete(items);
      } else {
        const table = self.table;
        const items1 = [arg0, arg1];
        return table.delete(items1);
      }
    }
  };
  items[13] = {
    key: "deleteGeneration",
    value(arg0, arg1) {
      const table = this.table;
      return table.deleteGeneration([], arg0, arg1);
    }
  };
  items[14] = {
    key: "transaction",
    value(arg0, arg1) {
      const GuildDao = arg0;
      const table = this.table;
      return table.transaction((arg0) => arg0(new closure_4(arg0)), arg1);
    }
  };
  items[15] = {
    key: "upgradeTransaction",
    value(arg0) {
      const table = this.table;
      return new closure_4(table.upgradeTransaction(arg0));
    }
  };
  items[16] = {
    key: "getManySyncUnsafe",
    value(arg0, arg1) {
      const table = this.table;
      const items = [arg0];
      return table.getManySyncUnsafe(items, arg1);
    }
  };
  items[17] = {
    key: "getMapEntriesSyncUnsafe",
    value() {
      const table = this.table;
      return table.getMapEntriesSyncUnsafe();
    }
  };
  return callback(GuildDao, items);
}();
const result = require("__exportStarResult1").fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/GuildDao.tsx");

export const GuildDao = tmp2;
export const GuildDaoTransaction = tmp3;
