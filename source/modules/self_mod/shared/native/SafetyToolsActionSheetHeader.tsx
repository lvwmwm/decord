// Module ID: 10142
// Function ID: 78482
// Name: SafetyToolsActionSheetHeader
// Dependencies: [31, 27, 33, 4130, 689, 10133, 5087, 4126, 2]
// Exports: default

// Module 10142 (SafetyToolsActionSheetHeader)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { navbarContainer: { display: "flex", flexDirection: "row", justifyContent: "center" } };
_createForOfIteratorHelperLoose = { position: "absolute", left: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.navbarLeft = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("jsxProd").fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheetHeader.tsx");

export default function SafetyToolsActionSheetHeader(channelId) {
  let hasBackButton;
  let title;
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  ({ title, hasBackButton } = channelId);
  const tmp = _createForOfIteratorHelperLoose();
  let callback = tmp;
  const items = [channelId, recipientId, warningId, warningType];
  callback = warningId.useCallback(() => {
    const result = channelId(recipientId[5]).openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType);
  }, items);
  const items1 = [callback, tmp.navbarLeft];
  let obj = { style: tmp.navbarContainer };
  let memo = null != hasBackButton;
  if (memo) {
    memo = warningId.useMemo(() => {
      let obj = channelId(recipientId[6]);
      obj = { style: tmp.navbarLeft };
      return tmp(obj.getHeaderBackButton(callback), obj);
    }, items1);
  }
  const items2 = [memo, ];
  obj = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: title };
  items2[1] = callback(channelId(recipientId[7]).Text, obj);
  obj.children = items2;
  return callback(warningType, obj);
};
