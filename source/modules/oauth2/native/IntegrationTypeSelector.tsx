// Module ID: 9047
// Function ID: 71118
// Name: styles
// Dependencies: [31, 27, 33, 4130, 689, 1392, 8224, 4068, 1212, 9048, 5085, 4126, 9050, 5501, 5165, 1273, 2]
// Exports: default

// Module 9047 (styles)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { alignItems: "center", flexDirection: "column" }, header: { justifyContent: "center", alignItems: "center", gap: 16, marginTop: 24, marginBottom: 32, width: "100%" } };
_createForOfIteratorHelperLoose = { alignSelf: "stretch", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.rows = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.divider = { height: StyleSheet.hairlineWidth, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth };
_createForOfIteratorHelperLoose.learnMore = { marginVertical: 16 };
let obj1 = { height: StyleSheet.hairlineWidth, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth };
_createForOfIteratorHelperLoose.descriptionContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT, width: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.descriptionMainContainer = { padding: 8 };
let obj3 = { height: 82, width: 82, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl };
_createForOfIteratorHelperLoose.appIcon = obj3;
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT, width: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.appIconMask = { padding: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl + 4 };
let obj4 = { padding: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl + 4 };
_createForOfIteratorHelperLoose.loadingIcon = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
const result = require("jsxProd").fileFinishedImporting("modules/oauth2/native/IntegrationTypeSelector.tsx");

export default function IntegrationTypeSelector(application) {
  application = application.application;
  const onSelect = application.onSelect;
  const tmp = _createForOfIteratorHelperLoose();
  let items = [, ];
  ({ icon: arr[0], id: arr[1] } = application);
  const memo = React.useMemo(() => {
    let obj = onSelect(memo1[5]);
    obj = { id: application.id, icon: application.icon };
    return obj.getApplicationIconSource(obj);
  }, items);
  const items1 = [application.integrationTypesConfig];
  const memo1 = React.useMemo(() => {
    let obj = { type: application(memo1[6]).ApplicationIntegrationType.USER_INSTALL, icon: application(memo1[7]).UserPlusIcon };
    const intl = application(memo1[8]).intl;
    obj.label = intl.string(application(memo1[8]).t.aCg60P);
    const intl2 = application(memo1[8]).intl;
    obj.subLabel = intl2.string(application(memo1[8]).t.YeiIUZ);
    obj.beta = false;
    const items = [obj, ];
    obj = { type: application(memo1[6]).ApplicationIntegrationType.GUILD_INSTALL, icon: application(memo1[9]).ServerIcon };
    const intl3 = application(memo1[8]).intl;
    obj.label = intl3.string(application(memo1[8]).t.E64YCz);
    const intl4 = application(memo1[8]).intl;
    obj.subLabel = intl4.string(application(memo1[8]).t.bbtoKm);
    obj.beta = false;
    items[1] = obj;
    return items.filter((arg0) => {
      const integrationTypesConfig = outer1_0.integrationTypesConfig;
      let oauth2InstallParams;
      if (null != integrationTypesConfig) {
        if (null != integrationTypesConfig[arg0.type]) {
          oauth2InstallParams = tmp3.oauth2InstallParams;
        }
      }
      return null != oauth2InstallParams;
    });
  }, items1);
  if (null != memo) {
    let obj = { style: tmp.appIcon, source: memo };
    let tmp5 = callback(onSelect(memo1[10]), obj);
  } else {
    obj = {};
    const items2 = [, ];
    ({ appIcon: arr4[0], loadingIcon: arr4[1] } = tmp);
    obj.style = items2;
    tmp5 = callback(closure_4, obj);
  }
  obj = { style: tmp.container };
  const obj1 = { style: tmp.header };
  const obj2 = { style: tmp.appIconMask, children: tmp5 };
  const items3 = [callback(closure_4, obj2), , ];
  const obj3 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: application.name };
  items3[1] = callback(application(memo1[11]).Text, obj3);
  let tmp11 = null != application.description;
  if (tmp11) {
    const obj4 = { hideName: true, application };
    ({ descriptionContainer: obj7.viewContainerStyle, descriptionMainContainer: obj7.mainContainerStyle } = tmp);
    tmp11 = callback(onSelect(memo1[12]), obj4);
  }
  items3[2] = tmp11;
  obj1.children = items3;
  const items4 = [closure_6(closure_4, obj1), ];
  const obj5 = { style: tmp.rows };
  const obj6 = {
    hasIcons: true,
    children: memo1.map((icon) => {
      let closure_0 = icon;
      const obj = { icon: outer1_5(icon.icon, { color: "interactive-text-default" }) };
      ({ label: obj.label, subLabel: obj.subLabel } = icon);
      obj.onPress = function onPress() {
        return outer1_1(icon.type);
      };
      obj.start = 0 === arg1;
      obj.end = arg1 === memo1.length - 1;
      obj.arrow = true;
      let tmp2;
      if (icon.beta) {
        tmp2 = outer1_5(application(memo1[15]).BetaTag, {});
      }
      obj.trailing = tmp2;
      return outer1_5(application(memo1[14]).TableRow, obj, icon.type);
    })
  };
  obj5.children = callback(application(memo1[13]).TableRowGroup, obj6);
  items4[1] = callback(closure_4, obj5);
  obj.children = items4;
  return closure_6(closure_4, obj);
};
export const useStyles = _createForOfIteratorHelperLoose;
