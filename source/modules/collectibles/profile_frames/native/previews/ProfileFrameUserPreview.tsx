// Module ID: 8738
// Function ID: 69115
// Name: ProfileFrameUserPreview
// Dependencies: []
// Exports: default

// Module 8738 (ProfileFrameUserPreview)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/collectibles/profile_frames/native/previews/ProfileFrameUserPreview.tsx");

export default function ProfileFrameUserPreview(profileFrame) {
  profileFrame = profileFrame.profileFrame;
  let obj = Object.create(null);
  obj.profileFrame = 0;
  const merged = Object.assign(profileFrame, obj);
  obj = { profileFrameOverride: profileFrame };
  if (null != profileFrame) {
    const intl2 = arg1(dependencyMap[3]).intl;
    obj = { a11y_text: profileFrame.label };
    let formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[3]).t.DT/PwH, obj);
  } else {
    const intl = arg1(dependencyMap[3]).intl;
    formatToPlainStringResult = intl.string(arg1(dependencyMap[3]).t.vQx51z);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  const merged1 = Object.assign(merged);
  return jsx(importDefault(dependencyMap[2]), obj);
};
