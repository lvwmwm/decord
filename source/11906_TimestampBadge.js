// Module ID: 11906
// Function ID: 92181
// Name: TimestampBadge
// Dependencies: []
// Exports: EpisodeBadge, PartyBadge, TimestampBadge

// Module 11906 (TimestampBadge)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const ActivityTypes = arg1(dependencyMap[2]).ActivityTypes;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).createStyles({ container: {}, bold: { fontWeight: "bold" } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/user_profile/native/UserProfileActivityBadges.tsx");

export const TimestampBadge = function TimestampBadge(activity) {
  activity = activity.activity;
  const tmp = callback3();
  let obj = arg1(dependencyMap[11]);
  const timestamps = activity.timestamps;
  let start;
  if (null != timestamps) {
    start = timestamps.start;
  }
  if (null == start) {
    start = activity.created_at;
  }
  if (null != start) {
    if (!importDefault(dependencyMap[12])(activity)) {
      const timestamps2 = activity.timestamps;
      let end;
      if (null != timestamps2) {
        end = timestamps2.end;
      }
      const timestamps3 = activity.timestamps;
      let isCountDown;
      if (null != timestamps3) {
        isCountDown = timestamps3.isCountDown;
      }
      let flag = tmp5;
      if (null != isCountDown && isCountDown) {
        flag = null != end;
      }
      if (flag) {
        flag = end > obj.useTimestampTickedNow().now;
      }
      if (flag === undefined) {
        flag = false;
      }
      if (flag) {
        let GameControllerIcon = arg1(dependencyMap[5]).HourglassIcon;
      } else if (importDefault(dependencyMap[6])(activity)) {
        GameControllerIcon = arg1(dependencyMap[7]).AppsIcon;
      } else if (activity.type === ActivityTypes.WATCHING) {
        GameControllerIcon = arg1(dependencyMap[8]).TvIcon;
      } else if (activity.type === ActivityTypes.LISTENING) {
        GameControllerIcon = arg1(dependencyMap[9]).MusicIcon;
      } else {
        GameControllerIcon = arg1(dependencyMap[10]).GameControllerIcon;
      }
      obj = { style: tmp.container };
      obj = { size: "xxs", color: importDefault(dependencyMap[13]).colors.TEXT_FEEDBACK_POSITIVE };
      const items = [callback(GameControllerIcon, obj), ];
      const obj1 = {};
      const obj2 = { start, end, isCountDown: null != isCountDown && isCountDown };
      obj1.entry = obj2;
      obj1.style = tmp.bold;
      items[1] = callback(arg1(dependencyMap[14]).ActiveTimestamp, obj1);
      obj.children = items;
      return callback2(View, obj);
    }
  }
  return null;
};
export const PartyBadge = function PartyBadge(activity) {
  activity = activity.activity;
  if (!importDefault(dependencyMap[6])(activity)) {
    if (null != activity.party) {
      const richGameStateBadgeText = arg1(dependencyMap[15]).getRichGameStateBadgeText(activity.state, activity.party);
      let tmp9 = null;
      if (null != richGameStateBadgeText) {
        let obj = { style: tmp.container };
        obj = { size: "xxs", color: importDefault(dependencyMap[13]).colors.TEXT_MUTED };
        const items = [callback(arg1(dependencyMap[16]).GroupIcon, obj), ];
        obj = { INTEGRATION_CREATE: "<string:3305963521>", ConstraintReasonCode: "<string:671547393>", children: richGameStateBadgeText };
        items[1] = callback(arg1(dependencyMap[17]).Text, obj);
        obj.children = items;
        tmp9 = callback2(View, obj);
      }
      return tmp9;
    }
  }
  return null;
};
export const EpisodeBadge = function EpisodeBadge(activity) {
  let obj = arg1(dependencyMap[15]);
  const assets = activity.activity.assets;
  let large_text;
  if (null != assets) {
    large_text = assets.large_text;
  }
  const episodeBadgeText = obj.getEpisodeBadgeText(large_text);
  let tmp4 = null;
  if (null != episodeBadgeText) {
    obj = { style: tmp.container };
    obj = { size: "xxs", color: importDefault(dependencyMap[13]).colors.TEXT_MUTED };
    const items = [callback(arg1(dependencyMap[18]).TopicsIcon, obj), ];
    const obj1 = { INTEGRATION_CREATE: "<string:3305963521>", ConstraintReasonCode: "<string:671547393>", children: episodeBadgeText };
    items[1] = callback(arg1(dependencyMap[17]).Text, obj1);
    obj.children = items;
    tmp4 = callback2(View, obj);
  }
  return tmp4;
};
