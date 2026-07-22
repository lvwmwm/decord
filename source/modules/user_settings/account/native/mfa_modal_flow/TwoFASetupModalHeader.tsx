// Module ID: 13573
// Function ID: 102913
// Name: PageMarker
// Dependencies: []

// Module 13573 (PageMarker)
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_1, jsxs: closure_2 } = arg1(dependencyMap[2]));
let obj1 = arg1(dependencyMap[3]);
let obj = { pageMarkerContainer: { 2022275207: 1908422878, 1756305299: 3, 1637488532: 33719105, 70668098: 1908039936 } };
obj = { "Null": 1350123793, "Null": -1317928958, "Null": -419430399, "Null": 16777216, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_STRONG, borderColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
obj.circleIcon = obj;
obj1 = { "Bool(false)": null, "Bool(false)": "a255589f0ef23e06a175ac0fc6767b9f", "Bool(false)": "blocked_darker", "Bool(false)": "png", "Bool(false)": true, "Bool(false)": "/assets/images/native/empties", backgroundColor: importDefault(dependencyMap[4]).colors.BORDER_STRONG };
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
