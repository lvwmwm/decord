// Module ID: 18042
// Function ID: 18043
// Name: WaterwheelsDiscoverNavigation
// Dependencies: [5076, 1071, 8922, 18043, 8601, 2]
// Exports: leaveWaterwheelsDiscover, selectWaterwheelsDiscover, selectWaterwheelsDiscoverFromGuildsBar

// Module 18042 (WaterwheelsDiscoverNavigation)
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 8922 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 18043 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5076 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const transitionToGuild = tmp(8601);
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
  let flag = obj.getWaterwheelsDiscoverEnabled(WaterwheelsDiscoverNavigation);
  if (flag) {
    const tmpResult = transitionToGuild;
    tmpResult.transitionToGuild(hasOwnProperty);
    flag = true;
  }
  return flag;
}
export function leaveWaterwheelsDiscover() {
  if (SelectedGuildStore.getGuildId() === hasOwnProperty) {
    const obj = transitionToGuild;
    obj.transitionToGuild(React3);
  }
}
