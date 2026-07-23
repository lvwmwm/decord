// Module ID: 15071
// Function ID: 114731
// Name: CreatorMonetizationOnboardingV2UpsellActionSheet
// Dependencies: [31, 27, 653, 1345, 33, 4130, 5187, 4126, 1212, 5085, 15072, 4543, 8438, 2]
// Exports: default

// Module 15071 (CreatorMonetizationOnboardingV2UpsellActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import { GuildSettingsSections } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ container: { paddingLeft: 24, paddingRight: 24, paddingTop: 24 }, title: { marginBottom: 6 }, description: { marginBottom: 24 }, image: { marginBottom: 24, width: "100%" }, dismissButton: { marginTop: 4 } });
const result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/CreatorMonetizationOnboardingV2UpsellActionSheet.tsx");

export default function CreatorMonetizationOnboardingV2UpsellActionSheet(arg0) {
  let importDefault;
  let require;
  ({ guildId: require, markAsDismissed: importDefault } = arg0);
  const tmp = callback3();
  let obj = {
    startExpanded: true,
    onDismiss() {
      return callback(outer1_5.UNKNOWN);
    }
  };
  obj = { style: tmp.container };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["v+Jm6X"]);
  const items = [callback(require(4126) /* Text */.Text, obj), , , , ];
  const obj1 = { style: tmp.description, accessibilityRole: "text", variant: "text-sm/medium", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl2.string(require(1212) /* getSystemLocale */.t.kUUFbG);
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  const obj2 = { style: tmp.image, resizeMode: "contain", source: importDefault(15072) };
  items[2] = callback(importDefault(5085), obj2);
  const obj3 = {
    onPress() {
      callback(outer1_5.UNKNOWN);
      outer1_1(outer1_2[12]).open(closure_0, outer1_4.ROLE_SUBSCRIPTIONS);
    }
  };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj3.text = intl3.string(require(1212) /* getSystemLocale */.t.OgQQbG);
  items[3] = callback(require(4543) /* Button */.Button, obj3);
  const obj4 = { style: tmp.dismissButton };
  const obj5 = {
    onPress() {
      return callback(outer1_5.UNKNOWN);
    }
  };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj5.text = intl4.string(require(1212) /* getSystemLocale */.t.WAI6xu);
  obj5.variant = "secondary";
  obj4.children = callback(require(4543) /* Button */.Button, obj5);
  items[4] = callback(View, obj4);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
