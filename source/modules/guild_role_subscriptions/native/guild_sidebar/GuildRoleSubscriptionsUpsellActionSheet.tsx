// Module ID: 15113
// Function ID: 115039
// Name: GuildRoleSubscriptionsUpsellActionSheet
// Dependencies: [31, 27, 653, 1345, 33, 4130, 5187, 5085, 15114, 4126, 1212, 4543, 8482, 2]
// Exports: default

// Module 15113 (GuildRoleSubscriptionsUpsellActionSheet)
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
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ title: { marginTop: 24, textAlign: "center" }, description: { marginTop: 8, marginBottom: 24, textAlign: "center" }, dismissButton: { marginTop: 4 } });
const result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsUpsellActionSheet.tsx");

export default function GuildRoleSubscriptionsUpsellActionSheet(arg0) {
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
  obj = { source: importDefault(15114) };
  const items = [callback(importDefault(5085), obj), , , , ];
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.C0m4rQ);
  items[1] = callback(require(4126) /* Text */.Text, obj);
  const obj1 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl2.string(require(1212) /* getSystemLocale */.t.zOHfEX);
  items[2] = callback(require(4126) /* Text */.Text, obj1);
  const obj2 = {
    onPress() {
      callback(outer1_5.UNKNOWN);
      outer1_1(outer1_2[12]).open(closure_0, outer1_4.ROLE_SUBSCRIPTIONS);
    }
  };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.text = intl3.string(require(1212) /* getSystemLocale */.t.OgQQbG);
  items[3] = callback(require(4543) /* Button */.Button, obj2);
  const obj3 = { style: tmp.dismissButton };
  const obj4 = {
    onPress() {
      return callback(outer1_5.UNKNOWN);
    }
  };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj4.text = intl4.string(require(1212) /* getSystemLocale */.t.WAI6xu);
  obj4.variant = "secondary";
  obj3.children = callback(require(4543) /* Button */.Button, obj4);
  items[4] = callback(View, obj3);
  obj.children = items;
  return callback2(require(5187) /* Background */.BottomSheet, obj);
};
