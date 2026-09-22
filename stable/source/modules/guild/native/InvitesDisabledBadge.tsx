// Module ID: 16400
// Function ID: 16401
// Name: InvitesDisabledBadge
// Dependencies: [19, 17, 21, 4636, 576, 1176, 12858, 2]

// Module 16400 (InvitesDisabledBadge)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1176 */;
import _modDef12858 from "module_12858" /* 12858 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let obj = { pause: { alignContent: "center", justifyContent: "center", width: 10, height: 10 }, pauseBackground: null, pauseRing: null };
let size = { borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, padding: fn(1176).BADGE_PADDING, height: 16, width: 16, alignContent: "center", justifyContent: "center" };
obj.pauseBackground = size;
const size1 = { borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, position: "absolute", bottom: -fn(1176).BADGE_PADDING, right: -fn(1176).BADGE_PADDING, padding: fn(1176).BADGE_PADDING, height: 22, width: 22, alignContent: "center", justifyContent: "center" };
obj.pauseRing = size1;
let closure_5 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild/native/InvitesDisabledBadge.tsx");

export default noop.memo(function InvitesDisabledBadge(style) {
  const tmp = closure_5();
  const obj = { style: null, children: null };
  const items = [tmp.pauseRing, style.style];
  obj.style = items;
  const obj2 = { style: tmp.pauseBackground, children: jsx(native.ThemedIcon, { style: tmp.pause, themedColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, source: _modDef12858 }) };
  obj.children = <View style={tmp.pauseBackground}>{jsx(native.ThemedIcon, { style: tmp.pause, themedColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, source: _modDef12858 })}</View>;
  return <View style={null}>{null}</View>;
});
