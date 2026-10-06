// Module ID: 16275
// Function ID: 16276
// Name: VibegrationsPreviewMode
// Dependencies: [3718, 1127, 2]
// Exports: getPreviewModeLabel, getPreviewModePanelId

// Module 16275 (VibegrationsPreviewMode)
import intl2 from "intl" /* 1127 */;
import _modDef3718 from "module_3718" /* 3718 */;
import size from "module_2" /* 2 */;

const obj = { frame: _modDef3718.TI6dfu, widget: _modDef3718.zshJSX, bot: _modDef3718.bBkuBd };
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsPreviewMode.tsx");

export const VIBEGRATIONS_PREVIEW_MODE_ORDER = ["frame", "widget", "bot"];
export const getPreviewModeLabel = function getPreviewModeLabel(id) {
  const intl = intl2.intl;
  return intl.string(obj[id]);
};
export const getPreviewModePanelId = function getPreviewModePanelId(arg0) {
  return "vibegrations-preview-mode-panel-" + arg0;
};
