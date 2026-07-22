// Module ID: 4220
// Function ID: 36846
// Name: SoundshareStatsAggregator
// Dependencies: [513, 511, 513]

// Module 4220 (SoundshareStatsAggregator)
import closure_0 from "items";
import module_511 from "module_511";
import items from "items";

const result = items.fileFinishedImporting("lib/SoundshareStatsAggregator.tsx");

export default () => {
  class SoundshareStatsAggregator {
    constructor() {
      tmp = SoundshareStatsAggregator(this, SoundshareStatsAggregator);
      this._report = { useTier0UpsellContent: null, createRadio: null, permissionOverwriteForRole: null, imageSource: null, deleteEmoji: null, customStatusActivity: null, hasCustomProfileTheme: null, showFullStatus: null, MESSAGES_ITEM_CHANNEL_AVATAR_MARGIN_END: null, handled: null, ho: null, DEVICE_INFO: null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null };
      set = new Set();
      this._pids = set;
      return;
    }
  }
  let closure_0 = SoundshareStatsAggregator;
  let obj = {
    key: "traceEvent",
    value(soundshare_first_session, type) {
      const _report = this._report;
      if ("soundshare_state_transition" === type.type) {
        const _HermesInternal2 = HermesInternal;
        let combined = "soundshare_state_transition_" + [][type.newState] + "_count";
      } else {
        const _HermesInternal = HermesInternal;
        combined = "" + type.type + "_count";
      }
      if (undefined !== _report[combined]) {
        if (_report[combined] < 32767) {
          _report[combined] = _report[combined] + 1;
        }
      } else {
        _report.soundshare_unknown_event_count = _report.soundshare_unknown_event_count + 1;
      }
      if ("pid" in type) {
        if (0 === _report.soundshare_first_pid) {
          _report.soundshare_first_pid = type.pid;
        }
        _report.soundshare_last_pid = type.pid;
        const _pids = this._pids;
        _pids.add(type.pid);
      }
      if (null != soundshare_first_session) {
        if (null == _report.soundshare_first_session) {
          _report.soundshare_first_session = soundshare_first_session;
        }
        _report.soundshare_last_session = soundshare_first_session;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "getStats",
    value() {
      const obj = {};
      const merged = Object.assign(this._report);
      obj["soundshare_unique_pids"] = this._pids.size;
      return obj;
    }
  };
  items[1] = obj;
  return callback(SoundshareStatsAggregator, items);
}();
