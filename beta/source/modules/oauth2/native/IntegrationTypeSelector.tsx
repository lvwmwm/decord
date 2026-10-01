// Module ID: 8586
// Function ID: 8587
// Name: IntegrationTypeSelector
// Dependencies: [19, 17, 21, 4836, 576, 1397, 8505, 4769, 1115, 8587, 5899, 4832, 8589, 5999, 5917, 1177, 2]
// Exports: default

// Module 8586 (IntegrationTypeSelector)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import UserPlusIcon from "UserPlusIcon" /* 4769 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 8505 */;
import ServerIcon from "ServerIcon" /* 8587 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignItems: "center", flexDirection: "column" }, header: { justifyContent: "center", alignItems: "center", gap: 16, marginTop: 24, marginBottom: 32, width: "100%" }, rows: obj2, divider: obj3, learnMore: { marginVertical: 16 }, descriptionContainer: obj4, descriptionMainContainer: { padding: 8 }, appIcon: size, appIconMask: obj5, loadingIcon: obj6 };
obj2 = { alignSelf: "stretch", borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth };
obj4 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, width: "100%", borderRadius: nativeDefault.radii.sm };
size = { height: 82, width: 82, borderRadius: nativeDefault.radii.xl };
obj5 = { padding: 4, borderRadius: nativeDefault.radii.xl + 4 };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
const styles = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/oauth2/native/IntegrationTypeSelector.tsx");

export default function IntegrationTypeSelector(application) {
  let TableRowGroup;
  let items2;
  let items3;
  let items4;
  let obj17;
  let tmp5;
  let tmp6;
  application = application.application;
  const onSelect = application.onSelect;
  const tmp = styles();
  let items = [, ];
  ({ icon: arr[0], id: arr[1] } = application);
  const memo = react.useMemo(() => {
    const obj = AvatarUtilsDefault;
    const obj2 = { id: application.id, icon: application.icon };
    return obj.getApplicationIconSource(obj2);
  }, items);
  const items1 = [application.integrationTypesConfig];
  const memo1 = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    const obj = { type: ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL, icon: UserPlusIcon.UserPlusIcon, label: intl.string(intl5.t.aCg60P), subLabel: intl2.string(intl5.t.YeiIUZ), beta: false };
    intl = intl5.intl;
    intl2 = intl5.intl;
    const items = [obj, ];
    const obj2 = { type: ApplicationIntegrationType.ApplicationIntegrationType.GUILD_INSTALL, icon: ServerIcon.ServerIcon, label: intl3.string(intl5.t.E64YCz), subLabel: intl4.string(intl5.t.bbtoKm), beta: false };
    intl3 = intl5.intl;
    intl4 = intl5.intl;
    items[1] = obj2;
    return items.filter((item) => {
      const integrationTypesConfig = application.integrationTypesConfig;
      let oauth2InstallParams;
      if (integrationTypesConfig != null) {
        if (integrationTypesConfig[item.type] != null) {
          oauth2InstallParams = tmp3.oauth2InstallParams;
        }
      }
      return null != oauth2InstallParams;
    });
  }, items1);
  if (null != memo) {
    let obj2 = { style: tmp.appIcon, source: memo };
    tmp5 = closure_5(onSelect(memo1[10]), obj2);
    tmp6 = closure_5;
  } else {
    let tmp3 = closure_5;
    let obj = { style: items2 };
    items2 = [, ];
    ({ appIcon: arr4[0], loadingIcon: arr4[1] } = tmp);
    tmp5 = closure_5(closure_4, obj);
    tmp6 = closure_5;
  }
  const obj4 = { style: tmp.header, children: items3 };
  items3 = [, , ];
  const obj3 = { style: tmp.container, children: items4 };
  const obj5 = { style: tmp.appIconMask, children: tmp5 };
  items3[0] = tmp6(closure_4, obj5);
  const obj6 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: application.name };
  items3[1] = tmp6(application(memo1[11]).Text, obj6);
  let tmp6Result = null != application.description;
  const tmp12 = application;
  if (tmp6Result) {
    const obj8 = { hideName: true, application, viewContainerStyle: null, mainContainerStyle: null };
    ({ descriptionContainer: obj7.viewContainerStyle, descriptionMainContainer: obj7.mainContainerStyle } = tmp);
    tmp6Result = tmp6(onSelect(tmp13[12]), obj8);
  }
  items3[2] = tmp6Result;
  items4 = [closure_6(closure_4, obj4), ];
  const obj9 = { style: tmp.rows, children: tmp6(TableRowGroup, obj17) };
  obj17 = {
    hasIcons: true,
    children: memo1.map((icon, index) => {
      let tmpResult;
      const obj = {
        icon: closure_1_5(icon.icon, { color: "interactive-text-default" }),
        label: null,
        subLabel: null,
        onPress() {
          return onSelect(icon.type);
        },
        start: 0 === index,
        end: index === memo1.length - 1,
        arrow: true,
        trailing: tmpResult
      };
      const TableRow = application(memo1[14]).TableRow;
      ({ label: obj.label, subLabel: obj.subLabel } = icon);
      tmpResult = undefined;
      const tmp2 = application;
      const tmp3 = memo1;
      if (icon.beta) {
        tmpResult = tmp(tmp2(tmp3[15]).BetaTag, {});
      }
      return closure_1_5(TableRow, obj, icon.type);
    })
  };
  TableRowGroup = tmp12(tmp13[13]).TableRowGroup;
  items4[1] = tmp6(closure_4, obj9);
  return closure_6(closure_4, obj3);
};
export const useStyles = styles;
