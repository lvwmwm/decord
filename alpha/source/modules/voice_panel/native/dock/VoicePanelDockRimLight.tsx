// Module ID: 13409
// Function ID: 13410
// Name: VoicePanelDockRimLight
// Dependencies: [19, 21, 1654, 13410, 13412, 2]
// Exports: VoicePanelDockRimLevel

// Module 13409 (VoicePanelDockRimLight)
import Fragment from "Fragment" /* 21 */;
import useVoicePanelDockLevelProps from "useVoicePanelDockLevelProps" /* 13410 */;
import LiveVoiceLevelViewDefault from "LiveVoiceLevelView" /* 13412 */;
import react from "react" /* 19 */;
import module_1654 from "module_1654" /* 1654 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const mutable = module_1654.makeMutable(0);
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
