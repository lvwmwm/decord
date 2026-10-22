// Module ID: 17523
// Function ID: 17524
// Name: GuildProgressButton
// Dependencies: [19, 21, 12140, 587, 11023, 558, 576, 13316, 13319, 8921, 17524, 1128, 13436, 2]
// Exports: getScaledGuildProgressButtonHeight

// Module 17523 (GuildProgressButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 11023 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 12140 */;
import GuildProgressUtils from "GuildProgressUtils" /* 13316 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 13319 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProgressButton(guild) {
  let completed;
  let percentComplete;
  let subtitle;
  let tmp = guild;
  let obj = guild(576);
  const cResult = obj.c(15);
  guild = guild.guild;
  let obj2 = guild(13316);
  const guildProgressStep = obj2.useGuildProgressStep(guild);
  ({ percentComplete, subtitle, completed } = guildProgressStep);
  if (cResult[0] === completed) {
    let tmp5;
    let tmp6;
    if (cResult[1] === guild.id) {
      tmp5 = cResult[2];
      tmp6 = cResult[3];
    }
    const effect = react.useEffect(tmp5, tmp6);
    if (cResult[4] === completed) {
      let tmp9;
      let tmp12;
      let tmp11;
      let tmp17;
      if (cResult[5] === guild) {
        tmp9 = cResult[6];
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const Icon = tmp(8921).RowButton.Icon;
        const tmp15 = <Icon source={completed(17524)} />;
        const intl = tmp(1128).intl;
        const stringResult = intl.string(tmp(1128).t.o3HK3d);
        cResult[7] = tmp15;
        cResult[8] = stringResult;
        tmp12 = stringResult;
        tmp11 = tmp15;
      } else {
        tmp11 = cResult[7];
        tmp12 = cResult[8];
      }
      if (cResult[9] !== percentComplete) {
        const tmp20 = jsx(completed(13436), { percent: percentComplete });
        cResult[9] = percentComplete;
        cResult[10] = tmp20;
        tmp17 = tmp20;
      } else {
        tmp17 = cResult[10];
      }
      if (cResult[11] === tmp9) {
        if (cResult[12] === subtitle) {
          let tmp21;
          if (cResult[13] === tmp17) {
            tmp21 = cResult[14];
          }
          return tmp21;
        }
      }
      const tmp23 = jsx(tmp(8921).RowButton, { icon: tmp11, label: tmp12, subLabel: subtitle, onPress: tmp9, trailing: tmp17 });
      cResult[11] = tmp9;
      cResult[12] = subtitle;
      cResult[13] = tmp17;
      cResult[14] = tmp23;
      tmp21 = tmp23;
    }
    const fn2 = function u() {
      const tmp = completed;
      if (!tmp) {
        const obj = GuildProgressActionCreatorsDefault;
        const progress = obj.createProgress(guild.id);
      }
      const obj2 = GuildProgressUtils;
      obj2.openActionSheet(guild);
    };
    cResult[4] = completed;
    cResult[5] = guild;
    cResult[6] = fn2;
    tmp9 = fn2;
  }
  const fn = function n() {
    const tmp = completed;
    if (tmp) {
      const obj = GuildProgressActionCreatorsDefault;
      const result = obj.markCompletedProgressSeen(guild.id);
    }
  };
  const items = [completed, guild.id];
  cResult[0] = completed;
  cResult[1] = guild.id;
  cResult[2] = fn;
  cResult[3] = items;
  tmp6 = items;
  tmp5 = fn;
}) : (function GuildProgressButton(guild) {
  let percentComplete;
  let subtitle;
  guild = guild.guild;
  let obj = guild(13316);
  const guildProgressStep = obj.useGuildProgressStep(guild);
  const completed = guildProgressStep.completed;
  const items = [completed, guild.id];
  ({ percentComplete, subtitle } = guildProgressStep);
  const effect = react.useEffect(() => {
    const tmp = completed;
    if (tmp) {
      const obj = GuildProgressActionCreatorsDefault;
      const result = obj.markCompletedProgressSeen(guild.id);
    }
  }, items);
  const items1 = [guild, completed];
  const callback = react.useCallback(() => {
    const tmp = completed;
    if (!tmp) {
      const obj = GuildProgressActionCreatorsDefault;
      const progress = obj.createProgress(guild.id);
    }
    const obj2 = GuildProgressUtils;
    obj2.openActionSheet(guild);
  }, items1);
  const RowButton = guild(8921).RowButton;
  ({ source: completed(17524) });
  const Icon = guild(8921).RowButton.Icon;
  const intl = guild(1128).intl;
  return <RowButton icon={null} label={intl.string(guild(1128).t.o3HK3d)} subLabel={subtitle} onPress={callback} trailing={null} />;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default tmp2;
export const getScaledGuildProgressButtonHeight = function getScaledGuildProgressButtonHeight(fontScale) {
  const obj = MobileVisualRefreshExperiment;
  const refreshToken = obj.resolveRefreshToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const obj2 = useScaledTextLineHeight;
  const sum = refreshToken + obj2.scaleTextLineHeight("text-md/semibold", fontScale);
  const obj3 = useScaledTextLineHeight;
  return sum + 2 * obj3.scaleTextLineHeight("text-xs/medium", fontScale) + refreshToken;
};
