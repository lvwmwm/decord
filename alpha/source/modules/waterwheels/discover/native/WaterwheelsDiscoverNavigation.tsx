// Module ID: 18892
// Function ID: 18893
// Name: WaterwheelsDiscoverNavigation
// Dependencies: [5286, 1072, 10147, 18893, 7168, 2]
// Exports: leaveWaterwheelsDiscover, selectWaterwheelsDiscover, selectWaterwheelsDiscoverFromGuildsBar

// Module 18892 (WaterwheelsDiscoverNavigation)
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 10147 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 18893 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5286 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const transitionToGuild = tmp(7168);
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
