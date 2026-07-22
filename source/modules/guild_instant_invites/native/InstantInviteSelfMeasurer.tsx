// Module ID: 15389
// Function ID: 117288
// Dependencies: []

// Module 15389
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = arg1(dependencyMap[3]).createStyles({ container: { overflow: 40, OPERATION_CANCELED: 40 } });
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function InstantInviteSelfMeasurer(type) {
  let item;
  let onMeasured;
  ({ item, onMeasured } = type);
  const arg1 = onMeasured;
  let str = type.type;
  if (str === undefined) {
    str = "height";
  }
  const importDefault = str;
  const items = [onMeasured, str];
  let obj = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false };
  const items1 = [type.containerStyle, callback().container];
  obj.style = items1;
  obj.onLayout = importAllResult.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    onMeasured("height" === str ? layout.height : layout.width);
  }, items);
  if ("invite" === item.type) {
    obj = { invite: item.data };
    let tmp7 = jsx(importDefault(dependencyMap[4]), obj);
  } else {
    obj = { channel: item.data };
    tmp7 = jsx(arg1(dependencyMap[4]).LinkedChannelInvite, obj);
  }
  obj.children = tmp7;
  return <View {...obj} />;
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteSelfMeasurer.tsx");

export default memoResult;
