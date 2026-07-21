// Module ID: 14261
// Function ID: 107801
// Name: deepComparePlayList
// Dependencies: []

// Module 14261 (deepComparePlayList)
arg5.deepComparePlayList = function deepComparePlayList(current, playList) {
  let tmp = current === playList;
  if (!tmp) {
    const _Array = Array;
    let tmp3 = !Array.isArray(current);
    if (!tmp3) {
      const _Array2 = Array;
      tmp3 = !Array.isArray(playList);
    }
    let tmp4 = !tmp3;
    if (!tmp3) {
      const joined = current.join("");
      tmp4 = joined === playList.join("");
    }
    tmp = tmp4;
  }
  return tmp;
};
