// Module ID: 10789
// Function ID: 10790
// Name: ProfileFrameUserPreview
// Dependencies: [19, 21, 10572, 1115, 2]
// Exports: default

// Module 10789 (ProfileFrameUserPreview)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1115 */;
import UserProfilePreviewDefault from "UserProfilePreview" /* 10572 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/previews/ProfileFrameUserPreview.tsx");

export default function ProfileFrameUserPreview(profileFrame) {
  let avatarDecorationOverride;
  let formatToPlainStringResult;
  let profileEffectOverride;
  profileFrame = profileFrame.profileFrame;
  ({ avatarDecorationOverride, profileEffectOverride } = profileFrame);
  const merged = Object.assign(profileFrame, Object.assign({ profileFrame: 0, avatarDecorationOverride: 0, profileEffectOverride: 0 }));
  const obj = { profileFrameOverride: profileFrame, avatarDecorationOverride, profileEffectOverride, accessibilityLabel: formatToPlainStringResult };
  const tmp2 = jsx;
  const tmp4 = UserProfilePreviewDefault;
  if (null != profileFrame) {
    const intl2 = intl3.intl;
    const obj2 = { a11y_text: profileFrame.label };
    formatToPlainStringResult = intl2.formatToPlainString(intl3.t["DT/PwH"], obj2);
  } else {
    const intl = intl3.intl;
    formatToPlainStringResult = intl.string(intl3.t.vQx51z);
  }
  const merged1 = Object.assign(merged);
  return tmp2(tmp4, obj);
};
