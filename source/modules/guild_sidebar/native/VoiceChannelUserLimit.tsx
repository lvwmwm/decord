// Module ID: 14857
// Function ID: 111958
// Dependencies: []

// Module 14857
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj1 = arg1(dependencyMap[3]);
let obj = {};
obj = { "Null": "r", "Null": "previewBadge", -9223372036854775808: "GUILD_STAGE_VOICE", tintColor: importDefault(dependencyMap[4]).colors.VOICE_CHANNEL_USER_LIMIT_ICON };
obj.videoIcon = obj;
obj1 = { "Bool(false)": "M104.474 96.4733C104.962 98.219 108.357 99.0802 111.123 98.0096L114.192 88.8389L106.357 89.2811L104.474 96.4733Z", "Bool(false)": "#CF1581", "Bool(false)": "M127.491 97.195L125.422 89.2812L115.75 88.7458C115.75 88.7458 117.052 92.726 118.866 98.1493C121.098 99.9183 126.189 98.2191 127.491 97.195Z", "Bool(false)": "#CF1581", "Bool(false)": "M48.7903 25.0864C48.7903 25.0864 59.3458 29.6252 68.1808 25.9942C70.5988 25.0166 72.668 27.9726 70.9243 29.8813C69.1805 31.7899 66.1115 33.745 61.7638 34.0244L48.7903 25.0864Z", "Bool(false)": "#3442D7", "Bool(false)": "M84.9905 28.4613C76.5042 31.8829 61.1592 34.257 52.8125 27.2277C36.677 13.6113 5.98698 22.6657 8.98623 48.8976C11.9855 75.1294 44.303 73.1277 44.303 73.1277L62.1357 56.1363C52.8125 57.8355 35.654 38.0743 56.207 42.52C76.2252 46.8725 84.6882 38.5863 88.199 32.0225C89.3382 29.9044 87.1992 27.5769 84.9905 28.4613Z", backgroundColor: importDefault(dependencyMap[4]).colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND, borderWidth: importDefault(dependencyMap[4]).modules.mobile.VOICE_CHANNEL_USER_LIMIT_BORDER_WIDTH, borderColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
obj.wrapper = obj1;
const tmp2 = arg1(dependencyMap[2]);
obj.left = { backgroundColor: importDefault(dependencyMap[4]).colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND };
const obj3 = { CATEGORIES_FETCH_STARTED: null, man_mage: null, enableLogs: null, SAFETY_CENTER: null, 0: null, 9223372036854775807: null, -9223372036854775808: null, borderRightColor: importDefault(dependencyMap[4]).colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND };
obj.mid = obj3;
const obj4 = { display: "isArray", flexDirection: "y", alignItems: "title", marginBottom: "r", gap: "isArray", variant: "LIGHT", backgroundColor: importDefault(dependencyMap[4]).colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND };
obj.right = obj4;
let closure_6 = obj1.createStyles(obj);
const obj2 = { backgroundColor: importDefault(dependencyMap[4]).colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND };
const memoResult = importAllResult.memo(function VoiceChannelUserLimit(videoLimit) {
  let total;
  let users;
  ({ users, total } = videoLimit);
  const rect = callback2();
  let obj = { style: rect.wrapper };
  obj = { style: rect.left };
  let tmp3 = null;
  if (videoLimit.videoLimit) {
    obj = { source: importDefault(dependencyMap[6]), size: arg1(dependencyMap[5]).Icon.Sizes.REFRESH_SMALL_16, style: rect.videoIcon };
    tmp3 = callback(arg1(dependencyMap[5]).Icon, obj);
  }
  const items = [tmp3, ];
  const obj1 = { -1405509148: -2817, -1376015004: 12799, 1209511425: 0, children: users.toString().padStart(2, "0") };
  items[1] = callback(arg1(dependencyMap[7]).Text, obj1);
  obj.children = items;
  const items1 = [closure_5(View, obj), callback(View, { style: rect.mid }), ];
  const obj3 = { style: rect.right };
  const obj4 = { -1405509148: -2817, -1376015004: 12799, 1209511425: 0 };
  const obj2 = { style: rect.mid };
  const str = users.toString();
  obj4.children = total.toString().padStart(2, "0");
  obj3.children = callback(arg1(dependencyMap[7]).Text, obj4);
  items1[2] = callback(View, obj3);
  obj.children = items1;
  return closure_5(View, obj);
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_sidebar/native/VoiceChannelUserLimit.tsx");

export default memoResult;
