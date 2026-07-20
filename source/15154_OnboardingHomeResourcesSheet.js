// Module ID: 15154
// Function ID: 114303
// Name: OnboardingHomeResourcesSheet
// Dependencies: []
// Exports: default

// Module 15154 (OnboardingHomeResourcesSheet)
importAll(dependencyMap[0]);
let closure_3 = arg1(dependencyMap[1]).ONBOARDING_HOME_RESOURCES_SHEET_KEY;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeResourcesSheet.tsx");

export default function OnboardingHomeResourcesSheet(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let obj = arg1(dependencyMap[3]);
  const importDefault = obj.useToken(importDefault(dependencyMap[4]).modules.mobile.TABLE_ROW_ICON_SIZE);
  obj = {};
  obj = {
    hasIcons: true,
    children: importDefault(dependencyMap[5])(guildId).map((label) => {
      const guildId = label;
      let obj = callback(closure_2[10]);
      const resourceChannelIconURL = obj.getResourceChannelIconURL(label);
      let tmp2;
      if (null != resourceChannelIconURL) {
        tmp2 = resourceChannelIconURL;
      }
      obj = { label: label.title };
      let tmp4;
      if (null != tmp2) {
        obj = {};
        const obj1 = { width: callback, height: callback };
        obj.style = obj1;
        const obj2 = { uri: tmp2 };
        obj.source = obj2;
        tmp4 = callback2(callback(closure_2[11]), obj);
      }
      obj.icon = tmp4;
      obj.onPress = function onPress() {
        const homeResourceChannel = arg0(closure_2[6]).selectHomeResourceChannel(arg0, arg0.channelId);
        const obj = arg0(closure_2[6]);
        callback(closure_2[7]).hideActionSheet(closure_3);
      };
      obj.arrow = true;
      return callback2(guildId(closure_2[9]).ActionSheetRow, obj, label.channelId);
    })
  };
  obj.children = jsx(arg1(dependencyMap[9]).ActionSheetRow.Group, obj);
  return jsx(arg1(dependencyMap[8]).ActionSheet, obj);
};
