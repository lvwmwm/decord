// Module ID: 12169
// Function ID: 12170
// Name: HubProgressHeader
// Dependencies: [19, 17, 9286, 11793, 21, 4836, 576, 12166, 1186, 1115, 8053, 4800, 12170, 1981, 12268, 2]
// Exports: default

// Module 12169 (HubProgressHeader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import directory_channels_GuildDirectoryConstants from "directory_channels/GuildDirectoryConstants" /* 11793 */;
import react from "react" /* 19 */;
import HubProgressBarConstants from "HubProgressBarConstants" /* 9286 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ HUB_PROGRESS_ACTION_SHEET_ID: closure_4, HUB_PROGRESS_NUM_TOTAL_STEPS: hasOwnProperty } = HubProgressBarConstants);
const GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT = directory_channels_GuildDirectoryConstants.GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT;
const jsx = Fragment.jsx;
let obj = { container: { overflow: "hidden", height: GUILD_DIRECTORY_PROGRESS_BAR_HEIGHT, padding: 16 }, icon: { width: 48, height: 48 }, innerContainer: obj2 };
obj2 = { paddingVertical: 8, paddingLeft: 8, paddingRight: 12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_7 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubProgressHeader.tsx");

export default function HubProgressHeader(guild) {
  let FormCTA;
  let obj5;
  let tmp11Result;
  guild = guild.guild;
  let flag = guild.onDirectoryPage;
  if (flag === undefined) {
    flag = false;
  }
  let nextHubProgressStep;
  let tmp = closure_7();
  let obj = guild(nextHubProgressStep[7]);
  const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  let obj2 = guild(nextHubProgressStep[7]);
  nextHubProgressStep = obj2.getNextHubProgressStep(hubProgressBarCompletedSteps);
  if (null == nextHubProgressStep) {
    return null;
  } else {
    let formatToPlainStringResult;
    size = hubProgressBarCompletedSteps.size;
    if (flag) {
      flag = nextHubProgressStep === tmp2(tmp3[8]).HubProgressStep.JOIN_GUILD;
    }
    const tmp2Result = guild(nextHubProgressStep[7]);
    const hubProgressTitleForStep = tmp2Result.getHubProgressTitleForStep(nextHubProgressStep);
    if (size < closure_5) {
      const intl2 = tmp2(tmp3[9]).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const _HermesInternal = HermesInternal;
      const obj3 = { number: "" + size, total: tmp7 };
      const v9j7xDu = tmp2(tmp3[9]).t["9j7xDu"];
      formatToPlainStringResult = formatToPlainString(v9j7xDu, obj3);
    } else {
      const intl = tmp2(tmp3[9]).intl;
      formatToPlainStringResult = intl.string(tmp2(tmp3[9]).t["+Gyklt"]);
    }
    const obj4 = { style: tmp.container, children: jsx(FormCTA, obj5) };
    ({ innerContainer: obj6.style, icon: obj6.iconStyle } = tmp);
    obj5 = {
      style: null,
      iconStyle: null,
      onPress() {
          const tmp = flag && nextHubProgressStep === preloaded_user_settings.HubProgressStep.JOIN_GUILD;
          if (!tmp) {
            const obj2 = { guild, analyticsSource: "Directory Channel Header" };
            const obj = ActionSheetActionCreatorsDefault;
            obj.openLazy(asyncRequire(12170, dependencyMap.paths), React3, obj2);
          }
        },
      iconSource: flag(nextHubProgressStep[14]),
      title: hubProgressTitleForStep,
      subtitle: formatToPlainStringResult,
      trailing: tmp11Result
    };
    FormCTA = tmp2(tmp3[10]).FormCTA;
    tmp11Result = undefined;
    if (flag) {
      tmp11Result = tmp11(tmp12, {});
    }
    return jsx(View, obj4);
  }
};
