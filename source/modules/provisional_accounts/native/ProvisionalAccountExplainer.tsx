// Module ID: 11687
// Function ID: 90676
// Name: useNativeProvisionalAccountExplainerText
// Dependencies: [31, 27, 33, 4130, 689, 11688, 11689, 5167, 4126, 1212, 7577, 5509, 2]
// Exports: ChatProvisionalAccountExplainerCard, UserProfileProvisionalAccountExplainerCard

// Module 11687 (useNativeProvisionalAccountExplainerText)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function useNativeProvisionalAccountExplainerText(userId) {
  const iconSize = userId.iconSize;
  const textVariant = userId.textVariant;
  const items = [iconSize, textVariant];
  const renderApplicationName = React.useCallback((application) => outer1_5(textVariant(outer1_2[5]), { application, textVariant, iconSize }, application.id), items);
  return iconSize(11689).useProvisionalAccountExplanationText({ userId: userId.userId, renderApplicationName });
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_MUTED, gap: importDefault(689).space.PX_8 };
  obj.chatContainer = obj;
  obj = { flexDirection: "row", alignItems: "center", gap: importDefault(689).space.PX_4 };
  obj.header = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/provisional_accounts/native/ProvisionalAccountExplainer.tsx");

export const ChatProvisionalAccountExplainerCard = function ChatProvisionalAccountExplainerCard(arg0) {
  let iconSize;
  let style;
  let userId;
  ({ style, userId, iconSize } = arg0);
  const tmp = callback3();
  let obj = { style: items };
  items = [tmp.chatContainer, style];
  obj = { style: tmp.header };
  obj = { variant: "text-sm/semibold", color: "text-default" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.Iyka0U);
  const items1 = [callback(require(4126) /* Text */.Text, obj), callback(require(7577) /* CircleErrorIcon */.CircleErrorIcon, { size: "xs", color: "text-default" })];
  obj.children = items1;
  const items2 = [callback2(View, obj), ];
  const obj1 = { variant: "text-sm/normal", color: "text-default", children: useNativeProvisionalAccountExplainerText({ userId, iconSize, textVariant: "text-sm/semibold" }) };
  items2[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items2;
  return callback2(require(5167) /* getCardBackgroundToken */.Card, obj);
};
export const UserProfileProvisionalAccountExplainerCard = function UserProfileProvisionalAccountExplainerCard(userId) {
  let obj = { userId: userId.userId, iconSize: userId.iconSize, textVariant: "text-md/semibold" };
  obj = { style: userId.style };
  const tmp = useNativeProvisionalAccountExplainerText(obj);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.Iyka0U);
  obj.titleIcon = callback(require(7577) /* CircleErrorIcon */.CircleErrorIcon, { size: "xs", color: "text-default" });
  obj = { variant: "text-md/normal", color: "text-default", children: tmp };
  obj.children = callback(require(4126) /* Text */.Text, obj);
  return callback(importDefault(5509), obj);
};
