// Module ID: 12168
// Function ID: 93593
// Name: createGroupDMInvite
// Dependencies: []
// Exports: createGroupDMInvite

// Module 12168 (createGroupDMInvite)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const InviteTypes = arg1(dependencyMap[3]).InviteTypes;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/GroupDMInvite.tsx");

export const createGroupDMInvite = function createGroupDMInvite(invite, arg1, theme) {
  let acceptLabelGreenBackgroundColor;
  let acceptLabelGreenColor;
  let baseColors;
  let channel;
  let colors;
  let recipients_;
  ({ colors, baseColors } = importDefault(dependencyMap[4])(theme));
  const tmp = importDefault(dependencyMap[4])(theme);
  ({ channel, recipients_ } = importDefault(dependencyMap[5])(invite));
  let id;
  if (null != channel) {
    id = channel.id;
  }
  channel = channel.getChannel(id);
  let flag = false;
  if (null != channel) {
    flag = true;
  }
  const intl = arg1(dependencyMap[6]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[6]).t;
  if (arg1) {
    let str = string(t.qmtuXE);
  } else {
    str = string(t.3p3/BK);
  }
  const intl2 = arg1(dependencyMap[6]).intl;
  const string2 = intl2.string;
  const t2 = arg1(dependencyMap[6]).t;
  if (flag) {
    string2(t2.cEnaWx);
  } else {
    string2(t2.XpeFYr);
  }
  let formatToPlainStringResult;
  if (recipients_.length > 0) {
    const intl3 = arg1(dependencyMap[6]).intl;
    let obj = { count: recipients_.length };
    formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[6]).t.zRl6XR, obj);
  }
  let channelIconSource = null;
  if (null != channel) {
    channelIconSource = arg1(dependencyMap[7]).getChannelIconSource(channel);
    const obj2 = arg1(dependencyMap[7]);
  }
  let uri = null;
  if (null != channelIconSource) {
    uri = arg1(dependencyMap[8]).ensureAvatarSource(channelIconSource).uri;
    const obj3 = arg1(dependencyMap[8]);
  }
  let channelName = null;
  if (flag) {
    channelName = null;
    if (null != channel) {
      channelName = arg1(dependencyMap[9]).computeChannelName(channel, closure_5, closure_4);
      const obj4 = arg1(dependencyMap[9]);
    }
  }
  if (!channelName) {
    const channel2 = invite.channel;
    let name;
    if (null != channel2) {
      name = channel2.name;
    }
    channelName = name;
  }
  if (!channelName) {
    const mapped = recipients_.map((username) => username.username);
    channelName = mapped.join(", ");
  }
  if (!channelName) {
    const intl4 = arg1(dependencyMap[6]).intl;
    channelName = intl4.string(arg1(dependencyMap[6]).t.LJpTRF);
  }
  if (flag) {
    ({ acceptLabelDisabledColor: acceptLabelGreenColor, acceptLabelDisabledBackgroundColor: acceptLabelGreenBackgroundColor } = colors);
    const intl6 = arg1(dependencyMap[6]).intl;
    let stringResult = intl6.string(arg1(dependencyMap[6]).t.cEnaWx);
  } else {
    ({ acceptLabelGreenColor, acceptLabelGreenBackgroundColor } = colors);
    const intl5 = arg1(dependencyMap[6]).intl;
    stringResult = intl5.string(arg1(dependencyMap[6]).t.XpeFYr);
  }
  obj = {};
  const merged = Object.assign(baseColors);
  let formatted;
  if (null != str) {
    formatted = str.toUpperCase();
  }
  obj["headerText"] = formatted;
  obj["headerColor"] = colors.headerColor;
  obj["acceptLabelText"] = stringResult;
  obj["onlineText"] = undefined;
  obj["memberText"] = formatToPlainStringResult;
  obj["channelIcon"] = undefined;
  obj["titleText"] = channelName;
  obj["titleColor"] = colors.titleColor;
  let tmp32;
  if (null != uri) {
    tmp32 = uri;
  }
  obj["thumbnailUrl"] = tmp32;
  obj["thumbnailText"] = undefined;
  obj["subtitle"] = "";
  obj["subtitleColor"] = undefined;
  obj["acceptLabelBackgroundColor"] = acceptLabelGreenBackgroundColor;
  obj["acceptLabelBorderColor"] = undefined;
  obj["acceptLabelColor"] = acceptLabelGreenColor;
  obj["embedCanBeTapped"] = true;
  obj["canBeAccepted"] = !flag;
  let channelName1 = channelName;
  if (flag) {
    channelName1 = channelName;
    if (null != channel) {
      channelName1 = arg1(dependencyMap[9]).computeChannelName(channel, closure_5, closure_4);
      const obj7 = arg1(dependencyMap[9]);
    }
  }
  obj["channelName"] = channelName1;
  let GROUP_DM = invite.type;
  if (null == GROUP_DM) {
    GROUP_DM = InviteTypes.GROUP_DM;
  }
  obj["type"] = GROUP_DM;
  return obj;
};
