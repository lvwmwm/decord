// Module ID: 14650
// Function ID: 14651
// Name: useConjureAppChannelSheet
// Dependencies: [19, 6899, 21, 7484, 504, 14651, 13005, 1113, 4026, 5194, 2]
// Exports: default

// Module 14650 (useConjureAppChannelSheet)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import UserUtils from "UserUtils" /* 5194 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6899 */;
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
  let tmp4 = guild_id(creator[3]);
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
  let tmp10 = appChannelApplication(tmp3[5]);
  if (tmp11) {
    tmp11 = stateFromStores;
  }
  const tmp10Result = tmp10(tmp7, guild_id, tmp11);
  creator = tmp10Result.creator;
  const remixProject = tmp10Result.remixProject;
  const items2 = [tmp7, creator, remixProject];
  return remixProject.useMemo(() => {
    let formatToPlainStringResult;
    let obj4;
    let tmp10;
    let tmp2 = null;
    if (null != appChannelApplication) {
      const obj = { icon: null, title: appChannelApplication.name, subtitle: formatToPlainStringResult };
      formatToPlainStringResult = undefined;
      const tmp4 = importDefault;
      if (null != creator) {
        const intl = intl2.intl;
        const formatToPlainString = intl.formatToPlainString;
        const obj3 = { name: obj4.getName(tmp6) };
        const prop = tmp4(4026)["6/x9LD"];
        obj4 = UserUtils;
        formatToPlainStringResult = formatToPlainString(prop, obj3);
      }
      tmp2 = obj;
    }
    const obj5 = { header: tmp2, remixProject: tmp10 };
    tmp10 = null;
    if (null != appChannelApplication) {
      tmp10 = remixProject;
    }
    return obj5;
  }, items2);
};
