// Module ID: 9000
// Function ID: 70838
// Name: styles
// Dependencies: []
// Exports: default

// Module 9000 (styles)
let StyleSheet;
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, StyleSheet } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: {}, header: {} };
obj = { alignSelf: "stretch", borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.rows = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.divider = { height: StyleSheet.hairlineWidth, backgroundColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth };
obj.learnMore = { marginVertical: 16 };
const obj1 = { height: StyleSheet.hairlineWidth, backgroundColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth };
obj.descriptionContainer = { backgroundColor: importDefault(dependencyMap[4]).colors.CARD_BACKGROUND_DEFAULT, width: "100%", borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.descriptionMainContainer = { padding: 8 };
const obj2 = { backgroundColor: importDefault(dependencyMap[4]).colors.CARD_BACKGROUND_DEFAULT, width: "100%", borderRadius: importDefault(dependencyMap[4]).radii.sm };
obj.expandDescriptionCTA = { backgroundColor: importDefault(dependencyMap[4]).colors.CARD_BACKGROUND_DEFAULT };
const obj4 = { <string:1632221346>: null, <string:2722977214>: "space-between", borderRadius: importDefault(dependencyMap[4]).radii.xl };
obj.appIcon = obj4;
const obj3 = { backgroundColor: importDefault(dependencyMap[4]).colors.CARD_BACKGROUND_DEFAULT };
obj.appIconMask = { padding: 4, borderRadius: importDefault(dependencyMap[4]).radii.xl + 4 };
const obj5 = { padding: 4, borderRadius: importDefault(dependencyMap[4]).radii.xl + 4 };
obj.loadingIcon = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_MUTED };
const styles = obj.createStyles(obj);
const obj6 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_MUTED };
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/oauth2/native/IntegrationTypeSelector.tsx");

export default function IntegrationTypeSelector(application) {
  application = application.application;
  const arg1 = application;
  const importDefault = application.onSelect;
  const tmp = styles();
  const items = [, ];
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
      const integrationTypesConfig = obj.integrationTypesConfig;
      let oauth2InstallParams;
      if (null != integrationTypesConfig) {
        if (null != integrationTypesConfig[arg0.type]) {
          oauth2InstallParams = tmp3.oauth2InstallParams;
        }
      }
      return null != oauth2InstallParams;
    });
  }, items1);
  const dependencyMap = memo1;
  if (null != memo) {
    let obj = { style: tmp.appIcon, source: memo };
    let tmp5 = callback(importDefault(dependencyMap[10]), obj);
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
  const items3 = [callback(closure_4, obj2), callback(arg1(dependencyMap[11]).Text, { children: application.name }), ];
  let tmp11 = null != application.description;
  if (tmp11) {
    const obj4 = { hideName: true, application };
    ({ descriptionContainer: obj7.viewContainerStyle, descriptionMainContainer: obj7.mainContainerStyle, expandDescriptionCTA: obj7.expandDescriptionCTAStyle } = tmp);
    tmp11 = callback(importDefault(dependencyMap[12]), obj4);
  }
  items3[2] = tmp11;
  obj1.children = items3;
  const items4 = [closure_6(closure_4, obj1), ];
  const obj5 = { style: tmp.rows };
  const obj6 = {
    hasIcons: true,
    children: memo1.map((icon) => {
      const application = icon;
      const obj = { icon: callback(icon.icon, { color: "interactive-text-default" }) };
      ({ label: obj.label, subLabel: obj.subLabel } = icon);
      obj.onPress = function onPress() {
        return callback(arg0.type);
      };
      obj.start = 0 === arg1;
      obj.end = arg1 === memo1.length - 1;
      obj.arrow = true;
      let tmp2;
      if (icon.beta) {
        tmp2 = callback(application(memo1[15]).BetaTag, {});
      }
      obj.trailing = tmp2;
      return callback(application(memo1[14]).TableRow, obj, icon.type);
    })
  };
  obj5.children = callback(arg1(dependencyMap[13]).TableRowGroup, obj6);
  items4[1] = callback(closure_4, obj5);
  obj.children = items4;
  return closure_6(closure_4, obj);
};
export const useStyles = styles;
