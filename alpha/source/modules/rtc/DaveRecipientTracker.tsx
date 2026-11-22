// Module ID: 5758
// Function ID: 5759
// Name: DaveRecipientTracker
// Dependencies: [5662, 2]

// Module 5758 (DaveRecipientTracker)
import TimeUtils from "TimeUtils" /* 5662 */;
import size from "module_2" /* 2 */;

let dependencyMap, set;

let result = size.fileFinishedImporting("modules/rtc/DaveRecipientTracker.tsx");
class DaveRecipientTracker {
  constructor() {
    let TimeStampProducer = arg0;
    if (arg0 === undefined) {
      TimeStampProducer = TimeUtils.TimeStampProducer;
    }
    const merged = Object.assign({ mode: "none", modeSince: 0, summary: null, hasGroup: false, recipients: null, newestRoster: null, resetSinceInstall: false, voiceStateUsers: null, connectedUsers: null, everPresent: null, openLingers: null, prepared: null, prepareSeq: 0, submitted: null, earlyExecutes: null });
    merged[2] = { encryptedDuration: 0, mirrorUncertainCount: 0, lingerCount: 0, lingerTotalDuration: 0, lingerMaxDuration: 0, lingerMaxCause: "displayName" };
    merged[4] = new Set();
    new Set();
    merged[5] = new Set();
    new Set();
    merged[7] = new Set();
    new Set();
    merged[8] = new Set();
    new Set();
    merged[9] = new Set();
    new Set();
    merged[10] = new Map();
    new Map();
    merged[11] = new Map();
    merged[13] = [];
    new Map();
    merged[14] = new Set();
    merged.timestampProducer = TimeStampProducer;
    new Set();
    return merged;
  }
  mlsInit() {
    const self = this;
    this.hasGroup = false;
    if ("encrypted" === this.mode) {
      self.resetSinceInstall = true;
    }
    self.update();
  }
  mlsMessageSubmitted(arg0) {
    const submitted = this.submitted;
    submitted.push(arg0);
  }
  mlsMessageProcessed(arg0, arg1, protocolVersion, items) {
    let submitted;
    let submitted2;
    const self = this;
    ({ submitted, submitted: submitted2 } = this);
    submitted2.splice(0, submitted.indexOf(arg0) + 1);
    const tmp2 = arg1;
    if (tmp2) {
      self.hasGroup = true;
      const _Set = Set;
      const self2 = this;
      const self3 = this;
      self.newestRoster = new Set(items);
      set = new Set(items);
      self.prepare(arg0, protocolVersion);
      if (0 === arg0) {
        self.execute(arg0, false);
      } else {
        const earlyExecutes2 = self.earlyExecutes;
        if (earlyExecutes2.delete(arg0)) {
          self.execute(arg0, true);
        }
      }
      self.update();
    } else {
      const earlyExecutes = self.earlyExecutes;
      earlyExecutes.delete(arg0);
      self.update();
    }
  }
  transitionPrepared(arg0, arg1) {
    const self = this;
    if (0 === arg0) {
      const prepared = self.prepared;
      const item = prepared.forEach((item) => {
        item.stale = true;
        return true;
      });
    }
    self.prepare(arg0, arg1);
    if (0 === arg0) {
      self.execute(arg0, false);
    }
    self.update();
  }
  transitionExecuted(_secureFramesLastExecutedTransitionId) {
    const self = this;
    const prepared = this.prepared;
    if (prepared.has(_secureFramesLastExecutedTransitionId)) {
      self.execute(_secureFramesLastExecutedTransitionId, false);
      self.update();
    } else {
      const submitted = self.submitted;
      if (submitted.includes(_secureFramesLastExecutedTransitionId)) {
        const earlyExecutes = self.earlyExecutes;
        earlyExecutes.add(_secureFramesLastExecutedTransitionId);
      }
    }
  }
  voiceStateUsersChanged(items) {
    const self = this;
    this.voiceStateUsers = new Set(items);
    const voiceStateUsers = this.voiceStateUsers;
    new Set(items);
    const item = voiceStateUsers.forEach((item) => {
      const everPresent = self.everPresent;
      return everPresent.add(item);
    });
    this.update();
  }
  connectedUsersChanged(_userIds) {
    const self = this;
    this.connectedUsers = new Set(_userIds);
    const connectedUsers = this.connectedUsers;
    new Set(_userIds);
    const item = connectedUsers.forEach((item) => {
      const everPresent = self.everPresent;
      return everPresent.add(item);
    });
    this.update();
  }
  finish() {
    const self = this;
    if ("none" !== this.mode) {
      const timestampProducer = self.timestampProducer;
      let closure_0 = timestampProducer.now();
      const openLingers = self.openLingers;
      const item = openLingers.forEach((item, index) => self.closeLinger(index, item, false, closure_0));
      self.setMode("none");
      return self.summary;
    }
  }
  isPresent(item) {
    const voiceStateUsers = this.voiceStateUsers;
    let hasItem = voiceStateUsers.has(item);
    if (!hasItem) {
      const connectedUsers = this.connectedUsers;
      hasItem = connectedUsers.has(item);
    }
    return hasItem;
  }
  prepare(arg0, protocolVersion) {
    let sum;
    const self = this;
    const prepared = this.prepared;
    const value = prepared.get(arg0);
    let tmp2 = null != value;
    if (tmp2) {
      tmp2 = value.uncertain || value.protocolVersion !== protocolVersion;
    }
    const prepared2 = self.prepared;
    const obj = { protocolVersion, prepareSeq: sum, stale: false, uncertain: tmp2 };
    sum = self.prepareSeq + 1;
    self.prepareSeq = sum;
    const result = prepared2.set(arg0, obj);
  }
  execute(arg0, arg1) {
    const self = this;
    let closure_0 = arg0;
    const prepared = this.prepared;
    const value = prepared.get(arg0);
    dependencyMap = value;
    if (null != value) {
      const prepared2 = self.prepared;
      prepared2.delete(arg0);
      if (value.stale) {
        const summary2 = self.summary;
        summary2.mirrorUncertainCount = summary2.mirrorUncertainCount + 1;
      } else {
        let uncertain = arg1;
        const prepared1 = self.prepared;
        const item = prepared1.forEach((prepareSeq) => {
          const tmp = 0 === closure_0 || prepareSeq.prepareSeq < dependencyMap.prepareSeq;
          if (tmp) {
            prepareSeq.stale = true;
          }
        });
        if (!arg1) {
          uncertain = value.uncertain;
        }
        if (!uncertain) {
          uncertain = self.submitted.length > 0;
        }
        if (uncertain) {
          const summary = self.summary;
          summary.mirrorUncertainCount = summary.mirrorUncertainCount + 1;
        }
        if (0 === value.protocolVersion) {
          self.hasGroup = false;
          const _Set2 = Set;
          const self6 = this;
          const self7 = this;
          self.recipients = new Set();
          set = new Set();
          self.setMode("passthrough");
        } else {
          const _Set = Set;
          if (self.hasGroup) {
            const self4 = this;
            const self5 = this;
            const _Set1 = new _Set(self.newestRoster);
            self.recipients = _Set1;
            self.setMode("encrypted");
          } else {
            const self2 = this;
            const self3 = this;
            const _Set3 = new _Set();
            self.recipients = _Set3;
            self.setMode("no_key");
          }
        }
        self.resetSinceInstall = false;
      }
    }
  }
  setMode(mode) {
    const self = this;
    const timestampProducer = this.timestampProducer;
    const nowResult = timestampProducer.now();
    if ("encrypted" === this.mode) {
      const summary = self.summary;
      summary.encryptedDuration = summary.encryptedDuration + (nowResult - self.modeSince);
    }
    self.mode = mode;
    self.modeSince = nowResult;
  }
  update() {
    const self = this;
    const timestampProducer = this.timestampProducer;
    const start = timestampProducer.now();
    let tmp = "encrypted" === this.mode;
    let closure_0 = tmp;
    let openLingers = this.openLingers;
    const item = openLingers.forEach((removed, index) => {
      const tmp = closure_0;
      if (tmp) {
        const recipients = self.recipients;
        if (recipients.has(index)) {
          if (!self.isPresent(index)) {
            if (!removed.removed) {
              const newestRoster = obj.newestRoster;
              removed.removed = !newestRoster.has(index);
            }
            if (!removed.resetDuring) {
              removed.resetDuring = self.resetSinceInstall;
            }
          }
        }
      }
      self.closeLinger(index, removed, self.isPresent(index), start);
    });
    if (tmp) {
      let recipients = this.recipients;
      const item1 = recipients.forEach((item) => {
        let everPresent;
        let newestRoster;
        let isPresentResult = self.isPresent(item);
        if (!isPresentResult) {
          const openLingers = tmp.openLingers;
          isPresentResult = openLingers.has(item);
        }
        if (!isPresentResult) {
          const openLingers2 = tmp.openLingers;
          const obj = { start, wasPresentAtStart: everPresent.has(item), removed: !newestRoster.has(item), resetDuring: self.resetSinceInstall };
          everPresent = tmp.everPresent;
          newestRoster = tmp.newestRoster;
          set = openLingers2.set;
          const result = set(item, obj);
        }
      });
    }
  }
  closeLinger(index, wasPresentAtStart, self, arg3) {
    let str;
    const openLingers = this.openLingers;
    openLingers.delete(index);
    if (wasPresentAtStart.wasPresentAtStart) {
      let str2 = "reset_gap";
      if (!wasPresentAtStart.resetDuring) {
        let str3 = "not_removed";
        if (wasPresentAtStart.removed) {
          str3 = "pending_execute";
        }
        str2 = str3;
      }
      str = str2;
    } else {
      str = "ghost";
      if (self) {
        str = "join_lead";
      }
    }
    const diff = arg3 - wasPresentAtStart.start;
    const summary = this.summary;
    summary.lingerCount = summary.lingerCount + 1;
    summary.lingerTotalDuration = summary.lingerTotalDuration + diff;
    const tmp4 = null == summary.lingerMaxCause || diff > summary.lingerMaxDuration;
    if (tmp4) {
      summary.lingerMaxDuration = diff;
      summary.lingerMaxCause = str;
    }
  }
}
const prototype = DaveRecipientTracker.prototype;

export default DaveRecipientTracker;
