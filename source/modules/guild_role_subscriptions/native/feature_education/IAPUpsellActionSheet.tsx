// Module ID: 15068
// Function ID: 114724
// Name: IAPUpsellActionSheet
// Dependencies: [31, 653, 1355, 1345, 33, 15069, 15070, 1212, 1198, 2]
// Exports: default

// Module 15068 (IAPUpsellActionSheet)
import "result";
import { Routes } from "ME";
import { StaticChannelRoute } from "set";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/IAPUpsellActionSheet.tsx");

export default function IAPUpsellActionSheet(arg0) {
  let markAsDismissed;
  let require;
  ({ guildId: require, markAsDismissed } = arg0);
  const obj = { imageSource: markAsDismissed(15070) };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.header = intl.string(require(1212) /* getSystemLocale */.t.rBw4cE);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t.mKHibc);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.cta = intl3.string(require(1212) /* getSystemLocale */.t.RzWDqY);
  obj.onCTAPress = function onCTAPress() {
    outer1_0(outer1_2[8]).transitionTo(outer1_3.CHANNEL(closure_0, outer1_4.ROLE_SUBSCRIPTIONS));
    markAsDismissed(outer1_5.UNKNOWN);
  };
  obj.markAsDismissed = markAsDismissed;
  return jsx(markAsDismissed(15069), { imageSource: markAsDismissed(15070) });
};
