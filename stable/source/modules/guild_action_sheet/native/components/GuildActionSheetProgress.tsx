// Module ID: 16146
// Function ID: 16147
// Name: GuildActionSheetProgress
// Dependencies: [19, 21, 5170, 575, 14318, 7073, 16147, 2]
// Exports: default

// Module 16146 (GuildActionSheetProgress)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import GuildProgressUtils from "GuildProgressUtils" /* 14318 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp2;
const Card_Card = tmp2(7073);
const jsx = Fragment.jsx;
let obj = { title: obj2, cardStyle: { padding: 0 } };
obj2 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetProgress.tsx");

export default function GuildActionSheetProgress(guild) {
  let completed;
  let dismissed;
  guild = guild.guild;
  const tmp = closure_4();
  const obj = GuildProgressUtils;
  const iOSCompletionStates = obj.useIOSCompletionStates(guild);
  ({ completed, dismissed } = iOSCompletionStates);
  let tmp5 = null;
  const obj2 = GuildProgressUtils;
  if (obj2.useIsEligibleForGuildProgress(guild)) {
    tmp5 = null;
    if (!completed) {
      tmp5 = null;
      if (dismissed) {
        const Card = Card_Card.Card;
        tmp5 = <Card style={tmp.cardStyle}>{null}</Card>;
      }
    }
  }
  return tmp5;
};
