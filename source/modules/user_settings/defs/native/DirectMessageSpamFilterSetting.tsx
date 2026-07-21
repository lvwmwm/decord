// Module ID: 13618
// Function ID: 103188
// Name: radio
// Dependencies: []

// Module 13618 (radio)
let closure_2 = importAll(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.tiCXaH);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useOptions: function useDmSpamFilterSettingOptions() {
    return React.useMemo(() => {
      const dmSpamOptions = callback(closure_1[2]).generateDmSpamOptions();
      return dmSpamOptions.map((value) => ({ value: value.value, label: value.name, subLabel: value.desc }));
    }, []);
  },
  useValue: arg1(dependencyMap[6]).useDerivedDmSpamFilterSettingValue,
  onValueChange: function onDmSpamFilterSettingValueChange(arg0) {
    const DmSpamFilterV2 = arg1(dependencyMap[3]).DmSpamFilterV2;
    DmSpamFilterV2.updateSetting(Number(arg0));
  },
  useSearchTerms() {
    const intl = arg1(dependencyMap[5]).intl;
    const items = [intl.string(arg1(dependencyMap[5]).t.H9XOl3), ];
    const intl2 = arg1(dependencyMap[5]).intl;
    items[1] = intl2.string(arg1(dependencyMap[5]).t.k4W40P);
    return items;
  }
};
const radio = obj.createRadio(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSpamFilterSetting.tsx");

export default radio;
