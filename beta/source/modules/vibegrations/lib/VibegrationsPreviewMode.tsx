// Module ID: 16966
// Function ID: 16967
// Name: VibegrationsPreviewMode
// Dependencies: [3710, 1115, 2]
// Exports: getPreviewModeLabel, getPreviewModePanelId

// Module 16966 (VibegrationsPreviewMode)
import util from "util" /* 1115 */;
import _modDef3710 from "module_3710" /* 3710 */;
import size from "module_2" /* 2 */;

const obj = { frame: _modDef3710.TI6dfu, widget: _modDef3710.zshJSX, bot: _modDef3710.bBkuBd };
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsPreviewMode.tsx");

export const VIBEGRATIONS_PREVIEW_MODE_ORDER = ["frame", "widget", "bot"];
export const getPreviewModeLabel = function getPreviewModeLabel(id) {
  const intl = util.intl;
  return intl.string(obj[id]);
};
export const getPreviewModePanelId = function getPreviewModePanelId(arg0) {
  return "vibegrations-preview-mode-panel-" + arg0;
};
