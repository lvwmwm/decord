// Module ID: 9066
// Function ID: 71131
// Name: PresenceActivityStatus
// Dependencies: []
// Exports: default

// Module 9066 (PresenceActivityStatus)
importAll(dependencyMap[0]);
const ActivityTypes = arg1(dependencyMap[1]).ActivityTypes;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/activity_status/native/PresenceActivityStatus.tsx");

export default function PresenceActivityStatus(hideText) {
  let activity;
  let hideIcon;
  let iconStyle;
  let maxFontSizeMultiplier;
  let textStyle;
  ({ activity, hideIcon } = hideText);
  ({ iconStyle, textStyle, maxFontSizeMultiplier } = hideText);
  if (hideIcon === undefined) {
    hideIcon = false;
  }
  let flag = hideText.hideText;
  if (flag === undefined) {
    flag = false;
  }
  if (hideIcon) {
    if (flag) {
      return null;
    }
  }
  if (importDefault(dependencyMap[3])(activity)) {
    let AppsIcon = arg1(dependencyMap[5]).AppsIcon;
  } else if (activity.type === ActivityTypes.PLAYING) {
    AppsIcon = arg1(dependencyMap[4]).GameControllerIcon;
  } else if (activity.type === ActivityTypes.LISTENING) {
    AppsIcon = arg1(dependencyMap[6]).MusicIcon;
  } else {
    if (activity.type !== ActivityTypes.WATCHING) {
      if (activity.type !== ActivityTypes.STREAMING) {
        AppsIcon = null;
        if (activity.type === ActivityTypes.COMPETING) {
          AppsIcon = arg1(dependencyMap[4]).GameControllerIcon;
        }
      }
    }
    AppsIcon = arg1(dependencyMap[7]).TvIcon;
  }
  let obj = {};
  let tmp18 = !hideIcon;
  if (tmp18) {
    tmp18 = null != AppsIcon;
  }
  if (tmp18) {
    obj = { icon: AppsIcon, style: iconStyle };
    tmp18 = callback(importDefault(dependencyMap[9]), obj);
  }
  const items = [tmp18, ];
  let tmp23 = !flag;
  if (tmp23) {
    obj = { style: textStyle, maxFontSizeMultiplier, children: importDefault(dependencyMap[8])(activity, true).text };
    tmp23 = callback(importDefault(dependencyMap[10]), obj);
  }
  items[1] = tmp23;
  obj.children = items;
  return closure_6(closure_5, obj);
};
