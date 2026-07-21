// Module ID: 16492
// Function ID: 127381
// Name: promise
// Dependencies: [21]

// Module 16492 (promise)
import { MuteUntilSeconds } from "DISCORD_EPOCH";

const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/headless_tasks/android/MuteAction.tsx");

export default (arg0) => {
  const require = arg0;
  return new Promise((arg0) => {
    callback(closure_2[1]).awaitStorage((self) => {
      let toISOStringResult = null;
      if (-1 !== self.muteTime) {
        let obj = callback(closure_2[2])();
        let HOURS_1 = self.muteTime;
        if (null == HOURS_1) {
          HOURS_1 = closure_3.HOURS_1;
        }
        toISOStringResult = obj.add(HOURS_1, "second").toISOString();
        const addResult = obj.add(HOURS_1, "second");
      }
      obj = { muted: true, mute_config: obj };
      obj = { selected_time_window: closure_3.HOURS_1, end_time: toISOStringResult };
      const result = callback(closure_2[3]).updateChannelOverrideSettings(self.guildId, self.channelId, obj, self(closure_2[4]).NotificationLabels.Muted);
      self(true);
    });
  });
};
