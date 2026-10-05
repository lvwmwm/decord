// Module ID: 15380
// Function ID: 15381
// Name: deepComparePlayList
// Dependencies: []
// Exports: deepComparePlayList

// Module 15380 (deepComparePlayList)

export const deepComparePlayList = function deepComparePlayList(current, playList) {
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
};
