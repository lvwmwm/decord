// Module ID: 15381
// Function ID: 117245
// Dependencies: []

// Module 15381
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = arg1(dependencyMap[3]).createStyles({ container: { 0: null, 9223372036854775807: null } });
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
  let obj = { -497917812: false, -125068987: false, -77293308: false, 1382177952: false, -1399870276: false, 341224034: false };
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
