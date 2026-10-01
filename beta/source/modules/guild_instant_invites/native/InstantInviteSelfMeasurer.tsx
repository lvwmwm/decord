// Module ID: 16642
// Function ID: 16643
// Name: InstantInviteSelfMeasurer
// Dependencies: [19, 17, 21, 4836, 10393, 2]

// Module 16642 (InstantInviteSelfMeasurer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import InstantInvite from "InstantInvite" /* 10393 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const InstantInviteDefault = InstantInvite;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { position: "absolute", opacity: 0 } });
const memoResult = react.memo(function InstantInviteSelfMeasurer(type) {
  let item;
  let onMeasured;
  let tmp2Result;
  ({ item, onMeasured } = type);
  let str = type.type;
  const containerStyle = type.containerStyle;
  if (str === undefined) {
    str = "height";
  }
  const items = [onMeasured, str];
  const items1 = [containerStyle, closure_6().container];
  const tmp = closure_6();
  if ("invite" === item.type) {
    const obj2 = { invite: item.data };
    tmp2Result = tmp2(InstantInviteDefault, obj2);
  } else {
    const obj3 = { channel: item.data };
    tmp2Result = tmp2(InstantInvite.LinkedChannelInvite, obj3);
  }
  return <tmp3 style={items1} onLayout={react.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    onMeasured("height" === str ? layout.height : layout.width);
  }, items)} pointerEvents="none" importantForAccessibility="no-hide-descendants" accessibilityElementsHidden accessible={false}>{tmp2Result}</tmp3>;
});
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteSelfMeasurer.tsx");

export default memoResult;
