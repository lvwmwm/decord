// Module ID: 18299
// Function ID: 18300
// Name: GuildRoleSubscriptionTierTemplateUpsellActionSheet
// Dependencies: [32, 19, 17, 5015, 1072, 4860, 21, 5014, 575, 8773, 563, 5272, 1113, 8873, 5624, 6027, 5634, 9074, 5258, 2]
// Exports: default

// Module 18299 (GuildRoleSubscriptionTierTemplateUpsellActionSheet)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1113 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5272 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 8773 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9074 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let c10;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ GuildSettingsSections: metroImportDefault, GuildSettingsSubsections: metroImportAll } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const src = { videoURI: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov" };
let createStyles = createStyles_mod;
let obj = { container: obj2, videoContainer: obj3, info: obj4, title: obj5, subtitle: obj6, footer: obj7 };
obj2 = { padding: nativeDefault.space.PX_16, justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj4 = { marginTop: nativeDefault.space.PX_16, alignItems: "center" };
obj5 = { marginTop: nativeDefault.space.PX_24, textAlign: "center" };
obj6 = { marginTop: nativeDefault.space.PX_12, textAlign: "center" };
obj7 = { marginTop: nativeDefault.space.PX_32 };
let closure_13 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUpsellActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplateUpsellActionSheet(arg0) {
  let _undefined;
  let c2;
  let closure_3;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items2;
  let items3;
  let items4;
  let markAsDismissed;
  let obj4;
  let tmp3;
  let useReducedMotion;
  ({ guildId: require, markAsDismissed } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_13();
  let tmp2 = _slicedToArray(react.useState(0), 2);
  [tmp3, c2] = tmp2;
  let obj = useIsScreenLandscape;
  _slicedToArray = obj.useIsScreenLandscape();
  const items = [AccessibilityStore];
  const items1 = [markAsDismissed];
  const obj2 = useStateFromStores;
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = react.useEffect(() => () => markAsDismissed(constants.UNKNOWN), items1);
  const obj3 = { startExpanded: true, children: closure_11(View, obj4) };
  obj4 = {
    style: tmp.container,
    onLayout(nativeEvent) {
      const diff = nativeEvent.nativeEvent.layout.width - 2 * nativeDefault.space.PX_16;
      let result = diff;
      const tmp2 = c2;
      if (closure_3) {
        result = diff / 2;
      }
      tmp2(result);
    },
    children: items2
  };
  const obj5 = { accessibilityRole: "image", accessibilityLabel: intl.string(intl6.t.gCgirr), children: closure_10(markAsDismissed(8873), size) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  intl = intl6.intl;
  size = { style: tmp.videoContainer, src, width: tmp3, height: tmp3 / 1.7289156626506024, muted: true, paused: stateFromStores, ariaHidden: true };
  items2 = [closure_10(View, obj5), , ];
  const obj6 = { style: tmp.info, children: items3 };
  const obj7 = { variant: "heading-lg/semibold", style: tmp.title, color: "mobile-text-heading-primary", children: intl2.string(intl6.t.gCgirr) };
  const Text = Text_Text.Text;
  intl2 = intl6.intl;
  items3 = [closure_10(Text, obj7), ];
  const obj8 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: intl3.string(intl6.t.fLMZFw) };
  const Text2 = Text_Text.Text;
  intl3 = intl6.intl;
  items3[1] = closure_10(Text2, obj8);
  items2[1] = closure_11(View, obj6);
  const obj9 = { spacing: markAsDismissed(575).space.PX_8, style: tmp.footer, children: items4 };
  const Stack = Stack_Stack.Stack;
  const obj10 = {
    text: intl4.string(intl6.t.BQq86h),
    onPress: function handleClickUseTemplate() {
      const obj = GuildSettingsActionCreatorsDefault;
      obj.open(require, metroImportDefault.ROLE_SUBSCRIPTIONS_TIERS, undefined, metroImportAll.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
      markAsDismissed(ContentDismissActionType.UNKNOWN);
    }
  };
  const Button = components_Button_Button.Button;
  intl4 = intl6.intl;
  items4 = [closure_10(Button, obj10), ];
  const obj11 = {
    text: intl5.string(intl6.t.WAI6xu),
    onPress() {
      const obj = markAsDismissed(c2[18]);
      return obj.hideActionSheet();
    },
    variant: "secondary"
  };
  const Button2 = components_Button_Button.Button;
  intl5 = intl6.intl;
  items4[1] = closure_10(Button2, obj11);
  items2[2] = closure_11(Stack, obj9);
  return closure_10(BottomSheet, obj3);
};
