// Module ID: 14744
// Function ID: 14745
// Name: VoicePanelDockRimLight
// Dependencies: [19, 21, 1652, 14745, 14746, 2]
// Exports: VoicePanelDockRimLevel

// Module 14744 (VoicePanelDockRimLight)
import Fragment from "Fragment" /* 21 */;
import useVoicePanelDockLevelProps from "useVoicePanelDockLevelProps" /* 14745 */;
import LiveVoiceLevelViewDefault from "LiveVoiceLevelView" /* 14746 */;
import react from "react" /* 19 */;
import module_1652 from "module_1652" /* 1652 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const mutable = module_1652.makeMutable(0);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockRimLight.tsx");

export const voicePanelDockRimOpacity = mutable;
export const DOCK_GLOW_REST_OPACITY = 0.5;
export function VoicePanelDockRimLevel(arg0) {
  let children;
  let style;
  ({ style, children } = arg0);
  const obj = useVoicePanelDockLevelProps;
  const voicePanelDockGlowLevelProps = obj.useVoicePanelDockGlowLevelProps();
  LiveVoiceLevelViewDefault;
  const merged = Object.assign(voicePanelDockGlowLevelProps);
  return <tmp2 style={style} minOpacity={0.12} maxOpacity={0.6}>{children}</tmp2>;
}
