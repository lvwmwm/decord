// Module ID: 14185
// Function ID: 14186
// Name: GuildActionSheetProgress
// Dependencies: [19, 21, 5092, 587, 558, 576, 12207, 14186, 6181, 2]

// Module 14185 (GuildActionSheetProgress)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import GuildProgressUtils from "GuildProgressUtils" /* 12207 */;
import GuildProgressOverviewDefault from "GuildProgressOverview" /* 14186 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp;
const Card_Card = tmp(6181);
const jsx = Fragment.jsx;
let obj = { title: obj2, cardStyle: { padding: 0 } };
obj2 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildActionSheetProgress(guild) {
  let completed;
  let dismissed;
  const obj = react2;
  const cResult = obj.c(6);
  guild = guild.guild;
  const tmp4 = closure_4();
  const obj2 = GuildProgressUtils;
  const iOSCompletionStates = obj2.useIOSCompletionStates(guild);
  ({ completed, dismissed } = iOSCompletionStates);
  let tmp6 = null;
  const obj3 = GuildProgressUtils;
  if (obj3.useIsEligibleForGuildProgress(guild)) {
    tmp6 = null;
    if (!completed) {
      tmp6 = null;
      if (dismissed) {
        if (cResult[0] === guild) {
          let tmp7;
          if (cResult[1] === tmp4.title) {
            tmp7 = cResult[2];
          }
          if (cResult[3] === tmp4.cardStyle) {
            let tmp11;
            if (cResult[4] === tmp7) {
              tmp11 = cResult[5];
            }
            tmp6 = tmp11;
          }
          const tmp13 = jsx(Card_Card.Card, { style: tmp4.cardStyle, children: tmp7 });
          cResult[3] = tmp4.cardStyle;
          cResult[4] = tmp7;
          cResult[5] = tmp13;
          tmp11 = tmp13;
        }
        const tmp10 = jsx(GuildProgressOverviewDefault, { guild, titleStyle: tmp4.title, longPressDisabled: true, resume: true });
        cResult[0] = guild;
        cResult[1] = tmp4.title;
        cResult[2] = tmp10;
        tmp7 = tmp10;
      }
    }
  }
  return tmp6;
}) : (function GuildActionSheetProgress(guild) {
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
});
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetProgress.tsx");

export default tmp3;
