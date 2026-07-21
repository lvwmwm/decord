// Module ID: 12848
// Function ID: 98191
// Name: ReportModal
// Dependencies: []
// Exports: default

// Module 12848 (ReportModal)
function ReportModal(onSubmit) {
  ({ raidTypes: closure_0, onChange: closure_1 } = onSubmit);
  const tmp = callback4();
  const dependencyMap = tmp;
  const items = [tmp];
  let closure_3 = React.useCallback((arg0) => {
    const obj = { "Null": "<string:1340029796>", "Null": "<string:1072076685>", "Null": "<string:16825665>", style: tmp.formRow, children: callback4(arg0) };
    return callback5(callback(tmp[8]).Text, obj);
  }, items);
  let obj = { style: tmp.container };
  const callback = React.useCallback(() => {
    callback2(tmp[9]).openURL(closure_6);
  }, []);
  obj = { style: tmp.headerSubtitle };
  const intl = arg1(dependencyMap[11]).intl;
  obj.children = intl.format(arg1(dependencyMap[11]).t.Hg8Ee7, { onClick: callback });
  const items1 = [callback2(arg1(dependencyMap[10]).TextWithIOSLinkWorkaround, obj), , ];
  obj = { style: tmp.formBody };
  const obj1 = {
    hasIcons: false,
    children: closure_8.map((arg0, arg1) => {
      const obj = {
        start: 0 === arg1,
        end: arg1 === length.length - 1,
        label: callback3(arg0),
        checked: arg0.includes(arg0),
        onPress() {
          return callback(arg0);
        }
      };
      return callback5(arg0(tmp[13]).TableCheckboxRow, obj, arg0);
    })
  };
  obj.children = callback2(arg1(dependencyMap[12]).TableRowGroup, obj1);
  items1[1] = callback2(View, obj);
  const obj2 = { style: items2 };
  const items2 = [tmp.submitButtonContainer, { paddingBottom: importDefault(dependencyMap[7])().bottom + 16 }];
  const obj4 = { size: "md" };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj4.text = intl2.string(arg1(dependencyMap[11]).t.geKm7t);
  obj4.onPress = onSubmit.onSubmit;
  obj2.children = callback2(arg1(dependencyMap[14]).Button, obj4);
  items1[2] = callback2(View, obj2);
  obj.children = items1;
  return callback3(View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ COMMUNITY_PORTAL_SERVER_SAFETY_PAGE: closure_6, getReportRaidTypeLabel: closure_7, REPORT_RAID_OPTIONS: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.headerSubtitle = { "Bool(true)": "absolute", "Bool(true)": 0 };
obj.formBody = { marginTop: 24 };
obj.formRow = { paddingVertical: 2 };
const tmp3 = arg1(dependencyMap[4]);
obj.submitButtonContainer = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
let closure_11 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/guild_antiraid/native/GuildAntiRaidReportModal.tsx");

export default function GuildAntiRaidReportModal(onCloseModal) {
  onCloseModal = onCloseModal.onCloseModal;
  const arg1 = onCloseModal;
  const guildId = onCloseModal.guildId;
  const importDefault = guildId;
  const tmp = callback(React.useState([]), 2);
  const first = tmp[0];
  const dependencyMap = first;
  const callback = tmp[1];
  const items = [onCloseModal, first, guildId];
  const screens = React.useMemo(() => function getScreens(onCloseModal) {
    ({ raidTypes: closure_0, onChange: closure_1, onSubmit: closure_2 } = onCloseModal);
    let obj = {};
    obj = { ignoreKeyboard: true };
    const intl = callback(closure_2[11]).intl;
    obj.title = intl.string(callback(closure_2[11]).t.uYPGsS);
    obj.headerLeft = callback(closure_2[15]).getHeaderCloseButton(onCloseModal.onCloseModal);
    obj.render = function render() {
      return callback(closure_12, { raidTypes: closure_0, onChange: closure_1, onSubmit: closure_2 });
    };
    obj["REPORT_RAID"] = obj;
    return obj;
  }({
    onCloseModal,
    raidTypes: first,
    onChange(arg0) {
      callback2((arr) => {
        if (arr.includes(arr)) {
          let found = arr.filter((arg0) => arg0 !== closure_0);
        } else {
          found = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(arr, 0);
          found[arraySpreadResult] = arr;
          const sum = arraySpreadResult + 1;
        }
        return found;
      });
    },
    onSubmit() {
      const result = callback(closure_2[16]).trackReportRaidViewed(closure_1, closure_2);
      const obj = callback(closure_2[16]);
      callback(closure_2[16]).handleReportRaid(closure_1);
      callback();
    }
  }), items);
  return callback2(arg1(dependencyMap[17]).Navigator, { screens, initialRouteName: "REPORT_RAID", headerStatusBarHeight: importDefault(dependencyMap[7])().top });
};
