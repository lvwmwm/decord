// Module ID: 17205
// Function ID: 17206
// Name: WebhookIcon
// Dependencies: [19, 21, 576, 4488, 17206, 2]
// Exports: WebhookIcon

// Module 17205 (WebhookIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4488 */;
import _mod17206 from "module_17206" /* 17206 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/WebhookIcon.tsx");

export const WebhookIcon = function WebhookIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod17206, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
