// Module ID: 17696
// Function ID: 17697
// Name: WaterwheelsDiscoverNavigation
// Dependencies: [4827, 1071, 9921, 17697, 6716, 2]
// Exports: leaveWaterwheelsDiscover, selectWaterwheelsDiscover, selectWaterwheelsDiscoverFromGuildsBar

// Module 17696 (WaterwheelsDiscoverNavigation)
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 9921 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 17697 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4827 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const transitionToGuild = tmp(6716);
({ ME: closure_4, WATERWHEELS: hasOwnProperty } = Constants);
const WaterwheelsDiscoverNavigation = "WaterwheelsDiscoverNavigation";
const result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverNavigation.tsx");

export function selectWaterwheelsDiscoverFromGuildsBar() {
  const obj = WaterwheelsDiscoverExperiment;
  let flag = obj.getWaterwheelsDiscoverEnabled(WaterwheelsDiscoverNavigation);
  if (flag) {
    transitionGuildsBarToGuildOrOpenSelectedChannelDefault(hasOwnProperty);
    flag = true;
  }
  return flag;
}
export function selectWaterwheelsDiscover() {
  const obj = WaterwheelsDiscoverExperiment;
  if (obj.getWaterwheelsDiscoverEnabled(WaterwheelsDiscoverNavigation)) {
    const tmpResult = transitionToGuild;
    tmpResult.transitionToGuild(hasOwnProperty);
  }
}
export function leaveWaterwheelsDiscover() {
  if (SelectedGuildStore.getGuildId() === hasOwnProperty) {
    const obj = transitionToGuild;
    obj.transitionToGuild(React3);
  }
}
