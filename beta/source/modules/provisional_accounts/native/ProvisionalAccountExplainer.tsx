// Module ID: 12124
// Function ID: 12125
// Name: ProvisionalAccountExplainer
// Dependencies: [19, 17, 21, 4836, 576, 12125, 12126, 5919, 4832, 1115, 6028, 6628, 2]
// Exports: ChatProvisionalAccountExplainerCard, UserProfileProvisionalAccountExplainerCard

// Module 12124 (ProvisionalAccountExplainer)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import UserProfileCardDefault from "UserProfileCard" /* 6628 */;
import ApplicationIconAndNameDefault from "ApplicationIconAndName" /* 12125 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let importDefault;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles(() => {
  const obj = { chatContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, gap: nativeDefault.space.PX_8 }, header: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 } };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, gap: nativeDefault.space.PX_8 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 });
  return obj;
});
const result = size.fileFinishedImporting("modules/provisional_accounts/native/ProvisionalAccountExplainer.tsx");

export const ChatProvisionalAccountExplainerCard = function ChatProvisionalAccountExplainerCard(iconSize) {
  let intl;
  let items1;
  let items2;
  let items3;
  let style;
  let userId;
  iconSize = iconSize.iconSize;
  ({ style, userId } = iconSize);
  const tmp = closure_7();
  let c1 = "text-sm/semibold";
  const items = [iconSize, "text-sm/semibold"];
  const callback = react.useCallback((application) => {
    const obj = { application, textVariant, iconSize };
    return hasOwnProperty(ApplicationIconAndNameDefault, obj, application.id);
  }, items);
  const obj = iconSize(12126);
  const provisionalAccountExplanationText = obj.useProvisionalAccountExplanationText({ userId, renderApplicationName: callback });
  const obj2 = { style: items1, children: items3 };
  items1 = [tmp.chatContainer, style];
  const obj3 = { style: tmp.header, children: items2 };
  const Card = iconSize(5919).Card;
  const obj4 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(iconSize(1115).t.Iyka0U) };
  const Text = iconSize(4832).Text;
  intl = iconSize(1115).intl;
  items2 = [closure_5(Text, obj4), closure_5(iconSize(6028).CircleErrorIcon, { size: "xs", color: "text-default" })];
  items3 = [closure_6(View, obj3), closure_5(iconSize(4832).Text, { variant: "text-sm/normal", color: "text-default", children: provisionalAccountExplanationText })];
  return closure_6(Card, obj2);
};
export const UserProfileProvisionalAccountExplainerCard = function UserProfileProvisionalAccountExplainerCard(iconSize) {
  let intl;
  let style;
  let textVariant;
  let userId;
  iconSize = iconSize.iconSize;
  importDefault = "text-md/semibold";
  const items = [iconSize, "text-md/semibold"];
  ({ style, userId } = iconSize);
  const callback = react.useCallback((application) => {
    const obj = { application, textVariant, iconSize };
    return hasOwnProperty(ApplicationIconAndNameDefault, obj, application.id);
  }, items);
  let obj = iconSize(12126);
  const provisionalAccountExplanationText = obj.useProvisionalAccountExplanationText({ userId, renderApplicationName: callback });
  const obj2 = { style, title: intl.string(iconSize(1115).t.Iyka0U), titleIcon: closure_5(iconSize(6028).CircleErrorIcon, { size: "xs", color: "text-default" }), children: closure_5(iconSize(4832).Text, { variant: "text-md/normal", color: "text-default", children: provisionalAccountExplanationText }) };
  const tmp3 = UserProfileCardDefault;
  intl = iconSize(1115).intl;
  return closure_5(tmp3, obj2);
};
