// Module ID: 14284
// Function ID: 107926
// Name: UserSettingsPushNotificationLogs
// Dependencies: []
// Exports: default

// Module 14284 (UserSettingsPushNotificationLogs)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.wrap = obj;
const tmp2 = arg1(dependencyMap[5]);
obj.list = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
const obj2 = { <string:3645437925>: "<string:1912603085>", <string:1554053987>: true, <string:1672411473>: true, padding: importDefault(dependencyMap[7]).space.PX_16 };
obj.searchWrap = obj2;
const obj1 = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
obj.shareButton = { backgroundColor: importDefault(dependencyMap[7]).colors.INPUT_BACKGROUND_DEFAULT, marginLeft: importDefault(dependencyMap[7]).space.PX_8, borderRadius: importDefault(dependencyMap[7]).radii.md, height: arg1(dependencyMap[8]).InputHeights.MD, width: arg1(dependencyMap[8]).InputHeights.MD, justifyContent: "center", alignItems: "center" };
const obj3 = { backgroundColor: importDefault(dependencyMap[7]).colors.INPUT_BACKGROUND_DEFAULT, marginLeft: importDefault(dependencyMap[7]).space.PX_8, borderRadius: importDefault(dependencyMap[7]).radii.md, height: arg1(dependencyMap[8]).InputHeights.MD, width: arg1(dependencyMap[8]).InputHeights.MD, justifyContent: "center", alignItems: "center" };
obj.log = { paddingBottom: importDefault(dependencyMap[7]).space.PX_16 };
obj.code = { fontFamily: arg1(dependencyMap[4]).Fonts.CODE_BOLD };
let closure_9 = obj.createStyles(obj);
const obj4 = { paddingBottom: importDefault(dependencyMap[7]).space.PX_16 };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsPushNotificationLogs.tsx");

export default function UserSettingsPushNotificationLogs() {
  let tmp7;
  const tmp2 = callback2(React.useState(() => {
    const Storage = first(closure_2[9]).Storage;
    let str = "";
    const value = Storage.get("push-notification-logs-query", "");
    if (null != value) {
      str = value;
    }
    return str;
  }), 2);
  const first = tmp2[0];
  const arg1 = first;
  const tmp4 = callback2(React.useState([]), 2);
  const first1 = tmp4[0];
  const importDefault = first1;
  let closure_2 = tmp4[1];
  [tmp7, closure_3] = callback2(React.useState([]), 2);
  const effect = React.useEffect(() => {
    function _load() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _load = obj;
      return obj(...arguments);
    }
    !function load() {
      return _load(...arguments);
    }();
  }, []);
  const items = [first1, first];
  const effect1 = React.useEffect(() => {
    if ("" !== callback) {
      const _setTimeout = setTimeout;
      const callback = setTimeout(() => {
        const regExp = new RegExp(callback, "i");
        const callback = regExp;
        callback2(closure_1.filter((type) => {
          let tmp = null != type.type.match(regExp);
          if (!tmp) {
            tmp = null != type.title.match(regExp);
            const str2 = type.title;
          }
          if (!tmp) {
            let match;
            if (null != type.content) {
              match = str3.match(regExp);
            }
            tmp = null != match;
          }
          return tmp;
        }));
        const Storage = callback(closure_2[9]).Storage;
        const result = Storage.set("push-notification-logs-query", callback);
      }, 300);
      return () => clearTimeout(closure_0);
    } else {
      callback2(first1);
      const Storage = callback(closure_2[9]).Storage;
      const result = Storage.set("push-notification-logs-query", callback);
    }
  }, items);
  const tmp10 = callback5();
  const callback2 = tmp10;
  let obj = { style: tmp10.wrap };
  obj = { style: tmp10.searchWrap };
  obj = { "Null": false, "Null": false, onChange: tmp2[1], defaultValue: first };
  const items1 = [callback3(arg1(closure_2[12]).SearchField, obj), ];
  const obj1 = { style: tmp10.shareButton };
  const intl = arg1(closure_2[14]).intl;
  obj1.accessibilityLabel = intl.string(arg1(closure_2[14]).t.leICvh);
  // CreateGeneratorClosureLongIndex (0x67)
  obj1.onPress = callback(tmp);
  obj1.children = callback3(arg1(closure_2[17]).ShareIcon, {});
  items1[1] = callback3(arg1(closure_2[13]).PressableOpacity, obj1);
  obj.children = items1;
  const items2 = [callback4(View, obj), ];
  const obj2 = {};
  const obj3 = {};
  const merged = Object.assign(tmp10.list);
  obj3["paddingBottom"] = importDefault(closure_2[11])().bottom + importDefault(closure_2[7]).space.PX_16;
  obj2.contentContainerStyle = obj3;
  obj2.data = tmp7;
  obj2.renderItem = function renderItem(item) {
    item = item.item;
    let str = "";
    if (item.silent) {
      str = "~silent~ ";
    }
    let obj = { style: tmp10.log };
    obj = { style: tmp10.code, variant: "text-xs/normal", children: new Date(item.receivedTimestamp).toISOString() };
    const items = [callback3(first(closure_2[19]).Text, obj), ];
    obj = { style: tmp10.code, variant: "text-sm/normal" };
    const items1 = [str, "[", item.type, "]", " "];
    const items2 = [callback4(first(closure_2[19]).Text, { style: tmp10.code, children: items1 }), item.title, " - ", item.content];
    obj.children = items2;
    items[1] = callback4(first(closure_2[19]).Text, obj);
    obj.children = items;
    return callback4(closure_6, obj, item.index);
  };
  items2[1] = callback3(arg1(closure_2[18]).FlashList, obj2);
  obj.children = items2;
  return callback4(View, obj);
};
