// Module ID: 10465
// Function ID: 10466
// Name: conjureProjectGroups
// Dependencies: [7173, 2]
// Exports: groupConjureProjects

// Module 10465 (conjureProjectGroups)
import conjureServerProject from "conjureServerProject" /* 7173 */;
import size from "module_2" /* 2 */;

let map1;

let result = size.fileFinishedImporting("modules/conjure/project_groups/conjureProjectGroups.tsx");

export function groupConjureProjects(arg0, stateFromStoresArray, stateFromStores) {
  let closure_0 = stateFromStoresArray;
  const personal = [];
  const collaborating = [];
  map = new Map();
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let obj2 = conjureServerProject;
    let result = obj2.conjureServerAppGuildId(nextResult);
    let tmp6 = result;
    if (null != result) {
      let value = map.get(tmp6);
      let arr4 = value;
      if (null != value) {
        let arr = arr4.push(tmp2);
      } else {
        let items2 = [tmp2];
        let result1 = map.set(tmp6, items2);
      }
    } else {
      let arr3 = collaborating;
      if (tmp2.owner_user_id === stateFromStores) {
        arr3 = personal;
      }
      let arr2 = arr3.push(tmp2);
    }
    continue;
  }
  map1 = new Map(stateFromStoresArray.map((item, index) => {
    const items = [item, index];
    return items;
  }));
  const arr5 = Array.from(map, (arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return { guildId, projects };
  });
  const sorted = arr5.sort((guildId, guildId2) => {
    let length = map1.get(guildId.guildId);
    const obj = map1;
    if (length == null) {
      length = closure_0.length;
    }
    let length2 = obj.get(guildId2.guildId);
    if (length2 == null) {
      length2 = closure_0.length;
    }
    return length - length2;
  });
  return { personal, collaborating, servers: arr5 };
}
