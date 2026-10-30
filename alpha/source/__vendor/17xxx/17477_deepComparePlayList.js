// Module ID: 17477
// Function ID: 17478
// Name: deepComparePlayList
// Dependencies: []
// Exports: deepComparePlayList

// Module 17477 (deepComparePlayList)

export function deepComparePlayList(current, playList) {
  let tmp = current === playList;
  if (!tmp) {
    const _Array = Array;
    const isArray = Array.isArray(current);
    let tmp4 = !isArray;
    if (isArray) {
      const _Array2 = Array;
      tmp4 = !Array.isArray(playList);
    }
    let tmp5 = !tmp4;
    if (tmp5) {
      const joined = current.join("");
      tmp5 = joined === playList.join("");
    }
    tmp = tmp5;
  }
  return tmp;
}
