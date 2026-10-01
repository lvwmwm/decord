// Module ID: 16312
// Function ID: 16313
// Name: VibegrationsSelectModeIcon
// Dependencies: [19, 21, 576, 4531, 7909, 2]
// Exports: VibegrationsSelectModeActiveIcon

// Module 16312 (VibegrationsSelectModeIcon)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import inlineStyles from "inlineStyles" /* 7909 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let c3;
let closure_4;
class VibegrationsSelectModeIcon {
  constructor(color) {
    let ClipPath;
    let items;
    let obj3;
    let INTERACTIVE_ICON_DEFAULT = color.color;
    if (INTERACTIVE_ICON_DEFAULT === undefined) {
      INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
    }
    const obj = useToken;
    const token = obj.useToken(INTERACTIVE_ICON_DEFAULT);
    size = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", accessible: false, children: items };
    const obj2 = { children: _false(ClipPath, obj3) };
    const tmp4 = inlineStylesDefault;
    const Defs = inlineStyles.Defs;
    obj3 = { id, children: _false(inlineStyles.Rect, { width: 24, height: 24, rx: 8 }) };
    ClipPath = inlineStyles.ClipPath;
    items = [_false(Defs, obj2), ];
    const obj4 = { clipPath: "url(#" + id + ")", children: _false(inlineStyles.Path, { d: "M20.6996 10.7515L15.1195 12.6108C15.1195 12.6108 13.9587 12.9065 13.4323 13.4325C12.9055 13.959 12.6105 15.1198 12.6105 15.1198L10.7513 20.6999C10.3493 21.9063 8.6428 21.906 8.24046 20.6995L2.84448 4.51832C2.49948 3.48376 3.48352 2.49972 4.51808 2.84472L20.6992 8.2407C21.9057 8.64305 21.906 10.3495 20.6996 10.7515Z", fill: token }) };
    const G = inlineStyles.G;
    items[1] = _false(G, obj4);
    return React3(tmp4, size);
  }
}
({ jsx: c3, jsxs: closure_4 } = Fragment);
const hasOwnProperty = "vibegrations-select-mode-clip";
let size = size_mod;
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSelectModeIcon.tsx");

export default VibegrationsSelectModeIcon;
export const VibegrationsSelectModeActiveIcon = function VibegrationsSelectModeActiveIcon() {
  const obj = { color: nativeDefault.colors.TEXT_BRAND };
  return _false(VibegrationsSelectModeIcon, obj);
};
