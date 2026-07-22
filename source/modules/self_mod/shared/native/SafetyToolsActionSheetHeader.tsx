// Module ID: 10134
// Function ID: 78442
// Name: SafetyToolsActionSheetHeader
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 10134 (SafetyToolsActionSheetHeader)
import closure_2 from "__exportStarResult1";
import { View } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ jsx: closure_4, jsxs: closure_5 } = __exportStarResult1);
__exportStarResult1 = { navbarContainer: { 9223372036854775807: 8, -9223372036854775808: null, 9223372036854775807: "\u270A\u{1F3FF}" } };
__exportStarResult1 = { position: "absolute", left: require("__exportStarResult1").space.PX_16 };
__exportStarResult1.navbarLeft = __exportStarResult1;
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheetHeader.tsx");

export default function SafetyToolsActionSheetHeader(channelId) {
  let hasBackButton;
  let title;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const recipientId = channelId.recipientId;
  const dependencyMap = recipientId;
  const warningId = channelId.warningId;
  const React = warningId;
  const warningType = channelId.warningType;
  const View = warningType;
  ({ title, hasBackButton } = channelId);
  const tmp = __exportStarResult1();
  const items = [channelId, recipientId, warningId, warningType];
  const callback = React.useCallback(() => {
    const result = channelId(recipientId[5]).openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType);
  }, items);
  const items1 = [callback, tmp.navbarLeft];
  let obj = { style: tmp.navbarContainer };
  let memo = null != hasBackButton;
  if (memo) {
    memo = React.useMemo(() => {
      let obj = channelId(recipientId[6]);
      obj = { style: tmp.navbarLeft };
      return tmp(obj.getHeaderBackButton(callback), obj);
    }, items1);
  }
  const items2 = [memo, ];
  obj = { cachedAt: true, edpbxy: true, children: title };
  items2[1] = tmp(arg1(dependencyMap[7]).Text, obj);
  obj.children = items2;
  return callback(View, obj);
};
