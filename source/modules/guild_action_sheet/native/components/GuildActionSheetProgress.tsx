// Module ID: 12981
// Function ID: 100487
// Name: GuildActionSheetProgress
// Dependencies: [31, 33, 4130, 689, 11507, 5167, 12982, 2]
// Exports: default

// Module 12981 (GuildActionSheetProgress)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.title = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.cardStyle = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, padding: 0, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, padding: 0, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetProgress.tsx");

export default function GuildActionSheetProgress(guild) {
  let completed;
  let dismissed;
  guild = guild.guild;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(11507) /* useIOSCompletionStates */;
  const iOSCompletionStates = obj.useIOSCompletionStates(guild);
  ({ completed, dismissed } = iOSCompletionStates);
  let tmp3 = null;
  if (obj2.useIsEligibleForGuildProgress(guild)) {
    tmp3 = null;
    if (!completed) {
      tmp3 = null;
      if (dismissed) {
        obj = { style: tmp.cardStyle };
        obj = { guild, titleStyle: tmp.title, longPressDisabled: true, resume: true };
        obj.children = jsx(importDefault(12982), { guild, titleStyle: tmp.title, longPressDisabled: true, resume: true });
        tmp3 = jsx(require(5167) /* getCardBackgroundToken */.Card, { guild, titleStyle: tmp.title, longPressDisabled: true, resume: true });
      }
    }
  }
  return tmp3;
};
