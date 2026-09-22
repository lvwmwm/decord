// Module ID: 17612
// Function ID: 17613
// Name: VoicePanelLockedIcon
// Dependencies: [19, 21, 4758, 580, 558, 568, 1181, 17613, 5804, 2]

// Module 17612 (VoicePanelLockedIcon)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import native from "native" /* 1181 */;
import NativeViewDefault from "NativeView" /* 5804 */;
import _modDef17613 from "module_17613" /* 17613 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj2 = { container: null, icon: null };
let size = { alignItems: "center", justifyContent: "center", alignSelf: "center", width: 64, height: 64, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
obj2.container = size;
obj2.icon = {};
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(5);
  const tmp4 = closure_4();
  if (cResult[0] !== tmp4.icon) {
    const obj2 = { style: tmp4.icon, source: _modDef17613, size: tmp(1181).IconSizes.LARGE };
    const tmp8 = jsx(tmp(1181).Icon, { style: tmp4.icon, source: _modDef17613, size: tmp(1181).IconSizes.LARGE });
    cResult[0] = tmp4.icon;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.container) {
    if (cResult[3] === tmp5) {
      let tmp9 = cResult[4];
    }
    return tmp9;
  }
  const tmp10 = jsx(NativeViewDefault, { style: tmp4.container, children: tmp5 });
  cResult[2] = tmp4.container;
  cResult[3] = tmp5;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (() => {
  const tmp = closure_4();
  const obj = { style: tmp.container, children: null };
  obj.children = jsx(native.Icon, { style: tmp.icon, source: _modDef17613, size: native.IconSizes.LARGE });
  return <tmp2 style={tmp.container}>{null}</tmp2>;
});
