// Module ID: 14187
// Function ID: 14188
// Name: ProvisionalAccountExplainer
// Dependencies: [19, 17, 21, 5014, 575, 14188, 14189, 6977, 5624, 1113, 7086, 7376, 2]
// Exports: ChatProvisionalAccountExplainerCard, UserProfileProvisionalAccountExplainerCard

// Module 14187 (ProvisionalAccountExplainer)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import UserProfileCardDefault from "UserProfileCard" /* 7376 */;
import ApplicationIconAndNameDefault from "ApplicationIconAndName" /* 14188 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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

export function ChatProvisionalAccountExplainerCard(iconSize) {
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
  const obj = iconSize(14189);
  const provisionalAccountExplanationText = obj.useProvisionalAccountExplanationText({ userId, renderApplicationName: callback });
  const obj2 = { style: items1, children: items3 };
  items1 = [tmp.chatContainer, style];
  const obj3 = { style: tmp.header, children: items2 };
  const Card = iconSize(6977).Card;
  const obj4 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(iconSize(1113).t.Iyka0U) };
  const Text = iconSize(5624).Text;
  intl = iconSize(1113).intl;
  items2 = [closure_5(Text, obj4), closure_5(iconSize(7086).CircleErrorIcon, { size: "xs", color: "text-default" })];
  items3 = [closure_6(View, obj3), closure_5(iconSize(5624).Text, { variant: "text-sm/normal", color: "text-default", children: provisionalAccountExplanationText })];
  return closure_6(Card, obj2);
}
export function UserProfileProvisionalAccountExplainerCard(iconSize) {
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
  let obj = iconSize(14189);
  const provisionalAccountExplanationText = obj.useProvisionalAccountExplanationText({ userId, renderApplicationName: callback });
  const obj2 = { style, title: intl.string(iconSize(1113).t.Iyka0U), titleIcon: closure_5(iconSize(7086).CircleErrorIcon, { size: "xs", color: "text-default" }), children: closure_5(iconSize(5624).Text, { variant: "text-md/normal", color: "text-default", children: provisionalAccountExplanationText }) };
  const tmp3 = UserProfileCardDefault;
  intl = iconSize(1113).intl;
  return closure_5(tmp3, obj2);
}
