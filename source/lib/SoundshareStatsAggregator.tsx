// Module ID: 4216
// Function ID: 36783
// Name: SoundshareStatsAggregator
// Dependencies: []

// Module 4216 (SoundshareStatsAggregator)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class SoundshareStatsAggregator {
    constructor() {
      tmp = SoundshareStatsAggregator(this, SoundshareStatsAggregator);
      this._report = {};
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
        let combined = "soundshare_state_transition_" + ["<string:1079717068>", "collectGuildAnalyticsMetadata", "DEFAULT_ENABLE_BLUR_KEYBOARD_ON_GESTURE", "isArray", "<string:24330208>", "isArray"][type.newState] + "_count";
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
const result = arg1(dependencyMap[2]).fileFinishedImporting("lib/SoundshareStatsAggregator.tsx");

export default tmp2;
