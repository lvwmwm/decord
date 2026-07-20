// Module ID: 14839
// Function ID: 111857
// Dependencies: []

// Module 14839
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj1 = arg1(dependencyMap[3]);
let obj = {};
obj = { "Null": "tax", "Null": "MUR", "Null": "useApplicationCommandOptionValueParser", tintColor: importDefault(dependencyMap[4]).colors.VOICE_CHANNEL_USER_LIMIT_ICON };
obj.videoIcon = obj;
obj1 = { label: null, variant: null, arrow: null, icon: null, positionBottom: null, positionRight: null, text: null, backgroundColor: importDefault(dependencyMap[4]).colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND, borderWidth: importDefault(dependencyMap[4]).modules.mobile.VOICE_CHANNEL_USER_LIMIT_BORDER_WIDTH, borderColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
obj.wrapper = obj1;
const obj2 = { 9223372036854775807: "num_chars", 9223372036854775807: "tr", -208593673: "MUR", 0: "white", 0: "SWITCH_BACKGROUND_SELECTED_DEFAULT", backgroundColor: importDefault(dependencyMap[4]).colors.VOICE_CHANNEL_USER_LIMIT_BACKGROUND };
obj.left = obj2;
const obj3 = { paddingLeft: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000033766247659931817, paddingRight: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003404702802047, paddingTop: 0.00000000000000000000000000000000000000000000000000000000000000000000000138657248571572, id: 0.8, hideMutedChannels: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021729236910166, favoritesSectionNumber: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007644661507385791, recentsSectionNumber: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000360075638569518, borderRightColor: importDefault(dependencyMap[4]).colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND };
obj.mid = obj3;
const obj4 = { "Bool(false)": "M111.031 63.6776C111.031 63.0181 111.559 62.4833 112.212 62.4833H137.017C137.67 62.4833 138.198 63.0181 138.198 63.6776C138.198 64.3369 137.67 64.8717 137.017 64.8717H112.212C111.559 64.8717 111.031 64.3369 111.031 63.6776Z", "Bool(false)": "white", "Bool(false)": "M99.2224 90.9774C103.136 90.9774 106.31 87.7696 106.31 83.8127C106.31 79.8558 103.136 76.6481 99.2224 76.6481C95.3082 76.6481 92.1351 79.8558 92.1351 83.8127C92.1351 87.7696 95.3082 90.9774 99.2224 90.9774Z", "Bool(false)": "white", "Bool(false)": "M143.514 78.8689H112.802C111.824 78.8689 111.031 79.671 111.031 80.6601C111.031 81.6493 111.824 82.4514 112.802 82.4514H143.514C144.492 82.4514 145.286 81.6493 145.286 80.6601C145.286 79.671 144.492 78.8689 143.514 78.8689Z", "Bool(false)": "white", backgroundColor: importDefault(dependencyMap[4]).colors.VOICE_CHANNEL_USER_LIMIT_ACCENT_BACKGROUND };
obj.right = obj4;
let closure_6 = obj1.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
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
  const obj1 = { children: users.toString().padStart(2, "0") };
  items[1] = callback(arg1(dependencyMap[7]).Text, obj1);
  obj.children = items;
  const items1 = [closure_5(View, obj), callback(View, { style: rect.mid }), ];
  const obj3 = { style: rect.right };
  const obj4 = {};
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
