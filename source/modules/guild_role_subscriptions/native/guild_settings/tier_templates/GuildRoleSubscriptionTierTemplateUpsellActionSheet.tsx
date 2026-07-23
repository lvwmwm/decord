// Module ID: 15073
// Function ID: 114737
// Name: GuildRoleSubscriptionTierTemplateUpsellActionSheet
// Dependencies: [57, 31, 27, 4122, 653, 1345, 33, 4130, 689, 4663, 624, 5187, 1212, 8302, 4126, 4543, 8438, 4098, 2]
// Exports: default

// Module 15073 (GuildRoleSubscriptionTierTemplateUpsellActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_7;
let closure_8;
const require = arg1;
({ GuildSettingsSections: closure_7, GuildSettingsSubsections: closure_8 } = ME);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = { videoURI: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov" };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, padding: 16, paddingTop: 24, justifyContent: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.videoContainer = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
_createForOfIteratorHelperLoose.info = { marginTop: 16, alignItems: "center" };
_createForOfIteratorHelperLoose.title = { marginTop: 24, textAlign: "center" };
_createForOfIteratorHelperLoose.subtitle = { marginTop: 12, textAlign: "center" };
_createForOfIteratorHelperLoose.footer = { marginTop: 32 };
_createForOfIteratorHelperLoose.button = { marginBottom: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUpsellActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplateUpsellActionSheet(arg0) {
  let markAsDismissed;
  let require;
  ({ guildId: require, markAsDismissed } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(0), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  let obj = require(4663) /* getIsScreenLandscape */;
  callback = obj.useIsScreenLandscape();
  let obj1 = require(624) /* defaultAreStatesEqual */;
  const items = [_isNativeReflectConstruct];
  const items1 = [markAsDismissed];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.useReducedMotion);
  const effect = React.useEffect(() => () => outer1_1(outer2_9.UNKNOWN), items1);
  obj = { startExpanded: true };
  obj = {
    style: tmp.container,
    onLayout(nativeEvent) {
      const diff = nativeEvent.nativeEvent.layout.width - 32;
      let result = diff;
      if (_slicedToArray) {
        result = diff / 2;
      }
      closure_2(result);
    }
  };
  obj1 = { accessibilityRole: "image" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.gCgirr);
  obj1.children = callback2(markAsDismissed(8302), { style: tmp.videoContainer, src: closure_12, width: first, height: first / 1.7289156626506024, muted: true, paused: stateFromStores, ariaHidden: true });
  const items2 = [callback2(View, obj1), , ];
  const obj3 = { style: tmp.info };
  const obj4 = { variant: "heading-lg/semibold", style: tmp.title, color: "mobile-text-heading-primary" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl2.string(require(1212) /* getSystemLocale */.t.gCgirr);
  const items3 = [callback2(require(4126) /* Text */.Text, obj4), ];
  const obj5 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj5.children = intl3.string(require(1212) /* getSystemLocale */.t.fLMZFw);
  items3[1] = callback2(require(4126) /* Text */.Text, obj5);
  obj3.children = items3;
  items2[1] = callback3(View, obj3);
  const obj6 = { style: items4 };
  items4 = [tmp.footer];
  const obj7 = { style: tmp.button };
  const obj8 = {};
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj8.text = intl4.string(require(1212) /* getSystemLocale */.t.BQq86h);
  obj8.onPress = function onPress() {
    markAsDismissed(8438).open(closure_0, outer1_7.ROLE_SUBSCRIPTIONS_TIERS, undefined, outer1_8.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
    markAsDismissed(outer1_9.UNKNOWN);
  };
  obj7.children = callback2(require(4543) /* Button */.Button, obj8);
  const items5 = [callback2(View, obj7), ];
  const obj9 = { style: tmp.button };
  const obj10 = {};
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj10.text = intl5.string(require(1212) /* getSystemLocale */.t.WAI6xu);
  obj10.onPress = function onPress() {
    return markAsDismissed(4098).hideActionSheet();
  };
  obj10.variant = "secondary";
  obj9.children = callback2(require(4543) /* Button */.Button, obj10);
  items5[1] = callback2(View, obj9);
  obj6.children = items5;
  items2[2] = callback3(View, obj6);
  obj.children = items2;
  obj.children = callback3(View, obj);
  return callback2(require(5187) /* Background */.BottomSheet, obj);
};
