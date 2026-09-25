// Module ID: 13502
// Function ID: 13503
// Name: GuildActionSheetProgress
// Dependencies: [19, 21, 4829, 576, 11949, 5914, 13503, 2]
// Exports: default

// Module 13502 (GuildActionSheetProgress)
import nativeDefault from "native" /* 576 */;
import GuildProgressUtils from "GuildProgressUtils" /* 11949 */;
import GuildProgressOverviewDefault from "GuildProgressOverview" /* 13503 */;
import noop from "module_19" /* 19 */;

const Card = tmp2(5914);
require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
const obj2 = { title: { color: nativeDefault.colors.TEXT_DEFAULT }, cardStyle: { padding: 0 } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetProgress.tsx");

export default function GuildActionSheetProgress(guild) {
  guild = guild.guild;
  const tmp = closure_4();
  const iOSCompletionStates = GuildProgressUtils.useIOSCompletionStates(guild);
  ({ completed, dismissed } = iOSCompletionStates);
  let tmp5 = null;
  if (obj2.useIsEligibleForGuildProgress(guild)) {
    tmp5 = null;
    if (!completed) {
      tmp5 = null;
      if (dismissed) {
        const obj3 = { style: tmp.cardStyle, children: null };
        const obj4 = { guild, titleStyle: tmp.title, longPressDisabled: true, resume: true };
        obj3.children = jsx(GuildProgressOverviewDefault, { guild, titleStyle: tmp.title, longPressDisabled: true, resume: true });
        tmp5 = jsx(Card.Card, { style: tmp.cardStyle, children: null });
      }
    }
  }
  return tmp5;
};
