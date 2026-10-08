// Module ID: 16810
// Function ID: 16811
// Name: OnboardingHomeResourcesSheet
// Dependencies: [19, 16808, 21, 558, 576, 4778, 587, 16809, 9254, 5054, 1414, 6881, 6164, 6885, 2]

// Module 16810 (OnboardingHomeResourcesSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 9254 */;
import OnboardingHomeConstants from "OnboardingHomeConstants" /* 16808 */;
import useResourceChannelsDefault from "useResourceChannels" /* 16809 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_0, dependencyMap, importDefault, obj1, obj6, obj7, tmp4;

let closure_3 = OnboardingHomeConstants.ONBOARDING_HOME_RESOURCES_SHEET_KEY;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function OnboardingHomeResourcesSheet(guildId) {
  let closure_2;
  let tmp5;
  let tmp6;
  let token;
  let tmp = guildId;
  const tmp2 = dependencyMap;
  let obj = guildId(576);
  const cResult = obj.c(11);
  guildId = guildId.guildId;
  let obj2 = guildId(4778);
  token = obj2.useToken(token(587).modules.mobile.TABLE_ROW_ICON_SIZE);
  const arr = token(16809)(guildId);
  if (cResult[0] !== guildId) {
    function handleChannelPress(channelId) {
      const obj = GuildOnboardingHomeActionCreators;
      const homeResourceChannel = obj.selectHomeResourceChannel(guildId, channelId);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet(closure_3);
    }
    cResult[0] = guildId;
    cResult[1] = handleChannelPress;
    tmp5 = handleChannelPress;
  } else {
    tmp5 = cResult[1];
  }
  dependencyMap = tmp5;
  if (cResult[2] === tmp5) {
    if (cResult[3] === arr) {
      let tmp9;
      if (cResult[4] === token) {
        tmp6 = cResult[5];
      }
      if (cResult[9] !== tmp6) {
        const ActionSheet = tmp(6885).ActionSheet;
        let obj4 = { hasIcons: true, children: tmp6 };
        const tmp11 = <ActionSheet>{null}</ActionSheet>;
        cResult[9] = tmp6;
        cResult[10] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[10];
      }
      return tmp9;
    }
  }
  if (cResult[6] === tmp5) {
    let tmp7;
    if (cResult[7] === token) {
      tmp7 = cResult[8];
    }
    const mapped = arr.map(tmp7);
    cResult[2] = tmp5;
    cResult[3] = arr;
    cResult[4] = token;
    cResult[5] = mapped;
    tmp6 = mapped;
  }
  class I {
    constructor(arg0) {
      closure_0 = guildId;
      tmp2 = closure_2;
      tmp = closure_1;
      obj = closure_1(closure_2[10]);
      resourceChannelIconURL = obj.getResourceChannelIconURL(guildId);
      tmp4 = closure_1_4;
      obj1 = { label: guildId.title, icon: null, onPress: null, arrow: true };
      tmp4Result = undefined;
      ActionSheetRow = guildId(tmp2[11]).ActionSheetRow;
      if (null != resourceChannelIconURL) {
        obj6 = { style: null, source: null };
        size = { width: null, height: null };
        tmp6 = closure_1;
        size.width = closure_1;
        size.height = closure_1;
        obj6.style = size;
        obj7 = { uri: null };
        obj7.uri = resourceChannelIconURL;
        obj6.source = obj7;
        tmp4Result = tmp4(tmp(tmp2[12]), obj6);
      }
      obj1.icon = tmp4Result;
      obj1.onPress = function onPress() {
        return closure_2(label.channelId);
      };
      return tmp4(ActionSheetRow, obj1, guildId.channelId);
    }
  }
  cResult[6] = tmp5;
  cResult[7] = token;
  cResult[8] = I;
  tmp7 = I;
}) : (function OnboardingHomeResourcesSheet(guildId) {
  let closure_1;
  guildId = guildId.guildId;
  let obj = guildId(4778);
  importDefault = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
  const arr = useResourceChannelsDefault(guildId);
  const ActionSheet = guildId(6885).ActionSheet;
  let obj3 = {
    hasIcons: true,
    children: arr.map((label) => {
      let obj4;
      let obj = height(dependencyMap[10]);
      const resourceChannelIconURL = obj.getResourceChannelIconURL(label);
      let tmp4Result;
      const ActionSheetRow = guildId(tmp2[11]).ActionSheetRow;
      const tmp = height;
      if (null != resourceChannelIconURL) {
        const obj3 = { style: size, source: obj4 };
        size = { width: height, height };
        obj4 = { uri: resourceChannelIconURL };
        tmp4Result = tmp4(tmp(tmp2[12]), obj3);
      }
      return <ActionSheetRow key={arg0.channelId} label={arg0.title} icon={tmp4Result} onPress={function onPress() {
        const channelId = label.channelId;
        const obj = GuildOnboardingHomeActionCreators;
        const homeResourceChannel = obj.selectHomeResourceChannel(guildId, channelId);
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet(closure_3);
      }} arrow />;
    })
  };
  const Group = guildId(6881).ActionSheetRow.Group;
  return <ActionSheet>{null}</ActionSheet>;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx");

export default tmp3;
