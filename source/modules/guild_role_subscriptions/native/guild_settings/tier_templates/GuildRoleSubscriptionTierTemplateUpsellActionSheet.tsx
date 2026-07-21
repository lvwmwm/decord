// Module ID: 14946
// Function ID: 112492
// Name: GuildRoleSubscriptionTierTemplateUpsellActionSheet
// Dependencies: []
// Exports: default

// Module 14946 (GuildRoleSubscriptionTierTemplateUpsellActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
({ GuildSettingsSections: closure_7, GuildSettingsSubsections: closure_8 } = arg1(dependencyMap[4]));
const ContentDismissActionType = arg1(dependencyMap[5]).ContentDismissActionType;
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let closure_12 = { videoURI: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov" };
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { -1362229764: false, -349726597: false, 140694625: false, -433827239: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020304490458102812, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const tmp3 = arg1(dependencyMap[6]);
obj.videoContainer = { borderRadius: importDefault(dependencyMap[8]).radii.sm, overflow: "hidden" };
obj.info = { "Null": "center", "Null": "center" };
obj.title = { "Null": null, "Null": "absolute" };
obj.subtitle = {};
obj.footer = { marginTop: 32 };
obj.button = { marginBottom: 8 };
let closure_13 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[8]).radii.sm, overflow: "hidden" };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUpsellActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplateUpsellActionSheet(arg0) {
  let markAsDismissed;
  ({ guildId: closure_0, markAsDismissed } = arg0);
  const importDefault = markAsDismissed;
  const tmp = callback4();
  const tmp2 = callback(React.useState(0), 2);
  const first = tmp2[0];
  let closure_2 = tmp2[1];
  let obj = arg1(closure_2[9]);
  const callback = obj.useIsScreenLandscape();
  let obj1 = arg1(closure_2[10]);
  const items = [closure_6];
  const items1 = [markAsDismissed];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = React.useEffect(() => () => callback(constants.UNKNOWN), items1);
  obj = { startExpanded: true };
  obj = {
    style: tmp.container,
    onLayout(nativeEvent) {
      const diff = nativeEvent.nativeEvent.layout.width - 32;
      let result = diff;
      if (closure_3) {
        result = diff / 2;
      }
      closure_2(result);
    }
  };
  obj1 = { accessibilityRole: "image" };
  const intl = arg1(closure_2[12]).intl;
  obj1.accessibilityLabel = intl.string(arg1(closure_2[12]).t.gCgirr);
  obj1.children = callback2(importDefault(closure_2[13]), { style: tmp.videoContainer, src: closure_12, width: first, height: first / 1.7289156626506024, muted: true, paused: stateFromStores, ariaHidden: true });
  const items2 = [callback2(View, obj1), , ];
  const obj3 = { style: tmp.info };
  const obj4 = { 0: 2673, 0: -2031795968, 0: -1184825342, style: tmp.title };
  const intl2 = arg1(closure_2[12]).intl;
  obj4.children = intl2.string(arg1(closure_2[12]).t.gCgirr);
  const items3 = [callback2(arg1(closure_2[14]).Text, obj4), ];
  const obj5 = { style: tmp.subtitle };
  const intl3 = arg1(closure_2[12]).intl;
  obj5.children = intl3.string(arg1(closure_2[12]).t.fLMZFw);
  items3[1] = callback2(arg1(closure_2[14]).Text, obj5);
  obj3.children = items3;
  items2[1] = callback3(View, obj3);
  const obj6 = { style: items4 };
  const items4 = [tmp.footer];
  const obj7 = { style: tmp.button };
  const obj8 = {};
  const intl4 = arg1(closure_2[12]).intl;
  obj8.text = intl4.string(arg1(closure_2[12]).t.BQq86h);
  obj8.onPress = function onPress() {
    markAsDismissed(closure_2[16]).open(closure_0, constants.ROLE_SUBSCRIPTIONS_TIERS, undefined, constants2.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
    markAsDismissed(constants3.UNKNOWN);
  };
  obj7.children = callback2(arg1(closure_2[15]).Button, obj8);
  const items5 = [callback2(View, obj7), ];
  const obj9 = { style: tmp.button };
  const obj10 = {};
  const intl5 = arg1(closure_2[12]).intl;
  obj10.text = intl5.string(arg1(closure_2[12]).t.WAI6xu);
  obj10.onPress = function onPress() {
    return markAsDismissed(closure_2[17]).hideActionSheet();
  };
  obj10.variant = "secondary";
  obj9.children = callback2(arg1(closure_2[15]).Button, obj10);
  items5[1] = callback2(View, obj9);
  obj6.children = items5;
  items2[2] = callback3(View, obj6);
  obj.children = items2;
  obj.children = callback3(View, obj);
  return callback2(arg1(closure_2[11]).BottomSheet, obj);
};
