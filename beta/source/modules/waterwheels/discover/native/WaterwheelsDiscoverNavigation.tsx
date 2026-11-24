// Module ID: 17826
// Function ID: 17827
// Name: WaterwheelsDiscoverNavigation
// Dependencies: [4946, 1071, 10041, 17827, 6835, 2]
// Exports: leaveWaterwheelsDiscover, selectWaterwheelsDiscover, selectWaterwheelsDiscoverFromGuildsBar

// Module 17826 (WaterwheelsDiscoverNavigation)
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 10041 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 17827 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4946 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const transitionToGuild = tmp(6835);
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
