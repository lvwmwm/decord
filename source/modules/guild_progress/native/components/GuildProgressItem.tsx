// Module ID: 11619
// Function ID: 90234
// Name: GuildProgressItem
// Dependencies: [31, 33, 4131, 11503, 11507, 11506, 7325, 1212, 11620, 2]
// Exports: default

// Module 11619 (GuildProgressItem)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ icon: { width: 32, height: 32 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_progress/native/components/GuildProgressItem.tsx");

export default function GuildProgressItem(guild) {
  guild = guild.guild;
  let obj = guild(completed[3]);
  const iOSCompletionStates = obj.useIOSCompletionStates(guild);
  const numFinished = iOSCompletionStates.numFinished;
  completed = iOSCompletionStates.completed;
  const totalSteps = iOSCompletionStates.totalSteps;
  obj = {
    onPress() {
      if (!completed) {
        const progress = numFinished(completed[5]).createProgress(guild.id);
        const obj = numFinished(completed[5]);
      }
      guild(completed[3]).openActionSheet(guild);
    }
  };
  obj = {};
  const tmp = callback();
  const tmp3 = totalSteps;
  obj.uri = numFinished(completed[6]);
  obj.source = obj;
  obj.iconStyle = tmp.icon;
  const intl = guild(completed[7]).intl;
  obj.title = intl.string(guild(completed[7]).t["J2+r16"]);
  obj.isCompleted = completed;
  let fn;
  if (numFinished > 0) {
    if (numFinished < totalSteps) {
      fn = () => totalSteps(numFinished(completed[8]), { percent: 100 * numFinished / totalSteps, size: 32 });
    }
  }
  obj.renderEndComponent = fn;
  obj.fullWidth = true;
  return tmp3(numFinished(completed[4]), obj);
};
