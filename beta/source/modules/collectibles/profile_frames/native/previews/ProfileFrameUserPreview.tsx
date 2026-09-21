// Module ID: 11473
// Function ID: 11474
// Name: ProfileFrameUserPreview
// Dependencies: [109, 19, 21, 558, 568, 1119, 11390, 2]

// Module 11473 (ProfileFrameUserPreview)
import c from "c" /* 568 */;
import UserProfilePreviewDefault from "UserProfilePreview" /* 11390 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const util = prop(1119);
require = fn;
let closure_3 = ["profileFrame"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/previews/ProfileFrameUserPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((profileFrame) => {
  let prop = require;
  const cResult = c.c(9);
  if (cResult[0] !== profileFrame) {
    profileFrame = profileFrame.profileFrame;
    const tmp8 = _objectWithoutProperties(profileFrame, closure_3);
    cResult[0] = profileFrame;
    cResult[1] = profileFrame;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
    let tmp4 = profileFrame;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    if (null != tmp4) {
      const intl2 = util.intl;
      prop = util.t["DT/PwH"];
      const obj2 = { a11y_text: tmp4.label };
      let formatToPlainStringResult = intl2.formatToPlainString(prop, obj2);
    } else {
      const intl = util.intl;
      formatToPlainStringResult = intl.string(util.t.vQx51z);
    }
    cResult[3] = tmp4;
    cResult[4] = formatToPlainStringResult;
  } else {
    if (cResult[5] === tmp4) {
      if (cResult[6] === tmp5) {
        if (cResult[7] === tmp9) {
          let tmp13 = cResult[8];
        }
        return tmp13;
      }
    }
    const obj3 = { profileFrameOverride: tmp4, accessibilityLabel: cResult[4] };
    const merged = Object.assign(tmp5);
    const tmp20 = jsx(UserProfilePreviewDefault, { profileFrameOverride: tmp4, accessibilityLabel: cResult[4] });
    cResult[5] = tmp4;
    cResult[6] = tmp5;
    cResult[7] = cResult[4];
    cResult[8] = tmp20;
    tmp13 = tmp20;
  }
}) : ((profileFrame) => {
  profileFrame = profileFrame.profileFrame;
  const merged = Object.assign(profileFrame, Object.assign({ profileFrame: 0 }));
  const obj = { profileFrameOverride: profileFrame, accessibilityLabel: null };
  if (null != profileFrame) {
    const intl2 = util.intl;
    const obj2 = { a11y_text: profileFrame.label };
    let formatToPlainStringResult = intl2.formatToPlainString(util.t["DT/PwH"], obj2);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(util.t.vQx51z);
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  const merged1 = Object.assign(merged);
  return jsx(UserProfilePreviewDefault, { profileFrameOverride: profileFrame, accessibilityLabel: null });
});
