// Module ID: 16829
// Function ID: 16830
// Name: pickBountyVideoRendition
// Dependencies: [9649, 38, 2]
// Exports: pickBountyVideoRenditionWithFallback

// Module 16829 (pickBountyVideoRendition)
import _modDef38 from "module_38" /* 38 */;
import BountyAspectRatio from "BountyAspectRatio" /* 9649 */;
import size from "module_2" /* 2 */;

let items;
let items1;
function getRendition(videoRenditions, preferred) {
  let tmp2 = null;
  if (null != videoRenditions[preferred]) {
    tmp2 = null;
    if ("" !== videoRenditions[preferred]) {
      tmp2 = { url: videoRenditions[preferred], aspectRatio: preferred };
      const obj = { url: videoRenditions[preferred], aspectRatio: preferred };
    }
  }
  return tmp2;
}
function pickBountyVideoRendition(videoRenditions, BOUNTY_MOBILE_MODAL_RENDITION_PICK) {
  let preferred;
  let supported;
  ({ preferred, supported } = BOUNTY_MOBILE_MODAL_RENDITION_PICK);
  const tmp = _modDef38;
  tmp(supported.includes(preferred), "Preferred aspect ratio must be in supported renditions list");
  const tmp3 = getRendition(videoRenditions, preferred);
  if (null != tmp3) {
    return tmp3;
  } else {
    let tmp17 = null;
    let num = Infinity;
    const tmp19 = closure_3[preferred];
    const iter = supported[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      if (nextResult !== preferred) {
        let tmp10 = getRendition(videoRenditions, tmp7);
        if (null != tmp10) {
          let _Math = Math;
          let absolute = Math.abs(closure_3[tmp7] - tmp19);
          if (absolute < num) {
            num = absolute;
            tmp17 = tmp10;
          }
        }
      }
      continue;
    }
    return tmp17;
  }
}
let obj = { preferred: BountyAspectRatio.BountyAspectRatio.PORTRAIT, supported: items };
items = [BountyAspectRatio.BountyAspectRatio.PORTRAIT];
const obj2 = { preferred: BountyAspectRatio.BountyAspectRatio.LANDSCAPE, supported: items1 };
items1 = [BountyAspectRatio.BountyAspectRatio.LANDSCAPE, BountyAspectRatio.BountyAspectRatio.PORTRAIT];
let closure_3 = { [BountyAspectRatio.BountyAspectRatio.PORTRAIT]: 0.5625, [BountyAspectRatio.BountyAspectRatio.LANDSCAPE]: 1.7777777777777777 };
const result = size.fileFinishedImporting("modules/ads/utils/pickBountyVideoRendition.tsx");

export const BOUNTY_MOBILE_MODAL_RENDITION_PICK = obj;
export const BOUNTY_DESKTOP_MODAL_RENDITION_PICK = obj2;
export { pickBountyVideoRendition };
export function pickBountyVideoRenditionWithFallback(videoRenditions, BOUNTY_MOBILE_MODAL_RENDITION_PICK) {
  let tmp2;
  if (null == videoRenditions.videoRenditions) {
    const supported = BOUNTY_MOBILE_MODAL_RENDITION_PICK.supported;
    let tmp5 = null;
    const tmp3 = require;
    if (supported.includes(BountyAspectRatio.BountyAspectRatio.PORTRAIT)) {
      tmp5 = { url: videoRenditions.videoHls, aspectRatio: tmp3(9649).BountyAspectRatio.PORTRAIT };
      const obj = { url: videoRenditions.videoHls, aspectRatio: tmp3(9649).BountyAspectRatio.PORTRAIT };
    }
    tmp2 = tmp5;
  } else {
    tmp2 = pickBountyVideoRendition(videoRenditions.videoRenditions, BOUNTY_MOBILE_MODAL_RENDITION_PICK);
  }
  return tmp2;
}
