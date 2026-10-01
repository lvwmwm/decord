// Module ID: 15881
// Function ID: 15882
// Name: GuildRoleSubscriptionTierTemplateUpsellActionSheet
// Dependencies: [32, 19, 17, 4825, 1074, 2042, 21, 4836, 576, 5438, 563, 6571, 1115, 7755, 4832, 5281, 9048, 4800, 2]
// Exports: default

// Module 15881 (GuildRoleSubscriptionTierTemplateUpsellActionSheet)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import intl6 from "intl" /* 1115 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 5438 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let c10;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ GuildSettingsSections: metroImportDefault, GuildSettingsSubsections: metroImportAll } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const src = { videoURI: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov" };
let createStyles = createStyles_mod;
let obj = { container: obj2, videoContainer: obj3, info: { marginTop: 16, alignItems: "center" }, title: { marginTop: 24, textAlign: "center" }, subtitle: { marginTop: 12, textAlign: "center" }, footer: { marginTop: 32 }, button: { marginBottom: 8 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 16, paddingTop: 24, justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_13 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUpsellActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplateUpsellActionSheet(arg0) {
  let Button;
  let Button2;
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
  let items5;
  let markAsDismissed;
  let obj11;
  let obj13;
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
      const diff = nativeEvent.nativeEvent.layout.width - 32;
      let result = diff;
      const tmp2 = c2;
      if (closure_3) {
        result = diff / 2;
      }
      tmp2(result);
    },
    children: items2
  };
  const obj5 = { accessibilityRole: "image", accessibilityLabel: intl.string(intl6.t.gCgirr), children: closure_10(markAsDismissed(7755), size) };
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
  const obj9 = { style: items4, children: items5 };
  items4 = [tmp.footer];
  const obj10 = { style: tmp.button, children: closure_10(Button, obj11) };
  obj11 = {
    text: intl4.string(intl6.t.BQq86h),
    onPress() {
      const obj = GuildSettingsActionCreatorsDefault;
      obj.open(require, metroImportDefault.ROLE_SUBSCRIPTIONS_TIERS, undefined, metroImportAll.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
      markAsDismissed(ContentDismissActionType.UNKNOWN);
    }
  };
  Button = components_Button_Button.Button;
  intl4 = intl6.intl;
  items5 = [closure_10(View, obj10), ];
  const obj12 = { style: tmp.button, children: closure_10(Button2, obj13) };
  obj13 = {
    text: intl5.string(intl6.t.WAI6xu),
    onPress() {
      const obj = markAsDismissed(c2[17]);
      return obj.hideActionSheet();
    },
    variant: "secondary"
  };
  Button2 = components_Button_Button.Button;
  intl5 = intl6.intl;
  items5[1] = closure_10(View, obj12);
  items2[2] = closure_11(View, obj9);
  return closure_10(BottomSheet, obj3);
};
