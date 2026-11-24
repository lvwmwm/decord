// Module ID: 13872
// Function ID: 13873
// Name: getOneTimeGiftCodes
// Dependencies: [2]
// Exports: default

// Module 13872 (getOneTimeGiftCodes)
import size from "module_2" /* 2 */;

let set;

const result = size.fileFinishedImporting("modules/user_settings/gifting/getOneTimeGiftCodes.tsx");

export default function getOneTimeGiftCodes(arr, arg1, arg2) {
  set = arg1;
  let closure_1 = arg2;
  return arr.filter((isClaimed) => {
    const tmp = !isClaimed.isClaimed && !set.has(isClaimed.code) && isClaimed.giftStyle === closure_1;
    return tmp;
  });
};
