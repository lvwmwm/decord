// Module ID: 12443
// Function ID: 12444
// Name: conjurePlanOverlayDesign
// Dependencies: [12444, 2]
// Exports: conjurePlanOverlayWidgetBox, conjurePlanOverlayWidgetSize

// Module 12443 (conjurePlanOverlayDesign)
import conjureOverlayPreview from "conjureOverlayPreview" /* 12444 */;
import size_mod from "module_2" /* 2 */;

let c2 = 339.3333333333333;
const combined = "" + Number((7.072691552062869).toFixed(3)) + "%";
const combined1 = "" + Number((3.75).toFixed(3)) + "%";
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanOverlayDesign.tsx");

export const CONJURE_PLAN_OVERLAY_SCENE_ASPECT_RATIO = 1.8860510805500983;
export const CONJURE_PLAN_OVERLAY_WIDGET_TOP = combined;
export const CONJURE_PLAN_OVERLAY_WIDGET_END = combined1;
export const conjurePlanOverlayWidgetSize = function conjurePlanOverlayWidgetSize(proposal) {
  const design_image = proposal.design_image;
  let name;
  if (design_image != null) {
    name = design_image.name;
  }
  let result = null;
  if ("overlay-design-v2.png" === name) {
    let overlay_widget = proposal.overlay_widget;
    const overlayWidgetPreviewSize = conjureOverlayPreview.overlayWidgetPreviewSize;
    conjureOverlayPreview;
    if (overlay_widget == null) {
      overlay_widget = null;
    }
    result = overlayWidgetPreviewSize(overlay_widget);
  }
  return result;
};
export const conjurePlanOverlayWidgetBox = function conjurePlanOverlayWidgetBox(size) {
  let result;
  let result1;
  const bound = Math.min(1, 592 / size.width, 291.3333333333333 / size.height);
  size = { width: "" + Number(result.toFixed(3)) + "%", height: "" + Number(result1.toFixed(3)) + "%" };
  result = size.width * bound / 640 * 100;
  result1 = size.height * bound / c2 * 100;
  return size;
};
