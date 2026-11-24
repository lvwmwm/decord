// Module ID: 14106
// Function ID: 14107
// Name: conjureProjectGroups
// Dependencies: [7449, 2]
// Exports: groupConjureProjects

// Module 14106 (conjureProjectGroups)
import conjureServerProject from "conjureServerProject" /* 7449 */;
import size from "module_2" /* 2 */;

let map1;

let result = size.fileFinishedImporting("modules/conjure/project_groups/conjureProjectGroups.tsx");

export function groupConjureProjects(arg0, stateFromStoresArray, stateFromStores) {
  let closure_0 = stateFromStoresArray;
  const personal = [];
  const collaborating = [];
  map = new Map();
  map1 = new Map(stateFromStoresArray.map((item, index) => {
    const items = [item, index];
    return items;
  }));
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let obj2 = conjureServerProject;
    let result = obj2.conjureServerProjectGuildId(nextResult);
    let tmp7 = result;
    if (null != result) {
      let value = map.get(tmp7);
      let arr4 = value;
      if (null != value) {
        let arr = arr4.push(tmp3);
      } else {
        let items2 = [tmp3];
        let result1 = map.set(tmp7, items2);
      }
    } else {
      let arr3 = collaborating;
      if (tmp3.owner_user_id === stateFromStores) {
        arr3 = personal;
      }
      let arr2 = arr3.push(tmp3);
    }
    continue;
  }
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
