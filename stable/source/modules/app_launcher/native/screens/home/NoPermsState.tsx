// Module ID: 12246
// Function ID: 12247
// Name: NoPermsState
// Dependencies: [19, 17, 21, 4636, 576, 4488, 4571, 12247, 12248, 12184, 9539, 4632, 1114, 2]
// Exports: default

// Module 12246 (NoPermsState)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import shared from "shared" /* 4488 */;
import useThemeDefault from "useTheme" /* 4571 */;
import Text_Text from "Text/Text" /* 4632 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 12184 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4636);
let obj2 = { container: { paddingVertical: 16, paddingHorizontal: 24, gap: 12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "flex-start", display: "flex", flexDirection: "row" }, textContainer: { flexShrink: 1 }, image: { width: 64, height: 64 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/NoPermsState.tsx");

export default function EmptyState() {
  const tmp = closure_7();
  const tmp4Result = importDefault(shared.isThemeLight(useThemeDefault()) ? 12247 : 12248);
  const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(tmp2(9539).AppLauncherEmptyStateType.HOME_NO_PERMISSIONS);
  const obj2 = { style: tmp.container, children: null };
  const items = [hasOwnProperty(React4, { style: tmp.image, resizeMode: "contain", source: tmp4Result }), ];
  const obj4 = { style: tmp.textContainer, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = tmp2(1114).intl;
  obj4.children = intl.string(util.t.uDnXXj);
  items[1] = hasOwnProperty(Text_Text.Text, obj4);
  obj2.children = items;
  return timestampProducer(React3, obj2);
};
