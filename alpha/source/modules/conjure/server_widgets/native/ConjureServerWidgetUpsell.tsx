// Module ID: 15687
// Function ID: 15688
// Name: ConjureServerWidgetUpsell
// Dependencies: [19, 17, 1385, 21, 5243, 575, 15688, 6274, 7654, 5866, 1113, 4079, 13683, 5873, 15696, 12071, 504, 2]
// Exports: default

// Module 15687 (ConjureServerWidgetUpsell)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import useConjureServerWidgetUpsell from "useConjureServerWidgetUpsell" /* 15688 */;
import turnOnConjureServerWidgetDefault from "turnOnConjureServerWidget" /* 15696 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let currentUser;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function ServerWidgetUpsellCard(cardStyle) {
  let application;
  let creator;
  let guild;
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let items3;
  let obj15;
  let obj7;
  let obj9;
  let onDismiss;
  let rendererProps;
  let userId;
  let widget;
  ({ userId, widget } = cardStyle);
  ({ guildId, onDismiss } = cardStyle);
  cardStyle = cardStyle.cardStyle;
  const tmp = closure_7();
  const obj = widget(15688);
  const conjureServerWidgetUpsellDetails = obj.useConjureServerWidgetUpsellDetails(userId, widget, guildId);
  if (null == conjureServerWidgetUpsellDetails) {
    return null;
  } else {
    ({ guild, creator } = conjureServerWidgetUpsellDetails);
    const obj2 = { style: tmp.cta, children: items2 };
    ({ application, rendererProps } = conjureServerWidgetUpsellDetails);
    const obj3 = { direction: "horizontal", spacing: onDismiss(575).space.PX_12, align: "flex-start", children: items };
    const Stack2 = tmp2(6274).Stack;
    const obj4 = { guild, size: widget(7654).GuildIconSizes.SMALL_36 };
    const tmp11 = onDismiss(7654);
    items = [closure_5(tmp11, obj4), ];
    const obj5 = { spacing: onDismiss(575).space.PX_4, style: tmp.copy, children: items1 };
    const Stack3 = tmp2(6274).Stack;
    const obj6 = { variant: "body-md/semibold", color: "text-strong", children: intl3.formatToPlainString(onDismiss(4079)["uIb8U+"], obj7) };
    const Text = tmp2(5866).Text;
    intl3 = tmp2(1113).intl;
    obj7 = { guildName: guild.name };
    items1 = [closure_5(Text, obj6), , ];
    const obj8 = { variant: "body-sm/normal", color: "text-default", children: intl4.formatToPlainString(onDismiss(4079).ZZywee, obj9) };
    const Text2 = tmp2(5866).Text;
    intl4 = tmp2(1113).intl;
    obj9 = { applicationName: application.name };
    items1[1] = closure_5(Text2, obj8);
    let tmp10Result = null;
    if (null != creator) {
      const obj10 = { creator, guildId };
      tmp10Result = tmp10(tmp9(13683), obj10);
    }
    items1[2] = tmp10Result;
    items[1] = closure_6(Stack3, obj5);
    items2 = [closure_6(Stack2, obj3), ];
    const obj11 = { direction: "horizontal", spacing: onDismiss(575).space.PX_8, justify: "flex-end", children: items3 };
    const Stack = tmp2(6274).Stack;
    const obj12 = { variant: "secondary", size: "sm", text: intl.string(widget(1113).t.WAI6xu), onPress: onDismiss };
    const Button = tmp2(5873).Button;
    intl = tmp2(1113).intl;
    items3 = [closure_5(Button, obj12), ];
    const obj13 = {
      variant: "primary",
      size: "sm",
      text: intl2.string(onDismiss(4079).j6ztO0),
      onPress() {
          return turnOnConjureServerWidgetDefault(widget.applicationId, onDismiss);
        }
    };
    const Button2 = tmp2(5873).Button;
    intl2 = tmp2(1113).intl;
    items3[1] = closure_5(Button2, obj13);
    items2[1] = closure_6(Stack, obj11);
    const obj14 = { style: tmp.container, children: closure_5(onDismiss(12071), obj15) };
    obj15 = { userId, widget, cardStyle, rendererProps, footer: closure_6(View, obj2) };
    closure_6(View, obj2);
    return closure_5(View, obj14);
  }
}
function ServerWidgetUpsellForUser(userId) {
  userId = userId.userId;
  const cardStyle = userId.cardStyle;
  const obj = useConjureServerWidgetUpsell;
  const conjureServerWidgetUpsellOffer = obj.useConjureServerWidgetUpsellOffer(userId);
  let tmp2 = null;
  if (null != conjureServerWidgetUpsellOffer) {
    const obj3 = { userId, widget: null, guildId: null, cardStyle, onDismiss: conjureServerWidgetUpsellOffer.dismiss };
    ({ widget: obj2.widget, guildId: obj2.guildId } = conjureServerWidgetUpsellOffer);
    tmp2 = hasOwnProperty(ServerWidgetUpsellCard, obj3, conjureServerWidgetUpsellOffer.guildId);
  }
  return tmp2;
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, cta: obj3, copy: { flex: 1 } };
obj2 = { marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/server_widgets/native/ConjureServerWidgetUpsell.tsx");

export default function ConjureServerWidgetUpsell(cardStyle) {
  cardStyle = cardStyle.cardStyle;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { userId: stateFromStores, cardStyle };
    tmp2 = hasOwnProperty(ServerWidgetUpsellForUser, obj2, stateFromStores);
  }
  return tmp2;
};
