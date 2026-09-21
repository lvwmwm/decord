// Module ID: 16965
// Function ID: 16966
// Name: VibegrationsPreviewMode
// Dependencies: [3682, 1119, 2]
// Exports: getPreviewModeLabel, getPreviewModePanelId

// Module 16965 (VibegrationsPreviewMode)
import util from "util" /* 1119 */;
import _modDef3682 from "module_3682" /* 3682 */;
import size from "module_2" /* 2 */;

const obj = { frame: _modDef3682.TI6dfu, widget: _modDef3682.zshJSX, bot: _modDef3682.bBkuBd };
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsPreviewMode.tsx");

export const VIBEGRATIONS_PREVIEW_MODE_ORDER = ["frame", "widget", "bot"];
export const getPreviewModeLabel = function getPreviewModeLabel(id) {
  const intl = util.intl;
  return intl.string(obj[id]);
};
export const getPreviewModePanelId = function getPreviewModePanelId(arg0) {
  return "vibegrations-preview-mode-panel-" + arg0;
};
