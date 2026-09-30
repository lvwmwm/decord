// Module ID: 16553
// Function ID: 16554
// Name: VibegrationsNativeCardSurface
// Dependencies: [19, 17, 21, 4866, 576, 2]
// Exports: default

// Module 16553 (VibegrationsNativeCardSurface)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4866);
const obj2 = { surface: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12 } };
let closure_2 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeCardSurface.tsx");

export default function VibegrationsNativeCardSurface(children) {
  return <View style={closure_2().surface}>{arg0.children}</View>;
};
