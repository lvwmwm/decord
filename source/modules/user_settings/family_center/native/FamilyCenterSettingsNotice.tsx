// Module ID: 13596
// Function ID: 103028
// Name: FamilyCenterSettingsParentalControlsNotice
// Dependencies: []
// Exports: default

// Module 13596 (FamilyCenterSettingsParentalControlsNotice)
importAll(dependencyMap[0]);
const SafetySettingsNoticeType = arg1(dependencyMap[1]).SafetySettingsNoticeType;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/family_center/native/FamilyCenterSettingsNotice.tsx");

export default function FamilyCenterSettingsParentalControlsNotice() {
  let obj = arg1(dependencyMap[3]);
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  const arg1 = activeLinkUserIds;
  obj = {
    label: importDefault(dependencyMap[5]).i284fU,
    noticeType: SafetySettingsNoticeType.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
    labelHook() {
      let obj = activeLinkUserIds(closure_2[6]);
      obj.popLayer();
      obj = { recipientIds: activeLinkUserIds };
      callback(closure_2[7]).openPrivateChannel(obj);
    },
    count: activeLinkUserIds.length
  };
  return jsx(importDefault(dependencyMap[4]), obj);
};
