// Module ID: 14835
// Function ID: 14836
// Name: ProvisionalAccountExplainer
// Dependencies: [19, 17, 21, 5243, 575, 14836, 14837, 7381, 5866, 1113, 7557, 7895, 2]
// Exports: ChatProvisionalAccountExplainerCard, UserProfileProvisionalAccountExplainerCard

// Module 14835 (ProvisionalAccountExplainer)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import UserProfileCardDefault from "UserProfileCard" /* 7895 */;
import ApplicationIconAndNameDefault from "ApplicationIconAndName" /* 14836 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
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
  let c1 = "body-sm/semibold";
  const items = [iconSize, "body-sm/semibold"];
  const callback = react.useCallback((application) => {
    const obj = { application, textVariant, iconSize };
    return hasOwnProperty(ApplicationIconAndNameDefault, obj, application.id);
  }, items);
  const obj = iconSize(14837);
  const provisionalAccountExplanationText = obj.useProvisionalAccountExplanationText({ userId, renderApplicationName: callback });
  const obj2 = { style: items1, children: items3 };
  items1 = [tmp.chatContainer, style];
  const obj3 = { style: tmp.header, children: items2 };
  const Card = iconSize(7381).Card;
  const obj4 = { variant: "body-sm/semibold", color: "text-default", children: intl.string(iconSize(1113).t.Iyka0U) };
  const Text = iconSize(5866).Text;
  intl = iconSize(1113).intl;
  items2 = [closure_5(Text, obj4), closure_5(iconSize(7557).CircleErrorIcon, { size: "xs", color: "text-default" })];
  items3 = [closure_6(View, obj3), closure_5(iconSize(5866).Text, { variant: "body-sm/normal", color: "text-default", children: provisionalAccountExplanationText })];
  return closure_6(Card, obj2);
}
export function UserProfileProvisionalAccountExplainerCard(iconSize) {
  let intl;
  let style;
  let textVariant;
  let userId;
  iconSize = iconSize.iconSize;
  importDefault = "body-md/semibold";
  const items = [iconSize, "body-md/semibold"];
  ({ style, userId } = iconSize);
  const callback = react.useCallback((application) => {
    const obj = { application, textVariant, iconSize };
    return hasOwnProperty(ApplicationIconAndNameDefault, obj, application.id);
  }, items);
  let obj = iconSize(14837);
  const provisionalAccountExplanationText = obj.useProvisionalAccountExplanationText({ userId, renderApplicationName: callback });
  const obj2 = { style, title: intl.string(iconSize(1113).t.Iyka0U), titleIcon: closure_5(iconSize(7557).CircleErrorIcon, { size: "xs", color: "text-default" }), children: closure_5(iconSize(5866).Text, { variant: "body-md/normal", color: "text-default", children: provisionalAccountExplanationText }) };
  const tmp3 = UserProfileCardDefault;
  intl = iconSize(1113).intl;
  return closure_5(tmp3, obj2);
}
