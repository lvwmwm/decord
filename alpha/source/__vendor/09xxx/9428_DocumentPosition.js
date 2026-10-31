// Module ID: 9428
// Function ID: 9429
// Name: DocumentPosition
// Dependencies: [9413]
// Exports: removeSubsets, uniqueSort

// Module 9428 (DocumentPosition)
import DomHandler from "DomHandler" /* 9413 */;

function compareDocumentPosition(parent, parent2) {
  if (parent === parent2) {
    return 0;
  } else {
    if (!DomHandler.hasChildren(parent)) {
      parent = parent.parent;
    }
    const items = [];
    while (parent) {
      let arr = items.unshift(parent);
      parent = parent.parent;
    }
    if (!DomHandler.hasChildren(parent2)) {
      parent2 = parent2.parent;
    }
    const items1 = [];
    while (parent2) {
      let arr2 = items1.unshift(parent2);
      parent2 = parent2.parent;
    }
    const _Math = Math;
    const bound = Math.min(items.length, items1.length);
    let num2 = 0;
    if (0 < bound) {
      let num4 = 0;
      num2 = 0;
      if (items[0] === items1[0]) {
        const sum = num4 + 1;
        num2 = sum;
        while (sum < bound) {
          num4 = sum;
          num2 = sum;
          if (items[sum] !== items1[sum]) {
            break;
          }
        }
      }
    }
    if (0 === num2) {
      return obj.DISCONNECTED;
    } else {
      let PRECEDING;
      const children = tmp15.children;
      const tmp16 = items1[num2];
      const index = children.indexOf(items[num2]);
      if (index > children.indexOf(tmp16)) {
        let FOLLOWING;
        if (items[num2 - 1] === parent2) {
          FOLLOWING = obj.FOLLOWING | obj.CONTAINED_BY;
        } else {
          FOLLOWING = obj.FOLLOWING;
        }
        PRECEDING = FOLLOWING;
      } else if (items[num2 - 1] === parent) {
        PRECEDING = obj.PRECEDING | obj.CONTAINS;
      } else {
        PRECEDING = obj.PRECEDING;
      }
      return PRECEDING;
    }
  }
}
const DocumentPosition = { DISCONNECTED: 1, PRECEDING: 2, FOLLOWING: 4, CONTAINS: 8, CONTAINED_BY: 16 };
DocumentPosition[1] = "DISCONNECTED";
DocumentPosition[2] = "PRECEDING";
DocumentPosition[4] = "FOLLOWING";
DocumentPosition[8] = "CONTAINS";
DocumentPosition[16] = "CONTAINED_BY";

export function removeSubsets(arr) {
  let diff = arr.length - 1;
  if (diff >= 0) {
    while (true) {
      let tmp2 = arr[diff];
      if (diff > 0) {
        if (arr.lastIndexOf(tmp2, diff - 1) >= 0) {
          let spliceResult = arr.splice(diff, 1);
          diff = diff - 1;
          if (diff < 0) {
            break;
          }
        }
      }
      let parent = tmp2.parent;
      if (parent) {
        while (!arr.includes(parent)) {
          parent = parent.parent;
        }
        let spliceResult1 = arr.splice(diff, 1);
      }
    }
  }
  return arr;
}
export { compareDocumentPosition };
export function uniqueSort(arr) {
  const found = arr.filter((item, index, arr) => !arr.includes(item, index + 1));
  const sorted = found.sort((arg0, arg1) => {
    const tmp = compareDocumentPosition(arg0, arg1);
    let num = -1;
    if (!(tmp & constants.PRECEDING)) {
      let num2 = 0;
      if (tmp & constants.FOLLOWING) {
        num2 = 1;
      }
      num = num2;
    }
    return num;
  });
  return found;
}
export { DocumentPosition };
