// Module ID: 13252
// Function ID: 13253
// Name: ConjureLinkedAppHeader
// Dependencies: [19, 17, 21, 5306, 575, 10543, 8101, 5929, 13251, 13253, 2]
// Exports: default

// Module 13252 (ConjureLinkedAppHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5929 */;
import AppsIcon2 from "AppsIcon" /* 8101 */;
import ConjureProjectIconDefault from "ConjureProjectIcon" /* 10543 */;
import conjureLinkedAppData from "conjureLinkedAppData" /* 13251 */;
import ConjureLinkedAppConnectorDefault from "ConjureLinkedAppConnector" /* 13253 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let size;
function AppName(project) {
  let AppsIcon;
  let items;
  let obj4;
  let tmp4;
  let tmp8;
  project = project.project;
  const name = project.name;
  const tmp = closure_6();
  const obj = { style: tmp.app, children: items };
  const tmp2 = hasOwnProperty;
  if (null != project) {
    const obj2 = { project, size: "header" };
    tmp8 = React3(ConjureProjectIconDefault, obj2);
    tmp4 = React3;
  } else {
    tmp4 = React3;
    const obj3 = { style: tmp.iconPlaceholder, children: React3(AppsIcon, obj4) };
    obj4 = { size: "xxs", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    AppsIcon = AppsIcon2.AppsIcon;
    tmp8 = React3(tmp3, obj3);
  }
  items = [tmp8, ];
  const obj5 = { variant: "body-md/medium", color: "text-strong", lineClamp: 1, style: tmp.name, children: name };
  items[1] = tmp4(Text_Text.Text, obj5);
  return tmp2(View, obj);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, app: obj3, name: { flexShrink: 1 }, iconPlaceholder: size };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_8 };
size = { alignItems: "center", justifyContent: "center", width: nativeDefault.space.PX_20, height: nativeDefault.space.PX_20, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppHeader.tsx");

export default function ConjureLinkedAppHeader(arg0) {
  let caller;
  let callerProject;
  let flow;
  let items;
  let obj2;
  let target;
  let targetProject;
  ({ caller, target, flow } = arg0);
  ({ callerProject, targetProject } = arg0);
  const obj = { style: closure_6().header, accessible: true, accessibilityLabel: obj2.linkedAppHeaderAria({ caller, target }, flow), children: items };
  obj2 = conjureLinkedAppData;
  items = [React3(AppName, { name: caller, project: callerProject }), React3(ConjureLinkedAppConnectorDefault, { flow }), React3(AppName, { name: target, project: targetProject })];
  return hasOwnProperty(View, obj);
};
