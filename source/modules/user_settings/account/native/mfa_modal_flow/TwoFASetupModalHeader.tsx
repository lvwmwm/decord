// Module ID: 13566
// Function ID: 102880
// Name: PageMarker
// Dependencies: []

// Module 13566 (PageMarker)
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_1, jsxs: closure_2 } = arg1(dependencyMap[2]));
let obj1 = arg1(dependencyMap[3]);
let obj = { pageMarkerContainer: { 9223372036854775807: 1908422878, 9223372036854775807: 3, 9223372036854775807: 33750337, 0: 834232576 } };
obj = { allowed: -197062189, reason: 1912603177, BANNER: 433, MODAL: 231, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_STRONG, borderColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
obj.circleIcon = obj;
obj1 = { 1364418824: null, -1218379181: "a255589f0ef23e06a175ac0fc6767b9f", -1604166557: "blocked_darker", -112316076: "png", -14232062: true, 1446732547: "/assets/images/native/empties", backgroundColor: importDefault(dependencyMap[4]).colors.BORDER_STRONG };
obj.horizontalLine = obj1;
const tmp2 = arg1(dependencyMap[2]);
obj.filledCircle = { backgroundColor: importDefault(dependencyMap[4]).colors.TEXT_BRAND, borderColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
let closure_3 = obj1.createStyles(obj);
const obj2 = { backgroundColor: importDefault(dependencyMap[4]).colors.TEXT_BRAND, borderColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
const memoResult = importAllResult.memo((arg0) => {
  let numMarkers;
  ({ numMarkers, currentPage: closure_0 } = arg0);
  const tmp = callback2();
  const ArrayResult = Array(numMarkers);
  let obj = { style: items };
  const items = [tmp.pageMarkerContainer, ];
  obj = { width: 20 * numMarkers };
  items[1] = obj;
  const mapped = Array(numMarkers).fill(undefined).map((arg0, arg1) => {
    const obj = {};
    const items = [tmp.circleIcon, ];
    const sum = arg1 + 1;
    let filledCircle = closure_0 === sum;
    if (filledCircle) {
      filledCircle = tmp.filledCircle;
    }
    items[1] = filledCircle;
    obj.style = items;
    return tmp(closure_0, obj, sum);
  });
  const items1 = [tmp(View, { style: tmp.horizontalLine }), mapped];
  obj.children = items1;
  return callback(View, obj);
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModalHeader.tsx");

export const PageMarker = memoResult;
