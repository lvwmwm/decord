// Module ID: 14853
// Function ID: 14854
// Name: VoicePanelDockRimLight
// Dependencies: [19, 21, 1655, 14854, 14856, 2]
// Exports: VoicePanelDockRimLevel

// Module 14853 (VoicePanelDockRimLight)
import Fragment from "Fragment" /* 21 */;
import useVoicePanelDockLevelProps from "useVoicePanelDockLevelProps" /* 14854 */;
import LiveVoiceLevelViewDefault from "LiveVoiceLevelView" /* 14856 */;
import react from "react" /* 19 */;
import module_1655 from "module_1655" /* 1655 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const mutable = module_1655.makeMutable(0);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockRimLight.tsx");

export const voicePanelDockRimOpacity = mutable;
export const DOCK_GLOW_REST_OPACITY = 0.4;
export function VoicePanelDockRimLevel(arg0) {
  let children;
  let style;
  ({ style, children } = arg0);
  const obj = useVoicePanelDockLevelProps;
  const voicePanelDockGlowLevelProps = obj.useVoicePanelDockGlowLevelProps();
  LiveVoiceLevelViewDefault;
  const merged = Object.assign(voicePanelDockGlowLevelProps);
  return <tmp2 style={style} minOpacity={0.04000000000000001} maxOpacity={0.16}>{children}</tmp2>;
}
