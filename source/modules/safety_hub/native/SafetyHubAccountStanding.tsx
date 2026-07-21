// Module ID: 13533
// Function ID: 102657
// Name: items
// Dependencies: []
// Exports: default

// Module 13533 (items)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const SafetyHubLinks = arg1(dependencyMap[5]).SafetyHubLinks;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
let obj = { [arg1(dependencyMap[7]).AccountStandingState.ALL_GOOD]: { left: "0%" } };
obj = { left: "25%" };
obj = { translateX: -0.5 * arg1(dependencyMap[8]).SUBWAY_MARKER_WIDTH };
const items = [obj];
obj.transform = items;
obj[arg1(dependencyMap[7]).AccountStandingState.LIMITED] = obj;
const obj1 = { left: "50%" };
const obj2 = { translateX: -0.5 * arg1(dependencyMap[8]).SUBWAY_MARKER_WIDTH };
const items1 = [obj2];
obj1.transform = items1;
obj[arg1(dependencyMap[7]).AccountStandingState.VERY_LIMITED] = obj1;
const obj3 = { left: "75%" };
const obj4 = { translateX: -0.5 * arg1(dependencyMap[8]).SUBWAY_MARKER_WIDTH };
const items2 = [obj4];
obj3.transform = items2;
obj[arg1(dependencyMap[7]).AccountStandingState.AT_RISK] = obj3;
const obj5 = { left: "100%" };
const obj6 = { translateX: -arg1(dependencyMap[8]).SUBWAY_MARKER_WIDTH };
const items3 = [obj6];
obj5.transform = items3;
obj[arg1(dependencyMap[7]).AccountStandingState.SUSPENDED] = obj5;
let obj9 = arg1(dependencyMap[9]);
const obj7 = {};
const tmp2 = arg1(dependencyMap[6]);
obj7.container = { backgroundColor: importDefault(dependencyMap[10]).colors.CARD_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[10]).radii.md };
obj9 = { padding: importDefault(dependencyMap[10]).space.PX_4, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_STRONG, borderRadius: importDefault(dependencyMap[10]).radii.round };
obj7.avatarBackground = obj9;
const obj8 = { backgroundColor: importDefault(dependencyMap[10]).colors.CARD_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[10]).radii.md };
obj7.good = { color: importDefault(dependencyMap[10]).colors.STATUS_POSITIVE };
const obj10 = { color: importDefault(dependencyMap[10]).colors.STATUS_POSITIVE };
obj7.limited = { color: importDefault(dependencyMap[10]).colors.STATUS_WARNING };
obj7.veryLimited = { color: "#FF7A00" };
const obj11 = { color: importDefault(dependencyMap[10]).colors.STATUS_WARNING };
obj7.atRisk = { color: importDefault(dependencyMap[10]).colors.ICON_FEEDBACK_CRITICAL };
const obj12 = { color: importDefault(dependencyMap[10]).colors.ICON_FEEDBACK_CRITICAL };
obj7.suspended = { color: importDefault(dependencyMap[10]).colors.ICON_FEEDBACK_CRITICAL };
obj7.body = { alignItems: false, justifyContent: false, text: false };
const obj13 = { color: importDefault(dependencyMap[10]).colors.ICON_FEEDBACK_CRITICAL };
obj7.bodyText = { rowGap: importDefault(dependencyMap[10]).space.PX_8 };
obj7.health = {};
const obj14 = { rowGap: importDefault(dependencyMap[10]).space.PX_8 };
obj7.line = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWEST };
obj7.subwayMarker = { position: "absolute" };
const obj15 = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWEST };
obj7.icon = { borderRadius: importDefault(dependencyMap[10]).radii.round, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_SURFACE_HIGH };
let closure_12 = obj9.createStyles(obj7);
const obj16 = { borderRadius: importDefault(dependencyMap[10]).radii.round, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_SURFACE_HIGH };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/safety_hub/native/SafetyHubAccountStanding.tsx");

export default function SafetyHubAccountStanding() {
  let description;
  let title;
  const accountStanding = accountStanding.getAccountStanding();
  const arg1 = accountStanding;
  const tmp2 = callback(React.useState(0), 2);
  const first = tmp2[0];
  const importDefault = first;
  let closure_2 = tmp2[1];
  const tmp4 = callback4();
  const callback = tmp4;
  const items = [tmp4];
  const memo = React.useMemo(() => {
    let obj = {};
    obj = { title: accountStanding(closure_2[11]).t.uaKrRi };
    const intl = accountStanding(closure_2[11]).intl;
    obj = { termsOfService: constants.TOS_LINK, communityGuidelines: constants.COMMUNITY_GUIDELINES };
    obj.description = intl.format(accountStanding(closure_2[11]).t.pEdBD4, obj);
    obj.status = accountStanding(closure_2[11]).t./Idfao;
    obj.style = tmp4.good;
    obj.CustomIcon = accountStanding(closure_2[12]).CircleCheckIcon;
    obj[accountStanding(closure_2[7]).AccountStandingState.ALL_GOOD] = obj;
    const obj1 = { title: accountStanding(closure_2[11]).t.epkcmS };
    const intl2 = accountStanding(closure_2[11]).intl;
    obj1.description = intl2.string(accountStanding(closure_2[11]).t.774juc);
    obj1.status = accountStanding(closure_2[11]).t.umleq4;
    obj1.style = tmp4.limited;
    obj1.CustomIcon = accountStanding(closure_2[13]).CircleErrorIcon;
    obj1.iconSource = first(closure_2[14]);
    obj[accountStanding(closure_2[7]).AccountStandingState.LIMITED] = obj1;
    const obj2 = { title: accountStanding(closure_2[11]).t.crzE2X };
    const intl3 = accountStanding(closure_2[11]).intl;
    obj2.description = intl3.string(accountStanding(closure_2[11]).t.T/Ufh9);
    obj2.status = accountStanding(closure_2[11]).t.WBtMHf;
    obj2.style = tmp4.veryLimited;
    obj2.CustomIcon = accountStanding(closure_2[13]).CircleErrorIcon;
    obj2.iconSource = first(closure_2[14]);
    obj[accountStanding(closure_2[7]).AccountStandingState.VERY_LIMITED] = obj2;
    const obj3 = { title: accountStanding(closure_2[11]).t.XRNVzO };
    const intl4 = accountStanding(closure_2[11]).intl;
    obj3.description = intl4.string(accountStanding(closure_2[11]).t.hbH+9S);
    obj3.status = accountStanding(closure_2[11]).t.7f+4Lg;
    obj3.style = tmp4.atRisk;
    obj3.CustomIcon = accountStanding(closure_2[13]).CircleErrorIcon;
    obj3.iconSource = first(closure_2[14]);
    obj[accountStanding(closure_2[7]).AccountStandingState.AT_RISK] = obj3;
    const obj4 = { title: accountStanding(closure_2[11]).t.MExFkz };
    const intl5 = accountStanding(closure_2[11]).intl;
    obj4.description = intl5.string(accountStanding(closure_2[11]).t.2liUvt);
    obj4.status = accountStanding(closure_2[11]).t.0OONGB;
    obj4.style = tmp4.suspended;
    obj4.CustomIcon = accountStanding(closure_2[15]).CircleXIcon;
    obj4.iconSource = first(closure_2[16]);
    obj[accountStanding(closure_2[7]).AccountStandingState.SUSPENDED] = obj4;
    return obj;
  }, items);
  const React = memo;
  const items1 = [accountStanding, memo, first, tmp4];
  const memo1 = React.useMemo(() => {
    const entries = Object.entries(memo);
    return entries.map((arg0, index) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const parsed = parseInt(tmp);
      let obj = { style: items };
      const items = [closure_3.subwayMarker, closure_11[parsed]];
      obj = {};
      obj = {};
      const obj1 = {};
      const merged = Object.assign(closure_3.icon);
      obj1["width"] = 20;
      obj1["height"] = 20;
      obj.style = obj1;
      obj.color = tmp2.style.color;
      obj.selectedIcon = callback2(tmp2.CustomIcon, obj);
      ({ style: obj2.style, status: obj2.status } = tmp2);
      obj.isSelected = parsed === state.state;
      obj.index = index;
      obj.onLayout = function onLayout(nativeEvent) {
        if (nativeEvent.nativeEvent.layout.height > closure_1) {
          callback(nativeEvent.nativeEvent.layout.height);
        }
      };
      obj.size = 20;
      obj.numOptions = Object.keys(closure_4).length;
      obj.children = callback2(callback(closure_2[8]), obj, index);
      return callback2(closure_5, obj, index);
    });
  }, items1);
  let obj = arg1(closure_2[17]);
  const items2 = [closure_6];
  const stateFromStores = obj.useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (null != stateFromStores) {
    let obj1 = importDefault(closure_2[18]);
    let userAvatarSource = obj1.getUserAvatarSource(stateFromStores);
  } else {
    userAvatarSource = importDefault(closure_2[19]);
  }
  const View = tmp13.style;
  obj = { style: items3 };
  const items3 = [tmp4.container];
  obj = { style: tmp4.avatarBackground };
  ({ title, description } = memo[accountStanding.state]);
  obj1 = { source: userAvatarSource, size: arg1(closure_2[20]).AvatarSizes.XXLARGE };
  let username;
  if (null != stateFromStores) {
    username = stateFromStores.username;
  }
  let str = "";
  if (null != username) {
    str = username;
  }
  obj1.aria-label = str;
  obj.children = callback2(arg1(closure_2[20]).Avatar, obj1);
  const items4 = [callback2(View, obj), ];
  const obj2 = { style: tmp4.body };
  const obj3 = { style: tmp4.bodyText };
  const obj4 = { style: { textAlign: "center" } };
  const intl = arg1(closure_2[11]).intl;
  obj4.children = intl.format(title, {
    hook(children) {
      return callback(accountStanding(closure_2[21]).Text, { style, variant: "heading-lg/bold", children }, arg1);
    }
  });
  const items5 = [callback2(arg1(closure_2[21]).Text, obj4), callback2(arg1(closure_2[21]).Text, { style: { textAlign: "center" }, children: description })];
  obj3.children = items5;
  const items6 = [callback3(View, obj3), ];
  const obj6 = { style: items7 };
  const items7 = [tmp4.health, { height: first }];
  const items8 = [callback2(View, { style: tmp4.line }), memo1];
  obj6.children = items8;
  items6[1] = callback3(View, obj6);
  obj2.children = items6;
  items4[1] = callback3(View, obj2);
  obj.children = items4;
  return callback3(View, obj);
};
