// Module ID: 10534
// Function ID: 10535
// Name: conjureProjectGroups
// Dependencies: [7236, 2]
// Exports: groupConjureProjects

// Module 10534 (conjureProjectGroups)
import size from "module_2" /* 2 */;

let map1;

let result = size.fileFinishedImporting("modules/conjure/project_groups/conjureProjectGroups.tsx");

export function groupConjureProjects(arg0, stateFromStoresArray, stateFromStores) {
  const personal = [];
  const collaborating = [];
  map = new Map();
  map1 = new Map(stateFromStoresArray.map((item, index) => {
    const items = [item, index];
    return items;
  }));
  function _loop() {
    const obj = stateFromStoresArray(stateFromStores[0]);
    const result = obj.conjureServerAppGuildId(closure_6);
    stateFromStoresArray = result;
    const tmp2 = closure_6;
    if (null == result) {
      const arr6 = closure_6.owner_user_id === stateFromStores ? personal : collaborating;
      arr6.push(tmp2);
      return 1;
    } else {
      let found;
      if (closure_6.owner_user_id === stateFromStores) {
        let guild_ids = tmp3.guild_ids;
        if (guild_ids == null) {
          guild_ids = [];
        }
        found = guild_ids.filter((item) => {
          const hasItem = item !== result && map1.has(item);
          return hasItem;
        });
      } else {
        found = [];
      }
      const items = [result];
      HermesBuiltin.arraySpread(items, found, 1);
      for (const item10025 of items) {
        let obj2 = map;
        let tmp11 = item10025;
        let value = map.get(item10025);
        let arr4 = value;
        if (null != value) {
          let arr2 = arr4.push(closure_6);
        } else {
          let items1 = [closure_6];
          let result1 = obj2.set(tmp11, items1);
        }
        continue;
      }
    }
  }
  const iter = arg0[Symbol.iterator]();
  while (iter !== undefined) {
    let closure_6 = iter.next();
    let _loopResult = _loop();
    continue;
  }
  const arr = Array.from(map, (arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return { guildId, projects };
  });
  const sorted = arr.sort((guildId, guildId2) => {
    let length = map1.get(guildId.guildId);
    const obj = map1;
    if (length == null) {
      length = stateFromStoresArray.length;
    }
    let length2 = obj.get(guildId2.guildId);
    if (length2 == null) {
      length2 = stateFromStoresArray.length;
    }
    return length - length2;
  });
  return { personal, collaborating, servers: arr };
}
