// Module ID: 13819
// Function ID: 13820
// Name: useConjureAppChannelSheet
// Dependencies: [19, 6758, 21, 4969, 587, 558, 576, 1417, 5655, 7331, 504, 13820, 1128, 3830, 5018, 2]

// Module 13819 (useConjureAppChannelSheet)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1128 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import UserUtils from "UserUtils" /* 5018 */;
import FastImageDefault from "FastImage" /* 5655 */;
import useConjureAppCreatorDefault from "useConjureAppCreator" /* 13820 */;
import react from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6758 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let size;
let tmp15;
const _modDef3830 = tmp15(3830);
const jsx = Fragment.jsx;
let obj = { icon: size };
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.lg };
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppSheetIcon(application) {
  const obj = react2;
  const cResult = obj.c(6);
  application = application.application;
  const tmp3 = closure_6();
  if (cResult[0] === application.icon) {
    let tmp4;
    if (cResult[1] === application.id) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === tmp3.icon) {
      let tmp6;
      if (cResult[4] === tmp4) {
        tmp6 = cResult[5];
      }
      return tmp6;
    }
    const tmp9 = jsx(FastImageDefault, { source: tmp4, style: tmp3.icon });
    cResult[3] = tmp3.icon;
    cResult[4] = tmp4;
    cResult[5] = tmp9;
    tmp6 = tmp9;
  }
  const obj2 = AvatarUtilsDefault;
  const obj4 = { id: application.id, icon: application.icon, size: 48 };
  const applicationIconSource = obj2.getApplicationIconSource(obj4);
  cResult[0] = application.icon;
  cResult[1] = application.id;
  cResult[2] = applicationIconSource;
  tmp4 = applicationIconSource;
}) : (function ConjureAppSheetIcon(application) {
  application = application.application;
  const tmp = closure_6();
  FastImageDefault;
  const obj2 = AvatarUtilsDefault;
  const obj3 = { id: application.id, icon: application.icon, size: 48 };
  return <tmp2 source={obj2.getApplicationIconSource(obj3)} style={tmp.icon} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAppChannelSheet(guild_id, arg1) {
  let first;
  let formatToPlainStringResult;
  let tmp12;
  let tmp13;
  let tmpResult4;
  const tmp = guild_id;
  const obj = guild_id(576);
  const cResult = obj.c(10);
  guild_id = guild_id.guild_id;
  if (guild_id == null) {
    guild_id = null;
  }
  let tmp6 = null;
  const useAppChannelApplication = tmp(7331).useAppChannelApplication;
  tmp(7331);
  if (arg1) {
    tmp6 = guild_id;
  }
  const appChannelApplication = useAppChannelApplication(tmp6);
  let tmp8 = null;
  if (arg1) {
    let conjureProjectId;
    if (appChannelApplication != null) {
      conjureProjectId = appChannelApplication.conjureProjectId;
    }
    tmp8 = null;
    if (null != conjureProjectId) {
      tmp8 = appChannelApplication;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild_id) {
    const fn = function s() {
      let guildProjectsFetchState = null;
      if (null != guild_id) {
        guildProjectsFetchState = ConjureProjectStore.getGuildProjectsFetchState(tmp);
      }
      return "success" === guildProjectsFetchState || "error" === guildProjectsFetchState;
    };
    const items1 = [guild_id];
    cResult[1] = guild_id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp13 = items1;
    tmp12 = fn;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const tmpResult3 = tmp(504);
  const stateFromStores = tmpResult3.useStateFromStores(first, tmp12, tmp13);
  let tmp17 = null != tmp8;
  const tmp16 = useConjureAppCreatorDefault;
  if (tmp17) {
    tmp17 = stateFromStores;
  }
  const creator = tmp16(tmp8, guild_id, tmp17).creator;
  tmp16(tmp8, guild_id, tmp17);
  if (cResult[4] === tmp8) {
    let tmp20;
    if (cResult[5] === creator) {
      tmp20 = cResult[6];
    }
    let tmp26 = null;
    if (null != tmp8) {
      tmp26 = tmp19;
    }
    if (cResult[7] === tmp20) {
      let tmp27;
      if (cResult[8] === tmp26) {
        tmp27 = cResult[9];
      }
      return tmp27;
    }
    const obj2 = { header: tmp20, remixProject: tmp26 };
    cResult[7] = tmp20;
    cResult[8] = tmp26;
    cResult[9] = obj2;
    tmp27 = obj2;
  }
  let tmp21 = null;
  if (null != tmp8) {
    const obj3 = { icon: null, title: tmp8.name, subtitle: formatToPlainStringResult };
    formatToPlainStringResult = undefined;
    if (null != creator) {
      const intl = tmp(1128).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj5 = { name: tmpResult4.getName(creator) };
      const prop = _modDef3830["6/x9LD"];
      tmpResult4 = tmp(5018);
      formatToPlainStringResult = formatToPlainString(prop, obj5);
    }
    tmp21 = obj3;
  }
  cResult[4] = tmp8;
  cResult[5] = creator;
  cResult[6] = tmp21;
  tmp20 = tmp21;
}) : (function useConjureAppChannelSheet(guild_id, arg1) {
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
        const prop = _modDef3830["6/x9LD"];
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
});
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/app_hover_card/native/useConjureAppChannelSheet.tsx");

export default tmp2;
