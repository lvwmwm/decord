// Module ID: 15169
// Function ID: 15170
// Name: useConjureAppChannelSheet
// Dependencies: [19, 7017, 21, 7261, 504, 15170, 15173, 2]
// Exports: default

// Module 15169 (useConjureAppChannelSheet)
import Fragment from "Fragment" /* 21 */;
import ConjureAppChannelSheetHeaderDefault from "ConjureAppChannelSheetHeader" /* 15173 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/conjure/app_hover_card/native/useConjureAppChannelSheet.tsx");

export default function useConjureAppChannelSheet(guild_id, arg1) {
  let creator;
  guild_id = guild_id.guild_id;
  if (guild_id == null) {
    guild_id = null;
  }
  let tmp2 = guild_id;
  const tmp4 = guild_id(creator[3]);
  let tmp5 = null;
  const useAppChannelApplication = tmp4.useAppChannelApplication;
  if (arg1) {
    tmp5 = guild_id;
  }
  let appChannelApplication = useAppChannelApplication(tmp5);
  let tmp7 = null;
  if (arg1) {
    let conjureProjectId;
    if (appChannelApplication != null) {
      conjureProjectId = appChannelApplication.conjureProjectId;
    }
    tmp7 = null;
    if (null != conjureProjectId) {
      tmp7 = appChannelApplication;
    }
  }
  appChannelApplication = tmp7;
  const items = [ConjureProjectStore];
  const items1 = [guild_id];
  const tmp2Result = tmp2(creator[4]);
  const stateFromStores = tmp2Result.useStateFromStores(items, () => {
    let guildProjectsFetchState = null;
    if (null != guild_id) {
      guildProjectsFetchState = ConjureProjectStore.getGuildProjectsFetchState(tmp);
    }
    return "success" === guildProjectsFetchState || "error" === guildProjectsFetchState;
  }, items1);
  let tmp11 = null != tmp7;
  const tmp10 = appChannelApplication(creator[5]);
  if (tmp11) {
    tmp11 = stateFromStores;
  }
  const tmp10Result = tmp10(tmp7, guild_id, tmp11);
  creator = tmp10Result.creator;
  const remixProject = tmp10Result.remixProject;
  const items2 = [tmp7, creator, guild_id, remixProject];
  return remixProject.useMemo(() => {
    let tmp8;
    let tmp2 = null;
    if (null != appChannelApplication) {
      tmp2 = jsx(ConjureAppChannelSheetHeaderDefault, { application: appChannelApplication, creator, guildId: guild_id });
    }
    const obj2 = { header: tmp2, remixProject: tmp8 };
    tmp8 = null;
    if (null != appChannelApplication) {
      tmp8 = remixProject;
    }
    return obj2;
  }, items2);
};
