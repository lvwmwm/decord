// Module ID: 15228
// Function ID: 15229
// Name: pickBountyVideoRendition
// Dependencies: [9156, 2]
// Exports: pickBountyPlaybackHlsUri

// Module 15228 (pickBountyVideoRendition)
import BountyAspectRatio from "BountyAspectRatio" /* 9156 */;
import size from "module_2" /* 2 */;

let items;
function nonEmptyUrl(videoRenditions, preferred) {
  let tmp2 = null;
  if (null != videoRenditions[preferred]) {
    tmp2 = null;
    if ("" !== videoRenditions[preferred]) {
      tmp2 = tmp;
    }
  }
  return tmp2;
}
function pickBountyVideoRendition(videoRenditions, BOUNTY_MOBILE_MODAL_RENDITION_PICK, videoHls) {
  let preferred;
  let supported;
  ({ preferred, supported } = BOUNTY_MOBILE_MODAL_RENDITION_PICK);
  if (null != videoRenditions) {
    if (0 !== supported.length) {
      let tmp2 = null;
      if (supported.includes(preferred)) {
        tmp2 = nonEmptyUrl(videoRenditions, preferred);
      }
      if (null != tmp2) {
        return tmp2;
      } else {
        let tmp16 = null;
        let num = Infinity;
        const tmp18 = closure_0[preferred];
        const iter = supported[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp6 = nextResult;
          if (nextResult !== preferred) {
            let tmp9 = nonEmptyUrl(videoRenditions, tmp6);
            if (null != tmp9) {
              let _Math = Math;
              let absolute = Math.abs(closure_0[tmp6] - tmp18);
              if (absolute < num) {
                num = absolute;
                tmp16 = tmp9;
              }
            }
          }
          continue;
        }
        if (tmp16 == null) {
          tmp16 = videoHls;
        }
        return tmp16;
      }
    }
  }
  return videoHls;
}
const obj = { preferred: BountyAspectRatio.BountyAspectRatio.PORTRAIT, supported: items };
items = [BountyAspectRatio.BountyAspectRatio.PORTRAIT];
let closure_0 = { [BountyAspectRatio.BountyAspectRatio.PORTRAIT]: 0.5625, [BountyAspectRatio.BountyAspectRatio.LANDSCAPE]: 1.7777777777777777 };
const result = size.fileFinishedImporting("modules/ads/utils/pickBountyVideoRendition.tsx");

export const BOUNTY_MOBILE_MODAL_RENDITION_PICK = obj;
export { pickBountyVideoRendition };
export const pickBountyPlaybackHlsUri = function pickBountyPlaybackHlsUri(videoRenditions, BOUNTY_MOBILE_MODAL_RENDITION_PICK) {
  return pickBountyVideoRendition(videoRenditions.videoRenditions, BOUNTY_MOBILE_MODAL_RENDITION_PICK, videoRenditions.videoHls);
};
