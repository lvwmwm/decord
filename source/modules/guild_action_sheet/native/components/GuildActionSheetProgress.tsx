// Module ID: 13089
// Function ID: 101115
// Name: GuildActionSheetProgress
// Dependencies: [31, 33, 4165, 689, 11542, 5200, 13090, 2]
// Exports: default

// Module 13089 (GuildActionSheetProgress)
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
  let obj = require(11542) /* useIOSCompletionStates */;
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
        obj.children = jsx(importDefault(13090), { guild, titleStyle: tmp.title, longPressDisabled: true, resume: true });
        tmp3 = jsx(require(5200) /* getCardBackgroundToken */.Card, { guild, titleStyle: tmp.title, longPressDisabled: true, resume: true });
      }
    }
  }
  return tmp3;
};
