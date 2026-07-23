// Module ID: 6899
// Function ID: 54931
// Name: NonGuildVersions
// Dependencies: [5, 6, 7, 3947, 3, 6892, 22, 1882, 664, 2]

// Module 6899 (NonGuildVersions)
import isCacheEnabled from "isCacheEnabled";
import apply from "apply";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";

const require = arg1;
importDefaultResult = new importDefaultResult("NonGuildVersions");
let tmp4 = (() => {
  class NonGuildVersions {
    constructor() {
      self = this;
      tmp = outer1_4(this, NonGuildVersions);
      this.actions = {
        CONNECTION_OPEN(arg0, arg1) {
              return self.handleConnectionOpen(arg0, arg1);
            },
        BACKGROUND_SYNC(arg0, arg1) {
              return self.handleConnectionOpen(arg0, arg1);
            }
      };
      obj = f54938(outer1_2[5]);
      if (obj.isCacheEnabled()) {
        tmp2 = outer1_6;
        tmp3 = NonGuildVersions;
        tmp4 = outer1_2;
        num = 6;
        obj2 = NonGuildVersions(outer1_2[6]);
        num2 = 8;
        num3 = 10;
        addChangeListenerResult = outer1_6.addChangeListener(obj2.throttle(() => {
          const databaseResult = NonGuildVersions(outer2_2[7]).database();
          if (null != databaseResult) {
            databaseResult.transaction((arg0) => {
              const guildId = outer3_6.getGuildId();
              if (null != guildId) {
                const _isNaN = isNaN;
                const _Number = Number;
                if (!isNaN(Number(guildId))) {
                  let obj = NonGuildVersions(outer3_2[7]);
                  const result = obj.nonGuildVersionsTransaction(arg0);
                  obj = { id: "initial_guild_id", versionString: guildId };
                  result.put(obj);
                }
              }
              const result1 = NonGuildVersions(outer3_2[7]).nonGuildVersionsTransaction(arg0);
              result1.delete("initial_guild_id");
            });
          }
        }, 10 * NonGuildVersions(outer1_2[8]).Millis.SECOND));
      }
      return;
    }
  }
  let obj = { key: "getCommittedVersions" };
  let closure_0 = callback(async () => {
    const nonGuildVersionsResult = NonGuildVersions(outer2_2[7]).nonGuildVersions();
    if (null == nonGuildVersionsResult) {
      return {};
    } else {
      const mapped = yield obj2.getMany().map((id) => {
        const items = [id.id, "version" in id ? id.version : id.versionString];
        return items;
      });
      return Object.fromEntries(null != mapped ? mapped : []);
    }
    const obj = NonGuildVersions(outer2_2[7]);
    obj2 = nonGuildVersionsResult;
  });
  obj.value = function getCommittedVersions() {
    return callback(...arguments);
  };
  let items = [obj, , ];
  obj = {
    key: "handleConnectionOpen",
    value(apiCodeVersion) {
      if (null != apiCodeVersion.apiCodeVersion) {
        let obj = NonGuildVersions(outer1_2[7]);
        const result = obj.nonGuildVersionsTransaction(arg1);
        obj = { id: "api_code_version", version: apiCodeVersion.apiCodeVersion };
        result.put(obj);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "resetInMemoryState",
    value() {

    }
  };
  items[2] = obj;
  return callback2(NonGuildVersions, items);
})();
tmp4 = new tmp4();
let result = require("_defineProperties").fileFinishedImporting("modules/app_database/modules/NonGuildVersions.tsx");

export default tmp4;
export const NonGuildVersions = tmp4;
