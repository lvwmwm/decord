// Module ID: 13557
// Function ID: 102835
// Name: PageMarker
// Dependencies: []

// Module 13557 (PageMarker)
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_1, jsxs: closure_2 } = arg1(dependencyMap[2]));
let obj1 = arg1(dependencyMap[3]);
let obj = { pageMarkerContainer: { 1888122886: 1908422878, 1626306569: 3, 789915519: 33767745, 1626679168: 834232576 } };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_STRONG, borderColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
obj.circleIcon = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.BORDER_STRONG };
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
