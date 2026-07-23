// Module ID: 8750
// Function ID: 69191
// Name: ProfileFrameUserPreview
// Dependencies: [31, 33, 8235, 1212, 2]
// Exports: default

// Module 8750 (ProfileFrameUserPreview)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("filterLayer").fileFinishedImporting("modules/collectibles/profile_frames/native/previews/ProfileFrameUserPreview.tsx");

export default function ProfileFrameUserPreview(profileFrame) {
  profileFrame = profileFrame.profileFrame;
  let obj = Object.create(null);
  obj.profileFrame = 0;
  const merged = Object.assign(profileFrame, obj);
  obj = { profileFrameOverride: profileFrame };
  if (null != profileFrame) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { a11y_text: profileFrame.label };
    let formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["DT/PwH"], obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    formatToPlainStringResult = intl.string(require(1212) /* getSystemLocale */.t.vQx51z);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  const merged1 = Object.assign(merged);
  return jsx(importDefault(8235), { profileFrameOverride: profileFrame });
};
