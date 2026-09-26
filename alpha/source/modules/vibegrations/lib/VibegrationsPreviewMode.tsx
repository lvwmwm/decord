// Module ID: 16277
// Function ID: 16278
// Name: VibegrationsPreviewMode
// Dependencies: [3715, 1115, 2]
// Exports: getPreviewModeLabel, getPreviewModePanelId

// Module 16277 (VibegrationsPreviewMode)
import util from "util" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import size from "module_2" /* 2 */;

const obj = { frame: _modDef3715.TI6dfu, widget: _modDef3715.zshJSX, bot: _modDef3715.bBkuBd };
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsPreviewMode.tsx");

export const VIBEGRATIONS_PREVIEW_MODE_ORDER = ["frame", "widget", "bot"];
export const getPreviewModeLabel = function getPreviewModeLabel(id) {
  const intl = util.intl;
  return intl.string(obj[id]);
};
export const getPreviewModePanelId = function getPreviewModePanelId(arg0) {
  return "vibegrations-preview-mode-panel-" + arg0;
};
