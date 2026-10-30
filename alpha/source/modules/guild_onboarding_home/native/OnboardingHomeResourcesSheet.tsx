// Module ID: 18586
// Function ID: 18587
// Name: OnboardingHomeResourcesSheet
// Dependencies: [19, 18584, 21, 5591, 575, 18585, 13783, 5253, 7360, 7362, 1410, 5712, 2]
// Exports: default

// Module 18586 (OnboardingHomeResourcesSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 13783 */;
import OnboardingHomeConstants from "OnboardingHomeConstants" /* 18584 */;
import useResourceChannelsDefault from "useResourceChannels" /* 18585 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let importDefault;

let closure_3 = OnboardingHomeConstants.ONBOARDING_HOME_RESOURCES_SHEET_KEY;
const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx");

export default function OnboardingHomeResourcesSheet(guildId) {
  let closure_1;
  guildId = guildId.guildId;
  let obj = guildId(5591);
  importDefault = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
  const arr = useResourceChannelsDefault(guildId);
  const ActionSheet = guildId(7360).ActionSheet;
  let obj3 = {
    hasIcons: true,
    children: arr.map((label) => {
      let obj4;
      let obj = height(dependencyMap[10]);
      const resourceChannelIconURL = obj.getResourceChannelIconURL(label);
      let tmp4Result;
      const ActionSheetRow = guildId(tmp2[9]).ActionSheetRow;
      const tmp = height;
      if (null != resourceChannelIconURL) {
        const obj3 = { style: size, source: obj4 };
        size = { width: height, height };
        obj4 = { uri: resourceChannelIconURL };
        tmp4Result = tmp4(tmp(tmp2[11]), obj3);
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
  const Group = guildId(7362).ActionSheetRow.Group;
  return <ActionSheet>{null}</ActionSheet>;
};
