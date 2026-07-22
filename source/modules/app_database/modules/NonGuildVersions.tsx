// Module ID: 6894
// Function ID: 54897
// Name: NonGuildVersions
// Dependencies: []

// Module 6894 (NonGuildVersions)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let importDefaultResult = importDefault(dependencyMap[4]);
importDefaultResult = new importDefaultResult("NonGuildVersions");
let tmp4 = () => {
  class NonGuildVersions {
    constructor() {
      f54904 = this;
      tmp = closure_4(this, NonGuildVersions);
      this.actions = {
        CONNECTION_OPEN(arg0, arg1) {
              return self.handleConnectionOpen(arg0, arg1);
            },
        BACKGROUND_SYNC(arg0, arg1) {
              return self.handleConnectionOpen(arg0, arg1);
            }
      };
      obj = f54904(closure_2[5]);
      if (obj.isCacheEnabled()) {
        tmp2 = closure_6;
        tmp3 = NonGuildVersions;
        tmp4 = closure_2;
        num = 6;
        obj2 = NonGuildVersions(closure_2[6]);
        num2 = 8;
        num3 = 10;
        addChangeListenerResult = closure_6.addChangeListener(obj2.throttle(() => {
          const databaseResult = callback(closure_2[7]).database();
          if (null != databaseResult) {
            databaseResult.transaction((arg0) => {
              const guildId = guildId.getGuildId();
              if (null != guildId) {
                const _isNaN = isNaN;
                const _Number = Number;
                if (!isNaN(Number(guildId))) {
                  let obj = callback(closure_2[7]);
                  const result = obj.nonGuildVersionsTransaction(arg0);
                  obj = { id: "initial_guild_id", versionString: guildId };
                  result.put(obj);
                }
              }
              const result1 = callback(closure_2[7]).nonGuildVersionsTransaction(arg0);
              result1.delete("initial_guild_id");
            });
          }
        }, 10 * NonGuildVersions(closure_2[8]).Millis.SECOND));
      }
      return;
    }
  }
  const importDefault = NonGuildVersions;
  let obj = { key: "getCommittedVersions" };
  let closure_0 = callback(async () => {
    const nonGuildVersionsResult = callback(closure_2[7]).nonGuildVersions();
    if (null == nonGuildVersionsResult) {
      return {};
    } else {
      const mapped = yield obj2.getMany().map((id) => {
        const items = [id.id, "version" in id ? id.version : id.versionString];
        return items;
      });
      return Object.fromEntries(null != mapped ? mapped : []);
    }
    const obj = callback(closure_2[7]);
    const obj2 = nonGuildVersionsResult;
  });
  obj.value = function getCommittedVersions() {
    return callback(...arguments);
  };
  const items = [obj, , ];
  obj = {
    key: "handleConnectionOpen",
    value(apiCodeVersion) {
      if (null != apiCodeVersion.apiCodeVersion) {
        let obj = NonGuildVersions(closure_2[7]);
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
}();
tmp4 = new tmp4();
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/app_database/modules/NonGuildVersions.tsx");

export default tmp4;
export const NonGuildVersions = tmp4;
