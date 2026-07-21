// Module ID: 11444
// Function ID: 89116
// Name: calculatePositionDeltas
// Dependencies: []
// Exports: getPositionUpdates

// Module 11444 (calculatePositionDeltas)
function calculatePositionDeltas(arg0) {
  let ascending;
  let existingPositionGetter;
  let idGetter;
  let newOrdering;
  let oldOrdering;
  ({ oldOrdering, newOrdering, idGetter, existingPositionGetter, ascending } = arg0);
  if (ascending === undefined) {
    ascending = true;
  }
  if (oldOrdering.length !== newOrdering.length) {
    importDefaultResult.warn("Arrays are not of the same length!", oldOrdering, newOrdering);
    return [];
  } else {
    const mapped = oldOrdering.map(idGetter);
    const sorted = mapped.sort();
    const joined = sorted.join(":");
    const mapped1 = newOrdering.map(idGetter);
    const sorted1 = mapped1.sort();
    const joined1 = sorted1.join(":");
    if (joined !== joined1) {
      importDefaultResult.warn("Object IDs in the old ordering and the new ordering are not the same.", joined, joined1);
      return [];
    } else {
      let obj = {};
      for (let num = 0; num < length; num = num + 1) {
        let idGetterResult = idGetter(oldOrdering[num]);
        obj[idGetterResult] = existingPositionGetter(oldOrdering[num]);
      }
      const items = [];
      for (let num3 = 0; num3 < length; num3 = num3 + 1) {
        let idGetterResult1 = idGetter(newOrdering[num3]);
        let diff = num3;
        if (!ascending) {
          diff = length - 1 - num3;
        }
        let tmp4 = obj[idGetterResult1] === diff && existingPositionGetter(newOrdering[num3]) === diff;
        if (!tmp4) {
          obj = { id: idGetterResult1, position: diff };
          let arr = items.push(obj);
        }
      }
      if (!ascending) {
        const reversed = items.reverse();
      }
      return items;
    }
  }
}
function moveItemFromTo(closure_13, closure_2, to) {
  const items = [...closure_13];
  items.splice(closure_2, 1);
  items.splice(to, 0, closure_13[closure_2]);
  return items;
}
function getPositionUpdates(arg0) {
  let ascending;
  let existingPositionGetter;
  let fromPosition;
  let idGetter;
  let objectArray;
  let toPosition;
  ({ objectArray, ascending } = arg0);
  ({ fromPosition, toPosition, idGetter, existingPositionGetter } = arg0);
  if (ascending === undefined) {
    ascending = true;
  }
  let values = objectArray;
  if (!Array.isArray(objectArray)) {
    let obj = importDefault(dependencyMap[1]);
    values = obj.values(objectArray);
  }
  obj = { oldOrdering: values, newOrdering: moveItemFromTo(values, fromPosition, toPosition), idGetter, existingPositionGetter, ascending };
  return calculatePositionDeltas(obj);
}
let importDefaultResult = importDefault(dependencyMap[0]);
importDefaultResult = new importDefaultResult("DragAndDropUtils");
const result = arg1(dependencyMap[2]).fileFinishedImporting("utils/DragAndDropUtils.tsx");

export default { moveItemFromTo, calculatePositionDeltas, getPositionUpdates };
export { calculatePositionDeltas };
export { moveItemFromTo };
export { getPositionUpdates };
