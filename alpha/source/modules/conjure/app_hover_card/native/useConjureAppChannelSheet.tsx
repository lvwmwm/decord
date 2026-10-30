// Module ID: 14363
// Function ID: 14364
// Name: useConjureAppChannelSheet
// Dependencies: [19, 6838, 21, 5009, 575, 5712, 1410, 7414, 504, 14364, 1114, 3865, 5063, 2]
// Exports: default

// Module 14363 (useConjureAppChannelSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import _modDef3865 from "module_3865" /* 3865 */;
import UserUtils from "UserUtils" /* 5063 */;
import FastImageDefault from "FastImage" /* 5712 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let size;
function ConjureAppSheetIcon(application) {
  application = application.application;
  const tmp = closure_6();
  FastImageDefault;
  const obj2 = AvatarUtilsDefault;
  const obj3 = { id: application.id, icon: application.icon, size: 48 };
  return <tmp2 source={obj2.getApplicationIconSource(obj3)} style={tmp.icon} />;
}
const jsx = Fragment.jsx;
let obj = { icon: size };
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.lg };
let closure_6 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/app_hover_card/native/useConjureAppChannelSheet.tsx");

export default function useConjureAppChannelSheet(guild_id, arg1) {
  let creator;
  guild_id = guild_id.guild_id;
  if (guild_id == null) {
    guild_id = null;
  }
  let tmp2 = guild_id;
  const tmp4 = guild_id(creator[7]);
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
  const tmp2Result = tmp2(creator[8]);
  const stateFromStores = tmp2Result.useStateFromStores(items, () => {
    let guildProjectsFetchState = null;
    if (null != guild_id) {
      guildProjectsFetchState = ConjureProjectStore.getGuildProjectsFetchState(tmp);
    }
    return "success" === guildProjectsFetchState || "error" === guildProjectsFetchState;
  }, items1);
  let tmp11 = null != tmp7;
  const tmp10 = appChannelApplication(creator[9]);
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
    let tmp11;
    let tmp2 = null;
    if (null != appChannelApplication) {
      const obj = { icon: null, title: appChannelApplication.name, subtitle: formatToPlainStringResult };
      formatToPlainStringResult = undefined;
      if (null != creator) {
        const intl = intl2.intl;
        const formatToPlainString = intl.formatToPlainString;
        const obj3 = { name: obj4.getName(tmp5) };
        const prop = _modDef3865["6/x9LD"];
        obj4 = UserUtils;
        formatToPlainStringResult = formatToPlainString(prop, obj3);
      }
      tmp2 = obj;
    }
    const obj5 = { header: tmp2, remixProject: tmp11 };
    tmp11 = null;
    if (null != appChannelApplication) {
      tmp11 = remixProject;
    }
    return obj5;
  }, items2);
};
