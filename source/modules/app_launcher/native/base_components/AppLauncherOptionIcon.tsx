// Module ID: 11292
// Function ID: 87878
// Name: styles
// Dependencies: []
// Exports: default

// Module 11292 (styles)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { "Bool(false)": null, "Bool(false)": null, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE, borderRadius: importDefault(dependencyMap[4]).radii.round };
obj.iconWrapper = obj;
const styles = obj.createStyles(obj);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherOptionIcon.tsx");

export default function AppLauncherOptionIcon(wrapperSize) {
  let num = wrapperSize.wrapperSize;
  if (num === undefined) {
    num = 32;
  }
  let obj = {};
  const items = [styles().iconWrapper, wrapperSize.wrapperStyle, ];
  obj = { height: num, width: num };
  items[2] = obj;
  obj.style = items;
  obj.children = wrapperSize.icon;
  return <View {...obj} />;
};
export const useAppLauncherOptionIconStyles = styles;
