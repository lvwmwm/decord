// Module ID: 12045
// Function ID: 93031
// Name: onCopy
// Dependencies: []
// Exports: default

// Module 12045 (onCopy)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: { padding: 16 }, emptyStateContainer: {}, emptyStateArt: { marginBottom: 16 }, emptyStateTitle: { marginBottom: 4 }, linkContainer: {}, inviteInput: { flexShrink: 1 }, expireCaption: { marginBottom: 16 } };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[5]).radii.xs };
obj.settingsButton = obj;
let closure_7 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/instant_invite/native/components/InstantInviteEmptyState.tsx");

export default function _default(link) {
  let onCopy;
  let onPressSettings;
  let onShare;
  link = link.link;
  ({ onCopy, onShare, onPressSettings } = link);
  const tmp = callback3();
  let obj = callback(dependencyMap[6]);
  const items = [closure_4];
  const callback = obj.useStateFromStores(items, () => inviteSettings.getInviteSettings());
  obj = { style: tmp.container };
  obj = { containerStyle: tmp.emptyStateContainer, imageStyle: tmp.emptyStateArt, titleStyle: tmp.emptyStateTitle, source: importDefault(dependencyMap[8]) };
  const intl = callback(dependencyMap[9]).intl;
  obj.title = intl.string(callback(dependencyMap[9]).t.tQc0l8);
  const intl2 = callback(dependencyMap[9]).intl;
  obj.body = intl2.string(callback(dependencyMap[9]).t.DXgdcD);
  const items1 = [callback2(callback(dependencyMap[7]).RefreshEmptyState, obj), , , ];
  const obj1 = { style: tmp.linkContainer };
  const obj2 = { "Bool(false)": 1, "Bool(false)": 2, "Bool(false)": "OPACITY_WHITE_76", "Bool(false)": 0.76, "Bool(false)": "#6C77F8", "Bool(false)": "OPACITY_BLACK_76", onPress: onCopy };
  let str = "";
  if (null != link) {
    str = link;
  }
  obj2.value = str;
  obj2.style = tmp.inviteInput;
  obj2.clearButtonVisibility = callback(dependencyMap[7]).ClearButtonVisibility.NEVER;
  const items2 = [callback2(importDefault(dependencyMap[10]), obj2), ];
  const obj3 = {};
  const intl3 = callback(dependencyMap[9]).intl;
  obj3.accessibilityLabel = intl3.string(callback(dependencyMap[9]).t.3D5yo/);
  obj3.accessibilityRole = "button";
  obj3.onPress = onPressSettings;
  obj3.style = tmp.settingsButton;
  obj3.children = callback2(callback(dependencyMap[12]).SettingsIcon, {});
  items2[1] = callback2(callback(dependencyMap[11]).PressableOpacity, obj3);
  obj1.children = items2;
  items1[1] = closure_6(View, obj1);
  const obj4 = {
    style: tmp.expireCaption,
    children: () => {
      if (null == lib) {
        return null;
      } else {
        const maxAgeOptionByValue = callback(closure_2[14]).getMaxAgeOptionByValue(lib.maxAge);
        let str2 = "";
        let str = "";
        if (null != maxAgeOptionByValue) {
          const descriptiveLabel = maxAgeOptionByValue.descriptiveLabel;
          let tmp = str2;
          if (null != descriptiveLabel) {
            tmp = descriptiveLabel;
          }
          str = tmp;
        }
        const getMaxUsesOptions = callback(closure_2[14]).getMaxUsesOptions;
        const found = getMaxUsesOptions.find((value) => value.value === maxUses.maxUses);
        if (null != found) {
          str2 = found.descriptiveLabel;
        }
        if (0 === lib.maxAge) {
          let dqPWMN = lib(closure_2[9]).t.99ISmn;
        } else {
          dqPWMN = lib(closure_2[9]).t.dqPWMN;
        }
        const intl = lib(closure_2[9]).intl;
        const obj = { maxAge: str, maxUses: str2 };
        return intl.format(dqPWMN, obj);
      }
    }()
  };
  items1[2] = callback2(callback(dependencyMap[13]).Text, obj4);
  const obj5 = {};
  const intl4 = callback(dependencyMap[9]).intl;
  obj5.text = intl4.string(callback(dependencyMap[9]).t.Ej3B3Y);
  obj5.onPress = onShare;
  items1[3] = callback2(callback(dependencyMap[15]).Button, obj5);
  obj.children = items1;
  return closure_6(View, obj);
};
