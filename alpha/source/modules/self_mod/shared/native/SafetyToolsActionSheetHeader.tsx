// Module ID: 12312
// Function ID: 12313
// Name: SafetyToolsActionSheetHeader
// Dependencies: [19, 17, 21, 5306, 575, 12303, 7493, 5929, 2]
// Exports: default

// Module 12312 (SafetyToolsActionSheetHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import NavigatorHeader from "NavigatorHeader" /* 7493 */;
import SafetyToolsActionCreators from "SafetyToolsActionCreators" /* 12303 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { navbarContainer: { display: "flex", flexDirection: "row", justifyContent: "center" }, navbarLeft: obj2 };
obj2 = { position: "absolute", left: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheetHeader.tsx");

export default function SafetyToolsActionSheetHeader(channelId) {
  let hasBackButton;
  let items2;
  let title;
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  ({ title, hasBackButton } = channelId);
  const tmp = closure_6();
  const navbarLeft = tmp;
  const items = [channelId, recipientId, warningId, warningType];
  const callback = warningId.useCallback(() => {
    const obj = SafetyToolsActionCreators;
    const result = obj.openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType);
  }, items);
  const items1 = [callback, tmp.navbarLeft];
  let obj = { style: tmp.navbarContainer, children: items2 };
  let memo = null != hasBackButton;
  const tmp3 = callback;
  const tmp4 = warningType;
  if (memo) {
    memo = warningId.useMemo(() => {
      const obj = NavigatorHeader;
      const obj2 = { style: navbarLeft.navbarLeft };
      return React3(obj.getHeaderBackButton(callback), obj2);
    }, items1);
  }
  items2 = [memo, navbarLeft(channelId(recipientId[7]).Text, { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: title })];
  return tmp3(tmp4, obj);
};
