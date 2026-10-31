// Module ID: 14401
// Function ID: 14402
// Name: useConjureAppChannelSheet
// Dependencies: [19, 17, 6844, 21, 5014, 575, 11340, 5717, 1409, 7420, 504, 14402, 1113, 3868, 5068, 2]
// Exports: default

// Module 14401 (useConjureAppChannelSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import _modDef3868 from "module_3868" /* 3868 */;
import UserUtils from "UserUtils" /* 5068 */;
import FastImageDefault from "FastImage" /* 5717 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let size;
function ConjureAppSheetIcon(application) {
  let tmp6;
  application = application.application;
  const tmp = closure_7();
  if (null == application.icon) {
    ({ id: obj5.applicationId, name: obj5.name } = application);
    tmp6 = <View style={tmp.icon}>{null}</View>;
  } else {
    FastImageDefault;
    const obj9 = { id: null, icon: null, size: 48 };
    ({ id: obj3.id, icon: obj3.icon } = application);
    tmp6 = <tmp5 source={AvatarUtilsDefault.getApplicationIconSource(obj9)} style={tmp.icon} />;
  }
  return tmp6;
}
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { icon: size };
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
let closure_7 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/app_hover_card/native/useConjureAppChannelSheet.tsx");

export default function useConjureAppChannelSheet(guild_id, arg1) {
  let creator;
  guild_id = guild_id.guild_id;
  if (guild_id == null) {
    guild_id = null;
  }
  let tmp2 = guild_id;
  const tmp4 = guild_id(creator[9]);
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
  const tmp2Result = tmp2(creator[10]);
  const stateFromStores = tmp2Result.useStateFromStores(items, () => {
    let guildProjectsFetchState = null;
    if (null != guild_id) {
      guildProjectsFetchState = ConjureProjectStore.getGuildProjectsFetchState(tmp);
    }
    return "success" === guildProjectsFetchState || "error" === guildProjectsFetchState;
  }, items1);
  let tmp11 = null != tmp7;
  const tmp10 = appChannelApplication(creator[11]);
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
        const prop = _modDef3868["6/x9LD"];
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
